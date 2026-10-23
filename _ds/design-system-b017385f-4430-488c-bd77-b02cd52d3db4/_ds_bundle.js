/* @ds-bundle: {"format":4,"namespace":"DesignSystem_b01738","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"StatFigure","sourcePath":"components/core/StatFigure.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CharacterCard","sourcePath":"components/pitch/CharacterCard.jsx"},{"name":"CopyField","sourcePath":"components/pitch/CopyField.jsx"},{"name":"OfferCard","sourcePath":"components/pitch/OfferCard.jsx"},{"name":"ProcessStep","sourcePath":"components/pitch/ProcessStep.jsx"},{"name":"ToonCarousel","sourcePath":"components/work/ToonCarousel.jsx"},{"name":"WorkCase","sourcePath":"components/work/WorkCase.jsx"}],"sourceHashes":{"components/core/Button.jsx":"a21ec50a5271","components/core/SectionLabel.jsx":"876bbc5ba036","components/core/StatFigure.jsx":"4a2383da8dc4","components/core/Tag.jsx":"23eeaf40c52c","components/pitch/CharacterCard.jsx":"c45635c68c3a","components/pitch/CopyField.jsx":"5738e8b7a9e9","components/pitch/OfferCard.jsx":"5414512f8bcd","components/pitch/ProcessStep.jsx":"18edac6eb377","components/work/ToonCarousel.jsx":"157a592fcf51","components/work/WorkCase.jsx":"fea00bc222cf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_b01738 = window.DesignSystem_b01738 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZE = {
  sm: {
    padding: '9px 16px',
    fontSize: 'var(--type-label)',
    letterSpacing: 'var(--ls-label)'
  },
  md: {
    padding: '14px 26px',
    fontSize: 'var(--type-label-lg)',
    letterSpacing: 'var(--ls-label)'
  },
  lg: {
    padding: '18px 36px',
    fontSize: '1rem',
    letterSpacing: 'var(--ls-label)'
  }
};
const VARIANT = {
  primary: {
    background: 'var(--mj-orange)',
    color: 'var(--text-on-accent)',
    border: '2px solid var(--mj-orange)'
  },
  inverse: {
    background: 'var(--n-0)',
    color: 'var(--text-on-paper)',
    border: '2px solid var(--n-0)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '2px solid var(--line-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '2px solid transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  block = false,
  disabled = false,
  trailing,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANT[variant] || VARIANT.primary;
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--mj-orange-700)',
    borderColor: 'var(--mj-orange-700)'
  } : variant === 'inverse' ? {
    background: 'var(--n-100)',
    borderColor: 'var(--n-100)'
  } : {
    borderColor: 'var(--mj-orange)',
    color: 'var(--text-primary)'
  } : null;
  const s = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--sp-2)',
    fontFamily: 'var(--font-core)',
    fontWeight: 'var(--w-bold)',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--r-1)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.38 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transform: press && !disabled ? 'translateY(1px)' : 'none',
    transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...SIZE[size],
    ...v,
    ...hoverStyle,
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, trailing ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontWeight: 'var(--w-bold)'
    }
  }, trailing) : null);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: s,
    onClick: onClick
  }, handlers, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: s,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionLabel({
  children,
  index,
  tone = 'accent',
  style,
  ...rest
}) {
  const color = tone === 'accent' ? 'var(--text-accent)' : tone === 'muted' ? 'var(--text-muted)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      fontSize: 'var(--type-label)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), index ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      opacity: .55
    }
  }, index) : null, /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      height: 1,
      background: 'currentColor',
      opacity: .25,
      minWidth: 24
    }
  }));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/StatFigure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatFigure({
  label,
  value,
  unit,
  note,
  tone = 'accent',
  align = 'start',
  style,
  ...rest
}) {
  const valueColor = tone === 'accent' ? 'var(--text-accent)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--type-label)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '.1em',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-black)',
      fontSize: 'var(--type-stat)',
      lineHeight: .92,
      letterSpacing: 'var(--ls-hero)',
      color: valueColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", null, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.42em',
      letterSpacing: '-.01em'
    }
  }, unit) : null), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-small)',
      color: 'var(--text-secondary)',
      maxWidth: '34ch',
      lineHeight: 'var(--lh-normal)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { StatFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatFigure.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  default: {
    background: 'rgba(255,255,255,.06)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--line-hairline)'
  },
  accent: {
    background: 'var(--mj-orange)',
    color: 'var(--text-on-accent)',
    border: '1px solid var(--mj-orange)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--line-strong)'
  },
  paper: {
    background: 'var(--mj-ink)',
    color: 'var(--n-0)',
    border: '1px solid var(--mj-ink)'
  }
};
function Tag({
  children,
  tone = 'default',
  size = 'md',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: size === 'sm' ? '4px 8px' : '6px 11px',
      fontSize: size === 'sm' ? '.6875rem' : 'var(--type-label)',
      fontWeight: 'var(--w-semibold)',
      letterSpacing: '.08em',
      lineHeight: 1.25,
      borderRadius: 'var(--r-1)',
      whiteSpace: 'nowrap',
      ...(TONE[tone] || TONE.default),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/pitch/CharacterCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CharacterCard({
  src,
  name,
  note,
  tone = 'paper',
  size = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = tone === 'accent' ? 'var(--mj-orange)' : tone === 'ink' ? 'var(--mj-ink)' : 'var(--surface-paper)';
  const fg = tone === 'paper' ? 'var(--text-on-paper)' : 'var(--n-0)';
  const dim = size === 'sm' ? 104 : size === 'lg' ? 220 : 152;
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      width: dim,
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: dim,
      height: dim,
      background: bg,
      borderRadius: 'var(--r-2)',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center',
      transform: hover ? 'translateY(-4px) rotate(-1.2deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: typeof name === 'string' ? name : '',
    style: {
      width: '112%',
      height: '112%',
      objectFit: 'contain',
      objectPosition: 'center 8%'
    }
  }) : null), name || note ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, name ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption)',
      fontWeight: 'var(--w-semibold)',
      color: 'var(--text-primary)'
    }
  }, name) : null, note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, note) : null) : null);
}
Object.assign(__ds_scope, { CharacterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pitch/CharacterCard.jsx", error: String((e && e.message) || e) }); }

// components/pitch/CopyField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CopyField({
  value,
  label,
  style,
  ...rest
}) {
  const [done, setDone] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (e) {/* clipboard unavailable */}
    setDone(true);
    setTimeout(() => setDone(false), 1600);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: copy,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      padding: '14px 18px',
      cursor: 'pointer',
      textAlign: 'left',
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '2px solid ' + (hover || done ? 'var(--mj-orange)' : 'var(--line-strong)'),
      borderRadius: 'var(--r-1)',
      fontFamily: 'var(--font-core)',
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-label)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-body)',
      fontWeight: 'var(--w-semibold)'
    }
  }, value)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-label)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--ls-label)',
      color: done ? 'var(--text-accent)' : 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, done ? '복사됨' : 'COPY'));
}
Object.assign(__ds_scope, { CopyField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pitch/CopyField.jsx", error: String((e && e.message) || e) }); }

// components/pitch/OfferCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function OfferCard({
  code,
  title,
  description,
  thumb,
  tone = 'dark',
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const paper = tone === 'paper';
  const Root = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Root, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-5)',
      background: paper ? 'var(--surface-paper)' : 'var(--surface-card)',
      color: paper ? 'var(--text-on-paper)' : 'var(--text-primary)',
      border: '1px solid ' + (paper ? 'transparent' : 'var(--line-hairline)'),
      borderTop: '3px solid ' + (hover ? 'var(--mj-orange)' : paper ? 'var(--mj-ink)' : 'var(--line-strong)'),
      borderRadius: 'var(--r-2)',
      textDecoration: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      transform: hover && href ? 'translateY(-3px)' : 'none',
      ...style
    }
  }, rest), code ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--type-label)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, code) : null, thumb ? /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      background: 'var(--surface-inset)',
      borderRadius: 'var(--r-1)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--type-title)',
      fontWeight: 'var(--w-black)',
      letterSpacing: 'var(--ls-headline)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-small)',
      lineHeight: 'var(--lh-relaxed)',
      color: paper ? 'var(--text-on-paper-muted)' : 'var(--text-secondary)'
    }
  }, description) : null);
}
Object.assign(__ds_scope, { OfferCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pitch/OfferCard.jsx", error: String((e && e.message) || e) }); }

// components/pitch/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProcessStep({
  index,
  code,
  title,
  description,
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("li", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0,1fr)',
      gap: 'var(--sp-5)',
      padding: 'var(--sp-5) 0',
      borderBottom: last ? 'none' : '1px solid var(--line-hairline)',
      listStyle: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-black)',
      fontSize: 'clamp(1.75rem,4vw,2.75rem)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--mj-orange)',
      fontVariantNumeric: 'tabular-nums',
      minWidth: '2.2em'
    }
  }, index), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)'
    }
  }, code ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--type-label-lg)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase'
    }
  }, code) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--type-body)',
      fontWeight: 'var(--w-semibold)',
      color: 'var(--text-primary)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-small)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-secondary)',
      maxWidth: '52ch'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pitch/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/work/ToonCarousel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Instagram-style horizontal cut carousel for a project's toon panels. */
