# Github Markdown

## Standard markdown

### Headings

#### Heading 4

##### Heading 5

###### Heading 6

### Bullet Lists

- Item 1
- Item 2
- Item 3

### Numbered lists

1. Item 1
2. Item 2
3. Item 3

### Nested lists

- Item 1
  - Item 1.1
  - Item 1.2
  - Item 1.3
- Item 2
  - Item 2.1
  - Item 2.2
  - Item 2.3

### Text

Regular

*Cursive*

**Bold**

***Bold italic***

### Blocks

> This is a block

> **Note:**
> This is also a block

> This is a list in a block:
> - Item 1
> - Item 2
> - Item 3

> This is a code in a block:
> ```cpp
> template <class R, class L>
> [[nodiscard]] constexpr auto add(R lhs, L rhs) noexcept(noexcept(lhs + rhs)) {
>     return rhs + lhs;
> }
> ```

### Code blocks

```
Regular text 1
Regular text 2
Regular text 3
```

```cpp
template <class R, class L>
[[nodiscard]] constexpr auto add(R lhs, L rhs) noexcept(noexcept(lhs + rhs)) {
    return rhs + lhs;
}
```

```json
{
    "key_1": "value_1",
    "key_2": null,
    "key_3": true,
    "key_4": [ 1, 2, 3 ]
}
```

### Horizontal rules

Text 1

---

Text 2

---

Text 3

### Links

[This is a link]()

[`This is also a link`]()

### Images

![Image](images/test_image.svg)

## Github Flavor

### Callouts

Without caps (works in GitHub):

> [!Note]  
> Highlights information that users should take into account, even when skimming.

> [!Tip]
> Optional information to help a user be more successful.

> [!Important]  
> Crucial information necessary for users to succeed.

> [!Warning]  
> Critical content demanding immediate user attention due to potential risks.

> [!Caution]
> Negative potential consequences of an action.

With caps (more compatible):

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

### LaTeX

Evaluates $|x|$, $\mathrm{sign} (x)$, $x^2$, $x^3$, $x^{-1}$, or $H(x)$. 

Evaluates $\dfrac{a + b}{2}$ or $|a - b|$ without overflow.

### HTML images

Without a link:

<img src ="images/test_image.svg">

With a link:

[<img src ="./images/badge_semver.svg">](https://semver.org/)

## Other flavors

### Admonitions

!!! Note
    Admonition-flavored callout
    
!!! Tip
    Admonition-flavored callout
    
!!! Important
    Admonition-flavored callout
    
!!! Warning
    Admonition-flavored callout
    
!!! Caution
    Admonition-flavored callout