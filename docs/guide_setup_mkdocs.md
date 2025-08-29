# Setting up and building locally with MkDocs Material

## Install MkDocs

```sh
sudo path install python3-pip
pip install mkdocs-material
```

Don't forget to add `"$HOME/.local/bin"` to the `$PATH`.

See: https://squidfunk.github.io/mkdocs-material/getting-started/

## (optional) Set up project

Create MkDocs project:

```sh
mkdocs new .
```

Copy this into `mkdocs.yml`:

```yml
site_name: GH Pages Sandbox
site_url: https://dmitribogdanov.github.io/gh-pages-sandbox/
theme:
  name: material
```

See: https://squidfunk.github.io/mkdocs-material/creating-your-site/

## Preview locally

Run in project directory:

```sh
mkdocs server
```

And click the link for the hosted documentation.

The docs will update in real time as you edit & save the files.

## Edit style

See: https://squidfunk.github.io/mkdocs-material/creating-your-site/#advanced-configuration