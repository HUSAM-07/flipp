# **Product Requirements Document (PRD)**  
**Project Name:** Flashcard Web Application  
**Tech Stack:** Next.js (App Router), Shadcn, Firebase (Authentication & Firestore)

---

## **1. Overview**

The Flashcard Web Application is a tool that allows users to create, manage, and study flashcards. Users can register, log in, and securely store their flashcards using Firebase Authentication and Firestore. The primary focus of the application is to provide a seamless, modern UI experience with Shadcn components for better design and performance.

This application leverages **Next.js App Router** for routing and component management, enabling improved scalability and organization of pages and APIs.

---

## **2. Goals**

- Allow users to register, log in, and manage their accounts.
- Enable users to create and save flashcards with different categories.
- Provide a feature to retrieve and display stored flashcards for study and review.
- Build an intuitive, user-friendly interface using Shadcn for smooth interactions.
- **NEW:** Add functionality to compare code in flashcard questions and answers.
- Utilize **Next.js App Router** for handling routes, API calls, and dynamic component loading efficiently.

---

## **3. Features**

### **3.1 Authentication**
- **Firebase Authentication:**  
  Users can sign up, log in, and log out using Firebase Auth (email and password authentication). Session management should be handled for persistent logins.

  **Recommended Components:**  
  - **Form:** For login/signup forms.
  - **Input:** For user inputs like email, password, etc.
  - **Button:** For form submission.

### **3.2 Flashcard Management**
- **Flashcard Creation:**  
  Users can create flashcards with the following fields:
  - **Title:** Short text summarizing the flashcard.
  - **Content/Description:** Main content to be displayed for learning.
  - **Tags:** Optional tags or categories to filter flashcards (e.g., math, science, etc.).
  - **Code Fields:** Optional fields for both question and answer to contain code snippets for comparison purposes.

  **Recommended Components:**
  - **Form:** For creating flashcards with input fields.
  - **Input, Textarea:** For adding title and content to flashcards.
  - **Combobox/Select:** For categorizing flashcards with tags.
  - **Button:** For submitting the form.
  - **Tooltip:** Provide hints to users on how to fill specific fields.

- **Flashcard Storage and Retrieval:**  
  Flashcards will be saved in Firebase Firestore under each user's account, organized by categories or tags.

### **3.3 Flashcard Display**
- **Flashcard List:**  
  The user should be able to view all flashcards created, displayed in a card-based layout.
  
  **Recommended Components:**
  - **Card:** To display each flashcard.
  - **Avatar:** If displaying user-related flashcards.
  - **Checkbox:** To allow users to select or mark specific flashcards for review.
  - **Button/Toggle:** For editing or deleting flashcards.
  - **Tabs:** If users want to switch between categories of flashcards (e.g., math, coding).
  - **Accordion/Collapsible:** To display more or less content in the flashcards (e.g., expand to show full answer).
  - **Scroll Area:** For smoother scrolling through multiple flashcards.

- **Search and Filter:**  
  Users can search for flashcards or filter them by tags.
  
  **Recommended Components:**
  - **Input:** For search functionality.
  - **Select/Combobox:** To filter by category or tag.
  - **Pagination:** If there are many flashcards to paginate through.
  - **Progress:** To show study progress through flashcards.

### **3.4 Code Comparison**
- **Code in Flashcards:**  
  Flashcards can now include code in both the question and answer fields. This allows users to compare the provided code and its expected result/solution.
  
- **Code Diff Viewer:**  
  Implement a visual code comparison (diff) tool, where users can view the differences between the code in the flashcard question and the answer. The differences should be highlighted for easy understanding, showing additions and deletions.

  **Recommended Components:**
  - **Card:** For displaying the code question and answer.
  - **Tabs:** If providing multiple views (e.g., side-by-side comparison).
  - **Tooltip:** To explain specific code differences.
  - **Resizable:** Allow users to adjust the size of the code display.

