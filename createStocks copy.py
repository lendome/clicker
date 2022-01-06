file = open("newStocks.json", "w+")
for i in range(100):
    file.write(file.read()+ "\n"+(
        "{\n"
        f"name: '{input('Name:')}',\n"
        f"price: {input('price:')},\n"
        f"rentIncome: {input('currValue:')},\n"
        f"img: '',\n"
        "},\n"
        
        ))


