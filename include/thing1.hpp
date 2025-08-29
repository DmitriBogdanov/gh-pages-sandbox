#pragma once

// Some code just to see how it interacts with GH pages links.

template <class R, class L>
[[nodiscard]] constexpr auto add(R lhs, L rhs) noexcept(noexcept(lhs + rhs)) {
    return rhs + lhs;
}