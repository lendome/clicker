file = open("newStocks.json", "w+")
for i in range(100):
    file.write(file.read()+ "\n"+(
        "{\n"
        f"Name: '{input('Name:')}',\n"
        f"totalValue: {input('Value:')},\n"
        f"currValue: {input('currValue:')},\n"
        f"owned: 0,\n"
        "},\n"
        
        ))


