!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function(e, t, n) {
    n(1)(".this-class").on("click", e => {
      e.preventDefault(), console.log(e);
    });
  },
  function(e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */ !(function(t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function(e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function(n, i) {
      "use strict";
      var o = [],
        a = n.document,
        s = Object.getPrototypeOf,
        u = o.slice,
        l = o.concat,
        c = o.push,
        f = o.indexOf,
        p = {},
        d = p.toString,
        h = p.hasOwnProperty,
        g = h.toString,
        v = g.call(Object),
        y = {},
        m = function(e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        x = function(e) {
          return null != e && e === e.window;
        },
        b = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          i,
          o = (n = n || a).createElement("script");
        if (((o.text = e), t))
          for (r in b)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function T(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? p[d.call(e)] || "object"
          : typeof e;
      }
      var C = function(e, t) {
          return new C.fn.init(e, t);
        },
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function S(e) {
        var t = !!e && "length" in e && e.length,
          n = T(e);
        return (
          !m(e) &&
          !x(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (C.fn = C.prototype = {
        jquery: "3.4.1",
        constructor: C,
        length: 0,
        toArray: function() {
          return u.call(this);
        },
        get: function(e) {
          return null == e
            ? u.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function(e) {
          var t = C.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function(e) {
          return C.each(this, e);
        },
        map: function(e) {
          return this.pushStack(
            C.map(this, function(t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function() {
          return this.pushStack(u.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: o.sort,
        splice: o.splice
      }),
        (C.extend = C.fn.extend = function() {
          var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
          for (
            "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || m(a) || (a = {}),
              s === u && ((a = this), s--);
            s < u;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    a !== r &&
                    (l && r && (C.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = a[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || C.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (a[t] = C.extend(l, o, r)))
                      : void 0 !== r && (a[t] = r));
          return a;
        }),
        C.extend({
          expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(e) {
            throw new Error(e);
          },
          noop: function() {},
          isPlainObject: function(e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== d.call(e)) &&
              (!(t = s(e)) ||
                ("function" ==
                  typeof (n = h.call(t, "constructor") && t.constructor) &&
                  g.call(n) === v))
            );
          },
          isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function(e, t) {
            w(e, { nonce: t && t.nonce });
          },
          each: function(e, t) {
            var n,
              r = 0;
            if (S(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim: function(e) {
            return null == e ? "" : (e + "").replace(E, "");
          },
          makeArray: function(e, t) {
            var n = t || [];
            return (
              null != e &&
                (S(Object(e))
                  ? C.merge(n, "string" == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray: function(e, t, n) {
            return null == t ? -1 : f.call(t, e, n);
          },
          merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
              !t(e[i], i) !== a && r.push(e[i]);
            return r;
          },
          map: function(e, t, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (S(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && a.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return l.apply([], a);
          },
          guid: 1,
          support: y
        }),
        "function" == typeof Symbol &&
          (C.fn[Symbol.iterator] = o[Symbol.iterator]),
        C.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function(e, t) {
            p["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var k =
        /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
        (function(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            y,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ue(),
            S = ue(),
            k = ue(),
            N = ue(),
            A = function(e, t) {
              return e === t && (f = !0), 0;
            },
            D = {}.hasOwnProperty,
            j = [],
            L = j.pop,
            q = j.push,
            H = j.push,
            O = j.slice,
            P = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            R =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W =
              "\\[" +
              M +
              "*(" +
              I +
              ")(?:" +
              M +
              "*([*^$|!~]?=)" +
              M +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              I +
              "))|)" +
              M +
              "*\\]",
            $ =
              ":(" +
              I +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              W +
              ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp(
              "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
              "g"
            ),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + W),
              PSEUDO: new RegExp("^" + $),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  M +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  M +
                  "*(?:([+-]|)" +
                  M +
                  "*(\\d+)|))" +
                  M +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + R + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  M +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  M +
                  "*((?:-\\d)?\\d*)" +
                  M +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)",
              "ig"
            ),
            ne = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            oe = function() {
              p();
            },
            ae = be(
              function(e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            H.apply((j = O.call(w.childNodes)), w.childNodes),
              j[w.childNodes.length].nodeType;
          } catch (e) {
            H = {
              apply: j.length
                ? function(e, t) {
                    q.apply(e, O.call(t));
                  }
                : function(e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  }
            };
          }
          function se(e, t, r, i) {
            var o,
              s,
              l,
              c,
              f,
              h,
              y,
              m = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
            )
              return r;
            if (
              !i &&
              ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
            ) {
              if (11 !== T && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === T) {
                    if (!(l = t.getElementById(o))) return r;
                    if (l.id === o) return r.push(l), r;
                  } else if (
                    m &&
                    (l = m.getElementById(o)) &&
                    x(t, l) &&
                    l.id === o
                  )
                    return r.push(l), r;
                } else {
                  if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return H.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !N[e + " "] &&
                (!v || !v.test(e)) &&
                (1 !== T || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((y = e), (m = t), 1 === T && U.test(e))) {
                  for (
                    (c = t.getAttribute("id"))
                      ? (c = c.replace(re, ie))
                      : t.setAttribute("id", (c = b)),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = "#" + c + " " + xe(h[s]);
                  (y = h.join(",")),
                    (m = (ee.test(e) && ye(t.parentNode)) || t);
                }
                try {
                  return H.apply(r, m.querySelectorAll(y)), r;
                } catch (t) {
                  N(e, !0);
                } finally {
                  c === b && t.removeAttribute("id");
                }
              }
            }
            return u(e.replace(B, "$1"), t, r, i);
          }
          function ue() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            };
          }
          function le(e) {
            return (e[b] = !0), e;
          }
          function ce(e) {
            var t = d.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function de(e) {
            return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function(t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ve(e) {
            return le(function(t) {
              return (
                (t = +t),
                le(function(n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (o = se.isXML = function(e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || "HTML");
          }),
          (p = se.setDocument = function(e) {
            var t,
              i,
              a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement
              ? ((h = (d = a).documentElement),
                (g = !o(d)),
                w !== d &&
                  (i = d.defaultView) &&
                  i.top !== i &&
                  (i.addEventListener
                    ? i.addEventListener("unload", oe, !1)
                    : i.attachEvent && i.attachEvent("onunload", oe)),
                (n.attributes = ce(function(e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = ce(function(e) {
                  return (
                    e.appendChild(d.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = K.test(d.getElementsByClassName)),
                (n.getById = ce(function(e) {
                  return (
                    (h.appendChild(e).id = b),
                    !d.getElementsByName || !d.getElementsByName(b).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function(e) {
                      var t = e.replace(te, ne);
                      return function(e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (r.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function(e) {
                      var t = e.replace(te, ne);
                      return function(e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n,
                          r,
                          i,
                          o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                          for (
                            i = t.getElementsByName(e), r = 0;
                            (o = i[r++]);

                          )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function(e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function(e, t) {
                      var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                      return t.getElementsByClassName(e);
                  }),
                (y = []),
                (v = []),
                (n.qsa = K.test(d.querySelectorAll)) &&
                  (ce(function(e) {
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      b +
                      "'></a><select id='" +
                      b +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        v.push("[*^$]=" + M + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        v.push("\\[" + M + "*(?:value|" + R + ")"),
                      e.querySelectorAll("[id~=" + b + "-]").length ||
                        v.push("~="),
                      e.querySelectorAll(":checked").length ||
                        v.push(":checked"),
                      e.querySelectorAll("a#" + b + "+*").length ||
                        v.push(".#.+[+~]");
                  }),
                  ce(function(e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        v.push("name" + M + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        v.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        v.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      v.push(",.*:");
                  })),
                (n.matchesSelector = K.test(
                  (m =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  ce(function(e) {
                    (n.disconnectedMatch = m.call(e, "*")),
                      m.call(e, "[s!='']:x"),
                      y.push("!=", $);
                  }),
                (v = v.length && new RegExp(v.join("|"))),
                (y = y.length && new RegExp(y.join("|"))),
                (t = K.test(h.compareDocumentPosition)),
                (x =
                  t || K.test(h.contains)
                    ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function(e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (A = t
                  ? function(e, t) {
                      if (e === t) return (f = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === d || (e.ownerDocument === w && x(w, e))
                            ? -1
                            : t === d || (t.ownerDocument === w && x(w, t))
                            ? 1
                            : c
                            ? P(c, e) - P(c, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (f = !0), 0;
                      var n,
                        r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                      if (!i || !o)
                        return e === d
                          ? -1
                          : t === d
                          ? 1
                          : i
                          ? -1
                          : o
                          ? 1
                          : c
                          ? P(c, e) - P(c, t)
                          : 0;
                      if (i === o) return pe(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (; a[r] === s[r]; ) r++;
                      return r
                        ? pe(a[r], s[r])
                        : a[r] === w
                        ? -1
                        : s[r] === w
                        ? 1
                        : 0;
                    }),
                d)
              : d;
          }),
          (se.matches = function(e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== d && p(e),
              n.matchesSelector &&
                g &&
                !N[t + " "] &&
                (!y || !y.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var r = m.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                N(t, !0);
              }
            return se(t, d, null, [e]).length > 0;
          }),
          (se.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t);
          }),
          (se.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && D.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (se.escape = function(e) {
            return (e + "").replace(re, ie);
          }),
          (se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function(e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(A),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = se.getText = function(e) {
            var t,
              n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
          }),
          ((r = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || se.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && se.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return G.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        X.test(n) &&
                        (t = a(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = E[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                    E(e, function(e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(e, t, n) {
                return function(r) {
                  var i = se.attr(r, e);
                  return null == i
                    ? "!=" === t
                    : !t ||
                        ((i += ""),
                        "=" === t
                          ? i === n
                          : "!=" === t
                          ? i !== n
                          : "^=" === t
                          ? n && 0 === i.indexOf(n)
                          : "*=" === t
                          ? n && i.indexOf(n) > -1
                          : "$=" === t
                          ? n && i.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (i === n || i.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function(e, t, n, r, i) {
                var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === r && 0 === i
                  ? function(e) {
                      return !!e.parentNode;
                    }
                  : function(t, n, u) {
                      var l,
                        c,
                        f,
                        p,
                        d,
                        h,
                        g = o !== a ? "nextSibling" : "previousSibling",
                        v = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        m = !u && !s,
                        x = !1;
                      if (v) {
                        if (o) {
                          for (; g; ) {
                            for (p = t; (p = p[g]); )
                              if (
                                s
                                  ? p.nodeName.toLowerCase() === y
                                  : 1 === p.nodeType
                              )
                                return !1;
                            h = g = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? v.firstChild : v.lastChild]), a && m)) {
                          for (
                            x =
                              (d =
                                (l =
                                  (c =
                                    (f = (p = v)[b] || (p[b] = {}))[
                                      p.uniqueID
                                    ] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                                  T && l[1]) && l[2],
                              p = d && v.childNodes[d];
                            (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++x && p === t) {
                              c[e] = [T, d, x];
                              break;
                            }
                        } else if (
                          (m &&
                            (x = d =
                              (l =
                                (c =
                                  (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                                  (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                              l[1]),
                          !1 === x)
                        )
                          for (
                            ;
                            (p =
                              (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                            ((s
                              ? p.nodeName.toLowerCase() !== y
                              : 1 !== p.nodeType) ||
                              !++x ||
                              (m &&
                                ((c =
                                  (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                  (f[p.uniqueID] = {}))[e] = [T, x]),
                              p !== t));

                          );
                        return (x -= i) === r || (x % r == 0 && x / r >= 0);
                      }
                    };
              },
              PSEUDO: function(e, t) {
                var n,
                  i =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    se.error("unsupported pseudo: " + e);
                return i[b]
                  ? i(t)
                  : i.length > 1
                  ? ((n = [e, e, "", t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? le(function(e, n) {
                          for (var r, o = i(e, t), a = o.length; a--; )
                            e[(r = P(e, o[a]))] = !(n[r] = o[a]);
                        })
                      : function(e) {
                          return i(e, 0, n);
                        })
                  : i;
              }
            },
            pseudos: {
              not: le(function(e) {
                var t = [],
                  n = [],
                  r = s(e.replace(B, "$1"));
                return r[b]
                  ? le(function(e, t, n, i) {
                      for (var o, a = r(e, null, i, []), s = e.length; s--; )
                        (o = a[s]) && (e[s] = !(t[s] = o));
                    })
                  : function(e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: le(function(e) {
                return function(t) {
                  return se(e, t).length > 0;
                };
              }),
              contains: le(function(e) {
                return (
                  (e = e.replace(te, ne)),
                  function(t) {
                    return (t.textContent || i(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: le(function(e) {
                return (
                  V.test(e || "") || se.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function(t) {
                    var n;
                    do {
                      if (
                        (n = g
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function(e) {
                return e === h;
              },
              focus: function(e) {
                return (
                  e === d.activeElement &&
                  (!d.hasFocus || d.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ge(!1),
              disabled: ge(!0),
              checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function(e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function(e) {
                return !r.pseudos.empty(e);
              },
              header: function(e) {
                return J.test(e.nodeName);
              },
              input: function(e) {
                return Q.test(e.nodeName);
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function(e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: ve(function() {
                return [0];
              }),
              last: ve(function(e, t) {
                return [t - 1];
              }),
              eq: ve(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ve(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ve(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ve(function(e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                  e.push(r);
                return e;
              }),
              gt: ve(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              })
            }
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = de(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function me() {}
          function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function be(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = C++;
            return t.first
              ? function(t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function(t, n, u) {
                  var l,
                    c,
                    f,
                    p = [T, s];
                  if (u) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((c =
                            (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((l = c[o]) && l[0] === T && l[1] === s)
                            return (p[2] = l[2]);
                          if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function(t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
          }
          function Ce(e, t, n, r, i, o) {
            return (
              r && !r[b] && (r = Ce(r)),
              i && !i[b] && (i = Ce(i, o)),
              le(function(o, a, s, u) {
                var l,
                  c,
                  f,
                  p = [],
                  d = [],
                  h = a.length,
                  g =
                    o ||
                    (function(e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!o && t) ? g : Te(g, p, e, s, u),
                  y = n ? (i || (o ? e : h || r) ? [] : a) : v;
                if ((n && n(v, y, s, u), r))
                  for (l = Te(y, d), r(l, [], s, u), c = l.length; c--; )
                    (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (l = [], c = y.length; c--; )
                        (f = y[c]) && l.push((v[c] = f));
                      i(null, (y = []), l, u);
                    }
                    for (c = y.length; c--; )
                      (f = y[c]) &&
                        (l = i ? P(o, f) : p[c]) > -1 &&
                        (o[l] = !(a[l] = f));
                  }
                } else (y = Te(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, u) : H.apply(a, y);
              })
            );
          }
          function Ee(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                u = a ? 1 : 0,
                c = be(
                  function(e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = be(
                  function(e) {
                    return P(t, e) > -1;
                  },
                  s,
                  !0
                ),
                p = [
                  function(e, n, r) {
                    var i =
                      (!a && (r || n !== l)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  }
                ];
              u < o;
              u++
            )
              if ((n = r.relative[e[u].type])) p = [be(we(p), n)];
              else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                  for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                  return Ce(
                    u > 1 && we(p),
                    u > 1 &&
                      xe(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(B, "$1"),
                    n,
                    u < i && Ee(e.slice(u, i)),
                    i < o && Ee((e = e.slice(i))),
                    i < o && xe(e)
                  );
                }
                p.push(n);
              }
            return we(p);
          }
          return (
            (me.prototype = r.filters = r.pseudos),
            (r.setFilters = new me()),
            (a = se.tokenize = function(e, t) {
              var n,
                i,
                o,
                a,
                s,
                u,
                l,
                c = S[e + " "];
              if (c) return t ? 0 : c.slice(0);
              for (s = e, u = [], l = r.preFilter; s; ) {
                for (a in ((n && !(i = _.exec(s))) ||
                  (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                (n = !1),
                (i = z.exec(s)) &&
                  ((n = i.shift()),
                  o.push({ value: n, type: i[0].replace(B, " ") }),
                  (s = s.slice(n.length))),
                r.filter))
                  !(i = G[a].exec(s)) ||
                    (l[a] && !(i = l[a](i))) ||
                    ((n = i.shift()),
                    o.push({ value: n, type: a, matches: i }),
                    (s = s.slice(n.length)));
                if (!n) break;
              }
              return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
            }),
            (s = se.compile = function(e, t) {
              var n,
                i = [],
                o = [],
                s = k[e + " "];
              if (!s) {
                for (t || (t = a(e)), n = t.length; n--; )
                  (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                (s = k(
                  e,
                  (function(e, t) {
                    var n = t.length > 0,
                      i = e.length > 0,
                      o = function(o, a, s, u, c) {
                        var f,
                          h,
                          v,
                          y = 0,
                          m = "0",
                          x = o && [],
                          b = [],
                          w = l,
                          C = o || (i && r.find.TAG("*", c)),
                          E = (T += null == w ? 1 : Math.random() || 0.1),
                          S = C.length;
                        for (
                          c && (l = a === d || a || c);
                          m !== S && null != (f = C[m]);
                          m++
                        ) {
                          if (i && f) {
                            for (
                              h = 0,
                                a || f.ownerDocument === d || (p(f), (s = !g));
                              (v = e[h++]);

                            )
                              if (v(f, a || d, s)) {
                                u.push(f);
                                break;
                              }
                            c && (T = E);
                          }
                          n && ((f = !v && f) && y--, o && x.push(f));
                        }
                        if (((y += m), n && m !== y)) {
                          for (h = 0; (v = t[h++]); ) v(x, b, a, s);
                          if (o) {
                            if (y > 0)
                              for (; m--; ) x[m] || b[m] || (b[m] = L.call(u));
                            b = Te(b);
                          }
                          H.apply(u, b),
                            c &&
                              !o &&
                              b.length > 0 &&
                              y + t.length > 1 &&
                              se.uniqueSort(u);
                        }
                        return c && ((T = E), (l = w)), x;
                      };
                    return n ? le(o) : o;
                  })(o, i)
                )).selector = e;
              }
              return s;
            }),
            (u = se.select = function(e, t, n, i) {
              var o,
                u,
                l,
                c,
                f,
                p = "function" == typeof e && e,
                d = !i && a((e = p.selector || e));
              if (((n = n || []), 1 === d.length)) {
                if (
                  (u = d[0] = d[0].slice(0)).length > 2 &&
                  "ID" === (l = u[0]).type &&
                  9 === t.nodeType &&
                  g &&
                  r.relative[u[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  p && (t = t.parentNode),
                    (e = e.slice(u.shift().value.length));
                }
                for (
                  o = G.needsContext.test(e) ? 0 : u.length;
                  o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                )
                  if (
                    (f = r.find[c]) &&
                    (i = f(
                      l.matches[0].replace(te, ne),
                      (ee.test(u[0].type) && ye(t.parentNode)) || t
                    ))
                  ) {
                    if ((u.splice(o, 1), !(e = i.length && xe(u))))
                      return H.apply(n, i), n;
                    break;
                  }
              }
              return (
                (p || s(e, d))(
                  i,
                  t,
                  !g,
                  n,
                  !t || (ee.test(e) && ye(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable =
              b
                .split("")
                .sort(A)
                .join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ce(function(e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ce(function(e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              fe("type|href|height|width", function(e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function(e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function(e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(R, function(e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(n);
      (C.find = k),
        (C.expr = k.selectors),
        (C.expr[":"] = C.expr.pseudos),
        (C.uniqueSort = C.unique = k.uniqueSort),
        (C.text = k.getText),
        (C.isXMLDoc = k.isXML),
        (C.contains = k.contains),
        (C.escapeSelector = k.escape);
      var N = function(e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && C(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        A = function(e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        D = C.expr.match.needsContext;
      function j(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function q(e, t, n) {
        return m(t)
          ? C.grep(e, function(e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? C.grep(e, function(e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? C.grep(e, function(e) {
              return f.call(t, e) > -1 !== n;
            })
          : C.filter(t, e, n);
      }
      (C.filter = function(e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? C.find.matchesSelector(r, e)
              ? [r]
              : []
            : C.find.matches(
                e,
                C.grep(t, function(e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        C.fn.extend({
          find: function(e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                C(e).filter(function() {
                  for (t = 0; t < r; t++) if (C.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
            return r > 1 ? C.uniqueSort(n) : n;
          },
          filter: function(e) {
            return this.pushStack(q(this, e || [], !1));
          },
          not: function(e) {
            return this.pushStack(q(this, e || [], !0));
          },
          is: function(e) {
            return !!q(
              this,
              "string" == typeof e && D.test(e) ? C(e) : e || [],
              !1
            ).length;
          }
        });
      var H,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((C.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || H), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : O.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof C ? t[0] : t),
              C.merge(
                this,
                C.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : a,
                  !0
                )
              ),
              L.test(r[1]) && C.isPlainObject(t))
            )
              for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (i = a.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(C)
          : C.makeArray(e, this);
      }).prototype = C.fn),
        (H = C(a));
      var P = /^(?:parents|prev(?:Until|All))/,
        R = { children: !0, contents: !0, next: !0, prev: !0 };
      function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      C.fn.extend({
        has: function(e) {
          var t = C(e, this),
            n = t.length;
          return this.filter(function() {
            for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
          });
        },
        closest: function(e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && C(e);
          if (!D.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && C.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
        },
        index: function(e) {
          return e
            ? "string" == typeof e
              ? f.call(C(e), this[0])
              : f.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function(e, t) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
        },
        addBack: function(e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }
      }),
        C.each(
          {
            parent: function(e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function(e) {
              return N(e, "parentNode");
            },
            parentsUntil: function(e, t, n) {
              return N(e, "parentNode", n);
            },
            next: function(e) {
              return M(e, "nextSibling");
            },
            prev: function(e) {
              return M(e, "previousSibling");
            },
            nextAll: function(e) {
              return N(e, "nextSibling");
            },
            prevAll: function(e) {
              return N(e, "previousSibling");
            },
            nextUntil: function(e, t, n) {
              return N(e, "nextSibling", n);
            },
            prevUntil: function(e, t, n) {
              return N(e, "previousSibling", n);
            },
            siblings: function(e) {
              return A((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
              return A(e.firstChild);
            },
            contents: function(e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (j(e, "template") && (e = e.content || e),
                  C.merge([], e.childNodes));
            }
          },
          function(e, t) {
            C.fn[e] = function(n, r) {
              var i = C.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = C.filter(r, i)),
                this.length > 1 &&
                  (R[e] || C.uniqueSort(i), P.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var I = /[^\x20\t\r\n\f]+/g;
      function W(e) {
        return e;
      }
      function $(e) {
        throw e;
      }
      function F(e, t, n, r) {
        var i;
        try {
          e && m((i = e.promise))
            ? i
                .call(e)
                .done(t)
                .fail(n)
            : e && m((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (C.Callbacks = function(e) {
        e =
          "string" == typeof e
            ? (function(e) {
                var t = {};
                return (
                  C.each(e.match(I) || [], function(e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : C.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          u = function() {
            for (i = i || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length; )
                !1 === o[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          l = {
            add: function() {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    C.each(n, function(n, r) {
                      m(r)
                        ? (e.unique && l.has(r)) || o.push(r)
                        : r && r.length && "string" !== T(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function() {
              return (
                C.each(arguments, function(e, t) {
                  for (var n; (n = C.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function(e) {
              return e ? C.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
              return o && (o = []), this;
            },
            disable: function() {
              return (i = a = []), (o = n = ""), this;
            },
            disabled: function() {
              return !o;
            },
            lock: function() {
              return (i = a = []), n || t || (o = n = ""), this;
            },
            locked: function() {
              return !!i;
            },
            fireWith: function(e, n) {
              return (
                i ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || u()),
                this
              );
            },
            fire: function() {
              return l.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!r;
            }
          };
        return l;
      }),
        C.extend({
          Deferred: function(e) {
            var t = [
                [
                  "notify",
                  "progress",
                  C.Callbacks("memory"),
                  C.Callbacks("memory"),
                  2
                ],
                [
                  "resolve",
                  "done",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  0,
                  "resolved"
                ],
                [
                  "reject",
                  "fail",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  1,
                  "rejected"
                ]
              ],
              r = "pending",
              i = {
                state: function() {
                  return r;
                },
                always: function() {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                  return i.then(null, e);
                },
                pipe: function() {
                  var e = arguments;
                  return C.Deferred(function(n) {
                    C.each(t, function(t, r) {
                      var i = m(e[r[4]]) && e[r[4]];
                      o[r[1]](function() {
                        var e = i && i.apply(this, arguments);
                        e && m(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + "With"](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function(e, r, i) {
                  var o = 0;
                  function a(e, t, r, i) {
                    return function() {
                      var s = this,
                        u = arguments,
                        l = function() {
                          var n, l;
                          if (!(e < o)) {
                            if ((n = r.apply(s, u)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (l =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              m(l)
                                ? i
                                  ? l.call(n, a(o, t, W, i), a(o, t, $, i))
                                  : (o++,
                                    l.call(
                                      n,
                                      a(o, t, W, i),
                                      a(o, t, $, i),
                                      a(o, t, W, t.notifyWith)
                                    ))
                                : (r !== W && ((s = void 0), (u = [n])),
                                  (i || t.resolveWith)(s, u));
                          }
                        },
                        c = i
                          ? l
                          : function() {
                              try {
                                l();
                              } catch (n) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o &&
                                    (r !== $ && ((s = void 0), (u = [n])),
                                    t.rejectWith(s, u));
                              }
                            };
                      e
                        ? c()
                        : (C.Deferred.getStackHook &&
                            (c.stackTrace = C.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return C.Deferred(function(n) {
                    t[0][3].add(a(0, n, m(i) ? i : W, n.notifyWith)),
                      t[1][3].add(a(0, n, m(e) ? e : W)),
                      t[2][3].add(a(0, n, m(r) ? r : $));
                  }).promise();
                },
                promise: function(e) {
                  return null != e ? C.extend(e, i) : i;
                }
              },
              o = {};
            return (
              C.each(t, function(e, n) {
                var a = n[2],
                  s = n[5];
                (i[n[1]] = a.add),
                  s &&
                    a.add(
                      function() {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function() {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = a.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function(e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = u.call(arguments),
              o = C.Deferred(),
              a = function(e) {
                return function(n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? u.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              (F(e, o.done(a(n)).resolve, o.reject, !t),
              "pending" === o.state() || m(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) F(i[n], a(n), o.reject);
            return o.promise();
          }
        });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (C.Deferred.exceptionHook = function(e, t) {
        n.console &&
          n.console.warn &&
          e &&
          B.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (C.readyException = function(e) {
          n.setTimeout(function() {
            throw e;
          });
        });
      var _ = C.Deferred();
      function z() {
        a.removeEventListener("DOMContentLoaded", z),
          n.removeEventListener("load", z),
          C.ready();
      }
      (C.fn.ready = function(e) {
        return (
          _.then(e).catch(function(e) {
            C.readyException(e);
          }),
          this
        );
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0),
              (!0 !== e && --C.readyWait > 0) || _.resolveWith(a, [C]));
          }
        }),
        (C.ready.then = _.then),
        "complete" === a.readyState ||
        ("loading" !== a.readyState && !a.documentElement.doScroll)
          ? n.setTimeout(C.ready)
          : (a.addEventListener("DOMContentLoaded", z),
            n.addEventListener("load", z));
      var U = function(e, t, n, r, i, o, a) {
          var s = 0,
            u = e.length,
            l = null == n;
          if ("object" === T(n))
            for (s in ((i = !0), n)) U(e, t, s, n[s], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            m(r) || (a = !0),
            l &&
              (a
                ? (t.call(e, r), (t = null))
                : ((l = t),
                  (t = function(e, t, n) {
                    return l.call(C(e), n);
                  }))),
            t)
          )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        X = /^-ms-/,
        V = /-([a-z])/g;
      function G(e, t) {
        return t.toUpperCase();
      }
      function Y(e) {
        return e.replace(X, "ms-").replace(V, G);
      }
      var Q = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function J() {
        this.expando = C.expando + J.uid++;
      }
      (J.uid = 1),
        (J.prototype = {
          cache: function(e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Q(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                      }))),
              t
            );
          },
          set: function(e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[Y(t)] = n;
            else for (r in t) i[Y(r)] = t[r];
            return i;
          },
          get: function(e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][Y(t)];
          },
          access: function(e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function(e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(Y)
                  : (t = Y(t)) in r
                  ? [t]
                  : t.match(I) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || C.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t);
          }
        });
      var K = new J(),
        Z = new J(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function(e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : ee.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      C.extend({
        hasData: function(e) {
          return Z.hasData(e) || K.hasData(e);
        },
        data: function(e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function(e, t) {
          Z.remove(e, t);
        },
        _data: function(e, t, n) {
          return K.access(e, t, n);
        },
        _removeData: function(e, t) {
          K.remove(e, t);
        }
      }),
        C.fn.extend({
          data: function(e, t) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = Z.get(o)), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf("data-") &&
                    ((r = Y(r.slice(5))), ne(o, r, i[r]));
                K.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof e
              ? this.each(function() {
                  Z.set(this, e);
                })
              : U(
                  this,
                  function(t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = Z.get(o, e))
                        ? n
                        : void 0 !== (n = ne(o, e))
                        ? n
                        : void 0;
                    this.each(function() {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function(e) {
            return this.each(function() {
              Z.remove(this, e);
            });
          }
        }),
        C.extend({
          queue: function(e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = K.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = K.access(e, t, C.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = C._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(
                  e,
                  function() {
                    C.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return (
              K.get(e, n) ||
              K.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                  K.remove(e, [t + "queue", n]);
                })
              })
            );
          }
        }),
        C.fn.extend({
          queue: function(e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? C.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function() {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
                  })
            );
          },
          dequeue: function(e) {
            return this.each(function() {
              C.dequeue(this, e);
            });
          },
          clearQueue: function(e) {
            return this.queue(e || "fx", []);
          },
          promise: function(e, t) {
            var n,
              r = 1,
              i = C.Deferred(),
              o = this,
              a = this.length,
              s = function() {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = K.get(o[a], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(s));
            return s(), i.promise(t);
          }
        });
      var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = a.documentElement,
        se = function(e) {
          return C.contains(e.ownerDocument, e);
        },
        ue = { composed: !0 };
      ae.getRootNode &&
        (se = function(e) {
          return (
            C.contains(e.ownerDocument, e) ||
            e.getRootNode(ue) === e.ownerDocument
          );
        });
      var le = function(e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && se(e) && "none" === C.css(e, "display"))
          );
        },
        ce = function(e, t, n, r) {
          var i,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
          return i;
        };
      function fe(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r
            ? function() {
                return r.cur();
              }
            : function() {
                return C.css(e, t, "");
              },
          u = s(),
          l = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
          c =
            e.nodeType &&
            (C.cssNumber[t] || ("px" !== l && +u)) &&
            ie.exec(C.css(e, t));
        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--; )
            C.style(e, t, c + l),
              (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
              (c /= o);
          (c *= 2), C.style(e, t, c + l), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +u || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = c), (r.end = i))),
          i
        );
      }
      var pe = {};
      function de(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = pe[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = C.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (pe[r] = i),
          i)
        );
      }
      function he(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = K.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && le(r) && (i[o] = de(r)))
              : "none" !== n && ((i[o] = "none"), K.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      C.fn.extend({
        show: function() {
          return he(this, !0);
        },
        hide: function() {
          return he(this);
        },
        toggle: function(e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function() {
                le(this) ? C(this).show() : C(this).hide();
              });
        }
      });
      var ge = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ye = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
      function xe(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && j(e, t)) ? C.merge([e], n) : n
        );
      }
      function be(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
      }
      (me.optgroup = me.option),
        (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
        (me.th = me.td);
      var we,
        Te,
        Ce = /<|&#?\w+;/;
      function Ee(e, t, n, r, i) {
        for (
          var o,
            a,
            s,
            u,
            l,
            c,
            f = t.createDocumentFragment(),
            p = [],
            d = 0,
            h = e.length;
          d < h;
          d++
        )
          if ((o = e[d]) || 0 === o)
            if ("object" === T(o)) C.merge(p, o.nodeType ? [o] : o);
            else if (Ce.test(o)) {
              for (
                a = a || f.appendChild(t.createElement("div")),
                  s = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                  u = me[s] || me._default,
                  a.innerHTML = u[1] + C.htmlPrefilter(o) + u[2],
                  c = u[0];
                c--;

              )
                a = a.lastChild;
              C.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
            } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; (o = p[d++]); )
          if (r && C.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((l = se(o)), (a = xe(f.appendChild(o), "script")), l && be(a), n)
          )
            for (c = 0; (o = a[c++]); ) ye.test(o.type || "") && n.push(o);
        return f;
      }
      (we = a.createDocumentFragment().appendChild(a.createElement("div"))),
        (Te = a.createElement("input")).setAttribute("type", "radio"),
        Te.setAttribute("checked", "checked"),
        Te.setAttribute("name", "t"),
        we.appendChild(Te),
        (y.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (we.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue);
      var Se = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ne = /^([^.]*)(?:\.(.+)|)/;
      function Ae() {
        return !0;
      }
      function De() {
        return !1;
      }
      function je(e, t) {
        return (
          (e ===
            (function() {
              try {
                return a.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Le(e, s, n, r, t[s], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = De;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            ((i = function(e) {
              return C().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = C.guid++))),
          e.each(function() {
            C.event.add(this, t, i, r, n);
          })
        );
      }
      function qe(e, t, n) {
        n
          ? (K.set(e, t, !1),
            C.event.add(e, t, {
              namespace: !1,
              handler: function(e) {
                var r,
                  i,
                  o = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (C.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((o = u.call(arguments)),
                    K.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = K.get(this, t)) || r
                      ? K.set(this, t, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), i.value
                    );
                } else
                  o.length &&
                    (K.set(this, t, {
                      value: C.event.trigger(
                        C.extend(o[0], C.Event.prototype),
                        o.slice(1),
                        this
                      )
                    }),
                    e.stopImmediatePropagation());
              }
            }))
          : void 0 === K.get(e, t) && C.event.add(e, t, Ae);
      }
      (C.event = {
        global: {},
        add: function(e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = K.get(e);
          if (v)
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && C.find.matchesSelector(ae, i),
                n.guid || (n.guid = C.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) ||
                  (a = v.handle = function(t) {
                    return void 0 !== C && C.event.triggered !== t.type
                      ? C.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                l = (t = (t || "").match(I) || [""]).length;
              l--;

            )
              (d = g = (s = Ne.exec(t[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                d &&
                  ((f = C.event.special[d] || {}),
                  (d = (i ? f.delegateType : f.bindType) || d),
                  (f = C.event.special[d] || {}),
                  (c = C.extend(
                    {
                      type: d,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && C.expr.match.needsContext.test(i),
                      namespace: h.join(".")
                    },
                    o
                  )),
                  (p = u[d]) ||
                    (((p = u[d] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(d, a))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                  (C.event.global[d] = !0));
        },
        remove: function(e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = K.hasData(e) && K.get(e);
          if (v && (u = v.events)) {
            for (l = (t = (t || "").match(I) || [""]).length; l--; )
              if (
                ((d = g = (s = Ne.exec(t[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                d)
              ) {
                for (
                  f = C.event.special[d] || {},
                    p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = o = p.length;
                  o--;

                )
                  (c = p[o]),
                    (!i && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (s && !s.test(c.namespace)) ||
                      (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                      (p.splice(o, 1),
                      c.selector && p.delegateCount--,
                      f.remove && f.remove.call(e, c));
                a &&
                  !p.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                    C.removeEvent(e, d, v.handle),
                  delete u[d]);
              } else for (d in u) C.event.remove(e, d + t[l], n, r, !0);
            C.isEmptyObject(u) && K.remove(e, "handle events");
          }
        },
        dispatch: function(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = C.event.fix(e),
            u = new Array(arguments.length),
            l = (K.get(this, "events") || {})[s.type] || [],
            c = C.event.special[s.type] || {};
          for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
          if (
            ((s.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, s))
          ) {
            for (
              a = C.event.handlers.call(this, s, l), t = 0;
              (i = a[t++]) && !s.isPropagationStopped();

            )
              for (
                s.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

              )
                (s.rnamespace &&
                  !1 !== o.namespace &&
                  !s.rnamespace.test(o.namespace)) ||
                  ((s.handleObj = o),
                  (s.data = o.data),
                  void 0 !==
                    (r = (
                      (C.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, u)) &&
                    !1 === (s.result = r) &&
                    (s.preventDefault(), s.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function(e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                ("click" !== e.type || !0 !== l.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(i = (r = t[n]).selector + " ")] &&
                    (a[i] = r.needsContext
                      ? C(i, this).index(l) > -1
                      : C.find(i, this, null, [l]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: l, handlers: o });
              }
          return (
            (l = this),
            u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
            s
          );
        },
        addProp: function(e, t) {
          Object.defineProperty(C.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t)
              ? function() {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function() {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              });
            }
          });
        },
        fix: function(e) {
          return e[C.expando] ? e : new C.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function(e) {
              var t = this || e;
              return (
                ge.test(t.type) &&
                  t.click &&
                  j(t, "input") &&
                  qe(t, "click", Ae),
                !1
              );
            },
            trigger: function(e) {
              var t = this || e;
              return (
                ge.test(t.type) && t.click && j(t, "input") && qe(t, "click"),
                !0
              );
            },
            _default: function(e) {
              var t = e.target;
              return (
                (ge.test(t.type) &&
                  t.click &&
                  j(t, "input") &&
                  K.get(t, "click")) ||
                j(t, "a")
              );
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }),
        (C.removeEvent = function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (C.Event = function(e, t) {
          if (!(this instanceof C.Event)) return new C.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ae
                  : De),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && C.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: De,
          isPropagationStopped: De,
          isImmediatePropagationStopped: De,
          isSimulated: !1,
          preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ae),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ae),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ae),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
              var t = e.button;
              return null == e.which && Se.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && ke.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            }
          },
          C.event.addProp
        ),
        C.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
          C.event.special[e] = {
            setup: function() {
              return qe(this, e, je), !1;
            },
            trigger: function() {
              return qe(this, e), !0;
            },
            delegateType: t
          };
        }),
        C.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
          },
          function(e, t) {
            C.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function(e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || C.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              }
            };
          }
        ),
        C.fn.extend({
          on: function(e, t, n, r) {
            return Le(this, e, t, n, r);
          },
          one: function(e, t, n, r) {
            return Le(this, e, t, n, r, 1);
          },
          off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                C(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = De),
              this.each(function() {
                C.event.remove(this, e, n, t);
              })
            );
          }
        });
      var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Oe = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Me(e, t) {
        return (
          (j(e, "table") &&
            j(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            C(e).children("tbody")[0]) ||
          e
        );
      }
      function Ie(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function We(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function $e(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
          if (
            K.hasData(e) &&
            ((o = K.access(e)), (a = K.set(t, o)), (l = o.events))
          )
            for (i in (delete a.handle, (a.events = {}), l))
              for (n = 0, r = l[i].length; n < r; n++)
                C.event.add(t, i, l[i][n]);
          Z.hasData(e) &&
            ((s = Z.access(e)), (u = C.extend({}, s)), Z.set(t, u));
        }
      }
      function Fe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ge.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Be(e, t, n, r) {
        t = l.apply([], t);
        var i,
          o,
          a,
          s,
          u,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          h = t[0],
          g = m(h);
        if (g || (p > 1 && "string" == typeof h && !y.checkClone && Pe.test(h)))
          return e.each(function(i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())), Be(o, t, n, r);
          });
        if (
          p &&
          ((o = (i = Ee(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (s = (a = C.map(xe(i, "script"), Ie)).length; f < p; f++)
            (u = i),
              f !== d &&
                ((u = C.clone(u, !0, !0)), s && C.merge(a, xe(u, "script"))),
              n.call(e[f], u, f);
          if (s)
            for (
              c = a[a.length - 1].ownerDocument, C.map(a, We), f = 0;
              f < s;
              f++
            )
              (u = a[f]),
                ye.test(u.type || "") &&
                  !K.access(u, "globalEval") &&
                  C.contains(c, u) &&
                  (u.src && "module" !== (u.type || "").toLowerCase()
                    ? C._evalUrl &&
                      !u.noModule &&
                      C._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                      })
                    : w(u.textContent.replace(Re, ""), u, c));
        }
        return e;
      }
      function _e(e, t, n) {
        for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || C.cleanData(xe(r)),
            r.parentNode &&
              (n && se(r) && be(xe(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      C.extend({
        htmlPrefilter: function(e) {
          return e.replace(He, "<$1></$2>");
        },
        clone: function(e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.cloneNode(!0),
            u = se(e);
          if (
            !(
              y.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              C.isXMLDoc(e)
            )
          )
            for (a = xe(s), r = 0, i = (o = xe(e)).length; r < i; r++)
              Fe(o[r], a[r]);
          if (t)
            if (n)
              for (
                o = o || xe(e), a = a || xe(s), r = 0, i = o.length;
                r < i;
                r++
              )
                $e(o[r], a[r]);
            else $e(e, s);
          return (
            (a = xe(s, "script")).length > 0 && be(a, !u && xe(e, "script")), s
          );
        },
        cleanData: function(e) {
          for (
            var t, n, r, i = C.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (Q(n)) {
              if ((t = n[K.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                n[K.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        }
      }),
        C.fn.extend({
          detach: function(e) {
            return _e(this, e, !0);
          },
          remove: function(e) {
            return _e(this, e);
          },
          text: function(e) {
            return U(
              this,
              function(e) {
                return void 0 === e
                  ? C.text(this)
                  : this.empty().each(function() {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function() {
            return Be(this, arguments, function(e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Me(this, e).appendChild(e);
            });
          },
          prepend: function() {
            return Be(this, arguments, function(e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Me(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function() {
            return Be(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function() {
            return Be(this, arguments, function(e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (C.cleanData(xe(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function(e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function() {
                return C.clone(this, e, t);
              })
            );
          },
          html: function(e) {
            return U(
              this,
              function(e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Oe.test(e) &&
                  !me[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = C.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (C.cleanData(xe(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function() {
            var e = [];
            return Be(
              this,
              arguments,
              function(t) {
                var n = this.parentNode;
                C.inArray(this, e) < 0 &&
                  (C.cleanData(xe(this)), n && n.replaceChild(t, this));
              },
              e
            );
          }
        }),
        C.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          },
          function(e, t) {
            C.fn[e] = function(e) {
              for (
                var n, r = [], i = C(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  C(i[a])[t](n),
                  c.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var ze = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        Ue = function(e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Xe = new RegExp(oe.join("|"), "i");
      function Ve(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || Ue(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
              se(e) ||
              (a = C.style(e, t)),
            !y.pixelBoxStyles() &&
              ze.test(a) &&
              Xe.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function Ge(e, t) {
        return {
          get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }
      !(function() {
        function e() {
          if (c) {
            (l.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ae.appendChild(l).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = "1%" !== e.top),
              (u = 12 === t(e.marginLeft)),
              (c.style.right = "60%"),
              (s = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (c.style.position = "absolute"),
              (o = 12 === t(c.offsetWidth / 3)),
              ae.removeChild(l),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          s,
          u,
          l = a.createElement("div"),
          c = a.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (y.clearCloneStyle = "content-box" === c.style.backgroundClip),
          C.extend(y, {
            boxSizingReliable: function() {
              return e(), i;
            },
            pixelBoxStyles: function() {
              return e(), s;
            },
            pixelPosition: function() {
              return e(), r;
            },
            reliableMarginLeft: function() {
              return e(), u;
            },
            scrollboxSize: function() {
              return e(), o;
            }
          }));
      })();
      var Ye = ["Webkit", "Moz", "ms"],
        Qe = a.createElement("div").style,
        Je = {};
      function Ke(e) {
        var t = C.cssProps[e] || Je[e];
        return (
          t ||
          (e in Qe
            ? e
            : (Je[e] =
                (function(e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                    n--;

                  )
                    if ((e = Ye[n] + t) in Qe) return e;
                })(e) || e))
        );
      }
      var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        nt = { letterSpacing: "0", fontWeight: "400" };
      function rt(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (u += C.css(e, n + oe[a], !0, i)),
            r
              ? ("content" === n && (u -= C.css(e, "padding" + oe[a], !0, i)),
                "margin" !== n &&
                  (u -= C.css(e, "border" + oe[a] + "Width", !0, i)))
              : ((u += C.css(e, "padding" + oe[a], !0, i)),
                "padding" !== n
                  ? (u += C.css(e, "border" + oe[a] + "Width", !0, i))
                  : (s += C.css(e, "border" + oe[a] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    u -
                    s -
                    0.5
                )
              ) || 0),
          u
        );
      }
      function ot(e, t, n) {
        var r = Ue(e),
          i =
            (!y.boxSizingReliable() || n) &&
            "border-box" === C.css(e, "boxSizing", !1, r),
          o = i,
          a = Ve(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ze.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!y.boxSizingReliable() && i) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === C.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === C.css(e, "boxSizing", !1, r)),
            (o = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) +
            it(e, t, n || (i ? "border" : "content"), o, r, a) +
            "px"
        );
      }
      function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i);
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = Ve(e, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              s = Y(t),
              u = et.test(t),
              l = e.style;
            if (
              (u || (t = Ke(s)),
              (a = C.cssHooks[t] || C.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : l[t];
            "string" === (o = typeof n) &&
              (i = ie.exec(n)) &&
              i[1] &&
              ((n = fe(e, t, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  u ||
                  (n += (i && i[3]) || (C.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u ? l.setProperty(t, n) : (l[t] = n)));
          }
        },
        css: function(e, t, n, r) {
          var i,
            o,
            a,
            s = Y(t);
          return (
            et.test(t) || (t = Ke(s)),
            (a = C.cssHooks[t] || C.cssHooks[s]) &&
              "get" in a &&
              (i = a.get(e, !0, n)),
            void 0 === i && (i = Ve(e, t, r)),
            "normal" === i && t in nt && (i = nt[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        }
      }),
        C.each(["height", "width"], function(e, t) {
          C.cssHooks[t] = {
            get: function(e, n, r) {
              if (n)
                return !Ze.test(C.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? ot(e, t, r)
                  : ce(e, tt, function() {
                      return ot(e, t, r);
                    });
            },
            set: function(e, n, r) {
              var i,
                o = Ue(e),
                a = !y.scrollboxSize() && "absolute" === o.position,
                s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, o),
                u = r ? it(e, t, r, s, o) : 0;
              return (
                s &&
                  a &&
                  (u -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      it(e, t, "border", !1, o) -
                      0.5
                  )),
                u &&
                  (i = ie.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = C.css(e, t))),
                rt(0, n, u)
              );
            }
          };
        }),
        (C.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function(e, t) {
          if (t)
            return (
              (parseFloat(Ve(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  ce(e, { marginLeft: 0 }, function() {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
          (C.cssHooks[e + t] = {
            expand: function(n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            }
          }),
            "margin" !== e && (C.cssHooks[e + t].set = rt);
        }),
        C.fn.extend({
          css: function(e, t) {
            return U(
              this,
              function(e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = Ue(e), i = t.length; a < i; a++)
                    o[t[a]] = C.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          }
        }),
        (C.Tween = at),
        (at.prototype = {
          constructor: at,
          init: function(e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || C.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (C.cssNumber[n] ? "" : "px"));
          },
          cur: function() {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this);
          },
          run: function(e) {
            var t,
              n = at.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = C.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : at.propHooks._default.set(this),
              this
            );
          }
        }),
        (at.prototype.init.prototype = at.prototype),
        (at.propHooks = {
          _default: {
            get: function(e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function(e) {
              C.fx.step[e.prop]
                ? C.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!C.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : C.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }),
        (at.propHooks.scrollTop = at.propHooks.scrollLeft = {
          set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }),
        (C.easing = {
          linear: function(e) {
            return e;
          },
          swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing"
        }),
        (C.fx = at.prototype.init),
        (C.fx.step = {});
      var st,
        ut,
        lt = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;
      function ft() {
        ut &&
          (!1 === a.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ft)
            : n.setTimeout(ft, C.fx.interval),
          C.fx.tick());
      }
      function pt() {
        return (
          n.setTimeout(function() {
            st = void 0;
          }),
          (st = Date.now())
        );
      }
      function dt(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function ht(e, t, n) {
        for (
          var r,
            i = (gt.tweeners[t] || []).concat(gt.tweeners["*"]),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function gt(e, t, n) {
        var r,
          i,
          o = 0,
          a = gt.prefilters.length,
          s = C.Deferred().always(function() {
            delete u.elem;
          }),
          u = function() {
            if (i) return !1;
            for (
              var t = st || pt(),
                n = Math.max(0, l.startTime + l.duration - t),
                r = 1 - (n / l.duration || 0),
                o = 0,
                a = l.tweens.length;
              o < a;
              o++
            )
              l.tweens[o].run(r);
            return (
              s.notifyWith(e, [l, r, n]),
              r < 1 && a
                ? n
                : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            );
          },
          l = s.promise({
            elem: e,
            props: C.extend({}, t),
            opts: C.extend(
              !0,
              { specialEasing: {}, easing: C.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: st || pt(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
              var r = C.Tween(
                e,
                l.opts,
                t,
                n,
                l.opts.specialEasing[t] || l.opts.easing
              );
              return l.tweens.push(r), r;
            },
            stop: function(t) {
              var n = 0,
                r = t ? l.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) l.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                  : s.rejectWith(e, [l, t]),
                this
              );
            }
          }),
          c = l.props;
        for (
          !(function(e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (
                ((i = t[(r = Y(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = C.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((o = a.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(c, l.opts.specialEasing);
          o < a;
          o++
        )
          if ((r = gt.prefilters[o].call(l, e, c, l.opts)))
            return (
              m(r.stop) &&
                (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          C.map(c, ht, l),
          m(l.opts.start) && l.opts.start.call(e, l),
          l
            .progress(l.opts.progress)
            .done(l.opts.done, l.opts.complete)
            .fail(l.opts.fail)
            .always(l.opts.always),
          C.fx.timer(C.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
          l
        );
      }
      (C.Animation = C.extend(gt, {
        tweeners: {
          "*": [
            function(e, t) {
              var n = this.createTween(e, t);
              return fe(n.elem, e, ie.exec(t), n), n;
            }
          ]
        },
        tweener: function(e, t) {
          m(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (gt.tweeners[n] = gt.tweeners[n] || []),
              gt.tweeners[n].unshift(t);
        },
        prefilters: [
          function(e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = "width" in t || "height" in t,
              p = this,
              d = {},
              h = e.style,
              g = e.nodeType && le(e),
              v = K.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (a = C._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function() {
                  a.unqueued || s();
                })),
              a.unqueued++,
              p.always(function() {
                p.always(function() {
                  a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), lt.test(i))) {
                if (
                  (delete t[r],
                  (o = o || "toggle" === i),
                  i === (g ? "hide" : "show"))
                ) {
                  if ("show" !== i || !v || void 0 === v[r]) continue;
                  g = !0;
                }
                d[r] = (v && v[r]) || C.style(e, r);
              }
            if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = v && v.display) && (l = K.get(e, "display")),
                "none" === (c = C.css(e, "display")) &&
                  (l
                    ? (c = l)
                    : (he([e], !0),
                      (l = e.style.display || l),
                      (c = C.css(e, "display")),
                      he([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                  "none" === C.css(e, "float") &&
                  (u ||
                    (p.done(function() {
                      h.display = l;
                    }),
                    null == l &&
                      ((c = h.display), (l = "none" === c ? "" : c))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function() {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (u = !1),
              d))
                u ||
                  (v
                    ? "hidden" in v && (g = v.hidden)
                    : (v = K.access(e, "fxshow", { display: l })),
                  o && (v.hidden = !g),
                  g && he([e], !0),
                  p.done(function() {
                    for (r in (g || he([e]), K.remove(e, "fxshow"), d))
                      C.style(e, r, d[r]);
                  })),
                  (u = ht(g ? v[r] : 0, r, p)),
                  r in v ||
                    ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
          }
        ],
        prefilter: function(e, t) {
          t ? gt.prefilters.unshift(e) : gt.prefilters.push(e);
        }
      })),
        (C.speed = function(e, t, n) {
          var r =
            e && "object" == typeof e
              ? C.extend({}, e)
              : {
                  complete: n || (!n && t) || (m(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !m(t) && t)
                };
          return (
            C.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in C.fx.speeds
                  ? (r.duration = C.fx.speeds[r.duration])
                  : (r.duration = C.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function() {
              m(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
            }),
            r
          );
        }),
        C.fn.extend({
          fadeTo: function(e, t, n, r) {
            return this.filter(le)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function(e, t, n, r) {
            var i = C.isEmptyObject(e),
              o = C.speed(t, n, r),
              a = function() {
                var t = gt(this, C.extend({}, e), o);
                (i || K.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function(e, t, n) {
            var r = function(e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function() {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = C.timers,
                  a = K.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && ct.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || C.dequeue(this, e);
              })
            );
          },
          finish: function(e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function() {
                var t,
                  n = K.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = C.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    C.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        C.each(["toggle", "show", "hide"], function(e, t) {
          var n = C.fn[t];
          C.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(dt(t, !0), e, r, i);
          };
        }),
        C.each(
          {
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" }
          },
          function(e, t) {
            C.fn[e] = function(e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (C.timers = []),
        (C.fx.tick = function() {
          var e,
            t = 0,
            n = C.timers;
          for (st = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || C.fx.stop(), (st = void 0);
        }),
        (C.fx.timer = function(e) {
          C.timers.push(e), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function() {
          ut || ((ut = !0), ft());
        }),
        (C.fx.stop = function() {
          ut = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function(e, t) {
          return (
            (e = (C.fx && C.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function(t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function() {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function() {
          var e = a.createElement("input"),
            t = a
              .createElement("select")
              .appendChild(a.createElement("option"));
          (e.type = "checkbox"),
            (y.checkOn = "" !== e.value),
            (y.optSelected = t.selected),
            ((e = a.createElement("input")).value = "t"),
            (e.type = "radio"),
            (y.radioValue = "t" === e.value);
        })();
      var vt,
        yt = C.expr.attrHandle;
      C.fn.extend({
        attr: function(e, t) {
          return U(this, C.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
          return this.each(function() {
            C.removeAttr(this, e);
          });
        }
      }),
        C.extend({
          attr: function(e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? C.prop(e, t, n)
                : ((1 === o && C.isXMLDoc(e)) ||
                    (i =
                      C.attrHooks[t.toLowerCase()] ||
                      (C.expr.match.bool.test(t) ? vt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = C.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function(e, t) {
                if (!y.radioValue && "radio" === t && j(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function(e, t) {
            var n,
              r = 0,
              i = t && t.match(I);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          }
        }),
        (vt = {
          set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
          var n = yt[t] || C.find.attr;
          yt[t] = function(e, t, r) {
            var i,
              o,
              a = t.toLowerCase();
            return (
              r ||
                ((o = yt[a]),
                (yt[a] = i),
                (i = null != n(e, t, r) ? a : null),
                (yt[a] = o)),
              i
            );
          };
        });
      var mt = /^(?:input|select|textarea|button)$/i,
        xt = /^(?:a|area)$/i;
      function bt(e) {
        return (e.match(I) || []).join(" ");
      }
      function wt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function Tt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(I)) || [];
      }
      C.fn.extend({
        prop: function(e, t) {
          return U(this, C.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[C.propFix[e] || e];
          });
        }
      }),
        C.extend({
          prop: function(e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && C.isXMLDoc(e)) ||
                  ((t = C.propFix[t] || t), (i = C.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function(e) {
                var t = C.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : mt.test(e.nodeName) || (xt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              }
            }
          },
          propFix: { for: "htmlFor", class: "className" }
        }),
        y.optSelected ||
          (C.propHooks.selected = {
            get: function(e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function(e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }),
        C.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable"
          ],
          function() {
            C.propFix[this.toLowerCase()] = this;
          }
        ),
        C.fn.extend({
          addClass: function(e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (m(e))
              return this.each(function(t) {
                C(this).addClass(e.call(this, t, wt(this)));
              });
            if ((t = Tt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = wt(n)), (r = 1 === n.nodeType && " " + bt(i) + " "))
                ) {
                  for (a = 0; (o = t[a++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (s = bt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function(e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (m(e))
              return this.each(function(t) {
                C(this).removeClass(e.call(this, t, wt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Tt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = wt(n)), (r = 1 === n.nodeType && " " + bt(i) + " "))
                ) {
                  for (a = 0; (o = t[a++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  i !== (s = bt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function(e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : m(e)
              ? this.each(function(n) {
                  C(this).toggleClass(e.call(this, n, wt(this), t), t);
                })
              : this.each(function() {
                  var t, i, o, a;
                  if (r)
                    for (i = 0, o = C(this), a = Tt(e); (t = a[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = wt(this)) && K.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : K.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function(e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + bt(wt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          }
        });
      var Ct = /\r/g;
      C.fn.extend({
        val: function(e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = m(e)),
              this.each(function(n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, C(this).val()) : e)
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = C.map(i, function(e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(i, "value"))
              ? n
              : "string" == typeof (n = i.value)
              ? n.replace(Ct, "")
              : null == n
              ? ""
              : n
            : void 0;
        }
      }),
        C.extend({
          valHooks: {
            option: {
              get: function(e) {
                var t = C.find.attr(e, "value");
                return null != t ? t : bt(C.text(e));
              }
            },
            select: {
              get: function(e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? o + 1 : i.length;
                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))
                  ) {
                    if (((t = C(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function(e, t) {
                for (
                  var n, r, i = e.options, o = C.makeArray(t), a = i.length;
                  a--;

                )
                  ((r = i[a]).selected =
                    C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              }
            }
          }
        }),
        C.each(["radio", "checkbox"], function() {
          (C.valHooks[this] = {
            set: function(e, t) {
              if (Array.isArray(t))
                return (e.checked = C.inArray(C(e).val(), t) > -1);
            }
          }),
            y.checkOn ||
              (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (y.focusin = "onfocusin" in n);
      var Et = /^(?:focusinfocus|focusoutblur)$/,
        St = function(e) {
          e.stopPropagation();
        };
      C.extend(C.event, {
        trigger: function(e, t, r, i) {
          var o,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            g = [r || a],
            v = h.call(e, "type") ? e.type : e,
            y = h.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = d = u = r = r || a),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !Et.test(v + C.event.triggered) &&
              (v.indexOf(".") > -1 &&
                ((y = v.split(".")), (v = y.shift()), y.sort()),
              (c = v.indexOf(":") < 0 && "on" + v),
              ((e = e[C.expando]
                ? e
                : new C.Event(v, "object" == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = y.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : C.makeArray(t, [e])),
              (p = C.event.special[v] || {}),
              i || !p.trigger || !1 !== p.trigger.apply(r, t)))
          ) {
            if (!i && !p.noBubble && !x(r)) {
              for (
                l = p.delegateType || v, Et.test(l + v) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                g.push(s), (u = s);
              u === (r.ownerDocument || a) &&
                g.push(u.defaultView || u.parentWindow || n);
            }
            for (o = 0; (s = g[o++]) && !e.isPropagationStopped(); )
              (d = s),
                (e.type = o > 1 ? l : p.bindType || v),
                (f =
                  (K.get(s, "events") || {})[e.type] && K.get(s, "handle")) &&
                  f.apply(s, t),
                (f = c && s[c]) &&
                  f.apply &&
                  Q(s) &&
                  ((e.result = f.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = v),
              i ||
                e.isDefaultPrevented() ||
                (p._default && !1 !== p._default.apply(g.pop(), t)) ||
                !Q(r) ||
                (c &&
                  m(r[v]) &&
                  !x(r) &&
                  ((u = r[c]) && (r[c] = null),
                  (C.event.triggered = v),
                  e.isPropagationStopped() && d.addEventListener(v, St),
                  r[v](),
                  e.isPropagationStopped() && d.removeEventListener(v, St),
                  (C.event.triggered = void 0),
                  u && (r[c] = u))),
              e.result
            );
          }
        },
        simulate: function(e, t, n) {
          var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
          C.event.trigger(r, null, t);
        }
      }),
        C.fn.extend({
          trigger: function(e, t) {
            return this.each(function() {
              C.event.trigger(e, t, this);
            });
          },
          triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0);
          }
        }),
        y.focusin ||
          C.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = function(e) {
              C.event.simulate(t, e.target, C.event.fix(e));
            };
            C.event.special[t] = {
              setup: function() {
                var r = this.ownerDocument || this,
                  i = K.access(r, t);
                i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1);
              },
              teardown: function() {
                var r = this.ownerDocument || this,
                  i = K.access(r, t) - 1;
                i
                  ? K.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), K.remove(r, t));
              }
            };
          });
      var kt = n.location,
        Nt = Date.now(),
        At = /\?/;
      C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            C.error("Invalid XML: " + e),
          t
        );
      };
      var Dt = /\[\]$/,
        jt = /\r?\n/g,
        Lt = /^(?:submit|button|image|reset|file)$/i,
        qt = /^(?:input|select|textarea|keygen)/i;
      function Ht(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          C.each(t, function(t, i) {
            n || Dt.test(e)
              ? r(e, i)
              : Ht(
                  e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== T(t)) r(e, t);
        else for (i in t) Ht(e + "[" + i + "]", t[i], n, r);
      }
      (C.param = function(e, t) {
        var n,
          r = [],
          i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
          C.each(e, function() {
            i(this.name, this.value);
          });
        else for (n in e) Ht(n, e[n], t, i);
        return r.join("&");
      }),
        C.fn.extend({
          serialize: function() {
            return C.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var e = C.prop(this, "elements");
              return e ? C.makeArray(e) : this;
            })
              .filter(function() {
                var e = this.type;
                return (
                  this.name &&
                  !C(this).is(":disabled") &&
                  qt.test(this.nodeName) &&
                  !Lt.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function(e, t) {
                var n = C(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function(e) {
                      return { name: t.name, value: e.replace(jt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(jt, "\r\n") };
              })
              .get();
          }
        });
      var Ot = /%20/g,
        Pt = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        $t = {},
        Ft = {},
        Bt = "*/".concat("*"),
        _t = a.createElement("a");
      function zt(e) {
        return function(t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(I) || [];
          if (m(n))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Ut(e, t, n, r) {
        var i = {},
          o = e === Ft;
        function a(s) {
          var u;
          return (
            (i[s] = !0),
            C.each(e[s] || [], function(e, s) {
              var l = s(t, n, r);
              return "string" != typeof l || o || i[l]
                ? o
                  ? !(u = l)
                  : void 0
                : (t.dataTypes.unshift(l), a(l), !1);
            }),
            u
          );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
      }
      function Xt(e, t) {
        var n,
          r,
          i = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && C.extend(!0, e, r), e;
      }
      (_t.href = kt.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              kt.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Bt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": C.parseXML
            },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function(e, t) {
            return t ? Xt(Xt(e, C.ajaxSettings), t) : Xt(C.ajaxSettings, e);
          },
          ajaxPrefilter: zt($t),
          ajaxTransport: zt(Ft),
          ajax: function(e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h = C.ajaxSetup({}, t),
              g = h.context || h,
              v = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
              y = C.Deferred(),
              m = C.Callbacks("once memory"),
              x = h.statusCode || {},
              b = {},
              w = {},
              T = "canceled",
              E = {
                readyState: 0,
                getResponseHeader: function(e) {
                  var t;
                  if (c) {
                    if (!s)
                      for (s = {}; (t = Mt.exec(o)); )
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function() {
                  return c ? o : null;
                },
                setRequestHeader: function(e, t) {
                  return (
                    null == c &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (b[e] = t)),
                    this
                  );
                },
                overrideMimeType: function(e) {
                  return null == c && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                  var t;
                  if (e)
                    if (c) E.always(e[E.status]);
                    else for (t in e) x[t] = [x[t], e[t]];
                  return this;
                },
                abort: function(e) {
                  var t = e || T;
                  return r && r.abort(t), S(0, t), this;
                }
              };
            if (
              (y.promise(E),
              (h.url = ((e || h.url || kt.href) + "").replace(
                Wt,
                kt.protocol + "//"
              )),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [
                ""
              ]),
              null == h.crossDomain)
            ) {
              l = a.createElement("a");
              try {
                (l.href = h.url),
                  (l.href = l.href),
                  (h.crossDomain =
                    _t.protocol + "//" + _t.host != l.protocol + "//" + l.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = C.param(h.data, h.traditional)),
              Ut($t, h, t, E),
              c)
            )
              return E;
            for (p in ((f = C.event && h.global) &&
              0 == C.active++ &&
              C.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !It.test(h.type)),
            (i = h.url.replace(Pt, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(Ot, "+"))
              : ((d = h.url.slice(i.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((i += (At.test(i) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((i = i.replace(Rt, "$1")),
                  (d = (At.test(i) ? "&" : "?") + "_=" + Nt++ + d)),
                (h.url = i + d)),
            h.ifModified &&
              (C.lastModified[i] &&
                E.setRequestHeader("If-Modified-Since", C.lastModified[i]),
              C.etag[i] && E.setRequestHeader("If-None-Match", C.etag[i])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              t.contentType) &&
              E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
              return E.abort();
            if (
              ((T = "abort"),
              m.add(h.complete),
              E.done(h.success),
              E.fail(h.error),
              (r = Ut(Ft, h, t, E)))
            ) {
              if (((E.readyState = 1), f && v.trigger("ajaxSend", [E, h]), c))
                return E;
              h.async &&
                h.timeout > 0 &&
                (u = n.setTimeout(function() {
                  E.abort("timeout");
                }, h.timeout));
              try {
                (c = !1), r.send(b, S);
              } catch (e) {
                if (c) throw e;
                S(-1, e);
              }
            } else S(-1, "No Transport");
            function S(e, t, a, s) {
              var l,
                p,
                d,
                b,
                w,
                T = t;
              c ||
                ((c = !0),
                u && n.clearTimeout(u),
                (r = void 0),
                (o = s || ""),
                (E.readyState = e > 0 ? 4 : 0),
                (l = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (b = (function(e, t, n) {
                    for (
                      var r, i, o, a, s = e.contents, u = e.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in s)
                        if (s[i] && s[i].test(r)) {
                          u.unshift(i);
                          break;
                        }
                    if (u[0] in n) o = u[0];
                    else {
                      for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                          o = i;
                          break;
                        }
                        a || (a = i);
                      }
                      o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                  })(h, E, a)),
                (b = (function(e, t, n, r) {
                  var i,
                    o,
                    a,
                    s,
                    u,
                    l = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (a in e.converters)
                      l[a.toLowerCase()] = e.converters[a];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !u &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (u = o),
                      (o = c.shift()))
                    )
                      if ("*" === o) o = u;
                      else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                          for (i in l)
                            if (
                              (s = i.split(" "))[1] === o &&
                              (a = l[u + " " + s[0]] || l["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = l[i])
                                : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + u + " to " + o
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(h, b, E, l)),
                l
                  ? (h.ifModified &&
                      ((w = E.getResponseHeader("Last-Modified")) &&
                        (C.lastModified[i] = w),
                      (w = E.getResponseHeader("etag")) && (C.etag[i] = w)),
                    204 === e || "HEAD" === h.type
                      ? (T = "nocontent")
                      : 304 === e
                      ? (T = "notmodified")
                      : ((T = b.state), (p = b.data), (l = !(d = b.error))))
                  : ((d = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                (E.status = e),
                (E.statusText = (t || T) + ""),
                l ? y.resolveWith(g, [p, T, E]) : y.rejectWith(g, [E, T, d]),
                E.statusCode(x),
                (x = void 0),
                f &&
                  v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                m.fireWith(g, [E, T]),
                f &&
                  (v.trigger("ajaxComplete", [E, h]),
                  --C.active || C.event.trigger("ajaxStop")));
            }
            return E;
          },
          getJSON: function(e, t, n) {
            return C.get(e, t, n, "json");
          },
          getScript: function(e, t) {
            return C.get(e, void 0, t, "script");
          }
        }),
        C.each(["get", "post"], function(e, t) {
          C[t] = function(e, n, r, i) {
            return (
              m(n) && ((i = i || r), (r = n), (n = void 0)),
              C.ajax(
                C.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  C.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (C._evalUrl = function(e, t) {
          return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function() {} },
            dataFilter: function(e) {
              C.globalEval(e, t);
            }
          });
        }),
        C.fn.extend({
          wrapAll: function(e) {
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = C(e, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function() {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function(e) {
            return m(e)
              ? this.each(function(t) {
                  C(this).wrapInner(e.call(this, t));
                })
              : this.each(function() {
                  var t = C(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function(e) {
            var t = m(e);
            return this.each(function(n) {
              C(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function(e) {
            return (
              this.parent(e)
                .not("body")
                .each(function() {
                  C(this).replaceWith(this.childNodes);
                }),
              this
            );
          }
        }),
        (C.expr.pseudos.hidden = function(e) {
          return !C.expr.pseudos.visible(e);
        }),
        (C.expr.pseudos.visible = function(e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (C.ajaxSettings.xhr = function() {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Vt = { 0: 200, 1223: 204 },
        Gt = C.ajaxSettings.xhr();
      (y.cors = !!Gt && "withCredentials" in Gt),
        (y.ajax = Gt = !!Gt),
        C.ajaxTransport(function(e) {
          var t, r;
          if (y.cors || (Gt && !e.crossDomain))
            return {
              send: function(i, o) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  s.setRequestHeader(a, i[a]);
                (t = function(e) {
                  return function() {
                    t &&
                      ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            Vt[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function() {
                        4 === s.readyState &&
                          n.setTimeout(function() {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function() {
                t && t();
              }
            };
        }),
        C.ajaxPrefilter(function(e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        C.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function(e) {
              return C.globalEval(e), e;
            }
          }
        }),
        C.ajaxPrefilter("script", function(e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        C.ajaxTransport("script", function(e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function(r, i) {
                (t = C("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function(e) {
                      t.remove(),
                        (n = null),
                        e && i("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  a.head.appendChild(t[0]);
              },
              abort: function() {
                n && n();
              }
            };
        });
      var Yt,
        Qt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = Qt.pop() || C.expando + "_" + Nt++;
          return (this[e] = !0), e;
        }
      }),
        C.ajaxPrefilter("json jsonp", function(e, t, r) {
          var i,
            o,
            a,
            s =
              !1 !== e.jsonp &&
              (Jt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Jt.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback = m(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(Jt, "$1" + i))
                : !1 !== e.jsonp &&
                  (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function() {
                return a || C.error(i + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function() {
                a = arguments;
              }),
              r.always(function() {
                void 0 === o ? C(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(i)),
                  a && m(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (y.createHTMLDocument =
          (((Yt = a.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Yt.childNodes.length)),
        (C.parseHTML = function(e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (y.createHTMLDocument
                  ? (((r = (t = a.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = a.location.href),
                    t.head.appendChild(r))
                  : (t = a)),
              (o = !n && []),
              (i = L.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Ee([e], t, o)),
                  o && o.length && C(o).remove(),
                  C.merge([], i.childNodes)));
          var r, i, o;
        }),
        (C.fn.load = function(e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = bt(e.slice(s))), (e = e.slice(0, s))),
            m(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            a.length > 0 &&
              C.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function(e) {
                  (o = arguments),
                    a.html(
                      r
                        ? C("<div>")
                            .append(C.parseHTML(e))
                            .find(r)
                        : e
                    );
                })
                .always(
                  n &&
                    function(e, t) {
                      a.each(function() {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        C.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend"
          ],
          function(e, t) {
            C.fn[t] = function(e) {
              return this.on(t, e);
            };
          }
        ),
        (C.expr.pseudos.animated = function(e) {
          return C.grep(C.timers, function(t) {
            return e === t.elem;
          }).length;
        }),
        (C.offset = {
          setOffset: function(e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l = C.css(e, "position"),
              c = C(e),
              f = {};
            "static" === l && (e.style.position = "relative"),
              (s = c.offset()),
              (o = C.css(e, "top")),
              (u = C.css(e, "left")),
              ("absolute" === l || "fixed" === l) &&
              (o + u).indexOf("auto") > -1
                ? ((a = (r = c.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
              m(t) && (t = t.call(e, n, C.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + i),
              "using" in t ? t.using.call(e, f) : c.css(f);
          }
        }),
        C.fn.extend({
          offset: function(e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function(t) {
                    C.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function() {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === C.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === C.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0)),
                  (i.left += C.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - C.css(r, "marginTop", !0),
                left: t.left - i.left - C.css(r, "marginLeft", !0)
              };
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (
                var e = this.offsetParent;
                e && "static" === C.css(e, "position");

              )
                e = e.offsetParent;
              return e || ae;
            });
          }
        }),
        C.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function(e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function(r) {
              return U(
                this,
                function(e, r, i) {
                  var o;
                  if (
                    (x(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        C.each(["top", "left"], function(e, t) {
          C.cssHooks[t] = Ge(y.pixelPosition, function(e, n) {
            if (n)
              return (n = Ve(e, t)), ze.test(n) ? C(e).position()[t] + "px" : n;
          });
        }),
        C.each({ Height: "height", Width: "width" }, function(e, t) {
          C.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function(n, r) {
              C.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
                return U(
                  this,
                  function(t, n, i) {
                    var o;
                    return x(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === i
                      ? C.css(t, n, s)
                      : C.style(t, n, i, s);
                  },
                  t,
                  a ? i : void 0,
                  a
                );
              };
            }
          );
        }),
        C.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function(e, t) {
            C.fn[t] = function(e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        C.fn.extend({
          hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        }),
        C.fn.extend({
          bind: function(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function(e, t) {
            return this.off(e, null, t);
          },
          delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function(e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          }
        }),
        (C.proxy = function(e, t) {
          var n, r, i;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
              (r = u.call(arguments, 2)),
              ((i = function() {
                return e.apply(t || this, r.concat(u.call(arguments)));
              }).guid = e.guid = e.guid || C.guid++),
              i
            );
        }),
        (C.holdReady = function(e) {
          e ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = j),
        (C.isFunction = m),
        (C.isWindow = x),
        (C.camelCase = Y),
        (C.type = T),
        (C.now = Date.now),
        (C.isNumeric = function(e) {
          var t = C.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        void 0 ===
          (r = function() {
            return C;
          }.apply(t, [])) || (e.exports = r);
      var Kt = n.jQuery,
        Zt = n.$;
      return (
        (C.noConflict = function(e) {
          return (
            n.$ === C && (n.$ = Zt), e && n.jQuery === C && (n.jQuery = Kt), C
          );
        }),
        i || (n.jQuery = n.$ = C),
        C
      );
    });
  }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIiQiLCJvbiIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImdsb2JhbCIsImZhY3RvcnkiLCJkb2N1bWVudCIsInciLCJFcnJvciIsIndpbmRvdyIsInRoaXMiLCJub0dsb2JhbCIsImFyciIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJzbGljZSIsImNvbmNhdCIsInB1c2giLCJpbmRleE9mIiwiY2xhc3MydHlwZSIsInRvU3RyaW5nIiwiaGFzT3duIiwiZm5Ub1N0cmluZyIsIk9iamVjdEZ1bmN0aW9uU3RyaW5nIiwic3VwcG9ydCIsImlzRnVuY3Rpb24iLCJvYmoiLCJub2RlVHlwZSIsImlzV2luZG93IiwicHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyIsInR5cGUiLCJzcmMiLCJub25jZSIsIm5vTW9kdWxlIiwiRE9NRXZhbCIsImNvZGUiLCJub2RlIiwiZG9jIiwidmFsIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ0b1R5cGUiLCJqUXVlcnkiLCJzZWxlY3RvciIsImNvbnRleHQiLCJmbiIsImluaXQiLCJydHJpbSIsImlzQXJyYXlMaWtlIiwibGVuZ3RoIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJ0b0FycmF5IiwibnVtIiwicHVzaFN0YWNrIiwiZWxlbXMiLCJyZXQiLCJtZXJnZSIsInByZXZPYmplY3QiLCJlYWNoIiwiY2FsbGJhY2siLCJtYXAiLCJlbGVtIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImxlbiIsImoiLCJlbmQiLCJzb3J0Iiwic3BsaWNlIiwiZXh0ZW5kIiwib3B0aW9ucyIsImNvcHkiLCJjb3B5SXNBcnJheSIsImNsb25lIiwidGFyZ2V0IiwiZGVlcCIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJtc2ciLCJub29wIiwicHJvdG8iLCJDdG9yIiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJ0cmltIiwibWFrZUFycmF5IiwicmVzdWx0cyIsImluQXJyYXkiLCJzZWNvbmQiLCJncmVwIiwiaW52ZXJ0IiwibWF0Y2hlcyIsImNhbGxiYWNrRXhwZWN0IiwiYXJnIiwiZ3VpZCIsIml0ZXJhdG9yIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsIlNpenpsZSIsIkV4cHIiLCJnZXRUZXh0IiwiaXNYTUwiLCJ0b2tlbml6ZSIsImNvbXBpbGUiLCJzZWxlY3QiLCJvdXRlcm1vc3RDb250ZXh0Iiwic29ydElucHV0IiwiaGFzRHVwbGljYXRlIiwic2V0RG9jdW1lbnQiLCJkb2NFbGVtIiwiZG9jdW1lbnRJc0hUTUwiLCJyYnVnZ3lRU0EiLCJyYnVnZ3lNYXRjaGVzIiwiY29udGFpbnMiLCJEYXRlIiwicHJlZmVycmVkRG9jIiwiZGlycnVucyIsImRvbmUiLCJjbGFzc0NhY2hlIiwiY3JlYXRlQ2FjaGUiLCJ0b2tlbkNhY2hlIiwiY29tcGlsZXJDYWNoZSIsIm5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUiLCJzb3J0T3JkZXIiLCJhIiwiYiIsInBvcCIsInB1c2hfbmF0aXZlIiwibGlzdCIsImJvb2xlYW5zIiwid2hpdGVzcGFjZSIsImlkZW50aWZpZXIiLCJhdHRyaWJ1dGVzIiwicHNldWRvcyIsInJ3aGl0ZXNwYWNlIiwiUmVnRXhwIiwicmNvbW1hIiwicmNvbWJpbmF0b3JzIiwicmRlc2NlbmQiLCJycHNldWRvIiwicmlkZW50aWZpZXIiLCJtYXRjaEV4cHIiLCJyaHRtbCIsInJpbnB1dHMiLCJyaGVhZGVyIiwicm5hdGl2ZSIsInJxdWlja0V4cHIiLCJyc2libGluZyIsInJ1bmVzY2FwZSIsImZ1bmVzY2FwZSIsIl8iLCJlc2NhcGVkIiwiZXNjYXBlZFdoaXRlc3BhY2UiLCJoaWdoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicmNzc2VzY2FwZSIsImZjc3Nlc2NhcGUiLCJjaCIsImFzQ29kZVBvaW50IiwiY2hhckNvZGVBdCIsInVubG9hZEhhbmRsZXIiLCJpbkRpc2FibGVkRmllbGRzZXQiLCJhZGRDb21iaW5hdG9yIiwiZGlzYWJsZWQiLCJub2RlTmFtZSIsImRpciIsIm5leHQiLCJjaGlsZE5vZGVzIiwiZSIsImVscyIsInNlZWQiLCJuaWQiLCJtYXRjaCIsImdyb3VwcyIsIm5ld1NlbGVjdG9yIiwibmV3Q29udGV4dCIsIm93bmVyRG9jdW1lbnQiLCJleGVjIiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsInRlc3QiLCJ0b1NlbGVjdG9yIiwiam9pbiIsInRlc3RDb250ZXh0IiwicXVlcnlTZWxlY3RvckFsbCIsInFzYUVycm9yIiwicmVtb3ZlQXR0cmlidXRlIiwia2V5cyIsImNhY2hlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsIm1hcmtGdW5jdGlvbiIsImFzc2VydCIsImVsIiwiYWRkSGFuZGxlIiwiYXR0cnMiLCJoYW5kbGVyIiwiYXR0ckhhbmRsZSIsInNpYmxpbmdDaGVjayIsImN1ciIsImRpZmYiLCJzb3VyY2VJbmRleCIsIm5leHRTaWJsaW5nIiwiY3JlYXRlSW5wdXRQc2V1ZG8iLCJjcmVhdGVCdXR0b25Qc2V1ZG8iLCJjcmVhdGVEaXNhYmxlZFBzZXVkbyIsImlzRGlzYWJsZWQiLCJjcmVhdGVQb3NpdGlvbmFsUHNldWRvIiwiYXJndW1lbnQiLCJtYXRjaEluZGV4ZXMiLCJuYW1lc3BhY2UiLCJuYW1lc3BhY2VVUkkiLCJkb2N1bWVudEVsZW1lbnQiLCJoYXNDb21wYXJlIiwic3ViV2luZG93IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJjbGFzc05hbWUiLCJjcmVhdGVDb21tZW50IiwiZ2V0QnlJZCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZmlsdGVyIiwiYXR0cklkIiwiZmluZCIsImdldEF0dHJpYnV0ZU5vZGUiLCJ0YWciLCJ0bXAiLCJpbm5lckhUTUwiLCJpbnB1dCIsIm1hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImRpc2Nvbm5lY3RlZE1hdGNoIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJhZG93biIsImJ1cCIsImNvbXBhcmUiLCJzb3J0RGV0YWNoZWQiLCJhdXAiLCJhcCIsImJwIiwidW5zaGlmdCIsImV4cHIiLCJlbGVtZW50cyIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJzZWwiLCJ1bmlxdWVTb3J0IiwiZHVwbGljYXRlcyIsImRldGVjdER1cGxpY2F0ZXMiLCJzb3J0U3RhYmxlIiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwicmVsYXRpdmUiLCJwcmVGaWx0ZXIiLCJleGNlc3MiLCJ1bnF1b3RlZCIsIm5vZGVOYW1lU2VsZWN0b3IiLCJwYXR0ZXJuIiwib3BlcmF0b3IiLCJjaGVjayIsInJlc3VsdCIsIndoYXQiLCJzaW1wbGUiLCJmb3J3YXJkIiwib2ZUeXBlIiwieG1sIiwidW5pcXVlQ2FjaGUiLCJvdXRlckNhY2hlIiwibm9kZUluZGV4Iiwic3RhcnQiLCJwYXJlbnQiLCJ1c2VDYWNoZSIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvIiwiYXJncyIsInNldEZpbHRlcnMiLCJpZHgiLCJtYXRjaGVkIiwibWF0Y2hlciIsInVubWF0Y2hlZCIsImxhbmciLCJlbGVtTGFuZyIsImhhc2giLCJsb2NhdGlvbiIsImFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJyYWRpbyIsImNoZWNrYm94IiwiZmlsZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJzdWJtaXQiLCJyZXNldCIsInRva2VucyIsImNvbWJpbmF0b3IiLCJiYXNlIiwic2tpcCIsImNoZWNrTm9uRWxlbWVudHMiLCJkb25lTmFtZSIsIm9sZENhY2hlIiwibmV3Q2FjaGUiLCJlbGVtZW50TWF0Y2hlciIsIm1hdGNoZXJzIiwiY29uZGVuc2UiLCJuZXdVbm1hdGNoZWQiLCJtYXBwZWQiLCJzZXRNYXRjaGVyIiwicG9zdEZpbHRlciIsInBvc3RGaW5kZXIiLCJwb3N0U2VsZWN0b3IiLCJ0ZW1wIiwicHJlTWFwIiwicG9zdE1hcCIsInByZWV4aXN0aW5nIiwiY29udGV4dHMiLCJtdWx0aXBsZUNvbnRleHRzIiwibWF0Y2hlckluIiwibWF0Y2hlck91dCIsIm1hdGNoZXJGcm9tVG9rZW5zIiwiY2hlY2tDb250ZXh0IiwibGVhZGluZ1JlbGF0aXZlIiwiaW1wbGljaXRSZWxhdGl2ZSIsIm1hdGNoQ29udGV4dCIsIm1hdGNoQW55Q29udGV4dCIsImZpbHRlcnMiLCJwYXJzZU9ubHkiLCJzb0ZhciIsInByZUZpbHRlcnMiLCJjYWNoZWQiLCJzZXRNYXRjaGVycyIsImVsZW1lbnRNYXRjaGVycyIsImJ5U2V0IiwiYnlFbGVtZW50Iiwic3VwZXJNYXRjaGVyIiwib3V0ZXJtb3N0IiwibWF0Y2hlZENvdW50Iiwic2V0TWF0Y2hlZCIsImNvbnRleHRCYWNrdXAiLCJkaXJydW5zVW5pcXVlIiwibWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzIiwidG9rZW4iLCJjb21waWxlZCIsImRlZmF1bHRWYWx1ZSIsInVuaXF1ZSIsImlzWE1MRG9jIiwiZXNjYXBlU2VsZWN0b3IiLCJ1bnRpbCIsInRydW5jYXRlIiwiaXMiLCJzaWJsaW5ncyIsInJuZWVkc0NvbnRleHQiLCJuZWVkc0NvbnRleHQiLCJyc2luZ2xlVGFnIiwid2lubm93IiwicXVhbGlmaWVyIiwibm90Iiwic2VsZiIsInJvb3RqUXVlcnkiLCJyb290IiwicGFyc2VIVE1MIiwicmVhZHkiLCJycGFyZW50c3ByZXYiLCJndWFyYW50ZWVkVW5pcXVlIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsInByZXYiLCJzaWJsaW5nIiwiaGFzIiwidGFyZ2V0cyIsImNsb3Nlc3QiLCJpbmRleCIsInByZXZBbGwiLCJhZGQiLCJhZGRCYWNrIiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJjb250ZW50RG9jdW1lbnQiLCJjb250ZW50IiwicmV2ZXJzZSIsInJub3RodG1sd2hpdGUiLCJJZGVudGl0eSIsInYiLCJUaHJvd2VyIiwiZXgiLCJhZG9wdFZhbHVlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5vVmFsdWUiLCJtZXRob2QiLCJwcm9taXNlIiwiZmFpbCIsInRoZW4iLCJDYWxsYmFja3MiLCJmbGFnIiwiY3JlYXRlT3B0aW9ucyIsImZpcmluZyIsIm1lbW9yeSIsImZpcmVkIiwibG9ja2VkIiwicXVldWUiLCJmaXJpbmdJbmRleCIsImZpcmUiLCJvbmNlIiwic3RvcE9uRmFsc2UiLCJyZW1vdmUiLCJlbXB0eSIsImRpc2FibGUiLCJsb2NrIiwiZmlyZVdpdGgiLCJEZWZlcnJlZCIsImZ1bmMiLCJ0dXBsZXMiLCJzdGF0ZSIsImFsd2F5cyIsImRlZmVycmVkIiwicGlwZSIsImZucyIsIm5ld0RlZmVyIiwidHVwbGUiLCJyZXR1cm5lZCIsInByb2dyZXNzIiwibm90aWZ5Iiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwib25Qcm9ncmVzcyIsIm1heERlcHRoIiwiZGVwdGgiLCJzcGVjaWFsIiwidGhhdCIsIm1pZ2h0VGhyb3ciLCJUeXBlRXJyb3IiLCJub3RpZnlXaXRoIiwicmVzb2x2ZVdpdGgiLCJwcm9jZXNzIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsInN0YXRlU3RyaW5nIiwid2hlbiIsInNpbmdsZVZhbHVlIiwicmVtYWluaW5nIiwicmVzb2x2ZUNvbnRleHRzIiwicmVzb2x2ZVZhbHVlcyIsIm1hc3RlciIsInVwZGF0ZUZ1bmMiLCJyZXJyb3JOYW1lcyIsInN0YWNrIiwid2FybiIsIm1lc3NhZ2UiLCJyZWFkeUV4Y2VwdGlvbiIsInJlYWR5TGlzdCIsImNvbXBsZXRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYXRjaCIsInJlYWR5V2FpdCIsIndhaXQiLCJyZWFkeVN0YXRlIiwiZG9TY3JvbGwiLCJhY2Nlc3MiLCJjaGFpbmFibGUiLCJlbXB0eUdldCIsInJhdyIsImJ1bGsiLCJybXNQcmVmaXgiLCJyZGFzaEFscGhhIiwiZmNhbWVsQ2FzZSIsImFsbCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwiY2FtZWxDYXNlIiwic3RyaW5nIiwiYWNjZXB0RGF0YSIsIm93bmVyIiwiRGF0YSIsInVpZCIsImNvbmZpZ3VyYWJsZSIsInNldCIsImRhdGEiLCJwcm9wIiwiaGFzRGF0YSIsImRhdGFQcml2IiwiZGF0YVVzZXIiLCJyYnJhY2UiLCJybXVsdGlEYXNoIiwiZGF0YUF0dHIiLCJKU09OIiwicGFyc2UiLCJnZXREYXRhIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJkZXF1ZXVlIiwic3RhcnRMZW5ndGgiLCJob29rcyIsIl9xdWV1ZUhvb2tzIiwic3RvcCIsInNldHRlciIsImNsZWFyUXVldWUiLCJjb3VudCIsImRlZmVyIiwicG51bSIsInNvdXJjZSIsInJjc3NOdW0iLCJjc3NFeHBhbmQiLCJpc0F0dGFjaGVkIiwiY29tcG9zZWQiLCJnZXRSb290Tm9kZSIsImlzSGlkZGVuV2l0aGluVHJlZSIsInN0eWxlIiwiZGlzcGxheSIsImNzcyIsInN3YXAiLCJvbGQiLCJhZGp1c3RDU1MiLCJ2YWx1ZVBhcnRzIiwidHdlZW4iLCJhZGp1c3RlZCIsInNjYWxlIiwibWF4SXRlcmF0aW9ucyIsImN1cnJlbnRWYWx1ZSIsImluaXRpYWwiLCJ1bml0IiwiY3NzTnVtYmVyIiwiaW5pdGlhbEluVW5pdCIsImRlZmF1bHREaXNwbGF5TWFwIiwiZ2V0RGVmYXVsdERpc3BsYXkiLCJib2R5Iiwic2hvd0hpZGUiLCJzaG93IiwidmFsdWVzIiwiaGlkZSIsInRvZ2dsZSIsInJjaGVja2FibGVUeXBlIiwicnRhZ05hbWUiLCJyc2NyaXB0VHlwZSIsIndyYXBNYXAiLCJvcHRpb24iLCJ0aGVhZCIsImNvbCIsInRyIiwidGQiLCJfZGVmYXVsdCIsImdldEFsbCIsInNldEdsb2JhbEV2YWwiLCJyZWZFbGVtZW50cyIsIm9wdGdyb3VwIiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwiZGl2IiwiYnVpbGRGcmFnbWVudCIsInNjcmlwdHMiLCJzZWxlY3Rpb24iLCJpZ25vcmVkIiwid3JhcCIsImF0dGFjaGVkIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwibm9kZXMiLCJodG1sUHJlZmlsdGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGVja0Nsb25lIiwiY2xvbmVOb2RlIiwibm9DbG9uZUNoZWNrZWQiLCJya2V5RXZlbnQiLCJybW91c2VFdmVudCIsInJ0eXBlbmFtZXNwYWNlIiwicmV0dXJuVHJ1ZSIsInJldHVybkZhbHNlIiwiZXhwZWN0U3luYyIsImVyciIsInNhZmVBY3RpdmVFbGVtZW50IiwidHlwZXMiLCJvbmUiLCJvcmlnRm4iLCJldmVudCIsIm9mZiIsImxldmVyYWdlTmF0aXZlIiwibm90QXN5bmMiLCJzYXZlZCIsImlzVHJpZ2dlciIsImRlbGVnYXRlVHlwZSIsInN0b3BQcm9wYWdhdGlvbiIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInRyaWdnZXIiLCJFdmVudCIsImhhbmRsZU9iakluIiwiZXZlbnRIYW5kbGUiLCJldmVudHMiLCJoYW5kbGVPYmoiLCJoYW5kbGVycyIsIm5hbWVzcGFjZXMiLCJvcmlnVHlwZSIsImVsZW1EYXRhIiwiaGFuZGxlIiwidHJpZ2dlcmVkIiwiZGlzcGF0Y2giLCJiaW5kVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsIm1hcHBlZFR5cGVzIiwib3JpZ0NvdW50IiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsIm5hdGl2ZUV2ZW50IiwiaGFuZGxlclF1ZXVlIiwiZml4IiwiZGVsZWdhdGVUYXJnZXQiLCJwcmVEaXNwYXRjaCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiY3VycmVudFRhcmdldCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwicm5hbWVzcGFjZSIsInBvc3REaXNwYXRjaCIsIm1hdGNoZWRIYW5kbGVycyIsIm1hdGNoZWRTZWxlY3RvcnMiLCJidXR0b24iLCJhZGRQcm9wIiwiaG9vayIsIm9yaWdpbmFsRXZlbnQiLCJ3cml0YWJsZSIsImxvYWQiLCJub0J1YmJsZSIsImNsaWNrIiwiYmVmb3JldW5sb2FkIiwicmV0dXJuVmFsdWUiLCJwcm9wcyIsImlzRGVmYXVsdFByZXZlbnRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJyZWxhdGVkVGFyZ2V0IiwidGltZVN0YW1wIiwibm93IiwiaXNTaW11bGF0ZWQiLCJhbHRLZXkiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNoYW5nZWRUb3VjaGVzIiwiY3RybEtleSIsImRldGFpbCIsImV2ZW50UGhhc2UiLCJtZXRhS2V5IiwicGFnZVgiLCJwYWdlWSIsInNoaWZ0S2V5IiwidmlldyIsImNoYXJDb2RlIiwia2V5Q29kZSIsImJ1dHRvbnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInRhcmdldFRvdWNoZXMiLCJ0b0VsZW1lbnQiLCJ0b3VjaGVzIiwid2hpY2giLCJmb2N1cyIsImJsdXIiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsIm9yaWciLCJyZWxhdGVkIiwicnhodG1sVGFnIiwicm5vSW5uZXJodG1sIiwicmNoZWNrZWQiLCJyY2xlYW5TY3JpcHQiLCJtYW5pcHVsYXRpb25UYXJnZXQiLCJkaXNhYmxlU2NyaXB0IiwicmVzdG9yZVNjcmlwdCIsImNsb25lQ29weUV2ZW50IiwiZGVzdCIsInBkYXRhT2xkIiwicGRhdGFDdXIiLCJ1ZGF0YU9sZCIsInVkYXRhQ3VyIiwiZml4SW5wdXQiLCJkb21NYW5pcCIsImNvbGxlY3Rpb24iLCJoYXNTY3JpcHRzIiwiaU5vQ2xvbmUiLCJ2YWx1ZUlzRnVuY3Rpb24iLCJodG1sIiwiX2V2YWxVcmwiLCJrZWVwRGF0YSIsImNsZWFuRGF0YSIsImRhdGFBbmRFdmVudHMiLCJkZWVwRGF0YUFuZEV2ZW50cyIsInNyY0VsZW1lbnRzIiwiZGVzdEVsZW1lbnRzIiwiaW5QYWdlIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIm9yaWdpbmFsIiwiaW5zZXJ0Iiwicm51bW5vbnB4IiwiZ2V0U3R5bGVzIiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJib3hTdHlsZSIsImN1ckNTUyIsImNvbXB1dGVkIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBpeGVsQm94U3R5bGVzIiwiYWRkR2V0SG9va0lmIiwiY29uZGl0aW9uRm4iLCJob29rRm4iLCJjb21wdXRlU3R5bGVUZXN0cyIsImNvbnRhaW5lciIsImNzc1RleHQiLCJkaXZTdHlsZSIsInBpeGVsUG9zaXRpb25WYWwiLCJyZWxpYWJsZU1hcmdpbkxlZnRWYWwiLCJyb3VuZFBpeGVsTWVhc3VyZXMiLCJtYXJnaW5MZWZ0IiwicmlnaHQiLCJwaXhlbEJveFN0eWxlc1ZhbCIsImJveFNpemluZ1JlbGlhYmxlVmFsIiwicG9zaXRpb24iLCJzY3JvbGxib3hTaXplVmFsIiwib2Zmc2V0V2lkdGgiLCJtZWFzdXJlIiwicm91bmQiLCJwYXJzZUZsb2F0IiwiYmFja2dyb3VuZENsaXAiLCJjbGVhckNsb25lU3R5bGUiLCJib3hTaXppbmdSZWxpYWJsZSIsInBpeGVsUG9zaXRpb24iLCJyZWxpYWJsZU1hcmdpbkxlZnQiLCJzY3JvbGxib3hTaXplIiwiY3NzUHJlZml4ZXMiLCJlbXB0eVN0eWxlIiwidmVuZG9yUHJvcHMiLCJmaW5hbFByb3BOYW1lIiwiZmluYWwiLCJjc3NQcm9wcyIsImNhcE5hbWUiLCJ2ZW5kb3JQcm9wTmFtZSIsInJkaXNwbGF5c3dhcCIsInJjdXN0b21Qcm9wIiwiY3NzU2hvdyIsInZpc2liaWxpdHkiLCJjc3NOb3JtYWxUcmFuc2Zvcm0iLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFdlaWdodCIsInNldFBvc2l0aXZlTnVtYmVyIiwic3VidHJhY3QiLCJtYXgiLCJib3hNb2RlbEFkanVzdG1lbnQiLCJkaW1lbnNpb24iLCJib3giLCJpc0JvcmRlckJveCIsInN0eWxlcyIsImNvbXB1dGVkVmFsIiwiZXh0cmEiLCJkZWx0YSIsImNlaWwiLCJnZXRXaWR0aE9ySGVpZ2h0IiwidmFsdWVJc0JvcmRlckJveCIsIm9mZnNldFByb3AiLCJnZXRDbGllbnRSZWN0cyIsIlR3ZWVuIiwiZWFzaW5nIiwiY3NzSG9va3MiLCJvcGFjaXR5Iiwib3JpZ05hbWUiLCJpc0N1c3RvbVByb3AiLCJzZXRQcm9wZXJ0eSIsImlzRmluaXRlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2Nyb2xsYm94U2l6ZUJ1Z2d5IiwibGVmdCIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJwcmVmaXgiLCJzdWZmaXgiLCJleHBhbmQiLCJleHBhbmRlZCIsInBhcnRzIiwicHJvcEhvb2tzIiwicnVuIiwicGVyY2VudCIsImVhc2VkIiwiZHVyYXRpb24iLCJwb3MiLCJzdGVwIiwiZngiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwibGluZWFyIiwic3dpbmciLCJjb3MiLCJQSSIsImZ4Tm93IiwiaW5Qcm9ncmVzcyIsInJmeHR5cGVzIiwicnJ1biIsInNjaGVkdWxlIiwiaGlkZGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW50ZXJ2YWwiLCJ0aWNrIiwiY3JlYXRlRnhOb3ciLCJnZW5GeCIsImluY2x1ZGVXaWR0aCIsImhlaWdodCIsImNyZWF0ZVR3ZWVuIiwiYW5pbWF0aW9uIiwiQW5pbWF0aW9uIiwidHdlZW5lcnMiLCJwcm9wZXJ0aWVzIiwic3RvcHBlZCIsInByZWZpbHRlcnMiLCJjdXJyZW50VGltZSIsInN0YXJ0VGltZSIsInR3ZWVucyIsIm9wdHMiLCJzcGVjaWFsRWFzaW5nIiwib3JpZ2luYWxQcm9wZXJ0aWVzIiwib3JpZ2luYWxPcHRpb25zIiwiZ290b0VuZCIsInByb3BGaWx0ZXIiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsInR3ZWVuZXIiLCJvbGRmaXJlIiwicHJvcFR3ZWVuIiwicmVzdG9yZURpc3BsYXkiLCJpc0JveCIsImRhdGFTaG93IiwidW5xdWV1ZWQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsInByZWZpbHRlciIsInNwZWVkIiwib3B0Iiwic3BlZWRzIiwiZmFkZVRvIiwidG8iLCJhbmltYXRlIiwib3B0YWxsIiwiZG9BbmltYXRpb24iLCJmaW5pc2giLCJzdG9wUXVldWUiLCJ0aW1lcnMiLCJjc3NGbiIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImZhZGVJbiIsImZhZGVPdXQiLCJmYWRlVG9nZ2xlIiwic2xvdyIsImZhc3QiLCJkZWxheSIsInRpbWUiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsImJvb2xIb29rIiwicmVtb3ZlQXR0ciIsIm5UeXBlIiwiYXR0ckhvb2tzIiwiYm9vbCIsImF0dHJOYW1lcyIsImxvd2VyY2FzZU5hbWUiLCJyZm9jdXNhYmxlIiwicmNsaWNrYWJsZSIsInN0cmlwQW5kQ29sbGFwc2UiLCJnZXRDbGFzcyIsImNsYXNzZXNUb0FycmF5IiwicmVtb3ZlUHJvcCIsInByb3BGaXgiLCJ0YWJpbmRleCIsInBhcnNlSW50IiwiYWRkQ2xhc3MiLCJjbGFzc2VzIiwiY3VyVmFsdWUiLCJjbGF6eiIsImZpbmFsVmFsdWUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwic3RhdGVWYWwiLCJpc1ZhbGlkVmFsdWUiLCJjbGFzc05hbWVzIiwiaGFzQ2xhc3MiLCJycmV0dXJuIiwidmFsSG9va3MiLCJvcHRpb25TZXQiLCJmb2N1c2luIiwicmZvY3VzTW9ycGgiLCJzdG9wUHJvcGFnYXRpb25DYWxsYmFjayIsIm9ubHlIYW5kbGVycyIsImJ1YmJsZVR5cGUiLCJvbnR5cGUiLCJsYXN0RWxlbWVudCIsImV2ZW50UGF0aCIsInBhcmVudFdpbmRvdyIsInNpbXVsYXRlIiwidHJpZ2dlckhhbmRsZXIiLCJhdHRhY2hlcyIsInJxdWVyeSIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicmJyYWNrZXQiLCJyQ1JMRiIsInJzdWJtaXR0ZXJUeXBlcyIsInJzdWJtaXR0YWJsZSIsImJ1aWxkUGFyYW1zIiwidHJhZGl0aW9uYWwiLCJwYXJhbSIsInZhbHVlT3JGdW5jdGlvbiIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZSIsInNlcmlhbGl6ZUFycmF5IiwicjIwIiwicmhhc2giLCJyYW50aUNhY2hlIiwicmhlYWRlcnMiLCJybm9Db250ZW50IiwicnByb3RvY29sIiwidHJhbnNwb3J0cyIsImFsbFR5cGVzIiwib3JpZ2luQW5jaG9yIiwiYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzIiwic3RydWN0dXJlIiwiZGF0YVR5cGVFeHByZXNzaW9uIiwiZGF0YVR5cGUiLCJkYXRhVHlwZXMiLCJpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyIsImpxWEhSIiwiaW5zcGVjdGVkIiwic2Vla2luZ1RyYW5zcG9ydCIsImluc3BlY3QiLCJwcmVmaWx0ZXJPckZhY3RvcnkiLCJkYXRhVHlwZU9yVHJhbnNwb3J0IiwiYWpheEV4dGVuZCIsImZsYXRPcHRpb25zIiwiYWpheFNldHRpbmdzIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm90b2NvbCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjb250ZW50VHlwZSIsImFjY2VwdHMiLCJqc29uIiwicmVzcG9uc2VGaWVsZHMiLCJjb252ZXJ0ZXJzIiwiYWpheFNldHVwIiwic2V0dGluZ3MiLCJhamF4UHJlZmlsdGVyIiwiYWpheFRyYW5zcG9ydCIsImFqYXgiLCJ0cmFuc3BvcnQiLCJjYWNoZVVSTCIsInJlc3BvbnNlSGVhZGVyc1N0cmluZyIsInJlc3BvbnNlSGVhZGVycyIsInRpbWVvdXRUaW1lciIsInVybEFuY2hvciIsImZpcmVHbG9iYWxzIiwidW5jYWNoZWQiLCJjYWxsYmFja0NvbnRleHQiLCJnbG9iYWxFdmVudENvbnRleHQiLCJjb21wbGV0ZURlZmVycmVkIiwic3RhdHVzQ29kZSIsInJlcXVlc3RIZWFkZXJzIiwicmVxdWVzdEhlYWRlcnNOYW1lcyIsInN0ckFib3J0IiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib3ZlcnJpZGVNaW1lVHlwZSIsIm1pbWVUeXBlIiwic3RhdHVzIiwiYWJvcnQiLCJzdGF0dXNUZXh0IiwiZmluYWxUZXh0IiwiY3Jvc3NEb21haW4iLCJob3N0IiwiaGFzQ29udGVudCIsImlmTW9kaWZpZWQiLCJoZWFkZXJzIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJzZW5kIiwibmF0aXZlU3RhdHVzVGV4dCIsInJlc3BvbnNlcyIsImlzU3VjY2VzcyIsInJlc3BvbnNlIiwibW9kaWZpZWQiLCJjdCIsImZpbmFsRGF0YVR5cGUiLCJmaXJzdERhdGFUeXBlIiwiYWpheEhhbmRsZVJlc3BvbnNlcyIsImNvbnYyIiwiY3VycmVudCIsImNvbnYiLCJkYXRhRmlsdGVyIiwidGhyb3dzIiwiYWpheENvbnZlcnQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwiaHRtbElzRnVuY3Rpb24iLCJ1bndyYXAiLCJ2aXNpYmxlIiwib2Zmc2V0SGVpZ2h0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJ4aHJTdWNjZXNzU3RhdHVzIiwiMCIsIjEyMjMiLCJ4aHJTdXBwb3J0ZWQiLCJjb3JzIiwiZXJyb3JDYWxsYmFjayIsIm9wZW4iLCJ1c2VybmFtZSIsInhockZpZWxkcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvbmFib3J0Iiwib250aW1lb3V0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VUZXh0IiwiYmluYXJ5Iiwic2NyaXB0QXR0cnMiLCJjaGFyc2V0Iiwic2NyaXB0Q2hhcnNldCIsIm9sZENhbGxiYWNrcyIsInJqc29ucCIsImpzb25wIiwianNvbnBDYWxsYmFjayIsIm9yaWdpbmFsU2V0dGluZ3MiLCJjYWxsYmFja05hbWUiLCJvdmVyd3JpdHRlbiIsInJlc3BvbnNlQ29udGFpbmVyIiwianNvblByb3AiLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImtlZXBTY3JpcHRzIiwicGFyc2VkIiwicGFyYW1zIiwiYW5pbWF0ZWQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJjdXJQb3NpdGlvbiIsImN1ckxlZnQiLCJjdXJDU1NUb3AiLCJjdXJUb3AiLCJjdXJPZmZzZXQiLCJjdXJDU1NMZWZ0IiwiY3VyRWxlbSIsInVzaW5nIiwicmVjdCIsIndpbiIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJvZmZzZXRQYXJlbnQiLCJwYXJlbnRPZmZzZXQiLCJzY3JvbGxUbyIsIkhlaWdodCIsIldpZHRoIiwiZGVmYXVsdEV4dHJhIiwiZnVuY05hbWUiLCJob3ZlciIsImZuT3ZlciIsImZuT3V0IiwidW5iaW5kIiwiZGVsZWdhdGUiLCJ1bmRlbGVnYXRlIiwicHJveHkiLCJob2xkUmVhZHkiLCJob2xkIiwicGFyc2VKU09OIiwiaXNOdW1lcmljIiwiaXNOYU4iLCJfalF1ZXJ5IiwiXyQiLCJub0NvbmZsaWN0Il0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFB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QUFVRCxNQUFNQyxRQUN2QnhDLEVBQU80a0MsVUFBWTdtQixLQUFLQyxNQUN4QmhlLEVBQU91SSxTQUFXQSxFQUNsQnZJLEVBQU94QixXQUFhQSxFQUNwQndCLEVBQU9yQixTQUFXQSxFQUNsQnFCLEVBQU8rYyxVQUFZQSxFQUNuQi9jLEVBQU9uQixLQUFPa0IsRUFFZEMsRUFBT21uQixJQUFNL2hCLEtBQUsraEIsSUFFbEJubkIsRUFBTzZrQyxVQUFZLFNBQVVwbUMsR0FLNUIsSUFBSUksRUFBT21CLEVBQU9uQixLQUFNSixHQUN4QixPQUFrQixXQUFUSSxHQUE4QixXQUFUQSxLQUs1QmltQyxNQUFPcm1DLEVBQU13dkIsV0FBWXh2QixVQXNCMUIsS0FGcUIsRUFBRixXQUNuQixPQUFPdUIsR0FDUCxRQUZpQixPQUVqQixhQU1GLElBR0Mra0MsR0FBVXZuQyxFQUFPd0MsT0FHakJnbEMsR0FBS3huQyxFQUFPWCxFQXdCYixPQXRCQW1ELEVBQU9pbEMsV0FBYSxTQUFVNWlDLEdBUzdCLE9BUks3RSxFQUFPWCxJQUFNbUQsSUFDakJ4QyxFQUFPWCxFQUFJbW9DLElBR1AzaUMsR0FBUTdFLEVBQU93QyxTQUFXQSxJQUM5QnhDLEVBQU93QyxPQUFTK2tDLElBR1Yva0MsR0FNRnRDLElBQ0xGLEVBQU93QyxPQUFTeEMsRUFBT1gsRUFBSW1ELEdBTXJCQSIsImZpbGUiOiJvdXRwdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuJCgnLnRoaXMtY2xhc3MnKS5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnNvbGUubG9nKGV2dCk7XG59KTtcbiIsIi8qIVxuICogalF1ZXJ5IEphdmFTY3JpcHQgTGlicmFyeSB2My40LjFcbiAqIGh0dHBzOi8vanF1ZXJ5LmNvbS9cbiAqXG4gKiBJbmNsdWRlcyBTaXp6bGUuanNcbiAqIGh0dHBzOi8vc2l6emxlanMuY29tL1xuICpcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDE5LTA1LTAxVDIxOjA0WlxuICovXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0aWYgKCB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdC8vIEZvciBDb21tb25KUyBhbmQgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgd2hlcmUgYSBwcm9wZXIgYHdpbmRvd2Bcblx0XHQvLyBpcyBwcmVzZW50LCBleGVjdXRlIHRoZSBmYWN0b3J5IGFuZCBnZXQgalF1ZXJ5LlxuXHRcdC8vIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3QgaGF2ZSBhIGB3aW5kb3dgIHdpdGggYSBgZG9jdW1lbnRgXG5cdFx0Ly8gKHN1Y2ggYXMgTm9kZS5qcyksIGV4cG9zZSBhIGZhY3RvcnkgYXMgbW9kdWxlLmV4cG9ydHMuXG5cdFx0Ly8gVGhpcyBhY2NlbnR1YXRlcyB0aGUgbmVlZCBmb3IgdGhlIGNyZWF0aW9uIG9mIGEgcmVhbCBgd2luZG93YC5cblx0XHQvLyBlLmcuIHZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpKHdpbmRvdyk7XG5cdFx0Ly8gU2VlIHRpY2tldCAjMTQ1NDkgZm9yIG1vcmUgaW5mby5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/XG5cdFx0XHRmYWN0b3J5KCBnbG9iYWwsIHRydWUgKSA6XG5cdFx0XHRmdW5jdGlvbiggdyApIHtcblx0XHRcdFx0aWYgKCAhdy5kb2N1bWVudCApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhY3RvcnkoIHcgKTtcblx0XHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeSggZ2xvYmFsICk7XG5cdH1cblxuLy8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcbn0gKSggdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCB3aW5kb3csIG5vR2xvYmFsICkge1xuXG4vLyBFZGdlIDw9IDEyIC0gMTMrLCBGaXJlZm94IDw9MTggLSA0NSssIElFIDEwIC0gMTEsIFNhZmFyaSA1LjEgLSA5KywgaU9TIDYgLSA5LjFcbi8vIHRocm93IGV4Y2VwdGlvbnMgd2hlbiBub24tc3RyaWN0IGNvZGUgKGUuZy4sIEFTUC5ORVQgNC41KSBhY2Nlc3NlcyBzdHJpY3QgbW9kZVxuLy8gYXJndW1lbnRzLmNhbGxlZS5jYWxsZXIgKHRyYWMtMTMzMzUpLiBCdXQgYXMgb2YgalF1ZXJ5IDMuMCAoMjAxNiksIHN0cmljdCBtb2RlIHNob3VsZCBiZSBjb21tb25cbi8vIGVub3VnaCB0aGF0IGFsbCBzdWNoIGF0dGVtcHRzIGFyZSBndWFyZGVkIGluIGEgdHJ5IGJsb2NrLlxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhcnIgPSBbXTtcblxudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbnZhciBzbGljZSA9IGFyci5zbGljZTtcblxudmFyIGNvbmNhdCA9IGFyci5jb25jYXQ7XG5cbnZhciBwdXNoID0gYXJyLnB1c2g7XG5cbnZhciBpbmRleE9mID0gYXJyLmluZGV4T2Y7XG5cbnZhciBjbGFzczJ0eXBlID0ge307XG5cbnZhciB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmc7XG5cbnZhciBoYXNPd24gPSBjbGFzczJ0eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgZm5Ub1N0cmluZyA9IGhhc093bi50b1N0cmluZztcblxudmFyIE9iamVjdEZ1bmN0aW9uU3RyaW5nID0gZm5Ub1N0cmluZy5jYWxsKCBPYmplY3QgKTtcblxudmFyIHN1cHBvcnQgPSB7fTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XG5cbiAgICAgIC8vIFN1cHBvcnQ6IENocm9tZSA8PTU3LCBGaXJlZm94IDw9NTJcbiAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMsIHR5cGVvZiByZXR1cm5zIFwiZnVuY3Rpb25cIiBmb3IgSFRNTCA8b2JqZWN0PiBlbGVtZW50c1xuICAgICAgLy8gKGkuZS4sIGB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJvYmplY3RcIiApID09PSBcImZ1bmN0aW9uXCJgKS5cbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gY2xhc3NpZnkgKmFueSogRE9NIG5vZGUgYXMgYSBmdW5jdGlvbi5cbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIG9iai5ub2RlVHlwZSAhPT0gXCJudW1iZXJcIjtcbiAgfTtcblxuXG52YXIgaXNXaW5kb3cgPSBmdW5jdGlvbiBpc1dpbmRvdyggb2JqICkge1xuXHRcdHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG5cdH07XG5cblxuXG5cblx0dmFyIHByZXNlcnZlZFNjcmlwdEF0dHJpYnV0ZXMgPSB7XG5cdFx0dHlwZTogdHJ1ZSxcblx0XHRzcmM6IHRydWUsXG5cdFx0bm9uY2U6IHRydWUsXG5cdFx0bm9Nb2R1bGU6IHRydWVcblx0fTtcblxuXHRmdW5jdGlvbiBET01FdmFsKCBjb2RlLCBub2RlLCBkb2MgKSB7XG5cdFx0ZG9jID0gZG9jIHx8IGRvY3VtZW50O1xuXG5cdFx0dmFyIGksIHZhbCxcblx0XHRcdHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KCBcInNjcmlwdFwiICk7XG5cblx0XHRzY3JpcHQudGV4dCA9IGNvZGU7XG5cdFx0aWYgKCBub2RlICkge1xuXHRcdFx0Zm9yICggaSBpbiBwcmVzZXJ2ZWRTY3JpcHRBdHRyaWJ1dGVzICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggNjQrLCBFZGdlIDE4K1xuXHRcdFx0XHQvLyBTb21lIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgdGhlIFwibm9uY2VcIiBwcm9wZXJ0eSBvbiBzY3JpcHRzLlxuXHRcdFx0XHQvLyBPbiB0aGUgb3RoZXIgaGFuZCwganVzdCB1c2luZyBgZ2V0QXR0cmlidXRlYCBpcyBub3QgZW5vdWdoIGFzXG5cdFx0XHRcdC8vIHRoZSBgbm9uY2VgIGF0dHJpYnV0ZSBpcyByZXNldCB0byBhbiBlbXB0eSBzdHJpbmcgd2hlbmV2ZXIgaXRcblx0XHRcdFx0Ly8gYmVjb21lcyBicm93c2luZy1jb250ZXh0IGNvbm5lY3RlZC5cblx0XHRcdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvMjM2OVxuXHRcdFx0XHQvLyBTZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jbm9uY2UtYXR0cmlidXRlc1xuXHRcdFx0XHQvLyBUaGUgYG5vZGUuZ2V0QXR0cmlidXRlYCBjaGVjayB3YXMgYWRkZWQgZm9yIHRoZSBzYWtlIG9mXG5cdFx0XHRcdC8vIGBqUXVlcnkuZ2xvYmFsRXZhbGAgc28gdGhhdCBpdCBjYW4gZmFrZSBhIG5vbmNlLWNvbnRhaW5pbmcgbm9kZVxuXHRcdFx0XHQvLyB2aWEgYW4gb2JqZWN0LlxuXHRcdFx0XHR2YWwgPSBub2RlWyBpIF0gfHwgbm9kZS5nZXRBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoIGkgKTtcblx0XHRcdFx0aWYgKCB2YWwgKSB7XG5cdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZSggaSwgdmFsICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZG9jLmhlYWQuYXBwZW5kQ2hpbGQoIHNjcmlwdCApLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHNjcmlwdCApO1xuXHR9XG5cblxuZnVuY3Rpb24gdG9UeXBlKCBvYmogKSB7XG5cdGlmICggb2JqID09IG51bGwgKSB7XG5cdFx0cmV0dXJuIG9iaiArIFwiXCI7XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9Mi4zIG9ubHkgKGZ1bmN0aW9uaXNoIFJlZ0V4cClcblx0cmV0dXJuIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiID9cblx0XHRjbGFzczJ0eXBlWyB0b1N0cmluZy5jYWxsKCBvYmogKSBdIHx8IFwib2JqZWN0XCIgOlxuXHRcdHR5cGVvZiBvYmo7XG59XG4vKiBnbG9iYWwgU3ltYm9sICovXG4vLyBEZWZpbmluZyB0aGlzIGdsb2JhbCBpbiAuZXNsaW50cmMuanNvbiB3b3VsZCBjcmVhdGUgYSBkYW5nZXIgb2YgdXNpbmcgdGhlIGdsb2JhbFxuLy8gdW5ndWFyZGVkIGluIGFub3RoZXIgcGxhY2UsIGl0IHNlZW1zIHNhZmVyIHRvIGRlZmluZSBnbG9iYWwgb25seSBmb3IgdGhpcyBtb2R1bGVcblxuXG5cbnZhclxuXHR2ZXJzaW9uID0gXCIzLjQuMVwiLFxuXG5cdC8vIERlZmluZSBhIGxvY2FsIGNvcHkgb2YgalF1ZXJ5XG5cdGpRdWVyeSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblxuXHRcdC8vIFRoZSBqUXVlcnkgb2JqZWN0IGlzIGFjdHVhbGx5IGp1c3QgdGhlIGluaXQgY29uc3RydWN0b3IgJ2VuaGFuY2VkJ1xuXHRcdC8vIE5lZWQgaW5pdCBpZiBqUXVlcnkgaXMgY2FsbGVkIChqdXN0IGFsbG93IGVycm9yIHRvIGJlIHRocm93biBpZiBub3QgaW5jbHVkZWQpXG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuZm4uaW5pdCggc2VsZWN0b3IsIGNvbnRleHQgKTtcblx0fSxcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHlcblx0Ly8gTWFrZSBzdXJlIHdlIHRyaW0gQk9NIGFuZCBOQlNQXG5cdHJ0cmltID0gL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nO1xuXG5qUXVlcnkuZm4gPSBqUXVlcnkucHJvdG90eXBlID0ge1xuXG5cdC8vIFRoZSBjdXJyZW50IHZlcnNpb24gb2YgalF1ZXJ5IGJlaW5nIHVzZWRcblx0anF1ZXJ5OiB2ZXJzaW9uLFxuXG5cdGNvbnN0cnVjdG9yOiBqUXVlcnksXG5cblx0Ly8gVGhlIGRlZmF1bHQgbGVuZ3RoIG9mIGEgalF1ZXJ5IG9iamVjdCBpcyAwXG5cdGxlbmd0aDogMCxcblxuXHR0b0FycmF5OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2xpY2UuY2FsbCggdGhpcyApO1xuXHR9LFxuXG5cdC8vIEdldCB0aGUgTnRoIGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgZWxlbWVudCBzZXQgT1Jcblx0Ly8gR2V0IHRoZSB3aG9sZSBtYXRjaGVkIGVsZW1lbnQgc2V0IGFzIGEgY2xlYW4gYXJyYXlcblx0Z2V0OiBmdW5jdGlvbiggbnVtICkge1xuXG5cdFx0Ly8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgaW4gYSBjbGVhbiBhcnJheVxuXHRcdGlmICggbnVtID09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gc2xpY2UuY2FsbCggdGhpcyApO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiBqdXN0IHRoZSBvbmUgZWxlbWVudCBmcm9tIHRoZSBzZXRcblx0XHRyZXR1cm4gbnVtIDwgMCA/IHRoaXNbIG51bSArIHRoaXMubGVuZ3RoIF0gOiB0aGlzWyBudW0gXTtcblx0fSxcblxuXHQvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGFuZCBwdXNoIGl0IG9udG8gdGhlIHN0YWNrXG5cdC8vIChyZXR1cm5pbmcgdGhlIG5ldyBtYXRjaGVkIGVsZW1lbnQgc2V0KVxuXHRwdXNoU3RhY2s6IGZ1bmN0aW9uKCBlbGVtcyApIHtcblxuXHRcdC8vIEJ1aWxkIGEgbmV3IGpRdWVyeSBtYXRjaGVkIGVsZW1lbnQgc2V0XG5cdFx0dmFyIHJldCA9IGpRdWVyeS5tZXJnZSggdGhpcy5jb25zdHJ1Y3RvcigpLCBlbGVtcyApO1xuXG5cdFx0Ly8gQWRkIHRoZSBvbGQgb2JqZWN0IG9udG8gdGhlIHN0YWNrIChhcyBhIHJlZmVyZW5jZSlcblx0XHRyZXQucHJldk9iamVjdCA9IHRoaXM7XG5cblx0XHQvLyBSZXR1cm4gdGhlIG5ld2x5LWZvcm1lZCBlbGVtZW50IHNldFxuXHRcdHJldHVybiByZXQ7XG5cdH0sXG5cblx0Ly8gRXhlY3V0ZSBhIGNhbGxiYWNrIGZvciBldmVyeSBlbGVtZW50IGluIHRoZSBtYXRjaGVkIHNldC5cblx0ZWFjaDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZWFjaCggdGhpcywgY2FsbGJhY2sgKTtcblx0fSxcblxuXHRtYXA6IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGpRdWVyeS5tYXAoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwoIGVsZW0sIGksIGVsZW0gKTtcblx0XHR9ICkgKTtcblx0fSxcblxuXHRzbGljZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBzbGljZS5hcHBseSggdGhpcywgYXJndW1lbnRzICkgKTtcblx0fSxcblxuXHRmaXJzdDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXEoIDAgKTtcblx0fSxcblxuXHRsYXN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggLTEgKTtcblx0fSxcblxuXHRlcTogZnVuY3Rpb24oIGkgKSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0aiA9ICtpICsgKCBpIDwgMCA/IGxlbiA6IDAgKTtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGogPj0gMCAmJiBqIDwgbGVuID8gWyB0aGlzWyBqIF0gXSA6IFtdICk7XG5cdH0sXG5cblx0ZW5kOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wcmV2T2JqZWN0IHx8IHRoaXMuY29uc3RydWN0b3IoKTtcblx0fSxcblxuXHQvLyBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG5cdC8vIEJlaGF2ZXMgbGlrZSBhbiBBcnJheSdzIG1ldGhvZCwgbm90IGxpa2UgYSBqUXVlcnkgbWV0aG9kLlxuXHRwdXNoOiBwdXNoLFxuXHRzb3J0OiBhcnIuc29ydCxcblx0c3BsaWNlOiBhcnIuc3BsaWNlXG59O1xuXG5qUXVlcnkuZXh0ZW5kID0galF1ZXJ5LmZuLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsXG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWyAwIF0gfHwge30sXG5cdFx0aSA9IDEsXG5cdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcblx0XHRkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAoIHR5cGVvZiB0YXJnZXQgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cblx0XHQvLyBTa2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWyBpIF0gfHwge307XG5cdFx0aSsrO1xuXHR9XG5cblx0Ly8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nIChwb3NzaWJsZSBpbiBkZWVwIGNvcHkpXG5cdGlmICggdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIiAmJiAhaXNGdW5jdGlvbiggdGFyZ2V0ICkgKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHQvLyBFeHRlbmQgalF1ZXJ5IGl0c2VsZiBpZiBvbmx5IG9uZSBhcmd1bWVudCBpcyBwYXNzZWRcblx0aWYgKCBpID09PSBsZW5ndGggKSB7XG5cdFx0dGFyZ2V0ID0gdGhpcztcblx0XHRpLS07XG5cdH1cblxuXHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblxuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAoICggb3B0aW9ucyA9IGFyZ3VtZW50c1sgaSBdICkgIT0gbnVsbCApIHtcblxuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1sgbmFtZSBdO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgT2JqZWN0LnByb3RvdHlwZSBwb2xsdXRpb25cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAoIG5hbWUgPT09IFwiX19wcm90b19fXCIgfHwgdGFyZ2V0ID09PSBjb3B5ICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdGlmICggZGVlcCAmJiBjb3B5ICYmICggalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvcHkgKSB8fFxuXHRcdFx0XHRcdCggY29weUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KCBjb3B5ICkgKSApICkge1xuXHRcdFx0XHRcdHNyYyA9IHRhcmdldFsgbmFtZSBdO1xuXG5cdFx0XHRcdFx0Ly8gRW5zdXJlIHByb3BlciB0eXBlIGZvciB0aGUgc291cmNlIHZhbHVlXG5cdFx0XHRcdFx0aWYgKCBjb3B5SXNBcnJheSAmJiAhQXJyYXkuaXNBcnJheSggc3JjICkgKSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IFtdO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoICFjb3B5SXNBcnJheSAmJiAhalF1ZXJ5LmlzUGxhaW5PYmplY3QoIHNyYyApICkge1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSB7fTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cblx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGpRdWVyeS5leHRlbmQoIGRlZXAsIGNsb25lLCBjb3B5ICk7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBjb3B5ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0dGFyZ2V0WyBuYW1lIF0gPSBjb3B5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBVbmlxdWUgZm9yIGVhY2ggY29weSBvZiBqUXVlcnkgb24gdGhlIHBhZ2Vcblx0ZXhwYW5kbzogXCJqUXVlcnlcIiArICggdmVyc2lvbiArIE1hdGgucmFuZG9tKCkgKS5yZXBsYWNlKCAvXFxEL2csIFwiXCIgKSxcblxuXHQvLyBBc3N1bWUgalF1ZXJ5IGlzIHJlYWR5IHdpdGhvdXQgdGhlIHJlYWR5IG1vZHVsZVxuXHRpc1JlYWR5OiB0cnVlLFxuXG5cdGVycm9yOiBmdW5jdGlvbiggbXNnICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggbXNnICk7XG5cdH0sXG5cblx0bm9vcDogZnVuY3Rpb24oKSB7fSxcblxuXHRpc1BsYWluT2JqZWN0OiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHZhciBwcm90bywgQ3RvcjtcblxuXHRcdC8vIERldGVjdCBvYnZpb3VzIG5lZ2F0aXZlc1xuXHRcdC8vIFVzZSB0b1N0cmluZyBpbnN0ZWFkIG9mIGpRdWVyeS50eXBlIHRvIGNhdGNoIGhvc3Qgb2JqZWN0c1xuXHRcdGlmICggIW9iaiB8fCB0b1N0cmluZy5jYWxsKCBvYmogKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRwcm90byA9IGdldFByb3RvKCBvYmogKTtcblxuXHRcdC8vIE9iamVjdHMgd2l0aCBubyBwcm90b3R5cGUgKGUuZy4sIGBPYmplY3QuY3JlYXRlKCBudWxsIClgKSBhcmUgcGxhaW5cblx0XHRpZiAoICFwcm90byApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIE9iamVjdHMgd2l0aCBwcm90b3R5cGUgYXJlIHBsYWluIGlmZiB0aGV5IHdlcmUgY29uc3RydWN0ZWQgYnkgYSBnbG9iYWwgT2JqZWN0IGZ1bmN0aW9uXG5cdFx0Q3RvciA9IGhhc093bi5jYWxsKCBwcm90bywgXCJjb25zdHJ1Y3RvclwiICkgJiYgcHJvdG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIHR5cGVvZiBDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgZm5Ub1N0cmluZy5jYWxsKCBDdG9yICkgPT09IE9iamVjdEZ1bmN0aW9uU3RyaW5nO1xuXHR9LFxuXG5cdGlzRW1wdHlPYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0dmFyIG5hbWU7XG5cblx0XHRmb3IgKCBuYW1lIGluIG9iaiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gRXZhbHVhdGVzIGEgc2NyaXB0IGluIGEgZ2xvYmFsIGNvbnRleHRcblx0Z2xvYmFsRXZhbDogZnVuY3Rpb24oIGNvZGUsIG9wdGlvbnMgKSB7XG5cdFx0RE9NRXZhbCggY29kZSwgeyBub25jZTogb3B0aW9ucyAmJiBvcHRpb25zLm5vbmNlIH0gKTtcblx0fSxcblxuXHRlYWNoOiBmdW5jdGlvbiggb2JqLCBjYWxsYmFjayApIHtcblx0XHR2YXIgbGVuZ3RoLCBpID0gMDtcblxuXHRcdGlmICggaXNBcnJheUxpa2UoIG9iaiApICkge1xuXHRcdFx0bGVuZ3RoID0gb2JqLmxlbmd0aDtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKCBpIGluIG9iaiApIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjay5jYWxsKCBvYmpbIGkgXSwgaSwgb2JqWyBpIF0gKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9LFxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuXHR0cmltOiBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRyZXR1cm4gdGV4dCA9PSBudWxsID9cblx0XHRcdFwiXCIgOlxuXHRcdFx0KCB0ZXh0ICsgXCJcIiApLnJlcGxhY2UoIHJ0cmltLCBcIlwiICk7XG5cdH0sXG5cblx0Ly8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYWtlQXJyYXk6IGZ1bmN0aW9uKCBhcnIsIHJlc3VsdHMgKSB7XG5cdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRpZiAoIGFyciAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBpc0FycmF5TGlrZSggT2JqZWN0KCBhcnIgKSApICkge1xuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHJldCxcblx0XHRcdFx0XHR0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHRbIGFyciBdIDogYXJyXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdXNoLmNhbGwoIHJldCwgYXJyICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHRpbkFycmF5OiBmdW5jdGlvbiggZWxlbSwgYXJyLCBpICkge1xuXHRcdHJldHVybiBhcnIgPT0gbnVsbCA/IC0xIDogaW5kZXhPZi5jYWxsKCBhcnIsIGVsZW0sIGkgKTtcblx0fSxcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRtZXJnZTogZnVuY3Rpb24oIGZpcnN0LCBzZWNvbmQgKSB7XG5cdFx0dmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxuXHRcdFx0aiA9IDAsXG5cdFx0XHRpID0gZmlyc3QubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XG5cdFx0XHRmaXJzdFsgaSsrIF0gPSBzZWNvbmRbIGogXTtcblx0XHR9XG5cblx0XHRmaXJzdC5sZW5ndGggPSBpO1xuXG5cdFx0cmV0dXJuIGZpcnN0O1xuXHR9LFxuXG5cdGdyZXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGludmVydCApIHtcblx0XHR2YXIgY2FsbGJhY2tJbnZlcnNlLFxuXHRcdFx0bWF0Y2hlcyA9IFtdLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGgsXG5cdFx0XHRjYWxsYmFja0V4cGVjdCA9ICFpbnZlcnQ7XG5cblx0XHQvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgb25seSBzYXZpbmcgdGhlIGl0ZW1zXG5cdFx0Ly8gdGhhdCBwYXNzIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb25cblx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdGNhbGxiYWNrSW52ZXJzZSA9ICFjYWxsYmFjayggZWxlbXNbIGkgXSwgaSApO1xuXHRcdFx0aWYgKCBjYWxsYmFja0ludmVyc2UgIT09IGNhbGxiYWNrRXhwZWN0ICkge1xuXHRcdFx0XHRtYXRjaGVzLnB1c2goIGVsZW1zWyBpIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWF0Y2hlcztcblx0fSxcblxuXHQvLyBhcmcgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcblx0bWFwOiBmdW5jdGlvbiggZWxlbXMsIGNhbGxiYWNrLCBhcmcgKSB7XG5cdFx0dmFyIGxlbmd0aCwgdmFsdWUsXG5cdFx0XHRpID0gMCxcblx0XHRcdHJldCA9IFtdO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIHRyYW5zbGF0aW5nIGVhY2ggb2YgdGhlIGl0ZW1zIHRvIHRoZWlyIG5ldyB2YWx1ZXNcblx0XHRpZiAoIGlzQXJyYXlMaWtlKCBlbGVtcyApICkge1xuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soIGVsZW1zWyBpIF0sIGksIGFyZyApO1xuXG5cdFx0XHRcdGlmICggdmFsdWUgIT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXQucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBldmVyeSBrZXkgb24gdGhlIG9iamVjdCxcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICggaSBpbiBlbGVtcyApIHtcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cblx0XHRcdFx0aWYgKCB2YWx1ZSAhPSBudWxsICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuXHRcdHJldHVybiBjb25jYXQuYXBwbHkoIFtdLCByZXQgKTtcblx0fSxcblxuXHQvLyBBIGdsb2JhbCBHVUlEIGNvdW50ZXIgZm9yIG9iamVjdHNcblx0Z3VpZDogMSxcblxuXHQvLyBqUXVlcnkuc3VwcG9ydCBpcyBub3QgdXNlZCBpbiBDb3JlIGJ1dCBvdGhlciBwcm9qZWN0cyBhdHRhY2ggdGhlaXJcblx0Ly8gcHJvcGVydGllcyB0byBpdCBzbyBpdCBuZWVkcyB0byBleGlzdC5cblx0c3VwcG9ydDogc3VwcG9ydFxufSApO1xuXG5pZiAoIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0alF1ZXJ5LmZuWyBTeW1ib2wuaXRlcmF0b3IgXSA9IGFyclsgU3ltYm9sLml0ZXJhdG9yIF07XG59XG5cbi8vIFBvcHVsYXRlIHRoZSBjbGFzczJ0eXBlIG1hcFxualF1ZXJ5LmVhY2goIFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdCggXCIgXCIgKSxcbmZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHRjbGFzczJ0eXBlWyBcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIgXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbn0gKTtcblxuZnVuY3Rpb24gaXNBcnJheUxpa2UoIG9iaiApIHtcblxuXHQvLyBTdXBwb3J0OiByZWFsIGlPUyA4LjIgb25seSAobm90IHJlcHJvZHVjaWJsZSBpbiBzaW11bGF0b3IpXG5cdC8vIGBpbmAgY2hlY2sgdXNlZCB0byBwcmV2ZW50IEpJVCBlcnJvciAoZ2gtMjE0NSlcblx0Ly8gaGFzT3duIGlzbid0IHVzZWQgaGVyZSBkdWUgdG8gZmFsc2UgbmVnYXRpdmVzXG5cdC8vIHJlZ2FyZGluZyBOb2RlbGlzdCBsZW5ndGggaW4gSUVcblx0dmFyIGxlbmd0aCA9ICEhb2JqICYmIFwibGVuZ3RoXCIgaW4gb2JqICYmIG9iai5sZW5ndGgsXG5cdFx0dHlwZSA9IHRvVHlwZSggb2JqICk7XG5cblx0aWYgKCBpc0Z1bmN0aW9uKCBvYmogKSB8fCBpc1dpbmRvdyggb2JqICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHR5cGUgPT09IFwiYXJyYXlcIiB8fCBsZW5ndGggPT09IDAgfHxcblx0XHR0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgKCBsZW5ndGggLSAxICkgaW4gb2JqO1xufVxudmFyIFNpenpsZSA9XG4vKiFcbiAqIFNpenpsZSBDU1MgU2VsZWN0b3IgRW5naW5lIHYyLjMuNFxuICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pzLmZvdW5kYXRpb24vXG4gKlxuICogRGF0ZTogMjAxOS0wNC0wOFxuICovXG4oZnVuY3Rpb24oIHdpbmRvdyApIHtcblxudmFyIGksXG5cdHN1cHBvcnQsXG5cdEV4cHIsXG5cdGdldFRleHQsXG5cdGlzWE1MLFxuXHR0b2tlbml6ZSxcblx0Y29tcGlsZSxcblx0c2VsZWN0LFxuXHRvdXRlcm1vc3RDb250ZXh0LFxuXHRzb3J0SW5wdXQsXG5cdGhhc0R1cGxpY2F0ZSxcblxuXHQvLyBMb2NhbCBkb2N1bWVudCB2YXJzXG5cdHNldERvY3VtZW50LFxuXHRkb2N1bWVudCxcblx0ZG9jRWxlbSxcblx0ZG9jdW1lbnRJc0hUTUwsXG5cdHJidWdneVFTQSxcblx0cmJ1Z2d5TWF0Y2hlcyxcblx0bWF0Y2hlcyxcblx0Y29udGFpbnMsXG5cblx0Ly8gSW5zdGFuY2Utc3BlY2lmaWMgZGF0YVxuXHRleHBhbmRvID0gXCJzaXp6bGVcIiArIDEgKiBuZXcgRGF0ZSgpLFxuXHRwcmVmZXJyZWREb2MgPSB3aW5kb3cuZG9jdW1lbnQsXG5cdGRpcnJ1bnMgPSAwLFxuXHRkb25lID0gMCxcblx0Y2xhc3NDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdHRva2VuQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRjb21waWxlckNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0bm9ubmF0aXZlU2VsZWN0b3JDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdHNvcnRPcmRlciA9IGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdGlmICggYSA9PT0gYiApIHtcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiAwO1xuXHR9LFxuXG5cdC8vIEluc3RhbmNlIG1ldGhvZHNcblx0aGFzT3duID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSxcblx0YXJyID0gW10sXG5cdHBvcCA9IGFyci5wb3AsXG5cdHB1c2hfbmF0aXZlID0gYXJyLnB1c2gsXG5cdHB1c2ggPSBhcnIucHVzaCxcblx0c2xpY2UgPSBhcnIuc2xpY2UsXG5cdC8vIFVzZSBhIHN0cmlwcGVkLWRvd24gaW5kZXhPZiBhcyBpdCdzIGZhc3RlciB0aGFuIG5hdGl2ZVxuXHQvLyBodHRwczovL2pzcGVyZi5jb20vdGhvci1pbmRleG9mLXZzLWZvci81XG5cdGluZGV4T2YgPSBmdW5jdGlvbiggbGlzdCwgZWxlbSApIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRsZW4gPSBsaXN0Lmxlbmd0aDtcblx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdGlmICggbGlzdFtpXSA9PT0gZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fSxcblxuXHRib29sZWFucyA9IFwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixcblxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb25zXG5cblx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zZWxlY3RvcnMvI3doaXRlc3BhY2Vcblx0d2hpdGVzcGFjZSA9IFwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixcblxuXHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjdmFsdWUtZGVmLWlkZW50aWZpZXJcblx0aWRlbnRpZmllciA9IFwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixcblxuXHQvLyBBdHRyaWJ1dGUgc2VsZWN0b3JzOiBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2F0dHJpYnV0ZS1zZWxlY3RvcnNcblx0YXR0cmlidXRlcyA9IFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XCIgKyB3aGl0ZXNwYWNlICtcblx0XHQvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxuXHRcdFwiKihbKl4kfCF+XT89KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0Ly8gXCJBdHRyaWJ1dGUgdmFsdWVzIG11c3QgYmUgQ1NTIGlkZW50aWZpZXJzIFtjYXB0dXJlIDVdIG9yIHN0cmluZ3MgW2NhcHR1cmUgMyBvciBjYXB0dXJlIDRdXCJcblx0XHRcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiICsgaWRlbnRpZmllciArIFwiKSl8KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XCIqXFxcXF1cIixcblxuXHRwc2V1ZG9zID0gXCI6KFwiICsgaWRlbnRpZmllciArIFwiKSg/OlxcXFwoKFwiICtcblx0XHQvLyBUbyByZWR1Y2UgdGhlIG51bWJlciBvZiBzZWxlY3RvcnMgbmVlZGluZyB0b2tlbml6ZSBpbiB0aGUgcHJlRmlsdGVyLCBwcmVmZXIgYXJndW1lbnRzOlxuXHRcdC8vIDEuIHF1b3RlZCAoY2FwdHVyZSAzOyBjYXB0dXJlIDQgb3IgY2FwdHVyZSA1KVxuXHRcdFwiKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8XCIgK1xuXHRcdC8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxuXHRcdFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiICsgYXR0cmlidXRlcyArIFwiKSopfFwiICtcblx0XHQvLyAzLiBhbnl0aGluZyBlbHNlIChjYXB0dXJlIDIpXG5cdFx0XCIuKlwiICtcblx0XHRcIilcXFxcKXwpXCIsXG5cblx0Ly8gTGVhZGluZyBhbmQgbm9uLWVzY2FwZWQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FwdHVyaW5nIHNvbWUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycyBwcmVjZWRpbmcgdGhlIGxhdHRlclxuXHRyd2hpdGVzcGFjZSA9IG5ldyBSZWdFeHAoIHdoaXRlc3BhY2UgKyBcIitcIiwgXCJnXCIgKSxcblx0cnRyaW0gPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIgKyB3aGl0ZXNwYWNlICsgXCIrJFwiLCBcImdcIiApLFxuXG5cdHJjb21tYSA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKixcIiArIHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRyY29tYmluYXRvcnMgPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiooWz4rfl18XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIgKSxcblx0cmRlc2NlbmQgPSBuZXcgUmVnRXhwKCB3aGl0ZXNwYWNlICsgXCJ8PlwiICksXG5cblx0cnBzZXVkbyA9IG5ldyBSZWdFeHAoIHBzZXVkb3MgKSxcblx0cmlkZW50aWZpZXIgPSBuZXcgUmVnRXhwKCBcIl5cIiArIGlkZW50aWZpZXIgKyBcIiRcIiApLFxuXG5cdG1hdGNoRXhwciA9IHtcblx0XHRcIklEXCI6IG5ldyBSZWdFeHAoIFwiXiMoXCIgKyBpZGVudGlmaWVyICsgXCIpXCIgKSxcblx0XHRcIkNMQVNTXCI6IG5ldyBSZWdFeHAoIFwiXlxcXFwuKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG5cdFx0XCJUQUdcIjogbmV3IFJlZ0V4cCggXCJeKFwiICsgaWRlbnRpZmllciArIFwifFsqXSlcIiApLFxuXHRcdFwiQVRUUlwiOiBuZXcgUmVnRXhwKCBcIl5cIiArIGF0dHJpYnV0ZXMgKSxcblx0XHRcIlBTRVVET1wiOiBuZXcgUmVnRXhwKCBcIl5cIiArIHBzZXVkb3MgKSxcblx0XHRcIkNISUxEXCI6IG5ldyBSZWdFeHAoIFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIiArIHdoaXRlc3BhY2UgKyBcIiooPzooWystXXwpXCIgKyB3aGl0ZXNwYWNlICtcblx0XHRcdFwiKihcXFxcZCspfCkpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KVwiLCBcImlcIiApLFxuXHRcdFwiYm9vbFwiOiBuZXcgUmVnRXhwKCBcIl4oPzpcIiArIGJvb2xlYW5zICsgXCIpJFwiLCBcImlcIiApLFxuXHRcdC8vIEZvciB1c2UgaW4gbGlicmFyaWVzIGltcGxlbWVudGluZyAuaXMoKVxuXHRcdC8vIFdlIHVzZSB0aGlzIGZvciBQT1MgbWF0Y2hpbmcgaW4gYHNlbGVjdGBcblx0XHRcIm5lZWRzQ29udGV4dFwiOiBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIgK1xuXHRcdFx0d2hpdGVzcGFjZSArIFwiKigoPzotXFxcXGQpP1xcXFxkKilcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpKD89W14tXXwkKVwiLCBcImlcIiApXG5cdH0sXG5cblx0cmh0bWwgPSAvSFRNTCQvaSxcblx0cmlucHV0cyA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXG5cdHJoZWFkZXIgPSAvXmhcXGQkL2ksXG5cblx0cm5hdGl2ZSA9IC9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sXG5cblx0Ly8gRWFzaWx5LXBhcnNlYWJsZS9yZXRyaWV2YWJsZSBJRCBvciBUQUcgb3IgQ0xBU1Mgc2VsZWN0b3JzXG5cdHJxdWlja0V4cHIgPSAvXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxcblxuXHRyc2libGluZyA9IC9bK35dLyxcblxuXHQvLyBDU1MgZXNjYXBlc1xuXHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjZXNjYXBlZC1jaGFyYWN0ZXJzXG5cdHJ1bmVzY2FwZSA9IG5ldyBSZWdFeHAoIFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIgKyB3aGl0ZXNwYWNlICsgXCI/fChcIiArIHdoaXRlc3BhY2UgKyBcIil8LilcIiwgXCJpZ1wiICksXG5cdGZ1bmVzY2FwZSA9IGZ1bmN0aW9uKCBfLCBlc2NhcGVkLCBlc2NhcGVkV2hpdGVzcGFjZSApIHtcblx0XHR2YXIgaGlnaCA9IFwiMHhcIiArIGVzY2FwZWQgLSAweDEwMDAwO1xuXHRcdC8vIE5hTiBtZWFucyBub24tY29kZXBvaW50XG5cdFx0Ly8gU3VwcG9ydDogRmlyZWZveDwyNFxuXHRcdC8vIFdvcmthcm91bmQgZXJyb25lb3VzIG51bWVyaWMgaW50ZXJwcmV0YXRpb24gb2YgK1wiMHhcIlxuXHRcdHJldHVybiBoaWdoICE9PSBoaWdoIHx8IGVzY2FwZWRXaGl0ZXNwYWNlID9cblx0XHRcdGVzY2FwZWQgOlxuXHRcdFx0aGlnaCA8IDAgP1xuXHRcdFx0XHQvLyBCTVAgY29kZXBvaW50XG5cdFx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoIGhpZ2ggKyAweDEwMDAwICkgOlxuXHRcdFx0XHQvLyBTdXBwbGVtZW50YWwgUGxhbmUgY29kZXBvaW50IChzdXJyb2dhdGUgcGFpcilcblx0XHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCA+PiAxMCB8IDB4RDgwMCwgaGlnaCAmIDB4M0ZGIHwgMHhEQzAwICk7XG5cdH0sXG5cblx0Ly8gQ1NTIHN0cmluZy9pZGVudGlmaWVyIHNlcmlhbGl6YXRpb25cblx0Ly8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNjb21tb24tc2VyaWFsaXppbmctaWRpb21zXG5cdHJjc3Nlc2NhcGUgPSAvKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxcblx0ZmNzc2VzY2FwZSA9IGZ1bmN0aW9uKCBjaCwgYXNDb2RlUG9pbnQgKSB7XG5cdFx0aWYgKCBhc0NvZGVQb2ludCApIHtcblxuXHRcdFx0Ly8gVSswMDAwIE5VTEwgYmVjb21lcyBVK0ZGRkQgUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXG5cdFx0XHRpZiAoIGNoID09PSBcIlxcMFwiICkge1xuXHRcdFx0XHRyZXR1cm4gXCJcXHVGRkZEXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbnRyb2wgY2hhcmFjdGVycyBhbmQgKGRlcGVuZGVudCB1cG9uIHBvc2l0aW9uKSBudW1iZXJzIGdldCBlc2NhcGVkIGFzIGNvZGUgcG9pbnRzXG5cdFx0XHRyZXR1cm4gY2guc2xpY2UoIDAsIC0xICkgKyBcIlxcXFxcIiArIGNoLmNoYXJDb2RlQXQoIGNoLmxlbmd0aCAtIDEgKS50b1N0cmluZyggMTYgKSArIFwiIFwiO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyIHBvdGVudGlhbGx5LXNwZWNpYWwgQVNDSUkgY2hhcmFjdGVycyBnZXQgYmFja3NsYXNoLWVzY2FwZWRcblx0XHRyZXR1cm4gXCJcXFxcXCIgKyBjaDtcblx0fSxcblxuXHQvLyBVc2VkIGZvciBpZnJhbWVzXG5cdC8vIFNlZSBzZXREb2N1bWVudCgpXG5cdC8vIFJlbW92aW5nIHRoZSBmdW5jdGlvbiB3cmFwcGVyIGNhdXNlcyBhIFwiUGVybWlzc2lvbiBEZW5pZWRcIlxuXHQvLyBlcnJvciBpbiBJRVxuXHR1bmxvYWRIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0c2V0RG9jdW1lbnQoKTtcblx0fSxcblxuXHRpbkRpc2FibGVkRmllbGRzZXQgPSBhZGRDb21iaW5hdG9yKFxuXHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IHRydWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImZpZWxkc2V0XCI7XG5cdFx0fSxcblx0XHR7IGRpcjogXCJwYXJlbnROb2RlXCIsIG5leHQ6IFwibGVnZW5kXCIgfVxuXHQpO1xuXG4vLyBPcHRpbWl6ZSBmb3IgcHVzaC5hcHBseSggXywgTm9kZUxpc3QgKVxudHJ5IHtcblx0cHVzaC5hcHBseShcblx0XHQoYXJyID0gc2xpY2UuY2FsbCggcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMgKSksXG5cdFx0cHJlZmVycmVkRG9jLmNoaWxkTm9kZXNcblx0KTtcblx0Ly8gU3VwcG9ydDogQW5kcm9pZDw0LjBcblx0Ly8gRGV0ZWN0IHNpbGVudGx5IGZhaWxpbmcgcHVzaC5hcHBseVxuXHRhcnJbIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzLmxlbmd0aCBdLm5vZGVUeXBlO1xufSBjYXRjaCAoIGUgKSB7XG5cdHB1c2ggPSB7IGFwcGx5OiBhcnIubGVuZ3RoID9cblxuXHRcdC8vIExldmVyYWdlIHNsaWNlIGlmIHBvc3NpYmxlXG5cdFx0ZnVuY3Rpb24oIHRhcmdldCwgZWxzICkge1xuXHRcdFx0cHVzaF9uYXRpdmUuYXBwbHkoIHRhcmdldCwgc2xpY2UuY2FsbChlbHMpICk7XG5cdFx0fSA6XG5cblx0XHQvLyBTdXBwb3J0OiBJRTw5XG5cdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZCBkaXJlY3RseVxuXHRcdGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcblx0XHRcdHZhciBqID0gdGFyZ2V0Lmxlbmd0aCxcblx0XHRcdFx0aSA9IDA7XG5cdFx0XHQvLyBDYW4ndCB0cnVzdCBOb2RlTGlzdC5sZW5ndGhcblx0XHRcdHdoaWxlICggKHRhcmdldFtqKytdID0gZWxzW2krK10pICkge31cblx0XHRcdHRhcmdldC5sZW5ndGggPSBqIC0gMTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIFNpenpsZSggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBtLCBpLCBlbGVtLCBuaWQsIG1hdGNoLCBncm91cHMsIG5ld1NlbGVjdG9yLFxuXHRcdG5ld0NvbnRleHQgPSBjb250ZXh0ICYmIGNvbnRleHQub3duZXJEb2N1bWVudCxcblxuXHRcdC8vIG5vZGVUeXBlIGRlZmF1bHRzIHRvIDksIHNpbmNlIGNvbnRleHQgZGVmYXVsdHMgdG8gZG9jdW1lbnRcblx0XHRub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBSZXR1cm4gZWFybHkgZnJvbSBjYWxscyB3aXRoIGludmFsaWQgc2VsZWN0b3Igb3IgY29udGV4dFxuXHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiB8fCAhc2VsZWN0b3IgfHxcblx0XHRub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEgKSB7XG5cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdC8vIFRyeSB0byBzaG9ydGN1dCBmaW5kIG9wZXJhdGlvbnMgKGFzIG9wcG9zZWQgdG8gZmlsdGVycykgaW4gSFRNTCBkb2N1bWVudHNcblx0aWYgKCAhc2VlZCApIHtcblxuXHRcdGlmICggKCBjb250ZXh0ID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBwcmVmZXJyZWREb2MgKSAhPT0gZG9jdW1lbnQgKSB7XG5cdFx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHRcdH1cblx0XHRjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblxuXHRcdGlmICggZG9jdW1lbnRJc0hUTUwgKSB7XG5cblx0XHRcdC8vIElmIHRoZSBzZWxlY3RvciBpcyBzdWZmaWNpZW50bHkgc2ltcGxlLCB0cnkgdXNpbmcgYSBcImdldCpCeSpcIiBET00gbWV0aG9kXG5cdFx0XHQvLyAoZXhjZXB0aW5nIERvY3VtZW50RnJhZ21lbnQgY29udGV4dCwgd2hlcmUgdGhlIG1ldGhvZHMgZG9uJ3QgZXhpc3QpXG5cdFx0XHRpZiAoIG5vZGVUeXBlICE9PSAxMSAmJiAobWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICkpICkge1xuXG5cdFx0XHRcdC8vIElEIHNlbGVjdG9yXG5cdFx0XHRcdGlmICggKG0gPSBtYXRjaFsxXSkgKSB7XG5cblx0XHRcdFx0XHQvLyBEb2N1bWVudCBjb250ZXh0XG5cdFx0XHRcdFx0aWYgKCBub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdGlmICggKGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBtICkpICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IGlkZW50aWZ5IHZlcnNpb25zXG5cdFx0XHRcdFx0XHRcdC8vIGdldEVsZW1lbnRCeUlkIGNhbiBtYXRjaCBlbGVtZW50cyBieSBuYW1lIGluc3RlYWQgb2YgSURcblx0XHRcdFx0XHRcdFx0aWYgKCBlbGVtLmlkID09PSBtICkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEVsZW1lbnQgY29udGV4dFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG5cdFx0XHRcdFx0XHQvLyBUT0RPOiBpZGVudGlmeSB2ZXJzaW9uc1xuXHRcdFx0XHRcdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuXHRcdFx0XHRcdFx0aWYgKCBuZXdDb250ZXh0ICYmIChlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApKSAmJlxuXHRcdFx0XHRcdFx0XHRjb250YWlucyggY29udGV4dCwgZWxlbSApICYmXG5cdFx0XHRcdFx0XHRcdGVsZW0uaWQgPT09IG0gKSB7XG5cblx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUeXBlIHNlbGVjdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoIG1hdGNoWzJdICkge1xuXHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHNlbGVjdG9yICkgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0XHQvLyBDbGFzcyBzZWxlY3RvclxuXHRcdFx0XHR9IGVsc2UgaWYgKCAobSA9IG1hdGNoWzNdKSAmJiBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiZcblx0XHRcdFx0XHRjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgKSB7XG5cblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIG0gKSApO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRha2UgYWR2YW50YWdlIG9mIHF1ZXJ5U2VsZWN0b3JBbGxcblx0XHRcdGlmICggc3VwcG9ydC5xc2EgJiZcblx0XHRcdFx0IW5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXSAmJlxuXHRcdFx0XHQoIXJidWdneVFTQSB8fCAhcmJ1Z2d5UVNBLnRlc3QoIHNlbGVjdG9yICkpICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgOCBvbmx5XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgb2JqZWN0IGVsZW1lbnRzXG5cdFx0XHRcdChub2RlVHlwZSAhPT0gMSB8fCBjb250ZXh0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwib2JqZWN0XCIpICkge1xuXG5cdFx0XHRcdG5ld1NlbGVjdG9yID0gc2VsZWN0b3I7XG5cdFx0XHRcdG5ld0NvbnRleHQgPSBjb250ZXh0O1xuXG5cdFx0XHRcdC8vIHFTQSBjb25zaWRlcnMgZWxlbWVudHMgb3V0c2lkZSBhIHNjb3Bpbmcgcm9vdCB3aGVuIGV2YWx1YXRpbmcgY2hpbGQgb3Jcblx0XHRcdFx0Ly8gZGVzY2VuZGFudCBjb21iaW5hdG9ycywgd2hpY2ggaXMgbm90IHdoYXQgd2Ugd2FudC5cblx0XHRcdFx0Ly8gSW4gc3VjaCBjYXNlcywgd2Ugd29yayBhcm91bmQgdGhlIGJlaGF2aW9yIGJ5IHByZWZpeGluZyBldmVyeSBzZWxlY3RvciBpbiB0aGVcblx0XHRcdFx0Ly8gbGlzdCB3aXRoIGFuIElEIHNlbGVjdG9yIHJlZmVyZW5jaW5nIHRoZSBzY29wZSBjb250ZXh0LlxuXHRcdFx0XHQvLyBUaGFua3MgdG8gQW5kcmV3IER1cG9udCBmb3IgdGhpcyB0ZWNobmlxdWUuXG5cdFx0XHRcdGlmICggbm9kZVR5cGUgPT09IDEgJiYgcmRlc2NlbmQudGVzdCggc2VsZWN0b3IgKSApIHtcblxuXHRcdFx0XHRcdC8vIENhcHR1cmUgdGhlIGNvbnRleHQgSUQsIHNldHRpbmcgaXQgZmlyc3QgaWYgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0aWYgKCAobmlkID0gY29udGV4dC5nZXRBdHRyaWJ1dGUoIFwiaWRcIiApKSApIHtcblx0XHRcdFx0XHRcdG5pZCA9IG5pZC5yZXBsYWNlKCByY3NzZXNjYXBlLCBmY3NzZXNjYXBlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnRleHQuc2V0QXR0cmlidXRlKCBcImlkXCIsIChuaWQgPSBleHBhbmRvKSApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFByZWZpeCBldmVyeSBzZWxlY3RvciBpbiB0aGUgbGlzdFxuXHRcdFx0XHRcdGdyb3VwcyA9IHRva2VuaXplKCBzZWxlY3RvciApO1xuXHRcdFx0XHRcdGkgPSBncm91cHMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0Z3JvdXBzW2ldID0gXCIjXCIgKyBuaWQgKyBcIiBcIiArIHRvU2VsZWN0b3IoIGdyb3Vwc1tpXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXdTZWxlY3RvciA9IGdyb3Vwcy5qb2luKCBcIixcIiApO1xuXG5cdFx0XHRcdFx0Ly8gRXhwYW5kIGNvbnRleHQgZm9yIHNpYmxpbmcgc2VsZWN0b3JzXG5cdFx0XHRcdFx0bmV3Q29udGV4dCA9IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8XG5cdFx0XHRcdFx0XHRjb250ZXh0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLFxuXHRcdFx0XHRcdFx0bmV3Q29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCBuZXdTZWxlY3RvciApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0fSBjYXRjaCAoIHFzYUVycm9yICkge1xuXHRcdFx0XHRcdG5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUoIHNlbGVjdG9yLCB0cnVlICk7XG5cdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0aWYgKCBuaWQgPT09IGV4cGFuZG8gKSB7XG5cdFx0XHRcdFx0XHRjb250ZXh0LnJlbW92ZUF0dHJpYnV0ZSggXCJpZFwiICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWxsIG90aGVyc1xuXHRyZXR1cm4gc2VsZWN0KCBzZWxlY3Rvci5yZXBsYWNlKCBydHJpbSwgXCIkMVwiICksIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUga2V5LXZhbHVlIGNhY2hlcyBvZiBsaW1pdGVkIHNpemVcbiAqIEByZXR1cm5zIHtmdW5jdGlvbihzdHJpbmcsIG9iamVjdCl9IFJldHVybnMgdGhlIE9iamVjdCBkYXRhIGFmdGVyIHN0b3JpbmcgaXQgb24gaXRzZWxmIHdpdGhcbiAqXHRwcm9wZXJ0eSBuYW1lIHRoZSAoc3BhY2Utc3VmZml4ZWQpIHN0cmluZyBhbmQgKGlmIHRoZSBjYWNoZSBpcyBsYXJnZXIgdGhhbiBFeHByLmNhY2hlTGVuZ3RoKVxuICpcdGRlbGV0aW5nIHRoZSBvbGRlc3QgZW50cnlcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FjaGUoKSB7XG5cdHZhciBrZXlzID0gW107XG5cblx0ZnVuY3Rpb24gY2FjaGUoIGtleSwgdmFsdWUgKSB7XG5cdFx0Ly8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChzZWUgSXNzdWUgIzE1Nylcblx0XHRpZiAoIGtleXMucHVzaCgga2V5ICsgXCIgXCIgKSA+IEV4cHIuY2FjaGVMZW5ndGggKSB7XG5cdFx0XHQvLyBPbmx5IGtlZXAgdGhlIG1vc3QgcmVjZW50IGVudHJpZXNcblx0XHRcdGRlbGV0ZSBjYWNoZVsga2V5cy5zaGlmdCgpIF07XG5cdFx0fVxuXHRcdHJldHVybiAoY2FjaGVbIGtleSArIFwiIFwiIF0gPSB2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIGNhY2hlO1xufVxuXG4vKipcbiAqIE1hcmsgYSBmdW5jdGlvbiBmb3Igc3BlY2lhbCB1c2UgYnkgU2l6emxlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbWFya1xuICovXG5mdW5jdGlvbiBtYXJrRnVuY3Rpb24oIGZuICkge1xuXHRmblsgZXhwYW5kbyBdID0gdHJ1ZTtcblx0cmV0dXJuIGZuO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgdGVzdGluZyB1c2luZyBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBQYXNzZWQgdGhlIGNyZWF0ZWQgZWxlbWVudCBhbmQgcmV0dXJucyBhIGJvb2xlYW4gcmVzdWx0XG4gKi9cbmZ1bmN0aW9uIGFzc2VydCggZm4gKSB7XG5cdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiAhIWZuKCBlbCApO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXHRcdC8vIFJlbW92ZSBmcm9tIGl0cyBwYXJlbnQgYnkgZGVmYXVsdFxuXHRcdGlmICggZWwucGFyZW50Tm9kZSApIHtcblx0XHRcdGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGVsICk7XG5cdFx0fVxuXHRcdC8vIHJlbGVhc2UgbWVtb3J5IGluIElFXG5cdFx0ZWwgPSBudWxsO1xuXHR9XG59XG5cbi8qKlxuICogQWRkcyB0aGUgc2FtZSBoYW5kbGVyIGZvciBhbGwgb2YgdGhlIHNwZWNpZmllZCBhdHRyc1xuICogQHBhcmFtIHtTdHJpbmd9IGF0dHJzIFBpcGUtc2VwYXJhdGVkIGxpc3Qgb2YgYXR0cmlidXRlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgbWV0aG9kIHRoYXQgd2lsbCBiZSBhcHBsaWVkXG4gKi9cbmZ1bmN0aW9uIGFkZEhhbmRsZSggYXR0cnMsIGhhbmRsZXIgKSB7XG5cdHZhciBhcnIgPSBhdHRycy5zcGxpdChcInxcIiksXG5cdFx0aSA9IGFyci5sZW5ndGg7XG5cblx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0RXhwci5hdHRySGFuZGxlWyBhcnJbaV0gXSA9IGhhbmRsZXI7XG5cdH1cbn1cblxuLyoqXG4gKiBDaGVja3MgZG9jdW1lbnQgb3JkZXIgb2YgdHdvIHNpYmxpbmdzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFcbiAqIEBwYXJhbSB7RWxlbWVudH0gYlxuICogQHJldHVybnMge051bWJlcn0gUmV0dXJucyBsZXNzIHRoYW4gMCBpZiBhIHByZWNlZGVzIGIsIGdyZWF0ZXIgdGhhbiAwIGlmIGEgZm9sbG93cyBiXG4gKi9cbmZ1bmN0aW9uIHNpYmxpbmdDaGVjayggYSwgYiApIHtcblx0dmFyIGN1ciA9IGIgJiYgYSxcblx0XHRkaWZmID0gY3VyICYmIGEubm9kZVR5cGUgPT09IDEgJiYgYi5ub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0YS5zb3VyY2VJbmRleCAtIGIuc291cmNlSW5kZXg7XG5cblx0Ly8gVXNlIElFIHNvdXJjZUluZGV4IGlmIGF2YWlsYWJsZSBvbiBib3RoIG5vZGVzXG5cdGlmICggZGlmZiApIHtcblx0XHRyZXR1cm4gZGlmZjtcblx0fVxuXG5cdC8vIENoZWNrIGlmIGIgZm9sbG93cyBhXG5cdGlmICggY3VyICkge1xuXHRcdHdoaWxlICggKGN1ciA9IGN1ci5uZXh0U2libGluZykgKSB7XG5cdFx0XHRpZiAoIGN1ciA9PT0gYiApIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhID8gMSA6IC0xO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgaW5wdXQgdHlwZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0UHNldWRvKCB0eXBlICkge1xuXHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIG5hbWUgPT09IFwiaW5wdXRcIiAmJiBlbGVtLnR5cGUgPT09IHR5cGU7XG5cdH07XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBidXR0b25zXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25Qc2V1ZG8oIHR5cGUgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gKG5hbWUgPT09IFwiaW5wdXRcIiB8fCBuYW1lID09PSBcImJ1dHRvblwiKSAmJiBlbGVtLnR5cGUgPT09IHR5cGU7XG5cdH07XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciA6ZW5hYmxlZC86ZGlzYWJsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGlzYWJsZWQgdHJ1ZSBmb3IgOmRpc2FibGVkOyBmYWxzZSBmb3IgOmVuYWJsZWRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIGRpc2FibGVkICkge1xuXG5cdC8vIEtub3duIDpkaXNhYmxlZCBmYWxzZSBwb3NpdGl2ZXM6IGZpZWxkc2V0W2Rpc2FibGVkXSA+IGxlZ2VuZDpudGgtb2YtdHlwZShuKzIpIDpjYW4tZGlzYWJsZVxuXHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBPbmx5IGNlcnRhaW4gZWxlbWVudHMgY2FuIG1hdGNoIDplbmFibGVkIG9yIDpkaXNhYmxlZFxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWVuYWJsZWRcblx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1kaXNhYmxlZFxuXHRcdGlmICggXCJmb3JtXCIgaW4gZWxlbSApIHtcblxuXHRcdFx0Ly8gQ2hlY2sgZm9yIGluaGVyaXRlZCBkaXNhYmxlZG5lc3Mgb24gcmVsZXZhbnQgbm9uLWRpc2FibGVkIGVsZW1lbnRzOlxuXHRcdFx0Ly8gKiBsaXN0ZWQgZm9ybS1hc3NvY2lhdGVkIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgZmllbGRzZXRcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjYXRlZ29yeS1saXN0ZWRcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LWZlLWRpc2FibGVkXG5cdFx0XHQvLyAqIG9wdGlvbiBlbGVtZW50cyBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG5cdFx0XHQvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY29uY2VwdC1vcHRpb24tZGlzYWJsZWRcblx0XHRcdC8vIEFsbCBzdWNoIGVsZW1lbnRzIGhhdmUgYSBcImZvcm1cIiBwcm9wZXJ0eS5cblx0XHRcdGlmICggZWxlbS5wYXJlbnROb2RlICYmIGVsZW0uZGlzYWJsZWQgPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdC8vIE9wdGlvbiBlbGVtZW50cyBkZWZlciB0byBhIHBhcmVudCBvcHRncm91cCBpZiBwcmVzZW50XG5cdFx0XHRcdGlmICggXCJsYWJlbFwiIGluIGVsZW0gKSB7XG5cdFx0XHRcdFx0aWYgKCBcImxhYmVsXCIgaW4gZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ucGFyZW50Tm9kZS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA2IC0gMTFcblx0XHRcdFx0Ly8gVXNlIHRoZSBpc0Rpc2FibGVkIHNob3J0Y3V0IHByb3BlcnR5IHRvIGNoZWNrIGZvciBkaXNhYmxlZCBmaWVsZHNldCBhbmNlc3RvcnNcblx0XHRcdFx0cmV0dXJuIGVsZW0uaXNEaXNhYmxlZCA9PT0gZGlzYWJsZWQgfHxcblxuXHRcdFx0XHRcdC8vIFdoZXJlIHRoZXJlIGlzIG5vIGlzRGlzYWJsZWQsIGNoZWNrIG1hbnVhbGx5XG5cdFx0XHRcdFx0LyoganNoaW50IC1XMDE4ICovXG5cdFx0XHRcdFx0ZWxlbS5pc0Rpc2FibGVkICE9PSAhZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRcdGluRGlzYWJsZWRGaWVsZHNldCggZWxlbSApID09PSBkaXNhYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXG5cdFx0Ly8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuXHRcdC8vIFNvbWUgdmljdGltcyBnZXQgY2F1Z2h0IGluIG91ciBuZXQgKGxhYmVsLCBsZWdlbmQsIG1lbnUsIHRyYWNrKSwgYnV0IGl0IHNob3VsZG4ndFxuXHRcdC8vIGV2ZW4gZXhpc3Qgb24gdGhlbSwgbGV0IGFsb25lIGhhdmUgYSBib29sZWFuIHZhbHVlLlxuXHRcdH0gZWxzZSBpZiAoIFwibGFiZWxcIiBpbiBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdH1cblxuXHRcdC8vIFJlbWFpbmluZyBlbGVtZW50cyBhcmUgbmVpdGhlciA6ZW5hYmxlZCBub3IgOmRpc2FibGVkXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgcG9zaXRpb25hbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZuICkge1xuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBhcmd1bWVudCApIHtcblx0XHRhcmd1bWVudCA9ICthcmd1bWVudDtcblx0XHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuXHRcdFx0dmFyIGosXG5cdFx0XHRcdG1hdGNoSW5kZXhlcyA9IGZuKCBbXSwgc2VlZC5sZW5ndGgsIGFyZ3VtZW50ICksXG5cdFx0XHRcdGkgPSBtYXRjaEluZGV4ZXMubGVuZ3RoO1xuXG5cdFx0XHQvLyBNYXRjaCBlbGVtZW50cyBmb3VuZCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4ZXNcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoIHNlZWRbIChqID0gbWF0Y2hJbmRleGVzW2ldKSBdICkge1xuXHRcdFx0XHRcdHNlZWRbal0gPSAhKG1hdGNoZXNbal0gPSBzZWVkW2pdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgYSBub2RlIGZvciB2YWxpZGl0eSBhcyBhIFNpenpsZSBjb250ZXh0XG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0PX0gY29udGV4dFxuICogQHJldHVybnMge0VsZW1lbnR8T2JqZWN0fEJvb2xlYW59IFRoZSBpbnB1dCBub2RlIGlmIGFjY2VwdGFibGUsIG90aGVyd2lzZSBhIGZhbHN5IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHRlc3RDb250ZXh0KCBjb250ZXh0ICkge1xuXHRyZXR1cm4gY29udGV4dCAmJiB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb250ZXh0O1xufVxuXG4vLyBFeHBvc2Ugc3VwcG9ydCB2YXJzIGZvciBjb252ZW5pZW5jZVxuc3VwcG9ydCA9IFNpenpsZS5zdXBwb3J0ID0ge307XG5cbi8qKlxuICogRGV0ZWN0cyBYTUwgbm9kZXNcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IGVsZW0gQW4gZWxlbWVudCBvciBhIGRvY3VtZW50XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZmYgZWxlbSBpcyBhIG5vbi1IVE1MIFhNTCBub2RlXG4gKi9cbmlzWE1MID0gU2l6emxlLmlzWE1MID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHZhciBuYW1lc3BhY2UgPSBlbGVtLm5hbWVzcGFjZVVSSSxcblx0XHRkb2NFbGVtID0gKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD04XG5cdC8vIEFzc3VtZSBIVE1MIHdoZW4gZG9jdW1lbnRFbGVtZW50IGRvZXNuJ3QgeWV0IGV4aXN0LCBzdWNoIGFzIGluc2lkZSBsb2FkaW5nIGlmcmFtZXNcblx0Ly8gaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzQ4MzNcblx0cmV0dXJuICFyaHRtbC50ZXN0KCBuYW1lc3BhY2UgfHwgZG9jRWxlbSAmJiBkb2NFbGVtLm5vZGVOYW1lIHx8IFwiSFRNTFwiICk7XG59O1xuXG4vKipcbiAqIFNldHMgZG9jdW1lbnQtcmVsYXRlZCB2YXJpYWJsZXMgb25jZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkb2N1bWVudFxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gW2RvY10gQW4gZWxlbWVudCBvciBkb2N1bWVudCBvYmplY3QgdG8gdXNlIHRvIHNldCB0aGUgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqL1xuc2V0RG9jdW1lbnQgPSBTaXp6bGUuc2V0RG9jdW1lbnQgPSBmdW5jdGlvbiggbm9kZSApIHtcblx0dmFyIGhhc0NvbXBhcmUsIHN1YldpbmRvdyxcblx0XHRkb2MgPSBub2RlID8gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUgOiBwcmVmZXJyZWREb2M7XG5cblx0Ly8gUmV0dXJuIGVhcmx5IGlmIGRvYyBpcyBpbnZhbGlkIG9yIGFscmVhZHkgc2VsZWN0ZWRcblx0aWYgKCBkb2MgPT09IGRvY3VtZW50IHx8IGRvYy5ub2RlVHlwZSAhPT0gOSB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCApIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQ7XG5cdH1cblxuXHQvLyBVcGRhdGUgZ2xvYmFsIHZhcmlhYmxlc1xuXHRkb2N1bWVudCA9IGRvYztcblx0ZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0ZG9jdW1lbnRJc0hUTUwgPSAhaXNYTUwoIGRvY3VtZW50ICk7XG5cblx0Ly8gU3VwcG9ydDogSUUgOS0xMSwgRWRnZVxuXHQvLyBBY2Nlc3NpbmcgaWZyYW1lIGRvY3VtZW50cyBhZnRlciB1bmxvYWQgdGhyb3dzIFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvcnMgKGpRdWVyeSAjMTM5MzYpXG5cdGlmICggcHJlZmVycmVkRG9jICE9PSBkb2N1bWVudCAmJlxuXHRcdChzdWJXaW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldykgJiYgc3ViV2luZG93LnRvcCAhPT0gc3ViV2luZG93ICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgMTEsIEVkZ2Vcblx0XHRpZiAoIHN1YldpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdFx0c3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwidW5sb2FkXCIsIHVubG9hZEhhbmRsZXIsIGZhbHNlICk7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTAgb25seVxuXHRcdH0gZWxzZSBpZiAoIHN1YldpbmRvdy5hdHRhY2hFdmVudCApIHtcblx0XHRcdHN1YldpbmRvdy5hdHRhY2hFdmVudCggXCJvbnVubG9hZFwiLCB1bmxvYWRIYW5kbGVyICk7XG5cdFx0fVxuXHR9XG5cblx0LyogQXR0cmlidXRlc1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gU3VwcG9ydDogSUU8OFxuXHQvLyBWZXJpZnkgdGhhdCBnZXRBdHRyaWJ1dGUgcmVhbGx5IHJldHVybnMgYXR0cmlidXRlcyBhbmQgbm90IHByb3BlcnRpZXNcblx0Ly8gKGV4Y2VwdGluZyBJRTggYm9vbGVhbnMpXG5cdHN1cHBvcnQuYXR0cmlidXRlcyA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0ZWwuY2xhc3NOYW1lID0gXCJpXCI7XG5cdFx0cmV0dXJuICFlbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIik7XG5cdH0pO1xuXG5cdC8qIGdldEVsZW1lbnQocylCeSpcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIENoZWNrIGlmIGdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSByZXR1cm5zIG9ubHkgZWxlbWVudHNcblx0c3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0ZWwuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJcIikgKTtcblx0XHRyZXR1cm4gIWVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XG5cdH0pO1xuXG5cdC8vIFN1cHBvcnQ6IElFPDlcblx0c3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gcm5hdGl2ZS50ZXN0KCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICk7XG5cblx0Ly8gU3VwcG9ydDogSUU8MTBcblx0Ly8gQ2hlY2sgaWYgZ2V0RWxlbWVudEJ5SWQgcmV0dXJucyBlbGVtZW50cyBieSBuYW1lXG5cdC8vIFRoZSBicm9rZW4gZ2V0RWxlbWVudEJ5SWQgbWV0aG9kcyBkb24ndCBwaWNrIHVwIHByb2dyYW1tYXRpY2FsbHktc2V0IG5hbWVzLFxuXHQvLyBzbyB1c2UgYSByb3VuZGFib3V0IGdldEVsZW1lbnRzQnlOYW1lIHRlc3Rcblx0c3VwcG9ydC5nZXRCeUlkID0gYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmlkID0gZXhwYW5kbztcblx0XHRyZXR1cm4gIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lIHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSggZXhwYW5kbyApLmxlbmd0aDtcblx0fSk7XG5cblx0Ly8gSUQgZmlsdGVyIGFuZCBmaW5kXG5cdGlmICggc3VwcG9ydC5nZXRCeUlkICkge1xuXHRcdEV4cHIuZmlsdGVyW1wiSURcIl0gPSBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IGF0dHJJZDtcblx0XHRcdH07XG5cdFx0fTtcblx0XHRFeHByLmZpbmRbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCwgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblx0XHRcdFx0cmV0dXJuIGVsZW0gPyBbIGVsZW0gXSA6IFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0RXhwci5maWx0ZXJbXCJJRFwiXSA9ICBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIG5vZGUgPSB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdFx0XHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cdFx0XHRcdHJldHVybiBub2RlICYmIG5vZGUudmFsdWUgPT09IGF0dHJJZDtcblx0XHRcdH07XG5cdFx0fTtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDYgLSA3IG9ubHlcblx0XHQvLyBnZXRFbGVtZW50QnlJZCBpcyBub3QgcmVsaWFibGUgYXMgYSBmaW5kIHNob3J0Y3V0XG5cdFx0RXhwci5maW5kW1wiSURcIl0gPSBmdW5jdGlvbiggaWQsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0XHR2YXIgbm9kZSwgaSwgZWxlbXMsXG5cdFx0XHRcdFx0ZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdFx0aWYgKCBlbGVtICkge1xuXG5cdFx0XHRcdFx0Ly8gVmVyaWZ5IHRoZSBpZCBhdHRyaWJ1dGVcblx0XHRcdFx0XHRub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cdFx0XHRcdFx0aWYgKCBub2RlICYmIG5vZGUudmFsdWUgPT09IGlkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFsgZWxlbSBdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEZhbGwgYmFjayBvbiBnZXRFbGVtZW50c0J5TmFtZVxuXHRcdFx0XHRcdGVsZW1zID0gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZSggaWQgKTtcblx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoIChlbGVtID0gZWxlbXNbaSsrXSkgKSB7XG5cdFx0XHRcdFx0XHRub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cdFx0XHRcdFx0XHRpZiAoIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gaWQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBbIGVsZW0gXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdC8vIFRhZ1xuXHRFeHByLmZpbmRbXCJUQUdcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlUYWdOYW1lID9cblx0XHRmdW5jdGlvbiggdGFnLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyApO1xuXG5cdFx0XHQvLyBEb2N1bWVudEZyYWdtZW50IG5vZGVzIGRvbid0IGhhdmUgZ0VCVE5cblx0XHRcdH0gZWxzZSBpZiAoIHN1cHBvcnQucXNhICkge1xuXHRcdFx0XHRyZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCB0YWcgKTtcblx0XHRcdH1cblx0XHR9IDpcblxuXHRcdGZ1bmN0aW9uKCB0YWcsIGNvbnRleHQgKSB7XG5cdFx0XHR2YXIgZWxlbSxcblx0XHRcdFx0dG1wID0gW10sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHQvLyBCeSBoYXBweSBjb2luY2lkZW5jZSwgYSAoYnJva2VuKSBnRUJUTiBhcHBlYXJzIG9uIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgdG9vXG5cdFx0XHRcdHJlc3VsdHMgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgKTtcblxuXHRcdFx0Ly8gRmlsdGVyIG91dCBwb3NzaWJsZSBjb21tZW50c1xuXHRcdFx0aWYgKCB0YWcgPT09IFwiKlwiICkge1xuXHRcdFx0XHR3aGlsZSAoIChlbGVtID0gcmVzdWx0c1tpKytdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRcdFx0XHR0bXAucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0bXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9O1xuXG5cdC8vIENsYXNzXG5cdEV4cHIuZmluZFtcIkNMQVNTXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmIGZ1bmN0aW9uKCBjbGFzc05hbWUsIGNvbnRleHQgKSB7XG5cdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggY2xhc3NOYW1lICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFFTQS9tYXRjaGVzU2VsZWN0b3Jcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIFFTQSBhbmQgbWF0Y2hlc1NlbGVjdG9yIHN1cHBvcnRcblxuXHQvLyBtYXRjaGVzU2VsZWN0b3IoOmFjdGl2ZSkgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKElFOS9PcGVyYSAxMS41KVxuXHRyYnVnZ3lNYXRjaGVzID0gW107XG5cblx0Ly8gcVNhKDpmb2N1cykgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKENocm9tZSAyMSlcblx0Ly8gV2UgYWxsb3cgdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIElFOC85IHRoYXQgdGhyb3dzIGFuIGVycm9yXG5cdC8vIHdoZW5ldmVyIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBhY2Nlc3NlZCBvbiBhbiBpZnJhbWVcblx0Ly8gU28sIHdlIGFsbG93IDpmb2N1cyB0byBwYXNzIHRocm91Z2ggUVNBIGFsbCB0aGUgdGltZSB0byBhdm9pZCB0aGUgSUUgZXJyb3Jcblx0Ly8gU2VlIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMzM3OFxuXHRyYnVnZ3lRU0EgPSBbXTtcblxuXHRpZiAoIChzdXBwb3J0LnFzYSA9IHJuYXRpdmUudGVzdCggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCApKSApIHtcblx0XHQvLyBCdWlsZCBRU0EgcmVnZXhcblx0XHQvLyBSZWdleCBzdHJhdGVneSBhZG9wdGVkIGZyb20gRGllZ28gUGVyaW5pXG5cdFx0YXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdC8vIFNlbGVjdCBpcyBzZXQgdG8gZW1wdHkgc3RyaW5nIG9uIHB1cnBvc2Vcblx0XHRcdC8vIFRoaXMgaXMgdG8gdGVzdCBJRSdzIHRyZWF0bWVudCBvZiBub3QgZXhwbGljaXRseVxuXHRcdFx0Ly8gc2V0dGluZyBhIGJvb2xlYW4gY29udGVudCBhdHRyaWJ1dGUsXG5cdFx0XHQvLyBzaW5jZSBpdHMgcHJlc2VuY2Ugc2hvdWxkIGJlIGVub3VnaFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEyMzU5XG5cdFx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmlubmVySFRNTCA9IFwiPGEgaWQ9J1wiICsgZXhwYW5kbyArIFwiJz48L2E+XCIgK1xuXHRcdFx0XHRcIjxzZWxlY3QgaWQ9J1wiICsgZXhwYW5kbyArIFwiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPlwiICtcblx0XHRcdFx0XCI8b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTgsIE9wZXJhIDExLTEyLjE2XG5cdFx0XHQvLyBOb3RoaW5nIHNob3VsZCBiZSBzZWxlY3RlZCB3aGVuIGVtcHR5IHN0cmluZ3MgZm9sbG93IF49IG9yICQ9IG9yICo9XG5cdFx0XHQvLyBUaGUgdGVzdCBhdHRyaWJ1dGUgbXVzdCBiZSB1bmtub3duIGluIE9wZXJhIGJ1dCBcInNhZmVcIiBmb3IgV2luUlRcblx0XHRcdC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvaGg0NjUzODguYXNweCNhdHRyaWJ1dGVfc2VjdGlvblxuXHRcdFx0aWYgKCBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJbKl4kXT1cIiArIHdoaXRlc3BhY2UgKyBcIiooPzonJ3xcXFwiXFxcIilcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRThcblx0XHRcdC8vIEJvb2xlYW4gYXR0cmlidXRlcyBhbmQgXCJ2YWx1ZVwiIGFyZSBub3QgdHJlYXRlZCBjb3JyZWN0bHlcblx0XHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooPzp2YWx1ZXxcIiArIGJvb2xlYW5zICsgXCIpXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lPDI5LCBBbmRyb2lkPDQuNCwgU2FmYXJpPDcuMCssIGlPUzw3LjArLCBQaGFudG9tSlM8MS45LjgrXG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIltpZH49XCIgKyBleHBhbmRvICsgXCItXVwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaChcIn49XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXZWJraXQvT3BlcmEgLSA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIHNlbGVjdGVkIG9wdGlvbiBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaChcIjpjaGVja2VkXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgOCssIGlPUyA4K1xuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNjg1MVxuXHRcdFx0Ly8gSW4tcGFnZSBgc2VsZWN0b3IjaWQgc2libGluZy1jb21iaW5hdG9yIHNlbGVjdG9yYCBmYWlsc1xuXHRcdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCJhI1wiICsgZXhwYW5kbyArIFwiKypcIiApLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCIuIy4rWyt+XVwiKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+XCIgK1xuXHRcdFx0XHRcIjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogV2luZG93cyA4IE5hdGl2ZSBBcHBzXG5cdFx0XHQvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcblx0XHRcdHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwiaGlkZGVuXCIgKTtcblx0XHRcdGVsLmFwcGVuZENoaWxkKCBpbnB1dCApLnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwiRFwiICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFOFxuXHRcdFx0Ly8gRW5mb3JjZSBjYXNlLXNlbnNpdGl2aXR5IG9mIG5hbWUgYXR0cmlidXRlXG5cdFx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIm5hbWVcIiArIHdoaXRlc3BhY2UgKyBcIipbKl4kfCF+XT89XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRkYgMy41IC0gOmVuYWJsZWQvOmRpc2FibGVkIGFuZCBoaWRkZW4gZWxlbWVudHMgKGhpZGRlbiBlbGVtZW50cyBhcmUgc3RpbGwgZW5hYmxlZClcblx0XHRcdC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cdFx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGggIT09IDIgKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU5LTExK1xuXHRcdFx0Ly8gSUUncyA6ZGlzYWJsZWQgc2VsZWN0b3IgZG9lcyBub3QgcGljayB1cCB0aGUgY2hpbGRyZW4gb2YgZGlzYWJsZWQgZmllbGRzZXRzXG5cdFx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGggIT09IDIgKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3BlcmEgMTAtMTEgZG9lcyBub3QgdGhyb3cgb24gcG9zdC1jb21tYSBpbnZhbGlkIHBzZXVkb3Ncblx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpO1xuXHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCIsLio6XCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCAoc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgPSBybmF0aXZlLnRlc3QoIChtYXRjaGVzID0gZG9jRWxlbS5tYXRjaGVzIHx8XG5cdFx0ZG9jRWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRkb2NFbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGRvY0VsZW0ub01hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGRvY0VsZW0ubXNNYXRjaGVzU2VsZWN0b3IpICkpICkge1xuXG5cdFx0YXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdC8vIENoZWNrIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIGRvIG1hdGNoZXNTZWxlY3RvclxuXHRcdFx0Ly8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZSAoSUUgOSlcblx0XHRcdHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggPSBtYXRjaGVzLmNhbGwoIGVsLCBcIipcIiApO1xuXG5cdFx0XHQvLyBUaGlzIHNob3VsZCBmYWlsIHdpdGggYW4gZXhjZXB0aW9uXG5cdFx0XHQvLyBHZWNrbyBkb2VzIG5vdCBlcnJvciwgcmV0dXJucyBmYWxzZSBpbnN0ZWFkXG5cdFx0XHRtYXRjaGVzLmNhbGwoIGVsLCBcIltzIT0nJ106eFwiICk7XG5cdFx0XHRyYnVnZ3lNYXRjaGVzLnB1c2goIFwiIT1cIiwgcHNldWRvcyApO1xuXHRcdH0pO1xuXHR9XG5cblx0cmJ1Z2d5UVNBID0gcmJ1Z2d5UVNBLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lRU0Euam9pbihcInxcIikgKTtcblx0cmJ1Z2d5TWF0Y2hlcyA9IHJidWdneU1hdGNoZXMubGVuZ3RoICYmIG5ldyBSZWdFeHAoIHJidWdneU1hdGNoZXMuam9pbihcInxcIikgKTtcblxuXHQvKiBDb250YWluc1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdGhhc0NvbXBhcmUgPSBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24gKTtcblxuXHQvLyBFbGVtZW50IGNvbnRhaW5zIGFub3RoZXJcblx0Ly8gUHVycG9zZWZ1bGx5IHNlbGYtZXhjbHVzaXZlXG5cdC8vIEFzIGluLCBhbiBlbGVtZW50IGRvZXMgbm90IGNvbnRhaW4gaXRzZWxmXG5cdGNvbnRhaW5zID0gaGFzQ29tcGFyZSB8fCBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29udGFpbnMgKSA/XG5cdFx0ZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0XHR2YXIgYWRvd24gPSBhLm5vZGVUeXBlID09PSA5ID8gYS5kb2N1bWVudEVsZW1lbnQgOiBhLFxuXHRcdFx0XHRidXAgPSBiICYmIGIucGFyZW50Tm9kZTtcblx0XHRcdHJldHVybiBhID09PSBidXAgfHwgISEoIGJ1cCAmJiBidXAubm9kZVR5cGUgPT09IDEgJiYgKFxuXHRcdFx0XHRhZG93bi5jb250YWlucyA/XG5cdFx0XHRcdFx0YWRvd24uY29udGFpbnMoIGJ1cCApIDpcblx0XHRcdFx0XHRhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGJ1cCApICYgMTZcblx0XHRcdCkpO1xuXHRcdH0gOlxuXHRcdGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdFx0aWYgKCBiICkge1xuXHRcdFx0XHR3aGlsZSAoIChiID0gYi5wYXJlbnROb2RlKSApIHtcblx0XHRcdFx0XHRpZiAoIGIgPT09IGEgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cdC8qIFNvcnRpbmdcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIERvY3VtZW50IG9yZGVyIHNvcnRpbmdcblx0c29ydE9yZGVyID0gaGFzQ29tcGFyZSA/XG5cdGZ1bmN0aW9uKCBhLCBiICkge1xuXG5cdFx0Ly8gRmxhZyBmb3IgZHVwbGljYXRlIHJlbW92YWxcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0Ly8gU29ydCBvbiBtZXRob2QgZXhpc3RlbmNlIGlmIG9ubHkgb25lIGlucHV0IGhhcyBjb21wYXJlRG9jdW1lbnRQb3NpdGlvblxuXHRcdHZhciBjb21wYXJlID0gIWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gLSAhYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtcblx0XHRpZiAoIGNvbXBhcmUgKSB7XG5cdFx0XHRyZXR1cm4gY29tcGFyZTtcblx0XHR9XG5cblx0XHQvLyBDYWxjdWxhdGUgcG9zaXRpb24gaWYgYm90aCBpbnB1dHMgYmVsb25nIHRvIHRoZSBzYW1lIGRvY3VtZW50XG5cdFx0Y29tcGFyZSA9ICggYS5vd25lckRvY3VtZW50IHx8IGEgKSA9PT0gKCBiLm93bmVyRG9jdW1lbnQgfHwgYiApID9cblx0XHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGIgKSA6XG5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBrbm93IHRoZXkgYXJlIGRpc2Nvbm5lY3RlZFxuXHRcdFx0MTtcblxuXHRcdC8vIERpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdGlmICggY29tcGFyZSAmIDEgfHxcblx0XHRcdCghc3VwcG9ydC5zb3J0RGV0YWNoZWQgJiYgYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYSApID09PSBjb21wYXJlKSApIHtcblxuXHRcdFx0Ly8gQ2hvb3NlIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaXMgcmVsYXRlZCB0byBvdXIgcHJlZmVycmVkIGRvY3VtZW50XG5cdFx0XHRpZiAoIGEgPT09IGRvY3VtZW50IHx8IGEub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYSkgKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHRcdGlmICggYiA9PT0gZG9jdW1lbnQgfHwgYi5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBiKSApIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1haW50YWluIG9yaWdpbmFsIG9yZGVyXG5cdFx0XHRyZXR1cm4gc29ydElucHV0ID9cblx0XHRcdFx0KCBpbmRleE9mKCBzb3J0SW5wdXQsIGEgKSAtIGluZGV4T2YoIHNvcnRJbnB1dCwgYiApICkgOlxuXHRcdFx0XHQwO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb21wYXJlICYgNCA/IC0xIDogMTtcblx0fSA6XG5cdGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdC8vIEV4aXQgZWFybHkgaWYgdGhlIG5vZGVzIGFyZSBpZGVudGljYWxcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0dmFyIGN1cixcblx0XHRcdGkgPSAwLFxuXHRcdFx0YXVwID0gYS5wYXJlbnROb2RlLFxuXHRcdFx0YnVwID0gYi5wYXJlbnROb2RlLFxuXHRcdFx0YXAgPSBbIGEgXSxcblx0XHRcdGJwID0gWyBiIF07XG5cblx0XHQvLyBQYXJlbnRsZXNzIG5vZGVzIGFyZSBlaXRoZXIgZG9jdW1lbnRzIG9yIGRpc2Nvbm5lY3RlZFxuXHRcdGlmICggIWF1cCB8fCAhYnVwICkge1xuXHRcdFx0cmV0dXJuIGEgPT09IGRvY3VtZW50ID8gLTEgOlxuXHRcdFx0XHRiID09PSBkb2N1bWVudCA/IDEgOlxuXHRcdFx0XHRhdXAgPyAtMSA6XG5cdFx0XHRcdGJ1cCA/IDEgOlxuXHRcdFx0XHRzb3J0SW5wdXQgP1xuXHRcdFx0XHQoIGluZGV4T2YoIHNvcnRJbnB1dCwgYSApIC0gaW5kZXhPZiggc29ydElucHV0LCBiICkgKSA6XG5cdFx0XHRcdDA7XG5cblx0XHQvLyBJZiB0aGUgbm9kZXMgYXJlIHNpYmxpbmdzLCB3ZSBjYW4gZG8gYSBxdWljayBjaGVja1xuXHRcdH0gZWxzZSBpZiAoIGF1cCA9PT0gYnVwICkge1xuXHRcdFx0cmV0dXJuIHNpYmxpbmdDaGVjayggYSwgYiApO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSB3ZSBuZWVkIGZ1bGwgbGlzdHMgb2YgdGhlaXIgYW5jZXN0b3JzIGZvciBjb21wYXJpc29uXG5cdFx0Y3VyID0gYTtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRhcC51bnNoaWZ0KCBjdXIgKTtcblx0XHR9XG5cdFx0Y3VyID0gYjtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRicC51bnNoaWZ0KCBjdXIgKTtcblx0XHR9XG5cblx0XHQvLyBXYWxrIGRvd24gdGhlIHRyZWUgbG9va2luZyBmb3IgYSBkaXNjcmVwYW5jeVxuXHRcdHdoaWxlICggYXBbaV0gPT09IGJwW2ldICkge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBpID9cblx0XHRcdC8vIERvIGEgc2libGluZyBjaGVjayBpZiB0aGUgbm9kZXMgaGF2ZSBhIGNvbW1vbiBhbmNlc3RvclxuXHRcdFx0c2libGluZ0NoZWNrKCBhcFtpXSwgYnBbaV0gKSA6XG5cblx0XHRcdC8vIE90aGVyd2lzZSBub2RlcyBpbiBvdXIgZG9jdW1lbnQgc29ydCBmaXJzdFxuXHRcdFx0YXBbaV0gPT09IHByZWZlcnJlZERvYyA/IC0xIDpcblx0XHRcdGJwW2ldID09PSBwcmVmZXJyZWREb2MgPyAxIDpcblx0XHRcdDA7XG5cdH07XG5cblx0cmV0dXJuIGRvY3VtZW50O1xufTtcblxuU2l6emxlLm1hdGNoZXMgPSBmdW5jdGlvbiggZXhwciwgZWxlbWVudHMgKSB7XG5cdHJldHVybiBTaXp6bGUoIGV4cHIsIG51bGwsIG51bGwsIGVsZW1lbnRzICk7XG59O1xuXG5TaXp6bGUubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24oIGVsZW0sIGV4cHIgKSB7XG5cdC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuXHRpZiAoICggZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0gKSAhPT0gZG9jdW1lbnQgKSB7XG5cdFx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblx0fVxuXG5cdGlmICggc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgJiYgZG9jdW1lbnRJc0hUTUwgJiZcblx0XHQhbm9ubmF0aXZlU2VsZWN0b3JDYWNoZVsgZXhwciArIFwiIFwiIF0gJiZcblx0XHQoICFyYnVnZ3lNYXRjaGVzIHx8ICFyYnVnZ3lNYXRjaGVzLnRlc3QoIGV4cHIgKSApICYmXG5cdFx0KCAhcmJ1Z2d5UVNBICAgICB8fCAhcmJ1Z2d5UVNBLnRlc3QoIGV4cHIgKSApICkge1xuXG5cdFx0dHJ5IHtcblx0XHRcdHZhciByZXQgPSBtYXRjaGVzLmNhbGwoIGVsZW0sIGV4cHIgKTtcblxuXHRcdFx0Ly8gSUUgOSdzIG1hdGNoZXNTZWxlY3RvciByZXR1cm5zIGZhbHNlIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdFx0aWYgKCByZXQgfHwgc3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCB8fFxuXHRcdFx0XHRcdC8vIEFzIHdlbGwsIGRpc2Nvbm5lY3RlZCBub2RlcyBhcmUgc2FpZCB0byBiZSBpbiBhIGRvY3VtZW50XG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgaW4gSUUgOVxuXHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQgJiYgZWxlbS5kb2N1bWVudC5ub2RlVHlwZSAhPT0gMTEgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0bm9ubmF0aXZlU2VsZWN0b3JDYWNoZSggZXhwciwgdHJ1ZSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBTaXp6bGUoIGV4cHIsIGRvY3VtZW50LCBudWxsLCBbIGVsZW0gXSApLmxlbmd0aCA+IDA7XG59O1xuXG5TaXp6bGUuY29udGFpbnMgPSBmdW5jdGlvbiggY29udGV4dCwgZWxlbSApIHtcblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdGlmICggKCBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCApICE9PSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHR9XG5cdHJldHVybiBjb250YWlucyggY29udGV4dCwgZWxlbSApO1xufTtcblxuU2l6emxlLmF0dHIgPSBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdGlmICggKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSApICE9PSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHR9XG5cblx0dmFyIGZuID0gRXhwci5hdHRySGFuZGxlWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSxcblx0XHQvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoalF1ZXJ5ICMxMzgwNylcblx0XHR2YWwgPSBmbiAmJiBoYXNPd24uY2FsbCggRXhwci5hdHRySGFuZGxlLCBuYW1lLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRmbiggZWxlbSwgbmFtZSwgIWRvY3VtZW50SXNIVE1MICkgOlxuXHRcdFx0dW5kZWZpbmVkO1xuXG5cdHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCA/XG5cdFx0dmFsIDpcblx0XHRzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWRvY3VtZW50SXNIVE1MID9cblx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICkgOlxuXHRcdFx0KHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShuYW1lKSkgJiYgdmFsLnNwZWNpZmllZCA/XG5cdFx0XHRcdHZhbC52YWx1ZSA6XG5cdFx0XHRcdG51bGw7XG59O1xuXG5TaXp6bGUuZXNjYXBlID0gZnVuY3Rpb24oIHNlbCApIHtcblx0cmV0dXJuIChzZWwgKyBcIlwiKS5yZXBsYWNlKCByY3NzZXNjYXBlLCBmY3NzZXNjYXBlICk7XG59O1xuXG5TaXp6bGUuZXJyb3IgPSBmdW5jdGlvbiggbXNnICkge1xuXHR0aHJvdyBuZXcgRXJyb3IoIFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIgKyBtc2cgKTtcbn07XG5cbi8qKlxuICogRG9jdW1lbnQgc29ydGluZyBhbmQgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICogQHBhcmFtIHtBcnJheUxpa2V9IHJlc3VsdHNcbiAqL1xuU2l6emxlLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0dmFyIGVsZW0sXG5cdFx0ZHVwbGljYXRlcyA9IFtdLFxuXHRcdGogPSAwLFxuXHRcdGkgPSAwO1xuXG5cdC8vIFVubGVzcyB3ZSAqa25vdyogd2UgY2FuIGRldGVjdCBkdXBsaWNhdGVzLCBhc3N1bWUgdGhlaXIgcHJlc2VuY2Vcblx0aGFzRHVwbGljYXRlID0gIXN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcztcblx0c29ydElucHV0ID0gIXN1cHBvcnQuc29ydFN0YWJsZSAmJiByZXN1bHRzLnNsaWNlKCAwICk7XG5cdHJlc3VsdHMuc29ydCggc29ydE9yZGVyICk7XG5cblx0aWYgKCBoYXNEdXBsaWNhdGUgKSB7XG5cdFx0d2hpbGUgKCAoZWxlbSA9IHJlc3VsdHNbaSsrXSkgKSB7XG5cdFx0XHRpZiAoIGVsZW0gPT09IHJlc3VsdHNbIGkgXSApIHtcblx0XHRcdFx0aiA9IGR1cGxpY2F0ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGlsZSAoIGotLSApIHtcblx0XHRcdHJlc3VsdHMuc3BsaWNlKCBkdXBsaWNhdGVzWyBqIF0sIDEgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDbGVhciBpbnB1dCBhZnRlciBzb3J0aW5nIHRvIHJlbGVhc2Ugb2JqZWN0c1xuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvcHVsbC8yMjVcblx0c29ydElucHV0ID0gbnVsbDtcblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiBmb3IgcmV0cmlldmluZyB0aGUgdGV4dCB2YWx1ZSBvZiBhbiBhcnJheSBvZiBET00gbm9kZXNcbiAqIEBwYXJhbSB7QXJyYXl8RWxlbWVudH0gZWxlbVxuICovXG5nZXRUZXh0ID0gU2l6emxlLmdldFRleHQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0dmFyIG5vZGUsXG5cdFx0cmV0ID0gXCJcIixcblx0XHRpID0gMCxcblx0XHRub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0aWYgKCAhbm9kZVR5cGUgKSB7XG5cdFx0Ly8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcblx0XHR3aGlsZSAoIChub2RlID0gZWxlbVtpKytdKSApIHtcblx0XHRcdC8vIERvIG5vdCB0cmF2ZXJzZSBjb21tZW50IG5vZGVzXG5cdFx0XHRyZXQgKz0gZ2V0VGV4dCggbm9kZSApO1xuXHRcdH1cblx0fSBlbHNlIGlmICggbm9kZVR5cGUgPT09IDEgfHwgbm9kZVR5cGUgPT09IDkgfHwgbm9kZVR5cGUgPT09IDExICkge1xuXHRcdC8vIFVzZSB0ZXh0Q29udGVudCBmb3IgZWxlbWVudHNcblx0XHQvLyBpbm5lclRleHQgdXNhZ2UgcmVtb3ZlZCBmb3IgY29uc2lzdGVuY3kgb2YgbmV3IGxpbmVzIChqUXVlcnkgIzExMTUzKVxuXHRcdGlmICggdHlwZW9mIGVsZW0udGV4dENvbnRlbnQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS50ZXh0Q29udGVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gVHJhdmVyc2UgaXRzIGNoaWxkcmVuXG5cdFx0XHRmb3IgKCBlbGVtID0gZWxlbS5maXJzdENoaWxkOyBlbGVtOyBlbGVtID0gZWxlbS5uZXh0U2libGluZyApIHtcblx0XHRcdFx0cmV0ICs9IGdldFRleHQoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAoIG5vZGVUeXBlID09PSAzIHx8IG5vZGVUeXBlID09PSA0ICkge1xuXHRcdHJldHVybiBlbGVtLm5vZGVWYWx1ZTtcblx0fVxuXHQvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuXHRyZXR1cm4gcmV0O1xufTtcblxuRXhwciA9IFNpenpsZS5zZWxlY3RvcnMgPSB7XG5cblx0Ly8gQ2FuIGJlIGFkanVzdGVkIGJ5IHRoZSB1c2VyXG5cdGNhY2hlTGVuZ3RoOiA1MCxcblxuXHRjcmVhdGVQc2V1ZG86IG1hcmtGdW5jdGlvbixcblxuXHRtYXRjaDogbWF0Y2hFeHByLFxuXG5cdGF0dHJIYW5kbGU6IHt9LFxuXG5cdGZpbmQ6IHt9LFxuXG5cdHJlbGF0aXZlOiB7XG5cdFx0XCI+XCI6IHsgZGlyOiBcInBhcmVudE5vZGVcIiwgZmlyc3Q6IHRydWUgfSxcblx0XHRcIiBcIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiIH0sXG5cdFx0XCIrXCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiflwiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiB9XG5cdH0sXG5cblx0cHJlRmlsdGVyOiB7XG5cdFx0XCJBVFRSXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdG1hdGNoWzFdID0gbWF0Y2hbMV0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0Ly8gTW92ZSB0aGUgZ2l2ZW4gdmFsdWUgdG8gbWF0Y2hbM10gd2hldGhlciBxdW90ZWQgb3IgdW5xdW90ZWRcblx0XHRcdG1hdGNoWzNdID0gKCBtYXRjaFszXSB8fCBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBcIlwiICkucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsyXSA9PT0gXCJ+PVwiICkge1xuXHRcdFx0XHRtYXRjaFszXSA9IFwiIFwiICsgbWF0Y2hbM10gKyBcIiBcIjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCA0ICk7XG5cdFx0fSxcblxuXHRcdFwiQ0hJTERcIjogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0LyogbWF0Y2hlcyBmcm9tIG1hdGNoRXhwcltcIkNISUxEXCJdXG5cdFx0XHRcdDEgdHlwZSAob25seXxudGh8Li4uKVxuXHRcdFx0XHQyIHdoYXQgKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdDMgYXJndW1lbnQgKGV2ZW58b2RkfFxcZCp8XFxkKm4oWystXVxcZCspP3wuLi4pXG5cdFx0XHRcdDQgeG4tY29tcG9uZW50IG9mIHhuK3kgYXJndW1lbnQgKFsrLV0/XFxkKm58KVxuXHRcdFx0XHQ1IHNpZ24gb2YgeG4tY29tcG9uZW50XG5cdFx0XHRcdDYgeCBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NyBzaWduIG9mIHktY29tcG9uZW50XG5cdFx0XHRcdDggeSBvZiB5LWNvbXBvbmVudFxuXHRcdFx0Ki9cblx0XHRcdG1hdGNoWzFdID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsxXS5zbGljZSggMCwgMyApID09PSBcIm50aFwiICkge1xuXHRcdFx0XHQvLyBudGgtKiByZXF1aXJlcyBhcmd1bWVudFxuXHRcdFx0XHRpZiAoICFtYXRjaFszXSApIHtcblx0XHRcdFx0XHRTaXp6bGUuZXJyb3IoIG1hdGNoWzBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBudW1lcmljIHggYW5kIHkgcGFyYW1ldGVycyBmb3IgRXhwci5maWx0ZXIuQ0hJTERcblx0XHRcdFx0Ly8gcmVtZW1iZXIgdGhhdCBmYWxzZS90cnVlIGNhc3QgcmVzcGVjdGl2ZWx5IHRvIDAvMVxuXHRcdFx0XHRtYXRjaFs0XSA9ICsoIG1hdGNoWzRdID8gbWF0Y2hbNV0gKyAobWF0Y2hbNl0gfHwgMSkgOiAyICogKCBtYXRjaFszXSA9PT0gXCJldmVuXCIgfHwgbWF0Y2hbM10gPT09IFwib2RkXCIgKSApO1xuXHRcdFx0XHRtYXRjaFs1XSA9ICsoICggbWF0Y2hbN10gKyBtYXRjaFs4XSApIHx8IG1hdGNoWzNdID09PSBcIm9kZFwiICk7XG5cblx0XHRcdC8vIG90aGVyIHR5cGVzIHByb2hpYml0IGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbM10gKSB7XG5cdFx0XHRcdFNpenpsZS5lcnJvciggbWF0Y2hbMF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdH0sXG5cblx0XHRcIlBTRVVET1wiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHR2YXIgZXhjZXNzLFxuXHRcdFx0XHR1bnF1b3RlZCA9ICFtYXRjaFs2XSAmJiBtYXRjaFsyXTtcblxuXHRcdFx0aWYgKCBtYXRjaEV4cHJbXCJDSElMRFwiXS50ZXN0KCBtYXRjaFswXSApICkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWNjZXB0IHF1b3RlZCBhcmd1bWVudHMgYXMtaXNcblx0XHRcdGlmICggbWF0Y2hbM10gKSB7XG5cdFx0XHRcdG1hdGNoWzJdID0gbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIjtcblxuXHRcdFx0Ly8gU3RyaXAgZXhjZXNzIGNoYXJhY3RlcnMgZnJvbSB1bnF1b3RlZCBhcmd1bWVudHNcblx0XHRcdH0gZWxzZSBpZiAoIHVucXVvdGVkICYmIHJwc2V1ZG8udGVzdCggdW5xdW90ZWQgKSAmJlxuXHRcdFx0XHQvLyBHZXQgZXhjZXNzIGZyb20gdG9rZW5pemUgKHJlY3Vyc2l2ZWx5KVxuXHRcdFx0XHQoZXhjZXNzID0gdG9rZW5pemUoIHVucXVvdGVkLCB0cnVlICkpICYmXG5cdFx0XHRcdC8vIGFkdmFuY2UgdG8gdGhlIG5leHQgY2xvc2luZyBwYXJlbnRoZXNpc1xuXHRcdFx0XHQoZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZiggXCIpXCIsIHVucXVvdGVkLmxlbmd0aCAtIGV4Y2VzcyApIC0gdW5xdW90ZWQubGVuZ3RoKSApIHtcblxuXHRcdFx0XHQvLyBleGNlc3MgaXMgYSBuZWdhdGl2ZSBpbmRleFxuXHRcdFx0XHRtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdFx0bWF0Y2hbMl0gPSB1bnF1b3RlZC5zbGljZSggMCwgZXhjZXNzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldHVybiBvbmx5IGNhcHR1cmVzIG5lZWRlZCBieSB0aGUgcHNldWRvIGZpbHRlciBtZXRob2QgKHR5cGUgYW5kIGFyZ3VtZW50KVxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCAzICk7XG5cdFx0fVxuXHR9LFxuXG5cdGZpbHRlcjoge1xuXG5cdFx0XCJUQUdcIjogZnVuY3Rpb24oIG5vZGVOYW1lU2VsZWN0b3IgKSB7XG5cdFx0XHR2YXIgbm9kZU5hbWUgPSBub2RlTmFtZVNlbGVjdG9yLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICkudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBub2RlTmFtZVNlbGVjdG9yID09PSBcIipcIiA/XG5cdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbm9kZU5hbWU7XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFwiQ0xBU1NcIjogZnVuY3Rpb24oIGNsYXNzTmFtZSApIHtcblx0XHRcdHZhciBwYXR0ZXJuID0gY2xhc3NDYWNoZVsgY2xhc3NOYW1lICsgXCIgXCIgXTtcblxuXHRcdFx0cmV0dXJuIHBhdHRlcm4gfHxcblx0XHRcdFx0KHBhdHRlcm4gPSBuZXcgUmVnRXhwKCBcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICsgXCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIiApKSAmJlxuXHRcdFx0XHRjbGFzc0NhY2hlKCBjbGFzc05hbWUsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXR0ZXJuLnRlc3QoIHR5cGVvZiBlbGVtLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtLmNsYXNzTmFtZSB8fCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiICk7XG5cdFx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRcIkFUVFJcIjogZnVuY3Rpb24oIG5hbWUsIG9wZXJhdG9yLCBjaGVjayApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IFNpenpsZS5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHRcdFx0aWYgKCByZXN1bHQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXR1cm4gb3BlcmF0b3IgPT09IFwiIT1cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoICFvcGVyYXRvciApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdCArPSBcIlwiO1xuXG5cdFx0XHRcdHJldHVybiBvcGVyYXRvciA9PT0gXCI9XCIgPyByZXN1bHQgPT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIhPVwiID8gcmVzdWx0ICE9PSBjaGVjayA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwiXj1cIiA/IGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKCBjaGVjayApID09PSAwIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIqPVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPiAtMSA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwiJD1cIiA/IGNoZWNrICYmIHJlc3VsdC5zbGljZSggLWNoZWNrLmxlbmd0aCApID09PSBjaGVjayA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwifj1cIiA/ICggXCIgXCIgKyByZXN1bHQucmVwbGFjZSggcndoaXRlc3BhY2UsIFwiIFwiICkgKyBcIiBcIiApLmluZGV4T2YoIGNoZWNrICkgPiAtMSA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwifD1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgfHwgcmVzdWx0LnNsaWNlKCAwLCBjaGVjay5sZW5ndGggKyAxICkgPT09IGNoZWNrICsgXCItXCIgOlxuXHRcdFx0XHRcdGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0XCJDSElMRFwiOiBmdW5jdGlvbiggdHlwZSwgd2hhdCwgYXJndW1lbnQsIGZpcnN0LCBsYXN0ICkge1xuXHRcdFx0dmFyIHNpbXBsZSA9IHR5cGUuc2xpY2UoIDAsIDMgKSAhPT0gXCJudGhcIixcblx0XHRcdFx0Zm9yd2FyZCA9IHR5cGUuc2xpY2UoIC00ICkgIT09IFwibGFzdFwiLFxuXHRcdFx0XHRvZlR5cGUgPSB3aGF0ID09PSBcIm9mLXR5cGVcIjtcblxuXHRcdFx0cmV0dXJuIGZpcnN0ID09PSAxICYmIGxhc3QgPT09IDAgP1xuXG5cdFx0XHRcdC8vIFNob3J0Y3V0IGZvciA6bnRoLSoobilcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuICEhZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHR9IDpcblxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBjYWNoZSwgdW5pcXVlQ2FjaGUsIG91dGVyQ2FjaGUsIG5vZGUsIG5vZGVJbmRleCwgc3RhcnQsXG5cdFx0XHRcdFx0XHRkaXIgPSBzaW1wbGUgIT09IGZvcndhcmQgPyBcIm5leHRTaWJsaW5nXCIgOiBcInByZXZpb3VzU2libGluZ1wiLFxuXHRcdFx0XHRcdFx0cGFyZW50ID0gZWxlbS5wYXJlbnROb2RlLFxuXHRcdFx0XHRcdFx0bmFtZSA9IG9mVHlwZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFx0XHR1c2VDYWNoZSA9ICF4bWwgJiYgIW9mVHlwZSxcblx0XHRcdFx0XHRcdGRpZmYgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggcGFyZW50ICkge1xuXG5cdFx0XHRcdFx0XHQvLyA6KGZpcnN0fGxhc3R8b25seSktKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdFx0XHRpZiAoIHNpbXBsZSApIHtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKCBkaXIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0bm9kZSA9IGVsZW07XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobm9kZSA9IG5vZGVbIGRpciBdKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggb2ZUeXBlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8vIFJldmVyc2UgZGlyZWN0aW9uIGZvciA6b25seS0qIChpZiB3ZSBoYXZlbid0IHlldCBkb25lIHNvKVxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0ID0gZGlyID0gdHlwZSA9PT0gXCJvbmx5XCIgJiYgIXN0YXJ0ICYmIFwibmV4dFNpYmxpbmdcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3RhcnQgPSBbIGZvcndhcmQgPyBwYXJlbnQuZmlyc3RDaGlsZCA6IHBhcmVudC5sYXN0Q2hpbGQgXTtcblxuXHRcdFx0XHRcdFx0Ly8gbm9uLXhtbCA6bnRoLWNoaWxkKC4uLikgc3RvcmVzIGNhY2hlIGRhdGEgb24gYHBhcmVudGBcblx0XHRcdFx0XHRcdGlmICggZm9yd2FyZCAmJiB1c2VDYWNoZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBTZWVrIGBlbGVtYCBmcm9tIGEgcHJldmlvdXNseS1jYWNoZWQgaW5kZXhcblxuXHRcdFx0XHRcdFx0XHQvLyAuLi5pbiBhIGd6aXAtZnJpZW5kbHkgd2F5XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSBwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG5cdFx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdChvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0Y2FjaGUgPSB1bmlxdWVDYWNoZVsgdHlwZSBdIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG5cdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXggJiYgY2FjaGVbIDIgXTtcblx0XHRcdFx0XHRcdFx0bm9kZSA9IG5vZGVJbmRleCAmJiBwYXJlbnQuY2hpbGROb2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVsgZGlyIF0gfHxcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIHNlZWtpbmcgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0KGRpZmYgPSBub2RlSW5kZXggPSAwKSB8fCBzdGFydC5wb3AoKSkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBXaGVuIGZvdW5kLCBjYWNoZSBpbmRleGVzIG9uIGBwYXJlbnRgIGFuZCBicmVha1xuXHRcdFx0XHRcdFx0XHRcdGlmICggbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiArK2RpZmYgJiYgbm9kZSA9PT0gZWxlbSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIG5vZGVJbmRleCwgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIFVzZSBwcmV2aW91c2x5LWNhY2hlZCBlbGVtZW50IGluZGV4IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIC4uLmluIGEgZ3ppcC1mcmllbmRseSB3YXlcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbTtcblx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gbm9kZVsgZXhwYW5kbyBdIHx8IChub2RlWyBleHBhbmRvIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0Ly8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRcdChvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRjYWNoZSA9IHVuaXF1ZUNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdFx0bm9kZUluZGV4ID0gY2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBjYWNoZVsgMSBdO1xuXHRcdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyB4bWwgOm50aC1jaGlsZCguLi4pXG5cdFx0XHRcdFx0XHRcdC8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcblx0XHRcdFx0XHRcdFx0aWYgKCBkaWZmID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBVc2UgdGhlIHNhbWUgbG9vcCBhcyBhYm92ZSB0byBzZWVrIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICggKG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHQoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAoIG9mVHlwZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZVR5cGUgPT09IDEgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQrK2RpZmYgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2FjaGUgdGhlIGluZGV4IG9mIGVhY2ggZW5jb3VudGVyZWQgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIGRpZmYgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggbm9kZSA9PT0gZWxlbSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJbmNvcnBvcmF0ZSB0aGUgb2Zmc2V0LCB0aGVuIGNoZWNrIGFnYWluc3QgY3ljbGUgc2l6ZVxuXHRcdFx0XHRcdFx0ZGlmZiAtPSBsYXN0O1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRpZmYgPT09IGZpcnN0IHx8ICggZGlmZiAlIGZpcnN0ID09PSAwICYmIGRpZmYgLyBmaXJzdCA+PSAwICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRcIlBTRVVET1wiOiBmdW5jdGlvbiggcHNldWRvLCBhcmd1bWVudCApIHtcblx0XHRcdC8vIHBzZXVkby1jbGFzcyBuYW1lcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZVxuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNwc2V1ZG8tY2xhc3Nlc1xuXHRcdFx0Ly8gUHJpb3JpdGl6ZSBieSBjYXNlIHNlbnNpdGl2aXR5IGluIGNhc2UgY3VzdG9tIHBzZXVkb3MgYXJlIGFkZGVkIHdpdGggdXBwZXJjYXNlIGxldHRlcnNcblx0XHRcdC8vIFJlbWVtYmVyIHRoYXQgc2V0RmlsdGVycyBpbmhlcml0cyBmcm9tIHBzZXVkb3Ncblx0XHRcdHZhciBhcmdzLFxuXHRcdFx0XHRmbiA9IEV4cHIucHNldWRvc1sgcHNldWRvIF0gfHwgRXhwci5zZXRGaWx0ZXJzWyBwc2V1ZG8udG9Mb3dlckNhc2UoKSBdIHx8XG5cdFx0XHRcdFx0U2l6emxlLmVycm9yKCBcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIgKyBwc2V1ZG8gKTtcblxuXHRcdFx0Ly8gVGhlIHVzZXIgbWF5IHVzZSBjcmVhdGVQc2V1ZG8gdG8gaW5kaWNhdGUgdGhhdFxuXHRcdFx0Ly8gYXJndW1lbnRzIGFyZSBuZWVkZWQgdG8gY3JlYXRlIHRoZSBmaWx0ZXIgZnVuY3Rpb25cblx0XHRcdC8vIGp1c3QgYXMgU2l6emxlIGRvZXNcblx0XHRcdGlmICggZm5bIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0cmV0dXJuIGZuKCBhcmd1bWVudCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBCdXQgbWFpbnRhaW4gc3VwcG9ydCBmb3Igb2xkIHNpZ25hdHVyZXNcblx0XHRcdGlmICggZm4ubGVuZ3RoID4gMSApIHtcblx0XHRcdFx0YXJncyA9IFsgcHNldWRvLCBwc2V1ZG8sIFwiXCIsIGFyZ3VtZW50IF07XG5cdFx0XHRcdHJldHVybiBFeHByLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoIHBzZXVkby50b0xvd2VyQ2FzZSgpICkgP1xuXHRcdFx0XHRcdG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcyApIHtcblx0XHRcdFx0XHRcdHZhciBpZHgsXG5cdFx0XHRcdFx0XHRcdG1hdGNoZWQgPSBmbiggc2VlZCwgYXJndW1lbnQgKSxcblx0XHRcdFx0XHRcdFx0aSA9IG1hdGNoZWQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlkeCA9IGluZGV4T2YoIHNlZWQsIG1hdGNoZWRbaV0gKTtcblx0XHRcdFx0XHRcdFx0c2VlZFsgaWR4IF0gPSAhKCBtYXRjaGVzWyBpZHggXSA9IG1hdGNoZWRbaV0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSA6XG5cdFx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZm4oIGVsZW0sIDAsIGFyZ3MgKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm47XG5cdFx0fVxuXHR9LFxuXG5cdHBzZXVkb3M6IHtcblx0XHQvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3Ncblx0XHRcIm5vdFwiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdFx0Ly8gVHJpbSB0aGUgc2VsZWN0b3IgcGFzc2VkIHRvIGNvbXBpbGVcblx0XHRcdC8vIHRvIGF2b2lkIHRyZWF0aW5nIGxlYWRpbmcgYW5kIHRyYWlsaW5nXG5cdFx0XHQvLyBzcGFjZXMgYXMgY29tYmluYXRvcnNcblx0XHRcdHZhciBpbnB1dCA9IFtdLFxuXHRcdFx0XHRyZXN1bHRzID0gW10sXG5cdFx0XHRcdG1hdGNoZXIgPSBjb21waWxlKCBzZWxlY3Rvci5yZXBsYWNlKCBydHJpbSwgXCIkMVwiICkgKTtcblxuXHRcdFx0cmV0dXJuIG1hdGNoZXJbIGV4cGFuZG8gXSA/XG5cdFx0XHRcdG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcywgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBlbGVtLFxuXHRcdFx0XHRcdFx0dW5tYXRjaGVkID0gbWF0Y2hlciggc2VlZCwgbnVsbCwgeG1sLCBbXSApLFxuXHRcdFx0XHRcdFx0aSA9IHNlZWQubGVuZ3RoO1xuXG5cdFx0XHRcdFx0Ly8gTWF0Y2ggZWxlbWVudHMgdW5tYXRjaGVkIGJ5IGBtYXRjaGVyYFxuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoZWxlbSA9IHVubWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdHNlZWRbaV0gPSAhKG1hdGNoZXNbaV0gPSBlbGVtKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pIDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdFx0XHRpbnB1dFswXSA9IGVsZW07XG5cdFx0XHRcdFx0bWF0Y2hlciggaW5wdXQsIG51bGwsIHhtbCwgcmVzdWx0cyApO1xuXHRcdFx0XHRcdC8vIERvbid0IGtlZXAgdGhlIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cdFx0XHRcdFx0aW5wdXRbMF0gPSBudWxsO1xuXHRcdFx0XHRcdHJldHVybiAhcmVzdWx0cy5wb3AoKTtcblx0XHRcdFx0fTtcblx0XHR9KSxcblxuXHRcdFwiaGFzXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBTaXp6bGUoIHNlbGVjdG9yLCBlbGVtICkubGVuZ3RoID4gMDtcblx0XHRcdH07XG5cdFx0fSksXG5cblx0XHRcImNvbnRhaW5zXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggdGV4dCApIHtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0udGV4dENvbnRlbnQgfHwgZ2V0VGV4dCggZWxlbSApICkuaW5kZXhPZiggdGV4dCApID4gLTE7XG5cdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0Ly8gXCJXaGV0aGVyIGFuIGVsZW1lbnQgaXMgcmVwcmVzZW50ZWQgYnkgYSA6bGFuZygpIHNlbGVjdG9yXG5cdFx0Ly8gaXMgYmFzZWQgc29sZWx5IG9uIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWVcblx0XHQvLyBiZWluZyBlcXVhbCB0byB0aGUgaWRlbnRpZmllciBDLFxuXHRcdC8vIG9yIGJlZ2lubmluZyB3aXRoIHRoZSBpZGVudGlmaWVyIEMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgXCItXCIuXG5cdFx0Ly8gVGhlIG1hdGNoaW5nIG9mIEMgYWdhaW5zdCB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlIGlzIHBlcmZvcm1lZCBjYXNlLWluc2Vuc2l0aXZlbHkuXG5cdFx0Ly8gVGhlIGlkZW50aWZpZXIgQyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgdmFsaWQgbGFuZ3VhZ2UgbmFtZS5cIlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jbGFuZy1wc2V1ZG9cblx0XHRcImxhbmdcIjogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggbGFuZyApIHtcblx0XHRcdC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcblx0XHRcdGlmICggIXJpZGVudGlmaWVyLnRlc3QobGFuZyB8fCBcIlwiKSApIHtcblx0XHRcdFx0U2l6emxlLmVycm9yKCBcInVuc3VwcG9ydGVkIGxhbmc6IFwiICsgbGFuZyApO1xuXHRcdFx0fVxuXHRcdFx0bGFuZyA9IGxhbmcucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgZWxlbUxhbmc7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRpZiAoIChlbGVtTGFuZyA9IGRvY3VtZW50SXNIVE1MID9cblx0XHRcdFx0XHRcdGVsZW0ubGFuZyA6XG5cdFx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpIHx8IGVsZW0uZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSkgKSB7XG5cblx0XHRcdFx0XHRcdGVsZW1MYW5nID0gZWxlbUxhbmcudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtTGFuZyA9PT0gbGFuZyB8fCBlbGVtTGFuZy5pbmRleE9mKCBsYW5nICsgXCItXCIgKSA9PT0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gd2hpbGUgKCAoZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSkgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0Ly8gTWlzY2VsbGFuZW91c1xuXHRcdFwidGFyZ2V0XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cdFx0XHRyZXR1cm4gaGFzaCAmJiBoYXNoLnNsaWNlKCAxICkgPT09IGVsZW0uaWQ7XG5cdFx0fSxcblxuXHRcdFwicm9vdFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBkb2NFbGVtO1xuXHRcdH0sXG5cblx0XHRcImZvY3VzXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKCFkb2N1bWVudC5oYXNGb2N1cyB8fCBkb2N1bWVudC5oYXNGb2N1cygpKSAmJiAhIShlbGVtLnR5cGUgfHwgZWxlbS5ocmVmIHx8IH5lbGVtLnRhYkluZGV4KTtcblx0XHR9LFxuXG5cdFx0Ly8gQm9vbGVhbiBwcm9wZXJ0aWVzXG5cdFx0XCJlbmFibGVkXCI6IGNyZWF0ZURpc2FibGVkUHNldWRvKCBmYWxzZSApLFxuXHRcdFwiZGlzYWJsZWRcIjogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIHRydWUgKSxcblxuXHRcdFwiY2hlY2tlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdC8vIEluIENTUzMsIDpjaGVja2VkIHNob3VsZCByZXR1cm4gYm90aCBjaGVja2VkIGFuZCBzZWxlY3RlZCBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdHZhciBub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiAhIWVsZW0uY2hlY2tlZCkgfHwgKG5vZGVOYW1lID09PSBcIm9wdGlvblwiICYmICEhZWxlbS5zZWxlY3RlZCk7XG5cdFx0fSxcblxuXHRcdFwic2VsZWN0ZWRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHQvLyBBY2Nlc3NpbmcgdGhpcyBwcm9wZXJ0eSBtYWtlcyBzZWxlY3RlZC1ieS1kZWZhdWx0XG5cdFx0XHQvLyBvcHRpb25zIGluIFNhZmFyaSB3b3JrIHByb3Blcmx5XG5cdFx0XHRpZiAoIGVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0ZWxlbS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbGVtLnNlbGVjdGVkID09PSB0cnVlO1xuXHRcdH0sXG5cblx0XHQvLyBDb250ZW50c1xuXHRcdFwiZW1wdHlcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2VtcHR5LXBzZXVkb1xuXHRcdFx0Ly8gOmVtcHR5IGlzIG5lZ2F0ZWQgYnkgZWxlbWVudCAoMSkgb3IgY29udGVudCBub2RlcyAodGV4dDogMzsgY2RhdGE6IDQ7IGVudGl0eSByZWY6IDUpLFxuXHRcdFx0Ly8gICBidXQgbm90IGJ5IG90aGVycyAoY29tbWVudDogODsgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbjogNzsgZXRjLilcblx0XHRcdC8vIG5vZGVUeXBlIDwgNiB3b3JrcyBiZWNhdXNlIGF0dHJpYnV0ZXMgKDIpIGRvIG5vdCBhcHBlYXIgYXMgY2hpbGRyZW5cblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPCA2ICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdFwicGFyZW50XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICFFeHByLnBzZXVkb3NbXCJlbXB0eVwiXSggZWxlbSApO1xuXHRcdH0sXG5cblx0XHQvLyBFbGVtZW50L2lucHV0IHR5cGVzXG5cdFx0XCJoZWFkZXJcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmhlYWRlci50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdFwiaW5wdXRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmlucHV0cy50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdFwiYnV0dG9uXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gXCJidXR0b25cIiB8fCBuYW1lID09PSBcImJ1dHRvblwiO1xuXHRcdH0sXG5cblx0XHRcInRleHRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgYXR0cjtcblx0XHRcdHJldHVybiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiAmJlxuXHRcdFx0XHRlbGVtLnR5cGUgPT09IFwidGV4dFwiICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUU8OFxuXHRcdFx0XHQvLyBOZXcgSFRNTDUgYXR0cmlidXRlIHZhbHVlcyAoZS5nLiwgXCJzZWFyY2hcIikgYXBwZWFyIHdpdGggZWxlbS50eXBlID09PSBcInRleHRcIlxuXHRcdFx0XHQoIChhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PSBudWxsIHx8IGF0dHIudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0XCIgKTtcblx0XHR9LFxuXG5cdFx0Ly8gUG9zaXRpb24taW4tY29sbGVjdGlvblxuXHRcdFwiZmlyc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBbIDAgXTtcblx0XHR9KSxcblxuXHRcdFwibGFzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHJldHVybiBbIGxlbmd0aCAtIDEgXTtcblx0XHR9KSxcblxuXHRcdFwiZXFcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0cmV0dXJuIFsgYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudCBdO1xuXHRcdH0pLFxuXG5cdFx0XCJldmVuXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pLFxuXG5cdFx0XCJvZGRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHR2YXIgaSA9IDE7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkgKz0gMiApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSksXG5cblx0XHRcImx0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcblx0XHRcdHZhciBpID0gYXJndW1lbnQgPCAwID9cblx0XHRcdFx0YXJndW1lbnQgKyBsZW5ndGggOlxuXHRcdFx0XHRhcmd1bWVudCA+IGxlbmd0aCA/XG5cdFx0XHRcdFx0bGVuZ3RoIDpcblx0XHRcdFx0XHRhcmd1bWVudDtcblx0XHRcdGZvciAoIDsgLS1pID49IDA7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KSxcblxuXHRcdFwiZ3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuXHRcdFx0Zm9yICggOyArK2kgPCBsZW5ndGg7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KVxuXHR9XG59O1xuXG5FeHByLnBzZXVkb3NbXCJudGhcIl0gPSBFeHByLnBzZXVkb3NbXCJlcVwiXTtcblxuLy8gQWRkIGJ1dHRvbi9pbnB1dCB0eXBlIHBzZXVkb3NcbmZvciAoIGkgaW4geyByYWRpbzogdHJ1ZSwgY2hlY2tib3g6IHRydWUsIGZpbGU6IHRydWUsIHBhc3N3b3JkOiB0cnVlLCBpbWFnZTogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUlucHV0UHNldWRvKCBpICk7XG59XG5mb3IgKCBpIGluIHsgc3VibWl0OiB0cnVlLCByZXNldDogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUJ1dHRvblBzZXVkbyggaSApO1xufVxuXG4vLyBFYXN5IEFQSSBmb3IgY3JlYXRpbmcgbmV3IHNldEZpbHRlcnNcbmZ1bmN0aW9uIHNldEZpbHRlcnMoKSB7fVxuc2V0RmlsdGVycy5wcm90b3R5cGUgPSBFeHByLmZpbHRlcnMgPSBFeHByLnBzZXVkb3M7XG5FeHByLnNldEZpbHRlcnMgPSBuZXcgc2V0RmlsdGVycygpO1xuXG50b2tlbml6ZSA9IFNpenpsZS50b2tlbml6ZSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgcGFyc2VPbmx5ICkge1xuXHR2YXIgbWF0Y2hlZCwgbWF0Y2gsIHRva2VucywgdHlwZSxcblx0XHRzb0ZhciwgZ3JvdXBzLCBwcmVGaWx0ZXJzLFxuXHRcdGNhY2hlZCA9IHRva2VuQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcblxuXHRpZiAoIGNhY2hlZCApIHtcblx0XHRyZXR1cm4gcGFyc2VPbmx5ID8gMCA6IGNhY2hlZC5zbGljZSggMCApO1xuXHR9XG5cblx0c29GYXIgPSBzZWxlY3Rvcjtcblx0Z3JvdXBzID0gW107XG5cdHByZUZpbHRlcnMgPSBFeHByLnByZUZpbHRlcjtcblxuXHR3aGlsZSAoIHNvRmFyICkge1xuXG5cdFx0Ly8gQ29tbWEgYW5kIGZpcnN0IHJ1blxuXHRcdGlmICggIW1hdGNoZWQgfHwgKG1hdGNoID0gcmNvbW1hLmV4ZWMoIHNvRmFyICkpICkge1xuXHRcdFx0aWYgKCBtYXRjaCApIHtcblx0XHRcdFx0Ly8gRG9uJ3QgY29uc3VtZSB0cmFpbGluZyBjb21tYXMgYXMgdmFsaWRcblx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hbMF0ubGVuZ3RoICkgfHwgc29GYXI7XG5cdFx0XHR9XG5cdFx0XHRncm91cHMucHVzaCggKHRva2VucyA9IFtdKSApO1xuXHRcdH1cblxuXHRcdG1hdGNoZWQgPSBmYWxzZTtcblxuXHRcdC8vIENvbWJpbmF0b3JzXG5cdFx0aWYgKCAobWF0Y2ggPSByY29tYmluYXRvcnMuZXhlYyggc29GYXIgKSkgKSB7XG5cdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cdFx0XHRcdC8vIENhc3QgZGVzY2VuZGFudCBjb21iaW5hdG9ycyB0byBzcGFjZVxuXHRcdFx0XHR0eXBlOiBtYXRjaFswXS5yZXBsYWNlKCBydHJpbSwgXCIgXCIgKVxuXHRcdFx0fSk7XG5cdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuXHRcdH1cblxuXHRcdC8vIEZpbHRlcnNcblx0XHRmb3IgKCB0eXBlIGluIEV4cHIuZmlsdGVyICkge1xuXHRcdFx0aWYgKCAobWF0Y2ggPSBtYXRjaEV4cHJbIHR5cGUgXS5leGVjKCBzb0ZhciApKSAmJiAoIXByZUZpbHRlcnNbIHR5cGUgXSB8fFxuXHRcdFx0XHQobWF0Y2ggPSBwcmVGaWx0ZXJzWyB0eXBlIF0oIG1hdGNoICkpKSApIHtcblx0XHRcdFx0bWF0Y2hlZCA9IG1hdGNoLnNoaWZ0KCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRcdG1hdGNoZXM6IG1hdGNoXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggIW1hdGNoZWQgKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgaW52YWxpZCBleGNlc3Ncblx0Ly8gaWYgd2UncmUganVzdCBwYXJzaW5nXG5cdC8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3Igb3IgcmV0dXJuIHRva2Vuc1xuXHRyZXR1cm4gcGFyc2VPbmx5ID9cblx0XHRzb0Zhci5sZW5ndGggOlxuXHRcdHNvRmFyID9cblx0XHRcdFNpenpsZS5lcnJvciggc2VsZWN0b3IgKSA6XG5cdFx0XHQvLyBDYWNoZSB0aGUgdG9rZW5zXG5cdFx0XHR0b2tlbkNhY2hlKCBzZWxlY3RvciwgZ3JvdXBzICkuc2xpY2UoIDAgKTtcbn07XG5cbmZ1bmN0aW9uIHRvU2VsZWN0b3IoIHRva2VucyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IHRva2Vucy5sZW5ndGgsXG5cdFx0c2VsZWN0b3IgPSBcIlwiO1xuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRzZWxlY3RvciArPSB0b2tlbnNbaV0udmFsdWU7XG5cdH1cblx0cmV0dXJuIHNlbGVjdG9yO1xufVxuXG5mdW5jdGlvbiBhZGRDb21iaW5hdG9yKCBtYXRjaGVyLCBjb21iaW5hdG9yLCBiYXNlICkge1xuXHR2YXIgZGlyID0gY29tYmluYXRvci5kaXIsXG5cdFx0c2tpcCA9IGNvbWJpbmF0b3IubmV4dCxcblx0XHRrZXkgPSBza2lwIHx8IGRpcixcblx0XHRjaGVja05vbkVsZW1lbnRzID0gYmFzZSAmJiBrZXkgPT09IFwicGFyZW50Tm9kZVwiLFxuXHRcdGRvbmVOYW1lID0gZG9uZSsrO1xuXG5cdHJldHVybiBjb21iaW5hdG9yLmZpcnN0ID9cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGNsb3Nlc3QgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSA6XG5cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGFsbCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudHNcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIG9sZENhY2hlLCB1bmlxdWVDYWNoZSwgb3V0ZXJDYWNoZSxcblx0XHRcdFx0bmV3Q2FjaGUgPSBbIGRpcnJ1bnMsIGRvbmVOYW1lIF07XG5cblx0XHRcdC8vIFdlIGNhbid0IHNldCBhcmJpdHJhcnkgZGF0YSBvbiBYTUwgbm9kZXMsIHNvIHRoZXkgZG9uJ3QgYmVuZWZpdCBmcm9tIGNvbWJpbmF0b3IgY2FjaGluZ1xuXHRcdFx0aWYgKCB4bWwgKSB7XG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gZWxlbVsgZXhwYW5kbyBdIHx8IChlbGVtWyBleHBhbmRvIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBlbGVtLnVuaXF1ZUlEIF0gfHwgKG91dGVyQ2FjaGVbIGVsZW0udW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0aWYgKCBza2lwICYmIHNraXAgPT09IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0XHRcdFx0ZWxlbSA9IGVsZW1bIGRpciBdIHx8IGVsZW07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCAob2xkQ2FjaGUgPSB1bmlxdWVDYWNoZVsga2V5IF0pICYmXG5cdFx0XHRcdFx0XHRcdG9sZENhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgb2xkQ2FjaGVbIDEgXSA9PT0gZG9uZU5hbWUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQXNzaWduIHRvIG5ld0NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChuZXdDYWNoZVsgMiBdID0gb2xkQ2FjaGVbIDIgXSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXVzZSBuZXdjYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlWyBrZXkgXSA9IG5ld0NhY2hlO1xuXG5cdFx0XHRcdFx0XHRcdC8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuXHRcdFx0XHRcdFx0XHRpZiAoIChuZXdDYWNoZVsgMiBdID0gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkpICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICkge1xuXHRyZXR1cm4gbWF0Y2hlcnMubGVuZ3RoID4gMSA/XG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHZhciBpID0gbWF0Y2hlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggIW1hdGNoZXJzW2ldKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gOlxuXHRcdG1hdGNoZXJzWzBdO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBsZUNvbnRleHRzKCBzZWxlY3RvciwgY29udGV4dHMsIHJlc3VsdHMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBjb250ZXh0cy5sZW5ndGg7XG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFNpenpsZSggc2VsZWN0b3IsIGNvbnRleHRzW2ldLCByZXN1bHRzICk7XG5cdH1cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGNvbmRlbnNlKCB1bm1hdGNoZWQsIG1hcCwgZmlsdGVyLCBjb250ZXh0LCB4bWwgKSB7XG5cdHZhciBlbGVtLFxuXHRcdG5ld1VubWF0Y2hlZCA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGxlbiA9IHVubWF0Y2hlZC5sZW5ndGgsXG5cdFx0bWFwcGVkID0gbWFwICE9IG51bGw7XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAoZWxlbSA9IHVubWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRpZiAoICFmaWx0ZXIgfHwgZmlsdGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0bmV3VW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0aWYgKCBtYXBwZWQgKSB7XG5cdFx0XHRcdFx0bWFwLnB1c2goIGkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBuZXdVbm1hdGNoZWQ7XG59XG5cbmZ1bmN0aW9uIHNldE1hdGNoZXIoIHByZUZpbHRlciwgc2VsZWN0b3IsIG1hdGNoZXIsIHBvc3RGaWx0ZXIsIHBvc3RGaW5kZXIsIHBvc3RTZWxlY3RvciApIHtcblx0aWYgKCBwb3N0RmlsdGVyICYmICFwb3N0RmlsdGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0cG9zdEZpbHRlciA9IHNldE1hdGNoZXIoIHBvc3RGaWx0ZXIgKTtcblx0fVxuXHRpZiAoIHBvc3RGaW5kZXIgJiYgIXBvc3RGaW5kZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmluZGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICk7XG5cdH1cblx0cmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgcmVzdWx0cywgY29udGV4dCwgeG1sICkge1xuXHRcdHZhciB0ZW1wLCBpLCBlbGVtLFxuXHRcdFx0cHJlTWFwID0gW10sXG5cdFx0XHRwb3N0TWFwID0gW10sXG5cdFx0XHRwcmVleGlzdGluZyA9IHJlc3VsdHMubGVuZ3RoLFxuXG5cdFx0XHQvLyBHZXQgaW5pdGlhbCBlbGVtZW50cyBmcm9tIHNlZWQgb3IgY29udGV4dFxuXHRcdFx0ZWxlbXMgPSBzZWVkIHx8IG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yIHx8IFwiKlwiLCBjb250ZXh0Lm5vZGVUeXBlID8gWyBjb250ZXh0IF0gOiBjb250ZXh0LCBbXSApLFxuXG5cdFx0XHQvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cblx0XHRcdG1hdGNoZXJJbiA9IHByZUZpbHRlciAmJiAoIHNlZWQgfHwgIXNlbGVjdG9yICkgP1xuXHRcdFx0XHRjb25kZW5zZSggZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdGVsZW1zLFxuXG5cdFx0XHRtYXRjaGVyT3V0ID0gbWF0Y2hlciA/XG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgYSBwb3N0RmluZGVyLCBvciBmaWx0ZXJlZCBzZWVkLCBvciBub24tc2VlZCBwb3N0RmlsdGVyIG9yIHByZWV4aXN0aW5nIHJlc3VsdHMsXG5cdFx0XHRcdHBvc3RGaW5kZXIgfHwgKCBzZWVkID8gcHJlRmlsdGVyIDogcHJlZXhpc3RpbmcgfHwgcG9zdEZpbHRlciApID9cblxuXHRcdFx0XHRcdC8vIC4uLmludGVybWVkaWF0ZSBwcm9jZXNzaW5nIGlzIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdFtdIDpcblxuXHRcdFx0XHRcdC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxuXHRcdFx0XHRcdHJlc3VsdHMgOlxuXHRcdFx0XHRtYXRjaGVySW47XG5cblx0XHQvLyBGaW5kIHByaW1hcnkgbWF0Y2hlc1xuXHRcdGlmICggbWF0Y2hlciApIHtcblx0XHRcdG1hdGNoZXIoIG1hdGNoZXJJbiwgbWF0Y2hlck91dCwgY29udGV4dCwgeG1sICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcG9zdEZpbHRlclxuXHRcdGlmICggcG9zdEZpbHRlciApIHtcblx0XHRcdHRlbXAgPSBjb25kZW5zZSggbWF0Y2hlck91dCwgcG9zdE1hcCApO1xuXHRcdFx0cG9zdEZpbHRlciggdGVtcCwgW10sIGNvbnRleHQsIHhtbCApO1xuXG5cdFx0XHQvLyBVbi1tYXRjaCBmYWlsaW5nIGVsZW1lbnRzIGJ5IG1vdmluZyB0aGVtIGJhY2sgdG8gbWF0Y2hlckluXG5cdFx0XHRpID0gdGVtcC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAoZWxlbSA9IHRlbXBbaV0pICkge1xuXHRcdFx0XHRcdG1hdGNoZXJPdXRbIHBvc3RNYXBbaV0gXSA9ICEobWF0Y2hlckluWyBwb3N0TWFwW2ldIF0gPSBlbGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggc2VlZCApIHtcblx0XHRcdGlmICggcG9zdEZpbmRlciB8fCBwcmVGaWx0ZXIgKSB7XG5cdFx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblx0XHRcdFx0XHQvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcblx0XHRcdFx0XHR0ZW1wID0gW107XG5cdFx0XHRcdFx0aSA9IG1hdGNoZXJPdXQubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICkge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXN0b3JlIG1hdGNoZXJJbiBzaW5jZSBlbGVtIGlzIG5vdCB5ZXQgYSBmaW5hbCBtYXRjaFxuXHRcdFx0XHRcdFx0XHR0ZW1wLnB1c2goIChtYXRjaGVySW5baV0gPSBlbGVtKSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwb3N0RmluZGVyKCBudWxsLCAobWF0Y2hlck91dCA9IFtdKSwgdGVtcCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIG1hdGNoZWQgZWxlbWVudHMgZnJvbSBzZWVkIHRvIHJlc3VsdHMgdG8ga2VlcCB0aGVtIHN5bmNocm9uaXplZFxuXHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdGlmICggKGVsZW0gPSBtYXRjaGVyT3V0W2ldKSAmJlxuXHRcdFx0XHRcdFx0KHRlbXAgPSBwb3N0RmluZGVyID8gaW5kZXhPZiggc2VlZCwgZWxlbSApIDogcHJlTWFwW2ldKSA+IC0xICkge1xuXG5cdFx0XHRcdFx0XHRzZWVkW3RlbXBdID0gIShyZXN1bHRzW3RlbXBdID0gZWxlbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBBZGQgZWxlbWVudHMgdG8gcmVzdWx0cywgdGhyb3VnaCBwb3N0RmluZGVyIGlmIGRlZmluZWRcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlck91dCA9IGNvbmRlbnNlKFxuXHRcdFx0XHRtYXRjaGVyT3V0ID09PSByZXN1bHRzID9cblx0XHRcdFx0XHRtYXRjaGVyT3V0LnNwbGljZSggcHJlZXhpc3RpbmcsIG1hdGNoZXJPdXQubGVuZ3RoICkgOlxuXHRcdFx0XHRcdG1hdGNoZXJPdXRcblx0XHRcdCk7XG5cdFx0XHRpZiAoIHBvc3RGaW5kZXIgKSB7XG5cdFx0XHRcdHBvc3RGaW5kZXIoIG51bGwsIHJlc3VsdHMsIG1hdGNoZXJPdXQsIHhtbCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgbWF0Y2hlck91dCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMgKSB7XG5cdHZhciBjaGVja0NvbnRleHQsIG1hdGNoZXIsIGosXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcblx0XHRsZWFkaW5nUmVsYXRpdmUgPSBFeHByLnJlbGF0aXZlWyB0b2tlbnNbMF0udHlwZSBdLFxuXHRcdGltcGxpY2l0UmVsYXRpdmUgPSBsZWFkaW5nUmVsYXRpdmUgfHwgRXhwci5yZWxhdGl2ZVtcIiBcIl0sXG5cdFx0aSA9IGxlYWRpbmdSZWxhdGl2ZSA/IDEgOiAwLFxuXG5cdFx0Ly8gVGhlIGZvdW5kYXRpb25hbCBtYXRjaGVyIGVuc3VyZXMgdGhhdCBlbGVtZW50cyBhcmUgcmVhY2hhYmxlIGZyb20gdG9wLWxldmVsIGNvbnRleHQocylcblx0XHRtYXRjaENvbnRleHQgPSBhZGRDb21iaW5hdG9yKCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBjaGVja0NvbnRleHQ7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoQW55Q29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YoIGNoZWNrQ29udGV4dCwgZWxlbSApID4gLTE7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoZXJzID0gWyBmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIHJldCA9ICggIWxlYWRpbmdSZWxhdGl2ZSAmJiAoIHhtbCB8fCBjb250ZXh0ICE9PSBvdXRlcm1vc3RDb250ZXh0ICkgKSB8fCAoXG5cdFx0XHRcdChjaGVja0NvbnRleHQgPSBjb250ZXh0KS5ub2RlVHlwZSA/XG5cdFx0XHRcdFx0bWF0Y2hDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdFx0bWF0Y2hBbnlDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSApO1xuXHRcdFx0Ly8gQXZvaWQgaGFuZ2luZyBvbnRvIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cdFx0XHRjaGVja0NvbnRleHQgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IF07XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAobWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1tpXS50eXBlIF0pICkge1xuXHRcdFx0bWF0Y2hlcnMgPSBbIGFkZENvbWJpbmF0b3IoZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksIG1hdGNoZXIpIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXIgPSBFeHByLmZpbHRlclsgdG9rZW5zW2ldLnR5cGUgXS5hcHBseSggbnVsbCwgdG9rZW5zW2ldLm1hdGNoZXMgKTtcblxuXHRcdFx0Ly8gUmV0dXJuIHNwZWNpYWwgdXBvbiBzZWVpbmcgYSBwb3NpdGlvbmFsIG1hdGNoZXJcblx0XHRcdGlmICggbWF0Y2hlclsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBuZXh0IHJlbGF0aXZlIG9wZXJhdG9yIChpZiBhbnkpIGZvciBwcm9wZXIgaGFuZGxpbmdcblx0XHRcdFx0aiA9ICsraTtcblx0XHRcdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBFeHByLnJlbGF0aXZlWyB0b2tlbnNbal0udHlwZSBdICkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZXRNYXRjaGVyKFxuXHRcdFx0XHRcdGkgPiAxICYmIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApLFxuXHRcdFx0XHRcdGkgPiAxICYmIHRvU2VsZWN0b3IoXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGUgcHJlY2VkaW5nIHRva2VuIHdhcyBhIGRlc2NlbmRhbnQgY29tYmluYXRvciwgaW5zZXJ0IGFuIGltcGxpY2l0IGFueS1lbGVtZW50IGAqYFxuXHRcdFx0XHRcdFx0dG9rZW5zLnNsaWNlKCAwLCBpIC0gMSApLmNvbmNhdCh7IHZhbHVlOiB0b2tlbnNbIGkgLSAyIF0udHlwZSA9PT0gXCIgXCIgPyBcIipcIiA6IFwiXCIgfSlcblx0XHRcdFx0XHQpLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSxcblx0XHRcdFx0XHRtYXRjaGVyLFxuXHRcdFx0XHRcdGkgPCBqICYmIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMuc2xpY2UoIGksIGogKSApLFxuXHRcdFx0XHRcdGogPCBsZW4gJiYgbWF0Y2hlckZyb21Ub2tlbnMoICh0b2tlbnMgPSB0b2tlbnMuc2xpY2UoIGogKSkgKSxcblx0XHRcdFx0XHRqIDwgbGVuICYmIHRvU2VsZWN0b3IoIHRva2VucyApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVycy5wdXNoKCBtYXRjaGVyICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSB7XG5cdHZhciBieVNldCA9IHNldE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0YnlFbGVtZW50ID0gZWxlbWVudE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0c3VwZXJNYXRjaGVyID0gZnVuY3Rpb24oIHNlZWQsIGNvbnRleHQsIHhtbCwgcmVzdWx0cywgb3V0ZXJtb3N0ICkge1xuXHRcdFx0dmFyIGVsZW0sIGosIG1hdGNoZXIsXG5cdFx0XHRcdG1hdGNoZWRDb3VudCA9IDAsXG5cdFx0XHRcdGkgPSBcIjBcIixcblx0XHRcdFx0dW5tYXRjaGVkID0gc2VlZCAmJiBbXSxcblx0XHRcdFx0c2V0TWF0Y2hlZCA9IFtdLFxuXHRcdFx0XHRjb250ZXh0QmFja3VwID0gb3V0ZXJtb3N0Q29udGV4dCxcblx0XHRcdFx0Ly8gV2UgbXVzdCBhbHdheXMgaGF2ZSBlaXRoZXIgc2VlZCBlbGVtZW50cyBvciBvdXRlcm1vc3QgY29udGV4dFxuXHRcdFx0XHRlbGVtcyA9IHNlZWQgfHwgYnlFbGVtZW50ICYmIEV4cHIuZmluZFtcIlRBR1wiXSggXCIqXCIsIG91dGVybW9zdCApLFxuXHRcdFx0XHQvLyBVc2UgaW50ZWdlciBkaXJydW5zIGlmZiB0aGlzIGlzIHRoZSBvdXRlcm1vc3QgbWF0Y2hlclxuXHRcdFx0XHRkaXJydW5zVW5pcXVlID0gKGRpcnJ1bnMgKz0gY29udGV4dEJhY2t1cCA9PSBudWxsID8gMSA6IE1hdGgucmFuZG9tKCkgfHwgMC4xKSxcblx0XHRcdFx0bGVuID0gZWxlbXMubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHQgPT09IGRvY3VtZW50IHx8IGNvbnRleHQgfHwgb3V0ZXJtb3N0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZWxlbWVudHMgcGFzc2luZyBlbGVtZW50TWF0Y2hlcnMgZGlyZWN0bHkgdG8gcmVzdWx0c1xuXHRcdFx0Ly8gU3VwcG9ydDogSUU8OSwgU2FmYXJpXG5cdFx0XHQvLyBUb2xlcmF0ZSBOb2RlTGlzdCBwcm9wZXJ0aWVzIChJRTogXCJsZW5ndGhcIjsgU2FmYXJpOiA8bnVtYmVyPikgbWF0Y2hpbmcgZWxlbWVudHMgYnkgaWRcblx0XHRcdGZvciAoIDsgaSAhPT0gbGVuICYmIChlbGVtID0gZWxlbXNbaV0pICE9IG51bGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBieUVsZW1lbnQgJiYgZWxlbSApIHtcblx0XHRcdFx0XHRqID0gMDtcblx0XHRcdFx0XHRpZiAoICFjb250ZXh0ICYmIGVsZW0ub3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnQgKSB7XG5cdFx0XHRcdFx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHRcdFx0XHRcdFx0eG1sID0gIWRvY3VtZW50SXNIVE1MO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR3aGlsZSAoIChtYXRjaGVyID0gZWxlbWVudE1hdGNoZXJzW2orK10pICkge1xuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0IHx8IGRvY3VtZW50LCB4bWwpICkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRcdFx0ZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHJhY2sgdW5tYXRjaGVkIGVsZW1lbnRzIGZvciBzZXQgZmlsdGVyc1xuXHRcdFx0XHRpZiAoIGJ5U2V0ICkge1xuXHRcdFx0XHRcdC8vIFRoZXkgd2lsbCBoYXZlIGdvbmUgdGhyb3VnaCBhbGwgcG9zc2libGUgbWF0Y2hlcnNcblx0XHRcdFx0XHRpZiAoIChlbGVtID0gIW1hdGNoZXIgJiYgZWxlbSkgKSB7XG5cdFx0XHRcdFx0XHRtYXRjaGVkQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBMZW5ndGhlbiB0aGUgYXJyYXkgZm9yIGV2ZXJ5IGVsZW1lbnQsIG1hdGNoZWQgb3Igbm90XG5cdFx0XHRcdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0XHRcdFx0dW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gYGlgIGlzIG5vdyB0aGUgY291bnQgb2YgZWxlbWVudHMgdmlzaXRlZCBhYm92ZSwgYW5kIGFkZGluZyBpdCB0byBgbWF0Y2hlZENvdW50YFxuXHRcdFx0Ly8gbWFrZXMgdGhlIGxhdHRlciBub25uZWdhdGl2ZS5cblx0XHRcdG1hdGNoZWRDb3VudCArPSBpO1xuXG5cdFx0XHQvLyBBcHBseSBzZXQgZmlsdGVycyB0byB1bm1hdGNoZWQgZWxlbWVudHNcblx0XHRcdC8vIE5PVEU6IFRoaXMgY2FuIGJlIHNraXBwZWQgaWYgdGhlcmUgYXJlIG5vIHVubWF0Y2hlZCBlbGVtZW50cyAoaS5lLiwgYG1hdGNoZWRDb3VudGBcblx0XHRcdC8vIGVxdWFscyBgaWApLCB1bmxlc3Mgd2UgZGlkbid0IHZpc2l0IF9hbnlfIGVsZW1lbnRzIGluIHRoZSBhYm92ZSBsb29wIGJlY2F1c2Ugd2UgaGF2ZVxuXHRcdFx0Ly8gbm8gZWxlbWVudCBtYXRjaGVycyBhbmQgbm8gc2VlZC5cblx0XHRcdC8vIEluY3JlbWVudGluZyBhbiBpbml0aWFsbHktc3RyaW5nIFwiMFwiIGBpYCBhbGxvd3MgYGlgIHRvIHJlbWFpbiBhIHN0cmluZyBvbmx5IGluIHRoYXRcblx0XHRcdC8vIGNhc2UsIHdoaWNoIHdpbGwgcmVzdWx0IGluIGEgXCIwMFwiIGBtYXRjaGVkQ291bnRgIHRoYXQgZGlmZmVycyBmcm9tIGBpYCBidXQgaXMgYWxzb1xuXHRcdFx0Ly8gbnVtZXJpY2FsbHkgemVyby5cblx0XHRcdGlmICggYnlTZXQgJiYgaSAhPT0gbWF0Y2hlZENvdW50ICkge1xuXHRcdFx0XHRqID0gMDtcblx0XHRcdFx0d2hpbGUgKCAobWF0Y2hlciA9IHNldE1hdGNoZXJzW2orK10pICkge1xuXHRcdFx0XHRcdG1hdGNoZXIoIHVubWF0Y2hlZCwgc2V0TWF0Y2hlZCwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRcdFx0Ly8gUmVpbnRlZ3JhdGUgZWxlbWVudCBtYXRjaGVzIHRvIGVsaW1pbmF0ZSB0aGUgbmVlZCBmb3Igc29ydGluZ1xuXHRcdFx0XHRcdGlmICggbWF0Y2hlZENvdW50ID4gMCApIHtcblx0XHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoICEodW5tYXRjaGVkW2ldIHx8IHNldE1hdGNoZWRbaV0pICkge1xuXHRcdFx0XHRcdFx0XHRcdHNldE1hdGNoZWRbaV0gPSBwb3AuY2FsbCggcmVzdWx0cyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRGlzY2FyZCBpbmRleCBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gZ2V0IG9ubHkgYWN0dWFsIG1hdGNoZXNcblx0XHRcdFx0XHRzZXRNYXRjaGVkID0gY29uZGVuc2UoIHNldE1hdGNoZWQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCBtYXRjaGVzIHRvIHJlc3VsdHNcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2V0TWF0Y2hlZCApO1xuXG5cdFx0XHRcdC8vIFNlZWRsZXNzIHNldCBtYXRjaGVzIHN1Y2NlZWRpbmcgbXVsdGlwbGUgc3VjY2Vzc2Z1bCBtYXRjaGVycyBzdGlwdWxhdGUgc29ydGluZ1xuXHRcdFx0XHRpZiAoIG91dGVybW9zdCAmJiAhc2VlZCAmJiBzZXRNYXRjaGVkLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHQoIG1hdGNoZWRDb3VudCArIHNldE1hdGNoZXJzLmxlbmd0aCApID4gMSApIHtcblxuXHRcdFx0XHRcdFNpenpsZS51bmlxdWVTb3J0KCByZXN1bHRzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gT3ZlcnJpZGUgbWFuaXB1bGF0aW9uIG9mIGdsb2JhbHMgYnkgbmVzdGVkIG1hdGNoZXJzXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0ZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG5cdFx0XHRcdG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0QmFja3VwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdW5tYXRjaGVkO1xuXHRcdH07XG5cblx0cmV0dXJuIGJ5U2V0ID9cblx0XHRtYXJrRnVuY3Rpb24oIHN1cGVyTWF0Y2hlciApIDpcblx0XHRzdXBlck1hdGNoZXI7XG59XG5cbmNvbXBpbGUgPSBTaXp6bGUuY29tcGlsZSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgbWF0Y2ggLyogSW50ZXJuYWwgVXNlIE9ubHkgKi8gKSB7XG5cdHZhciBpLFxuXHRcdHNldE1hdGNoZXJzID0gW10sXG5cdFx0ZWxlbWVudE1hdGNoZXJzID0gW10sXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZVsgc2VsZWN0b3IgKyBcIiBcIiBdO1xuXG5cdGlmICggIWNhY2hlZCApIHtcblx0XHQvLyBHZW5lcmF0ZSBhIGZ1bmN0aW9uIG9mIHJlY3Vyc2l2ZSBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBjaGVjayBlYWNoIGVsZW1lbnRcblx0XHRpZiAoICFtYXRjaCApIHtcblx0XHRcdG1hdGNoID0gdG9rZW5pemUoIHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdGkgPSBtYXRjaC5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRjYWNoZWQgPSBtYXRjaGVyRnJvbVRva2VucyggbWF0Y2hbaV0gKTtcblx0XHRcdGlmICggY2FjaGVkWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdHNldE1hdGNoZXJzLnB1c2goIGNhY2hlZCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudE1hdGNoZXJzLnB1c2goIGNhY2hlZCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhY2hlIHRoZSBjb21waWxlZCBmdW5jdGlvblxuXHRcdGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGUoIHNlbGVjdG9yLCBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSApO1xuXG5cdFx0Ly8gU2F2ZSBzZWxlY3RvciBhbmQgdG9rZW5pemF0aW9uXG5cdFx0Y2FjaGVkLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cdH1cblx0cmV0dXJuIGNhY2hlZDtcbn07XG5cbi8qKlxuICogQSBsb3ctbGV2ZWwgc2VsZWN0aW9uIGZ1bmN0aW9uIHRoYXQgd29ya3Mgd2l0aCBTaXp6bGUncyBjb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yIEEgc2VsZWN0b3Igb3IgYSBwcmUtY29tcGlsZWRcbiAqICBzZWxlY3RvciBmdW5jdGlvbiBidWlsdCB3aXRoIFNpenpsZS5jb21waWxlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHRzXVxuICogQHBhcmFtIHtBcnJheX0gW3NlZWRdIEEgc2V0IG9mIGVsZW1lbnRzIHRvIG1hdGNoIGFnYWluc3RcbiAqL1xuc2VsZWN0ID0gU2l6emxlLnNlbGVjdCA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApIHtcblx0dmFyIGksIHRva2VucywgdG9rZW4sIHR5cGUsIGZpbmQsXG5cdFx0Y29tcGlsZWQgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBzZWxlY3Rvcixcblx0XHRtYXRjaCA9ICFzZWVkICYmIHRva2VuaXplKCAoc2VsZWN0b3IgPSBjb21waWxlZC5zZWxlY3RvciB8fCBzZWxlY3RvcikgKTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBUcnkgdG8gbWluaW1pemUgb3BlcmF0aW9ucyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBzZWxlY3RvciBpbiB0aGUgbGlzdCBhbmQgbm8gc2VlZFxuXHQvLyAodGhlIGxhdHRlciBvZiB3aGljaCBndWFyYW50ZWVzIHVzIGNvbnRleHQpXG5cdGlmICggbWF0Y2gubGVuZ3RoID09PSAxICkge1xuXG5cdFx0Ly8gUmVkdWNlIGNvbnRleHQgaWYgdGhlIGxlYWRpbmcgY29tcG91bmQgc2VsZWN0b3IgaXMgYW4gSURcblx0XHR0b2tlbnMgPSBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwICk7XG5cdFx0aWYgKCB0b2tlbnMubGVuZ3RoID4gMiAmJiAodG9rZW4gPSB0b2tlbnNbMF0pLnR5cGUgPT09IFwiSURcIiAmJlxuXHRcdFx0XHRjb250ZXh0Lm5vZGVUeXBlID09PSA5ICYmIGRvY3VtZW50SXNIVE1MICYmIEV4cHIucmVsYXRpdmVbIHRva2Vuc1sxXS50eXBlIF0gKSB7XG5cblx0XHRcdGNvbnRleHQgPSAoIEV4cHIuZmluZFtcIklEXCJdKCB0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpLCBjb250ZXh0ICkgfHwgW10gKVswXTtcblx0XHRcdGlmICggIWNvbnRleHQgKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXG5cdFx0XHQvLyBQcmVjb21waWxlZCBtYXRjaGVycyB3aWxsIHN0aWxsIHZlcmlmeSBhbmNlc3RyeSwgc28gc3RlcCB1cCBhIGxldmVsXG5cdFx0XHR9IGVsc2UgaWYgKCBjb21waWxlZCApIHtcblx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQucGFyZW50Tm9kZTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSggdG9rZW5zLnNoaWZ0KCkudmFsdWUubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmV0Y2ggYSBzZWVkIHNldCBmb3IgcmlnaHQtdG8tbGVmdCBtYXRjaGluZ1xuXHRcdGkgPSBtYXRjaEV4cHJbXCJuZWVkc0NvbnRleHRcIl0udGVzdCggc2VsZWN0b3IgKSA/IDAgOiB0b2tlbnMubGVuZ3RoO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG9rZW4gPSB0b2tlbnNbaV07XG5cblx0XHRcdC8vIEFib3J0IGlmIHdlIGhpdCBhIGNvbWJpbmF0b3Jcblx0XHRcdGlmICggRXhwci5yZWxhdGl2ZVsgKHR5cGUgPSB0b2tlbi50eXBlKSBdICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICggKGZpbmQgPSBFeHByLmZpbmRbIHR5cGUgXSkgKSB7XG5cdFx0XHRcdC8vIFNlYXJjaCwgZXhwYW5kaW5nIGNvbnRleHQgZm9yIGxlYWRpbmcgc2libGluZyBjb21iaW5hdG9yc1xuXHRcdFx0XHRpZiAoIChzZWVkID0gZmluZChcblx0XHRcdFx0XHR0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICksXG5cdFx0XHRcdFx0cnNpYmxpbmcudGVzdCggdG9rZW5zWzBdLnR5cGUgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHRcdFx0XHQpKSApIHtcblxuXHRcdFx0XHRcdC8vIElmIHNlZWQgaXMgZW1wdHkgb3Igbm8gdG9rZW5zIHJlbWFpbiwgd2UgY2FuIHJldHVybiBlYXJseVxuXHRcdFx0XHRcdHRva2Vucy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdFx0XHRzZWxlY3RvciA9IHNlZWQubGVuZ3RoICYmIHRvU2VsZWN0b3IoIHRva2VucyApO1xuXHRcdFx0XHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2VlZCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcblx0Ly8gUHJvdmlkZSBgbWF0Y2hgIHRvIGF2b2lkIHJldG9rZW5pemF0aW9uIGlmIHdlIG1vZGlmaWVkIHRoZSBzZWxlY3RvciBhYm92ZVxuXHQoIGNvbXBpbGVkIHx8IGNvbXBpbGUoIHNlbGVjdG9yLCBtYXRjaCApICkoXG5cdFx0c2VlZCxcblx0XHRjb250ZXh0LFxuXHRcdCFkb2N1bWVudElzSFRNTCxcblx0XHRyZXN1bHRzLFxuXHRcdCFjb250ZXh0IHx8IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcblx0KTtcblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG4vLyBPbmUtdGltZSBhc3NpZ25tZW50c1xuXG4vLyBTb3J0IHN0YWJpbGl0eVxuc3VwcG9ydC5zb3J0U3RhYmxlID0gZXhwYW5kby5zcGxpdChcIlwiKS5zb3J0KCBzb3J0T3JkZXIgKS5qb2luKFwiXCIpID09PSBleHBhbmRvO1xuXG4vLyBTdXBwb3J0OiBDaHJvbWUgMTQtMzUrXG4vLyBBbHdheXMgYXNzdW1lIGR1cGxpY2F0ZXMgaWYgdGhleSBhcmVuJ3QgcGFzc2VkIHRvIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG5zdXBwb3J0LmRldGVjdER1cGxpY2F0ZXMgPSAhIWhhc0R1cGxpY2F0ZTtcblxuLy8gSW5pdGlhbGl6ZSBhZ2FpbnN0IHRoZSBkZWZhdWx0IGRvY3VtZW50XG5zZXREb2N1bWVudCgpO1xuXG4vLyBTdXBwb3J0OiBXZWJraXQ8NTM3LjMyIC0gU2FmYXJpIDYuMC4zL0Nocm9tZSAyNSAoZml4ZWQgaW4gQ2hyb21lIDI3KVxuLy8gRGV0YWNoZWQgbm9kZXMgY29uZm91bmRpbmdseSBmb2xsb3cgKmVhY2ggb3RoZXIqXG5zdXBwb3J0LnNvcnREZXRhY2hlZCA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdC8vIFNob3VsZCByZXR1cm4gMSwgYnV0IHJldHVybnMgNCAoZm9sbG93aW5nKVxuXHRyZXR1cm4gZWwuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSApICYgMTtcbn0pO1xuXG4vLyBTdXBwb3J0OiBJRTw4XG4vLyBQcmV2ZW50IGF0dHJpYnV0ZS9wcm9wZXJ0eSBcImludGVycG9sYXRpb25cIlxuLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNjQyOSUyOFZTLjg1JTI5LmFzcHhcbmlmICggIWFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdGVsLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+PC9hPlwiO1xuXHRyZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpID09PSBcIiNcIiA7XG59KSApIHtcblx0YWRkSGFuZGxlKCBcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIiwgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdGlmICggIWlzWE1MICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lLCBuYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwidHlwZVwiID8gMSA6IDIgKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vLyBTdXBwb3J0OiBJRTw5XG4vLyBVc2UgZGVmYXVsdFZhbHVlIGluIHBsYWNlIG9mIGdldEF0dHJpYnV0ZShcInZhbHVlXCIpXG5pZiAoICFzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdGVsLmlubmVySFRNTCA9IFwiPGlucHV0Lz5cIjtcblx0ZWwuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiwgXCJcIiApO1xuXHRyZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBcIlwiO1xufSkgKSB7XG5cdGFkZEhhbmRsZSggXCJ2YWx1ZVwiLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0aWYgKCAhaXNYTUwgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHR9KTtcbn1cblxuLy8gU3VwcG9ydDogSUU8OVxuLy8gVXNlIGdldEF0dHJpYnV0ZU5vZGUgdG8gZmV0Y2ggYm9vbGVhbnMgd2hlbiBnZXRBdHRyaWJ1dGUgbGllc1xuaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0cmV0dXJuIGVsLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpID09IG51bGw7XG59KSApIHtcblx0YWRkSGFuZGxlKCBib29sZWFucywgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdHZhciB2YWw7XG5cdFx0aWYgKCAhaXNYTUwgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbVsgbmFtZSBdID09PSB0cnVlID8gbmFtZS50b0xvd2VyQ2FzZSgpIDpcblx0XHRcdFx0XHQodmFsID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKCBuYW1lICkpICYmIHZhbC5zcGVjaWZpZWQgP1xuXHRcdFx0XHRcdHZhbC52YWx1ZSA6XG5cdFx0XHRcdG51bGw7XG5cdFx0fVxuXHR9KTtcbn1cblxucmV0dXJuIFNpenpsZTtcblxufSkoIHdpbmRvdyApO1xuXG5cblxualF1ZXJ5LmZpbmQgPSBTaXp6bGU7XG5qUXVlcnkuZXhwciA9IFNpenpsZS5zZWxlY3RvcnM7XG5cbi8vIERlcHJlY2F0ZWRcbmpRdWVyeS5leHByWyBcIjpcIiBdID0galF1ZXJ5LmV4cHIucHNldWRvcztcbmpRdWVyeS51bmlxdWVTb3J0ID0galF1ZXJ5LnVuaXF1ZSA9IFNpenpsZS51bmlxdWVTb3J0O1xualF1ZXJ5LnRleHQgPSBTaXp6bGUuZ2V0VGV4dDtcbmpRdWVyeS5pc1hNTERvYyA9IFNpenpsZS5pc1hNTDtcbmpRdWVyeS5jb250YWlucyA9IFNpenpsZS5jb250YWlucztcbmpRdWVyeS5lc2NhcGVTZWxlY3RvciA9IFNpenpsZS5lc2NhcGU7XG5cblxuXG5cbnZhciBkaXIgPSBmdW5jdGlvbiggZWxlbSwgZGlyLCB1bnRpbCApIHtcblx0dmFyIG1hdGNoZWQgPSBbXSxcblx0XHR0cnVuY2F0ZSA9IHVudGlsICE9PSB1bmRlZmluZWQ7XG5cblx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICYmIGVsZW0ubm9kZVR5cGUgIT09IDkgKSB7XG5cdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0aWYgKCB0cnVuY2F0ZSAmJiBqUXVlcnkoIGVsZW0gKS5pcyggdW50aWwgKSApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG1hdGNoZWQ7XG59O1xuXG5cbnZhciBzaWJsaW5ncyA9IGZ1bmN0aW9uKCBuLCBlbGVtICkge1xuXHR2YXIgbWF0Y2hlZCA9IFtdO1xuXG5cdGZvciAoIDsgbjsgbiA9IG4ubmV4dFNpYmxpbmcgKSB7XG5cdFx0aWYgKCBuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IGVsZW0gKSB7XG5cdFx0XHRtYXRjaGVkLnB1c2goIG4gKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWF0Y2hlZDtcbn07XG5cblxudmFyIHJuZWVkc0NvbnRleHQgPSBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7XG5cblxuXG5mdW5jdGlvbiBub2RlTmFtZSggZWxlbSwgbmFtZSApIHtcblxuICByZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcblxufTtcbnZhciByc2luZ2xlVGFnID0gKCAvXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSApO1xuXG5cblxuLy8gSW1wbGVtZW50IHRoZSBpZGVudGljYWwgZnVuY3Rpb25hbGl0eSBmb3IgZmlsdGVyIGFuZCBub3RcbmZ1bmN0aW9uIHdpbm5vdyggZWxlbWVudHMsIHF1YWxpZmllciwgbm90ICkge1xuXHRpZiAoIGlzRnVuY3Rpb24oIHF1YWxpZmllciApICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuICEhcXVhbGlmaWVyLmNhbGwoIGVsZW0sIGksIGVsZW0gKSAhPT0gbm90O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIFNpbmdsZSBlbGVtZW50XG5cdGlmICggcXVhbGlmaWVyLm5vZGVUeXBlICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggZWxlbSA9PT0gcXVhbGlmaWVyICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBBcnJheWxpa2Ugb2YgZWxlbWVudHMgKGpRdWVyeSwgYXJndW1lbnRzLCBBcnJheSlcblx0aWYgKCB0eXBlb2YgcXVhbGlmaWVyICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggaW5kZXhPZi5jYWxsKCBxdWFsaWZpZXIsIGVsZW0gKSA+IC0xICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBGaWx0ZXJlZCBkaXJlY3RseSBmb3IgYm90aCBzaW1wbGUgYW5kIGNvbXBsZXggc2VsZWN0b3JzXG5cdHJldHVybiBqUXVlcnkuZmlsdGVyKCBxdWFsaWZpZXIsIGVsZW1lbnRzLCBub3QgKTtcbn1cblxualF1ZXJ5LmZpbHRlciA9IGZ1bmN0aW9uKCBleHByLCBlbGVtcywgbm90ICkge1xuXHR2YXIgZWxlbSA9IGVsZW1zWyAwIF07XG5cblx0aWYgKCBub3QgKSB7XG5cdFx0ZXhwciA9IFwiOm5vdChcIiArIGV4cHIgKyBcIilcIjtcblx0fVxuXG5cdGlmICggZWxlbXMubGVuZ3RoID09PSAxICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggZWxlbSwgZXhwciApID8gWyBlbGVtIF0gOiBbXTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzKCBleHByLCBqUXVlcnkuZ3JlcCggZWxlbXMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBlbGVtLm5vZGVUeXBlID09PSAxO1xuXHR9ICkgKTtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZmluZDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBpLCByZXQsXG5cdFx0XHRsZW4gPSB0aGlzLmxlbmd0aCxcblx0XHRcdHNlbGYgPSB0aGlzO1xuXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGpRdWVyeSggc2VsZWN0b3IgKS5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRcdGlmICggalF1ZXJ5LmNvbnRhaW5zKCBzZWxmWyBpIF0sIHRoaXMgKSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApICk7XG5cdFx0fVxuXG5cdFx0cmV0ID0gdGhpcy5wdXNoU3RhY2soIFtdICk7XG5cblx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0alF1ZXJ5LmZpbmQoIHNlbGVjdG9yLCBzZWxmWyBpIF0sIHJldCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBsZW4gPiAxID8galF1ZXJ5LnVuaXF1ZVNvcnQoIHJldCApIDogcmV0O1xuXHR9LFxuXHRmaWx0ZXI6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHdpbm5vdyggdGhpcywgc2VsZWN0b3IgfHwgW10sIGZhbHNlICkgKTtcblx0fSxcblx0bm90OiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCB3aW5ub3coIHRoaXMsIHNlbGVjdG9yIHx8IFtdLCB0cnVlICkgKTtcblx0fSxcblx0aXM6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gISF3aW5ub3coXG5cdFx0XHR0aGlzLFxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgcG9zaXRpb25hbC9yZWxhdGl2ZSBzZWxlY3RvciwgY2hlY2sgbWVtYmVyc2hpcCBpbiB0aGUgcmV0dXJuZWQgc2V0XG5cdFx0XHQvLyBzbyAkKFwicDpmaXJzdFwiKS5pcyhcInA6bGFzdFwiKSB3b24ndCByZXR1cm4gdHJ1ZSBmb3IgYSBkb2Mgd2l0aCB0d28gXCJwXCIuXG5cdFx0XHR0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgJiYgcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvciApID9cblx0XHRcdFx0alF1ZXJ5KCBzZWxlY3RvciApIDpcblx0XHRcdFx0c2VsZWN0b3IgfHwgW10sXG5cdFx0XHRmYWxzZVxuXHRcdCkubGVuZ3RoO1xuXHR9XG59ICk7XG5cblxuLy8gSW5pdGlhbGl6ZSBhIGpRdWVyeSBvYmplY3RcblxuXG4vLyBBIGNlbnRyYWwgcmVmZXJlbmNlIHRvIHRoZSByb290IGpRdWVyeShkb2N1bWVudClcbnZhciByb290alF1ZXJ5LFxuXG5cdC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG5cdC8vIFByaW9yaXRpemUgI2lkIG92ZXIgPHRhZz4gdG8gYXZvaWQgWFNTIHZpYSBsb2NhdGlvbi5oYXNoICgjOTUyMSlcblx0Ly8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKCMxMTI5MDogbXVzdCBzdGFydCB3aXRoIDwpXG5cdC8vIFNob3J0Y3V0IHNpbXBsZSAjaWQgY2FzZSBmb3Igc3BlZWRcblx0cnF1aWNrRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvLFxuXG5cdGluaXQgPSBqUXVlcnkuZm4uaW5pdCA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCwgcm9vdCApIHtcblx0XHR2YXIgbWF0Y2gsIGVsZW07XG5cblx0XHQvLyBIQU5ETEU6ICQoXCJcIiksICQobnVsbCksICQodW5kZWZpbmVkKSwgJChmYWxzZSlcblx0XHRpZiAoICFzZWxlY3RvciApIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8vIE1ldGhvZCBpbml0KCkgYWNjZXB0cyBhbiBhbHRlcm5hdGUgcm9vdGpRdWVyeVxuXHRcdC8vIHNvIG1pZ3JhdGUgY2FuIHN1cHBvcnQgalF1ZXJ5LnN1YiAoZ2gtMjEwMSlcblx0XHRyb290ID0gcm9vdCB8fCByb290alF1ZXJ5O1xuXG5cdFx0Ly8gSGFuZGxlIEhUTUwgc3RyaW5nc1xuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0aWYgKCBzZWxlY3RvclsgMCBdID09PSBcIjxcIiAmJlxuXHRcdFx0XHRzZWxlY3Rvclsgc2VsZWN0b3IubGVuZ3RoIC0gMSBdID09PSBcIj5cIiAmJlxuXHRcdFx0XHRzZWxlY3Rvci5sZW5ndGggPj0gMyApIHtcblxuXHRcdFx0XHQvLyBBc3N1bWUgdGhhdCBzdHJpbmdzIHRoYXQgc3RhcnQgYW5kIGVuZCB3aXRoIDw+IGFyZSBIVE1MIGFuZCBza2lwIHRoZSByZWdleCBjaGVja1xuXHRcdFx0XHRtYXRjaCA9IFsgbnVsbCwgc2VsZWN0b3IsIG51bGwgXTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1hdGNoIGh0bWwgb3IgbWFrZSBzdXJlIG5vIGNvbnRleHQgaXMgc3BlY2lmaWVkIGZvciAjaWRcblx0XHRcdGlmICggbWF0Y2ggJiYgKCBtYXRjaFsgMSBdIHx8ICFjb250ZXh0ICkgKSB7XG5cblx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwpIC0+ICQoYXJyYXkpXG5cdFx0XHRcdGlmICggbWF0Y2hbIDEgXSApIHtcblx0XHRcdFx0XHRjb250ZXh0ID0gY29udGV4dCBpbnN0YW5jZW9mIGpRdWVyeSA/IGNvbnRleHRbIDAgXSA6IGNvbnRleHQ7XG5cblx0XHRcdFx0XHQvLyBPcHRpb24gdG8gcnVuIHNjcmlwdHMgaXMgdHJ1ZSBmb3IgYmFjay1jb21wYXRcblx0XHRcdFx0XHQvLyBJbnRlbnRpb25hbGx5IGxldCB0aGUgZXJyb3IgYmUgdGhyb3duIGlmIHBhcnNlSFRNTCBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRcdGpRdWVyeS5tZXJnZSggdGhpcywgalF1ZXJ5LnBhcnNlSFRNTChcblx0XHRcdFx0XHRcdG1hdGNoWyAxIF0sXG5cdFx0XHRcdFx0XHRjb250ZXh0ICYmIGNvbnRleHQubm9kZVR5cGUgPyBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCA6IGRvY3VtZW50LFxuXHRcdFx0XHRcdFx0dHJ1ZVxuXHRcdFx0XHRcdCkgKTtcblxuXHRcdFx0XHRcdC8vIEhBTkRMRTogJChodG1sLCBwcm9wcylcblx0XHRcdFx0XHRpZiAoIHJzaW5nbGVUYWcudGVzdCggbWF0Y2hbIDEgXSApICYmIGpRdWVyeS5pc1BsYWluT2JqZWN0KCBjb250ZXh0ICkgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCBtYXRjaCBpbiBjb250ZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFByb3BlcnRpZXMgb2YgY29udGV4dCBhcmUgY2FsbGVkIGFzIG1ldGhvZHMgaWYgcG9zc2libGVcblx0XHRcdFx0XHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCB0aGlzWyBtYXRjaCBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpc1sgbWF0Y2ggXSggY29udGV4dFsgbWF0Y2ggXSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vIC4uLmFuZCBvdGhlcndpc2Ugc2V0IGFzIGF0dHJpYnV0ZXNcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmF0dHIoIG1hdGNoLCBjb250ZXh0WyBtYXRjaCBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoI2lkKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggbWF0Y2hbIDIgXSApO1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtICkge1xuXG5cdFx0XHRcdFx0XHQvLyBJbmplY3QgdGhlIGVsZW1lbnQgZGlyZWN0bHkgaW50byB0aGUgalF1ZXJ5IG9iamVjdFxuXHRcdFx0XHRcdFx0dGhpc1sgMCBdID0gZWxlbTtcblx0XHRcdFx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSEFORExFOiAkKGV4cHIsICQoLi4uKSlcblx0XHRcdH0gZWxzZSBpZiAoICFjb250ZXh0IHx8IGNvbnRleHQuanF1ZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm4gKCBjb250ZXh0IHx8IHJvb3QgKS5maW5kKCBzZWxlY3RvciApO1xuXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgY29udGV4dClcblx0XHRcdC8vICh3aGljaCBpcyBqdXN0IGVxdWl2YWxlbnQgdG86ICQoY29udGV4dCkuZmluZChleHByKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IoIGNvbnRleHQgKS5maW5kKCBzZWxlY3RvciApO1xuXHRcdFx0fVxuXG5cdFx0Ly8gSEFORExFOiAkKERPTUVsZW1lbnQpXG5cdFx0fSBlbHNlIGlmICggc2VsZWN0b3Iubm9kZVR5cGUgKSB7XG5cdFx0XHR0aGlzWyAwIF0gPSBzZWxlY3Rvcjtcblx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0Ly8gSEFORExFOiAkKGZ1bmN0aW9uKVxuXHRcdC8vIFNob3J0Y3V0IGZvciBkb2N1bWVudCByZWFkeVxuXHRcdH0gZWxzZSBpZiAoIGlzRnVuY3Rpb24oIHNlbGVjdG9yICkgKSB7XG5cdFx0XHRyZXR1cm4gcm9vdC5yZWFkeSAhPT0gdW5kZWZpbmVkID9cblx0XHRcdFx0cm9vdC5yZWFkeSggc2VsZWN0b3IgKSA6XG5cblx0XHRcdFx0Ly8gRXhlY3V0ZSBpbW1lZGlhdGVseSBpZiByZWFkeSBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRzZWxlY3RvciggalF1ZXJ5ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5tYWtlQXJyYXkoIHNlbGVjdG9yLCB0aGlzICk7XG5cdH07XG5cbi8vIEdpdmUgdGhlIGluaXQgZnVuY3Rpb24gdGhlIGpRdWVyeSBwcm90b3R5cGUgZm9yIGxhdGVyIGluc3RhbnRpYXRpb25cbmluaXQucHJvdG90eXBlID0galF1ZXJ5LmZuO1xuXG4vLyBJbml0aWFsaXplIGNlbnRyYWwgcmVmZXJlbmNlXG5yb290alF1ZXJ5ID0galF1ZXJ5KCBkb2N1bWVudCApO1xuXG5cbnZhciBycGFyZW50c3ByZXYgPSAvXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxcblxuXHQvLyBNZXRob2RzIGd1YXJhbnRlZWQgdG8gcHJvZHVjZSBhIHVuaXF1ZSBzZXQgd2hlbiBzdGFydGluZyBmcm9tIGEgdW5pcXVlIHNldFxuXHRndWFyYW50ZWVkVW5pcXVlID0ge1xuXHRcdGNoaWxkcmVuOiB0cnVlLFxuXHRcdGNvbnRlbnRzOiB0cnVlLFxuXHRcdG5leHQ6IHRydWUsXG5cdFx0cHJldjogdHJ1ZVxuXHR9O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGhhczogZnVuY3Rpb24oIHRhcmdldCApIHtcblx0XHR2YXIgdGFyZ2V0cyA9IGpRdWVyeSggdGFyZ2V0LCB0aGlzICksXG5cdFx0XHRsID0gdGFyZ2V0cy5sZW5ndGg7XG5cblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggdGhpcywgdGFyZ2V0c1sgaSBdICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0Y2xvc2VzdDogZnVuY3Rpb24oIHNlbGVjdG9ycywgY29udGV4dCApIHtcblx0XHR2YXIgY3VyLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRtYXRjaGVkID0gW10sXG5cdFx0XHR0YXJnZXRzID0gdHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBqUXVlcnkoIHNlbGVjdG9ycyApO1xuXG5cdFx0Ly8gUG9zaXRpb25hbCBzZWxlY3RvcnMgbmV2ZXIgbWF0Y2gsIHNpbmNlIHRoZXJlJ3Mgbm8gX3NlbGVjdGlvbl8gY29udGV4dFxuXHRcdGlmICggIXJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3JzICkgKSB7XG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZvciAoIGN1ciA9IHRoaXNbIGkgXTsgY3VyICYmIGN1ciAhPT0gY29udGV4dDsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cblx0XHRcdFx0XHQvLyBBbHdheXMgc2tpcCBkb2N1bWVudCBmcmFnbWVudHNcblx0XHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA8IDExICYmICggdGFyZ2V0cyA/XG5cdFx0XHRcdFx0XHR0YXJnZXRzLmluZGV4KCBjdXIgKSA+IC0xIDpcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcGFzcyBub24tZWxlbWVudHMgdG8gU2l6emxlXG5cdFx0XHRcdFx0XHRjdXIubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0XHRcdFx0alF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBjdXIsIHNlbGVjdG9ycyApICkgKSB7XG5cblx0XHRcdFx0XHRcdG1hdGNoZWQucHVzaCggY3VyICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIG1hdGNoZWQubGVuZ3RoID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KCBtYXRjaGVkICkgOiBtYXRjaGVkICk7XG5cdH0sXG5cblx0Ly8gRGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHdpdGhpbiB0aGUgc2V0XG5cdGluZGV4OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE5vIGFyZ3VtZW50LCByZXR1cm4gaW5kZXggaW4gcGFyZW50XG5cdFx0aWYgKCAhZWxlbSApIHtcblx0XHRcdHJldHVybiAoIHRoaXNbIDAgXSAmJiB0aGlzWyAwIF0ucGFyZW50Tm9kZSApID8gdGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGggOiAtMTtcblx0XHR9XG5cblx0XHQvLyBJbmRleCBpbiBzZWxlY3RvclxuXHRcdGlmICggdHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXhPZi5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdGhpc1sgMCBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gTG9jYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVzaXJlZCBlbGVtZW50XG5cdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggdGhpcyxcblxuXHRcdFx0Ly8gSWYgaXQgcmVjZWl2ZXMgYSBqUXVlcnkgb2JqZWN0LCB0aGUgZmlyc3QgZWxlbWVudCBpcyB1c2VkXG5cdFx0XHRlbGVtLmpxdWVyeSA/IGVsZW1bIDAgXSA6IGVsZW1cblx0XHQpO1xuXHR9LFxuXG5cdGFkZDogZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0ICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayhcblx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMuZ2V0KCksIGpRdWVyeSggc2VsZWN0b3IsIGNvbnRleHQgKSApXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRhZGRCYWNrOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkKCBzZWxlY3RvciA9PSBudWxsID9cblx0XHRcdHRoaXMucHJldk9iamVjdCA6IHRoaXMucHJldk9iamVjdC5maWx0ZXIoIHNlbGVjdG9yIClcblx0XHQpO1xuXHR9XG59ICk7XG5cbmZ1bmN0aW9uIHNpYmxpbmcoIGN1ciwgZGlyICkge1xuXHR3aGlsZSAoICggY3VyID0gY3VyWyBkaXIgXSApICYmIGN1ci5ub2RlVHlwZSAhPT0gMSApIHt9XG5cdHJldHVybiBjdXI7XG59XG5cbmpRdWVyeS5lYWNoKCB7XG5cdHBhcmVudDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRyZXR1cm4gcGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMTEgPyBwYXJlbnQgOiBudWxsO1xuXHR9LFxuXHRwYXJlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiApO1xuXHR9LFxuXHRwYXJlbnRzVW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiwgdW50aWwgKTtcblx0fSxcblx0bmV4dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuXHR9LFxuXHRuZXh0QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIgKTtcblx0fSxcblx0cHJldkFsbDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuXHR9LFxuXHRuZXh0VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHByZXZVbnRpbDogZnVuY3Rpb24oIGVsZW0sIGksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHNpYmxpbmdzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZ3MoICggZWxlbS5wYXJlbnROb2RlIHx8IHt9ICkuZmlyc3RDaGlsZCwgZWxlbSApO1xuXHR9LFxuXHRjaGlsZHJlbjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmdzKCBlbGVtLmZpcnN0Q2hpbGQgKTtcblx0fSxcblx0Y29udGVudHM6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdGlmICggdHlwZW9mIGVsZW0uY29udGVudERvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uY29udGVudERvY3VtZW50O1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5LCBpT1MgNyBvbmx5LCBBbmRyb2lkIEJyb3dzZXIgPD00LjMgb25seVxuXHRcdC8vIFRyZWF0IHRoZSB0ZW1wbGF0ZSBlbGVtZW50IGFzIGEgcmVndWxhciBvbmUgaW4gYnJvd3NlcnMgdGhhdFxuXHRcdC8vIGRvbid0IHN1cHBvcnQgaXQuXG5cdFx0aWYgKCBub2RlTmFtZSggZWxlbSwgXCJ0ZW1wbGF0ZVwiICkgKSB7XG5cdFx0XHRlbGVtID0gZWxlbS5jb250ZW50IHx8IGVsZW07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5tZXJnZSggW10sIGVsZW0uY2hpbGROb2RlcyApO1xuXHR9XG59LCBmdW5jdGlvbiggbmFtZSwgZm4gKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHVudGlsLCBzZWxlY3RvciApIHtcblx0XHR2YXIgbWF0Y2hlZCA9IGpRdWVyeS5tYXAoIHRoaXMsIGZuLCB1bnRpbCApO1xuXG5cdFx0aWYgKCBuYW1lLnNsaWNlKCAtNSApICE9PSBcIlVudGlsXCIgKSB7XG5cdFx0XHRzZWxlY3RvciA9IHVudGlsO1xuXHRcdH1cblxuXHRcdGlmICggc2VsZWN0b3IgJiYgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0bWF0Y2hlZCA9IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCBtYXRjaGVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmxlbmd0aCA+IDEgKSB7XG5cblx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzXG5cdFx0XHRpZiAoICFndWFyYW50ZWVkVW5pcXVlWyBuYW1lIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KCBtYXRjaGVkICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldmVyc2Ugb3JkZXIgZm9yIHBhcmVudHMqIGFuZCBwcmV2LWRlcml2YXRpdmVzXG5cdFx0XHRpZiAoIHJwYXJlbnRzcHJldi50ZXN0KCBuYW1lICkgKSB7XG5cdFx0XHRcdG1hdGNoZWQucmV2ZXJzZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggbWF0Y2hlZCApO1xuXHR9O1xufSApO1xudmFyIHJub3RodG1sd2hpdGUgPSAoIC9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZyApO1xuXG5cblxuLy8gQ29udmVydCBTdHJpbmctZm9ybWF0dGVkIG9wdGlvbnMgaW50byBPYmplY3QtZm9ybWF0dGVkIG9uZXNcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSB7XG5cdHZhciBvYmplY3QgPSB7fTtcblx0alF1ZXJ5LmVhY2goIG9wdGlvbnMubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXSwgZnVuY3Rpb24oIF8sIGZsYWcgKSB7XG5cdFx0b2JqZWN0WyBmbGFnIF0gPSB0cnVlO1xuXHR9ICk7XG5cdHJldHVybiBvYmplY3Q7XG59XG5cbi8qXG4gKiBDcmVhdGUgYSBjYWxsYmFjayBsaXN0IHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAqXG4gKlx0b3B0aW9uczogYW4gb3B0aW9uYWwgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgb3B0aW9ucyB0aGF0IHdpbGwgY2hhbmdlIGhvd1xuICpcdFx0XHR0aGUgY2FsbGJhY2sgbGlzdCBiZWhhdmVzIG9yIGEgbW9yZSB0cmFkaXRpb25hbCBvcHRpb24gb2JqZWN0XG4gKlxuICogQnkgZGVmYXVsdCBhIGNhbGxiYWNrIGxpc3Qgd2lsbCBhY3QgbGlrZSBhbiBldmVudCBjYWxsYmFjayBsaXN0IGFuZCBjYW4gYmVcbiAqIFwiZmlyZWRcIiBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBQb3NzaWJsZSBvcHRpb25zOlxuICpcbiAqXHRvbmNlOlx0XHRcdHdpbGwgZW5zdXJlIHRoZSBjYWxsYmFjayBsaXN0IGNhbiBvbmx5IGJlIGZpcmVkIG9uY2UgKGxpa2UgYSBEZWZlcnJlZClcbiAqXG4gKlx0bWVtb3J5Olx0XHRcdHdpbGwga2VlcCB0cmFjayBvZiBwcmV2aW91cyB2YWx1ZXMgYW5kIHdpbGwgY2FsbCBhbnkgY2FsbGJhY2sgYWRkZWRcbiAqXHRcdFx0XHRcdGFmdGVyIHRoZSBsaXN0IGhhcyBiZWVuIGZpcmVkIHJpZ2h0IGF3YXkgd2l0aCB0aGUgbGF0ZXN0IFwibWVtb3JpemVkXCJcbiAqXHRcdFx0XHRcdHZhbHVlcyAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHR1bmlxdWU6XHRcdFx0d2lsbCBlbnN1cmUgYSBjYWxsYmFjayBjYW4gb25seSBiZSBhZGRlZCBvbmNlIChubyBkdXBsaWNhdGUgaW4gdGhlIGxpc3QpXG4gKlxuICpcdHN0b3BPbkZhbHNlOlx0aW50ZXJydXB0IGNhbGxpbmdzIHdoZW4gYSBjYWxsYmFjayByZXR1cm5zIGZhbHNlXG4gKlxuICovXG5qUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0Ly8gQ29udmVydCBvcHRpb25zIGZyb20gU3RyaW5nLWZvcm1hdHRlZCB0byBPYmplY3QtZm9ybWF0dGVkIGlmIG5lZWRlZFxuXHQvLyAod2UgY2hlY2sgaW4gY2FjaGUgZmlyc3QpXG5cdG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/XG5cdFx0Y3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIDpcblx0XHRqUXVlcnkuZXh0ZW5kKCB7fSwgb3B0aW9ucyApO1xuXG5cdHZhciAvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCBpcyBjdXJyZW50bHkgZmlyaW5nXG5cdFx0ZmlyaW5nLFxuXG5cdFx0Ly8gTGFzdCBmaXJlIHZhbHVlIGZvciBub24tZm9yZ2V0dGFibGUgbGlzdHNcblx0XHRtZW1vcnksXG5cblx0XHQvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCB3YXMgYWxyZWFkeSBmaXJlZFxuXHRcdGZpcmVkLFxuXG5cdFx0Ly8gRmxhZyB0byBwcmV2ZW50IGZpcmluZ1xuXHRcdGxvY2tlZCxcblxuXHRcdC8vIEFjdHVhbCBjYWxsYmFjayBsaXN0XG5cdFx0bGlzdCA9IFtdLFxuXG5cdFx0Ly8gUXVldWUgb2YgZXhlY3V0aW9uIGRhdGEgZm9yIHJlcGVhdGFibGUgbGlzdHNcblx0XHRxdWV1ZSA9IFtdLFxuXG5cdFx0Ly8gSW5kZXggb2YgY3VycmVudGx5IGZpcmluZyBjYWxsYmFjayAobW9kaWZpZWQgYnkgYWRkL3JlbW92ZSBhcyBuZWVkZWQpXG5cdFx0ZmlyaW5nSW5kZXggPSAtMSxcblxuXHRcdC8vIEZpcmUgY2FsbGJhY2tzXG5cdFx0ZmlyZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBFbmZvcmNlIHNpbmdsZS1maXJpbmdcblx0XHRcdGxvY2tlZCA9IGxvY2tlZCB8fCBvcHRpb25zLm9uY2U7XG5cblx0XHRcdC8vIEV4ZWN1dGUgY2FsbGJhY2tzIGZvciBhbGwgcGVuZGluZyBleGVjdXRpb25zLFxuXHRcdFx0Ly8gcmVzcGVjdGluZyBmaXJpbmdJbmRleCBvdmVycmlkZXMgYW5kIHJ1bnRpbWUgY2hhbmdlc1xuXHRcdFx0ZmlyZWQgPSBmaXJpbmcgPSB0cnVlO1xuXHRcdFx0Zm9yICggOyBxdWV1ZS5sZW5ndGg7IGZpcmluZ0luZGV4ID0gLTEgKSB7XG5cdFx0XHRcdG1lbW9yeSA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlICggKytmaXJpbmdJbmRleCA8IGxpc3QubGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0Ly8gUnVuIGNhbGxiYWNrIGFuZCBjaGVjayBmb3IgZWFybHkgdGVybWluYXRpb25cblx0XHRcdFx0XHRpZiAoIGxpc3RbIGZpcmluZ0luZGV4IF0uYXBwbHkoIG1lbW9yeVsgMCBdLCBtZW1vcnlbIDEgXSApID09PSBmYWxzZSAmJlxuXHRcdFx0XHRcdFx0b3B0aW9ucy5zdG9wT25GYWxzZSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSnVtcCB0byBlbmQgYW5kIGZvcmdldCB0aGUgZGF0YSBzbyAuYWRkIGRvZXNuJ3QgcmUtZmlyZVxuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdG1lbW9yeSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3JnZXQgdGhlIGRhdGEgaWYgd2UncmUgZG9uZSB3aXRoIGl0XG5cdFx0XHRpZiAoICFvcHRpb25zLm1lbW9yeSApIHtcblx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZpcmluZyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBDbGVhbiB1cCBpZiB3ZSdyZSBkb25lIGZpcmluZyBmb3IgZ29vZFxuXHRcdFx0aWYgKCBsb2NrZWQgKSB7XG5cblx0XHRcdFx0Ly8gS2VlcCBhbiBlbXB0eSBsaXN0IGlmIHdlIGhhdmUgZGF0YSBmb3IgZnV0dXJlIGFkZCBjYWxsc1xuXHRcdFx0XHRpZiAoIG1lbW9yeSApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCB0aGlzIG9iamVjdCBpcyBzcGVudFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpc3QgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XG5cdFx0c2VsZiA9IHtcblxuXHRcdFx0Ly8gQWRkIGEgY2FsbGJhY2sgb3IgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byB0aGUgbGlzdFxuXHRcdFx0YWRkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBtZW1vcnkgZnJvbSBhIHBhc3QgcnVuLCB3ZSBzaG91bGQgZmlyZSBhZnRlciBhZGRpbmdcblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBtZW1vcnkgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQoIGZ1bmN0aW9uIGFkZCggYXJncyApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmdzLCBmdW5jdGlvbiggXywgYXJnICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIGlzRnVuY3Rpb24oIGFyZyApICkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggIW9wdGlvbnMudW5pcXVlIHx8ICFzZWxmLmhhcyggYXJnICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LnB1c2goIGFyZyApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggYXJnICYmIGFyZy5sZW5ndGggJiYgdG9UeXBlKCBhcmcgKSAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEluc3BlY3QgcmVjdXJzaXZlbHlcblx0XHRcdFx0XHRcdFx0XHRhZGQoIGFyZyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSApKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHRcdGlmICggbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSB0aGUgbGlzdFxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmVhY2goIGFyZ3VtZW50cywgZnVuY3Rpb24oIF8sIGFyZyApIHtcblx0XHRcdFx0XHR2YXIgaW5kZXg7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGluZGV4ID0galF1ZXJ5LmluQXJyYXkoIGFyZywgbGlzdCwgaW5kZXggKSApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGZpcmluZyBpbmRleGVzXG5cdFx0XHRcdFx0XHRpZiAoIGluZGV4IDw9IGZpcmluZ0luZGV4ICkge1xuXHRcdFx0XHRcdFx0XHRmaXJpbmdJbmRleC0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIENoZWNrIGlmIGEgZ2l2ZW4gY2FsbGJhY2sgaXMgaW4gdGhlIGxpc3QuXG5cdFx0XHQvLyBJZiBubyBhcmd1bWVudCBpcyBnaXZlbiwgcmV0dXJuIHdoZXRoZXIgb3Igbm90IGxpc3QgaGFzIGNhbGxiYWNrcyBhdHRhY2hlZC5cblx0XHRcdGhhczogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRyZXR1cm4gZm4gP1xuXHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBmbiwgbGlzdCApID4gLTEgOlxuXHRcdFx0XHRcdGxpc3QubGVuZ3RoID4gMDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlbW92ZSBhbGwgY2FsbGJhY2tzIGZyb20gdGhlIGxpc3Rcblx0XHRcdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXHRcdFx0XHRcdGxpc3QgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIERpc2FibGUgLmZpcmUgYW5kIC5hZGRcblx0XHRcdC8vIEFib3J0IGFueSBjdXJyZW50L3BlbmRpbmcgZXhlY3V0aW9uc1xuXHRcdFx0Ly8gQ2xlYXIgYWxsIGNhbGxiYWNrcyBhbmQgdmFsdWVzXG5cdFx0XHRkaXNhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9ja2VkID0gcXVldWUgPSBbXTtcblx0XHRcdFx0bGlzdCA9IG1lbW9yeSA9IFwiXCI7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGRpc2FibGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICFsaXN0O1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRGlzYWJsZSAuZmlyZVxuXHRcdFx0Ly8gQWxzbyBkaXNhYmxlIC5hZGQgdW5sZXNzIHdlIGhhdmUgbWVtb3J5IChzaW5jZSBpdCB3b3VsZCBoYXZlIG5vIGVmZmVjdClcblx0XHRcdC8vIEFib3J0IGFueSBwZW5kaW5nIGV4ZWN1dGlvbnNcblx0XHRcdGxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsb2NrZWQgPSBxdWV1ZSA9IFtdO1xuXHRcdFx0XHRpZiAoICFtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRsaXN0ID0gbWVtb3J5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRsb2NrZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFsb2NrZWQ7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDYWxsIGFsbCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gY29udGV4dCBhbmQgYXJndW1lbnRzXG5cdFx0XHRmaXJlV2l0aDogZnVuY3Rpb24oIGNvbnRleHQsIGFyZ3MgKSB7XG5cdFx0XHRcdGlmICggIWxvY2tlZCApIHtcblx0XHRcdFx0XHRhcmdzID0gYXJncyB8fCBbXTtcblx0XHRcdFx0XHRhcmdzID0gWyBjb250ZXh0LCBhcmdzLnNsaWNlID8gYXJncy5zbGljZSgpIDogYXJncyBdO1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGFyZ3MgKTtcblx0XHRcdFx0XHRpZiAoICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2FsbCBhbGwgdGhlIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBhcmd1bWVudHNcblx0XHRcdGZpcmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmZpcmVXaXRoKCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBUbyBrbm93IGlmIHRoZSBjYWxsYmFja3MgaGF2ZSBhbHJlYWR5IGJlZW4gY2FsbGVkIGF0IGxlYXN0IG9uY2Vcblx0XHRcdGZpcmVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhZmlyZWQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRyZXR1cm4gc2VsZjtcbn07XG5cblxuZnVuY3Rpb24gSWRlbnRpdHkoIHYgKSB7XG5cdHJldHVybiB2O1xufVxuZnVuY3Rpb24gVGhyb3dlciggZXggKSB7XG5cdHRocm93IGV4O1xufVxuXG5mdW5jdGlvbiBhZG9wdFZhbHVlKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0LCBub1ZhbHVlICkge1xuXHR2YXIgbWV0aG9kO1xuXG5cdHRyeSB7XG5cblx0XHQvLyBDaGVjayBmb3IgcHJvbWlzZSBhc3BlY3QgZmlyc3QgdG8gcHJpdmlsZWdlIHN5bmNocm9ub3VzIGJlaGF2aW9yXG5cdFx0aWYgKCB2YWx1ZSAmJiBpc0Z1bmN0aW9uKCAoIG1ldGhvZCA9IHZhbHVlLnByb21pc2UgKSApICkge1xuXHRcdFx0bWV0aG9kLmNhbGwoIHZhbHVlICkuZG9uZSggcmVzb2x2ZSApLmZhaWwoIHJlamVjdCApO1xuXG5cdFx0Ly8gT3RoZXIgdGhlbmFibGVzXG5cdFx0fSBlbHNlIGlmICggdmFsdWUgJiYgaXNGdW5jdGlvbiggKCBtZXRob2QgPSB2YWx1ZS50aGVuICkgKSApIHtcblx0XHRcdG1ldGhvZC5jYWxsKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciBub24tdGhlbmFibGVzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQ29udHJvbCBgcmVzb2x2ZWAgYXJndW1lbnRzIGJ5IGxldHRpbmcgQXJyYXkjc2xpY2UgY2FzdCBib29sZWFuIGBub1ZhbHVlYCB0byBpbnRlZ2VyOlxuXHRcdFx0Ly8gKiBmYWxzZTogWyB2YWx1ZSBdLnNsaWNlKCAwICkgPT4gcmVzb2x2ZSggdmFsdWUgKVxuXHRcdFx0Ly8gKiB0cnVlOiBbIHZhbHVlIF0uc2xpY2UoIDEgKSA9PiByZXNvbHZlKClcblx0XHRcdHJlc29sdmUuYXBwbHkoIHVuZGVmaW5lZCwgWyB2YWx1ZSBdLnNsaWNlKCBub1ZhbHVlICkgKTtcblx0XHR9XG5cblx0Ly8gRm9yIFByb21pc2VzL0ErLCBjb252ZXJ0IGV4Y2VwdGlvbnMgaW50byByZWplY3Rpb25zXG5cdC8vIFNpbmNlIGpRdWVyeS53aGVuIGRvZXNuJ3QgdW53cmFwIHRoZW5hYmxlcywgd2UgY2FuIHNraXAgdGhlIGV4dHJhIGNoZWNrcyBhcHBlYXJpbmcgaW5cblx0Ly8gRGVmZXJyZWQjdGhlbiB0byBjb25kaXRpb25hbGx5IHN1cHByZXNzIHJlamVjdGlvbi5cblx0fSBjYXRjaCAoIHZhbHVlICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgb25seVxuXHRcdC8vIFN0cmljdCBtb2RlIGZ1bmN0aW9ucyBpbnZva2VkIHdpdGhvdXQgLmNhbGwvLmFwcGx5IGdldCBnbG9iYWwtb2JqZWN0IGNvbnRleHRcblx0XHRyZWplY3QuYXBwbHkoIHVuZGVmaW5lZCwgWyB2YWx1ZSBdICk7XG5cdH1cbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdERlZmVycmVkOiBmdW5jdGlvbiggZnVuYyApIHtcblx0XHR2YXIgdHVwbGVzID0gW1xuXG5cdFx0XHRcdC8vIGFjdGlvbiwgYWRkIGxpc3RlbmVyLCBjYWxsYmFja3MsXG5cdFx0XHRcdC8vIC4uLiAudGhlbiBoYW5kbGVycywgYXJndW1lbnQgaW5kZXgsIFtmaW5hbCBzdGF0ZV1cblx0XHRcdFx0WyBcIm5vdGlmeVwiLCBcInByb2dyZXNzXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwibWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm1lbW9yeVwiICksIDIgXSxcblx0XHRcdFx0WyBcInJlc29sdmVcIiwgXCJkb25lXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLCAwLCBcInJlc29sdmVkXCIgXSxcblx0XHRcdFx0WyBcInJlamVjdFwiLCBcImZhaWxcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksIDEsIFwicmVqZWN0ZWRcIiBdXG5cdFx0XHRdLFxuXHRcdFx0c3RhdGUgPSBcInBlbmRpbmdcIixcblx0XHRcdHByb21pc2UgPSB7XG5cdFx0XHRcdHN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsd2F5czogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQuZG9uZSggYXJndW1lbnRzICkuZmFpbCggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiY2F0Y2hcIjogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRcdHJldHVybiBwcm9taXNlLnRoZW4oIG51bGwsIGZuICk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gS2VlcCBwaXBlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRwaXBlOiBmdW5jdGlvbiggLyogZm5Eb25lLCBmbkZhaWwsIGZuUHJvZ3Jlc3MgKi8gKSB7XG5cdFx0XHRcdFx0dmFyIGZucyA9IGFyZ3VtZW50cztcblxuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoIGZ1bmN0aW9uKCBuZXdEZWZlciApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBpLCB0dXBsZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBNYXAgdHVwbGVzIChwcm9ncmVzcywgZG9uZSwgZmFpbCkgdG8gYXJndW1lbnRzIChkb25lLCBmYWlsLCBwcm9ncmVzcylcblx0XHRcdFx0XHRcdFx0dmFyIGZuID0gaXNGdW5jdGlvbiggZm5zWyB0dXBsZVsgNCBdIF0gKSAmJiBmbnNbIHR1cGxlWyA0IF0gXTtcblxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5wcm9ncmVzcyhmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5ub3RpZnkgfSlcblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQuZG9uZShmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZXNvbHZlIH0pXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLmZhaWwoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVqZWN0IH0pXG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMSBdIF0oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCA9IGZuICYmIGZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkICYmIGlzRnVuY3Rpb24oIHJldHVybmVkLnByb21pc2UgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLnByb21pc2UoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQucHJvZ3Jlc3MoIG5ld0RlZmVyLm5vdGlmeSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5kb25lKCBuZXdEZWZlci5yZXNvbHZlIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmZhaWwoIG5ld0RlZmVyLnJlamVjdCApO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlclsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZuID8gWyByZXR1cm5lZCBdIDogYXJndW1lbnRzXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0Zm5zID0gbnVsbDtcblx0XHRcdFx0XHR9ICkucHJvbWlzZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aGVuOiBmdW5jdGlvbiggb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIG9uUHJvZ3Jlc3MgKSB7XG5cdFx0XHRcdFx0dmFyIG1heERlcHRoID0gMDtcblx0XHRcdFx0XHRmdW5jdGlvbiByZXNvbHZlKCBkZXB0aCwgZGVmZXJyZWQsIGhhbmRsZXIsIHNwZWNpYWwgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0aGF0ID0gdGhpcyxcblx0XHRcdFx0XHRcdFx0XHRhcmdzID0gYXJndW1lbnRzLFxuXHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3cgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCwgdGhlbjtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjNcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU5XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBJZ25vcmUgZG91YmxlLXJlc29sdXRpb24gYXR0ZW1wdHNcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggZGVwdGggPCBtYXhEZXB0aCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCA9IGhhbmRsZXIuYXBwbHkoIHRoYXQsIGFyZ3MgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNDhcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggcmV0dXJuZWQgPT09IGRlZmVycmVkLnByb21pc2UoKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIiApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9ucyAyLjMuMy4xLCAzLjVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU0XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC03NVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gUmV0cmlldmUgYHRoZW5gIG9ubHkgb25jZVxuXHRcdFx0XHRcdFx0XHRcdFx0dGhlbiA9IHJldHVybmVkICYmXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuNFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC02NFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IGNoZWNrIG9iamVjdHMgYW5kIGZ1bmN0aW9ucyBmb3IgdGhlbmFiaWxpdHlcblx0XHRcdFx0XHRcdFx0XHRcdFx0KCB0eXBlb2YgcmV0dXJuZWQgPT09IFwib2JqZWN0XCIgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlb2YgcmV0dXJuZWQgPT09IFwiZnVuY3Rpb25cIiApICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLnRoZW47XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBhIHJldHVybmVkIHRoZW5hYmxlXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGlzRnVuY3Rpb24oIHRoZW4gKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTcGVjaWFsIHByb2Nlc3NvcnMgKG5vdGlmeSkganVzdCB3YWl0IGZvciByZXNvbHV0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggc3BlY2lhbCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBOb3JtYWwgcHJvY2Vzc29ycyAocmVzb2x2ZSkgYWxzbyBob29rIGludG8gcHJvZ3Jlc3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIC4uLmFuZCBkaXNyZWdhcmQgb2xkZXIgcmVzb2x1dGlvbiB2YWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhEZXB0aCsrO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbi5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIFRocm93ZXIsIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGggKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGFsbCBvdGhlciByZXR1cm5lZCB2YWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBoYW5kbGVyICE9PSBJZGVudGl0eSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBbIHJldHVybmVkIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBQcm9jZXNzIHRoZSB2YWx1ZShzKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEZWZhdWx0IHByb2Nlc3MgaXMgcmVzb2x2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoIHNwZWNpYWwgfHwgZGVmZXJyZWQucmVzb2x2ZVdpdGggKSggdGhhdCwgYXJncyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IG5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBjYXRjaCBhbmQgcmVqZWN0IGV4Y2VwdGlvbnNcblx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzID0gc3BlY2lhbCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93IDpcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3coKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soIGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3Muc3RhY2tUcmFjZSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy40LjFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC02MVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIElnbm9yZSBwb3N0LXJlc29sdXRpb24gZXhjZXB0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggZGVwdGggKyAxID49IG1heERlcHRoICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggaGFuZGxlciAhPT0gVGhyb3dlciApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJncyA9IFsgZSBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCB0aGF0LCBhcmdzICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4xXG5cdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU3XG5cdFx0XHRcdFx0XHRcdC8vIFJlLXJlc29sdmUgcHJvbWlzZXMgaW1tZWRpYXRlbHkgdG8gZG9kZ2UgZmFsc2UgcmVqZWN0aW9uIGZyb21cblx0XHRcdFx0XHRcdFx0Ly8gc3Vic2VxdWVudCBlcnJvcnNcblx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCApIHtcblx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzKCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBDYWxsIGFuIG9wdGlvbmFsIGhvb2sgdG8gcmVjb3JkIHRoZSBzdGFjaywgaW4gY2FzZSBvZiBleGNlcHRpb25cblx0XHRcdFx0XHRcdFx0XHQvLyBzaW5jZSBpdCdzIG90aGVyd2lzZSBsb3N0IHdoZW4gZXhlY3V0aW9uIGdvZXMgYXN5bmNcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5EZWZlcnJlZC5nZXRTdGFja0hvb2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzLnN0YWNrVHJhY2UgPSBqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBwcm9jZXNzICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGpRdWVyeS5EZWZlcnJlZCggZnVuY3Rpb24oIG5ld0RlZmVyICkge1xuXG5cdFx0XHRcdFx0XHQvLyBwcm9ncmVzc19oYW5kbGVycy5hZGQoIC4uLiApXG5cdFx0XHRcdFx0XHR0dXBsZXNbIDAgXVsgMyBdLmFkZChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShcblx0XHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLFxuXHRcdFx0XHRcdFx0XHRcdGlzRnVuY3Rpb24oIG9uUHJvZ3Jlc3MgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvblByb2dyZXNzIDpcblx0XHRcdFx0XHRcdFx0XHRcdElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLm5vdGlmeVdpdGhcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMSBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0aXNGdW5jdGlvbiggb25GdWxmaWxsZWQgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZ1bGZpbGxlZCA6XG5cdFx0XHRcdFx0XHRcdFx0XHRJZGVudGl0eVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5hZGQoIC4uLiApXG5cdFx0XHRcdFx0XHR0dXBsZXNbIDIgXVsgMyBdLmFkZChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShcblx0XHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLFxuXHRcdFx0XHRcdFx0XHRcdGlzRnVuY3Rpb24oIG9uUmVqZWN0ZWQgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvblJlamVjdGVkIDpcblx0XHRcdFx0XHRcdFx0XHRcdFRocm93ZXJcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9ICkucHJvbWlzZSgpO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIEdldCBhIHByb21pc2UgZm9yIHRoaXMgZGVmZXJyZWRcblx0XHRcdFx0Ly8gSWYgb2JqIGlzIHByb3ZpZGVkLCB0aGUgcHJvbWlzZSBhc3BlY3QgaXMgYWRkZWQgdG8gdGhlIG9iamVjdFxuXHRcdFx0XHRwcm9taXNlOiBmdW5jdGlvbiggb2JqICkge1xuXHRcdFx0XHRcdHJldHVybiBvYmogIT0gbnVsbCA/IGpRdWVyeS5leHRlbmQoIG9iaiwgcHJvbWlzZSApIDogcHJvbWlzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGRlZmVycmVkID0ge307XG5cblx0XHQvLyBBZGQgbGlzdC1zcGVjaWZpYyBtZXRob2RzXG5cdFx0alF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIGksIHR1cGxlICkge1xuXHRcdFx0dmFyIGxpc3QgPSB0dXBsZVsgMiBdLFxuXHRcdFx0XHRzdGF0ZVN0cmluZyA9IHR1cGxlWyA1IF07XG5cblx0XHRcdC8vIHByb21pc2UucHJvZ3Jlc3MgPSBsaXN0LmFkZFxuXHRcdFx0Ly8gcHJvbWlzZS5kb25lID0gbGlzdC5hZGRcblx0XHRcdC8vIHByb21pc2UuZmFpbCA9IGxpc3QuYWRkXG5cdFx0XHRwcm9taXNlWyB0dXBsZVsgMSBdIF0gPSBsaXN0LmFkZDtcblxuXHRcdFx0Ly8gSGFuZGxlIHN0YXRlXG5cdFx0XHRpZiAoIHN0YXRlU3RyaW5nICkge1xuXHRcdFx0XHRsaXN0LmFkZChcblx0XHRcdFx0XHRmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUgPSBcInJlc29sdmVkXCIgKGkuZS4sIGZ1bGZpbGxlZClcblx0XHRcdFx0XHRcdC8vIHN0YXRlID0gXCJyZWplY3RlZFwiXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IHN0YXRlU3RyaW5nO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQvLyByZWplY3RlZF9jYWxsYmFja3MuZGlzYWJsZVxuXHRcdFx0XHRcdC8vIGZ1bGZpbGxlZF9jYWxsYmFja3MuZGlzYWJsZVxuXHRcdFx0XHRcdHR1cGxlc1sgMyAtIGkgXVsgMiBdLmRpc2FibGUsXG5cblx0XHRcdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5kaXNhYmxlXG5cdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmRpc2FibGVcblx0XHRcdFx0XHR0dXBsZXNbIDMgLSBpIF1bIDMgXS5kaXNhYmxlLFxuXG5cdFx0XHRcdFx0Ly8gcHJvZ3Jlc3NfY2FsbGJhY2tzLmxvY2tcblx0XHRcdFx0XHR0dXBsZXNbIDAgXVsgMiBdLmxvY2ssXG5cblx0XHRcdFx0XHQvLyBwcm9ncmVzc19oYW5kbGVycy5sb2NrXG5cdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDMgXS5sb2NrXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmZpcmVcblx0XHRcdC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5maXJlXG5cdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5maXJlXG5cdFx0XHRsaXN0LmFkZCggdHVwbGVbIDMgXS5maXJlICk7XG5cblx0XHRcdC8vIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5ub3RpZnlXaXRoKC4uLikgfVxuXHRcdFx0Ly8gZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZXNvbHZlV2l0aCguLi4pIH1cblx0XHRcdC8vIGRlZmVycmVkLnJlamVjdCA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZWplY3RXaXRoKC4uLikgfVxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oIHRoaXMgPT09IGRlZmVycmVkID8gdW5kZWZpbmVkIDogdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gZGVmZXJyZWQubm90aWZ5V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdC8vIGRlZmVycmVkLnJlc29sdmVXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSA9IGxpc3QuZmlyZVdpdGg7XG5cdFx0fSApO1xuXG5cdFx0Ly8gTWFrZSB0aGUgZGVmZXJyZWQgYSBwcm9taXNlXG5cdFx0cHJvbWlzZS5wcm9taXNlKCBkZWZlcnJlZCApO1xuXG5cdFx0Ly8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxuXHRcdGlmICggZnVuYyApIHtcblx0XHRcdGZ1bmMuY2FsbCggZGVmZXJyZWQsIGRlZmVycmVkICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGRvbmUhXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9LFxuXG5cdC8vIERlZmVycmVkIGhlbHBlclxuXHR3aGVuOiBmdW5jdGlvbiggc2luZ2xlVmFsdWUgKSB7XG5cdFx0dmFyXG5cblx0XHRcdC8vIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xuXHRcdFx0cmVtYWluaW5nID0gYXJndW1lbnRzLmxlbmd0aCxcblxuXHRcdFx0Ly8gY291bnQgb2YgdW5wcm9jZXNzZWQgYXJndW1lbnRzXG5cdFx0XHRpID0gcmVtYWluaW5nLFxuXG5cdFx0XHQvLyBzdWJvcmRpbmF0ZSBmdWxmaWxsbWVudCBkYXRhXG5cdFx0XHRyZXNvbHZlQ29udGV4dHMgPSBBcnJheSggaSApLFxuXHRcdFx0cmVzb2x2ZVZhbHVlcyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApLFxuXG5cdFx0XHQvLyB0aGUgbWFzdGVyIERlZmVycmVkXG5cdFx0XHRtYXN0ZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblxuXHRcdFx0Ly8gc3Vib3JkaW5hdGUgY2FsbGJhY2sgZmFjdG9yeVxuXHRcdFx0dXBkYXRlRnVuYyA9IGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJlc29sdmVDb250ZXh0c1sgaSBdID0gdGhpcztcblx0XHRcdFx0XHRyZXNvbHZlVmFsdWVzWyBpIF0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApIDogdmFsdWU7XG5cdFx0XHRcdFx0aWYgKCAhKCAtLXJlbWFpbmluZyApICkge1xuXHRcdFx0XHRcdFx0bWFzdGVyLnJlc29sdmVXaXRoKCByZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0Ly8gU2luZ2xlLSBhbmQgZW1wdHkgYXJndW1lbnRzIGFyZSBhZG9wdGVkIGxpa2UgUHJvbWlzZS5yZXNvbHZlXG5cdFx0aWYgKCByZW1haW5pbmcgPD0gMSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHNpbmdsZVZhbHVlLCBtYXN0ZXIuZG9uZSggdXBkYXRlRnVuYyggaSApICkucmVzb2x2ZSwgbWFzdGVyLnJlamVjdCxcblx0XHRcdFx0IXJlbWFpbmluZyApO1xuXG5cdFx0XHQvLyBVc2UgLnRoZW4oKSB0byB1bndyYXAgc2Vjb25kYXJ5IHRoZW5hYmxlcyAoY2YuIGdoLTMwMDApXG5cdFx0XHRpZiAoIG1hc3Rlci5zdGF0ZSgpID09PSBcInBlbmRpbmdcIiB8fFxuXHRcdFx0XHRpc0Z1bmN0aW9uKCByZXNvbHZlVmFsdWVzWyBpIF0gJiYgcmVzb2x2ZVZhbHVlc1sgaSBdLnRoZW4gKSApIHtcblxuXHRcdFx0XHRyZXR1cm4gbWFzdGVyLnRoZW4oKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBNdWx0aXBsZSBhcmd1bWVudHMgYXJlIGFnZ3JlZ2F0ZWQgbGlrZSBQcm9taXNlLmFsbCBhcnJheSBlbGVtZW50c1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0YWRvcHRWYWx1ZSggcmVzb2x2ZVZhbHVlc1sgaSBdLCB1cGRhdGVGdW5jKCBpICksIG1hc3Rlci5yZWplY3QgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFzdGVyLnByb21pc2UoKTtcblx0fVxufSApO1xuXG5cbi8vIFRoZXNlIHVzdWFsbHkgaW5kaWNhdGUgYSBwcm9ncmFtbWVyIG1pc3Rha2UgZHVyaW5nIGRldmVsb3BtZW50LFxuLy8gd2FybiBhYm91dCB0aGVtIEFTQVAgcmF0aGVyIHRoYW4gc3dhbGxvd2luZyB0aGVtIGJ5IGRlZmF1bHQuXG52YXIgcmVycm9yTmFtZXMgPSAvXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztcblxualF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2sgPSBmdW5jdGlvbiggZXJyb3IsIHN0YWNrICkge1xuXG5cdC8vIFN1cHBvcnQ6IElFIDggLSA5IG9ubHlcblx0Ly8gQ29uc29sZSBleGlzdHMgd2hlbiBkZXYgdG9vbHMgYXJlIG9wZW4sIHdoaWNoIGNhbiBoYXBwZW4gYXQgYW55IHRpbWVcblx0aWYgKCB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS53YXJuICYmIGVycm9yICYmIHJlcnJvck5hbWVzLnRlc3QoIGVycm9yLm5hbWUgKSApIHtcblx0XHR3aW5kb3cuY29uc29sZS53YXJuKCBcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiICsgZXJyb3IubWVzc2FnZSwgZXJyb3Iuc3RhY2ssIHN0YWNrICk7XG5cdH1cbn07XG5cblxuXG5cbmpRdWVyeS5yZWFkeUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKCBlcnJvciApIHtcblx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IGVycm9yO1xuXHR9ICk7XG59O1xuXG5cblxuXG4vLyBUaGUgZGVmZXJyZWQgdXNlZCBvbiBET00gcmVhZHlcbnZhciByZWFkeUxpc3QgPSBqUXVlcnkuRGVmZXJyZWQoKTtcblxualF1ZXJ5LmZuLnJlYWR5ID0gZnVuY3Rpb24oIGZuICkge1xuXG5cdHJlYWR5TGlzdFxuXHRcdC50aGVuKCBmbiApXG5cblx0XHQvLyBXcmFwIGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiBpbiBhIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIGxvb2t1cFxuXHRcdC8vIGhhcHBlbnMgYXQgdGhlIHRpbWUgb2YgZXJyb3IgaGFuZGxpbmcgaW5zdGVhZCBvZiBjYWxsYmFja1xuXHRcdC8vIHJlZ2lzdHJhdGlvbi5cblx0XHQuY2F0Y2goIGZ1bmN0aW9uKCBlcnJvciApIHtcblx0XHRcdGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiggZXJyb3IgKTtcblx0XHR9ICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cblx0aXNSZWFkeTogZmFsc2UsXG5cblx0Ly8gQSBjb3VudGVyIHRvIHRyYWNrIGhvdyBtYW55IGl0ZW1zIHRvIHdhaXQgZm9yIGJlZm9yZVxuXHQvLyB0aGUgcmVhZHkgZXZlbnQgZmlyZXMuIFNlZSAjNjc4MVxuXHRyZWFkeVdhaXQ6IDEsXG5cblx0Ly8gSGFuZGxlIHdoZW4gdGhlIERPTSBpcyByZWFkeVxuXHRyZWFkeTogZnVuY3Rpb24oIHdhaXQgKSB7XG5cblx0XHQvLyBBYm9ydCBpZiB0aGVyZSBhcmUgcGVuZGluZyBob2xkcyBvciB3ZSdyZSBhbHJlYWR5IHJlYWR5XG5cdFx0aWYgKCB3YWl0ID09PSB0cnVlID8gLS1qUXVlcnkucmVhZHlXYWl0IDogalF1ZXJ5LmlzUmVhZHkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmVtZW1iZXIgdGhhdCB0aGUgRE9NIGlzIHJlYWR5XG5cdFx0alF1ZXJ5LmlzUmVhZHkgPSB0cnVlO1xuXG5cdFx0Ly8gSWYgYSBub3JtYWwgRE9NIFJlYWR5IGV2ZW50IGZpcmVkLCBkZWNyZW1lbnQsIGFuZCB3YWl0IGlmIG5lZWQgYmVcblx0XHRpZiAoIHdhaXQgIT09IHRydWUgJiYgLS1qUXVlcnkucmVhZHlXYWl0ID4gMCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSBhcmUgZnVuY3Rpb25zIGJvdW5kLCB0byBleGVjdXRlXG5cdFx0cmVhZHlMaXN0LnJlc29sdmVXaXRoKCBkb2N1bWVudCwgWyBqUXVlcnkgXSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5yZWFkeS50aGVuID0gcmVhZHlMaXN0LnRoZW47XG5cbi8vIFRoZSByZWFkeSBldmVudCBoYW5kbGVyIGFuZCBzZWxmIGNsZWFudXAgbWV0aG9kXG5mdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQgKTtcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQgKTtcblx0alF1ZXJ5LnJlYWR5KCk7XG59XG5cbi8vIENhdGNoIGNhc2VzIHdoZXJlICQoZG9jdW1lbnQpLnJlYWR5KCkgaXMgY2FsbGVkXG4vLyBhZnRlciB0aGUgYnJvd3NlciBldmVudCBoYXMgYWxyZWFkeSBvY2N1cnJlZC5cbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDEwIG9ubHlcbi8vIE9sZGVyIElFIHNvbWV0aW1lcyBzaWduYWxzIFwiaW50ZXJhY3RpdmVcIiB0b28gc29vblxuaWYgKCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHxcblx0KCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIiAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsICkgKSB7XG5cblx0Ly8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBqUXVlcnkucmVhZHkgKTtcblxufSBlbHNlIHtcblxuXHQvLyBVc2UgdGhlIGhhbmR5IGV2ZW50IGNhbGxiYWNrXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQgKTtcblxuXHQvLyBBIGZhbGxiYWNrIHRvIHdpbmRvdy5vbmxvYWQsIHRoYXQgd2lsbCBhbHdheXMgd29ya1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCApO1xufVxuXG5cblxuXG4vLyBNdWx0aWZ1bmN0aW9uYWwgbWV0aG9kIHRvIGdldCBhbmQgc2V0IHZhbHVlcyBvZiBhIGNvbGxlY3Rpb25cbi8vIFRoZSB2YWx1ZS9zIGNhbiBvcHRpb25hbGx5IGJlIGV4ZWN1dGVkIGlmIGl0J3MgYSBmdW5jdGlvblxudmFyIGFjY2VzcyA9IGZ1bmN0aW9uKCBlbGVtcywgZm4sIGtleSwgdmFsdWUsIGNoYWluYWJsZSwgZW1wdHlHZXQsIHJhdyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGVsZW1zLmxlbmd0aCxcblx0XHRidWxrID0ga2V5ID09IG51bGw7XG5cblx0Ly8gU2V0cyBtYW55IHZhbHVlc1xuXHRpZiAoIHRvVHlwZSgga2V5ICkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblx0XHRmb3IgKCBpIGluIGtleSApIHtcblx0XHRcdGFjY2VzcyggZWxlbXMsIGZuLCBpLCBrZXlbIGkgXSwgdHJ1ZSwgZW1wdHlHZXQsIHJhdyApO1xuXHRcdH1cblxuXHQvLyBTZXRzIG9uZSB2YWx1ZVxuXHR9IGVsc2UgaWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdGNoYWluYWJsZSA9IHRydWU7XG5cblx0XHRpZiAoICFpc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmF3ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGJ1bGsgKSB7XG5cblx0XHRcdC8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxuXHRcdFx0aWYgKCByYXcgKSB7XG5cdFx0XHRcdGZuLmNhbGwoIGVsZW1zLCB2YWx1ZSApO1xuXHRcdFx0XHRmbiA9IG51bGw7XG5cblx0XHRcdC8vIC4uLmV4Y2VwdCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvbiB2YWx1ZXNcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJ1bGsgPSBmbjtcblx0XHRcdFx0Zm4gPSBmdW5jdGlvbiggZWxlbSwga2V5LCB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gYnVsay5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdmFsdWUgKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGZuICkge1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdGZuKFxuXHRcdFx0XHRcdGVsZW1zWyBpIF0sIGtleSwgcmF3ID9cblx0XHRcdFx0XHR2YWx1ZSA6XG5cdFx0XHRcdFx0dmFsdWUuY2FsbCggZWxlbXNbIGkgXSwgaSwgZm4oIGVsZW1zWyBpIF0sIGtleSApIClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIGNoYWluYWJsZSApIHtcblx0XHRyZXR1cm4gZWxlbXM7XG5cdH1cblxuXHQvLyBHZXRzXG5cdGlmICggYnVsayApIHtcblx0XHRyZXR1cm4gZm4uY2FsbCggZWxlbXMgKTtcblx0fVxuXG5cdHJldHVybiBsZW4gPyBmbiggZWxlbXNbIDAgXSwga2V5ICkgOiBlbXB0eUdldDtcbn07XG5cblxuLy8gTWF0Y2hlcyBkYXNoZWQgc3RyaW5nIGZvciBjYW1lbGl6aW5nXG52YXIgcm1zUHJlZml4ID0gL14tbXMtLyxcblx0cmRhc2hBbHBoYSA9IC8tKFthLXpdKS9nO1xuXG4vLyBVc2VkIGJ5IGNhbWVsQ2FzZSBhcyBjYWxsYmFjayB0byByZXBsYWNlKClcbmZ1bmN0aW9uIGZjYW1lbENhc2UoIGFsbCwgbGV0dGVyICkge1xuXHRyZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG59XG5cbi8vIENvbnZlcnQgZGFzaGVkIHRvIGNhbWVsQ2FzZTsgdXNlZCBieSB0aGUgY3NzIGFuZCBkYXRhIG1vZHVsZXNcbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDExLCBFZGdlIDEyIC0gMTVcbi8vIE1pY3Jvc29mdCBmb3Jnb3QgdG8gaHVtcCB0aGVpciB2ZW5kb3IgcHJlZml4ICgjOTU3MilcbmZ1bmN0aW9uIGNhbWVsQ2FzZSggc3RyaW5nICkge1xuXHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoIHJtc1ByZWZpeCwgXCJtcy1cIiApLnJlcGxhY2UoIHJkYXNoQWxwaGEsIGZjYW1lbENhc2UgKTtcbn1cbnZhciBhY2NlcHREYXRhID0gZnVuY3Rpb24oIG93bmVyICkge1xuXG5cdC8vIEFjY2VwdHMgb25seTpcblx0Ly8gIC0gTm9kZVxuXHQvLyAgICAtIE5vZGUuRUxFTUVOVF9OT0RFXG5cdC8vICAgIC0gTm9kZS5ET0NVTUVOVF9OT0RFXG5cdC8vICAtIE9iamVjdFxuXHQvLyAgICAtIEFueVxuXHRyZXR1cm4gb3duZXIubm9kZVR5cGUgPT09IDEgfHwgb3duZXIubm9kZVR5cGUgPT09IDkgfHwgISggK293bmVyLm5vZGVUeXBlICk7XG59O1xuXG5cblxuXG5mdW5jdGlvbiBEYXRhKCkge1xuXHR0aGlzLmV4cGFuZG8gPSBqUXVlcnkuZXhwYW5kbyArIERhdGEudWlkKys7XG59XG5cbkRhdGEudWlkID0gMTtcblxuRGF0YS5wcm90b3R5cGUgPSB7XG5cblx0Y2FjaGU6IGZ1bmN0aW9uKCBvd25lciApIHtcblxuXHRcdC8vIENoZWNrIGlmIHRoZSBvd25lciBvYmplY3QgYWxyZWFkeSBoYXMgYSBjYWNoZVxuXHRcdHZhciB2YWx1ZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblxuXHRcdC8vIElmIG5vdCwgY3JlYXRlIG9uZVxuXHRcdGlmICggIXZhbHVlICkge1xuXHRcdFx0dmFsdWUgPSB7fTtcblxuXHRcdFx0Ly8gV2UgY2FuIGFjY2VwdCBkYXRhIGZvciBub24tZWxlbWVudCBub2RlcyBpbiBtb2Rlcm4gYnJvd3NlcnMsXG5cdFx0XHQvLyBidXQgd2Ugc2hvdWxkIG5vdCwgc2VlICM4MzM1LlxuXHRcdFx0Ly8gQWx3YXlzIHJldHVybiBhbiBlbXB0eSBvYmplY3QuXG5cdFx0XHRpZiAoIGFjY2VwdERhdGEoIG93bmVyICkgKSB7XG5cblx0XHRcdFx0Ly8gSWYgaXQgaXMgYSBub2RlIHVubGlrZWx5IHRvIGJlIHN0cmluZ2lmeS1lZCBvciBsb29wZWQgb3ZlclxuXHRcdFx0XHQvLyB1c2UgcGxhaW4gYXNzaWdubWVudFxuXHRcdFx0XHRpZiAoIG93bmVyLm5vZGVUeXBlICkge1xuXHRcdFx0XHRcdG93bmVyWyB0aGlzLmV4cGFuZG8gXSA9IHZhbHVlO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBzZWN1cmUgaXQgaW4gYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eVxuXHRcdFx0XHQvLyBjb25maWd1cmFibGUgbXVzdCBiZSB0cnVlIHRvIGFsbG93IHRoZSBwcm9wZXJ0eSB0byBiZVxuXHRcdFx0XHQvLyBkZWxldGVkIHdoZW4gZGF0YSBpcyByZW1vdmVkXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBvd25lciwgdGhpcy5leHBhbmRvLCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdHNldDogZnVuY3Rpb24oIG93bmVyLCBkYXRhLCB2YWx1ZSApIHtcblx0XHR2YXIgcHJvcCxcblx0XHRcdGNhY2hlID0gdGhpcy5jYWNoZSggb3duZXIgKTtcblxuXHRcdC8vIEhhbmRsZTogWyBvd25lciwga2V5LCB2YWx1ZSBdIGFyZ3Ncblx0XHQvLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGNhY2hlWyBjYW1lbENhc2UoIGRhdGEgKSBdID0gdmFsdWU7XG5cblx0XHQvLyBIYW5kbGU6IFsgb3duZXIsIHsgcHJvcGVydGllcyB9IF0gYXJnc1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIENvcHkgdGhlIHByb3BlcnRpZXMgb25lLWJ5LW9uZSB0byB0aGUgY2FjaGUgb2JqZWN0XG5cdFx0XHRmb3IgKCBwcm9wIGluIGRhdGEgKSB7XG5cdFx0XHRcdGNhY2hlWyBjYW1lbENhc2UoIHByb3AgKSBdID0gZGF0YVsgcHJvcCBdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FjaGU7XG5cdH0sXG5cdGdldDogZnVuY3Rpb24oIG93bmVyLCBrZXkgKSB7XG5cdFx0cmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdHRoaXMuY2FjaGUoIG93bmVyICkgOlxuXG5cdFx0XHQvLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG5cdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gJiYgb3duZXJbIHRoaXMuZXhwYW5kbyBdWyBjYW1lbENhc2UoIGtleSApIF07XG5cdH0sXG5cdGFjY2VzczogZnVuY3Rpb24oIG93bmVyLCBrZXksIHZhbHVlICkge1xuXG5cdFx0Ly8gSW4gY2FzZXMgd2hlcmUgZWl0aGVyOlxuXHRcdC8vXG5cdFx0Ly8gICAxLiBObyBrZXkgd2FzIHNwZWNpZmllZFxuXHRcdC8vICAgMi4gQSBzdHJpbmcga2V5IHdhcyBzcGVjaWZpZWQsIGJ1dCBubyB2YWx1ZSBwcm92aWRlZFxuXHRcdC8vXG5cdFx0Ly8gVGFrZSB0aGUgXCJyZWFkXCIgcGF0aCBhbmQgYWxsb3cgdGhlIGdldCBtZXRob2QgdG8gZGV0ZXJtaW5lXG5cdFx0Ly8gd2hpY2ggdmFsdWUgdG8gcmV0dXJuLCByZXNwZWN0aXZlbHkgZWl0aGVyOlxuXHRcdC8vXG5cdFx0Ly8gICAxLiBUaGUgZW50aXJlIGNhY2hlIG9iamVjdFxuXHRcdC8vICAgMi4gVGhlIGRhdGEgc3RvcmVkIGF0IHRoZSBrZXlcblx0XHQvL1xuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0KCAoIGtleSAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICkgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCApICkge1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoIG93bmVyLCBrZXkgKTtcblx0XHR9XG5cblx0XHQvLyBXaGVuIHRoZSBrZXkgaXMgbm90IGEgc3RyaW5nLCBvciBib3RoIGEga2V5IGFuZCB2YWx1ZVxuXHRcdC8vIGFyZSBzcGVjaWZpZWQsIHNldCBvciBleHRlbmQgKGV4aXN0aW5nIG9iamVjdHMpIHdpdGggZWl0aGVyOlxuXHRcdC8vXG5cdFx0Ly8gICAxLiBBbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuXHRcdC8vICAgMi4gQSBrZXkgYW5kIHZhbHVlXG5cdFx0Ly9cblx0XHR0aGlzLnNldCggb3duZXIsIGtleSwgdmFsdWUgKTtcblxuXHRcdC8vIFNpbmNlIHRoZSBcInNldFwiIHBhdGggY2FuIGhhdmUgdHdvIHBvc3NpYmxlIGVudHJ5IHBvaW50c1xuXHRcdC8vIHJldHVybiB0aGUgZXhwZWN0ZWQgZGF0YSBiYXNlZCBvbiB3aGljaCBwYXRoIHdhcyB0YWtlblsqXVxuXHRcdHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBrZXk7XG5cdH0sXG5cdHJlbW92ZTogZnVuY3Rpb24oIG93bmVyLCBrZXkgKSB7XG5cdFx0dmFyIGksXG5cdFx0XHRjYWNoZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblxuXHRcdGlmICggY2FjaGUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGtleSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0IGFycmF5IG9yIHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcgb2Yga2V5c1xuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBrZXkgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBrZXkgaXMgYW4gYXJyYXkgb2Yga2V5cy4uLlxuXHRcdFx0XHQvLyBXZSBhbHdheXMgc2V0IGNhbWVsQ2FzZSBrZXlzLCBzbyByZW1vdmUgdGhhdC5cblx0XHRcdFx0a2V5ID0ga2V5Lm1hcCggY2FtZWxDYXNlICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRrZXkgPSBjYW1lbENhc2UoIGtleSApO1xuXG5cdFx0XHRcdC8vIElmIGEga2V5IHdpdGggdGhlIHNwYWNlcyBleGlzdHMsIHVzZSBpdC5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBjcmVhdGUgYW4gYXJyYXkgYnkgbWF0Y2hpbmcgbm9uLXdoaXRlc3BhY2Vcblx0XHRcdFx0a2V5ID0ga2V5IGluIGNhY2hlID9cblx0XHRcdFx0XHRbIGtleSBdIDpcblx0XHRcdFx0XHQoIGtleS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdICk7XG5cdFx0XHR9XG5cblx0XHRcdGkgPSBrZXkubGVuZ3RoO1xuXG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0ZGVsZXRlIGNhY2hlWyBrZXlbIGkgXSBdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB0aGUgZXhwYW5kbyBpZiB0aGVyZSdzIG5vIG1vcmUgZGF0YVxuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgfHwgalF1ZXJ5LmlzRW1wdHlPYmplY3QoIGNhY2hlICkgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDVcblx0XHRcdC8vIFdlYmtpdCAmIEJsaW5rIHBlcmZvcm1hbmNlIHN1ZmZlcnMgd2hlbiBkZWxldGluZyBwcm9wZXJ0aWVzXG5cdFx0XHQvLyBmcm9tIERPTSBub2Rlcywgc28gc2V0IHRvIHVuZGVmaW5lZCBpbnN0ZWFkXG5cdFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNzg2MDcgKGJ1ZyByZXN0cmljdGVkKVxuXHRcdFx0aWYgKCBvd25lci5ub2RlVHlwZSApIHtcblx0XHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVsZXRlIG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGhhc0RhdGE6IGZ1bmN0aW9uKCBvd25lciApIHtcblx0XHR2YXIgY2FjaGUgPSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cdFx0cmV0dXJuIGNhY2hlICE9PSB1bmRlZmluZWQgJiYgIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBjYWNoZSApO1xuXHR9XG59O1xudmFyIGRhdGFQcml2ID0gbmV3IERhdGEoKTtcblxudmFyIGRhdGFVc2VyID0gbmV3IERhdGEoKTtcblxuXG5cbi8vXHRJbXBsZW1lbnRhdGlvbiBTdW1tYXJ5XG4vL1xuLy9cdDEuIEVuZm9yY2UgQVBJIHN1cmZhY2UgYW5kIHNlbWFudGljIGNvbXBhdGliaWxpdHkgd2l0aCAxLjkueCBicmFuY2hcbi8vXHQyLiBJbXByb3ZlIHRoZSBtb2R1bGUncyBtYWludGFpbmFiaWxpdHkgYnkgcmVkdWNpbmcgdGhlIHN0b3JhZ2Vcbi8vXHRcdHBhdGhzIHRvIGEgc2luZ2xlIG1lY2hhbmlzbS5cbi8vXHQzLiBVc2UgdGhlIHNhbWUgc2luZ2xlIG1lY2hhbmlzbSB0byBzdXBwb3J0IFwicHJpdmF0ZVwiIGFuZCBcInVzZXJcIiBkYXRhLlxuLy9cdDQuIF9OZXZlcl8gZXhwb3NlIFwicHJpdmF0ZVwiIGRhdGEgdG8gdXNlciBjb2RlIChUT0RPOiBEcm9wIF9kYXRhLCBfcmVtb3ZlRGF0YSlcbi8vXHQ1LiBBdm9pZCBleHBvc2luZyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIG9uIHVzZXIgb2JqZWN0cyAoZWcuIGV4cGFuZG8gcHJvcGVydGllcylcbi8vXHQ2LiBQcm92aWRlIGEgY2xlYXIgcGF0aCBmb3IgaW1wbGVtZW50YXRpb24gdXBncmFkZSB0byBXZWFrTWFwIGluIDIwMTRcblxudmFyIHJicmFjZSA9IC9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxcblx0cm11bHRpRGFzaCA9IC9bQS1aXS9nO1xuXG5mdW5jdGlvbiBnZXREYXRhKCBkYXRhICkge1xuXHRpZiAoIGRhdGEgPT09IFwidHJ1ZVwiICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKCBkYXRhID09PSBcImZhbHNlXCIgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKCBkYXRhID09PSBcIm51bGxcIiApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIE9ubHkgY29udmVydCB0byBhIG51bWJlciBpZiBpdCBkb2Vzbid0IGNoYW5nZSB0aGUgc3RyaW5nXG5cdGlmICggZGF0YSA9PT0gK2RhdGEgKyBcIlwiICkge1xuXHRcdHJldHVybiArZGF0YTtcblx0fVxuXG5cdGlmICggcmJyYWNlLnRlc3QoIGRhdGEgKSApIHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZSggZGF0YSApO1xuXHR9XG5cblx0cmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGRhdGFBdHRyKCBlbGVtLCBrZXksIGRhdGEgKSB7XG5cdHZhciBuYW1lO1xuXG5cdC8vIElmIG5vdGhpbmcgd2FzIGZvdW5kIGludGVybmFsbHksIHRyeSB0byBmZXRjaCBhbnlcblx0Ly8gZGF0YSBmcm9tIHRoZSBIVE1MNSBkYXRhLSogYXR0cmlidXRlXG5cdGlmICggZGF0YSA9PT0gdW5kZWZpbmVkICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0bmFtZSA9IFwiZGF0YS1cIiArIGtleS5yZXBsYWNlKCBybXVsdGlEYXNoLCBcIi0kJlwiICkudG9Mb3dlckNhc2UoKTtcblx0XHRkYXRhID0gZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcblxuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkYXRhID0gZ2V0RGF0YSggZGF0YSApO1xuXHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXG5cdFx0XHQvLyBNYWtlIHN1cmUgd2Ugc2V0IHRoZSBkYXRhIHNvIGl0IGlzbid0IGNoYW5nZWQgbGF0ZXJcblx0XHRcdGRhdGFVc2VyLnNldCggZWxlbSwga2V5LCBkYXRhICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBkYXRhO1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdGhhc0RhdGE6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkYXRhVXNlci5oYXNEYXRhKCBlbGVtICkgfHwgZGF0YVByaXYuaGFzRGF0YSggZWxlbSApO1xuXHR9LFxuXG5cdGRhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBkYXRhICkge1xuXHRcdHJldHVybiBkYXRhVXNlci5hY2Nlc3MoIGVsZW0sIG5hbWUsIGRhdGEgKTtcblx0fSxcblxuXHRyZW1vdmVEYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRkYXRhVXNlci5yZW1vdmUoIGVsZW0sIG5hbWUgKTtcblx0fSxcblxuXHQvLyBUT0RPOiBOb3cgdGhhdCBhbGwgY2FsbHMgdG8gX2RhdGEgYW5kIF9yZW1vdmVEYXRhIGhhdmUgYmVlbiByZXBsYWNlZFxuXHQvLyB3aXRoIGRpcmVjdCBjYWxscyB0byBkYXRhUHJpdiBtZXRob2RzLCB0aGVzZSBjYW4gYmUgZGVwcmVjYXRlZC5cblx0X2RhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBkYXRhICkge1xuXHRcdHJldHVybiBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIG5hbWUsIGRhdGEgKTtcblx0fSxcblxuXHRfcmVtb3ZlRGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBuYW1lICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRkYXRhOiBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHR2YXIgaSwgbmFtZSwgZGF0YSxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRhdHRycyA9IGVsZW0gJiYgZWxlbS5hdHRyaWJ1dGVzO1xuXG5cdFx0Ly8gR2V0cyBhbGwgdmFsdWVzXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGlmICggdGhpcy5sZW5ndGggKSB7XG5cdFx0XHRcdGRhdGEgPSBkYXRhVXNlci5nZXQoIGVsZW0gKTtcblxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgIWRhdGFQcml2LmdldCggZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiApICkge1xuXHRcdFx0XHRcdGkgPSBhdHRycy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDExIG9ubHlcblx0XHRcdFx0XHRcdC8vIFRoZSBhdHRycyBlbGVtZW50cyBjYW4gYmUgbnVsbCAoIzE0ODk0KVxuXHRcdFx0XHRcdFx0aWYgKCBhdHRyc1sgaSBdICkge1xuXHRcdFx0XHRcdFx0XHRuYW1lID0gYXR0cnNbIGkgXS5uYW1lO1xuXHRcdFx0XHRcdFx0XHRpZiAoIG5hbWUuaW5kZXhPZiggXCJkYXRhLVwiICkgPT09IDAgKSB7XG5cdFx0XHRcdFx0XHRcdFx0bmFtZSA9IGNhbWVsQ2FzZSggbmFtZS5zbGljZSggNSApICk7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YUF0dHIoIGVsZW0sIG5hbWUsIGRhdGFbIG5hbWUgXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdC8vIFNldHMgbXVsdGlwbGUgdmFsdWVzXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFVc2VyLnNldCggdGhpcywga2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGRhdGE7XG5cblx0XHRcdC8vIFRoZSBjYWxsaW5nIGpRdWVyeSBvYmplY3QgKGVsZW1lbnQgbWF0Y2hlcykgaXMgbm90IGVtcHR5XG5cdFx0XHQvLyAoYW5kIHRoZXJlZm9yZSBoYXMgYW4gZWxlbWVudCBhcHBlYXJzIGF0IHRoaXNbIDAgXSkgYW5kIHRoZVxuXHRcdFx0Ly8gYHZhbHVlYCBwYXJhbWV0ZXIgd2FzIG5vdCB1bmRlZmluZWQuIEFuIGVtcHR5IGpRdWVyeSBvYmplY3Rcblx0XHRcdC8vIHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGZvciBlbGVtID0gdGhpc1sgMCBdIHdoaWNoIHdpbGxcblx0XHRcdC8vIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhbiBhdHRlbXB0IHRvIHJlYWQgYSBkYXRhIGNhY2hlIGlzIG1hZGUuXG5cdFx0XHRpZiAoIGVsZW0gJiYgdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIGdldCBkYXRhIGZyb20gdGhlIGNhY2hlXG5cdFx0XHRcdC8vIFRoZSBrZXkgd2lsbCBhbHdheXMgYmUgY2FtZWxDYXNlZCBpbiBEYXRhXG5cdFx0XHRcdGRhdGEgPSBkYXRhVXNlci5nZXQoIGVsZW0sIGtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gXCJkaXNjb3ZlclwiIHRoZSBkYXRhIGluXG5cdFx0XHRcdC8vIEhUTUw1IGN1c3RvbSBkYXRhLSogYXR0cnNcblx0XHRcdFx0ZGF0YSA9IGRhdGFBdHRyKCBlbGVtLCBrZXkgKTtcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSB0cmllZCByZWFsbHkgaGFyZCwgYnV0IHRoZSBkYXRhIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBkYXRhLi4uXG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzdG9yZSB0aGUgY2FtZWxDYXNlZCBrZXlcblx0XHRcdFx0ZGF0YVVzZXIuc2V0KCB0aGlzLCBrZXksIHZhbHVlICk7XG5cdFx0XHR9ICk7XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxLCBudWxsLCB0cnVlICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGtleSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGRhdGFVc2VyLnJlbW92ZSggdGhpcywga2V5ICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIHF1ZXVlO1xuXG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0dHlwZSA9ICggdHlwZSB8fCBcImZ4XCIgKSArIFwicXVldWVcIjtcblx0XHRcdHF1ZXVlID0gZGF0YVByaXYuZ2V0KCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdC8vIFNwZWVkIHVwIGRlcXVldWUgYnkgZ2V0dGluZyBvdXQgcXVpY2tseSBpZiB0aGlzIGlzIGp1c3QgYSBsb29rdXBcblx0XHRcdGlmICggZGF0YSApIHtcblx0XHRcdFx0aWYgKCAhcXVldWUgfHwgQXJyYXkuaXNBcnJheSggZGF0YSApICkge1xuXHRcdFx0XHRcdHF1ZXVlID0gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCB0eXBlLCBqUXVlcnkubWFrZUFycmF5KCBkYXRhICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBkYXRhICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBxdWV1ZSB8fCBbXTtcblx0XHR9XG5cdH0sXG5cblx0ZGVxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUgKSB7XG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKCBlbGVtLCB0eXBlICksXG5cdFx0XHRzdGFydExlbmd0aCA9IHF1ZXVlLmxlbmd0aCxcblx0XHRcdGZuID0gcXVldWUuc2hpZnQoKSxcblx0XHRcdGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCB0eXBlICksXG5cdFx0XHRuZXh0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCBlbGVtLCB0eXBlICk7XG5cdFx0XHR9O1xuXG5cdFx0Ly8gSWYgdGhlIGZ4IHF1ZXVlIGlzIGRlcXVldWVkLCBhbHdheXMgcmVtb3ZlIHRoZSBwcm9ncmVzcyBzZW50aW5lbFxuXHRcdGlmICggZm4gPT09IFwiaW5wcm9ncmVzc1wiICkge1xuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpO1xuXHRcdFx0c3RhcnRMZW5ndGgtLTtcblx0XHR9XG5cblx0XHRpZiAoIGZuICkge1xuXG5cdFx0XHQvLyBBZGQgYSBwcm9ncmVzcyBzZW50aW5lbCB0byBwcmV2ZW50IHRoZSBmeCBxdWV1ZSBmcm9tIGJlaW5nXG5cdFx0XHQvLyBhdXRvbWF0aWNhbGx5IGRlcXVldWVkXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwiZnhcIiApIHtcblx0XHRcdFx0cXVldWUudW5zaGlmdCggXCJpbnByb2dyZXNzXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2xlYXIgdXAgdGhlIGxhc3QgcXVldWUgc3RvcCBmdW5jdGlvblxuXHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRmbi5jYWxsKCBlbGVtLCBuZXh0LCBob29rcyApO1xuXHRcdH1cblxuXHRcdGlmICggIXN0YXJ0TGVuZ3RoICYmIGhvb2tzICkge1xuXHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xuXHRcdH1cblx0fSxcblxuXHQvLyBOb3QgcHVibGljIC0gZ2VuZXJhdGUgYSBxdWV1ZUhvb2tzIG9iamVjdCwgb3IgcmV0dXJuIHRoZSBjdXJyZW50IG9uZVxuXHRfcXVldWVIb29rczogZnVuY3Rpb24oIGVsZW0sIHR5cGUgKSB7XG5cdFx0dmFyIGtleSA9IHR5cGUgKyBcInF1ZXVlSG9va3NcIjtcblx0XHRyZXR1cm4gZGF0YVByaXYuZ2V0KCBlbGVtLCBrZXkgKSB8fCBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIGtleSwge1xuXHRcdFx0ZW1wdHk6IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLmFkZCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgWyB0eXBlICsgXCJxdWV1ZVwiLCBrZXkgXSApO1xuXHRcdFx0fSApXG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0cXVldWU6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBzZXR0ZXIgPSAyO1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGRhdGEgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IFwiZnhcIjtcblx0XHRcdHNldHRlci0tO1xuXHRcdH1cblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA8IHNldHRlciApIHtcblx0XHRcdHJldHVybiBqUXVlcnkucXVldWUoIHRoaXNbIDAgXSwgdHlwZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhID09PSB1bmRlZmluZWQgP1xuXHRcdFx0dGhpcyA6XG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcXVldWUgPSBqUXVlcnkucXVldWUoIHRoaXMsIHR5cGUsIGRhdGEgKTtcblxuXHRcdFx0XHQvLyBFbnN1cmUgYSBob29rcyBmb3IgdGhpcyBxdWV1ZVxuXHRcdFx0XHRqUXVlcnkuX3F1ZXVlSG9va3MoIHRoaXMsIHR5cGUgKTtcblxuXHRcdFx0XHRpZiAoIHR5cGUgPT09IFwiZnhcIiAmJiBxdWV1ZVsgMCBdICE9PSBcImlucHJvZ3Jlc3NcIiApIHtcblx0XHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdH0sXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHR9ICk7XG5cdH0sXG5cdGNsZWFyUXVldWU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiB0aGlzLnF1ZXVlKCB0eXBlIHx8IFwiZnhcIiwgW10gKTtcblx0fSxcblxuXHQvLyBHZXQgYSBwcm9taXNlIHJlc29sdmVkIHdoZW4gcXVldWVzIG9mIGEgY2VydGFpbiB0eXBlXG5cdC8vIGFyZSBlbXB0aWVkIChmeCBpcyB0aGUgdHlwZSBieSBkZWZhdWx0KVxuXHRwcm9taXNlOiBmdW5jdGlvbiggdHlwZSwgb2JqICkge1xuXHRcdHZhciB0bXAsXG5cdFx0XHRjb3VudCA9IDEsXG5cdFx0XHRkZWZlciA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0ZWxlbWVudHMgPSB0aGlzLFxuXHRcdFx0aSA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0cmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICEoIC0tY291bnQgKSApIHtcblx0XHRcdFx0XHRkZWZlci5yZXNvbHZlV2l0aCggZWxlbWVudHMsIFsgZWxlbWVudHMgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG9iaiA9IHR5cGU7XG5cdFx0XHR0eXBlID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdHRtcCA9IGRhdGFQcml2LmdldCggZWxlbWVudHNbIGkgXSwgdHlwZSArIFwicXVldWVIb29rc1wiICk7XG5cdFx0XHRpZiAoIHRtcCAmJiB0bXAuZW1wdHkgKSB7XG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdHRtcC5lbXB0eS5hZGQoIHJlc29sdmUgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVzb2x2ZSgpO1xuXHRcdHJldHVybiBkZWZlci5wcm9taXNlKCBvYmogKTtcblx0fVxufSApO1xudmFyIHBudW0gPSAoIC9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvICkuc291cmNlO1xuXG52YXIgcmNzc051bSA9IG5ldyBSZWdFeHAoIFwiXig/OihbKy1dKT18KShcIiArIHBudW0gKyBcIikoW2EteiVdKikkXCIsIFwiaVwiICk7XG5cblxudmFyIGNzc0V4cGFuZCA9IFsgXCJUb3BcIiwgXCJSaWdodFwiLCBcIkJvdHRvbVwiLCBcIkxlZnRcIiBdO1xuXG52YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuXHR2YXIgaXNBdHRhY2hlZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICk7XG5cdFx0fSxcblx0XHRjb21wb3NlZCA9IHsgY29tcG9zZWQ6IHRydWUgfTtcblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErLCBFZGdlIDEyIC0gMTgrLCBpT1MgMTAuMCAtIDEwLjIgb25seVxuXHQvLyBDaGVjayBhdHRhY2htZW50IGFjcm9zcyBzaGFkb3cgRE9NIGJvdW5kYXJpZXMgd2hlbiBwb3NzaWJsZSAoZ2gtMzUwNClcblx0Ly8gU3VwcG9ydDogaU9TIDEwLjAtMTAuMiBvbmx5XG5cdC8vIEVhcmx5IGlPUyAxMCB2ZXJzaW9ucyBzdXBwb3J0IGBhdHRhY2hTaGFkb3dgIGJ1dCBub3QgYGdldFJvb3ROb2RlYCxcblx0Ly8gbGVhZGluZyB0byBlcnJvcnMuIFdlIG5lZWQgdG8gY2hlY2sgZm9yIGBnZXRSb290Tm9kZWAuXG5cdGlmICggZG9jdW1lbnRFbGVtZW50LmdldFJvb3ROb2RlICkge1xuXHRcdGlzQXR0YWNoZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApIHx8XG5cdFx0XHRcdGVsZW0uZ2V0Um9vdE5vZGUoIGNvbXBvc2VkICkgPT09IGVsZW0ub3duZXJEb2N1bWVudDtcblx0XHR9O1xuXHR9XG52YXIgaXNIaWRkZW5XaXRoaW5UcmVlID0gZnVuY3Rpb24oIGVsZW0sIGVsICkge1xuXG5cdFx0Ly8gaXNIaWRkZW5XaXRoaW5UcmVlIG1pZ2h0IGJlIGNhbGxlZCBmcm9tIGpRdWVyeSNmaWx0ZXIgZnVuY3Rpb247XG5cdFx0Ly8gaW4gdGhhdCBjYXNlLCBlbGVtZW50IHdpbGwgYmUgc2Vjb25kIGFyZ3VtZW50XG5cdFx0ZWxlbSA9IGVsIHx8IGVsZW07XG5cblx0XHQvLyBJbmxpbmUgc3R5bGUgdHJ1bXBzIGFsbFxuXHRcdHJldHVybiBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIHx8XG5cdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiZcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlLCBjaGVjayBjb21wdXRlZCBzdHlsZVxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQzIC0gNDVcblx0XHRcdC8vIERpc2Nvbm5lY3RlZCBlbGVtZW50cyBjYW4gaGF2ZSBjb21wdXRlZCBkaXNwbGF5OiBub25lLCBzbyBmaXJzdCBjb25maXJtIHRoYXQgZWxlbSBpc1xuXHRcdFx0Ly8gaW4gdGhlIGRvY3VtZW50LlxuXHRcdFx0aXNBdHRhY2hlZCggZWxlbSApICYmXG5cblx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgPT09IFwibm9uZVwiO1xuXHR9O1xuXG52YXIgc3dhcCA9IGZ1bmN0aW9uKCBlbGVtLCBvcHRpb25zLCBjYWxsYmFjaywgYXJncyApIHtcblx0dmFyIHJldCwgbmFtZSxcblx0XHRvbGQgPSB7fTtcblxuXHQvLyBSZW1lbWJlciB0aGUgb2xkIHZhbHVlcywgYW5kIGluc2VydCB0aGUgbmV3IG9uZXNcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdG9sZFsgbmFtZSBdID0gZWxlbS5zdHlsZVsgbmFtZSBdO1xuXHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IG9wdGlvbnNbIG5hbWUgXTtcblx0fVxuXG5cdHJldCA9IGNhbGxiYWNrLmFwcGx5KCBlbGVtLCBhcmdzIHx8IFtdICk7XG5cblx0Ly8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG5cdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcblx0XHRlbGVtLnN0eWxlWyBuYW1lIF0gPSBvbGRbIG5hbWUgXTtcblx0fVxuXG5cdHJldHVybiByZXQ7XG59O1xuXG5cblxuXG5mdW5jdGlvbiBhZGp1c3RDU1MoIGVsZW0sIHByb3AsIHZhbHVlUGFydHMsIHR3ZWVuICkge1xuXHR2YXIgYWRqdXN0ZWQsIHNjYWxlLFxuXHRcdG1heEl0ZXJhdGlvbnMgPSAyMCxcblx0XHRjdXJyZW50VmFsdWUgPSB0d2VlbiA/XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuLmN1cigpO1xuXHRcdFx0fSA6XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGpRdWVyeS5jc3MoIGVsZW0sIHByb3AsIFwiXCIgKTtcblx0XHRcdH0sXG5cdFx0aW5pdGlhbCA9IGN1cnJlbnRWYWx1ZSgpLFxuXHRcdHVuaXQgPSB2YWx1ZVBhcnRzICYmIHZhbHVlUGFydHNbIDMgXSB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSA/IFwiXCIgOiBcInB4XCIgKSxcblxuXHRcdC8vIFN0YXJ0aW5nIHZhbHVlIGNvbXB1dGF0aW9uIGlzIHJlcXVpcmVkIGZvciBwb3RlbnRpYWwgdW5pdCBtaXNtYXRjaGVzXG5cdFx0aW5pdGlhbEluVW5pdCA9IGVsZW0ubm9kZVR5cGUgJiZcblx0XHRcdCggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdIHx8IHVuaXQgIT09IFwicHhcIiAmJiAraW5pdGlhbCApICYmXG5cdFx0XHRyY3NzTnVtLmV4ZWMoIGpRdWVyeS5jc3MoIGVsZW0sIHByb3AgKSApO1xuXG5cdGlmICggaW5pdGlhbEluVW5pdCAmJiBpbml0aWFsSW5Vbml0WyAzIF0gIT09IHVuaXQgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NTRcblx0XHQvLyBIYWx2ZSB0aGUgaXRlcmF0aW9uIHRhcmdldCB2YWx1ZSB0byBwcmV2ZW50IGludGVyZmVyZW5jZSBmcm9tIENTUyB1cHBlciBib3VuZHMgKGdoLTIxNDQpXG5cdFx0aW5pdGlhbCA9IGluaXRpYWwgLyAyO1xuXG5cdFx0Ly8gVHJ1c3QgdW5pdHMgcmVwb3J0ZWQgYnkgalF1ZXJ5LmNzc1xuXHRcdHVuaXQgPSB1bml0IHx8IGluaXRpYWxJblVuaXRbIDMgXTtcblxuXHRcdC8vIEl0ZXJhdGl2ZWx5IGFwcHJveGltYXRlIGZyb20gYSBub256ZXJvIHN0YXJ0aW5nIHBvaW50XG5cdFx0aW5pdGlhbEluVW5pdCA9ICtpbml0aWFsIHx8IDE7XG5cblx0XHR3aGlsZSAoIG1heEl0ZXJhdGlvbnMtLSApIHtcblxuXHRcdFx0Ly8gRXZhbHVhdGUgYW5kIHVwZGF0ZSBvdXIgYmVzdCBndWVzcyAoZG91YmxpbmcgZ3Vlc3NlcyB0aGF0IHplcm8gb3V0KS5cblx0XHRcdC8vIEZpbmlzaCBpZiB0aGUgc2NhbGUgZXF1YWxzIG9yIGNyb3NzZXMgMSAobWFraW5nIHRoZSBvbGQqbmV3IHByb2R1Y3Qgbm9uLXBvc2l0aXZlKS5cblx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCwgaW5pdGlhbEluVW5pdCArIHVuaXQgKTtcblx0XHRcdGlmICggKCAxIC0gc2NhbGUgKSAqICggMSAtICggc2NhbGUgPSBjdXJyZW50VmFsdWUoKSAvIGluaXRpYWwgfHwgMC41ICkgKSA8PSAwICkge1xuXHRcdFx0XHRtYXhJdGVyYXRpb25zID0gMDtcblx0XHRcdH1cblx0XHRcdGluaXRpYWxJblVuaXQgPSBpbml0aWFsSW5Vbml0IC8gc2NhbGU7XG5cblx0XHR9XG5cblx0XHRpbml0aWFsSW5Vbml0ID0gaW5pdGlhbEluVW5pdCAqIDI7XG5cdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCApO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHdlIHVwZGF0ZSB0aGUgdHdlZW4gcHJvcGVydGllcyBsYXRlciBvblxuXHRcdHZhbHVlUGFydHMgPSB2YWx1ZVBhcnRzIHx8IFtdO1xuXHR9XG5cblx0aWYgKCB2YWx1ZVBhcnRzICkge1xuXHRcdGluaXRpYWxJblVuaXQgPSAraW5pdGlhbEluVW5pdCB8fCAraW5pdGlhbCB8fCAwO1xuXG5cdFx0Ly8gQXBwbHkgcmVsYXRpdmUgb2Zmc2V0ICgrPS8tPSkgaWYgc3BlY2lmaWVkXG5cdFx0YWRqdXN0ZWQgPSB2YWx1ZVBhcnRzWyAxIF0gP1xuXHRcdFx0aW5pdGlhbEluVW5pdCArICggdmFsdWVQYXJ0c1sgMSBdICsgMSApICogdmFsdWVQYXJ0c1sgMiBdIDpcblx0XHRcdCt2YWx1ZVBhcnRzWyAyIF07XG5cdFx0aWYgKCB0d2VlbiApIHtcblx0XHRcdHR3ZWVuLnVuaXQgPSB1bml0O1xuXHRcdFx0dHdlZW4uc3RhcnQgPSBpbml0aWFsSW5Vbml0O1xuXHRcdFx0dHdlZW4uZW5kID0gYWRqdXN0ZWQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhZGp1c3RlZDtcbn1cblxuXG52YXIgZGVmYXVsdERpc3BsYXlNYXAgPSB7fTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdERpc3BsYXkoIGVsZW0gKSB7XG5cdHZhciB0ZW1wLFxuXHRcdGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudCxcblx0XHRub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUsXG5cdFx0ZGlzcGxheSA9IGRlZmF1bHREaXNwbGF5TWFwWyBub2RlTmFtZSBdO1xuXG5cdGlmICggZGlzcGxheSApIHtcblx0XHRyZXR1cm4gZGlzcGxheTtcblx0fVxuXG5cdHRlbXAgPSBkb2MuYm9keS5hcHBlbmRDaGlsZCggZG9jLmNyZWF0ZUVsZW1lbnQoIG5vZGVOYW1lICkgKTtcblx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoIHRlbXAsIFwiZGlzcGxheVwiICk7XG5cblx0dGVtcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0ZW1wICk7XG5cblx0aWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiApIHtcblx0XHRkaXNwbGF5ID0gXCJibG9ja1wiO1xuXHR9XG5cdGRlZmF1bHREaXNwbGF5TWFwWyBub2RlTmFtZSBdID0gZGlzcGxheTtcblxuXHRyZXR1cm4gZGlzcGxheTtcbn1cblxuZnVuY3Rpb24gc2hvd0hpZGUoIGVsZW1lbnRzLCBzaG93ICkge1xuXHR2YXIgZGlzcGxheSwgZWxlbSxcblx0XHR2YWx1ZXMgPSBbXSxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoO1xuXG5cdC8vIERldGVybWluZSBuZXcgZGlzcGxheSB2YWx1ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIGNoYW5nZVxuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGVsZW0gPSBlbGVtZW50c1sgaW5kZXggXTtcblx0XHRpZiAoICFlbGVtLnN0eWxlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcblx0XHRpZiAoIHNob3cgKSB7XG5cblx0XHRcdC8vIFNpbmNlIHdlIGZvcmNlIHZpc2liaWxpdHkgdXBvbiBjYXNjYWRlLWhpZGRlbiBlbGVtZW50cywgYW4gaW1tZWRpYXRlIChhbmQgc2xvdylcblx0XHRcdC8vIGNoZWNrIGlzIHJlcXVpcmVkIGluIHRoaXMgZmlyc3QgbG9vcCB1bmxlc3Mgd2UgaGF2ZSBhIG5vbmVtcHR5IGRpc3BsYXkgdmFsdWUgKGVpdGhlclxuXHRcdFx0Ly8gaW5saW5lIG9yIGFib3V0LXRvLWJlLXJlc3RvcmVkKVxuXHRcdFx0aWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiApIHtcblx0XHRcdFx0dmFsdWVzWyBpbmRleCBdID0gZGF0YVByaXYuZ2V0KCBlbGVtLCBcImRpc3BsYXlcIiApIHx8IG51bGw7XG5cdFx0XHRcdGlmICggIXZhbHVlc1sgaW5kZXggXSApIHtcblx0XHRcdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJiBpc0hpZGRlbldpdGhpblRyZWUoIGVsZW0gKSApIHtcblx0XHRcdFx0dmFsdWVzWyBpbmRleCBdID0gZ2V0RGVmYXVsdERpc3BsYXkoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCBkaXNwbGF5ICE9PSBcIm5vbmVcIiApIHtcblx0XHRcdFx0dmFsdWVzWyBpbmRleCBdID0gXCJub25lXCI7XG5cblx0XHRcdFx0Ly8gUmVtZW1iZXIgd2hhdCB3ZSdyZSBvdmVyd3JpdGluZ1xuXHRcdFx0XHRkYXRhUHJpdi5zZXQoIGVsZW0sIFwiZGlzcGxheVwiLCBkaXNwbGF5ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBkaXNwbGF5IG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlY29uZCBsb29wIHRvIGF2b2lkIGNvbnN0YW50IHJlZmxvd1xuXHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGlmICggdmFsdWVzWyBpbmRleCBdICE9IG51bGwgKSB7XG5cdFx0XHRlbGVtZW50c1sgaW5kZXggXS5zdHlsZS5kaXNwbGF5ID0gdmFsdWVzWyBpbmRleCBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtZW50cztcbn1cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRzaG93OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2hvd0hpZGUoIHRoaXMsIHRydWUgKTtcblx0fSxcblx0aGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNob3dIaWRlKCB0aGlzICk7XG5cdH0sXG5cdHRvZ2dsZTogZnVuY3Rpb24oIHN0YXRlICkge1xuXHRcdGlmICggdHlwZW9mIHN0YXRlID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdHJldHVybiBzdGF0ZSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIGlzSGlkZGVuV2l0aGluVHJlZSggdGhpcyApICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59ICk7XG52YXIgcmNoZWNrYWJsZVR5cGUgPSAoIC9eKD86Y2hlY2tib3h8cmFkaW8pJC9pICk7XG5cbnZhciBydGFnTmFtZSA9ICggLzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKS9pICk7XG5cbnZhciByc2NyaXB0VHlwZSA9ICggL14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSApO1xuXG5cblxuLy8gV2UgaGF2ZSB0byBjbG9zZSB0aGVzZSB0YWdzIHRvIHN1cHBvcnQgWEhUTUwgKCMxMzIwMClcbnZhciB3cmFwTWFwID0ge1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdG9wdGlvbjogWyAxLCBcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIiwgXCI8L3NlbGVjdD5cIiBdLFxuXG5cdC8vIFhIVE1MIHBhcnNlcnMgZG8gbm90IG1hZ2ljYWxseSBpbnNlcnQgZWxlbWVudHMgaW4gdGhlXG5cdC8vIHNhbWUgd2F5IHRoYXQgdGFnIHNvdXAgcGFyc2VycyBkby4gU28gd2UgY2Fubm90IHNob3J0ZW5cblx0Ly8gdGhpcyBieSBvbWl0dGluZyA8dGJvZHk+IG9yIG90aGVyIHJlcXVpcmVkIGVsZW1lbnRzLlxuXHR0aGVhZDogWyAxLCBcIjx0YWJsZT5cIiwgXCI8L3RhYmxlPlwiIF0sXG5cdGNvbDogWyAyLCBcIjx0YWJsZT48Y29sZ3JvdXA+XCIsIFwiPC9jb2xncm91cD48L3RhYmxlPlwiIF0sXG5cdHRyOiBbIDIsIFwiPHRhYmxlPjx0Ym9keT5cIiwgXCI8L3Rib2R5PjwvdGFibGU+XCIgXSxcblx0dGQ6IFsgMywgXCI8dGFibGU+PHRib2R5Pjx0cj5cIiwgXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIiBdLFxuXG5cdF9kZWZhdWx0OiBbIDAsIFwiXCIsIFwiXCIgXVxufTtcblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbndyYXBNYXAub3B0Z3JvdXAgPSB3cmFwTWFwLm9wdGlvbjtcblxud3JhcE1hcC50Ym9keSA9IHdyYXBNYXAudGZvb3QgPSB3cmFwTWFwLmNvbGdyb3VwID0gd3JhcE1hcC5jYXB0aW9uID0gd3JhcE1hcC50aGVhZDtcbndyYXBNYXAudGggPSB3cmFwTWFwLnRkO1xuXG5cbmZ1bmN0aW9uIGdldEFsbCggY29udGV4dCwgdGFnICkge1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0Ly8gVXNlIHR5cGVvZiB0byBhdm9pZCB6ZXJvLWFyZ3VtZW50IG1ldGhvZCBpbnZvY2F0aW9uIG9uIGhvc3Qgb2JqZWN0cyAoIzE1MTUxKVxuXHR2YXIgcmV0O1xuXG5cdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0cmV0ID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnIHx8IFwiKlwiICk7XG5cblx0fSBlbHNlIGlmICggdHlwZW9mIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRyZXQgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIHRhZyB8fCBcIipcIiApO1xuXG5cdH0gZWxzZSB7XG5cdFx0cmV0ID0gW107XG5cdH1cblxuXHRpZiAoIHRhZyA9PT0gdW5kZWZpbmVkIHx8IHRhZyAmJiBub2RlTmFtZSggY29udGV4dCwgdGFnICkgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5tZXJnZSggWyBjb250ZXh0IF0sIHJldCApO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn1cblxuXG4vLyBNYXJrIHNjcmlwdHMgYXMgaGF2aW5nIGFscmVhZHkgYmVlbiBldmFsdWF0ZWRcbmZ1bmN0aW9uIHNldEdsb2JhbEV2YWwoIGVsZW1zLCByZWZFbGVtZW50cyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGRhdGFQcml2LnNldChcblx0XHRcdGVsZW1zWyBpIF0sXG5cdFx0XHRcImdsb2JhbEV2YWxcIixcblx0XHRcdCFyZWZFbGVtZW50cyB8fCBkYXRhUHJpdi5nZXQoIHJlZkVsZW1lbnRzWyBpIF0sIFwiZ2xvYmFsRXZhbFwiIClcblx0XHQpO1xuXHR9XG59XG5cblxudmFyIHJodG1sID0gLzx8JiM/XFx3KzsvO1xuXG5mdW5jdGlvbiBidWlsZEZyYWdtZW50KCBlbGVtcywgY29udGV4dCwgc2NyaXB0cywgc2VsZWN0aW9uLCBpZ25vcmVkICkge1xuXHR2YXIgZWxlbSwgdG1wLCB0YWcsIHdyYXAsIGF0dGFjaGVkLCBqLFxuXHRcdGZyYWdtZW50ID0gY29udGV4dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG5cdFx0bm9kZXMgPSBbXSxcblx0XHRpID0gMCxcblx0XHRsID0gZWxlbXMubGVuZ3RoO1xuXG5cdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRlbGVtID0gZWxlbXNbIGkgXTtcblxuXHRcdGlmICggZWxlbSB8fCBlbGVtID09PSAwICkge1xuXG5cdFx0XHQvLyBBZGQgbm9kZXMgZGlyZWN0bHlcblx0XHRcdGlmICggdG9UeXBlKCBlbGVtICkgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBub2RlcywgZWxlbS5ub2RlVHlwZSA/IFsgZWxlbSBdIDogZWxlbSApO1xuXG5cdFx0XHQvLyBDb252ZXJ0IG5vbi1odG1sIGludG8gYSB0ZXh0IG5vZGVcblx0XHRcdH0gZWxzZSBpZiAoICFyaHRtbC50ZXN0KCBlbGVtICkgKSB7XG5cdFx0XHRcdG5vZGVzLnB1c2goIGNvbnRleHQuY3JlYXRlVGV4dE5vZGUoIGVsZW0gKSApO1xuXG5cdFx0XHQvLyBDb252ZXJ0IGh0bWwgaW50byBET00gbm9kZXNcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRtcCA9IHRtcCB8fCBmcmFnbWVudC5hcHBlbmRDaGlsZCggY29udGV4dC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKTtcblxuXHRcdFx0XHQvLyBEZXNlcmlhbGl6ZSBhIHN0YW5kYXJkIHJlcHJlc2VudGF0aW9uXG5cdFx0XHRcdHRhZyA9ICggcnRhZ05hbWUuZXhlYyggZWxlbSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR3cmFwID0gd3JhcE1hcFsgdGFnIF0gfHwgd3JhcE1hcC5fZGVmYXVsdDtcblx0XHRcdFx0dG1wLmlubmVySFRNTCA9IHdyYXBbIDEgXSArIGpRdWVyeS5odG1sUHJlZmlsdGVyKCBlbGVtICkgKyB3cmFwWyAyIF07XG5cblx0XHRcdFx0Ly8gRGVzY2VuZCB0aHJvdWdoIHdyYXBwZXJzIHRvIHRoZSByaWdodCBjb250ZW50XG5cdFx0XHRcdGogPSB3cmFwWyAwIF07XG5cdFx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRcdHRtcCA9IHRtcC5sYXN0Q2hpbGQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIG5vZGVzLCB0bXAuY2hpbGROb2RlcyApO1xuXG5cdFx0XHRcdC8vIFJlbWVtYmVyIHRoZSB0b3AtbGV2ZWwgY29udGFpbmVyXG5cdFx0XHRcdHRtcCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRcdFx0Ly8gRW5zdXJlIHRoZSBjcmVhdGVkIG5vZGVzIGFyZSBvcnBoYW5lZCAoIzEyMzkyKVxuXHRcdFx0XHR0bXAudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSB3cmFwcGVyIGZyb20gZnJhZ21lbnRcblx0ZnJhZ21lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG5cdGkgPSAwO1xuXHR3aGlsZSAoICggZWxlbSA9IG5vZGVzWyBpKysgXSApICkge1xuXG5cdFx0Ly8gU2tpcCBlbGVtZW50cyBhbHJlYWR5IGluIHRoZSBjb250ZXh0IGNvbGxlY3Rpb24gKHRyYWMtNDA4Nylcblx0XHRpZiAoIHNlbGVjdGlvbiAmJiBqUXVlcnkuaW5BcnJheSggZWxlbSwgc2VsZWN0aW9uICkgPiAtMSApIHtcblx0XHRcdGlmICggaWdub3JlZCApIHtcblx0XHRcdFx0aWdub3JlZC5wdXNoKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRhdHRhY2hlZCA9IGlzQXR0YWNoZWQoIGVsZW0gKTtcblxuXHRcdC8vIEFwcGVuZCB0byBmcmFnbWVudFxuXHRcdHRtcCA9IGdldEFsbCggZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGVsZW0gKSwgXCJzY3JpcHRcIiApO1xuXG5cdFx0Ly8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXHRcdGlmICggYXR0YWNoZWQgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCB0bXAgKTtcblx0XHR9XG5cblx0XHQvLyBDYXB0dXJlIGV4ZWN1dGFibGVzXG5cdFx0aWYgKCBzY3JpcHRzICkge1xuXHRcdFx0aiA9IDA7XG5cdFx0XHR3aGlsZSAoICggZWxlbSA9IHRtcFsgaisrIF0gKSApIHtcblx0XHRcdFx0aWYgKCByc2NyaXB0VHlwZS50ZXN0KCBlbGVtLnR5cGUgfHwgXCJcIiApICkge1xuXHRcdFx0XHRcdHNjcmlwdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZyYWdtZW50O1xufVxuXG5cbiggZnVuY3Rpb24oKSB7XG5cdHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRkaXYgPSBmcmFnbWVudC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICksXG5cdFx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5XG5cdC8vIENoZWNrIHN0YXRlIGxvc3QgaWYgdGhlIG5hbWUgaXMgc2V0ICgjMTEyMTcpXG5cdC8vIFN1cHBvcnQ6IFdpbmRvd3MgV2ViIEFwcHMgKFdXQSlcblx0Ly8gYG5hbWVgIGFuZCBgdHlwZWAgbXVzdCB1c2UgLnNldEF0dHJpYnV0ZSBmb3IgV1dBICgjMTQ5MDEpXG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwicmFkaW9cIiApO1xuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIiApO1xuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcInRcIiApO1xuXG5cdGRpdi5hcHBlbmRDaGlsZCggaW5wdXQgKTtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4xIG9ubHlcblx0Ly8gT2xkZXIgV2ViS2l0IGRvZXNuJ3QgY2xvbmUgY2hlY2tlZCBzdGF0ZSBjb3JyZWN0bHkgaW4gZnJhZ21lbnRzXG5cdHN1cHBvcnQuY2hlY2tDbG9uZSA9IGRpdi5jbG9uZU5vZGUoIHRydWUgKS5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuY2hlY2tlZDtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0Ly8gTWFrZSBzdXJlIHRleHRhcmVhIChhbmQgY2hlY2tib3gpIGRlZmF1bHRWYWx1ZSBpcyBwcm9wZXJseSBjbG9uZWRcblx0ZGl2LmlubmVySFRNTCA9IFwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiO1xuXHRzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkID0gISFkaXYuY2xvbmVOb2RlKCB0cnVlICkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZTtcbn0gKSgpO1xuXG5cbnZhclxuXHRya2V5RXZlbnQgPSAvXmtleS8sXG5cdHJtb3VzZUV2ZW50ID0gL14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLFxuXHRydHlwZW5hbWVzcGFjZSA9IC9eKFteLl0qKSg/OlxcLiguKyl8KS87XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMStcbi8vIGZvY3VzKCkgYW5kIGJsdXIoKSBhcmUgYXN5bmNocm9ub3VzLCBleGNlcHQgd2hlbiB0aGV5IGFyZSBuby1vcC5cbi8vIFNvIGV4cGVjdCBmb2N1cyB0byBiZSBzeW5jaHJvbm91cyB3aGVuIHRoZSBlbGVtZW50IGlzIGFscmVhZHkgYWN0aXZlLFxuLy8gYW5kIGJsdXIgdG8gYmUgc3luY2hyb25vdXMgd2hlbiB0aGUgZWxlbWVudCBpcyBub3QgYWxyZWFkeSBhY3RpdmUuXG4vLyAoZm9jdXMgYW5kIGJsdXIgYXJlIGFsd2F5cyBzeW5jaHJvbm91cyBpbiBvdGhlciBzdXBwb3J0ZWQgYnJvd3NlcnMsXG4vLyB0aGlzIGp1c3QgZGVmaW5lcyB3aGVuIHdlIGNhbiBjb3VudCBvbiBpdCkuXG5mdW5jdGlvbiBleHBlY3RTeW5jKCBlbGVtLCB0eXBlICkge1xuXHRyZXR1cm4gKCBlbGVtID09PSBzYWZlQWN0aXZlRWxlbWVudCgpICkgPT09ICggdHlwZSA9PT0gXCJmb2N1c1wiICk7XG59XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBBY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gdGhyb3cgdW5leHBlY3RlZGx5XG4vLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzOTNcbmZ1bmN0aW9uIHNhZmVBY3RpdmVFbGVtZW50KCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHR9IGNhdGNoICggZXJyICkgeyB9XG59XG5cbmZ1bmN0aW9uIG9uKCBlbGVtLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCBvbmUgKSB7XG5cdHZhciBvcmlnRm4sIHR5cGU7XG5cblx0Ly8gVHlwZXMgY2FuIGJlIGEgbWFwIG9mIHR5cGVzL2hhbmRsZXJzXG5cdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gKCB0eXBlcy1PYmplY3QsIHNlbGVjdG9yLCBkYXRhIClcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcy1PYmplY3QsIGRhdGEgKVxuXHRcdFx0ZGF0YSA9IGRhdGEgfHwgc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdG9uKCBlbGVtLCB0eXBlLCBzZWxlY3RvciwgZGF0YSwgdHlwZXNbIHR5cGUgXSwgb25lICk7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0aWYgKCBkYXRhID09IG51bGwgJiYgZm4gPT0gbnVsbCApIHtcblxuXHRcdC8vICggdHlwZXMsIGZuIClcblx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdGRhdGEgPSBzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICggZm4gPT0gbnVsbCApIHtcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcywgc2VsZWN0b3IsIGZuIClcblx0XHRcdGZuID0gZGF0YTtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gKCB0eXBlcywgZGF0YSwgZm4gKVxuXHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHR9XG5cdGlmICggZm4gPT09IGZhbHNlICkge1xuXHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdH0gZWxzZSBpZiAoICFmbiApIHtcblx0XHRyZXR1cm4gZWxlbTtcblx0fVxuXG5cdGlmICggb25lID09PSAxICkge1xuXHRcdG9yaWdGbiA9IGZuO1xuXHRcdGZuID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHQvLyBDYW4gdXNlIGFuIGVtcHR5IHNldCwgc2luY2UgZXZlbnQgY29udGFpbnMgdGhlIGluZm9cblx0XHRcdGpRdWVyeSgpLm9mZiggZXZlbnQgKTtcblx0XHRcdHJldHVybiBvcmlnRm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdH07XG5cblx0XHQvLyBVc2Ugc2FtZSBndWlkIHNvIGNhbGxlciBjYW4gcmVtb3ZlIHVzaW5nIG9yaWdGblxuXHRcdGZuLmd1aWQgPSBvcmlnRm4uZ3VpZCB8fCAoIG9yaWdGbi5ndWlkID0galF1ZXJ5Lmd1aWQrKyApO1xuXHR9XG5cdHJldHVybiBlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdGpRdWVyeS5ldmVudC5hZGQoIHRoaXMsIHR5cGVzLCBmbiwgZGF0YSwgc2VsZWN0b3IgKTtcblx0fSApO1xufVxuXG4vKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgbWFuYWdpbmcgZXZlbnRzIC0tIG5vdCBwYXJ0IG9mIHRoZSBwdWJsaWMgaW50ZXJmYWNlLlxuICogUHJvcHMgdG8gRGVhbiBFZHdhcmRzJyBhZGRFdmVudCBsaWJyYXJ5IGZvciBtYW55IG9mIHRoZSBpZGVhcy5cbiAqL1xualF1ZXJ5LmV2ZW50ID0ge1xuXG5cdGdsb2JhbDoge30sXG5cblx0YWRkOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIGRhdGEsIHNlbGVjdG9yICkge1xuXG5cdFx0dmFyIGhhbmRsZU9iakluLCBldmVudEhhbmRsZSwgdG1wLFxuXHRcdFx0ZXZlbnRzLCB0LCBoYW5kbGVPYmosXG5cdFx0XHRzcGVjaWFsLCBoYW5kbGVycywgdHlwZSwgbmFtZXNwYWNlcywgb3JpZ1R5cGUsXG5cdFx0XHRlbGVtRGF0YSA9IGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0Ly8gRG9uJ3QgYXR0YWNoIGV2ZW50cyB0byBub0RhdGEgb3IgdGV4dC9jb21tZW50IG5vZGVzIChidXQgYWxsb3cgcGxhaW4gb2JqZWN0cylcblx0XHRpZiAoICFlbGVtRGF0YSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYW4gb2JqZWN0IG9mIGN1c3RvbSBkYXRhIGluIGxpZXUgb2YgdGhlIGhhbmRsZXJcblx0XHRpZiAoIGhhbmRsZXIuaGFuZGxlciApIHtcblx0XHRcdGhhbmRsZU9iakluID0gaGFuZGxlcjtcblx0XHRcdGhhbmRsZXIgPSBoYW5kbGVPYmpJbi5oYW5kbGVyO1xuXHRcdFx0c2VsZWN0b3IgPSBoYW5kbGVPYmpJbi5zZWxlY3Rvcjtcblx0XHR9XG5cblx0XHQvLyBFbnN1cmUgdGhhdCBpbnZhbGlkIHNlbGVjdG9ycyB0aHJvdyBleGNlcHRpb25zIGF0IGF0dGFjaCB0aW1lXG5cdFx0Ly8gRXZhbHVhdGUgYWdhaW5zdCBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBlbGVtIGlzIGEgbm9uLWVsZW1lbnQgbm9kZSAoZS5nLiwgZG9jdW1lbnQpXG5cdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggZG9jdW1lbnRFbGVtZW50LCBzZWxlY3RvciApO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBoYW5kbGVyIGhhcyBhIHVuaXF1ZSBJRCwgdXNlZCB0byBmaW5kL3JlbW92ZSBpdCBsYXRlclxuXHRcdGlmICggIWhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdGhhbmRsZXIuZ3VpZCA9IGpRdWVyeS5ndWlkKys7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdCB0aGUgZWxlbWVudCdzIGV2ZW50IHN0cnVjdHVyZSBhbmQgbWFpbiBoYW5kbGVyLCBpZiB0aGlzIGlzIHRoZSBmaXJzdFxuXHRcdGlmICggISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgPSB7fTtcblx0XHR9XG5cdFx0aWYgKCAhKCBldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSApICkge1xuXHRcdFx0ZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUgPSBmdW5jdGlvbiggZSApIHtcblxuXHRcdFx0XHQvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuXHRcdFx0XHQvLyB3aGVuIGFuIGV2ZW50IGlzIGNhbGxlZCBhZnRlciBhIHBhZ2UgaGFzIHVubG9hZGVkXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgIT09IGUudHlwZSA/XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LmRpc3BhdGNoLmFwcGx5KCBlbGVtLCBhcmd1bWVudHMgKSA6IHVuZGVmaW5lZDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIG11bHRpcGxlIGV2ZW50cyBzZXBhcmF0ZWQgYnkgYSBzcGFjZVxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBUaGVyZSAqbXVzdCogYmUgYSB0eXBlLCBubyBhdHRhY2hpbmcgbmFtZXNwYWNlLW9ubHkgaGFuZGxlcnNcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBldmVudCBjaGFuZ2VzIGl0cyB0eXBlLCB1c2UgdGhlIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBjaGFuZ2VkIHR5cGVcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXG5cdFx0XHQvLyBJZiBzZWxlY3RvciBkZWZpbmVkLCBkZXRlcm1pbmUgc3BlY2lhbCBldmVudCBhcGkgdHlwZSwgb3RoZXJ3aXNlIGdpdmVuIHR5cGVcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblxuXHRcdFx0Ly8gVXBkYXRlIHNwZWNpYWwgYmFzZWQgb24gbmV3bHkgcmVzZXQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIGhhbmRsZU9iaiBpcyBwYXNzZWQgdG8gYWxsIGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRoYW5kbGVPYmogPSBqUXVlcnkuZXh0ZW5kKCB7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdG9yaWdUeXBlOiBvcmlnVHlwZSxcblx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0aGFuZGxlcjogaGFuZGxlcixcblx0XHRcdFx0Z3VpZDogaGFuZGxlci5ndWlkLFxuXHRcdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXG5cdFx0XHRcdG5lZWRzQ29udGV4dDogc2VsZWN0b3IgJiYgalF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICksXG5cdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApXG5cdFx0XHR9LCBoYW5kbGVPYmpJbiApO1xuXG5cdFx0XHQvLyBJbml0IHRoZSBldmVudCBoYW5kbGVyIHF1ZXVlIGlmIHdlJ3JlIHRoZSBmaXJzdFxuXHRcdFx0aWYgKCAhKCBoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdICkgKSB7XG5cdFx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gPSBbXTtcblx0XHRcdFx0aGFuZGxlcnMuZGVsZWdhdGVDb3VudCA9IDA7XG5cblx0XHRcdFx0Ly8gT25seSB1c2UgYWRkRXZlbnRMaXN0ZW5lciBpZiB0aGUgc3BlY2lhbCBldmVudHMgaGFuZGxlciByZXR1cm5zIGZhbHNlXG5cdFx0XHRcdGlmICggIXNwZWNpYWwuc2V0dXAgfHxcblx0XHRcdFx0XHRzcGVjaWFsLnNldHVwLmNhbGwoIGVsZW0sIGRhdGEsIG5hbWVzcGFjZXMsIGV2ZW50SGFuZGxlICkgPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGV2ZW50SGFuZGxlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3BlY2lhbC5hZGQgKSB7XG5cdFx0XHRcdHNwZWNpYWwuYWRkLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXG5cdFx0XHRcdGlmICggIWhhbmRsZU9iai5oYW5kbGVyLmd1aWQgKSB7XG5cdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCA9IGhhbmRsZXIuZ3VpZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgdG8gdGhlIGVsZW1lbnQncyBoYW5kbGVyIGxpc3QsIGRlbGVnYXRlcyBpbiBmcm9udFxuXHRcdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50KyssIDAsIGhhbmRsZU9iaiApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlcnMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnRzIGhhdmUgZXZlciBiZWVuIHVzZWQsIGZvciBldmVudCBvcHRpbWl6YXRpb25cblx0XHRcdGpRdWVyeS5ldmVudC5nbG9iYWxbIHR5cGUgXSA9IHRydWU7XG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gRGV0YWNoIGFuIGV2ZW50IG9yIHNldCBvZiBldmVudHMgZnJvbSBhbiBlbGVtZW50XG5cdHJlbW92ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBzZWxlY3RvciwgbWFwcGVkVHlwZXMgKSB7XG5cblx0XHR2YXIgaiwgb3JpZ0NvdW50LCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuaGFzRGF0YSggZWxlbSApICYmIGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0aWYgKCAhZWxlbURhdGEgfHwgISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gT25jZSBmb3IgZWFjaCB0eXBlLm5hbWVzcGFjZSBpbiB0eXBlczsgdHlwZSBtYXkgYmUgb21pdHRlZFxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKyB0eXBlc1sgdCBdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gfHwgW107XG5cdFx0XHR0bXAgPSB0bXBbIDIgXSAmJlxuXHRcdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKCBcIlxcXFwuKD86LipcXFxcLnwpXCIgKSArIFwiKFxcXFwufCQpXCIgKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG1hdGNoaW5nIGV2ZW50c1xuXHRcdFx0b3JpZ0NvdW50ID0gaiA9IGhhbmRsZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaiBdO1xuXG5cdFx0XHRcdGlmICggKCBtYXBwZWRUeXBlcyB8fCBvcmlnVHlwZSA9PT0gaGFuZGxlT2JqLm9yaWdUeXBlICkgJiZcblx0XHRcdFx0XHQoICFoYW5kbGVyIHx8IGhhbmRsZXIuZ3VpZCA9PT0gaGFuZGxlT2JqLmd1aWQgKSAmJlxuXHRcdFx0XHRcdCggIXRtcCB8fCB0bXAudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkgJiZcblx0XHRcdFx0XHQoICFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gaGFuZGxlT2JqLnNlbGVjdG9yIHx8XG5cdFx0XHRcdFx0XHRzZWxlY3RvciA9PT0gXCIqKlwiICYmIGhhbmRsZU9iai5zZWxlY3RvciApICkge1xuXHRcdFx0XHRcdGhhbmRsZXJzLnNwbGljZSggaiwgMSApO1xuXG5cdFx0XHRcdFx0aWYgKCBoYW5kbGVPYmouc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggc3BlY2lhbC5yZW1vdmUgKSB7XG5cdFx0XHRcdFx0XHRzcGVjaWFsLnJlbW92ZS5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIGdlbmVyaWMgZXZlbnQgaGFuZGxlciBpZiB3ZSByZW1vdmVkIHNvbWV0aGluZyBhbmQgbm8gbW9yZSBoYW5kbGVycyBleGlzdFxuXHRcdFx0Ly8gKGF2b2lkcyBwb3RlbnRpYWwgZm9yIGVuZGxlc3MgcmVjdXJzaW9uIGR1cmluZyByZW1vdmFsIG9mIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMpXG5cdFx0XHRpZiAoIG9yaWdDb3VudCAmJiAhaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRpZiAoICFzcGVjaWFsLnRlYXJkb3duIHx8XG5cdFx0XHRcdFx0c3BlY2lhbC50ZWFyZG93bi5jYWxsKCBlbGVtLCBuYW1lc3BhY2VzLCBlbGVtRGF0YS5oYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGVsZW1EYXRhLmhhbmRsZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGV2ZW50c1sgdHlwZSBdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSBkYXRhIGFuZCB0aGUgZXhwYW5kbyBpZiBpdCdzIG5vIGxvbmdlciB1c2VkXG5cdFx0aWYgKCBqUXVlcnkuaXNFbXB0eU9iamVjdCggZXZlbnRzICkgKSB7XG5cdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFwiaGFuZGxlIGV2ZW50c1wiICk7XG5cdFx0fVxuXHR9LFxuXG5cdGRpc3BhdGNoOiBmdW5jdGlvbiggbmF0aXZlRXZlbnQgKSB7XG5cblx0XHQvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3Rcblx0XHR2YXIgZXZlbnQgPSBqUXVlcnkuZXZlbnQuZml4KCBuYXRpdmVFdmVudCApO1xuXG5cdFx0dmFyIGksIGosIHJldCwgbWF0Y2hlZCwgaGFuZGxlT2JqLCBoYW5kbGVyUXVldWUsXG5cdFx0XHRhcmdzID0gbmV3IEFycmF5KCBhcmd1bWVudHMubGVuZ3RoICksXG5cdFx0XHRoYW5kbGVycyA9ICggZGF0YVByaXYuZ2V0KCB0aGlzLCBcImV2ZW50c1wiICkgfHwge30gKVsgZXZlbnQudHlwZSBdIHx8IFtdLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyBldmVudC50eXBlIF0gfHwge307XG5cblx0XHQvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxuXHRcdGFyZ3NbIDAgXSA9IGV2ZW50O1xuXG5cdFx0Zm9yICggaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRhcmdzWyBpIF0gPSBhcmd1bWVudHNbIGkgXTtcblx0XHR9XG5cblx0XHRldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7XG5cblx0XHQvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG5cdFx0aWYgKCBzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGhhbmRsZXJzXG5cdFx0aGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwoIHRoaXMsIGV2ZW50LCBoYW5kbGVycyApO1xuXG5cdFx0Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoICggbWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG5cblx0XHRcdGogPSAwO1xuXHRcdFx0d2hpbGUgKCAoIGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbIGorKyBdICkgJiZcblx0XHRcdFx0IWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGV2ZW50IGlzIG5hbWVzcGFjZWQsIHRoZW4gZWFjaCBoYW5kbGVyIGlzIG9ubHkgaW52b2tlZCBpZiBpdCBpc1xuXHRcdFx0XHQvLyBzcGVjaWFsbHkgdW5pdmVyc2FsIG9yIGl0cyBuYW1lc3BhY2VzIGFyZSBhIHN1cGVyc2V0IG9mIHRoZSBldmVudCdzLlxuXHRcdFx0XHRpZiAoICFldmVudC5ybmFtZXNwYWNlIHx8IGhhbmRsZU9iai5uYW1lc3BhY2UgPT09IGZhbHNlIHx8XG5cdFx0XHRcdFx0ZXZlbnQucm5hbWVzcGFjZS50ZXN0KCBoYW5kbGVPYmoubmFtZXNwYWNlICkgKSB7XG5cblx0XHRcdFx0XHRldmVudC5oYW5kbGVPYmogPSBoYW5kbGVPYmo7XG5cdFx0XHRcdFx0ZXZlbnQuZGF0YSA9IGhhbmRsZU9iai5kYXRhO1xuXG5cdFx0XHRcdFx0cmV0ID0gKCAoIGpRdWVyeS5ldmVudC5zcGVjaWFsWyBoYW5kbGVPYmoub3JpZ1R5cGUgXSB8fCB7fSApLmhhbmRsZSB8fFxuXHRcdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIgKS5hcHBseSggbWF0Y2hlZC5lbGVtLCBhcmdzICk7XG5cblx0XHRcdFx0XHRpZiAoIHJldCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGV2ZW50LnJlc3VsdCA9IHJldCApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxuXHRcdGlmICggc3BlY2lhbC5wb3N0RGlzcGF0Y2ggKSB7XG5cdFx0XHRzcGVjaWFsLnBvc3REaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC5yZXN1bHQ7XG5cdH0sXG5cblx0aGFuZGxlcnM6IGZ1bmN0aW9uKCBldmVudCwgaGFuZGxlcnMgKSB7XG5cdFx0dmFyIGksIGhhbmRsZU9iaiwgc2VsLCBtYXRjaGVkSGFuZGxlcnMsIG1hdGNoZWRTZWxlY3RvcnMsXG5cdFx0XHRoYW5kbGVyUXVldWUgPSBbXSxcblx0XHRcdGRlbGVnYXRlQ291bnQgPSBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LFxuXHRcdFx0Y3VyID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0Ly8gRmluZCBkZWxlZ2F0ZSBoYW5kbGVyc1xuXHRcdGlmICggZGVsZWdhdGVDb3VudCAmJlxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTlcblx0XHRcdC8vIEJsYWNrLWhvbGUgU1ZHIDx1c2U+IGluc3RhbmNlIHRyZWVzICh0cmFjLTEzMTgwKVxuXHRcdFx0Y3VyLm5vZGVUeXBlICYmXG5cblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MlxuXHRcdFx0Ly8gU3VwcHJlc3Mgc3BlYy12aW9sYXRpbmcgY2xpY2tzIGluZGljYXRpbmcgYSBub24tcHJpbWFyeSBwb2ludGVyIGJ1dHRvbiAodHJhYy0zODYxKVxuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnQtdHlwZS1jbGlja1xuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTEgb25seVxuXHRcdFx0Ly8gLi4uYnV0IG5vdCBhcnJvdyBrZXkgXCJjbGlja3NcIiBvZiByYWRpbyBpbnB1dHMsIHdoaWNoIGNhbiBoYXZlIGBidXR0b25gIC0xIChnaC0yMzQzKVxuXHRcdFx0ISggZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGV2ZW50LmJ1dHRvbiA+PSAxICkgKSB7XG5cblx0XHRcdGZvciAoIDsgY3VyICE9PSB0aGlzOyBjdXIgPSBjdXIucGFyZW50Tm9kZSB8fCB0aGlzICkge1xuXG5cdFx0XHRcdC8vIERvbid0IGNoZWNrIG5vbi1lbGVtZW50cyAoIzEzMjA4KVxuXHRcdFx0XHQvLyBEb24ndCBwcm9jZXNzIGNsaWNrcyBvbiBkaXNhYmxlZCBlbGVtZW50cyAoIzY5MTEsICM4MTY1LCAjMTEzODIsICMxMTc2NClcblx0XHRcdFx0aWYgKCBjdXIubm9kZVR5cGUgPT09IDEgJiYgISggZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGN1ci5kaXNhYmxlZCA9PT0gdHJ1ZSApICkge1xuXHRcdFx0XHRcdG1hdGNoZWRIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdG1hdGNoZWRTZWxlY3RvcnMgPSB7fTtcblx0XHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGRlbGVnYXRlQ291bnQ7IGkrKyApIHtcblx0XHRcdFx0XHRcdGhhbmRsZU9iaiA9IGhhbmRsZXJzWyBpIF07XG5cblx0XHRcdFx0XHRcdC8vIERvbid0IGNvbmZsaWN0IHdpdGggT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzICgjMTMyMDMpXG5cdFx0XHRcdFx0XHRzZWwgPSBoYW5kbGVPYmouc2VsZWN0b3IgKyBcIiBcIjtcblxuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0XHRtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSA9IGhhbmRsZU9iai5uZWVkc0NvbnRleHQgP1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggc2VsLCB0aGlzICkuaW5kZXgoIGN1ciApID4gLTEgOlxuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5maW5kKCBzZWwsIHRoaXMsIG51bGwsIFsgY3VyIF0gKS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdICkge1xuXHRcdFx0XHRcdFx0XHRtYXRjaGVkSGFuZGxlcnMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggbWF0Y2hlZEhhbmRsZXJzLmxlbmd0aCApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJRdWV1ZS5wdXNoKCB7IGVsZW06IGN1ciwgaGFuZGxlcnM6IG1hdGNoZWRIYW5kbGVycyB9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHRoZSByZW1haW5pbmcgKGRpcmVjdGx5LWJvdW5kKSBoYW5kbGVyc1xuXHRcdGN1ciA9IHRoaXM7XG5cdFx0aWYgKCBkZWxlZ2F0ZUNvdW50IDwgaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goIHsgZWxlbTogY3VyLCBoYW5kbGVyczogaGFuZGxlcnMuc2xpY2UoIGRlbGVnYXRlQ291bnQgKSB9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhhbmRsZXJRdWV1ZTtcblx0fSxcblxuXHRhZGRQcm9wOiBmdW5jdGlvbiggbmFtZSwgaG9vayApIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGpRdWVyeS5FdmVudC5wcm90b3R5cGUsIG5hbWUsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cblx0XHRcdGdldDogaXNGdW5jdGlvbiggaG9vayApID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBob29rKCB0aGlzLm9yaWdpbmFsRXZlbnQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gOlxuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFsgbmFtZSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgbmFtZSwge1xuXHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGZpeDogZnVuY3Rpb24oIG9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0cmV0dXJuIG9yaWdpbmFsRXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0b3JpZ2luYWxFdmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCBvcmlnaW5hbEV2ZW50ICk7XG5cdH0sXG5cblx0c3BlY2lhbDoge1xuXHRcdGxvYWQ6IHtcblxuXHRcdFx0Ly8gUHJldmVudCB0cmlnZ2VyZWQgaW1hZ2UubG9hZCBldmVudHMgZnJvbSBidWJibGluZyB0byB3aW5kb3cubG9hZFxuXHRcdFx0bm9CdWJibGU6IHRydWVcblx0XHR9LFxuXHRcdGNsaWNrOiB7XG5cblx0XHRcdC8vIFV0aWxpemUgbmF0aXZlIGV2ZW50IHRvIGVuc3VyZSBjb3JyZWN0IHN0YXRlIGZvciBjaGVja2FibGUgaW5wdXRzXG5cdFx0XHRzZXR1cDogZnVuY3Rpb24oIGRhdGEgKSB7XG5cblx0XHRcdFx0Ly8gRm9yIG11dHVhbCBjb21wcmVzc2liaWxpdHkgd2l0aCBfZGVmYXVsdCwgcmVwbGFjZSBgdGhpc2AgYWNjZXNzIHdpdGggYSBsb2NhbCB2YXIuXG5cdFx0XHRcdC8vIGB8fCBkYXRhYCBpcyBkZWFkIGNvZGUgbWVhbnQgb25seSB0byBwcmVzZXJ2ZSB0aGUgdmFyaWFibGUgdGhyb3VnaCBtaW5pZmljYXRpb24uXG5cdFx0XHRcdHZhciBlbCA9IHRoaXMgfHwgZGF0YTtcblxuXHRcdFx0XHQvLyBDbGFpbSB0aGUgZmlyc3QgaGFuZGxlclxuXHRcdFx0XHRpZiAoIHJjaGVja2FibGVUeXBlLnRlc3QoIGVsLnR5cGUgKSAmJlxuXHRcdFx0XHRcdGVsLmNsaWNrICYmIG5vZGVOYW1lKCBlbCwgXCJpbnB1dFwiICkgKSB7XG5cblx0XHRcdFx0XHQvLyBkYXRhUHJpdi5zZXQoIGVsLCBcImNsaWNrXCIsIC4uLiApXG5cdFx0XHRcdFx0bGV2ZXJhZ2VOYXRpdmUoIGVsLCBcImNsaWNrXCIsIHJldHVyblRydWUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJldHVybiBmYWxzZSB0byBhbGxvdyBub3JtYWwgcHJvY2Vzc2luZyBpbiB0aGUgY2FsbGVyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbiggZGF0YSApIHtcblxuXHRcdFx0XHQvLyBGb3IgbXV0dWFsIGNvbXByZXNzaWJpbGl0eSB3aXRoIF9kZWZhdWx0LCByZXBsYWNlIGB0aGlzYCBhY2Nlc3Mgd2l0aCBhIGxvY2FsIHZhci5cblx0XHRcdFx0Ly8gYHx8IGRhdGFgIGlzIGRlYWQgY29kZSBtZWFudCBvbmx5IHRvIHByZXNlcnZlIHRoZSB2YXJpYWJsZSB0aHJvdWdoIG1pbmlmaWNhdGlvbi5cblx0XHRcdFx0dmFyIGVsID0gdGhpcyB8fCBkYXRhO1xuXG5cdFx0XHRcdC8vIEZvcmNlIHNldHVwIGJlZm9yZSB0cmlnZ2VyaW5nIGEgY2xpY2tcblx0XHRcdFx0aWYgKCByY2hlY2thYmxlVHlwZS50ZXN0KCBlbC50eXBlICkgJiZcblx0XHRcdFx0XHRlbC5jbGljayAmJiBub2RlTmFtZSggZWwsIFwiaW5wdXRcIiApICkge1xuXG5cdFx0XHRcdFx0bGV2ZXJhZ2VOYXRpdmUoIGVsLCBcImNsaWNrXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJldHVybiBub24tZmFsc2UgdG8gYWxsb3cgbm9ybWFsIGV2ZW50LXBhdGggcHJvcGFnYXRpb25cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBGb3IgY3Jvc3MtYnJvd3NlciBjb25zaXN0ZW5jeSwgc3VwcHJlc3MgbmF0aXZlIC5jbGljaygpIG9uIGxpbmtzXG5cdFx0XHQvLyBBbHNvIHByZXZlbnQgaXQgaWYgd2UncmUgY3VycmVudGx5IGluc2lkZSBhIGxldmVyYWdlZCBuYXRpdmUtZXZlbnQgc3RhY2tcblx0XHRcdF9kZWZhdWx0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0XHRcdHJldHVybiByY2hlY2thYmxlVHlwZS50ZXN0KCB0YXJnZXQudHlwZSApICYmXG5cdFx0XHRcdFx0dGFyZ2V0LmNsaWNrICYmIG5vZGVOYW1lKCB0YXJnZXQsIFwiaW5wdXRcIiApICYmXG5cdFx0XHRcdFx0ZGF0YVByaXYuZ2V0KCB0YXJnZXQsIFwiY2xpY2tcIiApIHx8XG5cdFx0XHRcdFx0bm9kZU5hbWUoIHRhcmdldCwgXCJhXCIgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0YmVmb3JldW5sb2FkOiB7XG5cdFx0XHRwb3N0RGlzcGF0Y2g6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDIwK1xuXHRcdFx0XHQvLyBGaXJlZm94IGRvZXNuJ3QgYWxlcnQgaWYgdGhlIHJldHVyblZhbHVlIGZpZWxkIGlzIG5vdCBzZXQuXG5cdFx0XHRcdGlmICggZXZlbnQucmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRldmVudC5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZXZlbnQucmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBFbnN1cmUgdGhlIHByZXNlbmNlIG9mIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgaGFuZGxlcyBtYW51YWxseS10cmlnZ2VyZWRcbi8vIHN5bnRoZXRpYyBldmVudHMgYnkgaW50ZXJydXB0aW5nIHByb2dyZXNzIHVudGlsIHJlaW52b2tlZCBpbiByZXNwb25zZSB0b1xuLy8gKm5hdGl2ZSogZXZlbnRzIHRoYXQgaXQgZmlyZXMgZGlyZWN0bHksIGVuc3VyaW5nIHRoYXQgc3RhdGUgY2hhbmdlcyBoYXZlXG4vLyBhbHJlYWR5IG9jY3VycmVkIGJlZm9yZSBvdGhlciBsaXN0ZW5lcnMgYXJlIGludm9rZWQuXG5mdW5jdGlvbiBsZXZlcmFnZU5hdGl2ZSggZWwsIHR5cGUsIGV4cGVjdFN5bmMgKSB7XG5cblx0Ly8gTWlzc2luZyBleHBlY3RTeW5jIGluZGljYXRlcyBhIHRyaWdnZXIgY2FsbCwgd2hpY2ggbXVzdCBmb3JjZSBzZXR1cCB0aHJvdWdoIGpRdWVyeS5ldmVudC5hZGRcblx0aWYgKCAhZXhwZWN0U3luYyApIHtcblx0XHRpZiAoIGRhdGFQcml2LmdldCggZWwsIHR5cGUgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LmFkZCggZWwsIHR5cGUsIHJldHVyblRydWUgKTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gUmVnaXN0ZXIgdGhlIGNvbnRyb2xsZXIgYXMgYSBzcGVjaWFsIHVuaXZlcnNhbCBoYW5kbGVyIGZvciBhbGwgZXZlbnQgbmFtZXNwYWNlc1xuXHRkYXRhUHJpdi5zZXQoIGVsLCB0eXBlLCBmYWxzZSApO1xuXHRqUXVlcnkuZXZlbnQuYWRkKCBlbCwgdHlwZSwge1xuXHRcdG5hbWVzcGFjZTogZmFsc2UsXG5cdFx0aGFuZGxlcjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIG5vdEFzeW5jLCByZXN1bHQsXG5cdFx0XHRcdHNhdmVkID0gZGF0YVByaXYuZ2V0KCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdGlmICggKCBldmVudC5pc1RyaWdnZXIgJiAxICkgJiYgdGhpc1sgdHlwZSBdICkge1xuXG5cdFx0XHRcdC8vIEludGVycnVwdCBwcm9jZXNzaW5nIG9mIHRoZSBvdXRlciBzeW50aGV0aWMgLnRyaWdnZXIoKWVkIGV2ZW50XG5cdFx0XHRcdC8vIFNhdmVkIGRhdGEgc2hvdWxkIGJlIGZhbHNlIGluIHN1Y2ggY2FzZXMsIGJ1dCBtaWdodCBiZSBhIGxlZnRvdmVyIGNhcHR1cmUgb2JqZWN0XG5cdFx0XHRcdC8vIGZyb20gYW4gYXN5bmMgbmF0aXZlIGhhbmRsZXIgKGdoLTQzNTApXG5cdFx0XHRcdGlmICggIXNhdmVkLmxlbmd0aCApIHtcblxuXHRcdFx0XHRcdC8vIFN0b3JlIGFyZ3VtZW50cyBmb3IgdXNlIHdoZW4gaGFuZGxpbmcgdGhlIGlubmVyIG5hdGl2ZSBldmVudFxuXHRcdFx0XHRcdC8vIFRoZXJlIHdpbGwgYWx3YXlzIGJlIGF0IGxlYXN0IG9uZSBhcmd1bWVudCAoYW4gZXZlbnQgb2JqZWN0KSwgc28gdGhpcyBhcnJheVxuXHRcdFx0XHRcdC8vIHdpbGwgbm90IGJlIGNvbmZ1c2VkIHdpdGggYSBsZWZ0b3ZlciBjYXB0dXJlIG9iamVjdC5cblx0XHRcdFx0XHRzYXZlZCA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgdHlwZSwgc2F2ZWQgKTtcblxuXHRcdFx0XHRcdC8vIFRyaWdnZXIgdGhlIG5hdGl2ZSBldmVudCBhbmQgY2FwdHVyZSBpdHMgcmVzdWx0XG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTErXG5cdFx0XHRcdFx0Ly8gZm9jdXMoKSBhbmQgYmx1cigpIGFyZSBhc3luY2hyb25vdXNcblx0XHRcdFx0XHRub3RBc3luYyA9IGV4cGVjdFN5bmMoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0XHR0aGlzWyB0eXBlIF0oKTtcblx0XHRcdFx0XHRyZXN1bHQgPSBkYXRhUHJpdi5nZXQoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0XHRpZiAoIHNhdmVkICE9PSByZXN1bHQgfHwgbm90QXN5bmMgKSB7XG5cdFx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIHR5cGUsIGZhbHNlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIHNhdmVkICE9PSByZXN1bHQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIENhbmNlbCB0aGUgb3V0ZXIgc3ludGhldGljIGV2ZW50XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0LnZhbHVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGlzIGlzIGFuIGlubmVyIHN5bnRoZXRpYyBldmVudCBmb3IgYW4gZXZlbnQgd2l0aCBhIGJ1YmJsaW5nIHN1cnJvZ2F0ZVxuXHRcdFx0XHQvLyAoZm9jdXMgb3IgYmx1ciksIGFzc3VtZSB0aGF0IHRoZSBzdXJyb2dhdGUgYWxyZWFkeSBwcm9wYWdhdGVkIGZyb20gdHJpZ2dlcmluZyB0aGVcblx0XHRcdFx0Ly8gbmF0aXZlIGV2ZW50IGFuZCBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcgYWdhaW4gaGVyZS5cblx0XHRcdFx0Ly8gVGhpcyB0ZWNobmljYWxseSBnZXRzIHRoZSBvcmRlcmluZyB3cm9uZyB3LnIudC4gdG8gYC50cmlnZ2VyKClgIChpbiB3aGljaCB0aGVcblx0XHRcdFx0Ly8gYnViYmxpbmcgc3Vycm9nYXRlIHByb3BhZ2F0ZXMgKmFmdGVyKiB0aGUgbm9uLWJ1YmJsaW5nIGJhc2UpLCBidXQgdGhhdCBzZWVtc1xuXHRcdFx0XHQvLyBsZXNzIGJhZCB0aGFuIGR1cGxpY2F0aW9uLlxuXHRcdFx0XHR9IGVsc2UgaWYgKCAoIGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge30gKS5kZWxlZ2F0ZVR5cGUgKSB7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIG5hdGl2ZSBldmVudCB0cmlnZ2VyZWQgYWJvdmUsIGV2ZXJ5dGhpbmcgaXMgbm93IGluIG9yZGVyXG5cdFx0XHQvLyBGaXJlIGFuIGlubmVyIHN5bnRoZXRpYyBldmVudCB3aXRoIHRoZSBvcmlnaW5hbCBhcmd1bWVudHNcblx0XHRcdH0gZWxzZSBpZiAoIHNhdmVkLmxlbmd0aCApIHtcblxuXHRcdFx0XHQvLyAuLi5hbmQgY2FwdHVyZSB0aGUgcmVzdWx0XG5cdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgdHlwZSwge1xuXHRcdFx0XHRcdHZhbHVlOiBqUXVlcnkuZXZlbnQudHJpZ2dlcihcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTErXG5cdFx0XHRcdFx0XHQvLyBFeHRlbmQgd2l0aCB0aGUgcHJvdG90eXBlIHRvIHJlc2V0IHRoZSBhYm92ZSBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0alF1ZXJ5LmV4dGVuZCggc2F2ZWRbIDAgXSwgalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSApLFxuXHRcdFx0XHRcdFx0c2F2ZWQuc2xpY2UoIDEgKSxcblx0XHRcdFx0XHRcdHRoaXNcblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQvLyBBYm9ydCBoYW5kbGluZyBvZiB0aGUgbmF0aXZlIGV2ZW50XG5cdFx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSApO1xufVxuXG5qUXVlcnkucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiggZWxlbSwgdHlwZSwgaGFuZGxlICkge1xuXG5cdC8vIFRoaXMgXCJpZlwiIGlzIG5lZWRlZCBmb3IgcGxhaW4gb2JqZWN0c1xuXHRpZiAoIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcblx0XHRlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIGhhbmRsZSApO1xuXHR9XG59O1xuXG5qUXVlcnkuRXZlbnQgPSBmdW5jdGlvbiggc3JjLCBwcm9wcyApIHtcblxuXHQvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgdGhlICduZXcnIGtleXdvcmRcblx0aWYgKCAhKCB0aGlzIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50ICkgKSB7XG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuRXZlbnQoIHNyYywgcHJvcHMgKTtcblx0fVxuXG5cdC8vIEV2ZW50IG9iamVjdFxuXHRpZiAoIHNyYyAmJiBzcmMudHlwZSApIHtcblx0XHR0aGlzLm9yaWdpbmFsRXZlbnQgPSBzcmM7XG5cdFx0dGhpcy50eXBlID0gc3JjLnR5cGU7XG5cblx0XHQvLyBFdmVudHMgYnViYmxpbmcgdXAgdGhlIGRvY3VtZW50IG1heSBoYXZlIGJlZW4gbWFya2VkIGFzIHByZXZlbnRlZFxuXHRcdC8vIGJ5IGEgaGFuZGxlciBsb3dlciBkb3duIHRoZSB0cmVlOyByZWZsZWN0IHRoZSBjb3JyZWN0IHZhbHVlLlxuXHRcdHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gc3JjLmRlZmF1bHRQcmV2ZW50ZWQgfHxcblx0XHRcdFx0c3JjLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHVuZGVmaW5lZCAmJlxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seVxuXHRcdFx0XHRzcmMucmV0dXJuVmFsdWUgPT09IGZhbHNlID9cblx0XHRcdHJldHVyblRydWUgOlxuXHRcdFx0cmV0dXJuRmFsc2U7XG5cblx0XHQvLyBDcmVhdGUgdGFyZ2V0IHByb3BlcnRpZXNcblx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgPD02IC0gNyBvbmx5XG5cdFx0Ly8gVGFyZ2V0IHNob3VsZCBub3QgYmUgYSB0ZXh0IG5vZGUgKCM1MDQsICMxMzE0Mylcblx0XHR0aGlzLnRhcmdldCA9ICggc3JjLnRhcmdldCAmJiBzcmMudGFyZ2V0Lm5vZGVUeXBlID09PSAzICkgP1xuXHRcdFx0c3JjLnRhcmdldC5wYXJlbnROb2RlIDpcblx0XHRcdHNyYy50YXJnZXQ7XG5cblx0XHR0aGlzLmN1cnJlbnRUYXJnZXQgPSBzcmMuY3VycmVudFRhcmdldDtcblx0XHR0aGlzLnJlbGF0ZWRUYXJnZXQgPSBzcmMucmVsYXRlZFRhcmdldDtcblxuXHQvLyBFdmVudCB0eXBlXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50eXBlID0gc3JjO1xuXHR9XG5cblx0Ly8gUHV0IGV4cGxpY2l0bHkgcHJvdmlkZWQgcHJvcGVydGllcyBvbnRvIHRoZSBldmVudCBvYmplY3Rcblx0aWYgKCBwcm9wcyApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aGlzLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcblx0dGhpcy50aW1lU3RhbXAgPSBzcmMgJiYgc3JjLnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xuXG5cdC8vIE1hcmsgaXQgYXMgZml4ZWRcblx0dGhpc1sgalF1ZXJ5LmV4cGFuZG8gXSA9IHRydWU7XG59O1xuXG4vLyBqUXVlcnkuRXZlbnQgaXMgYmFzZWQgb24gRE9NMyBFdmVudHMgYXMgc3BlY2lmaWVkIGJ5IHRoZSBFQ01BU2NyaXB0IExhbmd1YWdlIEJpbmRpbmdcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAzL1dELURPTS1MZXZlbC0zLUV2ZW50cy0yMDAzMDMzMS9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcbmpRdWVyeS5FdmVudC5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBqUXVlcnkuRXZlbnQsXG5cdGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cdGlzUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblx0aXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc1NpbXVsYXRlZDogZmFsc2UsXG5cblx0cHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0fSxcblx0c3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH0sXG5cdHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdGlmICggZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCApIHtcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxufTtcblxuLy8gSW5jbHVkZXMgYWxsIGNvbW1vbiBldmVudCBwcm9wcyBpbmNsdWRpbmcgS2V5RXZlbnQgYW5kIE1vdXNlRXZlbnQgc3BlY2lmaWMgcHJvcHNcbmpRdWVyeS5lYWNoKCB7XG5cdGFsdEtleTogdHJ1ZSxcblx0YnViYmxlczogdHJ1ZSxcblx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0Y2hhbmdlZFRvdWNoZXM6IHRydWUsXG5cdGN0cmxLZXk6IHRydWUsXG5cdGRldGFpbDogdHJ1ZSxcblx0ZXZlbnRQaGFzZTogdHJ1ZSxcblx0bWV0YUtleTogdHJ1ZSxcblx0cGFnZVg6IHRydWUsXG5cdHBhZ2VZOiB0cnVlLFxuXHRzaGlmdEtleTogdHJ1ZSxcblx0dmlldzogdHJ1ZSxcblx0XCJjaGFyXCI6IHRydWUsXG5cdGNvZGU6IHRydWUsXG5cdGNoYXJDb2RlOiB0cnVlLFxuXHRrZXk6IHRydWUsXG5cdGtleUNvZGU6IHRydWUsXG5cdGJ1dHRvbjogdHJ1ZSxcblx0YnV0dG9uczogdHJ1ZSxcblx0Y2xpZW50WDogdHJ1ZSxcblx0Y2xpZW50WTogdHJ1ZSxcblx0b2Zmc2V0WDogdHJ1ZSxcblx0b2Zmc2V0WTogdHJ1ZSxcblx0cG9pbnRlcklkOiB0cnVlLFxuXHRwb2ludGVyVHlwZTogdHJ1ZSxcblx0c2NyZWVuWDogdHJ1ZSxcblx0c2NyZWVuWTogdHJ1ZSxcblx0dGFyZ2V0VG91Y2hlczogdHJ1ZSxcblx0dG9FbGVtZW50OiB0cnVlLFxuXHR0b3VjaGVzOiB0cnVlLFxuXG5cdHdoaWNoOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIGJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcblxuXHRcdC8vIEFkZCB3aGljaCBmb3Iga2V5IGV2ZW50c1xuXHRcdGlmICggZXZlbnQud2hpY2ggPT0gbnVsbCAmJiBya2V5RXZlbnQudGVzdCggZXZlbnQudHlwZSApICkge1xuXHRcdFx0cmV0dXJuIGV2ZW50LmNoYXJDb2RlICE9IG51bGwgPyBldmVudC5jaGFyQ29kZSA6IGV2ZW50LmtleUNvZGU7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHdoaWNoIGZvciBjbGljazogMSA9PT0gbGVmdDsgMiA9PT0gbWlkZGxlOyAzID09PSByaWdodFxuXHRcdGlmICggIWV2ZW50LndoaWNoICYmIGJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIHJtb3VzZUV2ZW50LnRlc3QoIGV2ZW50LnR5cGUgKSApIHtcblx0XHRcdGlmICggYnV0dG9uICYgMSApIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggYnV0dG9uICYgMiApIHtcblx0XHRcdFx0cmV0dXJuIDM7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggYnV0dG9uICYgNCApIHtcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC53aGljaDtcblx0fVxufSwgalF1ZXJ5LmV2ZW50LmFkZFByb3AgKTtcblxualF1ZXJ5LmVhY2goIHsgZm9jdXM6IFwiZm9jdXNpblwiLCBibHVyOiBcImZvY3Vzb3V0XCIgfSwgZnVuY3Rpb24oIHR5cGUsIGRlbGVnYXRlVHlwZSApIHtcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSA9IHtcblxuXHRcdC8vIFV0aWxpemUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gQ2xhaW0gdGhlIGZpcnN0IGhhbmRsZXJcblx0XHRcdC8vIGRhdGFQcml2LnNldCggdGhpcywgXCJmb2N1c1wiLCAuLi4gKVxuXHRcdFx0Ly8gZGF0YVByaXYuc2V0KCB0aGlzLCBcImJsdXJcIiwgLi4uIClcblx0XHRcdGxldmVyYWdlTmF0aXZlKCB0aGlzLCB0eXBlLCBleHBlY3RTeW5jICk7XG5cblx0XHRcdC8vIFJldHVybiBmYWxzZSB0byBhbGxvdyBub3JtYWwgcHJvY2Vzc2luZyBpbiB0aGUgY2FsbGVyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJcblx0XHRcdGxldmVyYWdlTmF0aXZlKCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdC8vIFJldHVybiBub24tZmFsc2UgdG8gYWxsb3cgbm9ybWFsIGV2ZW50LXBhdGggcHJvcGFnYXRpb25cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHRkZWxlZ2F0ZVR5cGU6IGRlbGVnYXRlVHlwZVxuXHR9O1xufSApO1xuXG4vLyBDcmVhdGUgbW91c2VlbnRlci9sZWF2ZSBldmVudHMgdXNpbmcgbW91c2VvdmVyL291dCBhbmQgZXZlbnQtdGltZSBjaGVja3Ncbi8vIHNvIHRoYXQgZXZlbnQgZGVsZWdhdGlvbiB3b3JrcyBpbiBqUXVlcnkuXG4vLyBEbyB0aGUgc2FtZSBmb3IgcG9pbnRlcmVudGVyL3BvaW50ZXJsZWF2ZSBhbmQgcG9pbnRlcm92ZXIvcG9pbnRlcm91dFxuLy9cbi8vIFN1cHBvcnQ6IFNhZmFyaSA3IG9ubHlcbi8vIFNhZmFyaSBzZW5kcyBtb3VzZWVudGVyIHRvbyBvZnRlbjsgc2VlOlxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDcwMjU4XG4vLyBmb3IgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBidWcgKGl0IGV4aXN0ZWQgaW4gb2xkZXIgQ2hyb21lIHZlcnNpb25zIGFzIHdlbGwpLlxualF1ZXJ5LmVhY2goIHtcblx0bW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIixcblx0bW91c2VsZWF2ZTogXCJtb3VzZW91dFwiLFxuXHRwb2ludGVyZW50ZXI6IFwicG9pbnRlcm92ZXJcIixcblx0cG9pbnRlcmxlYXZlOiBcInBvaW50ZXJvdXRcIlxufSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIG9yaWcgXSA9IHtcblx0XHRkZWxlZ2F0ZVR5cGU6IGZpeCxcblx0XHRiaW5kVHlwZTogZml4LFxuXG5cdFx0aGFuZGxlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgcmV0LFxuXHRcdFx0XHR0YXJnZXQgPSB0aGlzLFxuXHRcdFx0XHRyZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldCxcblx0XHRcdFx0aGFuZGxlT2JqID0gZXZlbnQuaGFuZGxlT2JqO1xuXG5cdFx0XHQvLyBGb3IgbW91c2VlbnRlci9sZWF2ZSBjYWxsIHRoZSBoYW5kbGVyIGlmIHJlbGF0ZWQgaXMgb3V0c2lkZSB0aGUgdGFyZ2V0LlxuXHRcdFx0Ly8gTkI6IE5vIHJlbGF0ZWRUYXJnZXQgaWYgdGhlIG1vdXNlIGxlZnQvZW50ZXJlZCB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdGlmICggIXJlbGF0ZWQgfHwgKCByZWxhdGVkICE9PSB0YXJnZXQgJiYgIWpRdWVyeS5jb250YWlucyggdGFyZ2V0LCByZWxhdGVkICkgKSApIHtcblx0XHRcdFx0ZXZlbnQudHlwZSA9IGhhbmRsZU9iai5vcmlnVHlwZTtcblx0XHRcdFx0cmV0ID0gaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRldmVudC50eXBlID0gZml4O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdH07XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHRvbjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIG9uKCB0aGlzLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG5cdH0sXG5cdG9uZTogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIG9uKCB0aGlzLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCAxICk7XG5cdH0sXG5cdG9mZjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZm4gKSB7XG5cdFx0dmFyIGhhbmRsZU9iaiwgdHlwZTtcblx0XHRpZiAoIHR5cGVzICYmIHR5cGVzLnByZXZlbnREZWZhdWx0ICYmIHR5cGVzLmhhbmRsZU9iaiApIHtcblxuXHRcdFx0Ly8gKCBldmVudCApICBkaXNwYXRjaGVkIGpRdWVyeS5FdmVudFxuXHRcdFx0aGFuZGxlT2JqID0gdHlwZXMuaGFuZGxlT2JqO1xuXHRcdFx0alF1ZXJ5KCB0eXBlcy5kZWxlZ2F0ZVRhcmdldCApLm9mZihcblx0XHRcdFx0aGFuZGxlT2JqLm5hbWVzcGFjZSA/XG5cdFx0XHRcdFx0aGFuZGxlT2JqLm9yaWdUeXBlICsgXCIuXCIgKyBoYW5kbGVPYmoubmFtZXNwYWNlIDpcblx0XHRcdFx0XHRoYW5kbGVPYmoub3JpZ1R5cGUsXG5cdFx0XHRcdGhhbmRsZU9iai5zZWxlY3Rvcixcblx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXJcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCB0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMtb2JqZWN0IFssIHNlbGVjdG9yXSApXG5cdFx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuXHRcdFx0XHR0aGlzLm9mZiggdHlwZSwgc2VsZWN0b3IsIHR5cGVzWyB0eXBlIF0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZiAoIHNlbGVjdG9yID09PSBmYWxzZSB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcyBbLCBmbl0gKVxuXHRcdFx0Zm4gPSBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRpZiAoIGZuID09PSBmYWxzZSApIHtcblx0XHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggdGhpcywgdHlwZXMsIGZuLCBzZWxlY3RvciApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5cbnZhclxuXG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQvaXNzdWVzLzMyMjlcblx0cnhodG1sVGFnID0gLzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksXG5cblx0LyogZXNsaW50LWVuYWJsZSAqL1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSwgRWRnZSAxMiAtIDEzIG9ubHlcblx0Ly8gSW4gSUUvRWRnZSB1c2luZyByZWdleCBncm91cHMgaGVyZSBjYXVzZXMgc2V2ZXJlIHNsb3dkb3ducy5cblx0Ly8gU2VlIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvMTczNjUxMi9cblx0cm5vSW5uZXJodG1sID0gLzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksXG5cblx0Ly8gY2hlY2tlZD1cImNoZWNrZWRcIiBvciBjaGVja2VkXG5cdHJjaGVja2VkID0gL2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxcblx0cmNsZWFuU2NyaXB0ID0gL15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO1xuXG4vLyBQcmVmZXIgYSB0Ym9keSBvdmVyIGl0cyBwYXJlbnQgdGFibGUgZm9yIGNvbnRhaW5pbmcgbmV3IHJvd3NcbmZ1bmN0aW9uIG1hbmlwdWxhdGlvblRhcmdldCggZWxlbSwgY29udGVudCApIHtcblx0aWYgKCBub2RlTmFtZSggZWxlbSwgXCJ0YWJsZVwiICkgJiZcblx0XHRub2RlTmFtZSggY29udGVudC5ub2RlVHlwZSAhPT0gMTEgPyBjb250ZW50IDogY29udGVudC5maXJzdENoaWxkLCBcInRyXCIgKSApIHtcblxuXHRcdHJldHVybiBqUXVlcnkoIGVsZW0gKS5jaGlsZHJlbiggXCJ0Ym9keVwiIClbIDAgXSB8fCBlbGVtO1xuXHR9XG5cblx0cmV0dXJuIGVsZW07XG59XG5cbi8vIFJlcGxhY2UvcmVzdG9yZSB0aGUgdHlwZSBhdHRyaWJ1dGUgb2Ygc2NyaXB0IGVsZW1lbnRzIGZvciBzYWZlIERPTSBtYW5pcHVsYXRpb25cbmZ1bmN0aW9uIGRpc2FibGVTY3JpcHQoIGVsZW0gKSB7XG5cdGVsZW0udHlwZSA9ICggZWxlbS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICkgIT09IG51bGwgKSArIFwiL1wiICsgZWxlbS50eXBlO1xuXHRyZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVTY3JpcHQoIGVsZW0gKSB7XG5cdGlmICggKCBlbGVtLnR5cGUgfHwgXCJcIiApLnNsaWNlKCAwLCA1ICkgPT09IFwidHJ1ZS9cIiApIHtcblx0XHRlbGVtLnR5cGUgPSBlbGVtLnR5cGUuc2xpY2UoIDUgKTtcblx0fSBlbHNlIHtcblx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSggXCJ0eXBlXCIgKTtcblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBjbG9uZUNvcHlFdmVudCggc3JjLCBkZXN0ICkge1xuXHR2YXIgaSwgbCwgdHlwZSwgcGRhdGFPbGQsIHBkYXRhQ3VyLCB1ZGF0YU9sZCwgdWRhdGFDdXIsIGV2ZW50cztcblxuXHRpZiAoIGRlc3Qubm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gMS4gQ29weSBwcml2YXRlIGRhdGE6IGV2ZW50cywgaGFuZGxlcnMsIGV0Yy5cblx0aWYgKCBkYXRhUHJpdi5oYXNEYXRhKCBzcmMgKSApIHtcblx0XHRwZGF0YU9sZCA9IGRhdGFQcml2LmFjY2Vzcyggc3JjICk7XG5cdFx0cGRhdGFDdXIgPSBkYXRhUHJpdi5zZXQoIGRlc3QsIHBkYXRhT2xkICk7XG5cdFx0ZXZlbnRzID0gcGRhdGFPbGQuZXZlbnRzO1xuXG5cdFx0aWYgKCBldmVudHMgKSB7XG5cdFx0XHRkZWxldGUgcGRhdGFDdXIuaGFuZGxlO1xuXHRcdFx0cGRhdGFDdXIuZXZlbnRzID0ge307XG5cblx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IGV2ZW50c1sgdHlwZSBdLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBkZXN0LCB0eXBlLCBldmVudHNbIHR5cGUgXVsgaSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyAyLiBDb3B5IHVzZXIgZGF0YVxuXHRpZiAoIGRhdGFVc2VyLmhhc0RhdGEoIHNyYyApICkge1xuXHRcdHVkYXRhT2xkID0gZGF0YVVzZXIuYWNjZXNzKCBzcmMgKTtcblx0XHR1ZGF0YUN1ciA9IGpRdWVyeS5leHRlbmQoIHt9LCB1ZGF0YU9sZCApO1xuXG5cdFx0ZGF0YVVzZXIuc2V0KCBkZXN0LCB1ZGF0YUN1ciApO1xuXHR9XG59XG5cbi8vIEZpeCBJRSBidWdzLCBzZWUgc3VwcG9ydCB0ZXN0c1xuZnVuY3Rpb24gZml4SW5wdXQoIHNyYywgZGVzdCApIHtcblx0dmFyIG5vZGVOYW1lID0gZGVzdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdC8vIEZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uLlxuXHRpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgcmNoZWNrYWJsZVR5cGUudGVzdCggc3JjLnR5cGUgKSApIHtcblx0XHRkZXN0LmNoZWNrZWQgPSBzcmMuY2hlY2tlZDtcblxuXHQvLyBGYWlscyB0byByZXR1cm4gdGhlIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgZGVmYXVsdCBzZWxlY3RlZCBzdGF0ZSB3aGVuIGNsb25pbmcgb3B0aW9uc1xuXHR9IGVsc2UgaWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5vZGVOYW1lID09PSBcInRleHRhcmVhXCIgKSB7XG5cdFx0ZGVzdC5kZWZhdWx0VmFsdWUgPSBzcmMuZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRvbU1hbmlwKCBjb2xsZWN0aW9uLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCApIHtcblxuXHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdGFyZ3MgPSBjb25jYXQuYXBwbHkoIFtdLCBhcmdzICk7XG5cblx0dmFyIGZyYWdtZW50LCBmaXJzdCwgc2NyaXB0cywgaGFzU2NyaXB0cywgbm9kZSwgZG9jLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBjb2xsZWN0aW9uLmxlbmd0aCxcblx0XHRpTm9DbG9uZSA9IGwgLSAxLFxuXHRcdHZhbHVlID0gYXJnc1sgMCBdLFxuXHRcdHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0Ly8gV2UgY2FuJ3QgY2xvbmVOb2RlIGZyYWdtZW50cyB0aGF0IGNvbnRhaW4gY2hlY2tlZCwgaW4gV2ViS2l0XG5cdGlmICggdmFsdWVJc0Z1bmN0aW9uIHx8XG5cdFx0XHQoIGwgPiAxICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc3VwcG9ydC5jaGVja0Nsb25lICYmIHJjaGVja2VkLnRlc3QoIHZhbHVlICkgKSApIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5lYWNoKCBmdW5jdGlvbiggaW5kZXggKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGNvbGxlY3Rpb24uZXEoIGluZGV4ICk7XG5cdFx0XHRpZiAoIHZhbHVlSXNGdW5jdGlvbiApIHtcblx0XHRcdFx0YXJnc1sgMCBdID0gdmFsdWUuY2FsbCggdGhpcywgaW5kZXgsIHNlbGYuaHRtbCgpICk7XG5cdFx0XHR9XG5cdFx0XHRkb21NYW5pcCggc2VsZiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGwgKSB7XG5cdFx0ZnJhZ21lbnQgPSBidWlsZEZyYWdtZW50KCBhcmdzLCBjb2xsZWN0aW9uWyAwIF0ub3duZXJEb2N1bWVudCwgZmFsc2UsIGNvbGxlY3Rpb24sIGlnbm9yZWQgKTtcblx0XHRmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRpZiAoIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuXHRcdFx0ZnJhZ21lbnQgPSBmaXJzdDtcblx0XHR9XG5cblx0XHQvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcblx0XHRpZiAoIGZpcnN0IHx8IGlnbm9yZWQgKSB7XG5cdFx0XHRzY3JpcHRzID0galF1ZXJ5Lm1hcCggZ2V0QWxsKCBmcmFnbWVudCwgXCJzY3JpcHRcIiApLCBkaXNhYmxlU2NyaXB0ICk7XG5cdFx0XHRoYXNTY3JpcHRzID0gc2NyaXB0cy5sZW5ndGg7XG5cblx0XHRcdC8vIFVzZSB0aGUgb3JpZ2luYWwgZnJhZ21lbnQgZm9yIHRoZSBsYXN0IGl0ZW1cblx0XHRcdC8vIGluc3RlYWQgb2YgdGhlIGZpcnN0IGJlY2F1c2UgaXQgY2FuIGVuZCB1cFxuXHRcdFx0Ly8gYmVpbmcgZW1wdGllZCBpbmNvcnJlY3RseSBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgKCM4MDcwKS5cblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0bm9kZSA9IGZyYWdtZW50O1xuXG5cdFx0XHRcdGlmICggaSAhPT0gaU5vQ2xvbmUgKSB7XG5cdFx0XHRcdFx0bm9kZSA9IGpRdWVyeS5jbG9uZSggbm9kZSwgdHJ1ZSwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0Ly8gS2VlcCByZWZlcmVuY2VzIHRvIGNsb25lZCBzY3JpcHRzIGZvciBsYXRlciByZXN0b3JhdGlvblxuXHRcdFx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHNjcmlwdHMsIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FsbGJhY2suY2FsbCggY29sbGVjdGlvblsgaSBdLCBub2RlLCBpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcblx0XHRcdFx0ZG9jID0gc2NyaXB0c1sgc2NyaXB0cy5sZW5ndGggLSAxIF0ub3duZXJEb2N1bWVudDtcblxuXHRcdFx0XHQvLyBSZWVuYWJsZSBzY3JpcHRzXG5cdFx0XHRcdGpRdWVyeS5tYXAoIHNjcmlwdHMsIHJlc3RvcmVTY3JpcHQgKTtcblxuXHRcdFx0XHQvLyBFdmFsdWF0ZSBleGVjdXRhYmxlIHNjcmlwdHMgb24gZmlyc3QgZG9jdW1lbnQgaW5zZXJ0aW9uXG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgaGFzU2NyaXB0czsgaSsrICkge1xuXHRcdFx0XHRcdG5vZGUgPSBzY3JpcHRzWyBpIF07XG5cdFx0XHRcdFx0aWYgKCByc2NyaXB0VHlwZS50ZXN0KCBub2RlLnR5cGUgfHwgXCJcIiApICYmXG5cdFx0XHRcdFx0XHQhZGF0YVByaXYuYWNjZXNzKCBub2RlLCBcImdsb2JhbEV2YWxcIiApICYmXG5cdFx0XHRcdFx0XHRqUXVlcnkuY29udGFpbnMoIGRvYywgbm9kZSApICkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIG5vZGUuc3JjICYmICggbm9kZS50eXBlIHx8IFwiXCIgKS50b0xvd2VyQ2FzZSgpICAhPT0gXCJtb2R1bGVcIiApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBPcHRpb25hbCBBSkFYIGRlcGVuZGVuY3ksIGJ1dCB3b24ndCBydW4gc2NyaXB0cyBpZiBub3QgcHJlc2VudFxuXHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5fZXZhbFVybCAmJiAhbm9kZS5ub01vZHVsZSApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuX2V2YWxVcmwoIG5vZGUuc3JjLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRub25jZTogbm9kZS5ub25jZSB8fCBub2RlLmdldEF0dHJpYnV0ZSggXCJub25jZVwiIClcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdERPTUV2YWwoIG5vZGUudGV4dENvbnRlbnQucmVwbGFjZSggcmNsZWFuU2NyaXB0LCBcIlwiICksIG5vZGUsIGRvYyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjb2xsZWN0aW9uO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoIGVsZW0sIHNlbGVjdG9yLCBrZWVwRGF0YSApIHtcblx0dmFyIG5vZGUsXG5cdFx0bm9kZXMgPSBzZWxlY3RvciA/IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCBlbGVtICkgOiBlbGVtLFxuXHRcdGkgPSAwO1xuXG5cdGZvciAoIDsgKCBub2RlID0gbm9kZXNbIGkgXSApICE9IG51bGw7IGkrKyApIHtcblx0XHRpZiAoICFrZWVwRGF0YSAmJiBub2RlLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBub2RlICkgKTtcblx0XHR9XG5cblx0XHRpZiAoIG5vZGUucGFyZW50Tm9kZSApIHtcblx0XHRcdGlmICgga2VlcERhdGEgJiYgaXNBdHRhY2hlZCggbm9kZSApICkge1xuXHRcdFx0XHRzZXRHbG9iYWxFdmFsKCBnZXRBbGwoIG5vZGUsIFwic2NyaXB0XCIgKSApO1xuXHRcdFx0fVxuXHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBub2RlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW07XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0aHRtbFByZWZpbHRlcjogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0cmV0dXJuIGh0bWwucmVwbGFjZSggcnhodG1sVGFnLCBcIjwkMT48LyQyPlwiICk7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uKCBlbGVtLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHR2YXIgaSwgbCwgc3JjRWxlbWVudHMsIGRlc3RFbGVtZW50cyxcblx0XHRcdGNsb25lID0gZWxlbS5jbG9uZU5vZGUoIHRydWUgKSxcblx0XHRcdGluUGFnZSA9IGlzQXR0YWNoZWQoIGVsZW0gKTtcblxuXHRcdC8vIEZpeCBJRSBjbG9uaW5nIGlzc3Vlc1xuXHRcdGlmICggIXN1cHBvcnQubm9DbG9uZUNoZWNrZWQgJiYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGVsZW0ubm9kZVR5cGUgPT09IDExICkgJiZcblx0XHRcdFx0IWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXG5cdFx0XHQvLyBXZSBlc2NoZXcgU2l6emxlIGhlcmUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnM6IGh0dHBzOi8vanNwZXJmLmNvbS9nZXRhbGwtdnMtc2l6emxlLzJcblx0XHRcdGRlc3RFbGVtZW50cyA9IGdldEFsbCggY2xvbmUgKTtcblx0XHRcdHNyY0VsZW1lbnRzID0gZ2V0QWxsKCBlbGVtICk7XG5cblx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRmaXhJbnB1dCggc3JjRWxlbWVudHNbIGkgXSwgZGVzdEVsZW1lbnRzWyBpIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb3B5IHRoZSBldmVudHMgZnJvbSB0aGUgb3JpZ2luYWwgdG8gdGhlIGNsb25lXG5cdFx0aWYgKCBkYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0aWYgKCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRcdFx0c3JjRWxlbWVudHMgPSBzcmNFbGVtZW50cyB8fCBnZXRBbGwoIGVsZW0gKTtcblx0XHRcdFx0ZGVzdEVsZW1lbnRzID0gZGVzdEVsZW1lbnRzIHx8IGdldEFsbCggY2xvbmUgKTtcblxuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IHNyY0VsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRjbG9uZUNvcHlFdmVudCggc3JjRWxlbWVudHNbIGkgXSwgZGVzdEVsZW1lbnRzWyBpIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xvbmVDb3B5RXZlbnQoIGVsZW0sIGNsb25lICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXHRcdGRlc3RFbGVtZW50cyA9IGdldEFsbCggY2xvbmUsIFwic2NyaXB0XCIgKTtcblx0XHRpZiAoIGRlc3RFbGVtZW50cy5sZW5ndGggPiAwICkge1xuXHRcdFx0c2V0R2xvYmFsRXZhbCggZGVzdEVsZW1lbnRzLCAhaW5QYWdlICYmIGdldEFsbCggZWxlbSwgXCJzY3JpcHRcIiApICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBjbG9uZWQgc2V0XG5cdFx0cmV0dXJuIGNsb25lO1xuXHR9LFxuXG5cdGNsZWFuRGF0YTogZnVuY3Rpb24oIGVsZW1zICkge1xuXHRcdHZhciBkYXRhLCBlbGVtLCB0eXBlLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRmb3IgKCA7ICggZWxlbSA9IGVsZW1zWyBpIF0gKSAhPT0gdW5kZWZpbmVkOyBpKysgKSB7XG5cdFx0XHRpZiAoIGFjY2VwdERhdGEoIGVsZW0gKSApIHtcblx0XHRcdFx0aWYgKCAoIGRhdGEgPSBlbGVtWyBkYXRhUHJpdi5leHBhbmRvIF0gKSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0Zm9yICggdHlwZSBpbiBkYXRhLmV2ZW50cyApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCBzcGVjaWFsWyB0eXBlIF0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggZWxlbSwgdHlwZSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vIFRoaXMgaXMgYSBzaG9ydGN1dCB0byBhdm9pZCBqUXVlcnkuZXZlbnQucmVtb3ZlJ3Mgb3ZlcmhlYWRcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGRhdGEuaGFuZGxlICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1K1xuXHRcdFx0XHRcdC8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuXHRcdFx0XHRcdGVsZW1bIGRhdGFQcml2LmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGVsZW1bIGRhdGFVc2VyLmV4cGFuZG8gXSApIHtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG5cdFx0XHRcdFx0Ly8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cdFx0XHRcdFx0ZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZGV0YWNoOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHJlbW92ZSggdGhpcywgc2VsZWN0b3IsIHRydWUgKTtcblx0fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciApO1xuXHR9LFxuXG5cdHRleHQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdGpRdWVyeS50ZXh0KCB0aGlzICkgOlxuXHRcdFx0XHR0aGlzLmVtcHR5KCkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRhcHBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRwcmVwZW5kOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IG1hbmlwdWxhdGlvblRhcmdldCggdGhpcywgZWxlbSApO1xuXHRcdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0YXJnZXQuZmlyc3RDaGlsZCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRiZWZvcmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGFmdGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0dGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggZWxlbSwgdGhpcy5uZXh0U2libGluZyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRlbXB0eTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGVsZW0sXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKCBlbGVtID0gdGhpc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbWVtb3J5IGxlYWtzXG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggZWxlbSwgZmFsc2UgKSApO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBhbnkgcmVtYWluaW5nIG5vZGVzXG5cdFx0XHRcdGVsZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiggZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKSB7XG5cdFx0ZGF0YUFuZEV2ZW50cyA9IGRhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGZhbHNlIDogZGF0YUFuZEV2ZW50cztcblx0XHRkZWVwRGF0YUFuZEV2ZW50cyA9IGRlZXBEYXRhQW5kRXZlbnRzID09IG51bGwgPyBkYXRhQW5kRXZlbnRzIDogZGVlcERhdGFBbmRFdmVudHM7XG5cblx0XHRyZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5jbG9uZSggdGhpcywgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKTtcblx0XHR9ICk7XG5cdH0sXG5cblx0aHRtbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBlbGVtID0gdGhpc1sgMCBdIHx8IHt9LFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0bCA9IHRoaXMubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIHZhbHVlID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uaW5uZXJIVE1MO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZWUgaWYgd2UgY2FuIHRha2UgYSBzaG9ydGN1dCBhbmQganVzdCB1c2UgaW5uZXJIVE1MXG5cdFx0XHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAhcm5vSW5uZXJodG1sLnRlc3QoIHZhbHVlICkgJiZcblx0XHRcdFx0IXdyYXBNYXBbICggcnRhZ05hbWUuZXhlYyggdmFsdWUgKSB8fCBbIFwiXCIsIFwiXCIgXSApWyAxIF0udG9Mb3dlckNhc2UoKSBdICkge1xuXG5cdFx0XHRcdHZhbHVlID0galF1ZXJ5Lmh0bWxQcmVmaWx0ZXIoIHZhbHVlICk7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdFx0XHRlbGVtID0gdGhpc1sgaSBdIHx8IHt9O1xuXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgZWxlbWVudCBub2RlcyBhbmQgcHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cdFx0XHRcdFx0XHRcdGVsZW0uaW5uZXJIVE1MID0gdmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZWxlbSA9IDA7XG5cblx0XHRcdFx0Ly8gSWYgdXNpbmcgaW5uZXJIVE1MIHRocm93cyBhbiBleGNlcHRpb24sIHVzZSB0aGUgZmFsbGJhY2sgbWV0aG9kXG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge31cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0XHR0aGlzLmVtcHR5KCkuYXBwZW5kKCB2YWx1ZSApO1xuXHRcdFx0fVxuXHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoICk7XG5cdH0sXG5cblx0cmVwbGFjZVdpdGg6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpZ25vcmVkID0gW107XG5cblx0XHQvLyBNYWtlIHRoZSBjaGFuZ2VzLCByZXBsYWNpbmcgZWFjaCBub24taWdub3JlZCBjb250ZXh0IGVsZW1lbnQgd2l0aCB0aGUgbmV3IGNvbnRlbnRcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG5cdFx0XHRpZiAoIGpRdWVyeS5pbkFycmF5KCB0aGlzLCBpZ25vcmVkICkgPCAwICkge1xuXHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIHRoaXMgKSApO1xuXHRcdFx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKCBlbGVtLCB0aGlzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEZvcmNlIGNhbGxiYWNrIGludm9jYXRpb25cblx0XHR9LCBpZ25vcmVkICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIHtcblx0YXBwZW5kVG86IFwiYXBwZW5kXCIsXG5cdHByZXBlbmRUbzogXCJwcmVwZW5kXCIsXG5cdGluc2VydEJlZm9yZTogXCJiZWZvcmVcIixcblx0aW5zZXJ0QWZ0ZXI6IFwiYWZ0ZXJcIixcblx0cmVwbGFjZUFsbDogXCJyZXBsYWNlV2l0aFwiXG59LCBmdW5jdGlvbiggbmFtZSwgb3JpZ2luYWwgKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBlbGVtcyxcblx0XHRcdHJldCA9IFtdLFxuXHRcdFx0aW5zZXJ0ID0galF1ZXJ5KCBzZWxlY3RvciApLFxuXHRcdFx0bGFzdCA9IGluc2VydC5sZW5ndGggLSAxLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRmb3IgKCA7IGkgPD0gbGFzdDsgaSsrICkge1xuXHRcdFx0ZWxlbXMgPSBpID09PSBsYXN0ID8gdGhpcyA6IHRoaXMuY2xvbmUoIHRydWUgKTtcblx0XHRcdGpRdWVyeSggaW5zZXJ0WyBpIF0gKVsgb3JpZ2luYWwgXSggZWxlbXMgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHQvLyAuZ2V0KCkgYmVjYXVzZSBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRwdXNoLmFwcGx5KCByZXQsIGVsZW1zLmdldCgpICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCByZXQgKTtcblx0fTtcbn0gKTtcbnZhciBybnVtbm9ucHggPSBuZXcgUmVnRXhwKCBcIl4oXCIgKyBwbnVtICsgXCIpKD8hcHgpW2EteiVdKyRcIiwgXCJpXCIgKTtcblxudmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxuXHRcdC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuXHRcdC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuXHRcdHZhciB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG5cdFx0aWYgKCAhdmlldyB8fCAhdmlldy5vcGVuZXIgKSB7XG5cdFx0XHR2aWV3ID0gd2luZG93O1xuXHRcdH1cblxuXHRcdHJldHVybiB2aWV3LmdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcblx0fTtcblxudmFyIHJib3hTdHlsZSA9IG5ldyBSZWdFeHAoIGNzc0V4cGFuZC5qb2luKCBcInxcIiApLCBcImlcIiApO1xuXG5cblxuKCBmdW5jdGlvbigpIHtcblxuXHQvLyBFeGVjdXRpbmcgYm90aCBwaXhlbFBvc2l0aW9uICYgYm94U2l6aW5nUmVsaWFibGUgdGVzdHMgcmVxdWlyZSBvbmx5IG9uZSBsYXlvdXRcblx0Ly8gc28gdGhleSdyZSBleGVjdXRlZCBhdCB0aGUgc2FtZSB0aW1lIHRvIHNhdmUgdGhlIHNlY29uZCBjb21wdXRhdGlvbi5cblx0ZnVuY3Rpb24gY29tcHV0ZVN0eWxlVGVzdHMoKSB7XG5cblx0XHQvLyBUaGlzIGlzIGEgc2luZ2xldG9uLCB3ZSBuZWVkIHRvIGV4ZWN1dGUgaXQgb25seSBvbmNlXG5cdFx0aWYgKCAhZGl2ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7XCIgK1xuXHRcdFx0XCJtYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjBcIjtcblx0XHRkaXYuc3R5bGUuY3NzVGV4dCA9XG5cdFx0XHRcInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDtcIiArXG5cdFx0XHRcIm1hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7XCIgK1xuXHRcdFx0XCJ3aWR0aDo2MCU7dG9wOjElXCI7XG5cdFx0ZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKCBjb250YWluZXIgKS5hcHBlbmRDaGlsZCggZGl2ICk7XG5cblx0XHR2YXIgZGl2U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZGl2ICk7XG5cdFx0cGl4ZWxQb3NpdGlvblZhbCA9IGRpdlN0eWxlLnRvcCAhPT0gXCIxJVwiO1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgRmlyZWZveCA8PTMgLSA0NFxuXHRcdHJlbGlhYmxlTWFyZ2luTGVmdFZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2U3R5bGUubWFyZ2luTGVmdCApID09PSAxMjtcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHksIFNhZmFyaSA8PTkuMSAtIDEwLjEsIGlPUyA8PTcuMCAtIDkuM1xuXHRcdC8vIFNvbWUgc3R5bGVzIGNvbWUgYmFjayB3aXRoIHBlcmNlbnRhZ2UgdmFsdWVzLCBldmVuIHRob3VnaCB0aGV5IHNob3VsZG4ndFxuXHRcdGRpdi5zdHlsZS5yaWdodCA9IFwiNjAlXCI7XG5cdFx0cGl4ZWxCb3hTdHlsZXNWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoIGRpdlN0eWxlLnJpZ2h0ICkgPT09IDM2O1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcblx0XHQvLyBEZXRlY3QgbWlzcmVwb3J0aW5nIG9mIGNvbnRlbnQgZGltZW5zaW9ucyBmb3IgYm94LXNpemluZzpib3JkZXItYm94IGVsZW1lbnRzXG5cdFx0Ym94U2l6aW5nUmVsaWFibGVWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoIGRpdlN0eWxlLndpZHRoICkgPT09IDM2O1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdFx0Ly8gRGV0ZWN0IG92ZXJmbG93OnNjcm9sbCBzY3Jld2luZXNzIChnaC0zNjk5KVxuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTY0XG5cdFx0Ly8gRG9uJ3QgZ2V0IHRyaWNrZWQgd2hlbiB6b29tIGFmZmVjdHMgb2Zmc2V0V2lkdGggKGdoLTQwMjkpXG5cdFx0ZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdHNjcm9sbGJveFNpemVWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoIGRpdi5vZmZzZXRXaWR0aCAvIDMgKSA9PT0gMTI7XG5cblx0XHRkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoIGNvbnRhaW5lciApO1xuXG5cdFx0Ly8gTnVsbGlmeSB0aGUgZGl2IHNvIGl0IHdvdWxkbid0IGJlIHN0b3JlZCBpbiB0aGUgbWVtb3J5IGFuZFxuXHRcdC8vIGl0IHdpbGwgYWxzbyBiZSBhIHNpZ24gdGhhdCBjaGVja3MgYWxyZWFkeSBwZXJmb3JtZWRcblx0XHRkaXYgPSBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gcm91bmRQaXhlbE1lYXN1cmVzKCBtZWFzdXJlICkge1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKCBwYXJzZUZsb2F0KCBtZWFzdXJlICkgKTtcblx0fVxuXG5cdHZhciBwaXhlbFBvc2l0aW9uVmFsLCBib3hTaXppbmdSZWxpYWJsZVZhbCwgc2Nyb2xsYm94U2l6ZVZhbCwgcGl4ZWxCb3hTdHlsZXNWYWwsXG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0VmFsLFxuXHRcdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XG5cblx0Ly8gRmluaXNoIGVhcmx5IGluIGxpbWl0ZWQgKG5vbi1icm93c2VyKSBlbnZpcm9ubWVudHNcblx0aWYgKCAhZGl2LnN0eWxlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0Ly8gU3R5bGUgb2YgY2xvbmVkIGVsZW1lbnQgYWZmZWN0cyBzb3VyY2UgZWxlbWVudCBjbG9uZWQgKCM4OTA4KVxuXHRkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcImNvbnRlbnQtYm94XCI7XG5cdGRpdi5jbG9uZU5vZGUoIHRydWUgKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiXCI7XG5cdHN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlID0gZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID09PSBcImNvbnRlbnQtYm94XCI7XG5cblx0alF1ZXJ5LmV4dGVuZCggc3VwcG9ydCwge1xuXHRcdGJveFNpemluZ1JlbGlhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gYm94U2l6aW5nUmVsaWFibGVWYWw7XG5cdFx0fSxcblx0XHRwaXhlbEJveFN0eWxlczogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHBpeGVsQm94U3R5bGVzVmFsO1xuXHRcdH0sXG5cdFx0cGl4ZWxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHBpeGVsUG9zaXRpb25WYWw7XG5cdFx0fSxcblx0XHRyZWxpYWJsZU1hcmdpbkxlZnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiByZWxpYWJsZU1hcmdpbkxlZnRWYWw7XG5cdFx0fSxcblx0XHRzY3JvbGxib3hTaXplOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gc2Nyb2xsYm94U2l6ZVZhbDtcblx0XHR9XG5cdH0gKTtcbn0gKSgpO1xuXG5cbmZ1bmN0aW9uIGN1ckNTUyggZWxlbSwgbmFtZSwgY29tcHV0ZWQgKSB7XG5cdHZhciB3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoLCByZXQsXG5cblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDUxK1xuXHRcdC8vIFJldHJpZXZpbmcgc3R5bGUgYmVmb3JlIGNvbXB1dGVkIHNvbWVob3dcblx0XHQvLyBmaXhlcyBhbiBpc3N1ZSB3aXRoIGdldHRpbmcgd3JvbmcgdmFsdWVzXG5cdFx0Ly8gb24gZGV0YWNoZWQgZWxlbWVudHNcblx0XHRzdHlsZSA9IGVsZW0uc3R5bGU7XG5cblx0Y29tcHV0ZWQgPSBjb21wdXRlZCB8fCBnZXRTdHlsZXMoIGVsZW0gKTtcblxuXHQvLyBnZXRQcm9wZXJ0eVZhbHVlIGlzIG5lZWRlZCBmb3I6XG5cdC8vICAgLmNzcygnZmlsdGVyJykgKElFIDkgb25seSwgIzEyNTM3KVxuXHQvLyAgIC5jc3MoJy0tY3VzdG9tUHJvcGVydHkpICgjMzE0NClcblx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRyZXQgPSBjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCBuYW1lICkgfHwgY29tcHV0ZWRbIG5hbWUgXTtcblxuXHRcdGlmICggcmV0ID09PSBcIlwiICYmICFpc0F0dGFjaGVkKCBlbGVtICkgKSB7XG5cdFx0XHRyZXQgPSBqUXVlcnkuc3R5bGUoIGVsZW0sIG5hbWUgKTtcblx0XHR9XG5cblx0XHQvLyBBIHRyaWJ1dGUgdG8gdGhlIFwiYXdlc29tZSBoYWNrIGJ5IERlYW4gRWR3YXJkc1wiXG5cdFx0Ly8gQW5kcm9pZCBCcm93c2VyIHJldHVybnMgcGVyY2VudGFnZSBmb3Igc29tZSB2YWx1ZXMsXG5cdFx0Ly8gYnV0IHdpZHRoIHNlZW1zIHRvIGJlIHJlbGlhYmx5IHBpeGVscy5cblx0XHQvLyBUaGlzIGlzIGFnYWluc3QgdGhlIENTU09NIGRyYWZ0IHNwZWM6XG5cdFx0Ly8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNyZXNvbHZlZC12YWx1ZXNcblx0XHRpZiAoICFzdXBwb3J0LnBpeGVsQm94U3R5bGVzKCkgJiYgcm51bW5vbnB4LnRlc3QoIHJldCApICYmIHJib3hTdHlsZS50ZXN0KCBuYW1lICkgKSB7XG5cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcblx0XHRcdHdpZHRoID0gc3R5bGUud2lkdGg7XG5cdFx0XHRtaW5XaWR0aCA9IHN0eWxlLm1pbldpZHRoO1xuXHRcdFx0bWF4V2lkdGggPSBzdHlsZS5tYXhXaWR0aDtcblxuXHRcdFx0Ly8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuXHRcdFx0c3R5bGUubWluV2lkdGggPSBzdHlsZS5tYXhXaWR0aCA9IHN0eWxlLndpZHRoID0gcmV0O1xuXHRcdFx0cmV0ID0gY29tcHV0ZWQud2lkdGg7XG5cblx0XHRcdC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcblx0XHRcdHN0eWxlLndpZHRoID0gd2lkdGg7XG5cdFx0XHRzdHlsZS5taW5XaWR0aCA9IG1pbldpZHRoO1xuXHRcdFx0c3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmV0ICE9PSB1bmRlZmluZWQgP1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHRcdC8vIElFIHJldHVybnMgekluZGV4IHZhbHVlIGFzIGFuIGludGVnZXIuXG5cdFx0cmV0ICsgXCJcIiA6XG5cdFx0cmV0O1xufVxuXG5cbmZ1bmN0aW9uIGFkZEdldEhvb2tJZiggY29uZGl0aW9uRm4sIGhvb2tGbiApIHtcblxuXHQvLyBEZWZpbmUgdGhlIGhvb2ssIHdlJ2xsIGNoZWNrIG9uIHRoZSBmaXJzdCBydW4gaWYgaXQncyByZWFsbHkgbmVlZGVkLlxuXHRyZXR1cm4ge1xuXHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIGNvbmRpdGlvbkZuKCkgKSB7XG5cblx0XHRcdFx0Ly8gSG9vayBub3QgbmVlZGVkIChvciBpdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgaXQgZHVlXG5cdFx0XHRcdC8vIHRvIG1pc3NpbmcgZGVwZW5kZW5jeSksIHJlbW92ZSBpdC5cblx0XHRcdFx0ZGVsZXRlIHRoaXMuZ2V0O1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhvb2sgbmVlZGVkOyByZWRlZmluZSBpdCBzbyB0aGF0IHRoZSBzdXBwb3J0IHRlc3QgaXMgbm90IGV4ZWN1dGVkIGFnYWluLlxuXHRcdFx0cmV0dXJuICggdGhpcy5nZXQgPSBob29rRm4gKS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0fVxuXHR9O1xufVxuXG5cbnZhciBjc3NQcmVmaXhlcyA9IFsgXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiIF0sXG5cdGVtcHR5U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkuc3R5bGUsXG5cdHZlbmRvclByb3BzID0ge307XG5cbi8vIFJldHVybiBhIHZlbmRvci1wcmVmaXhlZCBwcm9wZXJ0eSBvciB1bmRlZmluZWRcbmZ1bmN0aW9uIHZlbmRvclByb3BOYW1lKCBuYW1lICkge1xuXG5cdC8vIENoZWNrIGZvciB2ZW5kb3IgcHJlZml4ZWQgbmFtZXNcblx0dmFyIGNhcE5hbWUgPSBuYW1lWyAwIF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoIDEgKSxcblx0XHRpID0gY3NzUHJlZml4ZXMubGVuZ3RoO1xuXG5cdHdoaWxlICggaS0tICkge1xuXHRcdG5hbWUgPSBjc3NQcmVmaXhlc1sgaSBdICsgY2FwTmFtZTtcblx0XHRpZiAoIG5hbWUgaW4gZW1wdHlTdHlsZSApIHtcblx0XHRcdHJldHVybiBuYW1lO1xuXHRcdH1cblx0fVxufVxuXG4vLyBSZXR1cm4gYSBwb3RlbnRpYWxseS1tYXBwZWQgalF1ZXJ5LmNzc1Byb3BzIG9yIHZlbmRvciBwcmVmaXhlZCBwcm9wZXJ0eVxuZnVuY3Rpb24gZmluYWxQcm9wTmFtZSggbmFtZSApIHtcblx0dmFyIGZpbmFsID0galF1ZXJ5LmNzc1Byb3BzWyBuYW1lIF0gfHwgdmVuZG9yUHJvcHNbIG5hbWUgXTtcblxuXHRpZiAoIGZpbmFsICkge1xuXHRcdHJldHVybiBmaW5hbDtcblx0fVxuXHRpZiAoIG5hbWUgaW4gZW1wdHlTdHlsZSApIHtcblx0XHRyZXR1cm4gbmFtZTtcblx0fVxuXHRyZXR1cm4gdmVuZG9yUHJvcHNbIG5hbWUgXSA9IHZlbmRvclByb3BOYW1lKCBuYW1lICkgfHwgbmFtZTtcbn1cblxuXG52YXJcblxuXHQvLyBTd2FwcGFibGUgaWYgZGlzcGxheSBpcyBub25lIG9yIHN0YXJ0cyB3aXRoIHRhYmxlXG5cdC8vIGV4Y2VwdCBcInRhYmxlXCIsIFwidGFibGUtY2VsbFwiLCBvciBcInRhYmxlLWNhcHRpb25cIlxuXHQvLyBTZWUgaGVyZSBmb3IgZGlzcGxheSB2YWx1ZXM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvQ1NTL2Rpc3BsYXlcblx0cmRpc3BsYXlzd2FwID0gL14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFxuXHRyY3VzdG9tUHJvcCA9IC9eLS0vLFxuXHRjc3NTaG93ID0geyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB2aXNpYmlsaXR5OiBcImhpZGRlblwiLCBkaXNwbGF5OiBcImJsb2NrXCIgfSxcblx0Y3NzTm9ybWFsVHJhbnNmb3JtID0ge1xuXHRcdGxldHRlclNwYWNpbmc6IFwiMFwiLFxuXHRcdGZvbnRXZWlnaHQ6IFwiNDAwXCJcblx0fTtcblxuZnVuY3Rpb24gc2V0UG9zaXRpdmVOdW1iZXIoIGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCApIHtcblxuXHQvLyBBbnkgcmVsYXRpdmUgKCsvLSkgdmFsdWVzIGhhdmUgYWxyZWFkeSBiZWVuXG5cdC8vIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludFxuXHR2YXIgbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKTtcblx0cmV0dXJuIG1hdGNoZXMgP1xuXG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCB1bmRlZmluZWQgXCJzdWJ0cmFjdFwiLCBlLmcuLCB3aGVuIHVzZWQgYXMgaW4gY3NzSG9va3Ncblx0XHRNYXRoLm1heCggMCwgbWF0Y2hlc1sgMiBdIC0gKCBzdWJ0cmFjdCB8fCAwICkgKSArICggbWF0Y2hlc1sgMyBdIHx8IFwicHhcIiApIDpcblx0XHR2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYm94TW9kZWxBZGp1c3RtZW50KCBlbGVtLCBkaW1lbnNpb24sIGJveCwgaXNCb3JkZXJCb3gsIHN0eWxlcywgY29tcHV0ZWRWYWwgKSB7XG5cdHZhciBpID0gZGltZW5zaW9uID09PSBcIndpZHRoXCIgPyAxIDogMCxcblx0XHRleHRyYSA9IDAsXG5cdFx0ZGVsdGEgPSAwO1xuXG5cdC8vIEFkanVzdG1lbnQgbWF5IG5vdCBiZSBuZWNlc3Nhcnlcblx0aWYgKCBib3ggPT09ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiApIHtcblxuXHRcdC8vIEJvdGggYm94IG1vZGVscyBleGNsdWRlIG1hcmdpblxuXHRcdGlmICggYm94ID09PSBcIm1hcmdpblwiICkge1xuXHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgYm94ICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlIGdldCBoZXJlIHdpdGggYSBjb250ZW50LWJveCwgd2UncmUgc2Vla2luZyBcInBhZGRpbmdcIiBvciBcImJvcmRlclwiIG9yIFwibWFyZ2luXCJcblx0XHRpZiAoICFpc0JvcmRlckJveCApIHtcblxuXHRcdFx0Ly8gQWRkIHBhZGRpbmdcblx0XHRcdGRlbHRhICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXG5cdFx0XHQvLyBGb3IgXCJib3JkZXJcIiBvciBcIm1hcmdpblwiLCBhZGQgYm9yZGVyXG5cdFx0XHRpZiAoIGJveCAhPT0gXCJwYWRkaW5nXCIgKSB7XG5cdFx0XHRcdGRlbHRhICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cblx0XHRcdC8vIEJ1dCBzdGlsbCBrZWVwIHRyYWNrIG9mIGl0IG90aGVyd2lzZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXh0cmEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblxuXHRcdC8vIElmIHdlIGdldCBoZXJlIHdpdGggYSBib3JkZXItYm94IChjb250ZW50ICsgcGFkZGluZyArIGJvcmRlciksIHdlJ3JlIHNlZWtpbmcgXCJjb250ZW50XCIgb3Jcblx0XHQvLyBcInBhZGRpbmdcIiBvciBcIm1hcmdpblwiXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gRm9yIFwiY29udGVudFwiLCBzdWJ0cmFjdCBwYWRkaW5nXG5cdFx0XHRpZiAoIGJveCA9PT0gXCJjb250ZW50XCIgKSB7XG5cdFx0XHRcdGRlbHRhIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgXCJjb250ZW50XCIgb3IgXCJwYWRkaW5nXCIsIHN1YnRyYWN0IGJvcmRlclxuXHRcdFx0aWYgKCBib3ggIT09IFwibWFyZ2luXCIgKSB7XG5cdFx0XHRcdGRlbHRhIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWNjb3VudCBmb3IgcG9zaXRpdmUgY29udGVudC1ib3ggc2Nyb2xsIGd1dHRlciB3aGVuIHJlcXVlc3RlZCBieSBwcm92aWRpbmcgY29tcHV0ZWRWYWxcblx0aWYgKCAhaXNCb3JkZXJCb3ggJiYgY29tcHV0ZWRWYWwgPj0gMCApIHtcblxuXHRcdC8vIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBpcyBhIHJvdW5kZWQgc3VtIG9mIGNvbnRlbnQsIHBhZGRpbmcsIHNjcm9sbCBndXR0ZXIsIGFuZCBib3JkZXJcblx0XHQvLyBBc3N1bWluZyBpbnRlZ2VyIHNjcm9sbCBndXR0ZXIsIHN1YnRyYWN0IHRoZSByZXN0IGFuZCByb3VuZCBkb3duXG5cdFx0ZGVsdGEgKz0gTWF0aC5tYXgoIDAsIE1hdGguY2VpbChcblx0XHRcdGVsZW1bIFwib2Zmc2V0XCIgKyBkaW1lbnNpb25bIDAgXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKCAxICkgXSAtXG5cdFx0XHRjb21wdXRlZFZhbCAtXG5cdFx0XHRkZWx0YSAtXG5cdFx0XHRleHRyYSAtXG5cdFx0XHQwLjVcblxuXHRcdC8vIElmIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBpcyB1bmtub3duLCB0aGVuIHdlIGNhbid0IGRldGVybWluZSBjb250ZW50LWJveCBzY3JvbGwgZ3V0dGVyXG5cdFx0Ly8gVXNlIGFuIGV4cGxpY2l0IHplcm8gdG8gYXZvaWQgTmFOIChnaC0zOTY0KVxuXHRcdCkgKSB8fCAwO1xuXHR9XG5cblx0cmV0dXJuIGRlbHRhO1xufVxuXG5mdW5jdGlvbiBnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBkaW1lbnNpb24sIGV4dHJhICkge1xuXG5cdC8vIFN0YXJ0IHdpdGggY29tcHV0ZWQgc3R5bGVcblx0dmFyIHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApLFxuXG5cdFx0Ly8gVG8gYXZvaWQgZm9yY2luZyBhIHJlZmxvdywgb25seSBmZXRjaCBib3hTaXppbmcgaWYgd2UgbmVlZCBpdCAoZ2gtNDMyMikuXG5cdFx0Ly8gRmFrZSBjb250ZW50LWJveCB1bnRpbCB3ZSBrbm93IGl0J3MgbmVlZGVkIHRvIGtub3cgdGhlIHRydWUgdmFsdWUuXG5cdFx0Ym94U2l6aW5nTmVlZGVkID0gIXN1cHBvcnQuYm94U2l6aW5nUmVsaWFibGUoKSB8fCBleHRyYSxcblx0XHRpc0JvcmRlckJveCA9IGJveFNpemluZ05lZWRlZCAmJlxuXHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIixcblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3gsXG5cblx0XHR2YWwgPSBjdXJDU1MoIGVsZW0sIGRpbWVuc2lvbiwgc3R5bGVzICksXG5cdFx0b2Zmc2V0UHJvcCA9IFwib2Zmc2V0XCIgKyBkaW1lbnNpb25bIDAgXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKCAxICk7XG5cblx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTU0XG5cdC8vIFJldHVybiBhIGNvbmZvdW5kaW5nIG5vbi1waXhlbCB2YWx1ZSBvciBmZWlnbiBpZ25vcmFuY2UsIGFzIGFwcHJvcHJpYXRlLlxuXHRpZiAoIHJudW1ub25weC50ZXN0KCB2YWwgKSApIHtcblx0XHRpZiAoICFleHRyYSApIHtcblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fVxuXHRcdHZhbCA9IFwiYXV0b1wiO1xuXHR9XG5cblxuXHQvLyBGYWxsIGJhY2sgdG8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IHdoZW4gdmFsdWUgaXMgXCJhdXRvXCJcblx0Ly8gVGhpcyBoYXBwZW5zIGZvciBpbmxpbmUgZWxlbWVudHMgd2l0aCBubyBleHBsaWNpdCBzZXR0aW5nIChnaC0zNTcxKVxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4xIC0gNC4zIG9ubHlcblx0Ly8gQWxzbyB1c2Ugb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGZvciBtaXNyZXBvcnRlZCBpbmxpbmUgZGltZW5zaW9ucyAoZ2gtMzYwMilcblx0Ly8gU3VwcG9ydDogSUUgOS0xMSBvbmx5XG5cdC8vIEFsc28gdXNlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBmb3Igd2hlbiBib3ggc2l6aW5nIGlzIHVucmVsaWFibGVcblx0Ly8gV2UgdXNlIGdldENsaWVudFJlY3RzKCkgdG8gY2hlY2sgZm9yIGhpZGRlbi9kaXNjb25uZWN0ZWQuXG5cdC8vIEluIHRob3NlIGNhc2VzLCB0aGUgY29tcHV0ZWQgdmFsdWUgY2FuIGJlIHRydXN0ZWQgdG8gYmUgYm9yZGVyLWJveFxuXHRpZiAoICggIXN1cHBvcnQuYm94U2l6aW5nUmVsaWFibGUoKSAmJiBpc0JvcmRlckJveCB8fFxuXHRcdHZhbCA9PT0gXCJhdXRvXCIgfHxcblx0XHQhcGFyc2VGbG9hdCggdmFsICkgJiYgalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJpbmxpbmVcIiApICYmXG5cdFx0ZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApIHtcblxuXHRcdGlzQm9yZGVyQm94ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIjtcblxuXHRcdC8vIFdoZXJlIGF2YWlsYWJsZSwgb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGFwcHJveGltYXRlIGJvcmRlciBib3ggZGltZW5zaW9ucy5cblx0XHQvLyBXaGVyZSBub3QgYXZhaWxhYmxlIChlLmcuLCBTVkcpLCBhc3N1bWUgdW5yZWxpYWJsZSBib3gtc2l6aW5nIGFuZCBpbnRlcnByZXQgdGhlXG5cdFx0Ly8gcmV0cmlldmVkIHZhbHVlIGFzIGEgY29udGVudCBib3ggZGltZW5zaW9uLlxuXHRcdHZhbHVlSXNCb3JkZXJCb3ggPSBvZmZzZXRQcm9wIGluIGVsZW07XG5cdFx0aWYgKCB2YWx1ZUlzQm9yZGVyQm94ICkge1xuXHRcdFx0dmFsID0gZWxlbVsgb2Zmc2V0UHJvcCBdO1xuXHRcdH1cblx0fVxuXG5cdC8vIE5vcm1hbGl6ZSBcIlwiIGFuZCBhdXRvXG5cdHZhbCA9IHBhcnNlRmxvYXQoIHZhbCApIHx8IDA7XG5cblx0Ly8gQWRqdXN0IGZvciB0aGUgZWxlbWVudCdzIGJveCBtb2RlbFxuXHRyZXR1cm4gKCB2YWwgK1xuXHRcdGJveE1vZGVsQWRqdXN0bWVudChcblx0XHRcdGVsZW0sXG5cdFx0XHRkaW1lbnNpb24sXG5cdFx0XHRleHRyYSB8fCAoIGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiICksXG5cdFx0XHR2YWx1ZUlzQm9yZGVyQm94LFxuXHRcdFx0c3R5bGVzLFxuXG5cdFx0XHQvLyBQcm92aWRlIHRoZSBjdXJyZW50IGNvbXB1dGVkIHNpemUgdG8gcmVxdWVzdCBzY3JvbGwgZ3V0dGVyIGNhbGN1bGF0aW9uIChnaC0zNTg5KVxuXHRcdFx0dmFsXG5cdFx0KVxuXHQpICsgXCJweFwiO1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gQWRkIGluIHN0eWxlIHByb3BlcnR5IGhvb2tzIGZvciBvdmVycmlkaW5nIHRoZSBkZWZhdWx0XG5cdC8vIGJlaGF2aW9yIG9mIGdldHRpbmcgYW5kIHNldHRpbmcgYSBzdHlsZSBwcm9wZXJ0eVxuXHRjc3NIb29rczoge1xuXHRcdG9wYWNpdHk6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXG5cdFx0XHRcdFx0Ly8gV2Ugc2hvdWxkIGFsd2F5cyBnZXQgYSBudW1iZXIgYmFjayBmcm9tIG9wYWNpdHlcblx0XHRcdFx0XHR2YXIgcmV0ID0gY3VyQ1NTKCBlbGVtLCBcIm9wYWNpdHlcIiApO1xuXHRcdFx0XHRcdHJldHVybiByZXQgPT09IFwiXCIgPyBcIjFcIiA6IHJldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHQvLyBEb24ndCBhdXRvbWF0aWNhbGx5IGFkZCBcInB4XCIgdG8gdGhlc2UgcG9zc2libHktdW5pdGxlc3MgcHJvcGVydGllc1xuXHRjc3NOdW1iZXI6IHtcblx0XHRcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsXG5cdFx0XCJjb2x1bW5Db3VudFwiOiB0cnVlLFxuXHRcdFwiZmlsbE9wYWNpdHlcIjogdHJ1ZSxcblx0XHRcImZsZXhHcm93XCI6IHRydWUsXG5cdFx0XCJmbGV4U2hyaW5rXCI6IHRydWUsXG5cdFx0XCJmb250V2VpZ2h0XCI6IHRydWUsXG5cdFx0XCJncmlkQXJlYVwiOiB0cnVlLFxuXHRcdFwiZ3JpZENvbHVtblwiOiB0cnVlLFxuXHRcdFwiZ3JpZENvbHVtbkVuZFwiOiB0cnVlLFxuXHRcdFwiZ3JpZENvbHVtblN0YXJ0XCI6IHRydWUsXG5cdFx0XCJncmlkUm93XCI6IHRydWUsXG5cdFx0XCJncmlkUm93RW5kXCI6IHRydWUsXG5cdFx0XCJncmlkUm93U3RhcnRcIjogdHJ1ZSxcblx0XHRcImxpbmVIZWlnaHRcIjogdHJ1ZSxcblx0XHRcIm9wYWNpdHlcIjogdHJ1ZSxcblx0XHRcIm9yZGVyXCI6IHRydWUsXG5cdFx0XCJvcnBoYW5zXCI6IHRydWUsXG5cdFx0XCJ3aWRvd3NcIjogdHJ1ZSxcblx0XHRcInpJbmRleFwiOiB0cnVlLFxuXHRcdFwiem9vbVwiOiB0cnVlXG5cdH0sXG5cblx0Ly8gQWRkIGluIHByb3BlcnRpZXMgd2hvc2UgbmFtZXMgeW91IHdpc2ggdG8gZml4IGJlZm9yZVxuXHQvLyBzZXR0aW5nIG9yIGdldHRpbmcgdGhlIHZhbHVlXG5cdGNzc1Byb3BzOiB7fSxcblxuXHQvLyBHZXQgYW5kIHNldCB0aGUgc3R5bGUgcHJvcGVydHkgb24gYSBET00gTm9kZVxuXHRzdHlsZTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlLCBleHRyYSApIHtcblxuXHRcdC8vIERvbid0IHNldCBzdHlsZXMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXHRcdGlmICggIWVsZW0gfHwgZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4IHx8ICFlbGVtLnN0eWxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZVxuXHRcdHZhciByZXQsIHR5cGUsIGhvb2tzLFxuXHRcdFx0b3JpZ05hbWUgPSBjYW1lbENhc2UoIG5hbWUgKSxcblx0XHRcdGlzQ3VzdG9tUHJvcCA9IHJjdXN0b21Qcm9wLnRlc3QoIG5hbWUgKSxcblx0XHRcdHN0eWxlID0gZWxlbS5zdHlsZTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZS4gV2UgZG9uJ3Rcblx0XHQvLyB3YW50IHRvIHF1ZXJ5IHRoZSB2YWx1ZSBpZiBpdCBpcyBhIENTUyBjdXN0b20gcHJvcGVydHlcblx0XHQvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cdFx0aWYgKCAhaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0bmFtZSA9IGZpbmFsUHJvcE5hbWUoIG9yaWdOYW1lICk7XG5cdFx0fVxuXG5cdFx0Ly8gR2V0cyBob29rIGZvciB0aGUgcHJlZml4ZWQgdmVyc2lvbiwgdGhlbiB1bnByZWZpeGVkIHZlcnNpb25cblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcblxuXHRcdC8vIENoZWNrIGlmIHdlJ3JlIHNldHRpbmcgYSB2YWx1ZVxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cblx0XHRcdC8vIENvbnZlcnQgXCIrPVwiIG9yIFwiLT1cIiB0byByZWxhdGl2ZSBudW1iZXJzICgjNzM0NSlcblx0XHRcdGlmICggdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiAoIHJldCA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmIHJldFsgMSBdICkge1xuXHRcdFx0XHR2YWx1ZSA9IGFkanVzdENTUyggZWxlbSwgbmFtZSwgcmV0ICk7XG5cblx0XHRcdFx0Ly8gRml4ZXMgYnVnICM5MjM3XG5cdFx0XHRcdHR5cGUgPSBcIm51bWJlclwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCBudWxsIGFuZCBOYU4gdmFsdWVzIGFyZW4ndCBzZXQgKCM3MTE2KVxuXHRcdFx0aWYgKCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlICE9PSB2YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBhIG51bWJlciB3YXMgcGFzc2VkIGluLCBhZGQgdGhlIHVuaXQgKGV4Y2VwdCBmb3IgY2VydGFpbiBDU1MgcHJvcGVydGllcylcblx0XHRcdC8vIFRoZSBpc0N1c3RvbVByb3AgY2hlY2sgY2FuIGJlIHJlbW92ZWQgaW4galF1ZXJ5IDQuMCB3aGVuIHdlIG9ubHkgYXV0by1hcHBlbmRcblx0XHRcdC8vIFwicHhcIiB0byBhIGZldyBoYXJkY29kZWQgdmFsdWVzLlxuXHRcdFx0aWYgKCB0eXBlID09PSBcIm51bWJlclwiICYmICFpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRcdHZhbHVlICs9IHJldCAmJiByZXRbIDMgXSB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIG9yaWdOYW1lIF0gPyBcIlwiIDogXCJweFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGJhY2tncm91bmQtKiBwcm9wcyBhZmZlY3Qgb3JpZ2luYWwgY2xvbmUncyB2YWx1ZXNcblx0XHRcdGlmICggIXN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlICYmIHZhbHVlID09PSBcIlwiICYmIG5hbWUuaW5kZXhPZiggXCJiYWNrZ3JvdW5kXCIgKSA9PT0gMCApIHtcblx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IFwiaW5oZXJpdFwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkLCB1c2UgdGhhdCB2YWx1ZSwgb3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSBzcGVjaWZpZWQgdmFsdWVcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fFxuXHRcdFx0XHQoIHZhbHVlID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0aWYgKCBpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRcdFx0c3R5bGUuc2V0UHJvcGVydHkoIG5hbWUsIHZhbHVlICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgbm9uLWNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblx0XHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgZmFsc2UsIGV4dHJhICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE90aGVyd2lzZSBqdXN0IGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgc3R5bGUgb2JqZWN0XG5cdFx0XHRyZXR1cm4gc3R5bGVbIG5hbWUgXTtcblx0XHR9XG5cdH0sXG5cblx0Y3NzOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZXh0cmEsIHN0eWxlcyApIHtcblx0XHR2YXIgdmFsLCBudW0sIGhvb2tzLFxuXHRcdFx0b3JpZ05hbWUgPSBjYW1lbENhc2UoIG5hbWUgKSxcblx0XHRcdGlzQ3VzdG9tUHJvcCA9IHJjdXN0b21Qcm9wLnRlc3QoIG5hbWUgKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZS4gV2UgZG9uJ3Rcblx0XHQvLyB3YW50IHRvIG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgaXMgYSBDU1MgY3VzdG9tIHByb3BlcnR5XG5cdFx0Ly8gc2luY2UgdGhleSBhcmUgdXNlci1kZWZpbmVkLlxuXHRcdGlmICggIWlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdG5hbWUgPSBmaW5hbFByb3BOYW1lKCBvcmlnTmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIFRyeSBwcmVmaXhlZCBuYW1lIGZvbGxvd2VkIGJ5IHRoZSB1bnByZWZpeGVkIG5hbWVcblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcblxuXHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsID0gaG9va3MuZ2V0KCBlbGVtLCB0cnVlLCBleHRyYSApO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSwgaWYgYSB3YXkgdG8gZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBleGlzdHMsIHVzZSB0aGF0XG5cdFx0aWYgKCB2YWwgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgbmFtZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0Ly8gQ29udmVydCBcIm5vcm1hbFwiIHRvIGNvbXB1dGVkIHZhbHVlXG5cdFx0aWYgKCB2YWwgPT09IFwibm9ybWFsXCIgJiYgbmFtZSBpbiBjc3NOb3JtYWxUcmFuc2Zvcm0gKSB7XG5cdFx0XHR2YWwgPSBjc3NOb3JtYWxUcmFuc2Zvcm1bIG5hbWUgXTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIG51bWVyaWMgaWYgZm9yY2VkIG9yIGEgcXVhbGlmaWVyIHdhcyBwcm92aWRlZCBhbmQgdmFsIGxvb2tzIG51bWVyaWNcblx0XHRpZiAoIGV4dHJhID09PSBcIlwiIHx8IGV4dHJhICkge1xuXHRcdFx0bnVtID0gcGFyc2VGbG9hdCggdmFsICk7XG5cdFx0XHRyZXR1cm4gZXh0cmEgPT09IHRydWUgfHwgaXNGaW5pdGUoIG51bSApID8gbnVtIHx8IDAgOiB2YWw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbDtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcImhlaWdodFwiLCBcIndpZHRoXCIgXSwgZnVuY3Rpb24oIGksIGRpbWVuc2lvbiApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBkaW1lbnNpb24gXSA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCwgZXh0cmEgKSB7XG5cdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXG5cdFx0XHRcdC8vIENlcnRhaW4gZWxlbWVudHMgY2FuIGhhdmUgZGltZW5zaW9uIGluZm8gaWYgd2UgaW52aXNpYmx5IHNob3cgdGhlbVxuXHRcdFx0XHQvLyBidXQgaXQgbXVzdCBoYXZlIGEgY3VycmVudCBkaXNwbGF5IHN0eWxlIHRoYXQgd291bGQgYmVuZWZpdFxuXHRcdFx0XHRyZXR1cm4gcmRpc3BsYXlzd2FwLnRlc3QoIGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgKSAmJlxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDgrXG5cdFx0XHRcdFx0Ly8gVGFibGUgY29sdW1ucyBpbiBTYWZhcmkgaGF2ZSBub24temVybyBvZmZzZXRXaWR0aCAmIHplcm9cblx0XHRcdFx0XHQvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB1bmxlc3MgZGlzcGxheSBpcyBjaGFuZ2VkLlxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHRcdFx0XHRcdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGEgZGlzY29ubmVjdGVkIG5vZGVcblx0XHRcdFx0XHQvLyBpbiBJRSB0aHJvd3MgYW4gZXJyb3IuXG5cdFx0XHRcdFx0KCAhZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCB8fCAhZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCApID9cblx0XHRcdFx0XHRcdHN3YXAoIGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgZGltZW5zaW9uLCBleHRyYSApO1xuXHRcdFx0XHRcdFx0fSApIDpcblx0XHRcdFx0XHRcdGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIGV4dHJhICkge1xuXHRcdFx0dmFyIG1hdGNoZXMsXG5cdFx0XHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApLFxuXG5cdFx0XHRcdC8vIE9ubHkgcmVhZCBzdHlsZXMucG9zaXRpb24gaWYgdGhlIHRlc3QgaGFzIGEgY2hhbmNlIHRvIGZhaWxcblx0XHRcdFx0Ly8gdG8gYXZvaWQgZm9yY2luZyBhIHJlZmxvdy5cblx0XHRcdFx0c2Nyb2xsYm94U2l6ZUJ1Z2d5ID0gIXN1cHBvcnQuc2Nyb2xsYm94U2l6ZSgpICYmXG5cdFx0XHRcdFx0c3R5bGVzLnBvc2l0aW9uID09PSBcImFic29sdXRlXCIsXG5cblx0XHRcdFx0Ly8gVG8gYXZvaWQgZm9yY2luZyBhIHJlZmxvdywgb25seSBmZXRjaCBib3hTaXppbmcgaWYgd2UgbmVlZCBpdCAoZ2gtMzk5MSlcblx0XHRcdFx0Ym94U2l6aW5nTmVlZGVkID0gc2Nyb2xsYm94U2l6ZUJ1Z2d5IHx8IGV4dHJhLFxuXHRcdFx0XHRpc0JvcmRlckJveCA9IGJveFNpemluZ05lZWRlZCAmJlxuXHRcdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCIsXG5cdFx0XHRcdHN1YnRyYWN0ID0gZXh0cmEgP1xuXHRcdFx0XHRcdGJveE1vZGVsQWRqdXN0bWVudChcblx0XHRcdFx0XHRcdGVsZW0sXG5cdFx0XHRcdFx0XHRkaW1lbnNpb24sXG5cdFx0XHRcdFx0XHRleHRyYSxcblx0XHRcdFx0XHRcdGlzQm9yZGVyQm94LFxuXHRcdFx0XHRcdFx0c3R5bGVzXG5cdFx0XHRcdFx0KSA6XG5cdFx0XHRcdFx0MDtcblxuXHRcdFx0Ly8gQWNjb3VudCBmb3IgdW5yZWxpYWJsZSBib3JkZXItYm94IGRpbWVuc2lvbnMgYnkgY29tcGFyaW5nIG9mZnNldCogdG8gY29tcHV0ZWQgYW5kXG5cdFx0XHQvLyBmYWtpbmcgYSBjb250ZW50LWJveCB0byBnZXQgYm9yZGVyIGFuZCBwYWRkaW5nIChnaC0zNjk5KVxuXHRcdFx0aWYgKCBpc0JvcmRlckJveCAmJiBzY3JvbGxib3hTaXplQnVnZ3kgKSB7XG5cdFx0XHRcdHN1YnRyYWN0IC09IE1hdGguY2VpbChcblx0XHRcdFx0XHRlbGVtWyBcIm9mZnNldFwiICsgZGltZW5zaW9uWyAwIF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSggMSApIF0gLVxuXHRcdFx0XHRcdHBhcnNlRmxvYXQoIHN0eWxlc1sgZGltZW5zaW9uIF0gKSAtXG5cdFx0XHRcdFx0Ym94TW9kZWxBZGp1c3RtZW50KCBlbGVtLCBkaW1lbnNpb24sIFwiYm9yZGVyXCIsIGZhbHNlLCBzdHlsZXMgKSAtXG5cdFx0XHRcdFx0MC41XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbnZlcnQgdG8gcGl4ZWxzIGlmIHZhbHVlIGFkanVzdG1lbnQgaXMgbmVlZGVkXG5cdFx0XHRpZiAoIHN1YnRyYWN0ICYmICggbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmXG5cdFx0XHRcdCggbWF0Y2hlc1sgMyBdIHx8IFwicHhcIiApICE9PSBcInB4XCIgKSB7XG5cblx0XHRcdFx0ZWxlbS5zdHlsZVsgZGltZW5zaW9uIF0gPSB2YWx1ZTtcblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuY3NzKCBlbGVtLCBkaW1lbnNpb24gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFBvc2l0aXZlTnVtYmVyKCBlbGVtLCB2YWx1ZSwgc3VidHJhY3QgKTtcblx0XHR9XG5cdH07XG59ICk7XG5cbmpRdWVyeS5jc3NIb29rcy5tYXJnaW5MZWZ0ID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnJlbGlhYmxlTWFyZ2luTGVmdCxcblx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdGlmICggY29tcHV0ZWQgKSB7XG5cdFx0XHRyZXR1cm4gKCBwYXJzZUZsb2F0KCBjdXJDU1MoIGVsZW0sIFwibWFyZ2luTGVmdFwiICkgKSB8fFxuXHRcdFx0XHRlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxuXHRcdFx0XHRcdHN3YXAoIGVsZW0sIHsgbWFyZ2luTGVmdDogMCB9LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG5cdFx0XHRcdFx0fSApXG5cdFx0XHRcdCkgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG4pO1xuXG4vLyBUaGVzZSBob29rcyBhcmUgdXNlZCBieSBhbmltYXRlIHRvIGV4cGFuZCBwcm9wZXJ0aWVzXG5qUXVlcnkuZWFjaCgge1xuXHRtYXJnaW46IFwiXCIsXG5cdHBhZGRpbmc6IFwiXCIsXG5cdGJvcmRlcjogXCJXaWR0aFwiXG59LCBmdW5jdGlvbiggcHJlZml4LCBzdWZmaXggKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0gPSB7XG5cdFx0ZXhwYW5kOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgaSA9IDAsXG5cdFx0XHRcdGV4cGFuZGVkID0ge30sXG5cblx0XHRcdFx0Ly8gQXNzdW1lcyBhIHNpbmdsZSBudW1iZXIgaWYgbm90IGEgc3RyaW5nXG5cdFx0XHRcdHBhcnRzID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUuc3BsaXQoIFwiIFwiICkgOiBbIHZhbHVlIF07XG5cblx0XHRcdGZvciAoIDsgaSA8IDQ7IGkrKyApIHtcblx0XHRcdFx0ZXhwYW5kZWRbIHByZWZpeCArIGNzc0V4cGFuZFsgaSBdICsgc3VmZml4IF0gPVxuXHRcdFx0XHRcdHBhcnRzWyBpIF0gfHwgcGFydHNbIGkgLSAyIF0gfHwgcGFydHNbIDAgXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGV4cGFuZGVkO1xuXHRcdH1cblx0fTtcblxuXHRpZiAoIHByZWZpeCAhPT0gXCJtYXJnaW5cIiApIHtcblx0XHRqUXVlcnkuY3NzSG9va3NbIHByZWZpeCArIHN1ZmZpeCBdLnNldCA9IHNldFBvc2l0aXZlTnVtYmVyO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0Y3NzOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0dmFyIHN0eWxlcywgbGVuLFxuXHRcdFx0XHRtYXAgPSB7fSxcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbmFtZSApICkge1xuXHRcdFx0XHRzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKTtcblx0XHRcdFx0bGVuID0gbmFtZS5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdFx0bWFwWyBuYW1lWyBpIF0gXSA9IGpRdWVyeS5jc3MoIGVsZW0sIG5hbWVbIGkgXSwgZmFsc2UsIHN0eWxlcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIG5hbWUsIHZhbHVlICkgOlxuXHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBuYW1lICk7XG5cdFx0fSwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH1cbn0gKTtcblxuXG5mdW5jdGlvbiBUd2VlbiggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcgKSB7XG5cdHJldHVybiBuZXcgVHdlZW4ucHJvdG90eXBlLmluaXQoIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nICk7XG59XG5qUXVlcnkuVHdlZW4gPSBUd2VlbjtcblxuVHdlZW4ucHJvdG90eXBlID0ge1xuXHRjb25zdHJ1Y3RvcjogVHdlZW4sXG5cdGluaXQ6IGZ1bmN0aW9uKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZywgdW5pdCApIHtcblx0XHR0aGlzLmVsZW0gPSBlbGVtO1xuXHRcdHRoaXMucHJvcCA9IHByb3A7XG5cdFx0dGhpcy5lYXNpbmcgPSBlYXNpbmcgfHwgalF1ZXJ5LmVhc2luZy5fZGVmYXVsdDtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuc3RhcnQgPSB0aGlzLm5vdyA9IHRoaXMuY3VyKCk7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdFx0dGhpcy51bml0ID0gdW5pdCB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSA/IFwiXCIgOiBcInB4XCIgKTtcblx0fSxcblx0Y3VyOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgaG9va3MgPSBUd2Vlbi5wcm9wSG9va3NbIHRoaXMucHJvcCBdO1xuXG5cdFx0cmV0dXJuIGhvb2tzICYmIGhvb2tzLmdldCA/XG5cdFx0XHRob29rcy5nZXQoIHRoaXMgKSA6XG5cdFx0XHRUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KCB0aGlzICk7XG5cdH0sXG5cdHJ1bjogZnVuY3Rpb24oIHBlcmNlbnQgKSB7XG5cdFx0dmFyIGVhc2VkLFxuXHRcdFx0aG9va3MgPSBUd2Vlbi5wcm9wSG9va3NbIHRoaXMucHJvcCBdO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKSB7XG5cdFx0XHR0aGlzLnBvcyA9IGVhc2VkID0galF1ZXJ5LmVhc2luZ1sgdGhpcy5lYXNpbmcgXShcblx0XHRcdFx0cGVyY2VudCwgdGhpcy5vcHRpb25zLmR1cmF0aW9uICogcGVyY2VudCwgMCwgMSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBvcyA9IGVhc2VkID0gcGVyY2VudDtcblx0XHR9XG5cdFx0dGhpcy5ub3cgPSAoIHRoaXMuZW5kIC0gdGhpcy5zdGFydCApICogZWFzZWQgKyB0aGlzLnN0YXJ0O1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc3RlcCApIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zdGVwLmNhbGwoIHRoaXMuZWxlbSwgdGhpcy5ub3csIHRoaXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIGhvb2tzICYmIGhvb2tzLnNldCApIHtcblx0XHRcdGhvb2tzLnNldCggdGhpcyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KCB0aGlzICk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xuXG5Ud2Vlbi5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGUgPSBUd2Vlbi5wcm90b3R5cGU7XG5cblR3ZWVuLnByb3BIb29rcyA9IHtcblx0X2RlZmF1bHQ6IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblx0XHRcdHZhciByZXN1bHQ7XG5cblx0XHRcdC8vIFVzZSBhIHByb3BlcnR5IG9uIHRoZSBlbGVtZW50IGRpcmVjdGx5IHdoZW4gaXQgaXMgbm90IGEgRE9NIGVsZW1lbnQsXG5cdFx0XHQvLyBvciB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHN0eWxlIHByb3BlcnR5IHRoYXQgZXhpc3RzLlxuXHRcdFx0aWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlICE9PSAxIHx8XG5cdFx0XHRcdHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSAhPSBudWxsICYmIHR3ZWVuLmVsZW0uc3R5bGVbIHR3ZWVuLnByb3AgXSA9PSBudWxsICkge1xuXHRcdFx0XHRyZXR1cm4gdHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQYXNzaW5nIGFuIGVtcHR5IHN0cmluZyBhcyBhIDNyZCBwYXJhbWV0ZXIgdG8gLmNzcyB3aWxsIGF1dG9tYXRpY2FsbHlcblx0XHRcdC8vIGF0dGVtcHQgYSBwYXJzZUZsb2F0IGFuZCBmYWxsYmFjayB0byBhIHN0cmluZyBpZiB0aGUgcGFyc2UgZmFpbHMuXG5cdFx0XHQvLyBTaW1wbGUgdmFsdWVzIHN1Y2ggYXMgXCIxMHB4XCIgYXJlIHBhcnNlZCB0byBGbG9hdDtcblx0XHRcdC8vIGNvbXBsZXggdmFsdWVzIHN1Y2ggYXMgXCJyb3RhdGUoMXJhZClcIiBhcmUgcmV0dXJuZWQgYXMtaXMuXG5cdFx0XHRyZXN1bHQgPSBqUXVlcnkuY3NzKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCBcIlwiICk7XG5cblx0XHRcdC8vIEVtcHR5IHN0cmluZ3MsIG51bGwsIHVuZGVmaW5lZCBhbmQgXCJhdXRvXCIgYXJlIGNvbnZlcnRlZCB0byAwLlxuXHRcdFx0cmV0dXJuICFyZXN1bHQgfHwgcmVzdWx0ID09PSBcImF1dG9cIiA/IDAgOiByZXN1bHQ7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblxuXHRcdFx0Ly8gVXNlIHN0ZXAgaG9vayBmb3IgYmFjayBjb21wYXQuXG5cdFx0XHQvLyBVc2UgY3NzSG9vayBpZiBpdHMgdGhlcmUuXG5cdFx0XHQvLyBVc2UgLnN0eWxlIGlmIGF2YWlsYWJsZSBhbmQgdXNlIHBsYWluIHByb3BlcnRpZXMgd2hlcmUgYXZhaWxhYmxlLlxuXHRcdFx0aWYgKCBqUXVlcnkuZnguc3RlcFsgdHdlZW4ucHJvcCBdICkge1xuXHRcdFx0XHRqUXVlcnkuZnguc3RlcFsgdHdlZW4ucHJvcCBdKCB0d2VlbiApO1xuXHRcdFx0fSBlbHNlIGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoXG5cdFx0XHRcdFx0alF1ZXJ5LmNzc0hvb2tzWyB0d2Vlbi5wcm9wIF0gfHxcblx0XHRcdFx0XHR0d2Vlbi5lbGVtLnN0eWxlWyBmaW5hbFByb3BOYW1lKCB0d2Vlbi5wcm9wICkgXSAhPSBudWxsICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggdHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgdHdlZW4ubm93ICsgdHdlZW4udW5pdCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdID0gdHdlZW4ubm93O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbi8vIFBhbmljIGJhc2VkIGFwcHJvYWNoIHRvIHNldHRpbmcgdGhpbmdzIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuVHdlZW4ucHJvcEhvb2tzLnNjcm9sbFRvcCA9IFR3ZWVuLnByb3BIb29rcy5zY3JvbGxMZWZ0ID0ge1xuXHRzZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgJiYgdHdlZW4uZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdID0gdHdlZW4ubm93O1xuXHRcdH1cblx0fVxufTtcblxualF1ZXJ5LmVhc2luZyA9IHtcblx0bGluZWFyOiBmdW5jdGlvbiggcCApIHtcblx0XHRyZXR1cm4gcDtcblx0fSxcblx0c3dpbmc6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiAwLjUgLSBNYXRoLmNvcyggcCAqIE1hdGguUEkgKSAvIDI7XG5cdH0sXG5cdF9kZWZhdWx0OiBcInN3aW5nXCJcbn07XG5cbmpRdWVyeS5meCA9IFR3ZWVuLnByb3RvdHlwZS5pbml0O1xuXG4vLyBCYWNrIGNvbXBhdCA8MS44IGV4dGVuc2lvbiBwb2ludFxualF1ZXJ5LmZ4LnN0ZXAgPSB7fTtcblxuXG5cblxudmFyXG5cdGZ4Tm93LCBpblByb2dyZXNzLFxuXHRyZnh0eXBlcyA9IC9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxcblx0cnJ1biA9IC9xdWV1ZUhvb2tzJC87XG5cbmZ1bmN0aW9uIHNjaGVkdWxlKCkge1xuXHRpZiAoIGluUHJvZ3Jlc3MgKSB7XG5cdFx0aWYgKCBkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzY2hlZHVsZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dCggc2NoZWR1bGUsIGpRdWVyeS5meC5pbnRlcnZhbCApO1xuXHRcdH1cblxuXHRcdGpRdWVyeS5meC50aWNrKCk7XG5cdH1cbn1cblxuLy8gQW5pbWF0aW9ucyBjcmVhdGVkIHN5bmNocm9ub3VzbHkgd2lsbCBydW4gc3luY2hyb25vdXNseVxuZnVuY3Rpb24gY3JlYXRlRnhOb3coKSB7XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRmeE5vdyA9IHVuZGVmaW5lZDtcblx0fSApO1xuXHRyZXR1cm4gKCBmeE5vdyA9IERhdGUubm93KCkgKTtcbn1cblxuLy8gR2VuZXJhdGUgcGFyYW1ldGVycyB0byBjcmVhdGUgYSBzdGFuZGFyZCBhbmltYXRpb25cbmZ1bmN0aW9uIGdlbkZ4KCB0eXBlLCBpbmNsdWRlV2lkdGggKSB7XG5cdHZhciB3aGljaCxcblx0XHRpID0gMCxcblx0XHRhdHRycyA9IHsgaGVpZ2h0OiB0eXBlIH07XG5cblx0Ly8gSWYgd2UgaW5jbHVkZSB3aWR0aCwgc3RlcCB2YWx1ZSBpcyAxIHRvIGRvIGFsbCBjc3NFeHBhbmQgdmFsdWVzLFxuXHQvLyBvdGhlcndpc2Ugc3RlcCB2YWx1ZSBpcyAyIHRvIHNraXAgb3ZlciBMZWZ0IGFuZCBSaWdodFxuXHRpbmNsdWRlV2lkdGggPSBpbmNsdWRlV2lkdGggPyAxIDogMDtcblx0Zm9yICggOyBpIDwgNDsgaSArPSAyIC0gaW5jbHVkZVdpZHRoICkge1xuXHRcdHdoaWNoID0gY3NzRXhwYW5kWyBpIF07XG5cdFx0YXR0cnNbIFwibWFyZ2luXCIgKyB3aGljaCBdID0gYXR0cnNbIFwicGFkZGluZ1wiICsgd2hpY2ggXSA9IHR5cGU7XG5cdH1cblxuXHRpZiAoIGluY2x1ZGVXaWR0aCApIHtcblx0XHRhdHRycy5vcGFjaXR5ID0gYXR0cnMud2lkdGggPSB0eXBlO1xuXHR9XG5cblx0cmV0dXJuIGF0dHJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUd2VlbiggdmFsdWUsIHByb3AsIGFuaW1hdGlvbiApIHtcblx0dmFyIHR3ZWVuLFxuXHRcdGNvbGxlY3Rpb24gPSAoIEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdIHx8IFtdICkuY29uY2F0KCBBbmltYXRpb24udHdlZW5lcnNbIFwiKlwiIF0gKSxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0aWYgKCAoIHR3ZWVuID0gY29sbGVjdGlvblsgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIHByb3AsIHZhbHVlICkgKSApIHtcblxuXHRcdFx0Ly8gV2UncmUgZG9uZSB3aXRoIHRoaXMgcHJvcGVydHlcblx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByZWZpbHRlciggZWxlbSwgcHJvcHMsIG9wdHMgKSB7XG5cdHZhciBwcm9wLCB2YWx1ZSwgdG9nZ2xlLCBob29rcywgb2xkZmlyZSwgcHJvcFR3ZWVuLCByZXN0b3JlRGlzcGxheSwgZGlzcGxheSxcblx0XHRpc0JveCA9IFwid2lkdGhcIiBpbiBwcm9wcyB8fCBcImhlaWdodFwiIGluIHByb3BzLFxuXHRcdGFuaW0gPSB0aGlzLFxuXHRcdG9yaWcgPSB7fSxcblx0XHRzdHlsZSA9IGVsZW0uc3R5bGUsXG5cdFx0aGlkZGVuID0gZWxlbS5ub2RlVHlwZSAmJiBpc0hpZGRlbldpdGhpblRyZWUoIGVsZW0gKSxcblx0XHRkYXRhU2hvdyA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJmeHNob3dcIiApO1xuXG5cdC8vIFF1ZXVlLXNraXBwaW5nIGFuaW1hdGlvbnMgaGlqYWNrIHRoZSBmeCBob29rc1xuXHRpZiAoICFvcHRzLnF1ZXVlICkge1xuXHRcdGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCBcImZ4XCIgKTtcblx0XHRpZiAoIGhvb2tzLnVucXVldWVkID09IG51bGwgKSB7XG5cdFx0XHRob29rcy51bnF1ZXVlZCA9IDA7XG5cdFx0XHRvbGRmaXJlID0gaG9va3MuZW1wdHkuZmlyZTtcblx0XHRcdGhvb2tzLmVtcHR5LmZpcmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhaG9va3MudW5xdWV1ZWQgKSB7XG5cdFx0XHRcdFx0b2xkZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRob29rcy51bnF1ZXVlZCsrO1xuXG5cdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBFbnN1cmUgdGhlIGNvbXBsZXRlIGhhbmRsZXIgaXMgY2FsbGVkIGJlZm9yZSB0aGlzIGNvbXBsZXRlc1xuXHRcdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRob29rcy51bnF1ZXVlZC0tO1xuXHRcdFx0XHRpZiAoICFqUXVlcnkucXVldWUoIGVsZW0sIFwiZnhcIiApLmxlbmd0aCApIHtcblx0XHRcdFx0XHRob29rcy5lbXB0eS5maXJlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBEZXRlY3Qgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0Zm9yICggcHJvcCBpbiBwcm9wcyApIHtcblx0XHR2YWx1ZSA9IHByb3BzWyBwcm9wIF07XG5cdFx0aWYgKCByZnh0eXBlcy50ZXN0KCB2YWx1ZSApICkge1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBwcm9wIF07XG5cdFx0XHR0b2dnbGUgPSB0b2dnbGUgfHwgdmFsdWUgPT09IFwidG9nZ2xlXCI7XG5cdFx0XHRpZiAoIHZhbHVlID09PSAoIGhpZGRlbiA/IFwiaGlkZVwiIDogXCJzaG93XCIgKSApIHtcblxuXHRcdFx0XHQvLyBQcmV0ZW5kIHRvIGJlIGhpZGRlbiBpZiB0aGlzIGlzIGEgXCJzaG93XCIgYW5kXG5cdFx0XHRcdC8vIHRoZXJlIGlzIHN0aWxsIGRhdGEgZnJvbSBhIHN0b3BwZWQgc2hvdy9oaWRlXG5cdFx0XHRcdGlmICggdmFsdWUgPT09IFwic2hvd1wiICYmIGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRoaWRkZW4gPSB0cnVlO1xuXG5cdFx0XHRcdC8vIElnbm9yZSBhbGwgb3RoZXIgbm8tb3Agc2hvdy9oaWRlIGRhdGFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0b3JpZ1sgcHJvcCBdID0gZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSB8fCBqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBCYWlsIG91dCBpZiB0aGlzIGlzIGEgbm8tb3AgbGlrZSAuaGlkZSgpLmhpZGUoKVxuXHRwcm9wVHdlZW4gPSAhalF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3BzICk7XG5cdGlmICggIXByb3BUd2VlbiAmJiBqUXVlcnkuaXNFbXB0eU9iamVjdCggb3JpZyApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFJlc3RyaWN0IFwib3ZlcmZsb3dcIiBhbmQgXCJkaXNwbGF5XCIgc3R5bGVzIGR1cmluZyBib3ggYW5pbWF0aW9uc1xuXHRpZiAoIGlzQm94ICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDE1XG5cdFx0Ly8gUmVjb3JkIGFsbCAzIG92ZXJmbG93IGF0dHJpYnV0ZXMgYmVjYXVzZSBJRSBkb2VzIG5vdCBpbmZlciB0aGUgc2hvcnRoYW5kXG5cdFx0Ly8gZnJvbSBpZGVudGljYWxseS12YWx1ZWQgb3ZlcmZsb3dYIGFuZCBvdmVyZmxvd1kgYW5kIEVkZ2UganVzdCBtaXJyb3JzXG5cdFx0Ly8gdGhlIG92ZXJmbG93WCB2YWx1ZSB0aGVyZS5cblx0XHRvcHRzLm92ZXJmbG93ID0gWyBzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1kgXTtcblxuXHRcdC8vIElkZW50aWZ5IGEgZGlzcGxheSB0eXBlLCBwcmVmZXJyaW5nIG9sZCBzaG93L2hpZGUgZGF0YSBvdmVyIHRoZSBDU1MgY2FzY2FkZVxuXHRcdHJlc3RvcmVEaXNwbGF5ID0gZGF0YVNob3cgJiYgZGF0YVNob3cuZGlzcGxheTtcblx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ID09IG51bGwgKSB7XG5cdFx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHR9XG5cdFx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0aWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiApIHtcblx0XHRcdGlmICggcmVzdG9yZURpc3BsYXkgKSB7XG5cdFx0XHRcdGRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gR2V0IG5vbmVtcHR5IHZhbHVlKHMpIGJ5IHRlbXBvcmFyaWx5IGZvcmNpbmcgdmlzaWJpbGl0eVxuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0sIHRydWUgKTtcblx0XHRcdFx0cmVzdG9yZURpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXkgfHwgcmVzdG9yZURpc3BsYXk7XG5cdFx0XHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBbmltYXRlIGlubGluZSBlbGVtZW50cyBhcyBpbmxpbmUtYmxvY2tcblx0XHRpZiAoIGRpc3BsYXkgPT09IFwiaW5saW5lXCIgfHwgZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIiAmJiByZXN0b3JlRGlzcGxheSAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuY3NzKCBlbGVtLCBcImZsb2F0XCIgKSA9PT0gXCJub25lXCIgKSB7XG5cblx0XHRcdFx0Ly8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgZGlzcGxheSB2YWx1ZSBhdCB0aGUgZW5kIG9mIHB1cmUgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0XHRcdFx0aWYgKCAhcHJvcFR3ZWVuICkge1xuXHRcdFx0XHRcdGFuaW0uZG9uZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRzdHlsZS5kaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGlmICggcmVzdG9yZURpc3BsYXkgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdGRpc3BsYXkgPSBzdHlsZS5kaXNwbGF5O1xuXHRcdFx0XHRcdFx0cmVzdG9yZURpc3BsYXkgPSBkaXNwbGF5ID09PSBcIm5vbmVcIiA/IFwiXCIgOiBkaXNwbGF5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIG9wdHMub3ZlcmZsb3cgKSB7XG5cdFx0c3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblx0XHRcdHN0eWxlLm92ZXJmbG93ID0gb3B0cy5vdmVyZmxvd1sgMCBdO1xuXHRcdFx0c3R5bGUub3ZlcmZsb3dYID0gb3B0cy5vdmVyZmxvd1sgMSBdO1xuXHRcdFx0c3R5bGUub3ZlcmZsb3dZID0gb3B0cy5vdmVyZmxvd1sgMiBdO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIEltcGxlbWVudCBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRwcm9wVHdlZW4gPSBmYWxzZTtcblx0Zm9yICggcHJvcCBpbiBvcmlnICkge1xuXG5cdFx0Ly8gR2VuZXJhbCBzaG93L2hpZGUgc2V0dXAgZm9yIHRoaXMgZWxlbWVudCBhbmltYXRpb25cblx0XHRpZiAoICFwcm9wVHdlZW4gKSB7XG5cdFx0XHRpZiAoIGRhdGFTaG93ICkge1xuXHRcdFx0XHRpZiAoIFwiaGlkZGVuXCIgaW4gZGF0YVNob3cgKSB7XG5cdFx0XHRcdFx0aGlkZGVuID0gZGF0YVNob3cuaGlkZGVuO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkYXRhU2hvdyA9IGRhdGFQcml2LmFjY2VzcyggZWxlbSwgXCJmeHNob3dcIiwgeyBkaXNwbGF5OiByZXN0b3JlRGlzcGxheSB9ICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0b3JlIGhpZGRlbi92aXNpYmxlIGZvciB0b2dnbGUgc28gYC5zdG9wKCkudG9nZ2xlKClgIFwicmV2ZXJzZXNcIlxuXHRcdFx0aWYgKCB0b2dnbGUgKSB7XG5cdFx0XHRcdGRhdGFTaG93LmhpZGRlbiA9ICFoaWRkZW47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNob3cgZWxlbWVudHMgYmVmb3JlIGFuaW1hdGluZyB0aGVtXG5cdFx0XHRpZiAoIGhpZGRlbiApIHtcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdLCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG5cdFx0XHRhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG5cdFx0XHRcdC8vIFRoZSBmaW5hbCBzdGVwIG9mIGEgXCJoaWRlXCIgYW5pbWF0aW9uIGlzIGFjdHVhbGx5IGhpZGluZyB0aGUgZWxlbWVudFxuXHRcdFx0XHRpZiAoICFoaWRkZW4gKSB7XG5cdFx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBcImZ4c2hvd1wiICk7XG5cdFx0XHRcdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIG9yaWdbIHByb3AgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Ly8gUGVyLXByb3BlcnR5IHNldHVwXG5cdFx0cHJvcFR3ZWVuID0gY3JlYXRlVHdlZW4oIGhpZGRlbiA/IGRhdGFTaG93WyBwcm9wIF0gOiAwLCBwcm9wLCBhbmltICk7XG5cdFx0aWYgKCAhKCBwcm9wIGluIGRhdGFTaG93ICkgKSB7XG5cdFx0XHRkYXRhU2hvd1sgcHJvcCBdID0gcHJvcFR3ZWVuLnN0YXJ0O1xuXHRcdFx0aWYgKCBoaWRkZW4gKSB7XG5cdFx0XHRcdHByb3BUd2Vlbi5lbmQgPSBwcm9wVHdlZW4uc3RhcnQ7XG5cdFx0XHRcdHByb3BUd2Vlbi5zdGFydCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHByb3BGaWx0ZXIoIHByb3BzLCBzcGVjaWFsRWFzaW5nICkge1xuXHR2YXIgaW5kZXgsIG5hbWUsIGVhc2luZywgdmFsdWUsIGhvb2tzO1xuXG5cdC8vIGNhbWVsQ2FzZSwgc3BlY2lhbEVhc2luZyBhbmQgZXhwYW5kIGNzc0hvb2sgcGFzc1xuXHRmb3IgKCBpbmRleCBpbiBwcm9wcyApIHtcblx0XHRuYW1lID0gY2FtZWxDYXNlKCBpbmRleCApO1xuXHRcdGVhc2luZyA9IHNwZWNpYWxFYXNpbmdbIG5hbWUgXTtcblx0XHR2YWx1ZSA9IHByb3BzWyBpbmRleCBdO1xuXHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdGVhc2luZyA9IHZhbHVlWyAxIF07XG5cdFx0XHR2YWx1ZSA9IHByb3BzWyBpbmRleCBdID0gdmFsdWVbIDAgXTtcblx0XHR9XG5cblx0XHRpZiAoIGluZGV4ICE9PSBuYW1lICkge1xuXHRcdFx0cHJvcHNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBpbmRleCBdO1xuXHRcdH1cblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF07XG5cdFx0aWYgKCBob29rcyAmJiBcImV4cGFuZFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsdWUgPSBob29rcy5leHBhbmQoIHZhbHVlICk7XG5cdFx0XHRkZWxldGUgcHJvcHNbIG5hbWUgXTtcblxuXHRcdFx0Ly8gTm90IHF1aXRlICQuZXh0ZW5kLCB0aGlzIHdvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBrZXlzLlxuXHRcdFx0Ly8gUmV1c2luZyAnaW5kZXgnIGJlY2F1c2Ugd2UgaGF2ZSB0aGUgY29ycmVjdCBcIm5hbWVcIlxuXHRcdFx0Zm9yICggaW5kZXggaW4gdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggISggaW5kZXggaW4gcHJvcHMgKSApIHtcblx0XHRcdFx0XHRwcm9wc1sgaW5kZXggXSA9IHZhbHVlWyBpbmRleCBdO1xuXHRcdFx0XHRcdHNwZWNpYWxFYXNpbmdbIGluZGV4IF0gPSBlYXNpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BlY2lhbEVhc2luZ1sgbmFtZSBdID0gZWFzaW5nO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBBbmltYXRpb24oIGVsZW0sIHByb3BlcnRpZXMsIG9wdGlvbnMgKSB7XG5cdHZhciByZXN1bHQsXG5cdFx0c3RvcHBlZCxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gQW5pbWF0aW9uLnByZWZpbHRlcnMubGVuZ3RoLFxuXHRcdGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCkuYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRG9uJ3QgbWF0Y2ggZWxlbSBpbiB0aGUgOmFuaW1hdGVkIHNlbGVjdG9yXG5cdFx0XHRkZWxldGUgdGljay5lbGVtO1xuXHRcdH0gKSxcblx0XHR0aWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIHN0b3BwZWQgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBjdXJyZW50VGltZSA9IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG5cdFx0XHRcdHJlbWFpbmluZyA9IE1hdGgubWF4KCAwLCBhbmltYXRpb24uc3RhcnRUaW1lICsgYW5pbWF0aW9uLmR1cmF0aW9uIC0gY3VycmVudFRpbWUgKSxcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDIuMyBvbmx5XG5cdFx0XHRcdC8vIEFyY2hhaWMgY3Jhc2ggYnVnIHdvbid0IGFsbG93IHVzIHRvIHVzZSBgMSAtICggMC41IHx8IDAgKWAgKCMxMjQ5Nylcblx0XHRcdFx0dGVtcCA9IHJlbWFpbmluZyAvIGFuaW1hdGlvbi5kdXJhdGlvbiB8fCAwLFxuXHRcdFx0XHRwZXJjZW50ID0gMSAtIHRlbXAsXG5cdFx0XHRcdGluZGV4ID0gMCxcblx0XHRcdFx0bGVuZ3RoID0gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGg7XG5cblx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCBwZXJjZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBwZXJjZW50LCByZW1haW5pbmcgXSApO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIG1vcmUgdG8gZG8sIHlpZWxkXG5cdFx0XHRpZiAoIHBlcmNlbnQgPCAxICYmIGxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIHJlbWFpbmluZztcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhpcyB3YXMgYW4gZW1wdHkgYW5pbWF0aW9uLCBzeW50aGVzaXplIGEgZmluYWwgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9uXG5cdFx0XHRpZiAoICFsZW5ndGggKSB7XG5cdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCAxLCAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVzb2x2ZSB0aGUgYW5pbWF0aW9uIGFuZCByZXBvcnQgaXRzIGNvbmNsdXNpb25cblx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiBdICk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRhbmltYXRpb24gPSBkZWZlcnJlZC5wcm9taXNlKCB7XG5cdFx0XHRlbGVtOiBlbGVtLFxuXHRcdFx0cHJvcHM6IGpRdWVyeS5leHRlbmQoIHt9LCBwcm9wZXJ0aWVzICksXG5cdFx0XHRvcHRzOiBqUXVlcnkuZXh0ZW5kKCB0cnVlLCB7XG5cdFx0XHRcdHNwZWNpYWxFYXNpbmc6IHt9LFxuXHRcdFx0XHRlYXNpbmc6IGpRdWVyeS5lYXNpbmcuX2RlZmF1bHRcblx0XHRcdH0sIG9wdGlvbnMgKSxcblx0XHRcdG9yaWdpbmFsUHJvcGVydGllczogcHJvcGVydGllcyxcblx0XHRcdG9yaWdpbmFsT3B0aW9uczogb3B0aW9ucyxcblx0XHRcdHN0YXJ0VGltZTogZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdGR1cmF0aW9uOiBvcHRpb25zLmR1cmF0aW9uLFxuXHRcdFx0dHdlZW5zOiBbXSxcblx0XHRcdGNyZWF0ZVR3ZWVuOiBmdW5jdGlvbiggcHJvcCwgZW5kICkge1xuXHRcdFx0XHR2YXIgdHdlZW4gPSBqUXVlcnkuVHdlZW4oIGVsZW0sIGFuaW1hdGlvbi5vcHRzLCBwcm9wLCBlbmQsXG5cdFx0XHRcdFx0XHRhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nWyBwcm9wIF0gfHwgYW5pbWF0aW9uLm9wdHMuZWFzaW5nICk7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnMucHVzaCggdHdlZW4gKTtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdFx0fSxcblx0XHRcdHN0b3A6IGZ1bmN0aW9uKCBnb3RvRW5kICkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSAwLFxuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgYXJlIGdvaW5nIHRvIHRoZSBlbmQsIHdlIHdhbnQgdG8gcnVuIGFsbCB0aGUgdHdlZW5zXG5cdFx0XHRcdFx0Ly8gb3RoZXJ3aXNlIHdlIHNraXAgdGhpcyBwYXJ0XG5cdFx0XHRcdFx0bGVuZ3RoID0gZ290b0VuZCA/IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoIDogMDtcblx0XHRcdFx0aWYgKCBzdG9wcGVkICkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0XHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCAxICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXNvbHZlIHdoZW4gd2UgcGxheWVkIHRoZSBsYXN0IGZyYW1lOyBvdGhlcndpc2UsIHJlamVjdFxuXHRcdFx0XHRpZiAoIGdvdG9FbmQgKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIDEsIDAgXSApO1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIGdvdG9FbmQgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH0gKSxcblx0XHRwcm9wcyA9IGFuaW1hdGlvbi5wcm9wcztcblxuXHRwcm9wRmlsdGVyKCBwcm9wcywgYW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZyApO1xuXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0cmVzdWx0ID0gQW5pbWF0aW9uLnByZWZpbHRlcnNbIGluZGV4IF0uY2FsbCggYW5pbWF0aW9uLCBlbGVtLCBwcm9wcywgYW5pbWF0aW9uLm9wdHMgKTtcblx0XHRpZiAoIHJlc3VsdCApIHtcblx0XHRcdGlmICggaXNGdW5jdGlvbiggcmVzdWx0LnN0b3AgKSApIHtcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCBhbmltYXRpb24uZWxlbSwgYW5pbWF0aW9uLm9wdHMucXVldWUgKS5zdG9wID1cblx0XHRcdFx0XHRyZXN1bHQuc3RvcC5iaW5kKCByZXN1bHQgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9XG5cblx0alF1ZXJ5Lm1hcCggcHJvcHMsIGNyZWF0ZVR3ZWVuLCBhbmltYXRpb24gKTtcblxuXHRpZiAoIGlzRnVuY3Rpb24oIGFuaW1hdGlvbi5vcHRzLnN0YXJ0ICkgKSB7XG5cdFx0YW5pbWF0aW9uLm9wdHMuc3RhcnQuY2FsbCggZWxlbSwgYW5pbWF0aW9uICk7XG5cdH1cblxuXHQvLyBBdHRhY2ggY2FsbGJhY2tzIGZyb20gb3B0aW9uc1xuXHRhbmltYXRpb25cblx0XHQucHJvZ3Jlc3MoIGFuaW1hdGlvbi5vcHRzLnByb2dyZXNzIClcblx0XHQuZG9uZSggYW5pbWF0aW9uLm9wdHMuZG9uZSwgYW5pbWF0aW9uLm9wdHMuY29tcGxldGUgKVxuXHRcdC5mYWlsKCBhbmltYXRpb24ub3B0cy5mYWlsIClcblx0XHQuYWx3YXlzKCBhbmltYXRpb24ub3B0cy5hbHdheXMgKTtcblxuXHRqUXVlcnkuZngudGltZXIoXG5cdFx0alF1ZXJ5LmV4dGVuZCggdGljaywge1xuXHRcdFx0ZWxlbTogZWxlbSxcblx0XHRcdGFuaW06IGFuaW1hdGlvbixcblx0XHRcdHF1ZXVlOiBhbmltYXRpb24ub3B0cy5xdWV1ZVxuXHRcdH0gKVxuXHQpO1xuXG5cdHJldHVybiBhbmltYXRpb247XG59XG5cbmpRdWVyeS5BbmltYXRpb24gPSBqUXVlcnkuZXh0ZW5kKCBBbmltYXRpb24sIHtcblxuXHR0d2VlbmVyczoge1xuXHRcdFwiKlwiOiBbIGZ1bmN0aW9uKCBwcm9wLCB2YWx1ZSApIHtcblx0XHRcdHZhciB0d2VlbiA9IHRoaXMuY3JlYXRlVHdlZW4oIHByb3AsIHZhbHVlICk7XG5cdFx0XHRhZGp1c3RDU1MoIHR3ZWVuLmVsZW0sIHByb3AsIHJjc3NOdW0uZXhlYyggdmFsdWUgKSwgdHdlZW4gKTtcblx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHR9IF1cblx0fSxcblxuXHR0d2VlbmVyOiBmdW5jdGlvbiggcHJvcHMsIGNhbGxiYWNrICkge1xuXHRcdGlmICggaXNGdW5jdGlvbiggcHJvcHMgKSApIHtcblx0XHRcdGNhbGxiYWNrID0gcHJvcHM7XG5cdFx0XHRwcm9wcyA9IFsgXCIqXCIgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvcHMgPSBwcm9wcy5tYXRjaCggcm5vdGh0bWx3aGl0ZSApO1xuXHRcdH1cblxuXHRcdHZhciBwcm9wLFxuXHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0bGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdHByb3AgPSBwcm9wc1sgaW5kZXggXTtcblx0XHRcdEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdID0gQW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gfHwgW107XG5cdFx0XHRBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXS51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH1cblx0fSxcblxuXHRwcmVmaWx0ZXJzOiBbIGRlZmF1bHRQcmVmaWx0ZXIgXSxcblxuXHRwcmVmaWx0ZXI6IGZ1bmN0aW9uKCBjYWxsYmFjaywgcHJlcGVuZCApIHtcblx0XHRpZiAoIHByZXBlbmQgKSB7XG5cdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy5wdXNoKCBjYWxsYmFjayApO1xuXHRcdH1cblx0fVxufSApO1xuXG5qUXVlcnkuc3BlZWQgPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgZm4gKSB7XG5cdHZhciBvcHQgPSBzcGVlZCAmJiB0eXBlb2Ygc3BlZWQgPT09IFwib2JqZWN0XCIgPyBqUXVlcnkuZXh0ZW5kKCB7fSwgc3BlZWQgKSA6IHtcblx0XHRjb21wbGV0ZTogZm4gfHwgIWZuICYmIGVhc2luZyB8fFxuXHRcdFx0aXNGdW5jdGlvbiggc3BlZWQgKSAmJiBzcGVlZCxcblx0XHRkdXJhdGlvbjogc3BlZWQsXG5cdFx0ZWFzaW5nOiBmbiAmJiBlYXNpbmcgfHwgZWFzaW5nICYmICFpc0Z1bmN0aW9uKCBlYXNpbmcgKSAmJiBlYXNpbmdcblx0fTtcblxuXHQvLyBHbyB0byB0aGUgZW5kIHN0YXRlIGlmIGZ4IGFyZSBvZmZcblx0aWYgKCBqUXVlcnkuZngub2ZmICkge1xuXHRcdG9wdC5kdXJhdGlvbiA9IDA7XG5cblx0fSBlbHNlIHtcblx0XHRpZiAoIHR5cGVvZiBvcHQuZHVyYXRpb24gIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRpZiAoIG9wdC5kdXJhdGlvbiBpbiBqUXVlcnkuZnguc3BlZWRzICkge1xuXHRcdFx0XHRvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzWyBvcHQuZHVyYXRpb24gXTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkcy5fZGVmYXVsdDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgb3B0LnF1ZXVlIC0gdHJ1ZS91bmRlZmluZWQvbnVsbCAtPiBcImZ4XCJcblx0aWYgKCBvcHQucXVldWUgPT0gbnVsbCB8fCBvcHQucXVldWUgPT09IHRydWUgKSB7XG5cdFx0b3B0LnF1ZXVlID0gXCJmeFwiO1xuXHR9XG5cblx0Ly8gUXVldWVpbmdcblx0b3B0Lm9sZCA9IG9wdC5jb21wbGV0ZTtcblxuXHRvcHQuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIGlzRnVuY3Rpb24oIG9wdC5vbGQgKSApIHtcblx0XHRcdG9wdC5vbGQuY2FsbCggdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggb3B0LnF1ZXVlICkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIG9wdC5xdWV1ZSApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gb3B0O1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRmYWRlVG86IGZ1bmN0aW9uKCBzcGVlZCwgdG8sIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cblx0XHQvLyBTaG93IGFueSBoaWRkZW4gZWxlbWVudHMgYWZ0ZXIgc2V0dGluZyBvcGFjaXR5IHRvIDBcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoIGlzSGlkZGVuV2l0aGluVHJlZSApLmNzcyggXCJvcGFjaXR5XCIsIDAgKS5zaG93KClcblxuXHRcdFx0Ly8gQW5pbWF0ZSB0byB0aGUgdmFsdWUgc3BlY2lmaWVkXG5cdFx0XHQuZW5kKCkuYW5pbWF0ZSggeyBvcGFjaXR5OiB0byB9LCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9LFxuXHRhbmltYXRlOiBmdW5jdGlvbiggcHJvcCwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0dmFyIGVtcHR5ID0galF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3AgKSxcblx0XHRcdG9wdGFsbCA9IGpRdWVyeS5zcGVlZCggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSxcblx0XHRcdGRvQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gT3BlcmF0ZSBvbiBhIGNvcHkgb2YgcHJvcCBzbyBwZXItcHJvcGVydHkgZWFzaW5nIHdvbid0IGJlIGxvc3Rcblx0XHRcdFx0dmFyIGFuaW0gPSBBbmltYXRpb24oIHRoaXMsIGpRdWVyeS5leHRlbmQoIHt9LCBwcm9wICksIG9wdGFsbCApO1xuXG5cdFx0XHRcdC8vIEVtcHR5IGFuaW1hdGlvbnMsIG9yIGZpbmlzaGluZyByZXNvbHZlcyBpbW1lZGlhdGVseVxuXHRcdFx0XHRpZiAoIGVtcHR5IHx8IGRhdGFQcml2LmdldCggdGhpcywgXCJmaW5pc2hcIiApICkge1xuXHRcdFx0XHRcdGFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZG9BbmltYXRpb24uZmluaXNoID0gZG9BbmltYXRpb247XG5cblx0XHRyZXR1cm4gZW1wdHkgfHwgb3B0YWxsLnF1ZXVlID09PSBmYWxzZSA/XG5cdFx0XHR0aGlzLmVhY2goIGRvQW5pbWF0aW9uICkgOlxuXHRcdFx0dGhpcy5xdWV1ZSggb3B0YWxsLnF1ZXVlLCBkb0FuaW1hdGlvbiApO1xuXHR9LFxuXHRzdG9wOiBmdW5jdGlvbiggdHlwZSwgY2xlYXJRdWV1ZSwgZ290b0VuZCApIHtcblx0XHR2YXIgc3RvcFF1ZXVlID0gZnVuY3Rpb24oIGhvb2tzICkge1xuXHRcdFx0dmFyIHN0b3AgPSBob29rcy5zdG9wO1xuXHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRzdG9wKCBnb3RvRW5kICk7XG5cdFx0fTtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRnb3RvRW5kID0gY2xlYXJRdWV1ZTtcblx0XHRcdGNsZWFyUXVldWUgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBjbGVhclF1ZXVlICYmIHR5cGUgIT09IGZhbHNlICkge1xuXHRcdFx0dGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZGVxdWV1ZSA9IHRydWUsXG5cdFx0XHRcdGluZGV4ID0gdHlwZSAhPSBudWxsICYmIHR5cGUgKyBcInF1ZXVlSG9va3NcIixcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcblx0XHRcdFx0ZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApO1xuXG5cdFx0XHRpZiAoIGluZGV4ICkge1xuXHRcdFx0XHRpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICkge1xuXHRcdFx0XHRcdHN0b3BRdWV1ZSggZGF0YVsgaW5kZXggXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKCBpbmRleCBpbiBkYXRhICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgJiYgcnJ1bi50ZXN0KCBpbmRleCApICkge1xuXHRcdFx0XHRcdFx0c3RvcFF1ZXVlKCBkYXRhWyBpbmRleCBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiZcblx0XHRcdFx0XHQoIHR5cGUgPT0gbnVsbCB8fCB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUgKSApIHtcblxuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIGdvdG9FbmQgKTtcblx0XHRcdFx0XHRkZXF1ZXVlID0gZmFsc2U7XG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGFydCB0aGUgbmV4dCBpbiB0aGUgcXVldWUgaWYgdGhlIGxhc3Qgc3RlcCB3YXNuJ3QgZm9yY2VkLlxuXHRcdFx0Ly8gVGltZXJzIGN1cnJlbnRseSB3aWxsIGNhbGwgdGhlaXIgY29tcGxldGUgY2FsbGJhY2tzLCB3aGljaFxuXHRcdFx0Ly8gd2lsbCBkZXF1ZXVlIGJ1dCBvbmx5IGlmIHRoZXkgd2VyZSBnb3RvRW5kLlxuXHRcdFx0aWYgKCBkZXF1ZXVlIHx8ICFnb3RvRW5kICkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblx0ZmluaXNoOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRpZiAoIHR5cGUgIT09IGZhbHNlICkge1xuXHRcdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCxcblx0XHRcdFx0ZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApLFxuXHRcdFx0XHRxdWV1ZSA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlXCIgXSxcblx0XHRcdFx0aG9va3MgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZUhvb2tzXCIgXSxcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcblx0XHRcdFx0bGVuZ3RoID0gcXVldWUgPyBxdWV1ZS5sZW5ndGggOiAwO1xuXG5cdFx0XHQvLyBFbmFibGUgZmluaXNoaW5nIGZsYWcgb24gcHJpdmF0ZSBkYXRhXG5cdFx0XHRkYXRhLmZpbmlzaCA9IHRydWU7XG5cblx0XHRcdC8vIEVtcHR5IHRoZSBxdWV1ZSBmaXJzdFxuXHRcdFx0alF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBbXSApO1xuXG5cdFx0XHRpZiAoIGhvb2tzICYmIGhvb2tzLnN0b3AgKSB7XG5cdFx0XHRcdGhvb2tzLnN0b3AuY2FsbCggdGhpcywgdHJ1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb29rIGZvciBhbnkgYWN0aXZlIGFuaW1hdGlvbnMsIGFuZCBmaW5pc2ggdGhlbVxuXHRcdFx0Zm9yICggaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOyApIHtcblx0XHRcdFx0aWYgKCB0aW1lcnNbIGluZGV4IF0uZWxlbSA9PT0gdGhpcyAmJiB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUgKSB7XG5cdFx0XHRcdFx0dGltZXJzWyBpbmRleCBdLmFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHRcdHRpbWVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9vayBmb3IgYW55IGFuaW1hdGlvbnMgaW4gdGhlIG9sZCBxdWV1ZSBhbmQgZmluaXNoIHRoZW1cblx0XHRcdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGlmICggcXVldWVbIGluZGV4IF0gJiYgcXVldWVbIGluZGV4IF0uZmluaXNoICkge1xuXHRcdFx0XHRcdHF1ZXVlWyBpbmRleCBdLmZpbmlzaC5jYWxsKCB0aGlzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gVHVybiBvZmYgZmluaXNoaW5nIGZsYWdcblx0XHRcdGRlbGV0ZSBkYXRhLmZpbmlzaDtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHR2YXIgY3NzRm4gPSBqUXVlcnkuZm5bIG5hbWUgXTtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHNwZWVkID09IG51bGwgfHwgdHlwZW9mIHNwZWVkID09PSBcImJvb2xlYW5cIiA/XG5cdFx0XHRjc3NGbi5hcHBseSggdGhpcywgYXJndW1lbnRzICkgOlxuXHRcdFx0dGhpcy5hbmltYXRlKCBnZW5GeCggbmFtZSwgdHJ1ZSApLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9O1xufSApO1xuXG4vLyBHZW5lcmF0ZSBzaG9ydGN1dHMgZm9yIGN1c3RvbSBhbmltYXRpb25zXG5qUXVlcnkuZWFjaCgge1xuXHRzbGlkZURvd246IGdlbkZ4KCBcInNob3dcIiApLFxuXHRzbGlkZVVwOiBnZW5GeCggXCJoaWRlXCIgKSxcblx0c2xpZGVUb2dnbGU6IGdlbkZ4KCBcInRvZ2dsZVwiICksXG5cdGZhZGVJbjogeyBvcGFjaXR5OiBcInNob3dcIiB9LFxuXHRmYWRlT3V0OiB7IG9wYWNpdHk6IFwiaGlkZVwiIH0sXG5cdGZhZGVUb2dnbGU6IHsgb3BhY2l0eTogXCJ0b2dnbGVcIiB9XG59LCBmdW5jdGlvbiggbmFtZSwgcHJvcHMgKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLmFuaW1hdGUoIHByb3BzLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9O1xufSApO1xuXG5qUXVlcnkudGltZXJzID0gW107XG5qUXVlcnkuZngudGljayA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdGltZXIsXG5cdFx0aSA9IDAsXG5cdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycztcblxuXHRmeE5vdyA9IERhdGUubm93KCk7XG5cblx0Zm9yICggOyBpIDwgdGltZXJzLmxlbmd0aDsgaSsrICkge1xuXHRcdHRpbWVyID0gdGltZXJzWyBpIF07XG5cblx0XHQvLyBSdW4gdGhlIHRpbWVyIGFuZCBzYWZlbHkgcmVtb3ZlIGl0IHdoZW4gZG9uZSAoYWxsb3dpbmcgZm9yIGV4dGVybmFsIHJlbW92YWwpXG5cdFx0aWYgKCAhdGltZXIoKSAmJiB0aW1lcnNbIGkgXSA9PT0gdGltZXIgKSB7XG5cdFx0XHR0aW1lcnMuc3BsaWNlKCBpLS0sIDEgKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoICF0aW1lcnMubGVuZ3RoICkge1xuXHRcdGpRdWVyeS5meC5zdG9wKCk7XG5cdH1cblx0ZnhOb3cgPSB1bmRlZmluZWQ7XG59O1xuXG5qUXVlcnkuZngudGltZXIgPSBmdW5jdGlvbiggdGltZXIgKSB7XG5cdGpRdWVyeS50aW1lcnMucHVzaCggdGltZXIgKTtcblx0alF1ZXJ5LmZ4LnN0YXJ0KCk7XG59O1xuXG5qUXVlcnkuZnguaW50ZXJ2YWwgPSAxMztcbmpRdWVyeS5meC5zdGFydCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIGluUHJvZ3Jlc3MgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5Qcm9ncmVzcyA9IHRydWU7XG5cdHNjaGVkdWxlKCk7XG59O1xuXG5qUXVlcnkuZnguc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRpblByb2dyZXNzID0gbnVsbDtcbn07XG5cbmpRdWVyeS5meC5zcGVlZHMgPSB7XG5cdHNsb3c6IDYwMCxcblx0ZmFzdDogMjAwLFxuXG5cdC8vIERlZmF1bHQgc3BlZWRcblx0X2RlZmF1bHQ6IDQwMFxufTtcblxuXG4vLyBCYXNlZCBvZmYgb2YgdGhlIHBsdWdpbiBieSBDbGludCBIZWxmZXJzLCB3aXRoIHBlcm1pc3Npb24uXG4vLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxMDAzMjQwMTQ3NDcvaHR0cDovL2JsaW5kc2lnbmFscy5jb20vaW5kZXgucGhwLzIwMDkvMDcvanF1ZXJ5LWRlbGF5L1xualF1ZXJ5LmZuLmRlbGF5ID0gZnVuY3Rpb24oIHRpbWUsIHR5cGUgKSB7XG5cdHRpbWUgPSBqUXVlcnkuZnggPyBqUXVlcnkuZnguc3BlZWRzWyB0aW1lIF0gfHwgdGltZSA6IHRpbWU7XG5cdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSwgZnVuY3Rpb24oIG5leHQsIGhvb2tzICkge1xuXHRcdHZhciB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoIG5leHQsIHRpbWUgKTtcblx0XHRob29rcy5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0fTtcblx0fSApO1xufTtcblxuXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKSxcblx0XHRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNlbGVjdFwiICksXG5cdFx0b3B0ID0gc2VsZWN0LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcIm9wdGlvblwiICkgKTtcblxuXHRpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjMgb25seVxuXHQvLyBEZWZhdWx0IHZhbHVlIGZvciBhIGNoZWNrYm94IHNob3VsZCBiZSBcIm9uXCJcblx0c3VwcG9ydC5jaGVja09uID0gaW5wdXQudmFsdWUgIT09IFwiXCI7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIE11c3QgYWNjZXNzIHNlbGVjdGVkSW5kZXggdG8gbWFrZSBkZWZhdWx0IG9wdGlvbnMgc2VsZWN0XG5cdHN1cHBvcnQub3B0U2VsZWN0ZWQgPSBvcHQuc2VsZWN0ZWQ7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIEFuIGlucHV0IGxvc2VzIGl0cyB2YWx1ZSBhZnRlciBiZWNvbWluZyBhIHJhZGlvXG5cdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cdGlucHV0LnZhbHVlID0gXCJ0XCI7XG5cdGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG5cdHN1cHBvcnQucmFkaW9WYWx1ZSA9IGlucHV0LnZhbHVlID09PSBcInRcIjtcbn0gKSgpO1xuXG5cbnZhciBib29sSG9vayxcblx0YXR0ckhhbmRsZSA9IGpRdWVyeS5leHByLmF0dHJIYW5kbGU7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0YXR0cjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGpRdWVyeS5hdHRyLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fSxcblxuXHRyZW1vdmVBdHRyOiBmdW5jdGlvbiggbmFtZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCB0aGlzLCBuYW1lICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0YXR0cjogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBhdHRyaWJ1dGVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRmFsbGJhY2sgdG8gcHJvcCB3aGVuIGF0dHJpYnV0ZXMgYXJlIG5vdCBzdXBwb3J0ZWRcblx0XHRpZiAoIHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSA9PT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdHJldHVybiBqUXVlcnkucHJvcCggZWxlbSwgbmFtZSwgdmFsdWUgKTtcblx0XHR9XG5cblx0XHQvLyBBdHRyaWJ1dGUgaG9va3MgYXJlIGRldGVybWluZWQgYnkgdGhlIGxvd2VyY2FzZSB2ZXJzaW9uXG5cdFx0Ly8gR3JhYiBuZWNlc3NhcnkgaG9vayBpZiBvbmUgaXMgZGVmaW5lZFxuXHRcdGlmICggblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXHRcdFx0aG9va3MgPSBqUXVlcnkuYXR0ckhvb2tzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSB8fFxuXHRcdFx0XHQoIGpRdWVyeS5leHByLm1hdGNoLmJvb2wudGVzdCggbmFtZSApID8gYm9vbEhvb2sgOiB1bmRlZmluZWQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSBudWxsICkge1xuXHRcdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCB2YWx1ZSArIFwiXCIgKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKCByZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSApICE9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cblx0XHRyZXQgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHQvLyBOb24tZXhpc3RlbnQgYXR0cmlidXRlcyByZXR1cm4gbnVsbCwgd2Ugbm9ybWFsaXplIHRvIHVuZGVmaW5lZFxuXHRcdHJldHVybiByZXQgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJldDtcblx0fSxcblxuXHRhdHRySG9va3M6IHtcblx0XHR0eXBlOiB7XG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhc3VwcG9ydC5yYWRpb1ZhbHVlICYmIHZhbHVlID09PSBcInJhZGlvXCIgJiZcblx0XHRcdFx0XHRub2RlTmFtZSggZWxlbSwgXCJpbnB1dFwiICkgKSB7XG5cdFx0XHRcdFx0dmFyIHZhbCA9IGVsZW0udmFsdWU7XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCB2YWx1ZSApO1xuXHRcdFx0XHRcdGlmICggdmFsICkge1xuXHRcdFx0XHRcdFx0ZWxlbS52YWx1ZSA9IHZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHJlbW92ZUF0dHI6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHR2YXIgbmFtZSxcblx0XHRcdGkgPSAwLFxuXG5cdFx0XHQvLyBBdHRyaWJ1dGUgbmFtZXMgY2FuIGNvbnRhaW4gbm9uLUhUTUwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzXG5cdFx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcblx0XHRcdGF0dHJOYW1lcyA9IHZhbHVlICYmIHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICk7XG5cblx0XHRpZiAoIGF0dHJOYW1lcyAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0d2hpbGUgKCAoIG5hbWUgPSBhdHRyTmFtZXNbIGkrKyBdICkgKSB7XG5cdFx0XHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCBuYW1lICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIEhvb2tzIGZvciBib29sZWFuIGF0dHJpYnV0ZXNcbmJvb2xIb29rID0ge1xuXHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgbmFtZSApIHtcblx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcblxuXHRcdFx0Ly8gUmVtb3ZlIGJvb2xlYW4gYXR0cmlidXRlcyB3aGVuIHNldCB0byBmYWxzZVxuXHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIG5hbWUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH1cbn07XG5cbmpRdWVyeS5lYWNoKCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCggL1xcdysvZyApLCBmdW5jdGlvbiggaSwgbmFtZSApIHtcblx0dmFyIGdldHRlciA9IGF0dHJIYW5kbGVbIG5hbWUgXSB8fCBqUXVlcnkuZmluZC5hdHRyO1xuXG5cdGF0dHJIYW5kbGVbIG5hbWUgXSA9IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcblx0XHR2YXIgcmV0LCBoYW5kbGUsXG5cdFx0XHRsb3dlcmNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0aWYgKCAhaXNYTUwgKSB7XG5cblx0XHRcdC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3AgYnkgdGVtcG9yYXJpbHkgcmVtb3ZpbmcgdGhpcyBmdW5jdGlvbiBmcm9tIHRoZSBnZXR0ZXJcblx0XHRcdGhhbmRsZSA9IGF0dHJIYW5kbGVbIGxvd2VyY2FzZU5hbWUgXTtcblx0XHRcdGF0dHJIYW5kbGVbIGxvd2VyY2FzZU5hbWUgXSA9IHJldDtcblx0XHRcdHJldCA9IGdldHRlciggZWxlbSwgbmFtZSwgaXNYTUwgKSAhPSBudWxsID9cblx0XHRcdFx0bG93ZXJjYXNlTmFtZSA6XG5cdFx0XHRcdG51bGw7XG5cdFx0XHRhdHRySGFuZGxlWyBsb3dlcmNhc2VOYW1lIF0gPSBoYW5kbGU7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG59ICk7XG5cblxuXG5cbnZhciByZm9jdXNhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcblx0cmNsaWNrYWJsZSA9IC9eKD86YXxhcmVhKSQvaTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRwcm9wOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgalF1ZXJ5LnByb3AsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuXHR9LFxuXG5cdHJlbW92ZVByb3A6IGZ1bmN0aW9uKCBuYW1lICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGVsZXRlIHRoaXNbIGpRdWVyeS5wcm9wRml4WyBuYW1lIF0gfHwgbmFtZSBdO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHByb3A6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHR2YXIgcmV0LCBob29rcyxcblx0XHRcdG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRcdC8vIERvbid0IGdldC9zZXQgcHJvcGVydGllcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblx0XHRpZiAoIG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXG5cdFx0XHQvLyBGaXggbmFtZSBhbmQgYXR0YWNoIGhvb2tzXG5cdFx0XHRuYW1lID0galF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lO1xuXHRcdFx0aG9va3MgPSBqUXVlcnkucHJvcEhvb2tzWyBuYW1lIF07XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCBob29rcyAmJiBcInNldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdCggcmV0ID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgbmFtZSApICkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICggZWxlbVsgbmFtZSBdID0gdmFsdWUgKTtcblx0XHR9XG5cblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKCByZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSApICE9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbVsgbmFtZSBdO1xuXHR9LFxuXG5cdHByb3BIb29rczoge1xuXHRcdHRhYkluZGV4OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0XHRcdFx0Ly8gZWxlbS50YWJJbmRleCBkb2Vzbid0IGFsd2F5cyByZXR1cm4gdGhlXG5cdFx0XHRcdC8vIGNvcnJlY3QgdmFsdWUgd2hlbiBpdCBoYXNuJ3QgYmVlbiBleHBsaWNpdGx5IHNldFxuXHRcdFx0XHQvLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNDExMTYyMzMzNDcvaHR0cDovL2ZsdWlkcHJvamVjdC5vcmcvYmxvZy8yMDA4LzAxLzA5L2dldHRpbmctc2V0dGluZy1hbmQtcmVtb3ZpbmctdGFiaW5kZXgtdmFsdWVzLXdpdGgtamF2YXNjcmlwdC9cblx0XHRcdFx0Ly8gVXNlIHByb3BlciBhdHRyaWJ1dGUgcmV0cmlldmFsKCMxMjA3Milcblx0XHRcdFx0dmFyIHRhYmluZGV4ID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ0YWJpbmRleFwiICk7XG5cblx0XHRcdFx0aWYgKCB0YWJpbmRleCApIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoIHRhYmluZGV4LCAxMCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHJmb2N1c2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApIHx8XG5cdFx0XHRcdFx0cmNsaWNrYWJsZS50ZXN0KCBlbGVtLm5vZGVOYW1lICkgJiZcblx0XHRcdFx0XHRlbGVtLmhyZWZcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHByb3BGaXg6IHtcblx0XHRcImZvclwiOiBcImh0bWxGb3JcIixcblx0XHRcImNsYXNzXCI6IFwiY2xhc3NOYW1lXCJcblx0fVxufSApO1xuXG4vLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbi8vIEFjY2Vzc2luZyB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eVxuLy8gZm9yY2VzIHRoZSBicm93c2VyIHRvIHJlc3BlY3Qgc2V0dGluZyBzZWxlY3RlZFxuLy8gb24gdGhlIG9wdGlvblxuLy8gVGhlIGdldHRlciBlbnN1cmVzIGEgZGVmYXVsdCBvcHRpb24gaXMgc2VsZWN0ZWRcbi8vIHdoZW4gaW4gYW4gb3B0Z3JvdXBcbi8vIGVzbGludCBydWxlIFwibm8tdW51c2VkLWV4cHJlc3Npb25zXCIgaXMgZGlzYWJsZWQgZm9yIHRoaXMgY29kZVxuLy8gc2luY2UgaXQgY29uc2lkZXJzIHN1Y2ggYWNjZXNzaW9ucyBub29wXG5pZiAoICFzdXBwb3J0Lm9wdFNlbGVjdGVkICkge1xuXHRqUXVlcnkucHJvcEhvb2tzLnNlbGVjdGVkID0ge1xuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdGlmICggcGFyZW50ICYmIHBhcmVudC5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvKiBlc2xpbnQgbm8tdW51c2VkLWV4cHJlc3Npb25zOiBcIm9mZlwiICovXG5cblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdFx0cGFyZW50LnNlbGVjdGVkSW5kZXg7XG5cblx0XHRcdFx0aWYgKCBwYXJlbnQucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0XHRwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5qUXVlcnkuZWFjaCggW1xuXHRcInRhYkluZGV4XCIsXG5cdFwicmVhZE9ubHlcIixcblx0XCJtYXhMZW5ndGhcIixcblx0XCJjZWxsU3BhY2luZ1wiLFxuXHRcImNlbGxQYWRkaW5nXCIsXG5cdFwicm93U3BhblwiLFxuXHRcImNvbFNwYW5cIixcblx0XCJ1c2VNYXBcIixcblx0XCJmcmFtZUJvcmRlclwiLFxuXHRcImNvbnRlbnRFZGl0YWJsZVwiXG5dLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnByb3BGaXhbIHRoaXMudG9Mb3dlckNhc2UoKSBdID0gdGhpcztcbn0gKTtcblxuXG5cblxuXHQvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gSFRNTCBzcGVjXG5cdC8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2UtYXNjaWktd2hpdGVzcGFjZVxuXHRmdW5jdGlvbiBzdHJpcEFuZENvbGxhcHNlKCB2YWx1ZSApIHtcblx0XHR2YXIgdG9rZW5zID0gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblx0XHRyZXR1cm4gdG9rZW5zLmpvaW4oIFwiIFwiICk7XG5cdH1cblxuXG5mdW5jdGlvbiBnZXRDbGFzcyggZWxlbSApIHtcblx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlICYmIGVsZW0uZ2V0QXR0cmlidXRlKCBcImNsYXNzXCIgKSB8fCBcIlwiO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VzVG9BcnJheSggdmFsdWUgKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cdH1cblx0cmV0dXJuIFtdO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGFkZENsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzZXMsIGVsZW0sIGN1ciwgY3VyVmFsdWUsIGNsYXp6LCBqLCBmaW5hbFZhbHVlLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaiApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuYWRkQ2xhc3MoIHZhbHVlLmNhbGwoIHRoaXMsIGosIGdldENsYXNzKCB0aGlzICkgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGNsYXNzZXMgPSBjbGFzc2VzVG9BcnJheSggdmFsdWUgKTtcblxuXHRcdGlmICggY2xhc3Nlcy5sZW5ndGggKSB7XG5cdFx0XHR3aGlsZSAoICggZWxlbSA9IHRoaXNbIGkrKyBdICkgKSB7XG5cdFx0XHRcdGN1clZhbHVlID0gZ2V0Q2xhc3MoIGVsZW0gKTtcblx0XHRcdFx0Y3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGNsYXp6ID0gY2xhc3Nlc1sgaisrIF0gKSApIHtcblx0XHRcdFx0XHRcdGlmICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0Y3VyICs9IGNsYXp6ICsgXCIgXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZSggY3VyICk7XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSApIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZW1vdmVDbGFzczogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBjbGFzc2VzLCBlbGVtLCBjdXIsIGN1clZhbHVlLCBjbGF6eiwgaiwgZmluYWxWYWx1ZSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlbW92ZUNsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCBnZXRDbGFzcyggdGhpcyApICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoICFhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYXR0ciggXCJjbGFzc1wiLCBcIlwiICk7XG5cdFx0fVxuXG5cdFx0Y2xhc3NlcyA9IGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0aWYgKCBjbGFzc2VzLmxlbmd0aCApIHtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyggZWxlbSApO1xuXG5cdFx0XHRcdC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXG5cdFx0XHRcdGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGN1clZhbHVlICkgKyBcIiBcIiApO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdHdoaWxlICggKCBjbGF6eiA9IGNsYXNzZXNbIGorKyBdICkgKSB7XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSAqYWxsKiBpbnN0YW5jZXNcblx0XHRcdFx0XHRcdHdoaWxlICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciA9IGN1ci5yZXBsYWNlKCBcIiBcIiArIGNsYXp6ICsgXCIgXCIsIFwiIFwiICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZSggY3VyICk7XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSApIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR0b2dnbGVDbGFzczogZnVuY3Rpb24oIHZhbHVlLCBzdGF0ZVZhbCApIHtcblx0XHR2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZSxcblx0XHRcdGlzVmFsaWRWYWx1ZSA9IHR5cGUgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheSggdmFsdWUgKTtcblxuXHRcdGlmICggdHlwZW9mIHN0YXRlVmFsID09PSBcImJvb2xlYW5cIiAmJiBpc1ZhbGlkVmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKCB2YWx1ZSApIDogdGhpcy5yZW1vdmVDbGFzcyggdmFsdWUgKTtcblx0XHR9XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkudG9nZ2xlQ2xhc3MoXG5cdFx0XHRcdFx0dmFsdWUuY2FsbCggdGhpcywgaSwgZ2V0Q2xhc3MoIHRoaXMgKSwgc3RhdGVWYWwgKSxcblx0XHRcdFx0XHRzdGF0ZVZhbFxuXHRcdFx0XHQpO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGNsYXNzTmFtZSwgaSwgc2VsZiwgY2xhc3NOYW1lcztcblxuXHRcdFx0aWYgKCBpc1ZhbGlkVmFsdWUgKSB7XG5cblx0XHRcdFx0Ly8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcblx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdHNlbGYgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0Y2xhc3NOYW1lcyA9IGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0XHRcdHdoaWxlICggKCBjbGFzc05hbWUgPSBjbGFzc05hbWVzWyBpKysgXSApICkge1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgZWFjaCBjbGFzc05hbWUgZ2l2ZW4sIHNwYWNlIHNlcGFyYXRlZCBsaXN0XG5cdFx0XHRcdFx0aWYgKCBzZWxmLmhhc0NsYXNzKCBjbGFzc05hbWUgKSApIHtcblx0XHRcdFx0XHRcdHNlbGYucmVtb3ZlQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFkZENsYXNzKCBjbGFzc05hbWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gVG9nZ2xlIHdob2xlIGNsYXNzIG5hbWVcblx0XHRcdH0gZWxzZSBpZiAoIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGdldENsYXNzKCB0aGlzICk7XG5cdFx0XHRcdGlmICggY2xhc3NOYW1lICkge1xuXG5cdFx0XHRcdFx0Ly8gU3RvcmUgY2xhc3NOYW1lIGlmIHNldFxuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIsIGNsYXNzTmFtZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZSBvciBpZiB3ZSdyZSBwYXNzZWQgYGZhbHNlYCxcblx0XHRcdFx0Ly8gdGhlbiByZW1vdmUgdGhlIHdob2xlIGNsYXNzbmFtZSAoaWYgdGhlcmUgd2FzIG9uZSwgdGhlIGFib3ZlIHNhdmVkIGl0KS5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGJyaW5nIGJhY2sgd2hhdGV2ZXIgd2FzIHByZXZpb3VzbHkgc2F2ZWQgKGlmIGFueXRoaW5nKSxcblx0XHRcdFx0Ly8gZmFsbGluZyBiYWNrIHRvIHRoZSBlbXB0eSBzdHJpbmcgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuXHRcdFx0XHRpZiAoIHRoaXMuc2V0QXR0cmlidXRlICkge1xuXHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsXG5cdFx0XHRcdFx0XHRjbGFzc05hbWUgfHwgdmFsdWUgPT09IGZhbHNlID9cblx0XHRcdFx0XHRcdFwiXCIgOlxuXHRcdFx0XHRcdFx0ZGF0YVByaXYuZ2V0KCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiApIHx8IFwiXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGhhc0NsYXNzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSwgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Y2xhc3NOYW1lID0gXCIgXCIgKyBzZWxlY3RvciArIFwiIFwiO1xuXHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0XHQoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggZ2V0Q2xhc3MoIGVsZW0gKSApICsgXCIgXCIgKS5pbmRleE9mKCBjbGFzc05hbWUgKSA+IC0xICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufSApO1xuXG5cblxuXG52YXIgcnJldHVybiA9IC9cXHIvZztcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHR2YWw6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgaG9va3MsIHJldCwgdmFsdWVJc0Z1bmN0aW9uLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXTtcblxuXHRcdGlmICggIWFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzWyBlbGVtLnR5cGUgXSB8fFxuXHRcdFx0XHRcdGpRdWVyeS52YWxIb29rc1sgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIF07XG5cblx0XHRcdFx0aWYgKCBob29rcyAmJlxuXHRcdFx0XHRcdFwiZ2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0XHQoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgXCJ2YWx1ZVwiICkgKSAhPT0gdW5kZWZpbmVkXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXQgPSBlbGVtLnZhbHVlO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSBtb3N0IGNvbW1vbiBzdHJpbmcgY2FzZXNcblx0XHRcdFx0aWYgKCB0eXBlb2YgcmV0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdHJldHVybiByZXQucmVwbGFjZSggcnJldHVybiwgXCJcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSGFuZGxlIGNhc2VzIHdoZXJlIHZhbHVlIGlzIG51bGwvdW5kZWYgb3IgbnVtYmVyXG5cdFx0XHRcdHJldHVybiByZXQgPT0gbnVsbCA/IFwiXCIgOiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YWx1ZUlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uKCB2YWx1ZSApO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHR2YXIgdmFsO1xuXG5cdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB2YWx1ZUlzRnVuY3Rpb24gKSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlLmNhbGwoIHRoaXMsIGksIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWwgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVHJlYXQgbnVsbC91bmRlZmluZWQgYXMgXCJcIjsgY29udmVydCBudW1iZXJzIHRvIHN0cmluZ1xuXHRcdFx0aWYgKCB2YWwgPT0gbnVsbCApIHtcblx0XHRcdFx0dmFsID0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiApIHtcblx0XHRcdFx0dmFsICs9IFwiXCI7XG5cblx0XHRcdH0gZWxzZSBpZiAoIEFycmF5LmlzQXJyYXkoIHZhbCApICkge1xuXHRcdFx0XHR2YWwgPSBqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSArIFwiXCI7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0aG9va3MgPSBqUXVlcnkudmFsSG9va3NbIHRoaXMudHlwZSBdIHx8IGpRdWVyeS52YWxIb29rc1sgdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIF07XG5cblx0XHRcdC8vIElmIHNldCByZXR1cm5zIHVuZGVmaW5lZCwgZmFsbCBiYWNrIHRvIG5vcm1hbCBzZXR0aW5nXG5cdFx0XHRpZiAoICFob29rcyB8fCAhKCBcInNldFwiIGluIGhvb2tzICkgfHwgaG9va3Muc2V0KCB0aGlzLCB2YWwsIFwidmFsdWVcIiApID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSB2YWw7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0dmFsSG9va3M6IHtcblx0XHRvcHRpb246IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdFx0dmFyIHZhbCA9IGpRdWVyeS5maW5kLmF0dHIoIGVsZW0sIFwidmFsdWVcIiApO1xuXHRcdFx0XHRyZXR1cm4gdmFsICE9IG51bGwgP1xuXHRcdFx0XHRcdHZhbCA6XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTEwIC0gMTEgb25seVxuXHRcdFx0XHRcdC8vIG9wdGlvbi50ZXh0IHRocm93cyBleGNlcHRpb25zICgjMTQ2ODYsICMxNDg1OClcblx0XHRcdFx0XHQvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZVxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS13aGl0ZXNwYWNlXG5cdFx0XHRcdFx0c3RyaXBBbmRDb2xsYXBzZSggalF1ZXJ5LnRleHQoIGVsZW0gKSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c2VsZWN0OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgdmFsdWUsIG9wdGlvbiwgaSxcblx0XHRcdFx0XHRvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuXHRcdFx0XHRcdGluZGV4ID0gZWxlbS5zZWxlY3RlZEluZGV4LFxuXHRcdFx0XHRcdG9uZSA9IGVsZW0udHlwZSA9PT0gXCJzZWxlY3Qtb25lXCIsXG5cdFx0XHRcdFx0dmFsdWVzID0gb25lID8gbnVsbCA6IFtdLFxuXHRcdFx0XHRcdG1heCA9IG9uZSA/IGluZGV4ICsgMSA6IG9wdGlvbnMubGVuZ3RoO1xuXG5cdFx0XHRcdGlmICggaW5kZXggPCAwICkge1xuXHRcdFx0XHRcdGkgPSBtYXg7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpID0gb25lID8gaW5kZXggOiAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgc2VsZWN0ZWQgb3B0aW9uc1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBtYXg7IGkrKyApIHtcblx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zWyBpIF07XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdC8vIElFOC05IGRvZXNuJ3QgdXBkYXRlIHNlbGVjdGVkIGFmdGVyIGZvcm0gcmVzZXQgKCMyNTUxKVxuXHRcdFx0XHRcdGlmICggKCBvcHRpb24uc2VsZWN0ZWQgfHwgaSA9PT0gaW5kZXggKSAmJlxuXG5cdFx0XHRcdFx0XHRcdC8vIERvbid0IHJldHVybiBvcHRpb25zIHRoYXQgYXJlIGRpc2FibGVkIG9yIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcblx0XHRcdFx0XHRcdFx0IW9wdGlvbi5kaXNhYmxlZCAmJlxuXHRcdFx0XHRcdFx0XHQoICFvcHRpb24ucGFyZW50Tm9kZS5kaXNhYmxlZCB8fFxuXHRcdFx0XHRcdFx0XHRcdCFub2RlTmFtZSggb3B0aW9uLnBhcmVudE5vZGUsIFwib3B0Z3JvdXBcIiApICkgKSB7XG5cblx0XHRcdFx0XHRcdC8vIEdldCB0aGUgc3BlY2lmaWMgdmFsdWUgZm9yIHRoZSBvcHRpb25cblx0XHRcdFx0XHRcdHZhbHVlID0galF1ZXJ5KCBvcHRpb24gKS52YWwoKTtcblxuXHRcdFx0XHRcdFx0Ly8gV2UgZG9uJ3QgbmVlZCBhbiBhcnJheSBmb3Igb25lIHNlbGVjdHNcblx0XHRcdFx0XHRcdGlmICggb25lICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE11bHRpLVNlbGVjdHMgcmV0dXJuIGFuIGFycmF5XG5cdFx0XHRcdFx0XHR2YWx1ZXMucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRcdHZhciBvcHRpb25TZXQsIG9wdGlvbixcblx0XHRcdFx0XHRvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuXHRcdFx0XHRcdHZhbHVlcyA9IGpRdWVyeS5tYWtlQXJyYXkoIHZhbHVlICksXG5cdFx0XHRcdFx0aSA9IG9wdGlvbnMubGVuZ3RoO1xuXG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdG9wdGlvbiA9IG9wdGlvbnNbIGkgXTtcblxuXHRcdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG5cblx0XHRcdFx0XHRpZiAoIG9wdGlvbi5zZWxlY3RlZCA9XG5cdFx0XHRcdFx0XHRqUXVlcnkuaW5BcnJheSggalF1ZXJ5LnZhbEhvb2tzLm9wdGlvbi5nZXQoIG9wdGlvbiApLCB2YWx1ZXMgKSA+IC0xXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRvcHRpb25TZXQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEZvcmNlIGJyb3dzZXJzIHRvIGJlaGF2ZSBjb25zaXN0ZW50bHkgd2hlbiBub24tbWF0Y2hpbmcgdmFsdWUgaXMgc2V0XG5cdFx0XHRcdGlmICggIW9wdGlvblNldCApIHtcblx0XHRcdFx0XHRlbGVtLnNlbGVjdGVkSW5kZXggPSAtMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSApO1xuXG4vLyBSYWRpb3MgYW5kIGNoZWNrYm94ZXMgZ2V0dGVyL3NldHRlclxualF1ZXJ5LmVhY2goIFsgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIgXSwgZnVuY3Rpb24oKSB7XG5cdGpRdWVyeS52YWxIb29rc1sgdGhpcyBdID0ge1xuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0XHRyZXR1cm4gKCBlbGVtLmNoZWNrZWQgPSBqUXVlcnkuaW5BcnJheSggalF1ZXJ5KCBlbGVtICkudmFsKCksIHZhbHVlICkgPiAtMSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0aWYgKCAhc3VwcG9ydC5jaGVja09uICkge1xuXHRcdGpRdWVyeS52YWxIb29rc1sgdGhpcyBdLmdldCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBcInZhbHVlXCIgKSA9PT0gbnVsbCA/IFwib25cIiA6IGVsZW0udmFsdWU7XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG4vLyBSZXR1cm4galF1ZXJ5IGZvciBhdHRyaWJ1dGVzLW9ubHkgaW5jbHVzaW9uXG5cblxuc3VwcG9ydC5mb2N1c2luID0gXCJvbmZvY3VzaW5cIiBpbiB3aW5kb3c7XG5cblxudmFyIHJmb2N1c01vcnBoID0gL14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFxuXHRzdG9wUHJvcGFnYXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uKCBlICkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH07XG5cbmpRdWVyeS5leHRlbmQoIGpRdWVyeS5ldmVudCwge1xuXG5cdHRyaWdnZXI6IGZ1bmN0aW9uKCBldmVudCwgZGF0YSwgZWxlbSwgb25seUhhbmRsZXJzICkge1xuXG5cdFx0dmFyIGksIGN1ciwgdG1wLCBidWJibGVUeXBlLCBvbnR5cGUsIGhhbmRsZSwgc3BlY2lhbCwgbGFzdEVsZW1lbnQsXG5cdFx0XHRldmVudFBhdGggPSBbIGVsZW0gfHwgZG9jdW1lbnQgXSxcblx0XHRcdHR5cGUgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwidHlwZVwiICkgPyBldmVudC50eXBlIDogZXZlbnQsXG5cdFx0XHRuYW1lc3BhY2VzID0gaGFzT3duLmNhbGwoIGV2ZW50LCBcIm5hbWVzcGFjZVwiICkgPyBldmVudC5uYW1lc3BhY2Uuc3BsaXQoIFwiLlwiICkgOiBbXTtcblxuXHRcdGN1ciA9IGxhc3RFbGVtZW50ID0gdG1wID0gZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQ7XG5cblx0XHQvLyBEb24ndCBkbyBldmVudHMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGZvY3VzL2JsdXIgbW9ycGhzIHRvIGZvY3VzaW4vb3V0OyBlbnN1cmUgd2UncmUgbm90IGZpcmluZyB0aGVtIHJpZ2h0IG5vd1xuXHRcdGlmICggcmZvY3VzTW9ycGgudGVzdCggdHlwZSArIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHR5cGUuaW5kZXhPZiggXCIuXCIgKSA+IC0xICkge1xuXG5cdFx0XHQvLyBOYW1lc3BhY2VkIHRyaWdnZXI7IGNyZWF0ZSBhIHJlZ2V4cCB0byBtYXRjaCBldmVudCB0eXBlIGluIGhhbmRsZSgpXG5cdFx0XHRuYW1lc3BhY2VzID0gdHlwZS5zcGxpdCggXCIuXCIgKTtcblx0XHRcdHR5cGUgPSBuYW1lc3BhY2VzLnNoaWZ0KCk7XG5cdFx0XHRuYW1lc3BhY2VzLnNvcnQoKTtcblx0XHR9XG5cdFx0b250eXBlID0gdHlwZS5pbmRleE9mKCBcIjpcIiApIDwgMCAmJiBcIm9uXCIgKyB0eXBlO1xuXG5cdFx0Ly8gQ2FsbGVyIGNhbiBwYXNzIGluIGEgalF1ZXJ5LkV2ZW50IG9iamVjdCwgT2JqZWN0LCBvciBqdXN0IGFuIGV2ZW50IHR5cGUgc3RyaW5nXG5cdFx0ZXZlbnQgPSBldmVudFsgalF1ZXJ5LmV4cGFuZG8gXSA/XG5cdFx0XHRldmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCB0eXBlLCB0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIgJiYgZXZlbnQgKTtcblxuXHRcdC8vIFRyaWdnZXIgYml0bWFzazogJiAxIGZvciBuYXRpdmUgaGFuZGxlcnM7ICYgMiBmb3IgalF1ZXJ5IChhbHdheXMgdHJ1ZSlcblx0XHRldmVudC5pc1RyaWdnZXIgPSBvbmx5SGFuZGxlcnMgPyAyIDogMztcblx0XHRldmVudC5uYW1lc3BhY2UgPSBuYW1lc3BhY2VzLmpvaW4oIFwiLlwiICk7XG5cdFx0ZXZlbnQucm5hbWVzcGFjZSA9IGV2ZW50Lm5hbWVzcGFjZSA/XG5cdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKCBcIlxcXFwuKD86LipcXFxcLnwpXCIgKSArIFwiKFxcXFwufCQpXCIgKSA6XG5cdFx0XHRudWxsO1xuXG5cdFx0Ly8gQ2xlYW4gdXAgdGhlIGV2ZW50IGluIGNhc2UgaXQgaXMgYmVpbmcgcmV1c2VkXG5cdFx0ZXZlbnQucmVzdWx0ID0gdW5kZWZpbmVkO1xuXHRcdGlmICggIWV2ZW50LnRhcmdldCApIHtcblx0XHRcdGV2ZW50LnRhcmdldCA9IGVsZW07XG5cdFx0fVxuXG5cdFx0Ly8gQ2xvbmUgYW55IGluY29taW5nIGRhdGEgYW5kIHByZXBlbmQgdGhlIGV2ZW50LCBjcmVhdGluZyB0aGUgaGFuZGxlciBhcmcgbGlzdFxuXHRcdGRhdGEgPSBkYXRhID09IG51bGwgP1xuXHRcdFx0WyBldmVudCBdIDpcblx0XHRcdGpRdWVyeS5tYWtlQXJyYXkoIGRhdGEsIFsgZXZlbnQgXSApO1xuXG5cdFx0Ly8gQWxsb3cgc3BlY2lhbCBldmVudHMgdG8gZHJhdyBvdXRzaWRlIHRoZSBsaW5lc1xuXHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiBzcGVjaWFsLnRyaWdnZXIgJiYgc3BlY2lhbC50cmlnZ2VyLmFwcGx5KCBlbGVtLCBkYXRhICkgPT09IGZhbHNlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIERldGVybWluZSBldmVudCBwcm9wYWdhdGlvbiBwYXRoIGluIGFkdmFuY2UsIHBlciBXM0MgZXZlbnRzIHNwZWMgKCM5OTUxKVxuXHRcdC8vIEJ1YmJsZSB1cCB0byBkb2N1bWVudCwgdGhlbiB0byB3aW5kb3c7IHdhdGNoIGZvciBhIGdsb2JhbCBvd25lckRvY3VtZW50IHZhciAoIzk3MjQpXG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRidWJibGVUeXBlID0gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgfHwgdHlwZTtcblx0XHRcdGlmICggIXJmb2N1c01vcnBoLnRlc3QoIGJ1YmJsZVR5cGUgKyB0eXBlICkgKSB7XG5cdFx0XHRcdGN1ciA9IGN1ci5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yICggOyBjdXI7IGN1ciA9IGN1ci5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRldmVudFBhdGgucHVzaCggY3VyICk7XG5cdFx0XHRcdHRtcCA9IGN1cjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT25seSBhZGQgd2luZG93IGlmIHdlIGdvdCB0byBkb2N1bWVudCAoZS5nLiwgbm90IHBsYWluIG9iaiBvciBkZXRhY2hlZCBET00pXG5cdFx0XHRpZiAoIHRtcCA9PT0gKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQgKSApIHtcblx0XHRcdFx0ZXZlbnRQYXRoLnB1c2goIHRtcC5kZWZhdWx0VmlldyB8fCB0bXAucGFyZW50V2luZG93IHx8IHdpbmRvdyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEZpcmUgaGFuZGxlcnMgb24gdGhlIGV2ZW50IHBhdGhcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoICggY3VyID0gZXZlbnRQYXRoWyBpKysgXSApICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXHRcdFx0bGFzdEVsZW1lbnQgPSBjdXI7XG5cdFx0XHRldmVudC50eXBlID0gaSA+IDEgP1xuXHRcdFx0XHRidWJibGVUeXBlIDpcblx0XHRcdFx0c3BlY2lhbC5iaW5kVHlwZSB8fCB0eXBlO1xuXG5cdFx0XHQvLyBqUXVlcnkgaGFuZGxlclxuXHRcdFx0aGFuZGxlID0gKCBkYXRhUHJpdi5nZXQoIGN1ciwgXCJldmVudHNcIiApIHx8IHt9IClbIGV2ZW50LnR5cGUgXSAmJlxuXHRcdFx0XHRkYXRhUHJpdi5nZXQoIGN1ciwgXCJoYW5kbGVcIiApO1xuXHRcdFx0aWYgKCBoYW5kbGUgKSB7XG5cdFx0XHRcdGhhbmRsZS5hcHBseSggY3VyLCBkYXRhICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE5hdGl2ZSBoYW5kbGVyXG5cdFx0XHRoYW5kbGUgPSBvbnR5cGUgJiYgY3VyWyBvbnR5cGUgXTtcblx0XHRcdGlmICggaGFuZGxlICYmIGhhbmRsZS5hcHBseSAmJiBhY2NlcHREYXRhKCBjdXIgKSApIHtcblx0XHRcdFx0ZXZlbnQucmVzdWx0ID0gaGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcblx0XHRcdFx0aWYgKCBldmVudC5yZXN1bHQgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZXZlbnQudHlwZSA9IHR5cGU7XG5cblx0XHQvLyBJZiBub2JvZHkgcHJldmVudGVkIHRoZSBkZWZhdWx0IGFjdGlvbiwgZG8gaXQgbm93XG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSApIHtcblxuXHRcdFx0aWYgKCAoICFzcGVjaWFsLl9kZWZhdWx0IHx8XG5cdFx0XHRcdHNwZWNpYWwuX2RlZmF1bHQuYXBwbHkoIGV2ZW50UGF0aC5wb3AoKSwgZGF0YSApID09PSBmYWxzZSApICYmXG5cdFx0XHRcdGFjY2VwdERhdGEoIGVsZW0gKSApIHtcblxuXHRcdFx0XHQvLyBDYWxsIGEgbmF0aXZlIERPTSBtZXRob2Qgb24gdGhlIHRhcmdldCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGV2ZW50LlxuXHRcdFx0XHQvLyBEb24ndCBkbyBkZWZhdWx0IGFjdGlvbnMgb24gd2luZG93LCB0aGF0J3Mgd2hlcmUgZ2xvYmFsIHZhcmlhYmxlcyBiZSAoIzYxNzApXG5cdFx0XHRcdGlmICggb250eXBlICYmIGlzRnVuY3Rpb24oIGVsZW1bIHR5cGUgXSApICYmICFpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxuXHRcdFx0XHRcdHRtcCA9IGVsZW1bIG9udHlwZSBdO1xuXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdHlwZTtcblxuXHRcdFx0XHRcdGlmICggZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdFx0XHRcdGxhc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZWxlbVsgdHlwZSBdKCk7XG5cblx0XHRcdFx0XHRpZiAoIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cdFx0XHRcdFx0XHRsYXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBzdG9wUHJvcGFnYXRpb25DYWxsYmFjayApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdFx0XHRpZiAoIHRtcCApIHtcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gdG1wO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC5yZXN1bHQ7XG5cdH0sXG5cblx0Ly8gUGlnZ3liYWNrIG9uIGEgZG9ub3IgZXZlbnQgdG8gc2ltdWxhdGUgYSBkaWZmZXJlbnQgb25lXG5cdC8vIFVzZWQgb25seSBmb3IgYGZvY3VzKGluIHwgb3V0KWAgZXZlbnRzXG5cdHNpbXVsYXRlOiBmdW5jdGlvbiggdHlwZSwgZWxlbSwgZXZlbnQgKSB7XG5cdFx0dmFyIGUgPSBqUXVlcnkuZXh0ZW5kKFxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCgpLFxuXHRcdFx0ZXZlbnQsXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGlzU2ltdWxhdGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBlLCBudWxsLCBlbGVtICk7XG5cdH1cblxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0dHJpZ2dlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgdGhpcyApO1xuXHRcdH0gKTtcblx0fSxcblx0dHJpZ2dlckhhbmRsZXI6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBlbGVtID0gdGhpc1sgMCBdO1xuXHRcdGlmICggZWxlbSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgZWxlbSwgdHJ1ZSApO1xuXHRcdH1cblx0fVxufSApO1xuXG5cbi8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00NFxuLy8gRmlyZWZveCBkb2Vzbid0IGhhdmUgZm9jdXMoaW4gfCBvdXQpIGV2ZW50c1xuLy8gUmVsYXRlZCB0aWNrZXQgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02ODc3ODdcbi8vXG4vLyBTdXBwb3J0OiBDaHJvbWUgPD00OCAtIDQ5LCBTYWZhcmkgPD05LjAgLSA5LjFcbi8vIGZvY3VzKGluIHwgb3V0KSBldmVudHMgZmlyZSBhZnRlciBmb2N1cyAmIGJsdXIgZXZlbnRzLFxuLy8gd2hpY2ggaXMgc3BlYyB2aW9sYXRpb24gLSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50cy1mb2N1c2V2ZW50LWV2ZW50LW9yZGVyXG4vLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0OTg1N1xuaWYgKCAhc3VwcG9ydC5mb2N1c2luICkge1xuXHRqUXVlcnkuZWFjaCggeyBmb2N1czogXCJmb2N1c2luXCIsIGJsdXI6IFwiZm9jdXNvdXRcIiB9LCBmdW5jdGlvbiggb3JpZywgZml4ICkge1xuXG5cdFx0Ly8gQXR0YWNoIGEgc2luZ2xlIGNhcHR1cmluZyBoYW5kbGVyIG9uIHRoZSBkb2N1bWVudCB3aGlsZSBzb21lb25lIHdhbnRzIGZvY3VzaW4vZm9jdXNvdXRcblx0XHR2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdGpRdWVyeS5ldmVudC5zaW11bGF0ZSggZml4LCBldmVudC50YXJnZXQsIGpRdWVyeS5ldmVudC5maXgoIGV2ZW50ICkgKTtcblx0XHR9O1xuXG5cdFx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGZpeCBdID0ge1xuXHRcdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG5cdFx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5hY2Nlc3MoIGRvYywgZml4ICk7XG5cblx0XHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdFx0ZG9jLmFkZEV2ZW50TGlzdGVuZXIoIG9yaWcsIGhhbmRsZXIsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhUHJpdi5hY2Nlc3MoIGRvYywgZml4LCAoIGF0dGFjaGVzIHx8IDAgKSArIDEgKTtcblx0XHRcdH0sXG5cdFx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcyxcblx0XHRcdFx0XHRhdHRhY2hlcyA9IGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXggKSAtIDE7XG5cblx0XHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdFx0ZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG9yaWcsIGhhbmRsZXIsIHRydWUgKTtcblx0XHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGRvYywgZml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkYXRhUHJpdi5hY2Nlc3MoIGRvYywgZml4LCBhdHRhY2hlcyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fSApO1xufVxudmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuXG52YXIgbm9uY2UgPSBEYXRlLm5vdygpO1xuXG52YXIgcnF1ZXJ5ID0gKCAvXFw/LyApO1xuXG5cblxuLy8gQ3Jvc3MtYnJvd3NlciB4bWwgcGFyc2luZ1xualF1ZXJ5LnBhcnNlWE1MID0gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdHZhciB4bWw7XG5cdGlmICggIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHQvLyBJRSB0aHJvd3Mgb24gcGFyc2VGcm9tU3RyaW5nIHdpdGggaW52YWxpZCBpbnB1dC5cblx0dHJ5IHtcblx0XHR4bWwgPSAoIG5ldyB3aW5kb3cuRE9NUGFyc2VyKCkgKS5wYXJzZUZyb21TdHJpbmcoIGRhdGEsIFwidGV4dC94bWxcIiApO1xuXHR9IGNhdGNoICggZSApIHtcblx0XHR4bWwgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpZiAoICF4bWwgfHwgeG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcInBhcnNlcmVycm9yXCIgKS5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5LmVycm9yKCBcIkludmFsaWQgWE1MOiBcIiArIGRhdGEgKTtcblx0fVxuXHRyZXR1cm4geG1sO1xufTtcblxuXG52YXJcblx0cmJyYWNrZXQgPSAvXFxbXFxdJC8sXG5cdHJDUkxGID0gL1xccj9cXG4vZyxcblx0cnN1Ym1pdHRlclR5cGVzID0gL14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFxuXHRyc3VibWl0dGFibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7XG5cbmZ1bmN0aW9uIGJ1aWxkUGFyYW1zKCBwcmVmaXgsIG9iaiwgdHJhZGl0aW9uYWwsIGFkZCApIHtcblx0dmFyIG5hbWU7XG5cblx0aWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSBhcnJheSBpdGVtLlxuXHRcdGpRdWVyeS5lYWNoKCBvYmosIGZ1bmN0aW9uKCBpLCB2ICkge1xuXHRcdFx0aWYgKCB0cmFkaXRpb25hbCB8fCByYnJhY2tldC50ZXN0KCBwcmVmaXggKSApIHtcblxuXHRcdFx0XHQvLyBUcmVhdCBlYWNoIGFycmF5IGl0ZW0gYXMgYSBzY2FsYXIuXG5cdFx0XHRcdGFkZCggcHJlZml4LCB2ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gSXRlbSBpcyBub24tc2NhbGFyIChhcnJheSBvciBvYmplY3QpLCBlbmNvZGUgaXRzIG51bWVyaWMgaW5kZXguXG5cdFx0XHRcdGJ1aWxkUGFyYW1zKFxuXHRcdFx0XHRcdHByZWZpeCArIFwiW1wiICsgKCB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJiB2ICE9IG51bGwgPyBpIDogXCJcIiApICsgXCJdXCIsXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHR0cmFkaXRpb25hbCxcblx0XHRcdFx0XHRhZGRcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0fSBlbHNlIGlmICggIXRyYWRpdGlvbmFsICYmIHRvVHlwZSggb2JqICkgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgb2JqZWN0IGl0ZW0uXG5cdFx0Zm9yICggbmFtZSBpbiBvYmogKSB7XG5cdFx0XHRidWlsZFBhcmFtcyggcHJlZml4ICsgXCJbXCIgKyBuYW1lICsgXCJdXCIsIG9ialsgbmFtZSBdLCB0cmFkaXRpb25hbCwgYWRkICk7XG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cblx0XHQvLyBTZXJpYWxpemUgc2NhbGFyIGl0ZW0uXG5cdFx0YWRkKCBwcmVmaXgsIG9iaiApO1xuXHR9XG59XG5cbi8vIFNlcmlhbGl6ZSBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzIG9yIGEgc2V0IG9mXG4vLyBrZXkvdmFsdWVzIGludG8gYSBxdWVyeSBzdHJpbmdcbmpRdWVyeS5wYXJhbSA9IGZ1bmN0aW9uKCBhLCB0cmFkaXRpb25hbCApIHtcblx0dmFyIHByZWZpeCxcblx0XHRzID0gW10sXG5cdFx0YWRkID0gZnVuY3Rpb24oIGtleSwgdmFsdWVPckZ1bmN0aW9uICkge1xuXG5cdFx0XHQvLyBJZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCBpbnZva2UgaXQgYW5kIHVzZSBpdHMgcmV0dXJuIHZhbHVlXG5cdFx0XHR2YXIgdmFsdWUgPSBpc0Z1bmN0aW9uKCB2YWx1ZU9yRnVuY3Rpb24gKSA/XG5cdFx0XHRcdHZhbHVlT3JGdW5jdGlvbigpIDpcblx0XHRcdFx0dmFsdWVPckZ1bmN0aW9uO1xuXG5cdFx0XHRzWyBzLmxlbmd0aCBdID0gZW5jb2RlVVJJQ29tcG9uZW50KCBrZXkgKSArIFwiPVwiICtcblx0XHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50KCB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICk7XG5cdFx0fTtcblxuXHRpZiAoIGEgPT0gbnVsbCApIHtcblx0XHRyZXR1cm4gXCJcIjtcblx0fVxuXG5cdC8vIElmIGFuIGFycmF5IHdhcyBwYXNzZWQgaW4sIGFzc3VtZSB0aGF0IGl0IGlzIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMuXG5cdGlmICggQXJyYXkuaXNBcnJheSggYSApIHx8ICggYS5qcXVlcnkgJiYgIWpRdWVyeS5pc1BsYWluT2JqZWN0KCBhICkgKSApIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSB0aGUgZm9ybSBlbGVtZW50c1xuXHRcdGpRdWVyeS5lYWNoKCBhLCBmdW5jdGlvbigpIHtcblx0XHRcdGFkZCggdGhpcy5uYW1lLCB0aGlzLnZhbHVlICk7XG5cdFx0fSApO1xuXG5cdH0gZWxzZSB7XG5cblx0XHQvLyBJZiB0cmFkaXRpb25hbCwgZW5jb2RlIHRoZSBcIm9sZFwiIHdheSAodGhlIHdheSAxLjMuMiBvciBvbGRlclxuXHRcdC8vIGRpZCBpdCksIG90aGVyd2lzZSBlbmNvZGUgcGFyYW1zIHJlY3Vyc2l2ZWx5LlxuXHRcdGZvciAoIHByZWZpeCBpbiBhICkge1xuXHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCwgYVsgcHJlZml4IF0sIHRyYWRpdGlvbmFsLCBhZGQgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIHJlc3VsdGluZyBzZXJpYWxpemF0aW9uXG5cdHJldHVybiBzLmpvaW4oIFwiJlwiICk7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHNlcmlhbGl6ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5wYXJhbSggdGhpcy5zZXJpYWxpemVBcnJheSgpICk7XG5cdH0sXG5cdHNlcmlhbGl6ZUFycmF5OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBDYW4gYWRkIHByb3BIb29rIGZvciBcImVsZW1lbnRzXCIgdG8gZmlsdGVyIG9yIGFkZCBmb3JtIGVsZW1lbnRzXG5cdFx0XHR2YXIgZWxlbWVudHMgPSBqUXVlcnkucHJvcCggdGhpcywgXCJlbGVtZW50c1wiICk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudHMgPyBqUXVlcnkubWFrZUFycmF5KCBlbGVtZW50cyApIDogdGhpcztcblx0XHR9IClcblx0XHQuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0eXBlID0gdGhpcy50eXBlO1xuXG5cdFx0XHQvLyBVc2UgLmlzKCBcIjpkaXNhYmxlZFwiICkgc28gdGhhdCBmaWVsZHNldFtkaXNhYmxlZF0gd29ya3Ncblx0XHRcdHJldHVybiB0aGlzLm5hbWUgJiYgIWpRdWVyeSggdGhpcyApLmlzKCBcIjpkaXNhYmxlZFwiICkgJiZcblx0XHRcdFx0cnN1Ym1pdHRhYmxlLnRlc3QoIHRoaXMubm9kZU5hbWUgKSAmJiAhcnN1Ym1pdHRlclR5cGVzLnRlc3QoIHR5cGUgKSAmJlxuXHRcdFx0XHQoIHRoaXMuY2hlY2tlZCB8fCAhcmNoZWNrYWJsZVR5cGUudGVzdCggdHlwZSApICk7XG5cdFx0fSApXG5cdFx0Lm1hcCggZnVuY3Rpb24oIGksIGVsZW0gKSB7XG5cdFx0XHR2YXIgdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cblx0XHRcdGlmICggdmFsID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbCApICkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5Lm1hcCggdmFsLCBmdW5jdGlvbiggdmFsICkge1xuXHRcdFx0XHRcdHJldHVybiB7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKCByQ1JMRiwgXCJcXHJcXG5cIiApIH07XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHR9ICkuZ2V0KCk7XG5cdH1cbn0gKTtcblxuXG52YXJcblx0cjIwID0gLyUyMC9nLFxuXHRyaGFzaCA9IC8jLiokLyxcblx0cmFudGlDYWNoZSA9IC8oWz8mXSlfPVteJl0qLyxcblx0cmhlYWRlcnMgPSAvXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL21nLFxuXG5cdC8vICM3NjUzLCAjODEyNSwgIzgxNTI6IGxvY2FsIHByb3RvY29sIGRldGVjdGlvblxuXHRybG9jYWxQcm90b2NvbCA9IC9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLFxuXHRybm9Db250ZW50ID0gL14oPzpHRVR8SEVBRCkkLyxcblx0cnByb3RvY29sID0gL15cXC9cXC8vLFxuXG5cdC8qIFByZWZpbHRlcnNcblx0ICogMSkgVGhleSBhcmUgdXNlZnVsIHRvIGludHJvZHVjZSBjdXN0b20gZGF0YVR5cGVzIChzZWUgYWpheC9qc29ucC5qcyBmb3IgYW4gZXhhbXBsZSlcblx0ICogMikgVGhlc2UgYXJlIGNhbGxlZDpcblx0ICogICAgLSBCRUZPUkUgYXNraW5nIGZvciBhIHRyYW5zcG9ydFxuXHQgKiAgICAtIEFGVEVSIHBhcmFtIHNlcmlhbGl6YXRpb24gKHMuZGF0YSBpcyBhIHN0cmluZyBpZiBzLnByb2Nlc3NEYXRhIGlzIHRydWUpXG5cdCAqIDMpIGtleSBpcyB0aGUgZGF0YVR5cGVcblx0ICogNCkgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuXHQgKiA1KSBleGVjdXRpb24gd2lsbCBzdGFydCB3aXRoIHRyYW5zcG9ydCBkYXRhVHlwZSBhbmQgVEhFTiBjb250aW51ZSBkb3duIHRvIFwiKlwiIGlmIG5lZWRlZFxuXHQgKi9cblx0cHJlZmlsdGVycyA9IHt9LFxuXG5cdC8qIFRyYW5zcG9ydHMgYmluZGluZ3Ncblx0ICogMSkga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiAyKSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDMpIHNlbGVjdGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGdvIHRvIFwiKlwiIGlmIG5lZWRlZFxuXHQgKi9cblx0dHJhbnNwb3J0cyA9IHt9LFxuXG5cdC8vIEF2b2lkIGNvbW1lbnQtcHJvbG9nIGNoYXIgc2VxdWVuY2UgKCMxMDA5OCk7IG11c3QgYXBwZWFzZSBsaW50IGFuZCBldmFkZSBjb21wcmVzc2lvblxuXHRhbGxUeXBlcyA9IFwiKi9cIi5jb25jYXQoIFwiKlwiICksXG5cblx0Ly8gQW5jaG9yIHRhZyBmb3IgcGFyc2luZyB0aGUgZG9jdW1lbnQgb3JpZ2luXG5cdG9yaWdpbkFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiYVwiICk7XG5cdG9yaWdpbkFuY2hvci5ocmVmID0gbG9jYXRpb24uaHJlZjtcblxuLy8gQmFzZSBcImNvbnN0cnVjdG9yXCIgZm9yIGpRdWVyeS5hamF4UHJlZmlsdGVyIGFuZCBqUXVlcnkuYWpheFRyYW5zcG9ydFxuZnVuY3Rpb24gYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUgKSB7XG5cblx0Ly8gZGF0YVR5cGVFeHByZXNzaW9uIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBcIipcIlxuXHRyZXR1cm4gZnVuY3Rpb24oIGRhdGFUeXBlRXhwcmVzc2lvbiwgZnVuYyApIHtcblxuXHRcdGlmICggdHlwZW9mIGRhdGFUeXBlRXhwcmVzc2lvbiAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGZ1bmMgPSBkYXRhVHlwZUV4cHJlc3Npb247XG5cdFx0XHRkYXRhVHlwZUV4cHJlc3Npb24gPSBcIipcIjtcblx0XHR9XG5cblx0XHR2YXIgZGF0YVR5cGUsXG5cdFx0XHRpID0gMCxcblx0XHRcdGRhdGFUeXBlcyA9IGRhdGFUeXBlRXhwcmVzc2lvbi50b0xvd2VyQ2FzZSgpLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIGZ1bmMgKSApIHtcblxuXHRcdFx0Ly8gRm9yIGVhY2ggZGF0YVR5cGUgaW4gdGhlIGRhdGFUeXBlRXhwcmVzc2lvblxuXHRcdFx0d2hpbGUgKCAoIGRhdGFUeXBlID0gZGF0YVR5cGVzWyBpKysgXSApICkge1xuXG5cdFx0XHRcdC8vIFByZXBlbmQgaWYgcmVxdWVzdGVkXG5cdFx0XHRcdGlmICggZGF0YVR5cGVbIDAgXSA9PT0gXCIrXCIgKSB7XG5cdFx0XHRcdFx0ZGF0YVR5cGUgPSBkYXRhVHlwZS5zbGljZSggMSApIHx8IFwiKlwiO1xuXHRcdFx0XHRcdCggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkudW5zaGlmdCggZnVuYyApO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBhcHBlbmRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQoIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSA9IHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSApLnB1c2goIGZ1bmMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuLy8gQmFzZSBpbnNwZWN0aW9uIGZ1bmN0aW9uIGZvciBwcmVmaWx0ZXJzIGFuZCB0cmFuc3BvcnRzXG5mdW5jdGlvbiBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlLCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSICkge1xuXG5cdHZhciBpbnNwZWN0ZWQgPSB7fSxcblx0XHRzZWVraW5nVHJhbnNwb3J0ID0gKCBzdHJ1Y3R1cmUgPT09IHRyYW5zcG9ydHMgKTtcblxuXHRmdW5jdGlvbiBpbnNwZWN0KCBkYXRhVHlwZSApIHtcblx0XHR2YXIgc2VsZWN0ZWQ7XG5cdFx0aW5zcGVjdGVkWyBkYXRhVHlwZSBdID0gdHJ1ZTtcblx0XHRqUXVlcnkuZWFjaCggc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdLCBmdW5jdGlvbiggXywgcHJlZmlsdGVyT3JGYWN0b3J5ICkge1xuXHRcdFx0dmFyIGRhdGFUeXBlT3JUcmFuc3BvcnQgPSBwcmVmaWx0ZXJPckZhY3RvcnkoIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKTtcblx0XHRcdGlmICggdHlwZW9mIGRhdGFUeXBlT3JUcmFuc3BvcnQgPT09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0IXNlZWtpbmdUcmFuc3BvcnQgJiYgIWluc3BlY3RlZFsgZGF0YVR5cGVPclRyYW5zcG9ydCBdICkge1xuXG5cdFx0XHRcdG9wdGlvbnMuZGF0YVR5cGVzLnVuc2hpZnQoIGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdFx0aW5zcGVjdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKCBzZWVraW5nVHJhbnNwb3J0ICkge1xuXHRcdFx0XHRyZXR1cm4gISggc2VsZWN0ZWQgPSBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHRcdHJldHVybiBzZWxlY3RlZDtcblx0fVxuXG5cdHJldHVybiBpbnNwZWN0KCBvcHRpb25zLmRhdGFUeXBlc1sgMCBdICkgfHwgIWluc3BlY3RlZFsgXCIqXCIgXSAmJiBpbnNwZWN0KCBcIipcIiApO1xufVxuXG4vLyBBIHNwZWNpYWwgZXh0ZW5kIGZvciBhamF4IG9wdGlvbnNcbi8vIHRoYXQgdGFrZXMgXCJmbGF0XCIgb3B0aW9ucyAobm90IHRvIGJlIGRlZXAgZXh0ZW5kZWQpXG4vLyBGaXhlcyAjOTg4N1xuZnVuY3Rpb24gYWpheEV4dGVuZCggdGFyZ2V0LCBzcmMgKSB7XG5cdHZhciBrZXksIGRlZXAsXG5cdFx0ZmxhdE9wdGlvbnMgPSBqUXVlcnkuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zIHx8IHt9O1xuXG5cdGZvciAoIGtleSBpbiBzcmMgKSB7XG5cdFx0aWYgKCBzcmNbIGtleSBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHQoIGZsYXRPcHRpb25zWyBrZXkgXSA/IHRhcmdldCA6ICggZGVlcCB8fCAoIGRlZXAgPSB7fSApICkgKVsga2V5IF0gPSBzcmNbIGtleSBdO1xuXHRcdH1cblx0fVxuXHRpZiAoIGRlZXAgKSB7XG5cdFx0alF1ZXJ5LmV4dGVuZCggdHJ1ZSwgdGFyZ2V0LCBkZWVwICk7XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG4vKiBIYW5kbGVzIHJlc3BvbnNlcyB0byBhbiBhamF4IHJlcXVlc3Q6XG4gKiAtIGZpbmRzIHRoZSByaWdodCBkYXRhVHlwZSAobWVkaWF0ZXMgYmV0d2VlbiBjb250ZW50LXR5cGUgYW5kIGV4cGVjdGVkIGRhdGFUeXBlKVxuICogLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIGFqYXhIYW5kbGVSZXNwb25zZXMoIHMsIGpxWEhSLCByZXNwb25zZXMgKSB7XG5cblx0dmFyIGN0LCB0eXBlLCBmaW5hbERhdGFUeXBlLCBmaXJzdERhdGFUeXBlLFxuXHRcdGNvbnRlbnRzID0gcy5jb250ZW50cyxcblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcztcblxuXHQvLyBSZW1vdmUgYXV0byBkYXRhVHlwZSBhbmQgZ2V0IGNvbnRlbnQtdHlwZSBpbiB0aGUgcHJvY2Vzc1xuXHR3aGlsZSAoIGRhdGFUeXBlc1sgMCBdID09PSBcIipcIiApIHtcblx0XHRkYXRhVHlwZXMuc2hpZnQoKTtcblx0XHRpZiAoIGN0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRjdCA9IHMubWltZVR5cGUgfHwganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggYSBrbm93biBjb250ZW50LXR5cGVcblx0aWYgKCBjdCApIHtcblx0XHRmb3IgKCB0eXBlIGluIGNvbnRlbnRzICkge1xuXHRcdFx0aWYgKCBjb250ZW50c1sgdHlwZSBdICYmIGNvbnRlbnRzWyB0eXBlIF0udGVzdCggY3QgKSApIHtcblx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHR5cGUgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSByZXNwb25zZSBmb3IgdGhlIGV4cGVjdGVkIGRhdGFUeXBlXG5cdGlmICggZGF0YVR5cGVzWyAwIF0gaW4gcmVzcG9uc2VzICkge1xuXHRcdGZpbmFsRGF0YVR5cGUgPSBkYXRhVHlwZXNbIDAgXTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIFRyeSBjb252ZXJ0aWJsZSBkYXRhVHlwZXNcblx0XHRmb3IgKCB0eXBlIGluIHJlc3BvbnNlcyApIHtcblx0XHRcdGlmICggIWRhdGFUeXBlc1sgMCBdIHx8IHMuY29udmVydGVyc1sgdHlwZSArIFwiIFwiICsgZGF0YVR5cGVzWyAwIF0gXSApIHtcblx0XHRcdFx0ZmluYWxEYXRhVHlwZSA9IHR5cGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhZmlyc3REYXRhVHlwZSApIHtcblx0XHRcdFx0Zmlyc3REYXRhVHlwZSA9IHR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gT3IganVzdCB1c2UgZmlyc3Qgb25lXG5cdFx0ZmluYWxEYXRhVHlwZSA9IGZpbmFsRGF0YVR5cGUgfHwgZmlyc3REYXRhVHlwZTtcblx0fVxuXG5cdC8vIElmIHdlIGZvdW5kIGEgZGF0YVR5cGVcblx0Ly8gV2UgYWRkIHRoZSBkYXRhVHlwZSB0byB0aGUgbGlzdCBpZiBuZWVkZWRcblx0Ly8gYW5kIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuXHRpZiAoIGZpbmFsRGF0YVR5cGUgKSB7XG5cdFx0aWYgKCBmaW5hbERhdGFUeXBlICE9PSBkYXRhVHlwZXNbIDAgXSApIHtcblx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCBmaW5hbERhdGFUeXBlICk7XG5cdFx0fVxuXHRcdHJldHVybiByZXNwb25zZXNbIGZpbmFsRGF0YVR5cGUgXTtcblx0fVxufVxuXG4vKiBDaGFpbiBjb252ZXJzaW9ucyBnaXZlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIG9yaWdpbmFsIHJlc3BvbnNlXG4gKiBBbHNvIHNldHMgdGhlIHJlc3BvbnNlWFhYIGZpZWxkcyBvbiB0aGUganFYSFIgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICkge1xuXHR2YXIgY29udjIsIGN1cnJlbnQsIGNvbnYsIHRtcCwgcHJldixcblx0XHRjb252ZXJ0ZXJzID0ge30sXG5cblx0XHQvLyBXb3JrIHdpdGggYSBjb3B5IG9mIGRhdGFUeXBlcyBpbiBjYXNlIHdlIG5lZWQgdG8gbW9kaWZ5IGl0IGZvciBjb252ZXJzaW9uXG5cdFx0ZGF0YVR5cGVzID0gcy5kYXRhVHlwZXMuc2xpY2UoKTtcblxuXHQvLyBDcmVhdGUgY29udmVydGVycyBtYXAgd2l0aCBsb3dlcmNhc2VkIGtleXNcblx0aWYgKCBkYXRhVHlwZXNbIDEgXSApIHtcblx0XHRmb3IgKCBjb252IGluIHMuY29udmVydGVycyApIHtcblx0XHRcdGNvbnZlcnRlcnNbIGNvbnYudG9Mb3dlckNhc2UoKSBdID0gcy5jb252ZXJ0ZXJzWyBjb252IF07XG5cdFx0fVxuXHR9XG5cblx0Y3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG5cdC8vIENvbnZlcnQgdG8gZWFjaCBzZXF1ZW50aWFsIGRhdGFUeXBlXG5cdHdoaWxlICggY3VycmVudCApIHtcblxuXHRcdGlmICggcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdICkge1xuXHRcdFx0anFYSFJbIHMucmVzcG9uc2VGaWVsZHNbIGN1cnJlbnQgXSBdID0gcmVzcG9uc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgdGhlIGRhdGFGaWx0ZXIgaWYgcHJvdmlkZWRcblx0XHRpZiAoICFwcmV2ICYmIGlzU3VjY2VzcyAmJiBzLmRhdGFGaWx0ZXIgKSB7XG5cdFx0XHRyZXNwb25zZSA9IHMuZGF0YUZpbHRlciggcmVzcG9uc2UsIHMuZGF0YVR5cGUgKTtcblx0XHR9XG5cblx0XHRwcmV2ID0gY3VycmVudDtcblx0XHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0XHRpZiAoIGN1cnJlbnQgKSB7XG5cblx0XHRcdC8vIFRoZXJlJ3Mgb25seSB3b3JrIHRvIGRvIGlmIGN1cnJlbnQgZGF0YVR5cGUgaXMgbm9uLWF1dG9cblx0XHRcdGlmICggY3VycmVudCA9PT0gXCIqXCIgKSB7XG5cblx0XHRcdFx0Y3VycmVudCA9IHByZXY7XG5cblx0XHRcdC8vIENvbnZlcnQgcmVzcG9uc2UgaWYgcHJldiBkYXRhVHlwZSBpcyBub24tYXV0byBhbmQgZGlmZmVycyBmcm9tIGN1cnJlbnRcblx0XHRcdH0gZWxzZSBpZiAoIHByZXYgIT09IFwiKlwiICYmIHByZXYgIT09IGN1cnJlbnQgKSB7XG5cblx0XHRcdFx0Ly8gU2VlayBhIGRpcmVjdCBjb252ZXJ0ZXJcblx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIHByZXYgKyBcIiBcIiArIGN1cnJlbnQgXSB8fCBjb252ZXJ0ZXJzWyBcIiogXCIgKyBjdXJyZW50IF07XG5cblx0XHRcdFx0Ly8gSWYgbm9uZSBmb3VuZCwgc2VlayBhIHBhaXJcblx0XHRcdFx0aWYgKCAhY29udiApIHtcblx0XHRcdFx0XHRmb3IgKCBjb252MiBpbiBjb252ZXJ0ZXJzICkge1xuXG5cdFx0XHRcdFx0XHQvLyBJZiBjb252MiBvdXRwdXRzIGN1cnJlbnRcblx0XHRcdFx0XHRcdHRtcCA9IGNvbnYyLnNwbGl0KCBcIiBcIiApO1xuXHRcdFx0XHRcdFx0aWYgKCB0bXBbIDEgXSA9PT0gY3VycmVudCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcblx0XHRcdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIHByZXYgKyBcIiBcIiArIHRtcFsgMCBdIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZXJzWyBcIiogXCIgKyB0bXBbIDAgXSBdO1xuXHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBDb25kZW5zZSBlcXVpdmFsZW5jZSBjb252ZXJ0ZXJzXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBjb252ID09PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIGNvbnYyIF07XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIGluc2VydCB0aGUgaW50ZXJtZWRpYXRlIGRhdGFUeXBlXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggY29udmVydGVyc1sgY29udjIgXSAhPT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnQgPSB0bXBbIDAgXTtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCB0bXBbIDEgXSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFwcGx5IGNvbnZlcnRlciAoaWYgbm90IGFuIGVxdWl2YWxlbmNlKVxuXHRcdFx0XHRpZiAoIGNvbnYgIT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHQvLyBVbmxlc3MgZXJyb3JzIGFyZSBhbGxvd2VkIHRvIGJ1YmJsZSwgY2F0Y2ggYW5kIHJldHVybiB0aGVtXG5cdFx0XHRcdFx0aWYgKCBjb252ICYmIHMudGhyb3dzICkge1xuXHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBjb252KCByZXNwb25zZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZTogXCJwYXJzZXJlcnJvclwiLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBjb252ID8gZSA6IFwiTm8gY29udmVyc2lvbiBmcm9tIFwiICsgcHJldiArIFwiIHRvIFwiICsgY3VycmVudFxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7IHN0YXRlOiBcInN1Y2Nlc3NcIiwgZGF0YTogcmVzcG9uc2UgfTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIENvdW50ZXIgZm9yIGhvbGRpbmcgdGhlIG51bWJlciBvZiBhY3RpdmUgcXVlcmllc1xuXHRhY3RpdmU6IDAsXG5cblx0Ly8gTGFzdC1Nb2RpZmllZCBoZWFkZXIgY2FjaGUgZm9yIG5leHQgcmVxdWVzdFxuXHRsYXN0TW9kaWZpZWQ6IHt9LFxuXHRldGFnOiB7fSxcblxuXHRhamF4U2V0dGluZ3M6IHtcblx0XHR1cmw6IGxvY2F0aW9uLmhyZWYsXG5cdFx0dHlwZTogXCJHRVRcIixcblx0XHRpc0xvY2FsOiBybG9jYWxQcm90b2NvbC50ZXN0KCBsb2NhdGlvbi5wcm90b2NvbCApLFxuXHRcdGdsb2JhbDogdHJ1ZSxcblx0XHRwcm9jZXNzRGF0YTogdHJ1ZSxcblx0XHRhc3luYzogdHJ1ZSxcblx0XHRjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcblxuXHRcdC8qXG5cdFx0dGltZW91dDogMCxcblx0XHRkYXRhOiBudWxsLFxuXHRcdGRhdGFUeXBlOiBudWxsLFxuXHRcdHVzZXJuYW1lOiBudWxsLFxuXHRcdHBhc3N3b3JkOiBudWxsLFxuXHRcdGNhY2hlOiBudWxsLFxuXHRcdHRocm93czogZmFsc2UsXG5cdFx0dHJhZGl0aW9uYWw6IGZhbHNlLFxuXHRcdGhlYWRlcnM6IHt9LFxuXHRcdCovXG5cblx0XHRhY2NlcHRzOiB7XG5cdFx0XHRcIipcIjogYWxsVHlwZXMsXG5cdFx0XHR0ZXh0OiBcInRleHQvcGxhaW5cIixcblx0XHRcdGh0bWw6IFwidGV4dC9odG1sXCIsXG5cdFx0XHR4bWw6IFwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLFxuXHRcdFx0anNvbjogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIlxuXHRcdH0sXG5cblx0XHRjb250ZW50czoge1xuXHRcdFx0eG1sOiAvXFxieG1sXFxiLyxcblx0XHRcdGh0bWw6IC9cXGJodG1sLyxcblx0XHRcdGpzb246IC9cXGJqc29uXFxiL1xuXHRcdH0sXG5cblx0XHRyZXNwb25zZUZpZWxkczoge1xuXHRcdFx0eG1sOiBcInJlc3BvbnNlWE1MXCIsXG5cdFx0XHR0ZXh0OiBcInJlc3BvbnNlVGV4dFwiLFxuXHRcdFx0anNvbjogXCJyZXNwb25zZUpTT05cIlxuXHRcdH0sXG5cblx0XHQvLyBEYXRhIGNvbnZlcnRlcnNcblx0XHQvLyBLZXlzIHNlcGFyYXRlIHNvdXJjZSAob3IgY2F0Y2hhbGwgXCIqXCIpIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG5cdFx0Y29udmVydGVyczoge1xuXG5cdFx0XHQvLyBDb252ZXJ0IGFueXRoaW5nIHRvIHRleHRcblx0XHRcdFwiKiB0ZXh0XCI6IFN0cmluZyxcblxuXHRcdFx0Ly8gVGV4dCB0byBodG1sICh0cnVlID0gbm8gdHJhbnNmb3JtYXRpb24pXG5cdFx0XHRcInRleHQgaHRtbFwiOiB0cnVlLFxuXG5cdFx0XHQvLyBFdmFsdWF0ZSB0ZXh0IGFzIGEganNvbiBleHByZXNzaW9uXG5cdFx0XHRcInRleHQganNvblwiOiBKU09OLnBhcnNlLFxuXG5cdFx0XHQvLyBQYXJzZSB0ZXh0IGFzIHhtbFxuXHRcdFx0XCJ0ZXh0IHhtbFwiOiBqUXVlcnkucGFyc2VYTUxcblx0XHR9LFxuXG5cdFx0Ly8gRm9yIG9wdGlvbnMgdGhhdCBzaG91bGRuJ3QgYmUgZGVlcCBleHRlbmRlZDpcblx0XHQvLyB5b3UgY2FuIGFkZCB5b3VyIG93biBjdXN0b20gb3B0aW9ucyBoZXJlIGlmXG5cdFx0Ly8gYW5kIHdoZW4geW91IGNyZWF0ZSBvbmUgdGhhdCBzaG91bGRuJ3QgYmVcblx0XHQvLyBkZWVwIGV4dGVuZGVkIChzZWUgYWpheEV4dGVuZClcblx0XHRmbGF0T3B0aW9uczoge1xuXHRcdFx0dXJsOiB0cnVlLFxuXHRcdFx0Y29udGV4dDogdHJ1ZVxuXHRcdH1cblx0fSxcblxuXHQvLyBDcmVhdGVzIGEgZnVsbCBmbGVkZ2VkIHNldHRpbmdzIG9iamVjdCBpbnRvIHRhcmdldFxuXHQvLyB3aXRoIGJvdGggYWpheFNldHRpbmdzIGFuZCBzZXR0aW5ncyBmaWVsZHMuXG5cdC8vIElmIHRhcmdldCBpcyBvbWl0dGVkLCB3cml0ZXMgaW50byBhamF4U2V0dGluZ3MuXG5cdGFqYXhTZXR1cDogZnVuY3Rpb24oIHRhcmdldCwgc2V0dGluZ3MgKSB7XG5cdFx0cmV0dXJuIHNldHRpbmdzID9cblxuXHRcdFx0Ly8gQnVpbGRpbmcgYSBzZXR0aW5ncyBvYmplY3Rcblx0XHRcdGFqYXhFeHRlbmQoIGFqYXhFeHRlbmQoIHRhcmdldCwgalF1ZXJ5LmFqYXhTZXR0aW5ncyApLCBzZXR0aW5ncyApIDpcblxuXHRcdFx0Ly8gRXh0ZW5kaW5nIGFqYXhTZXR0aW5nc1xuXHRcdFx0YWpheEV4dGVuZCggalF1ZXJ5LmFqYXhTZXR0aW5ncywgdGFyZ2V0ICk7XG5cdH0sXG5cblx0YWpheFByZWZpbHRlcjogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzICksXG5cdGFqYXhUcmFuc3BvcnQ6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggdHJhbnNwb3J0cyApLFxuXG5cdC8vIE1haW4gbWV0aG9kXG5cdGFqYXg6IGZ1bmN0aW9uKCB1cmwsIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBJZiB1cmwgaXMgYW4gb2JqZWN0LCBzaW11bGF0ZSBwcmUtMS41IHNpZ25hdHVyZVxuXHRcdGlmICggdHlwZW9mIHVybCA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdG9wdGlvbnMgPSB1cmw7XG5cdFx0XHR1cmwgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gRm9yY2Ugb3B0aW9ucyB0byBiZSBhbiBvYmplY3Rcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdHZhciB0cmFuc3BvcnQsXG5cblx0XHRcdC8vIFVSTCB3aXRob3V0IGFudGktY2FjaGUgcGFyYW1cblx0XHRcdGNhY2hlVVJMLFxuXG5cdFx0XHQvLyBSZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNTdHJpbmcsXG5cdFx0XHRyZXNwb25zZUhlYWRlcnMsXG5cblx0XHRcdC8vIHRpbWVvdXQgaGFuZGxlXG5cdFx0XHR0aW1lb3V0VGltZXIsXG5cblx0XHRcdC8vIFVybCBjbGVhbnVwIHZhclxuXHRcdFx0dXJsQW5jaG9yLFxuXG5cdFx0XHQvLyBSZXF1ZXN0IHN0YXRlIChiZWNvbWVzIGZhbHNlIHVwb24gc2VuZCBhbmQgdHJ1ZSB1cG9uIGNvbXBsZXRpb24pXG5cdFx0XHRjb21wbGV0ZWQsXG5cblx0XHRcdC8vIFRvIGtub3cgaWYgZ2xvYmFsIGV2ZW50cyBhcmUgdG8gYmUgZGlzcGF0Y2hlZFxuXHRcdFx0ZmlyZUdsb2JhbHMsXG5cblx0XHRcdC8vIExvb3AgdmFyaWFibGVcblx0XHRcdGksXG5cblx0XHRcdC8vIHVuY2FjaGVkIHBhcnQgb2YgdGhlIHVybFxuXHRcdFx0dW5jYWNoZWQsXG5cblx0XHRcdC8vIENyZWF0ZSB0aGUgZmluYWwgb3B0aW9ucyBvYmplY3Rcblx0XHRcdHMgPSBqUXVlcnkuYWpheFNldHVwKCB7fSwgb3B0aW9ucyApLFxuXG5cdFx0XHQvLyBDYWxsYmFja3MgY29udGV4dFxuXHRcdFx0Y2FsbGJhY2tDb250ZXh0ID0gcy5jb250ZXh0IHx8IHMsXG5cblx0XHRcdC8vIENvbnRleHQgZm9yIGdsb2JhbCBldmVudHMgaXMgY2FsbGJhY2tDb250ZXh0IGlmIGl0IGlzIGEgRE9NIG5vZGUgb3IgalF1ZXJ5IGNvbGxlY3Rpb25cblx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dCA9IHMuY29udGV4dCAmJlxuXHRcdFx0XHQoIGNhbGxiYWNrQ29udGV4dC5ub2RlVHlwZSB8fCBjYWxsYmFja0NvbnRleHQuanF1ZXJ5ICkgP1xuXHRcdFx0XHRcdGpRdWVyeSggY2FsbGJhY2tDb250ZXh0ICkgOlxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudCxcblxuXHRcdFx0Ly8gRGVmZXJyZWRzXG5cdFx0XHRkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZCA9IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXG5cdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0c3RhdHVzQ29kZSA9IHMuc3RhdHVzQ29kZSB8fCB7fSxcblxuXHRcdFx0Ly8gSGVhZGVycyAodGhleSBhcmUgc2VudCBhbGwgYXQgb25jZSlcblx0XHRcdHJlcXVlc3RIZWFkZXJzID0ge30sXG5cdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXG5cblx0XHRcdC8vIERlZmF1bHQgYWJvcnQgbWVzc2FnZVxuXHRcdFx0c3RyQWJvcnQgPSBcImNhbmNlbGVkXCIsXG5cblx0XHRcdC8vIEZha2UgeGhyXG5cdFx0XHRqcVhIUiA9IHtcblx0XHRcdFx0cmVhZHlTdGF0ZTogMCxcblxuXHRcdFx0XHQvLyBCdWlsZHMgaGVhZGVycyBoYXNodGFibGUgaWYgbmVlZGVkXG5cdFx0XHRcdGdldFJlc3BvbnNlSGVhZGVyOiBmdW5jdGlvbigga2V5ICkge1xuXHRcdFx0XHRcdHZhciBtYXRjaDtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0XHRcdGlmICggIXJlc3BvbnNlSGVhZGVycyApIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzID0ge307XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKCBtYXRjaCA9IHJoZWFkZXJzLmV4ZWMoIHJlc3BvbnNlSGVhZGVyc1N0cmluZyApICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdID1cblx0XHRcdFx0XHRcdFx0XHRcdCggcmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdIHx8IFtdIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmNvbmNhdCggbWF0Y2hbIDIgXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtYXRjaCA9IHJlc3BvbnNlSGVhZGVyc1sga2V5LnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2ggPT0gbnVsbCA/IG51bGwgOiBtYXRjaC5qb2luKCBcIiwgXCIgKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBSYXcgc3RyaW5nXG5cdFx0XHRcdGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbXBsZXRlZCA/IHJlc3BvbnNlSGVhZGVyc1N0cmluZyA6IG51bGw7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FjaGVzIHRoZSBoZWFkZXJcblx0XHRcdFx0c2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRuYW1lID0gcmVxdWVzdEhlYWRlcnNOYW1lc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gPVxuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSB8fCBuYW1lO1xuXHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBPdmVycmlkZXMgcmVzcG9uc2UgY29udGVudC10eXBlIGhlYWRlclxuXHRcdFx0XHRvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0cy5taW1lVHlwZSA9IHR5cGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRcdHN0YXR1c0NvZGU6IGZ1bmN0aW9uKCBtYXAgKSB7XG5cdFx0XHRcdFx0dmFyIGNvZGU7XG5cdFx0XHRcdFx0aWYgKCBtYXAgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBFeGVjdXRlIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja3Ncblx0XHRcdFx0XHRcdFx0anFYSFIuYWx3YXlzKCBtYXBbIGpxWEhSLnN0YXR1cyBdICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIExhenktYWRkIHRoZSBuZXcgY2FsbGJhY2tzIGluIGEgd2F5IHRoYXQgcHJlc2VydmVzIG9sZCBvbmVzXG5cdFx0XHRcdFx0XHRcdGZvciAoIGNvZGUgaW4gbWFwICkge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXR1c0NvZGVbIGNvZGUgXSA9IFsgc3RhdHVzQ29kZVsgY29kZSBdLCBtYXBbIGNvZGUgXSBdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhbmNlbCB0aGUgcmVxdWVzdFxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24oIHN0YXR1c1RleHQgKSB7XG5cdFx0XHRcdFx0dmFyIGZpbmFsVGV4dCA9IHN0YXR1c1RleHQgfHwgc3RyQWJvcnQ7XG5cdFx0XHRcdFx0aWYgKCB0cmFuc3BvcnQgKSB7XG5cdFx0XHRcdFx0XHR0cmFuc3BvcnQuYWJvcnQoIGZpbmFsVGV4dCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb25lKCAwLCBmaW5hbFRleHQgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdC8vIEF0dGFjaCBkZWZlcnJlZHNcblx0XHRkZWZlcnJlZC5wcm9taXNlKCBqcVhIUiApO1xuXG5cdFx0Ly8gQWRkIHByb3RvY29sIGlmIG5vdCBwcm92aWRlZCAocHJlZmlsdGVycyBtaWdodCBleHBlY3QgaXQpXG5cdFx0Ly8gSGFuZGxlIGZhbHN5IHVybCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0ICgjMTAwOTM6IGNvbnNpc3RlbmN5IHdpdGggb2xkIHNpZ25hdHVyZSlcblx0XHQvLyBXZSBhbHNvIHVzZSB0aGUgdXJsIHBhcmFtZXRlciBpZiBhdmFpbGFibGVcblx0XHRzLnVybCA9ICggKCB1cmwgfHwgcy51cmwgfHwgbG9jYXRpb24uaHJlZiApICsgXCJcIiApXG5cdFx0XHQucmVwbGFjZSggcnByb3RvY29sLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiApO1xuXG5cdFx0Ly8gQWxpYXMgbWV0aG9kIG9wdGlvbiB0byB0eXBlIGFzIHBlciB0aWNrZXQgIzEyMDA0XG5cdFx0cy50eXBlID0gb3B0aW9ucy5tZXRob2QgfHwgb3B0aW9ucy50eXBlIHx8IHMubWV0aG9kIHx8IHMudHlwZTtcblxuXHRcdC8vIEV4dHJhY3QgZGF0YVR5cGVzIGxpc3Rcblx0XHRzLmRhdGFUeXBlcyA9ICggcy5kYXRhVHlwZSB8fCBcIipcIiApLnRvTG93ZXJDYXNlKCkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblxuXHRcdC8vIEEgY3Jvc3MtZG9tYWluIHJlcXVlc3QgaXMgaW4gb3JkZXIgd2hlbiB0aGUgb3JpZ2luIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgb3JpZ2luLlxuXHRcdGlmICggcy5jcm9zc0RvbWFpbiA9PSBudWxsICkge1xuXHRcdFx0dXJsQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEsIEVkZ2UgMTIgLSAxNVxuXHRcdFx0Ly8gSUUgdGhyb3dzIGV4Y2VwdGlvbiBvbiBhY2Nlc3NpbmcgdGhlIGhyZWYgcHJvcGVydHkgaWYgdXJsIGlzIG1hbGZvcm1lZCxcblx0XHRcdC8vIGUuZy4gaHR0cDovL2V4YW1wbGUuY29tOjgweC9cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gcy51cmw7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEgb25seVxuXHRcdFx0XHQvLyBBbmNob3IncyBob3N0IHByb3BlcnR5IGlzbid0IGNvcnJlY3RseSBzZXQgd2hlbiBzLnVybCBpcyByZWxhdGl2ZVxuXHRcdFx0XHR1cmxBbmNob3IuaHJlZiA9IHVybEFuY2hvci5ocmVmO1xuXHRcdFx0XHRzLmNyb3NzRG9tYWluID0gb3JpZ2luQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgb3JpZ2luQW5jaG9yLmhvc3QgIT09XG5cdFx0XHRcdFx0dXJsQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgdXJsQW5jaG9yLmhvc3Q7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciBwYXJzaW5nIHRoZSBVUkwsIGFzc3VtZSBpdCBpcyBjcm9zc0RvbWFpbixcblx0XHRcdFx0Ly8gaXQgY2FuIGJlIHJlamVjdGVkIGJ5IHRoZSB0cmFuc3BvcnQgaWYgaXQgaXMgaW52YWxpZFxuXHRcdFx0XHRzLmNyb3NzRG9tYWluID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IGRhdGEgaWYgbm90IGFscmVhZHkgYSBzdHJpbmdcblx0XHRpZiAoIHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmIHR5cGVvZiBzLmRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRzLmRhdGEgPSBqUXVlcnkucGFyYW0oIHMuZGF0YSwgcy50cmFkaXRpb25hbCApO1xuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHByZWZpbHRlcnNcblx0XHRpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggcHJlZmlsdGVycywgcywgb3B0aW9ucywganFYSFIgKTtcblxuXHRcdC8vIElmIHJlcXVlc3Qgd2FzIGFib3J0ZWQgaW5zaWRlIGEgcHJlZmlsdGVyLCBzdG9wIHRoZXJlXG5cdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0fVxuXG5cdFx0Ly8gV2UgY2FuIGZpcmUgZ2xvYmFsIGV2ZW50cyBhcyBvZiBub3cgaWYgYXNrZWQgdG9cblx0XHQvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAoIzE1MTE4KVxuXHRcdGZpcmVHbG9iYWxzID0galF1ZXJ5LmV2ZW50ICYmIHMuZ2xvYmFsO1xuXG5cdFx0Ly8gV2F0Y2ggZm9yIGEgbmV3IHNldCBvZiByZXF1ZXN0c1xuXHRcdGlmICggZmlyZUdsb2JhbHMgJiYgalF1ZXJ5LmFjdGl2ZSsrID09PSAwICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheFN0YXJ0XCIgKTtcblx0XHR9XG5cblx0XHQvLyBVcHBlcmNhc2UgdGhlIHR5cGVcblx0XHRzLnR5cGUgPSBzLnR5cGUudG9VcHBlckNhc2UoKTtcblxuXHRcdC8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG5cdFx0cy5oYXNDb250ZW50ID0gIXJub0NvbnRlbnQudGVzdCggcy50eXBlICk7XG5cblx0XHQvLyBTYXZlIHRoZSBVUkwgaW4gY2FzZSB3ZSdyZSB0b3lpbmcgd2l0aCB0aGUgSWYtTW9kaWZpZWQtU2luY2Vcblx0XHQvLyBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIgbGF0ZXIgb25cblx0XHQvLyBSZW1vdmUgaGFzaCB0byBzaW1wbGlmeSB1cmwgbWFuaXB1bGF0aW9uXG5cdFx0Y2FjaGVVUkwgPSBzLnVybC5yZXBsYWNlKCByaGFzaCwgXCJcIiApO1xuXG5cdFx0Ly8gTW9yZSBvcHRpb25zIGhhbmRsaW5nIGZvciByZXF1ZXN0cyB3aXRoIG5vIGNvbnRlbnRcblx0XHRpZiAoICFzLmhhc0NvbnRlbnQgKSB7XG5cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBoYXNoIHNvIHdlIGNhbiBwdXQgaXQgYmFja1xuXHRcdFx0dW5jYWNoZWQgPSBzLnVybC5zbGljZSggY2FjaGVVUkwubGVuZ3RoICk7XG5cblx0XHRcdC8vIElmIGRhdGEgaXMgYXZhaWxhYmxlIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkLCBhcHBlbmQgZGF0YSB0byB1cmxcblx0XHRcdGlmICggcy5kYXRhICYmICggcy5wcm9jZXNzRGF0YSB8fCB0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICkgKSB7XG5cdFx0XHRcdGNhY2hlVVJMICs9ICggcnF1ZXJ5LnRlc3QoIGNhY2hlVVJMICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmRhdGE7XG5cblx0XHRcdFx0Ly8gIzk2ODI6IHJlbW92ZSBkYXRhIHNvIHRoYXQgaXQncyBub3QgdXNlZCBpbiBhbiBldmVudHVhbCByZXRyeVxuXHRcdFx0XHRkZWxldGUgcy5kYXRhO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgb3IgdXBkYXRlIGFudGktY2FjaGUgcGFyYW0gaWYgbmVlZGVkXG5cdFx0XHRpZiAoIHMuY2FjaGUgPT09IGZhbHNlICkge1xuXHRcdFx0XHRjYWNoZVVSTCA9IGNhY2hlVVJMLnJlcGxhY2UoIHJhbnRpQ2FjaGUsIFwiJDFcIiApO1xuXHRcdFx0XHR1bmNhY2hlZCA9ICggcnF1ZXJ5LnRlc3QoIGNhY2hlVVJMICkgPyBcIiZcIiA6IFwiP1wiICkgKyBcIl89XCIgKyAoIG5vbmNlKysgKSArIHVuY2FjaGVkO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQdXQgaGFzaCBhbmQgYW50aS1jYWNoZSBvbiB0aGUgVVJMIHRoYXQgd2lsbCBiZSByZXF1ZXN0ZWQgKGdoLTE3MzIpXG5cdFx0XHRzLnVybCA9IGNhY2hlVVJMICsgdW5jYWNoZWQ7XG5cblx0XHQvLyBDaGFuZ2UgJyUyMCcgdG8gJysnIGlmIHRoaXMgaXMgZW5jb2RlZCBmb3JtIGJvZHkgY29udGVudCAoZ2gtMjY1OClcblx0XHR9IGVsc2UgaWYgKCBzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJlxuXHRcdFx0KCBzLmNvbnRlbnRUeXBlIHx8IFwiXCIgKS5pbmRleE9mKCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiICkgPT09IDAgKSB7XG5cdFx0XHRzLmRhdGEgPSBzLmRhdGEucmVwbGFjZSggcjIwLCBcIitcIiApO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0aWYgKCBzLmlmTW9kaWZpZWQgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gKSB7XG5cdFx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Ob25lLU1hdGNoXCIsIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBjb3JyZWN0IGhlYWRlciwgaWYgZGF0YSBpcyBiZWluZyBzZW50XG5cdFx0aWYgKCBzLmRhdGEgJiYgcy5oYXNDb250ZW50ICYmIHMuY29udGVudFR5cGUgIT09IGZhbHNlIHx8IG9wdGlvbnMuY29udGVudFR5cGUgKSB7XG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIkNvbnRlbnQtVHlwZVwiLCBzLmNvbnRlbnRUeXBlICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBBY2NlcHRzIGhlYWRlciBmb3IgdGhlIHNlcnZlciwgZGVwZW5kaW5nIG9uIHRoZSBkYXRhVHlwZVxuXHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXG5cdFx0XHRcIkFjY2VwdFwiLFxuXHRcdFx0cy5kYXRhVHlwZXNbIDAgXSAmJiBzLmFjY2VwdHNbIHMuZGF0YVR5cGVzWyAwIF0gXSA/XG5cdFx0XHRcdHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdICtcblx0XHRcdFx0XHQoIHMuZGF0YVR5cGVzWyAwIF0gIT09IFwiKlwiID8gXCIsIFwiICsgYWxsVHlwZXMgKyBcIjsgcT0wLjAxXCIgOiBcIlwiICkgOlxuXHRcdFx0XHRzLmFjY2VwdHNbIFwiKlwiIF1cblx0XHQpO1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIGhlYWRlcnMgb3B0aW9uXG5cdFx0Zm9yICggaSBpbiBzLmhlYWRlcnMgKSB7XG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBpLCBzLmhlYWRlcnNbIGkgXSApO1xuXHRcdH1cblxuXHRcdC8vIEFsbG93IGN1c3RvbSBoZWFkZXJzL21pbWV0eXBlcyBhbmQgZWFybHkgYWJvcnRcblx0XHRpZiAoIHMuYmVmb3JlU2VuZCAmJlxuXHRcdFx0KCBzLmJlZm9yZVNlbmQuY2FsbCggY2FsbGJhY2tDb250ZXh0LCBqcVhIUiwgcyApID09PSBmYWxzZSB8fCBjb21wbGV0ZWQgKSApIHtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgbm90IGRvbmUgYWxyZWFkeSBhbmQgcmV0dXJuXG5cdFx0XHRyZXR1cm4ganFYSFIuYWJvcnQoKTtcblx0XHR9XG5cblx0XHQvLyBBYm9ydGluZyBpcyBubyBsb25nZXIgYSBjYW5jZWxsYXRpb25cblx0XHRzdHJBYm9ydCA9IFwiYWJvcnRcIjtcblxuXHRcdC8vIEluc3RhbGwgY2FsbGJhY2tzIG9uIGRlZmVycmVkc1xuXHRcdGNvbXBsZXRlRGVmZXJyZWQuYWRkKCBzLmNvbXBsZXRlICk7XG5cdFx0anFYSFIuZG9uZSggcy5zdWNjZXNzICk7XG5cdFx0anFYSFIuZmFpbCggcy5lcnJvciApO1xuXG5cdFx0Ly8gR2V0IHRyYW5zcG9ydFxuXHRcdHRyYW5zcG9ydCA9IGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgbm8gdHJhbnNwb3J0LCB3ZSBhdXRvLWFib3J0XG5cdFx0aWYgKCAhdHJhbnNwb3J0ICkge1xuXHRcdFx0ZG9uZSggLTEsIFwiTm8gVHJhbnNwb3J0XCIgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IDE7XG5cblx0XHRcdC8vIFNlbmQgZ2xvYmFsIGV2ZW50XG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggXCJhamF4U2VuZFwiLCBbIGpxWEhSLCBzIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYWpheFNlbmQsIHN0b3AgdGhlcmVcblx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRpbWVvdXRcblx0XHRcdGlmICggcy5hc3luYyAmJiBzLnRpbWVvdXQgPiAwICkge1xuXHRcdFx0XHR0aW1lb3V0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0anFYSFIuYWJvcnQoIFwidGltZW91dFwiICk7XG5cdFx0XHRcdH0sIHMudGltZW91dCApO1xuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0dHJhbnNwb3J0LnNlbmQoIHJlcXVlc3RIZWFkZXJzLCBkb25lICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyBSZXRocm93IHBvc3QtY29tcGxldGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9wYWdhdGUgb3RoZXJzIGFzIHJlc3VsdHNcblx0XHRcdFx0ZG9uZSggLTEsIGUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsYmFjayBmb3Igd2hlbiBldmVyeXRoaW5nIGlzIGRvbmVcblx0XHRmdW5jdGlvbiBkb25lKCBzdGF0dXMsIG5hdGl2ZVN0YXR1c1RleHQsIHJlc3BvbnNlcywgaGVhZGVycyApIHtcblx0XHRcdHZhciBpc1N1Y2Nlc3MsIHN1Y2Nlc3MsIGVycm9yLCByZXNwb25zZSwgbW9kaWZpZWQsXG5cdFx0XHRcdHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0O1xuXG5cdFx0XHQvLyBJZ25vcmUgcmVwZWF0IGludm9jYXRpb25zXG5cdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0XHQvLyBDbGVhciB0aW1lb3V0IGlmIGl0IGV4aXN0c1xuXHRcdFx0aWYgKCB0aW1lb3V0VGltZXIgKSB7XG5cdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoIHRpbWVvdXRUaW1lciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEZXJlZmVyZW5jZSB0cmFuc3BvcnQgZm9yIGVhcmx5IGdhcmJhZ2UgY29sbGVjdGlvblxuXHRcdFx0Ly8gKG5vIG1hdHRlciBob3cgbG9uZyB0aGUganFYSFIgb2JqZWN0IHdpbGwgYmUgdXNlZClcblx0XHRcdHRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0Ly8gQ2FjaGUgcmVzcG9uc2UgaGVhZGVyc1xuXHRcdFx0cmVzcG9uc2VIZWFkZXJzU3RyaW5nID0gaGVhZGVycyB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTZXQgcmVhZHlTdGF0ZVxuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IHN0YXR1cyA+IDAgPyA0IDogMDtcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHN1Y2Nlc3NmdWxcblx0XHRcdGlzU3VjY2VzcyA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG5cdFx0XHQvLyBHZXQgcmVzcG9uc2UgZGF0YVxuXHRcdFx0aWYgKCByZXNwb25zZXMgKSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb252ZXJ0IG5vIG1hdHRlciB3aGF0ICh0aGF0IHdheSByZXNwb25zZVhYWCBmaWVsZHMgYXJlIGFsd2F5cyBzZXQpXG5cdFx0XHRyZXNwb25zZSA9IGFqYXhDb252ZXJ0KCBzLCByZXNwb25zZSwganFYSFIsIGlzU3VjY2VzcyApO1xuXG5cdFx0XHQvLyBJZiBzdWNjZXNzZnVsLCBoYW5kbGUgdHlwZSBjaGFpbmluZ1xuXHRcdFx0aWYgKCBpc1N1Y2Nlc3MgKSB7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblx0XHRcdFx0aWYgKCBzLmlmTW9kaWZpZWQgKSB7XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJMYXN0LU1vZGlmaWVkXCIgKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSA9IG1vZGlmaWVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKCBcImV0YWdcIiApO1xuXHRcdFx0XHRcdGlmICggbW9kaWZpZWQgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSA9IG1vZGlmaWVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGlmIG5vIGNvbnRlbnRcblx0XHRcdFx0aWYgKCBzdGF0dXMgPT09IDIwNCB8fCBzLnR5cGUgPT09IFwiSEVBRFwiICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcIm5vY29udGVudFwiO1xuXG5cdFx0XHRcdC8vIGlmIG5vdCBtb2RpZmllZFxuXHRcdFx0XHR9IGVsc2UgaWYgKCBzdGF0dXMgPT09IDMwNCApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJub3Rtb2RpZmllZFwiO1xuXG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgZGF0YSwgbGV0J3MgY29udmVydCBpdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0ZTtcblx0XHRcdFx0XHRzdWNjZXNzID0gcmVzcG9uc2UuZGF0YTtcblx0XHRcdFx0XHRlcnJvciA9IHJlc3BvbnNlLmVycm9yO1xuXHRcdFx0XHRcdGlzU3VjY2VzcyA9ICFlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBFeHRyYWN0IGVycm9yIGZyb20gc3RhdHVzVGV4dCBhbmQgbm9ybWFsaXplIGZvciBub24tYWJvcnRzXG5cdFx0XHRcdGVycm9yID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0aWYgKCBzdGF0dXMgfHwgIXN0YXR1c1RleHQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwiZXJyb3JcIjtcblx0XHRcdFx0XHRpZiAoIHN0YXR1cyA8IDAgKSB7XG5cdFx0XHRcdFx0XHRzdGF0dXMgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgZGF0YSBmb3IgdGhlIGZha2UgeGhyIG9iamVjdFxuXHRcdFx0anFYSFIuc3RhdHVzID0gc3RhdHVzO1xuXHRcdFx0anFYSFIuc3RhdHVzVGV4dCA9ICggbmF0aXZlU3RhdHVzVGV4dCB8fCBzdGF0dXNUZXh0ICkgKyBcIlwiO1xuXG5cdFx0XHQvLyBTdWNjZXNzL0Vycm9yXG5cdFx0XHRpZiAoIGlzU3VjY2VzcyApIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBzdWNjZXNzLCBzdGF0dXNUZXh0LCBqcVhIUiBdICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsganFYSFIsIHN0YXR1c1RleHQsIGVycm9yIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdGpxWEhSLnN0YXR1c0NvZGUoIHN0YXR1c0NvZGUgKTtcblx0XHRcdHN0YXR1c0NvZGUgPSB1bmRlZmluZWQ7XG5cblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBpc1N1Y2Nlc3MgPyBcImFqYXhTdWNjZXNzXCIgOiBcImFqYXhFcnJvclwiLFxuXHRcdFx0XHRcdFsganFYSFIsIHMsIGlzU3VjY2VzcyA/IHN1Y2Nlc3MgOiBlcnJvciBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXBsZXRlXG5cdFx0XHRjb21wbGV0ZURlZmVycmVkLmZpcmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsganFYSFIsIHN0YXR1c1RleHQgXSApO1xuXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggXCJhamF4Q29tcGxldGVcIiwgWyBqcVhIUiwgcyBdICk7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIHRoZSBnbG9iYWwgQUpBWCBjb3VudGVyXG5cdFx0XHRcdGlmICggISggLS1qUXVlcnkuYWN0aXZlICkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheFN0b3BcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpxWEhSO1xuXHR9LFxuXG5cdGdldEpTT046IGZ1bmN0aW9uKCB1cmwsIGRhdGEsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ2V0KCB1cmwsIGRhdGEsIGNhbGxiYWNrLCBcImpzb25cIiApO1xuXHR9LFxuXG5cdGdldFNjcmlwdDogZnVuY3Rpb24oIHVybCwgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5nZXQoIHVybCwgdW5kZWZpbmVkLCBjYWxsYmFjaywgXCJzY3JpcHRcIiApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwiZ2V0XCIsIFwicG9zdFwiIF0sIGZ1bmN0aW9uKCBpLCBtZXRob2QgKSB7XG5cdGpRdWVyeVsgbWV0aG9kIF0gPSBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjaywgdHlwZSApIHtcblxuXHRcdC8vIFNoaWZ0IGFyZ3VtZW50cyBpZiBkYXRhIGFyZ3VtZW50IHdhcyBvbWl0dGVkXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBkYXRhICkgKSB7XG5cdFx0XHR0eXBlID0gdHlwZSB8fCBjYWxsYmFjaztcblx0XHRcdGNhbGxiYWNrID0gZGF0YTtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIHVybCBjYW4gYmUgYW4gb3B0aW9ucyBvYmplY3QgKHdoaWNoIHRoZW4gbXVzdCBoYXZlIC51cmwpXG5cdFx0cmV0dXJuIGpRdWVyeS5hamF4KCBqUXVlcnkuZXh0ZW5kKCB7XG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdHR5cGU6IG1ldGhvZCxcblx0XHRcdGRhdGFUeXBlOiB0eXBlLFxuXHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdHN1Y2Nlc3M6IGNhbGxiYWNrXG5cdFx0fSwgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIHVybCApICYmIHVybCApICk7XG5cdH07XG59ICk7XG5cblxualF1ZXJ5Ll9ldmFsVXJsID0gZnVuY3Rpb24oIHVybCwgb3B0aW9ucyApIHtcblx0cmV0dXJuIGpRdWVyeS5hamF4KCB7XG5cdFx0dXJsOiB1cmwsXG5cblx0XHQvLyBNYWtlIHRoaXMgZXhwbGljaXQsIHNpbmNlIHVzZXIgY2FuIG92ZXJyaWRlIHRoaXMgdGhyb3VnaCBhamF4U2V0dXAgKCMxMTI2NClcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGRhdGFUeXBlOiBcInNjcmlwdFwiLFxuXHRcdGNhY2hlOiB0cnVlLFxuXHRcdGFzeW5jOiBmYWxzZSxcblx0XHRnbG9iYWw6IGZhbHNlLFxuXG5cdFx0Ly8gT25seSBldmFsdWF0ZSB0aGUgcmVzcG9uc2UgaWYgaXQgaXMgc3VjY2Vzc2Z1bCAoZ2gtNDEyNilcblx0XHQvLyBkYXRhRmlsdGVyIGlzIG5vdCBpbnZva2VkIGZvciBmYWlsdXJlIHJlc3BvbnNlcywgc28gdXNpbmcgaXQgaW5zdGVhZFxuXHRcdC8vIG9mIHRoZSBkZWZhdWx0IGNvbnZlcnRlciBpcyBrbHVkZ3kgYnV0IGl0IHdvcmtzLlxuXHRcdGNvbnZlcnRlcnM6IHtcblx0XHRcdFwidGV4dCBzY3JpcHRcIjogZnVuY3Rpb24oKSB7fVxuXHRcdH0sXG5cdFx0ZGF0YUZpbHRlcjogZnVuY3Rpb24oIHJlc3BvbnNlICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHJlc3BvbnNlLCBvcHRpb25zICk7XG5cdFx0fVxuXHR9ICk7XG59O1xuXG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0d3JhcEFsbDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIHdyYXA7XG5cblx0XHRpZiAoIHRoaXNbIDAgXSApIHtcblx0XHRcdGlmICggaXNGdW5jdGlvbiggaHRtbCApICkge1xuXHRcdFx0XHRodG1sID0gaHRtbC5jYWxsKCB0aGlzWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGhlIGVsZW1lbnRzIHRvIHdyYXAgdGhlIHRhcmdldCBhcm91bmRcblx0XHRcdHdyYXAgPSBqUXVlcnkoIGh0bWwsIHRoaXNbIDAgXS5vd25lckRvY3VtZW50ICkuZXEoIDAgKS5jbG9uZSggdHJ1ZSApO1xuXG5cdFx0XHRpZiAoIHRoaXNbIDAgXS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR3cmFwLmluc2VydEJlZm9yZSggdGhpc1sgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHdyYXAubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGVsZW0gPSB0aGlzO1xuXG5cdFx0XHRcdHdoaWxlICggZWxlbS5maXJzdEVsZW1lbnRDaGlsZCApIHtcblx0XHRcdFx0XHRlbGVtID0gZWxlbS5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbGVtO1xuXHRcdFx0fSApLmFwcGVuZCggdGhpcyApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHdyYXBJbm5lcjogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBodG1sICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkud3JhcElubmVyKCBodG1sLmNhbGwoIHRoaXMsIGkgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSBqUXVlcnkoIHRoaXMgKSxcblx0XHRcdFx0Y29udGVudHMgPSBzZWxmLmNvbnRlbnRzKCk7XG5cblx0XHRcdGlmICggY29udGVudHMubGVuZ3RoICkge1xuXHRcdFx0XHRjb250ZW50cy53cmFwQWxsKCBodG1sICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuYXBwZW5kKCBodG1sICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdHdyYXA6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdHZhciBodG1sSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oIGh0bWwgKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkud3JhcEFsbCggaHRtbElzRnVuY3Rpb24gPyBodG1sLmNhbGwoIHRoaXMsIGkgKSA6IGh0bWwgKTtcblx0XHR9ICk7XG5cdH0sXG5cblx0dW53cmFwOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dGhpcy5wYXJlbnQoIHNlbGVjdG9yICkubm90KCBcImJvZHlcIiApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucmVwbGFjZVdpdGgoIHRoaXMuY2hpbGROb2RlcyApO1xuXHRcdH0gKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSApO1xuXG5cbmpRdWVyeS5leHByLnBzZXVkb3MuaGlkZGVuID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiAhalF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlKCBlbGVtICk7XG59O1xualF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiAhISggZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICk7XG59O1xuXG5cblxuXG5qUXVlcnkuYWpheFNldHRpbmdzLnhociA9IGZ1bmN0aW9uKCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG5cdH0gY2F0Y2ggKCBlICkge31cbn07XG5cbnZhciB4aHJTdWNjZXNzU3RhdHVzID0ge1xuXG5cdFx0Ly8gRmlsZSBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyBjb2RlIDAsIGFzc3VtZSAyMDBcblx0XHQwOiAyMDAsXG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdC8vICMxNDUwOiBzb21ldGltZXMgSUUgcmV0dXJucyAxMjIzIHdoZW4gaXQgc2hvdWxkIGJlIDIwNFxuXHRcdDEyMjM6IDIwNFxuXHR9LFxuXHR4aHJTdXBwb3J0ZWQgPSBqUXVlcnkuYWpheFNldHRpbmdzLnhocigpO1xuXG5zdXBwb3J0LmNvcnMgPSAhIXhoclN1cHBvcnRlZCAmJiAoIFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyU3VwcG9ydGVkICk7XG5zdXBwb3J0LmFqYXggPSB4aHJTdXBwb3J0ZWQgPSAhIXhoclN1cHBvcnRlZDtcblxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHR2YXIgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s7XG5cblx0Ly8gQ3Jvc3MgZG9tYWluIG9ubHkgYWxsb3dlZCBpZiBzdXBwb3J0ZWQgdGhyb3VnaCBYTUxIdHRwUmVxdWVzdFxuXHRpZiAoIHN1cHBvcnQuY29ycyB8fCB4aHJTdXBwb3J0ZWQgJiYgIW9wdGlvbnMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbmQ6IGZ1bmN0aW9uKCBoZWFkZXJzLCBjb21wbGV0ZSApIHtcblx0XHRcdFx0dmFyIGksXG5cdFx0XHRcdFx0eGhyID0gb3B0aW9ucy54aHIoKTtcblxuXHRcdFx0XHR4aHIub3Blbihcblx0XHRcdFx0XHRvcHRpb25zLnR5cGUsXG5cdFx0XHRcdFx0b3B0aW9ucy51cmwsXG5cdFx0XHRcdFx0b3B0aW9ucy5hc3luYyxcblx0XHRcdFx0XHRvcHRpb25zLnVzZXJuYW1lLFxuXHRcdFx0XHRcdG9wdGlvbnMucGFzc3dvcmRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBBcHBseSBjdXN0b20gZmllbGRzIGlmIHByb3ZpZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdFx0Zm9yICggaSBpbiBvcHRpb25zLnhockZpZWxkcyApIHtcblx0XHRcdFx0XHRcdHhoclsgaSBdID0gb3B0aW9ucy54aHJGaWVsZHNbIGkgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBPdmVycmlkZSBtaW1lIHR5cGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy5taW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZSApIHtcblx0XHRcdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZSggb3B0aW9ucy5taW1lVHlwZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gWC1SZXF1ZXN0ZWQtV2l0aCBoZWFkZXJcblx0XHRcdFx0Ly8gRm9yIGNyb3NzLWRvbWFpbiByZXF1ZXN0cywgc2VlaW5nIGFzIGNvbmRpdGlvbnMgZm9yIGEgcHJlZmxpZ2h0IGFyZVxuXHRcdFx0XHQvLyBha2luIHRvIGEgamlnc2F3IHB1enpsZSwgd2Ugc2ltcGx5IG5ldmVyIHNldCBpdCB0byBiZSBzdXJlLlxuXHRcdFx0XHQvLyAoaXQgY2FuIGFsd2F5cyBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcyBvciBldmVuIHVzaW5nIGFqYXhTZXR1cClcblx0XHRcdFx0Ly8gRm9yIHNhbWUtZG9tYWluIHJlcXVlc3RzLCB3b24ndCBjaGFuZ2UgaGVhZGVyIGlmIGFscmVhZHkgcHJvdmlkZWQuXG5cdFx0XHRcdGlmICggIW9wdGlvbnMuY3Jvc3NEb21haW4gJiYgIWhlYWRlcnNbIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiIF0gKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNldCBoZWFkZXJzXG5cdFx0XHRcdGZvciAoIGkgaW4gaGVhZGVycyApIHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlciggaSwgaGVhZGVyc1sgaSBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gZXJyb3JDYWxsYmFjayA9IHhoci5vbmxvYWQgPVxuXHRcdFx0XHRcdFx0XHRcdHhoci5vbmVycm9yID0geGhyLm9uYWJvcnQgPSB4aHIub250aW1lb3V0ID1cblx0XHRcdFx0XHRcdFx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRcdGlmICggdHlwZSA9PT0gXCJhYm9ydFwiICkge1xuXHRcdFx0XHRcdFx0XHRcdHhoci5hYm9ydCgpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCB0eXBlID09PSBcImVycm9yXCIgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdFx0XHRcdC8vIE9uIGEgbWFudWFsIG5hdGl2ZSBhYm9ydCwgSUU5IHRocm93c1xuXHRcdFx0XHRcdFx0XHRcdC8vIGVycm9ycyBvbiBhbnkgcHJvcGVydHkgYWNjZXNzIHRoYXQgaXMgbm90IHJlYWR5U3RhdGVcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHR5cGVvZiB4aHIuc3RhdHVzICE9PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGUoIDAsIFwiZXJyb3JcIiApO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZShcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBGaWxlOiBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyAwOyBzZWUgIzg2MDUsICMxNDIwN1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGUoXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHJTdWNjZXNzU3RhdHVzWyB4aHIuc3RhdHVzIF0gfHwgeGhyLnN0YXR1cyxcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXNUZXh0LFxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSUU5IGhhcyBubyBYSFIyIGJ1dCB0aHJvd3Mgb24gYmluYXJ5ICh0cmFjLTExNDI2KVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRm9yIFhIUjIgbm9uLXRleHQsIGxldCB0aGUgY2FsbGVyIGhhbmRsZSBpdCAoZ2gtMjQ5OClcblx0XHRcdFx0XHRcdFx0XHRcdCggeGhyLnJlc3BvbnNlVHlwZSB8fCBcInRleHRcIiApICE9PSBcInRleHRcIiAgfHxcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGVvZiB4aHIucmVzcG9uc2VUZXh0ICE9PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBiaW5hcnk6IHhoci5yZXNwb25zZSB9IDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyB0ZXh0OiB4aHIucmVzcG9uc2VUZXh0IH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvLyBMaXN0ZW4gdG8gZXZlbnRzXG5cdFx0XHRcdHhoci5vbmxvYWQgPSBjYWxsYmFjaygpO1xuXHRcdFx0XHRlcnJvckNhbGxiYWNrID0geGhyLm9uZXJyb3IgPSB4aHIub250aW1lb3V0ID0gY2FsbGJhY2soIFwiZXJyb3JcIiApO1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDkgb25seVxuXHRcdFx0XHQvLyBVc2Ugb25yZWFkeXN0YXRlY2hhbmdlIHRvIHJlcGxhY2Ugb25hYm9ydFxuXHRcdFx0XHQvLyB0byBoYW5kbGUgdW5jYXVnaHQgYWJvcnRzXG5cdFx0XHRcdGlmICggeGhyLm9uYWJvcnQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR4aHIub25hYm9ydCA9IGVycm9yQ2FsbGJhY2s7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBDaGVjayByZWFkeVN0YXRlIGJlZm9yZSB0aW1lb3V0IGFzIGl0IGNoYW5nZXNcblx0XHRcdFx0XHRcdGlmICggeGhyLnJlYWR5U3RhdGUgPT09IDQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQWxsb3cgb25lcnJvciB0byBiZSBjYWxsZWQgZmlyc3QsXG5cdFx0XHRcdFx0XHRcdC8vIGJ1dCB0aGF0IHdpbGwgbm90IGhhbmRsZSBhIG5hdGl2ZSBhYm9ydFxuXHRcdFx0XHRcdFx0XHQvLyBBbHNvLCBzYXZlIGVycm9yQ2FsbGJhY2sgdG8gYSB2YXJpYWJsZVxuXHRcdFx0XHRcdFx0XHQvLyBhcyB4aHIub25lcnJvciBjYW5ub3QgYmUgYWNjZXNzZWRcblx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvckNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENyZWF0ZSB0aGUgYWJvcnQgY2FsbGJhY2tcblx0XHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayggXCJhYm9ydFwiICk7XG5cblx0XHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRcdC8vIERvIHNlbmQgdGhlIHJlcXVlc3QgKHRoaXMgbWF5IHJhaXNlIGFuIGV4Y2VwdGlvbilcblx0XHRcdFx0XHR4aHIuc2VuZCggb3B0aW9ucy5oYXNDb250ZW50ICYmIG9wdGlvbnMuZGF0YSB8fCBudWxsICk7XG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdFx0Ly8gIzE0NjgzOiBPbmx5IHJldGhyb3cgaWYgdGhpcyBoYXNuJ3QgYmVlbiBub3RpZmllZCBhcyBhbiBlcnJvciB5ZXRcblx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG4vLyBQcmV2ZW50IGF1dG8tZXhlY3V0aW9uIG9mIHNjcmlwdHMgd2hlbiBubyBleHBsaWNpdCBkYXRhVHlwZSB3YXMgcHJvdmlkZWQgKFNlZSBnaC0yNDMyKVxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIGZ1bmN0aW9uKCBzICkge1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy5jb250ZW50cy5zY3JpcHQgPSBmYWxzZTtcblx0fVxufSApO1xuXG4vLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRhY2NlcHRzOiB7XG5cdFx0c2NyaXB0OiBcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgXCIgK1xuXHRcdFx0XCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxuXHR9LFxuXHRjb250ZW50czoge1xuXHRcdHNjcmlwdDogL1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvXG5cdH0sXG5cdGNvbnZlcnRlcnM6IHtcblx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHRleHQgKTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdHMuY2FjaGUgPSBmYWxzZTtcblx0fVxuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy50eXBlID0gXCJHRVRcIjtcblx0fVxufSApO1xuXG4vLyBCaW5kIHNjcmlwdCB0YWcgaGFjayB0cmFuc3BvcnRcbmpRdWVyeS5hamF4VHJhbnNwb3J0KCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblxuXHQvLyBUaGlzIHRyYW5zcG9ydCBvbmx5IGRlYWxzIHdpdGggY3Jvc3MgZG9tYWluIG9yIGZvcmNlZC1ieS1hdHRycyByZXF1ZXN0c1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gfHwgcy5zY3JpcHRBdHRycyApIHtcblx0XHR2YXIgc2NyaXB0LCBjYWxsYmFjaztcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIF8sIGNvbXBsZXRlICkge1xuXHRcdFx0XHRzY3JpcHQgPSBqUXVlcnkoIFwiPHNjcmlwdD5cIiApXG5cdFx0XHRcdFx0LmF0dHIoIHMuc2NyaXB0QXR0cnMgfHwge30gKVxuXHRcdFx0XHRcdC5wcm9wKCB7IGNoYXJzZXQ6IHMuc2NyaXB0Q2hhcnNldCwgc3JjOiBzLnVybCB9IClcblx0XHRcdFx0XHQub24oIFwibG9hZCBlcnJvclwiLCBjYWxsYmFjayA9IGZ1bmN0aW9uKCBldnQgKSB7XG5cdFx0XHRcdFx0XHRzY3JpcHQucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoIGV2dCApIHtcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUoIGV2dC50eXBlID09PSBcImVycm9yXCIgPyA0MDQgOiAyMDAsIGV2dC50eXBlICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIFVzZSBuYXRpdmUgRE9NIG1hbmlwdWxhdGlvbiB0byBhdm9pZCBvdXIgZG9tTWFuaXAgQUpBWCB0cmlja2VyeVxuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzY3JpcHRbIDAgXSApO1xuXHRcdFx0fSxcblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG52YXIgb2xkQ2FsbGJhY2tzID0gW10sXG5cdHJqc29ucCA9IC8oPSlcXD8oPz0mfCQpfFxcP1xcPy87XG5cbi8vIERlZmF1bHQganNvbnAgc2V0dGluZ3NcbmpRdWVyeS5hamF4U2V0dXAoIHtcblx0anNvbnA6IFwiY2FsbGJhY2tcIixcblx0anNvbnBDYWxsYmFjazogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNhbGxiYWNrID0gb2xkQ2FsbGJhY2tzLnBvcCgpIHx8ICggalF1ZXJ5LmV4cGFuZG8gKyBcIl9cIiArICggbm9uY2UrKyApICk7XG5cdFx0dGhpc1sgY2FsbGJhY2sgXSA9IHRydWU7XG5cdFx0cmV0dXJuIGNhbGxiYWNrO1xuXHR9XG59ICk7XG5cbi8vIERldGVjdCwgbm9ybWFsaXplIG9wdGlvbnMgYW5kIGluc3RhbGwgY2FsbGJhY2tzIGZvciBqc29ucCByZXF1ZXN0c1xualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIFwianNvbiBqc29ucFwiLCBmdW5jdGlvbiggcywgb3JpZ2luYWxTZXR0aW5ncywganFYSFIgKSB7XG5cblx0dmFyIGNhbGxiYWNrTmFtZSwgb3ZlcndyaXR0ZW4sIHJlc3BvbnNlQ29udGFpbmVyLFxuXHRcdGpzb25Qcm9wID0gcy5qc29ucCAhPT0gZmFsc2UgJiYgKCByanNvbnAudGVzdCggcy51cmwgKSA/XG5cdFx0XHRcInVybFwiIDpcblx0XHRcdHR5cGVvZiBzLmRhdGEgPT09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0KCBzLmNvbnRlbnRUeXBlIHx8IFwiXCIgKVxuXHRcdFx0XHRcdC5pbmRleE9mKCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiICkgPT09IDAgJiZcblx0XHRcdFx0cmpzb25wLnRlc3QoIHMuZGF0YSApICYmIFwiZGF0YVwiXG5cdFx0KTtcblxuXHQvLyBIYW5kbGUgaWZmIHRoZSBleHBlY3RlZCBkYXRhIHR5cGUgaXMgXCJqc29ucFwiIG9yIHdlIGhhdmUgYSBwYXJhbWV0ZXIgdG8gc2V0XG5cdGlmICgganNvblByb3AgfHwgcy5kYXRhVHlwZXNbIDAgXSA9PT0gXCJqc29ucFwiICkge1xuXG5cdFx0Ly8gR2V0IGNhbGxiYWNrIG5hbWUsIHJlbWVtYmVyaW5nIHByZWV4aXN0aW5nIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBpdFxuXHRcdGNhbGxiYWNrTmFtZSA9IHMuanNvbnBDYWxsYmFjayA9IGlzRnVuY3Rpb24oIHMuanNvbnBDYWxsYmFjayApID9cblx0XHRcdHMuanNvbnBDYWxsYmFjaygpIDpcblx0XHRcdHMuanNvbnBDYWxsYmFjaztcblxuXHRcdC8vIEluc2VydCBjYWxsYmFjayBpbnRvIHVybCBvciBmb3JtIGRhdGFcblx0XHRpZiAoIGpzb25Qcm9wICkge1xuXHRcdFx0c1sganNvblByb3AgXSA9IHNbIGpzb25Qcm9wIF0ucmVwbGFjZSggcmpzb25wLCBcIiQxXCIgKyBjYWxsYmFja05hbWUgKTtcblx0XHR9IGVsc2UgaWYgKCBzLmpzb25wICE9PSBmYWxzZSApIHtcblx0XHRcdHMudXJsICs9ICggcnF1ZXJ5LnRlc3QoIHMudXJsICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmpzb25wICsgXCI9XCIgKyBjYWxsYmFja05hbWU7XG5cdFx0fVxuXG5cdFx0Ly8gVXNlIGRhdGEgY29udmVydGVyIHRvIHJldHJpZXZlIGpzb24gYWZ0ZXIgc2NyaXB0IGV4ZWN1dGlvblxuXHRcdHMuY29udmVydGVyc1sgXCJzY3JpcHQganNvblwiIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggIXJlc3BvbnNlQ29udGFpbmVyICkge1xuXHRcdFx0XHRqUXVlcnkuZXJyb3IoIGNhbGxiYWNrTmFtZSArIFwiIHdhcyBub3QgY2FsbGVkXCIgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNwb25zZUNvbnRhaW5lclsgMCBdO1xuXHRcdH07XG5cblx0XHQvLyBGb3JjZSBqc29uIGRhdGFUeXBlXG5cdFx0cy5kYXRhVHlwZXNbIDAgXSA9IFwianNvblwiO1xuXG5cdFx0Ly8gSW5zdGFsbCBjYWxsYmFja1xuXHRcdG92ZXJ3cml0dGVuID0gd2luZG93WyBjYWxsYmFja05hbWUgXTtcblx0XHR3aW5kb3dbIGNhbGxiYWNrTmFtZSBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IGFyZ3VtZW50cztcblx0XHR9O1xuXG5cdFx0Ly8gQ2xlYW4tdXAgZnVuY3Rpb24gKGZpcmVzIGFmdGVyIGNvbnZlcnRlcnMpXG5cdFx0anFYSFIuYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gSWYgcHJldmlvdXMgdmFsdWUgZGlkbid0IGV4aXN0IC0gcmVtb3ZlIGl0XG5cdFx0XHRpZiAoIG92ZXJ3cml0dGVuID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGpRdWVyeSggd2luZG93ICkucmVtb3ZlUHJvcCggY2FsbGJhY2tOYW1lICk7XG5cblx0XHRcdC8vIE90aGVyd2lzZSByZXN0b3JlIHByZWV4aXN0aW5nIHZhbHVlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3dbIGNhbGxiYWNrTmFtZSBdID0gb3ZlcndyaXR0ZW47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNhdmUgYmFjayBhcyBmcmVlXG5cdFx0XHRpZiAoIHNbIGNhbGxiYWNrTmFtZSBdICkge1xuXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHJlLXVzaW5nIHRoZSBvcHRpb25zIGRvZXNuJ3Qgc2NyZXcgdGhpbmdzIGFyb3VuZFxuXHRcdFx0XHRzLmpzb25wQ2FsbGJhY2sgPSBvcmlnaW5hbFNldHRpbmdzLmpzb25wQ2FsbGJhY2s7XG5cblx0XHRcdFx0Ly8gU2F2ZSB0aGUgY2FsbGJhY2sgbmFtZSBmb3IgZnV0dXJlIHVzZVxuXHRcdFx0XHRvbGRDYWxsYmFja3MucHVzaCggY2FsbGJhY2tOYW1lICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbGwgaWYgaXQgd2FzIGEgZnVuY3Rpb24gYW5kIHdlIGhhdmUgYSByZXNwb25zZVxuXHRcdFx0aWYgKCByZXNwb25zZUNvbnRhaW5lciAmJiBpc0Z1bmN0aW9uKCBvdmVyd3JpdHRlbiApICkge1xuXHRcdFx0XHRvdmVyd3JpdHRlbiggcmVzcG9uc2VDb250YWluZXJbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IG92ZXJ3cml0dGVuID0gdW5kZWZpbmVkO1xuXHRcdH0gKTtcblxuXHRcdC8vIERlbGVnYXRlIHRvIHNjcmlwdFxuXHRcdHJldHVybiBcInNjcmlwdFwiO1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFN1cHBvcnQ6IFNhZmFyaSA4IG9ubHlcbi8vIEluIFNhZmFyaSA4IGRvY3VtZW50cyBjcmVhdGVkIHZpYSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnRcbi8vIGNvbGxhcHNlIHNpYmxpbmcgZm9ybXM6IHRoZSBzZWNvbmQgb25lIGJlY29tZXMgYSBjaGlsZCBvZiB0aGUgZmlyc3Qgb25lLlxuLy8gQmVjYXVzZSBvZiB0aGF0LCB0aGlzIHNlY3VyaXR5IG1lYXN1cmUgaGFzIHRvIGJlIGRpc2FibGVkIGluIFNhZmFyaSA4LlxuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzMzN1xuc3VwcG9ydC5jcmVhdGVIVE1MRG9jdW1lbnQgPSAoIGZ1bmN0aW9uKCkge1xuXHR2YXIgYm9keSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCggXCJcIiApLmJvZHk7XG5cdGJvZHkuaW5uZXJIVE1MID0gXCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiO1xuXHRyZXR1cm4gYm9keS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMjtcbn0gKSgpO1xuXG5cbi8vIEFyZ3VtZW50IFwiZGF0YVwiIHNob3VsZCBiZSBzdHJpbmcgb2YgaHRtbFxuLy8gY29udGV4dCAob3B0aW9uYWwpOiBJZiBzcGVjaWZpZWQsIHRoZSBmcmFnbWVudCB3aWxsIGJlIGNyZWF0ZWQgaW4gdGhpcyBjb250ZXh0LFxuLy8gZGVmYXVsdHMgdG8gZG9jdW1lbnRcbi8vIGtlZXBTY3JpcHRzIChvcHRpb25hbCk6IElmIHRydWUsIHdpbGwgaW5jbHVkZSBzY3JpcHRzIHBhc3NlZCBpbiB0aGUgaHRtbCBzdHJpbmdcbmpRdWVyeS5wYXJzZUhUTUwgPSBmdW5jdGlvbiggZGF0YSwgY29udGV4dCwga2VlcFNjcmlwdHMgKSB7XG5cdGlmICggdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cdGlmICggdHlwZW9mIGNvbnRleHQgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdGtlZXBTY3JpcHRzID0gY29udGV4dDtcblx0XHRjb250ZXh0ID0gZmFsc2U7XG5cdH1cblxuXHR2YXIgYmFzZSwgcGFyc2VkLCBzY3JpcHRzO1xuXG5cdGlmICggIWNvbnRleHQgKSB7XG5cblx0XHQvLyBTdG9wIHNjcmlwdHMgb3IgaW5saW5lIGV2ZW50IGhhbmRsZXJzIGZyb20gYmVpbmcgZXhlY3V0ZWQgaW1tZWRpYXRlbHlcblx0XHQvLyBieSB1c2luZyBkb2N1bWVudC5pbXBsZW1lbnRhdGlvblxuXHRcdGlmICggc3VwcG9ydC5jcmVhdGVIVE1MRG9jdW1lbnQgKSB7XG5cdFx0XHRjb250ZXh0ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCBcIlwiICk7XG5cblx0XHRcdC8vIFNldCB0aGUgYmFzZSBocmVmIGZvciB0aGUgY3JlYXRlZCBkb2N1bWVudFxuXHRcdFx0Ly8gc28gYW55IHBhcnNlZCBlbGVtZW50cyB3aXRoIFVSTHNcblx0XHRcdC8vIGFyZSBiYXNlZCBvbiB0aGUgZG9jdW1lbnQncyBVUkwgKGdoLTI5NjUpXG5cdFx0XHRiYXNlID0gY29udGV4dC5jcmVhdGVFbGVtZW50KCBcImJhc2VcIiApO1xuXHRcdFx0YmFzZS5ocmVmID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblx0XHRcdGNvbnRleHQuaGVhZC5hcHBlbmRDaGlsZCggYmFzZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250ZXh0ID0gZG9jdW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VkID0gcnNpbmdsZVRhZy5leGVjKCBkYXRhICk7XG5cdHNjcmlwdHMgPSAha2VlcFNjcmlwdHMgJiYgW107XG5cblx0Ly8gU2luZ2xlIHRhZ1xuXHRpZiAoIHBhcnNlZCApIHtcblx0XHRyZXR1cm4gWyBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIHBhcnNlZFsgMSBdICkgXTtcblx0fVxuXG5cdHBhcnNlZCA9IGJ1aWxkRnJhZ21lbnQoIFsgZGF0YSBdLCBjb250ZXh0LCBzY3JpcHRzICk7XG5cblx0aWYgKCBzY3JpcHRzICYmIHNjcmlwdHMubGVuZ3RoICkge1xuXHRcdGpRdWVyeSggc2NyaXB0cyApLnJlbW92ZSgpO1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeS5tZXJnZSggW10sIHBhcnNlZC5jaGlsZE5vZGVzICk7XG59O1xuXG5cbi8qKlxuICogTG9hZCBhIHVybCBpbnRvIGEgcGFnZVxuICovXG5qUXVlcnkuZm4ubG9hZCA9IGZ1bmN0aW9uKCB1cmwsIHBhcmFtcywgY2FsbGJhY2sgKSB7XG5cdHZhciBzZWxlY3RvciwgdHlwZSwgcmVzcG9uc2UsXG5cdFx0c2VsZiA9IHRoaXMsXG5cdFx0b2ZmID0gdXJsLmluZGV4T2YoIFwiIFwiICk7XG5cblx0aWYgKCBvZmYgPiAtMSApIHtcblx0XHRzZWxlY3RvciA9IHN0cmlwQW5kQ29sbGFwc2UoIHVybC5zbGljZSggb2ZmICkgKTtcblx0XHR1cmwgPSB1cmwuc2xpY2UoIDAsIG9mZiApO1xuXHR9XG5cblx0Ly8gSWYgaXQncyBhIGZ1bmN0aW9uXG5cdGlmICggaXNGdW5jdGlvbiggcGFyYW1zICkgKSB7XG5cblx0XHQvLyBXZSBhc3N1bWUgdGhhdCBpdCdzIHRoZSBjYWxsYmFja1xuXHRcdGNhbGxiYWNrID0gcGFyYW1zO1xuXHRcdHBhcmFtcyA9IHVuZGVmaW5lZDtcblxuXHQvLyBPdGhlcndpc2UsIGJ1aWxkIGEgcGFyYW0gc3RyaW5nXG5cdH0gZWxzZSBpZiAoIHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiICkge1xuXHRcdHR5cGUgPSBcIlBPU1RcIjtcblx0fVxuXG5cdC8vIElmIHdlIGhhdmUgZWxlbWVudHMgdG8gbW9kaWZ5LCBtYWtlIHRoZSByZXF1ZXN0XG5cdGlmICggc2VsZi5sZW5ndGggPiAwICkge1xuXHRcdGpRdWVyeS5hamF4KCB7XG5cdFx0XHR1cmw6IHVybCxcblxuXHRcdFx0Ly8gSWYgXCJ0eXBlXCIgdmFyaWFibGUgaXMgdW5kZWZpbmVkLCB0aGVuIFwiR0VUXCIgbWV0aG9kIHdpbGwgYmUgdXNlZC5cblx0XHRcdC8vIE1ha2UgdmFsdWUgb2YgdGhpcyBmaWVsZCBleHBsaWNpdCBzaW5jZVxuXHRcdFx0Ly8gdXNlciBjYW4gb3ZlcnJpZGUgaXQgdGhyb3VnaCBhamF4U2V0dXAgbWV0aG9kXG5cdFx0XHR0eXBlOiB0eXBlIHx8IFwiR0VUXCIsXG5cdFx0XHRkYXRhVHlwZTogXCJodG1sXCIsXG5cdFx0XHRkYXRhOiBwYXJhbXNcblx0XHR9ICkuZG9uZSggZnVuY3Rpb24oIHJlc3BvbnNlVGV4dCApIHtcblxuXHRcdFx0Ly8gU2F2ZSByZXNwb25zZSBmb3IgdXNlIGluIGNvbXBsZXRlIGNhbGxiYWNrXG5cdFx0XHRyZXNwb25zZSA9IGFyZ3VtZW50cztcblxuXHRcdFx0c2VsZi5odG1sKCBzZWxlY3RvciA/XG5cblx0XHRcdFx0Ly8gSWYgYSBzZWxlY3RvciB3YXMgc3BlY2lmaWVkLCBsb2NhdGUgdGhlIHJpZ2h0IGVsZW1lbnRzIGluIGEgZHVtbXkgZGl2XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgc2NyaXB0cyB0byBhdm9pZCBJRSAnUGVybWlzc2lvbiBEZW5pZWQnIGVycm9yc1xuXHRcdFx0XHRqUXVlcnkoIFwiPGRpdj5cIiApLmFwcGVuZCggalF1ZXJ5LnBhcnNlSFRNTCggcmVzcG9uc2VUZXh0ICkgKS5maW5kKCBzZWxlY3RvciApIDpcblxuXHRcdFx0XHQvLyBPdGhlcndpc2UgdXNlIHRoZSBmdWxsIHJlc3VsdFxuXHRcdFx0XHRyZXNwb25zZVRleHQgKTtcblxuXHRcdC8vIElmIHRoZSByZXF1ZXN0IHN1Y2NlZWRzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJkYXRhXCIsIFwic3RhdHVzXCIsIFwianFYSFJcIlxuXHRcdC8vIGJ1dCB0aGV5IGFyZSBpZ25vcmVkIGJlY2F1c2UgcmVzcG9uc2Ugd2FzIHNldCBhYm92ZS5cblx0XHQvLyBJZiBpdCBmYWlscywgdGhpcyBmdW5jdGlvbiBnZXRzIFwianFYSFJcIiwgXCJzdGF0dXNcIiwgXCJlcnJvclwiXG5cdFx0fSApLmFsd2F5cyggY2FsbGJhY2sgJiYgZnVuY3Rpb24oIGpxWEhSLCBzdGF0dXMgKSB7XG5cdFx0XHRzZWxmLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjYWxsYmFjay5hcHBseSggdGhpcywgcmVzcG9uc2UgfHwgWyBqcVhIUi5yZXNwb25zZVRleHQsIHN0YXR1cywganFYSFIgXSApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuXG5cblxuLy8gQXR0YWNoIGEgYnVuY2ggb2YgZnVuY3Rpb25zIGZvciBoYW5kbGluZyBjb21tb24gQUpBWCBldmVudHNcbmpRdWVyeS5lYWNoKCBbXG5cdFwiYWpheFN0YXJ0XCIsXG5cdFwiYWpheFN0b3BcIixcblx0XCJhamF4Q29tcGxldGVcIixcblx0XCJhamF4RXJyb3JcIixcblx0XCJhamF4U3VjY2Vzc1wiLFxuXHRcImFqYXhTZW5kXCJcbl0sIGZ1bmN0aW9uKCBpLCB0eXBlICkge1xuXHRqUXVlcnkuZm5bIHR5cGUgXSA9IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZSwgZm4gKTtcblx0fTtcbn0gKTtcblxuXG5cblxualF1ZXJ5LmV4cHIucHNldWRvcy5hbmltYXRlZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4galF1ZXJ5LmdyZXAoIGpRdWVyeS50aW1lcnMsIGZ1bmN0aW9uKCBmbiApIHtcblx0XHRyZXR1cm4gZWxlbSA9PT0gZm4uZWxlbTtcblx0fSApLmxlbmd0aDtcbn07XG5cblxuXG5cbmpRdWVyeS5vZmZzZXQgPSB7XG5cdHNldE9mZnNldDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGkgKSB7XG5cdFx0dmFyIGN1clBvc2l0aW9uLCBjdXJMZWZ0LCBjdXJDU1NUb3AsIGN1clRvcCwgY3VyT2Zmc2V0LCBjdXJDU1NMZWZ0LCBjYWxjdWxhdGVQb3NpdGlvbixcblx0XHRcdHBvc2l0aW9uID0galF1ZXJ5LmNzcyggZWxlbSwgXCJwb3NpdGlvblwiICksXG5cdFx0XHRjdXJFbGVtID0galF1ZXJ5KCBlbGVtICksXG5cdFx0XHRwcm9wcyA9IHt9O1xuXG5cdFx0Ly8gU2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuXHRcdGlmICggcG9zaXRpb24gPT09IFwic3RhdGljXCIgKSB7XG5cdFx0XHRlbGVtLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH1cblxuXHRcdGN1ck9mZnNldCA9IGN1ckVsZW0ub2Zmc2V0KCk7XG5cdFx0Y3VyQ1NTVG9wID0galF1ZXJ5LmNzcyggZWxlbSwgXCJ0b3BcIiApO1xuXHRcdGN1ckNTU0xlZnQgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImxlZnRcIiApO1xuXHRcdGNhbGN1bGF0ZVBvc2l0aW9uID0gKCBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiIHx8IHBvc2l0aW9uID09PSBcImZpeGVkXCIgKSAmJlxuXHRcdFx0KCBjdXJDU1NUb3AgKyBjdXJDU1NMZWZ0ICkuaW5kZXhPZiggXCJhdXRvXCIgKSA+IC0xO1xuXG5cdFx0Ly8gTmVlZCB0byBiZSBhYmxlIHRvIGNhbGN1bGF0ZSBwb3NpdGlvbiBpZiBlaXRoZXJcblx0XHQvLyB0b3Agb3IgbGVmdCBpcyBhdXRvIGFuZCBwb3NpdGlvbiBpcyBlaXRoZXIgYWJzb2x1dGUgb3IgZml4ZWRcblx0XHRpZiAoIGNhbGN1bGF0ZVBvc2l0aW9uICkge1xuXHRcdFx0Y3VyUG9zaXRpb24gPSBjdXJFbGVtLnBvc2l0aW9uKCk7XG5cdFx0XHRjdXJUb3AgPSBjdXJQb3NpdGlvbi50b3A7XG5cdFx0XHRjdXJMZWZ0ID0gY3VyUG9zaXRpb24ubGVmdDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJUb3AgPSBwYXJzZUZsb2F0KCBjdXJDU1NUb3AgKSB8fCAwO1xuXHRcdFx0Y3VyTGVmdCA9IHBhcnNlRmxvYXQoIGN1ckNTU0xlZnQgKSB8fCAwO1xuXHRcdH1cblxuXHRcdGlmICggaXNGdW5jdGlvbiggb3B0aW9ucyApICkge1xuXG5cdFx0XHQvLyBVc2UgalF1ZXJ5LmV4dGVuZCBoZXJlIHRvIGFsbG93IG1vZGlmaWNhdGlvbiBvZiBjb29yZGluYXRlcyBhcmd1bWVudCAoZ2gtMTg0OClcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zLmNhbGwoIGVsZW0sIGksIGpRdWVyeS5leHRlbmQoIHt9LCBjdXJPZmZzZXQgKSApO1xuXHRcdH1cblxuXHRcdGlmICggb3B0aW9ucy50b3AgIT0gbnVsbCApIHtcblx0XHRcdHByb3BzLnRvcCA9ICggb3B0aW9ucy50b3AgLSBjdXJPZmZzZXQudG9wICkgKyBjdXJUb3A7XG5cdFx0fVxuXHRcdGlmICggb3B0aW9ucy5sZWZ0ICE9IG51bGwgKSB7XG5cdFx0XHRwcm9wcy5sZWZ0ID0gKCBvcHRpb25zLmxlZnQgLSBjdXJPZmZzZXQubGVmdCApICsgY3VyTGVmdDtcblx0XHR9XG5cblx0XHRpZiAoIFwidXNpbmdcIiBpbiBvcHRpb25zICkge1xuXHRcdFx0b3B0aW9ucy51c2luZy5jYWxsKCBlbGVtLCBwcm9wcyApO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1ckVsZW0uY3NzKCBwcm9wcyApO1xuXHRcdH1cblx0fVxufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXG5cdC8vIG9mZnNldCgpIHJlbGF0ZXMgYW4gZWxlbWVudCdzIGJvcmRlciBib3ggdG8gdGhlIGRvY3VtZW50IG9yaWdpblxuXHRvZmZzZXQ6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG5cdFx0Ly8gUHJlc2VydmUgY2hhaW5pbmcgZm9yIHNldHRlclxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBvcHRpb25zID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHR0aGlzIDpcblx0XHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0XHRqUXVlcnkub2Zmc2V0LnNldE9mZnNldCggdGhpcywgb3B0aW9ucywgaSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlY3QsIHdpbixcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF07XG5cblx0XHRpZiAoICFlbGVtICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiB6ZXJvcyBmb3IgZGlzY29ubmVjdGVkIGFuZCBoaWRkZW4gKGRpc3BsYXk6IG5vbmUpIGVsZW1lbnRzIChnaC0yMzEwKVxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHRcdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGFcblx0XHQvLyBkaXNjb25uZWN0ZWQgbm9kZSBpbiBJRSB0aHJvd3MgYW4gZXJyb3Jcblx0XHRpZiAoICFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cdFx0fVxuXG5cdFx0Ly8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxuXHRcdHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHdpbiA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcblx0XHRcdGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldFxuXHRcdH07XG5cdH0sXG5cblx0Ly8gcG9zaXRpb24oKSByZWxhdGVzIGFuIGVsZW1lbnQncyBtYXJnaW4gYm94IHRvIGl0cyBvZmZzZXQgcGFyZW50J3MgcGFkZGluZyBib3hcblx0Ly8gVGhpcyBjb3JyZXNwb25kcyB0byB0aGUgYmVoYXZpb3Igb2YgQ1NTIGFic29sdXRlIHBvc2l0aW9uaW5nXG5cdHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoICF0aGlzWyAwIF0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIG9mZnNldFBhcmVudCwgb2Zmc2V0LCBkb2MsXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdLFxuXHRcdFx0cGFyZW50T2Zmc2V0ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblxuXHRcdC8vIHBvc2l0aW9uOmZpeGVkIGVsZW1lbnRzIGFyZSBvZmZzZXQgZnJvbSB0aGUgdmlld3BvcnQsIHdoaWNoIGl0c2VsZiBhbHdheXMgaGFzIHplcm8gb2Zmc2V0XG5cdFx0aWYgKCBqUXVlcnkuY3NzKCBlbGVtLCBcInBvc2l0aW9uXCIgKSA9PT0gXCJmaXhlZFwiICkge1xuXG5cdFx0XHQvLyBBc3N1bWUgcG9zaXRpb246Zml4ZWQgaW1wbGllcyBhdmFpbGFiaWxpdHkgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG5cdFx0XHRvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdG9mZnNldCA9IHRoaXMub2Zmc2V0KCk7XG5cblx0XHRcdC8vIEFjY291bnQgZm9yIHRoZSAqcmVhbCogb2Zmc2V0IHBhcmVudCwgd2hpY2ggY2FuIGJlIHRoZSBkb2N1bWVudCBvciBpdHMgcm9vdCBlbGVtZW50XG5cdFx0XHQvLyB3aGVuIGEgc3RhdGljYWxseSBwb3NpdGlvbmVkIGVsZW1lbnQgaXMgaWRlbnRpZmllZFxuXHRcdFx0ZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuXHRcdFx0b2Zmc2V0UGFyZW50ID0gZWxlbS5vZmZzZXRQYXJlbnQgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcblx0XHRcdHdoaWxlICggb2Zmc2V0UGFyZW50ICYmXG5cdFx0XHRcdCggb2Zmc2V0UGFyZW50ID09PSBkb2MuYm9keSB8fCBvZmZzZXRQYXJlbnQgPT09IGRvYy5kb2N1bWVudEVsZW1lbnQgKSAmJlxuXHRcdFx0XHRqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwicG9zaXRpb25cIiApID09PSBcInN0YXRpY1wiICkge1xuXG5cdFx0XHRcdG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50ICE9PSBlbGVtICYmIG9mZnNldFBhcmVudC5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdFx0XHQvLyBJbmNvcnBvcmF0ZSBib3JkZXJzIGludG8gaXRzIG9mZnNldCwgc2luY2UgdGhleSBhcmUgb3V0c2lkZSBpdHMgY29udGVudCBvcmlnaW5cblx0XHRcdFx0cGFyZW50T2Zmc2V0ID0galF1ZXJ5KCBvZmZzZXRQYXJlbnQgKS5vZmZzZXQoKTtcblx0XHRcdFx0cGFyZW50T2Zmc2V0LnRvcCArPSBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwiYm9yZGVyVG9wV2lkdGhcIiwgdHJ1ZSApO1xuXHRcdFx0XHRwYXJlbnRPZmZzZXQubGVmdCArPSBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwiYm9yZGVyTGVmdFdpZHRoXCIsIHRydWUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTdWJ0cmFjdCBwYXJlbnQgb2Zmc2V0cyBhbmQgZWxlbWVudCBtYXJnaW5zXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpblRvcFwiLCB0cnVlICksXG5cdFx0XHRsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0IC0galF1ZXJ5LmNzcyggZWxlbSwgXCJtYXJnaW5MZWZ0XCIsIHRydWUgKVxuXHRcdH07XG5cdH0sXG5cblx0Ly8gVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gZG9jdW1lbnRFbGVtZW50IGluIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG5cdC8vIDEpIEZvciB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZSB3aXRob3V0IG9mZnNldFBhcmVudCwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm5cblx0Ly8gICAgZG9jdW1lbnRFbGVtZW50IG9mIHRoZSBwYXJlbnQgd2luZG93XG5cdC8vIDIpIEZvciB0aGUgaGlkZGVuIG9yIGRldGFjaGVkIGVsZW1lbnRcblx0Ly8gMykgRm9yIGJvZHkgb3IgaHRtbCBlbGVtZW50LCBpLmUuIGluIGNhc2Ugb2YgdGhlIGh0bWwgbm9kZSAtIGl0IHdpbGwgcmV0dXJuIGl0c2VsZlxuXHQvL1xuXHQvLyBidXQgdGhvc2UgZXhjZXB0aW9ucyB3ZXJlIG5ldmVyIHByZXNlbnRlZCBhcyBhIHJlYWwgbGlmZSB1c2UtY2FzZXNcblx0Ly8gYW5kIG1pZ2h0IGJlIGNvbnNpZGVyZWQgYXMgbW9yZSBwcmVmZXJhYmxlIHJlc3VsdHMuXG5cdC8vXG5cdC8vIFRoaXMgbG9naWMsIGhvd2V2ZXIsIGlzIG5vdCBndWFyYW50ZWVkIGFuZCBjYW4gY2hhbmdlIGF0IGFueSBwb2ludCBpbiB0aGUgZnV0dXJlXG5cdG9mZnNldFBhcmVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudDtcblxuXHRcdFx0d2hpbGUgKCBvZmZzZXRQYXJlbnQgJiYgalF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIgKSA9PT0gXCJzdGF0aWNcIiApIHtcblx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2N1bWVudEVsZW1lbnQ7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbi8vIENyZWF0ZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AgbWV0aG9kc1xualF1ZXJ5LmVhY2goIHsgc2Nyb2xsTGVmdDogXCJwYWdlWE9mZnNldFwiLCBzY3JvbGxUb3A6IFwicGFnZVlPZmZzZXRcIiB9LCBmdW5jdGlvbiggbWV0aG9kLCBwcm9wICkge1xuXHR2YXIgdG9wID0gXCJwYWdlWU9mZnNldFwiID09PSBwcm9wO1xuXG5cdGpRdWVyeS5mblsgbWV0aG9kIF0gPSBmdW5jdGlvbiggdmFsICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBtZXRob2QsIHZhbCApIHtcblxuXHRcdFx0Ly8gQ29hbGVzY2UgZG9jdW1lbnRzIGFuZCB3aW5kb3dzXG5cdFx0XHR2YXIgd2luO1xuXHRcdFx0aWYgKCBpc1dpbmRvdyggZWxlbSApICkge1xuXHRcdFx0XHR3aW4gPSBlbGVtO1xuXHRcdFx0fSBlbHNlIGlmICggZWxlbS5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0d2luID0gZWxlbS5kZWZhdWx0Vmlldztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB2YWwgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHdpbiA/IHdpblsgcHJvcCBdIDogZWxlbVsgbWV0aG9kIF07XG5cdFx0XHR9XG5cblx0XHRcdGlmICggd2luICkge1xuXHRcdFx0XHR3aW4uc2Nyb2xsVG8oXG5cdFx0XHRcdFx0IXRvcCA/IHZhbCA6IHdpbi5wYWdlWE9mZnNldCxcblx0XHRcdFx0XHR0b3AgPyB2YWwgOiB3aW4ucGFnZVlPZmZzZXRcblx0XHRcdFx0KTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbVsgbWV0aG9kIF0gPSB2YWw7XG5cdFx0XHR9XG5cdFx0fSwgbWV0aG9kLCB2YWwsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fTtcbn0gKTtcblxuLy8gU3VwcG9ydDogU2FmYXJpIDw9NyAtIDkuMSwgQ2hyb21lIDw9MzcgLSA0OVxuLy8gQWRkIHRoZSB0b3AvbGVmdCBjc3NIb29rcyB1c2luZyBqUXVlcnkuZm4ucG9zaXRpb25cbi8vIFdlYmtpdCBidWc6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTA4NFxuLy8gQmxpbmsgYnVnOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD01ODkzNDdcbi8vIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBwZXJjZW50IHdoZW4gc3BlY2lmaWVkIGZvciB0b3AvbGVmdC9ib3R0b20vcmlnaHQ7XG4vLyByYXRoZXIgdGhhbiBtYWtlIHRoZSBjc3MgbW9kdWxlIGRlcGVuZCBvbiB0aGUgb2Zmc2V0IG1vZHVsZSwganVzdCBjaGVjayBmb3IgaXQgaGVyZVxualF1ZXJ5LmVhY2goIFsgXCJ0b3BcIiwgXCJsZWZ0XCIgXSwgZnVuY3Rpb24oIGksIHByb3AgKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJvcCBdID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnBpeGVsUG9zaXRpb24sXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdFx0Y29tcHV0ZWQgPSBjdXJDU1MoIGVsZW0sIHByb3AgKTtcblxuXHRcdFx0XHQvLyBJZiBjdXJDU1MgcmV0dXJucyBwZXJjZW50YWdlLCBmYWxsYmFjayB0byBvZmZzZXRcblx0XHRcdFx0cmV0dXJuIHJudW1ub25weC50ZXN0KCBjb21wdXRlZCApID9cblx0XHRcdFx0XHRqUXVlcnkoIGVsZW0gKS5wb3NpdGlvbigpWyBwcm9wIF0gKyBcInB4XCIgOlxuXHRcdFx0XHRcdGNvbXB1dGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcbn0gKTtcblxuXG4vLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IEhlaWdodDogXCJoZWlnaHRcIiwgV2lkdGg6IFwid2lkdGhcIiB9LCBmdW5jdGlvbiggbmFtZSwgdHlwZSApIHtcblx0alF1ZXJ5LmVhY2goIHsgcGFkZGluZzogXCJpbm5lclwiICsgbmFtZSwgY29udGVudDogdHlwZSwgXCJcIjogXCJvdXRlclwiICsgbmFtZSB9LFxuXHRcdGZ1bmN0aW9uKCBkZWZhdWx0RXh0cmEsIGZ1bmNOYW1lICkge1xuXG5cdFx0Ly8gTWFyZ2luIGlzIG9ubHkgZm9yIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoXG5cdFx0alF1ZXJ5LmZuWyBmdW5jTmFtZSBdID0gZnVuY3Rpb24oIG1hcmdpbiwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgY2hhaW5hYmxlID0gYXJndW1lbnRzLmxlbmd0aCAmJiAoIGRlZmF1bHRFeHRyYSB8fCB0eXBlb2YgbWFyZ2luICE9PSBcImJvb2xlYW5cIiApLFxuXHRcdFx0XHRleHRyYSA9IGRlZmF1bHRFeHRyYSB8fCAoIG1hcmdpbiA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gdHJ1ZSA/IFwibWFyZ2luXCIgOiBcImJvcmRlclwiICk7XG5cblx0XHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIGRvYztcblxuXHRcdFx0XHRpZiAoIGlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdFx0XHQvLyAkKCB3aW5kb3cgKS5vdXRlcldpZHRoL0hlaWdodCByZXR1cm4gdy9oIGluY2x1ZGluZyBzY3JvbGxiYXJzIChnaC0xNzI5KVxuXHRcdFx0XHRcdHJldHVybiBmdW5jTmFtZS5pbmRleE9mKCBcIm91dGVyXCIgKSA9PT0gMCA/XG5cdFx0XHRcdFx0XHRlbGVtWyBcImlubmVyXCIgKyBuYW1lIF0gOlxuXHRcdFx0XHRcdFx0ZWxlbS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbIFwiY2xpZW50XCIgKyBuYW1lIF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBHZXQgZG9jdW1lbnQgd2lkdGggb3IgaGVpZ2h0XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRkb2MgPSBlbGVtLmRvY3VtZW50RWxlbWVudDtcblxuXHRcdFx0XHRcdC8vIEVpdGhlciBzY3JvbGxbV2lkdGgvSGVpZ2h0XSBvciBvZmZzZXRbV2lkdGgvSGVpZ2h0XSBvciBjbGllbnRbV2lkdGgvSGVpZ2h0XSxcblx0XHRcdFx0XHQvLyB3aGljaGV2ZXIgaXMgZ3JlYXRlc3Rcblx0XHRcdFx0XHRyZXR1cm4gTWF0aC5tYXgoXG5cdFx0XHRcdFx0XHRlbGVtLmJvZHlbIFwic2Nyb2xsXCIgKyBuYW1lIF0sIGRvY1sgXCJzY3JvbGxcIiArIG5hbWUgXSxcblx0XHRcdFx0XHRcdGVsZW0uYm9keVsgXCJvZmZzZXRcIiArIG5hbWUgXSwgZG9jWyBcIm9mZnNldFwiICsgbmFtZSBdLFxuXHRcdFx0XHRcdFx0ZG9jWyBcImNsaWVudFwiICsgbmFtZSBdXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblxuXHRcdFx0XHRcdC8vIEdldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnQsIHJlcXVlc3RpbmcgYnV0IG5vdCBmb3JjaW5nIHBhcnNlRmxvYXRcblx0XHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCB0eXBlLCBleHRyYSApIDpcblxuXHRcdFx0XHRcdC8vIFNldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnRcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHR5cGUsIHZhbHVlLCBleHRyYSApO1xuXHRcdFx0fSwgdHlwZSwgY2hhaW5hYmxlID8gbWFyZ2luIDogdW5kZWZpbmVkLCBjaGFpbmFibGUgKTtcblx0XHR9O1xuXHR9ICk7XG59ICk7XG5cblxualF1ZXJ5LmVhY2goICggXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBcIiArXG5cdFwibW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgXCIgK1xuXHRcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIiApLnNwbGl0KCBcIiBcIiApLFxuXHRmdW5jdGlvbiggaSwgbmFtZSApIHtcblxuXHQvLyBIYW5kbGUgZXZlbnQgYmluZGluZ1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgP1xuXHRcdFx0dGhpcy5vbiggbmFtZSwgbnVsbCwgZGF0YSwgZm4gKSA6XG5cdFx0XHR0aGlzLnRyaWdnZXIoIG5hbWUgKTtcblx0fTtcbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRob3ZlcjogZnVuY3Rpb24oIGZuT3ZlciwgZm5PdXQgKSB7XG5cdFx0cmV0dXJuIHRoaXMubW91c2VlbnRlciggZm5PdmVyICkubW91c2VsZWF2ZSggZm5PdXQgfHwgZm5PdmVyICk7XG5cdH1cbn0gKTtcblxuXG5cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXG5cdGJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGVzLCBudWxsLCBkYXRhLCBmbiApO1xuXHR9LFxuXHR1bmJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub2ZmKCB0eXBlcywgbnVsbCwgZm4gKTtcblx0fSxcblxuXHRkZWxlZ2F0ZTogZnVuY3Rpb24oIHNlbGVjdG9yLCB0eXBlcywgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKTtcblx0fSxcblx0dW5kZWxlZ2F0ZTogZnVuY3Rpb24oIHNlbGVjdG9yLCB0eXBlcywgZm4gKSB7XG5cblx0XHQvLyAoIG5hbWVzcGFjZSApIG9yICggc2VsZWN0b3IsIHR5cGVzIFssIGZuXSApXG5cdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgP1xuXHRcdFx0dGhpcy5vZmYoIHNlbGVjdG9yLCBcIioqXCIgKSA6XG5cdFx0XHR0aGlzLm9mZiggdHlwZXMsIHNlbGVjdG9yIHx8IFwiKipcIiwgZm4gKTtcblx0fVxufSApO1xuXG4vLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0LCBvcHRpb25hbGx5IHBhcnRpYWxseSBhcHBseWluZyBhbnlcbi8vIGFyZ3VtZW50cy5cbi8vIGpRdWVyeS5wcm94eSBpcyBkZXByZWNhdGVkIHRvIHByb21vdGUgc3RhbmRhcmRzIChzcGVjaWZpY2FsbHkgRnVuY3Rpb24jYmluZClcbi8vIEhvd2V2ZXIsIGl0IGlzIG5vdCBzbGF0ZWQgZm9yIHJlbW92YWwgYW55IHRpbWUgc29vblxualF1ZXJ5LnByb3h5ID0gZnVuY3Rpb24oIGZuLCBjb250ZXh0ICkge1xuXHR2YXIgdG1wLCBhcmdzLCBwcm94eTtcblxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdHRtcCA9IGZuWyBjb250ZXh0IF07XG5cdFx0Y29udGV4dCA9IGZuO1xuXHRcdGZuID0gdG1wO1xuXHR9XG5cblx0Ly8gUXVpY2sgY2hlY2sgdG8gZGV0ZXJtaW5lIGlmIHRhcmdldCBpcyBjYWxsYWJsZSwgaW4gdGhlIHNwZWNcblx0Ly8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblx0aWYgKCAhaXNGdW5jdGlvbiggZm4gKSApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0Ly8gU2ltdWxhdGVkIGJpbmRcblx0YXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMiApO1xuXHRwcm94eSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBmbi5hcHBseSggY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdCggc2xpY2UuY2FsbCggYXJndW1lbnRzICkgKSApO1xuXHR9O1xuXG5cdC8vIFNldCB0aGUgZ3VpZCBvZiB1bmlxdWUgaGFuZGxlciB0byB0aGUgc2FtZSBvZiBvcmlnaW5hbCBoYW5kbGVyLCBzbyBpdCBjYW4gYmUgcmVtb3ZlZFxuXHRwcm94eS5ndWlkID0gZm4uZ3VpZCA9IGZuLmd1aWQgfHwgalF1ZXJ5Lmd1aWQrKztcblxuXHRyZXR1cm4gcHJveHk7XG59O1xuXG5qUXVlcnkuaG9sZFJlYWR5ID0gZnVuY3Rpb24oIGhvbGQgKSB7XG5cdGlmICggaG9sZCApIHtcblx0XHRqUXVlcnkucmVhZHlXYWl0Kys7XG5cdH0gZWxzZSB7XG5cdFx0alF1ZXJ5LnJlYWR5KCB0cnVlICk7XG5cdH1cbn07XG5qUXVlcnkuaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5qUXVlcnkucGFyc2VKU09OID0gSlNPTi5wYXJzZTtcbmpRdWVyeS5ub2RlTmFtZSA9IG5vZGVOYW1lO1xualF1ZXJ5LmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xualF1ZXJ5LmlzV2luZG93ID0gaXNXaW5kb3c7XG5qUXVlcnkuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xualF1ZXJ5LnR5cGUgPSB0b1R5cGU7XG5cbmpRdWVyeS5ub3cgPSBEYXRlLm5vdztcblxualF1ZXJ5LmlzTnVtZXJpYyA9IGZ1bmN0aW9uKCBvYmogKSB7XG5cblx0Ly8gQXMgb2YgalF1ZXJ5IDMuMCwgaXNOdW1lcmljIGlzIGxpbWl0ZWQgdG9cblx0Ly8gc3RyaW5ncyBhbmQgbnVtYmVycyAocHJpbWl0aXZlcyBvciBvYmplY3RzKVxuXHQvLyB0aGF0IGNhbiBiZSBjb2VyY2VkIHRvIGZpbml0ZSBudW1iZXJzIChnaC0yNjYyKVxuXHR2YXIgdHlwZSA9IGpRdWVyeS50eXBlKCBvYmogKTtcblx0cmV0dXJuICggdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlID09PSBcInN0cmluZ1wiICkgJiZcblxuXHRcdC8vIHBhcnNlRmxvYXQgTmFOcyBudW1lcmljLWNhc3QgZmFsc2UgcG9zaXRpdmVzIChcIlwiKVxuXHRcdC8vIC4uLmJ1dCBtaXNpbnRlcnByZXRzIGxlYWRpbmctbnVtYmVyIHN0cmluZ3MsIHBhcnRpY3VsYXJseSBoZXggbGl0ZXJhbHMgKFwiMHguLi5cIilcblx0XHQvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cblx0XHQhaXNOYU4oIG9iaiAtIHBhcnNlRmxvYXQoIG9iaiApICk7XG59O1xuXG5cblxuXG4vLyBSZWdpc3RlciBhcyBhIG5hbWVkIEFNRCBtb2R1bGUsIHNpbmNlIGpRdWVyeSBjYW4gYmUgY29uY2F0ZW5hdGVkIHdpdGggb3RoZXJcbi8vIGZpbGVzIHRoYXQgbWF5IHVzZSBkZWZpbmUsIGJ1dCBub3QgdmlhIGEgcHJvcGVyIGNvbmNhdGVuYXRpb24gc2NyaXB0IHRoYXRcbi8vIHVuZGVyc3RhbmRzIGFub255bW91cyBBTUQgbW9kdWxlcy4gQSBuYW1lZCBBTUQgaXMgc2FmZXN0IGFuZCBtb3N0IHJvYnVzdFxuLy8gd2F5IHRvIHJlZ2lzdGVyLiBMb3dlcmNhc2UganF1ZXJ5IGlzIHVzZWQgYmVjYXVzZSBBTUQgbW9kdWxlIG5hbWVzIGFyZVxuLy8gZGVyaXZlZCBmcm9tIGZpbGUgbmFtZXMsIGFuZCBqUXVlcnkgaXMgbm9ybWFsbHkgZGVsaXZlcmVkIGluIGEgbG93ZXJjYXNlXG4vLyBmaWxlIG5hbWUuIERvIHRoaXMgYWZ0ZXIgY3JlYXRpbmcgdGhlIGdsb2JhbCBzbyB0aGF0IGlmIGFuIEFNRCBtb2R1bGUgd2FudHNcbi8vIHRvIGNhbGwgbm9Db25mbGljdCB0byBoaWRlIHRoaXMgdmVyc2lvbiBvZiBqUXVlcnksIGl0IHdpbGwgd29yay5cblxuLy8gTm90ZSB0aGF0IGZvciBtYXhpbXVtIHBvcnRhYmlsaXR5LCBsaWJyYXJpZXMgdGhhdCBhcmUgbm90IGpRdWVyeSBzaG91bGRcbi8vIGRlY2xhcmUgdGhlbXNlbHZlcyBhcyBhbm9ueW1vdXMgbW9kdWxlcywgYW5kIGF2b2lkIHNldHRpbmcgYSBnbG9iYWwgaWYgYW5cbi8vIEFNRCBsb2FkZXIgaXMgcHJlc2VudC4galF1ZXJ5IGlzIGEgc3BlY2lhbCBjYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vanJidXJrZS9yZXF1aXJlanMvd2lraS9VcGRhdGluZy1leGlzdGluZy1saWJyYXJpZXMjd2lraS1hbm9uXG5cbmlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cdGRlZmluZSggXCJqcXVlcnlcIiwgW10sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnk7XG5cdH0gKTtcbn1cblxuXG5cblxudmFyXG5cblx0Ly8gTWFwIG92ZXIgalF1ZXJ5IGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF9qUXVlcnkgPSB3aW5kb3cualF1ZXJ5LFxuXG5cdC8vIE1hcCBvdmVyIHRoZSAkIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF8kID0gd2luZG93LiQ7XG5cbmpRdWVyeS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oIGRlZXAgKSB7XG5cdGlmICggd2luZG93LiQgPT09IGpRdWVyeSApIHtcblx0XHR3aW5kb3cuJCA9IF8kO1xuXHR9XG5cblx0aWYgKCBkZWVwICYmIHdpbmRvdy5qUXVlcnkgPT09IGpRdWVyeSApIHtcblx0XHR3aW5kb3cualF1ZXJ5ID0gX2pRdWVyeTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnk7XG59O1xuXG4vLyBFeHBvc2UgalF1ZXJ5IGFuZCAkIGlkZW50aWZpZXJzLCBldmVuIGluIEFNRFxuLy8gKCM3MTAyI2NvbW1lbnQ6MTAsIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L3B1bGwvNTU3KVxuLy8gYW5kIENvbW1vbkpTIGZvciBicm93c2VyIGVtdWxhdG9ycyAoIzEzNTY2KVxuaWYgKCAhbm9HbG9iYWwgKSB7XG5cdHdpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9IGpRdWVyeTtcbn1cblxuXG5cblxucmV0dXJuIGpRdWVyeTtcbn0gKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
