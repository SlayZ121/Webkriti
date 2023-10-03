# Winkel
An E-commerce website with a pre-sign up page followed by sign-in and sign-up page if u dont have an account. After signing in or signing up, redirected to home page, where we have the featured products. If you hover over the product's card, it'll flip to reveal the product name, a short description and a "details" button. Upon clickin on details button, you will be redirected to a product detail page where you can read more about the product and you will see buy now and add to cart button. Below there will be a customer review section, where you can read others' reviews and write your own as well. If you click on cart in the navbar, it will lead you to your cart page where you can see the items in your cart theri quantity and price and a remove button followed up by total price below and a Place order button. The buy now and place order button will lead you to a stripe gateway where the payment is processed safely. Duly note that I have used only dummy private stripe key here for demonstration purposes as using actual one might not be safe. We use databases tos tore cart items, user email id and password, and the products and their details. 
[NOTE: In few screenshots my navbar looks like not aligned at top thats jus the chrome search bar above..which is visible in other screenshots. kindly DO not think that my navbar is not aligned properly. ]


#Screenshots
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/9e1b3b10-c7b0-4585-88ce-b76b4557d53c)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/ac7abeb8-1c40-42d4-921e-c8a7e4f5f69e)

![image](https://github.com/SlayZ121/Webkriti/assets/134158358/0fc57149-2fae-4acc-9eae-07c0da7be58a)

![image](https://github.com/SlayZ121/Webkriti/assets/134158358/140ad489-ca36-43cc-a8d7-9dbb6d67f56a)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/cc604b68-c436-4089-a45d-1d3bcccd51c1)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/b4a20a84-dc30-4746-a2d8-58b214799abf)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/664f6e23-17c0-4769-bbb8-9b9d72e54bf1)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/e3de72ba-2841-4025-b368-fc6b4252d525)

![image](https://github.com/SlayZ121/Webkriti/assets/134158358/0e9bf655-6c39-4f15-8453-df5677ab3e6b)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/27171e6f-899a-40ba-82c8-b3b6ab3e1971)

![image](https://github.com/SlayZ121/Webkriti/assets/134158358/1e57ce91-5577-4e95-bb26-4e14a9786eaf)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/db4fea45-11fe-4388-a908-cf37945ac7ce)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/1dfe9475-a885-426d-aa5a-b5956c72983f)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/727307a5-2d8b-409d-b17c-1542a68127aa)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/a7f09433-e476-44c2-b8a2-4a0a1bc819ac)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/4adafe39-619a-4165-9245-dc362fdb5eac)
![image](https://github.com/SlayZ121/Webkriti/assets/134158358/1fb33483-4ab6-4a55-83ae-c9c914ac9aa9)


#Features-implemented


#frontend
1.Pre-sign up page that prompts you to sign in/sign up
2.Sign-in and sign-up page.
3. Displaying window alert if invalid password or telling the user to sign inn before shopping
4. a page loader leading to Home page featuring products. Dynamically loading products and generating flipcards to display them using javascript. 
5. Product detail page. When u click on a product in home page, leads you to product detail page. (buttons are worthy noting. they spread stars when you hover over them)
6. Customer review implementation using Javascript(including the "stars rating" ). Review form to import user's written review and add it to rest.
7. Add to cart button Which displays added to cart message on successfully adding it to cart
8.Cart page dynamically loads cart items and displays them using Javascript
9. Remove button for each item in cart, dynamically removing it and updating price accordingly. 
10. A footer on all pages except the pre-signup and sign-in pages.


 
#backend
1.Fetching data from user database to see if the user exists for sign in
2. Add new user to database in signup. 
3. Sign in and sign up routes through server
4. Home page : fetching products fro database and giving it to frontend to dynamically display
5. Product detail route: on clickin on the product in home page, passes info abt product to product detail page. 
6. Product detail page: based on info passed, dynamically loads page with those details
7. Add to cart feature: on clicking the add to cart button gathers info abt product and adds item to cart
8. Routes to access cart page and items in cart. 
9. buy now : using Stripe payment method for safe payment processing, setting up routes.
10. Fetching items from cart database to give it to cart page. 
Mongodb used to set up database.


#Packages?technologies used
HTML CSS JS express.js node.js mongoDB
env package to safeguard the connection strings and stripe private key
related npm packages are used including "stripe". Check node modules to know more.



#Local setup
Clone github repo into ur VScode and run the node files in the terminal. Access pages using backend routes. 


#Team members

Dhanalakshmi D
2022BCS022
