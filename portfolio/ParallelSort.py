#variable assignment
prodlist,prilist,comblist,comblist2 = [],[],[],[]
prodname = ""

#while loop for adding products & prices
while prodname != "done":
	prodname = input("Enter a product name: ")
	if prodname == "done":
		break
	else:
		prodlist.append(prodname)
	price = float(input("Enter the price: "))
	prilist.append(price)

#creating combined list for sorting alphabetically
for i in range(len(prodlist)):
	comblist.append([prodlist[i],prilist[i]])

#creating combined list for sorting by price
for i in range(len(prodlist)):
	comblist2.append([prilist[i],prodlist[i]])

#printing the product and their prices in the order of the list with f strings
print("")
print("Product             Price")
print("-------------------------")
for i in range(len(prodlist)):
	print("{:15}{:>10.2f}".format(comblist[i][0],comblist[i][1]))

#prints the product and their prices alphabetically
comblist.sort()
print("")
print("Product             Price")
print("-------------------------")
for i in range(len(comblist)):
	prod1 = comblist[i][0]
	pri1 = comblist[i][1]
	print("{:15}{:>10.2f}".format(prod1,pri1))

#prints the product and their prices from least to greatest
comblist2.sort()
print("")
print("Product             Price")
print("-------------------------")
for i in range(len(comblist)):
	prodlist = comblist2[i][1]
	prilist = comblist2[i][0]
	print("{:15}{:>10.2f}".format(prodlist,prilist))

