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
Check Carbon Addition

PREVENTIVE ACTION:
Recipe Verification

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
Hard Ride

CORRECTIVE ACTION:
Verify Material Weighment

CONFIDENCE:
87%
`,

mooney_high: `
PROBLEM:
Mooney High

COMPOUND HOLD REASON:
Mooney Above Specification

RAW MATERIAL CAUSE:
Process Oil Low

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

dispersion_poor: `
PROBLEM:
Poor Dispersion

COMPOUND HOLD REASON:
Carbon Black Not Properly Distributed

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
Check Rotor Condition

CONFIDENCE:
89%
`,

rheometer: `
PROBLEM:
Rheometer / MDR Out

COMPOUND HOLD REASON:
Cure Characteristics Out Of Control

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

mooney_low: `
PROBLEM:
Mooney Low

COMPOUND HOLD REASON:
Mooney Below Specification

RAW MATERIAL CAUSE:
Process Oil High

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

torque_high: `
PROBLEM:
Torque High

COMPOUND HOLD REASON:
High Cure State

RAW MATERIAL CAUSE:
High Carbon Black
High Sulphur

PROCESS CAUSE:
Recipe Variation

MACHINE CAUSE:
Dosing Error

QUALITY IMPACT:
Hard Compound

TYRE IMPACT:
Heat Build Up

CORRECTIVE ACTION:
Check Recipe Accuracy

CONFIDENCE:
86%
`,

torque_low: `
PROBLEM:
Torque Low

COMPOUND HOLD REASON:
Low Cure State

RAW MATERIAL CAUSE:
Low Carbon Black
Low Sulphur

PROCESS CAUSE:
Mixing Variation

MACHINE CAUSE:
Dosing Issue

QUALITY IMPACT:
Weak Compound

TYRE IMPACT:
Reduced Durability

CORRECTIVE ACTION:
Verify Ingredients

CONFIDENCE:
83%
`,

scorch: `
PROBLEM:
Scorch Variation

COMPOUND HOLD REASON:
Premature Vulcanization Risk

RAW MATERIAL CAUSE:
Accelerator Variation

PROCESS CAUSE:
Temperature Variation

MACHINE CAUSE:
Temperature Control Issue

QUALITY IMPACT:
Poor Processing

TYRE IMPACT:
Manufacturing Difficulty

CORRECTIVE ACTION:
Check Cure Package

CONFIDENCE:
84%
`,
  tensile_low: `
PROBLEM:
Tensile Low
 
COMPOUND HOLD REASON:
Low Tensile Strength
 
RAW MATERIAL CAUSE:
Carbon Black Low
Polymer Variation
 
PROCESS CAUSE:
Poor Dispersion
 
QUALITY IMPACT:
Weak Compound
 
TYRE IMPACT:
Reduced Strength
 
CORRECTIVE ACTION:
Check Mixing Quality
 
CONFIDENCE:
87%
`,
 
tensile_high: `
PROBLEM:
Tensile High
 
COMPOUND HOLD REASON:
Tensile Above Specification
 
RAW MATERIAL CAUSE:
Carbon Black High
 
QUALITY IMPACT:
Hard Compound
 
CORRECTIVE ACTION:
Verify Recipe
 
CONFIDENCE:
86%
`,
 
elongation_low: `
PROBLEM:
Elongation Low
 
COMPOUND HOLD REASON:
Poor Stretchability
 
QUALITY IMPACT:
Brittle Compound
 
TYRE IMPACT:
Crack Risk
 
CORRECTIVE ACTION:
Check Carbon Black Loading
 
CONFIDENCE:
85%
`,
 
elongation_high: `
PROBLEM:
Elongation High
 
COMPOUND HOLD REASON:
Stretchability Above Specification
 
RAW MATERIAL CAUSE:
Process Oil High
 
QUALITY IMPACT:
Soft Compound
 
CORRECTIVE ACTION:
Check Oil Addition
 
CONFIDENCE:
84%
`,
 
ash_high: `
PROBLEM:
Ash High
 
COMPOUND HOLD REASON:
Ash Content Above Specification
 
RAW MATERIAL CAUSE:
Material Contamination
 
CORRECTIVE ACTION:
Check Raw Material
 
CONFIDENCE:
83%
`,
 
