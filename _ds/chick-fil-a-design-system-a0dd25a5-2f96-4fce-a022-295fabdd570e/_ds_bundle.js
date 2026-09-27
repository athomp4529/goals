/* @ds-bundle: {"format":4,"namespace":"ChickFilADesignSystem_a0dd25","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"83095e62e939","components/buttons/IconButton.jsx":"388e4d2f5f91","components/data-display/Badge.jsx":"ca28a2f8a7bc","components/data-display/Card.jsx":"28493d91e7d1","components/data-display/Tag.jsx":"a64ff61a5467","components/feedback/Dialog.jsx":"5a54afa438a1","components/feedback/Toast.jsx":"1cecec8b9f4b","components/forms/Checkbox.jsx":"009170f1d43d","components/forms/Input.jsx":"3dd7b7edfebf","components/forms/Radio.jsx":"9666dbb8358b","components/forms/Select.jsx":"203a1cc07f47","components/forms/Switch.jsx":"d63142f25462","components/navigation/Tabs.jsx":"e9d7e11f63ba","ui_kits/mobile-app/AppShell.jsx":"bf0761266576","ui_kits/mobile-app/BagScreen.jsx":"b456209309a9","ui_kits/mobile-app/HomeScreen.jsx":"733db71f7d54","ui_kits/mobile-app/ItemScreen.jsx":"f720364af2a1","ui_kits/mobile-app/RewardsScreen.jsx":"591a2476dcba","ui_kits/mobile-app/menuData.js":"7b7722cabc13"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChickFilADesignSystem_a0dd25 = window.ChickFilADesignSystem_a0dd25 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--fw-medium)",
  border: "none",
  borderRadius: "var(--radius-pill)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  lineHeight: 1,
  whiteSpace: "nowrap",
  transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
  textDecoration: "none"
};
const sizes = {
  sm: {
    fontSize: "14px",
    padding: "8px 16px",
    minHeight: "36px"
  },
  md: {
    fontSize: "16px",
    padding: "12px 24px",
    minHeight: "44px"
  },
  lg: {
    fontSize: "18px",
    padding: "16px 32px",
    minHeight: "52px"
  }
};
const variants = {
  primary: {
    background: "var(--color-brand)",
    color: "var(--text-on-brand)"
  },
  secondary: {
    background: "var(--cfa-white)",
    color: "var(--color-brand)",
    boxShadow: "inset 0 0 0 2px var(--color-brand)"
  },
  navy: {
    background: "var(--surface-navy)",
    color: "var(--text-on-brand)"
  },
  ghost: {
    background: "transparent",
    color: "var(--color-brand)"
  }
};

/**
 * Chick-fil-A primary button. Pill-shaped, Apercu Medium.
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  as = "button",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.primary;
  let dynamic = {};
  if (!disabled) {
    if (variant === "primary" || variant === "navy") {
      if (active) dynamic.background = "var(--color-brand-active)";else if (hover) dynamic.background = "var(--color-brand-hover)";
      if (hover) dynamic.boxShadow = "var(--shadow-brand)";
    } else if (variant === "secondary") {
      if (hover) {
        dynamic.background = "var(--color-brand)";
        dynamic.color = "var(--text-on-brand)";
      }
    } else if (variant === "ghost") {
      if (hover) dynamic.background = "rgba(221,0,51,.08)";
    }
    if (active) dynamic.transform = "scale(.97)";
  }
  const composed = {
    ...base,
    ...sizes[size],
    ...v,
    ...dynamic,
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? "none" : undefined,
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: composed,
    disabled: as === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    width: "36px",
    height: "36px"
  },
  md: {
    width: "44px",
    height: "44px"
  },
  lg: {
    width: "52px",
    height: "52px"
  }
};
const variants = {
  primary: {
    background: "var(--color-brand)",
    color: "var(--text-on-brand)"
  },
  secondary: {
    background: "var(--cfa-white)",
    color: "var(--color-brand)",
    boxShadow: "inset 0 0 0 2px var(--color-brand)"
  },
  ghost: {
    background: "transparent",
    color: "var(--cfa-dark-gray)"
  }
};

/**
 * Circular icon-only button. Pass a single icon element (e.g. Lucide) as children.
 */
