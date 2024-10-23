import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomPostCard from "../../components/userComponents/CustomPostCard";
// import { useCreatePostMutation } from "../../redux/api/postsApi";
// import { useGetAllUserMutation } from "../../redux/api/authApi";
// import Cookies from "js-cookie";

const posts = [
  {
    title:
      "Don’t use if-else blocks anymore! Use Strategy and Factory Pattern Together",
    description: `As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.`,
    created_user: "user3",
    post_image:
      "https://res.cloudinary.com/dksovm4dg/image/upload/v1714630087/cld-sample.jpg",
    comments: [
      {
        name: "user4",
        comment: `Let’s say you are developing an e-commerce application and you need to support different payment methods like credit card, debit card and cryptocurrency. You start with if-else blocks to process payments:`,
      },
      {
        name: "user4",
        comment: `Let’s say you are developing an e-commerce application and you need to support different payment methods like credit card, debit card and cryptocurrency. You start with if-else blocks to process payments:`,
      },
    ],
    likes: 7,
  },
  {
    title:
      "Don’t use if-else blocks anymore! Use Strategy and Factory Pattern Together",
    description: `As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.`,
    created_user: "user3",
    post_image: "",
    comments: [
      {
        name: "user4",
        comment: `Let’s say you are developing an e-commerce application and you need to support different payment methods like credit card, debit card and cryptocurrency. You start with if-else blocks to process payments:`,
      },
      {
        name: "user4",
        comment: `Let’s say you are developing an e-commerce application and you need to support different payment methods like credit card, debit card and cryptocurrency. You start with if-else blocks to process payments:`,
      },
    ],
    likes: 7,
  },
  {
    title:
      "Don’t use if-else blocks anymore! Use Strategy and Factory Pattern Together",
    description: `As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.
                  As we move forward in a project, lost in if-else blocks, struggling with complex conditions and repetitive code, we look for a solution. But why should we be stuck in if-else blocks? In this article, let’s discover the way to get rid of if-else confusion together with Strategy and Factory patterns.`,
    created_user: "user3",
    post_image:
      "https://res.cloudinary.com/dksovm4dg/image/upload/v1714630087/cld-sample.jpg",
    comments: [
      // {
      //   name: "user4",
      //   comment: `Let’s say you are developing an e-commerce application and you need to support different payment methods like credit card, debit card and cryptocurrency. You start with if-else blocks to process payments:`,
      // },
      // {
      //   name: "user4",
      //   comment: `Let’s say you are developing an e-commerce application and you need to support different payment methods like credit card, debit card and cryptocurrency. You start with if-else blocks to process payments:`,
      // },
    ],
    likes: 7,
  },
];

// const [createPostMutation] = useCreatePostMutation()

// useEffect(() => {
//   getPosts()
// })

// const getPosts = async() => {
//   try {
//     // const res = await createPostMutation({})
//   } catch (error) {
//     console.log(error);
    
//   }
// }

const Home = () => {
  return (
    <div className="h-[100vh] md:px-[30%] p-10 bg-gray-100">
      <div>
        {posts.map((each) => (
          <CustomPostCard details={each} />
        ))}
      </div>
    </div>
  );
};

export default Home;
