import NextAuth from "next-auth";
import Provider from "next-auth/providers/github";

export default NextAuth({
    providers:[
        Provider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET,
        })
    ]
})