### **3.5 UI/UX**
- **Shadcn Components:**  
  Leverage Shadcn's component library to build modern UI elements, such as form inputs, buttons, and navigation.

  **General Recommended Components:**
  - **Navigation Menu/Menubar:** For app navigation.
  - **Drawer/Sheet:** For mobile-friendly side panels (e.g., a flashcard manager).
  - **Hover Card:** To show extra details when hovering over flashcards or buttons.
  - **Alert Dialog/Dialog:** For confirmation messages, like "Delete this flashcard?"
  - **Skeleton:** For loading states when fetching flashcards.
  - **Toast/Alert:** To notify users of successful actions like "Flashcard saved."

- **Mobile-First Design:**  
  The UI should be responsive and optimized for both mobile and desktop devices.

---

## **4. Tech Stack**

### **4.1 Frontend**
- **Next.js (App Router):**  
  Framework for building server-side rendered and static web applications, utilizing the new **App Router** for improved routing, layout management, and API handling.
  
- **Shadcn:**  
  Component library to handle UI/UX design for a sleek and interactive user interface.

### **4.2 Backend**
- **Firebase Authentication:**  
  For user management (sign-up, login, logout).

- **Firebase Firestore:**  
  NoSQL cloud database for storing and retrieving flashcards. Each user's flashcards are saved and associated with their account.

---

## **5. Components Breakdown**

### **5.1 Authentication**
- **File:** `authContext.tsx`
  - Handles Firebase Authentication and context for user session management.
  - **Recommended Shadcn Components:** Form, Input, Button, Alert/Toast.

### **5.2 Flashcard Form**
- **File:** `FlashcardForm.tsx`
  - Form to create and submit new flashcards, using Shadcn form components.
  - New fields for code snippets (optional) in both question and answer sections.
  - **Recommended Shadcn Components:** Form, Input, Textarea, Combobox, Button, Tooltip.

### **5.3 Flashcard List**
- **File:** `FlashcardList.tsx`
  - Displays all flashcards saved in Firestore, with options to filter by tag or search by keyword.
  - **Recommended Shadcn Components:** Card, Tabs, Checkbox, Accordion, Button, Scroll Area, Pagination.

### **5.4 Code Comparison Viewer**
- **File:** `CodeDiffViewer.tsx`
  - A component to display and compare code snippets in flashcard questions and answers, highlighting differences (using a diff algorithm like `diff-match-patch` or similar).
  - **Recommended Shadcn Components:** Card, Tabs, Tooltip, Resizable.

### **5.5 API Client**
- **File:** `apiClient.ts`
  - Handles requests to Firebase Firestore to create, retrieve, and update flashcards.

### **5.6 Firebase Configuration**
- **File:** `firebase.ts`
  - Initializes and configures Firebase Authentication and Firestore.

---

## **6. Pages Structure**

- **Home Page (`page.tsx`)**  
  Displays user-specific flashcards and links to the form for creating new ones.
  - **Recommended Components:** Navigation Menu, Card, Button, Hover Card, Alert/Toast.
  
- **Layout (`layout.tsx`)**  
  Defines the overall structure of the app, including navigation and footer components.  
  This layout uses the **Next.js App Router** for page organization.

---

## **7. Style Guide**

### **7.1 Global Styling**
- **File:** `globals.css`
  - Global CSS styles including resets and Shadcn-based component styles.

### **7.2 Tailwind CSS**
- **File:** `tailwind.config.ts`
  - Tailwind configuration for utility-first styling.

---

## **8. Non-functional Requirements**

- **Security:**  
  Only authenticated users can access and manage their flashcards.

- **Performance:**  
  Fast load times and efficient database queries to enhance user experience.

- **Responsiveness:**  
  The app should be optimized for all screen sizes.

---

## **9. Milestones**

1. **Milestone 1:**  
   Set up project, configure Firebase authentication, and build the basic structure of the application using Next.js App Router.

2. **Milestone 2:**  
   Implement flashcard creation, saving functionality, and Shadcn-based UI components.

3. **Milestone 3:**  
   Implement flashcard retrieval and search functionality. Finalize UI/UX design.

4. **Milestone 4:**  
   Add code comparison functionality with a diff viewer.

5. **Milestone 5:**  
   Test the app thoroughly for performance, security, and responsiveness.

---

## **10. Future Enhancements**

- Ability to share flashcards with other users.
- Add spaced repetition algorithms to optimize learning.
- Include support for images or rich media in flashcards.
