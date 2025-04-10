<!-- e.preventDefault -->
<!-- current object through ref={} gives you the reference of input box inform of object -->
<!-- email.current.value print the value we write in the email field.This same in case of password -->
<!-- Hosting in firbase has three ways 1. locally 2. whenever u want through command 3.github action trigger -->
<!-- There is a problem we face after completing sign up and sign in,sign out that we can still directly go to browse page from sign In page through url { /browse } but this shouldnot be there same case with sign In from browse -->
<!-- We want to make it more secure for that we need { onAuthStateChanged } which is written in body component  -->
<!-- But we can only use { usenavigate } inside provider.We can only use it children of App.For that one of the solution is that we have write the useEffect code inside the component which is present everywhere that is { header component } in our case cz we want that auth checking every time -->
<!-- { onAuthStateChanged } is a type of listener which check the auth every time header renderd -->
<!-- Auth status check everytime and redirect to it accordingly -->
<!-- Everytime header component renders{ onAuthStateChanged } listener came into action but for good practice we want to unsubscribe to it when header our component { here header } unmount -->
<!-- we stored hardcored string values in one constant.js file so that we can manage it better like if we change the value in future ,we can change it one place and all other place would be updated -->
<!-- Due to strict mode in react everything(most of the things ) renderd 2 times.This happens locally not in build production.React do the extra rendering to check if there is any inconstistency between calls -->