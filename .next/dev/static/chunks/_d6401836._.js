(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://example.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "dummy-key");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/agents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Agent definitions — Dev Team
__turbopack_context__.s([
    "AGENTS",
    ()=>AGENTS,
    "DESK_POSITIONS",
    ()=>DESK_POSITIONS,
    "ROOMS",
    ()=>ROOMS,
    "ROOM_POSITIONS",
    ()=>ROOM_POSITIONS,
    "STATUS_VISUALS",
    ()=>STATUS_VISUALS
]);
const AGENTS = {
    echo: {
        color: '#4A90D9',
        icon: '⚙️',
        label: 'Echo',
        role: 'Tech Lead',
        avatar: '👨‍💻'
    },
    scout: {
        color: '#27AE60',
        icon: '🎨',
        label: 'Pixel',
        role: 'UI/UX',
        avatar: '🖌️'
    },
    quill: {
        color: '#8E44AD',
        icon: '🖥️',
        label: 'Dash',
        role: 'Frontend',
        avatar: '⚛️'
    },
    sage: {
        color: '#F1C40F',
        icon: '🧠',
        label: 'Stack',
        role: 'Backend',
        avatar: '🔧'
    },
    sentinel: {
        color: '#E74C3C',
        icon: '🔍',
        label: 'Probe',
        role: 'QA/Tester',
        avatar: '🛡️'
    },
    xalt: {
        color: '#E67E22',
        icon: '🚀',
        label: 'Ship',
        role: 'DevOps',
        avatar: '📦'
    }
};
const ROOMS = {
    desk: {
        x: 0.02,
        y: 0.02,
        w: 0.56,
        h: 0.55,
        label: 'DEV FLOOR',
        bg: 'rgba(18,18,42,0.5)',
        border: '#2a2a5a'
    },
    meeting: {
        x: 0.02,
        y: 0.6,
        w: 0.45,
        h: 0.38,
        label: 'STANDUP',
        bg: 'rgba(18,38,42,0.4)',
        border: '#1a5a5a'
    },
    research: {
        x: 0.6,
        y: 0.02,
        w: 0.38,
        h: 0.45,
        label: 'CODE LAB',
        bg: 'rgba(38,18,42,0.4)',
        border: '#5a1a5a'
    },
    board: {
        x: 0.5,
        y: 0.6,
        w: 0.48,
        h: 0.38,
        label: 'SPRINT BOARD',
        bg: 'rgba(18,18,32,0.5)',
        border: '#2a2a4a'
    }
};
const DESK_POSITIONS = {
    echo: {
        x: 0.12,
        y: 0.25
    },
    scout: {
        x: 0.28,
        y: 0.25
    },
    quill: {
        x: 0.44,
        y: 0.25
    },
    sage: {
        x: 0.12,
        y: 0.48
    },
    sentinel: {
        x: 0.28,
        y: 0.48
    },
    xalt: {
        x: 0.44,
        y: 0.48
    }
};
const ROOM_POSITIONS = {
    desk: null,
    meeting: {
        x: 0.24,
        y: 0.78
    },
    research: {
        x: 0.78,
        y: 0.25
    },
    board: {
        x: 0.74,
        y: 0.78
    }
};
const STATUS_VISUALS = {
    idle: {
        glow: '#666666'
    },
    working: {
        glow: '#2ecc71'
    },
    thinking: {
        glow: '#f1c40f'
    },
    talking: {
        glow: '#00bcd4'
    },
    posting: {
        glow: '#e67e22'
    },
    researching: {
        glow: '#9b59b6'
    },
    error: {
        glow: '#e74c3c'
    },
    sleeping: {
        glow: '#555555'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/OfficeCanvas.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OfficeCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/agents.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// ─── Smooth position interpolation store ───
const agentAnimPos = {};
const LERP_SPEED = 0.04;
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function getTargetPos(name, agentData, cw, ch) {
    const room = agentData?.current_room || 'desk';
    if (room === 'desk') {
        const dp = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESK_POSITIONS"][name];
        return dp ? {
            x: dp.x * cw,
            y: dp.y * ch
        } : {
            x: cw * 0.5,
            y: ch * 0.5
        };
    }
    const rp = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_POSITIONS"][room];
    if (!rp) return {
        x: cw * 0.5,
        y: ch * 0.5
    };
    const agents = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGENTS"]);
    const idx = agents.indexOf(name);
    const spread = 38;
    const ox = idx % 3 * spread - spread;
    const oy = Math.floor(idx / 3) * 32;
    return {
        x: rp.x * cw + ox,
        y: rp.y * ch + oy
    };
}
function getSmoothedPos(name, agentData, cw, ch) {
    const target = getTargetPos(name, agentData, cw, ch);
    if (!agentAnimPos[name]) {
        agentAnimPos[name] = {
            x: target.x,
            y: target.y
        };
        return target;
    }
    const cur = agentAnimPos[name];
    cur.x = lerp(cur.x, target.x, LERP_SPEED);
    cur.y = lerp(cur.y, target.y, LERP_SPEED);
    return {
        x: cur.x,
        y: cur.y
    };
}
// ─── Per-agent pixel art definitions ───
// Each agent has unique: skinColor, hairColor, hairStyle, outfit, accessory
const PIXEL_LOOKS = {
    echo: {
        skin: '#FFD5A0',
        hair: '#2244AA',
        hairStyle: 'spiky',
        shirt: '#4A90D9',
        pants: '#2a4a7a',
        accessory: 'headset'
    },
    scout: {
        skin: '#C68642',
        hair: '#1a1a1a',
        hairStyle: 'cap',
        shirt: '#27AE60',
        pants: '#1a5a30',
        accessory: 'pen'
    },
    quill: {
        skin: '#FFDBB4',
        hair: '#8E44AD',
        hairStyle: 'long',
        shirt: '#8E44AD',
        pants: '#5a2a6a',
        accessory: 'glasses'
    },
    sage: {
        skin: '#FFE0BD',
        hair: '#CCCCCC',
        hairStyle: 'bald',
        shirt: '#F1C40F',
        pants: '#8a7a20',
        accessory: 'headset'
    },
    sentinel: {
        skin: '#D4A06A',
        hair: '#E74C3C',
        hairStyle: 'mohawk',
        shirt: '#E74C3C',
        pants: '#801a1a',
        accessory: 'glasses'
    },
    xalt: {
        skin: '#FFD5A0',
        hair: '#E67E22',
        hairStyle: 'short',
        shirt: '#E67E22',
        pants: '#7a4a10',
        accessory: 'phone'
    }
};
// Pixel helper: draw a filled rect (1 pixel unit = 2px on canvas)
const P = 2; // pixel scale
function px(ctx, bx, by, col, pw, ph) {
    ctx.fillStyle = col;
    ctx.fillRect(bx, by, (pw || 1) * P, (ph || 1) * P);
}
function drawPixelAgent(ctx, x, y, name, frame, status) {
    const look = PIXEL_LOOKS[name];
    if (!look) return;
    // offset so x,y is center-bottom of sprite
    const ox = x - 7 * P; // sprite ~14px wide
    const oy = y - 20 * P; // sprite ~20px tall
    // ── Legs (2px wide each, slightly apart) ──
    const walk = status === 'working' || status === 'talking' || status === 'researching' ? Math.floor(frame * 0.08) % 2 : 0;
    px(ctx, ox + 4 * P, oy + 17 * P, look.pants, 2, 3);
    px(ctx, ox + 8 * P, oy + 17 * P, look.pants, 2, 3);
    // Feet
    px(ctx, ox + 3 * P, oy + 20 * P - walk * P, '#333', 3, 1);
    px(ctx, ox + 8 * P, oy + 20 * P + walk * P, '#333', 3, 1);
    // ── Body / Shirt (6px wide, 6px tall) ──
    px(ctx, ox + 3 * P, oy + 11 * P, look.shirt, 8, 6);
    // Shirt highlight
    px(ctx, ox + 4 * P, oy + 12 * P, lighten(look.shirt, 25), 2, 2);
    // ── Arms ──
    px(ctx, ox + 1 * P, oy + 12 * P, look.shirt, 2, 4);
    px(ctx, ox + 11 * P, oy + 12 * P, look.shirt, 2, 4);
    // Hands
    px(ctx, ox + 1 * P, oy + 16 * P, look.skin, 2, 1);
    px(ctx, ox + 11 * P, oy + 16 * P, look.skin, 2, 1);
    // ── Head (8px wide, 8px tall) ──
    px(ctx, ox + 3 * P, oy + 3 * P, look.skin, 8, 8);
    // ── Eyes ──
    const blink = Math.floor(frame * 0.03) % 60 === 0;
    const eyeH = blink || status === 'sleeping' ? 1 : 2;
    px(ctx, ox + 5 * P, oy + 6 * P, '#fff', 2, eyeH);
    px(ctx, ox + 8 * P, oy + 6 * P, '#fff', 2, eyeH);
    if (!blink && status !== 'sleeping') {
        px(ctx, ox + 5 * P, oy + 7 * P, '#111', 1, 1);
        px(ctx, ox + 9 * P, oy + 7 * P, '#111', 1, 1);
    }
    // ── Mouth ──
    if (status === 'talking') {
        const mouthOpen = Math.floor(frame * 0.1) % 2;
        px(ctx, ox + 6 * P, oy + 9 * P, mouthOpen ? '#c0392b' : '#e74c3c', 2, mouthOpen ? 2 : 1);
    } else {
        px(ctx, ox + 6 * P, oy + 9 * P, '#c0392b', 2, 1);
    }
    // ── Hair (unique per agent) ──
    drawHair(ctx, ox, oy, look);
    // ── Accessory (unique per agent) ──
    drawAccessory(ctx, ox, oy, name, look, frame);
}
function drawHair(ctx, ox, oy, look) {
    switch(look.hairStyle){
        case 'spiky':
            // Echo — blue spiky hair
            px(ctx, ox + 3 * P, oy + 1 * P, look.hair, 8, 3);
            px(ctx, ox + 4 * P, oy + 0 * P, look.hair, 2, 1);
            px(ctx, ox + 7 * P, oy + 0 * P, look.hair, 2, 1);
            px(ctx, ox + 5 * P, oy - 1 * P, look.hair, 1, 1);
            px(ctx, ox + 9 * P, oy - 1 * P, look.hair, 1, 1);
            break;
        case 'cap':
            // Scout — dark cap with brim
            px(ctx, ox + 2 * P, oy + 2 * P, '#2c3e50', 10, 2);
            px(ctx, ox + 1 * P, oy + 4 * P, '#2c3e50', 4, 1); // brim
            px(ctx, ox + 3 * P, oy + 1 * P, '#34495e', 8, 1);
            break;
        case 'long':
            // Quill — long purple hair
            px(ctx, ox + 3 * P, oy + 1 * P, look.hair, 8, 3);
            px(ctx, ox + 2 * P, oy + 3 * P, look.hair, 2, 7); // left side
            px(ctx, ox + 10 * P, oy + 3 * P, look.hair, 2, 7); // right side
            px(ctx, ox + 3 * P, oy + 0 * P, look.hair, 8, 1);
            break;
        case 'bald':
            // Sage — bald with a shine
            px(ctx, ox + 3 * P, oy + 2 * P, look.skin, 8, 2);
            px(ctx, ox + 5 * P, oy + 2 * P, lighten(look.skin, 40), 2, 1); // shine
            break;
        case 'mohawk':
            // Sentinel — red mohawk
            px(ctx, ox + 5 * P, oy + 0 * P, look.hair, 4, 4);
            px(ctx, ox + 6 * P, oy - 1 * P, look.hair, 2, 1);
            px(ctx, ox + 6 * P, oy - 2 * P, lighten(look.hair, 30), 2, 1);
            break;
        case 'short':
            // Xalt — short orange messy
            px(ctx, ox + 3 * P, oy + 1 * P, look.hair, 8, 3);
            px(ctx, ox + 2 * P, oy + 2 * P, look.hair, 1, 2);
            px(ctx, ox + 11 * P, oy + 2 * P, look.hair, 1, 2);
            break;
    }
}
function drawAccessory(ctx, ox, oy, name, look, frame) {
    switch(look.accessory){
        case 'headset':
            // Echo — blue headset
            px(ctx, ox + 1 * P, oy + 5 * P, '#3a7bd5', 2, 3);
            px(ctx, ox + 2 * P, oy + 2 * P, '#3a7bd5', 1, 3);
            px(ctx, ox + 11 * P, oy + 2 * P, '#3a7bd5', 1, 3);
            break;
        case 'binoculars':
            // Scout — binoculars around neck
            px(ctx, ox + 5 * P, oy + 11 * P, '#555', 1, 1);
            px(ctx, ox + 8 * P, oy + 11 * P, '#555', 1, 1);
            px(ctx, ox + 5 * P, oy + 10 * P, '#777', 1, 1);
            px(ctx, ox + 8 * P, oy + 10 * P, '#777', 1, 1);
            break;
        case 'pen':
            // Quill — pen in hand
            ctx.save();
            ctx.translate(ox + 12 * P, oy + 14 * P);
            ctx.rotate(0.3);
            px(ctx, 0, 0, '#ddd', 1, 4);
            px(ctx, 0, 4 * P, '#f1c40f', 1, 1);
            ctx.restore();
            break;
        case 'glasses':
            // Sage — round glasses
            ctx.strokeStyle = '#888';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(ox + 6 * P, oy + 7 * P, P * 1.5, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(ox + 9 * P, oy + 7 * P, P * 1.5, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(ox + 7.5 * P, oy + 7 * P);
            ctx.lineTo(ox + 7.5 * P + P, oy + 7 * P);
            ctx.stroke();
            break;
        case 'shield':
            // Sentinel — tiny shield on arm
            px(ctx, ox + 0 * P, oy + 13 * P, '#c0392b', 2, 2);
            px(ctx, ox + 0 * P, oy + 15 * P, '#e74c3c', 1, 1);
            px(ctx, ox + 1 * P, oy + 12 * P, '#f1c40f', 1, 1); // emblem
            break;
        case 'phone':
            // Xalt — phone in hand
            px(ctx, ox + 12 * P, oy + 14 * P, '#333', 2, 3);
            px(ctx, ox + 12 * P, oy + 14 * P, '#4af', 1, 2); // screen glow
            const phonePulse = Math.sin(frame * 0.1) > 0.5;
            if (phonePulse) {
                px(ctx, ox + 13 * P, oy + 13 * P, '#4af', 1, 1); // notification
            }
            break;
    }
}
// ─── Pixel avatar (no circle) ───
function drawAgent(ctx, x, y, name, agentData, frame) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGENTS"][name];
    if (!config) return;
    const status = agentData?.status || 'idle';
    const vis = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_VISUALS"][status] || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_VISUALS"].idle;
    const SPRITE_H = 20 * P; // total sprite height in canvas px
    // Smooth gentle bob
    const bob = status === 'sleeping' ? 0 : Math.sin(frame * 0.03) * 1.5;
    const ay = y + bob;
    // ── Glow behind sprite ──
    const pulse = 0.6 + Math.sin(frame * 0.06) * 0.4;
    ctx.save();
    ctx.shadowColor = vis.glow;
    ctx.shadowBlur = status === 'idle' || status === 'sleeping' ? 6 : 18 * pulse;
    ctx.globalAlpha = status === 'idle' ? 0.25 : 0.6;
    ctx.fillStyle = vis.glow;
    ctx.beginPath();
    ctx.ellipse(x, ay + 2, 14, SPRITE_H / 2 + 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    // ── Draw pixel character directly ──
    drawPixelAgent(ctx, x, ay + SPRITE_H / 2 - 2, name, frame, status);
    // ── Shadow under feet ──
    ctx.save();
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(x, ay + SPRITE_H / 2 + 2, 12, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    // ── Status dot (bottom-right of sprite) ──
    ctx.beginPath();
    ctx.arc(x + 12, ay + SPRITE_H / 2 - 4, 4, 0, Math.PI * 2);
    ctx.fillStyle = vis.glow;
    ctx.fill();
    ctx.strokeStyle = '#0d0d1a';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // ── Name tag (colored pill below) ──
    const label = config.label;
    ctx.font = 'bold 10px monospace';
    const lw = ctx.measureText(label).width;
    const pillW = lw + 10;
    const pillH = 15;
    const pillX = x - pillW / 2;
    const pillY = ay + SPRITE_H / 2 + 6;
    ctx.fillStyle = config.color;
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillW, pillH, 4);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, pillY + pillH / 2);
    // ── Role tag (smaller, below name pill) ──
    const role = config.role;
    ctx.font = '8px monospace';
    const rw = ctx.measureText(role).width;
    const rolePillW = rw + 8;
    const rolePillH = 12;
    const rolePillX = x - rolePillW / 2;
    const rolePillY = pillY + pillH + 2;
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.roundRect(rolePillX, rolePillY, rolePillW, rolePillH, 3);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = config.color;
    ctx.lineWidth = 0.8;
    ctx.stroke();
    ctx.fillStyle = config.color;
    ctx.globalAlpha = 0.9;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '8px monospace';
    ctx.fillText(role, x, rolePillY + rolePillH / 2);
    ctx.globalAlpha = 1;
    // ── Speech bubble ──
    if (agentData?.current_task && status !== 'idle' && status !== 'sleeping') {
        drawBubble(ctx, x, ay - SPRITE_H / 2 - 10, agentData.current_task, config.color);
    }
    // ── Status effects ──
    if (status === 'sleeping') {
        for(let i = 0; i < 3; i++){
            const zz = (frame * 0.015 + i * 0.33) % 1;
            ctx.globalAlpha = 1 - zz;
            ctx.font = `${9 + zz * 8}px monospace`;
            ctx.fillStyle = '#8888bb';
            ctx.textAlign = 'center';
            ctx.fillText('z', x + 14 + zz * 12 + i * 4, ay - 10 - zz * 22);
        }
        ctx.globalAlpha = 1;
    }
    if (status === 'thinking') {
        for(let i = 0; i < 3; i++){
            const p = (frame * 0.06 + i * 0.7) % 3;
            ctx.globalAlpha = p < 1 ? p : p < 2 ? 1 : 3 - p;
            ctx.fillStyle = '#f1c40f';
            ctx.beginPath();
            ctx.arc(x + 20 + i * 7, ay - 6, 3, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }
    if (status === 'working') {
        ctx.save();
        for(let i = 0; i < 4; i++){
            const angle = (frame * 0.03 + i * Math.PI / 2) % (Math.PI * 2);
            const pr = 28 + Math.sin(frame * 0.05 + i) * 3;
            const ppx = x + Math.cos(angle) * pr;
            const ppy = ay + Math.sin(angle) * pr;
            ctx.fillStyle = config.color;
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.arc(ppx, ppy, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
    if (status === 'error') {
        ctx.save();
        const flash = Math.sin(frame * 0.15) > 0;
        if (flash) {
            ctx.beginPath();
            ctx.arc(x, ay, 24, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
            ctx.fill();
        }
        ctx.restore();
    }
}
// ─── Bubble ───
function drawBubble(ctx, x, y, text, borderColor) {
    const t = text.length > 28 ? text.slice(0, 26) + '...' : text;
    ctx.font = '10px monospace';
    const tw = ctx.measureText(t).width;
    const pad = 10;
    const bw = tw + pad * 2;
    const bh = 20;
    const bx = x - bw / 2;
    const by = y - bh;
    ctx.fillStyle = 'rgba(25, 25, 45, 0.92)';
    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, 6);
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // Pointer
    ctx.beginPath();
    ctx.moveTo(x - 5, by + bh);
    ctx.lineTo(x, by + bh + 6);
    ctx.lineTo(x + 5, by + bh);
    ctx.fillStyle = 'rgba(25, 25, 45, 0.92)';
    ctx.fill();
    ctx.fillStyle = '#e0e0e0';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(t, x, by + bh / 2);
}
// ─── Animated dashed connection lines between talking/working agents ───
function drawConnections(ctx, agents, cw, ch, frame) {
    if (!agents || agents.length < 2) return;
    const active = agents.filter((a)=>a.status === 'talking' || a.status === 'working' || a.status === 'researching');
    if (active.length < 2) return;
    ctx.save();
    ctx.strokeStyle = '#00bcd4';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([
        8,
        5
    ]);
    ctx.lineDashOffset = -frame * 0.8; // animated dash flow
    ctx.globalAlpha = 0.55;
    // Connect all active agents to the first one (hub, usually echo)
    const hub = active[0];
    const hubPos = getSmoothedPos(hub.name, hub, cw, ch);
    for(let i = 1; i < active.length; i++){
        const other = active[i];
        const op = getSmoothedPos(other.name, other, cw, ch);
        ctx.beginPath();
        ctx.moveTo(hubPos.x, hubPos.y);
        // Smooth curve bowing downward
        const cpx = (hubPos.x + op.x) / 2;
        const cpy = Math.max(hubPos.y, op.y) + 50;
        ctx.quadraticCurveTo(cpx, cpy, op.x, op.y);
        ctx.stroke();
        // Small moving dot along the curve
        const t = frame * 0.008 % 1;
        const dotX = (1 - t) * (1 - t) * hubPos.x + 2 * (1 - t) * t * cpx + t * t * op.x;
        const dotY = (1 - t) * (1 - t) * hubPos.y + 2 * (1 - t) * t * cpy + t * t * op.y;
        ctx.fillStyle = '#00e5ff';
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.55;
    }
    // Also cross-connect active agents to each other (not just hub)
    if (active.length >= 3) {
        ctx.globalAlpha = 0.25;
        for(let i = 1; i < active.length; i++){
            for(let j = i + 1; j < active.length; j++){
                const a = getSmoothedPos(active[i].name, active[i], cw, ch);
                const b = getSmoothedPos(active[j].name, active[j], cw, ch);
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                const mx = (a.x + b.x) / 2;
                const my = Math.max(a.y, b.y) + 35;
                ctx.quadraticCurveTo(mx, my, b.x, b.y);
                ctx.stroke();
            }
        }
    }
    ctx.restore();
}
// ─── Room zones (polished with icons, gradients, glow) ───
const ROOM_ICONS = {
    desk: '💻',
    meeting: '🗣️',
    research: '🧪',
    social: '💬',
    break: '☕',
    board: '📋'
};
function drawRooms(ctx, cw, ch, frame) {
    Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOMS"]).forEach(([key, room])=>{
        const rx = room.x * cw + 2, ry = room.y * ch + 2;
        const rw = room.w * cw - 4, rh = room.h * ch - 4;
        // ── Room background gradient ──
        const grad = ctx.createLinearGradient(rx, ry, rx, ry + rh);
        grad.addColorStop(0, room.bg);
        grad.addColorStop(1, 'rgba(8,8,18,0.6)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(rx, ry, rw, rh, 8);
        ctx.fill();
        // ── Inner subtle pattern (diagonal lines) ──
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(rx, ry, rw, rh, 8);
        ctx.clip();
        ctx.strokeStyle = 'rgba(255,255,255,0.012)';
        ctx.lineWidth = 1;
        for(let d = -rh; d < rw + rh; d += 16){
            ctx.beginPath();
            ctx.moveTo(rx + d, ry);
            ctx.lineTo(rx + d - rh, ry + rh);
            ctx.stroke();
        }
        ctx.restore();
        // ── Animated border glow ──
        const glowPulse = 0.4 + Math.sin(frame * 0.02 + Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOMS"]).indexOf(key) * 1.2) * 0.2;
        ctx.save();
        ctx.shadowColor = room.border;
        ctx.shadowBlur = 6;
        ctx.globalAlpha = glowPulse;
        ctx.strokeStyle = room.border;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(rx, ry, rw, rh, 8);
        ctx.stroke();
        ctx.restore();
        // ── Corner accents (small L shapes) ──
        ctx.strokeStyle = room.border;
        ctx.globalAlpha = 0.5;
        ctx.lineWidth = 1.5;
        const cLen = 10;
        // Top-left
        ctx.beginPath();
        ctx.moveTo(rx + cLen, ry);
        ctx.lineTo(rx, ry);
        ctx.lineTo(rx, ry + cLen);
        ctx.stroke();
        // Top-right
        ctx.beginPath();
        ctx.moveTo(rx + rw - cLen, ry);
        ctx.lineTo(rx + rw, ry);
        ctx.lineTo(rx + rw, ry + cLen);
        ctx.stroke();
        // Bottom-left
        ctx.beginPath();
        ctx.moveTo(rx + cLen, ry + rh);
        ctx.lineTo(rx, ry + rh);
        ctx.lineTo(rx, ry + rh - cLen);
        ctx.stroke();
        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(rx + rw - cLen, ry + rh);
        ctx.lineTo(rx + rw, ry + rh);
        ctx.lineTo(rx + rw, ry + rh - cLen);
        ctx.stroke();
        ctx.globalAlpha = 1;
        // ── Room icon (top-left) ──
        const icon = ROOM_ICONS[key] || '';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(icon, rx + 7, ry + 15);
        // ── Room label (top, next to icon) ──
        ctx.font = 'bold 8px monospace';
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(room.label, rx + 22, ry + 15);
        // ── Bottom status line ──
        ctx.fillStyle = room.border;
        ctx.globalAlpha = 0.3;
        ctx.fillRect(rx + 8, ry + rh - 3, rw - 16, 1);
        ctx.globalAlpha = 1;
    });
}
// ─── Furniture (detailed desks, monitors, decorations) ───
function drawFurniture(ctx, cw, ch, frame) {
    // ── Individual desks with monitors ──
    Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESK_POSITIONS"]).forEach(([name, dp])=>{
        const dx = dp.x * cw, dy = dp.y * ch;
        const config = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGENTS"][name];
        // Desk surface with wood-like gradient
        const deskGrad = ctx.createLinearGradient(dx - 24, dy + 6, dx + 24, dy + 6);
        deskGrad.addColorStop(0, '#2a2a48');
        deskGrad.addColorStop(0.5, '#323252');
        deskGrad.addColorStop(1, '#2a2a48');
        ctx.fillStyle = deskGrad;
        ctx.beginPath();
        ctx.roundRect(dx - 24, dy + 6, 48, 12, 3);
        ctx.fill();
        // Desk edge highlight
        ctx.fillStyle = 'rgba(255,255,255,0.05)';
        ctx.fillRect(dx - 22, dy + 6, 44, 1);
        // Desk legs
        ctx.fillStyle = '#1e1e38';
        ctx.fillRect(dx - 20, dy + 18, 3, 6);
        ctx.fillRect(dx + 17, dy + 18, 3, 6);
        // Monitor frame
        ctx.fillStyle = '#111128';
        ctx.beginPath();
        ctx.roundRect(dx - 16, dy - 24, 32, 24, 4);
        ctx.fill();
        // Screen content (animated scan line)
        const screenGrad = ctx.createLinearGradient(dx - 13, dy - 21, dx - 13, dy - 4);
        screenGrad.addColorStop(0, darken(config.color, 80));
        screenGrad.addColorStop(1, 'rgba(0,0,0,0.9)');
        ctx.fillStyle = screenGrad;
        ctx.fillRect(dx - 13, dy - 21, 26, 17);
        // Screen text lines (tiny code-like)
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = config.color;
        for(let li = 0; li < 4; li++){
            const lw = 8 + (name.charCodeAt(0) * 7 + li * 13) % 12;
            ctx.fillRect(dx - 10, dy - 19 + li * 4, lw, 1.5);
        }
        ctx.globalAlpha = 1;
        // Scan line
        const scanY = dy - 21 + (frame * 0.5 + Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGENTS"]).indexOf(name) * 30) % 17;
        ctx.fillStyle = 'rgba(255,255,255,0.04)';
        ctx.fillRect(dx - 13, scanY, 26, 2);
        // Monitor border glow
        ctx.strokeStyle = config.color;
        ctx.globalAlpha = 0.2;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(dx - 16, dy - 24, 32, 24, 4);
        ctx.stroke();
        ctx.globalAlpha = 1;
        // Monitor stand
        ctx.fillStyle = '#2a2a48';
        ctx.fillRect(dx - 2, dy, 4, 6);
        ctx.fillRect(dx - 5, dy + 4, 10, 2);
        // Power LED on monitor
        ctx.fillStyle = config.color;
        ctx.globalAlpha = 0.6 + Math.sin(frame * 0.04) * 0.3;
        ctx.beginPath();
        ctx.arc(dx + 13, dy - 3, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        // Chair (ergonomic style)
        ctx.fillStyle = '#1a1a30';
        ctx.beginPath();
        ctx.ellipse(dx, dy + 28, 10, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        // Chair back
        ctx.fillStyle = '#222240';
        ctx.beginPath();
        ctx.roundRect(dx - 8, dy + 18, 16, 8, 3);
        ctx.fill();
        // Chair highlight
        ctx.fillStyle = 'rgba(255,255,255,0.03)';
        ctx.fillRect(dx - 6, dy + 19, 12, 2);
    });
    // ── Meeting table (detailed) ──
    const mt = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_POSITIONS"].meeting;
    if (mt) {
        const mx = mt.x * cw, my = mt.y * ch;
        // Table shadow
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.ellipse(mx, my + 14, 44, 18, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        // Table surface
        const tGrad = ctx.createRadialGradient(mx, my + 10, 5, mx, my + 10, 42);
        tGrad.addColorStop(0, '#3a4a5a');
        tGrad.addColorStop(1, '#2a3a4a');
        ctx.fillStyle = tGrad;
        ctx.beginPath();
        ctx.ellipse(mx, my + 10, 42, 18, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#4a6a7a';
        ctx.lineWidth = 1;
        ctx.stroke();
        // Coffee cups on table
        ctx.fillStyle = '#ddd';
        ctx.beginPath();
        ctx.arc(mx - 16, my + 6, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#6b4226';
        ctx.beginPath();
        ctx.arc(mx - 16, my + 6, 2, 0, Math.PI * 2);
        ctx.fill();
        // Papers
        ctx.fillStyle = '#e8e8d0';
        ctx.globalAlpha = 0.15;
        ctx.fillRect(mx + 8, my + 4, 10, 7);
        ctx.fillRect(mx + 10, my + 2, 10, 7);
        ctx.globalAlpha = 1;
    }
    // ── Break room couch (comfy) ──
    const br = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_POSITIONS"].break;
    if (br) {
        const bx = br.x * cw, by = br.y * ch;
        // Couch shadow
        ctx.save();
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.roundRect(bx - 30, by + 12, 60, 8, 4);
        ctx.fill();
        ctx.restore();
        // Couch base
        ctx.fillStyle = '#4a3040';
        ctx.beginPath();
        ctx.roundRect(bx - 28, by + 2, 56, 14, 5);
        ctx.fill();
        // Couch back
        ctx.fillStyle = '#553848';
        ctx.beginPath();
        ctx.roundRect(bx - 28, by - 8, 56, 12, 5);
        ctx.fill();
        // Cushion lines
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(bx - 9, by + 3);
        ctx.lineTo(bx - 9, by + 14);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(bx + 9, by + 3);
        ctx.lineTo(bx + 9, by + 14);
        ctx.stroke();
        // Pillow
        ctx.fillStyle = '#6a4a5a';
        ctx.beginPath();
        ctx.roundRect(bx + 16, by - 4, 10, 8, 3);
        ctx.fill();
    }
    // ── Research station extras ──
    const rs = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_POSITIONS"].research;
    if (rs) {
        const rrx = rs.x * cw, rry = rs.y * ch;
        // Bookshelf
        ctx.fillStyle = '#2a2a1a';
        ctx.fillRect(rrx + 28, rry - 30, 28, 45);
        ctx.strokeStyle = '#3a3a2a';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(rrx + 28, rry - 30, 28, 45);
        // Shelf dividers
        for(let si = 0; si < 3; si++){
            ctx.fillStyle = '#3a3a2a';
            ctx.fillRect(rrx + 29, rry - 18 + si * 14, 26, 1);
        }
        // Books (colored spines)
        const bookColors = [
            '#e74c3c',
            '#3498db',
            '#2ecc71',
            '#f1c40f',
            '#9b59b6',
            '#e67e22'
        ];
        for(let si = 0; si < 3; si++){
            for(let bi = 0; bi < 4; bi++){
                const bci = (si * 4 + bi) % bookColors.length;
                ctx.fillStyle = bookColors[bci];
                ctx.globalAlpha = 0.4;
                ctx.fillRect(rrx + 31 + bi * 6, rry - 28 + si * 14, 4, 12);
            }
        }
        ctx.globalAlpha = 1;
    }
    // ── Social corner extras ──
    const sc = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_POSITIONS"].social;
    if (sc) {
        const sx = sc.x * cw, sy = sc.y * ch;
        // Whiteboard
        ctx.fillStyle = '#f0f0e8';
        ctx.globalAlpha = 0.08;
        ctx.fillRect(sx - 30, sy - 24, 40, 26);
        ctx.globalAlpha = 1;
        ctx.strokeStyle = '#444';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(sx - 30, sy - 24, 40, 26);
        // Sticky notes on whiteboard
        const stickyColors = [
            '#ffeb3b',
            '#ff9800',
            '#4caf50',
            '#2196f3'
        ];
        for(let si = 0; si < 4; si++){
            ctx.fillStyle = stickyColors[si];
            ctx.globalAlpha = 0.12;
            ctx.fillRect(sx - 26 + si % 2 * 18, sy - 20 + Math.floor(si / 2) * 12, 8, 8);
        }
        ctx.globalAlpha = 1;
    }
    // ── Board room extras ──
    const bd = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_POSITIONS"].board;
    if (bd) {
        const bdx = bd.x * cw, bdy = bd.y * ch;
        // Kanban board on wall
        ctx.fillStyle = 'rgba(20,20,40,0.5)';
        ctx.beginPath();
        ctx.roundRect(bdx - 30, bdy - 14, 60, 20, 3);
        ctx.fill();
        ctx.strokeStyle = '#334';
        ctx.lineWidth = 0.5;
        ctx.stroke();
        // Columns
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.beginPath();
        ctx.moveTo(bdx - 10, bdy - 12);
        ctx.lineTo(bdx - 10, bdy + 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(bdx + 10, bdy - 12);
        ctx.lineTo(bdx + 10, bdy + 4);
        ctx.stroke();
        // Cards
        const cardColors = [
            '#2ecc71',
            '#f1c40f',
            '#e74c3c'
        ];
        for(let ci = 0; ci < 3; ci++){
            ctx.fillStyle = cardColors[ci];
            ctx.globalAlpha = 0.2;
            ctx.fillRect(bdx - 26 + ci * 20, bdy - 10, 14, 4);
            ctx.fillRect(bdx - 26 + ci * 20, bdy - 4, 14, 4);
        }
        ctx.globalAlpha = 1;
    }
    // ── Potted plant decorations ──
    drawPlant(ctx, 0.54 * cw, 0.12 * ch);
    drawPlant(ctx, 0.57 * cw, 0.52 * ch);
}
function drawPlant(ctx, x, y) {
    // Pot
    ctx.fillStyle = '#6b4226';
    ctx.beginPath();
    ctx.roundRect(x - 5, y, 10, 9, 2);
    ctx.fill();
    // Soil
    ctx.fillStyle = '#3a2a1a';
    ctx.fillRect(x - 4, y, 8, 3);
    // Leaves
    ctx.fillStyle = '#27ae60';
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.ellipse(x, y - 4, 6, 4, -0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 2, y - 7, 5, 3, 0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x - 3, y - 6, 4, 3, -0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
}
// ─── Floor accent lines & glowing separators ───
function drawFloorAccents(ctx, cw, ch, frame) {
    // ── Glowing separator lines ──
    // Horizontal separator at 57%
    const hGrad = ctx.createLinearGradient(0, ch * 0.57, cw * 0.58, ch * 0.57);
    hGrad.addColorStop(0, 'rgba(0,188,212,0)');
    hGrad.addColorStop(0.3, 'rgba(0,188,212,0.08)');
    hGrad.addColorStop(0.7, 'rgba(0,188,212,0.08)');
    hGrad.addColorStop(1, 'rgba(0,188,212,0)');
    ctx.fillStyle = hGrad;
    ctx.fillRect(0, ch * 0.57 - 0.5, cw * 0.58, 1);
    // Vertical separator at 58%
    const vGrad = ctx.createLinearGradient(cw * 0.58, 0, cw * 0.58, ch);
    vGrad.addColorStop(0, 'rgba(0,188,212,0)');
    vGrad.addColorStop(0.2, 'rgba(0,188,212,0.06)');
    vGrad.addColorStop(0.8, 'rgba(0,188,212,0.06)');
    vGrad.addColorStop(1, 'rgba(0,188,212,0)');
    ctx.fillStyle = vGrad;
    ctx.fillRect(cw * 0.58 - 0.5, 0, 1, ch);
    // ── Moving dot on separators ──
    const dotPos = frame * 0.003 % 1;
    ctx.fillStyle = '#00bcd4';
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.arc(dotPos * cw * 0.58, ch * 0.57, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cw * 0.58, dotPos * ch, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
}
// ─── Ambient floating particles ───
const PARTICLES = [];
for(let i = 0; i < 20; i++){
    PARTICLES.push({
        x: Math.random(),
        y: Math.random(),
        speed: 0.0002 + Math.random() * 0.0004,
        size: 0.5 + Math.random() * 1.5,
        alpha: 0.05 + Math.random() * 0.1,
        drift: (Math.random() - 0.5) * 0.0003
    });
}
function drawParticles(ctx, cw, ch, frame) {
    PARTICLES.forEach((p)=>{
        p.y -= p.speed;
        p.x += p.drift + Math.sin(frame * 0.01 + p.x * 10) * 0.0001;
        if (p.y < -0.02) {
            p.y = 1.02;
            p.x = Math.random();
        }
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        ctx.fillStyle = '#00bcd4';
        ctx.globalAlpha = p.alpha * (0.5 + Math.sin(frame * 0.03 + p.x * 20) * 0.5);
        ctx.beginPath();
        ctx.arc(p.x * cw, p.y * ch, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.globalAlpha = 1;
}
// ─── HQ title watermark ───
function drawWatermark(ctx, cw, ch) {
    ctx.save();
    ctx.font = 'bold 48px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255,255,255,0.012)';
    ctx.fillText('DEV HQ', cw / 2, ch / 2);
    ctx.restore();
}
// ─── Helper: lighten a hex color ───
function lighten(hex, amt) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    r = Math.min(255, r + amt);
    g = Math.min(255, g + amt);
    b = Math.min(255, b + amt);
    return `rgb(${r},${g},${b})`;
}
function darken(hex, amt) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    r = Math.max(0, r - amt);
    g = Math.max(0, g - amt);
    b = Math.max(0, b - amt);
    return `rgb(${r},${g},${b})`;
}
function OfficeCanvas({ agents }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OfficeCanvas.useCallback[draw]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const cw = canvas.width;
            const ch = canvas.height;
            frameRef.current++;
            const frame = frameRef.current;
            // Background with radial vignette
            const bgGrad = ctx.createRadialGradient(cw / 2, ch / 2, 100, cw / 2, ch / 2, cw * 0.7);
            bgGrad.addColorStop(0, '#101020');
            bgGrad.addColorStop(1, '#080810');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, cw, ch);
            // Subtle dot grid (instead of lines)
            ctx.fillStyle = 'rgba(255,255,255,0.03)';
            for(let gx = 14; gx < cw; gx += 28){
                for(let gy = 14; gy < ch; gy += 28){
                    ctx.beginPath();
                    ctx.arc(gx, gy, 0.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            drawWatermark(ctx, cw, ch);
            drawFloorAccents(ctx, cw, ch, frame);
            drawRooms(ctx, cw, ch, frame);
            drawFurniture(ctx, cw, ch, frame);
            drawParticles(ctx, cw, ch, frame);
            // Connection lines (before agents so lines go behind)
            drawConnections(ctx, agents, cw, ch, frame);
            // Agent avatars
            if (agents) {
                agents.forEach({
                    "OfficeCanvas.useCallback[draw]": (agentData)=>{
                        const pos = getSmoothedPos(agentData.name, agentData, cw, ch);
                        drawAgent(ctx, pos.x, pos.y, agentData.name, agentData, frame);
                    }
                }["OfficeCanvas.useCallback[draw]"]);
            }
            animRef.current = requestAnimationFrame(draw);
        }
    }["OfficeCanvas.useCallback[draw]"], [
        agents
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OfficeCanvas.useEffect": ()=>{
            const canvas_0 = canvasRef.current;
            if (!canvas_0) return;
            const resize = {
                "OfficeCanvas.useEffect.resize": ()=>{
                    const parent = canvas_0.parentElement;
                    const w = parent ? parent.clientWidth : 900;
                    const h = Math.round(w * (480 / 900));
                    canvas_0.width = Math.max(w, 280);
                    canvas_0.height = Math.max(h, 150);
                }
            }["OfficeCanvas.useEffect.resize"];
            resize();
            const ro = new ResizeObserver(resize);
            if (canvas_0.parentElement) ro.observe(canvas_0.parentElement);
            animRef.current = requestAnimationFrame(draw);
            return ({
                "OfficeCanvas.useEffect": ()=>{
                    if (animRef.current) cancelAnimationFrame(animRef.current);
                    ro.disconnect();
                }
            })["OfficeCanvas.useEffect"];
        }
    }["OfficeCanvas.useEffect"], [
        draw
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        style: {
            width: '100%',
            height: 'auto',
            borderRadius: 8,
            border: '1px solid #1a1a2e',
            display: 'block'
        }
    }, void 0, false, {
        fileName: "[project]/components/OfficeCanvas.jsx",
        lineNumber: 1059,
        columnNumber: 10
    }, this);
}
_s(OfficeCanvas, "H8OPSdI9TkJF1RHQnMqiKI8DaBc=");
_c = OfficeCanvas;
var _c;
__turbopack_context__.k.register(_c, "OfficeCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AgentPanel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgentPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/agents.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const statusEmoji = {
    idle: '💤',
    working: '🟢',
    thinking: '🤔',
    talking: '💬',
    posting: '📤',
    researching: '🔎',
    error: '⚠️',
    sleeping: '😴'
};
function AgentPanel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "640cb6ab754f6fe46249a798bddaa4b823a40e7f3f93e8748873cd7ea11f7e51") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "640cb6ab754f6fe46249a798bddaa4b823a40e7f3f93e8748873cd7ea11f7e51";
    }
    const { agents } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            style: styles.title,
            children: "AGENTS"
        }, void 0, false, {
            fileName: "[project]/components/AgentPanel.jsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== agents) {
        t2 = agents || [];
        $[2] = agents;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = t2.map(_AgentPanelAnonymous);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.panel,
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "agent-list",
                    children: t3
                }, void 0, false, {
                    fileName: "[project]/components/AgentPanel.jsx",
                    lineNumber: 52,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AgentPanel.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_c = AgentPanel;
function _AgentPanelAnonymous(a) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGENTS"][a.name] || {};
    const isWorking = [
        "working",
        "busy"
    ].includes(a.status?.toLowerCase());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `agent-card ${isWorking ? "working-glow" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "agent-card-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            ...styles.dot,
                            backgroundColor: config.color
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/AgentPanel.jsx",
                        lineNumber: 63,
                        columnNumber: 123
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: styles.icon,
                        children: config.icon
                    }, void 0, false, {
                        fileName: "[project]/components/AgentPanel.jsx",
                        lineNumber: 66,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: styles.name,
                        children: config.label
                    }, void 0, false, {
                        fileName: "[project]/components/AgentPanel.jsx",
                        lineNumber: 66,
                        columnNumber: 58
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "agent-role",
                        style: {
                            color: config.color
                        },
                        children: config.role
                    }, void 0, false, {
                        fileName: "[project]/components/AgentPanel.jsx",
                        lineNumber: 66,
                        columnNumber: 105
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AgentPanel.jsx",
                lineNumber: 63,
                columnNumber: 88
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "agent-card-status",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.status,
                    children: [
                        statusEmoji[a.status] || "\u26AA",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "status-text",
                            children: a.status
                        }, void 0, false, {
                            fileName: "[project]/components/AgentPanel.jsx",
                            lineNumber: 68,
                            columnNumber: 135
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AgentPanel.jsx",
                    lineNumber: 68,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AgentPanel.jsx",
                lineNumber: 68,
                columnNumber: 36
            }, this),
            a.current_task && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "agent-card-task",
                children: [
                    '"',
                    a.current_task.slice(0, 40),
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/components/AgentPanel.jsx",
                lineNumber: 68,
                columnNumber: 214
            }, this)
        ]
    }, a.name, true, {
        fileName: "[project]/components/AgentPanel.jsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
const styles = {
    panel: {
        background: '#111',
        borderRadius: 8,
        padding: 10,
        border: '1px solid #333',
        boxSizing: 'border-box',
        overflow: 'hidden'
    },
    title: {
        color: '#888',
        fontSize: 11,
        letterSpacing: 2,
        margin: '0 0 8px',
        fontFamily: 'monospace'
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        flexShrink: 0
    },
    icon: {
        fontSize: 12
    },
    name: {
        color: '#fff',
        fontSize: 11,
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },
    status: {
        color: '#aaa',
        fontSize: 10,
        fontFamily: 'monospace'
    }
};
var _c;
__turbopack_context__.k.register(_c, "AgentPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EventFeed.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/agents.js [app-client] (ecmascript)");
'use client';
;
;
;
function EventFeed(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "7fe11a4496214f36b12e7df6c98e39970a2d0ea751d4e07fec3434a66866ef1f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7fe11a4496214f36b12e7df6c98e39970a2d0ea751d4e07fec3434a66866ef1f";
    }
    const { events } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            style: styles.title,
            children: "EVENTS"
        }, void 0, false, {
            fileName: "[project]/components/EventFeed.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== events) {
        t2 = (events || []).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.empty,
            children: "Waiting for events..."
        }, void 0, false, {
            fileName: "[project]/components/EventFeed.jsx",
            lineNumber: 25,
            columnNumber: 41
        }, this);
        $[2] = events;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== events) {
        t3 = (events || []).slice(-30).reverse().map(_EventFeedAnonymous);
        $[4] = events;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.panel,
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.list,
                    children: [
                        t2,
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EventFeed.jsx",
                    lineNumber: 41,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/EventFeed.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c = EventFeed;
function _EventFeedAnonymous(e) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGENTS"][e.agent] || {};
    const time = new Date(e.created_at).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.row,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: styles.time,
                children: time
            }, void 0, false, {
                fileName: "[project]/components/EventFeed.jsx",
                lineNumber: 57,
                columnNumber: 45
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: config.color || "#888"
                },
                children: config.icon || "?"
            }, void 0, false, {
                fileName: "[project]/components/EventFeed.jsx",
                lineNumber: 57,
                columnNumber: 84
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: styles.agent,
                children: config.label || e.agent
            }, void 0, false, {
                fileName: "[project]/components/EventFeed.jsx",
                lineNumber: 59,
                columnNumber: 35
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: styles.text,
                children: e.title || e.detail
            }, void 0, false, {
                fileName: "[project]/components/EventFeed.jsx",
                lineNumber: 59,
                columnNumber: 94
            }, this)
        ]
    }, e.id, true, {
        fileName: "[project]/components/EventFeed.jsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
const styles = {
    panel: {
        background: '#111',
        borderRadius: 8,
        padding: 12,
        border: '1px solid #333',
        flex: 1,
        minWidth: 0
    },
    title: {
        color: '#888',
        fontSize: 12,
        letterSpacing: 2,
        margin: '0 0 10px',
        fontFamily: 'monospace'
    },
    list: {
        maxHeight: 350,
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    empty: {
        color: '#555',
        fontSize: 12,
        fontFamily: 'monospace',
        fontStyle: 'italic',
        padding: 10
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 0',
        borderBottom: '1px solid #1a1a1a',
        fontSize: 12,
        fontFamily: 'monospace'
    },
    time: {
        color: '#555',
        fontSize: 10,
        minWidth: 42,
        flexShrink: 0
    },
    agent: {
        color: '#ccc',
        fontWeight: 'bold',
        minWidth: 60,
        flexShrink: 0
    },
    text: {
        color: '#aaa',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
};
var _c;
__turbopack_context__.k.register(_c, "EventFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ChatLog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/agents.js [app-client] (ecmascript)");
'use client';
;
;
;
function ChatLog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "06056ccea1fcb3656495f3a477ca13fbaa0f8a1f6a37127db8d05da3b948632f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06056ccea1fcb3656495f3a477ca13fbaa0f8a1f6a37127db8d05da3b948632f";
    }
    const { messages } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            style: styles.title,
            children: "GATEWAY LOG"
        }, void 0, false, {
            fileName: "[project]/components/ChatLog.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== messages) {
        t2 = (messages || []).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.empty,
            children: "No gateway messages yet..."
        }, void 0, false, {
            fileName: "[project]/components/ChatLog.jsx",
            lineNumber: 25,
            columnNumber: 43
        }, this);
        $[2] = messages;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== messages) {
        t3 = (messages || []).slice(-20).reverse().map(_ChatLogAnonymous);
        $[4] = messages;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.panel,
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.list,
                    children: [
                        t2,
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatLog.jsx",
                    lineNumber: 41,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatLog.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c = ChatLog;
function _ChatLogAnonymous(m) {
    const isUser = m.from_agent === "user";
    const agentKey = isUser ? m.to_agent : m.from_agent;
    const agentInfo = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGENTS"][agentKey] || {};
    const direction = isUser ? "\u25B8" : "\u25C2";
    const label = isUser ? "User" : agentInfo.label || agentKey;
    const color = isUser ? "#60a5fa" : agentInfo.color || "#888";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.row,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    ...styles.dir,
                    color: isUser ? "#60a5fa" : "#22c55e"
                },
                children: direction
            }, void 0, false, {
                fileName: "[project]/components/ChatLog.jsx",
                lineNumber: 57,
                columnNumber: 45
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color,
                    fontWeight: 600,
                    fontSize: 11,
                    minWidth: 40
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ChatLog.jsx",
                lineNumber: 60,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: styles.msg,
                children: (m.message || "").slice(0, 150)
            }, void 0, false, {
                fileName: "[project]/components/ChatLog.jsx",
                lineNumber: 65,
                columnNumber: 22
            }, this)
        ]
    }, m.id, true, {
        fileName: "[project]/components/ChatLog.jsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
const styles = {
    panel: {
        background: '#111',
        borderRadius: 8,
        padding: 12,
        border: '1px solid #333',
        flex: 1,
        minWidth: 0
    },
    title: {
        color: '#888',
        fontSize: 12,
        letterSpacing: 2,
        margin: '0 0 10px',
        fontFamily: 'monospace'
    },
    list: {
        maxHeight: 200,
        overflowY: 'auto'
    },
    empty: {
        color: '#555',
        fontSize: 12,
        fontFamily: 'monospace',
        fontStyle: 'italic',
        padding: 10
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        padding: '4px 0',
        borderBottom: '1px solid #1a1a1a',
        fontSize: 12,
        fontFamily: 'monospace',
        flexWrap: 'wrap'
    },
    dir: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    msg: {
        color: '#aaa',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        flex: 1
    }
};
var _c;
__turbopack_context__.k.register(_c, "ChatLog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MissionBoard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MissionBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function MissionBoard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "06d710a5b7662719aec660bee8bb1b738982d59c1a82bcde18075675f3a2267c") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06d710a5b7662719aec660bee8bb1b738982d59c1a82bcde18075675f3a2267c";
    }
    const [health, setHealth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uptime, setUptime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "MissionBoard[fetchHealth]": async ()=>{
                try {
                    const res = await fetch("/api/gateway-bridge");
                    const data = await res.json();
                    setHealth(data);
                } catch  {
                    setHealth(null);
                }
            }
        })["MissionBoard[fetchHealth]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const fetchHealth = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "MissionBoard[useEffect()]": ()=>{
                fetchHealth();
                const iv = setInterval(fetchHealth, 15000);
                return ()=>clearInterval(iv);
            }
        })["MissionBoard[useEffect()]"];
        t2 = [
            fetchHealth
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "MissionBoard[useEffect()]": ()=>{
                const iv_0 = setInterval({
                    "MissionBoard[useEffect() > setInterval()]": ()=>setUptime(_MissionBoardUseEffectSetIntervalSetUptime)
                }["MissionBoard[useEffect() > setInterval()]"], 1000);
                return ()=>clearInterval(iv_0);
            }
        })["MissionBoard[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const formatUptime = _MissionBoardFormatUptime;
    const isOnline = !!health;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            style: styles.title,
            children: "SYSTEM HEALTH"
        }, void 0, false, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = isOnline ? "#2ecc71" : "#e74c3c";
    let t7;
    if ($[7] !== t6) {
        t7 = {
            color: t6,
            fontSize: 18
        };
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = isOnline ? "\u25CF" : "\u25CB";
    let t9;
    if ($[9] !== t7 || $[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[9] = t7;
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = isOnline ? "#2ecc71" : "#e74c3c";
    let t11;
    if ($[12] !== t10) {
        t11 = {
            color: t10,
            fontSize: 13,
            fontFamily: "monospace",
            fontWeight: "bold"
        };
        $[12] = t10;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    const t12 = isOnline ? "CONNECTED" : "OFFLINE";
    let t13;
    if ($[14] !== t11 || $[15] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t11,
            children: t12
        }, void 0, false, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[14] = t11;
        $[15] = t12;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                color: "#555",
                fontSize: 10,
                fontFamily: "monospace"
            },
            children: "AWS EC2 Gateway"
        }, void 0, false, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[18] = t13;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== t15 || $[21] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.statusRow,
            children: [
                t9,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[20] = t15;
        $[21] = t9;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.metric,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.metricLabel,
                    children: "Gateway"
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 155,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.metricValue,
                    children: "ws://16.171.175.97"
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 155,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.metric,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.metricLabel,
                    children: "Model"
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 162,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        ...styles.metricValue,
                        color: "#9b59b6"
                    },
                    children: "gemini-3-pro"
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 162,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: styles.metricLabel,
            children: "Session"
        }, void 0, false, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    const t20 = formatUptime(uptime);
    let t21;
    if ($[26] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.metric,
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.metricValue,
                    children: t20
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 180,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[26] = t20;
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: styles.metricLabel,
            children: "Bridge"
        }, void 0, false, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    const t23 = isOnline ? "#2ecc71" : "#e74c3c";
    let t24;
    if ($[29] !== t23) {
        t24 = {
            ...styles.metricValue,
            color: t23
        };
        $[29] = t23;
        $[30] = t24;
    } else {
        t24 = $[30];
    }
    const t25 = isOnline ? "Active" : "Down";
    let t26;
    if ($[31] !== t24 || $[32] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.metric,
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: t24,
                    children: t25
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 208,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[31] = t24;
        $[32] = t25;
        $[33] = t26;
    } else {
        t26 = $[33];
    }
    let t27;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.metric,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.metricLabel,
                    children: "Discord"
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 217,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        ...styles.metricValue,
                        color: "#7289da"
                    },
                    children: "echo⚡"
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 217,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    let t28;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.metric,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.metricLabel,
                    children: "Agents"
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 227,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.metricValue,
                    children: "6 registered"
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 227,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[35] = t28;
    } else {
        t28 = $[35];
    }
    let t29;
    if ($[36] !== t21 || $[37] !== t26) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.metrics,
            children: [
                t17,
                t18,
                t21,
                t26,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[36] = t21;
        $[37] = t26;
        $[38] = t29;
    } else {
        t29 = $[38];
    }
    let t30;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.liveBar,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.liveDot
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 243,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "#555",
                        fontSize: 10,
                        fontFamily: "monospace"
                    },
                    children: "Real-time monitoring active"
                }, void 0, false, {
                    fileName: "[project]/components/MissionBoard.jsx",
                    lineNumber: 243,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[39] = t30;
    } else {
        t30 = $[39];
    }
    let t31;
    if ($[40] !== t16 || $[41] !== t29) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.panel,
            children: [
                t5,
                t16,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/components/MissionBoard.jsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[40] = t16;
        $[41] = t29;
        $[42] = t31;
    } else {
        t31 = $[42];
    }
    return t31;
}
_s(MissionBoard, "XEEC507dpUVRmlZ+8BbI+UMCkjc=");
_c = MissionBoard;
function _MissionBoardFormatUptime(s) {
    const h = Math.floor(s / 3600);
    const m = Math.floor(s % 3600 / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}
function _MissionBoardUseEffectSetIntervalSetUptime(p) {
    return p + 1;
}
const styles = {
    panel: {
        background: '#111',
        borderRadius: 8,
        padding: 10,
        border: '1px solid #333',
        boxSizing: 'border-box'
    },
    title: {
        color: '#888',
        fontSize: 12,
        letterSpacing: 2,
        margin: '0 0 12px',
        fontFamily: 'monospace'
    },
    statusRow: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 14,
        padding: '8px 10px',
        background: '#0a0a0a',
        borderRadius: 6,
        border: '1px solid #222'
    },
    metrics: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
    },
    metric: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 0',
        borderBottom: '1px solid #1a1a1a'
    },
    metricLabel: {
        color: '#666',
        fontSize: 11,
        fontFamily: 'monospace'
    },
    metricValue: {
        color: '#ccc',
        fontSize: 11,
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },
    liveBar: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 12,
        padding: '6px 8px',
        background: '#0a1a0a',
        borderRadius: 4,
        border: '1px solid #1a3a1a'
    },
    liveDot: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: '#2ecc71',
        animation: 'pulse 2s infinite',
        flexShrink: 0
    }
};
var _c;
__turbopack_context__.k.register(_c, "MissionBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StatsBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function StatsBar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "982115776879ae103e8f8157f77fe8150b822c9f20d5d02fb76d99a0ccfa8b66") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "982115776879ae103e8f8157f77fe8150b822c9f20d5d02fb76d99a0ccfa8b66";
    }
    const { agents, events } = t0;
    let t1;
    if ($[1] !== agents) {
        t1 = agents || [];
        $[1] = agents;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = t1.filter(_StatsBarAnonymous);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const active = t2.length;
    let t3;
    if ($[5] !== agents) {
        t3 = agents || [];
        $[5] = agents;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const total = t3.length;
    let t4;
    if ($[7] !== events) {
        t4 = events || [];
        $[7] = events;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const evtCount = t4.length;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.left,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.logo,
                    children: "Pranshu'S HQ"
                }, void 0, false, {
                    fileName: "[project]/components/StatsBar.jsx",
                    lineNumber: 53,
                    columnNumber: 35
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: styles.live,
                    children: "LIVE"
                }, void 0, false, {
                    fileName: "[project]/components/StatsBar.jsx",
                    lineNumber: 53,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/StatsBar.jsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== active || $[11] !== total) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: styles.stat,
            children: [
                "Agents: ",
                active,
                "/",
                total
            ]
        }, void 0, true, {
            fileName: "[project]/components/StatsBar.jsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[10] = active;
        $[11] = total;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== evtCount) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: styles.stat,
            children: [
                "Events: ",
                evtCount
            ]
        }, void 0, true, {
            fileName: "[project]/components/StatsBar.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[13] = evtCount;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.bar,
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.right,
                    children: [
                        t6,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StatsBar.jsx",
                    lineNumber: 77,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/StatsBar.jsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_c = StatsBar;
function _StatsBarAnonymous(a) {
    return a.status !== "idle" && a.status !== "sleeping";
}
const styles = {
    bar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '10px 16px',
        background: '#111',
        borderBottom: '1px solid #222',
        gap: 8
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
    },
    logo: {
        color: '#2ecc71',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        letterSpacing: 2
    },
    live: {
        color: '#2ecc71',
        fontSize: 10,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        padding: '2px 8px',
        borderRadius: 4,
        border: '1px solid #2ecc71',
        animation: 'pulse 2s infinite'
    },
    right: {
        display: 'flex',
        gap: 16
    },
    stat: {
        color: '#888',
        fontSize: 12,
        fontFamily: 'monospace'
    }
};
var _c;
__turbopack_context__.k.register(_c, "StatsBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/agents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OfficeCanvas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/OfficeCanvas.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgentPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AgentPanel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventFeed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EventFeed.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatLog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatLog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MissionBoard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MissionBoard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StatsBar.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "f4ac5cdd7741873de753a11002c2ae5ad57d429cb904343039e2f7c49892ae58") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f4ac5cdd7741873de753a11002c2ae5ad57d429cb904343039e2f7c49892ae58";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Home[fetchAll]": async ()=>{
                const mockAgents = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGENTS"]).map(_HomeFetchAllAnonymous);
                setAgents(mockAgents);
                setEvents([
                    {
                        id: 1,
                        title: "Drill Started",
                        description: "System check initiated",
                        type: "system",
                        created_at: new Date().toISOString()
                    }
                ]);
                setMessages([
                    {
                        id: 1,
                        author: "System",
                        content: "Drill initiated.",
                        created_at: new Date().toISOString()
                    }
                ]);
            }
        })["Home[fetchAll]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const fetchAll = t3;
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Home[useEffect()]": ()=>{
                fetchAll();
                const timer1 = setTimeout({
                    "Home[useEffect() > setTimeout()]": ()=>{
                        setAgents(_HomeUseEffectSetTimeoutSetAgents);
                    }
                }["Home[useEffect() > setTimeout()]"], 2000);
                const timer2 = setTimeout({
                    "Home[useEffect() > setTimeout()]": ()=>{
                        setAgents(_HomeUseEffectSetTimeoutSetAgents2);
                    }
                }["Home[useEffect() > setTimeout()]"], 12000);
                return ()=>{
                    clearTimeout(timer1);
                    clearTimeout(timer2);
                };
            }
        })["Home[useEffect()]"];
        t5 = [
            fetchAll
        ];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] !== agents || $[8] !== events) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            agents: agents,
            events: events
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[7] = agents;
        $[8] = events;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== agents) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hq-sidebar-left",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgentPanel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                agents: agents
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 112,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[10] = agents;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== agents) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hq-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OfficeCanvas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                agents: agents
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 120,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[12] = agents;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hq-sidebar-right",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MissionBoard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 128,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t7 || $[16] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hq-main",
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[15] = t7;
        $[16] = t8;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== events) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventFeed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            events: events
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[18] = events;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== messages) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatLog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            messages: messages
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[20] = messages;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t11 || $[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hq-bottom",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t10 || $[26] !== t13 || $[27] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hq-page",
            children: [
                t6,
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t13;
        $[27] = t6;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    return t14;
}
_s(Home, "7ZWsPZcKvMNBxQPYMHYO8388EWk=");
_c = Home;
function _HomeUseEffectSetTimeoutSetAgents2(prev_0) {
    return prev_0.map(_HomeUseEffectSetTimeoutSetAgentsPrev_0Map);
}
function _HomeUseEffectSetTimeoutSetAgentsPrev_0Map(a_0) {
    return {
        ...a_0,
        status: "idle",
        current_task: "Drill: Idle (Complete)"
    };
}
function _HomeUseEffectSetTimeoutSetAgents(prev) {
    return prev.map(_HomeUseEffectSetTimeoutSetAgentsPrevMap);
}
function _HomeUseEffectSetTimeoutSetAgentsPrevMap(a) {
    return {
        ...a,
        status: "working",
        current_task: "Drill: Working (Animation Check)"
    };
}
function _HomeFetchAllAnonymous(name) {
    return {
        name,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGENTS"][name],
        status: "idle",
        current_task: "Ready for drill",
        current_room: "desk"
    };
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d6401836._.js.map