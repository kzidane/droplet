window.parserSuccessData = [
{"message":"Function call","str":"alert 10","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"Variable assignment","str":"a = b","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Assign","prefix":"","suffix":""}},{"type":"socketStart","emptyString":"``","parseContext":"Lvalue","handwritten":false,"dropdown":false},"a",{"type":"socketEnd"}," = ",{"type":"socketStart","emptyString":"``","parseContext":"FunctionBody","handwritten":false,"dropdown":false},"b",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"If statement, normal form","str":"if true\n alert 10","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"If","prefix":"if ","suffix":""}},"if ",{"type":"socketStart","emptyString":"``","parseContext":"If","handwritten":false,"dropdown":false},"true",{"type":"socketEnd"},{"type":"indentStart","prefix":" ","indentContext":null},{"type":"newline","specialIndent":undefined},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"indentEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"Unless statement, normal form","str":"unless true\n alert 10","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"If","prefix":"unless ","suffix":""}},"unless ",{"type":"socketStart","emptyString":"``","parseContext":"If","handwritten":false,"dropdown":false},"true",{"type":"socketEnd"},{"type":"indentStart","prefix":" ","indentContext":null},{"type":"newline","specialIndent":undefined},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"indentEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"One-line if statement","str":"if a then b","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"If","prefix":"if ","suffix":""}},"if ",{"type":"socketStart","emptyString":"``","parseContext":"If","handwritten":false,"dropdown":false},"a",{"type":"socketEnd"}," then ",{"type":"socketStart","emptyString":"``","parseContext":0,"handwritten":false,"dropdown":false},"b",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"If-else statement, normal form","str":"if true\n alert 10\nelse\n alert 10","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"If","prefix":"if ","suffix":""}},"if ",{"type":"socketStart","emptyString":"``","parseContext":"If","handwritten":false,"dropdown":false},"true",{"type":"socketEnd"},{"type":"indentStart","prefix":" ","indentContext":null},{"type":"newline","specialIndent":undefined},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"indentEnd"},{"type":"newline","specialIndent":undefined},"else",{"type":"indentStart","prefix":" ","indentContext":null},{"type":"newline","specialIndent":undefined},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"indentEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"One-line if-else statement","str":"if a then b else c","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"If","prefix":"if ","suffix":""}},"if ",{"type":"socketStart","emptyString":"``","parseContext":"If","handwritten":false,"dropdown":false},"a",{"type":"socketEnd"}," then ",{"type":"socketStart","emptyString":"``","parseContext":0,"handwritten":false,"dropdown":false},"b",{"type":"socketEnd"}," else ",{"type":"socketStart","emptyString":"``","parseContext":0,"handwritten":false,"dropdown":false},"c",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"While statement, normal form","str":"while a\n alert 10","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"While","prefix":"while ","suffix":""}},"while ",{"type":"socketStart","emptyString":"``","parseContext":"Expression","handwritten":false,"dropdown":false},"a",{"type":"socketEnd"},{"type":"indentStart","prefix":" ","indentContext":null},{"type":"newline","specialIndent":undefined},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"indentEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"One-line while statement","str":"while a then alert 10","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"While","prefix":"while ","suffix":""}},"while ",{"type":"socketStart","emptyString":"``","parseContext":"Expression","handwritten":false,"dropdown":false},"a",{"type":"socketEnd"}," then ",{"type":"socketStart","emptyString":"``","parseContext":0,"handwritten":false,"dropdown":false},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"For-in, normal form","str":"for i in list\n alert 10","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"For","prefix":"for ","suffix":""}},"for ",{"type":"socketStart","emptyString":"``","parseContext":"Lvalue","handwritten":false,"dropdown":false},"i",{"type":"socketEnd"}," in ",{"type":"socketStart","emptyString":"``","parseContext":"ForModifier","handwritten":false,"dropdown":false},"list",{"type":"socketEnd"},{"type":"indentStart","prefix":" ","indentContext":null},{"type":"newline","specialIndent":undefined},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"indentEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"One-line for-in","str":"for i in list then alert 10","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"For","prefix":"for ","suffix":""}},"for ",{"type":"socketStart","emptyString":"``","parseContext":"Lvalue","handwritten":false,"dropdown":false},"i",{"type":"socketEnd"}," in ",{"type":"socketStart","emptyString":"``","parseContext":"ForModifier","handwritten":false,"dropdown":false},"list",{"type":"socketEnd"}," then ",{"type":"socketStart","emptyString":"``","parseContext":0,"handwritten":false,"dropdown":false},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"Inverted one-line for-in","str":"alert 10 for i in list","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"For","prefix":"","suffix":""}},{"type":"socketStart","emptyString":"``","parseContext":0,"handwritten":false,"dropdown":false},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"socketEnd"}," for ",{"type":"socketStart","emptyString":"``","parseContext":"Lvalue","handwritten":false,"dropdown":false},"i",{"type":"socketEnd"}," in ",{"type":"socketStart","emptyString":"``","parseContext":"ForModifier","handwritten":false,"dropdown":false},"list",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"Semicolons at the root","str":"alert 10; prompt 10","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"blue","shape":0,"parseContext":"program","nodeContext":{"type":"semicolon","prefix":"","suffix":""}},{"type":"socketStart","emptyString":"``","parseContext":"semicolon","handwritten":false,"dropdown":false},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"socketEnd"},"; ",{"type":"socketStart","emptyString":"``","parseContext":"semicolon","handwritten":false,"dropdown":false},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"prompt ","suffix":""}},"prompt ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"Semicolons with one-line block","str":"if a then b; c else d","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"If","prefix":"if ","suffix":""}},"if ",{"type":"socketStart","emptyString":"``","parseContext":"If","handwritten":false,"dropdown":false},"a",{"type":"socketEnd"}," then ",{"type":"socketStart","emptyString":"``","parseContext":0,"handwritten":false,"dropdown":false},{"type":"blockStart","color":"blue","shape":0,"parseContext":"program","nodeContext":{"type":"semicolon","prefix":"","suffix":""}},{"type":"socketStart","emptyString":"``","parseContext":"semicolon","handwritten":false,"dropdown":false},"b",{"type":"socketEnd"},"; ",{"type":"socketStart","emptyString":"``","parseContext":"semicolon","handwritten":false,"dropdown":false},"c",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"socketEnd"}," else ",{"type":"socketStart","emptyString":"``","parseContext":0,"handwritten":false,"dropdown":false},"d",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"Semicolons in sequence","str":"while a\n console.log hi\n alert 10; prompt 10\n console.log bye","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"orange","shape":2,"parseContext":"__comment__","nodeContext":{"type":"While","prefix":"while ","suffix":""}},"while ",{"type":"socketStart","emptyString":"``","parseContext":"Expression","handwritten":false,"dropdown":false},"a",{"type":"socketEnd"},{"type":"indentStart","prefix":" ","indentContext":null},{"type":"newline","specialIndent":undefined},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"console.log ","suffix":""}},"console.log ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"hi",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"newline","specialIndent":undefined},{"type":"blockStart","color":"blue","shape":0,"parseContext":"program","nodeContext":{"type":"semicolon","prefix":"","suffix":""}},{"type":"socketStart","emptyString":"``","parseContext":"semicolon","handwritten":false,"dropdown":false},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"alert ","suffix":""}},"alert ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"socketEnd"},"; ",{"type":"socketStart","emptyString":"``","parseContext":"semicolon","handwritten":false,"dropdown":false},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"prompt ","suffix":""}},"prompt ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"socketEnd"},{"type":"blockEnd"},{"type":"newline","specialIndent":undefined},{"type":"blockStart","color":"blue","shape":2,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"console.log ","suffix":""}},"console.log ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"bye",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"indentEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"Object literal, normal form","str":"foo {\n a: b,\n c: d\n}","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"blue","shape":0,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"","suffix":""}},{"type":"socketStart","emptyString":"``","parseContext":"Callee","handwritten":false,"dropdown":false},"foo",{"type":"socketEnd"}," ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},{"type":"blockStart","color":"teal","shape":4,"parseContext":"__comment__","nodeContext":{"type":"Obj","prefix":"{","suffix":"}"}},"{",{"type":"newline","specialIndent":undefined}," ",{"type":"socketStart","emptyString":"``","parseContext":"Identifier","handwritten":false,"dropdown":false},"a",{"type":"socketEnd"},": ",{"type":"socketStart","emptyString":"``","parseContext":"Expression","handwritten":false,"dropdown":false},"b",{"type":"socketEnd"},",",{"type":"newline","specialIndent":undefined}," ",{"type":"socketStart","emptyString":"``","parseContext":"Identifier","handwritten":false,"dropdown":false},"c",{"type":"socketEnd"},": ",{"type":"socketStart","emptyString":"``","parseContext":"Expression","handwritten":false,"dropdown":false},"d",{"type":"socketEnd"},{"type":"newline","specialIndent":undefined},"}",{"type":"blockEnd"},{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"Object literal, no braces or commas","str":"foo\n a: b\n c: d","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"blue","shape":0,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"","suffix":""}},{"type":"socketStart","emptyString":"``","parseContext":"Callee","handwritten":false,"dropdown":false},"foo",{"type":"socketEnd"},{"type":"newline","specialIndent":undefined}," ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},{"type":"blockStart","color":"teal","shape":4,"parseContext":"__comment__","nodeContext":{"type":"Obj","prefix":"","suffix":""}},{"type":"socketStart","emptyString":"``","parseContext":"Identifier","handwritten":false,"dropdown":false},"a",{"type":"socketEnd"},": ",{"type":"socketStart","emptyString":"``","parseContext":"Expression","handwritten":false,"dropdown":false},"b",{"type":"socketEnd"},{"type":"newline","specialIndent":undefined}," ",{"type":"socketStart","emptyString":"``","parseContext":"Identifier","handwritten":false,"dropdown":false},"c",{"type":"socketEnd"},": ",{"type":"socketStart","emptyString":"``","parseContext":"Expression","handwritten":false,"dropdown":false},"d",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"String interpolation","str":"foo \"#{a}\"","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"blue","shape":0,"parseContext":"__comment__","nodeContext":{"type":"Call","prefix":"","suffix":""}},{"type":"socketStart","emptyString":"``","parseContext":"Callee","handwritten":false,"dropdown":false},"foo",{"type":"socketEnd"}," ",{"type":"socketStart","emptyString":"``","parseContext":-1,"handwritten":false,"dropdown":false},"\"#{a}\"",{"type":"socketEnd"},{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"Range","str":"[1..10]","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"teal","shape":4,"parseContext":"__comment__","nodeContext":{"type":"Range","prefix":"[","suffix":"]"}},"[",{"type":"socketStart","emptyString":"``","parseContext":"Expression","handwritten":false,"dropdown":false},"1",{"type":"socketEnd"},"..",{"type":"socketStart","emptyString":"``","parseContext":"Expression","handwritten":false,"dropdown":false},"10",{"type":"socketEnd"},"]",{"type":"blockEnd"},{"type":"documentEnd"}]},
{"message":"Array","str":"[0, 1]","expected":[{"type":"documentStart","indentContext":undefined},{"type":"blockStart","color":"teal","shape":4,"parseContext":"__comment__","nodeContext":{"type":"Arr","prefix":"[","suffix":"]"}},"[",{"type":"indentStart","prefix":"  ","indentContext":null},{"type":"blockStart","color":"green","shape":4,"parseContext":"__comment__","nodeContext":{"type":"Value","prefix":"0, ","suffix":"0, "}},"0, ",{"type":"blockEnd"},{"type":"blockStart","color":"green","shape":4,"parseContext":"__comment__","nodeContext":{"type":"Value","prefix":"1","suffix":"1"}},"1",{"type":"blockEnd"},{"type":"indentEnd"},"]",{"type":"blockEnd"},{"type":"documentEnd"}]}]


