/*expected
initial->s1_1->s1_2->s1_3->s1_4->s1_7;
s1_1->s1_7;
s1_2->s1_7;
s1_3->s1_7->final;
*/

obj?.aaa?.bbb?.(arg)

/*DOT
digraph {
    node[shape=box,style="rounded,filled",fillcolor=white];
    initial[label="",shape=circle,style=filled,fillcolor=black,width=0.25,height=0.25];
    final[label="",shape=doublecircle,style=filled,fillcolor=black,width=0.25,height=0.25];
    s1_1[label="Program:enter\nExpressionStatement:enter\nChainExpression:enter\nCallExpression:enter\nMemberExpression:enter\nMemberExpression:enter\nIdentifier (obj)"];
    s1_2[label="Identifier (aaa)\nMemberExpression:exit"];
    s1_3[label="Identifier (bbb)\nMemberExpression:exit"];
    s1_4[label="Identifier (arg)\nCallExpression:exit"];
    s1_7[label="ChainExpression:exit\nExpressionStatement:exit\nProgram:exit"];
    initial->s1_1->s1_2->s1_3->s1_4->s1_7;
    s1_1->s1_7;
    s1_2->s1_7;
    s1_3->s1_7->final;
}
*/
