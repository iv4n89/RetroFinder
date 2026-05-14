export const commands: Record<string, string> = {
  HELP: `Available commands:\n  HELP     - show this help\n  DIR      - list files\n  CLS      - clear screen\n  VER      - system version\n  DATE     - current date\n  HISTORY  - computing history\n  LIST     - list computers\n  EXIT     - close terminal`,
  DIR: `Volume in drive C: RETRO_HD\n\nDirectory of C:\\\n\n  SYSTEM/\n  ARCHIVE/\n  MUSEUM/\n  README.TXT          512 bytes\n  HISTORY.DAT       4.096 bytes\n\n  2 file(s)       4.608 bytes\n  2 dir(s)       59.392 bytes free`,
  CLS: "__CLEAR__",
  VER: `RetroOS Version 1.0\nCopyright (c) 1984 RetroComputing Corp.`,
  DATE: "__DATE__",
  HISTORY: `=== HISTORY OF RETROCOMPUTING ===\n\n1945  ENIAC — first electronic computer\n1947  Transistor invented (Bell Labs)\n1971  Intel 4004 — first microprocessor\n1975  Altair 8800 — the big bang of PC\n1977  Apple II, TRS-80, Commodore PET\n1981  IBM PC — the standard is born\n1982  Commodore 64 — best seller ever\n1984  Macintosh — GUI for everyone\n1985  Amiga & Atari ST — 16-bit era\n1993  Pentium — multimedia era`,
  LIST: `=== COMPUTERS IN ARCHIVE ===\n\n  ENIAC (1945)              Mainframe\n  Altair 8800 (1975)        Micro\n  Apple II (1977)           Personal\n  TRS-80 Model I (1977)     Personal\n  IBM PC (1981)             Personal\n  Commodore 64 (1982)       Personal\n  Apple Lisa (1983)         GUI Station\n  Macintosh 128K (1984)     Revolution\n  Amiga 1000 (1985)         Personal\n  Atari ST (1985)           Personal`,
  EXIT: "__EXIT__",
};

export function initTerminal(closeWindow: (id: string) => void) {
  const terminalBody = document.getElementById("terminal-body")!;
  const terminalHistory = document.getElementById("terminal-history")!;
  const terminalDisplay = document.getElementById("terminal-input-display")!;
  const terminalWrapper = document.getElementById("window-terminal-wrapper");
  let input = "";

  function printLine(text: string, isCommand = false) {
    text.split("\n").forEach((line) => {
      const p = document.createElement("p");
      p.className = isCommand ? "flex gap-2 mb-1" : "opacity-70 mb-[2px] whitespace-pre";
      p.textContent = isCommand ? `C:\\> ${line}` : line;
      terminalHistory.appendChild(p);
    });
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function runCommand(cmd: string) {
    const key = cmd.trim().toUpperCase().split(" ")[0];
    printLine(cmd, true);
    if (!key) return;
    const result = commands[key];
    if (!result) {
      printLine(`'${cmd}' is not recognized. Type HELP for available commands.`);
      return;
    }
    if (result === "__CLEAR__") { terminalHistory.innerHTML = ""; return; }
    if (result === "__DATE__") {
      printLine(`Current date: ${new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`);
      return;
    }
    if (result === "__EXIT__") { closeWindow("terminal"); return; }
    printLine(result);
  }

  document.addEventListener("keydown", (e) => {
    if (terminalWrapper?.classList.contains("hidden")) return;
    if (e.key === "Enter") {
      runCommand(input);
      input = "";
      terminalDisplay.textContent = "";
    } else if (e.key === "Backspace") {
      input = input.slice(0, -1);
      terminalDisplay.textContent = input;
    } else if (e.key.length === 1) {
      input += e.key.toUpperCase();
      terminalDisplay.textContent = input;
    }
  });
}
