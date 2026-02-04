import { jsxs as X, jsx as m, Fragment as kt } from "react/jsx-runtime";
import z, { forwardRef as Ct, useState as Ne, useRef as vt, useEffect as wt, useCallback as ie } from "react";
var xt = /\s+/g, Mt = (e) => typeof e != "string" || !e ? e : e.replace(xt, " ").trim(), ve = (...e) => {
  const o = [], t = (r) => {
    if (!r && r !== 0 && r !== 0n) return;
    if (Array.isArray(r)) {
      for (let n = 0, a = r.length; n < a; n++) t(r[n]);
      return;
    }
    const s = typeof r;
    if (s === "string" || s === "number" || s === "bigint") {
      if (s === "number" && r !== r) return;
      o.push(String(r));
    } else if (s === "object") {
      const n = Object.keys(r);
      for (let a = 0, c = n.length; a < c; a++) {
        const l = n[a];
        r[l] && o.push(l);
      }
    }
  };
  for (let r = 0, s = e.length; r < s; r++) {
    const n = e[r];
    n != null && t(n);
  }
  return o.length > 0 ? Mt(o.join(" ")) : void 0;
}, Ee = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, K = (e) => {
  if (!e || typeof e != "object") return !0;
  for (const o in e) return !1;
  return !0;
}, Lt = (e, o) => {
  if (e === o) return !0;
  if (!e || !o) return !1;
  const t = Object.keys(e), r = Object.keys(o);
  if (t.length !== r.length) return !1;
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    if (!r.includes(n) || e[n] !== o[n]) return !1;
  }
  return !0;
}, Vt = (e, o) => {
  for (const t in o)
    if (Object.prototype.hasOwnProperty.call(o, t)) {
      const r = o[t];
      t in e ? e[t] = ve(e[t], r) : e[t] = r;
    }
  return e;
}, Ye = (e, o) => {
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    Array.isArray(r) ? Ye(r, o) : r && o.push(r);
  }
}, Je = (...e) => {
  const o = [];
  Ye(e, o);
  const t = [];
  for (let r = 0; r < o.length; r++)
    o[r] && t.push(o[r]);
  return t;
}, _e = (e, o) => {
  const t = {};
  for (const r in e) {
    const s = e[r];
    if (r in o) {
      const n = o[r];
      Array.isArray(s) || Array.isArray(n) ? t[r] = Je(n, s) : typeof s == "object" && typeof n == "object" && s && n ? t[r] = _e(s, n) : t[r] = n + " " + s;
    } else
      t[r] = s;
  }
  for (const r in o)
    r in e || (t[r] = o[r]);
  return t;
}, At = {
  twMerge: !0,
  twMergeConfig: {}
};
function St() {
  let e = null, o = {}, t = !1;
  return {
    get cachedTwMerge() {
      return e;
    },
    set cachedTwMerge(r) {
      e = r;
    },
    get cachedTwMergeConfig() {
      return o;
    },
    set cachedTwMergeConfig(r) {
      o = r;
    },
    get didTwMergeConfigChange() {
      return t;
    },
    set didTwMergeConfigChange(r) {
      t = r;
    },
    reset() {
      e = null, o = {}, t = !1;
    }
  };
}
var Q = St(), Nt = (e) => {
  const o = (r, s) => {
    const {
      extend: n = null,
      slots: a = {},
      variants: c = {},
      compoundVariants: l = [],
      compoundSlots: p = [],
      defaultVariants: S = {}
    } = r, y = { ...At, ...s }, T = n != null && n.base ? ve(n.base, r == null ? void 0 : r.base) : r == null ? void 0 : r.base, _ = n != null && n.variants && !K(n.variants) ? _e(c, n.variants) : c, A = n != null && n.defaultVariants && !K(n.defaultVariants) ? { ...n.defaultVariants, ...S } : S;
    !K(y.twMergeConfig) && !Lt(y.twMergeConfig, Q.cachedTwMergeConfig) && (Q.didTwMergeConfigChange = !0, Q.cachedTwMergeConfig = y.twMergeConfig);
    const C = K(n == null ? void 0 : n.slots), V = K(a) ? {} : {
      // add "base" to the slots object
      base: ve(r == null ? void 0 : r.base, C && (n == null ? void 0 : n.base)),
      ...a
    }, R = C ? V : Vt(
      { ...n == null ? void 0 : n.slots },
      K(V) ? { base: r == null ? void 0 : r.base } : V
    ), P = K(n == null ? void 0 : n.compoundVariants) ? l : Je(n == null ? void 0 : n.compoundVariants, l), O = (h) => {
      if (K(_) && K(a) && C)
        return e(T, h == null ? void 0 : h.class, h == null ? void 0 : h.className)(y);
      if (P && !Array.isArray(P))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof P}`
        );
      if (p && !Array.isArray(p))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof p}`
        );
      const b = (x, L = _, v = null, M = null) => {
        const i = L[x];
        if (!i || K(i))
          return null;
        const G = (M == null ? void 0 : M[x]) ?? (h == null ? void 0 : h[x]);
        if (G === null) return null;
        const H = Ee(G);
        if (typeof H == "object")
          return null;
        const Y = A == null ? void 0 : A[x], B = H ?? Ee(Y);
        return i[B || "false"];
      }, g = () => {
        if (!_) return null;
        const x = Object.keys(_), L = [];
        for (let v = 0; v < x.length; v++) {
          const M = b(x[v], _);
          M && L.push(M);
        }
        return L;
      }, d = (x, L) => {
        if (!_ || typeof _ != "object") return null;
        const v = [];
        for (const M in _) {
          const i = b(M, _, x, L), G = x === "base" && typeof i == "string" ? i : i && i[x];
          G && v.push(G);
        }
        return v;
      }, I = {};
      for (const x in h) {
        const L = h[x];
        L !== void 0 && (I[x] = L);
      }
      const U = (x, L) => {
        var M;
        const v = typeof (h == null ? void 0 : h[x]) == "object" ? {
          [x]: (M = h[x]) == null ? void 0 : M.initial
        } : {};
        return {
          ...A,
          ...I,
          ...v,
          ...L
        };
      }, $ = (x = [], L) => {
        const v = [], M = x.length;
        for (let i = 0; i < M; i++) {
          const { class: G, className: H, ...Y } = x[i];
          let B = !0;
          const F = U(null, L);
          for (const E in Y) {
            const Z = Y[E], re = F[E];
            if (Array.isArray(Z)) {
              if (!Z.includes(re)) {
                B = !1;
                break;
              }
            } else {
              if ((Z == null || Z === !1) && (re == null || re === !1))
                continue;
              if (re !== Z) {
                B = !1;
                break;
              }
            }
          }
          B && (G && v.push(G), H && v.push(H));
        }
        return v;
      }, N = (x) => {
        const L = $(P, x);
        if (!Array.isArray(L)) return L;
        const v = {}, M = e;
        for (let i = 0; i < L.length; i++) {
          const G = L[i];
          if (typeof G == "string")
            v.base = M(v.base, G)(y);
          else if (typeof G == "object")
            for (const H in G)
              v[H] = M(v[H], G[H])(y);
        }
        return v;
      }, W = (x) => {
        if (p.length < 1) return null;
        const L = {}, v = U(null, x);
        for (let M = 0; M < p.length; M++) {
          const {
            slots: i = [],
            class: G,
            className: H,
            ...Y
          } = p[M];
          if (!K(Y)) {
            let B = !0;
            for (const F in Y) {
              const E = v[F], Z = Y[F];
              if (E === void 0 || (Array.isArray(Z) ? !Z.includes(E) : Z !== E)) {
                B = !1;
                break;
              }
            }
            if (!B) continue;
          }
          for (let B = 0; B < i.length; B++) {
            const F = i[B];
            L[F] || (L[F] = []), L[F].push([G, H]);
          }
        }
        return L;
      };
      if (!K(a) || !C) {
        const x = {};
        if (typeof R == "object" && !K(R)) {
          const L = e;
          for (const v in R)
            x[v] = (M) => {
              const i = N(M), G = W(M);
              return L(
                R[v],
                d(v, M),
                i ? i[v] : void 0,
                G ? G[v] : void 0,
                M == null ? void 0 : M.class,
                M == null ? void 0 : M.className
              )(y);
            };
        }
        return x;
      }
      return e(
        T,
        g(),
        $(P),
        h == null ? void 0 : h.class,
        h == null ? void 0 : h.className
      )(y);
    }, k = () => {
      if (!(!_ || typeof _ != "object"))
        return Object.keys(_);
    };
    return O.variantKeys = k(), O.extend = n, O.base = T, O.slots = R, O.variants = _, O.defaultVariants = A, O.compoundSlots = p, O.compoundVariants = P, O;
  };
  return {
    tv: o,
    createTV: (r) => (s, n) => o(s, n ? _e(r, n) : r)
  };
};
const _t = (e, o) => {
  const t = new Array(e.length + o.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e[r];
  for (let r = 0; r < o.length; r++)
    t[e.length + r] = o[r];
  return t;
}, zt = (e, o) => ({
  classGroupId: e,
  validator: o
}), Qe = (e = /* @__PURE__ */ new Map(), o = null, t) => ({
  nextPart: e,
  validators: o,
  classGroupId: t
}), we = "-", je = [], Tt = "arbitrary..", Rt = (e) => {
  const o = Ot(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return It(a);
      const c = a.split(we), l = c[0] === "" && c.length > 1 ? 1 : 0;
      return et(c, l, o);
    },
    getConflictingClassGroupIds: (a, c) => {
      if (c) {
        const l = r[a], p = t[a];
        return l ? p ? _t(p, l) : l : p || je;
      }
      return t[a] || je;
    }
  };
}, et = (e, o, t) => {
  if (e.length - o === 0)
    return t.classGroupId;
  const s = e[o], n = t.nextPart.get(s);
  if (n) {
    const p = et(e, o + 1, n);
    if (p) return p;
  }
  const a = t.validators;
  if (a === null)
    return;
  const c = o === 0 ? e.join(we) : e.slice(o).join(we), l = a.length;
  for (let p = 0; p < l; p++) {
    const S = a[p];
    if (S.validator(c))
      return S.classGroupId;
  }
}, It = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const o = e.slice(1, -1), t = o.indexOf(":"), r = o.slice(0, t);
  return r ? Tt + r : void 0;
})(), Ot = (e) => {
  const {
    theme: o,
    classGroups: t
  } = e;
  return Ft(t, o);
}, Ft = (e, o) => {
  const t = Qe();
  for (const r in e) {
    const s = e[r];
    Oe(s, t, r, o);
  }
  return t;
}, Oe = (e, o, t, r) => {
  const s = e.length;
  for (let n = 0; n < s; n++) {
    const a = e[n];
    Pt(a, o, t, r);
  }
}, Pt = (e, o, t, r) => {
  if (typeof e == "string") {
    Gt(e, o, t);
    return;
  }
  if (typeof e == "function") {
    Et(e, o, t, r);
    return;
  }
  jt(e, o, t, r);
}, Gt = (e, o, t) => {
  const r = e === "" ? o : tt(o, e);
  r.classGroupId = t;
}, Et = (e, o, t, r) => {
  if (Wt(e)) {
    Oe(e(r), o, t, r);
    return;
  }
  o.validators === null && (o.validators = []), o.validators.push(zt(t, e));
}, jt = (e, o, t, r) => {
  const s = Object.entries(e), n = s.length;
  for (let a = 0; a < n; a++) {
    const [c, l] = s[a];
    Oe(l, tt(o, c), t, r);
  }
}, tt = (e, o) => {
  let t = e;
  const r = o.split(we), s = r.length;
  for (let n = 0; n < s; n++) {
    const a = r[n];
    let c = t.nextPart.get(a);
    c || (c = Qe(), t.nextPart.set(a, c)), t = c;
  }
  return t;
}, Wt = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Dt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let o = 0, t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const s = (n, a) => {
    t[n] = a, o++, o > e && (o = 0, r = t, t = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(n) {
      let a = t[n];
      if (a !== void 0)
        return a;
      if ((a = r[n]) !== void 0)
        return s(n, a), a;
    },
    set(n, a) {
      n in t ? t[n] = a : s(n, a);
    }
  };
}, ze = "!", We = ":", Bt = [], De = (e, o, t, r, s) => ({
  modifiers: e,
  hasImportantModifier: o,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: s
}), $t = (e) => {
  const {
    prefix: o,
    experimentalParseClassName: t
  } = e;
  let r = (s) => {
    const n = [];
    let a = 0, c = 0, l = 0, p;
    const S = s.length;
    for (let C = 0; C < S; C++) {
      const V = s[C];
      if (a === 0 && c === 0) {
        if (V === We) {
          n.push(s.slice(l, C)), l = C + 1;
          continue;
        }
        if (V === "/") {
          p = C;
          continue;
        }
      }
      V === "[" ? a++ : V === "]" ? a-- : V === "(" ? c++ : V === ")" && c--;
    }
    const y = n.length === 0 ? s : s.slice(l);
    let T = y, _ = !1;
    y.endsWith(ze) ? (T = y.slice(0, -1), _ = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(ze) && (T = y.slice(1), _ = !0)
    );
    const A = p && p > l ? p - l : void 0;
    return De(n, _, T, A);
  };
  if (o) {
    const s = o + We, n = r;
    r = (a) => a.startsWith(s) ? n(a.slice(s.length)) : De(Bt, !1, a, void 0, !0);
  }
  if (t) {
    const s = r;
    r = (n) => t({
      className: n,
      parseClassName: s
    });
  }
  return r;
}, Ht = (e) => {
  const o = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((t, r) => {
    o.set(t, 1e6 + r);
  }), (t) => {
    const r = [];
    let s = [];
    for (let n = 0; n < t.length; n++) {
      const a = t[n], c = a[0] === "[", l = o.has(a);
      c || l ? (s.length > 0 && (s.sort(), r.push(...s), s = []), r.push(a)) : s.push(a);
    }
    return s.length > 0 && (s.sort(), r.push(...s)), r;
  };
}, Ut = (e) => ({
  cache: Dt(e.cacheSize),
  parseClassName: $t(e),
  sortModifiers: Ht(e),
  ...Rt(e)
}), Zt = /\s+/, Kt = (e, o) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: s,
    sortModifiers: n
  } = o, a = [], c = e.trim().split(Zt);
  let l = "";
  for (let p = c.length - 1; p >= 0; p -= 1) {
    const S = c[p], {
      isExternal: y,
      modifiers: T,
      hasImportantModifier: _,
      baseClassName: A,
      maybePostfixModifierPosition: C
    } = t(S);
    if (y) {
      l = S + (l.length > 0 ? " " + l : l);
      continue;
    }
    let V = !!C, R = r(V ? A.substring(0, C) : A);
    if (!R) {
      if (!V) {
        l = S + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (R = r(A), !R) {
        l = S + (l.length > 0 ? " " + l : l);
        continue;
      }
      V = !1;
    }
    const P = T.length === 0 ? "" : T.length === 1 ? T[0] : n(T).join(":"), O = _ ? P + ze : P, k = O + R;
    if (a.indexOf(k) > -1)
      continue;
    a.push(k);
    const h = s(R, V);
    for (let b = 0; b < h.length; ++b) {
      const g = h[b];
      a.push(O + g);
    }
    l = S + (l.length > 0 ? " " + l : l);
  }
  return l;
}, qt = (...e) => {
  let o = 0, t, r, s = "";
  for (; o < e.length; )
    (t = e[o++]) && (r = rt(t)) && (s && (s += " "), s += r);
  return s;
}, rt = (e) => {
  if (typeof e == "string")
    return e;
  let o, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (o = rt(e[r])) && (t && (t += " "), t += o);
  return t;
}, Te = (e, ...o) => {
  let t, r, s, n;
  const a = (l) => {
    const p = o.reduce((S, y) => y(S), e());
    return t = Ut(p), r = t.cache.get, s = t.cache.set, n = c, c(l);
  }, c = (l) => {
    const p = r(l);
    if (p)
      return p;
    const S = Kt(l, t);
    return s(l, S), S;
  };
  return n = a, (...l) => n(qt(...l));
}, Xt = [], j = (e) => {
  const o = (t) => t[e] || Xt;
  return o.isThemeGetter = !0, o;
}, ot = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, nt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Yt = /^\d+\/\d+$/, Jt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Qt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, er = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, tr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, se = (e) => Yt.test(e), w = (e) => !!e && !Number.isNaN(Number(e)), ee = (e) => !!e && Number.isInteger(Number(e)), Le = (e) => e.endsWith("%") && w(e.slice(0, -1)), J = (e) => Jt.test(e), or = () => !0, nr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Qt.test(e) && !er.test(e)
), st = () => !1, sr = (e) => tr.test(e), ar = (e) => rr.test(e), lr = (e) => !u(e) && !f(e), ir = (e) => ae(e, it, st), u = (e) => ot.test(e), oe = (e) => ae(e, ct, nr), Ve = (e) => ae(e, mr, w), Be = (e) => ae(e, at, st), cr = (e) => ae(e, lt, ar), ge = (e) => ae(e, dt, sr), f = (e) => nt.test(e), ce = (e) => le(e, ct), dr = (e) => le(e, pr), $e = (e) => le(e, at), ur = (e) => le(e, it), fr = (e) => le(e, lt), he = (e) => le(e, dt, !0), ae = (e, o, t) => {
  const r = ot.exec(e);
  return r ? r[1] ? o(r[1]) : t(r[2]) : !1;
}, le = (e, o, t = !1) => {
  const r = nt.exec(e);
  return r ? r[1] ? o(r[1]) : t : !1;
}, at = (e) => e === "position" || e === "percentage", lt = (e) => e === "image" || e === "url", it = (e) => e === "length" || e === "size" || e === "bg-size", ct = (e) => e === "length", mr = (e) => e === "number", pr = (e) => e === "family-name", dt = (e) => e === "shadow", Re = () => {
  const e = j("color"), o = j("font"), t = j("text"), r = j("font-weight"), s = j("tracking"), n = j("leading"), a = j("breakpoint"), c = j("container"), l = j("spacing"), p = j("radius"), S = j("shadow"), y = j("inset-shadow"), T = j("text-shadow"), _ = j("drop-shadow"), A = j("blur"), C = j("perspective"), V = j("aspect"), R = j("ease"), P = j("animate"), O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], h = () => [...k(), f, u], b = () => ["auto", "hidden", "clip", "visible", "scroll"], g = () => ["auto", "contain", "none"], d = () => [f, u, l], I = () => [se, "full", "auto", ...d()], U = () => [ee, "none", "subgrid", f, u], $ = () => ["auto", {
    span: ["full", ee, f, u]
  }, ee, f, u], N = () => [ee, "auto", f, u], W = () => ["auto", "min", "max", "fr", f, u], x = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], L = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], v = () => ["auto", ...d()], M = () => [se, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...d()], i = () => [e, f, u], G = () => [...k(), $e, Be, {
    position: [f, u]
  }], H = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Y = () => ["auto", "cover", "contain", ur, ir, {
    size: [f, u]
  }], B = () => [Le, ce, oe], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    f,
    u
  ], E = () => ["", w, ce, oe], Z = () => ["solid", "dashed", "dotted", "double"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [w, Le, $e, Be], Ge = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    A,
    f,
    u
  ], fe = () => ["none", w, f, u], me = () => ["none", w, f, u], Me = () => [w, f, u], pe = () => [se, "full", ...d()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [J],
      breakpoint: [J],
      color: [or],
      container: [J],
      "drop-shadow": [J],
      ease: ["in", "out", "in-out"],
      font: [lr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [J],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [J],
      shadow: [J],
      spacing: ["px", w],
      text: [J],
      "text-shadow": [J],
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
        aspect: ["auto", "square", se, u, f, V]
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
        columns: [w, u, f, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
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
        object: h()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: b()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": b()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": b()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: g()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": g()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": g()
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
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
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
        z: [ee, "auto", f, u]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [se, "full", "auto", c, ...d()]
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
        flex: [w, se, "auto", "initial", "none", u]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", w, f, u]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", w, f, u]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ee, "first", "last", "none", f, u]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": U()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: $()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": U()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: $()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        "auto-cols": W()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": W()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: d()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": d()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": d()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...x(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...L(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...L()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...x()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...L(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...L(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": x()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...L(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...L()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: d()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: d()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: d()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: d()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: d()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: d()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: d()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: d()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: d()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: v()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: v()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: v()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: v()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: v()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: v()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: v()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: v()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: v()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": d()
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
        "space-y": d()
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
        size: M()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...M()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...M()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...M()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...M()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...M()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...M()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, ce, oe]
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
        font: [r, f, Ve]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Le, u]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [dr, u, o]
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
        tracking: [s, f, u]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [w, "none", f, Ve]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
          ...d()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", f, u]
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
        list: ["disc", "decimal", "none", f, u]
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
        placeholder: i()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: i()
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
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [w, "from-font", "auto", f, oe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: i()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [w, "auto", f, u]
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
        indent: d()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", f, u]
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
        content: ["none", f, u]
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
        bg: G()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: H()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Y()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ee, f, u],
          radial: ["", f, u],
          conic: [ee, f, u]
        }, fr, cr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: i()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: B()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: B()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: B()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: i()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: i()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: i()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: F()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": F()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": F()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": F()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": F()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": F()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": F()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": F()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": F()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": F()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": F()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": F()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": F()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": F()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": F()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: E()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": E()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": E()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": E()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": E()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": E()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": E()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": E()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": E()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": E()
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
        "divide-y": E()
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
        border: [...Z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Z(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: i()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": i()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": i()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": i()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": i()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": i()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": i()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": i()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": i()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: i()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [w, f, u]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", w, ce, oe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: i()
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
          S,
          he,
          ge
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: i()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, he, ge]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": i()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: E()
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
        ring: i()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [w, oe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": i()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": E()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": i()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", T, he, ge]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": i()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w, f, u]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...re(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
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
        "mask-linear": [w]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": D()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": i()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": i()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": D()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": i()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": i()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": D()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": i()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": i()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": D()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": i()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": i()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": D()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": i()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": i()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": D()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": i()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": i()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": D()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": i()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": i()
      }],
      "mask-image-radial": [{
        "mask-radial": [f, u]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": D()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": i()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": i()
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
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [w]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": D()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": i()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": i()
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
        mask: G()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: H()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Y()
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
        mask: ["none", f, u]
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
          f,
          u
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ge()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [w, f, u]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [w, f, u]
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
          _,
          he,
          ge
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": i()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", w, f, u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [w, f, u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", w, f, u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w, f, u]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", w, f, u]
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
          f,
          u
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ge()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [w, f, u]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [w, f, u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", w, f, u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [w, f, u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", w, f, u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [w, f, u]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w, f, u]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", w, f, u]
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
        "border-spacing": d()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": d()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": d()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", f, u]
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
        duration: [w, "initial", f, u]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", R, f, u]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [w, f, u]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", P, f, u]
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
        perspective: [C, f, u]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": h()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: fe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": fe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": fe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": fe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: me()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": me()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": me()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": me()
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
        skew: Me()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Me()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Me()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [f, u, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: h()
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
        translate: pe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": pe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": pe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": pe()
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
        accent: i()
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
        caret: i()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", f, u]
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
        "scroll-m": d()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": d()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": d()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": d()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": d()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": d()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": d()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": d()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": d()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": d()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": d()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": d()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": d()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": d()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": d()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": d()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": d()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": d()
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
        "will-change": ["auto", "scroll", "contents", "transform", f, u]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...i()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [w, ce, oe, Ve]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...i()]
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
}, gr = (e, {
  cacheSize: o,
  prefix: t,
  experimentalParseClassName: r,
  extend: s = {},
  override: n = {}
}) => (de(e, "cacheSize", o), de(e, "prefix", t), de(e, "experimentalParseClassName", r), be(e.theme, n.theme), be(e.classGroups, n.classGroups), be(e.conflictingClassGroups, n.conflictingClassGroups), be(e.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), de(e, "orderSensitiveModifiers", n.orderSensitiveModifiers), ye(e.theme, s.theme), ye(e.classGroups, s.classGroups), ye(e.conflictingClassGroups, s.conflictingClassGroups), ye(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), ut(e, s, "orderSensitiveModifiers"), e), de = (e, o, t) => {
  t !== void 0 && (e[o] = t);
}, be = (e, o) => {
  if (o)
    for (const t in o)
      de(e, t, o[t]);
}, ye = (e, o) => {
  if (o)
    for (const t in o)
      ut(e, o, t);
}, ut = (e, o, t) => {
  const r = o[t];
  r !== void 0 && (e[t] = e[t] ? e[t].concat(r) : r);
}, hr = (e, ...o) => typeof e == "function" ? Te(Re, e, ...o) : Te(() => gr(Re(), e), ...o), ft = /* @__PURE__ */ Te(Re);
var br = (e) => K(e) ? ft : hr({
  ...e,
  extend: {
    theme: e.theme,
    classGroups: e.classGroups,
    conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
    conflictingClassGroups: e.conflictingClassGroups,
    ...e.extend
  }
}), yr = (e, o) => {
  const t = ve(e);
  return !t || !((o == null ? void 0 : o.twMerge) ?? !0) ? t : ((!Q.cachedTwMerge || Q.didTwMergeConfigChange) && (Q.didTwMergeConfigChange = !1, Q.cachedTwMerge = br(Q.cachedTwMergeConfig)), Q.cachedTwMerge(t) || void 0);
}, kr = (...e) => (o) => yr(e, o), { tv: te } = Nt(kr);
const Ae = te({
  base: "w-2 h-2 rounded-full mr-1",
  variants: {
    type: {
      primary: "bg-base-dk",
      secondary: "bg-neutral-dk-2"
    }
  },
  defaultVariants: {
    type: "primary"
  }
}), Cr = ({ type: e = "primary" }) => /* @__PURE__ */ X("div", { className: "absolute left-[calc(50%-25px)] top-[calc(50%-4px)] flex", children: [
  /* @__PURE__ */ m("span", { className: `${Ae({ type: e })} animate-[loadingState1_1s_infinite]` }),
  /* @__PURE__ */ m("span", { className: `${Ae({ type: e })} animate-[loadingState2_1s_infinite]` }),
  /* @__PURE__ */ m("span", { className: `${Ae({ type: e })} animate-[loadingState3_1s_infinite] mr-0` })
] }), vr = te({
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
}), io = (e) => {
  const {
    children: o,
    variant: t,
    width: r,
    size: s,
    disabled: n,
    loading: a,
    className: c,
    ...l
  } = e;
  return /* @__PURE__ */ m(
    "button",
    {
      className: `${vr({ variant: t, width: r, size: s, disabled: n, loading: a })} ${c}`,
      ...l,
      children: a && t !== "link" ? /* @__PURE__ */ m(Cr, { type: "primary" }) : /* @__PURE__ */ m(kt, { children: o })
    }
  );
}, wr = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), xr = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Mr = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M13.5295 8.35186C12.9571 8.75995 12.2566 9 11.5 9C9.567 9 8 7.433 8 5.5C8 3.567 9.567 2 11.5 2C12.753 2 13.8522 2.65842 14.4705 3.64814M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2086L12.3769 20.8789C12.9753 21.0247 13.5988 21.0388 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7854 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4134 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2091C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1417C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M20 6.5C20 8.433 18.433 10 16.5 10C14.567 10 13 8.433 13 6.5C13 4.567 14.567 3 16.5 3C18.433 3 20 4.567 20 6.5ZM2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7951 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.0399 6 13.7599 5.89101 13.546C5.79513 13.3578 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13L3.6 13C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3578 2.10899 13.546C2 13.7599 2 14.0399 2 14.6Z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Lr = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M6 6L8 4M8 4L6 2M8 4H6C3.79086 4 2 5.79086 2 8M18 18L16 20M16 20L18 22M16 20H18C20.2091 20 22 18.2091 22 16M13.4172 13.4172C14.1994 13.7908 15.0753 14 16 14C19.3137 14 22 11.3137 22 8C22 4.68629 19.3137 2 16 2C12.6863 2 10 4.68629 10 8C10 8.92472 10.2092 9.80057 10.5828 10.5828M14 16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16Z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Vr = ({ ...e }) => /* @__PURE__ */ X("svg", { ...e, children: [
  /* @__PURE__ */ m(
    "path",
    {
      d: "M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ m(
    "path",
    {
      d: "M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
] }), Ar = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Sr = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M18 6L6 18M6 6L18 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Nr = ({ ...e }) => /* @__PURE__ */ X("svg", { ...e, children: [
  /* @__PURE__ */ m("circle", { cx: "12", cy: "12", r: "10", fill: "currentColor" }),
  /* @__PURE__ */ m(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.36614 7.36614C7.8543 6.87798 8.64575 6.87798 9.13391 7.36614L12 10.2323L14.8661 7.36615C15.3543 6.878 16.1457 6.878 16.6339 7.36615C17.122 7.85431 17.122 8.64576 16.6339 9.13392L13.7678 12L16.6339 14.8661C17.122 15.3543 17.122 16.1457 16.6339 16.6339C16.1457 17.122 15.3543 17.122 14.8661 16.6339L12 13.7678L9.13391 16.6339C8.64575 17.122 7.85429 17.122 7.36614 16.6339C6.87798 16.1457 6.87798 15.3543 7.36614 14.8661L10.2323 12L7.36614 9.13391C6.87798 8.64575 6.87798 7.85429 7.36614 7.36614Z",
      fill: "white"
    }
  )
] }), _r = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M20 6L9 17L4 12",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), zr = ({ ...e }) => /* @__PURE__ */ X("svg", { ...e, children: [
  /* @__PURE__ */ m("circle", { cx: "12", cy: "12", r: "10", fill: "currentColor" }),
  /* @__PURE__ */ m(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.8447 7.32856C18.3536 7.79506 18.3879 8.58576 17.9214 9.09466L11.0464 16.5947C10.8161 16.846 10.493 16.9923 10.1522 16.9997C9.81129 17.0071 9.4822 16.875 9.24112 16.6339L6.11612 13.5089C5.62796 13.0207 5.62796 12.2293 6.11612 11.7411C6.60427 11.253 7.39573 11.253 7.88388 11.7411L10.0857 13.943L16.0786 7.40535C16.545 6.89645 17.3358 6.86207 17.8447 7.32856Z",
      fill: "white"
    }
  )
] }), Tr = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m("circle", { cx: "12", cy: "12", r: "10", fill: "currentColor" }) }), Rr = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M11 15V11M11 7H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Ir = ({ ...e }) => /* @__PURE__ */ X("svg", { ...e, viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ m("circle", { cx: "20", cy: "20", r: "20", fill: "#D7FAD9" }),
  /* @__PURE__ */ m(
    "path",
    {
      d: "M30 29V27C30 25.1362 28.7252 23.5701 27 23.126M23.5 11.2908C24.9659 11.8841 26 13.3213 26 15C26 16.6787 24.9659 18.1159 23.5 18.7092M25 29C25 27.1362 25 26.2044 24.6955 25.4693C24.2895 24.4892 23.5108 23.7105 22.5307 23.3045C21.7956 23 20.8638 23 19 23H16C14.1362 23 13.2044 23 12.4693 23.3045C11.4892 23.7105 10.7105 24.4892 10.3045 25.4693C10 26.2044 10 27.1362 10 29M21.5 15C21.5 17.2091 19.7091 19 17.5 19C15.2909 19 13.5 17.2091 13.5 15C13.5 12.7909 15.2909 11 17.5 11C19.7091 11 21.5 12.7909 21.5 15Z",
      stroke: "#0C0F25",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
] }), Or = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M7.09 12.51L13.92 16.49M13.91 5.51L7.09 9.49M19.5 4C19.5 5.65685 18.1569 7 16.5 7C14.8431 7 13.5 5.65685 13.5 4C13.5 2.34315 14.8431 1 16.5 1C18.1569 1 19.5 2.34315 19.5 4ZM7.5 11C7.5 12.6569 6.15685 14 4.5 14C2.84315 14 1.5 12.6569 1.5 11C1.5 9.34315 2.84315 8 4.5 8C6.15685 8 7.5 9.34315 7.5 11ZM19.5 18C19.5 19.6569 18.1569 21 16.5 21C14.8431 21 13.5 19.6569 13.5 18C13.5 16.3431 14.8431 15 16.5 15C18.1569 15 19.5 16.3431 19.5 18Z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Fr = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M9 18L15 12L9 6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Pr = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M18 15L12 9L6 15",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Gr = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M6 9L12 15L18 9",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Er = ({ ...e }) => /* @__PURE__ */ m("svg", { ...e, children: /* @__PURE__ */ m(
  "path",
  {
    d: "M15 18L9 12L15 6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertCircle: wr,
  AlertTriangle: xr,
  Check: _r,
  CheckFilledCircle: zr,
  ChevronDown: Gr,
  ChevronLeft: Er,
  ChevronRight: Fr,
  ChevronUp: Pr,
  CoinsHand: Mr,
  CoinsSwap: Lr,
  Eye: Vr,
  EyeOff: Ar,
  InfoCircle: Rr,
  Invite: Ir,
  Share: Or,
  SolidCircle: Tr,
  XClose: Sr,
  XFilledCircle: Nr
}, Symbol.toStringTag, { value: "Module" })), xe = ({ name: e, size: o, color: t, className: r, ...s }) => {
  const n = jr[e];
  return n ? /* @__PURE__ */ m(
    n,
    {
      height: o,
      width: o,
      viewBox: "0 0 24 24",
      fill: "none",
      color: t,
      className: r,
      ...s
    }
  ) : null;
}, Wr = te({
  base: "relative",
  variants: {
    width: {
      "fit-content": "w-fit",
      full: "w-full"
    }
  }
}), Dr = te({
  base: "text-base-dk w-full peer border p-3 rounded-md outline-none transition-all disabled:bg-neutral-lt-3 disabled:cursor-not-allowed border-neutral focus:ring-brand focus:border-brand focus:ring",
  variants: {
    error: { true: "border-error focus:ring-error focus:border-error" },
    withIcon: { true: "pr-10" }
  }
}), Br = te({
  base: "text-neutral-dk-2 absolute left-3 -top-4 bg-base-lt p-1 text-sm transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-dk-2 peer-focus:-top-4 peer-focus:text-sm peer-disabled:bg-neutral-lt-3 peer-disabled:text-neutral-dk-1 peer-disabled:cursor-not-allowed",
  variants: {
    error: { true: "text-error peer-focus:text-error peer-placeholder-shown:text-neutral-dk-2" }
  }
}), $r = te({
  base: "mt-1 text-sm text-neutral-dk-2",
  variants: { error: { true: "text-error" } }
}), He = te({
  base: "absolute right-3 top-1/2 -translate-y-1/2 p-1 bg-transparent rounded focus:outline-none",
  variants: { withIcon: { true: "cursor-pointer" } }
}), Hr = Ct(
  ({
    label: e,
    error: o,
    width: t,
    supportText: r,
    onIconClick: s,
    icon: n,
    disabled: a,
    variant: c,
    as: l = "input",
    inputRef: p,
    mask: S,
    unmask: y,
    lazy: T,
    onAccept: _,
    overwrite: A,
    ...C
  }, V) => {
    const R = !!o || r, [P, O] = Ne("password"), k = c === "password", h = {
      ...C,
      ...p && { inputRef: p },
      ...S && { mask: S },
      ...y && { unmask: y },
      ...T && { lazy: T },
      ...A && { overwrite: A },
      ..._ && { onAccept: _ }
    };
    return /* @__PURE__ */ X("div", { children: [
      /* @__PURE__ */ X("div", { className: Wr({ width: t }), children: [
        /* @__PURE__ */ m(
          l,
          {
            ...h,
            id: C.name,
            className: Dr({ error: !!o, withIcon: !!n }),
            disabled: a,
            type: k ? P : C.type,
            ref: V,
            placeholder: " "
          }
        ),
        /* @__PURE__ */ m("label", { htmlFor: C.name, className: Br({ error: !!o }), children: e }),
        n && !a && !k && /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: He({ withIcon: !!s }),
            onClick: s,
            tabIndex: -1,
            children: /* @__PURE__ */ m(xe, { name: n, size: 16 })
          }
        ),
        k && !a && /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: He({ withIcon: !!s }),
            onClick: () => O(P === "password" ? "text" : "password"),
            tabIndex: -1,
            children: /* @__PURE__ */ m(xe, { name: P === "password" ? "EyeOff" : "Eye", size: 16 })
          }
        )
      ] }),
      R && /* @__PURE__ */ m("p", { className: $r({ error: !!o }), children: o || r })
    ] });
  }
);
Hr.displayName = "TextInput";
var Ur = (e) => e.type === "checkbox", ue = (e) => e instanceof Date, Fe = (e) => e == null;
const mt = (e) => typeof e == "object";
var ne = (e) => !Fe(e) && !Array.isArray(e) && mt(e) && !ue(e), Zr = (e) => ne(e) && e.target ? Ur(e.target) ? e.target.checked : e.target.value : e, Kr = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, qr = (e, o) => e.has(Kr(o)), Xr = (e) => {
  const o = e.constructor && e.constructor.prototype;
  return ne(o) && o.hasOwnProperty("isPrototypeOf");
}, Yr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function pt(e) {
  if (e instanceof Date)
    return new Date(e);
  const o = typeof FileList < "u" && e instanceof FileList;
  if (Yr && (e instanceof Blob || o))
    return e;
  const t = Array.isArray(e);
  if (!t && !(ne(e) && Xr(e)))
    return e;
  const r = t ? [] : Object.create(Object.getPrototypeOf(e));
  for (const s in e)
    Object.prototype.hasOwnProperty.call(e, s) && (r[s] = pt(e[s]));
  return r;
}
var gt = (e) => /^\w*$/.test(e), Ie = (e) => e === void 0, Jr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ht = (e) => Jr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), q = (e, o, t) => {
  if (!o || !ne(e))
    return t;
  const r = (gt(o) ? [o] : ht(o)).reduce((s, n) => Fe(s) ? s : s[n], e);
  return Ie(r) || r === e ? Ie(e[o]) ? t : e[o] : r;
}, Se = (e) => typeof e == "boolean", ke = (e) => typeof e == "function", Ue = (e, o, t) => {
  let r = -1;
  const s = gt(o) ? [o] : ht(o), n = s.length, a = n - 1;
  for (; ++r < n; ) {
    const c = s[r];
    let l = t;
    if (r !== a) {
      const p = e[c];
      l = ne(p) || Array.isArray(p) ? p : isNaN(+s[r + 1]) ? {} : [];
    }
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return;
    e[c] = l, e = e[c];
  }
};
const Ze = {
  BLUR: "blur",
  CHANGE: "change"
}, Ke = {
  all: "all"
}, bt = z.createContext(null);
bt.displayName = "HookFormControlContext";
const Pe = () => z.useContext(bt);
var Qr = (e, o, t, r = !0) => {
  const s = {
    defaultValues: o._defaultValues
  };
  for (const n in e)
    Object.defineProperty(s, n, {
      get: () => {
        const a = n;
        return o._proxyFormState[a] !== Ke.all && (o._proxyFormState[a] = !r || Ke.all), t && (t[a] = !0), e[a];
      }
    });
  return s;
};
const yt = typeof window < "u" ? z.useLayoutEffect : z.useEffect;
function eo(e) {
  const o = Pe(), { control: t = o, disabled: r, name: s, exact: n } = e || {}, [a, c] = z.useState(t._formState), l = z.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return yt(() => t._subscribe({
    name: s,
    formState: l.current,
    exact: n,
    callback: (p) => {
      !r && c({
        ...t._formState,
        ...p
      });
    }
  }), [s, r, n]), z.useEffect(() => {
    l.current.isValid && t._setValid(!0);
  }, [t]), z.useMemo(() => Qr(a, t, l.current, !1), [a, t]);
}
var to = (e) => typeof e == "string", qe = (e, o, t, r, s) => to(e) ? q(t, e, s) : Array.isArray(e) ? e.map((n) => q(t, n)) : t, Xe = (e) => Fe(e) || !mt(e);
function Ce(e, o, t = /* @__PURE__ */ new WeakSet()) {
  if (Xe(e) || Xe(o))
    return Object.is(e, o);
  if (ue(e) && ue(o))
    return Object.is(e.getTime(), o.getTime());
  const r = Object.keys(e), s = Object.keys(o);
  if (r.length !== s.length)
    return !1;
  if (t.has(e) || t.has(o))
    return !0;
  t.add(e), t.add(o);
  for (const n of r) {
    const a = e[n];
    if (!s.includes(n))
      return !1;
    if (n !== "ref") {
      const c = o[n];
      if (ue(a) && ue(c) || ne(a) && ne(c) || Array.isArray(a) && Array.isArray(c) ? !Ce(a, c, t) : !Object.is(a, c))
        return !1;
    }
  }
  return !0;
}
function ro(e) {
  const o = Pe(), { control: t = o, name: r, defaultValue: s, disabled: n, exact: a, compute: c } = e || {}, l = z.useRef(s), p = z.useRef(c), S = z.useRef(void 0), y = z.useRef(t), T = z.useRef(r);
  p.current = c;
  const [_, A] = z.useState(() => {
    const k = t._getWatch(r, l.current);
    return p.current ? p.current(k) : k;
  }), C = z.useCallback((k) => {
    const h = qe(r, t._names, k || t._formValues, !1, l.current);
    return p.current ? p.current(h) : h;
  }, [t._formValues, t._names, r]), V = z.useCallback((k) => {
    if (!n) {
      const h = qe(r, t._names, k || t._formValues, !1, l.current);
      if (p.current) {
        const b = p.current(h);
        Ce(b, S.current) || (A(b), S.current = b);
      } else
        A(h);
    }
  }, [t._formValues, t._names, n, r]);
  yt(() => ((y.current !== t || !Ce(T.current, r)) && (y.current = t, T.current = r, V()), t._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: a,
    callback: (k) => {
      V(k.values);
    }
  })), [t, a, r, V]), z.useEffect(() => t._removeUnmounted());
  const R = y.current !== t, P = T.current, O = z.useMemo(() => {
    if (n)
      return null;
    const k = !R && !Ce(P, r);
    return R || k ? C() : null;
  }, [n, R, r, P, C]);
  return O !== null ? O : _;
}
function oo(e) {
  const o = Pe(), { name: t, disabled: r, control: s = o, shouldUnregister: n, defaultValue: a, exact: c = !0 } = e, l = qr(s._names.array, t), p = z.useMemo(() => q(s._formValues, t, q(s._defaultValues, t, a)), [s, t, a]), S = ro({
    control: s,
    name: t,
    defaultValue: p,
    exact: c
  }), y = eo({
    control: s,
    name: t,
    exact: c
  }), T = z.useRef(e), _ = z.useRef(void 0), A = z.useRef(s.register(t, {
    ...e.rules,
    value: S,
    ...Se(e.disabled) ? { disabled: e.disabled } : {}
  }));
  T.current = e;
  const C = z.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!q(y.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!q(y.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!q(y.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!q(y.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => q(y.errors, t)
    }
  }), [y, t]), V = z.useCallback((k) => A.current.onChange({
    target: {
      value: Zr(k),
      name: t
    },
    type: Ze.CHANGE
  }), [t]), R = z.useCallback(() => A.current.onBlur({
    target: {
      value: q(s._formValues, t),
      name: t
    },
    type: Ze.BLUR
  }), [t, s._formValues]), P = z.useCallback((k) => {
    const h = q(s._fields, t);
    h && h._f && k && (h._f.ref = {
      focus: () => ke(k.focus) && k.focus(),
      select: () => ke(k.select) && k.select(),
      setCustomValidity: (b) => ke(k.setCustomValidity) && k.setCustomValidity(b),
      reportValidity: () => ke(k.reportValidity) && k.reportValidity()
    });
  }, [s._fields, t]), O = z.useMemo(() => ({
    name: t,
    value: S,
    ...Se(r) || y.disabled ? { disabled: y.disabled || r } : {},
    onChange: V,
    onBlur: R,
    ref: P
  }), [t, r, y.disabled, V, R, P, S]);
  return z.useEffect(() => {
    const k = s._options.shouldUnregister || n, h = _.current;
    h && h !== t && !l && s.unregister(h), s.register(t, {
      ...T.current.rules,
      ...Se(T.current.disabled) ? { disabled: T.current.disabled } : {}
    });
    const b = (g, d) => {
      const I = q(s._fields, g);
      I && I._f && (I._f.mount = d);
    };
    if (b(t, !0), k) {
      const g = pt(q(s._options.defaultValues, t, T.current.defaultValue));
      Ue(s._defaultValues, t, g), Ie(q(s._formValues, t)) && Ue(s._formValues, t, g);
    }
    return !l && s.register(t), _.current = t, () => {
      (l ? k && !s._state.action : k) ? s.unregister(t) : b(t, !1);
    };
  }, [t, s, l, n]), z.useEffect(() => {
    s._setDisabledField({
      disabled: r,
      name: t
    });
  }, [r, t, s]), z.useMemo(() => ({
    field: O,
    formState: y,
    fieldState: C
  }), [O, y, C]);
}
const no = z.createContext(null);
no.displayName = "HookFormContext";
const so = te({
  base: [
    "w-9 h-9 text-center text-base rounded-md border border-neutral transition-all duration-200",
    "sm:w-10 sm:h-10 sm:text-lg sm:rounded-lg",
    "md:w-12 md:h-12 md:text-xl",
    "focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand"
  ],
  variants: {
    disabled: {
      true: "bg-neutral-lt-3 cursor-not-allowed text-neutral"
    },
    error: {
      true: "border-error"
    }
  },
  defaultVariants: {}
});
function co({
  name: e,
  control: o,
  slots: t,
  password: r = !1,
  className: s = "",
  allowedChars: n = "alphanumeric",
  disabled: a = !1,
  readOnly: c = !1
}) {
  const {
    field: { value: l = "", onChange: p, onBlur: S },
    fieldState: { error: y }
  } = oo({ name: e, control: o }), [T, _] = Ne(!1), A = vt([]), [C, V] = Ne(
    () => Array.from({ length: t }, (b, g) => String(l || "")[g] ?? "")
  );
  wt(() => {
    const b = Array.from({ length: t }, (g, d) => String(l || "")[d] ?? "");
    b.join("") !== C.join("") && V(b);
  }, [l, t]);
  const R = ie(
    (b) => {
      switch (n) {
        case "numeric":
          return b.replace(/[^0-9]/g, "");
        case "letters":
          return b.replace(/[^a-zA-Z]/g, "");
        default:
          return b.replace(/[^0-9a-zA-Z]/g, "");
      }
    },
    [n]
  ), P = ie(
    (b, g) => {
      const d = b.target.value, I = R(d);
      if (!I) {
        const N = [...C];
        N[g] = "", V(N), p(N.join(""));
        return;
      }
      const U = I.slice(-1), $ = [...C];
      $[g] = U;
      for (let N = 1; N < I.length && g + N < t; N++)
        $[g + N] = I.charAt(N);
      V($), p($.join("")), g < t - 1 && requestAnimationFrame(() => {
        var N, W, x;
        (N = A.current[g + 1]) == null || N.focus(), (x = (W = A.current[g + 1]) == null ? void 0 : W.select) == null || x.call(W);
      });
    },
    [R, C, p, t]
  ), O = ie(
    (b, g) => {
      var d, I, U, $;
      if (b.key === "Backspace") {
        b.preventDefault();
        const N = [...C];
        C[g] ? (N[g] = "", V(N), p(N.join(""))) : g < t - 1 && C[g + 1] ? (N[g + 1] = "", V(N), p(N.join("")), (d = A.current[g + 1]) == null || d.focus()) : g > 0 && ((I = A.current[g - 1]) == null || I.focus());
        return;
      }
      if (b.key === "ArrowLeft" && g > 0) {
        b.preventDefault(), (U = A.current[g - 1]) == null || U.focus();
        return;
      }
      if (b.key === "ArrowRight" && g < t - 1) {
        b.preventDefault(), ($ = A.current[g + 1]) == null || $.focus();
        return;
      }
      if (b.key.length === 1) {
        const N = R(b.key);
        if (N) {
          b.preventDefault();
          const W = [...C];
          W[g] = N.slice(-1), V(W), p(W.join("")), g < t - 1 && requestAnimationFrame(() => {
            var x, L, v;
            (x = A.current[g + 1]) == null || x.focus(), (v = (L = A.current[g + 1]) == null ? void 0 : L.select) == null || v.call(L);
          });
        }
      }
    },
    [R, C, p, t]
  ), k = ie(
    (b, g) => {
      var N;
      b.preventDefault();
      const d = R(b.clipboardData.getData("text"));
      if (!d) return;
      const I = d.slice(0, t - g).split(""), U = [...C];
      for (let W = 0; W < I.length; W++)
        U[g + W] = I[W];
      V(U), p(U.join(""));
      const $ = Math.min(g + I.length - 1, t - 1);
      (N = A.current[$]) == null || N.focus();
    },
    [R, C, p, t]
  ), h = ie((b) => {
    b.currentTarget.select();
  }, []);
  return /* @__PURE__ */ X("div", { children: [
    /* @__PURE__ */ X("div", { className: `flex items-center gap-2 ${s}`, role: "group", "aria-label": "Code input", children: [
      /* @__PURE__ */ m("div", { className: "flex gap-2 sm:gap-3", children: Array.from({ length: t }).map((b, g) => /* @__PURE__ */ m(
        "input",
        {
          "data-testid": `input-pin-step-${g}`,
          ref: (d) => {
            A.current[g] = d;
          },
          type: r && !T ? "password" : "text",
          inputMode: n === "numeric" ? "numeric" : "text",
          autoComplete: "one-time-code",
          maxLength: 1,
          value: C[g],
          onChange: (d) => P(d, g),
          onKeyDown: (d) => O(d, g),
          onPaste: (d) => k(d, g),
          onBlur: S,
          onFocus: h,
          "aria-label": `Code input ${g + 1}`,
          "aria-invalid": !!y,
          "aria-describedby": y ? `${String(e)}-error` : void 0,
          disabled: a,
          readOnly: c,
          className: so({ disabled: a, error: !!y })
        },
        g
      )) }),
      r && /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => _((b) => !b),
          className: "p-2 cursor-pointer",
          children: /* @__PURE__ */ m(xe, { name: T ? "EyeOff" : "Eye", size: 28 })
        }
      )
    ] }),
    y && /* @__PURE__ */ m("div", { className: "mt-2", children: /* @__PURE__ */ m("span", { id: `${String(e)}-error`, className: "text-sm text-error", children: y.message }) })
  ] });
}
const uo = ({ errors: e }) => e != null && e.length ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-3 bg-error-lt border border-error rounded-sm px-4 py-3", children: e.map((o) => /* @__PURE__ */ X("div", { className: "flex flex-row gap-3", children: [
  /* @__PURE__ */ m("div", { className: "flex-shrink-0 self-center", children: /* @__PURE__ */ m(xe, { name: "AlertTriangle", size: 25, className: "text-error" }) }),
  /* @__PURE__ */ m("p", { className: "flex-1 text-body", children: o.message })
] }, o.code)) }) : null, fo = ({ className: e, ...o }) => /* @__PURE__ */ m("div", { className: ft("animate-pulse h-16 bg-gray-300 rounded w-full", e), ...o }), mo = ({ id: e, label: o, error: t, ...r }) => /* @__PURE__ */ X("div", { className: "flex flex-col min-h-[50px] gap-1", children: [
  /* @__PURE__ */ X("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ m("input", { type: "checkbox", id: e, className: "w-5 h-5 mt-0.5 accent-black cursor-pointer", ...r }),
    /* @__PURE__ */ m("label", { htmlFor: e, className: "text-small cursor-pointer", children: o })
  ] }),
  t && /* @__PURE__ */ m("div", { className: "text-error text-small", children: t })
] });
export {
  io as Button,
  mo as Checkbox,
  co as CodeInput,
  uo as ErrorMessage,
  xe as Icon,
  fo as SkeletonLoading,
  Hr as TextInput
};