ash_low: `
PROBLEM:
Ash Low
 
COMPOUND HOLD REASON:
Ash Content Below Specification
 
CONFIDENCE:
82%
`,
 
sulphur_high: `
PROBLEM:
Sulphur High
 
COMPOUND HOLD REASON:
Sulphur Above Specification
 
QUALITY IMPACT:
Over Cure Risk
 
CORRECTIVE ACTION:
Verify Sulphur Dosing
 
CONFIDENCE:
88%
`,
 
sulphur_low: `
PROBLEM:
Sulphur Low
 
COMPOUND HOLD REASON:
Sulphur Below Specification
 
QUALITY IMPACT:
Under Cure Risk
 
CORRECTIVE ACTION:
Verify Sulphur Dosing
 
CONFIDENCE:
87%
`,
 
batch_hold: `
PROBLEM:
Batch Hold
 
COMPOUND HOLD REASON:
Quality Parameter Out Of Specification
 
ACTION:
Review Lab Results
 
CONFIDENCE:
95%
`,
 
rework: `
PROBLEM:
Rework Required
 
ACTION:
Evaluate Reprocessing Feasibility
 
CONFIDENCE:
93%
`,
 
scrap: `
PROBLEM:
Scrap Risk
 
COMPOUND HOLD REASON:
Critical Quality Failure
 
SCRAP RISK:
High
 
CONFIDENCE:
96%
`,
  carbon_black: `
PROBLEM:
Carbon Black Variation

COMPOUND HOLD REASON:
Carbon Black Above/Below Specification

RAW MATERIAL CAUSE:
Incorrect Carbon Black Addition

PROCESS CAUSE:
Recipe Deviation

QUALITY IMPACT:
Hardness Variation
Specific Gravity Variation

TYRE IMPACT:
Wear Performance Affected

CORRECTIVE ACTION:
Verify Carbon Black Dosing

CONFIDENCE:
90%
`,

process_oil: `
PROBLEM:
Process Oil Variation

COMPOUND HOLD REASON:
Process Oil Above/Below Specification

RAW MATERIAL CAUSE:
Oil Dosing Variation

PROCESS CAUSE:
Recipe Error

QUALITY IMPACT:
Mooney Variation
Hardness Variation

TYRE IMPACT:
Handling Performance Affected

CORRECTIVE ACTION:
Check Oil Addition System

CONFIDENCE:
89%
`,

rotor_wear: `
PROBLEM:
Rotor Wear

COMPOUND HOLD REASON:
Rotor Efficiency Reduced

PROCESS CAUSE:
Poor Mixing Performance

QUALITY IMPACT:
Dispersion Issue

TYRE IMPACT:
Non Uniform Compound Quality

CORRECTIVE ACTION:
Inspect Rotor Condition

CONFIDENCE:
91%
`,

load_cell: `
PROBLEM:
Load Cell Error

COMPOUND HOLD REASON:
Incorrect Material Weighment

PROCESS CAUSE:
Weight Variation

QUALITY IMPACT:
Recipe Deviation

TYRE IMPACT:
Property Variation

CORRECTIVE ACTION:
Calibrate Load Cell

CONFIDENCE:
92%
`,

oil_pump: `
PROBLEM:
Oil Pump Issue

COMPOUND HOLD REASON:
Oil Flow Not Stable

PROCESS CAUSE:
Incorrect Oil Addition

QUALITY IMPACT:
Mooney Variation

TYRE IMPACT:
Compound Processing Issue

CORRECTIVE ACTION:
Check Oil Pump Performance

CONFIDENCE:
90%
`,

dump_temperature: `
PROBLEM:
Dump Temperature Variation

COMPOUND HOLD REASON:
Temperature Out Of Target Range

PROCESS CAUSE:
Mixing Energy Variation

QUALITY IMPACT:
Mooney Variation
Dispersion Issue

TYRE IMPACT:
Cure And Performance Variation

CORRECTIVE ACTION:
Check Mixing Cycle Parameters

CONFIDENCE:
88%
`,

};