function IconButton({
  variant = "ghost",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.ghost;
  let dynamic = {};
  if (!disabled) {
    if (variant === "primary" && (hover || active)) dynamic.background = active ? "var(--color-brand-active)" : "var(--color-brand-hover)";
    if (variant === "secondary" && hover) {
      dynamic.background = "var(--color-brand)";
      dynamic.color = "var(--text-on-brand)";
    }
    if (variant === "ghost" && hover) dynamic.background = "var(--surface-subtle)";
    if (active) dynamic.transform = "scale(.94)";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "var(--radius-circle)",
      cursor: "pointer",
      transition: "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
      opacity: disabled ? 0.4 : 1,
      pointerEvents: disabled ? "none" : undefined,
      ...sizes[size],
      ...v,
      ...dynamic,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  red: {
    bg: "var(--color-brand)",
    fg: "#fff"
  },
  navy: {
    bg: "var(--surface-navy)",
    fg: "#fff"
  },
  green: {
    bg: "var(--cfa-green)",
    fg: "#fff"
  },
  yellow: {
    bg: "var(--cfa-yellow)",
    fg: "#1A1A1A"
  },
  neutral: {
    bg: "var(--surface-subtle)",
    fg: "var(--text-secondary)"
  }
};

/** Small status/count badge. */
function Badge({
  tone = "red",
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.red;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "12px",
      lineHeight: 1,
      padding: "5px 10px",
      borderRadius: "var(--radius-pill)",
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. `interactive` adds hover lift for clickable cards.
 */
function Card({
  interactive = false,
  padding = "var(--space-6)",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-subtle)",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      padding,
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
      transform: hover ? "translateY(-2px)" : "none",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  red: {
    bg: "rgba(221,0,51,.08)",
    fg: "var(--color-brand)",
    br: "rgba(221,0,51,.25)"
  },
  navy: {
    bg: "rgba(0,79,113,.08)",
    fg: "var(--cfa-navy)",
    br: "rgba(0,79,113,.25)"
  },
  green: {
    bg: "rgba(36,158,107,.10)",
    fg: "var(--cfa-dark-green)",
    br: "rgba(36,158,107,.28)"
  },
  neutral: {
    bg: "var(--surface-subtle)",
    fg: "var(--text-secondary)",
    br: "var(--border-default)"
  }
};

/** Outlined pill tag for filters, categories, dietary labels. Optional onRemove. */
function Tag({
  tone = "neutral",
  onRemove,
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "13px",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.br}`,
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "none",
      padding: 0,
      cursor: "pointer",
      color: "inherit",
      display: "inline-flex",
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Centered modal dialog with scrim. Render conditionally on `open`. */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(26,26,26,.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      maxWidth: "460px",
      width: "100%",
      padding: "var(--space-8)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "16px"
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "24px"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--cfa-dark-gray)",
      padding: 0,
      lineHeight: 0,
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "12px 0 0",
      color: "var(--text-secondary)",
      fontSize: "16px",
      lineHeight: "var(--lh-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px",
      marginTop: "var(--space-8)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  success: {
    accent: "var(--cfa-green)",
    icon: "M20 6 9 17l-5-5"
  },
  info: {
    accent: "var(--cfa-blue)",
    icon: "M12 16v-4M12 8h.01"
  },
  error: {
    accent: "var(--color-brand)",
    icon: "M18 6 6 18M6 6l12 12"
  }
};

/** Inline toast / snackbar. Left accent bar signals tone. */
function Toast({
  tone = "success",
  title,
  children,
  onClose,
  style
}) {
  const t = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: "14px 16px",
      borderLeft: `4px solid ${t.accent}`,
      fontFamily: "var(--font-sans)",
      maxWidth: "380px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      background: t.accent,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginTop: "1px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: t.icon
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-medium)",
      fontSize: "15px",
      color: "var(--text-primary)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      color: "var(--text-secondary)",
      marginTop: title ? "2px" : 0
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--cfa-dark-gray)",
      padding: 0,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox with CFA-red fill when checked. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const cid = id || autoId;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "22px",
      height: "22px",
      flexShrink: 0,
      borderRadius: "6px",
      border: on ? "2px solid var(--color-brand)" : "2px solid var(--border-strong)",
      background: on ? "var(--color-brand)" : "var(--cfa-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: cid,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, helper and error states. */
function Input({
  label,
  helperText,
  error,
  id,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const inputId = id || autoId;
  const border = error ? "var(--danger)" : focus ? "var(--focus-ring)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "14px",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-brand)"
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": !!error,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      color: "var(--text-primary)",
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      border: `2px solid ${border}`,
      background: "var(--cfa-white)",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-standard)",
      boxShadow: focus && !error ? "0 0 0 3px rgba(62,177,200,.18)" : "none"
    }
  }, rest)), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: error ? "var(--danger)" : "var(--text-secondary)"
    }
  }, error || helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio button, CFA-red dot when selected. Use inside a shared-name group. */
function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  name,
  value,
  id,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const rid = id || autoId;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const change = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "22px",
      height: "22px",
      flexShrink: 0,
      borderRadius: "50%",
      border: on ? "2px solid var(--color-brand)" : "2px solid var(--border-strong)",
      background: "var(--cfa-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "11px",
      height: "11px",
      borderRadius: "50%",
      background: "var(--color-brand)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: change,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native-select wrapper styled to match CFA inputs. */
function Select({
  label,
  helperText,
  error,
  id,
  children,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const sid = id || autoId;
  const border = error ? "var(--danger)" : focus ? "var(--focus-ring)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      fontSize: "14px",
      fontWeight: "var(--fw-medium)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: sid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      appearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      color: "var(--text-primary)",
      padding: "12px 44px 12px 16px",
      borderRadius: "var(--radius-md)",
      border: `2px solid ${border}`,
      background: "var(--cfa-white)",
      outline: "none",
      cursor: "pointer",
      boxShadow: focus && !error ? "0 0 0 3px rgba(62,177,200,.18)" : "none"
    }
  }, rest), children), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--cfa-dark-gray)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: error ? "var(--danger)" : "var(--text-secondary)"
    }
  }, error || helperText));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill toggle switch; track turns CFA red when on. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const sid = id || autoId;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    id: sid,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: "48px",
      height: "28px",
      borderRadius: "var(--radius-pill)",
      border: "none",
      padding: 0,
      background: on ? "var(--color-brand)" : "var(--cfa-gray)",
      position: "relative",
      cursor: "inherit",
      transition: "background var(--dur-base) var(--ease-standard)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "3px",
      left: on ? "23px" : "3px",
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    readOnly: true,
    style: {
      display: "none"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Underline tab bar. `items` = [{id,label}]; controlled via value/onChange or uncontrolled.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "2px solid var(--border-subtle)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        border: "none",
        background: "none",
        cursor: "pointer",
        padding: "0 2px 14px",
        fontSize: "16px",
        fontWeight: "var(--fw-medium)",
        color: on ? "var(--color-brand)" : "var(--text-secondary)",
        borderBottom: `3px solid ${on ? "var(--color-brand)" : "transparent"}`,
        marginBottom: "-2px",
        transition: "color var(--dur-fast) var(--ease-standard)"
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/AppShell.jsx
try { (() => {
// Shared shell + primitives for the CFA app UI kit. Assigns to window.
const {
  useState
} = React;
function Icon({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth = 2
}) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide[name]) {
      ref.current.innerHTML = "";
      const el = window.lucide.createElement(window.lucide[name]);
      el.setAttribute("width", size);
      el.setAttribute("height", size);
      el.setAttribute("stroke", color);
      el.setAttribute("stroke-width", strokeWidth);
      ref.current.appendChild(el);
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      lineHeight: 0
    }
  });
}

// Branded food placeholder: cream tile with faint C-symbol watermark.
function Thumb({
  size = 72,
  radius = "var(--radius-md)",
  tone = "cream"
}) {
  const bg = tone === "cream" ? "var(--cfa-cream)" : "var(--surface-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      background: bg,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/cfa-symbol-red.png",
    alt: "",
    style: {
      width: "52%",
      opacity: 0.16
    }
  }));
}
function StatusBar({
  dark
}) {
  const c = dark ? "#fff" : "#1A1A1A";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 15,
      color: c,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Signal",
    size: 16,
    color: c
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "Wifi",
    size: 16,
    color: c
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "BatteryFull",
    size: 20,
    color: c
  })));
}
function TabBar({
  active,
  onNav,
  bagCount
}) {
  const tabs = [{
    id: "home",
    label: "Order",
    icon: "UtensilsCrossed"
  }, {
    id: "rewards",
    label: "Rewards",
    icon: "Award"
  }, {
    id: "scan",
    label: "Scan",
    icon: "QrCode"
  }, {
    id: "bag",
    label: "Bag",
    icon: "ShoppingBag"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderTop: "1px solid var(--border-subtle)",
      background: "#fff",
      paddingBottom: 18,
      flexShrink: 0
    }
  }, tabs.map(t => {
    const on = active === t.id || t.id === "home" && (active === "item" || active === "menu");
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onNav(t.id),
      style: {
        flex: 1,
        border: "none",
        background: "none",
        cursor: "pointer",
        padding: "10px 0 4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        color: on ? "var(--color-brand)" : "var(--text-muted)",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 24,
      color: on ? "var(--cfa-red)" : "var(--text-muted)",
      strokeWidth: on ? 2.4 : 2
    }), t.id === "bag" && bagCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -6,
        right: -10,
        minWidth: 18,
        height: 18,
        borderRadius: 9,
        background: "var(--cfa-red)",
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 4px"
      }
    }, bagCount)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 500,
        fontFamily: "var(--font-sans)"
      }
    }, t.label));
  }));
}

// Phone frame wrapper
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: "#fff",
      borderRadius: 46,
      overflow: "hidden",
      boxShadow: "0 30px 80px rgba(0,0,0,.28)",
      border: "10px solid #111",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-sans)"
    }
  }, children);
}
Object.assign(window, {
  Icon,
  Thumb,
  StatusBar,
  TabBar,
  Phone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/BagScreen.jsx
try { (() => {
// Bag / checkout screen.
function BagScreen({
  bag,
  onBack,
  onRemove,
  onPlace
}) {
  const {
    Icon,
    Thumb
  } = window;
  const subtotal = bag.reduce((s, b) => s + b.item.price * b.qty, 0);
  const tax = subtotal * 0.06;
  const total = subtotal + tax;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-cream)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 20px 16px",
      background: "#fff",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      display: "flex",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 20
    }
  }, "Your Bag")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--text-secondary)",
      fontSize: 13.5,
      marginBottom: 12,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 16,
    color: "var(--cfa-red)"
  }), " Pickup at Ft. Totten \xB7 Ready in ~8 min"), bag.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "60px 0",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ShoppingBag",
    size: 40,
    color: "var(--cfa-gray)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 15
    }
  }, "Your bag is empty")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, bag.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      padding: 12,
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(Thumb, {
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      lineHeight: 1.25
    }
  }, b.item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, "Qty ", b.qty, " \xB7 $", (b.item.price * b.qty).toFixed(2))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(i),
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Trash2",
    size: 18,
    color: "var(--text-muted)"
  })))))), bag.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderTop: "1px solid var(--border-subtle)",
      padding: "16px 20px 18px"
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Subtotal",
    value: subtotal
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Estimated Tax",
    value: tax
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)",
      margin: "10px 0"
    }
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Total",
    value: total,
    bold: true
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onPlace,
    style: {
      width: "100%",
      marginTop: 14,
      background: "var(--cfa-red)",
      color: "#fff",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "15px 0",
      fontWeight: 500,
      fontSize: 16,
      fontFamily: "var(--font-sans)",
      cursor: "pointer"
    }
  }, "Place Order")));
}
function Row({
  label,
  value,
  bold
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: bold ? 17 : 14.5,
      fontWeight: bold ? 700 : 400,
      color: bold ? "var(--text-primary)" : "var(--text-secondary)",
      padding: "3px 0"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, "$", value.toFixed(2)));
}
window.BagScreen = BagScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/BagScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/HomeScreen.jsx
try { (() => {
// Order / Home screen — greeting, rewards banner, category filter, menu list.
function HomeScreen({
  onOpenItem,
  onNav,
  category,
  setCategory
}) {
  const {
    Icon,
    Thumb
  } = window;
  const {
    Tag,
    Badge
  } = window.ChickFilADesignSystem_a0dd25;
  const menu = window.CFA_MENU;
  const cats = menu.categories;
  const items = menu.items.filter(i => category === "featured" ? !!i.tag : i.cat === category);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cfa-red)",
      color: "#fff",
      padding: "8px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/cfa-script-white.png",
    alt: "Chick-fil-A",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: "-.02em"
    }
  }, "Good morning, Alex"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {},
    style: {
      marginTop: 6,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "rgba(255,255,255,.18)",
      border: "none",
      color: "#fff",
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      fontSize: 13,
      fontWeight: 500,
      fontFamily: "var(--font-sans)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 15,
    color: "#fff"
  }), " Pickup \xB7 Ft. Totten ", /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronDown",
    size: 15,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "-14px 16px 0",
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Chick-fil-A One\xAE"), /*#__PURE__*/React.createElement(Badge, {
    tone: "red"
  }, "1,240 pts")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 4,
      background: "var(--surface-subtle)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "62%",
      height: "100%",
      background: "var(--cfa-red)",
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-secondary)",
      marginTop: 8
    }
  }, "260 points to your next reward")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      padding: "18px 16px 4px"
    }
  }, cats.map(c => {
    const on = c.id === category;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => setCategory(c.id),
      style: {
        flexShrink: 0,
        border: on ? "none" : "1px solid var(--border-default)",
        background: on ? "var(--cfa-red)" : "#fff",
        color: on ? "#fff" : "var(--text-secondary)",
        padding: "8px 16px",
        borderRadius: "var(--radius-pill)",
        fontSize: 14,
        fontWeight: 500,
        fontFamily: "var(--font-sans)",
        cursor: "pointer",
        whiteSpace: "nowrap"
      }
    }, c.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onOpenItem(it),
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      background: "#fff",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: 12,
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-sans)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(Thumb, {
    size: 68
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: "var(--text-primary)",
      lineHeight: 1.2
    }
  }, it.name)), it.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "red"
  }, it.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "$", it.price.toFixed(2), " \xB7 ", it.cal, " Cal")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "var(--surface-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Plus",
    size: 18,
    color: "var(--cfa-red)",
    strokeWidth: 2.5
  }))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ItemScreen.jsx
try { (() => {
// Item detail screen — hero, description, sauce picker, add-to-bag bar.
function ItemScreen({
  item,
  onBack,
  onAdd
}) {
  const {
    Icon,
    Thumb
  } = window;
  const {
    Radio,
    Checkbox
  } = window.ChickFilADesignSystem_a0dd25;
  const [qty, setQty] = React.useState(1);
  const [sauce, setSauce] = React.useState(window.CFA_MENU.sauces[0]);
  const [meal, setMeal] = React.useState(false);
  const total = (item.price + (meal ? 4.29 : 0)) * qty;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-page)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 220,
      background: "var(--cfa-cream)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/cfa-symbol-red.png",
    alt: "",
    style: {
      width: 140,
      opacity: 0.18
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: "absolute",
      top: 14,
      left: 16,
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "#fff",
      border: "none",
      boxShadow: "var(--shadow-sm)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 24,
    color: "var(--text-primary)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      fontSize: 23
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-secondary)",
      fontWeight: 500,
      marginBottom: 12
    }
  }, "$", item.price.toFixed(2), " \xB7 ", item.cal, " Cal"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: "var(--text-secondary)",
      lineHeight: 1.55
    }
  }, item.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "16px 20px",
      padding: 16,
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Make it a meal (+$4.29)",
    checked: meal,
    onChange: e => setMeal(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 6,
      marginLeft: 32
    }
  }, "Includes Waffle Fries & a medium drink")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 12
    }
  }, "Choose a sauce"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, window.CFA_MENU.sauces.slice(0, 4).map(s => /*#__PURE__*/React.createElement(Radio, {
    key: s,
    name: "sauce",
    label: s,
    checked: sauce === s,
    onChange: () => setSauce(s)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      padding: "14px 20px 16px",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-pill)",
      padding: "6px 8px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => Math.max(1, q - 1)),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Minus",
    size: 20,
    color: "var(--text-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      minWidth: 16,
      textAlign: "center"
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => q + 1),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Plus",
    size: 20,
    color: "var(--text-primary)"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onAdd(item, qty),
    style: {
      flex: 1,
      background: "var(--cfa-red)",
      color: "#fff",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "15px 0",
      fontWeight: 500,
      fontSize: 16,
      fontFamily: "var(--font-sans)",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      gap: 8
    }
  }, "Add to Bag ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "$", total.toFixed(2)))));
}
window.ItemScreen = ItemScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ItemScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/RewardsScreen.jsx
try { (() => {
// Rewards screen — points balance, tier progress, redeemable rewards.
function RewardsScreen() {
  const {
    Icon
  } = window;
  const {
    Card,
    Badge,
    Button
  } = window.ChickFilADesignSystem_a0dd25;
  const rewards = [{
    name: "Chick-fil-A® Sandwich",
    pts: 650
  }, {
    name: "Waffle Potato Fries®",
    pts: 400
  }, {
    name: "Chocolate Chunk Cookie",
    pts: 250
  }, {
    name: "Freshly-Brewed Iced Tea",
    pts: 350
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cfa-navy)",
      color: "#fff",
      padding: "10px 24px 30px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cfa-eyebrow",
    style: {
      color: "rgba(255,255,255,.7)"
    }
  }, "Chick-fil-A One\xAE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      fontWeight: 700,
      letterSpacing: "-.02em",
      marginTop: 6
    }
  }, "1,240"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      opacity: 0.85
    }
  }, "available points"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginTop: 14,
      background: "rgba(255,255,255,.14)",
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Award",
    size: 16,
    color: "var(--cfa-yellow)"
  }), " Silver Member")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginBottom: 4
    }
  }, "Available Rewards"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      marginBottom: 16
    }
  }, "Redeem your points for menu favorites"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, rewards.map(r => {
    const canRedeem = 1240 >= r.pts;
    return /*#__PURE__*/React.createElement("div", {
      key: r.name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: "#fff",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: 14,
        boxShadow: "var(--shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        height: 46,
        borderRadius: "50%",
        background: "var(--cfa-cream)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Gift",
      size: 22,
      color: "var(--cfa-red)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14.5
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, r.pts, " points")), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: canRedeem ? "primary" : "secondary",
      disabled: !canRedeem
    }, "Redeem"));
  }))));
}
window.RewardsScreen = RewardsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/RewardsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/menuData.js
try { (() => {
// Mock menu data for the Chick-fil-A app UI kit. Illustrative only.
window.CFA_MENU = {
  categories: [{
    id: "featured",
    label: "Featured"
  }, {
    id: "entrees",
    label: "Entrées"
  }, {
    id: "meals",
    label: "Meals"
  }, {
    id: "sides",
    label: "Sides"
  }, {
    id: "treats",
    label: "Treats"
  }, {
    id: "drinks",
    label: "Drinks"
  }],
  items: [{
    id: "cfa-sandwich",
    name: "Chick-fil-A® Chicken Sandwich",
    cat: "entrees",
    price: 5.25,
    cal: 420,
    tag: "Popular",
    desc: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure-cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips."
  }, {
    id: "spicy",
    name: "Spicy Chicken Sandwich",
    cat: "entrees",
    price: 5.65,
    cal: 450,
    tag: "Spicy",
    desc: "A boneless breast of chicken seasoned with a spicy blend of peppers, hand-breaded, pressure-cooked and served on a toasted, buttered bun with dill pickle chips."
  }, {
    id: "deluxe",
    name: "Chick-fil-A® Deluxe Sandwich",
    cat: "entrees",
    price: 6.29,
    cal: 490,
    desc: "The classic sandwich topped with Colby-Jack cheese, green leaf lettuce and tomato."
  }, {
    id: "nuggets",
    name: "Chick-fil-A® Nuggets (8 ct)",
    cat: "entrees",
    price: 5.19,
    cal: 250,
    tag: "Popular",
    desc: "Bite-sized pieces of boneless chicken breast, seasoned to perfection, hand-breaded and pressure-cooked."
  }, {
    id: "strips",
    name: "Chick-n-Strips® (3 ct)",
    cat: "entrees",
    price: 5.65,
    cal: 360,
    desc: "Hand-breaded chicken breast strips, pressure-cooked and served with your choice of dipping sauce."
  }, {
    id: "fries",
    name: "Waffle Potato Fries®",
    cat: "sides",
    price: 2.85,
    cal: 420,
    tag: "Fan Favorite",
    desc: "Waffle-cut potatoes cooked in canola oil until crispy outside and tender inside. Sprinkled with Sea Salt."
  }, {
    id: "mac",
    name: "Mac & Cheese",
    cat: "sides",
    price: 3.55,
    cal: 450,
    desc: "A classic macaroni and cheese recipe featuring a special blend of cheeses baked in-restaurant."
  }, {
    id: "fruit",
    name: "Fruit Cup",
    cat: "sides",
    price: 3.85,
    cal: 60,
    desc: "A nutritious fruit mix of mandarin orange segments, fresh strawberry and apple pieces, and blueberries."
  }, {
    id: "shake",
    name: "Cookies & Cream Milkshake",
    cat: "treats",
    price: 4.55,
    cal: 590,
    tag: "Seasonal",
    desc: "Hand-spun the old-fashioned way, this creamy milkshake is topped with whipped cream and a cherry."
  }, {
    id: "cookie",
    name: "Chocolate Chunk Cookie",
    cat: "treats",
    price: 1.65,
    cal: 370,
    desc: "Made with semi-sweet chocolate chunks and wholesome oats, served warm."
  }, {
    id: "lemonade",
    name: "Chick-fil-A® Lemonade",
    cat: "drinks",
    price: 2.65,
    cal: 220,
    tag: "Classic",
    desc: "Freshly squeezed on-site with real lemons, cane sugar and water."
  }, {
    id: "tea",
    name: "Freshly-Brewed Iced Tea (Sweet)",
    cat: "drinks",
    price: 2.25,
    cal: 120,
    desc: "Freshly-brewed and sweetened just right."
  }],
  sauces: ["Chick-fil-A® Sauce", "Polynesian", "Garden Herb Ranch", "Honey Mustard", "Barbeque", "Sriracha"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/menuData.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
