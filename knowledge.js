const knowledgeBase = {

hardness_high: `
PROBLEM:
Hardness High

COMPOUND HOLD REASON:
Hardness Above Specification

RAW MATERIAL CAUSE:
Carbon Black High
Process Oil Low

PROCESS CAUSE:
Mixing Variation

MACHINE CAUSE:
Dosing Error

QUALITY IMPACT:
Hard Compound

TYRE IMPACT:
Heat Build Up
Reduced Flexibility

CORRECTIVE ACTION:
Check Carbon Addition
Check Oil Dosing

PREVENTIVE ACTION:
Recipe Verification

REWORK POSSIBILITY:
Possible

SCRAP RISK:
Low

CONFIDENCE:
85%
`,

hardness_low: `
PROBLEM:
Hardness Low

COMPOUND HOLD REASON:
Hardness Below Specification

RAW MATERIAL CAUSE:
Carbon Black Low
Process Oil High

PROCESS CAUSE:
Mixing Variation

MACHINE CAUSE:
Dosing Error

QUALITY IMPACT:
Soft Compound

TYRE IMPACT:
Low Wear Resistance

CORRECTIVE ACTION:
Check Oil Addition

REWORK POSSIBILITY:
Possible

SCRAP RISK:
Low

CONFIDENCE:
84%
`,

specific_gravity: `
PROBLEM:
Specific Gravity High

COMPOUND HOLD REASON:
SG Above Specification

RAW MATERIAL CAUSE:
Carbon Black High

PROCESS CAUSE:
Wrong Weighment

MACHINE CAUSE:
Load Cell Error

QUALITY IMPACT:
Heavy Compound

TYRE IMPACT:
High Hardness

CORRECTIVE ACTION:
Verify Weighment

CONFIDENCE:
87%
`,

mooney_high: `
PROBLEM:
Mooney High

COMPOUND HOLD REASON:
Mooney Above Specification

RAW MATERIAL CAUSE:
Oil Low

PROCESS CAUSE:
Low Dump Temperature

MACHINE CAUSE:
Oil Pump Issue

QUALITY IMPACT:
Poor Processability

TYRE IMPACT:
Heat Build Up

CORRECTIVE ACTION:
Check Oil Dosing

CONFIDENCE:
88%
`,

mooney_low: `
PROBLEM:
Mooney Low

COMPOUND HOLD REASON:
Mooney Below Specification

RAW MATERIAL CAUSE:
Oil High

PROCESS CAUSE:
High Dump Temperature

MACHINE CAUSE:
Oil Control Issue

QUALITY IMPACT:
Soft Compound

TYRE IMPACT:
Low Handling Stability

CORRECTIVE ACTION:
Check Oil Addition

CONFIDENCE:
82%
`,

dispersion_poor: `
PROBLEM:
Poor Dispersion

RAW MATERIAL CAUSE:
Carbon Distribution Issue

PROCESS CAUSE:
Insufficient Mixing

MACHINE CAUSE:
Rotor Efficiency Issue

QUALITY IMPACT:
Non Uniform Compound

TYRE IMPACT:
Crack Risk
Poor Mileage

CORRECTIVE ACTION:
Check Mixing Time

CONFIDENCE:
89%
`,

rheometer: `
PROBLEM:
Rheometer / MDR Out

RAW MATERIAL CAUSE:
Sulphur Error
Accelerator Error

PROCESS CAUSE:
Recipe Variation

MACHINE CAUSE:
Dosing Error

QUALITY IMPACT:
Cure Variation

TYRE IMPACT:
Low Durability

CORRECTIVE ACTION:
Verify Cure Package

CONFIDENCE:
90%
`,

torque_high: `
PROBLEM:
Torque High

RAW MATERIAL CAUSE:
Carbon Black High

