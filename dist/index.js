import { jsx as Ve } from "react/jsx-runtime";
const De = (e, r) => {
  const o = new Array(e.length + r.length);
  for (let t = 0; t < e.length; t++)
    o[t] = e[t];
  for (let t = 0; t < r.length; t++)
    o[e.length + t] = r[t];
  return o;
}, Ke = (e, r) => ({
  classGroupId: e,
  validator: r
}), Te = (e = /* @__PURE__ */ new Map(), r = null, o) => ({
  nextPart: e,
  validators: r,
  classGroupId: o
}), ue = "-", xe = [], Ye = "arbitrary..", qe = (e) => {
  const r = Je(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: t
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return Xe(i);
      const m = i.split(ue), d = m[0] === "" && m.length > 1 ? 1 : 0;
      return Ge(m, d, r);
    },
    getConflictingClassGroupIds: (i, m) => {
      if (m) {
        const d = t[i], b = o[i];
        return d ? b ? De(b, d) : d : b || xe;
      }
      return o[i] || xe;
    }
  };
}, Ge = (e, r, o) => {
  if (e.length - r === 0)
    return o.classGroupId;
  const n = e[r], s = o.nextPart.get(n);
  if (s) {
    const b = Ge(e, r + 1, s);
    if (b) return b;
  }
  const i = o.validators;
  if (i === null)
    return;
  const m = r === 0 ? e.join(ue) : e.slice(r).join(ue), d = i.length;
  for (let b = 0; b < d; b++) {
    const C = i[b];
    if (C.validator(m))
      return C.classGroupId;
  }
}, Xe = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const r = e.slice(1, -1), o = r.indexOf(":"), t = r.slice(0, o);
  return t ? Ye + t : void 0;
})(), Je = (e) => {
  const {
    theme: r,
    classGroups: o
  } = e;
  return He(o, r);
}, He = (e, r) => {
  const o = Te();
  for (const t in e) {
    const n = e[t];
    ke(n, o, t, r);
  }
  return o;
}, ke = (e, r, o, t) => {
  const n = e.length;
  for (let s = 0; s < n; s++) {
    const i = e[s];
    Qe(i, r, o, t);
  }
}, Qe = (e, r, o, t) => {
  if (typeof e == "string") {
    Ze(e, r, o);
    return;
  }
  if (typeof e == "function") {
    et(e, r, o, t);
    return;
  }
  tt(e, r, o, t);
}, Ze = (e, r, o) => {
  const t = e === "" ? r : Re(r, e);
  t.classGroupId = o;
}, et = (e, r, o, t) => {
  if (rt(e)) {
    ke(e(t), r, o, t);
    return;
  }
  r.validators === null && (r.validators = []), r.validators.push(Ke(o, e));
}, tt = (e, r, o, t) => {
  const n = Object.entries(e), s = n.length;
  for (let i = 0; i < s; i++) {
    const [m, d] = n[i];
    ke(d, Re(r, m), o, t);
  }
}, Re = (e, r) => {
  let o = e;
  const t = r.split(ue), n = t.length;
  for (let s = 0; s < n; s++) {
    const i = t[s];
    let m = o.nextPart.get(i);
    m || (m = Te(), o.nextPart.set(i, m)), o = m;
  }
  return o;
}, rt = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, ot = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, o = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  const n = (s, i) => {
    o[s] = i, r++, r > e && (r = 0, t = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let i = o[s];
      if (i !== void 0)
        return i;
      if ((i = t[s]) !== void 0)
        return n(s, i), i;
    },
    set(s, i) {
      s in o ? o[s] = i : n(s, i);
    }
  };
}, be = "!", Ce = ":", st = [], Ae = (e, r, o, t, n) => ({
  modifiers: e,
  hasImportantModifier: r,
  baseClassName: o,
  maybePostfixModifierPosition: t,
  isExternal: n
}), nt = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: o
  } = e;
  let t = (n) => {
    const s = [];
    let i = 0, m = 0, d = 0, b;
    const C = n.length;
    for (let T = 0; T < C; T++) {
      const V = n[T];
      if (i === 0 && m === 0) {
        if (V === Ce) {
          s.push(n.slice(d, T)), d = T + 1;
          continue;
        }
        if (V === "/") {
          b = T;
          continue;
        }
      }
      V === "[" ? i++ : V === "]" ? i-- : V === "(" ? m++ : V === ")" && m--;
    }
    const A = s.length === 0 ? n : n.slice(d);
    let I = A, x = !1;
    A.endsWith(be) ? (I = A.slice(0, -1), x = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      A.startsWith(be) && (I = A.slice(1), x = !0)
    );
    const E = b && b > d ? b - d : void 0;
    return Ae(s, x, I, E);
  };
  if (r) {
    const n = r + Ce, s = t;
    t = (i) => i.startsWith(n) ? s(i.slice(n.length)) : Ae(st, !1, i, void 0, !0);
  }
  if (o) {
    const n = t;
    t = (s) => o({
      className: s,
      parseClassName: n
    });
  }
  return t;
}, at = (e) => {
  const r = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((o, t) => {
    r.set(o, 1e6 + t);
  }), (o) => {
    const t = [];
    let n = [];
    for (let s = 0; s < o.length; s++) {
      const i = o[s], m = i[0] === "[", d = r.has(i);
      m || d ? (n.length > 0 && (n.sort(), t.push(...n), n = []), t.push(i)) : n.push(i);
    }
    return n.length > 0 && (n.sort(), t.push(...n)), t;
  };
}, it = (e) => ({
  cache: ot(e.cacheSize),
  parseClassName: nt(e),
  sortModifiers: at(e),
  ...qe(e)
}), lt = /\s+/, ct = (e, r) => {
  const {
    parseClassName: o,
    getClassGroupId: t,
    getConflictingClassGroupIds: n,
    sortModifiers: s
  } = r, i = [], m = e.trim().split(lt);
  let d = "";
  for (let b = m.length - 1; b >= 0; b -= 1) {
    const C = m[b], {
      isExternal: A,
      modifiers: I,
      hasImportantModifier: x,
      baseClassName: E,
      maybePostfixModifierPosition: T
    } = o(C);
    if (A) {
      d = C + (d.length > 0 ? " " + d : d);
      continue;
    }
    let V = !!T, L = t(V ? E.substring(0, T) : E);
    if (!L) {
      if (!V) {
        d = C + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (L = t(E), !L) {
        d = C + (d.length > 0 ? " " + d : d);
        continue;
      }
      V = !1;
    }
    const F = I.length === 0 ? "" : I.length === 1 ? I[0] : s(I).join(":"), R = x ? F + be : F, U = R + L;
    if (i.indexOf(U) > -1)
      continue;
    i.push(U);
    const w = n(L, V);
    for (let _ = 0; _ < w.length; ++_) {
      const K = w[_];
      i.push(R + K);
    }
    d = C + (d.length > 0 ? " " + d : d);
  }
  return d;
}, dt = (...e) => {
  let r = 0, o, t, n = "";
  for (; r < e.length; )
    (o = e[r++]) && (t = Ne(o)) && (n && (n += " "), n += t);
  return n;
}, Ne = (e) => {
  if (typeof e == "string")
    return e;
  let r, o = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (r = Ne(e[t])) && (o && (o += " "), o += r);
  return o;
}, he = (e, ...r) => {
  let o, t, n, s;
  const i = (d) => {
    const b = r.reduce((C, A) => A(C), e());
    return o = it(b), t = o.cache.get, n = o.cache.set, s = m, m(d);
  }, m = (d) => {
    const b = t(d);
    if (b)
      return b;
    const C = ct(d, o);
    return n(d, C), C;
  };
  return s = i, (...d) => s(dt(...d));
}, ut = [], z = (e) => {
  const r = (o) => o[e] || ut;
  return r.isThemeGetter = !0, r;
}, Ie = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Pe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, mt = /^\d+\/\d+$/, ft = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, pt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, bt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ht = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, J = (e) => mt.test(e), f = (e) => !!e && !Number.isNaN(Number(e)), D = (e) => !!e && Number.isInteger(Number(e)), ge = (e) => e.endsWith("%") && f(e.slice(0, -1)), W = (e) => ft.test(e), yt = () => !0, wt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gt.test(e) && !pt.test(e)
), Oe = () => !1, kt = (e) => bt.test(e), vt = (e) => ht.test(e), xt = (e) => !l(e) && !c(e), Ct = (e) => H(e, je, Oe), l = (e) => Ie.test(e), q = (e) => H(e, Fe, wt), pe = (e) => H(e, Vt, f), Me = (e) => H(e, Ee, Oe), At = (e) => H(e, Le, vt), ie = (e) => H(e, Be, kt), c = (e) => Pe.test(e), te = (e) => Q(e, Fe), Mt = (e) => Q(e, Tt), ze = (e) => Q(e, Ee), zt = (e) => Q(e, je), St = (e) => Q(e, Le), le = (e) => Q(e, Be, !0), H = (e, r, o) => {
  const t = Ie.exec(e);
  return t ? t[1] ? r(t[1]) : o(t[2]) : !1;
}, Q = (e, r, o = !1) => {
  const t = Pe.exec(e);
  return t ? t[1] ? r(t[1]) : o : !1;
}, Ee = (e) => e === "position" || e === "percentage", Le = (e) => e === "image" || e === "url", je = (e) => e === "length" || e === "size" || e === "bg-size", Fe = (e) => e === "length", Vt = (e) => e === "number", Tt = (e) => e === "family-name", Be = (e) => e === "shadow", ye = () => {
  const e = z("color"), r = z("font"), o = z("text"), t = z("font-weight"), n = z("tracking"), s = z("leading"), i = z("breakpoint"), m = z("container"), d = z("spacing"), b = z("radius"), C = z("shadow"), A = z("inset-shadow"), I = z("text-shadow"), x = z("drop-shadow"), E = z("blur"), T = z("perspective"), V = z("aspect"), L = z("ease"), F = z("animate"), R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], w = () => [...U(), c, l], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], K = () => ["auto", "contain", "none"], u = () => [c, l, d], j = () => [J, "full", "auto", ...u()], Z = () => [D, "none", "subgrid", c, l], ee = () => ["auto", {
    span: ["full", D, c, l]
  }, D, c, l], X = () => [D, "auto", c, l], oe = () => ["auto", "min", "max", "fr", c, l], h = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], y = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], p = () => ["auto", ...u()], g = () => [J, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...u()], a = () => [e, c, l], v = () => [...U(), ze, Me, {
    position: [c, l]
  }], N = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], B = () => ["auto", "cover", "contain", zt, Ct, {
    size: [c, l]
  }], G = () => [ge, te, q], k = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    b,
    c,
    l
  ], M = () => ["", f, te, q], P = () => ["solid", "dashed", "dotted", "double"], Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], S = () => [f, ge, ze, Me], ve = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    c,
    l
  ], se = () => ["none", f, c, l], ne = () => ["none", f, c, l], fe = () => [f, c, l], ae = () => [J, "full", ...u()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [W],
      breakpoint: [W],
      color: [yt],
      container: [W],
      "drop-shadow": [W],
      ease: ["in", "out", "in-out"],
      font: [xt],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [W],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [W],
      shadow: [W],
      spacing: ["px", f],
      text: [W],
      "text-shadow": [W],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", J, l, c, V]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [f, l, c, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": R()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": R()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: w()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: _()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": _()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": _()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: K()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": K()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": K()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: j()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": j()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": j()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: j()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: j()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: j()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: j()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: j()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: j()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [D, "auto", c, l]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [J, "full", "auto", m, ...u()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [f, J, "auto", "initial", "none", l]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", f, c, l]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", f, c, l]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [D, "first", "last", "none", c, l]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Z()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ee()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": X()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": X()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Z()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ee()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": X()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": X()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": oe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": oe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: u()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": u()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": u()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...h(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...y(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...y()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...h()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...y(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...y(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": h()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...y(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...y()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: u()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: u()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: u()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: u()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: u()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: u()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: u()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: u()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: u()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: p()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: p()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: p()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: p()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: p()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: p()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: p()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: p()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: p()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": u()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": u()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: g()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...g()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...g()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...g()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...g()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...g()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...g()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, te, q]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [t, c, pe]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ge, l]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Mt, l, r]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, c, l]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [f, "none", c, pe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...u()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", c, l]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", c, l]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: a()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: a()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...P(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [f, "from-font", "auto", c, q]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: a()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [f, "auto", c, l]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: u()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", c, l]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", c, l]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: v()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: N()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: B()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, D, c, l],
          radial: ["", c, l],
          conic: [D, c, l]
        }, St, At]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: a()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: G()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: a()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: a()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: a()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: k()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": k()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": k()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": k()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": k()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": k()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": k()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": k()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": k()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": k()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": k()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": k()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": k()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": k()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": k()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: M()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": M()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": M()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": M()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": M()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": M()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": M()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": M()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": M()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": M()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": M()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...P(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...P(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: a()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": a()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": a()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": a()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": a()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": a()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": a()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": a()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": a()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: a()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...P(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [f, c, l]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", f, te, q]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: a()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          C,
          le,
          ie
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: a()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", A, le, ie]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": a()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: M()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: a()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [f, q]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": a()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": M()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": a()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", I, le, ie]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": a()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [f, c, l]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Y(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [f]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": S()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": S()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": a()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": a()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": S()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": S()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": a()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": a()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": S()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": S()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": a()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": a()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": S()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": S()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": a()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": a()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": S()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": S()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": a()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": a()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": S()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": S()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": a()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": a()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": S()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": S()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": a()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": a()
      }],
      "mask-image-radial": [{
        "mask-radial": [c, l]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": S()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": S()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": a()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": a()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": U()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [f]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": S()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": S()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": a()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": a()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: v()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: N()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: B()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", c, l]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          c,
          l
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ve()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [f, c, l]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f, c, l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          x,
          le,
          ie
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": a()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", f, c, l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f, c, l]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", f, c, l]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [f, c, l]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", f, c, l]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          c,
          l
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ve()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [f, c, l]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f, c, l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", f, c, l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f, c, l]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", f, c, l]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [f, c, l]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [f, c, l]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", f, c, l]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": u()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": u()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": u()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", c, l]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [f, "initial", c, l]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", L, c, l]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [f, c, l]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", F, c, l]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [T, c, l]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": w()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: se()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": se()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": se()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": se()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ne()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ne()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ne()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ne()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: fe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": fe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": fe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [c, l, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: w()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ae()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ae()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ae()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ae()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: a()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: a()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", c, l]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": u()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": u()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": u()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": u()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": u()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": u()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": u()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": u()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": u()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": u()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": u()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": u()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": u()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": u()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": u()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": u()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": u()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": u()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", c, l]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...a()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [f, te, q, pe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...a()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Gt = (e, {
  cacheSize: r,
  prefix: o,
  experimentalParseClassName: t,
  extend: n = {},
  override: s = {}
}) => (re(e, "cacheSize", r), re(e, "prefix", o), re(e, "experimentalParseClassName", t), ce(e.theme, s.theme), ce(e.classGroups, s.classGroups), ce(e.conflictingClassGroups, s.conflictingClassGroups), ce(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), re(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), de(e.theme, n.theme), de(e.classGroups, n.classGroups), de(e.conflictingClassGroups, n.conflictingClassGroups), de(e.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), _e(e, n, "orderSensitiveModifiers"), e), re = (e, r, o) => {
  o !== void 0 && (e[r] = o);
}, ce = (e, r) => {
  if (r)
    for (const o in r)
      re(e, o, r[o]);
}, de = (e, r) => {
  if (r)
    for (const o in r)
      _e(e, r, o);
}, _e = (e, r, o) => {
  const t = r[o];
  t !== void 0 && (e[o] = e[o] ? e[o].concat(t) : t);
}, Rt = (e, ...r) => typeof e == "function" ? he(ye, e, ...r) : he(() => Gt(ye(), e), ...r), We = /* @__PURE__ */ he(ye);
function Dt({ className: e, ...r }) {
  return /* @__PURE__ */ Ve(
    "button",
    {
      ...r,
      className: We(
        "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium bg-primary text-white hover:bg-primary-hover transition-colors",
        e
      )
    }
  );
}
var Nt = /\s+/g, It = (e) => typeof e != "string" || !e ? e : e.replace(Nt, " ").trim(), me = (...e) => {
  const r = [], o = (t) => {
    if (!t && t !== 0 && t !== 0n) return;
    if (Array.isArray(t)) {
      for (let s = 0, i = t.length; s < i; s++) o(t[s]);
      return;
    }
    const n = typeof t;
    if (n === "string" || n === "number" || n === "bigint") {
      if (n === "number" && t !== t) return;
      r.push(String(t));
    } else if (n === "object") {
      const s = Object.keys(t);
      for (let i = 0, m = s.length; i < m; i++) {
        const d = s[i];
        t[d] && r.push(d);
      }
    }
  };
  for (let t = 0, n = e.length; t < n; t++) {
    const s = e[t];
    s != null && o(s);
  }
  return r.length > 0 ? It(r.join(" ")) : void 0;
}, Se = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, O = (e) => {
  if (!e || typeof e != "object") return !0;
  for (const r in e) return !1;
  return !0;
}, Pt = (e, r) => {
  if (e === r) return !0;
  if (!e || !r) return !1;
  const o = Object.keys(e), t = Object.keys(r);
  if (o.length !== t.length) return !1;
  for (let n = 0; n < o.length; n++) {
    const s = o[n];
    if (!t.includes(s) || e[s] !== r[s]) return !1;
  }
  return !0;
}, Ot = (e, r) => {
  for (const o in r)
    if (Object.prototype.hasOwnProperty.call(r, o)) {
      const t = r[o];
      o in e ? e[o] = me(e[o], t) : e[o] = t;
    }
  return e;
}, $e = (e, r) => {
  for (let o = 0; o < e.length; o++) {
    const t = e[o];
    Array.isArray(t) ? $e(t, r) : t && r.push(t);
  }
}, Ue = (...e) => {
  const r = [];
  $e(e, r);
  const o = [];
  for (let t = 0; t < r.length; t++)
    r[t] && o.push(r[t]);
  return o;
}, we = (e, r) => {
  const o = {};
  for (const t in e) {
    const n = e[t];
    if (t in r) {
      const s = r[t];
      Array.isArray(n) || Array.isArray(s) ? o[t] = Ue(s, n) : typeof n == "object" && typeof s == "object" && n && s ? o[t] = we(n, s) : o[t] = s + " " + n;
    } else
      o[t] = n;
  }
  for (const t in r)
    t in e || (o[t] = r[t]);
  return o;
}, Et = {
  twMerge: !0,
  twMergeConfig: {}
};
function Lt() {
  let e = null, r = {}, o = !1;
  return {
    get cachedTwMerge() {
      return e;
    },
    set cachedTwMerge(t) {
      e = t;
    },
    get cachedTwMergeConfig() {
      return r;
    },
    set cachedTwMergeConfig(t) {
      r = t;
    },
    get didTwMergeConfigChange() {
      return o;
    },
    set didTwMergeConfigChange(t) {
      o = t;
    },
    reset() {
      e = null, r = {}, o = !1;
    }
  };
}
var $ = Lt(), jt = (e) => {
  const r = (t, n) => {
    const {
      extend: s = null,
      slots: i = {},
      variants: m = {},
      compoundVariants: d = [],
      compoundSlots: b = [],
      defaultVariants: C = {}
    } = t, A = { ...Et, ...n }, I = s != null && s.base ? me(s.base, t == null ? void 0 : t.base) : t == null ? void 0 : t.base, x = s != null && s.variants && !O(s.variants) ? we(m, s.variants) : m, E = s != null && s.defaultVariants && !O(s.defaultVariants) ? { ...s.defaultVariants, ...C } : C;
    !O(A.twMergeConfig) && !Pt(A.twMergeConfig, $.cachedTwMergeConfig) && ($.didTwMergeConfigChange = !0, $.cachedTwMergeConfig = A.twMergeConfig);
    const T = O(s == null ? void 0 : s.slots), V = O(i) ? {} : {
      // add "base" to the slots object
      base: me(t == null ? void 0 : t.base, T && (s == null ? void 0 : s.base)),
      ...i
    }, L = T ? V : Ot(
      { ...s == null ? void 0 : s.slots },
      O(V) ? { base: t == null ? void 0 : t.base } : V
    ), F = O(s == null ? void 0 : s.compoundVariants) ? d : Ue(s == null ? void 0 : s.compoundVariants, d), R = (w) => {
      if (O(x) && O(i) && T)
        return e(I, w == null ? void 0 : w.class, w == null ? void 0 : w.className)(A);
      if (F && !Array.isArray(F))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof F}`
        );
      if (b && !Array.isArray(b))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof b}`
        );
      const _ = (h, y = x, p = null, g = null) => {
        const a = y[h];
        if (!a || O(a))
          return null;
        const v = (g == null ? void 0 : g[h]) ?? (w == null ? void 0 : w[h]);
        if (v === null) return null;
        const N = Se(v);
        if (typeof N == "object")
          return null;
        const B = E == null ? void 0 : E[h], G = N ?? Se(B);
        return a[G || "false"];
      }, K = () => {
        if (!x) return null;
        const h = Object.keys(x), y = [];
        for (let p = 0; p < h.length; p++) {
          const g = _(h[p], x);
          g && y.push(g);
        }
        return y;
      }, u = (h, y) => {
        if (!x || typeof x != "object") return null;
        const p = [];
        for (const g in x) {
          const a = _(g, x, h, y), v = h === "base" && typeof a == "string" ? a : a && a[h];
          v && p.push(v);
        }
        return p;
      }, j = {};
      for (const h in w) {
        const y = w[h];
        y !== void 0 && (j[h] = y);
      }
      const Z = (h, y) => {
        var g;
        const p = typeof (w == null ? void 0 : w[h]) == "object" ? {
          [h]: (g = w[h]) == null ? void 0 : g.initial
        } : {};
        return {
          ...E,
          ...j,
          ...p,
          ...y
        };
      }, ee = (h = [], y) => {
        const p = [], g = h.length;
        for (let a = 0; a < g; a++) {
          const { class: v, className: N, ...B } = h[a];
          let G = !0;
          const k = Z(null, y);
          for (const M in B) {
            const P = B[M], Y = k[M];
            if (Array.isArray(P)) {
              if (!P.includes(Y)) {
                G = !1;
                break;
              }
            } else {
              if ((P == null || P === !1) && (Y == null || Y === !1))
                continue;
              if (Y !== P) {
                G = !1;
                break;
              }
            }
          }
          G && (v && p.push(v), N && p.push(N));
        }
        return p;
      }, X = (h) => {
        const y = ee(F, h);
        if (!Array.isArray(y)) return y;
        const p = {}, g = e;
        for (let a = 0; a < y.length; a++) {
          const v = y[a];
          if (typeof v == "string")
            p.base = g(p.base, v)(A);
          else if (typeof v == "object")
            for (const N in v)
              p[N] = g(p[N], v[N])(A);
        }
        return p;
      }, oe = (h) => {
        if (b.length < 1) return null;
        const y = {}, p = Z(null, h);
        for (let g = 0; g < b.length; g++) {
          const {
            slots: a = [],
            class: v,
            className: N,
            ...B
          } = b[g];
          if (!O(B)) {
            let G = !0;
            for (const k in B) {
              const M = p[k], P = B[k];
              if (M === void 0 || (Array.isArray(P) ? !P.includes(M) : P !== M)) {
                G = !1;
                break;
              }
            }
            if (!G) continue;
          }
          for (let G = 0; G < a.length; G++) {
            const k = a[G];
            y[k] || (y[k] = []), y[k].push([v, N]);
          }
        }
        return y;
      };
      if (!O(i) || !T) {
        const h = {};
        if (typeof L == "object" && !O(L)) {
          const y = e;
          for (const p in L)
            h[p] = (g) => {
              const a = X(g), v = oe(g);
              return y(
                L[p],
                u(p, g),
                a ? a[p] : void 0,
                v ? v[p] : void 0,
                g == null ? void 0 : g.class,
                g == null ? void 0 : g.className
              )(A);
            };
        }
        return h;
      }
      return e(
        I,
        K(),
        ee(F),
        w == null ? void 0 : w.class,
        w == null ? void 0 : w.className
      )(A);
    }, U = () => {
      if (!(!x || typeof x != "object"))
        return Object.keys(x);
    };
    return R.variantKeys = U(), R.extend = s, R.base = I, R.slots = L, R.variants = x, R.defaultVariants = E, R.compoundSlots = b, R.compoundVariants = F, R;
  };
  return {
    tv: r,
    createTV: (t) => (n, s) => r(n, s ? we(t, s) : t)
  };
}, Ft = (e) => O(e) ? We : Rt({
  ...e,
  extend: {
    theme: e.theme,
    classGroups: e.classGroups,
    conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
    conflictingClassGroups: e.conflictingClassGroups,
    ...e.extend
  }
}), Bt = (e, r) => {
  const o = me(e);
  return !o || !((r == null ? void 0 : r.twMerge) ?? !0) ? o : ((!$.cachedTwMerge || $.didTwMergeConfigChange) && ($.didTwMergeConfigChange = !1, $.cachedTwMerge = Ft($.cachedTwMergeConfig)), $.cachedTwMerge(o) || void 0);
}, _t = (...e) => (r) => Bt(e, r), { tv: Wt } = jt(_t);
const $t = Wt({
  base: "relative font-family font-bold rounded-full active:opacity-80 cursor-pointer",
  variants: {
    variant: {
      primary: "bg-brand text-base-dk",
      secondary: "bg-base-lt text-brand border-2",
      link: "text-brand"
    },
    width: {
      "fit-content": "w-fit-content",
      full: "w-full"
    },
    size: {
      default: "p-3 leading-6",
      support: "p-2 text-xs",
      desktop: "p-4 text-lg",
      none: "p-0 leading-none"
      // 👈
    },
    disabled: {
      true: "cursor-not-allowed",
      false: ""
    },
    loading: {
      true: "bg-neutral-lt-2 cursor-not-allowed border-none h-[48px]",
      false: ""
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      disabled: !0,
      class: "bg-neutral-lt-2 text-neutral-dk-2"
    },
    {
      variant: "secondary",
      disabled: !0,
      class: "border-1 bg-base-lt text-neutral-dk-2"
    },
    {
      variant: "link",
      disabled: !0,
      class: "text-neutral-dk-2"
    },
    {
      variant: "link",
      loading: !0,
      class: "bg-transparent border-none text-neutral-dk-2"
    }
  ],
  defaultVariants: {
    variant: "primary",
    width: "fit-content",
    size: "default"
  }
}), Kt = (e) => {
  const {
    children: r,
    variant: o,
    width: t,
    size: n,
    disabled: s,
    loading: i,
    className: m,
    ...d
  } = e;
  return /* @__PURE__ */ Ve(
    "button",
    {
      className: `${$t({ variant: o, width: t, size: n, disabled: s, loading: i })} ${m}`,
      ...d,
      children: r
    }
  );
};
export {
  Dt as Button,
  Kt as GenericButton
};
