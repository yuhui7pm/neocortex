# Commit Message Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages to make the commit history more readable and allow for automatic versioning and changelog generation.

## Commit Message Format

Each commit message consists of a **header**, an optional **body**, and an optional **footer**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and must conform to the [Commit Message Header](#commit-message-header) format.

The **body** is optional but recommended for providing more insight into what changed and why.

The **footer** is optional and is used for [referencing issues](https://help.github.com/articles/closing-issues-using-keywords/) and breaking changes.

### Commit Message Header

```
<type>(<scope>): <subject>
```

The `type` must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

The `scope` is optional and should be the name of the component affected (e.g., 'auth', 'navbar', 'users').

The `subject` is a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No dot (.) at the end

### Examples

```
feat(auth): add login functionality
fix(navbar): resolve responsive display issue
docs: update readme with setup instructions
style: format code according to style guide
refactor(data): simplify data processing logic
perf(api): optimize database queries
test(user): add unit tests for user registration
```