function ToonCarousel({
  slides = [],
  ratio = '4 / 5',
  label,
  treatment = 'none',
  style,
  ...rest
}) {
  const [i, setI] = React.useState(0);
  const trackRef = React.useRef(null);
  const n = slides.length || 1;
  const go = next => {
    const k = Math.max(0, Math.min(n - 1, next));
    setI(k);
    const t = trackRef.current;
    if (t) t.scrollTo({
      left: k * t.clientWidth,
      behavior: 'smooth'
    });
  };
  const onScroll = () => {
    const t = trackRef.current;
    if (t) setI(Math.round(t.scrollLeft / Math.max(1, t.clientWidth)));
  };
  const arrow = dir => ({
    position: 'absolute',
    top: '50%',
    [dir === 'prev' ? 'left' : 'right']: 10,
    transform: 'translateY(-50%)',
    width: 34,
    height: 34,
    display: 'grid',
    placeItems: 'center',
    background: 'rgba(10,10,10,.62)',
    color: 'var(--n-0)',
    border: '1px solid var(--line-strong)',
    borderRadius: 'var(--r-pill)',
    cursor: 'pointer',
    fontSize: 14,
    lineHeight: 1,
    backdropFilter: 'blur(var(--blur-veil))',
    opacity: dir === 'prev' ? i === 0 ? .25 : 1 : i === n - 1 ? .25 : 1,
    transition: 'opacity var(--dur-fast) var(--ease-out)'
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-inset)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--r-2)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onScroll: onScroll,
    style: {
      display: 'flex',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollbarWidth: 'none',
      aspectRatio: ratio
    }
  }, (slides.length ? slides : [{}]).map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: '0 0 100%',
      scrollSnapAlign: 'start',
      position: 'relative',
      background: k % 2 ? 'var(--surface-ink)' : 'var(--n-700)'
    }
  }, s.src ? /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: s.alt || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: treatment === 'duotone' ? 'var(--toon-duotone)' : 'none'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-muted)',
      fontSize: 'var(--type-label)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--ls-label)'
    }
  }, '[CREATIVE ' + String(k + 1).padStart(2, '0') + ']')))), n > 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    "aria-label": "\uC774\uC804",
    onClick: () => go(i - 1),
    style: arrow('prev')
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    "aria-label": "\uB2E4\uC74C",
    onClick: () => go(i + 1),
    style: arrow('next')
  }, "\u203A"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 12,
      padding: '3px 9px',
      background: 'rgba(10,10,10,.66)',
      color: 'var(--n-0)',
      borderRadius: 'var(--r-pill)',
      fontSize: '.6875rem',
      fontWeight: 'var(--w-bold)',
      fontVariantNumeric: 'tabular-nums',
      backdropFilter: 'blur(var(--blur-veil))'
    }
  }, i + 1, "/", n)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      minHeight: 18
    }
  }, n > 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, Array.from({
    length: n
  }).map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    "aria-label": k + 1 + '번째 컷',
    onClick: () => go(k),
    style: {
      width: k === i ? 18 : 6,
      height: 6,
      padding: 0,
      cursor: 'pointer',
      borderRadius: 'var(--r-pill)',
      border: 'none',
      background: k === i ? 'var(--mj-orange)' : 'var(--line-strong)',
      transition: 'width var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)'
    }
  }))) : null, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--ls-body)'
    }
  }, label) : null));
}
Object.assign(__ds_scope, { ToonCarousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/ToonCarousel.jsx", error: String((e && e.message) || e) }); }

// components/work/WorkCase.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  term,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--type-label)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, term), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-small)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-secondary)',
      maxWidth: '44ch'
    }
  }, children));
}
function WorkCase({
  index,
  brand = '[BRAND]',
  categories = [],
  objective,
  approach,
  result,
  slides = [],
  ratio,
  carouselLabel,
  reverse = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'grid',
      gap: 'clamp(24px,4vw,56px)',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
      alignItems: 'start',
      paddingTop: 'var(--sp-7)',
      borderTop: '1px solid var(--line-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 2 : 1,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ToonCarousel, {
    slides: slides,
    ratio: ratio,
    label: carouselLabel
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)',
      order: reverse ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, index ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--type-label)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--ls-label-wide)',
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, index) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--type-headline)',
      letterSpacing: 'var(--ls-headline)'
    }
  }, brand), categories.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--sp-2)'
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: c,
    size: "sm"
  }, c))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-5)'
    }
  }, objective ? /*#__PURE__*/React.createElement(Field, {
    term: "Objective"
  }, objective) : null, approach ? /*#__PURE__*/React.createElement(Field, {
    term: "Approach"
  }, approach) : null, result ? /*#__PURE__*/React.createElement(Field, {
    term: "Result"
  }, result) : null)));
}
Object.assign(__ds_scope, { WorkCase });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/WorkCase.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatFigure = __ds_scope.StatFigure;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CharacterCard = __ds_scope.CharacterCard;

__ds_ns.CopyField = __ds_scope.CopyField;

__ds_ns.OfferCard = __ds_scope.OfferCard;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ToonCarousel = __ds_scope.ToonCarousel;

__ds_ns.WorkCase = __ds_scope.WorkCase;

})();
