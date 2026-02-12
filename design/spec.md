# 2D Agent World UI Specification

## 1. Visual Style
- **Theme:** Retro Pixel Art Office with a Cyberpunk/Terminal twist.
- **Perspective:** Top-down 2D (like classic RPGs e.g., Stardew Valley, early Zelda) or simple flat 2D.
- **Color Palette:**
  - Background: Muted cool grays and blues (office floor/carpet).
  - UI Overlay: High contrast terminal colors (Dark grey #1a1a1a backgrounds, Neon Green #00ff00 or Amber #ffb000 text).
  - Agents: Distinct bright colors to stand out against the office background.

## 2. Layout
The screen is divided into two main sections:

### A. The Office Floor (Main Canvas) - 75% width
- **Content:** The graphical representation of the agent workspace.
- **Elements:**
  - **Desks/Workstations:** Assigned to specific agents.
  - **Common Areas:** Coffee machine (idling spot), Server rack (deployment tasks), Meeting table (collaboration).
  - **Agents:** Sprites moving between these locations based on their current task.

### B. The Command Log (Sidebar) - 25% width
- **Style:** Scrolling terminal/shell window.
- **Content:** Real-time text logs of what agents are doing.
  - *Example:* `[Echo] Received user request: "Check server status"`
  - *Example:* `[Dash] Sprinting to Server Rack...`
- **Header:** Global system status (e.g., "SYSTEM: ONLINE", "UPTIME: 4h 20m").

## 3. Interaction Model
- **Hover:** Hovering over an agent sprite shows a small tooltip with:
  - Name (e.g., "Echo")
  - Current Action (e.g., "Thinking...")
  - Health/Energy bar (optional, just for flavor).
- **Click:** Clicking an agent opens a **Detail Panel** (overlay or replacing the Log temporarily).
  - **Detail Panel Content:**
    - Full current task description.
    - Last 5 log entries specific to this agent.
    - "Inspect" button to see raw JSON state.
- **Background Click:** Deselects agent, returns sidebar to Global Log view.

## 4. Agents & Roles
Visual distinction for the 6 agents:

1.  **Echo (Coordinator/Router):**
    - *Style:* Headset, clipboard, perhaps hovering slightly.
    - *Color:* White/Silver.
2.  **Pixel (Frontend/UI):**
    - *Style:* Artist beret or holding a paintbrush/tablet.
    - *Color:* Magenta/Pink.
3.  **Dash (Speed/Runner):**
    - *Style:* Sneakers, motion blur lines, lightning bolt icon.
    - *Color:* Yellow/Orange.
4.  **Stack (Backend/DB):**
    - *Style:* Boxy, carrying blocks or server blades. Heavy looking.
    - *Color:* Blue/Indigo.
5.  **Probe (Research/Analysis):**
    - *Style:* Magnifying glass, detective hat, or floating eye drone.
    - *Color:* Purple/Violet.
6.  **Ship (DevOps/Deploy):**
    - *Style:* Hard hat, holding a wrench or shipping container.
    - *Color:* Green/Teal.
