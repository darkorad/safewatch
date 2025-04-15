# SafeWatch

This is a NextJS starter in Firebase Studio for the SafeWatch app.

## Publishing to GitHub

Follow these steps to publish this app to a GitHub repository:

1.  **Initialize a Git repository:**

    ```bash
    git init
    ```

2.  **Add all files to the repository:**

    ```bash
    git add .
    ```

3.  **Commit the files with a message:**

    ```bash
    git commit -m "Initial commit of SafeWatch app"
    ```

4.  **Create a new repository on GitHub:**

    *   Go to [https://github.com/new](https://github.com/new)
    *   Enter a repository name (e.g., `safewatch-app`).
    *   Choose whether to make the repository public or private.
    *   Click "Create repository".

5.  **Connect your local repository to the GitHub repository:**

    Follow the instructions provided by GitHub on the new repository page. It will look something like this (replace `<username>` and `<repository>` with your GitHub username and repository name):

    ```bash
    git remote add origin git@github.com:<username>/<repository>.git
    git branch -M main
    git push -u origin main
    ```

    Or, if you prefer using HTTPS:

    ```bash
    git remote add origin https://github.com/<username>/<repository>.git
    git branch -M main
    git push -u origin main
    ```

    You might be prompted for your GitHub username and password (or personal access token).

Now your SafeWatch app code is published to your GitHub repository!

