module.exports = {

"[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");

module.exports = mod;
}}),
"[project]/src/constants/simulation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "CRITICAL_STRESS": (()=>CRITICAL_STRESS),
    "INITIAL_TURBINES": (()=>INITIAL_TURBINES),
    "MAX_HISTORY_LENGTH": (()=>MAX_HISTORY_LENGTH),
    "OPTIMAL_BLADE_ANGLE_MAX": (()=>OPTIMAL_BLADE_ANGLE_MAX),
    "OPTIMAL_BLADE_ANGLE_MIN": (()=>OPTIMAL_BLADE_ANGLE_MIN),
    "POWER_COEFFICIENT": (()=>POWER_COEFFICIENT),
    "SIMULATION_TICK_MS": (()=>SIMULATION_TICK_MS),
    "STRESS_THRESHOLD": (()=>STRESS_THRESHOLD),
    "WARNING_STRESS": (()=>WARNING_STRESS)
});
const SIMULATION_TICK_MS = 500;
const MAX_HISTORY_LENGTH = 120; // 60 seconds at 500ms intervals
const STRESS_THRESHOLD = 90;
const CRITICAL_STRESS = 75;
const WARNING_STRESS = 50;
const OPTIMAL_BLADE_ANGLE_MIN = 10;
const OPTIMAL_BLADE_ANGLE_MAX = 25;
const POWER_COEFFICIENT = 0.5; // multiplier for wind speed to MW
const INITIAL_TURBINES = [
    {
        id: 'T-01',
        name: 'Alpha-01',
        windSpeed: 12,
        bladeAngle: 15,
        maintenanceMode: false,
        health: 100,
        powerOutput: 0,
        mechanicalStress: 0,
        status: 'optimal'
    },
    {
        id: 'T-02',
        name: 'Alpha-02',
        windSpeed: 12,
        bladeAngle: 15,
        maintenanceMode: false,
        health: 98,
        powerOutput: 0,
        mechanicalStress: 5,
        status: 'optimal'
    },
    {
        id: 'T-03',
        name: 'Beta-01',
        windSpeed: 11,
        bladeAngle: 18,
        maintenanceMode: false,
        health: 95,
        powerOutput: 0,
        mechanicalStress: 10,
        status: 'optimal'
    },
    {
        id: 'T-04',
        name: 'Beta-02',
        windSpeed: 13,
        bladeAngle: 20,
        maintenanceMode: false,
        health: 92,
        powerOutput: 0,
        mechanicalStress: 15,
        status: 'optimal'
    },
    {
        id: 'T-05',
        name: 'Gamma-01',
        windSpeed: 10,
        bladeAngle: 12,
        maintenanceMode: false,
        health: 88,
        powerOutput: 0,
        mechanicalStress: 25,
        status: 'warning'
    },
    {
        id: 'T-06',
        name: 'Gamma-02',
        windSpeed: 14,
        bladeAngle: 22,
        maintenanceMode: false,
        health: 85,
        powerOutput: 0,
        mechanicalStress: 30,
        status: 'warning'
    }
];
}}),
"[project]/src/store/slices/turbineSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createTurbineSlice": (()=>createTurbineSlice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/simulation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [app-ssr] (ecmascript)");
;
;
const createTurbineSlice = (set)=>({
        turbines: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_TURBINES"],
        updateTurbine: (id, updates)=>set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["produce"])((state)=>{
                const index = state.turbines.findIndex((t)=>t.id === id);
                if (index !== -1) {
                    state.turbines[index] = {
                        ...state.turbines[index],
                        ...updates
                    };
                }
            })),
        resetTurbines: ()=>set({
                turbines: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_TURBINES"]
            }),
        tickTurbines: (windFluctuation)=>set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["produce"])((state)=>{
                state.turbines.forEach((t)=>{
                    if (t.maintenanceMode) {
                        // Repair stress and health
                        t.mechanicalStress = Math.max(0, t.mechanicalStress - 2);
                        t.health = Math.min(100, t.health + 0.5);
                        t.powerOutput = 0;
                        t.status = 'offline';
                        return;
                    }
                    if (t.health <= 0 || t.mechanicalStress >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STRESS_THRESHOLD"]) {
                        t.status = 'critical';
                        t.powerOutput = 0;
                        t.health = Math.max(0, t.health - 1);
                        return;
                    }
                    // Update environmental factors
                    t.windSpeed = Math.max(0, t.windSpeed + windFluctuation);
                    // Calculate power output
                    const efficiency = (100 - t.mechanicalStress) / 100;
                    t.powerOutput = t.windSpeed * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["POWER_COEFFICIENT"] * efficiency;
                    // Calculate stress accumulation based on blade angle and wind speed
                    // Optimal angle is 15-20. Deviation increases stress.
                    const angleDeviation = Math.abs(t.bladeAngle - 17.5);
                    const stressIncrease = t.windSpeed * 0.1 + angleDeviation * 0.2;
                    t.mechanicalStress = Math.min(100, t.mechanicalStress + stressIncrease * 0.1);
                    // Update health based on stress
                    if (t.mechanicalStress > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRITICAL_STRESS"]) {
                        t.health = Math.max(0, t.health - 0.2);
                    }
                    // Update status
                    if (t.mechanicalStress >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STRESS_THRESHOLD"]) t.status = 'critical';
                    else if (t.mechanicalStress >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRITICAL_STRESS"]) t.status = 'warning';
                    else if (t.mechanicalStress >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WARNING_STRESS"]) t.status = 'warning';
                    else t.status = 'optimal';
                });
            }))
    });
}}),
"[project]/src/store/slices/simulationSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createSimulationSlice": (()=>createSimulationSlice)
});
const createSimulationSlice = (set)=>({
        isPaused: false,
        simulationSpeed: 1,
        togglePause: ()=>set((state)=>({
                    isPaused: !state.isPaused
                })),
        setPaused: (paused)=>set({
                isPaused: paused
            }),
        setSimulationSpeed: (speed)=>set({
                simulationSpeed: speed
            })
    });
}}),
"[project]/src/store/slices/telemetrySlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createTelemetrySlice": (()=>createTelemetrySlice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/simulation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/immer/dist/immer.mjs [app-ssr] (ecmascript)");
;
;
const createTelemetrySlice = (set)=>({
        history: [],
        addTelemetry: (data)=>set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["produce"])((state)=>{
                state.history.push(data);
                if (state.history.length > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_HISTORY_LENGTH"]) {
                    state.history.shift();
                }
            })),
        clearHistory: ()=>set({
                history: []
            })
    });
}}),
"[project]/src/store/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "selectGridMetrics": (()=>selectGridMetrics),
    "selectHistory": (()=>selectHistory),
    "selectIsPaused": (()=>selectIsPaused),
    "selectTurbines": (()=>selectTurbines),
    "useStore": (()=>useStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$turbineSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/slices/turbineSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$simulationSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/slices/simulationSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$telemetrySlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/slices/telemetrySlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((...a)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$turbineSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTurbineSlice"])(...a),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$simulationSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSimulationSlice"])(...a),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$telemetrySlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTelemetrySlice"])(...a)
    }), {
    name: 'aeroflow-storage',
    partialize: (state)=>({
            isPaused: state.isPaused
        })
}));
const selectGridMetrics = (state)=>{
    const activeTurbines = state.turbines.filter((t)=>!t.maintenanceMode && t.health > 0).length;
    const failedTurbines = state.turbines.filter((t)=>t.health <= 0 || t.mechanicalStress >= 90).length;
    const totalMegawatts = state.turbines.reduce((acc, t)=>acc + t.powerOutput, 0);
    const averageWindSpeed = state.turbines.reduce((acc, t)=>acc + t.windSpeed, 0) / state.turbines.length;
    // Grid stability logic
    const averageHealth = state.turbines.reduce((acc, t)=>acc + t.health, 0) / state.turbines.length;
    const averageStress = state.turbines.reduce((acc, t)=>acc + t.mechanicalStress, 0) / state.turbines.length;
    const gridStability = Math.max(0, Math.min(100, averageHealth * 0.7 - averageStress * 0.3 + activeTurbines * 5));
    return {
        totalMegawatts,
        gridStability,
        averageWindSpeed,
        activeTurbines,
        failedTurbines
    };
};
const selectTurbines = (state)=>state.turbines;
const selectIsPaused = (state)=>state.isPaused;
const selectHistory = (state)=>state.history;
}}),
"[project]/src/hooks/useKeyboardShortcuts.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useKeyboardShortcuts": (()=>useKeyboardShortcuts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useKeyboardShortcuts() {
    const togglePause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])((state)=>state.togglePause);
    const resetGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])((state)=>state.resetTurbines);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            // Space to toggle pause
            if (e.code === 'Space' && e.target === document.body) {
                e.preventDefault();
                togglePause();
            }
            // R to reset
            if (e.code === 'KeyR' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                resetGrid();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        togglePause,
        resetGrid
    ]);
}
}}),
"[project]/src/engine/SimulationEngine.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SimulationEngine": (()=>SimulationEngine)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/simulation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useKeyboardShortcuts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function SimulationEngine({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"])();
    const isPaused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])((state)=>state.isPaused);
    const tickTurbines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])((state)=>state.tickTurbines);
    const addTelemetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])((state)=>state.addTelemetry);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const runTick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isPaused) return;
        // Simulate small random wind fluctuations for each tick
        const windFluctuation = (Math.random() - 0.5) * 0.5;
        tickTurbines(windFluctuation);
        // Capture telemetry for the chart
        const state = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"].getState();
        const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectGridMetrics"])(state);
        addTelemetry({
            timestamp: Date.now(),
            totalPower: metrics.totalMegawatts,
            stability: metrics.gridStability
        });
    }, [
        isPaused,
        tickTurbines,
        addTelemetry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isPaused) {
            timerRef.current = setInterval(runTick, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$simulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIMULATION_TICK_MS"]);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }
        return ()=>{
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [
        isPaused,
        runTick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn),
    "formatNumber": (()=>formatNumber)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatNumber(num, decimals = 1) {
    return num.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}
}}),
"[project]/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Provider;
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Root;
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger;
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content, {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content.displayName;
;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/action-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js");

module.exports = mod;
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__96a198._.js.map