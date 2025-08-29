
[<img src ="images/badge_license_mit.svg">](../LICENSE.md)
[<img src ="images/badge_semver.svg">](https://semver.org/)

# gps::thing1

[<- to README.md](..)

[<- to implementation.hpp](../include/thing1.hpp)

**gps::thing1** is a thing that does X. Main highlights are:

- Functionality 1
- Functionality 2
- Functionality 3

> [!Note]
> Significant part of X was implemented in version Y.

> [!Tip]
> [Examples](#examples) can be found at the bottom of the page.

## Definitions

```cpp
// Some functions
template <class T> constexpr T func_1(T value, std::size_t size) noexcept;
template <class T> constexpr T func_1(T value, std::size_t size) noexcept;
template <class T> constexpr T func_1(T value, std::size_t size) noexcept;
template <class T> constexpr T func_1(T value, std::size_t size) noexcept;

// Some class
template<class T>
struct Class {
    constexpr Class(T value) noexcept;
    
    constexpr operator bool() const noexcept;
    
    constexpr bool contains(T value) const noexcept;

    // + some method
    // + some operators
};
```

## Methods

### Some functions

> ```cpp
> template <class T> constexpr T func_1(T value, std::size_t size) noexcept;
> template <class T> constexpr T func_1(T value, std::size_t size) noexcept;
> template <class T> constexpr T func_1(T value, std::size_t size) noexcept;
> template <class T> constexpr T func_1(T value, std::size_t size) noexcept;
> ```

Performs function 1/2/3/4 with an integer `value` for `size` and returns the result.

**Note:** The function assumes `size < sizeof(T) * CHAR_BIT`, otherwise behavior is undefined. This precondition is checked in `DEBUG`.

### Some class

> ```cpp
> constexpr Class(T value) noexcept;
> ```

Constructs `Class` from `value`.

## Examples

### Examples

[ [Run this code]() ]

```cpp
using namespace gps;

static_assert(thing1::func_1(11, 0) == thing1::func_2(12, 0));
static_assert(thing1::func_1(11, 0) == thing1::func_3(13, 0));
static_assert(thing1::func_1(11, 0) == thing1::func_4(14, 0));
```
