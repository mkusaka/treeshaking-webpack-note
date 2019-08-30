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
    n((n.s = 1));
})([
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
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    n.n(r)()(".this-class").on("click", e => {
      e.preventDefault(), console.log(e);
    });
  }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImdsb2JhbCIsImZhY3RvcnkiLCJkb2N1bWVudCIsInciLCJFcnJvciIsIndpbmRvdyIsInRoaXMiLCJub0dsb2JhbCIsImFyciIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJzbGljZSIsImNvbmNhdCIsInB1c2giLCJpbmRleE9mIiwiY2xhc3MydHlwZSIsInRvU3RyaW5nIiwiaGFzT3duIiwiZm5Ub1N0cmluZyIsIk9iamVjdEZ1bmN0aW9uU3RyaW5nIiwic3VwcG9ydCIsImlzRnVuY3Rpb24iLCJvYmoiLCJub2RlVHlwZSIsImlzV2luZG93IiwicHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyIsInR5cGUiLCJzcmMiLCJub25jZSIsIm5vTW9kdWxlIiwiRE9NRXZhbCIsImNvZGUiLCJub2RlIiwiZG9jIiwidmFsIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ0b1R5cGUiLCJqUXVlcnkiLCJzZWxlY3RvciIsImNvbnRleHQiLCJmbiIsImluaXQiLCJydHJpbSIsImlzQXJyYXlMaWtlIiwibGVuZ3RoIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJ0b0FycmF5IiwibnVtIiwicHVzaFN0YWNrIiwiZWxlbXMiLCJyZXQiLCJtZXJnZSIsInByZXZPYmplY3QiLCJlYWNoIiwiY2FsbGJhY2siLCJtYXAiLCJlbGVtIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImxlbiIsImoiLCJlbmQiLCJzb3J0Iiwic3BsaWNlIiwiZXh0ZW5kIiwib3B0aW9ucyIsImNvcHkiLCJjb3B5SXNBcnJheSIsImNsb25lIiwidGFyZ2V0IiwiZGVlcCIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJtc2ciLCJub29wIiwicHJvdG8iLCJDdG9yIiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJ0cmltIiwibWFrZUFycmF5IiwicmVzdWx0cyIsImluQXJyYXkiLCJzZWNvbmQiLCJncmVwIiwiaW52ZXJ0IiwibWF0Y2hlcyIsImNhbGxiYWNrRXhwZWN0IiwiYXJnIiwiZ3VpZCIsIml0ZXJhdG9yIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsIlNpenpsZSIsIkV4cHIiLCJnZXRUZXh0IiwiaXNYTUwiLCJ0b2tlbml6ZSIsImNvbXBpbGUiLCJzZWxlY3QiLCJvdXRlcm1vc3RDb250ZXh0Iiwic29ydElucHV0IiwiaGFzRHVwbGljYXRlIiwic2V0RG9jdW1lbnQiLCJkb2NFbGVtIiwiZG9jdW1lbnRJc0hUTUwiLCJyYnVnZ3lRU0EiLCJyYnVnZ3lNYXRjaGVzIiwiY29udGFpbnMiLCJEYXRlIiwicHJlZmVycmVkRG9jIiwiZGlycnVucyIsImRvbmUiLCJjbGFzc0NhY2hlIiwiY3JlYXRlQ2FjaGUiLCJ0b2tlbkNhY2hlIiwiY29tcGlsZXJDYWNoZSIsIm5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUiLCJzb3J0T3JkZXIiLCJhIiwiYiIsInBvcCIsInB1c2hfbmF0aXZlIiwibGlzdCIsImJvb2xlYW5zIiwid2hpdGVzcGFjZSIsImlkZW50aWZpZXIiLCJhdHRyaWJ1dGVzIiwicHNldWRvcyIsInJ3aGl0ZXNwYWNlIiwiUmVnRXhwIiwicmNvbW1hIiwicmNvbWJpbmF0b3JzIiwicmRlc2NlbmQiLCJycHNldWRvIiwicmlkZW50aWZpZXIiLCJtYXRjaEV4cHIiLCJyaHRtbCIsInJpbnB1dHMiLCJyaGVhZGVyIiwicm5hdGl2ZSIsInJxdWlja0V4cHIiLCJyc2libGluZyIsInJ1bmVzY2FwZSIsImZ1bmVzY2FwZSIsIl8iLCJlc2NhcGVkIiwiZXNjYXBlZFdoaXRlc3BhY2UiLCJoaWdoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicmNzc2VzY2FwZSIsImZjc3Nlc2NhcGUiLCJjaCIsImFzQ29kZVBvaW50IiwiY2hhckNvZGVBdCIsInVubG9hZEhhbmRsZXIiLCJpbkRpc2FibGVkRmllbGRzZXQiLCJhZGRDb21iaW5hdG9yIiwiZGlzYWJsZWQiLCJub2RlTmFtZSIsImRpciIsIm5leHQiLCJjaGlsZE5vZGVzIiwiZSIsImVscyIsInNlZWQiLCJuaWQiLCJtYXRjaCIsImdyb3VwcyIsIm5ld1NlbGVjdG9yIiwibmV3Q29udGV4dCIsIm93bmVyRG9jdW1lbnQiLCJleGVjIiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsInRlc3QiLCJ0b1NlbGVjdG9yIiwiam9pbiIsInRlc3RDb250ZXh0IiwicXVlcnlTZWxlY3RvckFsbCIsInFzYUVycm9yIiwicmVtb3ZlQXR0cmlidXRlIiwia2V5cyIsImNhY2hlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsIm1hcmtGdW5jdGlvbiIsImFzc2VydCIsImVsIiwiYWRkSGFuZGxlIiwiYXR0cnMiLCJoYW5kbGVyIiwiYXR0ckhhbmRsZSIsInNpYmxpbmdDaGVjayIsImN1ciIsImRpZmYiLCJzb3VyY2VJbmRleCIsIm5leHRTaWJsaW5nIiwiY3JlYXRlSW5wdXRQc2V1ZG8iLCJjcmVhdGVCdXR0b25Qc2V1ZG8iLCJjcmVhdGVEaXNhYmxlZFBzZXVkbyIsImlzRGlzYWJsZWQiLCJjcmVhdGVQb3NpdGlvbmFsUHNldWRvIiwiYXJndW1lbnQiLCJtYXRjaEluZGV4ZXMiLCJuYW1lc3BhY2UiLCJuYW1lc3BhY2VVUkkiLCJkb2N1bWVudEVsZW1lbnQiLCJoYXNDb21wYXJlIiwic3ViV2luZG93IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJjbGFzc05hbWUiLCJjcmVhdGVDb21tZW50IiwiZ2V0QnlJZCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZmlsdGVyIiwiYXR0cklkIiwiZmluZCIsImdldEF0dHJpYnV0ZU5vZGUiLCJ0YWciLCJ0bXAiLCJpbm5lckhUTUwiLCJpbnB1dCIsIm1hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImRpc2Nvbm5lY3RlZE1hdGNoIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJhZG93biIsImJ1cCIsImNvbXBhcmUiLCJzb3J0RGV0YWNoZWQiLCJhdXAiLCJhcCIsImJwIiwidW5zaGlmdCIsImV4cHIiLCJlbGVtZW50cyIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJzZWwiLCJ1bmlxdWVTb3J0IiwiZHVwbGljYXRlcyIsImRldGVjdER1cGxpY2F0ZXMiLCJzb3J0U3RhYmxlIiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwicmVsYXRpdmUiLCJwcmVGaWx0ZXIiLCJleGNlc3MiLCJ1bnF1b3RlZCIsIm5vZGVOYW1lU2VsZWN0b3IiLCJwYXR0ZXJuIiwib3BlcmF0b3IiLCJjaGVjayIsInJlc3VsdCIsIndoYXQiLCJzaW1wbGUiLCJmb3J3YXJkIiwib2ZUeXBlIiwieG1sIiwidW5pcXVlQ2FjaGUiLCJvdXRlckNhY2hlIiwibm9kZUluZGV4Iiwic3RhcnQiLCJwYXJlbnQiLCJ1c2VDYWNoZSIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvIiwiYXJncyIsInNldEZpbHRlcnMiLCJpZHgiLCJtYXRjaGVkIiwibWF0Y2hlciIsInVubWF0Y2hlZCIsImxhbmciLCJlbGVtTGFuZyIsImhhc2giLCJsb2NhdGlvbiIsImFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJyYWRpbyIsImNoZWNrYm94IiwiZmlsZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJzdWJtaXQiLCJyZXNldCIsInRva2VucyIsImNvbWJpbmF0b3IiLCJiYXNlIiwic2tpcCIsImNoZWNrTm9uRWxlbWVudHMiLCJkb25lTmFtZSIsIm9sZENhY2hlIiwibmV3Q2FjaGUiLCJlbGVtZW50TWF0Y2hlciIsIm1hdGNoZXJzIiwiY29uZGVuc2UiLCJuZXdVbm1hdGNoZWQiLCJtYXBwZWQiLCJzZXRNYXRjaGVyIiwicG9zdEZpbHRlciIsInBvc3RGaW5kZXIiLCJwb3N0U2VsZWN0b3IiLCJ0ZW1wIiwicHJlTWFwIiwicG9zdE1hcCIsInByZWV4aXN0aW5nIiwiY29udGV4dHMiLCJtdWx0aXBsZUNvbnRleHRzIiwibWF0Y2hlckluIiwibWF0Y2hlck91dCIsIm1hdGNoZXJGcm9tVG9rZW5zIiwiY2hlY2tDb250ZXh0IiwibGVhZGluZ1JlbGF0aXZlIiwiaW1wbGljaXRSZWxhdGl2ZSIsIm1hdGNoQ29udGV4dCIsIm1hdGNoQW55Q29udGV4dCIsImZpbHRlcnMiLCJwYXJzZU9ubHkiLCJzb0ZhciIsInByZUZpbHRlcnMiLCJjYWNoZWQiLCJzZXRNYXRjaGVycyIsImVsZW1lbnRNYXRjaGVycyIsImJ5U2V0IiwiYnlFbGVtZW50Iiwic3VwZXJNYXRjaGVyIiwib3V0ZXJtb3N0IiwibWF0Y2hlZENvdW50Iiwic2V0TWF0Y2hlZCIsImNvbnRleHRCYWNrdXAiLCJkaXJydW5zVW5pcXVlIiwibWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzIiwidG9rZW4iLCJjb21waWxlZCIsImRlZmF1bHRWYWx1ZSIsInVuaXF1ZSIsImlzWE1MRG9jIiwiZXNjYXBlU2VsZWN0b3IiLCJ1bnRpbCIsInRydW5jYXRlIiwiaXMiLCJzaWJsaW5ncyIsInJuZWVkc0NvbnRleHQiLCJuZWVkc0NvbnRleHQiLCJyc2luZ2xlVGFnIiwid2lubm93IiwicXVhbGlmaWVyIiwibm90Iiwic2VsZiIsInJvb3RqUXVlcnkiLCJyb290IiwicGFyc2VIVE1MIiwicmVhZHkiLCJycGFyZW50c3ByZXYiLCJndWFyYW50ZWVkVW5pcXVlIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsInByZXYiLCJzaWJsaW5nIiwiaGFzIiwidGFyZ2V0cyIsImNsb3Nlc3QiLCJpbmRleCIsInByZXZBbGwiLCJhZGQiLCJhZGRCYWNrIiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJjb250ZW50RG9jdW1lbnQiLCJjb250ZW50IiwicmV2ZXJzZSIsInJub3RodG1sd2hpdGUiLCJJZGVudGl0eSIsInYiLCJUaHJvd2VyIiwiZXgiLCJhZG9wdFZhbHVlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5vVmFsdWUiLCJtZXRob2QiLCJwcm9taXNlIiwiZmFpbCIsInRoZW4iLCJDYWxsYmFja3MiLCJmbGFnIiwiY3JlYXRlT3B0aW9ucyIsImZpcmluZyIsIm1lbW9yeSIsImZpcmVkIiwibG9ja2VkIiwicXVldWUiLCJmaXJpbmdJbmRleCIsImZpcmUiLCJvbmNlIiwic3RvcE9uRmFsc2UiLCJyZW1vdmUiLCJlbXB0eSIsImRpc2FibGUiLCJsb2NrIiwiZmlyZVdpdGgiLCJEZWZlcnJlZCIsImZ1bmMiLCJ0dXBsZXMiLCJzdGF0ZSIsImFsd2F5cyIsImRlZmVycmVkIiwicGlwZSIsImZucyIsIm5ld0RlZmVyIiwidHVwbGUiLCJyZXR1cm5lZCIsInByb2dyZXNzIiwibm90aWZ5Iiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwib25Qcm9ncmVzcyIsIm1heERlcHRoIiwiZGVwdGgiLCJzcGVjaWFsIiwidGhhdCIsIm1pZ2h0VGhyb3ciLCJUeXBlRXJyb3IiLCJub3RpZnlXaXRoIiwicmVzb2x2ZVdpdGgiLCJwcm9jZXNzIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsInN0YXRlU3RyaW5nIiwid2hlbiIsInNpbmdsZVZhbHVlIiwicmVtYWluaW5nIiwicmVzb2x2ZUNvbnRleHRzIiwicmVzb2x2ZVZhbHVlcyIsIm1hc3RlciIsInVwZGF0ZUZ1bmMiLCJyZXJyb3JOYW1lcyIsInN0YWNrIiwiY29uc29sZSIsIndhcm4iLCJtZXNzYWdlIiwicmVhZHlFeGNlcHRpb24iLCJyZWFkeUxpc3QiLCJjb21wbGV0ZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2F0Y2giLCJyZWFkeVdhaXQiLCJ3YWl0IiwicmVhZHlTdGF0ZSIsImRvU2Nyb2xsIiwiYWNjZXNzIiwiY2hhaW5hYmxlIiwiZW1wdHlHZXQiLCJyYXciLCJidWxrIiwicm1zUHJlZml4IiwicmRhc2hBbHBoYSIsImZjYW1lbENhc2UiLCJhbGwiLCJsZXR0ZXIiLCJ0b1VwcGVyQ2FzZSIsImNhbWVsQ2FzZSIsInN0cmluZyIsImFjY2VwdERhdGEiLCJvd25lciIsIkRhdGEiLCJ1aWQiLCJjb25maWd1cmFibGUiLCJzZXQiLCJkYXRhIiwicHJvcCIsImhhc0RhdGEiLCJkYXRhUHJpdiIsImRhdGFVc2VyIiwicmJyYWNlIiwicm11bHRpRGFzaCIsImRhdGFBdHRyIiwiSlNPTiIsInBhcnNlIiwiZ2V0RGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwiZGVxdWV1ZSIsInN0YXJ0TGVuZ3RoIiwiaG9va3MiLCJfcXVldWVIb29rcyIsInN0b3AiLCJzZXR0ZXIiLCJjbGVhclF1ZXVlIiwiY291bnQiLCJkZWZlciIsInBudW0iLCJzb3VyY2UiLCJyY3NzTnVtIiwiY3NzRXhwYW5kIiwiaXNBdHRhY2hlZCIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJpc0hpZGRlbldpdGhpblRyZWUiLCJzdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJzd2FwIiwib2xkIiwiYWRqdXN0Q1NTIiwidmFsdWVQYXJ0cyIsInR3ZWVuIiwiYWRqdXN0ZWQiLCJzY2FsZSIsIm1heEl0ZXJhdGlvbnMiLCJjdXJyZW50VmFsdWUiLCJpbml0aWFsIiwidW5pdCIsImNzc051bWJlciIsImluaXRpYWxJblVuaXQiLCJkZWZhdWx0RGlzcGxheU1hcCIsImdldERlZmF1bHREaXNwbGF5IiwiYm9keSIsInNob3dIaWRlIiwic2hvdyIsInZhbHVlcyIsImhpZGUiLCJ0b2dnbGUiLCJyY2hlY2thYmxlVHlwZSIsInJ0YWdOYW1lIiwicnNjcmlwdFR5cGUiLCJ3cmFwTWFwIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJnZXRBbGwiLCJzZXRHbG9iYWxFdmFsIiwicmVmRWxlbWVudHMiLCJvcHRncm91cCIsInRib2R5IiwidGZvb3QiLCJjb2xncm91cCIsImNhcHRpb24iLCJ0aCIsImRpdiIsImJ1aWxkRnJhZ21lbnQiLCJzY3JpcHRzIiwic2VsZWN0aW9uIiwiaWdub3JlZCIsIndyYXAiLCJhdHRhY2hlZCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIm5vZGVzIiwiaHRtbFByZWZpbHRlciIsImNyZWF0ZVRleHROb2RlIiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwicmtleUV2ZW50Iiwicm1vdXNlRXZlbnQiLCJydHlwZW5hbWVzcGFjZSIsInJldHVyblRydWUiLCJyZXR1cm5GYWxzZSIsImV4cGVjdFN5bmMiLCJlcnIiLCJzYWZlQWN0aXZlRWxlbWVudCIsIm9uIiwidHlwZXMiLCJvbmUiLCJvcmlnRm4iLCJldmVudCIsIm9mZiIsImxldmVyYWdlTmF0aXZlIiwibm90QXN5bmMiLCJzYXZlZCIsImlzVHJpZ2dlciIsImRlbGVnYXRlVHlwZSIsInN0b3BQcm9wYWdhdGlvbiIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwidHJpZ2dlciIsIkV2ZW50IiwiaGFuZGxlT2JqSW4iLCJldmVudEhhbmRsZSIsImV2ZW50cyIsImhhbmRsZU9iaiIsImhhbmRsZXJzIiwibmFtZXNwYWNlcyIsIm9yaWdUeXBlIiwiZWxlbURhdGEiLCJoYW5kbGUiLCJ0cmlnZ2VyZWQiLCJkaXNwYXRjaCIsImJpbmRUeXBlIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwibWFwcGVkVHlwZXMiLCJvcmlnQ291bnQiLCJ0ZWFyZG93biIsInJlbW92ZUV2ZW50IiwibmF0aXZlRXZlbnQiLCJoYW5kbGVyUXVldWUiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJjdXJyZW50VGFyZ2V0IiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwicG9zdERpc3BhdGNoIiwibWF0Y2hlZEhhbmRsZXJzIiwibWF0Y2hlZFNlbGVjdG9ycyIsImJ1dHRvbiIsImFkZFByb3AiLCJob29rIiwib3JpZ2luYWxFdmVudCIsIndyaXRhYmxlIiwibG9hZCIsIm5vQnViYmxlIiwiY2xpY2siLCJiZWZvcmV1bmxvYWQiLCJyZXR1cm5WYWx1ZSIsInByb3BzIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJub3ciLCJpc1NpbXVsYXRlZCIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY2hhckNvZGUiLCJrZXlDb2RlIiwiYnV0dG9ucyIsImNsaWVudFgiLCJjbGllbnRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwidGFyZ2V0VG91Y2hlcyIsInRvRWxlbWVudCIsInRvdWNoZXMiLCJ3aGljaCIsImZvY3VzIiwiYmx1ciIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwib3JpZyIsInJlbGF0ZWQiLCJyeGh0bWxUYWciLCJybm9Jbm5lcmh0bWwiLCJyY2hlY2tlZCIsInJjbGVhblNjcmlwdCIsIm1hbmlwdWxhdGlvblRhcmdldCIsImRpc2FibGVTY3JpcHQiLCJyZXN0b3JlU2NyaXB0IiwiY2xvbmVDb3B5RXZlbnQiLCJkZXN0IiwicGRhdGFPbGQiLCJwZGF0YUN1ciIsInVkYXRhT2xkIiwidWRhdGFDdXIiLCJmaXhJbnB1dCIsImRvbU1hbmlwIiwiY29sbGVjdGlvbiIsImhhc1NjcmlwdHMiLCJpTm9DbG9uZSIsInZhbHVlSXNGdW5jdGlvbiIsImh0bWwiLCJfZXZhbFVybCIsImtlZXBEYXRhIiwiY2xlYW5EYXRhIiwiZGF0YUFuZEV2ZW50cyIsImRlZXBEYXRhQW5kRXZlbnRzIiwic3JjRWxlbWVudHMiLCJkZXN0RWxlbWVudHMiLCJpblBhZ2UiLCJkZXRhY2giLCJhcHBlbmQiLCJwcmVwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJyZXBsYWNlV2l0aCIsInJlcGxhY2VDaGlsZCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwib3JpZ2luYWwiLCJpbnNlcnQiLCJybnVtbm9ucHgiLCJnZXRTdHlsZXMiLCJvcGVuZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwicmJveFN0eWxlIiwiY3VyQ1NTIiwiY29tcHV0ZWQiLCJ3aWR0aCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicGl4ZWxCb3hTdHlsZXMiLCJhZGRHZXRIb29rSWYiLCJjb25kaXRpb25GbiIsImhvb2tGbiIsImNvbXB1dGVTdHlsZVRlc3RzIiwiY29udGFpbmVyIiwiY3NzVGV4dCIsImRpdlN0eWxlIiwicGl4ZWxQb3NpdGlvblZhbCIsInJlbGlhYmxlTWFyZ2luTGVmdFZhbCIsInJvdW5kUGl4ZWxNZWFzdXJlcyIsIm1hcmdpbkxlZnQiLCJyaWdodCIsInBpeGVsQm94U3R5bGVzVmFsIiwiYm94U2l6aW5nUmVsaWFibGVWYWwiLCJwb3NpdGlvbiIsInNjcm9sbGJveFNpemVWYWwiLCJvZmZzZXRXaWR0aCIsIm1lYXN1cmUiLCJyb3VuZCIsInBhcnNlRmxvYXQiLCJiYWNrZ3JvdW5kQ2xpcCIsImNsZWFyQ2xvbmVTdHlsZSIsImJveFNpemluZ1JlbGlhYmxlIiwicGl4ZWxQb3NpdGlvbiIsInJlbGlhYmxlTWFyZ2luTGVmdCIsInNjcm9sbGJveFNpemUiLCJjc3NQcmVmaXhlcyIsImVtcHR5U3R5bGUiLCJ2ZW5kb3JQcm9wcyIsImZpbmFsUHJvcE5hbWUiLCJmaW5hbCIsImNzc1Byb3BzIiwiY2FwTmFtZSIsInZlbmRvclByb3BOYW1lIiwicmRpc3BsYXlzd2FwIiwicmN1c3RvbVByb3AiLCJjc3NTaG93IiwidmlzaWJpbGl0eSIsImNzc05vcm1hbFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0Iiwic2V0UG9zaXRpdmVOdW1iZXIiLCJzdWJ0cmFjdCIsIm1heCIsImJveE1vZGVsQWRqdXN0bWVudCIsImRpbWVuc2lvbiIsImJveCIsImlzQm9yZGVyQm94Iiwic3R5bGVzIiwiY29tcHV0ZWRWYWwiLCJleHRyYSIsImRlbHRhIiwiY2VpbCIsImdldFdpZHRoT3JIZWlnaHQiLCJ2YWx1ZUlzQm9yZGVyQm94Iiwib2Zmc2V0UHJvcCIsImdldENsaWVudFJlY3RzIiwiVHdlZW4iLCJlYXNpbmciLCJjc3NIb29rcyIsIm9wYWNpdHkiLCJvcmlnTmFtZSIsImlzQ3VzdG9tUHJvcCIsInNldFByb3BlcnR5IiwiaXNGaW5pdGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxib3hTaXplQnVnZ3kiLCJsZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsInByZWZpeCIsInN1ZmZpeCIsImV4cGFuZCIsImV4cGFuZGVkIiwicGFydHMiLCJwcm9wSG9va3MiLCJydW4iLCJwZXJjZW50IiwiZWFzZWQiLCJkdXJhdGlvbiIsInBvcyIsInN0ZXAiLCJmeCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJsaW5lYXIiLCJzd2luZyIsImNvcyIsIlBJIiwiZnhOb3ciLCJpblByb2dyZXNzIiwicmZ4dHlwZXMiLCJycnVuIiwic2NoZWR1bGUiLCJoaWRkZW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnRlcnZhbCIsInRpY2siLCJjcmVhdGVGeE5vdyIsImdlbkZ4IiwiaW5jbHVkZVdpZHRoIiwiaGVpZ2h0IiwiY3JlYXRlVHdlZW4iLCJhbmltYXRpb24iLCJBbmltYXRpb24iLCJ0d2VlbmVycyIsInByb3BlcnRpZXMiLCJzdG9wcGVkIiwicHJlZmlsdGVycyIsImN1cnJlbnRUaW1lIiwic3RhcnRUaW1lIiwidHdlZW5zIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJnb3RvRW5kIiwicHJvcEZpbHRlciIsImNvbXBsZXRlIiwidGltZXIiLCJhbmltIiwidHdlZW5lciIsIm9sZGZpcmUiLCJwcm9wVHdlZW4iLCJyZXN0b3JlRGlzcGxheSIsImlzQm94IiwiZGF0YVNob3ciLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlZmlsdGVyIiwic3BlZWQiLCJvcHQiLCJzcGVlZHMiLCJmYWRlVG8iLCJ0byIsImFuaW1hdGUiLCJvcHRhbGwiLCJkb0FuaW1hdGlvbiIsImZpbmlzaCIsInN0b3BRdWV1ZSIsInRpbWVycyIsImNzc0ZuIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwidGltZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjaGVja09uIiwib3B0U2VsZWN0ZWQiLCJyYWRpb1ZhbHVlIiwiYm9vbEhvb2siLCJyZW1vdmVBdHRyIiwiblR5cGUiLCJhdHRySG9va3MiLCJib29sIiwiYXR0ck5hbWVzIiwibG93ZXJjYXNlTmFtZSIsInJmb2N1c2FibGUiLCJyY2xpY2thYmxlIiwic3RyaXBBbmRDb2xsYXBzZSIsImdldENsYXNzIiwiY2xhc3Nlc1RvQXJyYXkiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsInRhYmluZGV4IiwicGFyc2VJbnQiLCJhZGRDbGFzcyIsImNsYXNzZXMiLCJjdXJWYWx1ZSIsImNsYXp6IiwiZmluYWxWYWx1ZSIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJzdGF0ZVZhbCIsImlzVmFsaWRWYWx1ZSIsImNsYXNzTmFtZXMiLCJoYXNDbGFzcyIsInJyZXR1cm4iLCJ2YWxIb29rcyIsIm9wdGlvblNldCIsImZvY3VzaW4iLCJyZm9jdXNNb3JwaCIsInN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrIiwib25seUhhbmRsZXJzIiwiYnViYmxlVHlwZSIsIm9udHlwZSIsImxhc3RFbGVtZW50IiwiZXZlbnRQYXRoIiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsImF0dGFjaGVzIiwicnF1ZXJ5IiwicGFyc2VYTUwiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJyYnJhY2tldCIsInJDUkxGIiwicnN1Ym1pdHRlclR5cGVzIiwicnN1Ym1pdHRhYmxlIiwiYnVpbGRQYXJhbXMiLCJ0cmFkaXRpb25hbCIsInBhcmFtIiwidmFsdWVPckZ1bmN0aW9uIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJyMjAiLCJyaGFzaCIsInJhbnRpQ2FjaGUiLCJyaGVhZGVycyIsInJub0NvbnRlbnQiLCJycHJvdG9jb2wiLCJ0cmFuc3BvcnRzIiwiYWxsVHlwZXMiLCJvcmlnaW5BbmNob3IiLCJhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMiLCJzdHJ1Y3R1cmUiLCJkYXRhVHlwZUV4cHJlc3Npb24iLCJkYXRhVHlwZSIsImRhdGFUeXBlcyIsImluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzIiwianFYSFIiLCJpbnNwZWN0ZWQiLCJzZWVraW5nVHJhbnNwb3J0IiwiaW5zcGVjdCIsInByZWZpbHRlck9yRmFjdG9yeSIsImRhdGFUeXBlT3JUcmFuc3BvcnQiLCJhamF4RXh0ZW5kIiwiZmxhdE9wdGlvbnMiLCJhamF4U2V0dGluZ3MiLCJhY3RpdmUiLCJsYXN0TW9kaWZpZWQiLCJldGFnIiwidXJsIiwiaXNMb2NhbCIsInByb3RvY29sIiwicHJvY2Vzc0RhdGEiLCJhc3luYyIsImNvbnRlbnRUeXBlIiwiYWNjZXB0cyIsImpzb24iLCJyZXNwb25zZUZpZWxkcyIsImNvbnZlcnRlcnMiLCJhamF4U2V0dXAiLCJzZXR0aW5ncyIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInRyYW5zcG9ydCIsImNhY2hlVVJMIiwicmVzcG9uc2VIZWFkZXJzU3RyaW5nIiwicmVzcG9uc2VIZWFkZXJzIiwidGltZW91dFRpbWVyIiwidXJsQW5jaG9yIiwiZmlyZUdsb2JhbHMiLCJ1bmNhY2hlZCIsImNhbGxiYWNrQ29udGV4dCIsImdsb2JhbEV2ZW50Q29udGV4dCIsImNvbXBsZXRlRGVmZXJyZWQiLCJzdGF0dXNDb2RlIiwicmVxdWVzdEhlYWRlcnMiLCJyZXF1ZXN0SGVhZGVyc05hbWVzIiwic3RyQWJvcnQiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwibWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsInN0YXR1c1RleHQiLCJmaW5hbFRleHQiLCJjcm9zc0RvbWFpbiIsImhvc3QiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInNlbmQiLCJuYXRpdmVTdGF0dXNUZXh0IiwicmVzcG9uc2VzIiwiaXNTdWNjZXNzIiwicmVzcG9uc2UiLCJtb2RpZmllZCIsImN0IiwiZmluYWxEYXRhVHlwZSIsImZpcnN0RGF0YVR5cGUiLCJhamF4SGFuZGxlUmVzcG9uc2VzIiwiY29udjIiLCJjdXJyZW50IiwiY29udiIsImRhdGFGaWx0ZXIiLCJ0aHJvd3MiLCJhamF4Q29udmVydCIsImdldEpTT04iLCJnZXRTY3JpcHQiLCJ3cmFwQWxsIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ3cmFwSW5uZXIiLCJodG1sSXNGdW5jdGlvbiIsInVud3JhcCIsInZpc2libGUiLCJvZmZzZXRIZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInhoclN1Y2Nlc3NTdGF0dXMiLCIwIiwiMTIyMyIsInhoclN1cHBvcnRlZCIsImNvcnMiLCJlcnJvckNhbGxiYWNrIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJzY3JpcHRBdHRycyIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiZXZ0Iiwib2xkQ2FsbGJhY2tzIiwicmpzb25wIiwianNvbnAiLCJqc29ucENhbGxiYWNrIiwib3JpZ2luYWxTZXR0aW5ncyIsImNhbGxiYWNrTmFtZSIsIm92ZXJ3cml0dGVuIiwicmVzcG9uc2VDb250YWluZXIiLCJqc29uUHJvcCIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImltcGxlbWVudGF0aW9uIiwia2VlcFNjcmlwdHMiLCJwYXJzZWQiLCJwYXJhbXMiLCJhbmltYXRlZCIsIm9mZnNldCIsInNldE9mZnNldCIsImN1clBvc2l0aW9uIiwiY3VyTGVmdCIsImN1ckNTU1RvcCIsImN1clRvcCIsImN1ck9mZnNldCIsImN1ckNTU0xlZnQiLCJjdXJFbGVtIiwidXNpbmciLCJyZWN0Iiwid2luIiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInBhcmVudE9mZnNldCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJkZWZhdWx0RXh0cmEiLCJmdW5jTmFtZSIsImhvdmVyIiwiZm5PdmVyIiwiZm5PdXQiLCJ1bmJpbmQiLCJkZWxlZ2F0ZSIsInVuZGVsZWdhdGUiLCJwcm94eSIsImhvbGRSZWFkeSIsImhvbGQiLCJwYXJzZUpTT04iLCJpc051bWVyaWMiLCJpc05hTiIsIl9qUXVlcnkiLCJfJCIsIiQiLCJub0NvbmZsaWN0IiwibG9nIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLGtCQ2xGckQ7Ozs7Ozs7Ozs7Ozs7SUFhQSxTQUFZQyxFQUFRQyxHQUVuQixhQUU2RCxpQkFBbkJsQyxFQUFPRCxRQVNoREMsRUFBT0QsUUFBVWtDLEVBQU9FLFNBQ3ZCRCxFQUFTRCxHQUFRLEdBQ2pCLFNBQVVHLEdBQ1QsSUFBTUEsRUFBRUQsU0FDUCxNQUFNLElBQUlFLE1BQU8sNENBRWxCLE9BQU9ILEVBQVNFLElBR2xCRixFQUFTRCxHQXRCWCxDQTBCdUIsb0JBQVhLLE9BQXlCQSxPQUFTQyxLQUFNLFNBQVVELEVBQVFFLEdBTXRFLGFBRUEsSUFBSUMsRUFBTSxHQUVOTixFQUFXRyxFQUFPSCxTQUVsQk8sRUFBVy9CLE9BQU9nQyxlQUVsQkMsRUFBUUgsRUFBSUcsTUFFWkMsRUFBU0osRUFBSUksT0FFYkMsRUFBT0wsRUFBSUssS0FFWEMsRUFBVU4sRUFBSU0sUUFFZEMsRUFBYSxHQUViQyxFQUFXRCxFQUFXQyxTQUV0QkMsRUFBU0YsRUFBV2xCLGVBRXBCcUIsRUFBYUQsRUFBT0QsU0FFcEJHLEVBQXVCRCxFQUFXL0MsS0FBTU8sUUFFeEMwQyxFQUFVLEdBRVZDLEVBQWEsU0FBcUJDLEdBTWhDLE1BQXNCLG1CQUFSQSxHQUE4QyxpQkFBakJBLEVBQUlDLFVBSWpEQyxFQUFXLFNBQW1CRixHQUNoQyxPQUFjLE1BQVBBLEdBQWVBLElBQVFBLEVBQUlqQixRQU0vQm9CLEVBQTRCLENBQy9CQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsT0FBTyxFQUNQQyxVQUFVLEdBR1gsU0FBU0MsRUFBU0MsRUFBTUMsRUFBTUMsR0FHN0IsSUFBSWpFLEVBQUdrRSxFQUNOQyxHQUhERixFQUFNQSxHQUFPL0IsR0FHQ2tDLGNBQWUsVUFHN0IsR0FEQUQsRUFBT0UsS0FBT04sRUFDVEMsRUFDSixJQUFNaEUsS0FBS3lELEdBWVZTLEVBQU1GLEVBQU1oRSxJQUFPZ0UsRUFBS00sY0FBZ0JOLEVBQUtNLGFBQWN0RSxLQUUxRG1FLEVBQU9JLGFBQWN2RSxFQUFHa0UsR0FJM0JELEVBQUlPLEtBQUtDLFlBQWFOLEdBQVNPLFdBQVdDLFlBQWFSLEdBSXpELFNBQVNTLEVBQVF0QixHQUNoQixPQUFZLE1BQVBBLEVBQ0dBLEVBQU0sR0FJUSxpQkFBUkEsR0FBbUMsbUJBQVJBLEVBQ3hDUCxFQUFZQyxFQUFTN0MsS0FBTW1ELEtBQVcsZ0JBQy9CQSxFQVFULElBSUN1QixFQUFTLFNBQVVDLEVBQVVDLEdBSTVCLE9BQU8sSUFBSUYsRUFBT0csR0FBR0MsS0FBTUgsRUFBVUMsSUFLdENHLEVBQVEscUNBbVZULFNBQVNDLEVBQWE3QixHQU1yQixJQUFJOEIsSUFBVzlCLEdBQU8sV0FBWUEsR0FBT0EsRUFBSThCLE9BQzVDMUIsRUFBT2tCLEVBQVF0QixHQUVoQixPQUFLRCxFQUFZQyxLQUFTRSxFQUFVRixLQUlwQixVQUFUSSxHQUErQixJQUFYMEIsR0FDUixpQkFBWEEsR0FBdUJBLEVBQVMsR0FBT0EsRUFBUyxLQUFPOUIsR0EvVmhFdUIsRUFBT0csR0FBS0gsRUFBT2pELFVBQVksQ0FHOUJ5RCxPQWpCVSxRQW1CVkMsWUFBYVQsRUFHYk8sT0FBUSxFQUVSRyxRQUFTLFdBQ1IsT0FBTzVDLEVBQU14QyxLQUFNbUMsT0FLcEJ6QixJQUFLLFNBQVUyRSxHQUdkLE9BQVksTUFBUEEsRUFDRzdDLEVBQU14QyxLQUFNbUMsTUFJYmtELEVBQU0sRUFBSWxELEtBQU1rRCxFQUFNbEQsS0FBSzhDLFFBQVc5QyxLQUFNa0QsSUFLcERDLFVBQVcsU0FBVUMsR0FHcEIsSUFBSUMsRUFBTWQsRUFBT2UsTUFBT3RELEtBQUtnRCxjQUFlSSxHQU01QyxPQUhBQyxFQUFJRSxXQUFhdkQsS0FHVnFELEdBSVJHLEtBQU0sU0FBVUMsR0FDZixPQUFPbEIsRUFBT2lCLEtBQU14RCxLQUFNeUQsSUFHM0JDLElBQUssU0FBVUQsR0FDZCxPQUFPekQsS0FBS21ELFVBQVdaLEVBQU9tQixJQUFLMUQsS0FBTSxTQUFVMkQsRUFBTWpHLEdBQ3hELE9BQU8rRixFQUFTNUYsS0FBTThGLEVBQU1qRyxFQUFHaUcsT0FJakN0RCxNQUFPLFdBQ04sT0FBT0wsS0FBS21ELFVBQVc5QyxFQUFNdUQsTUFBTzVELEtBQU02RCxhQUczQ0MsTUFBTyxXQUNOLE9BQU85RCxLQUFLK0QsR0FBSSxJQUdqQkMsS0FBTSxXQUNMLE9BQU9oRSxLQUFLK0QsSUFBSyxJQUdsQkEsR0FBSSxTQUFVckcsR0FDYixJQUFJdUcsRUFBTWpFLEtBQUs4QyxPQUNkb0IsR0FBS3hHLEdBQU1BLEVBQUksRUFBSXVHLEVBQU0sR0FDMUIsT0FBT2pFLEtBQUttRCxVQUFXZSxHQUFLLEdBQUtBLEVBQUlELEVBQU0sQ0FBRWpFLEtBQU1rRSxJQUFRLEtBRzVEQyxJQUFLLFdBQ0osT0FBT25FLEtBQUt1RCxZQUFjdkQsS0FBS2dELGVBS2hDekMsS0FBTUEsRUFDTjZELEtBQU1sRSxFQUFJa0UsS0FDVkMsT0FBUW5FLEVBQUltRSxRQUdiOUIsRUFBTytCLE9BQVMvQixFQUFPRyxHQUFHNEIsT0FBUyxXQUNsQyxJQUFJQyxFQUFTdEcsRUFBTW9ELEVBQUttRCxFQUFNQyxFQUFhQyxFQUMxQ0MsRUFBU2QsVUFBVyxJQUFPLEdBQzNCbkcsRUFBSSxFQUNKb0YsRUFBU2UsVUFBVWYsT0FDbkI4QixHQUFPLEVBc0JSLElBbkJ1QixrQkFBWEQsSUFDWEMsRUFBT0QsRUFHUEEsRUFBU2QsVUFBV25HLElBQU8sR0FDM0JBLEtBSXNCLGlCQUFYaUgsR0FBd0I1RCxFQUFZNEQsS0FDL0NBLEVBQVMsSUFJTGpILElBQU1vRixJQUNWNkIsRUFBUzNFLEtBQ1R0QyxLQUdPQSxFQUFJb0YsRUFBUXBGLElBR25CLEdBQXFDLE9BQTlCNkcsRUFBVVYsVUFBV25HLElBRzNCLElBQU1PLEtBQVFzRyxFQUNiQyxFQUFPRCxFQUFTdEcsR0FJRixjQUFUQSxHQUF3QjBHLElBQVdILElBS25DSSxHQUFRSixJQUFVakMsRUFBT3NDLGNBQWVMLEtBQzFDQyxFQUFjSyxNQUFNQyxRQUFTUCxNQUMvQm5ELEVBQU1zRCxFQUFRMUcsR0FJYnlHLEVBRElELElBQWdCSyxNQUFNQyxRQUFTMUQsR0FDM0IsR0FDSW9ELEdBQWdCbEMsRUFBT3NDLGNBQWV4RCxHQUcxQ0EsRUFGQSxHQUlUb0QsR0FBYyxFQUdkRSxFQUFRMUcsR0FBU3NFLEVBQU8rQixPQUFRTSxFQUFNRixFQUFPRixTQUd6QlEsSUFBVFIsSUFDWEcsRUFBUTFHLEdBQVN1RyxJQU9yQixPQUFPRyxHQUdScEMsRUFBTytCLE9BQVEsQ0FHZFcsUUFBUyxVQTFLQyxRQTBLc0JDLEtBQUtDLFVBQVdDLFFBQVMsTUFBTyxJQUdoRUMsU0FBUyxFQUVUQyxNQUFPLFNBQVVDLEdBQ2hCLE1BQU0sSUFBSXpGLE1BQU95RixJQUdsQkMsS0FBTSxhQUVOWCxjQUFlLFNBQVU3RCxHQUN4QixJQUFJeUUsRUFBT0MsRUFJWCxTQUFNMUUsR0FBZ0Msb0JBQXpCTixFQUFTN0MsS0FBTW1ELFFBSTVCeUUsRUFBUXRGLEVBQVVhLEtBU0ssbUJBRHZCMEUsRUFBTy9FLEVBQU85QyxLQUFNNEgsRUFBTyxnQkFBbUJBLEVBQU16QyxjQUNmcEMsRUFBVy9DLEtBQU02SCxLQUFXN0UsSUFHbEU4RSxjQUFlLFNBQVUzRSxHQUN4QixJQUFJL0MsRUFFSixJQUFNQSxLQUFRK0MsRUFDYixPQUFPLEVBRVIsT0FBTyxHQUlSNEUsV0FBWSxTQUFVbkUsRUFBTThDLEdBQzNCL0MsRUFBU0MsRUFBTSxDQUFFSCxNQUFPaUQsR0FBV0EsRUFBUWpELFNBRzVDa0MsS0FBTSxTQUFVeEMsRUFBS3lDLEdBQ3BCLElBQUlYLEVBQVFwRixFQUFJLEVBRWhCLEdBQUttRixFQUFhN0IsR0FFakIsSUFEQThCLEVBQVM5QixFQUFJOEIsT0FDTHBGLEVBQUlvRixJQUNxQyxJQUEzQ1csRUFBUzVGLEtBQU1tRCxFQUFLdEQsR0FBS0EsRUFBR3NELEVBQUt0RCxJQURuQkEsVUFNcEIsSUFBTUEsS0FBS3NELEVBQ1YsSUFBZ0QsSUFBM0N5QyxFQUFTNUYsS0FBTW1ELEVBQUt0RCxHQUFLQSxFQUFHc0QsRUFBS3RELElBQ3JDLE1BS0gsT0FBT3NELEdBSVI2RSxLQUFNLFNBQVU5RCxHQUNmLE9BQWUsTUFBUkEsRUFDTixJQUNFQSxFQUFPLElBQUtxRCxRQUFTeEMsRUFBTyxLQUloQ2tELFVBQVcsU0FBVTVGLEVBQUs2RixHQUN6QixJQUFJMUMsRUFBTTBDLEdBQVcsR0FhckIsT0FYWSxNQUFQN0YsSUFDQzJDLEVBQWF6RSxPQUFROEIsSUFDekJxQyxFQUFPZSxNQUFPRCxFQUNFLGlCQUFSbkQsRUFDUCxDQUFFQSxHQUFRQSxHQUdYSyxFQUFLMUMsS0FBTXdGLEVBQUtuRCxJQUlYbUQsR0FHUjJDLFFBQVMsU0FBVXJDLEVBQU16RCxFQUFLeEMsR0FDN0IsT0FBYyxNQUFQd0MsR0FBZSxFQUFJTSxFQUFRM0MsS0FBTXFDLEVBQUt5RCxFQUFNakcsSUFLcEQ0RixNQUFPLFNBQVVRLEVBQU9tQyxHQUt2QixJQUpBLElBQUloQyxHQUFPZ0MsRUFBT25ELE9BQ2pCb0IsRUFBSSxFQUNKeEcsRUFBSW9HLEVBQU1oQixPQUVIb0IsRUFBSUQsRUFBS0MsSUFDaEJKLEVBQU9wRyxLQUFRdUksRUFBUS9CLEdBS3hCLE9BRkFKLEVBQU1oQixPQUFTcEYsRUFFUm9HLEdBR1JvQyxLQUFNLFNBQVU5QyxFQUFPSyxFQUFVMEMsR0FTaEMsSUFSQSxJQUNDQyxFQUFVLEdBQ1YxSSxFQUFJLEVBQ0pvRixFQUFTTSxFQUFNTixPQUNmdUQsR0FBa0JGLEVBSVh6SSxFQUFJb0YsRUFBUXBGLEtBQ0ErRixFQUFVTCxFQUFPMUYsR0FBS0EsS0FDaEIySSxHQUN4QkQsRUFBUTdGLEtBQU02QyxFQUFPMUYsSUFJdkIsT0FBTzBJLEdBSVIxQyxJQUFLLFNBQVVOLEVBQU9LLEVBQVU2QyxHQUMvQixJQUFJeEQsRUFBUW5FLEVBQ1hqQixFQUFJLEVBQ0oyRixFQUFNLEdBR1AsR0FBS1IsRUFBYU8sR0FFakIsSUFEQU4sRUFBU00sRUFBTU4sT0FDUHBGLEVBQUlvRixFQUFRcEYsSUFHTCxPQUZkaUIsRUFBUThFLEVBQVVMLEVBQU8xRixHQUFLQSxFQUFHNEksS0FHaENqRCxFQUFJOUMsS0FBTTVCLFFBTVosSUFBTWpCLEtBQUswRixFQUdJLE9BRmR6RSxFQUFROEUsRUFBVUwsRUFBTzFGLEdBQUtBLEVBQUc0SSxLQUdoQ2pELEVBQUk5QyxLQUFNNUIsR0FNYixPQUFPMkIsRUFBT3NELE1BQU8sR0FBSVAsSUFJMUJrRCxLQUFNLEVBSU56RixRQUFTQSxJQUdhLG1CQUFYckMsU0FDWDhELEVBQU9HLEdBQUlqRSxPQUFPK0gsVUFBYXRHLEVBQUt6QixPQUFPK0gsV0FJNUNqRSxFQUFPaUIsS0FBTSx1RUFBdUVpRCxNQUFPLEtBQzNGLFNBQVUvSSxFQUFHTyxHQUNad0MsRUFBWSxXQUFheEMsRUFBTyxLQUFRQSxFQUFLeUksZ0JBbUI5QyxJQUFJQzs7Ozs7Ozs7Ozs7QUFXSixTQUFXNUcsR0FFWCxJQUFJckMsRUFDSG9ELEVBQ0E4RixFQUNBQyxFQUNBQyxFQUNBQyxFQUNBQyxFQUNBQyxFQUNBQyxFQUNBQyxFQUNBQyxFQUdBQyxFQUNBekgsRUFDQTBILEVBQ0FDLEVBQ0FDLEVBQ0FDLEVBQ0FyQixFQUNBc0IsRUFHQXpDLEVBQVUsU0FBVyxFQUFJLElBQUkwQyxLQUM3QkMsRUFBZTdILEVBQU9ILFNBQ3RCaUksRUFBVSxFQUNWQyxFQUFPLEVBQ1BDLEVBQWFDLEtBQ2JDLEVBQWFELEtBQ2JFLEVBQWdCRixLQUNoQkcsRUFBeUJILEtBQ3pCSSxFQUFZLFNBQVVDLEVBQUdDLEdBSXhCLE9BSEtELElBQU1DLElBQ1ZsQixHQUFlLEdBRVQsR0FJUnpHLEVBQVMsR0FBS3BCLGVBQ2RXLEVBQU0sR0FDTnFJLEVBQU1ySSxFQUFJcUksSUFDVkMsRUFBY3RJLEVBQUlLLEtBQ2xCQSxFQUFPTCxFQUFJSyxLQUNYRixFQUFRSCxFQUFJRyxNQUdaRyxFQUFVLFNBQVVpSSxFQUFNOUUsR0FHekIsSUFGQSxJQUFJakcsRUFBSSxFQUNQdUcsRUFBTXdFLEVBQUszRixPQUNKcEYsRUFBSXVHLEVBQUt2RyxJQUNoQixHQUFLK0ssRUFBSy9LLEtBQU9pRyxFQUNoQixPQUFPakcsRUFHVCxPQUFRLEdBR1RnTCxFQUFXLDZIQUtYQyxFQUFhLHNCQUdiQyxFQUFhLGdDQUdiQyxFQUFhLE1BQVFGLEVBQWEsS0FBT0MsRUFBYSxPQUFTRCxFQUU5RCxnQkFBa0JBLEVBRWxCLDJEQUE2REMsRUFBYSxPQUFTRCxFQUNuRixPQUVERyxFQUFVLEtBQU9GLEVBQWEsd0ZBS0FDLEVBQWEsZUFNM0NFLEVBQWMsSUFBSUMsT0FBUUwsRUFBYSxJQUFLLEtBQzVDL0YsRUFBUSxJQUFJb0csT0FBUSxJQUFNTCxFQUFhLDhCQUFnQ0EsRUFBYSxLQUFNLEtBRTFGTSxFQUFTLElBQUlELE9BQVEsSUFBTUwsRUFBYSxLQUFPQSxFQUFhLEtBQzVETyxFQUFlLElBQUlGLE9BQVEsSUFBTUwsRUFBYSxXQUFhQSxFQUFhLElBQU1BLEVBQWEsS0FDM0ZRLEVBQVcsSUFBSUgsT0FBUUwsRUFBYSxNQUVwQ1MsRUFBVSxJQUFJSixPQUFRRixHQUN0Qk8sRUFBYyxJQUFJTCxPQUFRLElBQU1KLEVBQWEsS0FFN0NVLEVBQVksQ0FDWCxHQUFNLElBQUlOLE9BQVEsTUFBUUosRUFBYSxLQUN2QyxNQUFTLElBQUlJLE9BQVEsUUFBVUosRUFBYSxLQUM1QyxJQUFPLElBQUlJLE9BQVEsS0FBT0osRUFBYSxTQUN2QyxLQUFRLElBQUlJLE9BQVEsSUFBTUgsR0FDMUIsT0FBVSxJQUFJRyxPQUFRLElBQU1GLEdBQzVCLE1BQVMsSUFBSUUsT0FBUSx5REFBMkRMLEVBQy9FLCtCQUFpQ0EsRUFBYSxjQUFnQkEsRUFDOUQsYUFBZUEsRUFBYSxTQUFVLEtBQ3ZDLEtBQVEsSUFBSUssT0FBUSxPQUFTTixFQUFXLEtBQU0sS0FHOUMsYUFBZ0IsSUFBSU0sT0FBUSxJQUFNTCxFQUFhLG1EQUM5Q0EsRUFBYSxtQkFBcUJBLEVBQWEsbUJBQW9CLE1BR3JFWSxFQUFRLFNBQ1JDLEVBQVUsc0NBQ1ZDLEVBQVUsU0FFVkMsRUFBVSx5QkFHVkMsRUFBYSxtQ0FFYkMsR0FBVyxPQUlYQyxHQUFZLElBQUliLE9BQVEscUJBQXVCTCxFQUFhLE1BQVFBLEVBQWEsT0FBUSxNQUN6Rm1CLEdBQVksU0FBVUMsRUFBR0MsRUFBU0MsR0FDakMsSUFBSUMsRUFBTyxLQUFPRixFQUFVLE1BSTVCLE9BQU9FLEdBQVNBLEdBQVFELEVBQ3ZCRCxFQUNBRSxFQUFPLEVBRU5DLE9BQU9DLGFBQWNGLEVBQU8sT0FFNUJDLE9BQU9DLGFBQWNGLEdBQVEsR0FBSyxNQUFlLEtBQVBBLEVBQWUsUUFLNURHLEdBQWEsc0RBQ2JDLEdBQWEsU0FBVUMsRUFBSUMsR0FDMUIsT0FBS0EsRUFHUSxPQUFQRCxFQUNHLElBSURBLEVBQUdsSyxNQUFPLEdBQUksR0FBTSxLQUFPa0ssRUFBR0UsV0FBWUYsRUFBR3pILE9BQVMsR0FBSXBDLFNBQVUsSUFBTyxJQUk1RSxLQUFPNkosR0FPZkcsR0FBZ0IsV0FDZnJELEtBR0RzRCxHQUFxQkMsR0FDcEIsU0FBVWpILEdBQ1QsT0FBeUIsSUFBbEJBLEVBQUtrSCxVQUFxRCxhQUFoQ2xILEVBQUttSCxTQUFTcEUsZUFFaEQsQ0FBRXFFLElBQUssYUFBY0MsS0FBTSxXQUk3QixJQUNDekssRUFBS3FELE1BQ0gxRCxFQUFNRyxFQUFNeEMsS0FBTStKLEVBQWFxRCxZQUNoQ3JELEVBQWFxRCxZQUlkL0ssRUFBSzBILEVBQWFxRCxXQUFXbkksUUFBUzdCLFNBQ3JDLE1BQVFpSyxHQUNUM0ssRUFBTyxDQUFFcUQsTUFBTzFELEVBQUk0QyxPQUduQixTQUFVNkIsRUFBUXdHLEdBQ2pCM0MsRUFBWTVFLE1BQU9lLEVBQVF0RSxFQUFNeEMsS0FBS3NOLEtBS3ZDLFNBQVV4RyxFQUFRd0csR0FJakIsSUFIQSxJQUFJakgsRUFBSVMsRUFBTzdCLE9BQ2RwRixFQUFJLEVBRUlpSCxFQUFPVCxLQUFPaUgsRUFBSXpOLE9BQzNCaUgsRUFBTzdCLE9BQVNvQixFQUFJLElBS3ZCLFNBQVN5QyxHQUFRbkUsRUFBVUMsRUFBU3NELEVBQVNxRixHQUM1QyxJQUFJdE4sRUFBR0osRUFBR2lHLEVBQU0wSCxFQUFLQyxFQUFPQyxFQUFRQyxFQUNuQ0MsRUFBYWhKLEdBQVdBLEVBQVFpSixjQUdoQ3pLLEVBQVd3QixFQUFVQSxFQUFReEIsU0FBVyxFQUt6QyxHQUhBOEUsRUFBVUEsR0FBVyxHQUdJLGlCQUFidkQsSUFBMEJBLEdBQ3hCLElBQWJ2QixHQUErQixJQUFiQSxHQUErQixLQUFiQSxFQUVwQyxPQUFPOEUsRUFJUixJQUFNcUYsS0FFRTNJLEVBQVVBLEVBQVFpSixlQUFpQmpKLEVBQVVtRixLQUFtQmhJLEdBQ3RFeUgsRUFBYTVFLEdBRWRBLEVBQVVBLEdBQVc3QyxFQUVoQjJILEdBQWlCLENBSXJCLEdBQWtCLEtBQWJ0RyxJQUFvQnFLLEVBQVEzQixFQUFXZ0MsS0FBTW5KLElBR2pELEdBQU0xRSxFQUFJd04sRUFBTSxJQUdmLEdBQWtCLElBQWJySyxFQUFpQixDQUNyQixLQUFNMEMsRUFBT2xCLEVBQVFtSixlQUFnQjlOLElBVXBDLE9BQU9pSSxFQUxQLEdBQUtwQyxFQUFLa0ksS0FBTy9OLEVBRWhCLE9BREFpSSxFQUFReEYsS0FBTW9ELEdBQ1BvQyxPQVlULEdBQUswRixJQUFlOUgsRUFBTzhILEVBQVdHLGVBQWdCOU4sS0FDckQ0SixFQUFVakYsRUFBU2tCLElBQ25CQSxFQUFLa0ksS0FBTy9OLEVBR1osT0FEQWlJLEVBQVF4RixLQUFNb0QsR0FDUG9DLE1BS0gsSUFBS3VGLEVBQU0sR0FFakIsT0FEQS9LLEVBQUtxRCxNQUFPbUMsRUFBU3RELEVBQVFxSixxQkFBc0J0SixJQUM1Q3VELEVBR0QsSUFBTWpJLEVBQUl3TixFQUFNLEtBQU94SyxFQUFRaUwsd0JBQ3JDdEosRUFBUXNKLHVCQUdSLE9BREF4TCxFQUFLcUQsTUFBT21DLEVBQVN0RCxFQUFRc0osdUJBQXdCak8sSUFDOUNpSSxFQUtULEdBQUtqRixFQUFRa0wsTUFDWDdELEVBQXdCM0YsRUFBVyxRQUNsQ2dGLElBQWNBLEVBQVV5RSxLQUFNekosTUFJbEIsSUFBYnZCLEdBQXFELFdBQW5Dd0IsRUFBUXFJLFNBQVNwRSxlQUE4QixDQVVsRSxHQVJBOEUsRUFBY2hKLEVBQ2RpSixFQUFhaEosRUFPSyxJQUFieEIsR0FBa0JrSSxFQUFTOEMsS0FBTXpKLEdBQWEsQ0FZbEQsS0FUTTZJLEVBQU01SSxFQUFRVCxhQUFjLE9BQ2pDcUosRUFBTUEsRUFBSWpHLFFBQVNpRixHQUFZQyxJQUUvQjdILEVBQVFSLGFBQWMsS0FBT29KLEVBQU1wRyxHQUtwQ3ZILEdBREE2TixFQUFTeEUsRUFBVXZFLElBQ1JNLE9BQ0hwRixLQUNQNk4sRUFBTzdOLEdBQUssSUFBTTJOLEVBQU0sSUFBTWEsR0FBWVgsRUFBTzdOLElBRWxEOE4sRUFBY0QsRUFBT1ksS0FBTSxLQUczQlYsRUFBYTdCLEdBQVNxQyxLQUFNekosSUFBYzRKLEdBQWEzSixFQUFRTCxhQUM5REssRUFHRixJQUlDLE9BSEFsQyxFQUFLcUQsTUFBT21DLEVBQ1gwRixFQUFXWSxpQkFBa0JiLElBRXZCekYsRUFDTixNQUFRdUcsR0FDVG5FLEVBQXdCM0YsR0FBVSxHQUNqQyxRQUNJNkksSUFBUXBHLEdBQ1p4QyxFQUFROEosZ0JBQWlCLFFBUTlCLE9BQU90RixFQUFRekUsRUFBUzRDLFFBQVN4QyxFQUFPLE1BQVFILEVBQVNzRCxFQUFTcUYsR0FTbkUsU0FBU3BELEtBQ1IsSUFBSXdFLEVBQU8sR0FVWCxPQVJBLFNBQVNDLEVBQU94TixFQUFLTixHQU1wQixPQUpLNk4sRUFBS2pNLEtBQU10QixFQUFNLEtBQVEySCxFQUFLOEYsb0JBRTNCRCxFQUFPRCxFQUFLRyxTQUVaRixFQUFPeE4sRUFBTSxLQUFRTixHQVMvQixTQUFTaU8sR0FBY2xLLEdBRXRCLE9BREFBLEVBQUl1QyxJQUFZLEVBQ1R2QyxFQU9SLFNBQVNtSyxHQUFRbkssR0FDaEIsSUFBSW9LLEVBQUtsTixFQUFTa0MsY0FBYyxZQUVoQyxJQUNDLFFBQVNZLEVBQUlvSyxHQUNaLE1BQU81QixHQUNSLE9BQU8sRUFDTixRQUVJNEIsRUFBRzFLLFlBQ1AwSyxFQUFHMUssV0FBV0MsWUFBYXlLLEdBRzVCQSxFQUFLLE1BU1AsU0FBU0MsR0FBV0MsRUFBT0MsR0FJMUIsSUFIQSxJQUFJL00sRUFBTThNLEVBQU12RyxNQUFNLEtBQ3JCL0ksRUFBSXdDLEVBQUk0QyxPQUVEcEYsS0FDUGtKLEVBQUtzRyxXQUFZaE4sRUFBSXhDLElBQU91UCxFQVU5QixTQUFTRSxHQUFjOUUsRUFBR0MsR0FDekIsSUFBSThFLEVBQU05RSxHQUFLRCxFQUNkZ0YsRUFBT0QsR0FBc0IsSUFBZi9FLEVBQUVwSCxVQUFpQyxJQUFmcUgsRUFBRXJILFVBQ25Db0gsRUFBRWlGLFlBQWNoRixFQUFFZ0YsWUFHcEIsR0FBS0QsRUFDSixPQUFPQSxFQUlSLEdBQUtELEVBQ0osS0FBU0EsRUFBTUEsRUFBSUcsYUFDbEIsR0FBS0gsSUFBUTlFLEVBQ1osT0FBUSxFQUtYLE9BQU9ELEVBQUksR0FBSyxFQU9qQixTQUFTbUYsR0FBbUJwTSxHQUMzQixPQUFPLFNBQVV1QyxHQUVoQixNQUFnQixVQURMQSxFQUFLbUgsU0FBU3BFLGVBQ0UvQyxFQUFLdkMsT0FBU0EsR0FRM0MsU0FBU3FNLEdBQW9Cck0sR0FDNUIsT0FBTyxTQUFVdUMsR0FDaEIsSUFBSTFGLEVBQU8wRixFQUFLbUgsU0FBU3BFLGNBQ3pCLE9BQWlCLFVBQVR6SSxHQUE2QixXQUFUQSxJQUFzQjBGLEVBQUt2QyxPQUFTQSxHQVFsRSxTQUFTc00sR0FBc0I3QyxHQUc5QixPQUFPLFNBQVVsSCxHQUtoQixNQUFLLFNBQVVBLEVBU1RBLEVBQUt2QixhQUFnQyxJQUFsQnVCLEVBQUtrSCxTQUd2QixVQUFXbEgsRUFDVixVQUFXQSxFQUFLdkIsV0FDYnVCLEVBQUt2QixXQUFXeUksV0FBYUEsRUFFN0JsSCxFQUFLa0gsV0FBYUEsRUFNcEJsSCxFQUFLZ0ssYUFBZTlDLEdBSTFCbEgsRUFBS2dLLGNBQWdCOUMsR0FDcEJGLEdBQW9CaEgsS0FBV2tILEVBRzNCbEgsRUFBS2tILFdBQWFBLEVBS2QsVUFBV2xILEdBQ2ZBLEVBQUtrSCxXQUFhQSxHQVk1QixTQUFTK0MsR0FBd0JsTCxHQUNoQyxPQUFPa0ssR0FBYSxTQUFVaUIsR0FFN0IsT0FEQUEsR0FBWUEsRUFDTGpCLEdBQWEsU0FBVXhCLEVBQU1oRixHQU1uQyxJQUxBLElBQUlsQyxFQUNINEosRUFBZXBMLEVBQUksR0FBSTBJLEVBQUt0SSxPQUFRK0ssR0FDcENuUSxFQUFJb1EsRUFBYWhMLE9BR1ZwRixLQUNGME4sRUFBT2xILEVBQUk0SixFQUFhcFEsTUFDNUIwTixFQUFLbEgsS0FBT2tDLEVBQVFsQyxHQUFLa0gsRUFBS2xILFNBWW5DLFNBQVNrSSxHQUFhM0osR0FDckIsT0FBT0EsUUFBbUQsSUFBakNBLEVBQVFxSixzQkFBd0NySixFQXVqQzFFLElBQU0vRSxLQW5qQ05vRCxFQUFVNkYsR0FBTzdGLFFBQVUsR0FPM0JnRyxFQUFRSCxHQUFPRyxNQUFRLFNBQVVuRCxHQUNoQyxJQUFJb0ssRUFBWXBLLEVBQUtxSyxhQUNwQjFHLEdBQVczRCxFQUFLK0gsZUFBaUIvSCxHQUFNc0ssZ0JBS3hDLE9BQVExRSxFQUFNMEMsS0FBTThCLEdBQWF6RyxHQUFXQSxFQUFRd0QsVUFBWSxTQVFqRXpELEVBQWNWLEdBQU9VLFlBQWMsU0FBVTNGLEdBQzVDLElBQUl3TSxFQUFZQyxFQUNmeE0sRUFBTUQsRUFBT0EsRUFBS2dLLGVBQWlCaEssRUFBT2tHLEVBRzNDLE9BQUtqRyxJQUFRL0IsR0FBNkIsSUFBakIrQixFQUFJVixVQUFtQlUsRUFBSXNNLGlCQU1wRDNHLEdBREExSCxFQUFXK0IsR0FDUXNNLGdCQUNuQjFHLEdBQWtCVCxFQUFPbEgsR0FJcEJnSSxJQUFpQmhJLElBQ3BCdU8sRUFBWXZPLEVBQVN3TyxjQUFnQkQsRUFBVUUsTUFBUUYsSUFHbkRBLEVBQVVHLGlCQUNkSCxFQUFVRyxpQkFBa0IsU0FBVTVELElBQWUsR0FHMUN5RCxFQUFVSSxhQUNyQkosRUFBVUksWUFBYSxXQUFZN0QsS0FVckM1SixFQUFRK0gsV0FBYWdFLEdBQU8sU0FBVUMsR0FFckMsT0FEQUEsRUFBRzBCLFVBQVksS0FDUDFCLEVBQUc5SyxhQUFhLGVBT3pCbEIsRUFBUWdMLHFCQUF1QmUsR0FBTyxTQUFVQyxHQUUvQyxPQURBQSxFQUFHM0ssWUFBYXZDLEVBQVM2TyxjQUFjLE1BQy9CM0IsRUFBR2hCLHFCQUFxQixLQUFLaEosU0FJdENoQyxFQUFRaUwsdUJBQXlCckMsRUFBUXVDLEtBQU1yTSxFQUFTbU0sd0JBTXhEakwsRUFBUTROLFFBQVU3QixHQUFPLFNBQVVDLEdBRWxDLE9BREF4RixFQUFRbkYsWUFBYTJLLEdBQUtqQixHQUFLNUcsR0FDdkJyRixFQUFTK08sb0JBQXNCL08sRUFBUytPLGtCQUFtQjFKLEdBQVVuQyxTQUl6RWhDLEVBQVE0TixTQUNaOUgsRUFBS2dJLE9BQVcsR0FBSSxTQUFVL0MsR0FDN0IsSUFBSWdELEVBQVNoRCxFQUFHekcsUUFBU3lFLEdBQVdDLElBQ3BDLE9BQU8sU0FBVW5HLEdBQ2hCLE9BQU9BLEVBQUszQixhQUFhLFFBQVU2TSxJQUdyQ2pJLEVBQUtrSSxLQUFTLEdBQUksU0FBVWpELEVBQUlwSixHQUMvQixRQUF1QyxJQUEzQkEsRUFBUW1KLGdCQUFrQ3JFLEVBQWlCLENBQ3RFLElBQUk1RCxFQUFPbEIsRUFBUW1KLGVBQWdCQyxHQUNuQyxPQUFPbEksRUFBTyxDQUFFQSxHQUFTLE9BSTNCaUQsRUFBS2dJLE9BQVcsR0FBSyxTQUFVL0MsR0FDOUIsSUFBSWdELEVBQVNoRCxFQUFHekcsUUFBU3lFLEdBQVdDLElBQ3BDLE9BQU8sU0FBVW5HLEdBQ2hCLElBQUlqQyxPQUF3QyxJQUExQmlDLEVBQUtvTCxrQkFDdEJwTCxFQUFLb0wsaUJBQWlCLE1BQ3ZCLE9BQU9yTixHQUFRQSxFQUFLL0MsUUFBVWtRLElBTWhDakksRUFBS2tJLEtBQVMsR0FBSSxTQUFVakQsRUFBSXBKLEdBQy9CLFFBQXVDLElBQTNCQSxFQUFRbUosZ0JBQWtDckUsRUFBaUIsQ0FDdEUsSUFBSTdGLEVBQU1oRSxFQUFHMEYsRUFDWk8sRUFBT2xCLEVBQVFtSixlQUFnQkMsR0FFaEMsR0FBS2xJLEVBQU8sQ0FJWCxJQURBakMsRUFBT2lDLEVBQUtvTCxpQkFBaUIsUUFDaEJyTixFQUFLL0MsUUFBVWtOLEVBQzNCLE1BQU8sQ0FBRWxJLEdBTVYsSUFGQVAsRUFBUVgsRUFBUWtNLGtCQUFtQjlDLEdBQ25Dbk8sRUFBSSxFQUNLaUcsRUFBT1AsRUFBTTFGLE1BRXJCLElBREFnRSxFQUFPaUMsRUFBS29MLGlCQUFpQixRQUNoQnJOLEVBQUsvQyxRQUFVa04sRUFDM0IsTUFBTyxDQUFFbEksR0FLWixNQUFPLE1BTVZpRCxFQUFLa0ksS0FBVSxJQUFJaE8sRUFBUWdMLHFCQUMxQixTQUFVa0QsRUFBS3ZNLEdBQ2QsWUFBNkMsSUFBakNBLEVBQVFxSixxQkFDWnJKLEVBQVFxSixxQkFBc0JrRCxHQUcxQmxPLEVBQVFrTCxJQUNadkosRUFBUTRKLGlCQUFrQjJDLFFBRDNCLEdBS1IsU0FBVUEsRUFBS3ZNLEdBQ2QsSUFBSWtCLEVBQ0hzTCxFQUFNLEdBQ052UixFQUFJLEVBRUpxSSxFQUFVdEQsRUFBUXFKLHFCQUFzQmtELEdBR3pDLEdBQWEsTUFBUkEsRUFBYyxDQUNsQixLQUFTckwsRUFBT29DLEVBQVFySSxNQUNBLElBQWxCaUcsRUFBSzFDLFVBQ1RnTyxFQUFJMU8sS0FBTW9ELEdBSVosT0FBT3NMLEVBRVIsT0FBT2xKLEdBSVRhLEVBQUtrSSxLQUFZLE1BQUloTyxFQUFRaUwsd0JBQTBCLFNBQVV5QyxFQUFXL0wsR0FDM0UsUUFBK0MsSUFBbkNBLEVBQVFzSix3QkFBMEN4RSxFQUM3RCxPQUFPOUUsRUFBUXNKLHVCQUF3QnlDLElBVXpDL0csRUFBZ0IsR0FPaEJELEVBQVksSUFFTjFHLEVBQVFrTCxJQUFNdEMsRUFBUXVDLEtBQU1yTSxFQUFTeU0scUJBRzFDUSxHQUFPLFNBQVVDLEdBTWhCeEYsRUFBUW5GLFlBQWEySyxHQUFLb0MsVUFBWSxVQUFZakssRUFBVSxxQkFDMUNBLEVBQVUsa0VBT3ZCNkgsRUFBR1QsaUJBQWlCLHdCQUF3QnZKLFFBQ2hEMEUsRUFBVWpILEtBQU0sU0FBV29JLEVBQWEsZ0JBS25DbUUsRUFBR1QsaUJBQWlCLGNBQWN2SixRQUN2QzBFLEVBQVVqSCxLQUFNLE1BQVFvSSxFQUFhLGFBQWVELEVBQVcsS0FJMURvRSxFQUFHVCxpQkFBa0IsUUFBVXBILEVBQVUsTUFBT25DLFFBQ3JEMEUsRUFBVWpILEtBQUssTUFNVnVNLEVBQUdULGlCQUFpQixZQUFZdkosUUFDckMwRSxFQUFVakgsS0FBSyxZQU1WdU0sRUFBR1QsaUJBQWtCLEtBQU9wSCxFQUFVLE1BQU9uQyxRQUNsRDBFLEVBQVVqSCxLQUFLLGNBSWpCc00sR0FBTyxTQUFVQyxHQUNoQkEsRUFBR29DLFVBQVksb0ZBS2YsSUFBSUMsRUFBUXZQLEVBQVNrQyxjQUFjLFNBQ25DcU4sRUFBTWxOLGFBQWMsT0FBUSxVQUM1QjZLLEVBQUczSyxZQUFhZ04sR0FBUWxOLGFBQWMsT0FBUSxLQUl6QzZLLEVBQUdULGlCQUFpQixZQUFZdkosUUFDcEMwRSxFQUFVakgsS0FBTSxPQUFTb0ksRUFBYSxlQUtTLElBQTNDbUUsRUFBR1QsaUJBQWlCLFlBQVl2SixRQUNwQzBFLEVBQVVqSCxLQUFNLFdBQVksYUFLN0IrRyxFQUFRbkYsWUFBYTJLLEdBQUtqQyxVQUFXLEVBQ1ksSUFBNUNpQyxFQUFHVCxpQkFBaUIsYUFBYXZKLFFBQ3JDMEUsRUFBVWpILEtBQU0sV0FBWSxhQUk3QnVNLEVBQUdULGlCQUFpQixRQUNwQjdFLEVBQVVqSCxLQUFLLFlBSVhPLEVBQVFzTyxnQkFBa0IxRixFQUFRdUMsS0FBTzdGLEVBQVVrQixFQUFRbEIsU0FDaEVrQixFQUFRK0gsdUJBQ1IvSCxFQUFRZ0ksb0JBQ1JoSSxFQUFRaUksa0JBQ1JqSSxFQUFRa0kscUJBRVIzQyxHQUFPLFNBQVVDLEdBR2hCaE0sRUFBUTJPLGtCQUFvQnJKLEVBQVF2SSxLQUFNaVAsRUFBSSxLQUk5QzFHLEVBQVF2SSxLQUFNaVAsRUFBSSxhQUNsQnJGLEVBQWNsSCxLQUFNLEtBQU11SSxLQUk1QnRCLEVBQVlBLEVBQVUxRSxRQUFVLElBQUlrRyxPQUFReEIsRUFBVTJFLEtBQUssTUFDM0QxRSxFQUFnQkEsRUFBYzNFLFFBQVUsSUFBSWtHLE9BQVF2QixFQUFjMEUsS0FBSyxNQUl2RStCLEVBQWF4RSxFQUFRdUMsS0FBTTNFLEVBQVFvSSx5QkFLbkNoSSxFQUFXd0csR0FBY3hFLEVBQVF1QyxLQUFNM0UsRUFBUUksVUFDOUMsU0FBVVcsRUFBR0MsR0FDWixJQUFJcUgsRUFBdUIsSUFBZnRILEVBQUVwSCxTQUFpQm9ILEVBQUU0RixnQkFBa0I1RixFQUNsRHVILEVBQU10SCxHQUFLQSxFQUFFbEcsV0FDZCxPQUFPaUcsSUFBTXVILE1BQVdBLEdBQXdCLElBQWpCQSxFQUFJM08sWUFDbEMwTyxFQUFNakksU0FDTGlJLEVBQU1qSSxTQUFVa0ksR0FDaEJ2SCxFQUFFcUgseUJBQThELEdBQW5DckgsRUFBRXFILHdCQUF5QkUsTUFHM0QsU0FBVXZILEVBQUdDLEdBQ1osR0FBS0EsRUFDSixLQUFTQSxFQUFJQSxFQUFFbEcsWUFDZCxHQUFLa0csSUFBTUQsRUFDVixPQUFPLEVBSVYsT0FBTyxHQU9URCxFQUFZOEYsRUFDWixTQUFVN0YsRUFBR0MsR0FHWixHQUFLRCxJQUFNQyxFQUVWLE9BREFsQixHQUFlLEVBQ1IsRUFJUixJQUFJeUksR0FBV3hILEVBQUVxSCx5QkFBMkJwSCxFQUFFb0gsd0JBQzlDLE9BQUtHLElBWVUsR0FQZkEsR0FBWXhILEVBQUVxRCxlQUFpQnJELE1BQVVDLEVBQUVvRCxlQUFpQnBELEdBQzNERCxFQUFFcUgsd0JBQXlCcEgsR0FHM0IsS0FJRXhILEVBQVFnUCxjQUFnQnhILEVBQUVvSCx3QkFBeUJySCxLQUFRd0gsRUFHeER4SCxJQUFNekksR0FBWXlJLEVBQUVxRCxnQkFBa0I5RCxHQUFnQkYsRUFBU0UsRUFBY1MsSUFDekUsRUFFSkMsSUFBTTFJLEdBQVkwSSxFQUFFb0QsZ0JBQWtCOUQsR0FBZ0JGLEVBQVNFLEVBQWNVLEdBQzFFLEVBSURuQixFQUNKM0csRUFBUzJHLEVBQVdrQixHQUFNN0gsRUFBUzJHLEVBQVdtQixHQUNoRCxFQUdlLEVBQVZ1SCxHQUFlLEVBQUksSUFFM0IsU0FBVXhILEVBQUdDLEdBRVosR0FBS0QsSUFBTUMsRUFFVixPQURBbEIsR0FBZSxFQUNSLEVBR1IsSUFBSWdHLEVBQ0gxUCxFQUFJLEVBQ0pxUyxFQUFNMUgsRUFBRWpHLFdBQ1J3TixFQUFNdEgsRUFBRWxHLFdBQ1I0TixFQUFLLENBQUUzSCxHQUNQNEgsRUFBSyxDQUFFM0gsR0FHUixJQUFNeUgsSUFBUUgsRUFDYixPQUFPdkgsSUFBTXpJLEdBQVksRUFDeEIwSSxJQUFNMUksRUFBVyxFQUNqQm1RLEdBQU8sRUFDUEgsRUFBTSxFQUNOekksRUFDRTNHLEVBQVMyRyxFQUFXa0IsR0FBTTdILEVBQVMyRyxFQUFXbUIsR0FDaEQsRUFHSyxHQUFLeUgsSUFBUUgsRUFDbkIsT0FBT3pDLEdBQWM5RSxFQUFHQyxHQUt6QixJQURBOEUsRUFBTS9FLEVBQ0crRSxFQUFNQSxFQUFJaEwsWUFDbEI0TixFQUFHRSxRQUFTOUMsR0FHYixJQURBQSxFQUFNOUUsRUFDRzhFLEVBQU1BLEVBQUloTCxZQUNsQjZOLEVBQUdDLFFBQVM5QyxHQUliLEtBQVE0QyxFQUFHdFMsS0FBT3VTLEVBQUd2UyxJQUNwQkEsSUFHRCxPQUFPQSxFQUVOeVAsR0FBYzZDLEVBQUd0UyxHQUFJdVMsRUFBR3ZTLElBR3hCc1MsRUFBR3RTLEtBQU9rSyxHQUFnQixFQUMxQnFJLEVBQUd2UyxLQUFPa0ssRUFBZSxFQUN6QixHQUdLaEksR0EzWUNBLEdBOFlUK0csR0FBT1AsUUFBVSxTQUFVK0osRUFBTUMsR0FDaEMsT0FBT3pKLEdBQVF3SixFQUFNLEtBQU0sS0FBTUMsSUFHbEN6SixHQUFPeUksZ0JBQWtCLFNBQVV6TCxFQUFNd00sR0FNeEMsSUFKT3hNLEVBQUsrSCxlQUFpQi9ILEtBQVcvRCxHQUN2Q3lILEVBQWExRCxHQUdUN0MsRUFBUXNPLGlCQUFtQjdILElBQzlCWSxFQUF3QmdJLEVBQU8sUUFDN0IxSSxJQUFrQkEsRUFBY3dFLEtBQU1rRSxPQUN0QzNJLElBQWtCQSxFQUFVeUUsS0FBTWtFLElBRXJDLElBQ0MsSUFBSTlNLEVBQU0rQyxFQUFRdkksS0FBTThGLEVBQU13TSxHQUc5QixHQUFLOU0sR0FBT3ZDLEVBQVEyTyxtQkFHbEI5TCxFQUFLL0QsVUFBdUMsS0FBM0IrRCxFQUFLL0QsU0FBU3FCLFNBQ2hDLE9BQU9vQyxFQUVQLE1BQU82SCxHQUNSL0MsRUFBd0JnSSxHQUFNLEdBSWhDLE9BQU94SixHQUFRd0osRUFBTXZRLEVBQVUsS0FBTSxDQUFFK0QsSUFBU2IsT0FBUyxHQUcxRDZELEdBQU9lLFNBQVcsU0FBVWpGLEVBQVNrQixHQUtwQyxPQUhPbEIsRUFBUWlKLGVBQWlCakosS0FBYzdDLEdBQzdDeUgsRUFBYTVFLEdBRVBpRixFQUFVakYsRUFBU2tCLElBRzNCZ0QsR0FBTzBKLEtBQU8sU0FBVTFNLEVBQU0xRixJQUV0QjBGLEVBQUsrSCxlQUFpQi9ILEtBQVcvRCxHQUN2Q3lILEVBQWExRCxHQUdkLElBQUlqQixFQUFLa0UsRUFBS3NHLFdBQVlqUCxFQUFLeUksZUFFOUI5RSxFQUFNYyxHQUFNL0IsRUFBTzlDLEtBQU0rSSxFQUFLc0csV0FBWWpQLEVBQUt5SSxlQUM5Q2hFLEVBQUlpQixFQUFNMUYsR0FBT3NKLFFBQ2pCdkMsRUFFRixZQUFlQSxJQUFScEQsRUFDTkEsRUFDQWQsRUFBUStILGFBQWV0QixFQUN0QjVELEVBQUszQixhQUFjL0QsSUFDbEIyRCxFQUFNK0IsRUFBS29MLGlCQUFpQjlRLEtBQVUyRCxFQUFJME8sVUFDMUMxTyxFQUFJakQsTUFDSixNQUdKZ0ksR0FBTzRKLE9BQVMsU0FBVUMsR0FDekIsT0FBUUEsRUFBTSxJQUFJcEwsUUFBU2lGLEdBQVlDLEtBR3hDM0QsR0FBT3JCLE1BQVEsU0FBVUMsR0FDeEIsTUFBTSxJQUFJekYsTUFBTywwQ0FBNEN5RixJQU85RG9CLEdBQU84SixXQUFhLFNBQVUxSyxHQUM3QixJQUFJcEMsRUFDSCtNLEVBQWEsR0FDYnhNLEVBQUksRUFDSnhHLEVBQUksRUFPTCxHQUpBMEosR0FBZ0J0RyxFQUFRNlAsaUJBQ3hCeEosR0FBYXJHLEVBQVE4UCxZQUFjN0ssRUFBUTFGLE1BQU8sR0FDbEQwRixFQUFRM0IsS0FBTWdFLEdBRVRoQixFQUFlLENBQ25CLEtBQVN6RCxFQUFPb0MsRUFBUXJJLE1BQ2xCaUcsSUFBU29DLEVBQVNySSxLQUN0QndHLEVBQUl3TSxFQUFXblEsS0FBTTdDLElBR3ZCLEtBQVF3RyxLQUNQNkIsRUFBUTFCLE9BQVFxTSxFQUFZeE0sR0FBSyxHQVFuQyxPQUZBaUQsRUFBWSxLQUVMcEIsR0FPUmMsRUFBVUYsR0FBT0UsUUFBVSxTQUFVbEQsR0FDcEMsSUFBSWpDLEVBQ0gyQixFQUFNLEdBQ04zRixFQUFJLEVBQ0p1RCxFQUFXMEMsRUFBSzFDLFNBRWpCLEdBQU1BLEdBTUMsR0FBa0IsSUFBYkEsR0FBK0IsSUFBYkEsR0FBK0IsS0FBYkEsRUFBa0IsQ0FHakUsR0FBaUMsaUJBQXJCMEMsRUFBS2tOLFlBQ2hCLE9BQU9sTixFQUFLa04sWUFHWixJQUFNbE4sRUFBT0EsRUFBS21OLFdBQVluTixFQUFNQSxFQUFPQSxFQUFLNEosWUFDL0NsSyxHQUFPd0QsRUFBU2xELFFBR1osR0FBa0IsSUFBYjFDLEdBQStCLElBQWJBLEVBQzdCLE9BQU8wQyxFQUFLb04sZUFoQlosS0FBU3JQLEVBQU9pQyxFQUFLakcsTUFFcEIyRixHQUFPd0QsRUFBU25GLEdBa0JsQixPQUFPMkIsSUFHUnVELEVBQU9ELEdBQU9xSyxVQUFZLENBR3pCdEUsWUFBYSxHQUVidUUsYUFBY3JFLEdBRWR0QixNQUFPaEMsRUFFUDRELFdBQVksR0FFWjRCLEtBQU0sR0FFTm9DLFNBQVUsQ0FDVCxJQUFLLENBQUVuRyxJQUFLLGFBQWNqSCxPQUFPLEdBQ2pDLElBQUssQ0FBRWlILElBQUssY0FDWixJQUFLLENBQUVBLElBQUssa0JBQW1CakgsT0FBTyxHQUN0QyxJQUFLLENBQUVpSCxJQUFLLG9CQUdib0csVUFBVyxDQUNWLEtBQVEsU0FBVTdGLEdBVWpCLE9BVEFBLEVBQU0sR0FBS0EsRUFBTSxHQUFHbEcsUUFBU3lFLEdBQVdDLElBR3hDd0IsRUFBTSxJQUFPQSxFQUFNLElBQU1BLEVBQU0sSUFBTUEsRUFBTSxJQUFNLElBQUtsRyxRQUFTeUUsR0FBV0MsSUFFeEQsT0FBYndCLEVBQU0sS0FDVkEsRUFBTSxHQUFLLElBQU1BLEVBQU0sR0FBSyxLQUd0QkEsRUFBTWpMLE1BQU8sRUFBRyxJQUd4QixNQUFTLFNBQVVpTCxHQTZCbEIsT0FsQkFBLEVBQU0sR0FBS0EsRUFBTSxHQUFHNUUsY0FFWSxRQUEzQjRFLEVBQU0sR0FBR2pMLE1BQU8sRUFBRyxJQUVqQmlMLEVBQU0sSUFDWDNFLEdBQU9yQixNQUFPZ0csRUFBTSxJQUtyQkEsRUFBTSxLQUFRQSxFQUFNLEdBQUtBLEVBQU0sSUFBTUEsRUFBTSxJQUFNLEdBQUssR0FBbUIsU0FBYkEsRUFBTSxJQUE4QixRQUFiQSxFQUFNLEtBQ3pGQSxFQUFNLEtBQVVBLEVBQU0sR0FBS0EsRUFBTSxJQUFxQixRQUFiQSxFQUFNLEtBR3BDQSxFQUFNLElBQ2pCM0UsR0FBT3JCLE1BQU9nRyxFQUFNLElBR2RBLEdBR1IsT0FBVSxTQUFVQSxHQUNuQixJQUFJOEYsRUFDSEMsR0FBWS9GLEVBQU0sSUFBTUEsRUFBTSxHQUUvQixPQUFLaEMsRUFBaUIsTUFBRTJDLEtBQU1YLEVBQU0sSUFDNUIsTUFJSEEsRUFBTSxHQUNWQSxFQUFNLEdBQUtBLEVBQU0sSUFBTUEsRUFBTSxJQUFNLEdBR3hCK0YsR0FBWWpJLEVBQVE2QyxLQUFNb0YsS0FFcENELEVBQVNySyxFQUFVc0ssR0FBVSxNQUU3QkQsRUFBU0MsRUFBUzdRLFFBQVMsSUFBSzZRLEVBQVN2TyxPQUFTc08sR0FBV0MsRUFBU3ZPLFVBR3ZFd0ksRUFBTSxHQUFLQSxFQUFNLEdBQUdqTCxNQUFPLEVBQUcrUSxHQUM5QjlGLEVBQU0sR0FBSytGLEVBQVNoUixNQUFPLEVBQUcrUSxJQUl4QjlGLEVBQU1qTCxNQUFPLEVBQUcsTUFJekJ1TyxPQUFRLENBRVAsSUFBTyxTQUFVMEMsR0FDaEIsSUFBSXhHLEVBQVd3RyxFQUFpQmxNLFFBQVN5RSxHQUFXQyxJQUFZcEQsY0FDaEUsTUFBNEIsTUFBckI0SyxFQUNOLFdBQWEsT0FBTyxHQUNwQixTQUFVM04sR0FDVCxPQUFPQSxFQUFLbUgsVUFBWW5ILEVBQUttSCxTQUFTcEUsZ0JBQWtCb0UsSUFJM0QsTUFBUyxTQUFVMEQsR0FDbEIsSUFBSStDLEVBQVV4SixFQUFZeUcsRUFBWSxLQUV0QyxPQUFPK0MsSUFDTEEsRUFBVSxJQUFJdkksT0FBUSxNQUFRTCxFQUFhLElBQU02RixFQUFZLElBQU03RixFQUFhLFNBQ2pGWixFQUFZeUcsRUFBVyxTQUFVN0ssR0FDaEMsT0FBTzROLEVBQVF0RixLQUFnQyxpQkFBbkJ0SSxFQUFLNkssV0FBMEI3SyxFQUFLNkssZ0JBQTBDLElBQXRCN0ssRUFBSzNCLGNBQWdDMkIsRUFBSzNCLGFBQWEsVUFBWSxPQUkxSixLQUFRLFNBQVUvRCxFQUFNdVQsRUFBVUMsR0FDakMsT0FBTyxTQUFVOU4sR0FDaEIsSUFBSStOLEVBQVMvSyxHQUFPMEosS0FBTTFNLEVBQU0xRixHQUVoQyxPQUFlLE1BQVZ5VCxFQUNnQixPQUFiRixHQUVGQSxJQUlORSxHQUFVLEdBRVUsTUFBYkYsRUFBbUJFLElBQVdELEVBQ3ZCLE9BQWJELEVBQW9CRSxJQUFXRCxFQUNsQixPQUFiRCxFQUFvQkMsR0FBcUMsSUFBNUJDLEVBQU9sUixRQUFTaVIsR0FDaEMsT0FBYkQsRUFBb0JDLEdBQVNDLEVBQU9sUixRQUFTaVIsSUFBVyxFQUMzQyxPQUFiRCxFQUFvQkMsR0FBU0MsRUFBT3JSLE9BQVFvUixFQUFNM08sVUFBYTJPLEVBQ2xELE9BQWJELEdBQXNCLElBQU1FLEVBQU90TSxRQUFTMkQsRUFBYSxLQUFRLEtBQU12SSxRQUFTaVIsSUFBVyxFQUM5RSxPQUFiRCxJQUFvQkUsSUFBV0QsR0FBU0MsRUFBT3JSLE1BQU8sRUFBR29SLEVBQU0zTyxPQUFTLEtBQVEyTyxFQUFRLFFBSzNGLE1BQVMsU0FBVXJRLEVBQU11USxFQUFNOUQsRUFBVS9KLEVBQU9FLEdBQy9DLElBQUk0TixFQUFnQyxRQUF2QnhRLEVBQUtmLE1BQU8sRUFBRyxHQUMzQndSLEVBQStCLFNBQXJCelEsRUFBS2YsT0FBUSxHQUN2QnlSLEVBQWtCLFlBQVRILEVBRVYsT0FBaUIsSUFBVjdOLEdBQXdCLElBQVRFLEVBR3JCLFNBQVVMLEdBQ1QsUUFBU0EsRUFBS3ZCLFlBR2YsU0FBVXVCLEVBQU1sQixFQUFTc1AsR0FDeEIsSUFBSXRGLEVBQU91RixFQUFhQyxFQUFZdlEsRUFBTXdRLEVBQVdDLEVBQ3BEcEgsRUFBTTZHLElBQVdDLEVBQVUsY0FBZ0Isa0JBQzNDTyxFQUFTek8sRUFBS3ZCLFdBQ2RuRSxFQUFPNlQsR0FBVW5PLEVBQUttSCxTQUFTcEUsY0FDL0IyTCxHQUFZTixJQUFRRCxFQUNwQnpFLEdBQU8sRUFFUixHQUFLK0UsRUFBUyxDQUdiLEdBQUtSLEVBQVMsQ0FDYixLQUFRN0csR0FBTSxDQUViLElBREFySixFQUFPaUMsRUFDRWpDLEVBQU9BLEVBQU1xSixJQUNyQixHQUFLK0csRUFDSnBRLEVBQUtvSixTQUFTcEUsZ0JBQWtCekksRUFDZCxJQUFsQnlELEVBQUtULFNBRUwsT0FBTyxFQUlUa1IsRUFBUXBILEVBQWUsU0FBVDNKLElBQW9CK1EsR0FBUyxjQUU1QyxPQUFPLEVBTVIsR0FIQUEsRUFBUSxDQUFFTixFQUFVTyxFQUFPdEIsV0FBYXNCLEVBQU9FLFdBRzFDVCxHQUFXUSxHQWtCZixJQUhBaEYsR0FEQTZFLEdBREF6RixHQUhBdUYsR0FKQUMsR0FEQXZRLEVBQU8wUSxHQUNZbk4sS0FBY3ZELEVBQU11RCxHQUFZLEtBSXpCdkQsRUFBSzZRLFlBQzdCTixFQUFZdlEsRUFBSzZRLFVBQWEsS0FFWG5SLElBQVUsSUFDWixLQUFReUcsR0FBVzRFLEVBQU8sS0FDekJBLEVBQU8sR0FDM0IvSyxFQUFPd1EsR0FBYUUsRUFBT25ILFdBQVlpSCxHQUU5QnhRLElBQVN3USxHQUFheFEsR0FBUUEsRUFBTXFKLEtBRzNDc0MsRUFBTzZFLEVBQVksSUFBTUMsRUFBTTVKLE9BR2hDLEdBQXVCLElBQWxCN0csRUFBS1QsWUFBb0JvTSxHQUFRM0wsSUFBU2lDLEVBQU8sQ0FDckRxTyxFQUFhNVEsR0FBUyxDQUFFeUcsRUFBU3FLLEVBQVc3RSxHQUM1QyxZQXVCRixHQWpCS2dGLElBWUpoRixFQURBNkUsR0FEQXpGLEdBSEF1RixHQUpBQyxHQURBdlEsRUFBT2lDLEdBQ1lzQixLQUFjdkQsRUFBTXVELEdBQVksS0FJekJ2RCxFQUFLNlEsWUFDN0JOLEVBQVl2USxFQUFLNlEsVUFBYSxLQUVYblIsSUFBVSxJQUNaLEtBQVF5RyxHQUFXNEUsRUFBTyxLQU1oQyxJQUFUWSxFQUVKLE1BQVMzTCxJQUFTd1EsR0FBYXhRLEdBQVFBLEVBQU1xSixLQUMzQ3NDLEVBQU82RSxFQUFZLElBQU1DLEVBQU01SixVQUV6QnVKLEVBQ05wUSxFQUFLb0osU0FBU3BFLGdCQUFrQnpJLEVBQ2QsSUFBbEJ5RCxFQUFLVCxjQUNIb00sSUFHR2dGLEtBS0pMLEdBSkFDLEVBQWF2USxFQUFNdUQsS0FBY3ZELEVBQU11RCxHQUFZLEtBSXpCdkQsRUFBSzZRLFlBQzdCTixFQUFZdlEsRUFBSzZRLFVBQWEsS0FFbkJuUixHQUFTLENBQUV5RyxFQUFTd0YsSUFHN0IzTCxJQUFTaUMsTUFVbEIsT0FEQTBKLEdBQVFySixLQUNRRixHQUFXdUosRUFBT3ZKLEdBQVUsR0FBS3VKLEVBQU92SixHQUFTLEtBS3JFLE9BQVUsU0FBVTBPLEVBQVEzRSxHQUszQixJQUFJNEUsRUFDSC9QLEVBQUtrRSxFQUFLa0MsUUFBUzBKLElBQVk1TCxFQUFLOEwsV0FBWUYsRUFBTzlMLGdCQUN0REMsR0FBT3JCLE1BQU8sdUJBQXlCa04sR0FLekMsT0FBSzlQLEVBQUl1QyxHQUNEdkMsRUFBSW1MLEdBSVBuTCxFQUFHSSxPQUFTLEdBQ2hCMlAsRUFBTyxDQUFFRCxFQUFRQSxFQUFRLEdBQUkzRSxHQUN0QmpILEVBQUs4TCxXQUFXblQsZUFBZ0JpVCxFQUFPOUwsZUFDN0NrRyxHQUFhLFNBQVV4QixFQUFNaEYsR0FJNUIsSUFIQSxJQUFJdU0sRUFDSEMsRUFBVWxRLEVBQUkwSSxFQUFNeUMsR0FDcEJuUSxFQUFJa1YsRUFBUTlQLE9BQ0xwRixLQUVQME4sRUFEQXVILEVBQU1uUyxFQUFTNEssRUFBTXdILEVBQVFsVixPQUNaMEksRUFBU3VNLEdBQVFDLEVBQVFsVixNQUc1QyxTQUFVaUcsR0FDVCxPQUFPakIsRUFBSWlCLEVBQU0sRUFBRzhPLEtBSWhCL1AsSUFJVG9HLFFBQVMsQ0FFUixJQUFPOEQsR0FBYSxTQUFVcEssR0FJN0IsSUFBSTJNLEVBQVEsR0FDWHBKLEVBQVUsR0FDVjhNLEVBQVU3TCxFQUFTeEUsRUFBUzRDLFFBQVN4QyxFQUFPLE9BRTdDLE9BQU9pUSxFQUFTNU4sR0FDZjJILEdBQWEsU0FBVXhCLEVBQU1oRixFQUFTM0QsRUFBU3NQLEdBTTlDLElBTEEsSUFBSXBPLEVBQ0htUCxFQUFZRCxFQUFTekgsRUFBTSxLQUFNMkcsRUFBSyxJQUN0Q3JVLEVBQUkwTixFQUFLdEksT0FHRnBGLE1BQ0RpRyxFQUFPbVAsRUFBVXBWLE1BQ3RCME4sRUFBSzFOLEtBQU8wSSxFQUFRMUksR0FBS2lHLE1BSTVCLFNBQVVBLEVBQU1sQixFQUFTc1AsR0FLeEIsT0FKQTVDLEVBQU0sR0FBS3hMLEVBQ1hrUCxFQUFTMUQsRUFBTyxLQUFNNEMsRUFBS2hNLEdBRTNCb0osRUFBTSxHQUFLLE1BQ0hwSixFQUFRd0MsU0FJbkIsSUFBT3FFLEdBQWEsU0FBVXBLLEdBQzdCLE9BQU8sU0FBVW1CLEdBQ2hCLE9BQU9nRCxHQUFRbkUsRUFBVW1CLEdBQU9iLE9BQVMsS0FJM0MsU0FBWThKLEdBQWEsU0FBVTdLLEdBRWxDLE9BREFBLEVBQU9BLEVBQUtxRCxRQUFTeUUsR0FBV0MsSUFDekIsU0FBVW5HLEdBQ2hCLE9BQVNBLEVBQUtrTixhQUFlaEssRUFBU2xELElBQVNuRCxRQUFTdUIsSUFBVSxLQVdwRSxLQUFRNkssR0FBYyxTQUFVbUcsR0FNL0IsT0FKTTFKLEVBQVk0QyxLQUFLOEcsR0FBUSxLQUM5QnBNLEdBQU9yQixNQUFPLHFCQUF1QnlOLEdBRXRDQSxFQUFPQSxFQUFLM04sUUFBU3lFLEdBQVdDLElBQVlwRCxjQUNyQyxTQUFVL0MsR0FDaEIsSUFBSXFQLEVBQ0osR0FDQyxHQUFNQSxFQUFXekwsRUFDaEI1RCxFQUFLb1AsS0FDTHBQLEVBQUszQixhQUFhLGFBQWUyQixFQUFLM0IsYUFBYSxRQUduRCxPQURBZ1IsRUFBV0EsRUFBU3RNLGlCQUNBcU0sR0FBMkMsSUFBbkNDLEVBQVN4UyxRQUFTdVMsRUFBTyxZQUU1Q3BQLEVBQU9BLEVBQUt2QixhQUFpQyxJQUFsQnVCLEVBQUsxQyxVQUMzQyxPQUFPLEtBS1QsT0FBVSxTQUFVMEMsR0FDbkIsSUFBSXNQLEVBQU9sVCxFQUFPbVQsVUFBWW5ULEVBQU9tVCxTQUFTRCxLQUM5QyxPQUFPQSxHQUFRQSxFQUFLNVMsTUFBTyxLQUFRc0QsRUFBS2tJLElBR3pDLEtBQVEsU0FBVWxJLEdBQ2pCLE9BQU9BLElBQVMyRCxHQUdqQixNQUFTLFNBQVUzRCxHQUNsQixPQUFPQSxJQUFTL0QsRUFBU3VULGlCQUFtQnZULEVBQVN3VCxVQUFZeFQsRUFBU3dULGdCQUFrQnpQLEVBQUt2QyxNQUFRdUMsRUFBSzBQLE9BQVMxUCxFQUFLMlAsV0FJN0gsUUFBVzVGLElBQXNCLEdBQ2pDLFNBQVlBLElBQXNCLEdBRWxDLFFBQVcsU0FBVS9KLEdBR3BCLElBQUltSCxFQUFXbkgsRUFBS21ILFNBQVNwRSxjQUM3QixNQUFxQixVQUFib0UsS0FBMEJuSCxFQUFLNFAsU0FBMEIsV0FBYnpJLEtBQTJCbkgsRUFBSzZQLFVBR3JGLFNBQVksU0FBVTdQLEdBT3JCLE9BSktBLEVBQUt2QixZQUNUdUIsRUFBS3ZCLFdBQVdxUixlQUdRLElBQWxCOVAsRUFBSzZQLFVBSWIsTUFBUyxTQUFVN1AsR0FLbEIsSUFBTUEsRUFBT0EsRUFBS21OLFdBQVluTixFQUFNQSxFQUFPQSxFQUFLNEosWUFDL0MsR0FBSzVKLEVBQUsxQyxTQUFXLEVBQ3BCLE9BQU8sRUFHVCxPQUFPLEdBR1IsT0FBVSxTQUFVMEMsR0FDbkIsT0FBUWlELEVBQUtrQyxRQUFlLE1BQUduRixJQUloQyxPQUFVLFNBQVVBLEdBQ25CLE9BQU84RixFQUFRd0MsS0FBTXRJLEVBQUttSCxXQUczQixNQUFTLFNBQVVuSCxHQUNsQixPQUFPNkYsRUFBUXlDLEtBQU10SSxFQUFLbUgsV0FHM0IsT0FBVSxTQUFVbkgsR0FDbkIsSUFBSTFGLEVBQU8wRixFQUFLbUgsU0FBU3BFLGNBQ3pCLE1BQWdCLFVBQVR6SSxHQUFrQyxXQUFkMEYsRUFBS3ZDLE1BQThCLFdBQVRuRCxHQUd0RCxLQUFRLFNBQVUwRixHQUNqQixJQUFJME0sRUFDSixNQUF1QyxVQUFoQzFNLEVBQUttSCxTQUFTcEUsZUFDTixTQUFkL0MsRUFBS3ZDLE9BSW1DLE9BQXJDaVAsRUFBTzFNLEVBQUszQixhQUFhLFVBQTJDLFNBQXZCcU8sRUFBSzNKLGdCQUl2RCxNQUFTa0gsR0FBdUIsV0FDL0IsTUFBTyxDQUFFLEtBR1YsS0FBUUEsR0FBdUIsU0FBVUUsRUFBY2hMLEdBQ3RELE1BQU8sQ0FBRUEsRUFBUyxLQUduQixHQUFNOEssR0FBdUIsU0FBVUUsRUFBY2hMLEVBQVErSyxHQUM1RCxNQUFPLENBQUVBLEVBQVcsRUFBSUEsRUFBVy9LLEVBQVMrSyxLQUc3QyxLQUFRRCxHQUF1QixTQUFVRSxFQUFjaEwsR0FFdEQsSUFEQSxJQUFJcEYsRUFBSSxFQUNBQSxFQUFJb0YsRUFBUXBGLEdBQUssRUFDeEJvUSxFQUFhdk4sS0FBTTdDLEdBRXBCLE9BQU9vUSxJQUdSLElBQU9GLEdBQXVCLFNBQVVFLEVBQWNoTCxHQUVyRCxJQURBLElBQUlwRixFQUFJLEVBQ0FBLEVBQUlvRixFQUFRcEYsR0FBSyxFQUN4Qm9RLEVBQWF2TixLQUFNN0MsR0FFcEIsT0FBT29RLElBR1IsR0FBTUYsR0FBdUIsU0FBVUUsRUFBY2hMLEVBQVErSyxHQU01RCxJQUxBLElBQUluUSxFQUFJbVEsRUFBVyxFQUNsQkEsRUFBVy9LLEVBQ1grSyxFQUFXL0ssRUFDVkEsRUFDQStLLElBQ1FuUSxHQUFLLEdBQ2RvUSxFQUFhdk4sS0FBTTdDLEdBRXBCLE9BQU9vUSxJQUdSLEdBQU1GLEdBQXVCLFNBQVVFLEVBQWNoTCxFQUFRK0ssR0FFNUQsSUFEQSxJQUFJblEsRUFBSW1RLEVBQVcsRUFBSUEsRUFBVy9LLEVBQVMrSyxJQUNqQ25RLEVBQUlvRixHQUNiZ0wsRUFBYXZOLEtBQU03QyxHQUVwQixPQUFPb1EsT0FLTGhGLFFBQWEsSUFBSWxDLEVBQUtrQyxRQUFZLEdBRzVCLENBQUU0SyxPQUFPLEVBQU1DLFVBQVUsRUFBTUMsTUFBTSxFQUFNQyxVQUFVLEVBQU1DLE9BQU8sR0FDNUVsTixFQUFLa0MsUUFBU3BMLEdBQU04UCxHQUFtQjlQLEdBRXhDLElBQU1BLElBQUssQ0FBRXFXLFFBQVEsRUFBTUMsT0FBTyxHQUNqQ3BOLEVBQUtrQyxRQUFTcEwsR0FBTStQLEdBQW9CL1AsR0FJekMsU0FBU2dWLE1BdUVULFNBQVN4RyxHQUFZK0gsR0FJcEIsSUFIQSxJQUFJdlcsRUFBSSxFQUNQdUcsRUFBTWdRLEVBQU9uUixPQUNiTixFQUFXLEdBQ0o5RSxFQUFJdUcsRUFBS3ZHLElBQ2hCOEUsR0FBWXlSLEVBQU92VyxHQUFHaUIsTUFFdkIsT0FBTzZELEVBR1IsU0FBU29JLEdBQWVpSSxFQUFTcUIsRUFBWUMsR0FDNUMsSUFBSXBKLEVBQU1tSixFQUFXbkosSUFDcEJxSixFQUFPRixFQUFXbEosS0FDbEIvTCxFQUFNbVYsR0FBUXJKLEVBQ2RzSixFQUFtQkYsR0FBZ0IsZUFBUmxWLEVBQzNCcVYsRUFBV3hNLElBRVosT0FBT29NLEVBQVdwUSxNQUVqQixTQUFVSCxFQUFNbEIsRUFBU3NQLEdBQ3hCLEtBQVNwTyxFQUFPQSxFQUFNb0gsSUFDckIsR0FBdUIsSUFBbEJwSCxFQUFLMUMsVUFBa0JvVCxFQUMzQixPQUFPeEIsRUFBU2xQLEVBQU1sQixFQUFTc1AsR0FHakMsT0FBTyxHQUlSLFNBQVVwTyxFQUFNbEIsRUFBU3NQLEdBQ3hCLElBQUl3QyxFQUFVdkMsRUFBYUMsRUFDMUJ1QyxFQUFXLENBQUUzTSxFQUFTeU0sR0FHdkIsR0FBS3ZDLEdBQ0osS0FBU3BPLEVBQU9BLEVBQU1vSCxJQUNyQixJQUF1QixJQUFsQnBILEVBQUsxQyxVQUFrQm9ULElBQ3RCeEIsRUFBU2xQLEVBQU1sQixFQUFTc1AsR0FDNUIsT0FBTyxPQUtWLEtBQVNwTyxFQUFPQSxFQUFNb0gsSUFDckIsR0FBdUIsSUFBbEJwSCxFQUFLMUMsVUFBa0JvVCxFQU8zQixHQUZBckMsR0FKQUMsRUFBYXRPLEVBQU1zQixLQUFjdEIsRUFBTXNCLEdBQVksS0FJekJ0QixFQUFLNE8sWUFBZU4sRUFBWXRPLEVBQUs0TyxVQUFhLElBRXZFNkIsR0FBUUEsSUFBU3pRLEVBQUttSCxTQUFTcEUsY0FDbkMvQyxFQUFPQSxFQUFNb0gsSUFBU3BILE1BQ2hCLEtBQU00USxFQUFXdkMsRUFBYS9TLEtBQ3BDc1YsRUFBVSxLQUFRMU0sR0FBVzBNLEVBQVUsS0FBUUQsRUFHL0MsT0FBUUUsRUFBVSxHQUFNRCxFQUFVLEdBTWxDLEdBSEF2QyxFQUFhL1MsR0FBUXVWLEVBR2ZBLEVBQVUsR0FBTTNCLEVBQVNsUCxFQUFNbEIsRUFBU3NQLEdBQzdDLE9BQU8sRUFNWixPQUFPLEdBSVYsU0FBUzBDLEdBQWdCQyxHQUN4QixPQUFPQSxFQUFTNVIsT0FBUyxFQUN4QixTQUFVYSxFQUFNbEIsRUFBU3NQLEdBRXhCLElBREEsSUFBSXJVLEVBQUlnWCxFQUFTNVIsT0FDVHBGLEtBQ1AsSUFBTWdYLEVBQVNoWCxHQUFJaUcsRUFBTWxCLEVBQVNzUCxHQUNqQyxPQUFPLEVBR1QsT0FBTyxHQUVSMkMsRUFBUyxHQVlYLFNBQVNDLEdBQVU3QixFQUFXcFAsRUFBS2tMLEVBQVFuTSxFQUFTc1AsR0FPbkQsSUFOQSxJQUFJcE8sRUFDSGlSLEVBQWUsR0FDZmxYLEVBQUksRUFDSnVHLEVBQU02TyxFQUFVaFEsT0FDaEIrUixFQUFnQixNQUFQblIsRUFFRmhHLEVBQUl1RyxFQUFLdkcsS0FDVmlHLEVBQU9tUCxFQUFVcFYsTUFDaEJrUixJQUFVQSxFQUFRakwsRUFBTWxCLEVBQVNzUCxLQUN0QzZDLEVBQWFyVSxLQUFNb0QsR0FDZGtSLEdBQ0puUixFQUFJbkQsS0FBTTdDLEtBTWQsT0FBT2tYLEVBR1IsU0FBU0UsR0FBWTNELEVBQVczTyxFQUFVcVEsRUFBU2tDLEVBQVlDLEVBQVlDLEdBTzFFLE9BTktGLElBQWVBLEVBQVk5UCxLQUMvQjhQLEVBQWFELEdBQVlDLElBRXJCQyxJQUFlQSxFQUFZL1AsS0FDL0IrUCxFQUFhRixHQUFZRSxFQUFZQyxJQUUvQnJJLEdBQWEsU0FBVXhCLEVBQU1yRixFQUFTdEQsRUFBU3NQLEdBQ3JELElBQUltRCxFQUFNeFgsRUFBR2lHLEVBQ1p3UixFQUFTLEdBQ1RDLEVBQVUsR0FDVkMsRUFBY3RQLEVBQVFqRCxPQUd0Qk0sRUFBUWdJLEdBNUNYLFNBQTJCNUksRUFBVThTLEVBQVV2UCxHQUc5QyxJQUZBLElBQUlySSxFQUFJLEVBQ1B1RyxFQUFNcVIsRUFBU3hTLE9BQ1JwRixFQUFJdUcsRUFBS3ZHLElBQ2hCaUosR0FBUW5FLEVBQVU4UyxFQUFTNVgsR0FBSXFJLEdBRWhDLE9BQU9BLEVBc0NXd1AsQ0FBa0IvUyxHQUFZLElBQUtDLEVBQVF4QixTQUFXLENBQUV3QixHQUFZQSxFQUFTLElBRzdGK1MsR0FBWXJFLElBQWUvRixHQUFTNUksRUFFbkNZLEVBREF1UixHQUFVdlIsRUFBTytSLEVBQVFoRSxFQUFXMU8sRUFBU3NQLEdBRzlDMEQsRUFBYTVDLEVBRVptQyxJQUFnQjVKLEVBQU8rRixFQUFZa0UsR0FBZU4sR0FHakQsR0FHQWhQLEVBQ0R5UCxFQVFGLEdBTEszQyxHQUNKQSxFQUFTMkMsRUFBV0MsRUFBWWhULEVBQVNzUCxHQUlyQ2dELEVBTUosSUFMQUcsRUFBT1AsR0FBVWMsRUFBWUwsR0FDN0JMLEVBQVlHLEVBQU0sR0FBSXpTLEVBQVNzUCxHQUcvQnJVLEVBQUl3WCxFQUFLcFMsT0FDRHBGLE1BQ0RpRyxFQUFPdVIsRUFBS3hYLE1BQ2pCK1gsRUFBWUwsRUFBUTFYLE1BQVM4WCxFQUFXSixFQUFRMVgsSUFBT2lHLElBSzFELEdBQUt5SCxHQUNKLEdBQUs0SixHQUFjN0QsRUFBWSxDQUM5QixHQUFLNkQsRUFBYSxDQUlqQixJQUZBRSxFQUFPLEdBQ1B4WCxFQUFJK1gsRUFBVzNTLE9BQ1BwRixNQUNEaUcsRUFBTzhSLEVBQVcvWCxLQUV2QndYLEVBQUszVSxLQUFPaVYsRUFBVTlYLEdBQUtpRyxHQUc3QnFSLEVBQVksS0FBT1MsRUFBYSxHQUFLUCxFQUFNbkQsR0FLNUMsSUFEQXJVLEVBQUkrWCxFQUFXM1MsT0FDUHBGLE1BQ0RpRyxFQUFPOFIsRUFBVy9YLE1BQ3RCd1gsRUFBT0YsRUFBYXhVLEVBQVM0SyxFQUFNekgsR0FBU3dSLEVBQU96WCxLQUFPLElBRTNEME4sRUFBSzhKLEtBQVVuUCxFQUFRbVAsR0FBUXZSLFVBT2xDOFIsRUFBYWQsR0FDWmMsSUFBZTFQLEVBQ2QwUCxFQUFXcFIsT0FBUWdSLEVBQWFJLEVBQVczUyxRQUMzQzJTLEdBRUdULEVBQ0pBLEVBQVksS0FBTWpQLEVBQVMwUCxFQUFZMUQsR0FFdkN4UixFQUFLcUQsTUFBT21DLEVBQVMwUCxLQU16QixTQUFTQyxHQUFtQnpCLEdBd0IzQixJQXZCQSxJQUFJMEIsRUFBYzlDLEVBQVMzTyxFQUMxQkQsRUFBTWdRLEVBQU9uUixPQUNiOFMsRUFBa0JoUCxFQUFLc0ssU0FBVStDLEVBQU8sR0FBRzdTLE1BQzNDeVUsRUFBbUJELEdBQW1CaFAsRUFBS3NLLFNBQVMsS0FDcER4VCxFQUFJa1ksRUFBa0IsRUFBSSxFQUcxQkUsRUFBZWxMLEdBQWUsU0FBVWpILEdBQ3ZDLE9BQU9BLElBQVNnUyxHQUNkRSxHQUFrQixHQUNyQkUsRUFBa0JuTCxHQUFlLFNBQVVqSCxHQUMxQyxPQUFPbkQsRUFBU21WLEVBQWNoUyxJQUFVLEdBQ3RDa1MsR0FBa0IsR0FDckJuQixFQUFXLENBQUUsU0FBVS9RLEVBQU1sQixFQUFTc1AsR0FDckMsSUFBSTFPLEdBQVN1UyxJQUFxQjdELEdBQU90UCxJQUFZeUUsTUFDbkR5TyxFQUFlbFQsR0FBU3hCLFNBQ3hCNlUsRUFBY25TLEVBQU1sQixFQUFTc1AsR0FDN0JnRSxFQUFpQnBTLEVBQU1sQixFQUFTc1AsSUFHbEMsT0FEQTRELEVBQWUsS0FDUnRTLElBR0QzRixFQUFJdUcsRUFBS3ZHLElBQ2hCLEdBQU1tVixFQUFVak0sRUFBS3NLLFNBQVUrQyxFQUFPdlcsR0FBRzBELE1BQ3hDc1QsRUFBVyxDQUFFOUosR0FBYzZKLEdBQWdCQyxHQUFZN0IsUUFDakQsQ0FJTixJQUhBQSxFQUFVak0sRUFBS2dJLE9BQVFxRixFQUFPdlcsR0FBRzBELE1BQU93QyxNQUFPLEtBQU1xUSxFQUFPdlcsR0FBRzBJLFVBR2pEbkIsR0FBWSxDQUd6QixJQURBZixJQUFNeEcsRUFDRXdHLEVBQUlELElBQ04yQyxFQUFLc0ssU0FBVStDLEVBQU8vUCxHQUFHOUMsTUFEZDhDLEtBS2pCLE9BQU80USxHQUNOcFgsRUFBSSxHQUFLK1csR0FBZ0JDLEdBQ3pCaFgsRUFBSSxHQUFLd08sR0FFUitILEVBQU81VCxNQUFPLEVBQUczQyxFQUFJLEdBQUk0QyxPQUFPLENBQUUzQixNQUFnQyxNQUF6QnNWLEVBQVF2VyxFQUFJLEdBQUkwRCxLQUFlLElBQU0sTUFDN0VnRSxRQUFTeEMsRUFBTyxNQUNsQmlRLEVBQ0FuVixFQUFJd0csR0FBS3dSLEdBQW1CekIsRUFBTzVULE1BQU8zQyxFQUFHd0csSUFDN0NBLEVBQUlELEdBQU95UixHQUFvQnpCLEVBQVNBLEVBQU81VCxNQUFPNkQsSUFDdERBLEVBQUlELEdBQU9pSSxHQUFZK0gsSUFHekJTLEVBQVNuVSxLQUFNc1MsR0FJakIsT0FBTzRCLEdBQWdCQyxHQThSeEIsT0E5bUJBaEMsR0FBV3BULFVBQVlzSCxFQUFLb1AsUUFBVXBQLEVBQUtrQyxRQUMzQ2xDLEVBQUs4TCxXQUFhLElBQUlBLEdBRXRCM0wsRUFBV0osR0FBT0ksU0FBVyxTQUFVdkUsRUFBVXlULEdBQ2hELElBQUlyRCxFQUFTdEgsRUFBTzJJLEVBQVE3UyxFQUMzQjhVLEVBQU8zSyxFQUFRNEssRUFDZkMsRUFBU25PLEVBQVl6RixFQUFXLEtBRWpDLEdBQUs0VCxFQUNKLE9BQU9ILEVBQVksRUFBSUcsRUFBTy9WLE1BQU8sR0FPdEMsSUFKQTZWLEVBQVExVCxFQUNSK0ksRUFBUyxHQUNUNEssRUFBYXZQLEVBQUt1SyxVQUVWK0UsR0FBUSxDQXlCZixJQUFNOVUsS0F0QkF3UixLQUFZdEgsRUFBUXJDLEVBQU8wQyxLQUFNdUssTUFDakM1SyxJQUVKNEssRUFBUUEsRUFBTTdWLE1BQU9pTCxFQUFNLEdBQUd4SSxTQUFZb1QsR0FFM0MzSyxFQUFPaEwsS0FBTzBULEVBQVMsS0FHeEJyQixHQUFVLEdBR0p0SCxFQUFRcEMsRUFBYXlDLEtBQU11SyxNQUNoQ3RELEVBQVV0SCxFQUFNcUIsUUFDaEJzSCxFQUFPMVQsS0FBSyxDQUNYNUIsTUFBT2lVLEVBRVB4UixLQUFNa0ssRUFBTSxHQUFHbEcsUUFBU3hDLEVBQU8sT0FFaENzVCxFQUFRQSxFQUFNN1YsTUFBT3VTLEVBQVE5UCxTQUloQjhELEVBQUtnSSxTQUNadEQsRUFBUWhDLEVBQVdsSSxHQUFPdUssS0FBTXVLLEtBQWNDLEVBQVkvVSxNQUM5RGtLLEVBQVE2SyxFQUFZL1UsR0FBUWtLLE1BQzdCc0gsRUFBVXRILEVBQU1xQixRQUNoQnNILEVBQU8xVCxLQUFLLENBQ1g1QixNQUFPaVUsRUFDUHhSLEtBQU1BLEVBQ05nRixRQUFTa0YsSUFFVjRLLEVBQVFBLEVBQU03VixNQUFPdVMsRUFBUTlQLFNBSS9CLElBQU04UCxFQUNMLE1BT0YsT0FBT3FELEVBQ05DLEVBQU1wVCxPQUNOb1QsRUFDQ3ZQLEdBQU9yQixNQUFPOUMsR0FFZHlGLEVBQVl6RixFQUFVK0ksR0FBU2xMLE1BQU8sSUErWHpDMkcsRUFBVUwsR0FBT0ssUUFBVSxTQUFVeEUsRUFBVThJLEdBQzlDLElBQUk1TixFQUNIMlksRUFBYyxHQUNkQyxFQUFrQixHQUNsQkYsRUFBU2xPLEVBQWUxRixFQUFXLEtBRXBDLElBQU00VCxFQUFTLENBTWQsSUFKTTlLLElBQ0xBLEVBQVF2RSxFQUFVdkUsSUFFbkI5RSxFQUFJNE4sRUFBTXhJLE9BQ0ZwRixNQUNQMFksRUFBU1YsR0FBbUJwSyxFQUFNNU4sS0FDckJ1SCxHQUNab1IsRUFBWTlWLEtBQU02VixHQUVsQkUsRUFBZ0IvVixLQUFNNlYsSUFLeEJBLEVBQVNsTyxFQUFlMUYsRUFySTFCLFNBQW1DOFQsRUFBaUJELEdBQ25ELElBQUlFLEVBQVFGLEVBQVl2VCxPQUFTLEVBQ2hDMFQsRUFBWUYsRUFBZ0J4VCxPQUFTLEVBQ3JDMlQsRUFBZSxTQUFVckwsRUFBTTNJLEVBQVNzUCxFQUFLaE0sRUFBUzJRLEdBQ3JELElBQUkvUyxFQUFNTyxFQUFHMk8sRUFDWjhELEVBQWUsRUFDZmpaLEVBQUksSUFDSm9WLEVBQVkxSCxHQUFRLEdBQ3BCd0wsRUFBYSxHQUNiQyxFQUFnQjNQLEVBRWhCOUQsRUFBUWdJLEdBQVFvTCxHQUFhNVAsRUFBS2tJLEtBQVUsSUFBRyxJQUFLNEgsR0FFcERJLEVBQWlCalAsR0FBNEIsTUFBakJnUCxFQUF3QixFQUFJM1IsS0FBS0MsVUFBWSxHQUN6RWxCLEVBQU1iLEVBQU1OLE9BU2IsSUFQSzRULElBQ0p4UCxFQUFtQnpFLElBQVk3QyxHQUFZNkMsR0FBV2lVLEdBTS9DaFosSUFBTXVHLEdBQTRCLE9BQXBCTixFQUFPUCxFQUFNMUYsSUFBYUEsSUFBTSxDQUNyRCxHQUFLOFksR0FBYTdTLEVBQU8sQ0FNeEIsSUFMQU8sRUFBSSxFQUNFekIsR0FBV2tCLEVBQUsrSCxnQkFBa0I5TCxJQUN2Q3lILEVBQWExRCxHQUNib08sR0FBT3hLLEdBRUNzTCxFQUFVeUQsRUFBZ0JwUyxNQUNsQyxHQUFLMk8sRUFBU2xQLEVBQU1sQixHQUFXN0MsRUFBVW1TLEdBQU8sQ0FDL0NoTSxFQUFReEYsS0FBTW9ELEdBQ2QsTUFHRytTLElBQ0o3TyxFQUFVaVAsR0FLUFAsS0FFRTVTLEdBQVFrUCxHQUFXbFAsSUFDeEJnVCxJQUlJdkwsR0FDSjBILEVBQVV2UyxLQUFNb0QsSUFnQm5CLEdBVEFnVCxHQUFnQmpaLEVBU1g2WSxHQUFTN1ksSUFBTWlaLEVBQWUsQ0FFbEMsSUFEQXpTLEVBQUksRUFDSzJPLEVBQVV3RCxFQUFZblMsTUFDOUIyTyxFQUFTQyxFQUFXOEQsRUFBWW5VLEVBQVNzUCxHQUcxQyxHQUFLM0csRUFBTyxDQUVYLEdBQUt1TCxFQUFlLEVBQ25CLEtBQVFqWixLQUNBb1YsRUFBVXBWLElBQU1rWixFQUFXbFosS0FDakNrWixFQUFXbFosR0FBSzZLLEVBQUkxSyxLQUFNa0ksSUFNN0I2USxFQUFhakMsR0FBVWlDLEdBSXhCclcsRUFBS3FELE1BQU9tQyxFQUFTNlEsR0FHaEJGLElBQWN0TCxHQUFRd0wsRUFBVzlULE9BQVMsR0FDNUM2VCxFQUFlTixFQUFZdlQsT0FBVyxHQUV4QzZELEdBQU84SixXQUFZMUssR0FVckIsT0FMSzJRLElBQ0o3TyxFQUFVaVAsRUFDVjVQLEVBQW1CMlAsR0FHYi9ELEdBR1QsT0FBT3lELEVBQ04zSixHQUFjNkosR0FDZEEsRUF5QmtDTSxDQUEwQlQsRUFBaUJELEtBR3RFN1QsU0FBV0EsRUFFbkIsT0FBTzRULEdBWVJuUCxFQUFTTixHQUFPTSxPQUFTLFNBQVV6RSxFQUFVQyxFQUFTc0QsRUFBU3FGLEdBQzlELElBQUkxTixFQUFHdVcsRUFBUStDLEVBQU81VixFQUFNME4sRUFDM0JtSSxFQUErQixtQkFBYnpVLEdBQTJCQSxFQUM3QzhJLEdBQVNGLEdBQVFyRSxFQUFXdkUsRUFBV3lVLEVBQVN6VSxVQUFZQSxHQU03RCxHQUpBdUQsRUFBVUEsR0FBVyxHQUlDLElBQWpCdUYsRUFBTXhJLE9BQWUsQ0FJekIsSUFEQW1SLEVBQVMzSSxFQUFNLEdBQUtBLEVBQU0sR0FBR2pMLE1BQU8sSUFDeEJ5QyxPQUFTLEdBQWtDLFFBQTVCa1UsRUFBUS9DLEVBQU8sSUFBSTdTLE1BQ3ZCLElBQXJCcUIsRUFBUXhCLFVBQWtCc0csR0FBa0JYLEVBQUtzSyxTQUFVK0MsRUFBTyxHQUFHN1MsTUFBUyxDQUcvRSxLQURBcUIsR0FBWW1FLEVBQUtrSSxLQUFTLEdBQUdrSSxFQUFNNVEsUUFBUSxHQUFHaEIsUUFBUXlFLEdBQVdDLElBQVlySCxJQUFhLElBQUssSUFFOUYsT0FBT3NELEVBR0lrUixJQUNYeFUsRUFBVUEsRUFBUUwsWUFHbkJJLEVBQVdBLEVBQVNuQyxNQUFPNFQsRUFBT3RILFFBQVFoTyxNQUFNbUUsUUFLakQsSUFEQXBGLEVBQUk0TCxFQUF3QixhQUFFMkMsS0FBTXpKLEdBQWEsRUFBSXlSLEVBQU9uUixPQUNwRHBGLE1BQ1BzWixFQUFRL0MsRUFBT3ZXLElBR1ZrSixFQUFLc0ssU0FBVzlQLEVBQU80VixFQUFNNVYsUUFHbEMsSUFBTTBOLEVBQU9sSSxFQUFLa0ksS0FBTTFOLE1BRWpCZ0ssRUFBTzBELEVBQ1prSSxFQUFNNVEsUUFBUSxHQUFHaEIsUUFBU3lFLEdBQVdDLElBQ3JDRixHQUFTcUMsS0FBTWdJLEVBQU8sR0FBRzdTLE9BQVVnTCxHQUFhM0osRUFBUUwsYUFBZ0JLLElBQ3BFLENBS0osR0FGQXdSLEVBQU81UCxPQUFRM0csRUFBRyxLQUNsQjhFLEVBQVc0SSxFQUFLdEksUUFBVW9KLEdBQVkrSCxJQUdyQyxPQURBMVQsRUFBS3FELE1BQU9tQyxFQUFTcUYsR0FDZHJGLEVBR1IsT0FlSixPQVBFa1IsR0FBWWpRLEVBQVN4RSxFQUFVOEksSUFDaENGLEVBQ0EzSSxHQUNDOEUsRUFDRHhCLEdBQ0N0RCxHQUFXbUgsR0FBU3FDLEtBQU16SixJQUFjNEosR0FBYTNKLEVBQVFMLGFBQWdCSyxHQUV4RXNELEdBTVJqRixFQUFROFAsV0FBYTNMLEVBQVF3QixNQUFNLElBQUlyQyxLQUFNZ0UsR0FBWStELEtBQUssTUFBUWxILEVBSXRFbkUsRUFBUTZQLG1CQUFxQnZKLEVBRzdCQyxJQUlBdkcsRUFBUWdQLGFBQWVqRCxHQUFPLFNBQVVDLEdBRXZDLE9BQTBFLEVBQW5FQSxFQUFHNEMsd0JBQXlCOVAsRUFBU2tDLGNBQWMsZUFNckQrSyxHQUFPLFNBQVVDLEdBRXRCLE9BREFBLEVBQUdvQyxVQUFZLG1CQUMrQixNQUF2Q3BDLEVBQUdnRSxXQUFXOU8sYUFBYSxXQUVsQytLLEdBQVcseUJBQTBCLFNBQVVwSixFQUFNMUYsRUFBTTZJLEdBQzFELElBQU1BLEVBQ0wsT0FBT25ELEVBQUszQixhQUFjL0QsRUFBNkIsU0FBdkJBLEVBQUt5SSxjQUEyQixFQUFJLEtBT2pFNUYsRUFBUStILFlBQWVnRSxHQUFPLFNBQVVDLEdBRzdDLE9BRkFBLEVBQUdvQyxVQUFZLFdBQ2ZwQyxFQUFHZ0UsV0FBVzdPLGFBQWMsUUFBUyxJQUNZLEtBQTFDNkssRUFBR2dFLFdBQVc5TyxhQUFjLFlBRW5DK0ssR0FBVyxRQUFTLFNBQVVwSixFQUFNMUYsRUFBTTZJLEdBQ3pDLElBQU1BLEdBQXlDLFVBQWhDbkQsRUFBS21ILFNBQVNwRSxjQUM1QixPQUFPL0MsRUFBS3VULGVBT1RySyxHQUFPLFNBQVVDLEdBQ3RCLE9BQXNDLE1BQS9CQSxFQUFHOUssYUFBYSxlQUV2QitLLEdBQVdyRSxFQUFVLFNBQVUvRSxFQUFNMUYsRUFBTTZJLEdBQzFDLElBQUlsRixFQUNKLElBQU1rRixFQUNMLE9BQXdCLElBQWpCbkQsRUFBTTFGLEdBQWtCQSxFQUFLeUksZUFDakM5RSxFQUFNK0IsRUFBS29MLGlCQUFrQjlRLEtBQVcyRCxFQUFJME8sVUFDN0MxTyxFQUFJakQsTUFDTCxPQUtHZ0ksR0Exc0VQLENBNHNFSTVHLEdBSUp3QyxFQUFPdU0sS0FBT25JLEVBQ2RwRSxFQUFPNE4sS0FBT3hKLEVBQU9xSyxVQUdyQnpPLEVBQU80TixLQUFNLEtBQVE1TixFQUFPNE4sS0FBS3JILFFBQ2pDdkcsRUFBT2tPLFdBQWFsTyxFQUFPNFUsT0FBU3hRLEVBQU84SixXQUMzQ2xPLEVBQU9SLEtBQU80RSxFQUFPRSxRQUNyQnRFLEVBQU82VSxTQUFXelEsRUFBT0csTUFDekJ2RSxFQUFPbUYsU0FBV2YsRUFBT2UsU0FDekJuRixFQUFPOFUsZUFBaUIxUSxFQUFPNEosT0FLL0IsSUFBSXhGLEVBQU0sU0FBVXBILEVBQU1vSCxFQUFLdU0sR0FJOUIsSUFIQSxJQUFJMUUsRUFBVSxHQUNiMkUsT0FBcUJ2UyxJQUFWc1MsR0FFRjNULEVBQU9BLEVBQU1vSCxLQUE2QixJQUFsQnBILEVBQUsxQyxVQUN0QyxHQUF1QixJQUFsQjBDLEVBQUsxQyxTQUFpQixDQUMxQixHQUFLc1csR0FBWWhWLEVBQVFvQixHQUFPNlQsR0FBSUYsR0FDbkMsTUFFRDFFLEVBQVFyUyxLQUFNb0QsR0FHaEIsT0FBT2lQLEdBSUo2RSxFQUFXLFNBQVV0WSxFQUFHd0UsR0FHM0IsSUFGQSxJQUFJaVAsRUFBVSxHQUVOelQsRUFBR0EsRUFBSUEsRUFBRW9PLFlBQ0ksSUFBZnBPLEVBQUU4QixVQUFrQjlCLElBQU13RSxHQUM5QmlQLEVBQVFyUyxLQUFNcEIsR0FJaEIsT0FBT3lULEdBSUo4RSxFQUFnQm5WLEVBQU80TixLQUFLN0UsTUFBTXFNLGFBSXRDLFNBQVM3TSxFQUFVbkgsRUFBTTFGLEdBRXZCLE9BQU8wRixFQUFLbUgsVUFBWW5ILEVBQUttSCxTQUFTcEUsZ0JBQWtCekksRUFBS3lJLGNBRy9ELElBQUlrUixFQUFhLGtFQUtqQixTQUFTQyxFQUFRekgsRUFBVTBILEVBQVdDLEdBQ3JDLE9BQUtoWCxFQUFZK1csR0FDVHZWLEVBQU8yRCxLQUFNa0ssRUFBVSxTQUFVek0sRUFBTWpHLEdBQzdDLFFBQVNvYSxFQUFVamEsS0FBTThGLEVBQU1qRyxFQUFHaUcsS0FBV29VLElBSzFDRCxFQUFVN1csU0FDUHNCLEVBQU8yRCxLQUFNa0ssRUFBVSxTQUFVek0sR0FDdkMsT0FBU0EsSUFBU21VLElBQWdCQyxJQUtWLGlCQUFkRCxFQUNKdlYsRUFBTzJELEtBQU1rSyxFQUFVLFNBQVV6TSxHQUN2QyxPQUFTbkQsRUFBUTNDLEtBQU1pYSxFQUFXblUsSUFBVSxJQUFRb1UsSUFLL0N4VixFQUFPcU0sT0FBUWtKLEVBQVcxSCxFQUFVMkgsR0FHNUN4VixFQUFPcU0sT0FBUyxTQUFVdUIsRUFBTS9NLEVBQU8yVSxHQUN0QyxJQUFJcFUsRUFBT1AsRUFBTyxHQU1sQixPQUpLMlUsSUFDSjVILEVBQU8sUUFBVUEsRUFBTyxLQUdILElBQWpCL00sRUFBTU4sUUFBa0MsSUFBbEJhLEVBQUsxQyxTQUN4QnNCLEVBQU91TSxLQUFLTSxnQkFBaUJ6TCxFQUFNd00sR0FBUyxDQUFFeE0sR0FBUyxHQUd4RHBCLEVBQU91TSxLQUFLMUksUUFBUytKLEVBQU01TixFQUFPMkQsS0FBTTlDLEVBQU8sU0FBVU8sR0FDL0QsT0FBeUIsSUFBbEJBLEVBQUsxQyxhQUlkc0IsRUFBT0csR0FBRzRCLE9BQVEsQ0FDakJ3SyxLQUFNLFNBQVV0TSxHQUNmLElBQUk5RSxFQUFHMkYsRUFDTlksRUFBTWpFLEtBQUs4QyxPQUNYa1YsRUFBT2hZLEtBRVIsR0FBeUIsaUJBQWJ3QyxFQUNYLE9BQU94QyxLQUFLbUQsVUFBV1osRUFBUUMsR0FBV29NLE9BQVEsV0FDakQsSUFBTWxSLEVBQUksRUFBR0EsRUFBSXVHLEVBQUt2RyxJQUNyQixHQUFLNkUsRUFBT21GLFNBQVVzUSxFQUFNdGEsR0FBS3NDLE1BQ2hDLE9BQU8sS0FRWCxJQUZBcUQsRUFBTXJELEtBQUttRCxVQUFXLElBRWhCekYsRUFBSSxFQUFHQSxFQUFJdUcsRUFBS3ZHLElBQ3JCNkUsRUFBT3VNLEtBQU10TSxFQUFVd1YsRUFBTXRhLEdBQUsyRixHQUduQyxPQUFPWSxFQUFNLEVBQUkxQixFQUFPa08sV0FBWXBOLEdBQVFBLEdBRTdDdUwsT0FBUSxTQUFVcE0sR0FDakIsT0FBT3hDLEtBQUttRCxVQUFXMFUsRUFBUTdYLEtBQU13QyxHQUFZLElBQUksS0FFdER1VixJQUFLLFNBQVV2VixHQUNkLE9BQU94QyxLQUFLbUQsVUFBVzBVLEVBQVE3WCxLQUFNd0MsR0FBWSxJQUFJLEtBRXREZ1YsR0FBSSxTQUFVaFYsR0FDYixRQUFTcVYsRUFDUjdYLEtBSW9CLGlCQUFid0MsR0FBeUJrVixFQUFjekwsS0FBTXpKLEdBQ25ERCxFQUFRQyxHQUNSQSxHQUFZLElBQ2IsR0FDQ00sVUFTSixJQUFJbVYsRUFNSHRPLEVBQWEsdUNBRU5wSCxFQUFPRyxHQUFHQyxLQUFPLFNBQVVILEVBQVVDLEVBQVN5VixHQUNwRCxJQUFJNU0sRUFBTzNILEVBR1gsSUFBTW5CLEVBQ0wsT0FBT3hDLEtBUVIsR0FIQWtZLEVBQU9BLEdBQVFELEVBR1UsaUJBQWJ6VixFQUF3QixDQWFuQyxLQVBDOEksRUFMc0IsTUFBbEI5SSxFQUFVLElBQ3NCLE1BQXBDQSxFQUFVQSxFQUFTTSxPQUFTLElBQzVCTixFQUFTTSxRQUFVLEVBR1gsQ0FBRSxLQUFNTixFQUFVLE1BR2xCbUgsRUFBV2dDLEtBQU1uSixNQUlWOEksRUFBTyxJQUFRN0ksRUE2Q3hCLE9BQU1BLEdBQVdBLEVBQVFNLFFBQ3RCTixHQUFXeVYsR0FBT3BKLEtBQU10TSxHQUsxQnhDLEtBQUtnRCxZQUFhUCxHQUFVcU0sS0FBTXRNLEdBaER6QyxHQUFLOEksRUFBTyxHQUFNLENBWWpCLEdBWEE3SSxFQUFVQSxhQUFtQkYsRUFBU0UsRUFBUyxHQUFNQSxFQUlyREYsRUFBT2UsTUFBT3RELEtBQU11QyxFQUFPNFYsVUFDMUI3TSxFQUFPLEdBQ1A3SSxHQUFXQSxFQUFReEIsU0FBV3dCLEVBQVFpSixlQUFpQmpKLEVBQVU3QyxHQUNqRSxJQUlJZ1ksRUFBVzNMLEtBQU1YLEVBQU8sS0FBUy9JLEVBQU9zQyxjQUFlcEMsR0FDM0QsSUFBTTZJLEtBQVM3SSxFQUdUMUIsRUFBWWYsS0FBTXNMLElBQ3RCdEwsS0FBTXNMLEdBQVM3SSxFQUFTNkksSUFJeEJ0TCxLQUFLcVEsS0FBTS9FLEVBQU83SSxFQUFTNkksSUFLOUIsT0FBT3RMLEtBWVAsT0FSQTJELEVBQU8vRCxFQUFTZ00sZUFBZ0JOLEVBQU8sT0FLdEN0TCxLQUFNLEdBQU0yRCxFQUNaM0QsS0FBSzhDLE9BQVMsR0FFUjlDLEtBY0gsT0FBS3dDLEVBQVN2QixVQUNwQmpCLEtBQU0sR0FBTXdDLEVBQ1p4QyxLQUFLOEMsT0FBUyxFQUNQOUMsTUFJSWUsRUFBWXlCLFFBQ0R3QyxJQUFma1QsRUFBS0UsTUFDWEYsRUFBS0UsTUFBTzVWLEdBR1pBLEVBQVVELEdBR0xBLEVBQU91RCxVQUFXdEQsRUFBVXhDLFFBSWhDVixVQUFZaUQsRUFBT0csR0FHeEJ1VixFQUFhMVYsRUFBUTNDLEdBR3JCLElBQUl5WSxFQUFlLGlDQUdsQkMsRUFBbUIsQ0FDbEJDLFVBQVUsRUFDVkMsVUFBVSxFQUNWeE4sTUFBTSxFQUNOeU4sTUFBTSxHQW9GUixTQUFTQyxFQUFTdEwsRUFBS3JDLEdBQ3RCLE1BQVVxQyxFQUFNQSxFQUFLckMsS0FBNEIsSUFBakJxQyxFQUFJbk0sV0FDcEMsT0FBT21NLEVBbkZSN0ssRUFBT0csR0FBRzRCLE9BQVEsQ0FDakJxVSxJQUFLLFNBQVVoVSxHQUNkLElBQUlpVSxFQUFVclcsRUFBUW9DLEVBQVEzRSxNQUM3QnJDLEVBQUlpYixFQUFROVYsT0FFYixPQUFPOUMsS0FBSzRPLE9BQVEsV0FFbkIsSUFEQSxJQUFJbFIsRUFBSSxFQUNBQSxFQUFJQyxFQUFHRCxJQUNkLEdBQUs2RSxFQUFPbUYsU0FBVTFILEtBQU00WSxFQUFTbGIsSUFDcEMsT0FBTyxLQU1YbWIsUUFBUyxTQUFVN0gsRUFBV3ZPLEdBQzdCLElBQUkySyxFQUNIMVAsRUFBSSxFQUNKQyxFQUFJcUMsS0FBSzhDLE9BQ1Q4UCxFQUFVLEdBQ1ZnRyxFQUErQixpQkFBZDVILEdBQTBCek8sRUFBUXlPLEdBR3BELElBQU0wRyxFQUFjekwsS0FBTStFLEdBQ3pCLEtBQVF0VCxFQUFJQyxFQUFHRCxJQUNkLElBQU0wUCxFQUFNcE4sS0FBTXRDLEdBQUswUCxHQUFPQSxJQUFRM0ssRUFBUzJLLEVBQU1BLEVBQUloTCxXQUd4RCxHQUFLZ0wsRUFBSW5NLFNBQVcsS0FBUTJYLEVBQzNCQSxFQUFRRSxNQUFPMUwsSUFBUyxFQUdQLElBQWpCQSxFQUFJbk0sVUFDSHNCLEVBQU91TSxLQUFLTSxnQkFBaUJoQyxFQUFLNEQsSUFBZ0IsQ0FFbkQ0QixFQUFRclMsS0FBTTZNLEdBQ2QsTUFNSixPQUFPcE4sS0FBS21ELFVBQVd5UCxFQUFROVAsT0FBUyxFQUFJUCxFQUFPa08sV0FBWW1DLEdBQVlBLElBSTVFa0csTUFBTyxTQUFVblYsR0FHaEIsT0FBTUEsRUFLZSxpQkFBVEEsRUFDSm5ELEVBQVEzQyxLQUFNMEUsRUFBUW9CLEdBQVEzRCxLQUFNLElBSXJDUSxFQUFRM0MsS0FBTW1DLEtBR3BCMkQsRUFBS1osT0FBU1ksRUFBTSxHQUFNQSxHQVpqQjNELEtBQU0sSUFBT0EsS0FBTSxHQUFJb0MsV0FBZXBDLEtBQUs4RCxRQUFRaVYsVUFBVWpXLFFBQVUsR0FnQmxGa1csSUFBSyxTQUFVeFcsRUFBVUMsR0FDeEIsT0FBT3pDLEtBQUttRCxVQUNYWixFQUFPa08sV0FDTmxPLEVBQU9lLE1BQU90RCxLQUFLekIsTUFBT2dFLEVBQVFDLEVBQVVDLE9BSy9Dd1csUUFBUyxTQUFVelcsR0FDbEIsT0FBT3hDLEtBQUtnWixJQUFpQixNQUFaeFcsRUFDaEJ4QyxLQUFLdUQsV0FBYXZELEtBQUt1RCxXQUFXcUwsT0FBUXBNLE9BVTdDRCxFQUFPaUIsS0FBTSxDQUNaNE8sT0FBUSxTQUFVek8sR0FDakIsSUFBSXlPLEVBQVN6TyxFQUFLdkIsV0FDbEIsT0FBT2dRLEdBQThCLEtBQXBCQSxFQUFPblIsU0FBa0JtUixFQUFTLE1BRXBEOEcsUUFBUyxTQUFVdlYsR0FDbEIsT0FBT29ILEVBQUtwSCxFQUFNLGVBRW5Cd1YsYUFBYyxTQUFVeFYsRUFBTWpHLEVBQUc0WixHQUNoQyxPQUFPdk0sRUFBS3BILEVBQU0sYUFBYzJULElBRWpDdE0sS0FBTSxTQUFVckgsR0FDZixPQUFPK1UsRUFBUy9VLEVBQU0sZ0JBRXZCOFUsS0FBTSxTQUFVOVUsR0FDZixPQUFPK1UsRUFBUy9VLEVBQU0sb0JBRXZCeVYsUUFBUyxTQUFVelYsR0FDbEIsT0FBT29ILEVBQUtwSCxFQUFNLGdCQUVuQm9WLFFBQVMsU0FBVXBWLEdBQ2xCLE9BQU9vSCxFQUFLcEgsRUFBTSxvQkFFbkIwVixVQUFXLFNBQVUxVixFQUFNakcsRUFBRzRaLEdBQzdCLE9BQU92TSxFQUFLcEgsRUFBTSxjQUFlMlQsSUFFbENnQyxVQUFXLFNBQVUzVixFQUFNakcsRUFBRzRaLEdBQzdCLE9BQU92TSxFQUFLcEgsRUFBTSxrQkFBbUIyVCxJQUV0Q0csU0FBVSxTQUFVOVQsR0FDbkIsT0FBTzhULEdBQVk5VCxFQUFLdkIsWUFBYyxJQUFLME8sV0FBWW5OLElBRXhENFUsU0FBVSxTQUFVNVUsR0FDbkIsT0FBTzhULEVBQVU5VCxFQUFLbU4sYUFFdkIwSCxTQUFVLFNBQVU3VSxHQUNuQixZQUFxQyxJQUF6QkEsRUFBSzRWLGdCQUNUNVYsRUFBSzRWLGlCQU1Sek8sRUFBVW5ILEVBQU0sY0FDcEJBLEVBQU9BLEVBQUs2VixTQUFXN1YsR0FHakJwQixFQUFPZSxNQUFPLEdBQUlLLEVBQUtzSCxlQUU3QixTQUFVaE4sRUFBTXlFLEdBQ2xCSCxFQUFPRyxHQUFJekUsR0FBUyxTQUFVcVosRUFBTzlVLEdBQ3BDLElBQUlvUSxFQUFVclEsRUFBT21CLElBQUsxRCxLQUFNMEMsRUFBSTRVLEdBdUJwQyxNQXJCMEIsVUFBckJyWixFQUFLb0MsT0FBUSxLQUNqQm1DLEVBQVc4VSxHQUdQOVUsR0FBZ0MsaUJBQWJBLElBQ3ZCb1EsRUFBVXJRLEVBQU9xTSxPQUFRcE0sRUFBVW9RLElBRy9CNVMsS0FBSzhDLE9BQVMsSUFHWndWLEVBQWtCcmEsSUFDdkJzRSxFQUFPa08sV0FBWW1DLEdBSWZ5RixFQUFhcE0sS0FBTWhPLElBQ3ZCMlUsRUFBUTZHLFdBSUh6WixLQUFLbUQsVUFBV3lQLE1BR3pCLElBQUk4RyxFQUFnQixvQkFzT3BCLFNBQVNDLEVBQVVDLEdBQ2xCLE9BQU9BLEVBRVIsU0FBU0MsRUFBU0MsR0FDakIsTUFBTUEsRUFHUCxTQUFTQyxFQUFZcGIsRUFBT3FiLEVBQVNDLEVBQVFDLEdBQzVDLElBQUlDLEVBRUosSUFHTXhiLEdBQVNvQyxFQUFjb1osRUFBU3hiLEVBQU15YixTQUMxQ0QsRUFBT3RjLEtBQU1jLEdBQVFtSixLQUFNa1MsR0FBVUssS0FBTUosR0FHaEN0YixHQUFTb0MsRUFBY29aLEVBQVN4YixFQUFNMmIsTUFDakRILEVBQU90YyxLQUFNYyxFQUFPcWIsRUFBU0MsR0FRN0JELEVBQVFwVyxXQUFPb0IsRUFBVyxDQUFFckcsR0FBUTBCLE1BQU82WixJQU0zQyxNQUFRdmIsR0FJVHNiLEVBQU9yVyxXQUFPb0IsRUFBVyxDQUFFckcsS0F2TzdCNEQsRUFBT2dZLFVBQVksU0FBVWhXLEdBSTVCQSxFQUE2QixpQkFBWkEsRUFsQ2xCLFNBQXdCQSxHQUN2QixJQUFJbkYsRUFBUyxHQUliLE9BSEFtRCxFQUFPaUIsS0FBTWUsRUFBUStHLE1BQU9vTyxJQUFtQixHQUFJLFNBQVUzUCxFQUFHeVEsR0FDL0RwYixFQUFRb2IsSUFBUyxJQUVYcGIsRUE4Qk5xYixDQUFlbFcsR0FDZmhDLEVBQU8rQixPQUFRLEdBQUlDLEdBRXBCLElBQ0NtVyxFQUdBQyxFQUdBQyxFQUdBQyxFQUdBcFMsRUFBTyxHQUdQcVMsRUFBUSxHQUdSQyxHQUFlLEVBR2ZDLEVBQU8sV0FRTixJQUxBSCxFQUFTQSxHQUFVdFcsRUFBUTBXLEtBSTNCTCxFQUFRRixHQUFTLEVBQ1RJLEVBQU1oWSxPQUFRaVksR0FBZSxFQUVwQyxJQURBSixFQUFTRyxFQUFNbk8sVUFDTG9PLEVBQWN0UyxFQUFLM0YsU0FHbUMsSUFBMUQyRixFQUFNc1MsR0FBY25YLE1BQU8rVyxFQUFRLEdBQUtBLEVBQVEsS0FDcERwVyxFQUFRMlcsY0FHUkgsRUFBY3RTLEVBQUszRixPQUNuQjZYLEdBQVMsR0FNTnBXLEVBQVFvVyxTQUNiQSxHQUFTLEdBR1ZELEdBQVMsRUFHSkcsSUFJSHBTLEVBRElrUyxFQUNHLEdBSUEsS0FNVjNDLEVBQU8sQ0FHTmdCLElBQUssV0EyQkosT0ExQkt2USxJQUdDa1MsSUFBV0QsSUFDZkssRUFBY3RTLEVBQUszRixPQUFTLEVBQzVCZ1ksRUFBTXZhLEtBQU1vYSxJQUdiLFNBQVczQixFQUFLdkcsR0FDZmxRLEVBQU9pQixLQUFNaVAsRUFBTSxTQUFVMUksRUFBR3pELEdBQzFCdkYsRUFBWXVGLEdBQ1YvQixFQUFRNFMsUUFBV2EsRUFBS1csSUFBS3JTLElBQ2xDbUMsRUFBS2xJLEtBQU0rRixHQUVEQSxHQUFPQSxFQUFJeEQsUUFBNEIsV0FBbEJSLEVBQVFnRSxJQUd4QzBTLEVBQUsxUyxLQVRSLENBWUt6QyxXQUVBOFcsSUFBV0QsR0FDZk0sS0FHS2hiLE1BSVJtYixPQUFRLFdBWVAsT0FYQTVZLEVBQU9pQixLQUFNSyxVQUFXLFNBQVVrRyxFQUFHekQsR0FFcEMsSUFEQSxJQUFJd1MsR0FDTUEsRUFBUXZXLEVBQU95RCxRQUFTTSxFQUFLbUMsRUFBTXFRLEtBQWEsR0FDekRyUSxFQUFLcEUsT0FBUXlVLEVBQU8sR0FHZkEsR0FBU2lDLEdBQ2JBLE1BSUkvYSxNQUtSMlksSUFBSyxTQUFValcsR0FDZCxPQUFPQSxFQUNOSCxFQUFPeUQsUUFBU3RELEVBQUkrRixJQUFVLEVBQzlCQSxFQUFLM0YsT0FBUyxHQUloQnNZLE1BQU8sV0FJTixPQUhLM1MsSUFDSkEsRUFBTyxJQUVEekksTUFNUnFiLFFBQVMsV0FHUixPQUZBUixFQUFTQyxFQUFRLEdBQ2pCclMsRUFBT2tTLEVBQVMsR0FDVDNhLE1BRVI2SyxTQUFVLFdBQ1QsT0FBUXBDLEdBTVQ2UyxLQUFNLFdBS0wsT0FKQVQsRUFBU0MsRUFBUSxHQUNYSCxHQUFXRCxJQUNoQmpTLEVBQU9rUyxFQUFTLElBRVYzYSxNQUVSNmEsT0FBUSxXQUNQLFFBQVNBLEdBSVZVLFNBQVUsU0FBVTlZLEVBQVNnUSxHQVM1QixPQVJNb0ksSUFFTHBJLEVBQU8sQ0FBRWhRLEdBRFRnUSxFQUFPQSxHQUFRLElBQ1FwUyxNQUFRb1MsRUFBS3BTLFFBQVVvUyxHQUM5Q3FJLEVBQU12YSxLQUFNa1MsR0FDTmlJLEdBQ0xNLEtBR0toYixNQUlSZ2IsS0FBTSxXQUVMLE9BREFoRCxFQUFLdUQsU0FBVXZiLEtBQU02RCxXQUNkN0QsTUFJUjRhLE1BQU8sV0FDTixRQUFTQSxJQUlaLE9BQU81QyxHQTRDUnpWLEVBQU8rQixPQUFRLENBRWRrWCxTQUFVLFNBQVVDLEdBQ25CLElBQUlDLEVBQVMsQ0FJWCxDQUFFLFNBQVUsV0FBWW5aLEVBQU9nWSxVQUFXLFVBQ3pDaFksRUFBT2dZLFVBQVcsVUFBWSxHQUMvQixDQUFFLFVBQVcsT0FBUWhZLEVBQU9nWSxVQUFXLGVBQ3RDaFksRUFBT2dZLFVBQVcsZUFBaUIsRUFBRyxZQUN2QyxDQUFFLFNBQVUsT0FBUWhZLEVBQU9nWSxVQUFXLGVBQ3JDaFksRUFBT2dZLFVBQVcsZUFBaUIsRUFBRyxhQUV4Q29CLEVBQVEsVUFDUnZCLEVBQVUsQ0FDVHVCLE1BQU8sV0FDTixPQUFPQSxHQUVSQyxPQUFRLFdBRVAsT0FEQUMsRUFBUy9ULEtBQU1qRSxXQUFZd1csS0FBTXhXLFdBQzFCN0QsTUFFUixNQUFTLFNBQVUwQyxHQUNsQixPQUFPMFgsRUFBUUUsS0FBTSxLQUFNNVgsSUFJNUJvWixLQUFNLFdBQ0wsSUFBSUMsRUFBTWxZLFVBRVYsT0FBT3RCLEVBQU9pWixTQUFVLFNBQVVRLEdBQ2pDelosRUFBT2lCLEtBQU1rWSxFQUFRLFNBQVVoZSxFQUFHdWUsR0FHakMsSUFBSXZaLEVBQUszQixFQUFZZ2IsRUFBS0UsRUFBTyxNQUFXRixFQUFLRSxFQUFPLElBS3hESixFQUFVSSxFQUFPLElBQU8sV0FDdkIsSUFBSUMsRUFBV3haLEdBQU1BLEVBQUdrQixNQUFPNUQsS0FBTTZELFdBQ2hDcVksR0FBWW5iLEVBQVltYixFQUFTOUIsU0FDckM4QixFQUFTOUIsVUFDUCtCLFNBQVVILEVBQVNJLFFBQ25CdFUsS0FBTWtVLEVBQVNoQyxTQUNmSyxLQUFNMkIsRUFBUy9CLFFBRWpCK0IsRUFBVUMsRUFBTyxHQUFNLFFBQ3RCamMsS0FDQTBDLEVBQUssQ0FBRXdaLEdBQWFyWSxlQUt4QmtZLEVBQU0sT0FDSDNCLFdBRUxFLEtBQU0sU0FBVStCLEVBQWFDLEVBQVlDLEdBQ3hDLElBQUlDLEVBQVcsRUFDZixTQUFTeEMsRUFBU3lDLEVBQU9aLEVBQVU1TyxFQUFTeVAsR0FDM0MsT0FBTyxXQUNOLElBQUlDLEVBQU8zYyxLQUNWeVMsRUFBTzVPLFVBQ1ArWSxFQUFhLFdBQ1osSUFBSVYsRUFBVTVCLEVBS2QsS0FBS21DLEVBQVFELEdBQWIsQ0FRQSxJQUpBTixFQUFXalAsRUFBUXJKLE1BQU8rWSxFQUFNbEssTUFJZG9KLEVBQVN6QixVQUMxQixNQUFNLElBQUl5QyxVQUFXLDRCQU90QnZDLEVBQU80QixJQUtnQixpQkFBYkEsR0FDWSxtQkFBYkEsSUFDUkEsRUFBUzVCLEtBR0x2WixFQUFZdVosR0FHWG9DLEVBQ0pwQyxFQUFLemMsS0FDSnFlLEVBQ0FsQyxFQUFTd0MsRUFBVVgsRUFBVWxDLEVBQVUrQyxHQUN2QzFDLEVBQVN3QyxFQUFVWCxFQUFVaEMsRUFBUzZDLEtBT3ZDRixJQUVBbEMsRUFBS3pjLEtBQ0pxZSxFQUNBbEMsRUFBU3dDLEVBQVVYLEVBQVVsQyxFQUFVK0MsR0FDdkMxQyxFQUFTd0MsRUFBVVgsRUFBVWhDLEVBQVM2QyxHQUN0QzFDLEVBQVN3QyxFQUFVWCxFQUFVbEMsRUFDNUJrQyxFQUFTaUIsZUFTUDdQLElBQVkwTSxJQUNoQmdELE9BQU8zWCxFQUNQeU4sRUFBTyxDQUFFeUosS0FLUlEsR0FBV2IsRUFBU2tCLGFBQWVKLEVBQU1sSyxNQUs3Q3VLLEVBQVVOLEVBQ1RFLEVBQ0EsV0FDQyxJQUNDQSxJQUNDLE1BQVExUixHQUVKM0ksRUFBT2laLFNBQVN5QixlQUNwQjFhLEVBQU9pWixTQUFTeUIsY0FBZS9SLEVBQzlCOFIsRUFBUUUsWUFNTFQsRUFBUSxHQUFLRCxJQUladlAsSUFBWTRNLElBQ2hCOEMsT0FBTzNYLEVBQ1B5TixFQUFPLENBQUV2SCxJQUdWMlEsRUFBU3NCLFdBQVlSLEVBQU1sSyxNQVMzQmdLLEVBQ0pPLEtBS0t6YSxFQUFPaVosU0FBUzRCLGVBQ3BCSixFQUFRRSxXQUFhM2EsRUFBT2laLFNBQVM0QixnQkFFdENyZCxFQUFPc2QsV0FBWUwsS0FLdEIsT0FBT3phLEVBQU9pWixTQUFVLFNBQVVRLEdBR2pDTixFQUFRLEdBQUssR0FBSTFDLElBQ2hCZ0IsRUFDQyxFQUNBZ0MsRUFDQWpiLEVBQVl3YixHQUNYQSxFQUNBNUMsRUFDRHFDLEVBQVNjLGFBS1hwQixFQUFRLEdBQUssR0FBSTFDLElBQ2hCZ0IsRUFDQyxFQUNBZ0MsRUFDQWpiLEVBQVlzYixHQUNYQSxFQUNBMUMsSUFLSCtCLEVBQVEsR0FBSyxHQUFJMUMsSUFDaEJnQixFQUNDLEVBQ0FnQyxFQUNBamIsRUFBWXViLEdBQ1hBLEVBQ0F6QyxNQUdBTyxXQUtMQSxRQUFTLFNBQVVwWixHQUNsQixPQUFjLE1BQVBBLEVBQWN1QixFQUFPK0IsT0FBUXRELEVBQUtvWixHQUFZQSxJQUd2RHlCLEVBQVcsR0FrRVosT0EvREF0WixFQUFPaUIsS0FBTWtZLEVBQVEsU0FBVWhlLEVBQUd1ZSxHQUNqQyxJQUFJeFQsRUFBT3dULEVBQU8sR0FDakJxQixFQUFjckIsRUFBTyxHQUt0QjdCLEVBQVM2QixFQUFPLElBQVF4VCxFQUFLdVEsSUFHeEJzRSxHQUNKN1UsRUFBS3VRLElBQ0osV0FJQzJDLEVBQVEyQixHQUtUNUIsRUFBUSxFQUFJaGUsR0FBSyxHQUFJMmQsUUFJckJLLEVBQVEsRUFBSWhlLEdBQUssR0FBSTJkLFFBR3JCSyxFQUFRLEdBQUssR0FBSUosS0FHakJJLEVBQVEsR0FBSyxHQUFJSixNQU9uQjdTLEVBQUt1USxJQUFLaUQsRUFBTyxHQUFJakIsTUFLckJhLEVBQVVJLEVBQU8sSUFBUSxXQUV4QixPQURBSixFQUFVSSxFQUFPLEdBQU0sUUFBVWpjLE9BQVM2YixPQUFXN1csRUFBWWhGLEtBQU02RCxXQUNoRTdELE1BTVI2YixFQUFVSSxFQUFPLEdBQU0sUUFBV3hULEVBQUs4UyxXQUl4Q25CLEVBQVFBLFFBQVN5QixHQUdaSixHQUNKQSxFQUFLNWQsS0FBTWdlLEVBQVVBLEdBSWZBLEdBSVIwQixLQUFNLFNBQVVDLEdBQ2YsSUFHQ0MsRUFBWTVaLFVBQVVmLE9BR3RCcEYsRUFBSStmLEVBR0pDLEVBQWtCNVksTUFBT3BILEdBQ3pCaWdCLEVBQWdCdGQsRUFBTXhDLEtBQU1nRyxXQUc1QitaLEVBQVNyYixFQUFPaVosV0FHaEJxQyxFQUFhLFNBQVVuZ0IsR0FDdEIsT0FBTyxTQUFVaUIsR0FDaEIrZSxFQUFpQmhnQixHQUFNc0MsS0FDdkIyZCxFQUFlamdCLEdBQU1tRyxVQUFVZixPQUFTLEVBQUl6QyxFQUFNeEMsS0FBTWdHLFdBQWNsRixJQUM1RDhlLEdBQ1RHLEVBQU9iLFlBQWFXLEVBQWlCQyxLQU16QyxHQUFLRixHQUFhLElBQ2pCMUQsRUFBWXlELEVBQWFJLEVBQU85VixLQUFNK1YsRUFBWW5nQixJQUFNc2MsUUFBUzRELEVBQU8zRCxRQUN0RXdELEdBR3NCLFlBQW5CRyxFQUFPakMsU0FDWDVhLEVBQVk0YyxFQUFlamdCLElBQU9pZ0IsRUFBZWpnQixHQUFJNGMsT0FFckQsT0FBT3NELEVBQU90RCxPQUtoQixLQUFRNWMsS0FDUHFjLEVBQVk0RCxFQUFlamdCLEdBQUttZ0IsRUFBWW5nQixHQUFLa2dCLEVBQU8zRCxRQUd6RCxPQUFPMkQsRUFBT3hELGFBT2hCLElBQUkwRCxFQUFjLHlEQUVsQnZiLEVBQU9pWixTQUFTeUIsY0FBZ0IsU0FBVTNYLEVBQU95WSxHQUkzQ2hlLEVBQU9pZSxTQUFXamUsRUFBT2llLFFBQVFDLE1BQVEzWSxHQUFTd1ksRUFBWTdSLEtBQU0zRyxFQUFNckgsT0FDOUU4QixFQUFPaWUsUUFBUUMsS0FBTSw4QkFBZ0MzWSxFQUFNNFksUUFBUzVZLEVBQU15WSxNQUFPQSxJQU9uRnhiLEVBQU80YixlQUFpQixTQUFVN1ksR0FDakN2RixFQUFPc2QsV0FBWSxXQUNsQixNQUFNL1gsS0FRUixJQUFJOFksRUFBWTdiLEVBQU9pWixXQWtEdkIsU0FBUzZDLElBQ1J6ZSxFQUFTMGUsb0JBQXFCLG1CQUFvQkQsR0FDbER0ZSxFQUFPdWUsb0JBQXFCLE9BQVFELEdBQ3BDOWIsRUFBTzZWLFFBbkRSN1YsRUFBT0csR0FBRzBWLE1BQVEsU0FBVTFWLEdBWTNCLE9BVkEwYixFQUNFOUQsS0FBTTVYLEdBS042YixNQUFPLFNBQVVqWixHQUNqQi9DLEVBQU80YixlQUFnQjdZLEtBR2xCdEYsTUFHUnVDLEVBQU8rQixPQUFRLENBR2RlLFNBQVMsRUFJVG1aLFVBQVcsRUFHWHBHLE1BQU8sU0FBVXFHLEtBR0YsSUFBVEEsSUFBa0JsYyxFQUFPaWMsVUFBWWpjLEVBQU84QyxXQUtqRDlDLEVBQU84QyxTQUFVLEdBR0gsSUFBVG9aLEtBQW1CbGMsRUFBT2ljLFVBQVksR0FLM0NKLEVBQVVyQixZQUFhbmQsRUFBVSxDQUFFMkMsUUFJckNBLEVBQU82VixNQUFNa0MsS0FBTzhELEVBQVU5RCxLQWFELGFBQXhCMWEsRUFBUzhlLFlBQ2EsWUFBeEI5ZSxFQUFTOGUsYUFBNkI5ZSxFQUFTcU8sZ0JBQWdCMFEsU0FHakU1ZSxFQUFPc2QsV0FBWTlhLEVBQU82VixRQUsxQnhZLEVBQVMwTyxpQkFBa0IsbUJBQW9CK1AsR0FHL0N0ZSxFQUFPdU8saUJBQWtCLE9BQVErUCxJQVFsQyxJQUFJTyxFQUFTLFNBQVV4YixFQUFPVixFQUFJekQsRUFBS04sRUFBT2tnQixFQUFXQyxFQUFVQyxHQUNsRSxJQUFJcmhCLEVBQUksRUFDUHVHLEVBQU1iLEVBQU1OLE9BQ1prYyxFQUFjLE1BQVAvZixFQUdSLEdBQXVCLFdBQWxCcUQsRUFBUXJELEdBRVosSUFBTXZCLEtBRE5taEIsR0FBWSxFQUNENWYsRUFDVjJmLEVBQVF4YixFQUFPVixFQUFJaEYsRUFBR3VCLEVBQUt2QixJQUFLLEVBQU1vaEIsRUFBVUMsUUFJM0MsUUFBZS9aLElBQVZyRyxJQUNYa2dCLEdBQVksRUFFTjlkLEVBQVlwQyxLQUNqQm9nQixHQUFNLEdBR0ZDLElBR0NELEdBQ0pyYyxFQUFHN0UsS0FBTXVGLEVBQU96RSxHQUNoQitELEVBQUssT0FJTHNjLEVBQU90YyxFQUNQQSxFQUFLLFNBQVVpQixFQUFNMUUsRUFBS04sR0FDekIsT0FBT3FnQixFQUFLbmhCLEtBQU0wRSxFQUFRb0IsR0FBUWhGLE1BS2hDK0QsR0FDSixLQUFRaEYsRUFBSXVHLEVBQUt2RyxJQUNoQmdGLEVBQ0NVLEVBQU8xRixHQUFLdUIsRUFBSzhmLEVBQ2pCcGdCLEVBQ0FBLEVBQU1kLEtBQU11RixFQUFPMUYsR0FBS0EsRUFBR2dGLEVBQUlVLEVBQU8xRixHQUFLdUIsS0FNL0MsT0FBSzRmLEVBQ0d6YixFQUlINGIsRUFDR3RjLEVBQUc3RSxLQUFNdUYsR0FHVmEsRUFBTXZCLEVBQUlVLEVBQU8sR0FBS25FLEdBQVE2ZixHQUtsQ0csRUFBWSxRQUNmQyxFQUFhLFlBR2QsU0FBU0MsRUFBWUMsRUFBS0MsR0FDekIsT0FBT0EsRUFBT0MsY0FNZixTQUFTQyxFQUFXQyxHQUNuQixPQUFPQSxFQUFPcGEsUUFBUzZaLEVBQVcsT0FBUTdaLFFBQVM4WixFQUFZQyxHQUVoRSxJQUFJTSxFQUFhLFNBQVVDLEdBUTFCLE9BQTBCLElBQW5CQSxFQUFNemUsVUFBcUMsSUFBbkJ5ZSxFQUFNemUsWUFBc0J5ZSxFQUFNemUsVUFNbEUsU0FBUzBlLElBQ1IzZixLQUFLaUYsUUFBVTFDLEVBQU8wQyxRQUFVMGEsRUFBS0MsTUFHdENELEVBQUtDLElBQU0sRUFFWEQsRUFBS3JnQixVQUFZLENBRWhCbU4sTUFBTyxTQUFVaVQsR0FHaEIsSUFBSS9nQixFQUFRK2dCLEVBQU8xZixLQUFLaUYsU0E0QnhCLE9BekJNdEcsSUFDTEEsRUFBUSxHQUtIOGdCLEVBQVlDLEtBSVhBLEVBQU16ZSxTQUNWeWUsRUFBTzFmLEtBQUtpRixTQUFZdEcsRUFNeEJQLE9BQU9DLGVBQWdCcWhCLEVBQU8xZixLQUFLaUYsUUFBUyxDQUMzQ3RHLE1BQU9BLEVBQ1BraEIsY0FBYyxNQU1YbGhCLEdBRVJtaEIsSUFBSyxTQUFVSixFQUFPSyxFQUFNcGhCLEdBQzNCLElBQUlxaEIsRUFDSHZULEVBQVF6TSxLQUFLeU0sTUFBT2lULEdBSXJCLEdBQXFCLGlCQUFUSyxFQUNYdFQsRUFBTzhTLEVBQVdRLElBQVdwaEIsT0FNN0IsSUFBTXFoQixLQUFRRCxFQUNidFQsRUFBTzhTLEVBQVdTLElBQVdELEVBQU1DLEdBR3JDLE9BQU92VCxHQUVSbE8sSUFBSyxTQUFVbWhCLEVBQU96Z0IsR0FDckIsWUFBZStGLElBQVIvRixFQUNOZSxLQUFLeU0sTUFBT2lULEdBR1pBLEVBQU8xZixLQUFLaUYsVUFBYXlhLEVBQU8xZixLQUFLaUYsU0FBV3NhLEVBQVd0Z0IsS0FFN0QyZixPQUFRLFNBQVVjLEVBQU96Z0IsRUFBS04sR0FhN0IsWUFBYXFHLElBQVIvRixHQUNDQSxHQUFzQixpQkFBUkEsUUFBZ0MrRixJQUFWckcsRUFFbENxQixLQUFLekIsSUFBS21oQixFQUFPemdCLElBU3pCZSxLQUFLOGYsSUFBS0osRUFBT3pnQixFQUFLTixRQUlMcUcsSUFBVnJHLEVBQXNCQSxFQUFRTSxJQUV0Q2tjLE9BQVEsU0FBVXVFLEVBQU96Z0IsR0FDeEIsSUFBSXZCLEVBQ0grTyxFQUFRaVQsRUFBTzFmLEtBQUtpRixTQUVyQixRQUFlRCxJQUFWeUgsRUFBTCxDQUlBLFFBQWF6SCxJQUFSL0YsRUFBb0IsQ0FrQnhCdkIsR0FYQ3VCLEVBSkk2RixNQUFNQyxRQUFTOUYsR0FJYkEsRUFBSXlFLElBQUs2YixJQUVmdGdCLEVBQU1zZ0IsRUFBV3RnQixNQUlKd04sRUFDWixDQUFFeE4sR0FDQUEsRUFBSXFNLE1BQU9vTyxJQUFtQixJQUcxQjVXLE9BRVIsS0FBUXBGLFlBQ0ErTyxFQUFPeE4sRUFBS3ZCLFVBS1JzSCxJQUFSL0YsR0FBcUJzRCxFQUFPb0QsY0FBZThHLE1BTTFDaVQsRUFBTXplLFNBQ1Z5ZSxFQUFPMWYsS0FBS2lGLGNBQVlELFNBRWpCMGEsRUFBTzFmLEtBQUtpRixZQUl0QmdiLFFBQVMsU0FBVVAsR0FDbEIsSUFBSWpULEVBQVFpVCxFQUFPMWYsS0FBS2lGLFNBQ3hCLFlBQWlCRCxJQUFWeUgsSUFBd0JsSyxFQUFPb0QsY0FBZThHLEtBR3ZELElBQUl5VCxFQUFXLElBQUlQLEVBRWZRLEVBQVcsSUFBSVIsRUFjZlMsR0FBUyxnQ0FDWkMsR0FBYSxTQTJCZCxTQUFTQyxHQUFVM2MsRUFBTTFFLEVBQUs4Z0IsR0FDN0IsSUFBSTloQixFQUlKLFFBQWMrRyxJQUFUK2EsR0FBd0MsSUFBbEJwYyxFQUFLMUMsU0FJL0IsR0FIQWhELEVBQU8sUUFBVWdCLEVBQUltRyxRQUFTaWIsR0FBWSxPQUFRM1osY0FHN0IsaUJBRnJCcVosRUFBT3BjLEVBQUszQixhQUFjL0QsSUFFTSxDQUMvQixJQUNDOGhCLEVBcENKLFNBQWtCQSxHQUNqQixNQUFjLFNBQVRBLEdBSVMsVUFBVEEsSUFJUyxTQUFUQSxFQUNHLEtBSUhBLEtBQVVBLEVBQU8sSUFDYkEsRUFHSkssR0FBT25VLEtBQU04VCxHQUNWUSxLQUFLQyxNQUFPVCxHQUdiQSxHQWNHVSxDQUFTVixHQUNmLE1BQVE3VSxJQUdWaVYsRUFBU0wsSUFBS25jLEVBQU0xRSxFQUFLOGdCLFFBRXpCQSxPQUFPL2EsRUFHVCxPQUFPK2EsRUFHUnhkLEVBQU8rQixPQUFRLENBQ2QyYixRQUFTLFNBQVV0YyxHQUNsQixPQUFPd2MsRUFBU0YsUUFBU3RjLElBQVV1YyxFQUFTRCxRQUFTdGMsSUFHdERvYyxLQUFNLFNBQVVwYyxFQUFNMUYsRUFBTThoQixHQUMzQixPQUFPSSxFQUFTdkIsT0FBUWpiLEVBQU0xRixFQUFNOGhCLElBR3JDVyxXQUFZLFNBQVUvYyxFQUFNMUYsR0FDM0JraUIsRUFBU2hGLE9BQVF4WCxFQUFNMUYsSUFLeEIwaUIsTUFBTyxTQUFVaGQsRUFBTTFGLEVBQU04aEIsR0FDNUIsT0FBT0csRUFBU3RCLE9BQVFqYixFQUFNMUYsRUFBTThoQixJQUdyQ2EsWUFBYSxTQUFVamQsRUFBTTFGLEdBQzVCaWlCLEVBQVMvRSxPQUFReFgsRUFBTTFGLE1BSXpCc0UsRUFBT0csR0FBRzRCLE9BQVEsQ0FDakJ5YixLQUFNLFNBQVU5Z0IsRUFBS04sR0FDcEIsSUFBSWpCLEVBQUdPLEVBQU04aEIsRUFDWnBjLEVBQU8zRCxLQUFNLEdBQ2JnTixFQUFRckosR0FBUUEsRUFBS2tGLFdBR3RCLFFBQWE3RCxJQUFSL0YsRUFBb0IsQ0FDeEIsR0FBS2UsS0FBSzhDLFNBQ1RpZCxFQUFPSSxFQUFTNWhCLElBQUtvRixHQUVFLElBQWxCQSxFQUFLMUMsV0FBbUJpZixFQUFTM2hCLElBQUtvRixFQUFNLGlCQUFtQixDQUVuRSxJQURBakcsRUFBSXNQLEVBQU1sSyxPQUNGcEYsS0FJRnNQLEVBQU90UCxJQUVzQixLQURqQ08sRUFBTytPLEVBQU90UCxHQUFJTyxNQUNSdUMsUUFBUyxXQUNsQnZDLEVBQU9zaEIsRUFBV3RoQixFQUFLb0MsTUFBTyxJQUM5QmlnQixHQUFVM2MsRUFBTTFGLEVBQU04aEIsRUFBTTloQixLQUkvQmlpQixFQUFTSixJQUFLbmMsRUFBTSxnQkFBZ0IsR0FJdEMsT0FBT29jLEVBSVIsTUFBb0IsaUJBQVI5Z0IsRUFDSmUsS0FBS3dELEtBQU0sV0FDakIyYyxFQUFTTCxJQUFLOWYsS0FBTWYsS0FJZjJmLEVBQVE1ZSxLQUFNLFNBQVVyQixHQUM5QixJQUFJb2hCLEVBT0osR0FBS3BjLFFBQWtCcUIsSUFBVnJHLEVBS1osWUFBY3FHLEtBRGQrYSxFQUFPSSxFQUFTNWhCLElBQUtvRixFQUFNMUUsSUFFbkI4Z0IsT0FNTS9hLEtBRGQrYSxFQUFPTyxHQUFVM2MsRUFBTTFFLElBRWY4Z0IsT0FJUixFQUlEL2YsS0FBS3dELEtBQU0sV0FHVjJjLEVBQVNMLElBQUs5ZixLQUFNZixFQUFLTixNQUV4QixLQUFNQSxFQUFPa0YsVUFBVWYsT0FBUyxFQUFHLE1BQU0sSUFHN0M0ZCxXQUFZLFNBQVV6aEIsR0FDckIsT0FBT2UsS0FBS3dELEtBQU0sV0FDakIyYyxFQUFTaEYsT0FBUW5iLEtBQU1mLFFBTTFCc0QsRUFBTytCLE9BQVEsQ0FDZHdXLE1BQU8sU0FBVW5YLEVBQU12QyxFQUFNMmUsR0FDNUIsSUFBSWpGLEVBRUosR0FBS25YLEVBWUosT0FYQXZDLEdBQVNBLEdBQVEsTUFBUyxRQUMxQjBaLEVBQVFvRixFQUFTM2hCLElBQUtvRixFQUFNdkMsR0FHdkIyZSxLQUNFakYsR0FBU2hXLE1BQU1DLFFBQVNnYixHQUM3QmpGLEVBQVFvRixFQUFTdEIsT0FBUWpiLEVBQU12QyxFQUFNbUIsRUFBT3VELFVBQVdpYSxJQUV2RGpGLEVBQU12YSxLQUFNd2YsSUFHUGpGLEdBQVMsSUFJbEIrRixRQUFTLFNBQVVsZCxFQUFNdkMsR0FDeEJBLEVBQU9BLEdBQVEsS0FFZixJQUFJMFosRUFBUXZZLEVBQU91WSxNQUFPblgsRUFBTXZDLEdBQy9CMGYsRUFBY2hHLEVBQU1oWSxPQUNwQkosRUFBS29ZLEVBQU1uTyxRQUNYb1UsRUFBUXhlLEVBQU95ZSxZQUFhcmQsRUFBTXZDLEdBTXZCLGVBQVBzQixJQUNKQSxFQUFLb1ksRUFBTW5PLFFBQ1htVSxLQUdJcGUsSUFJVSxPQUFUdEIsR0FDSjBaLEVBQU01SyxRQUFTLHFCQUlUNlEsRUFBTUUsS0FDYnZlLEVBQUc3RSxLQUFNOEYsRUFwQkYsV0FDTnBCLEVBQU9zZSxRQUFTbGQsRUFBTXZDLElBbUJGMmYsS0FHaEJELEdBQWVDLEdBQ3BCQSxFQUFNM0YsTUFBTUosUUFLZGdHLFlBQWEsU0FBVXJkLEVBQU12QyxHQUM1QixJQUFJbkMsRUFBTW1DLEVBQU8sYUFDakIsT0FBTzhlLEVBQVMzaEIsSUFBS29GLEVBQU0xRSxJQUFTaWhCLEVBQVN0QixPQUFRamIsRUFBTTFFLEVBQUssQ0FDL0RtYyxNQUFPN1ksRUFBT2dZLFVBQVcsZUFBZ0J2QixJQUFLLFdBQzdDa0gsRUFBUy9FLE9BQVF4WCxFQUFNLENBQUV2QyxFQUFPLFFBQVNuQyxXQU03Q3NELEVBQU9HLEdBQUc0QixPQUFRLENBQ2pCd1csTUFBTyxTQUFVMVosRUFBTTJlLEdBQ3RCLElBQUltQixFQUFTLEVBUWIsTUFOcUIsaUJBQVQ5ZixJQUNYMmUsRUFBTzNlLEVBQ1BBLEVBQU8sS0FDUDhmLEtBR0lyZCxVQUFVZixPQUFTb2UsRUFDaEIzZSxFQUFPdVksTUFBTzlhLEtBQU0sR0FBS29CLFFBR2pCNEQsSUFBVCthLEVBQ04vZixLQUNBQSxLQUFLd0QsS0FBTSxXQUNWLElBQUlzWCxFQUFRdlksRUFBT3VZLE1BQU85YSxLQUFNb0IsRUFBTTJlLEdBR3RDeGQsRUFBT3llLFlBQWFoaEIsS0FBTW9CLEdBRVosT0FBVEEsR0FBZ0MsZUFBZjBaLEVBQU8sSUFDNUJ2WSxFQUFPc2UsUUFBUzdnQixLQUFNb0IsTUFJMUJ5ZixRQUFTLFNBQVV6ZixHQUNsQixPQUFPcEIsS0FBS3dELEtBQU0sV0FDakJqQixFQUFPc2UsUUFBUzdnQixLQUFNb0IsTUFHeEIrZixXQUFZLFNBQVUvZixHQUNyQixPQUFPcEIsS0FBSzhhLE1BQU8xWixHQUFRLEtBQU0sS0FLbENnWixRQUFTLFNBQVVoWixFQUFNSixHQUN4QixJQUFJaU8sRUFDSG1TLEVBQVEsRUFDUkMsRUFBUTllLEVBQU9pWixXQUNmcEwsRUFBV3BRLEtBQ1h0QyxFQUFJc0MsS0FBSzhDLE9BQ1RrWCxFQUFVLGFBQ0NvSCxHQUNUQyxFQUFNdEUsWUFBYTNNLEVBQVUsQ0FBRUEsS0FVbEMsSUFOcUIsaUJBQVRoUCxJQUNYSixFQUFNSSxFQUNOQSxPQUFPNEQsR0FFUjVELEVBQU9BLEdBQVEsS0FFUDFELE1BQ1B1UixFQUFNaVIsRUFBUzNoQixJQUFLNlIsRUFBVTFTLEdBQUswRCxFQUFPLGdCQUM5QjZOLEVBQUltTSxRQUNmZ0csSUFDQW5TLEVBQUltTSxNQUFNcEMsSUFBS2dCLElBSWpCLE9BREFBLElBQ09xSCxFQUFNakgsUUFBU3BaLE1BR3hCLElBQUlzZ0IsR0FBTyxzQ0FBMENDLE9BRWpEQyxHQUFVLElBQUl4WSxPQUFRLGlCQUFtQnNZLEdBQU8sY0FBZSxLQUcvREcsR0FBWSxDQUFFLE1BQU8sUUFBUyxTQUFVLFFBRXhDeFQsR0FBa0JyTyxFQUFTcU8sZ0JBSTFCeVQsR0FBYSxTQUFVL2QsR0FDekIsT0FBT3BCLEVBQU9tRixTQUFVL0QsRUFBSytILGNBQWUvSCxJQUU3Q2dlLEdBQVcsQ0FBRUEsVUFBVSxHQU9uQjFULEdBQWdCMlQsY0FDcEJGLEdBQWEsU0FBVS9kLEdBQ3RCLE9BQU9wQixFQUFPbUYsU0FBVS9ELEVBQUsrSCxjQUFlL0gsSUFDM0NBLEVBQUtpZSxZQUFhRCxNQUFlaGUsRUFBSytILGdCQUcxQyxJQUFJbVcsR0FBcUIsU0FBVWxlLEVBQU1tSixHQU92QyxNQUE4QixVQUg5Qm5KLEVBQU9tSixHQUFNbkosR0FHRG1lLE1BQU1DLFNBQ00sS0FBdkJwZSxFQUFLbWUsTUFBTUMsU0FNWEwsR0FBWS9kLElBRXNCLFNBQWxDcEIsRUFBT3lmLElBQUtyZSxFQUFNLFlBR2pCc2UsR0FBTyxTQUFVdGUsRUFBTVksRUFBU2QsRUFBVWdQLEdBQzdDLElBQUlwUCxFQUFLcEYsRUFDUmlrQixFQUFNLEdBR1AsSUFBTWprQixLQUFRc0csRUFDYjJkLEVBQUtqa0IsR0FBUzBGLEVBQUttZSxNQUFPN2pCLEdBQzFCMEYsRUFBS21lLE1BQU83akIsR0FBU3NHLEVBQVN0RyxHQU0vQixJQUFNQSxLQUhOb0YsRUFBTUksRUFBU0csTUFBT0QsRUFBTThPLEdBQVEsSUFHdEJsTyxFQUNiWixFQUFLbWUsTUFBTzdqQixHQUFTaWtCLEVBQUtqa0IsR0FHM0IsT0FBT29GLEdBTVIsU0FBUzhlLEdBQVd4ZSxFQUFNcWMsRUFBTW9DLEVBQVlDLEdBQzNDLElBQUlDLEVBQVVDLEVBQ2JDLEVBQWdCLEdBQ2hCQyxFQUFlSixFQUNkLFdBQ0MsT0FBT0EsRUFBTWpWLE9BRWQsV0FDQyxPQUFPN0ssRUFBT3lmLElBQUtyZSxFQUFNcWMsRUFBTSxLQUVqQzBDLEVBQVVELElBQ1ZFLEVBQU9QLEdBQWNBLEVBQVksS0FBUzdmLEVBQU9xZ0IsVUFBVzVDLEdBQVMsR0FBSyxNQUcxRTZDLEVBQWdCbGYsRUFBSzFDLFdBQ2xCc0IsRUFBT3FnQixVQUFXNUMsSUFBbUIsT0FBVDJDLElBQWtCRCxJQUNoRGxCLEdBQVE3VixLQUFNcEosRUFBT3lmLElBQUtyZSxFQUFNcWMsSUFFbEMsR0FBSzZDLEdBQWlCQSxFQUFlLEtBQVFGLEVBQU8sQ0FZbkQsSUFSQUQsR0FBb0IsRUFHcEJDLEVBQU9BLEdBQVFFLEVBQWUsR0FHOUJBLEdBQWlCSCxHQUFXLEVBRXBCRixLQUlQamdCLEVBQU91ZixNQUFPbmUsRUFBTXFjLEVBQU02QyxFQUFnQkYsSUFDbkMsRUFBSUosSUFBWSxHQUFNQSxFQUFRRSxJQUFpQkMsR0FBVyxNQUFXLElBQzNFRixFQUFnQixHQUVqQkssR0FBZ0NOLEVBSWpDTSxHQUFnQyxFQUNoQ3RnQixFQUFPdWYsTUFBT25lLEVBQU1xYyxFQUFNNkMsRUFBZ0JGLEdBRzFDUCxFQUFhQSxHQUFjLEdBZ0I1QixPQWJLQSxJQUNKUyxHQUFpQkEsSUFBa0JILEdBQVcsRUFHOUNKLEVBQVdGLEVBQVksR0FDdEJTLEdBQWtCVCxFQUFZLEdBQU0sR0FBTUEsRUFBWSxJQUNyREEsRUFBWSxHQUNUQyxJQUNKQSxFQUFNTSxLQUFPQSxFQUNiTixFQUFNbFEsTUFBUTBRLEVBQ2RSLEVBQU1sZSxJQUFNbWUsSUFHUEEsRUFJUixJQUFJUSxHQUFvQixHQUV4QixTQUFTQyxHQUFtQnBmLEdBQzNCLElBQUl1UixFQUNIdlQsRUFBTWdDLEVBQUsrSCxjQUNYWixFQUFXbkgsRUFBS21ILFNBQ2hCaVgsRUFBVWUsR0FBbUJoWSxHQUU5QixPQUFLaVgsSUFJTDdNLEVBQU92VCxFQUFJcWhCLEtBQUs3Z0IsWUFBYVIsRUFBSUcsY0FBZWdKLElBQ2hEaVgsRUFBVXhmLEVBQU95ZixJQUFLOU0sRUFBTSxXQUU1QkEsRUFBSzlTLFdBQVdDLFlBQWE2UyxHQUVaLFNBQVo2TSxJQUNKQSxFQUFVLFNBRVhlLEdBQW1CaFksR0FBYWlYLEVBRXpCQSxHQUdSLFNBQVNrQixHQUFVN1MsRUFBVThTLEdBTzVCLElBTkEsSUFBSW5CLEVBQVNwZSxFQUNad2YsRUFBUyxHQUNUckssRUFBUSxFQUNSaFcsRUFBU3NOLEVBQVN0TixPQUdYZ1csRUFBUWhXLEVBQVFnVyxLQUN2Qm5WLEVBQU95TSxFQUFVMEksSUFDTmdKLFFBSVhDLEVBQVVwZSxFQUFLbWUsTUFBTUMsUUFDaEJtQixHQUthLFNBQVpuQixJQUNKb0IsRUFBUXJLLEdBQVVvSCxFQUFTM2hCLElBQUtvRixFQUFNLFlBQWUsS0FDL0N3ZixFQUFRckssS0FDYm5WLEVBQUttZSxNQUFNQyxRQUFVLEtBR0ssS0FBdkJwZSxFQUFLbWUsTUFBTUMsU0FBa0JGLEdBQW9CbGUsS0FDckR3ZixFQUFRckssR0FBVWlLLEdBQW1CcGYsS0FHckIsU0FBWm9lLElBQ0pvQixFQUFRckssR0FBVSxPQUdsQm9ILEVBQVNKLElBQUtuYyxFQUFNLFVBQVdvZSxLQU1sQyxJQUFNakosRUFBUSxFQUFHQSxFQUFRaFcsRUFBUWdXLElBQ1IsTUFBbkJxSyxFQUFRckssS0FDWjFJLEVBQVUwSSxHQUFRZ0osTUFBTUMsUUFBVW9CLEVBQVFySyxJQUk1QyxPQUFPMUksRUFHUjdOLEVBQU9HLEdBQUc0QixPQUFRLENBQ2pCNGUsS0FBTSxXQUNMLE9BQU9ELEdBQVVqakIsTUFBTSxJQUV4Qm9qQixLQUFNLFdBQ0wsT0FBT0gsR0FBVWpqQixPQUVsQnFqQixPQUFRLFNBQVUxSCxHQUNqQixNQUFzQixrQkFBVkEsRUFDSkEsRUFBUTNiLEtBQUtrakIsT0FBU2xqQixLQUFLb2pCLE9BRzVCcGpCLEtBQUt3RCxLQUFNLFdBQ1pxZSxHQUFvQjdoQixNQUN4QnVDLEVBQVF2QyxNQUFPa2pCLE9BRWYzZ0IsRUFBUXZDLE1BQU9vakIsWUFLbkIsSUFBSUUsR0FBaUIsd0JBRWpCQyxHQUFXLGlDQUVYQyxHQUFjLHFDQUtkQyxHQUFVLENBR2JDLE9BQVEsQ0FBRSxFQUFHLCtCQUFnQyxhQUs3Q0MsTUFBTyxDQUFFLEVBQUcsVUFBVyxZQUN2QkMsSUFBSyxDQUFFLEVBQUcsb0JBQXFCLHVCQUMvQkMsR0FBSSxDQUFFLEVBQUcsaUJBQWtCLG9CQUMzQkMsR0FBSSxDQUFFLEVBQUcscUJBQXNCLHlCQUUvQkMsU0FBVSxDQUFFLEVBQUcsR0FBSSxLQVVwQixTQUFTQyxHQUFRdmhCLEVBQVN1TSxHQUl6QixJQUFJM0wsRUFZSixPQVRDQSxPQUQ0QyxJQUFqQ1osRUFBUXFKLHFCQUNickosRUFBUXFKLHFCQUFzQmtELEdBQU8sVUFFSSxJQUE3QnZNLEVBQVE0SixpQkFDcEI1SixFQUFRNEosaUJBQWtCMkMsR0FBTyxLQUdqQyxRQUdNaEssSUFBUmdLLEdBQXFCQSxHQUFPbEUsRUFBVXJJLEVBQVN1TSxHQUM1Q3pNLEVBQU9lLE1BQU8sQ0FBRWIsR0FBV1ksR0FHNUJBLEVBS1IsU0FBUzRnQixHQUFlN2dCLEVBQU84Z0IsR0FJOUIsSUFIQSxJQUFJeG1CLEVBQUksRUFDUEMsRUFBSXlGLEVBQU1OLE9BRUhwRixFQUFJQyxFQUFHRCxJQUNkd2lCLEVBQVNKLElBQ1IxYyxFQUFPMUYsR0FDUCxjQUNDd21CLEdBQWVoRSxFQUFTM2hCLElBQUsybEIsRUFBYXhtQixHQUFLLGVBdkNuRCtsQixHQUFRVSxTQUFXVixHQUFRQyxPQUUzQkQsR0FBUVcsTUFBUVgsR0FBUVksTUFBUVosR0FBUWEsU0FBV2IsR0FBUWMsUUFBVWQsR0FBUUUsTUFDN0VGLEdBQVFlLEdBQUtmLEdBQVFLLEdBMENyQixJQThGRVcsR0FDQXRWLEdBL0ZFNUYsR0FBUSxZQUVaLFNBQVNtYixHQUFldGhCLEVBQU9YLEVBQVNraUIsRUFBU0MsRUFBV0MsR0FPM0QsSUFOQSxJQUFJbGhCLEVBQU1zTCxFQUFLRCxFQUFLOFYsRUFBTUMsRUFBVTdnQixFQUNuQzhnQixFQUFXdmlCLEVBQVF3aUIseUJBQ25CQyxFQUFRLEdBQ1J4bkIsRUFBSSxFQUNKQyxFQUFJeUYsRUFBTU4sT0FFSHBGLEVBQUlDLEVBQUdELElBR2QsSUFGQWlHLEVBQU9QLEVBQU8xRixLQUVRLElBQVRpRyxFQUdaLEdBQXdCLFdBQW5CckIsRUFBUXFCLEdBSVpwQixFQUFPZSxNQUFPNGhCLEVBQU92aEIsRUFBSzFDLFNBQVcsQ0FBRTBDLEdBQVNBLFFBRzFDLEdBQU00RixHQUFNMEMsS0FBTXRJLEdBSWxCLENBVU4sSUFUQXNMLEVBQU1BLEdBQU8rVixFQUFTN2lCLFlBQWFNLEVBQVFYLGNBQWUsUUFHMURrTixHQUFRdVUsR0FBUzVYLEtBQU1oSSxJQUFVLENBQUUsR0FBSSxLQUFRLEdBQUkrQyxjQUNuRG9lLEVBQU9yQixHQUFTelUsSUFBU3lVLEdBQVFNLFNBQ2pDOVUsRUFBSUMsVUFBWTRWLEVBQU0sR0FBTXZpQixFQUFPNGlCLGNBQWV4aEIsR0FBU21oQixFQUFNLEdBR2pFNWdCLEVBQUk0Z0IsRUFBTSxHQUNGNWdCLEtBQ1ArSyxFQUFNQSxFQUFJcUQsVUFLWC9QLEVBQU9lLE1BQU80aEIsRUFBT2pXLEVBQUloRSxhQUd6QmdFLEVBQU0rVixFQUFTbFUsWUFHWEQsWUFBYyxRQXpCbEJxVSxFQUFNM2tCLEtBQU1rQyxFQUFRMmlCLGVBQWdCemhCLElBa0N2QyxJQUhBcWhCLEVBQVNuVSxZQUFjLEdBRXZCblQsRUFBSSxFQUNNaUcsRUFBT3VoQixFQUFPeG5CLE1BR3ZCLEdBQUtrbkIsR0FBYXJpQixFQUFPeUQsUUFBU3JDLEVBQU1paEIsSUFBZSxFQUNqREMsR0FDSkEsRUFBUXRrQixLQUFNb0QsUUFnQmhCLEdBWEFvaEIsRUFBV3JELEdBQVkvZCxHQUd2QnNMLEVBQU0rVSxHQUFRZ0IsRUFBUzdpQixZQUFhd0IsR0FBUSxVQUd2Q29oQixHQUNKZCxHQUFlaFYsR0FJWDBWLEVBRUosSUFEQXpnQixFQUFJLEVBQ01QLEVBQU9zTCxFQUFLL0ssTUFDaEJzZixHQUFZdlgsS0FBTXRJLEVBQUt2QyxNQUFRLEtBQ25DdWpCLEVBQVFwa0IsS0FBTW9ELEdBTWxCLE9BQU9xaEIsRUFNTlAsR0FEYzdrQixFQUFTcWxCLHlCQUNSOWlCLFlBQWF2QyxFQUFTa0MsY0FBZSxTQUNwRHFOLEdBQVF2UCxFQUFTa0MsY0FBZSxVQU0zQkcsYUFBYyxPQUFRLFNBQzVCa04sR0FBTWxOLGFBQWMsVUFBVyxXQUMvQmtOLEdBQU1sTixhQUFjLE9BQVEsS0FFNUJ3aUIsR0FBSXRpQixZQUFhZ04sSUFJakJyTyxFQUFRdWtCLFdBQWFaLEdBQUlhLFdBQVcsR0FBT0EsV0FBVyxHQUFPaFQsVUFBVWlCLFFBSXZFa1IsR0FBSXZWLFVBQVkseUJBQ2hCcE8sRUFBUXlrQixpQkFBbUJkLEdBQUlhLFdBQVcsR0FBT2hULFVBQVU0RSxhQUk1RCxJQUNDc08sR0FBWSxPQUNaQyxHQUFjLGlEQUNkQyxHQUFpQixzQkFFbEIsU0FBU0MsS0FDUixPQUFPLEVBR1IsU0FBU0MsS0FDUixPQUFPLEVBU1IsU0FBU0MsR0FBWWxpQixFQUFNdkMsR0FDMUIsT0FBU3VDLElBTVYsV0FDQyxJQUNDLE9BQU8vRCxFQUFTdVQsY0FDZixNQUFRMlMsS0FUUUMsS0FBcUMsVUFBVDNrQixHQVkvQyxTQUFTNGtCLEdBQUlyaUIsRUFBTXNpQixFQUFPempCLEVBQVV1ZCxFQUFNcmQsRUFBSXdqQixHQUM3QyxJQUFJQyxFQUFRL2tCLEVBR1osR0FBc0IsaUJBQVY2a0IsRUFBcUIsQ0FTaEMsSUFBTTdrQixJQU5tQixpQkFBYm9CLElBR1h1ZCxFQUFPQSxHQUFRdmQsRUFDZkEsT0FBV3dDLEdBRUVpaEIsRUFDYkQsR0FBSXJpQixFQUFNdkMsRUFBTW9CLEVBQVV1ZCxFQUFNa0csRUFBTzdrQixHQUFROGtCLEdBRWhELE9BQU92aUIsRUFzQlIsR0FuQmEsTUFBUm9jLEdBQXNCLE1BQU5yZCxHQUdwQkEsRUFBS0YsRUFDTHVkLEVBQU92ZCxPQUFXd0MsR0FDRCxNQUFOdEMsSUFDYyxpQkFBYkYsR0FHWEUsRUFBS3FkLEVBQ0xBLE9BQU8vYSxJQUlQdEMsRUFBS3FkLEVBQ0xBLEVBQU92ZCxFQUNQQSxPQUFXd0MsS0FHRCxJQUFQdEMsRUFDSkEsRUFBS2tqQixRQUNDLElBQU1sakIsRUFDWixPQUFPaUIsRUFlUixPQVphLElBQVJ1aUIsSUFDSkMsRUFBU3pqQixHQUNUQSxFQUFLLFNBQVUwakIsR0FJZCxPQURBN2pCLElBQVM4akIsSUFBS0QsR0FDUEQsRUFBT3ZpQixNQUFPNUQsS0FBTTZELGFBSXpCMEMsS0FBTzRmLEVBQU81ZixPQUFVNGYsRUFBTzVmLEtBQU9oRSxFQUFPZ0UsU0FFMUM1QyxFQUFLSCxLQUFNLFdBQ2pCakIsRUFBTzZqQixNQUFNcE4sSUFBS2haLEtBQU1pbUIsRUFBT3ZqQixFQUFJcWQsRUFBTXZkLEtBNGEzQyxTQUFTOGpCLEdBQWdCeFosRUFBSTFMLEVBQU15a0IsR0FHNUJBLEdBUU4zRixFQUFTSixJQUFLaFQsRUFBSTFMLEdBQU0sR0FDeEJtQixFQUFPNmpCLE1BQU1wTixJQUFLbE0sRUFBSTFMLEVBQU0sQ0FDM0IyTSxXQUFXLEVBQ1hkLFFBQVMsU0FBVW1aLEdBQ2xCLElBQUlHLEVBQVU3VSxFQUNiOFUsRUFBUXRHLEVBQVMzaEIsSUFBS3lCLEtBQU1vQixHQUU3QixHQUF5QixFQUFsQmdsQixFQUFNSyxXQUFtQnptQixLQUFNb0IsSUFLckMsR0FBTW9sQixFQUFNMWpCLFFBaUNFUCxFQUFPNmpCLE1BQU0xSixRQUFTdGIsSUFBVSxJQUFLc2xCLGNBQ2xETixFQUFNTyx1QkFmTixHQWRBSCxFQUFRbm1CLEVBQU14QyxLQUFNZ0csV0FDcEJxYyxFQUFTSixJQUFLOWYsS0FBTW9CLEVBQU1vbEIsR0FLMUJELEVBQVdWLEVBQVk3bEIsS0FBTW9CLEdBQzdCcEIsS0FBTW9CLEtBRURvbEIsS0FETDlVLEVBQVN3TyxFQUFTM2hCLElBQUt5QixLQUFNb0IsS0FDSm1sQixFQUN4QnJHLEVBQVNKLElBQUs5ZixLQUFNb0IsR0FBTSxHQUUxQnNRLEVBQVMsR0FFTDhVLElBQVU5VSxFQUtkLE9BRkEwVSxFQUFNUSwyQkFDTlIsRUFBTVMsaUJBQ0NuVixFQUFPL1MsV0FlTDZuQixFQUFNMWpCLFNBR2pCb2QsRUFBU0osSUFBSzlmLEtBQU1vQixFQUFNLENBQ3pCekMsTUFBTzRELEVBQU82akIsTUFBTVUsUUFJbkJ2a0IsRUFBTytCLE9BQVFraUIsRUFBTyxHQUFLamtCLEVBQU93a0IsTUFBTXpuQixXQUN4Q2tuQixFQUFNbm1CLE1BQU8sR0FDYkwsUUFLRm9tQixFQUFNUSxxQ0F6RTBCNWhCLElBQTdCa2IsRUFBUzNoQixJQUFLdU8sRUFBSTFMLElBQ3RCbUIsRUFBTzZqQixNQUFNcE4sSUFBS2xNLEVBQUkxTCxFQUFNdWtCLElBemEvQnBqQixFQUFPNmpCLE1BQVEsQ0FFZDFtQixPQUFRLEdBRVJzWixJQUFLLFNBQVVyVixFQUFNc2lCLEVBQU9oWixFQUFTOFMsRUFBTXZkLEdBRTFDLElBQUl3a0IsRUFBYUMsRUFBYWhZLEVBQzdCaVksRUFBUXRvQixFQUFHdW9CLEVBQ1h6SyxFQUFTMEssRUFBVWhtQixFQUFNaW1CLEVBQVlDLEVBQ3JDQyxFQUFXckgsRUFBUzNoQixJQUFLb0YsR0FHMUIsR0FBTTRqQixFQXVDTixJQWxDS3RhLEVBQVFBLFVBRVpBLEdBREErWixFQUFjL1osR0FDUUEsUUFDdEJ6SyxFQUFXd2tCLEVBQVl4a0IsVUFLbkJBLEdBQ0pELEVBQU91TSxLQUFLTSxnQkFBaUJuQixHQUFpQnpMLEdBSXpDeUssRUFBUTFHLE9BQ2IwRyxFQUFRMUcsS0FBT2hFLEVBQU9nRSxTQUlmMmdCLEVBQVNLLEVBQVNMLFVBQ3pCQSxFQUFTSyxFQUFTTCxPQUFTLEtBRXBCRCxFQUFjTSxFQUFTQyxVQUM5QlAsRUFBY00sRUFBU0MsT0FBUyxTQUFVdGMsR0FJekMsWUFBeUIsSUFBWDNJLEdBQTBCQSxFQUFPNmpCLE1BQU1xQixZQUFjdmMsRUFBRTlKLEtBQ3BFbUIsRUFBTzZqQixNQUFNc0IsU0FBUzlqQixNQUFPRCxFQUFNRSxnQkFBY21CLElBTXBEcEcsR0FEQXFuQixHQUFVQSxHQUFTLElBQUszYSxNQUFPb08sSUFBbUIsQ0FBRSxLQUMxQzVXLE9BQ0ZsRSxLQUVQd0MsRUFBT2ttQixHQURQclksRUFBTXlXLEdBQWUvWixLQUFNc2EsRUFBT3JuQixLQUFTLElBQ3BCLEdBQ3ZCeW9CLEdBQWVwWSxFQUFLLElBQU8sSUFBS3hJLE1BQU8sS0FBTXJDLE9BR3ZDaEQsSUFLTnNiLEVBQVVuYSxFQUFPNmpCLE1BQU0xSixRQUFTdGIsSUFBVSxHQUcxQ0EsR0FBU29CLEVBQVdrYSxFQUFRZ0ssYUFBZWhLLEVBQVFpTCxXQUFjdm1CLEVBR2pFc2IsRUFBVW5hLEVBQU82akIsTUFBTTFKLFFBQVN0YixJQUFVLEdBRzFDK2xCLEVBQVk1a0IsRUFBTytCLE9BQVEsQ0FDMUJsRCxLQUFNQSxFQUNOa21CLFNBQVVBLEVBQ1Z2SCxLQUFNQSxFQUNOOVMsUUFBU0EsRUFDVDFHLEtBQU0wRyxFQUFRMUcsS0FDZC9ELFNBQVVBLEVBQ1ZtVixhQUFjblYsR0FBWUQsRUFBTzROLEtBQUs3RSxNQUFNcU0sYUFBYTFMLEtBQU16SixHQUMvRHVMLFVBQVdzWixFQUFXbGIsS0FBTSxNQUMxQjZhLElBR0tJLEVBQVdGLEVBQVE5bEIsT0FDMUJnbUIsRUFBV0YsRUFBUTlsQixHQUFTLElBQ25Cd21CLGNBQWdCLEVBR25CbEwsRUFBUW1MLFFBQ2lELElBQTlEbkwsRUFBUW1MLE1BQU1ocUIsS0FBTThGLEVBQU1vYyxFQUFNc0gsRUFBWUosSUFFdkN0akIsRUFBSzJLLGtCQUNUM0ssRUFBSzJLLGlCQUFrQmxOLEVBQU02bEIsSUFLM0J2SyxFQUFRMUQsTUFDWjBELEVBQVExRCxJQUFJbmIsS0FBTThGLEVBQU13akIsR0FFbEJBLEVBQVVsYSxRQUFRMUcsT0FDdkI0Z0IsRUFBVWxhLFFBQVExRyxLQUFPMEcsRUFBUTFHLE9BSzlCL0QsRUFDSjRrQixFQUFTL2lCLE9BQVEraUIsRUFBU1EsZ0JBQWlCLEVBQUdULEdBRTlDQyxFQUFTN21CLEtBQU00bUIsR0FJaEI1a0IsRUFBTzZqQixNQUFNMW1CLE9BQVEwQixJQUFTLElBTWhDK1osT0FBUSxTQUFVeFgsRUFBTXNpQixFQUFPaFosRUFBU3pLLEVBQVVzbEIsR0FFakQsSUFBSTVqQixFQUFHNmpCLEVBQVc5WSxFQUNqQmlZLEVBQVF0b0IsRUFBR3VvQixFQUNYekssRUFBUzBLLEVBQVVobUIsRUFBTWltQixFQUFZQyxFQUNyQ0MsRUFBV3JILEVBQVNELFFBQVN0YyxJQUFVdWMsRUFBUzNoQixJQUFLb0YsR0FFdEQsR0FBTTRqQixJQUFlTCxFQUFTSyxFQUFTTCxRQUF2QyxDQU9BLElBREF0b0IsR0FEQXFuQixHQUFVQSxHQUFTLElBQUszYSxNQUFPb08sSUFBbUIsQ0FBRSxLQUMxQzVXLE9BQ0ZsRSxLQU1QLEdBSkF3QyxFQUFPa21CLEdBRFByWSxFQUFNeVcsR0FBZS9aLEtBQU1zYSxFQUFPcm5CLEtBQVMsSUFDcEIsR0FDdkJ5b0IsR0FBZXBZLEVBQUssSUFBTyxJQUFLeEksTUFBTyxLQUFNckMsT0FHdkNoRCxFQUFOLENBZUEsSUFSQXNiLEVBQVVuYSxFQUFPNmpCLE1BQU0xSixRQUFTdGIsSUFBVSxHQUUxQ2dtQixFQUFXRixFQURYOWxCLEdBQVNvQixFQUFXa2EsRUFBUWdLLGFBQWVoSyxFQUFRaUwsV0FBY3ZtQixJQUNwQyxHQUM3QjZOLEVBQU1BLEVBQUssSUFDVixJQUFJakcsT0FBUSxVQUFZcWUsRUFBV2xiLEtBQU0saUJBQW9CLFdBRzlENGIsRUFBWTdqQixFQUFJa2pCLEVBQVN0a0IsT0FDakJvQixLQUNQaWpCLEVBQVlDLEVBQVVsakIsSUFFZjRqQixHQUFlUixJQUFhSCxFQUFVRyxVQUN6Q3JhLEdBQVdBLEVBQVExRyxPQUFTNGdCLEVBQVU1Z0IsTUFDdEMwSSxJQUFPQSxFQUFJaEQsS0FBTWtiLEVBQVVwWixZQUMzQnZMLEdBQVlBLElBQWEya0IsRUFBVTNrQixXQUN4QixPQUFiQSxJQUFxQjJrQixFQUFVM2tCLFlBQ2hDNGtCLEVBQVMvaUIsT0FBUUgsRUFBRyxHQUVmaWpCLEVBQVUza0IsVUFDZDRrQixFQUFTUSxnQkFFTGxMLEVBQVF2QixRQUNadUIsRUFBUXZCLE9BQU90ZCxLQUFNOEYsRUFBTXdqQixJQU96QlksSUFBY1gsRUFBU3RrQixTQUNyQjRaLEVBQVFzTCxXQUNrRCxJQUEvRHRMLEVBQVFzTCxTQUFTbnFCLEtBQU04RixFQUFNMGpCLEVBQVlFLEVBQVNDLFNBRWxEamxCLEVBQU8wbEIsWUFBYXRrQixFQUFNdkMsRUFBTW1tQixFQUFTQyxlQUduQ04sRUFBUTlsQixTQTFDZixJQUFNQSxLQUFROGxCLEVBQ2Iza0IsRUFBTzZqQixNQUFNakwsT0FBUXhYLEVBQU12QyxFQUFPNmtCLEVBQU9ybkIsR0FBS3FPLEVBQVN6SyxHQUFVLEdBOEMvREQsRUFBT29ELGNBQWV1aEIsSUFDMUJoSCxFQUFTL0UsT0FBUXhYLEVBQU0sbUJBSXpCK2pCLFNBQVUsU0FBVVEsR0FHbkIsSUFFSXhxQixFQUFHd0csRUFBR2IsRUFBS3VQLEVBQVN1VSxFQUFXZ0IsRUFGL0IvQixFQUFRN2pCLEVBQU82akIsTUFBTWdDLElBQUtGLEdBRzdCelYsRUFBTyxJQUFJM04sTUFBT2pCLFVBQVVmLFFBQzVCc2tCLEdBQWFsSCxFQUFTM2hCLElBQUt5QixLQUFNLFdBQWMsSUFBTW9tQixFQUFNaGxCLE9BQVUsR0FDckVzYixFQUFVbmEsRUFBTzZqQixNQUFNMUosUUFBUzBKLEVBQU1obEIsT0FBVSxHQUtqRCxJQUZBcVIsRUFBTSxHQUFNMlQsRUFFTjFvQixFQUFJLEVBQUdBLEVBQUltRyxVQUFVZixPQUFRcEYsSUFDbEMrVSxFQUFNL1UsR0FBTW1HLFVBQVduRyxHQU14QixHQUhBMG9CLEVBQU1pQyxlQUFpQnJvQixNQUdsQjBjLEVBQVE0TCxjQUEyRCxJQUE1QzVMLEVBQVE0TCxZQUFZenFCLEtBQU1tQyxLQUFNb21CLEdBQTVELENBU0EsSUFKQStCLEVBQWU1bEIsRUFBTzZqQixNQUFNZ0IsU0FBU3ZwQixLQUFNbUMsS0FBTW9tQixFQUFPZ0IsR0FHeEQxcEIsRUFBSSxHQUNNa1YsRUFBVXVWLEVBQWN6cUIsUUFBWTBvQixFQUFNbUMsd0JBSW5ELElBSEFuQyxFQUFNb0MsY0FBZ0I1VixFQUFRalAsS0FFOUJPLEVBQUksR0FDTWlqQixFQUFZdlUsRUFBUXdVLFNBQVVsakIsUUFDdENraUIsRUFBTXFDLGlDQUlEckMsRUFBTXNDLGFBQXNDLElBQXhCdkIsRUFBVXBaLFlBQ25DcVksRUFBTXNDLFdBQVd6YyxLQUFNa2IsRUFBVXBaLGFBRWpDcVksRUFBTWUsVUFBWUEsRUFDbEJmLEVBQU1yRyxLQUFPb0gsRUFBVXBILFVBS1YvYSxLQUhiM0IsSUFBVWQsRUFBTzZqQixNQUFNMUosUUFBU3lLLEVBQVVHLFdBQWMsSUFBS0UsUUFDNURMLEVBQVVsYSxTQUFVckosTUFBT2dQLEVBQVFqUCxLQUFNOE8sTUFHVCxLQUF6QjJULEVBQU0xVSxPQUFTck8sS0FDckIraUIsRUFBTVMsaUJBQ05ULEVBQU1PLG9CQVlYLE9BSktqSyxFQUFRaU0sY0FDWmpNLEVBQVFpTSxhQUFhOXFCLEtBQU1tQyxLQUFNb21CLEdBRzNCQSxFQUFNMVUsU0FHZDBWLFNBQVUsU0FBVWhCLEVBQU9nQixHQUMxQixJQUFJMXBCLEVBQUd5cEIsRUFBVzNXLEVBQUtvWSxFQUFpQkMsRUFDdkNWLEVBQWUsR0FDZlAsRUFBZ0JSLEVBQVNRLGNBQ3pCeGEsRUFBTWdaLEVBQU16aEIsT0FHYixHQUFLaWpCLEdBSUp4YSxFQUFJbk0sWUFPYyxVQUFmbWxCLEVBQU1obEIsTUFBb0JnbEIsRUFBTTBDLFFBQVUsR0FFN0MsS0FBUTFiLElBQVFwTixLQUFNb04sRUFBTUEsRUFBSWhMLFlBQWNwQyxLQUk3QyxHQUFzQixJQUFqQm9OLEVBQUluTSxXQUFvQyxVQUFmbWxCLEVBQU1obEIsT0FBcUMsSUFBakJnTSxFQUFJdkMsVUFBc0IsQ0FHakYsSUFGQStkLEVBQWtCLEdBQ2xCQyxFQUFtQixHQUNibnJCLEVBQUksRUFBR0EsRUFBSWtxQixFQUFlbHFCLFNBTUVzSCxJQUE1QjZqQixFQUZMclksR0FIQTJXLEVBQVlDLEVBQVUxcEIsSUFHTjhFLFNBQVcsT0FHMUJxbUIsRUFBa0JyWSxHQUFRMlcsRUFBVXhQLGFBQ25DcFYsRUFBUWlPLEVBQUt4USxNQUFPOFksTUFBTzFMLElBQVMsRUFDcEM3SyxFQUFPdU0sS0FBTTBCLEVBQUt4USxLQUFNLEtBQU0sQ0FBRW9OLElBQVF0SyxRQUVyQytsQixFQUFrQnJZLElBQ3RCb1ksRUFBZ0Jyb0IsS0FBTTRtQixHQUduQnlCLEVBQWdCOWxCLFFBQ3BCcWxCLEVBQWE1bkIsS0FBTSxDQUFFb0QsS0FBTXlKLEVBQUtnYSxTQUFVd0IsSUFZOUMsT0FMQXhiLEVBQU1wTixLQUNENG5CLEVBQWdCUixFQUFTdGtCLFFBQzdCcWxCLEVBQWE1bkIsS0FBTSxDQUFFb0QsS0FBTXlKLEVBQUtnYSxTQUFVQSxFQUFTL21CLE1BQU91bkIsS0FHcERPLEdBR1JZLFFBQVMsU0FBVTlxQixFQUFNK3FCLEdBQ3hCNXFCLE9BQU9DLGVBQWdCa0UsRUFBT3drQixNQUFNem5CLFVBQVdyQixFQUFNLENBQ3BESyxZQUFZLEVBQ1p1aEIsY0FBYyxFQUVkdGhCLElBQUt3QyxFQUFZaW9CLEdBQ2hCLFdBQ0MsR0FBS2hwQixLQUFLaXBCLGNBQ1IsT0FBT0QsRUFBTWhwQixLQUFLaXBCLGdCQUdyQixXQUNDLEdBQUtqcEIsS0FBS2lwQixjQUNSLE9BQU9qcEIsS0FBS2lwQixjQUFlaHJCLElBSS9CNmhCLElBQUssU0FBVW5oQixHQUNkUCxPQUFPQyxlQUFnQjJCLEtBQU0vQixFQUFNLENBQ2xDSyxZQUFZLEVBQ1p1aEIsY0FBYyxFQUNkcUosVUFBVSxFQUNWdnFCLE1BQU9BLFFBTVh5cEIsSUFBSyxTQUFVYSxHQUNkLE9BQU9BLEVBQWUxbUIsRUFBTzBDLFNBQzVCZ2tCLEVBQ0EsSUFBSTFtQixFQUFPd2tCLE1BQU9rQyxJQUdwQnZNLFFBQVMsQ0FDUnlNLEtBQU0sQ0FHTEMsVUFBVSxHQUVYQyxNQUFPLENBR054QixNQUFPLFNBQVU5SCxHQUloQixJQUFJalQsRUFBSzlNLE1BQVErZixFQVdqQixPQVJLdUQsR0FBZXJYLEtBQU1hLEVBQUcxTCxPQUM1QjBMLEVBQUd1YyxPQUFTdmUsRUFBVWdDLEVBQUksVUFHMUJ3WixHQUFnQnhaLEVBQUksUUFBUzZZLEtBSXZCLEdBRVJtQixRQUFTLFNBQVUvRyxHQUlsQixJQUFJalQsRUFBSzlNLE1BQVErZixFQVVqQixPQVBLdUQsR0FBZXJYLEtBQU1hLEVBQUcxTCxPQUM1QjBMLEVBQUd1YyxPQUFTdmUsRUFBVWdDLEVBQUksVUFFMUJ3WixHQUFnQnhaLEVBQUksVUFJZCxHQUtSaVgsU0FBVSxTQUFVcUMsR0FDbkIsSUFBSXpoQixFQUFTeWhCLEVBQU16aEIsT0FDbkIsT0FBTzJlLEdBQWVyWCxLQUFNdEgsRUFBT3ZELE9BQ2xDdUQsRUFBTzBrQixPQUFTdmUsRUFBVW5HLEVBQVEsVUFDbEN1YixFQUFTM2hCLElBQUtvRyxFQUFRLFVBQ3RCbUcsRUFBVW5HLEVBQVEsT0FJckIya0IsYUFBYyxDQUNiWCxhQUFjLFNBQVV2QyxRQUlEcGhCLElBQWpCb2hCLEVBQU0xVSxRQUF3QjBVLEVBQU02QyxnQkFDeEM3QyxFQUFNNkMsY0FBY00sWUFBY25ELEVBQU0xVSxZQThGN0NuUCxFQUFPMGxCLFlBQWMsU0FBVXRrQixFQUFNdkMsRUFBTW9tQixHQUdyQzdqQixFQUFLMmEscUJBQ1QzYSxFQUFLMmEsb0JBQXFCbGQsRUFBTW9tQixJQUlsQ2psQixFQUFPd2tCLE1BQVEsU0FBVTFsQixFQUFLbW9CLEdBRzdCLEtBQVF4cEIsZ0JBQWdCdUMsRUFBT3drQixPQUM5QixPQUFPLElBQUl4a0IsRUFBT3drQixNQUFPMWxCLEVBQUttb0IsR0FJMUJub0IsR0FBT0EsRUFBSUQsTUFDZnBCLEtBQUtpcEIsY0FBZ0I1bkIsRUFDckJyQixLQUFLb0IsS0FBT0MsRUFBSUQsS0FJaEJwQixLQUFLeXBCLG1CQUFxQnBvQixFQUFJcW9CLHVCQUNIMWtCLElBQXpCM0QsRUFBSXFvQixtQkFHZ0IsSUFBcEJyb0IsRUFBSWtvQixZQUNMNUQsR0FDQUMsR0FLRDVsQixLQUFLMkUsT0FBV3RELEVBQUlzRCxRQUFrQyxJQUF4QnRELEVBQUlzRCxPQUFPMUQsU0FDeENJLEVBQUlzRCxPQUFPdkMsV0FDWGYsRUFBSXNELE9BRUwzRSxLQUFLd29CLGNBQWdCbm5CLEVBQUltbkIsY0FDekJ4b0IsS0FBSzJwQixjQUFnQnRvQixFQUFJc29CLGVBSXpCM3BCLEtBQUtvQixLQUFPQyxFQUlSbW9CLEdBQ0pqbkIsRUFBTytCLE9BQVF0RSxLQUFNd3BCLEdBSXRCeHBCLEtBQUs0cEIsVUFBWXZvQixHQUFPQSxFQUFJdW9CLFdBQWFqaUIsS0FBS2tpQixNQUc5QzdwQixLQUFNdUMsRUFBTzBDLFVBQVksR0FLMUIxQyxFQUFPd2tCLE1BQU16bkIsVUFBWSxDQUN4QjBELFlBQWFULEVBQU93a0IsTUFDcEIwQyxtQkFBb0I3RCxHQUNwQjJDLHFCQUFzQjNDLEdBQ3RCNkMsOEJBQStCN0MsR0FDL0JrRSxhQUFhLEVBRWJqRCxlQUFnQixXQUNmLElBQUkzYixFQUFJbEwsS0FBS2lwQixjQUVianBCLEtBQUt5cEIsbUJBQXFCOUQsR0FFckJ6YSxJQUFNbEwsS0FBSzhwQixhQUNmNWUsRUFBRTJiLGtCQUdKRixnQkFBaUIsV0FDaEIsSUFBSXpiLEVBQUlsTCxLQUFLaXBCLGNBRWJqcEIsS0FBS3VvQixxQkFBdUI1QyxHQUV2QnphLElBQU1sTCxLQUFLOHBCLGFBQ2Y1ZSxFQUFFeWIsbUJBR0pDLHlCQUEwQixXQUN6QixJQUFJMWIsRUFBSWxMLEtBQUtpcEIsY0FFYmpwQixLQUFLeW9CLDhCQUFnQzlDLEdBRWhDemEsSUFBTWxMLEtBQUs4cEIsYUFDZjVlLEVBQUUwYiwyQkFHSDVtQixLQUFLMm1CLG9CQUtQcGtCLEVBQU9pQixLQUFNLENBQ1p1bUIsUUFBUSxFQUNSQyxTQUFTLEVBQ1RDLFlBQVksRUFDWkMsZ0JBQWdCLEVBQ2hCQyxTQUFTLEVBQ1RDLFFBQVEsRUFDUkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1RDLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxVQUFVLEVBQ1ZDLE1BQU0sRUFDTixNQUFRLEVBQ1JqcEIsTUFBTSxFQUNOa3BCLFVBQVUsRUFDVjFyQixLQUFLLEVBQ0wyckIsU0FBUyxFQUNUOUIsUUFBUSxFQUNSK0IsU0FBUyxFQUNUQyxTQUFTLEVBQ1RDLFNBQVMsRUFDVEMsU0FBUyxFQUNUQyxTQUFTLEVBQ1RDLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxTQUFTLEVBQ1RDLFNBQVMsRUFDVEMsZUFBZSxFQUNmQyxXQUFXLEVBQ1hDLFNBQVMsRUFFVEMsTUFBTyxTQUFVckYsR0FDaEIsSUFBSTBDLEVBQVMxQyxFQUFNMEMsT0FHbkIsT0FBb0IsTUFBZjFDLEVBQU1xRixPQUFpQmpHLEdBQVV2WixLQUFNbWEsRUFBTWhsQixNQUN4QixNQUFsQmdsQixFQUFNdUUsU0FBbUJ2RSxFQUFNdUUsU0FBV3ZFLEVBQU13RSxTQUlsRHhFLEVBQU1xRixZQUFvQnptQixJQUFYOGpCLEdBQXdCckQsR0FBWXhaLEtBQU1tYSxFQUFNaGxCLE1BQ3RELEVBQVQwbkIsRUFDRyxFQUdNLEVBQVRBLEVBQ0csRUFHTSxFQUFUQSxFQUNHLEVBR0QsRUFHRDFDLEVBQU1xRixRQUVabHBCLEVBQU82akIsTUFBTTJDLFNBRWhCeG1CLEVBQU9pQixLQUFNLENBQUVrb0IsTUFBTyxVQUFXQyxLQUFNLFlBQWMsU0FBVXZxQixFQUFNc2xCLEdBQ3BFbmtCLEVBQU82akIsTUFBTTFKLFFBQVN0YixHQUFTLENBRzlCeW1CLE1BQU8sV0FRTixPQUhBdkIsR0FBZ0J0bUIsS0FBTW9CLEVBQU15a0IsS0FHckIsR0FFUmlCLFFBQVMsV0FNUixPQUhBUixHQUFnQnRtQixLQUFNb0IsSUFHZixHQUdSc2xCLGFBQWNBLEtBWWhCbmtCLEVBQU9pQixLQUFNLENBQ1pvb0IsV0FBWSxZQUNaQyxXQUFZLFdBQ1pDLGFBQWMsY0FDZEMsYUFBYyxjQUNaLFNBQVVDLEVBQU01RCxHQUNsQjdsQixFQUFPNmpCLE1BQU0xSixRQUFTc1AsR0FBUyxDQUM5QnRGLGFBQWMwQixFQUNkVCxTQUFVUyxFQUVWWixPQUFRLFNBQVVwQixHQUNqQixJQUFJL2lCLEVBQ0hzQixFQUFTM0UsS0FDVGlzQixFQUFVN0YsRUFBTXVELGNBQ2hCeEMsRUFBWWYsRUFBTWUsVUFTbkIsT0FMTThFLElBQWFBLElBQVl0bkIsR0FBV3BDLEVBQU9tRixTQUFVL0MsRUFBUXNuQixNQUNsRTdGLEVBQU1obEIsS0FBTytsQixFQUFVRyxTQUN2QmprQixFQUFNOGpCLEVBQVVsYSxRQUFRckosTUFBTzVELEtBQU02RCxXQUNyQ3VpQixFQUFNaGxCLEtBQU9nbkIsR0FFUC9rQixNQUtWZCxFQUFPRyxHQUFHNEIsT0FBUSxDQUVqQjBoQixHQUFJLFNBQVVDLEVBQU96akIsRUFBVXVkLEVBQU1yZCxHQUNwQyxPQUFPc2pCLEdBQUlobUIsS0FBTWltQixFQUFPempCLEVBQVV1ZCxFQUFNcmQsSUFFekN3akIsSUFBSyxTQUFVRCxFQUFPempCLEVBQVV1ZCxFQUFNcmQsR0FDckMsT0FBT3NqQixHQUFJaG1CLEtBQU1pbUIsRUFBT3pqQixFQUFVdWQsRUFBTXJkLEVBQUksSUFFN0MyakIsSUFBSyxTQUFVSixFQUFPempCLEVBQVVFLEdBQy9CLElBQUl5a0IsRUFBVy9sQixFQUNmLEdBQUs2a0IsR0FBU0EsRUFBTVksZ0JBQWtCWixFQUFNa0IsVUFXM0MsT0FSQUEsRUFBWWxCLEVBQU1rQixVQUNsQjVrQixFQUFRMGpCLEVBQU1vQyxnQkFBaUJoQyxJQUM5QmMsRUFBVXBaLFVBQ1RvWixFQUFVRyxTQUFXLElBQU1ILEVBQVVwWixVQUNyQ29aLEVBQVVHLFNBQ1hILEVBQVUza0IsU0FDVjJrQixFQUFVbGEsU0FFSmpOLEtBRVIsR0FBc0IsaUJBQVZpbUIsRUFBcUIsQ0FHaEMsSUFBTTdrQixLQUFRNmtCLEVBQ2JqbUIsS0FBS3FtQixJQUFLamxCLEVBQU1vQixFQUFVeWpCLEVBQU83a0IsSUFFbEMsT0FBT3BCLEtBV1IsT0FUa0IsSUFBYndDLEdBQTBDLG1CQUFiQSxJQUdqQ0UsRUFBS0YsRUFDTEEsT0FBV3dDLElBRUEsSUFBUHRDLElBQ0pBLEVBQUtrakIsSUFFQzVsQixLQUFLd0QsS0FBTSxXQUNqQmpCLEVBQU82akIsTUFBTWpMLE9BQVFuYixLQUFNaW1CLEVBQU92akIsRUFBSUYsUUFNekMsSUFLQzBwQixHQUFZLDhGQU9aQyxHQUFlLHdCQUdmQyxHQUFXLG9DQUNYQyxHQUFlLDJDQUdoQixTQUFTQyxHQUFvQjNvQixFQUFNNlYsR0FDbEMsT0FBSzFPLEVBQVVuSCxFQUFNLFVBQ3BCbUgsRUFBK0IsS0FBckIwTyxFQUFRdlksU0FBa0J1WSxFQUFVQSxFQUFRMUksV0FBWSxPQUUzRHZPLEVBQVFvQixHQUFPNFUsU0FBVSxTQUFXLElBR3JDNVUsRUFJUixTQUFTNG9CLEdBQWU1b0IsR0FFdkIsT0FEQUEsRUFBS3ZDLE1BQXlDLE9BQWhDdUMsRUFBSzNCLGFBQWMsU0FBc0IsSUFBTTJCLEVBQUt2QyxLQUMzRHVDLEVBRVIsU0FBUzZvQixHQUFlN29CLEdBT3ZCLE1BTjJDLFdBQXBDQSxFQUFLdkMsTUFBUSxJQUFLZixNQUFPLEVBQUcsR0FDbENzRCxFQUFLdkMsS0FBT3VDLEVBQUt2QyxLQUFLZixNQUFPLEdBRTdCc0QsRUFBSzRJLGdCQUFpQixRQUdoQjVJLEVBR1IsU0FBUzhvQixHQUFnQnByQixFQUFLcXJCLEdBQzdCLElBQUlodkIsRUFBR0MsRUFBR3lELEVBQU11ckIsRUFBVUMsRUFBVUMsRUFBVUMsRUFBVTVGLEVBRXhELEdBQXVCLElBQWxCd0YsRUFBS3pyQixTQUFWLENBS0EsR0FBS2lmLEVBQVNELFFBQVM1ZSxLQUN0QnNyQixFQUFXek0sRUFBU3RCLE9BQVF2ZCxHQUM1QnVyQixFQUFXMU0sRUFBU0osSUFBSzRNLEVBQU1DLEdBQy9CekYsRUFBU3lGLEVBQVN6RixRQU1qQixJQUFNOWxCLFlBSEN3ckIsRUFBU3BGLE9BQ2hCb0YsRUFBUzFGLE9BQVMsR0FFSkEsRUFDYixJQUFNeHBCLEVBQUksRUFBR0MsRUFBSXVwQixFQUFROWxCLEdBQU8wQixPQUFRcEYsRUFBSUMsRUFBR0QsSUFDOUM2RSxFQUFPNmpCLE1BQU1wTixJQUFLMFQsRUFBTXRyQixFQUFNOGxCLEVBQVE5bEIsR0FBUTFELElBTzdDeWlCLEVBQVNGLFFBQVM1ZSxLQUN0QndyQixFQUFXMU0sRUFBU3ZCLE9BQVF2ZCxHQUM1QnlyQixFQUFXdnFCLEVBQU8rQixPQUFRLEdBQUl1b0IsR0FFOUIxTSxFQUFTTCxJQUFLNE0sRUFBTUksS0FLdEIsU0FBU0MsR0FBVTFyQixFQUFLcXJCLEdBQ3ZCLElBQUk1aEIsRUFBVzRoQixFQUFLNWhCLFNBQVNwRSxjQUdYLFVBQWJvRSxHQUF3QndZLEdBQWVyWCxLQUFNNUssRUFBSUQsTUFDckRzckIsRUFBS25aLFFBQVVsUyxFQUFJa1MsUUFHSyxVQUFiekksR0FBcUMsYUFBYkEsSUFDbkM0aEIsRUFBS3hWLGFBQWU3VixFQUFJNlYsY0FJMUIsU0FBUzhWLEdBQVVDLEVBQVl4YSxFQUFNaFAsRUFBVW9oQixHQUc5Q3BTLEVBQU9uUyxFQUFPc0QsTUFBTyxHQUFJNk8sR0FFekIsSUFBSXVTLEVBQVVsaEIsRUFBTzZnQixFQUFTdUksRUFBWXhyQixFQUFNQyxFQUMvQ2pFLEVBQUksRUFDSkMsRUFBSXN2QixFQUFXbnFCLE9BQ2ZxcUIsRUFBV3h2QixFQUFJLEVBQ2ZnQixFQUFROFQsRUFBTSxHQUNkMmEsRUFBa0Jyc0IsRUFBWXBDLEdBRy9CLEdBQUt5dUIsR0FDRHp2QixFQUFJLEdBQXNCLGlCQUFWZ0IsSUFDaEJtQyxFQUFRdWtCLFlBQWMrRyxHQUFTbmdCLEtBQU10TixHQUN4QyxPQUFPc3VCLEVBQVd6cEIsS0FBTSxTQUFVc1YsR0FDakMsSUFBSWQsRUFBT2lWLEVBQVdscEIsR0FBSStVLEdBQ3JCc1UsSUFDSjNhLEVBQU0sR0FBTTlULEVBQU1kLEtBQU1tQyxLQUFNOFksRUFBT2QsRUFBS3FWLFNBRTNDTCxHQUFVaFYsRUFBTXZGLEVBQU1oUCxFQUFVb2hCLEtBSWxDLEdBQUtsbkIsSUFFSm1HLEdBREFraEIsRUFBV04sR0FBZWpTLEVBQU13YSxFQUFZLEdBQUl2aEIsZUFBZSxFQUFPdWhCLEVBQVlwSSxJQUNqRS9ULFdBRW1CLElBQS9Ca1UsRUFBUy9aLFdBQVduSSxTQUN4QmtpQixFQUFXbGhCLEdBSVBBLEdBQVMrZ0IsR0FBVSxDQU92QixJQUxBcUksR0FEQXZJLEVBQVVwaUIsRUFBT21CLElBQUtzZ0IsR0FBUWdCLEVBQVUsVUFBWXVILEtBQy9CenBCLE9BS2JwRixFQUFJQyxFQUFHRCxJQUNkZ0UsRUFBT3NqQixFQUVGdG5CLElBQU15dkIsSUFDVnpyQixFQUFPYSxFQUFPbUMsTUFBT2hELEdBQU0sR0FBTSxHQUc1QndyQixHQUlKM3FCLEVBQU9lLE1BQU9xaEIsRUFBU1gsR0FBUXRpQixFQUFNLFlBSXZDK0IsRUFBUzVGLEtBQU1vdkIsRUFBWXZ2QixHQUFLZ0UsRUFBTWhFLEdBR3ZDLEdBQUt3dkIsRUFPSixJQU5BdnJCLEVBQU1nakIsRUFBU0EsRUFBUTdoQixPQUFTLEdBQUk0SSxjQUdwQ25KLEVBQU9tQixJQUFLaWhCLEVBQVM2SCxJQUdmOXVCLEVBQUksRUFBR0EsRUFBSXd2QixFQUFZeHZCLElBQzVCZ0UsRUFBT2lqQixFQUFTam5CLEdBQ1g4bEIsR0FBWXZYLEtBQU12SyxFQUFLTixNQUFRLE1BQ2xDOGUsRUFBU3RCLE9BQVFsZCxFQUFNLGVBQ3hCYSxFQUFPbUYsU0FBVS9GLEVBQUtELEtBRWpCQSxFQUFLTCxLQUE4QyxZQUFyQ0ssRUFBS04sTUFBUSxJQUFLc0YsY0FHL0JuRSxFQUFPK3FCLFdBQWE1ckIsRUFBS0gsVUFDN0JnQixFQUFPK3FCLFNBQVU1ckIsRUFBS0wsSUFBSyxDQUMxQkMsTUFBT0ksRUFBS0osT0FBU0ksRUFBS00sYUFBYyxXQUkxQ1IsRUFBU0UsRUFBS21QLFlBQVl6TCxRQUFTaW5CLEdBQWMsSUFBTTNxQixFQUFNQyxJQVFuRSxPQUFPc3JCLEVBR1IsU0FBUzlSLEdBQVF4WCxFQUFNbkIsRUFBVStxQixHQUtoQyxJQUpBLElBQUk3ckIsRUFDSHdqQixFQUFRMWlCLEVBQVdELEVBQU9xTSxPQUFRcE0sRUFBVW1CLEdBQVNBLEVBQ3JEakcsRUFBSSxFQUU0QixPQUF2QmdFLEVBQU93akIsRUFBT3huQixJQUFlQSxJQUNoQzZ2QixHQUE4QixJQUFsQjdyQixFQUFLVCxVQUN0QnNCLEVBQU9pckIsVUFBV3hKLEdBQVF0aUIsSUFHdEJBLEVBQUtVLGFBQ0ptckIsR0FBWTdMLEdBQVloZ0IsSUFDNUJ1aUIsR0FBZUQsR0FBUXRpQixFQUFNLFdBRTlCQSxFQUFLVSxXQUFXQyxZQUFhWCxJQUkvQixPQUFPaUMsRUFHUnBCLEVBQU8rQixPQUFRLENBQ2Q2Z0IsY0FBZSxTQUFVa0ksR0FDeEIsT0FBT0EsRUFBS2pvQixRQUFTOG1CLEdBQVcsY0FHakN4bkIsTUFBTyxTQUFVZixFQUFNOHBCLEVBQWVDLEdBQ3JDLElBQUlod0IsRUFBR0MsRUFBR2d3QixFQUFhQyxFQUN0QmxwQixFQUFRZixFQUFLMmhCLFdBQVcsR0FDeEJ1SSxFQUFTbk0sR0FBWS9kLEdBR3RCLEtBQU03QyxFQUFReWtCLGdCQUFzQyxJQUFsQjVoQixFQUFLMUMsVUFBb0MsS0FBbEIwQyxFQUFLMUMsVUFDM0RzQixFQUFPNlUsU0FBVXpULElBTW5CLElBSEFpcUIsRUFBZTVKLEdBQVF0ZixHQUdqQmhILEVBQUksRUFBR0MsR0FGYmd3QixFQUFjM0osR0FBUXJnQixJQUVPYixPQUFRcEYsRUFBSUMsRUFBR0QsSUFDM0NxdkIsR0FBVVksRUFBYWp3QixHQUFLa3dCLEVBQWNsd0IsSUFLNUMsR0FBSyt2QixFQUNKLEdBQUtDLEVBSUosSUFIQUMsRUFBY0EsR0FBZTNKLEdBQVFyZ0IsR0FDckNpcUIsRUFBZUEsR0FBZ0I1SixHQUFRdGYsR0FFakNoSCxFQUFJLEVBQUdDLEVBQUlnd0IsRUFBWTdxQixPQUFRcEYsRUFBSUMsRUFBR0QsSUFDM0MrdUIsR0FBZ0JrQixFQUFhandCLEdBQUtrd0IsRUFBY2x3QixTQUdqRCt1QixHQUFnQjlvQixFQUFNZSxHQVd4QixPQU5Ba3BCLEVBQWU1SixHQUFRdGYsRUFBTyxXQUNaNUIsT0FBUyxHQUMxQm1oQixHQUFlMkosR0FBZUMsR0FBVTdKLEdBQVFyZ0IsRUFBTSxXQUloRGUsR0FHUjhvQixVQUFXLFNBQVVwcUIsR0FLcEIsSUFKQSxJQUFJMmMsRUFBTXBjLEVBQU12QyxFQUNmc2IsRUFBVW5hLEVBQU82akIsTUFBTTFKLFFBQ3ZCaGYsRUFBSSxPQUU2QnNILEtBQXhCckIsRUFBT1AsRUFBTzFGLElBQXFCQSxJQUM1QyxHQUFLK2hCLEVBQVk5YixHQUFTLENBQ3pCLEdBQU9vYyxFQUFPcGMsRUFBTXVjLEVBQVNqYixTQUFjLENBQzFDLEdBQUs4YSxFQUFLbUgsT0FDVCxJQUFNOWxCLEtBQVEyZSxFQUFLbUgsT0FDYnhLLEVBQVN0YixHQUNibUIsRUFBTzZqQixNQUFNakwsT0FBUXhYLEVBQU12QyxHQUkzQm1CLEVBQU8wbEIsWUFBYXRrQixFQUFNdkMsRUFBTTJlLEVBQUt5SCxRQU94QzdqQixFQUFNdWMsRUFBU2piLGNBQVlELEVBRXZCckIsRUFBTXdjLEVBQVNsYixXQUluQnRCLEVBQU13YyxFQUFTbGIsY0FBWUQsT0FPaEN6QyxFQUFPRyxHQUFHNEIsT0FBUSxDQUNqQndwQixPQUFRLFNBQVV0ckIsR0FDakIsT0FBTzJZLEdBQVFuYixLQUFNd0MsR0FBVSxJQUdoQzJZLE9BQVEsU0FBVTNZLEdBQ2pCLE9BQU8yWSxHQUFRbmIsS0FBTXdDLElBR3RCVCxLQUFNLFNBQVVwRCxHQUNmLE9BQU9pZ0IsRUFBUTVlLEtBQU0sU0FBVXJCLEdBQzlCLFlBQWlCcUcsSUFBVnJHLEVBQ040RCxFQUFPUixLQUFNL0IsTUFDYkEsS0FBS29iLFFBQVE1WCxLQUFNLFdBQ0ssSUFBbEJ4RCxLQUFLaUIsVUFBb0MsS0FBbEJqQixLQUFLaUIsVUFBcUMsSUFBbEJqQixLQUFLaUIsV0FDeERqQixLQUFLNlEsWUFBY2xTLE1BR3BCLEtBQU1BLEVBQU9rRixVQUFVZixTQUczQmlyQixPQUFRLFdBQ1AsT0FBT2YsR0FBVWh0QixLQUFNNkQsVUFBVyxTQUFVRixHQUNwQixJQUFsQjNELEtBQUtpQixVQUFvQyxLQUFsQmpCLEtBQUtpQixVQUFxQyxJQUFsQmpCLEtBQUtpQixVQUMzQ3FyQixHQUFvQnRzQixLQUFNMkQsR0FDaEN4QixZQUFhd0IsTUFLdkJxcUIsUUFBUyxXQUNSLE9BQU9oQixHQUFVaHRCLEtBQU02RCxVQUFXLFNBQVVGLEdBQzNDLEdBQXVCLElBQWxCM0QsS0FBS2lCLFVBQW9DLEtBQWxCakIsS0FBS2lCLFVBQXFDLElBQWxCakIsS0FBS2lCLFNBQWlCLENBQ3pFLElBQUkwRCxFQUFTMm5CLEdBQW9CdHNCLEtBQU0yRCxHQUN2Q2dCLEVBQU9zcEIsYUFBY3RxQixFQUFNZ0IsRUFBT21NLGdCQUtyQ29kLE9BQVEsV0FDUCxPQUFPbEIsR0FBVWh0QixLQUFNNkQsVUFBVyxTQUFVRixHQUN0QzNELEtBQUtvQyxZQUNUcEMsS0FBS29DLFdBQVc2ckIsYUFBY3RxQixFQUFNM0QsU0FLdkNtdUIsTUFBTyxXQUNOLE9BQU9uQixHQUFVaHRCLEtBQU02RCxVQUFXLFNBQVVGLEdBQ3RDM0QsS0FBS29DLFlBQ1RwQyxLQUFLb0MsV0FBVzZyQixhQUFjdHFCLEVBQU0zRCxLQUFLdU4sZ0JBSzVDNk4sTUFBTyxXQUlOLElBSEEsSUFBSXpYLEVBQ0hqRyxFQUFJLEVBRTJCLE9BQXRCaUcsRUFBTzNELEtBQU10QyxJQUFlQSxJQUNkLElBQWxCaUcsRUFBSzFDLFdBR1RzQixFQUFPaXJCLFVBQVd4SixHQUFRcmdCLEdBQU0sSUFHaENBLEVBQUtrTixZQUFjLElBSXJCLE9BQU83USxNQUdSMEUsTUFBTyxTQUFVK29CLEVBQWVDLEdBSS9CLE9BSEFELEVBQWlDLE1BQWpCQSxHQUFnQ0EsRUFDaERDLEVBQXlDLE1BQXJCQSxFQUE0QkQsRUFBZ0JDLEVBRXpEMXRCLEtBQUswRCxJQUFLLFdBQ2hCLE9BQU9uQixFQUFPbUMsTUFBTzFFLEtBQU15dEIsRUFBZUMsTUFJNUNMLEtBQU0sU0FBVTF1QixHQUNmLE9BQU9pZ0IsRUFBUTVlLEtBQU0sU0FBVXJCLEdBQzlCLElBQUlnRixFQUFPM0QsS0FBTSxJQUFPLEdBQ3ZCdEMsRUFBSSxFQUNKQyxFQUFJcUMsS0FBSzhDLE9BRVYsUUFBZWtDLElBQVZyRyxHQUF5QyxJQUFsQmdGLEVBQUsxQyxTQUNoQyxPQUFPMEMsRUFBS3VMLFVBSWIsR0FBc0IsaUJBQVZ2USxJQUF1Qnd0QixHQUFhbGdCLEtBQU10TixLQUNwRDhrQixJQUFXRixHQUFTNVgsS0FBTWhOLElBQVcsQ0FBRSxHQUFJLEtBQVEsR0FBSStILGVBQWtCLENBRTFFL0gsRUFBUTRELEVBQU80aUIsY0FBZXhtQixHQUU5QixJQUNDLEtBQVFqQixFQUFJQyxFQUFHRCxJQUlTLEtBSHZCaUcsRUFBTzNELEtBQU10QyxJQUFPLElBR1Z1RCxXQUNUc0IsRUFBT2lyQixVQUFXeEosR0FBUXJnQixHQUFNLElBQ2hDQSxFQUFLdUwsVUFBWXZRLEdBSW5CZ0YsRUFBTyxFQUdOLE1BQVF1SCxLQUdOdkgsR0FDSjNELEtBQUtvYixRQUFRMlMsT0FBUXB2QixJQUVwQixLQUFNQSxFQUFPa0YsVUFBVWYsU0FHM0JzckIsWUFBYSxXQUNaLElBQUl2SixFQUFVLEdBR2QsT0FBT21JLEdBQVVodEIsS0FBTTZELFVBQVcsU0FBVUYsR0FDM0MsSUFBSXlPLEVBQVNwUyxLQUFLb0MsV0FFYkcsRUFBT3lELFFBQVNoRyxLQUFNNmtCLEdBQVksSUFDdEN0aUIsRUFBT2lyQixVQUFXeEosR0FBUWhrQixPQUNyQm9TLEdBQ0pBLEVBQU9pYyxhQUFjMXFCLEVBQU0zRCxRQUszQjZrQixNQUlMdGlCLEVBQU9pQixLQUFNLENBQ1o4cUIsU0FBVSxTQUNWQyxVQUFXLFVBQ1hOLGFBQWMsU0FDZE8sWUFBYSxRQUNiQyxXQUFZLGVBQ1YsU0FBVXh3QixFQUFNeXdCLEdBQ2xCbnNCLEVBQU9HLEdBQUl6RSxHQUFTLFNBQVV1RSxHQU83QixJQU5BLElBQUlZLEVBQ0hDLEVBQU0sR0FDTnNyQixFQUFTcHNCLEVBQVFDLEdBQ2pCd0IsRUFBTzJxQixFQUFPN3JCLE9BQVMsRUFDdkJwRixFQUFJLEVBRUdBLEdBQUtzRyxFQUFNdEcsSUFDbEIwRixFQUFRMUYsSUFBTXNHLEVBQU9oRSxLQUFPQSxLQUFLMEUsT0FBTyxHQUN4Q25DLEVBQVFvc0IsRUFBUWp4QixJQUFPZ3hCLEdBQVl0ckIsR0FJbkM3QyxFQUFLcUQsTUFBT1AsRUFBS0QsRUFBTTdFLE9BR3hCLE9BQU95QixLQUFLbUQsVUFBV0UsTUFHekIsSUFBSXVyQixHQUFZLElBQUk1bEIsT0FBUSxLQUFPc1ksR0FBTyxrQkFBbUIsS0FFekR1TixHQUFZLFNBQVVsckIsR0FLeEIsSUFBSSttQixFQUFPL21CLEVBQUsrSCxjQUFjMEMsWUFNOUIsT0FKTXNjLEdBQVNBLEVBQUtvRSxTQUNuQnBFLEVBQU8zcUIsR0FHRDJxQixFQUFLcUUsaUJBQWtCcHJCLElBRzVCcXJCLEdBQVksSUFBSWhtQixPQUFReVksR0FBVXRWLEtBQU0sS0FBTyxLQWlHbkQsU0FBUzhpQixHQUFRdHJCLEVBQU0xRixFQUFNaXhCLEdBQzVCLElBQUlDLEVBQU9DLEVBQVVDLEVBQVVoc0IsRUFNOUJ5ZSxFQUFRbmUsRUFBS21lLE1BcUNkLE9BbkNBb04sRUFBV0EsR0FBWUwsR0FBV2xyQixNQVFwQixNQUZiTixFQUFNNnJCLEVBQVNJLGlCQUFrQnJ4QixJQUFVaXhCLEVBQVVqeEIsS0FFakN5akIsR0FBWS9kLEtBQy9CTixFQUFNZCxFQUFPdWYsTUFBT25lLEVBQU0xRixLQVFyQjZDLEVBQVF5dUIsa0JBQW9CWCxHQUFVM2lCLEtBQU01SSxJQUFTMnJCLEdBQVUvaUIsS0FBTWhPLEtBRzFFa3hCLEVBQVFyTixFQUFNcU4sTUFDZEMsRUFBV3ROLEVBQU1zTixTQUNqQkMsRUFBV3ZOLEVBQU11TixTQUdqQnZOLEVBQU1zTixTQUFXdE4sRUFBTXVOLFNBQVd2TixFQUFNcU4sTUFBUTlyQixFQUNoREEsRUFBTTZyQixFQUFTQyxNQUdmck4sRUFBTXFOLE1BQVFBLEVBQ2RyTixFQUFNc04sU0FBV0EsRUFDakJ0TixFQUFNdU4sU0FBV0EsU0FJSnJxQixJQUFSM0IsRUFJTkEsRUFBTSxHQUNOQSxFQUlGLFNBQVNtc0IsR0FBY0MsRUFBYUMsR0FHbkMsTUFBTyxDQUNObnhCLElBQUssV0FDSixJQUFLa3hCLElBU0wsT0FBU3p2QixLQUFLekIsSUFBTW14QixHQUFTOXJCLE1BQU81RCxLQUFNNkQsa0JBTGxDN0QsS0FBS3pCLE9BM0poQixXQUlDLFNBQVNveEIsSUFHUixHQUFNbEwsRUFBTixDQUlBbUwsRUFBVTlOLE1BQU0rTixRQUFVLCtFQUUxQnBMLEVBQUkzQyxNQUFNK04sUUFDVCw0SEFHRDVoQixHQUFnQjlMLFlBQWF5dEIsR0FBWXp0QixZQUFhc2lCLEdBRXRELElBQUlxTCxFQUFXL3ZCLEVBQU9ndkIsaUJBQWtCdEssR0FDeENzTCxFQUFvQyxPQUFqQkQsRUFBU3poQixJQUc1QjJoQixFQUFzRSxLQUE5Q0MsRUFBb0JILEVBQVNJLFlBSXJEekwsRUFBSTNDLE1BQU1xTyxNQUFRLE1BQ2xCQyxFQUE2RCxLQUF6Q0gsRUFBb0JILEVBQVNLLE9BSWpERSxFQUFnRSxLQUF6Q0osRUFBb0JILEVBQVNYLE9BTXBEMUssRUFBSTNDLE1BQU13TyxTQUFXLFdBQ3JCQyxFQUFpRSxLQUE5Q04sRUFBb0J4TCxFQUFJK0wsWUFBYyxHQUV6RHZpQixHQUFnQjVMLFlBQWF1dEIsR0FJN0JuTCxFQUFNLE1BR1AsU0FBU3dMLEVBQW9CUSxHQUM1QixPQUFPdnJCLEtBQUt3ckIsTUFBT0MsV0FBWUYsSUFHaEMsSUFBSVYsRUFBa0JNLEVBQXNCRSxFQUFrQkgsRUFDN0RKLEVBQ0FKLEVBQVlod0IsRUFBU2tDLGNBQWUsT0FDcEMyaUIsRUFBTTdrQixFQUFTa0MsY0FBZSxPQUd6QjJpQixFQUFJM0MsUUFNVjJDLEVBQUkzQyxNQUFNOE8sZUFBaUIsY0FDM0JuTSxFQUFJYSxXQUFXLEdBQU94RCxNQUFNOE8sZUFBaUIsR0FDN0M5dkIsRUFBUSt2QixnQkFBK0MsZ0JBQTdCcE0sRUFBSTNDLE1BQU04TyxlQUVwQ3J1QixFQUFPK0IsT0FBUXhELEVBQVMsQ0FDdkJnd0Isa0JBQW1CLFdBRWxCLE9BREFuQixJQUNPVSxHQUVSZCxlQUFnQixXQUVmLE9BREFJLElBQ09TLEdBRVJXLGNBQWUsV0FFZCxPQURBcEIsSUFDT0ksR0FFUmlCLG1CQUFvQixXQUVuQixPQURBckIsSUFDT0ssR0FFUmlCLGNBQWUsV0FFZCxPQURBdEIsSUFDT1ksTUF2RlYsR0FzS0EsSUFBSVcsR0FBYyxDQUFFLFNBQVUsTUFBTyxNQUNwQ0MsR0FBYXZ4QixFQUFTa0MsY0FBZSxPQUFRZ2dCLE1BQzdDc1AsR0FBYyxHQWtCZixTQUFTQyxHQUFlcHpCLEdBQ3ZCLElBQUlxekIsRUFBUS91QixFQUFPZ3ZCLFNBQVV0ekIsSUFBVW16QixHQUFhbnpCLEdBRXBELE9BQUtxekIsSUFHQXJ6QixLQUFRa3pCLEdBQ0xsekIsRUFFRG16QixHQUFhbnpCLEdBeEJyQixTQUF5QkEsR0FNeEIsSUFIQSxJQUFJdXpCLEVBQVV2ekIsRUFBTSxHQUFJcWhCLGNBQWdCcmhCLEVBQUtvQyxNQUFPLEdBQ25EM0MsRUFBSXd6QixHQUFZcHVCLE9BRVRwRixLQUVQLElBREFPLEVBQU9pekIsR0FBYXh6QixHQUFNOHpCLEtBQ2JMLEdBQ1osT0FBT2x6QixFQWVvQnd6QixDQUFnQnh6QixJQUFVQSxHQUl4RCxJQUtDeXpCLEdBQWUsNEJBQ2ZDLEdBQWMsTUFDZEMsR0FBVSxDQUFFdEIsU0FBVSxXQUFZdUIsV0FBWSxTQUFVOVAsUUFBUyxTQUNqRStQLEdBQXFCLENBQ3BCQyxjQUFlLElBQ2ZDLFdBQVksT0FHZCxTQUFTQyxHQUFtQnR1QixFQUFNaEYsRUFBT3V6QixHQUl4QyxJQUFJOXJCLEVBQVVvYixHQUFRN1YsS0FBTWhOLEdBQzVCLE9BQU95SCxFQUdObEIsS0FBS2l0QixJQUFLLEVBQUcvckIsRUFBUyxJQUFROHJCLEdBQVksS0FBVTlyQixFQUFTLElBQU8sTUFDcEV6SCxFQUdGLFNBQVN5ekIsR0FBb0J6dUIsRUFBTTB1QixFQUFXQyxFQUFLQyxFQUFhQyxFQUFRQyxHQUN2RSxJQUFJLzBCLEVBQWtCLFVBQWQyMEIsRUFBd0IsRUFBSSxFQUNuQ0ssRUFBUSxFQUNSQyxFQUFRLEVBR1QsR0FBS0wsS0FBVUMsRUFBYyxTQUFXLFdBQ3ZDLE9BQU8sRUFHUixLQUFRNzBCLEVBQUksRUFBR0EsR0FBSyxFQUdOLFdBQVI0MEIsSUFDSkssR0FBU3B3QixFQUFPeWYsSUFBS3JlLEVBQU0ydUIsRUFBTTdRLEdBQVcvakIsSUFBSyxFQUFNODBCLElBSWxERCxHQW1CUSxZQUFSRCxJQUNKSyxHQUFTcHdCLEVBQU95ZixJQUFLcmUsRUFBTSxVQUFZOGQsR0FBVy9qQixJQUFLLEVBQU04MEIsSUFJakQsV0FBUkYsSUFDSkssR0FBU3B3QixFQUFPeWYsSUFBS3JlLEVBQU0sU0FBVzhkLEdBQVcvakIsR0FBTSxTQUFTLEVBQU04MEIsTUF0QnZFRyxHQUFTcHdCLEVBQU95ZixJQUFLcmUsRUFBTSxVQUFZOGQsR0FBVy9qQixJQUFLLEVBQU04MEIsR0FHaEQsWUFBUkYsRUFDSkssR0FBU3B3QixFQUFPeWYsSUFBS3JlLEVBQU0sU0FBVzhkLEdBQVcvakIsR0FBTSxTQUFTLEVBQU04MEIsR0FJdEVFLEdBQVNud0IsRUFBT3lmLElBQUtyZSxFQUFNLFNBQVc4ZCxHQUFXL2pCLEdBQU0sU0FBUyxFQUFNODBCLElBb0N6RSxPQWhCTUQsR0FBZUUsR0FBZSxJQUluQ0UsR0FBU3p0QixLQUFLaXRCLElBQUssRUFBR2p0QixLQUFLMHRCLEtBQzFCanZCLEVBQU0sU0FBVzB1QixFQUFXLEdBQUkvUyxjQUFnQitTLEVBQVVoeUIsTUFBTyxJQUNqRW95QixFQUNBRSxFQUNBRCxFQUNBLE1BSU0sR0FHREMsRUFHUixTQUFTRSxHQUFrQmx2QixFQUFNMHVCLEVBQVdLLEdBRzNDLElBQUlGLEVBQVMzRCxHQUFXbHJCLEdBS3ZCNHVCLElBRG1CenhCLEVBQVFnd0IscUJBQXVCNEIsSUFFRSxlQUFuRG53QixFQUFPeWYsSUFBS3JlLEVBQU0sYUFBYSxFQUFPNnVCLEdBQ3ZDTSxFQUFtQlAsRUFFbkIzd0IsRUFBTXF0QixHQUFRdHJCLEVBQU0wdUIsRUFBV0csR0FDL0JPLEVBQWEsU0FBV1YsRUFBVyxHQUFJL1MsY0FBZ0IrUyxFQUFVaHlCLE1BQU8sR0FJekUsR0FBS3V1QixHQUFVM2lCLEtBQU1ySyxHQUFRLENBQzVCLElBQU04d0IsRUFDTCxPQUFPOXdCLEVBRVJBLEVBQU0sT0FnQ1AsUUFwQlFkLEVBQVFnd0IscUJBQXVCeUIsR0FDOUIsU0FBUjN3QixJQUNDK3VCLFdBQVkvdUIsSUFBMEQsV0FBakRXLEVBQU95ZixJQUFLcmUsRUFBTSxXQUFXLEVBQU82dUIsS0FDMUQ3dUIsRUFBS3F2QixpQkFBaUJsd0IsU0FFdEJ5dkIsRUFBaUUsZUFBbkRod0IsRUFBT3lmLElBQUtyZSxFQUFNLGFBQWEsRUFBTzZ1QixJQUtwRE0sRUFBbUJDLEtBQWNwdkIsS0FFaEMvQixFQUFNK0IsRUFBTW92QixNQUtkbnhCLEVBQU0rdUIsV0FBWS91QixJQUFTLEdBSTFCd3dCLEdBQ0N6dUIsRUFDQTB1QixFQUNBSyxJQUFXSCxFQUFjLFNBQVcsV0FDcENPLEVBQ0FOLEVBR0E1d0IsR0FFRSxLQStTTCxTQUFTcXhCLEdBQU90dkIsRUFBTVksRUFBU3liLEVBQU03YixFQUFLK3VCLEdBQ3pDLE9BQU8sSUFBSUQsR0FBTTN6QixVQUFVcUQsS0FBTWdCLEVBQU1ZLEVBQVN5YixFQUFNN2IsRUFBSyt1QixHQTdTNUQzd0IsRUFBTytCLE9BQVEsQ0FJZDZ1QixTQUFVLENBQ1RDLFFBQVMsQ0FDUjcwQixJQUFLLFNBQVVvRixFQUFNdXJCLEdBQ3BCLEdBQUtBLEVBQVcsQ0FHZixJQUFJN3JCLEVBQU00ckIsR0FBUXRyQixFQUFNLFdBQ3hCLE1BQWUsS0FBUk4sRUFBYSxJQUFNQSxNQU85QnVmLFVBQVcsQ0FDVix5QkFBMkIsRUFDM0IsYUFBZSxFQUNmLGFBQWUsRUFDZixVQUFZLEVBQ1osWUFBYyxFQUNkLFlBQWMsRUFDZCxVQUFZLEVBQ1osWUFBYyxFQUNkLGVBQWlCLEVBQ2pCLGlCQUFtQixFQUNuQixTQUFXLEVBQ1gsWUFBYyxFQUNkLGNBQWdCLEVBQ2hCLFlBQWMsRUFDZCxTQUFXLEVBQ1gsT0FBUyxFQUNULFNBQVcsRUFDWCxRQUFVLEVBQ1YsUUFBVSxFQUNWLE1BQVEsR0FLVDJPLFNBQVUsR0FHVnpQLE1BQU8sU0FBVW5lLEVBQU0xRixFQUFNVSxFQUFPK3pCLEdBR25DLEdBQU0vdUIsR0FBMEIsSUFBbEJBLEVBQUsxQyxVQUFvQyxJQUFsQjBDLEVBQUsxQyxVQUFtQjBDLEVBQUttZSxNQUFsRSxDQUtBLElBQUl6ZSxFQUFLakMsRUFBTTJmLEVBQ2RzUyxFQUFXOVQsRUFBV3RoQixHQUN0QnExQixFQUFlM0IsR0FBWTFsQixLQUFNaE8sR0FDakM2akIsRUFBUW5lLEVBQUttZSxNQWFkLEdBUk13UixJQUNMcjFCLEVBQU9vekIsR0FBZWdDLElBSXZCdFMsRUFBUXhlLEVBQU80d0IsU0FBVWwxQixJQUFVc0UsRUFBTzR3QixTQUFVRSxRQUdyQ3J1QixJQUFWckcsRUEwQ0osT0FBS29pQixHQUFTLFFBQVNBLFFBQ3dCL2IsS0FBNUMzQixFQUFNMGQsRUFBTXhpQixJQUFLb0YsR0FBTSxFQUFPK3VCLElBRXpCcnZCLEVBSUR5ZSxFQUFPN2pCLEdBN0NBLFlBSGRtRCxTQUFjekMsS0FHYzBFLEVBQU1tZSxHQUFRN1YsS0FBTWhOLEtBQWEwRSxFQUFLLEtBQ2pFMUUsRUFBUXdqQixHQUFXeGUsRUFBTTFGLEVBQU1vRixHQUcvQmpDLEVBQU8sVUFJTSxNQUFUekMsR0FBaUJBLEdBQVVBLElBT2xCLFdBQVR5QyxHQUFzQmt5QixJQUMxQjMwQixHQUFTMEUsR0FBT0EsRUFBSyxLQUFTZCxFQUFPcWdCLFVBQVd5USxHQUFhLEdBQUssT0FJN0R2eUIsRUFBUSt2QixpQkFBNkIsS0FBVmx5QixHQUFpRCxJQUFqQ1YsRUFBS3VDLFFBQVMsZ0JBQzlEc2hCLEVBQU83akIsR0FBUyxXQUlYOGlCLEdBQVksUUFBU0EsUUFDc0IvYixLQUE5Q3JHLEVBQVFvaUIsRUFBTWpCLElBQUtuYyxFQUFNaEYsRUFBTyt6QixNQUU3QlksRUFDSnhSLEVBQU15UixZQUFhdDFCLEVBQU1VLEdBRXpCbWpCLEVBQU83akIsR0FBU1UsTUFrQnBCcWpCLElBQUssU0FBVXJlLEVBQU0xRixFQUFNeTBCLEVBQU9GLEdBQ2pDLElBQUk1d0IsRUFBS3NCLEVBQUs2ZCxFQUNic1MsRUFBVzlULEVBQVd0aEIsR0E2QnZCLE9BNUJnQjB6QixHQUFZMWxCLEtBQU1oTyxLQU1qQ0EsRUFBT296QixHQUFlZ0MsS0FJdkJ0UyxFQUFReGUsRUFBTzR3QixTQUFVbDFCLElBQVVzRSxFQUFPNHdCLFNBQVVFLEtBR3RDLFFBQVN0UyxJQUN0Qm5mLEVBQU1tZixFQUFNeGlCLElBQUtvRixHQUFNLEVBQU0rdUIsU0FJakIxdEIsSUFBUnBELElBQ0pBLEVBQU1xdEIsR0FBUXRyQixFQUFNMUYsRUFBTXUwQixJQUlkLFdBQVI1d0IsR0FBb0IzRCxLQUFRNnpCLEtBQ2hDbHdCLEVBQU1rd0IsR0FBb0I3ekIsSUFJWixLQUFWeTBCLEdBQWdCQSxHQUNwQnh2QixFQUFNeXRCLFdBQVkvdUIsSUFDRCxJQUFWOHdCLEdBQWtCYyxTQUFVdHdCLEdBQVFBLEdBQU8sRUFBSXRCLEdBR2hEQSxLQUlUVyxFQUFPaUIsS0FBTSxDQUFFLFNBQVUsU0FBVyxTQUFVOUYsRUFBRzIwQixHQUNoRDl2QixFQUFPNHdCLFNBQVVkLEdBQWMsQ0FDOUI5ekIsSUFBSyxTQUFVb0YsRUFBTXVyQixFQUFVd0QsR0FDOUIsR0FBS3hELEVBSUosT0FBT3dDLEdBQWF6bEIsS0FBTTFKLEVBQU95ZixJQUFLcmUsRUFBTSxhQVF4Q0EsRUFBS3F2QixpQkFBaUJsd0IsUUFBV2EsRUFBSzh2Qix3QkFBd0J0RSxNQUloRTBELEdBQWtCbHZCLEVBQU0wdUIsRUFBV0ssR0FIbkN6USxHQUFNdGUsRUFBTWl1QixHQUFTLFdBQ3BCLE9BQU9pQixHQUFrQmx2QixFQUFNMHVCLEVBQVdLLE1BTS9DNVMsSUFBSyxTQUFVbmMsRUFBTWhGLEVBQU8rekIsR0FDM0IsSUFBSXRzQixFQUNIb3NCLEVBQVMzRCxHQUFXbHJCLEdBSXBCK3ZCLEdBQXNCNXlCLEVBQVFtd0IsaUJBQ1QsYUFBcEJ1QixFQUFPbEMsU0FJUmlDLEdBRGtCbUIsR0FBc0JoQixJQUVZLGVBQW5EbndCLEVBQU95ZixJQUFLcmUsRUFBTSxhQUFhLEVBQU82dUIsR0FDdkNOLEVBQVdRLEVBQ1ZOLEdBQ0N6dUIsRUFDQTB1QixFQUNBSyxFQUNBSCxFQUNBQyxHQUVELEVBcUJGLE9BakJLRCxHQUFlbUIsSUFDbkJ4QixHQUFZaHRCLEtBQUswdEIsS0FDaEJqdkIsRUFBTSxTQUFXMHVCLEVBQVcsR0FBSS9TLGNBQWdCK1MsRUFBVWh5QixNQUFPLElBQ2pFc3dCLFdBQVk2QixFQUFRSCxJQUNwQkQsR0FBb0J6dUIsRUFBTTB1QixFQUFXLFVBQVUsRUFBT0csR0FDdEQsS0FLR04sSUFBYzlyQixFQUFVb2IsR0FBUTdWLEtBQU1oTixLQUNiLFFBQTNCeUgsRUFBUyxJQUFPLFFBRWxCekMsRUFBS21lLE1BQU91USxHQUFjMXpCLEVBQzFCQSxFQUFRNEQsRUFBT3lmLElBQUtyZSxFQUFNMHVCLElBR3BCSixHQUFtQnR1QixFQUFNaEYsRUFBT3V6QixPQUsxQzN2QixFQUFPNHdCLFNBQVNqRCxXQUFhVixHQUFjMXVCLEVBQVFrd0IsbUJBQ2xELFNBQVVydEIsRUFBTXVyQixHQUNmLEdBQUtBLEVBQ0osT0FBU3lCLFdBQVkxQixHQUFRdHJCLEVBQU0sZ0JBQ2xDQSxFQUFLOHZCLHdCQUF3QkUsS0FDNUIxUixHQUFNdGUsRUFBTSxDQUFFdXNCLFdBQVksR0FBSyxXQUM5QixPQUFPdnNCLEVBQUs4dkIsd0JBQXdCRSxRQUVsQyxPQU1ScHhCLEVBQU9pQixLQUFNLENBQ1pvd0IsT0FBUSxHQUNSQyxRQUFTLEdBQ1RDLE9BQVEsU0FDTixTQUFVQyxFQUFRQyxHQUNwQnp4QixFQUFPNHdCLFNBQVVZLEVBQVNDLEdBQVcsQ0FDcENDLE9BQVEsU0FBVXQxQixHQU9qQixJQU5BLElBQUlqQixFQUFJLEVBQ1B3MkIsRUFBVyxHQUdYQyxFQUF5QixpQkFBVngxQixFQUFxQkEsRUFBTThILE1BQU8sS0FBUSxDQUFFOUgsR0FFcERqQixFQUFJLEVBQUdBLElBQ2R3MkIsRUFBVUgsRUFBU3RTLEdBQVcvakIsR0FBTXMyQixHQUNuQ0csRUFBT3oyQixJQUFPeTJCLEVBQU96MkIsRUFBSSxJQUFPeTJCLEVBQU8sR0FHekMsT0FBT0QsSUFJTyxXQUFYSCxJQUNKeHhCLEVBQU80d0IsU0FBVVksRUFBU0MsR0FBU2xVLElBQU1tUyxNQUkzQzF2QixFQUFPRyxHQUFHNEIsT0FBUSxDQUNqQjBkLElBQUssU0FBVS9qQixFQUFNVSxHQUNwQixPQUFPaWdCLEVBQVE1ZSxLQUFNLFNBQVUyRCxFQUFNMUYsRUFBTVUsR0FDMUMsSUFBSTZ6QixFQUFRdnVCLEVBQ1hQLEVBQU0sR0FDTmhHLEVBQUksRUFFTCxHQUFLb0gsTUFBTUMsUUFBUzlHLEdBQVMsQ0FJNUIsSUFIQXUwQixFQUFTM0QsR0FBV2xyQixHQUNwQk0sRUFBTWhHLEVBQUs2RSxPQUVIcEYsRUFBSXVHLEVBQUt2RyxJQUNoQmdHLEVBQUt6RixFQUFNUCxJQUFRNkUsRUFBT3lmLElBQUtyZSxFQUFNMUYsRUFBTVAsSUFBSyxFQUFPODBCLEdBR3hELE9BQU85dUIsRUFHUixZQUFpQnNCLElBQVZyRyxFQUNONEQsRUFBT3VmLE1BQU9uZSxFQUFNMUYsRUFBTVUsR0FDMUI0RCxFQUFPeWYsSUFBS3JlLEVBQU0xRixJQUNqQkEsRUFBTVUsRUFBT2tGLFVBQVVmLE9BQVMsTUFRckNQLEVBQU8wd0IsTUFBUUEsR0FFZkEsR0FBTTN6QixVQUFZLENBQ2pCMEQsWUFBYWl3QixHQUNidHdCLEtBQU0sU0FBVWdCLEVBQU1ZLEVBQVN5YixFQUFNN2IsRUFBSyt1QixFQUFRdlEsR0FDakQzaUIsS0FBSzJELEtBQU9BLEVBQ1ozRCxLQUFLZ2dCLEtBQU9BLEVBQ1poZ0IsS0FBS2t6QixPQUFTQSxHQUFVM3dCLEVBQU8yd0IsT0FBT25QLFNBQ3RDL2pCLEtBQUt1RSxRQUFVQSxFQUNmdkUsS0FBS21TLE1BQVFuUyxLQUFLNnBCLElBQU03cEIsS0FBS29OLE1BQzdCcE4sS0FBS21FLElBQU1BLEVBQ1huRSxLQUFLMmlCLEtBQU9BLElBQVVwZ0IsRUFBT3FnQixVQUFXNUMsR0FBUyxHQUFLLE9BRXZENVMsSUFBSyxXQUNKLElBQUkyVCxFQUFRa1MsR0FBTW1CLFVBQVdwMEIsS0FBS2dnQixNQUVsQyxPQUFPZSxHQUFTQSxFQUFNeGlCLElBQ3JCd2lCLEVBQU14aUIsSUFBS3lCLE1BQ1hpekIsR0FBTW1CLFVBQVVyUSxTQUFTeGxCLElBQUt5QixPQUVoQ3EwQixJQUFLLFNBQVVDLEdBQ2QsSUFBSUMsRUFDSHhULEVBQVFrUyxHQUFNbUIsVUFBV3AwQixLQUFLZ2dCLE1Bb0IvQixPQWxCS2hnQixLQUFLdUUsUUFBUWl3QixTQUNqQngwQixLQUFLeTBCLElBQU1GLEVBQVFoeUIsRUFBTzJ3QixPQUFRbHpCLEtBQUtrekIsUUFDdENvQixFQUFTdDBCLEtBQUt1RSxRQUFRaXdCLFNBQVdGLEVBQVMsRUFBRyxFQUFHdDBCLEtBQUt1RSxRQUFRaXdCLFVBRzlEeDBCLEtBQUt5MEIsSUFBTUYsRUFBUUQsRUFFcEJ0MEIsS0FBSzZwQixLQUFRN3BCLEtBQUttRSxJQUFNbkUsS0FBS21TLE9BQVVvaUIsRUFBUXYwQixLQUFLbVMsTUFFL0NuUyxLQUFLdUUsUUFBUW13QixNQUNqQjEwQixLQUFLdUUsUUFBUW13QixLQUFLNzJCLEtBQU1tQyxLQUFLMkQsS0FBTTNELEtBQUs2cEIsSUFBSzdwQixNQUd6QytnQixHQUFTQSxFQUFNakIsSUFDbkJpQixFQUFNakIsSUFBSzlmLE1BRVhpekIsR0FBTW1CLFVBQVVyUSxTQUFTakUsSUFBSzlmLE1BRXhCQSxPQUlUaXpCLEdBQU0zekIsVUFBVXFELEtBQUtyRCxVQUFZMnpCLEdBQU0zekIsVUFFdkMyekIsR0FBTW1CLFVBQVksQ0FDakJyUSxTQUFVLENBQ1R4bEIsSUFBSyxTQUFVOGpCLEdBQ2QsSUFBSTNRLEVBSUosT0FBNkIsSUFBeEIyUSxFQUFNMWUsS0FBSzFDLFVBQ2EsTUFBNUJvaEIsRUFBTTFlLEtBQU0wZSxFQUFNckMsT0FBb0QsTUFBbENxQyxFQUFNMWUsS0FBS21lLE1BQU9PLEVBQU1yQyxNQUNyRHFDLEVBQU0xZSxLQUFNMGUsRUFBTXJDLE9BTzFCdE8sRUFBU25QLEVBQU95ZixJQUFLSyxFQUFNMWUsS0FBTTBlLEVBQU1yQyxLQUFNLE1BR2hCLFNBQVh0TyxFQUF3QkEsRUFBSixHQUV2Q29PLElBQUssU0FBVXVDLEdBS1Q5ZixFQUFPb3lCLEdBQUdELEtBQU1yUyxFQUFNckMsTUFDMUJ6ZCxFQUFPb3lCLEdBQUdELEtBQU1yUyxFQUFNckMsTUFBUXFDLEdBQ0ssSUFBeEJBLEVBQU0xZSxLQUFLMUMsV0FDckJzQixFQUFPNHdCLFNBQVU5USxFQUFNckMsT0FDNEIsTUFBbkRxQyxFQUFNMWUsS0FBS21lLE1BQU91UCxHQUFlaFAsRUFBTXJDLE9BR3hDcUMsRUFBTTFlLEtBQU0wZSxFQUFNckMsTUFBU3FDLEVBQU13SCxJQUZqQ3RuQixFQUFPdWYsTUFBT08sRUFBTTFlLEtBQU0wZSxFQUFNckMsS0FBTXFDLEVBQU13SCxJQUFNeEgsRUFBTU0sU0FVNURzUSxHQUFNbUIsVUFBVVEsVUFBWTNCLEdBQU1tQixVQUFVUyxXQUFhLENBQ3hEL1UsSUFBSyxTQUFVdUMsR0FDVEEsRUFBTTFlLEtBQUsxQyxVQUFZb2hCLEVBQU0xZSxLQUFLdkIsYUFDdENpZ0IsRUFBTTFlLEtBQU0wZSxFQUFNckMsTUFBU3FDLEVBQU13SCxPQUtwQ3RuQixFQUFPMndCLE9BQVMsQ0FDZjRCLE9BQVEsU0FBVXQxQixHQUNqQixPQUFPQSxHQUVSdTFCLE1BQU8sU0FBVXYxQixHQUNoQixNQUFPLEdBQU0wRixLQUFLOHZCLElBQUt4MUIsRUFBSTBGLEtBQUsrdkIsSUFBTyxHQUV4Q2xSLFNBQVUsU0FHWHhoQixFQUFPb3lCLEdBQUsxQixHQUFNM3pCLFVBQVVxRCxLQUc1QkosRUFBT295QixHQUFHRCxLQUFPLEdBS2pCLElBQ0NRLEdBQU9DLEdBQ1BDLEdBQVcseUJBQ1hDLEdBQU8sY0FFUixTQUFTQyxLQUNISCxNQUNxQixJQUFwQnYxQixFQUFTMjFCLFFBQW9CeDFCLEVBQU95MUIsc0JBQ3hDejFCLEVBQU95MUIsc0JBQXVCRixJQUU5QnYxQixFQUFPc2QsV0FBWWlZLEdBQVUveUIsRUFBT295QixHQUFHYyxVQUd4Q2x6QixFQUFPb3lCLEdBQUdlLFFBS1osU0FBU0MsS0FJUixPQUhBNTFCLEVBQU9zZCxXQUFZLFdBQ2xCNlgsUUFBUWx3QixJQUVBa3dCLEdBQVF2dEIsS0FBS2tpQixNQUl2QixTQUFTK0wsR0FBT3gwQixFQUFNeTBCLEdBQ3JCLElBQUlwSyxFQUNIL3RCLEVBQUksRUFDSnNQLEVBQVEsQ0FBRThvQixPQUFRMTBCLEdBS25CLElBREF5MEIsRUFBZUEsRUFBZSxFQUFJLEVBQzFCbjRCLEVBQUksRUFBR0EsR0FBSyxFQUFJbTRCLEVBRXZCN29CLEVBQU8sVUFEUHllLEVBQVFoSyxHQUFXL2pCLEtBQ1NzUCxFQUFPLFVBQVl5ZSxHQUFVcnFCLEVBTzFELE9BSkt5MEIsSUFDSjdvQixFQUFNb21CLFFBQVVwbUIsRUFBTW1pQixNQUFRL3RCLEdBR3hCNEwsRUFHUixTQUFTK29CLEdBQWFwM0IsRUFBT3FoQixFQUFNZ1csR0FLbEMsSUFKQSxJQUFJM1QsRUFDSDRLLEdBQWVnSixHQUFVQyxTQUFVbFcsSUFBVSxJQUFLMWYsT0FBUTIxQixHQUFVQyxTQUFVLE1BQzlFcGQsRUFBUSxFQUNSaFcsRUFBU21xQixFQUFXbnFCLE9BQ2JnVyxFQUFRaFcsRUFBUWdXLElBQ3ZCLEdBQU91SixFQUFRNEssRUFBWW5VLEdBQVFqYixLQUFNbTRCLEVBQVdoVyxFQUFNcmhCLEdBR3pELE9BQU8wakIsRUFzTlYsU0FBUzRULEdBQVd0eUIsRUFBTXd5QixFQUFZNXhCLEdBQ3JDLElBQUltTixFQUNIMGtCLEVBQ0F0ZCxFQUFRLEVBQ1JoVyxFQUFTbXpCLEdBQVVJLFdBQVd2ekIsT0FDOUIrWSxFQUFXdFosRUFBT2laLFdBQVdJLE9BQVEsa0JBRzdCOFosRUFBSy94QixPQUViK3hCLEVBQU8sV0FDTixHQUFLVSxFQUNKLE9BQU8sRUFZUixJQVZBLElBQUlFLEVBQWNwQixJQUFTUyxLQUMxQmxZLEVBQVl2WSxLQUFLaXRCLElBQUssRUFBRzZELEVBQVVPLFVBQVlQLEVBQVV4QixTQUFXOEIsR0FLcEVoQyxFQUFVLEdBREg3VyxFQUFZdVksRUFBVXhCLFVBQVksR0FFekMxYixFQUFRLEVBQ1JoVyxFQUFTa3pCLEVBQVVRLE9BQU8xekIsT0FFbkJnVyxFQUFRaFcsRUFBUWdXLElBQ3ZCa2QsRUFBVVEsT0FBUTFkLEdBQVF1YixJQUFLQyxHQU1oQyxPQUhBelksRUFBU2lCLFdBQVluWixFQUFNLENBQUVxeUIsRUFBVzFCLEVBQVM3VyxJQUc1QzZXLEVBQVUsR0FBS3h4QixFQUNaMmEsR0FJRjNhLEdBQ0wrWSxFQUFTaUIsV0FBWW5aLEVBQU0sQ0FBRXF5QixFQUFXLEVBQUcsSUFJNUNuYSxFQUFTa0IsWUFBYXBaLEVBQU0sQ0FBRXF5QixLQUN2QixJQUVSQSxFQUFZbmEsRUFBU3pCLFFBQVMsQ0FDN0J6VyxLQUFNQSxFQUNONmxCLE1BQU9qbkIsRUFBTytCLE9BQVEsR0FBSTZ4QixHQUMxQk0sS0FBTWwwQixFQUFPK0IsUUFBUSxFQUFNLENBQzFCb3lCLGNBQWUsR0FDZnhELE9BQVEzd0IsRUFBTzJ3QixPQUFPblAsVUFDcEJ4ZixHQUNIb3lCLG1CQUFvQlIsRUFDcEJTLGdCQUFpQnJ5QixFQUNqQmd5QixVQUFXckIsSUFBU1MsS0FDcEJuQixTQUFVandCLEVBQVFpd0IsU0FDbEJnQyxPQUFRLEdBQ1JULFlBQWEsU0FBVS9WLEVBQU03YixHQUM1QixJQUFJa2UsRUFBUTlmLEVBQU8wd0IsTUFBT3R2QixFQUFNcXlCLEVBQVVTLEtBQU16VyxFQUFNN2IsRUFDcEQ2eEIsRUFBVVMsS0FBS0MsY0FBZTFXLElBQVVnVyxFQUFVUyxLQUFLdkQsUUFFekQsT0FEQThDLEVBQVVRLE9BQU9qMkIsS0FBTThoQixHQUNoQkEsR0FFUnBCLEtBQU0sU0FBVTRWLEdBQ2YsSUFBSS9kLEVBQVEsRUFJWGhXLEVBQVMrekIsRUFBVWIsRUFBVVEsT0FBTzF6QixPQUFTLEVBQzlDLEdBQUtzekIsRUFDSixPQUFPcDJCLEtBR1IsSUFEQW8yQixHQUFVLEVBQ0Z0ZCxFQUFRaFcsRUFBUWdXLElBQ3ZCa2QsRUFBVVEsT0FBUTFkLEdBQVF1YixJQUFLLEdBVWhDLE9BTkt3QyxHQUNKaGIsRUFBU2lCLFdBQVluWixFQUFNLENBQUVxeUIsRUFBVyxFQUFHLElBQzNDbmEsRUFBU2tCLFlBQWFwWixFQUFNLENBQUVxeUIsRUFBV2EsS0FFekNoYixFQUFTc0IsV0FBWXhaLEVBQU0sQ0FBRXF5QixFQUFXYSxJQUVsQzcyQixRQUdUd3BCLEVBQVF3TSxFQUFVeE0sTUFJbkIsS0EvSEQsU0FBcUJBLEVBQU9rTixHQUMzQixJQUFJNWQsRUFBTzdhLEVBQU1pMUIsRUFBUXYwQixFQUFPb2lCLEVBR2hDLElBQU1qSSxLQUFTMFEsRUFlZCxHQWJBMEosRUFBU3dELEVBRFR6NEIsRUFBT3NoQixFQUFXekcsSUFFbEJuYSxFQUFRNnFCLEVBQU8xUSxHQUNWaFUsTUFBTUMsUUFBU3BHLEtBQ25CdTBCLEVBQVN2MEIsRUFBTyxHQUNoQkEsRUFBUTZxQixFQUFPMVEsR0FBVW5hLEVBQU8sSUFHNUJtYSxJQUFVN2EsSUFDZHVyQixFQUFPdnJCLEdBQVNVLFNBQ1Q2cUIsRUFBTzFRLEtBR2ZpSSxFQUFReGUsRUFBTzR3QixTQUFVbDFCLEtBQ1gsV0FBWThpQixFQU16QixJQUFNakksS0FMTm5hLEVBQVFvaUIsRUFBTWtULE9BQVF0MUIsVUFDZjZxQixFQUFPdnJCLEdBSUNVLEVBQ05tYSxLQUFTMFEsSUFDaEJBLEVBQU8xUSxHQUFVbmEsRUFBT21hLEdBQ3hCNGQsRUFBZTVkLEdBQVVvYSxRQUkzQndELEVBQWV6NEIsR0FBU2kxQixFQTZGMUI0RCxDQUFZdE4sRUFBT3dNLEVBQVVTLEtBQUtDLGVBRTFCNWQsRUFBUWhXLEVBQVFnVyxJQUV2QixHQURBcEgsRUFBU3VrQixHQUFVSSxXQUFZdmQsR0FBUWpiLEtBQU1tNEIsRUFBV3J5QixFQUFNNmxCLEVBQU93TSxFQUFVUyxNQU05RSxPQUpLMTFCLEVBQVkyUSxFQUFPdVAsUUFDdkIxZSxFQUFPeWUsWUFBYWdWLEVBQVVyeUIsS0FBTXF5QixFQUFVUyxLQUFLM2IsT0FBUW1HLEtBQzFEdlAsRUFBT3VQLEtBQUsvaEIsS0FBTXdTLElBRWJBLEVBeUJULE9BckJBblAsRUFBT21CLElBQUs4bEIsRUFBT3VNLEdBQWFDLEdBRTNCajFCLEVBQVlpMUIsRUFBVVMsS0FBS3RrQixRQUMvQjZqQixFQUFVUyxLQUFLdGtCLE1BQU10VSxLQUFNOEYsRUFBTXF5QixHQUlsQ0EsRUFDRTdaLFNBQVU2WixFQUFVUyxLQUFLdGEsVUFDekJyVSxLQUFNa3VCLEVBQVVTLEtBQUszdUIsS0FBTWt1QixFQUFVUyxLQUFLTSxVQUMxQzFjLEtBQU0yYixFQUFVUyxLQUFLcGMsTUFDckJ1QixPQUFRb2EsRUFBVVMsS0FBSzdhLFFBRXpCclosRUFBT295QixHQUFHcUMsTUFDVHowQixFQUFPK0IsT0FBUW94QixFQUFNLENBQ3BCL3hCLEtBQU1BLEVBQ05zekIsS0FBTWpCLEVBQ05sYixNQUFPa2IsRUFBVVMsS0FBSzNiLFNBSWpCa2IsRUFHUnp6QixFQUFPMHpCLFVBQVkxekIsRUFBTytCLE9BQVEyeEIsR0FBVyxDQUU1Q0MsU0FBVSxDQUNULElBQUssQ0FBRSxTQUFVbFcsRUFBTXJoQixHQUN0QixJQUFJMGpCLEVBQVFyaUIsS0FBSysxQixZQUFhL1YsRUFBTXJoQixHQUVwQyxPQURBd2pCLEdBQVdFLEVBQU0xZSxLQUFNcWMsRUFBTXdCLEdBQVE3VixLQUFNaE4sR0FBUzBqQixHQUM3Q0EsS0FJVDZVLFFBQVMsU0FBVTFOLEVBQU8vbEIsR0FDcEIxQyxFQUFZeW9CLElBQ2hCL2xCLEVBQVcrbEIsRUFDWEEsRUFBUSxDQUFFLE1BRVZBLEVBQVFBLEVBQU1sZSxNQUFPb08sR0FPdEIsSUFKQSxJQUFJc0csRUFDSGxILEVBQVEsRUFDUmhXLEVBQVMwbUIsRUFBTTFtQixPQUVSZ1csRUFBUWhXLEVBQVFnVyxJQUN2QmtILEVBQU93SixFQUFPMVEsR0FDZG1kLEdBQVVDLFNBQVVsVyxHQUFTaVcsR0FBVUMsU0FBVWxXLElBQVUsR0FDM0RpVyxHQUFVQyxTQUFVbFcsR0FBTzlQLFFBQVN6TSxJQUl0QzR5QixXQUFZLENBM1diLFNBQTJCMXlCLEVBQU02bEIsRUFBT2lOLEdBQ3ZDLElBQUl6VyxFQUFNcmhCLEVBQU8wa0IsRUFBUXRDLEVBQU9vVyxFQUFTQyxFQUFXQyxFQUFnQnRWLEVBQ25FdVYsRUFBUSxVQUFXOU4sR0FBUyxXQUFZQSxFQUN4Q3lOLEVBQU9qM0IsS0FDUGdzQixFQUFPLEdBQ1BsSyxFQUFRbmUsRUFBS21lLE1BQ2J5VCxFQUFTNXhCLEVBQUsxQyxVQUFZNGdCLEdBQW9CbGUsR0FDOUM0ekIsRUFBV3JYLEVBQVMzaEIsSUFBS29GLEVBQU0sVUE2QmhDLElBQU1xYyxLQTFCQXlXLEVBQUszYixRQUVhLE9BRHZCaUcsRUFBUXhlLEVBQU95ZSxZQUFhcmQsRUFBTSxPQUN2QjZ6QixXQUNWelcsRUFBTXlXLFNBQVcsRUFDakJMLEVBQVVwVyxFQUFNM0YsTUFBTUosS0FDdEIrRixFQUFNM0YsTUFBTUosS0FBTyxXQUNaK0YsRUFBTXlXLFVBQ1hMLE1BSUhwVyxFQUFNeVcsV0FFTlAsRUFBS3JiLE9BQVEsV0FHWnFiLEVBQUtyYixPQUFRLFdBQ1ptRixFQUFNeVcsV0FDQWoxQixFQUFPdVksTUFBT25YLEVBQU0sTUFBT2IsUUFDaENpZSxFQUFNM0YsTUFBTUosWUFPRndPLEVBRWIsR0FEQTdxQixFQUFRNnFCLEVBQU94SixHQUNWb1YsR0FBU25wQixLQUFNdE4sR0FBVSxDQUc3QixVQUZPNnFCLEVBQU94SixHQUNkcUQsRUFBU0EsR0FBb0IsV0FBVjFrQixFQUNkQSxLQUFZNDJCLEVBQVMsT0FBUyxRQUFXLENBSTdDLEdBQWUsU0FBVjUyQixJQUFvQjQ0QixRQUFpQ3Z5QixJQUFyQnV5QixFQUFVdlgsR0FLOUMsU0FKQXVWLEdBQVMsRUFPWHZKLEVBQU1oTSxHQUFTdVgsR0FBWUEsRUFBVXZYLElBQVV6ZCxFQUFPdWYsTUFBT25lLEVBQU1xYyxHQU1yRSxJQURBb1gsR0FBYTcwQixFQUFPb0QsY0FBZTZqQixNQUNoQmpuQixFQUFPb0QsY0FBZXFtQixHQThEekMsSUFBTWhNLEtBekREc1gsR0FBMkIsSUFBbEIzekIsRUFBSzFDLFdBTWxCdzFCLEVBQUtnQixTQUFXLENBQUUzVixFQUFNMlYsU0FBVTNWLEVBQU00VixVQUFXNVYsRUFBTTZWLFdBSWxDLE9BRHZCTixFQUFpQkUsR0FBWUEsRUFBU3hWLFdBRXJDc1YsRUFBaUJuWCxFQUFTM2hCLElBQUtvRixFQUFNLFlBR3JCLFVBRGpCb2UsRUFBVXhmLEVBQU95ZixJQUFLcmUsRUFBTSxjQUV0QjB6QixFQUNKdFYsRUFBVXNWLEdBSVZwVSxHQUFVLENBQUV0ZixJQUFRLEdBQ3BCMHpCLEVBQWlCMXpCLEVBQUttZSxNQUFNQyxTQUFXc1YsRUFDdkN0VixFQUFVeGYsRUFBT3lmLElBQUtyZSxFQUFNLFdBQzVCc2YsR0FBVSxDQUFFdGYsT0FLRyxXQUFab2UsR0FBb0MsaUJBQVpBLEdBQWdELE1BQWxCc1YsSUFDckIsU0FBaEM5MEIsRUFBT3lmLElBQUtyZSxFQUFNLFdBR2hCeXpCLElBQ0xILEVBQUtudkIsS0FBTSxXQUNWZ2EsRUFBTUMsUUFBVXNWLElBRU0sTUFBbEJBLElBQ0p0VixFQUFVRCxFQUFNQyxRQUNoQnNWLEVBQTZCLFNBQVp0VixFQUFxQixHQUFLQSxJQUc3Q0QsRUFBTUMsUUFBVSxpQkFLZDBVLEVBQUtnQixXQUNUM1YsRUFBTTJWLFNBQVcsU0FDakJSLEVBQUtyYixPQUFRLFdBQ1prRyxFQUFNMlYsU0FBV2hCLEVBQUtnQixTQUFVLEdBQ2hDM1YsRUFBTTRWLFVBQVlqQixFQUFLZ0IsU0FBVSxHQUNqQzNWLEVBQU02VixVQUFZbEIsRUFBS2dCLFNBQVUsTUFLbkNMLEdBQVksRUFDRXBMLEVBR1BvTCxJQUNBRyxFQUNDLFdBQVlBLElBQ2hCaEMsRUFBU2dDLEVBQVNoQyxRQUduQmdDLEVBQVdyWCxFQUFTdEIsT0FBUWpiLEVBQU0sU0FBVSxDQUFFb2UsUUFBU3NWLElBSW5EaFUsSUFDSmtVLEVBQVNoQyxRQUFVQSxHQUlmQSxHQUNKdFMsR0FBVSxDQUFFdGYsSUFBUSxHQUtyQnN6QixFQUFLbnZCLEtBQU0sV0FTVixJQUFNa1ksS0FKQXVWLEdBQ0x0UyxHQUFVLENBQUV0ZixJQUVidWMsRUFBUy9FLE9BQVF4WCxFQUFNLFVBQ1Rxb0IsRUFDYnpwQixFQUFPdWYsTUFBT25lLEVBQU1xYyxFQUFNZ00sRUFBTWhNLE9BTW5Db1gsRUFBWXJCLEdBQWFSLEVBQVNnQyxFQUFVdlgsR0FBUyxFQUFHQSxFQUFNaVgsR0FDdERqWCxLQUFRdVgsSUFDZkEsRUFBVXZYLEdBQVNvWCxFQUFVamxCLE1BQ3hCb2pCLElBQ0o2QixFQUFVanpCLElBQU1pekIsRUFBVWpsQixNQUMxQmlsQixFQUFVamxCLE1BQVEsTUF1TXJCeWxCLFVBQVcsU0FBVW4wQixFQUFVdXFCLEdBQ3pCQSxFQUNKaUksR0FBVUksV0FBV25tQixRQUFTek0sR0FFOUJ3eUIsR0FBVUksV0FBVzkxQixLQUFNa0QsTUFLOUJsQixFQUFPczFCLE1BQVEsU0FBVUEsRUFBTzNFLEVBQVF4d0IsR0FDdkMsSUFBSW8xQixFQUFNRCxHQUEwQixpQkFBVkEsRUFBcUJ0MUIsRUFBTytCLE9BQVEsR0FBSXV6QixHQUFVLENBQzNFZCxTQUFVcjBCLElBQU9BLEdBQU13d0IsR0FDdEJueUIsRUFBWTgyQixJQUFXQSxFQUN4QnJELFNBQVVxRCxFQUNWM0UsT0FBUXh3QixHQUFNd3dCLEdBQVVBLElBQVdueUIsRUFBWW15QixJQUFZQSxHQW9DNUQsT0FoQ0szd0IsRUFBT295QixHQUFHdE8sSUFDZHlSLEVBQUl0RCxTQUFXLEVBR2MsaUJBQWpCc0QsRUFBSXRELFdBQ1ZzRCxFQUFJdEQsWUFBWWp5QixFQUFPb3lCLEdBQUdvRCxPQUM5QkQsRUFBSXRELFNBQVdqeUIsRUFBT295QixHQUFHb0QsT0FBUUQsRUFBSXRELFVBR3JDc0QsRUFBSXRELFNBQVdqeUIsRUFBT295QixHQUFHb0QsT0FBT2hVLFVBTWpCLE1BQWIrVCxFQUFJaGQsUUFBK0IsSUFBZGdkLEVBQUloZCxRQUM3QmdkLEVBQUloZCxNQUFRLE1BSWJnZCxFQUFJNVYsSUFBTTRWLEVBQUlmLFNBRWRlLEVBQUlmLFNBQVcsV0FDVGgyQixFQUFZKzJCLEVBQUk1VixNQUNwQjRWLEVBQUk1VixJQUFJcmtCLEtBQU1tQyxNQUdWODNCLEVBQUloZCxPQUNSdlksRUFBT3NlLFFBQVM3Z0IsS0FBTTgzQixFQUFJaGQsUUFJckJnZCxHQUdSdjFCLEVBQU9HLEdBQUc0QixPQUFRLENBQ2pCMHpCLE9BQVEsU0FBVUgsRUFBT0ksRUFBSS9FLEVBQVF6dkIsR0FHcEMsT0FBT3pELEtBQUs0TyxPQUFRaVQsSUFBcUJHLElBQUssVUFBVyxHQUFJa0IsT0FHM0QvZSxNQUFNK3pCLFFBQVMsQ0FBRTlFLFFBQVM2RSxHQUFNSixFQUFPM0UsRUFBUXp2QixJQUVsRHkwQixRQUFTLFNBQVVsWSxFQUFNNlgsRUFBTzNFLEVBQVF6dkIsR0FDdkMsSUFBSTJYLEVBQVE3WSxFQUFPb0QsY0FBZXFhLEdBQ2pDbVksRUFBUzUxQixFQUFPczFCLE1BQU9BLEVBQU8zRSxFQUFRenZCLEdBQ3RDMjBCLEVBQWMsV0FHYixJQUFJbkIsRUFBT2hCLEdBQVdqMkIsS0FBTXVDLEVBQU8rQixPQUFRLEdBQUkwYixHQUFRbVksSUFHbEQvYyxHQUFTOEUsRUFBUzNoQixJQUFLeUIsS0FBTSxZQUNqQ2kzQixFQUFLaFcsTUFBTSxJQUtkLE9BRkNtWCxFQUFZQyxPQUFTRCxFQUVmaGQsSUFBMEIsSUFBakIrYyxFQUFPcmQsTUFDdEI5YSxLQUFLd0QsS0FBTTQwQixHQUNYcDRCLEtBQUs4YSxNQUFPcWQsRUFBT3JkLE1BQU9zZCxJQUU1Qm5YLEtBQU0sU0FBVTdmLEVBQU0rZixFQUFZMFYsR0FDakMsSUFBSXlCLEVBQVksU0FBVXZYLEdBQ3pCLElBQUlFLEVBQU9GLEVBQU1FLFlBQ1ZGLEVBQU1FLEtBQ2JBLEVBQU00VixJQVlQLE1BVHFCLGlCQUFUejFCLElBQ1h5MUIsRUFBVTFWLEVBQ1ZBLEVBQWEvZixFQUNiQSxPQUFPNEQsR0FFSG1jLElBQXVCLElBQVQvZixHQUNsQnBCLEtBQUs4YSxNQUFPMVosR0FBUSxLQUFNLElBR3BCcEIsS0FBS3dELEtBQU0sV0FDakIsSUFBSXFkLEdBQVUsRUFDYi9ILEVBQWdCLE1BQVIxWCxHQUFnQkEsRUFBTyxhQUMvQm0zQixFQUFTaDJCLEVBQU9nMkIsT0FDaEJ4WSxFQUFPRyxFQUFTM2hCLElBQUt5QixNQUV0QixHQUFLOFksRUFDQ2lILEVBQU1qSCxJQUFXaUgsRUFBTWpILEdBQVFtSSxNQUNuQ3FYLEVBQVd2WSxFQUFNakgsU0FHbEIsSUFBTUEsS0FBU2lILEVBQ1RBLEVBQU1qSCxJQUFXaUgsRUFBTWpILEdBQVFtSSxNQUFRb1UsR0FBS3BwQixLQUFNNk0sSUFDdER3ZixFQUFXdlksRUFBTWpILElBS3BCLElBQU1BLEVBQVF5ZixFQUFPejFCLE9BQVFnVyxLQUN2QnlmLEVBQVF6ZixHQUFRblYsT0FBUzNELE1BQ25CLE1BQVJvQixHQUFnQm0zQixFQUFRemYsR0FBUWdDLFFBQVUxWixJQUU1Q20zQixFQUFRemYsR0FBUW1lLEtBQUtoVyxLQUFNNFYsR0FDM0JoVyxHQUFVLEVBQ1YwWCxFQUFPbDBCLE9BQVF5VSxFQUFPLEtBT25CK0gsR0FBWWdXLEdBQ2hCdDBCLEVBQU9zZSxRQUFTN2dCLEtBQU1vQixNQUl6QmkzQixPQUFRLFNBQVVqM0IsR0FJakIsT0FIYyxJQUFUQSxJQUNKQSxFQUFPQSxHQUFRLE1BRVRwQixLQUFLd0QsS0FBTSxXQUNqQixJQUFJc1YsRUFDSGlILEVBQU9HLEVBQVMzaEIsSUFBS3lCLE1BQ3JCOGEsRUFBUWlGLEVBQU0zZSxFQUFPLFNBQ3JCMmYsRUFBUWhCLEVBQU0zZSxFQUFPLGNBQ3JCbTNCLEVBQVNoMkIsRUFBT2cyQixPQUNoQnoxQixFQUFTZ1ksRUFBUUEsRUFBTWhZLE9BQVMsRUFhakMsSUFWQWlkLEVBQUtzWSxRQUFTLEVBR2Q5MUIsRUFBT3VZLE1BQU85YSxLQUFNb0IsRUFBTSxJQUVyQjJmLEdBQVNBLEVBQU1FLE1BQ25CRixFQUFNRSxLQUFLcGpCLEtBQU1tQyxNQUFNLEdBSWxCOFksRUFBUXlmLEVBQU96MUIsT0FBUWdXLEtBQ3ZCeWYsRUFBUXpmLEdBQVFuVixPQUFTM0QsTUFBUXU0QixFQUFRemYsR0FBUWdDLFFBQVUxWixJQUMvRG0zQixFQUFRemYsR0FBUW1lLEtBQUtoVyxNQUFNLEdBQzNCc1gsRUFBT2wwQixPQUFReVUsRUFBTyxJQUt4QixJQUFNQSxFQUFRLEVBQUdBLEVBQVFoVyxFQUFRZ1csSUFDM0JnQyxFQUFPaEMsSUFBV2dDLEVBQU9oQyxHQUFRdWYsUUFDckN2ZCxFQUFPaEMsR0FBUXVmLE9BQU94NkIsS0FBTW1DLGFBS3ZCK2YsRUFBS3NZLFlBS2Y5MUIsRUFBT2lCLEtBQU0sQ0FBRSxTQUFVLE9BQVEsUUFBVSxTQUFVOUYsRUFBR08sR0FDdkQsSUFBSXU2QixFQUFRajJCLEVBQU9HLEdBQUl6RSxHQUN2QnNFLEVBQU9HLEdBQUl6RSxHQUFTLFNBQVU0NUIsRUFBTzNFLEVBQVF6dkIsR0FDNUMsT0FBZ0IsTUFBVG8wQixHQUFrQyxrQkFBVkEsRUFDOUJXLEVBQU01MEIsTUFBTzVELEtBQU02RCxXQUNuQjdELEtBQUtrNEIsUUFBU3RDLEdBQU8zM0IsR0FBTSxHQUFRNDVCLEVBQU8zRSxFQUFRenZCLE1BS3JEbEIsRUFBT2lCLEtBQU0sQ0FDWmkxQixVQUFXN0MsR0FBTyxRQUNsQjhDLFFBQVM5QyxHQUFPLFFBQ2hCK0MsWUFBYS9DLEdBQU8sVUFDcEJnRCxPQUFRLENBQUV4RixRQUFTLFFBQ25CeUYsUUFBUyxDQUFFekYsUUFBUyxRQUNwQjBGLFdBQVksQ0FBRTFGLFFBQVMsV0FDckIsU0FBVW4xQixFQUFNdXJCLEdBQ2xCam5CLEVBQU9HLEdBQUl6RSxHQUFTLFNBQVU0NUIsRUFBTzNFLEVBQVF6dkIsR0FDNUMsT0FBT3pELEtBQUtrNEIsUUFBUzFPLEVBQU9xTyxFQUFPM0UsRUFBUXp2QixNQUk3Q2xCLEVBQU9nMkIsT0FBUyxHQUNoQmgyQixFQUFPb3lCLEdBQUdlLEtBQU8sV0FDaEIsSUFBSXNCLEVBQ0h0NUIsRUFBSSxFQUNKNjZCLEVBQVNoMkIsRUFBT2cyQixPQUlqQixJQUZBckQsR0FBUXZ0QixLQUFLa2lCLE1BRUxuc0IsRUFBSTY2QixFQUFPejFCLE9BQVFwRixLQUMxQnM1QixFQUFRdUIsRUFBUTc2QixPQUdDNjZCLEVBQVE3NkIsS0FBUXM1QixHQUNoQ3VCLEVBQU9sMEIsT0FBUTNHLElBQUssR0FJaEI2NkIsRUFBT3oxQixRQUNaUCxFQUFPb3lCLEdBQUcxVCxPQUVYaVUsUUFBUWx3QixHQUdUekMsRUFBT295QixHQUFHcUMsTUFBUSxTQUFVQSxHQUMzQnowQixFQUFPZzJCLE9BQU9oNEIsS0FBTXkyQixHQUNwQnowQixFQUFPb3lCLEdBQUd4aUIsU0FHWDVQLEVBQU9veUIsR0FBR2MsU0FBVyxHQUNyQmx6QixFQUFPb3lCLEdBQUd4aUIsTUFBUSxXQUNaZ2pCLEtBSUxBLElBQWEsRUFDYkcsT0FHRC95QixFQUFPb3lCLEdBQUcxVCxLQUFPLFdBQ2hCa1UsR0FBYSxNQUdkNXlCLEVBQU9veUIsR0FBR29ELE9BQVMsQ0FDbEJnQixLQUFNLElBQ05DLEtBQU0sSUFHTmpWLFNBQVUsS0FNWHhoQixFQUFPRyxHQUFHdTJCLE1BQVEsU0FBVUMsRUFBTTkzQixHQUlqQyxPQUhBODNCLEVBQU8zMkIsRUFBT295QixJQUFLcHlCLEVBQU9veUIsR0FBR29ELE9BQVFtQixJQUFpQkEsRUFDdEQ5M0IsRUFBT0EsR0FBUSxLQUVScEIsS0FBSzhhLE1BQU8xWixFQUFNLFNBQVU0SixFQUFNK1YsR0FDeEMsSUFBSW9ZLEVBQVVwNUIsRUFBT3NkLFdBQVlyUyxFQUFNa3VCLEdBQ3ZDblksRUFBTUUsS0FBTyxXQUNabGhCLEVBQU9xNUIsYUFBY0QsT0FNeEIsV0FDQyxJQUFJaHFCLEVBQVF2UCxFQUFTa0MsY0FBZSxTQUVuQ2cyQixFQURTbDRCLEVBQVNrQyxjQUFlLFVBQ3BCSyxZQUFhdkMsRUFBU2tDLGNBQWUsV0FFbkRxTixFQUFNL04sS0FBTyxXQUliTixFQUFRdTRCLFFBQTBCLEtBQWhCbHFCLEVBQU14USxNQUl4Qm1DLEVBQVF3NEIsWUFBY3hCLEVBQUl0a0IsVUFJMUJyRSxFQUFRdlAsRUFBU2tDLGNBQWUsVUFDMUJuRCxNQUFRLElBQ2R3USxFQUFNL04sS0FBTyxRQUNiTixFQUFReTRCLFdBQTZCLE1BQWhCcHFCLEVBQU14USxNQXBCNUIsR0F3QkEsSUFBSTY2QixHQUNIdHNCLEdBQWEzSyxFQUFPNE4sS0FBS2pELFdBRTFCM0ssRUFBT0csR0FBRzRCLE9BQVEsQ0FDakIrTCxLQUFNLFNBQVVwUyxFQUFNVSxHQUNyQixPQUFPaWdCLEVBQVE1ZSxLQUFNdUMsRUFBTzhOLEtBQU1wUyxFQUFNVSxFQUFPa0YsVUFBVWYsT0FBUyxJQUduRTIyQixXQUFZLFNBQVV4N0IsR0FDckIsT0FBTytCLEtBQUt3RCxLQUFNLFdBQ2pCakIsRUFBT2szQixXQUFZejVCLEtBQU0vQixRQUs1QnNFLEVBQU8rQixPQUFRLENBQ2QrTCxLQUFNLFNBQVUxTSxFQUFNMUYsRUFBTVUsR0FDM0IsSUFBSTBFLEVBQUswZCxFQUNSMlksRUFBUS8xQixFQUFLMUMsU0FHZCxHQUFlLElBQVZ5NEIsR0FBeUIsSUFBVkEsR0FBeUIsSUFBVkEsRUFLbkMsWUFBa0MsSUFBdEIvMUIsRUFBSzNCLGFBQ1RPLEVBQU95ZCxLQUFNcmMsRUFBTTFGLEVBQU1VLElBS2xCLElBQVYrNkIsR0FBZ0JuM0IsRUFBTzZVLFNBQVV6VCxLQUNyQ29kLEVBQVF4ZSxFQUFPbzNCLFVBQVcxN0IsRUFBS3lJLGlCQUM1Qm5FLEVBQU80TixLQUFLN0UsTUFBTXN1QixLQUFLM3RCLEtBQU1oTyxHQUFTdTdCLFFBQVd4MEIsU0FHdENBLElBQVZyRyxFQUNXLE9BQVZBLE9BQ0o0RCxFQUFPazNCLFdBQVk5MUIsRUFBTTFGLEdBSXJCOGlCLEdBQVMsUUFBU0EsUUFDdUIvYixLQUEzQzNCLEVBQU0wZCxFQUFNakIsSUFBS25jLEVBQU1oRixFQUFPVixJQUN6Qm9GLEdBR1JNLEVBQUsxQixhQUFjaEUsRUFBTVUsRUFBUSxJQUMxQkEsR0FHSG9pQixHQUFTLFFBQVNBLEdBQStDLFFBQXBDMWQsRUFBTTBkLEVBQU14aUIsSUFBS29GLEVBQU0xRixJQUNqRG9GLEVBTU0sT0FIZEEsRUFBTWQsRUFBT3VNLEtBQUt1QixLQUFNMU0sRUFBTTFGLFNBR1QrRyxFQUFZM0IsSUFHbENzMkIsVUFBVyxDQUNWdjRCLEtBQU0sQ0FDTDBlLElBQUssU0FBVW5jLEVBQU1oRixHQUNwQixJQUFNbUMsRUFBUXk0QixZQUF3QixVQUFWNTZCLEdBQzNCbU0sRUFBVW5ILEVBQU0sU0FBWSxDQUM1QixJQUFJL0IsRUFBTStCLEVBQUtoRixNQUtmLE9BSkFnRixFQUFLMUIsYUFBYyxPQUFRdEQsR0FDdEJpRCxJQUNKK0IsRUFBS2hGLE1BQVFpRCxHQUVQakQsTUFNWDg2QixXQUFZLFNBQVU5MUIsRUFBTWhGLEdBQzNCLElBQUlWLEVBQ0hQLEVBQUksRUFJSm04QixFQUFZbDdCLEdBQVNBLEVBQU0yTSxNQUFPb08sR0FFbkMsR0FBS21nQixHQUErQixJQUFsQmwyQixFQUFLMUMsU0FDdEIsS0FBVWhELEVBQU80N0IsRUFBV244QixNQUMzQmlHLEVBQUs0SSxnQkFBaUJ0TyxNQU8xQnU3QixHQUFXLENBQ1YxWixJQUFLLFNBQVVuYyxFQUFNaEYsRUFBT1YsR0FRM0IsT0FQZSxJQUFWVSxFQUdKNEQsRUFBT2szQixXQUFZOTFCLEVBQU0xRixHQUV6QjBGLEVBQUsxQixhQUFjaEUsRUFBTUEsR0FFbkJBLElBSVRzRSxFQUFPaUIsS0FBTWpCLEVBQU80TixLQUFLN0UsTUFBTXN1QixLQUFLclksT0FBT2pXLE1BQU8sUUFBVSxTQUFVNU4sRUFBR08sR0FDeEUsSUFBSUMsRUFBU2dQLEdBQVlqUCxJQUFVc0UsRUFBT3VNLEtBQUt1QixLQUUvQ25ELEdBQVlqUCxHQUFTLFNBQVUwRixFQUFNMUYsRUFBTTZJLEdBQzFDLElBQUl6RCxFQUFLbWtCLEVBQ1JzUyxFQUFnQjc3QixFQUFLeUksY0FZdEIsT0FWTUksSUFHTDBnQixFQUFTdGEsR0FBWTRzQixHQUNyQjVzQixHQUFZNHNCLEdBQWtCejJCLEVBQzlCQSxFQUFxQyxNQUEvQm5GLEVBQVF5RixFQUFNMUYsRUFBTTZJLEdBQ3pCZ3pCLEVBQ0EsS0FDRDVzQixHQUFZNHNCLEdBQWtCdFMsR0FFeEJua0IsS0FPVCxJQUFJMDJCLEdBQWEsc0NBQ2hCQyxHQUFhLGdCQXlJYixTQUFTQyxHQUFrQnQ3QixHQUUxQixPQURhQSxFQUFNMk0sTUFBT29PLElBQW1CLElBQy9Cdk4sS0FBTSxLQUl0QixTQUFTK3RCLEdBQVV2MkIsR0FDbEIsT0FBT0EsRUFBSzNCLGNBQWdCMkIsRUFBSzNCLGFBQWMsVUFBYSxHQUc3RCxTQUFTbTRCLEdBQWdCeDdCLEdBQ3hCLE9BQUttRyxNQUFNQyxRQUFTcEcsR0FDWkEsRUFFYyxpQkFBVkEsR0FDSkEsRUFBTTJNLE1BQU9vTyxJQUVkLEdBeEpSblgsRUFBT0csR0FBRzRCLE9BQVEsQ0FDakIwYixLQUFNLFNBQVUvaEIsRUFBTVUsR0FDckIsT0FBT2lnQixFQUFRNWUsS0FBTXVDLEVBQU95ZCxLQUFNL2hCLEVBQU1VLEVBQU9rRixVQUFVZixPQUFTLElBR25FczNCLFdBQVksU0FBVW44QixHQUNyQixPQUFPK0IsS0FBS3dELEtBQU0sa0JBQ1Z4RCxLQUFNdUMsRUFBTzgzQixRQUFTcDhCLElBQVVBLFFBSzFDc0UsRUFBTytCLE9BQVEsQ0FDZDBiLEtBQU0sU0FBVXJjLEVBQU0xRixFQUFNVSxHQUMzQixJQUFJMEUsRUFBSzBkLEVBQ1IyWSxFQUFRLzFCLEVBQUsxQyxTQUdkLEdBQWUsSUFBVnk0QixHQUF5QixJQUFWQSxHQUF5QixJQUFWQSxFQVduQyxPQVBlLElBQVZBLEdBQWdCbjNCLEVBQU82VSxTQUFVelQsS0FHckMxRixFQUFPc0UsRUFBTzgzQixRQUFTcDhCLElBQVVBLEVBQ2pDOGlCLEVBQVF4ZSxFQUFPNnhCLFVBQVduMkIsU0FHWitHLElBQVZyRyxFQUNDb2lCLEdBQVMsUUFBU0EsUUFDdUIvYixLQUEzQzNCLEVBQU0wZCxFQUFNakIsSUFBS25jLEVBQU1oRixFQUFPVixJQUN6Qm9GLEVBR0NNLEVBQU0xRixHQUFTVSxFQUdwQm9pQixHQUFTLFFBQVNBLEdBQStDLFFBQXBDMWQsRUFBTTBkLEVBQU14aUIsSUFBS29GLEVBQU0xRixJQUNqRG9GLEVBR0RNLEVBQU0xRixJQUdkbTJCLFVBQVcsQ0FDVjlnQixTQUFVLENBQ1QvVSxJQUFLLFNBQVVvRixHQU9kLElBQUkyMkIsRUFBVy8zQixFQUFPdU0sS0FBS3VCLEtBQU0xTSxFQUFNLFlBRXZDLE9BQUsyMkIsRUFDR0MsU0FBVUQsRUFBVSxJQUkzQlAsR0FBVzl0QixLQUFNdEksRUFBS21ILFdBQ3RCa3ZCLEdBQVcvdEIsS0FBTXRJLEVBQUttSCxXQUN0Qm5ILEVBQUswUCxLQUVFLEdBR0EsS0FLWGduQixRQUFTLENBQ1IsSUFBTyxVQUNQLE1BQVMsZUFZTHY1QixFQUFRdzRCLGNBQ2IvMkIsRUFBTzZ4QixVQUFVNWdCLFNBQVcsQ0FDM0JqVixJQUFLLFNBQVVvRixHQUlkLElBQUl5TyxFQUFTek8sRUFBS3ZCLFdBSWxCLE9BSEtnUSxHQUFVQSxFQUFPaFEsWUFDckJnUSxFQUFPaFEsV0FBV3FSLGNBRVosTUFFUnFNLElBQUssU0FBVW5jLEdBSWQsSUFBSXlPLEVBQVN6TyxFQUFLdkIsV0FDYmdRLElBQ0pBLEVBQU9xQixjQUVGckIsRUFBT2hRLFlBQ1hnUSxFQUFPaFEsV0FBV3FSLGtCQU92QmxSLEVBQU9pQixLQUFNLENBQ1osV0FDQSxXQUNBLFlBQ0EsY0FDQSxjQUNBLFVBQ0EsVUFDQSxTQUNBLGNBQ0EsbUJBQ0UsV0FDRmpCLEVBQU84M0IsUUFBU3I2QixLQUFLMEcsZUFBa0IxRyxPQTRCeEN1QyxFQUFPRyxHQUFHNEIsT0FBUSxDQUNqQmsyQixTQUFVLFNBQVU3N0IsR0FDbkIsSUFBSTg3QixFQUFTOTJCLEVBQU15SixFQUFLc3RCLEVBQVVDLEVBQU96MkIsRUFBRzAyQixFQUMzQ2w5QixFQUFJLEVBRUwsR0FBS3FELEVBQVlwQyxHQUNoQixPQUFPcUIsS0FBS3dELEtBQU0sU0FBVVUsR0FDM0IzQixFQUFRdkMsTUFBT3c2QixTQUFVNzdCLEVBQU1kLEtBQU1tQyxLQUFNa0UsRUFBR2cyQixHQUFVbDZCLFVBTTFELElBRkF5NkIsRUFBVU4sR0FBZ0J4N0IsSUFFYm1FLE9BQ1osS0FBVWEsRUFBTzNELEtBQU10QyxNQUl0QixHQUhBZzlCLEVBQVdSLEdBQVV2MkIsR0FDckJ5SixFQUF3QixJQUFsQnpKLEVBQUsxQyxVQUFvQixJQUFNZzVCLEdBQWtCUyxHQUFhLElBRXpELENBRVYsSUFEQXgyQixFQUFJLEVBQ015MkIsRUFBUUYsRUFBU3YyQixNQUNyQmtKLEVBQUk1TSxRQUFTLElBQU1tNkIsRUFBUSxLQUFRLElBQ3ZDdnRCLEdBQU91dEIsRUFBUSxLQU1aRCxLQURMRSxFQUFhWCxHQUFrQjdzQixLQUU5QnpKLEVBQUsxQixhQUFjLFFBQVMyNEIsR0FNaEMsT0FBTzU2QixNQUdSNjZCLFlBQWEsU0FBVWw4QixHQUN0QixJQUFJODdCLEVBQVM5MkIsRUFBTXlKLEVBQUtzdEIsRUFBVUMsRUFBT3oyQixFQUFHMDJCLEVBQzNDbDlCLEVBQUksRUFFTCxHQUFLcUQsRUFBWXBDLEdBQ2hCLE9BQU9xQixLQUFLd0QsS0FBTSxTQUFVVSxHQUMzQjNCLEVBQVF2QyxNQUFPNjZCLFlBQWFsOEIsRUFBTWQsS0FBTW1DLEtBQU1rRSxFQUFHZzJCLEdBQVVsNkIsVUFJN0QsSUFBTTZELFVBQVVmLE9BQ2YsT0FBTzlDLEtBQUtxUSxLQUFNLFFBQVMsSUFLNUIsSUFGQW9xQixFQUFVTixHQUFnQng3QixJQUVibUUsT0FDWixLQUFVYSxFQUFPM0QsS0FBTXRDLE1BTXRCLEdBTEFnOUIsRUFBV1IsR0FBVXYyQixHQUdyQnlKLEVBQXdCLElBQWxCekosRUFBSzFDLFVBQW9CLElBQU1nNUIsR0FBa0JTLEdBQWEsSUFFekQsQ0FFVixJQURBeDJCLEVBQUksRUFDTXkyQixFQUFRRixFQUFTdjJCLE1BRzFCLEtBQVFrSixFQUFJNU0sUUFBUyxJQUFNbTZCLEVBQVEsTUFBUyxHQUMzQ3Z0QixFQUFNQSxFQUFJaEksUUFBUyxJQUFNdTFCLEVBQVEsSUFBSyxLQU1uQ0QsS0FETEUsRUFBYVgsR0FBa0I3c0IsS0FFOUJ6SixFQUFLMUIsYUFBYyxRQUFTMjRCLEdBTWhDLE9BQU81NkIsTUFHUjg2QixZQUFhLFNBQVVuOEIsRUFBT284QixHQUM3QixJQUFJMzVCLFNBQWN6QyxFQUNqQnE4QixFQUF3QixXQUFUNTVCLEdBQXFCMEQsTUFBTUMsUUFBU3BHLEdBRXBELE1BQXlCLGtCQUFibzhCLEdBQTBCQyxFQUM5QkQsRUFBVy82QixLQUFLdzZCLFNBQVU3N0IsR0FBVXFCLEtBQUs2NkIsWUFBYWw4QixHQUd6RG9DLEVBQVlwQyxHQUNUcUIsS0FBS3dELEtBQU0sU0FBVTlGLEdBQzNCNkUsRUFBUXZDLE1BQU84NkIsWUFDZG44QixFQUFNZCxLQUFNbUMsS0FBTXRDLEVBQUd3OEIsR0FBVWw2QixNQUFRKzZCLEdBQ3ZDQSxLQUtJLzZCLEtBQUt3RCxLQUFNLFdBQ2pCLElBQUlnTCxFQUFXOVEsRUFBR3NhLEVBQU1pakIsRUFFeEIsR0FBS0QsRUFPSixJQUpBdDlCLEVBQUksRUFDSnNhLEVBQU96VixFQUFRdkMsTUFDZmk3QixFQUFhZCxHQUFnQng3QixHQUVuQjZQLEVBQVl5c0IsRUFBWXY5QixNQUc1QnNhLEVBQUtrakIsU0FBVTFzQixHQUNuQndKLEVBQUs2aUIsWUFBYXJzQixHQUVsQndKLEVBQUt3aUIsU0FBVWhzQixhQUtJeEosSUFBVnJHLEdBQWdDLFlBQVR5QyxLQUNsQ29OLEVBQVkwckIsR0FBVWw2QixRQUlyQmtnQixFQUFTSixJQUFLOWYsS0FBTSxnQkFBaUJ3TyxHQU9qQ3hPLEtBQUtpQyxjQUNUakMsS0FBS2lDLGFBQWMsUUFDbEJ1TSxJQUF1QixJQUFWN1AsRUFDYixHQUNBdWhCLEVBQVMzaEIsSUFBS3lCLEtBQU0sa0JBQXFCLFFBTzlDazdCLFNBQVUsU0FBVTE0QixHQUNuQixJQUFJZ00sRUFBVzdLLEVBQ2RqRyxFQUFJLEVBR0wsSUFEQThRLEVBQVksSUFBTWhNLEVBQVcsSUFDbkJtQixFQUFPM0QsS0FBTXRDLE1BQ3RCLEdBQXVCLElBQWxCaUcsRUFBSzFDLFdBQ1AsSUFBTWc1QixHQUFrQkMsR0FBVXYyQixJQUFXLEtBQU1uRCxRQUFTZ08sSUFBZSxFQUM1RSxPQUFPLEVBSVYsT0FBTyxLQU9ULElBQUkyc0IsR0FBVSxNQUVkNTRCLEVBQU9HLEdBQUc0QixPQUFRLENBQ2pCMUMsSUFBSyxTQUFVakQsR0FDZCxJQUFJb2lCLEVBQU8xZCxFQUFLK3BCLEVBQ2Z6cEIsRUFBTzNELEtBQU0sR0FFZCxPQUFNNkQsVUFBVWYsUUEwQmhCc3FCLEVBQWtCcnNCLEVBQVlwQyxHQUV2QnFCLEtBQUt3RCxLQUFNLFNBQVU5RixHQUMzQixJQUFJa0UsRUFFbUIsSUFBbEI1QixLQUFLaUIsV0FXRSxPQU5YVyxFQURJd3JCLEVBQ0V6dUIsRUFBTWQsS0FBTW1DLEtBQU10QyxFQUFHNkUsRUFBUXZDLE1BQU80QixPQUVwQ2pELEdBS05pRCxFQUFNLEdBRW9CLGlCQUFSQSxFQUNsQkEsR0FBTyxHQUVJa0QsTUFBTUMsUUFBU25ELEtBQzFCQSxFQUFNVyxFQUFPbUIsSUFBSzlCLEVBQUssU0FBVWpELEdBQ2hDLE9BQWdCLE1BQVRBLEVBQWdCLEdBQUtBLEVBQVEsT0FJdENvaUIsRUFBUXhlLEVBQU82NEIsU0FBVXA3QixLQUFLb0IsT0FBVW1CLEVBQU82NEIsU0FBVXA3QixLQUFLOEssU0FBU3BFLGlCQUdyRCxRQUFTcWEsUUFBK0MvYixJQUFwQytiLEVBQU1qQixJQUFLOWYsS0FBTTRCLEVBQUssV0FDM0Q1QixLQUFLckIsTUFBUWlELE9BekRUK0IsR0FDSm9kLEVBQVF4ZSxFQUFPNjRCLFNBQVV6M0IsRUFBS3ZDLE9BQzdCbUIsRUFBTzY0QixTQUFVejNCLEVBQUttSCxTQUFTcEUsaUJBRy9CLFFBQVNxYSxRQUNnQy9iLEtBQXZDM0IsRUFBTTBkLEVBQU14aUIsSUFBS29GLEVBQU0sVUFFbEJOLEVBTVksaUJBSHBCQSxFQUFNTSxFQUFLaEYsT0FJSDBFLEVBQUkrQixRQUFTKzFCLEdBQVMsSUFJaEIsTUFBUDkzQixFQUFjLEdBQUtBLE9BRzNCLEtBeUNIZCxFQUFPK0IsT0FBUSxDQUNkODJCLFNBQVUsQ0FDVDFYLE9BQVEsQ0FDUG5sQixJQUFLLFNBQVVvRixHQUVkLElBQUkvQixFQUFNVyxFQUFPdU0sS0FBS3VCLEtBQU0xTSxFQUFNLFNBQ2xDLE9BQWMsTUFBUC9CLEVBQ05BLEVBTUFxNEIsR0FBa0IxM0IsRUFBT1IsS0FBTTRCLE1BR2xDc0QsT0FBUSxDQUNQMUksSUFBSyxTQUFVb0YsR0FDZCxJQUFJaEYsRUFBTytrQixFQUFRaG1CLEVBQ2xCNkcsRUFBVVosRUFBS1ksUUFDZnVVLEVBQVFuVixFQUFLOFAsY0FDYnlTLEVBQW9CLGVBQWR2aUIsRUFBS3ZDLEtBQ1graEIsRUFBUytDLEVBQU0sS0FBTyxHQUN0QmlNLEVBQU1qTSxFQUFNcE4sRUFBUSxFQUFJdlUsRUFBUXpCLE9BVWpDLElBUENwRixFQURJb2IsRUFBUSxFQUNScVosRUFHQWpNLEVBQU1wTixFQUFRLEVBSVhwYixFQUFJeTBCLEVBQUt6MEIsSUFLaEIsS0FKQWdtQixFQUFTbmYsRUFBUzdHLElBSUo4VixVQUFZOVYsSUFBTW9iLEtBRzdCNEssRUFBTzdZLFlBQ0w2WSxFQUFPdGhCLFdBQVd5SSxXQUNuQkMsRUFBVTRZLEVBQU90aEIsV0FBWSxhQUFpQixDQU1qRCxHQUhBekQsRUFBUTRELEVBQVFtaEIsR0FBUzloQixNQUdwQnNrQixFQUNKLE9BQU92bkIsRUFJUndrQixFQUFPNWlCLEtBQU01QixHQUlmLE9BQU93a0IsR0FHUnJELElBQUssU0FBVW5jLEVBQU1oRixHQU1wQixJQUxBLElBQUkwOEIsRUFBVzNYLEVBQ2RuZixFQUFVWixFQUFLWSxRQUNmNGUsRUFBUzVnQixFQUFPdUQsVUFBV25ILEdBQzNCakIsRUFBSTZHLEVBQVF6QixPQUVMcEYsT0FDUGdtQixFQUFTbmYsRUFBUzdHLElBSU44VixTQUNYalIsRUFBT3lELFFBQVN6RCxFQUFPNjRCLFNBQVMxWCxPQUFPbmxCLElBQUttbEIsR0FBVVAsSUFBWSxLQUVsRWtZLEdBQVksR0FVZCxPQUhNQSxJQUNMMTNCLEVBQUs4UCxlQUFpQixHQUVoQjBQLE9BT1g1Z0IsRUFBT2lCLEtBQU0sQ0FBRSxRQUFTLFlBQWMsV0FDckNqQixFQUFPNjRCLFNBQVVwN0IsTUFBUyxDQUN6QjhmLElBQUssU0FBVW5jLEVBQU1oRixHQUNwQixHQUFLbUcsTUFBTUMsUUFBU3BHLEdBQ25CLE9BQVNnRixFQUFLNFAsUUFBVWhSLEVBQU95RCxRQUFTekQsRUFBUW9CLEdBQU8vQixNQUFPakQsSUFBVyxJQUl0RW1DLEVBQVF1NEIsVUFDYjkyQixFQUFPNjRCLFNBQVVwN0IsTUFBT3pCLElBQU0sU0FBVW9GLEdBQ3ZDLE9BQXdDLE9BQWpDQSxFQUFLM0IsYUFBYyxTQUFxQixLQUFPMkIsRUFBS2hGLFVBVzlEbUMsRUFBUXc2QixRQUFVLGNBQWV2N0IsRUFHakMsSUFBSXc3QixHQUFjLGtDQUNqQkMsR0FBMEIsU0FBVXR3QixHQUNuQ0EsRUFBRXliLG1CQUdKcGtCLEVBQU8rQixPQUFRL0IsRUFBTzZqQixNQUFPLENBRTVCVSxRQUFTLFNBQVVWLEVBQU9yRyxFQUFNcGMsRUFBTTgzQixHQUVyQyxJQUFJLzlCLEVBQUcwUCxFQUFLNkIsRUFBS3lzQixFQUFZQyxFQUFRblUsRUFBUTlLLEVBQVNrZixFQUNyREMsRUFBWSxDQUFFbDRCLEdBQVEvRCxHQUN0QndCLEVBQU9ULEVBQU85QyxLQUFNdW9CLEVBQU8sUUFBV0EsRUFBTWhsQixLQUFPZ2xCLEVBQ25EaUIsRUFBYTFtQixFQUFPOUMsS0FBTXVvQixFQUFPLGFBQWdCQSxFQUFNclksVUFBVXRILE1BQU8sS0FBUSxHQUtqRixHQUhBMkcsRUFBTXd1QixFQUFjM3NCLEVBQU10TCxFQUFPQSxHQUFRL0QsRUFHbEIsSUFBbEIrRCxFQUFLMUMsVUFBb0MsSUFBbEIwQyxFQUFLMUMsV0FLNUJzNkIsR0FBWXR2QixLQUFNN0ssRUFBT21CLEVBQU82akIsTUFBTXFCLGFBSXRDcm1CLEVBQUtaLFFBQVMsTUFBUyxJQUczQjZtQixFQUFham1CLEVBQUtxRixNQUFPLEtBQ3pCckYsRUFBT2ltQixFQUFXMWEsUUFDbEIwYSxFQUFXampCLFFBRVp1M0IsRUFBU3Y2QixFQUFLWixRQUFTLEtBQVEsR0FBSyxLQUFPWSxHQUczQ2dsQixFQUFRQSxFQUFPN2pCLEVBQU8wQyxTQUNyQm1oQixFQUNBLElBQUk3akIsRUFBT3drQixNQUFPM2xCLEVBQXVCLGlCQUFWZ2xCLEdBQXNCQSxJQUdoREssVUFBWWdWLEVBQWUsRUFBSSxFQUNyQ3JWLEVBQU1yWSxVQUFZc1osRUFBV2xiLEtBQU0sS0FDbkNpYSxFQUFNc0MsV0FBYXRDLEVBQU1yWSxVQUN4QixJQUFJL0UsT0FBUSxVQUFZcWUsRUFBV2xiLEtBQU0saUJBQW9CLFdBQzdELEtBR0RpYSxFQUFNMVUsWUFBUzFNLEVBQ1RvaEIsRUFBTXpoQixTQUNYeWhCLEVBQU16aEIsT0FBU2hCLEdBSWhCb2MsRUFBZSxNQUFSQSxFQUNOLENBQUVxRyxHQUNGN2pCLEVBQU91RCxVQUFXaWEsRUFBTSxDQUFFcUcsSUFHM0IxSixFQUFVbmEsRUFBTzZqQixNQUFNMUosUUFBU3RiLElBQVUsR0FDcENxNkIsSUFBZ0IvZSxFQUFRb0ssVUFBbUQsSUFBeENwSyxFQUFRb0ssUUFBUWxqQixNQUFPRCxFQUFNb2MsSUFBdEUsQ0FNQSxJQUFNMGIsSUFBaUIvZSxFQUFRME0sV0FBYWxvQixFQUFVeUMsR0FBUyxDQU05RCxJQUpBKzNCLEVBQWFoZixFQUFRZ0ssY0FBZ0J0bEIsRUFDL0JtNkIsR0FBWXR2QixLQUFNeXZCLEVBQWF0NkIsS0FDcENnTSxFQUFNQSxFQUFJaEwsWUFFSGdMLEVBQUtBLEVBQU1BLEVBQUloTCxXQUN0Qnk1QixFQUFVdDdCLEtBQU02TSxHQUNoQjZCLEVBQU03QixFQUlGNkIsS0FBVXRMLEVBQUsrSCxlQUFpQjlMLElBQ3BDaThCLEVBQVV0N0IsS0FBTTBPLEVBQUliLGFBQWVhLEVBQUk2c0IsY0FBZ0IvN0IsR0FNekQsSUFEQXJDLEVBQUksR0FDTTBQLEVBQU15dUIsRUFBV24rQixRQUFZMG9CLEVBQU1tQyx3QkFDNUNxVCxFQUFjeHVCLEVBQ2RnWixFQUFNaGxCLEtBQU8xRCxFQUFJLEVBQ2hCZytCLEVBQ0FoZixFQUFRaUwsVUFBWXZtQixHQUdyQm9tQixHQUFXdEgsRUFBUzNoQixJQUFLNk8sRUFBSyxXQUFjLElBQU1nWixFQUFNaGxCLE9BQ3ZEOGUsRUFBUzNoQixJQUFLNk8sRUFBSyxZQUVuQm9hLEVBQU81akIsTUFBT3dKLEVBQUsyUyxJQUlwQnlILEVBQVNtVSxHQUFVdnVCLEVBQUt1dUIsS0FDVG5VLEVBQU81akIsT0FBUzZiLEVBQVlyUyxLQUMxQ2daLEVBQU0xVSxPQUFTOFYsRUFBTzVqQixNQUFPd0osRUFBSzJTLElBQ1osSUFBakJxRyxFQUFNMVUsUUFDVjBVLEVBQU1TLGtCQThDVCxPQTFDQVQsRUFBTWhsQixLQUFPQSxFQUdQcTZCLEdBQWlCclYsRUFBTXFELHNCQUVwQi9NLEVBQVFxSCxXQUNxQyxJQUFwRHJILEVBQVFxSCxTQUFTbmdCLE1BQU9pNEIsRUFBVXR6QixNQUFPd1gsS0FDekNOLEVBQVk5YixJQUlQZzRCLEdBQVU1NkIsRUFBWTRDLEVBQU12QyxNQUFhRixFQUFVeUMsTUFHdkRzTCxFQUFNdEwsRUFBTWc0QixNQUdYaDRCLEVBQU1nNEIsR0FBVyxNQUlsQnA1QixFQUFPNmpCLE1BQU1xQixVQUFZcm1CLEVBRXBCZ2xCLEVBQU1tQyx3QkFDVnFULEVBQVl0dEIsaUJBQWtCbE4sRUFBTW82QixJQUdyQzczQixFQUFNdkMsS0FFRGdsQixFQUFNbUMsd0JBQ1ZxVCxFQUFZdGQsb0JBQXFCbGQsRUFBTW82QixJQUd4Q2o1QixFQUFPNmpCLE1BQU1xQixlQUFZemlCLEVBRXBCaUssSUFDSnRMLEVBQU1nNEIsR0FBVzFzQixJQU1kbVgsRUFBTTFVLFNBS2RxcUIsU0FBVSxTQUFVMzZCLEVBQU11QyxFQUFNeWlCLEdBQy9CLElBQUlsYixFQUFJM0ksRUFBTytCLE9BQ2QsSUFBSS9CLEVBQU93a0IsTUFDWFgsRUFDQSxDQUNDaGxCLEtBQU1BLEVBQ04wb0IsYUFBYSxJQUlmdm5CLEVBQU82akIsTUFBTVUsUUFBUzViLEVBQUcsS0FBTXZILE1BS2pDcEIsRUFBT0csR0FBRzRCLE9BQVEsQ0FFakJ3aUIsUUFBUyxTQUFVMWxCLEVBQU0yZSxHQUN4QixPQUFPL2YsS0FBS3dELEtBQU0sV0FDakJqQixFQUFPNmpCLE1BQU1VLFFBQVMxbEIsRUFBTTJlLEVBQU0vZixTQUdwQ2c4QixlQUFnQixTQUFVNTZCLEVBQU0yZSxHQUMvQixJQUFJcGMsRUFBTzNELEtBQU0sR0FDakIsR0FBSzJELEVBQ0osT0FBT3BCLEVBQU82akIsTUFBTVUsUUFBUzFsQixFQUFNMmUsRUFBTXBjLEdBQU0sTUFjNUM3QyxFQUFRdzZCLFNBQ2IvNEIsRUFBT2lCLEtBQU0sQ0FBRWtvQixNQUFPLFVBQVdDLEtBQU0sWUFBYyxTQUFVSyxFQUFNNUQsR0FHcEUsSUFBSW5iLEVBQVUsU0FBVW1aLEdBQ3ZCN2pCLEVBQU82akIsTUFBTTJWLFNBQVUzVCxFQUFLaEMsRUFBTXpoQixPQUFRcEMsRUFBTzZqQixNQUFNZ0MsSUFBS2hDLEtBRzdEN2pCLEVBQU82akIsTUFBTTFKLFFBQVMwTCxHQUFRLENBQzdCUCxNQUFPLFdBQ04sSUFBSWxtQixFQUFNM0IsS0FBSzBMLGVBQWlCMUwsS0FDL0JpOEIsRUFBVy9iLEVBQVN0QixPQUFRamQsRUFBS3ltQixHQUU1QjZULEdBQ0x0NkIsRUFBSTJNLGlCQUFrQjBkLEVBQU0vZSxHQUFTLEdBRXRDaVQsRUFBU3RCLE9BQVFqZCxFQUFLeW1CLEdBQU82VCxHQUFZLEdBQU0sSUFFaERqVSxTQUFVLFdBQ1QsSUFBSXJtQixFQUFNM0IsS0FBSzBMLGVBQWlCMUwsS0FDL0JpOEIsRUFBVy9iLEVBQVN0QixPQUFRamQsRUFBS3ltQixHQUFRLEVBRXBDNlQsRUFLTC9iLEVBQVN0QixPQUFRamQsRUFBS3ltQixFQUFLNlQsSUFKM0J0NkIsRUFBSTJjLG9CQUFxQjBOLEVBQU0vZSxHQUFTLEdBQ3hDaVQsRUFBUy9FLE9BQVF4WixFQUFLeW1CLFFBUzNCLElBQUlsVixHQUFXblQsRUFBT21ULFNBRWxCNVIsR0FBUXFHLEtBQUtraUIsTUFFYnFTLEdBQVMsS0FLYjM1QixFQUFPNDVCLFNBQVcsU0FBVXBjLEdBQzNCLElBQUloTyxFQUNKLElBQU1nTyxHQUF3QixpQkFBVEEsRUFDcEIsT0FBTyxLQUtSLElBQ0NoTyxHQUFNLElBQU1oUyxFQUFPcThCLFdBQWNDLGdCQUFpQnRjLEVBQU0sWUFDdkQsTUFBUTdVLEdBQ1Q2RyxPQUFNL00sRUFNUCxPQUhNK00sSUFBT0EsRUFBSWpHLHFCQUFzQixlQUFnQmhKLFFBQ3REUCxFQUFPK0MsTUFBTyxnQkFBa0J5YSxHQUUxQmhPLEdBSVIsSUFDQ3VxQixHQUFXLFFBQ1hDLEdBQVEsU0FDUkMsR0FBa0Isd0NBQ2xCQyxHQUFlLHFDQUVoQixTQUFTQyxHQUFhM0ksRUFBUS95QixFQUFLMjdCLEVBQWEzakIsR0FDL0MsSUFBSS9hLEVBRUosR0FBSzZHLE1BQU1DLFFBQVMvRCxHQUduQnVCLEVBQU9pQixLQUFNeEMsRUFBSyxTQUFVdEQsRUFBR2tjLEdBQ3pCK2lCLEdBQWVMLEdBQVNyd0IsS0FBTThuQixHQUdsQy9hLEVBQUsrYSxFQUFRbmEsR0FLYjhpQixHQUNDM0ksRUFBUyxLQUFxQixpQkFBTm5hLEdBQXVCLE1BQUxBLEVBQVlsYyxFQUFJLElBQU8sSUFDakVrYyxFQUNBK2lCLEVBQ0EzakIsVUFLRyxHQUFNMmpCLEdBQWlDLFdBQWxCcjZCLEVBQVF0QixHQVVuQ2dZLEVBQUsrYSxFQUFRL3lCLFFBUGIsSUFBTS9DLEtBQVErQyxFQUNiMDdCLEdBQWEzSSxFQUFTLElBQU05MUIsRUFBTyxJQUFLK0MsRUFBSy9DLEdBQVEwK0IsRUFBYTNqQixHQVlyRXpXLEVBQU9xNkIsTUFBUSxTQUFVdjBCLEVBQUdzMEIsR0FDM0IsSUFBSTVJLEVBQ0h0MEIsRUFBSSxHQUNKdVosRUFBTSxTQUFVL1osRUFBSzQ5QixHQUdwQixJQUFJbCtCLEVBQVFvQyxFQUFZODdCLEdBQ3ZCQSxJQUNBQSxFQUVEcDlCLEVBQUdBLEVBQUVxRCxRQUFXZzZCLG1CQUFvQjc5QixHQUFRLElBQzNDNjlCLG1CQUE2QixNQUFUbitCLEVBQWdCLEdBQUtBLElBRzVDLEdBQVUsTUFBTDBKLEVBQ0osTUFBTyxHQUlSLEdBQUt2RCxNQUFNQyxRQUFTc0QsSUFBU0EsRUFBRXRGLFNBQVdSLEVBQU9zQyxjQUFld0QsR0FHL0Q5RixFQUFPaUIsS0FBTTZFLEVBQUcsV0FDZjJRLEVBQUtoWixLQUFLL0IsS0FBTStCLEtBQUtyQixjQU90QixJQUFNbzFCLEtBQVUxckIsRUFDZnEwQixHQUFhM0ksRUFBUTFyQixFQUFHMHJCLEdBQVU0SSxFQUFhM2pCLEdBS2pELE9BQU92WixFQUFFME0sS0FBTSxNQUdoQjVKLEVBQU9HLEdBQUc0QixPQUFRLENBQ2pCeTRCLFVBQVcsV0FDVixPQUFPeDZCLEVBQU9xNkIsTUFBTzU4QixLQUFLZzlCLG1CQUUzQkEsZUFBZ0IsV0FDZixPQUFPaDlCLEtBQUswRCxJQUFLLFdBR2hCLElBQUkwTSxFQUFXN04sRUFBT3lkLEtBQU1oZ0IsS0FBTSxZQUNsQyxPQUFPb1EsRUFBVzdOLEVBQU91RCxVQUFXc0ssR0FBYXBRLE9BRWpENE8sT0FBUSxXQUNSLElBQUl4TixFQUFPcEIsS0FBS29CLEtBR2hCLE9BQU9wQixLQUFLL0IsT0FBU3NFLEVBQVF2QyxNQUFPd1gsR0FBSSxjQUN2Q2lsQixHQUFheHdCLEtBQU1qTSxLQUFLOEssWUFBZTB4QixHQUFnQnZ3QixLQUFNN0ssS0FDM0RwQixLQUFLdVQsVUFBWStQLEdBQWVyWCxLQUFNN0ssTUFFekNzQyxJQUFLLFNBQVVoRyxFQUFHaUcsR0FDbEIsSUFBSS9CLEVBQU1XLEVBQVF2QyxNQUFPNEIsTUFFekIsT0FBWSxNQUFQQSxFQUNHLEtBR0hrRCxNQUFNQyxRQUFTbkQsR0FDWlcsRUFBT21CLElBQUs5QixFQUFLLFNBQVVBLEdBQ2pDLE1BQU8sQ0FBRTNELEtBQU0wRixFQUFLMUYsS0FBTVUsTUFBT2lELEVBQUl3RCxRQUFTbTNCLEdBQU8sV0FJaEQsQ0FBRXQrQixLQUFNMEYsRUFBSzFGLEtBQU1VLE1BQU9pRCxFQUFJd0QsUUFBU20zQixHQUFPLFdBQ2xEaCtCLFNBS04sSUFDQzArQixHQUFNLE9BQ05DLEdBQVEsT0FDUkMsR0FBYSxnQkFDYkMsR0FBVyw2QkFJWEMsR0FBYSxpQkFDYkMsR0FBWSxRQVdaakgsR0FBYSxHQU9ia0gsR0FBYSxHQUdiQyxHQUFXLEtBQUtsOUIsT0FBUSxLQUd4Qm05QixHQUFlNzlCLEVBQVNrQyxjQUFlLEtBSXhDLFNBQVM0N0IsR0FBNkJDLEdBR3JDLE9BQU8sU0FBVUMsRUFBb0JuaUIsR0FFRCxpQkFBdkJtaUIsSUFDWG5pQixFQUFPbWlCLEVBQ1BBLEVBQXFCLEtBR3RCLElBQUlDLEVBQ0huZ0MsRUFBSSxFQUNKb2dDLEVBQVlGLEVBQW1CbDNCLGNBQWM0RSxNQUFPb08sSUFBbUIsR0FFeEUsR0FBSzNZLEVBQVkwYSxHQUdoQixLQUFVb2lCLEVBQVdDLEVBQVdwZ0MsTUFHUixNQUFsQm1nQyxFQUFVLElBQ2RBLEVBQVdBLEVBQVN4OUIsTUFBTyxJQUFPLEtBQ2hDczlCLEVBQVdFLEdBQWFGLEVBQVdFLElBQWMsSUFBSzN0QixRQUFTdUwsS0FJL0RraUIsRUFBV0UsR0FBYUYsRUFBV0UsSUFBYyxJQUFLdDlCLEtBQU1rYixJQVFuRSxTQUFTc2lCLEdBQStCSixFQUFXcDVCLEVBQVNxeUIsRUFBaUJvSCxHQUU1RSxJQUFJQyxFQUFZLEdBQ2ZDLEVBQXFCUCxJQUFjSixHQUVwQyxTQUFTWSxFQUFTTixHQUNqQixJQUFJcnFCLEVBY0osT0FiQXlxQixFQUFXSixJQUFhLEVBQ3hCdDdCLEVBQU9pQixLQUFNbTZCLEVBQVdFLElBQWMsR0FBSSxTQUFVOXpCLEVBQUdxMEIsR0FDdEQsSUFBSUMsRUFBc0JELEVBQW9CNzVCLEVBQVNxeUIsRUFBaUJvSCxHQUN4RSxNQUFvQyxpQkFBeEJLLEdBQ1ZILEdBQXFCRCxFQUFXSSxHQUt0QkgsSUFDRDFxQixFQUFXNnFCLFFBRGYsR0FITjk1QixFQUFRdTVCLFVBQVU1dEIsUUFBU211QixHQUMzQkYsRUFBU0UsSUFDRixLQUtGN3FCLEVBR1IsT0FBTzJxQixFQUFTNTVCLEVBQVF1NUIsVUFBVyxNQUFVRyxFQUFXLE1BQVNFLEVBQVMsS0FNM0UsU0FBU0csR0FBWTM1QixFQUFRdEQsR0FDNUIsSUFBSXBDLEVBQUsyRixFQUNSMjVCLEVBQWNoOEIsRUFBT2k4QixhQUFhRCxhQUFlLEdBRWxELElBQU10L0IsS0FBT29DLE9BQ1EyRCxJQUFmM0QsRUFBS3BDLE1BQ1BzL0IsRUFBYXQvQixHQUFRMEYsRUFBV0MsSUFBVUEsRUFBTyxLQUFVM0YsR0FBUW9DLEVBQUtwQyxJQU81RSxPQUpLMkYsR0FDSnJDLEVBQU8rQixRQUFRLEVBQU1LLEVBQVFDLEdBR3ZCRCxFQS9FUDg0QixHQUFhcHFCLEtBQU9ILEdBQVNHLEtBZ1A5QjlRLEVBQU8rQixPQUFRLENBR2RtNkIsT0FBUSxFQUdSQyxhQUFjLEdBQ2RDLEtBQU0sR0FFTkgsYUFBYyxDQUNiSSxJQUFLMXJCLEdBQVNHLEtBQ2RqUyxLQUFNLE1BQ055OUIsUUF2UmdCLDREQXVSUTV5QixLQUFNaUgsR0FBUzRyQixVQUN2Q3AvQixRQUFRLEVBQ1JxL0IsYUFBYSxFQUNiQyxPQUFPLEVBQ1BDLFlBQWEsbURBY2JDLFFBQVMsQ0FDUixJQUFLMUIsR0FDTHo3QixLQUFNLGFBQ05zckIsS0FBTSxZQUNOdGIsSUFBSyw0QkFDTG90QixLQUFNLHFDQUdQM21CLFNBQVUsQ0FDVHpHLElBQUssVUFDTHNiLEtBQU0sU0FDTjhSLEtBQU0sWUFHUEMsZUFBZ0IsQ0FDZnJ0QixJQUFLLGNBQ0xoUSxLQUFNLGVBQ05vOUIsS0FBTSxnQkFLUEUsV0FBWSxDQUdYLFNBQVVsMUIsT0FHVixhQUFhLEVBR2IsWUFBYW9XLEtBQUtDLE1BR2xCLFdBQVlqZSxFQUFPNDVCLFVBT3BCb0MsWUFBYSxDQUNaSyxLQUFLLEVBQ0xuOEIsU0FBUyxJQU9YNjhCLFVBQVcsU0FBVTM2QixFQUFRNDZCLEdBQzVCLE9BQU9BLEVBR05qQixHQUFZQSxHQUFZMzVCLEVBQVFwQyxFQUFPaThCLGNBQWdCZSxHQUd2RGpCLEdBQVkvN0IsRUFBT2k4QixhQUFjNzVCLElBR25DNjZCLGNBQWU5QixHQUE2QnJILElBQzVDb0osY0FBZS9CLEdBQTZCSCxJQUc1Q21DLEtBQU0sU0FBVWQsRUFBS3I2QixHQUdBLGlCQUFScTZCLElBQ1hyNkIsRUFBVXE2QixFQUNWQSxPQUFNNTVCLEdBSVBULEVBQVVBLEdBQVcsR0FFckIsSUFBSW83QixFQUdIQyxFQUdBQyxFQUNBQyxFQUdBQyxFQUdBQyxFQUdBM2hCLEVBR0E0aEIsRUFHQXZpQyxFQUdBd2lDLEVBR0F6Z0MsRUFBSThDLEVBQU8rOEIsVUFBVyxHQUFJLzZCLEdBRzFCNDdCLEVBQWtCMWdDLEVBQUVnRCxTQUFXaEQsRUFHL0IyZ0MsRUFBcUIzZ0MsRUFBRWdELFVBQ3BCMDlCLEVBQWdCbC9CLFVBQVlrL0IsRUFBZ0JwOUIsUUFDN0NSLEVBQVE0OUIsR0FDUjU5QixFQUFPNmpCLE1BR1R2SyxFQUFXdFosRUFBT2laLFdBQ2xCNmtCLEVBQW1COTlCLEVBQU9nWSxVQUFXLGVBR3JDK2xCLEVBQWE3Z0MsRUFBRTZnQyxZQUFjLEdBRzdCQyxFQUFpQixHQUNqQkMsRUFBc0IsR0FHdEJDLEVBQVcsV0FHWHpDLEVBQVEsQ0FDUHRmLFdBQVksRUFHWmdpQixrQkFBbUIsU0FBVXpoQyxHQUM1QixJQUFJcU0sRUFDSixHQUFLK1MsRUFBWSxDQUNoQixJQUFNeWhCLEVBRUwsSUFEQUEsRUFBa0IsR0FDUngwQixFQUFROHhCLEdBQVN6eEIsS0FBTWswQixJQUNoQ0MsRUFBaUJ4MEIsRUFBTyxHQUFJNUUsY0FBZ0IsTUFDekNvNUIsRUFBaUJ4MEIsRUFBTyxHQUFJNUUsY0FBZ0IsTUFBUyxJQUNyRHBHLE9BQVFnTCxFQUFPLElBR3BCQSxFQUFRdzBCLEVBQWlCN2dDLEVBQUl5SCxjQUFnQixLQUU5QyxPQUFnQixNQUFUNEUsRUFBZ0IsS0FBT0EsRUFBTWEsS0FBTSxPQUkzQ3cwQixzQkFBdUIsV0FDdEIsT0FBT3RpQixFQUFZd2hCLEVBQXdCLE1BSTVDZSxpQkFBa0IsU0FBVTNpQyxFQUFNVSxHQU1qQyxPQUxrQixNQUFiMGYsSUFDSnBnQixFQUFPdWlDLEVBQXFCdmlDLEVBQUt5SSxlQUNoQzg1QixFQUFxQnZpQyxFQUFLeUksZ0JBQW1CekksRUFDOUNzaUMsRUFBZ0J0aUMsR0FBU1UsR0FFbkJxQixNQUlSNmdDLGlCQUFrQixTQUFVei9CLEdBSTNCLE9BSGtCLE1BQWJpZCxJQUNKNWUsRUFBRXFoQyxTQUFXMS9CLEdBRVBwQixNQUlSc2dDLFdBQVksU0FBVTU4QixHQUNyQixJQUFJakMsRUFDSixHQUFLaUMsRUFDSixHQUFLMmEsRUFHSjJmLEVBQU1waUIsT0FBUWxZLEVBQUtzNkIsRUFBTStDLGNBSXpCLElBQU10L0IsS0FBUWlDLEVBQ2I0OEIsRUFBWTcrQixHQUFTLENBQUU2K0IsRUFBWTcrQixHQUFRaUMsRUFBS2pDLElBSW5ELE9BQU96QixNQUlSZ2hDLE1BQU8sU0FBVUMsR0FDaEIsSUFBSUMsRUFBWUQsR0FBY1IsRUFLOUIsT0FKS2QsR0FDSkEsRUFBVXFCLE1BQU9FLEdBRWxCcDVCLEVBQU0sRUFBR281QixHQUNGbGhDLE9Bb0JWLEdBZkE2YixFQUFTekIsUUFBUzRqQixHQUtsQnYrQixFQUFFbS9CLE1BQVVBLEdBQU9uL0IsRUFBRW0vQixLQUFPMXJCLEdBQVNHLE1BQVMsSUFDNUNqTyxRQUFTazRCLEdBQVdwcUIsR0FBUzRyQixTQUFXLE1BRzFDci9CLEVBQUUyQixLQUFPbUQsRUFBUTRWLFFBQVU1VixFQUFRbkQsTUFBUTNCLEVBQUUwYSxRQUFVMWEsRUFBRTJCLEtBR3pEM0IsRUFBRXErQixXQUFjcitCLEVBQUVvK0IsVUFBWSxLQUFNbjNCLGNBQWM0RSxNQUFPb08sSUFBbUIsQ0FBRSxJQUd4RCxNQUFqQmphLEVBQUUwaEMsWUFBc0IsQ0FDNUJuQixFQUFZcGdDLEVBQVNrQyxjQUFlLEtBS3BDLElBQ0NrK0IsRUFBVTNzQixLQUFPNVQsRUFBRW0vQixJQUluQm9CLEVBQVUzc0IsS0FBTzJzQixFQUFVM3NCLEtBQzNCNVQsRUFBRTBoQyxZQUFjMUQsR0FBYXFCLFNBQVcsS0FBT3JCLEdBQWEyRCxNQUMzRHBCLEVBQVVsQixTQUFXLEtBQU9rQixFQUFVb0IsS0FDdEMsTUFBUWwyQixHQUlUekwsRUFBRTBoQyxhQUFjLEdBYWxCLEdBUksxaEMsRUFBRXNnQixNQUFRdGdCLEVBQUVzL0IsYUFBaUMsaUJBQVh0L0IsRUFBRXNnQixPQUN4Q3RnQixFQUFFc2dCLEtBQU94ZCxFQUFPcTZCLE1BQU9uOUIsRUFBRXNnQixLQUFNdGdCLEVBQUVrOUIsY0FJbENvQixHQUErQjFILEdBQVk1MkIsRUFBRzhFLEVBQVN5NUIsR0FHbEQzZixFQUNKLE9BQU8yZixFQTZFUixJQUFNdGdDLEtBeEVOdWlDLEVBQWMxOUIsRUFBTzZqQixPQUFTM21CLEVBQUVDLFNBR1EsR0FBcEI2QyxFQUFPazhCLFVBQzFCbDhCLEVBQU82akIsTUFBTVUsUUFBUyxhQUl2QnJuQixFQUFFMkIsS0FBTzNCLEVBQUUyQixLQUFLa2UsY0FHaEI3ZixFQUFFNGhDLFlBQWNoRSxHQUFXcHhCLEtBQU14TSxFQUFFMkIsTUFLbkN3K0IsRUFBV25nQyxFQUFFbS9CLElBQUl4NUIsUUFBUzgzQixHQUFPLElBRzNCejlCLEVBQUU0aEMsV0F1Qkk1aEMsRUFBRXNnQixNQUFRdGdCLEVBQUVzL0IsYUFDb0QsS0FBekV0L0IsRUFBRXcvQixhQUFlLElBQUt6K0IsUUFBUyx1Q0FDakNmLEVBQUVzZ0IsS0FBT3RnQixFQUFFc2dCLEtBQUszYSxRQUFTNjNCLEdBQUssT0F0QjlCaUQsRUFBV3pnQyxFQUFFbS9CLElBQUl2K0IsTUFBT3UvQixFQUFTOThCLFFBRzVCckQsRUFBRXNnQixPQUFVdGdCLEVBQUVzL0IsYUFBaUMsaUJBQVh0L0IsRUFBRXNnQixRQUMxQzZmLElBQWMxRCxHQUFPandCLEtBQU0yekIsR0FBYSxJQUFNLEtBQVFuZ0MsRUFBRXNnQixZQUdqRHRnQixFQUFFc2dCLE9BSU8sSUFBWnRnQixFQUFFZ04sUUFDTm16QixFQUFXQSxFQUFTeDZCLFFBQVMrM0IsR0FBWSxNQUN6QytDLEdBQWFoRSxHQUFPandCLEtBQU0yekIsR0FBYSxJQUFNLEtBQVEsS0FBU3QrQixLQUFZNCtCLEdBSTNFemdDLEVBQUVtL0IsSUFBTWdCLEVBQVdNLEdBU2Z6Z0MsRUFBRTZoQyxhQUNELytCLEVBQU9tOEIsYUFBY2tCLElBQ3pCNUIsRUFBTTRDLGlCQUFrQixvQkFBcUJyK0IsRUFBT204QixhQUFja0IsSUFFOURyOUIsRUFBT284QixLQUFNaUIsSUFDakI1QixFQUFNNEMsaUJBQWtCLGdCQUFpQnIrQixFQUFPbzhCLEtBQU1pQixNQUtuRG5nQyxFQUFFc2dCLE1BQVF0Z0IsRUFBRTRoQyxhQUFnQyxJQUFsQjVoQyxFQUFFdy9CLGFBQXlCMTZCLEVBQVEwNkIsY0FDakVqQixFQUFNNEMsaUJBQWtCLGVBQWdCbmhDLEVBQUV3L0IsYUFJM0NqQixFQUFNNEMsaUJBQ0wsU0FDQW5oQyxFQUFFcStCLFVBQVcsSUFBT3IrQixFQUFFeS9CLFFBQVN6L0IsRUFBRXErQixVQUFXLElBQzNDcitCLEVBQUV5L0IsUUFBU3ovQixFQUFFcStCLFVBQVcsS0FDQSxNQUFyQnIrQixFQUFFcStCLFVBQVcsR0FBYyxLQUFPTixHQUFXLFdBQWEsSUFDN0QvOUIsRUFBRXkvQixRQUFTLE1BSUZ6L0IsRUFBRThoQyxRQUNadkQsRUFBTTRDLGlCQUFrQmxqQyxFQUFHK0IsRUFBRThoQyxRQUFTN2pDLElBSXZDLEdBQUsrQixFQUFFK2hDLGNBQytDLElBQW5EL2hDLEVBQUUraEMsV0FBVzNqQyxLQUFNc2lDLEVBQWlCbkMsRUFBT3YrQixJQUFpQjRlLEdBRzlELE9BQU8yZixFQUFNZ0QsUUFlZCxHQVhBUCxFQUFXLFFBR1hKLEVBQWlCcm5CLElBQUt2WixFQUFFczNCLFVBQ3hCaUgsRUFBTWwyQixLQUFNckksRUFBRWdpQyxTQUNkekQsRUFBTTNqQixLQUFNNWEsRUFBRTZGLE9BR2RxNkIsRUFBWTVCLEdBQStCUixHQUFZOTlCLEVBQUc4RSxFQUFTeTVCLEdBSzVELENBU04sR0FSQUEsRUFBTXRmLFdBQWEsRUFHZHVoQixHQUNKRyxFQUFtQnRaLFFBQVMsV0FBWSxDQUFFa1gsRUFBT3YrQixJQUk3QzRlLEVBQ0osT0FBTzJmLEVBSUh2K0IsRUFBRXUvQixPQUFTdi9CLEVBQUUwNUIsUUFBVSxJQUMzQjRHLEVBQWVoZ0MsRUFBT3NkLFdBQVksV0FDakMyZ0IsRUFBTWdELE1BQU8sWUFDWHZoQyxFQUFFMDVCLFVBR04sSUFDQzlhLEdBQVksRUFDWnNoQixFQUFVK0IsS0FBTW5CLEVBQWdCejRCLEdBQy9CLE1BQVFvRCxHQUdULEdBQUttVCxFQUNKLE1BQU1uVCxFQUlQcEQsR0FBTyxFQUFHb0QsU0FoQ1hwRCxHQUFPLEVBQUcsZ0JBcUNYLFNBQVNBLEVBQU1pNUIsRUFBUVksRUFBa0JDLEVBQVdMLEdBQ25ELElBQUlNLEVBQVdKLEVBQVNuOEIsRUFBT3c4QixFQUFVQyxFQUN4Q2QsRUFBYVUsRUFHVHRqQixJQUlMQSxHQUFZLEVBR1AwaEIsR0FDSmhnQyxFQUFPcTVCLGFBQWMyRyxHQUt0QkosT0FBWTM2QixFQUdaNjZCLEVBQXdCMEIsR0FBVyxHQUduQ3ZELEVBQU10ZixXQUFhcWlCLEVBQVMsRUFBSSxFQUFJLEVBR3BDYyxFQUFZZCxHQUFVLEtBQU9BLEVBQVMsS0FBa0IsTUFBWEEsRUFHeENhLElBQ0pFLEVBNWxCSixTQUE4QnJpQyxFQUFHdStCLEVBQU80RCxHQU92QyxJQUxBLElBQUlJLEVBQUk1Z0MsRUFBTTZnQyxFQUFlQyxFQUM1QjFwQixFQUFXL1ksRUFBRStZLFNBQ2JzbEIsRUFBWXIrQixFQUFFcStCLFVBR1ksTUFBbkJBLEVBQVcsSUFDbEJBLEVBQVVueEIsYUFDRTNILElBQVBnOUIsSUFDSkEsRUFBS3ZpQyxFQUFFcWhDLFVBQVk5QyxFQUFNMEMsa0JBQW1CLGlCQUs5QyxHQUFLc0IsRUFDSixJQUFNNWdDLEtBQVFvWCxFQUNiLEdBQUtBLEVBQVVwWCxJQUFVb1gsRUFBVXBYLEdBQU82SyxLQUFNKzFCLEdBQU8sQ0FDdERsRSxFQUFVNXRCLFFBQVM5TyxHQUNuQixNQU1ILEdBQUswOEIsRUFBVyxLQUFPOEQsRUFDdEJLLEVBQWdCbkUsRUFBVyxPQUNyQixDQUdOLElBQU0xOEIsS0FBUXdnQyxFQUFZLENBQ3pCLElBQU05RCxFQUFXLElBQU9yK0IsRUFBRTQvQixXQUFZaitCLEVBQU8sSUFBTTA4QixFQUFXLElBQVEsQ0FDckVtRSxFQUFnQjdnQyxFQUNoQixNQUVLOGdDLElBQ0xBLEVBQWdCOWdDLEdBS2xCNmdDLEVBQWdCQSxHQUFpQkMsRUFNbEMsR0FBS0QsRUFJSixPQUhLQSxJQUFrQm5FLEVBQVcsSUFDakNBLEVBQVU1dEIsUUFBUyt4QixHQUViTCxFQUFXSyxHQXlpQkxFLENBQXFCMWlDLEVBQUd1K0IsRUFBTzRELElBSTNDRSxFQXRpQkgsU0FBc0JyaUMsRUFBR3FpQyxFQUFVOUQsRUFBTzZELEdBQ3pDLElBQUlPLEVBQU9DLEVBQVNDLEVBQU1yekIsRUFBS3dKLEVBQzlCNG1CLEVBQWEsR0FHYnZCLEVBQVlyK0IsRUFBRXErQixVQUFVejlCLFFBR3pCLEdBQUt5OUIsRUFBVyxHQUNmLElBQU13RSxLQUFRN2lDLEVBQUU0L0IsV0FDZkEsRUFBWWlELEVBQUs1N0IsZUFBa0JqSCxFQUFFNC9CLFdBQVlpRCxHQU9uRCxJQUhBRCxFQUFVdkUsRUFBVW54QixRQUdaMDFCLEdBY1AsR0FaSzVpQyxFQUFFMi9CLGVBQWdCaUQsS0FDdEJyRSxFQUFPditCLEVBQUUyL0IsZUFBZ0JpRCxJQUFjUCxJQUlsQ3JwQixHQUFRb3BCLEdBQWFwaUMsRUFBRThpQyxhQUM1QlQsRUFBV3JpQyxFQUFFOGlDLFdBQVlULEVBQVVyaUMsRUFBRW8rQixXQUd0Q3BsQixFQUFPNHBCLEVBQ1BBLEVBQVV2RSxFQUFVbnhCLFFBS25CLEdBQWlCLE1BQVowMUIsRUFFSkEsRUFBVTVwQixPQUdKLEdBQWMsTUFBVEEsR0FBZ0JBLElBQVM0cEIsRUFBVSxDQU05QyxLQUhBQyxFQUFPakQsRUFBWTVtQixFQUFPLElBQU00cEIsSUFBYWhELEVBQVksS0FBT2dELElBSS9ELElBQU1ELEtBQVMvQyxFQUlkLElBREFwd0IsRUFBTW16QixFQUFNMzdCLE1BQU8sTUFDVCxLQUFRNDdCLElBR2pCQyxFQUFPakQsRUFBWTVtQixFQUFPLElBQU14SixFQUFLLEtBQ3BDb3dCLEVBQVksS0FBT3B3QixFQUFLLEtBQ2IsRUFHRyxJQUFUcXpCLEVBQ0pBLEVBQU9qRCxFQUFZK0MsSUFHZ0IsSUFBeEIvQyxFQUFZK0MsS0FDdkJDLEVBQVVwekIsRUFBSyxHQUNmNnVCLEVBQVU1dEIsUUFBU2pCLEVBQUssS0FFekIsTUFPSixJQUFjLElBQVRxekIsRUFHSixHQUFLQSxHQUFRN2lDLEVBQUUraUMsT0FDZFYsRUFBV1EsRUFBTVIsUUFFakIsSUFDQ0EsRUFBV1EsRUFBTVIsR0FDaEIsTUFBUTUyQixHQUNULE1BQU8sQ0FDTnlRLE1BQU8sY0FDUHJXLE1BQU9nOUIsRUFBT3AzQixFQUFJLHNCQUF3QnVOLEVBQU8sT0FBUzRwQixJQVNqRSxNQUFPLENBQUUxbUIsTUFBTyxVQUFXb0UsS0FBTStoQixHQXljcEJXLENBQWFoakMsRUFBR3FpQyxFQUFVOUQsRUFBTzZELEdBR3ZDQSxHQUdDcGlDLEVBQUU2aEMsY0FDTlMsRUFBVy9ELEVBQU0wQyxrQkFBbUIsb0JBRW5DbitCLEVBQU9tOEIsYUFBY2tCLEdBQWFtQyxJQUVuQ0EsRUFBVy9ELEVBQU0wQyxrQkFBbUIsV0FFbkNuK0IsRUFBT284QixLQUFNaUIsR0FBYW1DLElBS1osTUFBWGhCLEdBQTZCLFNBQVh0aEMsRUFBRTJCLEtBQ3hCNi9CLEVBQWEsWUFHUyxNQUFYRixFQUNYRSxFQUFhLGVBSWJBLEVBQWFhLEVBQVNubUIsTUFDdEI4bEIsRUFBVUssRUFBUy9oQixLQUVuQjhoQixJQURBdjhCLEVBQVF3OEIsRUFBU3g4QixVQU1sQkEsRUFBUTI3QixHQUNIRixHQUFXRSxJQUNmQSxFQUFhLFFBQ1JGLEVBQVMsSUFDYkEsRUFBUyxLQU1aL0MsRUFBTStDLE9BQVNBLEVBQ2YvQyxFQUFNaUQsWUFBZVUsR0FBb0JWLEdBQWUsR0FHbkRZLEVBQ0pobUIsRUFBU2tCLFlBQWFvakIsRUFBaUIsQ0FBRXNCLEVBQVNSLEVBQVlqRCxJQUU5RG5pQixFQUFTc0IsV0FBWWdqQixFQUFpQixDQUFFbkMsRUFBT2lELEVBQVkzN0IsSUFJNUQwNEIsRUFBTXNDLFdBQVlBLEdBQ2xCQSxPQUFhdDdCLEVBRVJpN0IsR0FDSkcsRUFBbUJ0WixRQUFTK2EsRUFBWSxjQUFnQixZQUN2RCxDQUFFN0QsRUFBT3YrQixFQUFHb2lDLEVBQVlKLEVBQVVuOEIsSUFJcEMrNkIsRUFBaUI5a0IsU0FBVTRrQixFQUFpQixDQUFFbkMsRUFBT2lELElBRWhEaEIsSUFDSkcsRUFBbUJ0WixRQUFTLGVBQWdCLENBQUVrWCxFQUFPditCLE1BRzNDOEMsRUFBT2s4QixRQUNoQmw4QixFQUFPNmpCLE1BQU1VLFFBQVMsY0FLekIsT0FBT2tYLEdBR1IwRSxRQUFTLFNBQVU5RCxFQUFLN2UsRUFBTXRjLEdBQzdCLE9BQU9sQixFQUFPaEUsSUFBS3FnQyxFQUFLN2UsRUFBTXRjLEVBQVUsU0FHekNrL0IsVUFBVyxTQUFVL0QsRUFBS243QixHQUN6QixPQUFPbEIsRUFBT2hFLElBQUtxZ0MsT0FBSzU1QixFQUFXdkIsRUFBVSxhQUkvQ2xCLEVBQU9pQixLQUFNLENBQUUsTUFBTyxRQUFVLFNBQVU5RixFQUFHeWMsR0FDNUM1WCxFQUFRNFgsR0FBVyxTQUFVeWtCLEVBQUs3ZSxFQUFNdGMsRUFBVXJDLEdBVWpELE9BUEtMLEVBQVlnZixLQUNoQjNlLEVBQU9BLEdBQVFxQyxFQUNmQSxFQUFXc2MsRUFDWEEsT0FBTy9hLEdBSUR6QyxFQUFPbTlCLEtBQU1uOUIsRUFBTytCLE9BQVEsQ0FDbENzNkIsSUFBS0EsRUFDTHg5QixLQUFNK1ksRUFDTjBqQixTQUFVejhCLEVBQ1YyZSxLQUFNQSxFQUNOMGhCLFFBQVNoK0IsR0FDUGxCLEVBQU9zQyxjQUFlKzVCLElBQVNBLE9BS3BDcjhCLEVBQU8rcUIsU0FBVyxTQUFVc1IsRUFBS3I2QixHQUNoQyxPQUFPaEMsRUFBT205QixLQUFNLENBQ25CZCxJQUFLQSxFQUdMeDlCLEtBQU0sTUFDTnk4QixTQUFVLFNBQ1ZweEIsT0FBTyxFQUNQdXlCLE9BQU8sRUFDUHQvQixRQUFRLEVBS1IyL0IsV0FBWSxDQUNYLGNBQWUsY0FFaEJrRCxXQUFZLFNBQVVULEdBQ3JCdi9CLEVBQU9xRCxXQUFZazhCLEVBQVV2OUIsT0FNaENoQyxFQUFPRyxHQUFHNEIsT0FBUSxDQUNqQnMrQixRQUFTLFNBQVV2VixHQUNsQixJQUFJdkksRUF5QkosT0F2Qks5a0IsS0FBTSxLQUNMZSxFQUFZc3NCLEtBQ2hCQSxFQUFPQSxFQUFLeHZCLEtBQU1tQyxLQUFNLEtBSXpCOGtCLEVBQU92aUIsRUFBUThxQixFQUFNcnRCLEtBQU0sR0FBSTBMLGVBQWdCM0gsR0FBSSxHQUFJVyxPQUFPLEdBRXpEMUUsS0FBTSxHQUFJb0MsWUFDZDBpQixFQUFLbUosYUFBY2p1QixLQUFNLElBRzFCOGtCLEVBQUtwaEIsSUFBSyxXQUdULElBRkEsSUFBSUMsRUFBTzNELEtBRUgyRCxFQUFLay9CLG1CQUNabC9CLEVBQU9BLEVBQUtrL0Isa0JBR2IsT0FBT2wvQixJQUNKb3FCLE9BQVEvdEIsT0FHTkEsTUFHUjhpQyxVQUFXLFNBQVV6VixHQUNwQixPQUFLdHNCLEVBQVlzc0IsR0FDVHJ0QixLQUFLd0QsS0FBTSxTQUFVOUYsR0FDM0I2RSxFQUFRdkMsTUFBTzhpQyxVQUFXelYsRUFBS3h2QixLQUFNbUMsS0FBTXRDLE1BSXRDc0MsS0FBS3dELEtBQU0sV0FDakIsSUFBSXdVLEVBQU96VixFQUFRdkMsTUFDbEJ3WSxFQUFXUixFQUFLUSxXQUVaQSxFQUFTMVYsT0FDYjBWLEVBQVNvcUIsUUFBU3ZWLEdBR2xCclYsRUFBSytWLE9BQVFWLE1BS2hCdkksS0FBTSxTQUFVdUksR0FDZixJQUFJMFYsRUFBaUJoaUMsRUFBWXNzQixHQUVqQyxPQUFPcnRCLEtBQUt3RCxLQUFNLFNBQVU5RixHQUMzQjZFLEVBQVF2QyxNQUFPNGlDLFFBQVNHLEVBQWlCMVYsRUFBS3h2QixLQUFNbUMsS0FBTXRDLEdBQU0ydkIsTUFJbEUyVixPQUFRLFNBQVV4Z0MsR0FJakIsT0FIQXhDLEtBQUtvUyxPQUFRNVAsR0FBV3VWLElBQUssUUFBU3ZVLEtBQU0sV0FDM0NqQixFQUFRdkMsTUFBT291QixZQUFhcHVCLEtBQUtpTCxjQUUzQmpMLFFBS1R1QyxFQUFPNE4sS0FBS3JILFFBQVF5c0IsT0FBUyxTQUFVNXhCLEdBQ3RDLE9BQVFwQixFQUFPNE4sS0FBS3JILFFBQVFtNkIsUUFBU3QvQixJQUV0Q3BCLEVBQU80TixLQUFLckgsUUFBUW02QixRQUFVLFNBQVV0L0IsR0FDdkMsU0FBV0EsRUFBSzZzQixhQUFlN3NCLEVBQUt1L0IsY0FBZ0J2L0IsRUFBS3F2QixpQkFBaUJsd0IsU0FNM0VQLEVBQU9pOEIsYUFBYTJFLElBQU0sV0FDekIsSUFDQyxPQUFPLElBQUlwakMsRUFBT3FqQyxlQUNqQixNQUFRbDRCLE1BR1gsSUFBSW00QixHQUFtQixDQUdyQkMsRUFBRyxJQUlIQyxLQUFNLEtBRVBDLEdBQWVqaEMsRUFBT2k4QixhQUFhMkUsTUFFcENyaUMsRUFBUTJpQyxPQUFTRCxJQUFrQixvQkFBcUJBLEdBQ3hEMWlDLEVBQVE0K0IsS0FBTzhELEtBQWlCQSxHQUVoQ2poQyxFQUFPazlCLGNBQWUsU0FBVWw3QixHQUMvQixJQUFJZCxFQUFVaWdDLEVBR2QsR0FBSzVpQyxFQUFRMmlDLE1BQVFELEtBQWlCai9CLEVBQVE0OEIsWUFDN0MsTUFBTyxDQUNOTyxLQUFNLFNBQVVILEVBQVN4SyxHQUN4QixJQUFJcjVCLEVBQ0h5bEMsRUFBTTUrQixFQUFRNCtCLE1BV2YsR0FUQUEsRUFBSVEsS0FDSHAvQixFQUFRbkQsS0FDUm1ELEVBQVFxNkIsSUFDUnI2QixFQUFReTZCLE1BQ1J6NkIsRUFBUXEvQixTQUNSci9CLEVBQVFzUCxVQUlKdFAsRUFBUXMvQixVQUNaLElBQU1ubUMsS0FBSzZHLEVBQVFzL0IsVUFDbEJWLEVBQUt6bEMsR0FBTTZHLEVBQVFzL0IsVUFBV25tQyxHQW1CaEMsSUFBTUEsS0FkRDZHLEVBQVF1OEIsVUFBWXFDLEVBQUl0QyxrQkFDNUJzQyxFQUFJdEMsaUJBQWtCdDhCLEVBQVF1OEIsVUFRekJ2OEIsRUFBUTQ4QixhQUFnQkksRUFBUyxzQkFDdENBLEVBQVMsb0JBQXVCLGtCQUl0QkEsRUFDVjRCLEVBQUl2QyxpQkFBa0JsakMsRUFBRzZqQyxFQUFTN2pDLElBSW5DK0YsRUFBVyxTQUFVckMsR0FDcEIsT0FBTyxXQUNEcUMsSUFDSkEsRUFBV2lnQyxFQUFnQlAsRUFBSVcsT0FDOUJYLEVBQUlZLFFBQVVaLEVBQUlhLFFBQVViLEVBQUljLFVBQy9CZCxFQUFJZSxtQkFBcUIsS0FFYixVQUFUOWlDLEVBQ0oraEMsRUFBSW5DLFFBQ2dCLFVBQVQ1L0IsRUFLZ0IsaUJBQWYraEMsRUFBSXBDLE9BQ2ZoSyxFQUFVLEVBQUcsU0FFYkEsRUFHQ29NLEVBQUlwQyxPQUNKb0MsRUFBSWxDLFlBSU5sSyxFQUNDc00sR0FBa0JGLEVBQUlwQyxTQUFZb0MsRUFBSXBDLE9BQ3RDb0MsRUFBSWxDLFdBSytCLFVBQWpDa0MsRUFBSWdCLGNBQWdCLFNBQ00saUJBQXJCaEIsRUFBSWlCLGFBQ1YsQ0FBRUMsT0FBUWxCLEVBQUlyQixVQUNkLENBQUUvL0IsS0FBTW9oQyxFQUFJaUIsY0FDYmpCLEVBQUl4Qyw0QkFRVHdDLEVBQUlXLE9BQVNyZ0MsSUFDYmlnQyxFQUFnQlAsRUFBSVksUUFBVVosRUFBSWMsVUFBWXhnQyxFQUFVLGNBS25DdUIsSUFBaEJtK0IsRUFBSWEsUUFDUmIsRUFBSWEsUUFBVU4sRUFFZFAsRUFBSWUsbUJBQXFCLFdBR0EsSUFBbkJmLEVBQUl6a0IsWUFNUjNlLEVBQU9zZCxXQUFZLFdBQ2I1WixHQUNKaWdDLE9BUUxqZ0MsRUFBV0EsRUFBVSxTQUVyQixJQUdDMC9CLEVBQUl6QixLQUFNbjlCLEVBQVE4OEIsWUFBYzk4QixFQUFRd2IsTUFBUSxNQUMvQyxNQUFRN1UsR0FHVCxHQUFLekgsRUFDSixNQUFNeUgsSUFLVDgxQixNQUFPLFdBQ0R2OUIsR0FDSkEsUUFXTGxCLEVBQU9pOUIsY0FBZSxTQUFVLy9CLEdBQzFCQSxFQUFFMGhDLGNBQ04xaEMsRUFBRStZLFNBQVMzVyxRQUFTLEtBS3RCVSxFQUFPKzhCLFVBQVcsQ0FDakJKLFFBQVMsQ0FDUnI5QixPQUFRLDZGQUdUMlcsU0FBVSxDQUNUM1csT0FBUSwyQkFFVHc5QixXQUFZLENBQ1gsY0FBZSxTQUFVdDlCLEdBRXhCLE9BREFRLEVBQU9xRCxXQUFZN0QsR0FDWkEsTUFNVlEsRUFBT2k5QixjQUFlLFNBQVUsU0FBVS8vQixRQUN4QnVGLElBQVp2RixFQUFFZ04sUUFDTmhOLEVBQUVnTixPQUFRLEdBRU5oTixFQUFFMGhDLGNBQ04xaEMsRUFBRTJCLEtBQU8sU0FLWG1CLEVBQU9rOUIsY0FBZSxTQUFVLFNBQVVoZ0MsR0FJeEMsSUFBSW9DLEVBQVE0QixFQURiLEdBQUtoRSxFQUFFMGhDLGFBQWUxaEMsRUFBRTZrQyxZQUV2QixNQUFPLENBQ041QyxLQUFNLFNBQVUzM0IsRUFBR2d0QixHQUNsQmwxQixFQUFTVSxFQUFRLFlBQ2Y4TixLQUFNNVEsRUFBRTZrQyxhQUFlLElBQ3ZCdGtCLEtBQU0sQ0FBRXVrQixRQUFTOWtDLEVBQUUra0MsY0FBZW5qQyxJQUFLNUIsRUFBRW0vQixNQUN6QzVZLEdBQUksYUFBY3ZpQixFQUFXLFNBQVVnaEMsR0FDdkM1aUMsRUFBT3NaLFNBQ1AxWCxFQUFXLEtBQ05naEMsR0FDSjFOLEVBQXVCLFVBQWIwTixFQUFJcmpDLEtBQW1CLElBQU0sSUFBS3FqQyxFQUFJcmpDLFFBS25EeEIsRUFBU3NDLEtBQUtDLFlBQWFOLEVBQVEsS0FFcENtL0IsTUFBTyxXQUNEdjlCLEdBQ0pBLFFBVUwsSUFxR0t1ZixHQXJHRDBoQixHQUFlLEdBQ2xCQyxHQUFTLG9CQUdWcGlDLEVBQU8rOEIsVUFBVyxDQUNqQnNGLE1BQU8sV0FDUEMsY0FBZSxXQUNkLElBQUlwaEMsRUFBV2loQyxHQUFhbjhCLE9BQVdoRyxFQUFPMEMsUUFBVSxJQUFRM0QsS0FFaEUsT0FEQXRCLEtBQU15RCxJQUFhLEVBQ1pBLEtBS1RsQixFQUFPaTlCLGNBQWUsYUFBYyxTQUFVLy9CLEVBQUdxbEMsRUFBa0I5RyxHQUVsRSxJQUFJK0csRUFBY0MsRUFBYUMsRUFDOUJDLEdBQXVCLElBQVp6bEMsRUFBRW1sQyxRQUFxQkQsR0FBTzE0QixLQUFNeE0sRUFBRW0vQixLQUNoRCxNQUNrQixpQkFBWG4vQixFQUFFc2dCLE1BRTZDLEtBRG5EdGdCLEVBQUV3L0IsYUFBZSxJQUNqQnorQixRQUFTLHNDQUNYbWtDLEdBQU8xNEIsS0FBTXhNLEVBQUVzZ0IsT0FBVSxRQUk1QixHQUFLbWxCLEdBQWlDLFVBQXJCemxDLEVBQUVxK0IsVUFBVyxHQThEN0IsT0EzREFpSCxFQUFldGxDLEVBQUVvbEMsY0FBZ0I5akMsRUFBWXRCLEVBQUVvbEMsZUFDOUNwbEMsRUFBRW9sQyxnQkFDRnBsQyxFQUFFb2xDLGNBR0VLLEVBQ0p6bEMsRUFBR3lsQyxHQUFhemxDLEVBQUd5bEMsR0FBVzkvQixRQUFTdS9CLEdBQVEsS0FBT0ksSUFDL0IsSUFBWnRsQyxFQUFFbWxDLFFBQ2JubEMsRUFBRW0vQixNQUFTMUMsR0FBT2p3QixLQUFNeE0sRUFBRW0vQixLQUFRLElBQU0sS0FBUW4vQixFQUFFbWxDLE1BQVEsSUFBTUcsR0FJakV0bEMsRUFBRTQvQixXQUFZLGVBQWtCLFdBSS9CLE9BSE00RixHQUNMMWlDLEVBQU8rQyxNQUFPeS9CLEVBQWUsbUJBRXZCRSxFQUFtQixJQUkzQnhsQyxFQUFFcStCLFVBQVcsR0FBTSxPQUduQmtILEVBQWNqbEMsRUFBUWdsQyxHQUN0QmhsQyxFQUFRZ2xDLEdBQWlCLFdBQ3hCRSxFQUFvQnBoQyxXQUlyQm02QixFQUFNcGlCLE9BQVEsZ0JBR1E1VyxJQUFoQmdnQyxFQUNKemlDLEVBQVF4QyxHQUFTcTZCLFdBQVkySyxHQUk3QmhsQyxFQUFRZ2xDLEdBQWlCQyxFQUlyQnZsQyxFQUFHc2xDLEtBR1B0bEMsRUFBRW9sQyxjQUFnQkMsRUFBaUJELGNBR25DSCxHQUFhbmtDLEtBQU13a0MsSUFJZkUsR0FBcUJsa0MsRUFBWWlrQyxJQUNyQ0EsRUFBYUMsRUFBbUIsSUFHakNBLEVBQW9CRCxPQUFjaGdDLElBSTVCLFdBWVRsRSxFQUFRcWtDLHFCQUNIbmlCLEdBQU9wakIsRUFBU3dsQyxlQUFlRCxtQkFBb0IsSUFBS25pQixNQUN2RDlULFVBQVksNkJBQ2lCLElBQTNCOFQsR0FBSy9YLFdBQVduSSxRQVF4QlAsRUFBTzRWLFVBQVksU0FBVTRILEVBQU10ZCxFQUFTNGlDLEdBQzNDLE1BQXFCLGlCQUFUdGxCLEVBQ0osSUFFZ0Isa0JBQVp0ZCxJQUNYNGlDLEVBQWM1aUMsRUFDZEEsR0FBVSxHQUtMQSxJQUlBM0IsRUFBUXFrQyxxQkFNWmh4QixHQUxBMVIsRUFBVTdDLEVBQVN3bEMsZUFBZUQsbUJBQW9CLEtBS3ZDcmpDLGNBQWUsU0FDekJ1UixLQUFPelQsRUFBU3NULFNBQVNHLEtBQzlCNVEsRUFBUVAsS0FBS0MsWUFBYWdTLElBRTFCMVIsRUFBVTdDLEdBS1ora0IsR0FBVzBnQixHQUFlLElBRDFCQyxFQUFTMXRCLEVBQVdqTSxLQUFNb1UsSUFLbEIsQ0FBRXRkLEVBQVFYLGNBQWV3akMsRUFBUSxNQUd6Q0EsRUFBUzVnQixHQUFlLENBQUUzRSxHQUFRdGQsRUFBU2tpQixHQUV0Q0EsR0FBV0EsRUFBUTdoQixRQUN2QlAsRUFBUW9pQixHQUFVeEosU0FHWjVZLEVBQU9lLE1BQU8sR0FBSWdpQyxFQUFPcjZCLGNBbENoQyxJQUFJa0osRUFBTW14QixFQUFRM2dCLEdBeUNuQnBpQixFQUFPRyxHQUFHeW1CLEtBQU8sU0FBVXlWLEVBQUsyRyxFQUFROWhDLEdBQ3ZDLElBQUlqQixFQUFVcEIsRUFBTTBnQyxFQUNuQjlwQixFQUFPaFksS0FDUHFtQixFQUFNdVksRUFBSXArQixRQUFTLEtBc0RwQixPQXBESzZsQixHQUFPLElBQ1g3akIsRUFBV3kzQixHQUFrQjJFLEVBQUl2K0IsTUFBT2dtQixJQUN4Q3VZLEVBQU1BLEVBQUl2K0IsTUFBTyxFQUFHZ21CLElBSWhCdGxCLEVBQVl3a0MsSUFHaEI5aEMsRUFBVzhoQyxFQUNYQSxPQUFTdmdDLEdBR0V1Z0MsR0FBNEIsaUJBQVhBLElBQzVCbmtDLEVBQU8sUUFJSDRXLEVBQUtsVixPQUFTLEdBQ2xCUCxFQUFPbTlCLEtBQU0sQ0FDWmQsSUFBS0EsRUFLTHg5QixLQUFNQSxHQUFRLE1BQ2R5OEIsU0FBVSxPQUNWOWQsS0FBTXdsQixJQUNIejlCLEtBQU0sU0FBVXM4QixHQUduQnRDLEVBQVdqK0IsVUFFWG1VLEVBQUtxVixLQUFNN3FCLEVBSVZELEVBQVEsU0FBVXdyQixPQUFReHJCLEVBQU80VixVQUFXaXNCLElBQWlCdDFCLEtBQU10TSxHQUduRTRoQyxLQUtFeG9CLE9BQVFuWSxHQUFZLFNBQVV1NkIsRUFBTytDLEdBQ3hDL29CLEVBQUt4VSxLQUFNLFdBQ1ZDLEVBQVNHLE1BQU81RCxLQUFNOGhDLEdBQVksQ0FBRTlELEVBQU1vRyxhQUFjckQsRUFBUS9DLFFBSzVEaCtCLE1BT1J1QyxFQUFPaUIsS0FBTSxDQUNaLFlBQ0EsV0FDQSxlQUNBLFlBQ0EsY0FDQSxZQUNFLFNBQVU5RixFQUFHMEQsR0FDZm1CLEVBQU9HLEdBQUl0QixHQUFTLFNBQVVzQixHQUM3QixPQUFPMUMsS0FBS2dtQixHQUFJNWtCLEVBQU1zQixNQU94QkgsRUFBTzROLEtBQUtySCxRQUFRMDhCLFNBQVcsU0FBVTdoQyxHQUN4QyxPQUFPcEIsRUFBTzJELEtBQU0zRCxFQUFPZzJCLE9BQVEsU0FBVTcxQixHQUM1QyxPQUFPaUIsSUFBU2pCLEVBQUdpQixPQUNoQmIsUUFNTFAsRUFBT2tqQyxPQUFTLENBQ2ZDLFVBQVcsU0FBVS9oQyxFQUFNWSxFQUFTN0csR0FDbkMsSUFBSWlvQyxFQUFhQyxFQUFTQyxFQUFXQyxFQUFRQyxFQUFXQyxFQUN2RDFWLEVBQVcvdEIsRUFBT3lmLElBQUtyZSxFQUFNLFlBQzdCc2lDLEVBQVUxakMsRUFBUW9CLEdBQ2xCNmxCLEVBQVEsR0FHUyxXQUFiOEcsSUFDSjNzQixFQUFLbWUsTUFBTXdPLFNBQVcsWUFHdkJ5VixFQUFZRSxFQUFRUixTQUNwQkksRUFBWXRqQyxFQUFPeWYsSUFBS3JlLEVBQU0sT0FDOUJxaUMsRUFBYXpqQyxFQUFPeWYsSUFBS3JlLEVBQU0sU0FDSSxhQUFiMnNCLEdBQXdDLFVBQWJBLEtBQzlDdVYsRUFBWUcsR0FBYXhsQyxRQUFTLFNBQVksR0FNaERzbEMsR0FEQUgsRUFBY00sRUFBUTNWLFlBQ0RqaUIsSUFDckJ1M0IsRUFBVUQsRUFBWWhTLE9BR3RCbVMsRUFBU25WLFdBQVlrVixJQUFlLEVBQ3BDRCxFQUFValYsV0FBWXFWLElBQWdCLEdBR2xDamxDLEVBQVl3RCxLQUdoQkEsRUFBVUEsRUFBUTFHLEtBQU04RixFQUFNakcsRUFBRzZFLEVBQU8rQixPQUFRLEdBQUl5aEMsS0FHakMsTUFBZnhoQyxFQUFROEosTUFDWm1iLEVBQU1uYixJQUFROUosRUFBUThKLElBQU0wM0IsRUFBVTEzQixJQUFReTNCLEdBRTFCLE1BQWhCdmhDLEVBQVFvdkIsT0FDWm5LLEVBQU1tSyxLQUFTcHZCLEVBQVFvdkIsS0FBT29TLEVBQVVwUyxLQUFTaVMsR0FHN0MsVUFBV3JoQyxFQUNmQSxFQUFRMmhDLE1BQU1yb0MsS0FBTThGLEVBQU02bEIsR0FHMUJ5YyxFQUFRamtCLElBQUt3SCxLQUtoQmpuQixFQUFPRyxHQUFHNEIsT0FBUSxDQUdqQm1oQyxPQUFRLFNBQVVsaEMsR0FHakIsR0FBS1YsVUFBVWYsT0FDZCxZQUFtQmtDLElBQVpULEVBQ052RSxLQUNBQSxLQUFLd0QsS0FBTSxTQUFVOUYsR0FDcEI2RSxFQUFPa2pDLE9BQU9DLFVBQVcxbEMsS0FBTXVFLEVBQVM3RyxLQUkzQyxJQUFJeW9DLEVBQU1DLEVBQ1R6aUMsRUFBTzNELEtBQU0sR0FFZCxPQUFNMkQsRUFRQUEsRUFBS3F2QixpQkFBaUJsd0IsUUFLNUJxakMsRUFBT3hpQyxFQUFLOHZCLHdCQUNaMlMsRUFBTXppQyxFQUFLK0gsY0FBYzBDLFlBQ2xCLENBQ05DLElBQUs4M0IsRUFBSzkzQixJQUFNKzNCLEVBQUlDLFlBQ3BCMVMsS0FBTXdTLEVBQUt4UyxLQUFPeVMsRUFBSUUsY0FSZixDQUFFajRCLElBQUssRUFBR3NsQixLQUFNLFFBVHhCLEdBdUJEckQsU0FBVSxXQUNULEdBQU10d0IsS0FBTSxHQUFaLENBSUEsSUFBSXVtQyxFQUFjZCxFQUFROWpDLEVBQ3pCZ0MsRUFBTzNELEtBQU0sR0FDYndtQyxFQUFlLENBQUVuNEIsSUFBSyxFQUFHc2xCLEtBQU0sR0FHaEMsR0FBd0MsVUFBbkNweEIsRUFBT3lmLElBQUtyZSxFQUFNLFlBR3RCOGhDLEVBQVM5aEMsRUFBSzh2Qiw0QkFFUixDQU9OLElBTkFnUyxFQUFTemxDLEtBQUt5bEMsU0FJZDlqQyxFQUFNZ0MsRUFBSytILGNBQ1g2NkIsRUFBZTVpQyxFQUFLNGlDLGNBQWdCNWtDLEVBQUlzTSxnQkFDaENzNEIsSUFDTEEsSUFBaUI1a0MsRUFBSXFoQixNQUFRdWpCLElBQWlCNWtDLEVBQUlzTSxrQkFDVCxXQUEzQzFMLEVBQU95ZixJQUFLdWtCLEVBQWMsYUFFMUJBLEVBQWVBLEVBQWFua0MsV0FFeEJta0MsR0FBZ0JBLElBQWlCNWlDLEdBQWtDLElBQTFCNGlDLEVBQWF0bEMsWUFHMUR1bEMsRUFBZWprQyxFQUFRZ2tDLEdBQWVkLFVBQ3pCcDNCLEtBQU85TCxFQUFPeWYsSUFBS3VrQixFQUFjLGtCQUFrQixHQUNoRUMsRUFBYTdTLE1BQVFweEIsRUFBT3lmLElBQUt1a0IsRUFBYyxtQkFBbUIsSUFLcEUsTUFBTyxDQUNObDRCLElBQUtvM0IsRUFBT3AzQixJQUFNbTRCLEVBQWFuNEIsSUFBTTlMLEVBQU95ZixJQUFLcmUsRUFBTSxhQUFhLEdBQ3BFZ3dCLEtBQU04UixFQUFPOVIsS0FBTzZTLEVBQWE3UyxLQUFPcHhCLEVBQU95ZixJQUFLcmUsRUFBTSxjQUFjLE1BYzFFNGlDLGFBQWMsV0FDYixPQUFPdm1DLEtBQUswRCxJQUFLLFdBR2hCLElBRkEsSUFBSTZpQyxFQUFldm1DLEtBQUt1bUMsYUFFaEJBLEdBQTJELFdBQTNDaGtDLEVBQU95ZixJQUFLdWtCLEVBQWMsYUFDakRBLEVBQWVBLEVBQWFBLGFBRzdCLE9BQU9BLEdBQWdCdDRCLFFBTTFCMUwsRUFBT2lCLEtBQU0sQ0FBRXF4QixXQUFZLGNBQWVELFVBQVcsZUFBaUIsU0FBVXphLEVBQVE2RixHQUN2RixJQUFJM1IsRUFBTSxnQkFBa0IyUixFQUU1QnpkLEVBQU9HLEdBQUl5WCxHQUFXLFNBQVV2WSxHQUMvQixPQUFPZ2QsRUFBUTVlLEtBQU0sU0FBVTJELEVBQU13VyxFQUFRdlksR0FHNUMsSUFBSXdrQyxFQU9KLEdBTktsbEMsRUFBVXlDLEdBQ2R5aUMsRUFBTXppQyxFQUN1QixJQUFsQkEsRUFBSzFDLFdBQ2hCbWxDLEVBQU16aUMsRUFBS3lLLGtCQUdDcEosSUFBUnBELEVBQ0osT0FBT3drQyxFQUFNQSxFQUFLcG1CLEdBQVNyYyxFQUFNd1csR0FHN0Jpc0IsRUFDSkEsRUFBSUssU0FDRnA0QixFQUFZKzNCLEVBQUlFLFlBQVYxa0MsRUFDUHlNLEVBQU16TSxFQUFNd2tDLEVBQUlDLGFBSWpCMWlDLEVBQU13VyxHQUFXdlksR0FFaEJ1WSxFQUFRdlksRUFBS2lDLFVBQVVmLFdBVTVCUCxFQUFPaUIsS0FBTSxDQUFFLE1BQU8sUUFBVSxTQUFVOUYsRUFBR3NpQixHQUM1Q3pkLEVBQU80d0IsU0FBVW5ULEdBQVN3UCxHQUFjMXVCLEVBQVFpd0IsY0FDL0MsU0FBVXB0QixFQUFNdXJCLEdBQ2YsR0FBS0EsRUFJSixPQUhBQSxFQUFXRCxHQUFRdHJCLEVBQU1xYyxHQUdsQjRPLEdBQVUzaUIsS0FBTWlqQixHQUN0QjNzQixFQUFRb0IsR0FBTzJzQixXQUFZdFEsR0FBUyxLQUNwQ2tQLE1BUUwzc0IsRUFBT2lCLEtBQU0sQ0FBRWtqQyxPQUFRLFNBQVVDLE1BQU8sU0FBVyxTQUFVMW9DLEVBQU1tRCxHQUNsRW1CLEVBQU9pQixLQUFNLENBQUVxd0IsUUFBUyxRQUFVNTFCLEVBQU11YixRQUFTcFksRUFBTSxHQUFJLFFBQVVuRCxHQUNwRSxTQUFVMm9DLEVBQWNDLEdBR3hCdGtDLEVBQU9HLEdBQUlta0MsR0FBYSxTQUFValQsRUFBUWoxQixHQUN6QyxJQUFJa2dCLEVBQVloYixVQUFVZixTQUFZOGpDLEdBQWtDLGtCQUFYaFQsR0FDNURsQixFQUFRa1UsS0FBNkIsSUFBWGhULElBQTZCLElBQVZqMUIsRUFBaUIsU0FBVyxVQUUxRSxPQUFPaWdCLEVBQVE1ZSxLQUFNLFNBQVUyRCxFQUFNdkMsRUFBTXpDLEdBQzFDLElBQUlnRCxFQUVKLE9BQUtULEVBQVV5QyxHQUd5QixJQUFoQ2tqQyxFQUFTcm1DLFFBQVMsU0FDeEJtRCxFQUFNLFFBQVUxRixHQUNoQjBGLEVBQUsvRCxTQUFTcU8sZ0JBQWlCLFNBQVdoUSxHQUlyQixJQUFsQjBGLEVBQUsxQyxVQUNUVSxFQUFNZ0MsRUFBS3NLLGdCQUlKL0ksS0FBS2l0QixJQUNYeHVCLEVBQUtxZixLQUFNLFNBQVcva0IsR0FBUTBELEVBQUssU0FBVzFELEdBQzlDMEYsRUFBS3FmLEtBQU0sU0FBVy9rQixHQUFRMEQsRUFBSyxTQUFXMUQsR0FDOUMwRCxFQUFLLFNBQVcxRCxVQUlEK0csSUFBVnJHLEVBR040RCxFQUFPeWYsSUFBS3JlLEVBQU12QyxFQUFNc3hCLEdBR3hCbndCLEVBQU91ZixNQUFPbmUsRUFBTXZDLEVBQU16QyxFQUFPK3pCLElBQ2hDdHhCLEVBQU15ZCxFQUFZK1UsT0FBUzV1QixFQUFXNlosUUFNNUN0YyxFQUFPaUIsS0FBTSx3TEFFZ0RpRCxNQUFPLEtBQ25FLFNBQVUvSSxFQUFHTyxHQUdic0UsRUFBT0csR0FBSXpFLEdBQVMsU0FBVThoQixFQUFNcmQsR0FDbkMsT0FBT21CLFVBQVVmLE9BQVMsRUFDekI5QyxLQUFLZ21CLEdBQUkvbkIsRUFBTSxLQUFNOGhCLEVBQU1yZCxHQUMzQjFDLEtBQUs4bUIsUUFBUzdvQixNQUlqQnNFLEVBQU9HLEdBQUc0QixPQUFRLENBQ2pCd2lDLE1BQU8sU0FBVUMsRUFBUUMsR0FDeEIsT0FBT2huQyxLQUFLNHJCLFdBQVltYixHQUFTbGIsV0FBWW1iLEdBQVNELE1BT3hEeGtDLEVBQU9HLEdBQUc0QixPQUFRLENBRWpCcEYsS0FBTSxTQUFVK21CLEVBQU9sRyxFQUFNcmQsR0FDNUIsT0FBTzFDLEtBQUtnbUIsR0FBSUMsRUFBTyxLQUFNbEcsRUFBTXJkLElBRXBDdWtDLE9BQVEsU0FBVWhoQixFQUFPdmpCLEdBQ3hCLE9BQU8xQyxLQUFLcW1CLElBQUtKLEVBQU8sS0FBTXZqQixJQUcvQndrQyxTQUFVLFNBQVUxa0MsRUFBVXlqQixFQUFPbEcsRUFBTXJkLEdBQzFDLE9BQU8xQyxLQUFLZ21CLEdBQUlDLEVBQU96akIsRUFBVXVkLEVBQU1yZCxJQUV4Q3lrQyxXQUFZLFNBQVUza0MsRUFBVXlqQixFQUFPdmpCLEdBR3RDLE9BQTRCLElBQXJCbUIsVUFBVWYsT0FDaEI5QyxLQUFLcW1CLElBQUs3akIsRUFBVSxNQUNwQnhDLEtBQUtxbUIsSUFBS0osRUFBT3pqQixHQUFZLEtBQU1FLE1BUXRDSCxFQUFPNmtDLE1BQVEsU0FBVTFrQyxFQUFJRCxHQUM1QixJQUFJd00sRUFBS3dELEVBQU0yMEIsRUFVZixHQVJ3QixpQkFBWjNrQyxJQUNYd00sRUFBTXZNLEVBQUlELEdBQ1ZBLEVBQVVDLEVBQ1ZBLEVBQUt1TSxHQUtBbE8sRUFBWTJCLEdBYWxCLE9BUkErUCxFQUFPcFMsRUFBTXhDLEtBQU1nRyxVQUFXLElBQzlCdWpDLEVBQVEsV0FDUCxPQUFPMWtDLEVBQUdrQixNQUFPbkIsR0FBV3pDLEtBQU15UyxFQUFLblMsT0FBUUQsRUFBTXhDLEtBQU1nRyxlQUl0RDBDLEtBQU83RCxFQUFHNkQsS0FBTzdELEVBQUc2RCxNQUFRaEUsRUFBT2dFLE9BRWxDNmdDLEdBR1I3a0MsRUFBTzhrQyxVQUFZLFNBQVVDLEdBQ3ZCQSxFQUNKL2tDLEVBQU9pYyxZQUVQamMsRUFBTzZWLE9BQU8sSUFHaEI3VixFQUFPd0MsUUFBVUQsTUFBTUMsUUFDdkJ4QyxFQUFPZ2xDLFVBQVlobkIsS0FBS0MsTUFDeEJqZSxFQUFPdUksU0FBV0EsRUFDbEJ2SSxFQUFPeEIsV0FBYUEsRUFDcEJ3QixFQUFPckIsU0FBV0EsRUFDbEJxQixFQUFPZ2QsVUFBWUEsRUFDbkJoZCxFQUFPbkIsS0FBT2tCLEVBRWRDLEVBQU9zbkIsSUFBTWxpQixLQUFLa2lCLElBRWxCdG5CLEVBQU9pbEMsVUFBWSxTQUFVeG1DLEdBSzVCLElBQUlJLEVBQU9tQixFQUFPbkIsS0FBTUosR0FDeEIsT0FBa0IsV0FBVEksR0FBOEIsV0FBVEEsS0FLNUJxbUMsTUFBT3ptQyxFQUFNMnZCLFdBQVkzdkIsVUFzQjFCLEtBRnFCLEVBQUYsV0FDbkIsT0FBT3VCLEdBQ1AsUUFGaUIsT0FFakIsYUFNRixJQUdDbWxDLEdBQVUzbkMsRUFBT3dDLE9BR2pCb2xDLEdBQUs1bkMsRUFBTzZuQyxFQXdCYixPQXRCQXJsQyxFQUFPc2xDLFdBQWEsU0FBVWpqQyxHQVM3QixPQVJLN0UsRUFBTzZuQyxJQUFNcmxDLElBQ2pCeEMsRUFBTzZuQyxFQUFJRCxJQUdQL2lDLEdBQVE3RSxFQUFPd0MsU0FBV0EsSUFDOUJ4QyxFQUFPd0MsT0FBU21sQyxJQUdWbmxDLEdBTUZ0QyxJQUNMRixFQUFPd0MsT0FBU3hDLEVBQU82bkMsRUFBSXJsQyxHQU1yQkEsSyw2QkNwMlVQLHdCQUVBLEdBQUUsZUFBZXlqQixHQUFHLFFBQVV5ZSxJQUM1QkEsRUFBSTVkLGlCQUVKN0ksUUFBUThwQixJQUFJckQiLCJmaWxlIjoib3V0cHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiLyohXG4gKiBqUXVlcnkgSmF2YVNjcmlwdCBMaWJyYXJ5IHYzLjQuMVxuICogaHR0cHM6Ly9qcXVlcnkuY29tL1xuICpcbiAqIEluY2x1ZGVzIFNpenpsZS5qc1xuICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTktMDUtMDFUMjE6MDRaXG4gKi9cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRpZiAoIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gRm9yIENvbW1vbkpTIGFuZCBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB3aGVyZSBhIHByb3BlciBgd2luZG93YFxuXHRcdC8vIGlzIHByZXNlbnQsIGV4ZWN1dGUgdGhlIGZhY3RvcnkgYW5kIGdldCBqUXVlcnkuXG5cdFx0Ly8gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBoYXZlIGEgYHdpbmRvd2Agd2l0aCBhIGBkb2N1bWVudGBcblx0XHQvLyAoc3VjaCBhcyBOb2RlLmpzKSwgZXhwb3NlIGEgZmFjdG9yeSBhcyBtb2R1bGUuZXhwb3J0cy5cblx0XHQvLyBUaGlzIGFjY2VudHVhdGVzIHRoZSBuZWVkIGZvciB0aGUgY3JlYXRpb24gb2YgYSByZWFsIGB3aW5kb3dgLlxuXHRcdC8vIGUuZy4gdmFyIGpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIikod2luZG93KTtcblx0XHQvLyBTZWUgdGlja2V0ICMxNDU0OSBmb3IgbW9yZSBpbmZvLlxuXHRcdG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLmRvY3VtZW50ID9cblx0XHRcdGZhY3RvcnkoIGdsb2JhbCwgdHJ1ZSApIDpcblx0XHRcdGZ1bmN0aW9uKCB3ICkge1xuXHRcdFx0XHRpZiAoICF3LmRvY3VtZW50ICkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFjdG9yeSggdyApO1xuXHRcdFx0fTtcblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KCBnbG9iYWwgKTtcblx0fVxuXG4vLyBQYXNzIHRoaXMgaWYgd2luZG93IGlzIG5vdCBkZWZpbmVkIHlldFxufSApKCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oIHdpbmRvdywgbm9HbG9iYWwgKSB7XG5cbi8vIEVkZ2UgPD0gMTIgLSAxMyssIEZpcmVmb3ggPD0xOCAtIDQ1KywgSUUgMTAgLSAxMSwgU2FmYXJpIDUuMSAtIDkrLCBpT1MgNiAtIDkuMVxuLy8gdGhyb3cgZXhjZXB0aW9ucyB3aGVuIG5vbi1zdHJpY3QgY29kZSAoZS5nLiwgQVNQLk5FVCA0LjUpIGFjY2Vzc2VzIHN0cmljdCBtb2RlXG4vLyBhcmd1bWVudHMuY2FsbGVlLmNhbGxlciAodHJhYy0xMzMzNSkuIEJ1dCBhcyBvZiBqUXVlcnkgMy4wICgyMDE2KSwgc3RyaWN0IG1vZGUgc2hvdWxkIGJlIGNvbW1vblxuLy8gZW5vdWdoIHRoYXQgYWxsIHN1Y2ggYXR0ZW1wdHMgYXJlIGd1YXJkZWQgaW4gYSB0cnkgYmxvY2suXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFyciA9IFtdO1xuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxudmFyIHNsaWNlID0gYXJyLnNsaWNlO1xuXG52YXIgY29uY2F0ID0gYXJyLmNvbmNhdDtcblxudmFyIHB1c2ggPSBhcnIucHVzaDtcblxudmFyIGluZGV4T2YgPSBhcnIuaW5kZXhPZjtcblxudmFyIGNsYXNzMnR5cGUgPSB7fTtcblxudmFyIHRvU3RyaW5nID0gY2xhc3MydHlwZS50b1N0cmluZztcblxudmFyIGhhc093biA9IGNsYXNzMnR5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBmblRvU3RyaW5nID0gaGFzT3duLnRvU3RyaW5nO1xuXG52YXIgT2JqZWN0RnVuY3Rpb25TdHJpbmcgPSBmblRvU3RyaW5nLmNhbGwoIE9iamVjdCApO1xuXG52YXIgc3VwcG9ydCA9IHt9O1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24oIG9iaiApIHtcblxuICAgICAgLy8gU3VwcG9ydDogQ2hyb21lIDw9NTcsIEZpcmVmb3ggPD01MlxuICAgICAgLy8gSW4gc29tZSBicm93c2VycywgdHlwZW9mIHJldHVybnMgXCJmdW5jdGlvblwiIGZvciBIVE1MIDxvYmplY3Q+IGVsZW1lbnRzXG4gICAgICAvLyAoaS5lLiwgYHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcIm9iamVjdFwiICkgPT09IFwiZnVuY3Rpb25cImApLlxuICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBjbGFzc2lmeSAqYW55KiBET00gbm9kZSBhcyBhIGZ1bmN0aW9uLlxuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygb2JqLm5vZGVUeXBlICE9PSBcIm51bWJlclwiO1xuICB9O1xuXG5cbnZhciBpc1dpbmRvdyA9IGZ1bmN0aW9uIGlzV2luZG93KCBvYmogKSB7XG5cdFx0cmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcblx0fTtcblxuXG5cblxuXHR2YXIgcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyA9IHtcblx0XHR0eXBlOiB0cnVlLFxuXHRcdHNyYzogdHJ1ZSxcblx0XHRub25jZTogdHJ1ZSxcblx0XHRub01vZHVsZTogdHJ1ZVxuXHR9O1xuXG5cdGZ1bmN0aW9uIERPTUV2YWwoIGNvZGUsIG5vZGUsIGRvYyApIHtcblx0XHRkb2MgPSBkb2MgfHwgZG9jdW1lbnQ7XG5cblx0XHR2YXIgaSwgdmFsLFxuXHRcdFx0c2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoIFwic2NyaXB0XCIgKTtcblxuXHRcdHNjcmlwdC50ZXh0ID0gY29kZTtcblx0XHRpZiAoIG5vZGUgKSB7XG5cdFx0XHRmb3IgKCBpIGluIHByZXNlcnZlZFNjcmlwdEF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA2NCssIEVkZ2UgMTgrXG5cdFx0XHRcdC8vIFNvbWUgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCB0aGUgXCJub25jZVwiIHByb3BlcnR5IG9uIHNjcmlwdHMuXG5cdFx0XHRcdC8vIE9uIHRoZSBvdGhlciBoYW5kLCBqdXN0IHVzaW5nIGBnZXRBdHRyaWJ1dGVgIGlzIG5vdCBlbm91Z2ggYXNcblx0XHRcdFx0Ly8gdGhlIGBub25jZWAgYXR0cmlidXRlIGlzIHJlc2V0IHRvIGFuIGVtcHR5IHN0cmluZyB3aGVuZXZlciBpdFxuXHRcdFx0XHQvLyBiZWNvbWVzIGJyb3dzaW5nLWNvbnRleHQgY29ubmVjdGVkLlxuXHRcdFx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy8yMzY5XG5cdFx0XHRcdC8vIFNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNub25jZS1hdHRyaWJ1dGVzXG5cdFx0XHRcdC8vIFRoZSBgbm9kZS5nZXRBdHRyaWJ1dGVgIGNoZWNrIHdhcyBhZGRlZCBmb3IgdGhlIHNha2Ugb2Zcblx0XHRcdFx0Ly8gYGpRdWVyeS5nbG9iYWxFdmFsYCBzbyB0aGF0IGl0IGNhbiBmYWtlIGEgbm9uY2UtY29udGFpbmluZyBub2RlXG5cdFx0XHRcdC8vIHZpYSBhbiBvYmplY3QuXG5cdFx0XHRcdHZhbCA9IG5vZGVbIGkgXSB8fCBub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSggaSApO1xuXHRcdFx0XHRpZiAoIHZhbCApIHtcblx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKCBpLCB2YWwgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRkb2MuaGVhZC5hcHBlbmRDaGlsZCggc2NyaXB0ICkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggc2NyaXB0ICk7XG5cdH1cblxuXG5mdW5jdGlvbiB0b1R5cGUoIG9iaiApIHtcblx0aWYgKCBvYmogPT0gbnVsbCApIHtcblx0XHRyZXR1cm4gb2JqICsgXCJcIjtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seSAoZnVuY3Rpb25pc2ggUmVnRXhwKVxuXHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgP1xuXHRcdGNsYXNzMnR5cGVbIHRvU3RyaW5nLmNhbGwoIG9iaiApIF0gfHwgXCJvYmplY3RcIiA6XG5cdFx0dHlwZW9mIG9iajtcbn1cbi8qIGdsb2JhbCBTeW1ib2wgKi9cbi8vIERlZmluaW5nIHRoaXMgZ2xvYmFsIGluIC5lc2xpbnRyYy5qc29uIHdvdWxkIGNyZWF0ZSBhIGRhbmdlciBvZiB1c2luZyB0aGUgZ2xvYmFsXG4vLyB1bmd1YXJkZWQgaW4gYW5vdGhlciBwbGFjZSwgaXQgc2VlbXMgc2FmZXIgdG8gZGVmaW5lIGdsb2JhbCBvbmx5IGZvciB0aGlzIG1vZHVsZVxuXG5cblxudmFyXG5cdHZlcnNpb24gPSBcIjMuNC4xXCIsXG5cblx0Ly8gRGVmaW5lIGEgbG9jYWwgY29weSBvZiBqUXVlcnlcblx0alF1ZXJ5ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0ICkge1xuXG5cdFx0Ly8gVGhlIGpRdWVyeSBvYmplY3QgaXMgYWN0dWFsbHkganVzdCB0aGUgaW5pdCBjb25zdHJ1Y3RvciAnZW5oYW5jZWQnXG5cdFx0Ly8gTmVlZCBpbml0IGlmIGpRdWVyeSBpcyBjYWxsZWQgKGp1c3QgYWxsb3cgZXJyb3IgdG8gYmUgdGhyb3duIGlmIG5vdCBpbmNsdWRlZClcblx0XHRyZXR1cm4gbmV3IGpRdWVyeS5mbi5pbml0KCBzZWxlY3RvciwgY29udGV4dCApO1xuXHR9LFxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuXHQvLyBNYWtlIHN1cmUgd2UgdHJpbSBCT00gYW5kIE5CU1Bcblx0cnRyaW0gPSAvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7XG5cbmpRdWVyeS5mbiA9IGpRdWVyeS5wcm90b3R5cGUgPSB7XG5cblx0Ly8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuXHRqcXVlcnk6IHZlcnNpb24sXG5cblx0Y29uc3RydWN0b3I6IGpRdWVyeSxcblxuXHQvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcblx0bGVuZ3RoOiAwLFxuXG5cdHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdH0sXG5cblx0Ly8gR2V0IHRoZSBOdGggZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldCBPUlxuXHQvLyBHZXQgdGhlIHdob2xlIG1hdGNoZWQgZWxlbWVudCBzZXQgYXMgYSBjbGVhbiBhcnJheVxuXHRnZXQ6IGZ1bmN0aW9uKCBudW0gKSB7XG5cblx0XHQvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG5cdFx0aWYgKCBudW0gPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuXHRcdHJldHVybiBudW0gPCAwID8gdGhpc1sgbnVtICsgdGhpcy5sZW5ndGggXSA6IHRoaXNbIG51bSBdO1xuXHR9LFxuXG5cdC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIHB1c2ggaXQgb250byB0aGUgc3RhY2tcblx0Ly8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG5cdHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xuXG5cdFx0Ly8gQnVpbGQgYSBuZXcgalF1ZXJ5IG1hdGNoZWQgZWxlbWVudCBzZXRcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKCB0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zICk7XG5cblx0XHQvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXHRcdHJldC5wcmV2T2JqZWN0ID0gdGhpcztcblxuXHRcdC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuXHRlYWNoOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYWNoKCB0aGlzLCBjYWxsYmFjayApO1xuXHR9LFxuXG5cdG1hcDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5Lm1hcCggdGhpcywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCggZWxlbSwgaSwgZWxlbSApO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdHNsaWNlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHNsaWNlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSApO1xuXHR9LFxuXG5cdGZpcnN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggMCApO1xuXHR9LFxuXG5cdGxhc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAtMSApO1xuXHR9LFxuXG5cdGVxOiBmdW5jdGlvbiggaSApIHtcblx0XHR2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRqID0gK2kgKyAoIGkgPCAwID8gbGVuIDogMCApO1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggaiA+PSAwICYmIGogPCBsZW4gPyBbIHRoaXNbIGogXSBdIDogW10gKTtcblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuXHR9LFxuXG5cdC8vIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cblx0Ly8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG5cdHB1c2g6IHB1c2gsXG5cdHNvcnQ6IGFyci5zb3J0LFxuXHRzcGxpY2U6IGFyci5zcGxpY2Vcbn07XG5cbmpRdWVyeS5leHRlbmQgPSBqUXVlcnkuZm4uZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIDAgXSB8fCB7fSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblxuXHRcdC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIGkgXSB8fCB7fTtcblx0XHRpKys7XG5cdH1cblxuXHQvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblx0aWYgKCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICFpc0Z1bmN0aW9uKCB0YXJnZXQgKSApIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdC8vIEV4dGVuZCBqUXVlcnkgaXRzZWxmIGlmIG9ubHkgb25lIGFyZ3VtZW50IGlzIHBhc3NlZFxuXHRpZiAoIGkgPT09IGxlbmd0aCApIHtcblx0XHR0YXJnZXQgPSB0aGlzO1xuXHRcdGktLTtcblx0fVxuXG5cdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmICggKCBvcHRpb25zID0gYXJndW1lbnRzWyBpIF0gKSAhPSBudWxsICkge1xuXG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zWyBuYW1lIF07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBPYmplY3QucHJvdG90eXBlIHBvbGx1dGlvblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICggbmFtZSA9PT0gXCJfX3Byb3RvX19cIiB8fCB0YXJnZXQgPT09IGNvcHkgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0aWYgKCBkZWVwICYmIGNvcHkgJiYgKCBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29weSApIHx8XG5cdFx0XHRcdFx0KCBjb3B5SXNBcnJheSA9IEFycmF5LmlzQXJyYXkoIGNvcHkgKSApICkgKSB7XG5cdFx0XHRcdFx0c3JjID0gdGFyZ2V0WyBuYW1lIF07XG5cblx0XHRcdFx0XHQvLyBFbnN1cmUgcHJvcGVyIHR5cGUgZm9yIHRoZSBzb3VyY2UgdmFsdWVcblx0XHRcdFx0XHRpZiAoIGNvcHlJc0FycmF5ICYmICFBcnJheS5pc0FycmF5KCBzcmMgKSApIHtcblx0XHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0fSBlbHNlIGlmICggIWNvcHlJc0FycmF5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggc3JjICkgKSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHt9O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblxuXHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0galF1ZXJ5LmV4dGVuZCggZGVlcCwgY2xvbmUsIGNvcHkgKTtcblxuXHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGNvcHkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGNvcHk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIFVuaXF1ZSBmb3IgZWFjaCBjb3B5IG9mIGpRdWVyeSBvbiB0aGUgcGFnZVxuXHRleHBhbmRvOiBcImpRdWVyeVwiICsgKCB2ZXJzaW9uICsgTWF0aC5yYW5kb20oKSApLnJlcGxhY2UoIC9cXEQvZywgXCJcIiApLFxuXG5cdC8vIEFzc3VtZSBqUXVlcnkgaXMgcmVhZHkgd2l0aG91dCB0aGUgcmVhZHkgbW9kdWxlXG5cdGlzUmVhZHk6IHRydWUsXG5cblx0ZXJyb3I6IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtc2cgKTtcblx0fSxcblxuXHRub29wOiBmdW5jdGlvbigpIHt9LFxuXG5cdGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0dmFyIHByb3RvLCBDdG9yO1xuXG5cdFx0Ly8gRGV0ZWN0IG9idmlvdXMgbmVnYXRpdmVzXG5cdFx0Ly8gVXNlIHRvU3RyaW5nIGluc3RlYWQgb2YgalF1ZXJ5LnR5cGUgdG8gY2F0Y2ggaG9zdCBvYmplY3RzXG5cdFx0aWYgKCAhb2JqIHx8IHRvU3RyaW5nLmNhbGwoIG9iaiApICE9PSBcIltvYmplY3QgT2JqZWN0XVwiICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHByb3RvID0gZ2V0UHJvdG8oIG9iaiApO1xuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIG5vIHByb3RvdHlwZSAoZS5nLiwgYE9iamVjdC5jcmVhdGUoIG51bGwgKWApIGFyZSBwbGFpblxuXHRcdGlmICggIXByb3RvICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIHByb3RvdHlwZSBhcmUgcGxhaW4gaWZmIHRoZXkgd2VyZSBjb25zdHJ1Y3RlZCBieSBhIGdsb2JhbCBPYmplY3QgZnVuY3Rpb25cblx0XHRDdG9yID0gaGFzT3duLmNhbGwoIHByb3RvLCBcImNvbnN0cnVjdG9yXCIgKSAmJiBwcm90by5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBmblRvU3RyaW5nLmNhbGwoIEN0b3IgKSA9PT0gT2JqZWN0RnVuY3Rpb25TdHJpbmc7XG5cdH0sXG5cblx0aXNFbXB0eU9iamVjdDogZnVuY3Rpb24oIG9iaiApIHtcblx0XHR2YXIgbmFtZTtcblxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBnbG9iYWwgY29udGV4dFxuXHRnbG9iYWxFdmFsOiBmdW5jdGlvbiggY29kZSwgb3B0aW9ucyApIHtcblx0XHRET01FdmFsKCBjb2RlLCB7IG5vbmNlOiBvcHRpb25zICYmIG9wdGlvbnMubm9uY2UgfSApO1xuXHR9LFxuXG5cdGVhY2g6IGZ1bmN0aW9uKCBvYmosIGNhbGxiYWNrICkge1xuXHRcdHZhciBsZW5ndGgsIGkgPSAwO1xuXG5cdFx0aWYgKCBpc0FycmF5TGlrZSggb2JqICkgKSB7XG5cdFx0XHRsZW5ndGggPSBvYmoubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5XG5cdHRyaW06IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdHJldHVybiB0ZXh0ID09IG51bGwgP1xuXHRcdFx0XCJcIiA6XG5cdFx0XHQoIHRleHQgKyBcIlwiICkucmVwbGFjZSggcnRyaW0sIFwiXCIgKTtcblx0fSxcblxuXHQvLyByZXN1bHRzIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG5cdG1ha2VBcnJheTogZnVuY3Rpb24oIGFyciwgcmVzdWx0cyApIHtcblx0XHR2YXIgcmV0ID0gcmVzdWx0cyB8fCBbXTtcblxuXHRcdGlmICggYXJyICE9IG51bGwgKSB7XG5cdFx0XHRpZiAoIGlzQXJyYXlMaWtlKCBPYmplY3QoIGFyciApICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggcmV0LFxuXHRcdFx0XHRcdHR5cGVvZiBhcnIgPT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdFsgYXJyIF0gOiBhcnJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guY2FsbCggcmV0LCBhcnIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdGluQXJyYXk6IGZ1bmN0aW9uKCBlbGVtLCBhcnIsIGkgKSB7XG5cdFx0cmV0dXJuIGFyciA9PSBudWxsID8gLTEgOiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xuXHR9LFxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdG1lcmdlOiBmdW5jdGlvbiggZmlyc3QsIHNlY29uZCApIHtcblx0XHR2YXIgbGVuID0gK3NlY29uZC5sZW5ndGgsXG5cdFx0XHRqID0gMCxcblx0XHRcdGkgPSBmaXJzdC5sZW5ndGg7XG5cblx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdGZpcnN0WyBpKysgXSA9IHNlY29uZFsgaiBdO1xuXHRcdH1cblxuXHRcdGZpcnN0Lmxlbmd0aCA9IGk7XG5cblx0XHRyZXR1cm4gZmlyc3Q7XG5cdH0sXG5cblx0Z3JlcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgaW52ZXJ0ICkge1xuXHRcdHZhciBjYWxsYmFja0ludmVyc2UsXG5cdFx0XHRtYXRjaGVzID0gW10sXG5cdFx0XHRpID0gMCxcblx0XHRcdGxlbmd0aCA9IGVsZW1zLmxlbmd0aCxcblx0XHRcdGNhbGxiYWNrRXhwZWN0ID0gIWludmVydDtcblxuXHRcdC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCBvbmx5IHNhdmluZyB0aGUgaXRlbXNcblx0XHQvLyB0aGF0IHBhc3MgdGhlIHZhbGlkYXRvciBmdW5jdGlvblxuXHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0Y2FsbGJhY2tJbnZlcnNlID0gIWNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpICk7XG5cdFx0XHRpZiAoIGNhbGxiYWNrSW52ZXJzZSAhPT0gY2FsbGJhY2tFeHBlY3QgKSB7XG5cdFx0XHRcdG1hdGNoZXMucHVzaCggZWxlbXNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaGVzO1xuXHR9LFxuXG5cdC8vIGFyZyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGFyZyApIHtcblx0XHR2YXIgbGVuZ3RoLCB2YWx1ZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0cmV0ID0gW107XG5cblx0XHQvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgdHJhbnNsYXRpbmcgZWFjaCBvZiB0aGUgaXRlbXMgdG8gdGhlaXIgbmV3IHZhbHVlc1xuXHRcdGlmICggaXNBcnJheUxpa2UoIGVsZW1zICkgKSB7XG5cdFx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cblx0XHRcdFx0aWYgKCB2YWx1ZSAhPSBudWxsICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGV2ZXJ5IGtleSBvbiB0aGUgb2JqZWN0LFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKCBpIGluIGVsZW1zICkge1xuXHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpLCBhcmcgKTtcblxuXHRcdFx0XHRpZiAoIHZhbHVlICE9IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdFx0cmV0dXJuIGNvbmNhdC5hcHBseSggW10sIHJldCApO1xuXHR9LFxuXG5cdC8vIEEgZ2xvYmFsIEdVSUQgY291bnRlciBmb3Igb2JqZWN0c1xuXHRndWlkOiAxLFxuXG5cdC8vIGpRdWVyeS5zdXBwb3J0IGlzIG5vdCB1c2VkIGluIENvcmUgYnV0IG90aGVyIHByb2plY3RzIGF0dGFjaCB0aGVpclxuXHQvLyBwcm9wZXJ0aWVzIHRvIGl0IHNvIGl0IG5lZWRzIHRvIGV4aXN0LlxuXHRzdXBwb3J0OiBzdXBwb3J0XG59ICk7XG5cbmlmICggdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRqUXVlcnkuZm5bIFN5bWJvbC5pdGVyYXRvciBdID0gYXJyWyBTeW1ib2wuaXRlcmF0b3IgXTtcbn1cblxuLy8gUG9wdWxhdGUgdGhlIGNsYXNzMnR5cGUgbWFwXG5qUXVlcnkuZWFjaCggXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KCBcIiBcIiApLFxuZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdGNsYXNzMnR5cGVbIFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIiBdID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xufSApO1xuXG5mdW5jdGlvbiBpc0FycmF5TGlrZSggb2JqICkge1xuXG5cdC8vIFN1cHBvcnQ6IHJlYWwgaU9TIDguMiBvbmx5IChub3QgcmVwcm9kdWNpYmxlIGluIHNpbXVsYXRvcilcblx0Ly8gYGluYCBjaGVjayB1c2VkIHRvIHByZXZlbnQgSklUIGVycm9yIChnaC0yMTQ1KVxuXHQvLyBoYXNPd24gaXNuJ3QgdXNlZCBoZXJlIGR1ZSB0byBmYWxzZSBuZWdhdGl2ZXNcblx0Ly8gcmVnYXJkaW5nIE5vZGVsaXN0IGxlbmd0aCBpbiBJRVxuXHR2YXIgbGVuZ3RoID0gISFvYmogJiYgXCJsZW5ndGhcIiBpbiBvYmogJiYgb2JqLmxlbmd0aCxcblx0XHR0eXBlID0gdG9UeXBlKCBvYmogKTtcblxuXHRpZiAoIGlzRnVuY3Rpb24oIG9iaiApIHx8IGlzV2luZG93KCBvYmogKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fFxuXHRcdHR5cGVvZiBsZW5ndGggPT09IFwibnVtYmVyXCIgJiYgbGVuZ3RoID4gMCAmJiAoIGxlbmd0aCAtIDEgKSBpbiBvYmo7XG59XG52YXIgU2l6emxlID1cbi8qIVxuICogU2l6emxlIENTUyBTZWxlY3RvciBFbmdpbmUgdjIuMy40XG4gKiBodHRwczovL3NpenpsZWpzLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vanMuZm91bmRhdGlvbi9cbiAqXG4gKiBEYXRlOiAyMDE5LTA0LTA4XG4gKi9cbihmdW5jdGlvbiggd2luZG93ICkge1xuXG52YXIgaSxcblx0c3VwcG9ydCxcblx0RXhwcixcblx0Z2V0VGV4dCxcblx0aXNYTUwsXG5cdHRva2VuaXplLFxuXHRjb21waWxlLFxuXHRzZWxlY3QsXG5cdG91dGVybW9zdENvbnRleHQsXG5cdHNvcnRJbnB1dCxcblx0aGFzRHVwbGljYXRlLFxuXG5cdC8vIExvY2FsIGRvY3VtZW50IHZhcnNcblx0c2V0RG9jdW1lbnQsXG5cdGRvY3VtZW50LFxuXHRkb2NFbGVtLFxuXHRkb2N1bWVudElzSFRNTCxcblx0cmJ1Z2d5UVNBLFxuXHRyYnVnZ3lNYXRjaGVzLFxuXHRtYXRjaGVzLFxuXHRjb250YWlucyxcblxuXHQvLyBJbnN0YW5jZS1zcGVjaWZpYyBkYXRhXG5cdGV4cGFuZG8gPSBcInNpenpsZVwiICsgMSAqIG5ldyBEYXRlKCksXG5cdHByZWZlcnJlZERvYyA9IHdpbmRvdy5kb2N1bWVudCxcblx0ZGlycnVucyA9IDAsXG5cdGRvbmUgPSAwLFxuXHRjbGFzc0NhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0dG9rZW5DYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdGNvbXBpbGVyQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRub25uYXRpdmVTZWxlY3RvckNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0c29ydE9yZGVyID0gZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0aWYgKCBhID09PSBiICkge1xuXHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIDA7XG5cdH0sXG5cblx0Ly8gSW5zdGFuY2UgbWV0aG9kc1xuXHRoYXNPd24gPSAoe30pLmhhc093blByb3BlcnR5LFxuXHRhcnIgPSBbXSxcblx0cG9wID0gYXJyLnBvcCxcblx0cHVzaF9uYXRpdmUgPSBhcnIucHVzaCxcblx0cHVzaCA9IGFyci5wdXNoLFxuXHRzbGljZSA9IGFyci5zbGljZSxcblx0Ly8gVXNlIGEgc3RyaXBwZWQtZG93biBpbmRleE9mIGFzIGl0J3MgZmFzdGVyIHRoYW4gbmF0aXZlXG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS90aG9yLWluZGV4b2YtdnMtZm9yLzVcblx0aW5kZXhPZiA9IGZ1bmN0aW9uKCBsaXN0LCBlbGVtICkge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdGxlbiA9IGxpc3QubGVuZ3RoO1xuXHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0aWYgKCBsaXN0W2ldID09PSBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9LFxuXG5cdGJvb2xlYW5zID0gXCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLFxuXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbnNcblxuXHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXNlbGVjdG9ycy8jd2hpdGVzcGFjZVxuXHR3aGl0ZXNwYWNlID0gXCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLFxuXG5cdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCN2YWx1ZS1kZWYtaWRlbnRpZmllclxuXHRpZGVudGlmaWVyID0gXCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLFxuXG5cdC8vIEF0dHJpYnV0ZSBzZWxlY3RvcnM6IGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jYXR0cmlidXRlLXNlbGVjdG9yc1xuXHRhdHRyaWJ1dGVzID0gXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKihcIiArIGlkZW50aWZpZXIgKyBcIikoPzpcIiArIHdoaXRlc3BhY2UgK1xuXHRcdC8vIE9wZXJhdG9yIChjYXB0dXJlIDIpXG5cdFx0XCIqKFsqXiR8IX5dPz0pXCIgKyB3aGl0ZXNwYWNlICtcblx0XHQvLyBcIkF0dHJpYnV0ZSB2YWx1ZXMgbXVzdCBiZSBDU1MgaWRlbnRpZmllcnMgW2NhcHR1cmUgNV0gb3Igc3RyaW5ncyBbY2FwdHVyZSAzIG9yIGNhcHR1cmUgNF1cIlxuXHRcdFwiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIgKyBpZGVudGlmaWVyICsgXCIpKXwpXCIgKyB3aGl0ZXNwYWNlICtcblx0XHRcIipcXFxcXVwiLFxuXG5cdHBzZXVkb3MgPSBcIjooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XFxcXCgoXCIgK1xuXHRcdC8vIFRvIHJlZHVjZSB0aGUgbnVtYmVyIG9mIHNlbGVjdG9ycyBuZWVkaW5nIHRva2VuaXplIGluIHRoZSBwcmVGaWx0ZXIsIHByZWZlciBhcmd1bWVudHM6XG5cdFx0Ly8gMS4gcXVvdGVkIChjYXB0dXJlIDM7IGNhcHR1cmUgNCBvciBjYXB0dXJlIDUpXG5cdFx0XCIoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXxcIiArXG5cdFx0Ly8gMi4gc2ltcGxlIChjYXB0dXJlIDYpXG5cdFx0XCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIgKyBhdHRyaWJ1dGVzICsgXCIpKil8XCIgK1xuXHRcdC8vIDMuIGFueXRoaW5nIGVsc2UgKGNhcHR1cmUgMilcblx0XHRcIi4qXCIgK1xuXHRcdFwiKVxcXFwpfClcIixcblxuXHQvLyBMZWFkaW5nIGFuZCBub24tZXNjYXBlZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBjYXB0dXJpbmcgc29tZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXJzIHByZWNlZGluZyB0aGUgbGF0dGVyXG5cdHJ3aGl0ZXNwYWNlID0gbmV3IFJlZ0V4cCggd2hpdGVzcGFjZSArIFwiK1wiLCBcImdcIiApLFxuXHRydHJpbSA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIiArIHdoaXRlc3BhY2UgKyBcIiskXCIsIFwiZ1wiICksXG5cblx0cmNvbW1hID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqLFwiICsgd2hpdGVzcGFjZSArIFwiKlwiICksXG5cdHJjb21iaW5hdG9ycyA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKihbPit+XXxcIiArIHdoaXRlc3BhY2UgKyBcIilcIiArIHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRyZGVzY2VuZCA9IG5ldyBSZWdFeHAoIHdoaXRlc3BhY2UgKyBcInw+XCIgKSxcblxuXHRycHNldWRvID0gbmV3IFJlZ0V4cCggcHNldWRvcyApLFxuXHRyaWRlbnRpZmllciA9IG5ldyBSZWdFeHAoIFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiICksXG5cblx0bWF0Y2hFeHByID0ge1xuXHRcdFwiSURcIjogbmV3IFJlZ0V4cCggXCJeIyhcIiArIGlkZW50aWZpZXIgKyBcIilcIiApLFxuXHRcdFwiQ0xBU1NcIjogbmV3IFJlZ0V4cCggXCJeXFxcXC4oXCIgKyBpZGVudGlmaWVyICsgXCIpXCIgKSxcblx0XHRcIlRBR1wiOiBuZXcgUmVnRXhwKCBcIl4oXCIgKyBpZGVudGlmaWVyICsgXCJ8WypdKVwiICksXG5cdFx0XCJBVFRSXCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgYXR0cmlidXRlcyApLFxuXHRcdFwiUFNFVURPXCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgcHNldWRvcyApLFxuXHRcdFwiQ0hJTERcIjogbmV3IFJlZ0V4cCggXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiICsgd2hpdGVzcGFjZSArXG5cdFx0XHRcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiICsgd2hpdGVzcGFjZSArIFwiKig/OihbKy1dfClcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqKFxcXFxkKyl8KSlcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpXCIsIFwiaVwiICksXG5cdFx0XCJib29sXCI6IG5ldyBSZWdFeHAoIFwiXig/OlwiICsgYm9vbGVhbnMgKyBcIikkXCIsIFwiaVwiICksXG5cdFx0Ly8gRm9yIHVzZSBpbiBsaWJyYXJpZXMgaW1wbGVtZW50aW5nIC5pcygpXG5cdFx0Ly8gV2UgdXNlIHRoaXMgZm9yIFBPUyBtYXRjaGluZyBpbiBgc2VsZWN0YFxuXHRcdFwibmVlZHNDb250ZXh0XCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArXG5cdFx0XHR3aGl0ZXNwYWNlICsgXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfCkoPz1bXi1dfCQpXCIsIFwiaVwiIClcblx0fSxcblxuXHRyaHRtbCA9IC9IVE1MJC9pLFxuXHRyaW5wdXRzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcblx0cmhlYWRlciA9IC9eaFxcZCQvaSxcblxuXHRybmF0aXZlID0gL15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxcblxuXHQvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcblx0cnF1aWNrRXhwciA9IC9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLFxuXG5cdHJzaWJsaW5nID0gL1srfl0vLFxuXG5cdC8vIENTUyBlc2NhcGVzXG5cdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCNlc2NhcGVkLWNoYXJhY3RlcnNcblx0cnVuZXNjYXBlID0gbmV3IFJlZ0V4cCggXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIiArIHdoaXRlc3BhY2UgKyBcIj98KFwiICsgd2hpdGVzcGFjZSArIFwiKXwuKVwiLCBcImlnXCIgKSxcblx0ZnVuZXNjYXBlID0gZnVuY3Rpb24oIF8sIGVzY2FwZWQsIGVzY2FwZWRXaGl0ZXNwYWNlICkge1xuXHRcdHZhciBoaWdoID0gXCIweFwiICsgZXNjYXBlZCAtIDB4MTAwMDA7XG5cdFx0Ly8gTmFOIG1lYW5zIG5vbi1jb2RlcG9pbnRcblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94PDI0XG5cdFx0Ly8gV29ya2Fyb3VuZCBlcnJvbmVvdXMgbnVtZXJpYyBpbnRlcnByZXRhdGlvbiBvZiArXCIweFwiXG5cdFx0cmV0dXJuIGhpZ2ggIT09IGhpZ2ggfHwgZXNjYXBlZFdoaXRlc3BhY2UgP1xuXHRcdFx0ZXNjYXBlZCA6XG5cdFx0XHRoaWdoIDwgMCA/XG5cdFx0XHRcdC8vIEJNUCBjb2RlcG9pbnRcblx0XHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCArIDB4MTAwMDAgKSA6XG5cdFx0XHRcdC8vIFN1cHBsZW1lbnRhbCBQbGFuZSBjb2RlcG9pbnQgKHN1cnJvZ2F0ZSBwYWlyKVxuXHRcdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDAgKTtcblx0fSxcblxuXHQvLyBDU1Mgc3RyaW5nL2lkZW50aWZpZXIgc2VyaWFsaXphdGlvblxuXHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI2NvbW1vbi1zZXJpYWxpemluZy1pZGlvbXNcblx0cmNzc2VzY2FwZSA9IC8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLFxuXHRmY3NzZXNjYXBlID0gZnVuY3Rpb24oIGNoLCBhc0NvZGVQb2ludCApIHtcblx0XHRpZiAoIGFzQ29kZVBvaW50ICkge1xuXG5cdFx0XHQvLyBVKzAwMDAgTlVMTCBiZWNvbWVzIFUrRkZGRCBSRVBMQUNFTUVOVCBDSEFSQUNURVJcblx0XHRcdGlmICggY2ggPT09IFwiXFwwXCIgKSB7XG5cdFx0XHRcdHJldHVybiBcIlxcdUZGRkRcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCAoZGVwZW5kZW50IHVwb24gcG9zaXRpb24pIG51bWJlcnMgZ2V0IGVzY2FwZWQgYXMgY29kZSBwb2ludHNcblx0XHRcdHJldHVybiBjaC5zbGljZSggMCwgLTEgKSArIFwiXFxcXFwiICsgY2guY2hhckNvZGVBdCggY2gubGVuZ3RoIC0gMSApLnRvU3RyaW5nKCAxNiApICsgXCIgXCI7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXIgcG90ZW50aWFsbHktc3BlY2lhbCBBU0NJSSBjaGFyYWN0ZXJzIGdldCBiYWNrc2xhc2gtZXNjYXBlZFxuXHRcdHJldHVybiBcIlxcXFxcIiArIGNoO1xuXHR9LFxuXG5cdC8vIFVzZWQgZm9yIGlmcmFtZXNcblx0Ly8gU2VlIHNldERvY3VtZW50KClcblx0Ly8gUmVtb3ZpbmcgdGhlIGZ1bmN0aW9uIHdyYXBwZXIgY2F1c2VzIGEgXCJQZXJtaXNzaW9uIERlbmllZFwiXG5cdC8vIGVycm9yIGluIElFXG5cdHVubG9hZEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcblx0XHRzZXREb2N1bWVudCgpO1xuXHR9LFxuXG5cdGluRGlzYWJsZWRGaWVsZHNldCA9IGFkZENvbWJpbmF0b3IoXG5cdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiZmllbGRzZXRcIjtcblx0XHR9LFxuXHRcdHsgZGlyOiBcInBhcmVudE5vZGVcIiwgbmV4dDogXCJsZWdlbmRcIiB9XG5cdCk7XG5cbi8vIE9wdGltaXplIGZvciBwdXNoLmFwcGx5KCBfLCBOb2RlTGlzdCApXG50cnkge1xuXHRwdXNoLmFwcGx5KFxuXHRcdChhcnIgPSBzbGljZS5jYWxsKCBwcmVmZXJyZWREb2MuY2hpbGROb2RlcyApKSxcblx0XHRwcmVmZXJyZWREb2MuY2hpbGROb2Rlc1xuXHQpO1xuXHQvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMFxuXHQvLyBEZXRlY3Qgc2lsZW50bHkgZmFpbGluZyBwdXNoLmFwcGx5XG5cdGFyclsgcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMubGVuZ3RoIF0ubm9kZVR5cGU7XG59IGNhdGNoICggZSApIHtcblx0cHVzaCA9IHsgYXBwbHk6IGFyci5sZW5ndGggP1xuXG5cdFx0Ly8gTGV2ZXJhZ2Ugc2xpY2UgaWYgcG9zc2libGVcblx0XHRmdW5jdGlvbiggdGFyZ2V0LCBlbHMgKSB7XG5cdFx0XHRwdXNoX25hdGl2ZS5hcHBseSggdGFyZ2V0LCBzbGljZS5jYWxsKGVscykgKTtcblx0XHR9IDpcblxuXHRcdC8vIFN1cHBvcnQ6IElFPDlcblx0XHQvLyBPdGhlcndpc2UgYXBwZW5kIGRpcmVjdGx5XG5cdFx0ZnVuY3Rpb24oIHRhcmdldCwgZWxzICkge1xuXHRcdFx0dmFyIGogPSB0YXJnZXQubGVuZ3RoLFxuXHRcdFx0XHRpID0gMDtcblx0XHRcdC8vIENhbid0IHRydXN0IE5vZGVMaXN0Lmxlbmd0aFxuXHRcdFx0d2hpbGUgKCAodGFyZ2V0W2orK10gPSBlbHNbaSsrXSkgKSB7fVxuXHRcdFx0dGFyZ2V0Lmxlbmd0aCA9IGogLSAxO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gU2l6emxlKCBzZWxlY3RvciwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApIHtcblx0dmFyIG0sIGksIGVsZW0sIG5pZCwgbWF0Y2gsIGdyb3VwcywgbmV3U2VsZWN0b3IsXG5cdFx0bmV3Q29udGV4dCA9IGNvbnRleHQgJiYgY29udGV4dC5vd25lckRvY3VtZW50LFxuXG5cdFx0Ly8gbm9kZVR5cGUgZGVmYXVsdHMgdG8gOSwgc2luY2UgY29udGV4dCBkZWZhdWx0cyB0byBkb2N1bWVudFxuXHRcdG5vZGVUeXBlID0gY29udGV4dCA/IGNvbnRleHQubm9kZVR5cGUgOiA5O1xuXG5cdHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXG5cdC8vIFJldHVybiBlYXJseSBmcm9tIGNhbGxzIHdpdGggaW52YWxpZCBzZWxlY3RvciBvciBjb250ZXh0XG5cdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiIHx8ICFzZWxlY3RvciB8fFxuXHRcdG5vZGVUeXBlICE9PSAxICYmIG5vZGVUeXBlICE9PSA5ICYmIG5vZGVUeXBlICE9PSAxMSApIHtcblxuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9XG5cblx0Ly8gVHJ5IHRvIHNob3J0Y3V0IGZpbmQgb3BlcmF0aW9ucyAoYXMgb3Bwb3NlZCB0byBmaWx0ZXJzKSBpbiBIVE1MIGRvY3VtZW50c1xuXHRpZiAoICFzZWVkICkge1xuXG5cdFx0aWYgKCAoIGNvbnRleHQgPyBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCA6IHByZWZlcnJlZERvYyApICE9PSBkb2N1bWVudCApIHtcblx0XHRcdHNldERvY3VtZW50KCBjb250ZXh0ICk7XG5cdFx0fVxuXHRcdGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuXG5cdFx0aWYgKCBkb2N1bWVudElzSFRNTCApIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHNlbGVjdG9yIGlzIHN1ZmZpY2llbnRseSBzaW1wbGUsIHRyeSB1c2luZyBhIFwiZ2V0KkJ5KlwiIERPTSBtZXRob2Rcblx0XHRcdC8vIChleGNlcHRpbmcgRG9jdW1lbnRGcmFnbWVudCBjb250ZXh0LCB3aGVyZSB0aGUgbWV0aG9kcyBkb24ndCBleGlzdClcblx0XHRcdGlmICggbm9kZVR5cGUgIT09IDExICYmIChtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyggc2VsZWN0b3IgKSkgKSB7XG5cblx0XHRcdFx0Ly8gSUQgc2VsZWN0b3Jcblx0XHRcdFx0aWYgKCAobSA9IG1hdGNoWzFdKSApIHtcblxuXHRcdFx0XHRcdC8vIERvY3VtZW50IGNvbnRleHRcblx0XHRcdFx0XHRpZiAoIG5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIG0gKSkgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUsIE9wZXJhLCBXZWJraXRcblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogaWRlbnRpZnkgdmVyc2lvbnNcblx0XHRcdFx0XHRcdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuXHRcdFx0XHRcdFx0XHRpZiAoIGVsZW0uaWQgPT09IG0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRWxlbWVudCBjb250ZXh0XG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUsIE9wZXJhLCBXZWJraXRcblx0XHRcdFx0XHRcdC8vIFRPRE86IGlkZW50aWZ5IHZlcnNpb25zXG5cdFx0XHRcdFx0XHQvLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG5cdFx0XHRcdFx0XHRpZiAoIG5ld0NvbnRleHQgJiYgKGVsZW0gPSBuZXdDb250ZXh0LmdldEVsZW1lbnRCeUlkKCBtICkpICYmXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5zKCBjb250ZXh0LCBlbGVtICkgJiZcblx0XHRcdFx0XHRcdFx0ZWxlbS5pZCA9PT0gbSApIHtcblxuXHRcdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFR5cGUgc2VsZWN0b3Jcblx0XHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbMl0gKSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggc2VsZWN0b3IgKSApO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXG5cdFx0XHRcdC8vIENsYXNzIHNlbGVjdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoIChtID0gbWF0Y2hbM10pICYmIHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAmJlxuXHRcdFx0XHRcdGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSApIHtcblxuXHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggbSApICk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gVGFrZSBhZHZhbnRhZ2Ugb2YgcXVlcnlTZWxlY3RvckFsbFxuXHRcdFx0aWYgKCBzdXBwb3J0LnFzYSAmJlxuXHRcdFx0XHQhbm9ubmF0aXZlU2VsZWN0b3JDYWNoZVsgc2VsZWN0b3IgKyBcIiBcIiBdICYmXG5cdFx0XHRcdCghcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdCggc2VsZWN0b3IgKSkgJiZcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA4IG9ubHlcblx0XHRcdFx0Ly8gRXhjbHVkZSBvYmplY3QgZWxlbWVudHNcblx0XHRcdFx0KG5vZGVUeXBlICE9PSAxIHx8IGNvbnRleHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJvYmplY3RcIikgKSB7XG5cblx0XHRcdFx0bmV3U2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0XHRcdFx0bmV3Q29udGV4dCA9IGNvbnRleHQ7XG5cblx0XHRcdFx0Ly8gcVNBIGNvbnNpZGVycyBlbGVtZW50cyBvdXRzaWRlIGEgc2NvcGluZyByb290IHdoZW4gZXZhbHVhdGluZyBjaGlsZCBvclxuXHRcdFx0XHQvLyBkZXNjZW5kYW50IGNvbWJpbmF0b3JzLCB3aGljaCBpcyBub3Qgd2hhdCB3ZSB3YW50LlxuXHRcdFx0XHQvLyBJbiBzdWNoIGNhc2VzLCB3ZSB3b3JrIGFyb3VuZCB0aGUgYmVoYXZpb3IgYnkgcHJlZml4aW5nIGV2ZXJ5IHNlbGVjdG9yIGluIHRoZVxuXHRcdFx0XHQvLyBsaXN0IHdpdGggYW4gSUQgc2VsZWN0b3IgcmVmZXJlbmNpbmcgdGhlIHNjb3BlIGNvbnRleHQuXG5cdFx0XHRcdC8vIFRoYW5rcyB0byBBbmRyZXcgRHVwb250IGZvciB0aGlzIHRlY2huaXF1ZS5cblx0XHRcdFx0aWYgKCBub2RlVHlwZSA9PT0gMSAmJiByZGVzY2VuZC50ZXN0KCBzZWxlY3RvciApICkge1xuXG5cdFx0XHRcdFx0Ly8gQ2FwdHVyZSB0aGUgY29udGV4dCBJRCwgc2V0dGluZyBpdCBmaXJzdCBpZiBuZWNlc3Nhcnlcblx0XHRcdFx0XHRpZiAoIChuaWQgPSBjb250ZXh0LmdldEF0dHJpYnV0ZSggXCJpZFwiICkpICkge1xuXHRcdFx0XHRcdFx0bmlkID0gbmlkLnJlcGxhY2UoIHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29udGV4dC5zZXRBdHRyaWJ1dGUoIFwiaWRcIiwgKG5pZCA9IGV4cGFuZG8pICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJlZml4IGV2ZXJ5IHNlbGVjdG9yIGluIHRoZSBsaXN0XG5cdFx0XHRcdFx0Z3JvdXBzID0gdG9rZW5pemUoIHNlbGVjdG9yICk7XG5cdFx0XHRcdFx0aSA9IGdyb3Vwcy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRncm91cHNbaV0gPSBcIiNcIiArIG5pZCArIFwiIFwiICsgdG9TZWxlY3RvciggZ3JvdXBzW2ldICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1NlbGVjdG9yID0gZ3JvdXBzLmpvaW4oIFwiLFwiICk7XG5cblx0XHRcdFx0XHQvLyBFeHBhbmQgY29udGV4dCBmb3Igc2libGluZyBzZWxlY3RvcnNcblx0XHRcdFx0XHRuZXdDb250ZXh0ID0gcnNpYmxpbmcudGVzdCggc2VsZWN0b3IgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHxcblx0XHRcdFx0XHRcdGNvbnRleHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsXG5cdFx0XHRcdFx0XHRuZXdDb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIG5ld1NlbGVjdG9yIClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHR9IGNhdGNoICggcXNhRXJyb3IgKSB7XG5cdFx0XHRcdFx0bm9ubmF0aXZlU2VsZWN0b3JDYWNoZSggc2VsZWN0b3IsIHRydWUgKTtcblx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRpZiAoIG5pZCA9PT0gZXhwYW5kbyApIHtcblx0XHRcdFx0XHRcdGNvbnRleHQucmVtb3ZlQXR0cmlidXRlKCBcImlkXCIgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBbGwgb3RoZXJzXG5cdHJldHVybiBzZWxlY3QoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApO1xufVxuXG4vKipcbiAqIENyZWF0ZSBrZXktdmFsdWUgY2FjaGVzIG9mIGxpbWl0ZWQgc2l6ZVxuICogQHJldHVybnMge2Z1bmN0aW9uKHN0cmluZywgb2JqZWN0KX0gUmV0dXJucyB0aGUgT2JqZWN0IGRhdGEgYWZ0ZXIgc3RvcmluZyBpdCBvbiBpdHNlbGYgd2l0aFxuICpcdHByb3BlcnR5IG5hbWUgdGhlIChzcGFjZS1zdWZmaXhlZCkgc3RyaW5nIGFuZCAoaWYgdGhlIGNhY2hlIGlzIGxhcmdlciB0aGFuIEV4cHIuY2FjaGVMZW5ndGgpXG4gKlx0ZGVsZXRpbmcgdGhlIG9sZGVzdCBlbnRyeVxuICovXG5mdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcblx0dmFyIGtleXMgPSBbXTtcblxuXHRmdW5jdGlvbiBjYWNoZSgga2V5LCB2YWx1ZSApIHtcblx0XHQvLyBVc2UgKGtleSArIFwiIFwiKSB0byBhdm9pZCBjb2xsaXNpb24gd2l0aCBuYXRpdmUgcHJvdG90eXBlIHByb3BlcnRpZXMgKHNlZSBJc3N1ZSAjMTU3KVxuXHRcdGlmICgga2V5cy5wdXNoKCBrZXkgKyBcIiBcIiApID4gRXhwci5jYWNoZUxlbmd0aCApIHtcblx0XHRcdC8vIE9ubHkga2VlcCB0aGUgbW9zdCByZWNlbnQgZW50cmllc1xuXHRcdFx0ZGVsZXRlIGNhY2hlWyBrZXlzLnNoaWZ0KCkgXTtcblx0XHR9XG5cdFx0cmV0dXJuIChjYWNoZVsga2V5ICsgXCIgXCIgXSA9IHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gY2FjaGU7XG59XG5cbi8qKlxuICogTWFyayBhIGZ1bmN0aW9uIGZvciBzcGVjaWFsIHVzZSBieSBTaXp6bGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtYXJrXG4gKi9cbmZ1bmN0aW9uIG1hcmtGdW5jdGlvbiggZm4gKSB7XG5cdGZuWyBleHBhbmRvIF0gPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbi8qKlxuICogU3VwcG9ydCB0ZXN0aW5nIHVzaW5nIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFBhc3NlZCB0aGUgY3JlYXRlZCBlbGVtZW50IGFuZCByZXR1cm5zIGEgYm9vbGVhbiByZXN1bHRcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0KCBmbiApIHtcblx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuICEhZm4oIGVsICk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0Ly8gUmVtb3ZlIGZyb20gaXRzIHBhcmVudCBieSBkZWZhdWx0XG5cdFx0aWYgKCBlbC5wYXJlbnROb2RlICkge1xuXHRcdFx0ZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggZWwgKTtcblx0XHR9XG5cdFx0Ly8gcmVsZWFzZSBtZW1vcnkgaW4gSUVcblx0XHRlbCA9IG51bGw7XG5cdH1cbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBzYW1lIGhhbmRsZXIgZm9yIGFsbCBvZiB0aGUgc3BlY2lmaWVkIGF0dHJzXG4gKiBAcGFyYW0ge1N0cmluZ30gYXR0cnMgUGlwZS1zZXBhcmF0ZWQgbGlzdCBvZiBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIGFwcGxpZWRcbiAqL1xuZnVuY3Rpb24gYWRkSGFuZGxlKCBhdHRycywgaGFuZGxlciApIHtcblx0dmFyIGFyciA9IGF0dHJzLnNwbGl0KFwifFwiKSxcblx0XHRpID0gYXJyLmxlbmd0aDtcblxuXHR3aGlsZSAoIGktLSApIHtcblx0XHRFeHByLmF0dHJIYW5kbGVbIGFycltpXSBdID0gaGFuZGxlcjtcblx0fVxufVxuXG4vKipcbiAqIENoZWNrcyBkb2N1bWVudCBvcmRlciBvZiB0d28gc2libGluZ3NcbiAqIEBwYXJhbSB7RWxlbWVudH0gYVxuICogQHBhcmFtIHtFbGVtZW50fSBiXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIGxlc3MgdGhhbiAwIGlmIGEgcHJlY2VkZXMgYiwgZ3JlYXRlciB0aGFuIDAgaWYgYSBmb2xsb3dzIGJcbiAqL1xuZnVuY3Rpb24gc2libGluZ0NoZWNrKCBhLCBiICkge1xuXHR2YXIgY3VyID0gYiAmJiBhLFxuXHRcdGRpZmYgPSBjdXIgJiYgYS5ub2RlVHlwZSA9PT0gMSAmJiBiLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRhLnNvdXJjZUluZGV4IC0gYi5zb3VyY2VJbmRleDtcblxuXHQvLyBVc2UgSUUgc291cmNlSW5kZXggaWYgYXZhaWxhYmxlIG9uIGJvdGggbm9kZXNcblx0aWYgKCBkaWZmICkge1xuXHRcdHJldHVybiBkaWZmO1xuXHR9XG5cblx0Ly8gQ2hlY2sgaWYgYiBmb2xsb3dzIGFcblx0aWYgKCBjdXIgKSB7XG5cdFx0d2hpbGUgKCAoY3VyID0gY3VyLm5leHRTaWJsaW5nKSApIHtcblx0XHRcdGlmICggY3VyID09PSBiICkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGEgPyAxIDogLTE7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBpbnB1dCB0eXBlc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8oIHR5cGUgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGJ1dHRvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvblBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiAobmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCIpICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIDplbmFibGVkLzpkaXNhYmxlZFxuICogQHBhcmFtIHtCb29sZWFufSBkaXNhYmxlZCB0cnVlIGZvciA6ZGlzYWJsZWQ7IGZhbHNlIGZvciA6ZW5hYmxlZFxuICovXG5mdW5jdGlvbiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggZGlzYWJsZWQgKSB7XG5cblx0Ly8gS25vd24gOmRpc2FibGVkIGZhbHNlIHBvc2l0aXZlczogZmllbGRzZXRbZGlzYWJsZWRdID4gbGVnZW5kOm50aC1vZi10eXBlKG4rMikgOmNhbi1kaXNhYmxlXG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE9ubHkgY2VydGFpbiBlbGVtZW50cyBjYW4gbWF0Y2ggOmVuYWJsZWQgb3IgOmRpc2FibGVkXG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZW5hYmxlZFxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWRpc2FibGVkXG5cdFx0aWYgKCBcImZvcm1cIiBpbiBlbGVtICkge1xuXG5cdFx0XHQvLyBDaGVjayBmb3IgaW5oZXJpdGVkIGRpc2FibGVkbmVzcyBvbiByZWxldmFudCBub24tZGlzYWJsZWQgZWxlbWVudHM6XG5cdFx0XHQvLyAqIGxpc3RlZCBmb3JtLWFzc29jaWF0ZWQgZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBmaWVsZHNldFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtZmUtZGlzYWJsZWRcblx0XHRcdC8vICogb3B0aW9uIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuXHRcdFx0Ly8gQWxsIHN1Y2ggZWxlbWVudHMgaGF2ZSBhIFwiZm9ybVwiIHByb3BlcnR5LlxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5kaXNhYmxlZCA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0Ly8gT3B0aW9uIGVsZW1lbnRzIGRlZmVyIHRvIGEgcGFyZW50IG9wdGdyb3VwIGlmIHByZXNlbnRcblx0XHRcdFx0aWYgKCBcImxhYmVsXCIgaW4gZWxlbSApIHtcblx0XHRcdFx0XHRpZiAoIFwibGFiZWxcIiBpbiBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5wYXJlbnROb2RlLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDYgLSAxMVxuXHRcdFx0XHQvLyBVc2UgdGhlIGlzRGlzYWJsZWQgc2hvcnRjdXQgcHJvcGVydHkgdG8gY2hlY2sgZm9yIGRpc2FibGVkIGZpZWxkc2V0IGFuY2VzdG9yc1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pc0Rpc2FibGVkID09PSBkaXNhYmxlZCB8fFxuXG5cdFx0XHRcdFx0Ly8gV2hlcmUgdGhlcmUgaXMgbm8gaXNEaXNhYmxlZCwgY2hlY2sgbWFudWFsbHlcblx0XHRcdFx0XHQvKiBqc2hpbnQgLVcwMTggKi9cblx0XHRcdFx0XHRlbGVtLmlzRGlzYWJsZWQgIT09ICFkaXNhYmxlZCAmJlxuXHRcdFx0XHRcdFx0aW5EaXNhYmxlZEZpZWxkc2V0KCBlbGVtICkgPT09IGRpc2FibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cblx0XHQvLyBUcnkgdG8gd2lubm93IG91dCBlbGVtZW50cyB0aGF0IGNhbid0IGJlIGRpc2FibGVkIGJlZm9yZSB0cnVzdGluZyB0aGUgZGlzYWJsZWQgcHJvcGVydHkuXG5cdFx0Ly8gU29tZSB2aWN0aW1zIGdldCBjYXVnaHQgaW4gb3VyIG5ldCAobGFiZWwsIGxlZ2VuZCwgbWVudSwgdHJhY2spLCBidXQgaXQgc2hvdWxkbid0XG5cdFx0Ly8gZXZlbiBleGlzdCBvbiB0aGVtLCBsZXQgYWxvbmUgaGF2ZSBhIGJvb2xlYW4gdmFsdWUuXG5cdFx0fSBlbHNlIGlmICggXCJsYWJlbFwiIGluIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gUmVtYWluaW5nIGVsZW1lbnRzIGFyZSBuZWl0aGVyIDplbmFibGVkIG5vciA6ZGlzYWJsZWRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBwb3NpdGlvbmFsc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZm4gKSB7XG5cdHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIGFyZ3VtZW50ICkge1xuXHRcdGFyZ3VtZW50ID0gK2FyZ3VtZW50O1xuXHRcdHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMgKSB7XG5cdFx0XHR2YXIgaixcblx0XHRcdFx0bWF0Y2hJbmRleGVzID0gZm4oIFtdLCBzZWVkLmxlbmd0aCwgYXJndW1lbnQgKSxcblx0XHRcdFx0aSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7XG5cblx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggc2VlZFsgKGogPSBtYXRjaEluZGV4ZXNbaV0pIF0gKSB7XG5cdFx0XHRcdFx0c2VlZFtqXSA9ICEobWF0Y2hlc1tqXSA9IHNlZWRbal0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBhIG5vZGUgZm9yIHZhbGlkaXR5IGFzIGEgU2l6emxlIGNvbnRleHRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3Q9fSBjb250ZXh0XG4gKiBAcmV0dXJucyB7RWxlbWVudHxPYmplY3R8Qm9vbGVhbn0gVGhlIGlucHV0IG5vZGUgaWYgYWNjZXB0YWJsZSwgb3RoZXJ3aXNlIGEgZmFsc3kgdmFsdWVcbiAqL1xuZnVuY3Rpb24gdGVzdENvbnRleHQoIGNvbnRleHQgKSB7XG5cdHJldHVybiBjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnRleHQ7XG59XG5cbi8vIEV4cG9zZSBzdXBwb3J0IHZhcnMgZm9yIGNvbnZlbmllbmNlXG5zdXBwb3J0ID0gU2l6emxlLnN1cHBvcnQgPSB7fTtcblxuLyoqXG4gKiBEZXRlY3RzIFhNTCBub2Rlc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxlbSBBbiBlbGVtZW50IG9yIGEgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmZiBlbGVtIGlzIGEgbm9uLUhUTUwgWE1MIG5vZGVcbiAqL1xuaXNYTUwgPSBTaXp6bGUuaXNYTUwgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0dmFyIG5hbWVzcGFjZSA9IGVsZW0ubmFtZXNwYWNlVVJJLFxuXHRcdGRvY0VsZW0gPSAoZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0pLmRvY3VtZW50RWxlbWVudDtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PThcblx0Ly8gQXNzdW1lIEhUTUwgd2hlbiBkb2N1bWVudEVsZW1lbnQgZG9lc24ndCB5ZXQgZXhpc3QsIHN1Y2ggYXMgaW5zaWRlIGxvYWRpbmcgaWZyYW1lc1xuXHQvLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvNDgzM1xuXHRyZXR1cm4gIXJodG1sLnRlc3QoIG5hbWVzcGFjZSB8fCBkb2NFbGVtICYmIGRvY0VsZW0ubm9kZU5hbWUgfHwgXCJIVE1MXCIgKTtcbn07XG5cbi8qKlxuICogU2V0cyBkb2N1bWVudC1yZWxhdGVkIHZhcmlhYmxlcyBvbmNlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBbZG9jXSBBbiBlbGVtZW50IG9yIGRvY3VtZW50IG9iamVjdCB0byB1c2UgdG8gc2V0IHRoZSBkb2N1bWVudFxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY3VycmVudCBkb2N1bWVudFxuICovXG5zZXREb2N1bWVudCA9IFNpenpsZS5zZXREb2N1bWVudCA9IGZ1bmN0aW9uKCBub2RlICkge1xuXHR2YXIgaGFzQ29tcGFyZSwgc3ViV2luZG93LFxuXHRcdGRvYyA9IG5vZGUgPyBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZSA6IHByZWZlcnJlZERvYztcblxuXHQvLyBSZXR1cm4gZWFybHkgaWYgZG9jIGlzIGludmFsaWQgb3IgYWxyZWFkeSBzZWxlY3RlZFxuXHRpZiAoIGRvYyA9PT0gZG9jdW1lbnQgfHwgZG9jLm5vZGVUeXBlICE9PSA5IHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50ICkge1xuXHRcdHJldHVybiBkb2N1bWVudDtcblx0fVxuXG5cdC8vIFVwZGF0ZSBnbG9iYWwgdmFyaWFibGVzXG5cdGRvY3VtZW50ID0gZG9jO1xuXHRkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRkb2N1bWVudElzSFRNTCA9ICFpc1hNTCggZG9jdW1lbnQgKTtcblxuXHQvLyBTdXBwb3J0OiBJRSA5LTExLCBFZGdlXG5cdC8vIEFjY2Vzc2luZyBpZnJhbWUgZG9jdW1lbnRzIGFmdGVyIHVubG9hZCB0aHJvd3MgXCJwZXJtaXNzaW9uIGRlbmllZFwiIGVycm9ycyAoalF1ZXJ5ICMxMzkzNilcblx0aWYgKCBwcmVmZXJyZWREb2MgIT09IGRvY3VtZW50ICYmXG5cdFx0KHN1YldpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3KSAmJiBzdWJXaW5kb3cudG9wICE9PSBzdWJXaW5kb3cgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSAxMSwgRWRnZVxuXHRcdGlmICggc3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRzdWJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJ1bmxvYWRcIiwgdW5sb2FkSGFuZGxlciwgZmFsc2UgKTtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMCBvbmx5XG5cdFx0fSBlbHNlIGlmICggc3ViV2luZG93LmF0dGFjaEV2ZW50ICkge1xuXHRcdFx0c3ViV2luZG93LmF0dGFjaEV2ZW50KCBcIm9udW5sb2FkXCIsIHVubG9hZEhhbmRsZXIgKTtcblx0XHR9XG5cdH1cblxuXHQvKiBBdHRyaWJ1dGVzXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBTdXBwb3J0OiBJRTw4XG5cdC8vIFZlcmlmeSB0aGF0IGdldEF0dHJpYnV0ZSByZWFsbHkgcmV0dXJucyBhdHRyaWJ1dGVzIGFuZCBub3QgcHJvcGVydGllc1xuXHQvLyAoZXhjZXB0aW5nIElFOCBib29sZWFucylcblx0c3VwcG9ydC5hdHRyaWJ1dGVzID0gYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRlbC5jbGFzc05hbWUgPSBcImlcIjtcblx0XHRyZXR1cm4gIWVsLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKTtcblx0fSk7XG5cblx0LyogZ2V0RWxlbWVudChzKUJ5KlxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gQ2hlY2sgaWYgZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpIHJldHVybnMgb25seSBlbGVtZW50c1xuXHRzdXBwb3J0LmdldEVsZW1lbnRzQnlUYWdOYW1lID0gYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRlbC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIlwiKSApO1xuXHRcdHJldHVybiAhZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aDtcblx0fSk7XG5cblx0Ly8gU3VwcG9ydDogSUU8OVxuXHRzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSBybmF0aXZlLnRlc3QoIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgKTtcblxuXHQvLyBTdXBwb3J0OiBJRTwxMFxuXHQvLyBDaGVjayBpZiBnZXRFbGVtZW50QnlJZCByZXR1cm5zIGVsZW1lbnRzIGJ5IG5hbWVcblx0Ly8gVGhlIGJyb2tlbiBnZXRFbGVtZW50QnlJZCBtZXRob2RzIGRvbid0IHBpY2sgdXAgcHJvZ3JhbW1hdGljYWxseS1zZXQgbmFtZXMsXG5cdC8vIHNvIHVzZSBhIHJvdW5kYWJvdXQgZ2V0RWxlbWVudHNCeU5hbWUgdGVzdFxuXHRzdXBwb3J0LmdldEJ5SWQgPSBhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRcdGRvY0VsZW0uYXBwZW5kQ2hpbGQoIGVsICkuaWQgPSBleHBhbmRvO1xuXHRcdHJldHVybiAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUgfHwgIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCBleHBhbmRvICkubGVuZ3RoO1xuXHR9KTtcblxuXHQvLyBJRCBmaWx0ZXIgYW5kIGZpbmRcblx0aWYgKCBzdXBwb3J0LmdldEJ5SWQgKSB7XG5cdFx0RXhwci5maWx0ZXJbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCApIHtcblx0XHRcdHZhciBhdHRySWQgPSBpZC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gYXR0cklkO1xuXHRcdFx0fTtcblx0XHR9O1xuXHRcdEV4cHIuZmluZFtcIklEXCJdID0gZnVuY3Rpb24oIGlkLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdFx0dmFyIGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXHRcdFx0XHRyZXR1cm4gZWxlbSA/IFsgZWxlbSBdIDogW107XG5cdFx0XHR9XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRFeHByLmZpbHRlcltcIklEXCJdID0gIGZ1bmN0aW9uKCBpZCApIHtcblx0XHRcdHZhciBhdHRySWQgPSBpZC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgbm9kZSA9IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZU5vZGUgIT09IFwidW5kZWZpbmVkXCIgJiZcblx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtcblx0XHRcdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gYXR0cklkO1xuXHRcdFx0fTtcblx0XHR9O1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgNiAtIDcgb25seVxuXHRcdC8vIGdldEVsZW1lbnRCeUlkIGlzIG5vdCByZWxpYWJsZSBhcyBhIGZpbmQgc2hvcnRjdXRcblx0XHRFeHByLmZpbmRbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCwgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRcdHZhciBub2RlLCBpLCBlbGVtcyxcblx0XHRcdFx0XHRlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblxuXHRcdFx0XHRpZiAoIGVsZW0gKSB7XG5cblx0XHRcdFx0XHQvLyBWZXJpZnkgdGhlIGlkIGF0dHJpYnV0ZVxuXHRcdFx0XHRcdG5vZGUgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtcblx0XHRcdFx0XHRpZiAoIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gaWQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWyBlbGVtIF07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRmFsbCBiYWNrIG9uIGdldEVsZW1lbnRzQnlOYW1lXG5cdFx0XHRcdFx0ZWxlbXMgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlOYW1lKCBpZCApO1xuXHRcdFx0XHRcdGkgPSAwO1xuXHRcdFx0XHRcdHdoaWxlICggKGVsZW0gPSBlbGVtc1tpKytdKSApIHtcblx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtcblx0XHRcdFx0XHRcdGlmICggbm9kZSAmJiBub2RlLnZhbHVlID09PSBpZCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFsgZWxlbSBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Ly8gVGFnXG5cdEV4cHIuZmluZFtcIlRBR1wiXSA9IHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgP1xuXHRcdGZ1bmN0aW9uKCB0YWcsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRyZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnICk7XG5cblx0XHRcdC8vIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgZG9uJ3QgaGF2ZSBnRUJUTlxuXHRcdFx0fSBlbHNlIGlmICggc3VwcG9ydC5xc2EgKSB7XG5cdFx0XHRcdHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIHRhZyApO1xuXHRcdFx0fVxuXHRcdH0gOlxuXG5cdFx0ZnVuY3Rpb24oIHRhZywgY29udGV4dCApIHtcblx0XHRcdHZhciBlbGVtLFxuXHRcdFx0XHR0bXAgPSBbXSxcblx0XHRcdFx0aSA9IDAsXG5cdFx0XHRcdC8vIEJ5IGhhcHB5IGNvaW5jaWRlbmNlLCBhIChicm9rZW4pIGdFQlROIGFwcGVhcnMgb24gRG9jdW1lbnRGcmFnbWVudCBub2RlcyB0b29cblx0XHRcdFx0cmVzdWx0cyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyApO1xuXG5cdFx0XHQvLyBGaWx0ZXIgb3V0IHBvc3NpYmxlIGNvbW1lbnRzXG5cdFx0XHRpZiAoIHRhZyA9PT0gXCIqXCIgKSB7XG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSByZXN1bHRzW2krK10pICkge1xuXHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0XHRcdHRtcC5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRtcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdH07XG5cblx0Ly8gQ2xhc3Ncblx0RXhwci5maW5kW1wiQ0xBU1NcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgZnVuY3Rpb24oIGNsYXNzTmFtZSwgY29udGV4dCApIHtcblx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRyZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBjbGFzc05hbWUgKTtcblx0XHR9XG5cdH07XG5cblx0LyogUVNBL21hdGNoZXNTZWxlY3RvclxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gUVNBIGFuZCBtYXRjaGVzU2VsZWN0b3Igc3VwcG9ydFxuXG5cdC8vIG1hdGNoZXNTZWxlY3Rvcig6YWN0aXZlKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoSUU5L09wZXJhIDExLjUpXG5cdHJidWdneU1hdGNoZXMgPSBbXTtcblxuXHQvLyBxU2EoOmZvY3VzKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoQ2hyb21lIDIxKVxuXHQvLyBXZSBhbGxvdyB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4gSUU4LzkgdGhhdCB0aHJvd3MgYW4gZXJyb3Jcblx0Ly8gd2hlbmV2ZXIgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGFjY2Vzc2VkIG9uIGFuIGlmcmFtZVxuXHQvLyBTbywgd2UgYWxsb3cgOmZvY3VzIHRvIHBhc3MgdGhyb3VnaCBRU0EgYWxsIHRoZSB0aW1lIHRvIGF2b2lkIHRoZSBJRSBlcnJvclxuXHQvLyBTZWUgaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEzMzc4XG5cdHJidWdneVFTQSA9IFtdO1xuXG5cdGlmICggKHN1cHBvcnQucXNhID0gcm5hdGl2ZS50ZXN0KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsICkpICkge1xuXHRcdC8vIEJ1aWxkIFFTQSByZWdleFxuXHRcdC8vIFJlZ2V4IHN0cmF0ZWd5IGFkb3B0ZWQgZnJvbSBEaWVnbyBQZXJpbmlcblx0XHRhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0Ly8gU2VsZWN0IGlzIHNldCB0byBlbXB0eSBzdHJpbmcgb24gcHVycG9zZVxuXHRcdFx0Ly8gVGhpcyBpcyB0byB0ZXN0IElFJ3MgdHJlYXRtZW50IG9mIG5vdCBleHBsaWNpdGx5XG5cdFx0XHQvLyBzZXR0aW5nIGEgYm9vbGVhbiBjb250ZW50IGF0dHJpYnV0ZSxcblx0XHRcdC8vIHNpbmNlIGl0cyBwcmVzZW5jZSBzaG91bGQgYmUgZW5vdWdoXG5cdFx0XHQvLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTIzNTlcblx0XHRcdGRvY0VsZW0uYXBwZW5kQ2hpbGQoIGVsICkuaW5uZXJIVE1MID0gXCI8YSBpZD0nXCIgKyBleHBhbmRvICsgXCInPjwvYT5cIiArXG5cdFx0XHRcdFwiPHNlbGVjdCBpZD0nXCIgKyBleHBhbmRvICsgXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+XCIgK1xuXHRcdFx0XHRcIjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCI7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFOCwgT3BlcmEgMTEtMTIuMTZcblx0XHRcdC8vIE5vdGhpbmcgc2hvdWxkIGJlIHNlbGVjdGVkIHdoZW4gZW1wdHkgc3RyaW5ncyBmb2xsb3cgXj0gb3IgJD0gb3IgKj1cblx0XHRcdC8vIFRoZSB0ZXN0IGF0dHJpYnV0ZSBtdXN0IGJlIHVua25vd24gaW4gT3BlcmEgYnV0IFwic2FmZVwiIGZvciBXaW5SVFxuXHRcdFx0Ly8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9oaDQ2NTM4OC5hc3B4I2F0dHJpYnV0ZV9zZWN0aW9uXG5cdFx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIlsqXiRdPVwiICsgd2hpdGVzcGFjZSArIFwiKig/OicnfFxcXCJcXFwiKVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFOFxuXHRcdFx0Ly8gQm9vbGVhbiBhdHRyaWJ1dGVzIGFuZCBcInZhbHVlXCIgYXJlIG5vdCB0cmVhdGVkIGNvcnJlY3RseVxuXHRcdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKig/OnZhbHVlfFwiICsgYm9vbGVhbnMgKyBcIilcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWU8MjksIEFuZHJvaWQ8NC40LCBTYWZhcmk8Ny4wKywgaU9TPDcuMCssIFBoYW50b21KUzwxLjkuOCtcblx0XHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiW2lkfj1cIiArIGV4cGFuZG8gKyBcIi1dXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKFwifj1cIik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlYmtpdC9PcGVyYSAtIDpjaGVja2VkIHNob3VsZCByZXR1cm4gc2VsZWN0ZWQgb3B0aW9uIGVsZW1lbnRzXG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuXHRcdFx0Ly8gSUU4IHRocm93cyBlcnJvciBoZXJlIGFuZCB3aWxsIG5vdCBzZWUgbGF0ZXIgdGVzdHNcblx0XHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKFwiOmNoZWNrZWRcIik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA4KywgaU9TIDgrXG5cdFx0XHQvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM2ODUxXG5cdFx0XHQvLyBJbi1wYWdlIGBzZWxlY3RvciNpZCBzaWJsaW5nLWNvbWJpbmF0b3Igc2VsZWN0b3JgIGZhaWxzXG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcImEjXCIgKyBleHBhbmRvICsgXCIrKlwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaChcIi4jLitbK35dXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0YXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdGVsLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT5cIiArXG5cdFx0XHRcdFwiPHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBXaW5kb3dzIDggTmF0aXZlIEFwcHNcblx0XHRcdC8vIFRoZSB0eXBlIGFuZCBuYW1lIGF0dHJpYnV0ZXMgYXJlIHJlc3RyaWN0ZWQgZHVyaW5nIC5pbm5lckhUTUwgYXNzaWdubWVudFxuXHRcdFx0dmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJoaWRkZW5cIiApO1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoIGlucHV0ICkuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJEXCIgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU4XG5cdFx0XHQvLyBFbmZvcmNlIGNhc2Utc2Vuc2l0aXZpdHkgb2YgbmFtZSBhdHRyaWJ1dGVcblx0XHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwibmFtZVwiICsgd2hpdGVzcGFjZSArIFwiKlsqXiR8IX5dPz1cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGRiAzLjUgLSA6ZW5hYmxlZC86ZGlzYWJsZWQgYW5kIGhpZGRlbiBlbGVtZW50cyAoaGlkZGVuIGVsZW1lbnRzIGFyZSBzdGlsbCBlbmFibGVkKVxuXHRcdFx0Ly8gSUU4IHRocm93cyBlcnJvciBoZXJlIGFuZCB3aWxsIG5vdCBzZWUgbGF0ZXIgdGVzdHNcblx0XHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCAhPT0gMiApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTktMTErXG5cdFx0XHQvLyBJRSdzIDpkaXNhYmxlZCBzZWxlY3RvciBkb2VzIG5vdCBwaWNrIHVwIHRoZSBjaGlsZHJlbiBvZiBkaXNhYmxlZCBmaWVsZHNldHNcblx0XHRcdGRvY0VsZW0uYXBwZW5kQ2hpbGQoIGVsICkuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0aWYgKCBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCAhPT0gMiApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPcGVyYSAxMC0xMSBkb2VzIG5vdCB0aHJvdyBvbiBwb3N0LWNvbW1hIGludmFsaWQgcHNldWRvc1xuXHRcdFx0ZWwucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIik7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaChcIiwuKjpcIik7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoIChzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciA9IHJuYXRpdmUudGVzdCggKG1hdGNoZXMgPSBkb2NFbGVtLm1hdGNoZXMgfHxcblx0XHRkb2NFbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGRvY0VsZW0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jRWxlbS5vTWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jRWxlbS5tc01hdGNoZXNTZWxlY3RvcikgKSkgKSB7XG5cblx0XHRhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0Ly8gQ2hlY2sgdG8gc2VlIGlmIGl0J3MgcG9zc2libGUgdG8gZG8gbWF0Y2hlc1NlbGVjdG9yXG5cdFx0XHQvLyBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlIChJRSA5KVxuXHRcdFx0c3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCA9IG1hdGNoZXMuY2FsbCggZWwsIFwiKlwiICk7XG5cblx0XHRcdC8vIFRoaXMgc2hvdWxkIGZhaWwgd2l0aCBhbiBleGNlcHRpb25cblx0XHRcdC8vIEdlY2tvIGRvZXMgbm90IGVycm9yLCByZXR1cm5zIGZhbHNlIGluc3RlYWRcblx0XHRcdG1hdGNoZXMuY2FsbCggZWwsIFwiW3MhPScnXTp4XCIgKTtcblx0XHRcdHJidWdneU1hdGNoZXMucHVzaCggXCIhPVwiLCBwc2V1ZG9zICk7XG5cdFx0fSk7XG5cdH1cblxuXHRyYnVnZ3lRU0EgPSByYnVnZ3lRU0EubGVuZ3RoICYmIG5ldyBSZWdFeHAoIHJidWdneVFTQS5qb2luKFwifFwiKSApO1xuXHRyYnVnZ3lNYXRjaGVzID0gcmJ1Z2d5TWF0Y2hlcy5sZW5ndGggJiYgbmV3IFJlZ0V4cCggcmJ1Z2d5TWF0Y2hlcy5qb2luKFwifFwiKSApO1xuXG5cdC8qIENvbnRhaW5zXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0aGFzQ29tcGFyZSA9IHJuYXRpdmUudGVzdCggZG9jRWxlbS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiApO1xuXG5cdC8vIEVsZW1lbnQgY29udGFpbnMgYW5vdGhlclxuXHQvLyBQdXJwb3NlZnVsbHkgc2VsZi1leGNsdXNpdmVcblx0Ly8gQXMgaW4sIGFuIGVsZW1lbnQgZG9lcyBub3QgY29udGFpbiBpdHNlbGZcblx0Y29udGFpbnMgPSBoYXNDb21wYXJlIHx8IHJuYXRpdmUudGVzdCggZG9jRWxlbS5jb250YWlucyApID9cblx0XHRmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdHZhciBhZG93biA9IGEubm9kZVR5cGUgPT09IDkgPyBhLmRvY3VtZW50RWxlbWVudCA6IGEsXG5cdFx0XHRcdGJ1cCA9IGIgJiYgYi5wYXJlbnROb2RlO1xuXHRcdFx0cmV0dXJuIGEgPT09IGJ1cCB8fCAhISggYnVwICYmIGJ1cC5ub2RlVHlwZSA9PT0gMSAmJiAoXG5cdFx0XHRcdGFkb3duLmNvbnRhaW5zID9cblx0XHRcdFx0XHRhZG93bi5jb250YWlucyggYnVwICkgOlxuXHRcdFx0XHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYnVwICkgJiAxNlxuXHRcdFx0KSk7XG5cdFx0fSA6XG5cdFx0ZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0XHRpZiAoIGIgKSB7XG5cdFx0XHRcdHdoaWxlICggKGIgPSBiLnBhcmVudE5vZGUpICkge1xuXHRcdFx0XHRcdGlmICggYiA9PT0gYSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cblx0LyogU29ydGluZ1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gRG9jdW1lbnQgb3JkZXIgc29ydGluZ1xuXHRzb3J0T3JkZXIgPSBoYXNDb21wYXJlID9cblx0ZnVuY3Rpb24oIGEsIGIgKSB7XG5cblx0XHQvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxuXHRcdGlmICggYSA9PT0gYiApIHtcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHQvLyBTb3J0IG9uIG1ldGhvZCBleGlzdGVuY2UgaWYgb25seSBvbmUgaW5wdXQgaGFzIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uXG5cdFx0dmFyIGNvbXBhcmUgPSAhYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAtICFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO1xuXHRcdGlmICggY29tcGFyZSApIHtcblx0XHRcdHJldHVybiBjb21wYXJlO1xuXHRcdH1cblxuXHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBpZiBib3RoIGlucHV0cyBiZWxvbmcgdG8gdGhlIHNhbWUgZG9jdW1lbnRcblx0XHRjb21wYXJlID0gKCBhLm93bmVyRG9jdW1lbnQgfHwgYSApID09PSAoIGIub3duZXJEb2N1bWVudCB8fCBiICkgP1xuXHRcdFx0YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYiApIDpcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHdlIGtub3cgdGhleSBhcmUgZGlzY29ubmVjdGVkXG5cdFx0XHQxO1xuXG5cdFx0Ly8gRGlzY29ubmVjdGVkIG5vZGVzXG5cdFx0aWYgKCBjb21wYXJlICYgMSB8fFxuXHRcdFx0KCFzdXBwb3J0LnNvcnREZXRhY2hlZCAmJiBiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBhICkgPT09IGNvbXBhcmUpICkge1xuXG5cdFx0XHQvLyBDaG9vc2UgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBpcyByZWxhdGVkIHRvIG91ciBwcmVmZXJyZWQgZG9jdW1lbnRcblx0XHRcdGlmICggYSA9PT0gZG9jdW1lbnQgfHwgYS5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBhKSApIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBiID09PSBkb2N1bWVudCB8fCBiLm93bmVyRG9jdW1lbnQgPT09IHByZWZlcnJlZERvYyAmJiBjb250YWlucyhwcmVmZXJyZWREb2MsIGIpICkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFpbnRhaW4gb3JpZ2luYWwgb3JkZXJcblx0XHRcdHJldHVybiBzb3J0SW5wdXQgP1xuXHRcdFx0XHQoIGluZGV4T2YoIHNvcnRJbnB1dCwgYSApIC0gaW5kZXhPZiggc29ydElucHV0LCBiICkgKSA6XG5cdFx0XHRcdDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbXBhcmUgJiA0ID8gLTEgOiAxO1xuXHR9IDpcblx0ZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0Ly8gRXhpdCBlYXJseSBpZiB0aGUgbm9kZXMgYXJlIGlkZW50aWNhbFxuXHRcdGlmICggYSA9PT0gYiApIHtcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHR2YXIgY3VyLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRhdXAgPSBhLnBhcmVudE5vZGUsXG5cdFx0XHRidXAgPSBiLnBhcmVudE5vZGUsXG5cdFx0XHRhcCA9IFsgYSBdLFxuXHRcdFx0YnAgPSBbIGIgXTtcblxuXHRcdC8vIFBhcmVudGxlc3Mgbm9kZXMgYXJlIGVpdGhlciBkb2N1bWVudHMgb3IgZGlzY29ubmVjdGVkXG5cdFx0aWYgKCAhYXVwIHx8ICFidXAgKSB7XG5cdFx0XHRyZXR1cm4gYSA9PT0gZG9jdW1lbnQgPyAtMSA6XG5cdFx0XHRcdGIgPT09IGRvY3VtZW50ID8gMSA6XG5cdFx0XHRcdGF1cCA/IC0xIDpcblx0XHRcdFx0YnVwID8gMSA6XG5cdFx0XHRcdHNvcnRJbnB1dCA/XG5cdFx0XHRcdCggaW5kZXhPZiggc29ydElucHV0LCBhICkgLSBpbmRleE9mKCBzb3J0SW5wdXQsIGIgKSApIDpcblx0XHRcdFx0MDtcblxuXHRcdC8vIElmIHRoZSBub2RlcyBhcmUgc2libGluZ3MsIHdlIGNhbiBkbyBhIHF1aWNrIGNoZWNrXG5cdFx0fSBlbHNlIGlmICggYXVwID09PSBidXAgKSB7XG5cdFx0XHRyZXR1cm4gc2libGluZ0NoZWNrKCBhLCBiICk7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXJ3aXNlIHdlIG5lZWQgZnVsbCBsaXN0cyBvZiB0aGVpciBhbmNlc3RvcnMgZm9yIGNvbXBhcmlzb25cblx0XHRjdXIgPSBhO1xuXHRcdHdoaWxlICggKGN1ciA9IGN1ci5wYXJlbnROb2RlKSApIHtcblx0XHRcdGFwLnVuc2hpZnQoIGN1ciApO1xuXHRcdH1cblx0XHRjdXIgPSBiO1xuXHRcdHdoaWxlICggKGN1ciA9IGN1ci5wYXJlbnROb2RlKSApIHtcblx0XHRcdGJwLnVuc2hpZnQoIGN1ciApO1xuXHRcdH1cblxuXHRcdC8vIFdhbGsgZG93biB0aGUgdHJlZSBsb29raW5nIGZvciBhIGRpc2NyZXBhbmN5XG5cdFx0d2hpbGUgKCBhcFtpXSA9PT0gYnBbaV0gKSB7XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGkgP1xuXHRcdFx0Ly8gRG8gYSBzaWJsaW5nIGNoZWNrIGlmIHRoZSBub2RlcyBoYXZlIGEgY29tbW9uIGFuY2VzdG9yXG5cdFx0XHRzaWJsaW5nQ2hlY2soIGFwW2ldLCBicFtpXSApIDpcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIG5vZGVzIGluIG91ciBkb2N1bWVudCBzb3J0IGZpcnN0XG5cdFx0XHRhcFtpXSA9PT0gcHJlZmVycmVkRG9jID8gLTEgOlxuXHRcdFx0YnBbaV0gPT09IHByZWZlcnJlZERvYyA/IDEgOlxuXHRcdFx0MDtcblx0fTtcblxuXHRyZXR1cm4gZG9jdW1lbnQ7XG59O1xuXG5TaXp6bGUubWF0Y2hlcyA9IGZ1bmN0aW9uKCBleHByLCBlbGVtZW50cyApIHtcblx0cmV0dXJuIFNpenpsZSggZXhwciwgbnVsbCwgbnVsbCwgZWxlbWVudHMgKTtcbn07XG5cblNpenpsZS5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiggZWxlbSwgZXhwciApIHtcblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdGlmICggKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSApICE9PSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHR9XG5cblx0aWYgKCBzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciAmJiBkb2N1bWVudElzSFRNTCAmJlxuXHRcdCFub25uYXRpdmVTZWxlY3RvckNhY2hlWyBleHByICsgXCIgXCIgXSAmJlxuXHRcdCggIXJidWdneU1hdGNoZXMgfHwgIXJidWdneU1hdGNoZXMudGVzdCggZXhwciApICkgJiZcblx0XHQoICFyYnVnZ3lRU0EgICAgIHx8ICFyYnVnZ3lRU0EudGVzdCggZXhwciApICkgKSB7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFyIHJldCA9IG1hdGNoZXMuY2FsbCggZWxlbSwgZXhwciApO1xuXG5cdFx0XHQvLyBJRSA5J3MgbWF0Y2hlc1NlbGVjdG9yIHJldHVybnMgZmFsc2Ugb24gZGlzY29ubmVjdGVkIG5vZGVzXG5cdFx0XHRpZiAoIHJldCB8fCBzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoIHx8XG5cdFx0XHRcdFx0Ly8gQXMgd2VsbCwgZGlzY29ubmVjdGVkIG5vZGVzIGFyZSBzYWlkIHRvIGJlIGluIGEgZG9jdW1lbnRcblx0XHRcdFx0XHQvLyBmcmFnbWVudCBpbiBJRSA5XG5cdFx0XHRcdFx0ZWxlbS5kb2N1bWVudCAmJiBlbGVtLmRvY3VtZW50Lm5vZGVUeXBlICE9PSAxMSApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRub25uYXRpdmVTZWxlY3RvckNhY2hlKCBleHByLCB0cnVlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFNpenpsZSggZXhwciwgZG9jdW1lbnQsIG51bGwsIFsgZWxlbSBdICkubGVuZ3RoID4gMDtcbn07XG5cblNpenpsZS5jb250YWlucyA9IGZ1bmN0aW9uKCBjb250ZXh0LCBlbGVtICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0ICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBjb250ZXh0ICk7XG5cdH1cblx0cmV0dXJuIGNvbnRhaW5zKCBjb250ZXh0LCBlbGVtICk7XG59O1xuXG5TaXp6bGUuYXR0ciA9IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdH1cblxuXHR2YXIgZm4gPSBFeHByLmF0dHJIYW5kbGVbIG5hbWUudG9Mb3dlckNhc2UoKSBdLFxuXHRcdC8vIERvbid0IGdldCBmb29sZWQgYnkgT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzIChqUXVlcnkgIzEzODA3KVxuXHRcdHZhbCA9IGZuICYmIGhhc093bi5jYWxsKCBFeHByLmF0dHJIYW5kbGUsIG5hbWUudG9Mb3dlckNhc2UoKSApID9cblx0XHRcdGZuKCBlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwgKSA6XG5cdFx0XHR1bmRlZmluZWQ7XG5cblx0cmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkID9cblx0XHR2YWwgOlxuXHRcdHN1cHBvcnQuYXR0cmlidXRlcyB8fCAhZG9jdW1lbnRJc0hUTUwgP1xuXHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUgKSA6XG5cdFx0XHQodmFsID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpKSAmJiB2YWwuc3BlY2lmaWVkID9cblx0XHRcdFx0dmFsLnZhbHVlIDpcblx0XHRcdFx0bnVsbDtcbn07XG5cblNpenpsZS5lc2NhcGUgPSBmdW5jdGlvbiggc2VsICkge1xuXHRyZXR1cm4gKHNlbCArIFwiXCIpLnJlcGxhY2UoIHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUgKTtcbn07XG5cblNpenpsZS5lcnJvciA9IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdHRocm93IG5ldyBFcnJvciggXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIiArIG1zZyApO1xufTtcblxuLyoqXG4gKiBEb2N1bWVudCBzb3J0aW5nIGFuZCByZW1vdmluZyBkdXBsaWNhdGVzXG4gKiBAcGFyYW0ge0FycmF5TGlrZX0gcmVzdWx0c1xuICovXG5TaXp6bGUudW5pcXVlU29ydCA9IGZ1bmN0aW9uKCByZXN1bHRzICkge1xuXHR2YXIgZWxlbSxcblx0XHRkdXBsaWNhdGVzID0gW10sXG5cdFx0aiA9IDAsXG5cdFx0aSA9IDA7XG5cblx0Ly8gVW5sZXNzIHdlICprbm93KiB3ZSBjYW4gZGV0ZWN0IGR1cGxpY2F0ZXMsIGFzc3VtZSB0aGVpciBwcmVzZW5jZVxuXHRoYXNEdXBsaWNhdGUgPSAhc3VwcG9ydC5kZXRlY3REdXBsaWNhdGVzO1xuXHRzb3J0SW5wdXQgPSAhc3VwcG9ydC5zb3J0U3RhYmxlICYmIHJlc3VsdHMuc2xpY2UoIDAgKTtcblx0cmVzdWx0cy5zb3J0KCBzb3J0T3JkZXIgKTtcblxuXHRpZiAoIGhhc0R1cGxpY2F0ZSApIHtcblx0XHR3aGlsZSAoIChlbGVtID0gcmVzdWx0c1tpKytdKSApIHtcblx0XHRcdGlmICggZWxlbSA9PT0gcmVzdWx0c1sgaSBdICkge1xuXHRcdFx0XHRqID0gZHVwbGljYXRlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0cmVzdWx0cy5zcGxpY2UoIGR1cGxpY2F0ZXNbIGogXSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENsZWFyIGlucHV0IGFmdGVyIHNvcnRpbmcgdG8gcmVsZWFzZSBvYmplY3RzXG5cdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9wdWxsLzIyNVxuXHRzb3J0SW5wdXQgPSBudWxsO1xuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIGZvciByZXRyaWV2aW5nIHRoZSB0ZXh0IHZhbHVlIG9mIGFuIGFycmF5IG9mIERPTSBub2Rlc1xuICogQHBhcmFtIHtBcnJheXxFbGVtZW50fSBlbGVtXG4gKi9cbmdldFRleHQgPSBTaXp6bGUuZ2V0VGV4dCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHR2YXIgbm9kZSxcblx0XHRyZXQgPSBcIlwiLFxuXHRcdGkgPSAwLFxuXHRcdG5vZGVUeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRpZiAoICFub2RlVHlwZSApIHtcblx0XHQvLyBJZiBubyBub2RlVHlwZSwgdGhpcyBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheVxuXHRcdHdoaWxlICggKG5vZGUgPSBlbGVtW2krK10pICkge1xuXHRcdFx0Ly8gRG8gbm90IHRyYXZlcnNlIGNvbW1lbnQgbm9kZXNcblx0XHRcdHJldCArPSBnZXRUZXh0KCBub2RlICk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCBub2RlVHlwZSA9PT0gMSB8fCBub2RlVHlwZSA9PT0gOSB8fCBub2RlVHlwZSA9PT0gMTEgKSB7XG5cdFx0Ly8gVXNlIHRleHRDb250ZW50IGZvciBlbGVtZW50c1xuXHRcdC8vIGlubmVyVGV4dCB1c2FnZSByZW1vdmVkIGZvciBjb25zaXN0ZW5jeSBvZiBuZXcgbGluZXMgKGpRdWVyeSAjMTExNTMpXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiBlbGVtLnRleHRDb250ZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBUcmF2ZXJzZSBpdHMgY2hpbGRyZW5cblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuXHRcdFx0XHRyZXQgKz0gZ2V0VGV4dCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmICggbm9kZVR5cGUgPT09IDMgfHwgbm9kZVR5cGUgPT09IDQgKSB7XG5cdFx0cmV0dXJuIGVsZW0ubm9kZVZhbHVlO1xuXHR9XG5cdC8vIERvIG5vdCBpbmNsdWRlIGNvbW1lbnQgb3IgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiBub2Rlc1xuXG5cdHJldHVybiByZXQ7XG59O1xuXG5FeHByID0gU2l6emxlLnNlbGVjdG9ycyA9IHtcblxuXHQvLyBDYW4gYmUgYWRqdXN0ZWQgYnkgdGhlIHVzZXJcblx0Y2FjaGVMZW5ndGg6IDUwLFxuXG5cdGNyZWF0ZVBzZXVkbzogbWFya0Z1bmN0aW9uLFxuXG5cdG1hdGNoOiBtYXRjaEV4cHIsXG5cblx0YXR0ckhhbmRsZToge30sXG5cblx0ZmluZDoge30sXG5cblx0cmVsYXRpdmU6IHtcblx0XHRcIj5cIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiIFwiOiB7IGRpcjogXCJwYXJlbnROb2RlXCIgfSxcblx0XHRcIitcIjogeyBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIsIGZpcnN0OiB0cnVlIH0sXG5cdFx0XCJ+XCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiIH1cblx0fSxcblxuXHRwcmVGaWx0ZXI6IHtcblx0XHRcIkFUVFJcIjogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0bWF0Y2hbMV0gPSBtYXRjaFsxXS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHQvLyBNb3ZlIHRoZSBnaXZlbiB2YWx1ZSB0byBtYXRjaFszXSB3aGV0aGVyIHF1b3RlZCBvciB1bnF1b3RlZFxuXHRcdFx0bWF0Y2hbM10gPSAoIG1hdGNoWzNdIHx8IG1hdGNoWzRdIHx8IG1hdGNoWzVdIHx8IFwiXCIgKS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHRpZiAoIG1hdGNoWzJdID09PSBcIn49XCIgKSB7XG5cdFx0XHRcdG1hdGNoWzNdID0gXCIgXCIgKyBtYXRjaFszXSArIFwiIFwiO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDQgKTtcblx0XHR9LFxuXG5cdFx0XCJDSElMRFwiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHQvKiBtYXRjaGVzIGZyb20gbWF0Y2hFeHByW1wiQ0hJTERcIl1cblx0XHRcdFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXG5cdFx0XHRcdDIgd2hhdCAoY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0MyBhcmd1bWVudCAoZXZlbnxvZGR8XFxkKnxcXGQqbihbKy1dXFxkKyk/fC4uLilcblx0XHRcdFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXG5cdFx0XHRcdDUgc2lnbiBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NiB4IG9mIHhuLWNvbXBvbmVudFxuXHRcdFx0XHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcblx0XHRcdFx0OCB5IG9mIHktY29tcG9uZW50XG5cdFx0XHQqL1xuXHRcdFx0bWF0Y2hbMV0gPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoIG1hdGNoWzFdLnNsaWNlKCAwLCAzICkgPT09IFwibnRoXCIgKSB7XG5cdFx0XHRcdC8vIG50aC0qIHJlcXVpcmVzIGFyZ3VtZW50XG5cdFx0XHRcdGlmICggIW1hdGNoWzNdICkge1xuXHRcdFx0XHRcdFNpenpsZS5lcnJvciggbWF0Y2hbMF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIG51bWVyaWMgeCBhbmQgeSBwYXJhbWV0ZXJzIGZvciBFeHByLmZpbHRlci5DSElMRFxuXHRcdFx0XHQvLyByZW1lbWJlciB0aGF0IGZhbHNlL3RydWUgY2FzdCByZXNwZWN0aXZlbHkgdG8gMC8xXG5cdFx0XHRcdG1hdGNoWzRdID0gKyggbWF0Y2hbNF0gPyBtYXRjaFs1XSArIChtYXRjaFs2XSB8fCAxKSA6IDIgKiAoIG1hdGNoWzNdID09PSBcImV2ZW5cIiB8fCBtYXRjaFszXSA9PT0gXCJvZGRcIiApICk7XG5cdFx0XHRcdG1hdGNoWzVdID0gKyggKCBtYXRjaFs3XSArIG1hdGNoWzhdICkgfHwgbWF0Y2hbM10gPT09IFwib2RkXCIgKTtcblxuXHRcdFx0Ly8gb3RoZXIgdHlwZXMgcHJvaGliaXQgYXJndW1lbnRzXG5cdFx0XHR9IGVsc2UgaWYgKCBtYXRjaFszXSApIHtcblx0XHRcdFx0U2l6emxlLmVycm9yKCBtYXRjaFswXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0fSxcblxuXHRcdFwiUFNFVURPXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdHZhciBleGNlc3MsXG5cdFx0XHRcdHVucXVvdGVkID0gIW1hdGNoWzZdICYmIG1hdGNoWzJdO1xuXG5cdFx0XHRpZiAoIG1hdGNoRXhwcltcIkNISUxEXCJdLnRlc3QoIG1hdGNoWzBdICkgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBY2NlcHQgcXVvdGVkIGFyZ3VtZW50cyBhcy1pc1xuXHRcdFx0aWYgKCBtYXRjaFszXSApIHtcblx0XHRcdFx0bWF0Y2hbMl0gPSBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTdHJpcCBleGNlc3MgY2hhcmFjdGVycyBmcm9tIHVucXVvdGVkIGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggdW5xdW90ZWQgJiYgcnBzZXVkby50ZXN0KCB1bnF1b3RlZCApICYmXG5cdFx0XHRcdC8vIEdldCBleGNlc3MgZnJvbSB0b2tlbml6ZSAocmVjdXJzaXZlbHkpXG5cdFx0XHRcdChleGNlc3MgPSB0b2tlbml6ZSggdW5xdW90ZWQsIHRydWUgKSkgJiZcblx0XHRcdFx0Ly8gYWR2YW5jZSB0byB0aGUgbmV4dCBjbG9zaW5nIHBhcmVudGhlc2lzXG5cdFx0XHRcdChleGNlc3MgPSB1bnF1b3RlZC5pbmRleE9mKCBcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzICkgLSB1bnF1b3RlZC5sZW5ndGgpICkge1xuXG5cdFx0XHRcdC8vIGV4Y2VzcyBpcyBhIG5lZ2F0aXZlIGluZGV4XG5cdFx0XHRcdG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoIDAsIGV4Y2VzcyApO1xuXHRcdFx0XHRtYXRjaFsyXSA9IHVucXVvdGVkLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDMgKTtcblx0XHR9XG5cdH0sXG5cblx0ZmlsdGVyOiB7XG5cblx0XHRcIlRBR1wiOiBmdW5jdGlvbiggbm9kZU5hbWVTZWxlY3RvciApIHtcblx0XHRcdHZhciBub2RlTmFtZSA9IG5vZGVOYW1lU2VsZWN0b3IucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIG5vZGVOYW1lU2VsZWN0b3IgPT09IFwiKlwiID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9IDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZTtcblx0XHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0XCJDTEFTU1wiOiBmdW5jdGlvbiggY2xhc3NOYW1lICkge1xuXHRcdFx0dmFyIHBhdHRlcm4gPSBjbGFzc0NhY2hlWyBjbGFzc05hbWUgKyBcIiBcIiBdO1xuXG5cdFx0XHRyZXR1cm4gcGF0dGVybiB8fFxuXHRcdFx0XHQocGF0dGVybiA9IG5ldyBSZWdFeHAoIFwiKF58XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyBjbGFzc05hbWUgKyBcIihcIiArIHdoaXRlc3BhY2UgKyBcInwkKVwiICkpICYmXG5cdFx0XHRcdGNsYXNzQ2FjaGUoIGNsYXNzTmFtZSwgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhdHRlcm4udGVzdCggdHlwZW9mIGVsZW0uY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW0uY2xhc3NOYW1lIHx8IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIgKTtcblx0XHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdFwiQVRUUlwiOiBmdW5jdGlvbiggbmFtZSwgb3BlcmF0b3IsIGNoZWNrICkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gU2l6emxlLmF0dHIoIGVsZW0sIG5hbWUgKTtcblxuXHRcdFx0XHRpZiAoIHJlc3VsdCA9PSBudWxsICkge1xuXHRcdFx0XHRcdHJldHVybiBvcGVyYXRvciA9PT0gXCIhPVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggIW9wZXJhdG9yICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzdWx0ICs9IFwiXCI7XG5cblx0XHRcdFx0cmV0dXJuIG9wZXJhdG9yID09PSBcIj1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgOlxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcIiE9XCIgPyByZXN1bHQgIT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJePVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPT09IDAgOlxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcIio9XCIgPyBjaGVjayAmJiByZXN1bHQuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIkPVwiID8gY2hlY2sgJiYgcmVzdWx0LnNsaWNlKCAtY2hlY2subGVuZ3RoICkgPT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ+PVwiID8gKCBcIiBcIiArIHJlc3VsdC5yZXBsYWNlKCByd2hpdGVzcGFjZSwgXCIgXCIgKSArIFwiIFwiICkuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ8PVwiID8gcmVzdWx0ID09PSBjaGVjayB8fCByZXN1bHQuc2xpY2UoIDAsIGNoZWNrLmxlbmd0aCArIDEgKSA9PT0gY2hlY2sgKyBcIi1cIiA6XG5cdFx0XHRcdFx0ZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRcIkNISUxEXCI6IGZ1bmN0aW9uKCB0eXBlLCB3aGF0LCBhcmd1bWVudCwgZmlyc3QsIGxhc3QgKSB7XG5cdFx0XHR2YXIgc2ltcGxlID0gdHlwZS5zbGljZSggMCwgMyApICE9PSBcIm50aFwiLFxuXHRcdFx0XHRmb3J3YXJkID0gdHlwZS5zbGljZSggLTQgKSAhPT0gXCJsYXN0XCIsXG5cdFx0XHRcdG9mVHlwZSA9IHdoYXQgPT09IFwib2YtdHlwZVwiO1xuXG5cdFx0XHRyZXR1cm4gZmlyc3QgPT09IDEgJiYgbGFzdCA9PT0gMCA/XG5cblx0XHRcdFx0Ly8gU2hvcnRjdXQgZm9yIDpudGgtKihuKVxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRyZXR1cm4gISFlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdH0gOlxuXG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGNhY2hlLCB1bmlxdWVDYWNoZSwgb3V0ZXJDYWNoZSwgbm9kZSwgbm9kZUluZGV4LCBzdGFydCxcblx0XHRcdFx0XHRcdGRpciA9IHNpbXBsZSAhPT0gZm9yd2FyZCA/IFwibmV4dFNpYmxpbmdcIiA6IFwicHJldmlvdXNTaWJsaW5nXCIsXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGUsXG5cdFx0XHRcdFx0XHRuYW1lID0gb2ZUeXBlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdHVzZUNhY2hlID0gIXhtbCAmJiAhb2ZUeXBlLFxuXHRcdFx0XHRcdFx0ZGlmZiA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIDooZmlyc3R8bGFzdHxvbmx5KS0oY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0XHRcdGlmICggc2ltcGxlICkge1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIGRpciApIHtcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbTtcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoIChub2RlID0gbm9kZVsgZGlyIF0pICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBvZlR5cGUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ly8gUmV2ZXJzZSBkaXJlY3Rpb24gZm9yIDpvbmx5LSogKGlmIHdlIGhhdmVuJ3QgeWV0IGRvbmUgc28pXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnQgPSBkaXIgPSB0eXBlID09PSBcIm9ubHlcIiAmJiAhc3RhcnQgJiYgXCJuZXh0U2libGluZ1wiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzdGFydCA9IFsgZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZCBdO1xuXG5cdFx0XHRcdFx0XHQvLyBub24teG1sIDpudGgtY2hpbGQoLi4uKSBzdG9yZXMgY2FjaGUgZGF0YSBvbiBgcGFyZW50YFxuXHRcdFx0XHRcdFx0aWYgKCBmb3J3YXJkICYmIHVzZUNhY2hlICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFNlZWsgYGVsZW1gIGZyb20gYSBwcmV2aW91c2x5LWNhY2hlZCBpbmRleFxuXG5cdFx0XHRcdFx0XHRcdC8vIC4uLmluIGEgZ3ppcC1mcmllbmRseSB3YXlcblx0XHRcdFx0XHRcdFx0bm9kZSA9IHBhcmVudDtcblx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IG5vZGVbIGV4cGFuZG8gXSB8fCAobm9kZVsgZXhwYW5kbyBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0Ly8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVsgbm9kZS51bmlxdWVJRCBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0KG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRjYWNoZSA9IHVuaXF1ZUNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdG5vZGVJbmRleCA9IGNhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbIDEgXTtcblx0XHRcdFx0XHRcdFx0ZGlmZiA9IG5vZGVJbmRleCAmJiBjYWNoZVsgMiBdO1xuXHRcdFx0XHRcdFx0XHRub2RlID0gbm9kZUluZGV4ICYmIHBhcmVudC5jaGlsZE5vZGVzWyBub2RlSW5kZXggXTtcblxuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIChub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gRmFsbGJhY2sgdG8gc2Vla2luZyBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcblx0XHRcdFx0XHRcdFx0XHQoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFdoZW4gZm91bmQsIGNhY2hlIGluZGV4ZXMgb24gYHBhcmVudGAgYW5kIGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlLm5vZGVUeXBlID09PSAxICYmICsrZGlmZiAmJiBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgbm9kZUluZGV4LCBkaWZmIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gVXNlIHByZXZpb3VzbHktY2FjaGVkIGVsZW1lbnQgaW5kZXggaWYgYXZhaWxhYmxlXG5cdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gLi4uaW4gYSBnemlwLWZyaWVuZGx5IHdheVxuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtO1xuXHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0XHQvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0KG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdGNhY2hlID0gdW5pcXVlQ2FjaGVbIHR5cGUgXSB8fCBbXTtcblx0XHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG5cdFx0XHRcdFx0XHRcdFx0ZGlmZiA9IG5vZGVJbmRleDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIHhtbCA6bnRoLWNoaWxkKC4uLilcblx0XHRcdFx0XHRcdFx0Ly8gb3IgOm50aC1sYXN0LWNoaWxkKC4uLikgb3IgOm50aCgtbGFzdCk/LW9mLXR5cGUoLi4uKVxuXHRcdFx0XHRcdFx0XHRpZiAoIGRpZmYgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIFVzZSB0aGUgc2FtZSBsb29wIGFzIGFib3ZlIHRvIHNlZWsgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVsgZGlyIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRcdChkaWZmID0gbm9kZUluZGV4ID0gMCkgfHwgc3RhcnQucG9wKCkpICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoICggb2ZUeXBlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gMSApICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCsrZGlmZiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBDYWNoZSB0aGUgaW5kZXggb2YgZWFjaCBlbmNvdW50ZXJlZCBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IG5vZGVbIGV4cGFuZG8gXSB8fCAobm9kZVsgZXhwYW5kbyBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVsgbm9kZS51bmlxdWVJRCBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQob3V0ZXJDYWNoZVsgbm9kZS51bmlxdWVJRCBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEluY29ycG9yYXRlIHRoZSBvZmZzZXQsIHRoZW4gY2hlY2sgYWdhaW5zdCBjeWNsZSBzaXplXG5cdFx0XHRcdFx0XHRkaWZmIC09IGxhc3Q7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGlmZiA9PT0gZmlyc3QgfHwgKCBkaWZmICUgZmlyc3QgPT09IDAgJiYgZGlmZiAvIGZpcnN0ID49IDAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFwiUFNFVURPXCI6IGZ1bmN0aW9uKCBwc2V1ZG8sIGFyZ3VtZW50ICkge1xuXHRcdFx0Ly8gcHNldWRvLWNsYXNzIG5hbWVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlXG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI3BzZXVkby1jbGFzc2VzXG5cdFx0XHQvLyBQcmlvcml0aXplIGJ5IGNhc2Ugc2Vuc2l0aXZpdHkgaW4gY2FzZSBjdXN0b20gcHNldWRvcyBhcmUgYWRkZWQgd2l0aCB1cHBlcmNhc2UgbGV0dGVyc1xuXHRcdFx0Ly8gUmVtZW1iZXIgdGhhdCBzZXRGaWx0ZXJzIGluaGVyaXRzIGZyb20gcHNldWRvc1xuXHRcdFx0dmFyIGFyZ3MsXG5cdFx0XHRcdGZuID0gRXhwci5wc2V1ZG9zWyBwc2V1ZG8gXSB8fCBFeHByLnNldEZpbHRlcnNbIHBzZXVkby50b0xvd2VyQ2FzZSgpIF0gfHxcblx0XHRcdFx0XHRTaXp6bGUuZXJyb3IoIFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIiArIHBzZXVkbyApO1xuXG5cdFx0XHQvLyBUaGUgdXNlciBtYXkgdXNlIGNyZWF0ZVBzZXVkbyB0byBpbmRpY2F0ZSB0aGF0XG5cdFx0XHQvLyBhcmd1bWVudHMgYXJlIG5lZWRlZCB0byBjcmVhdGUgdGhlIGZpbHRlciBmdW5jdGlvblxuXHRcdFx0Ly8ganVzdCBhcyBTaXp6bGUgZG9lc1xuXHRcdFx0aWYgKCBmblsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHRyZXR1cm4gZm4oIGFyZ3VtZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJ1dCBtYWludGFpbiBzdXBwb3J0IGZvciBvbGQgc2lnbmF0dXJlc1xuXHRcdFx0aWYgKCBmbi5sZW5ndGggPiAxICkge1xuXHRcdFx0XHRhcmdzID0gWyBwc2V1ZG8sIHBzZXVkbywgXCJcIiwgYXJndW1lbnQgXTtcblx0XHRcdFx0cmV0dXJuIEV4cHIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eSggcHNldWRvLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRcdFx0bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuXHRcdFx0XHRcdFx0dmFyIGlkeCxcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZCA9IGZuKCBzZWVkLCBhcmd1bWVudCApLFxuXHRcdFx0XHRcdFx0XHRpID0gbWF0Y2hlZC5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdFx0aWR4ID0gaW5kZXhPZiggc2VlZCwgbWF0Y2hlZFtpXSApO1xuXHRcdFx0XHRcdFx0XHRzZWVkWyBpZHggXSA9ICEoIG1hdGNoZXNbIGlkeCBdID0gbWF0Y2hlZFtpXSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pIDpcblx0XHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRcdHJldHVybiBmbiggZWxlbSwgMCwgYXJncyApO1xuXHRcdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbjtcblx0XHR9XG5cdH0sXG5cblx0cHNldWRvczoge1xuXHRcdC8vIFBvdGVudGlhbGx5IGNvbXBsZXggcHNldWRvc1xuXHRcdFwibm90XCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0XHQvLyBUcmltIHRoZSBzZWxlY3RvciBwYXNzZWQgdG8gY29tcGlsZVxuXHRcdFx0Ly8gdG8gYXZvaWQgdHJlYXRpbmcgbGVhZGluZyBhbmQgdHJhaWxpbmdcblx0XHRcdC8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xuXHRcdFx0dmFyIGlucHV0ID0gW10sXG5cdFx0XHRcdHJlc3VsdHMgPSBbXSxcblx0XHRcdFx0bWF0Y2hlciA9IGNvbXBpbGUoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSApO1xuXG5cdFx0XHRyZXR1cm4gbWF0Y2hlclsgZXhwYW5kbyBdID9cblx0XHRcdFx0bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQgPSBtYXRjaGVyKCBzZWVkLCBudWxsLCB4bWwsIFtdICksXG5cdFx0XHRcdFx0XHRpID0gc2VlZC5sZW5ndGg7XG5cblx0XHRcdFx0XHQvLyBNYXRjaCBlbGVtZW50cyB1bm1hdGNoZWQgYnkgYG1hdGNoZXJgXG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIChlbGVtID0gdW5tYXRjaGVkW2ldKSApIHtcblx0XHRcdFx0XHRcdFx0c2VlZFtpXSA9ICEobWF0Y2hlc1tpXSA9IGVsZW0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkgOlxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdGlucHV0WzBdID0gZWxlbTtcblx0XHRcdFx0XHRtYXRjaGVyKCBpbnB1dCwgbnVsbCwgeG1sLCByZXN1bHRzICk7XG5cdFx0XHRcdFx0Ly8gRG9uJ3Qga2VlcCB0aGUgZWxlbWVudCAoaXNzdWUgIzI5OSlcblx0XHRcdFx0XHRpbnB1dFswXSA9IG51bGw7XG5cdFx0XHRcdFx0cmV0dXJuICFyZXN1bHRzLnBvcCgpO1xuXHRcdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0XCJoYXNcIjogbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIFNpenpsZSggc2VsZWN0b3IsIGVsZW0gKS5sZW5ndGggPiAwO1xuXHRcdFx0fTtcblx0XHR9KSxcblxuXHRcdFwiY29udGFpbnNcIjogbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuICggZWxlbS50ZXh0Q29udGVudCB8fCBnZXRUZXh0KCBlbGVtICkgKS5pbmRleE9mKCB0ZXh0ICkgPiAtMTtcblx0XHRcdH07XG5cdFx0fSksXG5cblx0XHQvLyBcIldoZXRoZXIgYW4gZWxlbWVudCBpcyByZXByZXNlbnRlZCBieSBhIDpsYW5nKCkgc2VsZWN0b3Jcblx0XHQvLyBpcyBiYXNlZCBzb2xlbHkgb24gdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZVxuXHRcdC8vIGJlaW5nIGVxdWFsIHRvIHRoZSBpZGVudGlmaWVyIEMsXG5cdFx0Ly8gb3IgYmVnaW5uaW5nIHdpdGggdGhlIGlkZW50aWZpZXIgQyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBcIi1cIi5cblx0XHQvLyBUaGUgbWF0Y2hpbmcgb2YgQyBhZ2FpbnN0IHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWUgaXMgcGVyZm9ybWVkIGNhc2UtaW5zZW5zaXRpdmVseS5cblx0XHQvLyBUaGUgaWRlbnRpZmllciBDIGRvZXMgbm90IGhhdmUgdG8gYmUgYSB2YWxpZCBsYW5ndWFnZSBuYW1lLlwiXG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNsYW5nLXBzZXVkb1xuXHRcdFwibGFuZ1wiOiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBsYW5nICkge1xuXHRcdFx0Ly8gbGFuZyB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgaWRlbnRpZmllclxuXHRcdFx0aWYgKCAhcmlkZW50aWZpZXIudGVzdChsYW5nIHx8IFwiXCIpICkge1xuXHRcdFx0XHRTaXp6bGUuZXJyb3IoIFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nICk7XG5cdFx0XHR9XG5cdFx0XHRsYW5nID0gbGFuZy5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBlbGVtTGFuZztcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGlmICggKGVsZW1MYW5nID0gZG9jdW1lbnRJc0hUTUwgP1xuXHRcdFx0XHRcdFx0ZWxlbS5sYW5nIDpcblx0XHRcdFx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIikgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKSApIHtcblxuXHRcdFx0XHRcdFx0ZWxlbUxhbmcgPSBlbGVtTGFuZy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1MYW5nID09PSBsYW5nIHx8IGVsZW1MYW5nLmluZGV4T2YoIGxhbmcgKyBcIi1cIiApID09PSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZSAoIChlbGVtID0gZWxlbS5wYXJlbnROb2RlKSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cdFx0fSksXG5cblx0XHQvLyBNaXNjZWxsYW5lb3VzXG5cdFx0XCJ0YXJnZXRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHRcdHJldHVybiBoYXNoICYmIGhhc2guc2xpY2UoIDEgKSA9PT0gZWxlbS5pZDtcblx0XHR9LFxuXG5cdFx0XCJyb290XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY0VsZW07XG5cdFx0fSxcblxuXHRcdFwiZm9jdXNcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAoIWRvY3VtZW50Lmhhc0ZvY3VzIHx8IGRvY3VtZW50Lmhhc0ZvY3VzKCkpICYmICEhKGVsZW0udHlwZSB8fCBlbGVtLmhyZWYgfHwgfmVsZW0udGFiSW5kZXgpO1xuXHRcdH0sXG5cblx0XHQvLyBCb29sZWFuIHByb3BlcnRpZXNcblx0XHRcImVuYWJsZWRcIjogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIGZhbHNlICksXG5cdFx0XCJkaXNhYmxlZFwiOiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggdHJ1ZSApLFxuXG5cdFx0XCJjaGVja2VkXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0Ly8gSW4gQ1NTMywgOmNoZWNrZWQgc2hvdWxkIHJldHVybiBib3RoIGNoZWNrZWQgYW5kIHNlbGVjdGVkIGVsZW1lbnRzXG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuXHRcdFx0dmFyIG5vZGVOYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIChub2RlTmFtZSA9PT0gXCJpbnB1dFwiICYmICEhZWxlbS5jaGVja2VkKSB8fCAobm9kZU5hbWUgPT09IFwib3B0aW9uXCIgJiYgISFlbGVtLnNlbGVjdGVkKTtcblx0XHR9LFxuXG5cdFx0XCJzZWxlY3RlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdC8vIEFjY2Vzc2luZyB0aGlzIHByb3BlcnR5IG1ha2VzIHNlbGVjdGVkLWJ5LWRlZmF1bHRcblx0XHRcdC8vIG9wdGlvbnMgaW4gU2FmYXJpIHdvcmsgcHJvcGVybHlcblx0XHRcdGlmICggZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRlbGVtLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uc2VsZWN0ZWQgPT09IHRydWU7XG5cdFx0fSxcblxuXHRcdC8vIENvbnRlbnRzXG5cdFx0XCJlbXB0eVwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jZW1wdHktcHNldWRvXG5cdFx0XHQvLyA6ZW1wdHkgaXMgbmVnYXRlZCBieSBlbGVtZW50ICgxKSBvciBjb250ZW50IG5vZGVzICh0ZXh0OiAzOyBjZGF0YTogNDsgZW50aXR5IHJlZjogNSksXG5cdFx0XHQvLyAgIGJ1dCBub3QgYnkgb3RoZXJzIChjb21tZW50OiA4OyBwcm9jZXNzaW5nIGluc3RydWN0aW9uOiA3OyBldGMuKVxuXHRcdFx0Ly8gbm9kZVR5cGUgPCA2IHdvcmtzIGJlY2F1c2UgYXR0cmlidXRlcyAoMikgZG8gbm90IGFwcGVhciBhcyBjaGlsZHJlblxuXHRcdFx0Zm9yICggZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcgKSB7XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA8IDYgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0XCJwYXJlbnRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gIUV4cHIucHNldWRvc1tcImVtcHR5XCJdKCBlbGVtICk7XG5cdFx0fSxcblxuXHRcdC8vIEVsZW1lbnQvaW5wdXQgdHlwZXNcblx0XHRcImhlYWRlclwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaGVhZGVyLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0XCJpbnB1dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaW5wdXRzLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0XCJidXR0b25cIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSBcImJ1dHRvblwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCI7XG5cdFx0fSxcblxuXHRcdFwidGV4dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBhdHRyO1xuXHRcdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmXG5cdFx0XHRcdGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCIgJiZcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRTw4XG5cdFx0XHRcdC8vIE5ldyBIVE1MNSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuLCBcInNlYXJjaFwiKSBhcHBlYXIgd2l0aCBlbGVtLnR5cGUgPT09IFwidGV4dFwiXG5cdFx0XHRcdCggKGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikpID09IG51bGwgfHwgYXR0ci50b0xvd2VyQ2FzZSgpID09PSBcInRleHRcIiApO1xuXHRcdH0sXG5cblx0XHQvLyBQb3NpdGlvbi1pbi1jb2xsZWN0aW9uXG5cdFx0XCJmaXJzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIFsgMCBdO1xuXHRcdH0pLFxuXG5cdFx0XCJsYXN0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIFsgbGVuZ3RoIC0gMSBdO1xuXHRcdH0pLFxuXG5cdFx0XCJlcVwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gWyBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50IF07XG5cdFx0fSksXG5cblx0XHRcImV2ZW5cIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkgKz0gMiApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSksXG5cblx0XHRcIm9kZFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHZhciBpID0gMTtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSArPSAyICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KSxcblxuXHRcdFwibHRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGkgPSBhcmd1bWVudCA8IDAgP1xuXHRcdFx0XHRhcmd1bWVudCArIGxlbmd0aCA6XG5cdFx0XHRcdGFyZ3VtZW50ID4gbGVuZ3RoID9cblx0XHRcdFx0XHRsZW5ndGggOlxuXHRcdFx0XHRcdGFyZ3VtZW50O1xuXHRcdFx0Zm9yICggOyAtLWkgPj0gMDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pLFxuXG5cdFx0XCJndFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHR2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XG5cdFx0XHRmb3IgKCA7ICsraSA8IGxlbmd0aDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pXG5cdH1cbn07XG5cbkV4cHIucHNldWRvc1tcIm50aFwiXSA9IEV4cHIucHNldWRvc1tcImVxXCJdO1xuXG4vLyBBZGQgYnV0dG9uL2lucHV0IHR5cGUgcHNldWRvc1xuZm9yICggaSBpbiB7IHJhZGlvOiB0cnVlLCBjaGVja2JveDogdHJ1ZSwgZmlsZTogdHJ1ZSwgcGFzc3dvcmQ6IHRydWUsIGltYWdlOiB0cnVlIH0gKSB7XG5cdEV4cHIucHNldWRvc1sgaSBdID0gY3JlYXRlSW5wdXRQc2V1ZG8oIGkgKTtcbn1cbmZvciAoIGkgaW4geyBzdWJtaXQ6IHRydWUsIHJlc2V0OiB0cnVlIH0gKSB7XG5cdEV4cHIucHNldWRvc1sgaSBdID0gY3JlYXRlQnV0dG9uUHNldWRvKCBpICk7XG59XG5cbi8vIEVhc3kgQVBJIGZvciBjcmVhdGluZyBuZXcgc2V0RmlsdGVyc1xuZnVuY3Rpb24gc2V0RmlsdGVycygpIHt9XG5zZXRGaWx0ZXJzLnByb3RvdHlwZSA9IEV4cHIuZmlsdGVycyA9IEV4cHIucHNldWRvcztcbkV4cHIuc2V0RmlsdGVycyA9IG5ldyBzZXRGaWx0ZXJzKCk7XG5cbnRva2VuaXplID0gU2l6emxlLnRva2VuaXplID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBwYXJzZU9ubHkgKSB7XG5cdHZhciBtYXRjaGVkLCBtYXRjaCwgdG9rZW5zLCB0eXBlLFxuXHRcdHNvRmFyLCBncm91cHMsIHByZUZpbHRlcnMsXG5cdFx0Y2FjaGVkID0gdG9rZW5DYWNoZVsgc2VsZWN0b3IgKyBcIiBcIiBdO1xuXG5cdGlmICggY2FjaGVkICkge1xuXHRcdHJldHVybiBwYXJzZU9ubHkgPyAwIDogY2FjaGVkLnNsaWNlKCAwICk7XG5cdH1cblxuXHRzb0ZhciA9IHNlbGVjdG9yO1xuXHRncm91cHMgPSBbXTtcblx0cHJlRmlsdGVycyA9IEV4cHIucHJlRmlsdGVyO1xuXG5cdHdoaWxlICggc29GYXIgKSB7XG5cblx0XHQvLyBDb21tYSBhbmQgZmlyc3QgcnVuXG5cdFx0aWYgKCAhbWF0Y2hlZCB8fCAobWF0Y2ggPSByY29tbWEuZXhlYyggc29GYXIgKSkgKSB7XG5cdFx0XHRpZiAoIG1hdGNoICkge1xuXHRcdFx0XHQvLyBEb24ndCBjb25zdW1lIHRyYWlsaW5nIGNvbW1hcyBhcyB2YWxpZFxuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaFswXS5sZW5ndGggKSB8fCBzb0Zhcjtcblx0XHRcdH1cblx0XHRcdGdyb3Vwcy5wdXNoKCAodG9rZW5zID0gW10pICk7XG5cdFx0fVxuXG5cdFx0bWF0Y2hlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gQ29tYmluYXRvcnNcblx0XHRpZiAoIChtYXRjaCA9IHJjb21iaW5hdG9ycy5leGVjKCBzb0ZhciApKSApIHtcblx0XHRcdG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuXHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0Ly8gQ2FzdCBkZXNjZW5kYW50IGNvbWJpbmF0b3JzIHRvIHNwYWNlXG5cdFx0XHRcdHR5cGU6IG1hdGNoWzBdLnJlcGxhY2UoIHJ0cmltLCBcIiBcIiApXG5cdFx0XHR9KTtcblx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlsdGVyc1xuXHRcdGZvciAoIHR5cGUgaW4gRXhwci5maWx0ZXIgKSB7XG5cdFx0XHRpZiAoIChtYXRjaCA9IG1hdGNoRXhwclsgdHlwZSBdLmV4ZWMoIHNvRmFyICkpICYmICghcHJlRmlsdGVyc1sgdHlwZSBdIHx8XG5cdFx0XHRcdChtYXRjaCA9IHByZUZpbHRlcnNbIHR5cGUgXSggbWF0Y2ggKSkpICkge1xuXHRcdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdHZhbHVlOiBtYXRjaGVkLFxuXHRcdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdFx0bWF0Y2hlczogbWF0Y2hcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCAhbWF0Y2hlZCApIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBpbnZhbGlkIGV4Y2Vzc1xuXHQvLyBpZiB3ZSdyZSBqdXN0IHBhcnNpbmdcblx0Ly8gT3RoZXJ3aXNlLCB0aHJvdyBhbiBlcnJvciBvciByZXR1cm4gdG9rZW5zXG5cdHJldHVybiBwYXJzZU9ubHkgP1xuXHRcdHNvRmFyLmxlbmd0aCA6XG5cdFx0c29GYXIgP1xuXHRcdFx0U2l6emxlLmVycm9yKCBzZWxlY3RvciApIDpcblx0XHRcdC8vIENhY2hlIHRoZSB0b2tlbnNcblx0XHRcdHRva2VuQ2FjaGUoIHNlbGVjdG9yLCBncm91cHMgKS5zbGljZSggMCApO1xufTtcblxuZnVuY3Rpb24gdG9TZWxlY3RvciggdG9rZW5zICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcblx0XHRzZWxlY3RvciA9IFwiXCI7XG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdHNlbGVjdG9yICs9IHRva2Vuc1tpXS52YWx1ZTtcblx0fVxuXHRyZXR1cm4gc2VsZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGFkZENvbWJpbmF0b3IoIG1hdGNoZXIsIGNvbWJpbmF0b3IsIGJhc2UgKSB7XG5cdHZhciBkaXIgPSBjb21iaW5hdG9yLmRpcixcblx0XHRza2lwID0gY29tYmluYXRvci5uZXh0LFxuXHRcdGtleSA9IHNraXAgfHwgZGlyLFxuXHRcdGNoZWNrTm9uRWxlbWVudHMgPSBiYXNlICYmIGtleSA9PT0gXCJwYXJlbnROb2RlXCIsXG5cdFx0ZG9uZU5hbWUgPSBkb25lKys7XG5cblx0cmV0dXJuIGNvbWJpbmF0b3IuZmlyc3QgP1xuXHRcdC8vIENoZWNrIGFnYWluc3QgY2xvc2VzdCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudFxuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR3aGlsZSAoIChlbGVtID0gZWxlbVsgZGlyIF0pICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IDpcblxuXHRcdC8vIENoZWNrIGFnYWluc3QgYWxsIGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50c1xuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgb2xkQ2FjaGUsIHVuaXF1ZUNhY2hlLCBvdXRlckNhY2hlLFxuXHRcdFx0XHRuZXdDYWNoZSA9IFsgZGlycnVucywgZG9uZU5hbWUgXTtcblxuXHRcdFx0Ly8gV2UgY2FuJ3Qgc2V0IGFyYml0cmFyeSBkYXRhIG9uIFhNTCBub2Rlcywgc28gdGhleSBkb24ndCBiZW5lZml0IGZyb20gY29tYmluYXRvciBjYWNoaW5nXG5cdFx0XHRpZiAoIHhtbCApIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBlbGVtWyBleHBhbmRvIF0gfHwgKGVsZW1bIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuXHRcdFx0XHRcdFx0Ly8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIGVsZW0udW5pcXVlSUQgXSB8fCAob3V0ZXJDYWNoZVsgZWxlbS51bmlxdWVJRCBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNraXAgJiYgc2tpcCA9PT0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuXHRcdFx0XHRcdFx0XHRlbGVtID0gZWxlbVsgZGlyIF0gfHwgZWxlbTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIChvbGRDYWNoZSA9IHVuaXF1ZUNhY2hlWyBrZXkgXSkgJiZcblx0XHRcdFx0XHRcdFx0b2xkQ2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBvbGRDYWNoZVsgMSBdID09PSBkb25lTmFtZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBc3NpZ24gdG8gbmV3Q2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKG5ld0NhY2hlWyAyIF0gPSBvbGRDYWNoZVsgMiBdKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIFJldXNlIG5ld2NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIGtleSBdID0gbmV3Q2FjaGU7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQSBtYXRjaCBtZWFucyB3ZSdyZSBkb25lOyBhIGZhaWwgbWVhbnMgd2UgaGF2ZSB0byBrZWVwIGNoZWNraW5nXG5cdFx0XHRcdFx0XHRcdGlmICggKG5ld0NhY2hlWyAyIF0gPSBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSB7XG5cdHJldHVybiBtYXRjaGVycy5sZW5ndGggPiAxID9cblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIGkgPSBtYXRjaGVycy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAhbWF0Y2hlcnNbaV0oIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSA6XG5cdFx0bWF0Y2hlcnNbMF07XG59XG5cbmZ1bmN0aW9uIG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yLCBjb250ZXh0cywgcmVzdWx0cyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0U2l6emxlKCBzZWxlY3RvciwgY29udGV4dHNbaV0sIHJlc3VsdHMgKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gY29uZGVuc2UoIHVubWF0Y2hlZCwgbWFwLCBmaWx0ZXIsIGNvbnRleHQsIHhtbCApIHtcblx0dmFyIGVsZW0sXG5cdFx0bmV3VW5tYXRjaGVkID0gW10sXG5cdFx0aSA9IDAsXG5cdFx0bGVuID0gdW5tYXRjaGVkLmxlbmd0aCxcblx0XHRtYXBwZWQgPSBtYXAgIT0gbnVsbDtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoIChlbGVtID0gdW5tYXRjaGVkW2ldKSApIHtcblx0XHRcdGlmICggIWZpbHRlciB8fCBmaWx0ZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRuZXdVbm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRpZiAoIG1hcHBlZCApIHtcblx0XHRcdFx0XHRtYXAucHVzaCggaSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ld1VubWF0Y2hlZDtcbn1cblxuZnVuY3Rpb24gc2V0TWF0Y2hlciggcHJlRmlsdGVyLCBzZWxlY3RvciwgbWF0Y2hlciwgcG9zdEZpbHRlciwgcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICkge1xuXHRpZiAoIHBvc3RGaWx0ZXIgJiYgIXBvc3RGaWx0ZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmlsdGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbHRlciApO1xuXHR9XG5cdGlmICggcG9zdEZpbmRlciAmJiAhcG9zdEZpbmRlclsgZXhwYW5kbyBdICkge1xuXHRcdHBvc3RGaW5kZXIgPSBzZXRNYXRjaGVyKCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IgKTtcblx0fVxuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCByZXN1bHRzLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0dmFyIHRlbXAsIGksIGVsZW0sXG5cdFx0XHRwcmVNYXAgPSBbXSxcblx0XHRcdHBvc3RNYXAgPSBbXSxcblx0XHRcdHByZWV4aXN0aW5nID0gcmVzdWx0cy5sZW5ndGgsXG5cblx0XHRcdC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG5cdFx0XHRlbGVtcyA9IHNlZWQgfHwgbXVsdGlwbGVDb250ZXh0cyggc2VsZWN0b3IgfHwgXCIqXCIsIGNvbnRleHQubm9kZVR5cGUgPyBbIGNvbnRleHQgXSA6IGNvbnRleHQsIFtdICksXG5cblx0XHRcdC8vIFByZWZpbHRlciB0byBnZXQgbWF0Y2hlciBpbnB1dCwgcHJlc2VydmluZyBhIG1hcCBmb3Igc2VlZC1yZXN1bHRzIHN5bmNocm9uaXphdGlvblxuXHRcdFx0bWF0Y2hlckluID0gcHJlRmlsdGVyICYmICggc2VlZCB8fCAhc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGNvbmRlbnNlKCBlbGVtcywgcHJlTWFwLCBwcmVGaWx0ZXIsIGNvbnRleHQsIHhtbCApIDpcblx0XHRcdFx0ZWxlbXMsXG5cblx0XHRcdG1hdGNoZXJPdXQgPSBtYXRjaGVyID9cblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBhIHBvc3RGaW5kZXIsIG9yIGZpbHRlcmVkIHNlZWQsIG9yIG5vbi1zZWVkIHBvc3RGaWx0ZXIgb3IgcHJlZXhpc3RpbmcgcmVzdWx0cyxcblx0XHRcdFx0cG9zdEZpbmRlciB8fCAoIHNlZWQgPyBwcmVGaWx0ZXIgOiBwcmVleGlzdGluZyB8fCBwb3N0RmlsdGVyICkgP1xuXG5cdFx0XHRcdFx0Ly8gLi4uaW50ZXJtZWRpYXRlIHByb2Nlc3NpbmcgaXMgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0W10gOlxuXG5cdFx0XHRcdFx0Ly8gLi4ub3RoZXJ3aXNlIHVzZSByZXN1bHRzIGRpcmVjdGx5XG5cdFx0XHRcdFx0cmVzdWx0cyA6XG5cdFx0XHRcdG1hdGNoZXJJbjtcblxuXHRcdC8vIEZpbmQgcHJpbWFyeSBtYXRjaGVzXG5cdFx0aWYgKCBtYXRjaGVyICkge1xuXHRcdFx0bWF0Y2hlciggbWF0Y2hlckluLCBtYXRjaGVyT3V0LCBjb250ZXh0LCB4bWwgKTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSBwb3N0RmlsdGVyXG5cdFx0aWYgKCBwb3N0RmlsdGVyICkge1xuXHRcdFx0dGVtcCA9IGNvbmRlbnNlKCBtYXRjaGVyT3V0LCBwb3N0TWFwICk7XG5cdFx0XHRwb3N0RmlsdGVyKCB0ZW1wLCBbXSwgY29udGV4dCwgeG1sICk7XG5cblx0XHRcdC8vIFVuLW1hdGNoIGZhaWxpbmcgZWxlbWVudHMgYnkgbW92aW5nIHRoZW0gYmFjayB0byBtYXRjaGVySW5cblx0XHRcdGkgPSB0ZW1wLmxlbmd0aDtcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoIChlbGVtID0gdGVtcFtpXSkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlck91dFsgcG9zdE1hcFtpXSBdID0gIShtYXRjaGVySW5bIHBvc3RNYXBbaV0gXSA9IGVsZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0aWYgKCBwb3N0RmluZGVyIHx8IHByZUZpbHRlciApIHtcblx0XHRcdFx0aWYgKCBwb3N0RmluZGVyICkge1xuXHRcdFx0XHRcdC8vIEdldCB0aGUgZmluYWwgbWF0Y2hlck91dCBieSBjb25kZW5zaW5nIHRoaXMgaW50ZXJtZWRpYXRlIGludG8gcG9zdEZpbmRlciBjb250ZXh0c1xuXHRcdFx0XHRcdHRlbXAgPSBbXTtcblx0XHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIChlbGVtID0gbWF0Y2hlck91dFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFJlc3RvcmUgbWF0Y2hlckluIHNpbmNlIGVsZW0gaXMgbm90IHlldCBhIGZpbmFsIG1hdGNoXG5cdFx0XHRcdFx0XHRcdHRlbXAucHVzaCggKG1hdGNoZXJJbltpXSA9IGVsZW0pICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBvc3RGaW5kZXIoIG51bGwsIChtYXRjaGVyT3V0ID0gW10pLCB0ZW1wLCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgbWF0Y2hlZCBlbGVtZW50cyBmcm9tIHNlZWQgdG8gcmVzdWx0cyB0byBrZWVwIHRoZW0gc3luY2hyb25pemVkXG5cdFx0XHRcdGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0aWYgKCAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICYmXG5cdFx0XHRcdFx0XHQodGVtcCA9IHBvc3RGaW5kZXIgPyBpbmRleE9mKCBzZWVkLCBlbGVtICkgOiBwcmVNYXBbaV0pID4gLTEgKSB7XG5cblx0XHRcdFx0XHRcdHNlZWRbdGVtcF0gPSAhKHJlc3VsdHNbdGVtcF0gPSBlbGVtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEFkZCBlbGVtZW50cyB0byByZXN1bHRzLCB0aHJvdWdoIHBvc3RGaW5kZXIgaWYgZGVmaW5lZFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXRjaGVyT3V0ID0gY29uZGVuc2UoXG5cdFx0XHRcdG1hdGNoZXJPdXQgPT09IHJlc3VsdHMgP1xuXHRcdFx0XHRcdG1hdGNoZXJPdXQuc3BsaWNlKCBwcmVleGlzdGluZywgbWF0Y2hlck91dC5sZW5ndGggKSA6XG5cdFx0XHRcdFx0bWF0Y2hlck91dFxuXHRcdFx0KTtcblx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgcmVzdWx0cywgbWF0Y2hlck91dCwgeG1sICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBtYXRjaGVyT3V0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlckZyb21Ub2tlbnMoIHRva2VucyApIHtcblx0dmFyIGNoZWNrQ29udGV4dCwgbWF0Y2hlciwgaixcblx0XHRsZW4gPSB0b2tlbnMubGVuZ3RoLFxuXHRcdGxlYWRpbmdSZWxhdGl2ZSA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1swXS50eXBlIF0sXG5cdFx0aW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBFeHByLnJlbGF0aXZlW1wiIFwiXSxcblx0XHRpID0gbGVhZGluZ1JlbGF0aXZlID8gMSA6IDAsXG5cblx0XHQvLyBUaGUgZm91bmRhdGlvbmFsIG1hdGNoZXIgZW5zdXJlcyB0aGF0IGVsZW1lbnRzIGFyZSByZWFjaGFibGUgZnJvbSB0b3AtbGV2ZWwgY29udGV4dChzKVxuXHRcdG1hdGNoQ29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGNoZWNrQ29udGV4dDtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hBbnlDb250ZXh0ID0gYWRkQ29tYmluYXRvciggZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXhPZiggY2hlY2tDb250ZXh0LCBlbGVtICkgPiAtMTtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hlcnMgPSBbIGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgcmV0ID0gKCAhbGVhZGluZ1JlbGF0aXZlICYmICggeG1sIHx8IGNvbnRleHQgIT09IG91dGVybW9zdENvbnRleHQgKSApIHx8IChcblx0XHRcdFx0KGNoZWNrQ29udGV4dCA9IGNvbnRleHQpLm5vZGVUeXBlID9cblx0XHRcdFx0XHRtYXRjaENvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApIDpcblx0XHRcdFx0XHRtYXRjaEFueUNvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApICk7XG5cdFx0XHQvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudCAoaXNzdWUgIzI5OSlcblx0XHRcdGNoZWNrQ29udGV4dCA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gXTtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoIChtYXRjaGVyID0gRXhwci5yZWxhdGl2ZVsgdG9rZW5zW2ldLnR5cGUgXSkgKSB7XG5cdFx0XHRtYXRjaGVycyA9IFsgYWRkQ29tYmluYXRvcihlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSwgbWF0Y2hlcikgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlciA9IEV4cHIuZmlsdGVyWyB0b2tlbnNbaV0udHlwZSBdLmFwcGx5KCBudWxsLCB0b2tlbnNbaV0ubWF0Y2hlcyApO1xuXG5cdFx0XHQvLyBSZXR1cm4gc3BlY2lhbCB1cG9uIHNlZWluZyBhIHBvc2l0aW9uYWwgbWF0Y2hlclxuXHRcdFx0aWYgKCBtYXRjaGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuXHRcdFx0XHRqID0gKytpO1xuXHRcdFx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdFx0XHRpZiAoIEV4cHIucmVsYXRpdmVbIHRva2Vuc1tqXS50eXBlIF0gKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNldE1hdGNoZXIoXG5cdFx0XHRcdFx0aSA+IDEgJiYgZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksXG5cdFx0XHRcdFx0aSA+IDEgJiYgdG9TZWxlY3Rvcihcblx0XHRcdFx0XHRcdC8vIElmIHRoZSBwcmVjZWRpbmcgdG9rZW4gd2FzIGEgZGVzY2VuZGFudCBjb21iaW5hdG9yLCBpbnNlcnQgYW4gaW1wbGljaXQgYW55LWVsZW1lbnQgYCpgXG5cdFx0XHRcdFx0XHR0b2tlbnMuc2xpY2UoIDAsIGkgLSAxICkuY29uY2F0KHsgdmFsdWU6IHRva2Vuc1sgaSAtIDIgXS50eXBlID09PSBcIiBcIiA/IFwiKlwiIDogXCJcIiB9KVxuXHRcdFx0XHRcdCkucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApLFxuXHRcdFx0XHRcdG1hdGNoZXIsXG5cdFx0XHRcdFx0aSA8IGogJiYgbWF0Y2hlckZyb21Ub2tlbnMoIHRva2Vucy5zbGljZSggaSwgaiApICksXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiBtYXRjaGVyRnJvbVRva2VucyggKHRva2VucyA9IHRva2Vucy5zbGljZSggaiApKSApLFxuXHRcdFx0XHRcdGogPCBsZW4gJiYgdG9TZWxlY3RvciggdG9rZW5zIClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdG1hdGNoZXJzLnB1c2goIG1hdGNoZXIgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApIHtcblx0dmFyIGJ5U2V0ID0gc2V0TWF0Y2hlcnMubGVuZ3RoID4gMCxcblx0XHRieUVsZW1lbnQgPSBlbGVtZW50TWF0Y2hlcnMubGVuZ3RoID4gMCxcblx0XHRzdXBlck1hdGNoZXIgPSBmdW5jdGlvbiggc2VlZCwgY29udGV4dCwgeG1sLCByZXN1bHRzLCBvdXRlcm1vc3QgKSB7XG5cdFx0XHR2YXIgZWxlbSwgaiwgbWF0Y2hlcixcblx0XHRcdFx0bWF0Y2hlZENvdW50ID0gMCxcblx0XHRcdFx0aSA9IFwiMFwiLFxuXHRcdFx0XHR1bm1hdGNoZWQgPSBzZWVkICYmIFtdLFxuXHRcdFx0XHRzZXRNYXRjaGVkID0gW10sXG5cdFx0XHRcdGNvbnRleHRCYWNrdXAgPSBvdXRlcm1vc3RDb250ZXh0LFxuXHRcdFx0XHQvLyBXZSBtdXN0IGFsd2F5cyBoYXZlIGVpdGhlciBzZWVkIGVsZW1lbnRzIG9yIG91dGVybW9zdCBjb250ZXh0XG5cdFx0XHRcdGVsZW1zID0gc2VlZCB8fCBieUVsZW1lbnQgJiYgRXhwci5maW5kW1wiVEFHXCJdKCBcIipcIiwgb3V0ZXJtb3N0ICksXG5cdFx0XHRcdC8vIFVzZSBpbnRlZ2VyIGRpcnJ1bnMgaWZmIHRoaXMgaXMgdGhlIG91dGVybW9zdCBtYXRjaGVyXG5cdFx0XHRcdGRpcnJ1bnNVbmlxdWUgPSAoZGlycnVucyArPSBjb250ZXh0QmFja3VwID09IG51bGwgPyAxIDogTWF0aC5yYW5kb20oKSB8fCAwLjEpLFxuXHRcdFx0XHRsZW4gPSBlbGVtcy5sZW5ndGg7XG5cblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dCA9PT0gZG9jdW1lbnQgfHwgY29udGV4dCB8fCBvdXRlcm1vc3Q7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBlbGVtZW50cyBwYXNzaW5nIGVsZW1lbnRNYXRjaGVycyBkaXJlY3RseSB0byByZXN1bHRzXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTw5LCBTYWZhcmlcblx0XHRcdC8vIFRvbGVyYXRlIE5vZGVMaXN0IHByb3BlcnRpZXMgKElFOiBcImxlbmd0aFwiOyBTYWZhcmk6IDxudW1iZXI+KSBtYXRjaGluZyBlbGVtZW50cyBieSBpZFxuXHRcdFx0Zm9yICggOyBpICE9PSBsZW4gJiYgKGVsZW0gPSBlbGVtc1tpXSkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGJ5RWxlbWVudCAmJiBlbGVtICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdGlmICggIWNvbnRleHQgJiYgZWxlbS5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCApIHtcblx0XHRcdFx0XHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdFx0XHRcdFx0XHR4bWwgPSAhZG9jdW1lbnRJc0hUTUw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHdoaWxlICggKG1hdGNoZXIgPSBlbGVtZW50TWF0Y2hlcnNbaisrXSkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQgfHwgZG9jdW1lbnQsIHhtbCkgKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XG5cdFx0XHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUcmFjayB1bm1hdGNoZWQgZWxlbWVudHMgZm9yIHNldCBmaWx0ZXJzXG5cdFx0XHRcdGlmICggYnlTZXQgKSB7XG5cdFx0XHRcdFx0Ly8gVGhleSB3aWxsIGhhdmUgZ29uZSB0aHJvdWdoIGFsbCBwb3NzaWJsZSBtYXRjaGVyc1xuXHRcdFx0XHRcdGlmICggKGVsZW0gPSAhbWF0Y2hlciAmJiBlbGVtKSApIHtcblx0XHRcdFx0XHRcdG1hdGNoZWRDb3VudC0tO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIExlbmd0aGVuIHRoZSBhcnJheSBmb3IgZXZlcnkgZWxlbWVudCwgbWF0Y2hlZCBvciBub3Rcblx0XHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBgaWAgaXMgbm93IHRoZSBjb3VudCBvZiBlbGVtZW50cyB2aXNpdGVkIGFib3ZlLCBhbmQgYWRkaW5nIGl0IHRvIGBtYXRjaGVkQ291bnRgXG5cdFx0XHQvLyBtYWtlcyB0aGUgbGF0dGVyIG5vbm5lZ2F0aXZlLlxuXHRcdFx0bWF0Y2hlZENvdW50ICs9IGk7XG5cblx0XHRcdC8vIEFwcGx5IHNldCBmaWx0ZXJzIHRvIHVubWF0Y2hlZCBlbGVtZW50c1xuXHRcdFx0Ly8gTk9URTogVGhpcyBjYW4gYmUgc2tpcHBlZCBpZiB0aGVyZSBhcmUgbm8gdW5tYXRjaGVkIGVsZW1lbnRzIChpLmUuLCBgbWF0Y2hlZENvdW50YFxuXHRcdFx0Ly8gZXF1YWxzIGBpYCksIHVubGVzcyB3ZSBkaWRuJ3QgdmlzaXQgX2FueV8gZWxlbWVudHMgaW4gdGhlIGFib3ZlIGxvb3AgYmVjYXVzZSB3ZSBoYXZlXG5cdFx0XHQvLyBubyBlbGVtZW50IG1hdGNoZXJzIGFuZCBubyBzZWVkLlxuXHRcdFx0Ly8gSW5jcmVtZW50aW5nIGFuIGluaXRpYWxseS1zdHJpbmcgXCIwXCIgYGlgIGFsbG93cyBgaWAgdG8gcmVtYWluIGEgc3RyaW5nIG9ubHkgaW4gdGhhdFxuXHRcdFx0Ly8gY2FzZSwgd2hpY2ggd2lsbCByZXN1bHQgaW4gYSBcIjAwXCIgYG1hdGNoZWRDb3VudGAgdGhhdCBkaWZmZXJzIGZyb20gYGlgIGJ1dCBpcyBhbHNvXG5cdFx0XHQvLyBudW1lcmljYWxseSB6ZXJvLlxuXHRcdFx0aWYgKCBieVNldCAmJiBpICE9PSBtYXRjaGVkQ291bnQgKSB7XG5cdFx0XHRcdGogPSAwO1xuXHRcdFx0XHR3aGlsZSAoIChtYXRjaGVyID0gc2V0TWF0Y2hlcnNbaisrXSkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlciggdW5tYXRjaGVkLCBzZXRNYXRjaGVkLCBjb250ZXh0LCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggc2VlZCApIHtcblx0XHRcdFx0XHQvLyBSZWludGVncmF0ZSBlbGVtZW50IG1hdGNoZXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciBzb3J0aW5nXG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkQ291bnQgPiAwICkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggISh1bm1hdGNoZWRbaV0gfHwgc2V0TWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0TWF0Y2hlZFtpXSA9IHBvcC5jYWxsKCByZXN1bHRzICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBEaXNjYXJkIGluZGV4IHBsYWNlaG9sZGVyIHZhbHVlcyB0byBnZXQgb25seSBhY3R1YWwgbWF0Y2hlc1xuXHRcdFx0XHRcdHNldE1hdGNoZWQgPSBjb25kZW5zZSggc2V0TWF0Y2hlZCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWRkIG1hdGNoZXMgdG8gcmVzdWx0c1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZXRNYXRjaGVkICk7XG5cblx0XHRcdFx0Ly8gU2VlZGxlc3Mgc2V0IG1hdGNoZXMgc3VjY2VlZGluZyBtdWx0aXBsZSBzdWNjZXNzZnVsIG1hdGNoZXJzIHN0aXB1bGF0ZSBzb3J0aW5nXG5cdFx0XHRcdGlmICggb3V0ZXJtb3N0ICYmICFzZWVkICYmIHNldE1hdGNoZWQubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdCggbWF0Y2hlZENvdW50ICsgc2V0TWF0Y2hlcnMubGVuZ3RoICkgPiAxICkge1xuXG5cdFx0XHRcdFx0U2l6emxlLnVuaXF1ZVNvcnQoIHJlc3VsdHMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdmVycmlkZSBtYW5pcHVsYXRpb24gb2YgZ2xvYmFscyBieSBuZXN0ZWQgbWF0Y2hlcnNcblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHRCYWNrdXA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB1bm1hdGNoZWQ7XG5cdFx0fTtcblxuXHRyZXR1cm4gYnlTZXQgP1xuXHRcdG1hcmtGdW5jdGlvbiggc3VwZXJNYXRjaGVyICkgOlxuXHRcdHN1cGVyTWF0Y2hlcjtcbn1cblxuY29tcGlsZSA9IFNpenpsZS5jb21waWxlID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBtYXRjaCAvKiBJbnRlcm5hbCBVc2UgT25seSAqLyApIHtcblx0dmFyIGksXG5cdFx0c2V0TWF0Y2hlcnMgPSBbXSxcblx0XHRlbGVtZW50TWF0Y2hlcnMgPSBbXSxcblx0XHRjYWNoZWQgPSBjb21waWxlckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cblx0aWYgKCAhY2FjaGVkICkge1xuXHRcdC8vIEdlbmVyYXRlIGEgZnVuY3Rpb24gb2YgcmVjdXJzaXZlIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNoZWNrIGVhY2ggZWxlbWVudFxuXHRcdGlmICggIW1hdGNoICkge1xuXHRcdFx0bWF0Y2ggPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHR9XG5cdFx0aSA9IG1hdGNoLmxlbmd0aDtcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGNhY2hlZCA9IG1hdGNoZXJGcm9tVG9rZW5zKCBtYXRjaFtpXSApO1xuXHRcdFx0aWYgKCBjYWNoZWRbIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0c2V0TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FjaGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZSggc2VsZWN0b3IsIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApICk7XG5cblx0XHQvLyBTYXZlIHNlbGVjdG9yIGFuZCB0b2tlbml6YXRpb25cblx0XHRjYWNoZWQuc2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0fVxuXHRyZXR1cm4gY2FjaGVkO1xufTtcblxuLyoqXG4gKiBBIGxvdy1sZXZlbCBzZWxlY3Rpb24gZnVuY3Rpb24gdGhhdCB3b3JrcyB3aXRoIFNpenpsZSdzIGNvbXBpbGVkXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgQSBzZWxlY3RvciBvciBhIHByZS1jb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uIGJ1aWx0IHdpdGggU2l6emxlLmNvbXBpbGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdHNdXG4gKiBAcGFyYW0ge0FycmF5fSBbc2VlZF0gQSBzZXQgb2YgZWxlbWVudHMgdG8gbWF0Y2ggYWdhaW5zdFxuICovXG5zZWxlY3QgPSBTaXp6bGUuc2VsZWN0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuXHR2YXIgaSwgdG9rZW5zLCB0b2tlbiwgdHlwZSwgZmluZCxcblx0XHRjb21waWxlZCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiICYmIHNlbGVjdG9yLFxuXHRcdG1hdGNoID0gIXNlZWQgJiYgdG9rZW5pemUoIChzZWxlY3RvciA9IGNvbXBpbGVkLnNlbGVjdG9yIHx8IHNlbGVjdG9yKSApO1xuXG5cdHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXG5cdC8vIFRyeSB0byBtaW5pbWl6ZSBvcGVyYXRpb25zIGlmIHRoZXJlIGlzIG9ubHkgb25lIHNlbGVjdG9yIGluIHRoZSBsaXN0IGFuZCBubyBzZWVkXG5cdC8vICh0aGUgbGF0dGVyIG9mIHdoaWNoIGd1YXJhbnRlZXMgdXMgY29udGV4dClcblx0aWYgKCBtYXRjaC5sZW5ndGggPT09IDEgKSB7XG5cblx0XHQvLyBSZWR1Y2UgY29udGV4dCBpZiB0aGUgbGVhZGluZyBjb21wb3VuZCBzZWxlY3RvciBpcyBhbiBJRFxuXHRcdHRva2VucyA9IG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoIDAgKTtcblx0XHRpZiAoIHRva2Vucy5sZW5ndGggPiAyICYmICh0b2tlbiA9IHRva2Vuc1swXSkudHlwZSA9PT0gXCJJRFwiICYmXG5cdFx0XHRcdGNvbnRleHQubm9kZVR5cGUgPT09IDkgJiYgZG9jdW1lbnRJc0hUTUwgJiYgRXhwci5yZWxhdGl2ZVsgdG9rZW5zWzFdLnR5cGUgXSApIHtcblxuXHRcdFx0Y29udGV4dCA9ICggRXhwci5maW5kW1wiSURcIl0oIHRva2VuLm1hdGNoZXNbMF0ucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSksIGNvbnRleHQgKSB8fCBbXSApWzBdO1xuXHRcdFx0aWYgKCAhY29udGV4dCApIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cblx0XHRcdC8vIFByZWNvbXBpbGVkIG1hdGNoZXJzIHdpbGwgc3RpbGwgdmVyaWZ5IGFuY2VzdHJ5LCBzbyBzdGVwIHVwIGEgbGV2ZWxcblx0XHRcdH0gZWxzZSBpZiAoIGNvbXBpbGVkICkge1xuXHRcdFx0XHRjb250ZXh0ID0gY29udGV4dC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKCB0b2tlbnMuc2hpZnQoKS52YWx1ZS5sZW5ndGggKTtcblx0XHR9XG5cblx0XHQvLyBGZXRjaCBhIHNlZWQgc2V0IGZvciByaWdodC10by1sZWZ0IG1hdGNoaW5nXG5cdFx0aSA9IG1hdGNoRXhwcltcIm5lZWRzQ29udGV4dFwiXS50ZXN0KCBzZWxlY3RvciApID8gMCA6IHRva2Vucy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR0b2tlbiA9IHRva2Vuc1tpXTtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgd2UgaGl0IGEgY29tYmluYXRvclxuXHRcdFx0aWYgKCBFeHByLnJlbGF0aXZlWyAodHlwZSA9IHRva2VuLnR5cGUpIF0gKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAoZmluZCA9IEV4cHIuZmluZFsgdHlwZSBdKSApIHtcblx0XHRcdFx0Ly8gU2VhcmNoLCBleHBhbmRpbmcgY29udGV4dCBmb3IgbGVhZGluZyBzaWJsaW5nIGNvbWJpbmF0b3JzXG5cdFx0XHRcdGlmICggKHNlZWQgPSBmaW5kKFxuXHRcdFx0XHRcdHRva2VuLm1hdGNoZXNbMF0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKSxcblx0XHRcdFx0XHRyc2libGluZy50ZXN0KCB0b2tlbnNbMF0udHlwZSApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fCBjb250ZXh0XG5cdFx0XHRcdCkpICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgc2VlZCBpcyBlbXB0eSBvciBubyB0b2tlbnMgcmVtYWluLCB3ZSBjYW4gcmV0dXJuIGVhcmx5XG5cdFx0XHRcdFx0dG9rZW5zLnNwbGljZSggaSwgMSApO1xuXHRcdFx0XHRcdHNlbGVjdG9yID0gc2VlZC5sZW5ndGggJiYgdG9TZWxlY3RvciggdG9rZW5zICk7XG5cdFx0XHRcdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZWVkICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIENvbXBpbGUgYW5kIGV4ZWN1dGUgYSBmaWx0ZXJpbmcgZnVuY3Rpb24gaWYgb25lIGlzIG5vdCBwcm92aWRlZFxuXHQvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG5cdCggY29tcGlsZWQgfHwgY29tcGlsZSggc2VsZWN0b3IsIG1hdGNoICkgKShcblx0XHRzZWVkLFxuXHRcdGNvbnRleHQsXG5cdFx0IWRvY3VtZW50SXNIVE1MLFxuXHRcdHJlc3VsdHMsXG5cdFx0IWNvbnRleHQgfHwgcnNpYmxpbmcudGVzdCggc2VsZWN0b3IgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHQpO1xuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbi8vIE9uZS10aW1lIGFzc2lnbm1lbnRzXG5cbi8vIFNvcnQgc3RhYmlsaXR5XG5zdXBwb3J0LnNvcnRTdGFibGUgPSBleHBhbmRvLnNwbGl0KFwiXCIpLnNvcnQoIHNvcnRPcmRlciApLmpvaW4oXCJcIikgPT09IGV4cGFuZG87XG5cbi8vIFN1cHBvcnQ6IENocm9tZSAxNC0zNStcbi8vIEFsd2F5cyBhc3N1bWUgZHVwbGljYXRlcyBpZiB0aGV5IGFyZW4ndCBwYXNzZWQgdG8gdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbnN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcyA9ICEhaGFzRHVwbGljYXRlO1xuXG4vLyBJbml0aWFsaXplIGFnYWluc3QgdGhlIGRlZmF1bHQgZG9jdW1lbnRcbnNldERvY3VtZW50KCk7XG5cbi8vIFN1cHBvcnQ6IFdlYmtpdDw1MzcuMzIgLSBTYWZhcmkgNi4wLjMvQ2hyb21lIDI1IChmaXhlZCBpbiBDaHJvbWUgMjcpXG4vLyBEZXRhY2hlZCBub2RlcyBjb25mb3VuZGluZ2x5IGZvbGxvdyAqZWFjaCBvdGhlcipcbnN1cHBvcnQuc29ydERldGFjaGVkID0gYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0Ly8gU2hvdWxkIHJldHVybiAxLCBidXQgcmV0dXJucyA0IChmb2xsb3dpbmcpXG5cdHJldHVybiBlbC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpICkgJiAxO1xufSk7XG5cbi8vIFN1cHBvcnQ6IElFPDhcbi8vIFByZXZlbnQgYXR0cmlidXRlL3Byb3BlcnR5IFwiaW50ZXJwb2xhdGlvblwiXG4vLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM2NDI5JTI4VlMuODUlMjkuYXNweFxuaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0ZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScjJz48L2E+XCI7XG5cdHJldHVybiBlbC5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT09IFwiI1wiIDtcbn0pICkge1xuXHRhZGRIYW5kbGUoIFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0aWYgKCAhaXNYTUwgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUsIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0eXBlXCIgPyAxIDogMiApO1xuXHRcdH1cblx0fSk7XG59XG5cbi8vIFN1cHBvcnQ6IElFPDlcbi8vIFVzZSBkZWZhdWx0VmFsdWUgaW4gcGxhY2Ugb2YgZ2V0QXR0cmlidXRlKFwidmFsdWVcIilcbmlmICggIXN1cHBvcnQuYXR0cmlidXRlcyB8fCAhYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0ZWwuaW5uZXJIVE1MID0gXCI8aW5wdXQvPlwiO1xuXHRlbC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiLCBcIlwiICk7XG5cdHJldHVybiBlbC5maXJzdENoaWxkLmdldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgPT09IFwiXCI7XG59KSApIHtcblx0YWRkSGFuZGxlKCBcInZhbHVlXCIsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcblx0XHRpZiAoICFpc1hNTCAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiApIHtcblx0XHRcdHJldHVybiBlbGVtLmRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdH0pO1xufVxuXG4vLyBTdXBwb3J0OiBJRTw5XG4vLyBVc2UgZ2V0QXR0cmlidXRlTm9kZSB0byBmZXRjaCBib29sZWFucyB3aGVuIGdldEF0dHJpYnV0ZSBsaWVzXG5pZiAoICFhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRyZXR1cm4gZWwuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbDtcbn0pICkge1xuXHRhZGRIYW5kbGUoIGJvb2xlYW5zLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0dmFyIHZhbDtcblx0XHRpZiAoICFpc1hNTCApIHtcblx0XHRcdHJldHVybiBlbGVtWyBuYW1lIF0gPT09IHRydWUgPyBuYW1lLnRvTG93ZXJDYXNlKCkgOlxuXHRcdFx0XHRcdCh2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoIG5hbWUgKSkgJiYgdmFsLnNwZWNpZmllZCA/XG5cdFx0XHRcdFx0dmFsLnZhbHVlIDpcblx0XHRcdFx0bnVsbDtcblx0XHR9XG5cdH0pO1xufVxuXG5yZXR1cm4gU2l6emxlO1xuXG59KSggd2luZG93ICk7XG5cblxuXG5qUXVlcnkuZmluZCA9IFNpenpsZTtcbmpRdWVyeS5leHByID0gU2l6emxlLnNlbGVjdG9ycztcblxuLy8gRGVwcmVjYXRlZFxualF1ZXJ5LmV4cHJbIFwiOlwiIF0gPSBqUXVlcnkuZXhwci5wc2V1ZG9zO1xualF1ZXJ5LnVuaXF1ZVNvcnQgPSBqUXVlcnkudW5pcXVlID0gU2l6emxlLnVuaXF1ZVNvcnQ7XG5qUXVlcnkudGV4dCA9IFNpenpsZS5nZXRUZXh0O1xualF1ZXJ5LmlzWE1MRG9jID0gU2l6emxlLmlzWE1MO1xualF1ZXJ5LmNvbnRhaW5zID0gU2l6emxlLmNvbnRhaW5zO1xualF1ZXJ5LmVzY2FwZVNlbGVjdG9yID0gU2l6emxlLmVzY2FwZTtcblxuXG5cblxudmFyIGRpciA9IGZ1bmN0aW9uKCBlbGVtLCBkaXIsIHVudGlsICkge1xuXHR2YXIgbWF0Y2hlZCA9IFtdLFxuXHRcdHRydW5jYXRlID0gdW50aWwgIT09IHVuZGVmaW5lZDtcblxuXHR3aGlsZSAoICggZWxlbSA9IGVsZW1bIGRpciBdICkgJiYgZWxlbS5ub2RlVHlwZSAhPT0gOSApIHtcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRpZiAoIHRydW5jYXRlICYmIGpRdWVyeSggZWxlbSApLmlzKCB1bnRpbCApICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdG1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbWF0Y2hlZDtcbn07XG5cblxudmFyIHNpYmxpbmdzID0gZnVuY3Rpb24oIG4sIGVsZW0gKSB7XG5cdHZhciBtYXRjaGVkID0gW107XG5cblx0Zm9yICggOyBuOyBuID0gbi5uZXh0U2libGluZyApIHtcblx0XHRpZiAoIG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gZWxlbSApIHtcblx0XHRcdG1hdGNoZWQucHVzaCggbiApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBtYXRjaGVkO1xufTtcblxuXG52YXIgcm5lZWRzQ29udGV4dCA9IGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtcblxuXG5cbmZ1bmN0aW9uIG5vZGVOYW1lKCBlbGVtLCBuYW1lICkge1xuXG4gIHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG59O1xudmFyIHJzaW5nbGVUYWcgPSAoIC9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pICk7XG5cblxuXG4vLyBJbXBsZW1lbnQgdGhlIGlkZW50aWNhbCBmdW5jdGlvbmFsaXR5IGZvciBmaWx0ZXIgYW5kIG5vdFxuZnVuY3Rpb24gd2lubm93KCBlbGVtZW50cywgcXVhbGlmaWVyLCBub3QgKSB7XG5cdGlmICggaXNGdW5jdGlvbiggcXVhbGlmaWVyICkgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gISFxdWFsaWZpZXIuY2FsbCggZWxlbSwgaSwgZWxlbSApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gU2luZ2xlIGVsZW1lbnRcblx0aWYgKCBxdWFsaWZpZXIubm9kZVR5cGUgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCBlbGVtID09PSBxdWFsaWZpZXIgKSAhPT0gbm90O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIEFycmF5bGlrZSBvZiBlbGVtZW50cyAoalF1ZXJ5LCBhcmd1bWVudHMsIEFycmF5KVxuXHRpZiAoIHR5cGVvZiBxdWFsaWZpZXIgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCBpbmRleE9mLmNhbGwoIHF1YWxpZmllciwgZWxlbSApID4gLTEgKSAhPT0gbm90O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIEZpbHRlcmVkIGRpcmVjdGx5IGZvciBib3RoIHNpbXBsZSBhbmQgY29tcGxleCBzZWxlY3RvcnNcblx0cmV0dXJuIGpRdWVyeS5maWx0ZXIoIHF1YWxpZmllciwgZWxlbWVudHMsIG5vdCApO1xufVxuXG5qUXVlcnkuZmlsdGVyID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1zLCBub3QgKSB7XG5cdHZhciBlbGVtID0gZWxlbXNbIDAgXTtcblxuXHRpZiAoIG5vdCApIHtcblx0XHRleHByID0gXCI6bm90KFwiICsgZXhwciArIFwiKVwiO1xuXHR9XG5cblx0aWYgKCBlbGVtcy5sZW5ndGggPT09IDEgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBleHByICkgPyBbIGVsZW0gXSA6IFtdO1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXMoIGV4cHIsIGpRdWVyeS5ncmVwKCBlbGVtcywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGVsZW0ubm9kZVR5cGUgPT09IDE7XG5cdH0gKSApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRmaW5kOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGksIHJldCxcblx0XHRcdGxlbiA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0c2VsZiA9IHRoaXM7XG5cblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5KCBzZWxlY3RvciApLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHNlbGZbIGkgXSwgdGhpcyApICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICkgKTtcblx0XHR9XG5cblx0XHRyZXQgPSB0aGlzLnB1c2hTdGFjayggW10gKTtcblxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRqUXVlcnkuZmluZCggc2VsZWN0b3IsIHNlbGZbIGkgXSwgcmV0ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxlbiA+IDEgPyBqUXVlcnkudW5pcXVlU29ydCggcmV0ICkgOiByZXQ7XG5cdH0sXG5cdGZpbHRlcjogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgZmFsc2UgKSApO1xuXHR9LFxuXHRub3Q6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHdpbm5vdyggdGhpcywgc2VsZWN0b3IgfHwgW10sIHRydWUgKSApO1xuXHR9LFxuXHRpczogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiAhIXdpbm5vdyhcblx0XHRcdHRoaXMsXG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSBwb3NpdGlvbmFsL3JlbGF0aXZlIHNlbGVjdG9yLCBjaGVjayBtZW1iZXJzaGlwIGluIHRoZSByZXR1cm5lZCBzZXRcblx0XHRcdC8vIHNvICQoXCJwOmZpcnN0XCIpLmlzKFwicDpsYXN0XCIpIHdvbid0IHJldHVybiB0cnVlIGZvciBhIGRvYyB3aXRoIHR3byBcInBcIi5cblx0XHRcdHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiAmJiBybmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICkgP1xuXHRcdFx0XHRqUXVlcnkoIHNlbGVjdG9yICkgOlxuXHRcdFx0XHRzZWxlY3RvciB8fCBbXSxcblx0XHRcdGZhbHNlXG5cdFx0KS5sZW5ndGg7XG5cdH1cbn0gKTtcblxuXG4vLyBJbml0aWFsaXplIGEgalF1ZXJ5IG9iamVjdFxuXG5cbi8vIEEgY2VudHJhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgalF1ZXJ5KGRvY3VtZW50KVxudmFyIHJvb3RqUXVlcnksXG5cblx0Ly8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3Ncblx0Ly8gUHJpb3JpdGl6ZSAjaWQgb3ZlciA8dGFnPiB0byBhdm9pZCBYU1MgdmlhIGxvY2F0aW9uLmhhc2ggKCM5NTIxKVxuXHQvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAoIzExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcblx0Ly8gU2hvcnRjdXQgc2ltcGxlICNpZCBjYXNlIGZvciBzcGVlZFxuXHRycXVpY2tFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sXG5cblx0aW5pdCA9IGpRdWVyeS5mbi5pbml0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0LCByb290ICkge1xuXHRcdHZhciBtYXRjaCwgZWxlbTtcblxuXHRcdC8vIEhBTkRMRTogJChcIlwiKSwgJChudWxsKSwgJCh1bmRlZmluZWQpLCAkKGZhbHNlKVxuXHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Ly8gTWV0aG9kIGluaXQoKSBhY2NlcHRzIGFuIGFsdGVybmF0ZSByb290alF1ZXJ5XG5cdFx0Ly8gc28gbWlncmF0ZSBjYW4gc3VwcG9ydCBqUXVlcnkuc3ViIChnaC0yMTAxKVxuXHRcdHJvb3QgPSByb290IHx8IHJvb3RqUXVlcnk7XG5cblx0XHQvLyBIYW5kbGUgSFRNTCBzdHJpbmdzXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRpZiAoIHNlbGVjdG9yWyAwIF0gPT09IFwiPFwiICYmXG5cdFx0XHRcdHNlbGVjdG9yWyBzZWxlY3Rvci5sZW5ndGggLSAxIF0gPT09IFwiPlwiICYmXG5cdFx0XHRcdHNlbGVjdG9yLmxlbmd0aCA+PSAzICkge1xuXG5cdFx0XHRcdC8vIEFzc3VtZSB0aGF0IHN0cmluZ3MgdGhhdCBzdGFydCBhbmQgZW5kIHdpdGggPD4gYXJlIEhUTUwgYW5kIHNraXAgdGhlIHJlZ2V4IGNoZWNrXG5cdFx0XHRcdG1hdGNoID0gWyBudWxsLCBzZWxlY3RvciwgbnVsbCBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyggc2VsZWN0b3IgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWF0Y2ggaHRtbCBvciBtYWtlIHN1cmUgbm8gY29udGV4dCBpcyBzcGVjaWZpZWQgZm9yICNpZFxuXHRcdFx0aWYgKCBtYXRjaCAmJiAoIG1hdGNoWyAxIF0gfHwgIWNvbnRleHQgKSApIHtcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCkgLT4gJChhcnJheSlcblx0XHRcdFx0aWYgKCBtYXRjaFsgMSBdICkge1xuXHRcdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGV4dFsgMCBdIDogY29udGV4dDtcblxuXHRcdFx0XHRcdC8vIE9wdGlvbiB0byBydW4gc2NyaXB0cyBpcyB0cnVlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRcdC8vIEludGVudGlvbmFsbHkgbGV0IHRoZSBlcnJvciBiZSB0aHJvd24gaWYgcGFyc2VIVE1MIGlzIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLCBqUXVlcnkucGFyc2VIVE1MKFxuXHRcdFx0XHRcdFx0bWF0Y2hbIDEgXSxcblx0XHRcdFx0XHRcdGNvbnRleHQgJiYgY29udGV4dC5ub2RlVHlwZSA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogZG9jdW1lbnQsXG5cdFx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdFx0KSApO1xuXG5cdFx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwsIHByb3BzKVxuXHRcdFx0XHRcdGlmICggcnNpbmdsZVRhZy50ZXN0KCBtYXRjaFsgMSBdICkgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvbnRleHQgKSApIHtcblx0XHRcdFx0XHRcdGZvciAoIG1hdGNoIGluIGNvbnRleHQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUHJvcGVydGllcyBvZiBjb250ZXh0IGFyZSBjYWxsZWQgYXMgbWV0aG9kcyBpZiBwb3NzaWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIGlzRnVuY3Rpb24oIHRoaXNbIG1hdGNoIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzWyBtYXRjaCBdKCBjb250ZXh0WyBtYXRjaCBdICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIG90aGVyd2lzZSBzZXQgYXMgYXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYXR0ciggbWF0Y2gsIGNvbnRleHRbIG1hdGNoIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJCgjaWQpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBtYXRjaFsgMiBdICk7XG5cblx0XHRcdFx0XHRpZiAoIGVsZW0gKSB7XG5cblx0XHRcdFx0XHRcdC8vIEluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XG5cdFx0XHRcdFx0XHR0aGlzWyAwIF0gPSBlbGVtO1xuXHRcdFx0XHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgJCguLi4pKVxuXHRcdFx0fSBlbHNlIGlmICggIWNvbnRleHQgfHwgY29udGV4dC5qcXVlcnkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGNvbnRleHQgfHwgcm9vdCApLmZpbmQoIHNlbGVjdG9yICk7XG5cblx0XHRcdC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuXHRcdFx0Ly8gKHdoaWNoIGlzIGp1c3QgZXF1aXZhbGVudCB0bzogJChjb250ZXh0KS5maW5kKGV4cHIpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvciggY29udGV4dCApLmZpbmQoIHNlbGVjdG9yICk7XG5cdFx0XHR9XG5cblx0XHQvLyBIQU5ETEU6ICQoRE9NRWxlbWVudClcblx0XHR9IGVsc2UgaWYgKCBzZWxlY3Rvci5ub2RlVHlwZSApIHtcblx0XHRcdHRoaXNbIDAgXSA9IHNlbGVjdG9yO1xuXHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHQvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXG5cdFx0Ly8gU2hvcnRjdXQgZm9yIGRvY3VtZW50IHJlYWR5XG5cdFx0fSBlbHNlIGlmICggaXNGdW5jdGlvbiggc2VsZWN0b3IgKSApIHtcblx0XHRcdHJldHVybiByb290LnJlYWR5ICE9PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRyb290LnJlYWR5KCBzZWxlY3RvciApIDpcblxuXHRcdFx0XHQvLyBFeGVjdXRlIGltbWVkaWF0ZWx5IGlmIHJlYWR5IGlzIG5vdCBwcmVzZW50XG5cdFx0XHRcdHNlbGVjdG9yKCBqUXVlcnkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4galF1ZXJ5Lm1ha2VBcnJheSggc2VsZWN0b3IsIHRoaXMgKTtcblx0fTtcblxuLy8gR2l2ZSB0aGUgaW5pdCBmdW5jdGlvbiB0aGUgalF1ZXJ5IHByb3RvdHlwZSBmb3IgbGF0ZXIgaW5zdGFudGlhdGlvblxuaW5pdC5wcm90b3R5cGUgPSBqUXVlcnkuZm47XG5cbi8vIEluaXRpYWxpemUgY2VudHJhbCByZWZlcmVuY2VcbnJvb3RqUXVlcnkgPSBqUXVlcnkoIGRvY3VtZW50ICk7XG5cblxudmFyIHJwYXJlbnRzcHJldiA9IC9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLFxuXG5cdC8vIE1ldGhvZHMgZ3VhcmFudGVlZCB0byBwcm9kdWNlIGEgdW5pcXVlIHNldCB3aGVuIHN0YXJ0aW5nIGZyb20gYSB1bmlxdWUgc2V0XG5cdGd1YXJhbnRlZWRVbmlxdWUgPSB7XG5cdFx0Y2hpbGRyZW46IHRydWUsXG5cdFx0Y29udGVudHM6IHRydWUsXG5cdFx0bmV4dDogdHJ1ZSxcblx0XHRwcmV2OiB0cnVlXG5cdH07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0aGFzOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdHZhciB0YXJnZXRzID0galF1ZXJ5KCB0YXJnZXQsIHRoaXMgKSxcblx0XHRcdGwgPSB0YXJnZXRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB0aGlzLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGlmICggalF1ZXJ5LmNvbnRhaW5zKCB0aGlzLCB0YXJnZXRzWyBpIF0gKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRjbG9zZXN0OiBmdW5jdGlvbiggc2VsZWN0b3JzLCBjb250ZXh0ICkge1xuXHRcdHZhciBjdXIsXG5cdFx0XHRpID0gMCxcblx0XHRcdGwgPSB0aGlzLmxlbmd0aCxcblx0XHRcdG1hdGNoZWQgPSBbXSxcblx0XHRcdHRhcmdldHMgPSB0eXBlb2Ygc2VsZWN0b3JzICE9PSBcInN0cmluZ1wiICYmIGpRdWVyeSggc2VsZWN0b3JzICk7XG5cblx0XHQvLyBQb3NpdGlvbmFsIHNlbGVjdG9ycyBuZXZlciBtYXRjaCwgc2luY2UgdGhlcmUncyBubyBfc2VsZWN0aW9uXyBjb250ZXh0XG5cdFx0aWYgKCAhcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvcnMgKSApIHtcblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0Zm9yICggY3VyID0gdGhpc1sgaSBdOyBjdXIgJiYgY3VyICE9PSBjb250ZXh0OyBjdXIgPSBjdXIucGFyZW50Tm9kZSApIHtcblxuXHRcdFx0XHRcdC8vIEFsd2F5cyBza2lwIGRvY3VtZW50IGZyYWdtZW50c1xuXHRcdFx0XHRcdGlmICggY3VyLm5vZGVUeXBlIDwgMTEgJiYgKCB0YXJnZXRzID9cblx0XHRcdFx0XHRcdHRhcmdldHMuaW5kZXgoIGN1ciApID4gLTEgOlxuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBwYXNzIG5vbi1lbGVtZW50cyB0byBTaXp6bGVcblx0XHRcdFx0XHRcdGN1ci5ub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0XHRcdFx0XHRqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGN1ciwgc2VsZWN0b3JzICkgKSApIHtcblxuXHRcdFx0XHRcdFx0bWF0Y2hlZC5wdXNoKCBjdXIgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggbWF0Y2hlZC5sZW5ndGggPiAxID8galF1ZXJ5LnVuaXF1ZVNvcnQoIG1hdGNoZWQgKSA6IG1hdGNoZWQgKTtcblx0fSxcblxuXHQvLyBEZXRlcm1pbmUgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgd2l0aGluIHRoZSBzZXRcblx0aW5kZXg6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0Ly8gTm8gYXJndW1lbnQsIHJldHVybiBpbmRleCBpbiBwYXJlbnRcblx0XHRpZiAoICFlbGVtICkge1xuXHRcdFx0cmV0dXJuICggdGhpc1sgMCBdICYmIHRoaXNbIDAgXS5wYXJlbnROb2RlICkgPyB0aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aCA6IC0xO1xuXHRcdH1cblxuXHRcdC8vIEluZGV4IGluIHNlbGVjdG9yXG5cdFx0aWYgKCB0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiBpbmRleE9mLmNhbGwoIGpRdWVyeSggZWxlbSApLCB0aGlzWyAwIF0gKTtcblx0XHR9XG5cblx0XHQvLyBMb2NhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBkZXNpcmVkIGVsZW1lbnRcblx0XHRyZXR1cm4gaW5kZXhPZi5jYWxsKCB0aGlzLFxuXG5cdFx0XHQvLyBJZiBpdCByZWNlaXZlcyBhIGpRdWVyeSBvYmplY3QsIHRoZSBmaXJzdCBlbGVtZW50IGlzIHVzZWRcblx0XHRcdGVsZW0uanF1ZXJ5ID8gZWxlbVsgMCBdIDogZWxlbVxuXHRcdCk7XG5cdH0sXG5cblx0YWRkOiBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKFxuXHRcdFx0alF1ZXJ5LnVuaXF1ZVNvcnQoXG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggdGhpcy5nZXQoKSwgalF1ZXJ5KCBzZWxlY3RvciwgY29udGV4dCApIClcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXG5cdGFkZEJhY2s6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5hZGQoIHNlbGVjdG9yID09IG51bGwgP1xuXHRcdFx0dGhpcy5wcmV2T2JqZWN0IDogdGhpcy5wcmV2T2JqZWN0LmZpbHRlciggc2VsZWN0b3IgKVxuXHRcdCk7XG5cdH1cbn0gKTtcblxuZnVuY3Rpb24gc2libGluZyggY3VyLCBkaXIgKSB7XG5cdHdoaWxlICggKCBjdXIgPSBjdXJbIGRpciBdICkgJiYgY3VyLm5vZGVUeXBlICE9PSAxICkge31cblx0cmV0dXJuIGN1cjtcbn1cblxualF1ZXJ5LmVhY2goIHtcblx0cGFyZW50OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdHJldHVybiBwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSAxMSA/IHBhcmVudCA6IG51bGw7XG5cdH0sXG5cdHBhcmVudHM6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicGFyZW50Tm9kZVwiICk7XG5cdH0sXG5cdHBhcmVudHNVbnRpbDogZnVuY3Rpb24oIGVsZW0sIGksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicGFyZW50Tm9kZVwiLCB1bnRpbCApO1xuXHR9LFxuXHRuZXh0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XG5cdH0sXG5cdHByZXY6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5nKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRVbnRpbDogZnVuY3Rpb24oIGVsZW0sIGksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiwgdW50aWwgKTtcblx0fSxcblx0cHJldlVudGlsOiBmdW5jdGlvbiggZWxlbSwgaSwgdW50aWwgKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiwgdW50aWwgKTtcblx0fSxcblx0c2libGluZ3M6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5ncyggKCBlbGVtLnBhcmVudE5vZGUgfHwge30gKS5maXJzdENoaWxkLCBlbGVtICk7XG5cdH0sXG5cdGNoaWxkcmVuOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZ3MoIGVsZW0uZmlyc3RDaGlsZCApO1xuXHR9LFxuXHRjb250ZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0aWYgKCB0eXBlb2YgZWxlbS5jb250ZW50RG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5jb250ZW50RG9jdW1lbnQ7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHksIGlPUyA3IG9ubHksIEFuZHJvaWQgQnJvd3NlciA8PTQuMyBvbmx5XG5cdFx0Ly8gVHJlYXQgdGhlIHRlbXBsYXRlIGVsZW1lbnQgYXMgYSByZWd1bGFyIG9uZSBpbiBicm93c2VycyB0aGF0XG5cdFx0Ly8gZG9uJ3Qgc3VwcG9ydCBpdC5cblx0XHRpZiAoIG5vZGVOYW1lKCBlbGVtLCBcInRlbXBsYXRlXCIgKSApIHtcblx0XHRcdGVsZW0gPSBlbGVtLmNvbnRlbnQgfHwgZWxlbTtcblx0XHR9XG5cblx0XHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbXSwgZWxlbS5jaGlsZE5vZGVzICk7XG5cdH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBmbiApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggdW50aWwsIHNlbGVjdG9yICkge1xuXHRcdHZhciBtYXRjaGVkID0galF1ZXJ5Lm1hcCggdGhpcywgZm4sIHVudGlsICk7XG5cblx0XHRpZiAoIG5hbWUuc2xpY2UoIC01ICkgIT09IFwiVW50aWxcIiApIHtcblx0XHRcdHNlbGVjdG9yID0gdW50aWw7XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWxlY3RvciAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRtYXRjaGVkID0galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIG1hdGNoZWQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZXNcblx0XHRcdGlmICggIWd1YXJhbnRlZWRVbmlxdWVbIG5hbWUgXSApIHtcblx0XHRcdFx0alF1ZXJ5LnVuaXF1ZVNvcnQoIG1hdGNoZWQgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV2ZXJzZSBvcmRlciBmb3IgcGFyZW50cyogYW5kIHByZXYtZGVyaXZhdGl2ZXNcblx0XHRcdGlmICggcnBhcmVudHNwcmV2LnRlc3QoIG5hbWUgKSApIHtcblx0XHRcdFx0bWF0Y2hlZC5yZXZlcnNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkICk7XG5cdH07XG59ICk7XG52YXIgcm5vdGh0bWx3aGl0ZSA9ICggL1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nICk7XG5cblxuXG4vLyBDb252ZXJ0IFN0cmluZy1mb3JtYXR0ZWQgb3B0aW9ucyBpbnRvIE9iamVjdC1mb3JtYXR0ZWQgb25lc1xuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIHtcblx0dmFyIG9iamVjdCA9IHt9O1xuXHRqUXVlcnkuZWFjaCggb3B0aW9ucy5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdLCBmdW5jdGlvbiggXywgZmxhZyApIHtcblx0XHRvYmplY3RbIGZsYWcgXSA9IHRydWU7XG5cdH0gKTtcblx0cmV0dXJuIG9iamVjdDtcbn1cblxuLypcbiAqIENyZWF0ZSBhIGNhbGxiYWNrIGxpc3QgdXNpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICpcbiAqXHRvcHRpb25zOiBhbiBvcHRpb25hbCBsaXN0IG9mIHNwYWNlLXNlcGFyYXRlZCBvcHRpb25zIHRoYXQgd2lsbCBjaGFuZ2UgaG93XG4gKlx0XHRcdHRoZSBjYWxsYmFjayBsaXN0IGJlaGF2ZXMgb3IgYSBtb3JlIHRyYWRpdGlvbmFsIG9wdGlvbiBvYmplY3RcbiAqXG4gKiBCeSBkZWZhdWx0IGEgY2FsbGJhY2sgbGlzdCB3aWxsIGFjdCBsaWtlIGFuIGV2ZW50IGNhbGxiYWNrIGxpc3QgYW5kIGNhbiBiZVxuICogXCJmaXJlZFwiIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFBvc3NpYmxlIG9wdGlvbnM6XG4gKlxuICpcdG9uY2U6XHRcdFx0d2lsbCBlbnN1cmUgdGhlIGNhbGxiYWNrIGxpc3QgY2FuIG9ubHkgYmUgZmlyZWQgb25jZSAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHRtZW1vcnk6XHRcdFx0d2lsbCBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHZhbHVlcyBhbmQgd2lsbCBjYWxsIGFueSBjYWxsYmFjayBhZGRlZFxuICpcdFx0XHRcdFx0YWZ0ZXIgdGhlIGxpc3QgaGFzIGJlZW4gZmlyZWQgcmlnaHQgYXdheSB3aXRoIHRoZSBsYXRlc3QgXCJtZW1vcml6ZWRcIlxuICpcdFx0XHRcdFx0dmFsdWVzIChsaWtlIGEgRGVmZXJyZWQpXG4gKlxuICpcdHVuaXF1ZTpcdFx0XHR3aWxsIGVuc3VyZSBhIGNhbGxiYWNrIGNhbiBvbmx5IGJlIGFkZGVkIG9uY2UgKG5vIGR1cGxpY2F0ZSBpbiB0aGUgbGlzdClcbiAqXG4gKlx0c3RvcE9uRmFsc2U6XHRpbnRlcnJ1cHQgY2FsbGluZ3Mgd2hlbiBhIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAqXG4gKi9cbmpRdWVyeS5DYWxsYmFja3MgPSBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHQvLyBDb252ZXJ0IG9wdGlvbnMgZnJvbSBTdHJpbmctZm9ybWF0dGVkIHRvIE9iamVjdC1mb3JtYXR0ZWQgaWYgbmVlZGVkXG5cdC8vICh3ZSBjaGVjayBpbiBjYWNoZSBmaXJzdClcblx0b3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiID9cblx0XHRjcmVhdGVPcHRpb25zKCBvcHRpb25zICkgOlxuXHRcdGpRdWVyeS5leHRlbmQoIHt9LCBvcHRpb25zICk7XG5cblx0dmFyIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcblx0XHRmaXJpbmcsXG5cblx0XHQvLyBMYXN0IGZpcmUgdmFsdWUgZm9yIG5vbi1mb3JnZXR0YWJsZSBsaXN0c1xuXHRcdG1lbW9yeSxcblxuXHRcdC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IHdhcyBhbHJlYWR5IGZpcmVkXG5cdFx0ZmlyZWQsXG5cblx0XHQvLyBGbGFnIHRvIHByZXZlbnQgZmlyaW5nXG5cdFx0bG9ja2VkLFxuXG5cdFx0Ly8gQWN0dWFsIGNhbGxiYWNrIGxpc3Rcblx0XHRsaXN0ID0gW10sXG5cblx0XHQvLyBRdWV1ZSBvZiBleGVjdXRpb24gZGF0YSBmb3IgcmVwZWF0YWJsZSBsaXN0c1xuXHRcdHF1ZXVlID0gW10sXG5cblx0XHQvLyBJbmRleCBvZiBjdXJyZW50bHkgZmlyaW5nIGNhbGxiYWNrIChtb2RpZmllZCBieSBhZGQvcmVtb3ZlIGFzIG5lZWRlZClcblx0XHRmaXJpbmdJbmRleCA9IC0xLFxuXG5cdFx0Ly8gRmlyZSBjYWxsYmFja3Ncblx0XHRmaXJlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEVuZm9yY2Ugc2luZ2xlLWZpcmluZ1xuXHRcdFx0bG9ja2VkID0gbG9ja2VkIHx8IG9wdGlvbnMub25jZTtcblxuXHRcdFx0Ly8gRXhlY3V0ZSBjYWxsYmFja3MgZm9yIGFsbCBwZW5kaW5nIGV4ZWN1dGlvbnMsXG5cdFx0XHQvLyByZXNwZWN0aW5nIGZpcmluZ0luZGV4IG92ZXJyaWRlcyBhbmQgcnVudGltZSBjaGFuZ2VzXG5cdFx0XHRmaXJlZCA9IGZpcmluZyA9IHRydWU7XG5cdFx0XHRmb3IgKCA7IHF1ZXVlLmxlbmd0aDsgZmlyaW5nSW5kZXggPSAtMSApIHtcblx0XHRcdFx0bWVtb3J5ID0gcXVldWUuc2hpZnQoKTtcblx0XHRcdFx0d2hpbGUgKCArK2ZpcmluZ0luZGV4IDwgbGlzdC5sZW5ndGggKSB7XG5cblx0XHRcdFx0XHQvLyBSdW4gY2FsbGJhY2sgYW5kIGNoZWNrIGZvciBlYXJseSB0ZXJtaW5hdGlvblxuXHRcdFx0XHRcdGlmICggbGlzdFsgZmlyaW5nSW5kZXggXS5hcHBseSggbWVtb3J5WyAwIF0sIG1lbW9yeVsgMSBdICkgPT09IGZhbHNlICYmXG5cdFx0XHRcdFx0XHRvcHRpb25zLnN0b3BPbkZhbHNlICkge1xuXG5cdFx0XHRcdFx0XHQvLyBKdW1wIHRvIGVuZCBhbmQgZm9yZ2V0IHRoZSBkYXRhIHNvIC5hZGQgZG9lc24ndCByZS1maXJlXG5cdFx0XHRcdFx0XHRmaXJpbmdJbmRleCA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvcmdldCB0aGUgZGF0YSBpZiB3ZSdyZSBkb25lIHdpdGggaXRcblx0XHRcdGlmICggIW9wdGlvbnMubWVtb3J5ICkge1xuXHRcdFx0XHRtZW1vcnkgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0ZmlyaW5nID0gZmFsc2U7XG5cblx0XHRcdC8vIENsZWFuIHVwIGlmIHdlJ3JlIGRvbmUgZmlyaW5nIGZvciBnb29kXG5cdFx0XHRpZiAoIGxvY2tlZCApIHtcblxuXHRcdFx0XHQvLyBLZWVwIGFuIGVtcHR5IGxpc3QgaWYgd2UgaGF2ZSBkYXRhIGZvciBmdXR1cmUgYWRkIGNhbGxzXG5cdFx0XHRcdGlmICggbWVtb3J5ICkge1xuXHRcdFx0XHRcdGxpc3QgPSBbXTtcblxuXHRcdFx0XHQvLyBPdGhlcndpc2UsIHRoaXMgb2JqZWN0IGlzIHNwZW50XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGlzdCA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gQWN0dWFsIENhbGxiYWNrcyBvYmplY3Rcblx0XHRzZWxmID0ge1xuXG5cdFx0XHQvLyBBZGQgYSBjYWxsYmFjayBvciBhIGNvbGxlY3Rpb24gb2YgY2FsbGJhY2tzIHRvIHRoZSBsaXN0XG5cdFx0XHRhZGQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGxpc3QgKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB3ZSBoYXZlIG1lbW9yeSBmcm9tIGEgcGFzdCBydW4sIHdlIHNob3VsZCBmaXJlIGFmdGVyIGFkZGluZ1xuXHRcdFx0XHRcdGlmICggbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJpbmdJbmRleCA9IGxpc3QubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdHF1ZXVlLnB1c2goIG1lbW9yeSApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCggZnVuY3Rpb24gYWRkKCBhcmdzICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmVhY2goIGFyZ3MsIGZ1bmN0aW9uKCBfLCBhcmcgKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggaXNGdW5jdGlvbiggYXJnICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCAhb3B0aW9ucy51bmlxdWUgfHwgIXNlbGYuaGFzKCBhcmcgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3QucHVzaCggYXJnICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBhcmcgJiYgYXJnLmxlbmd0aCAmJiB0b1R5cGUoIGFyZyApICE9PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gSW5zcGVjdCByZWN1cnNpdmVseVxuXHRcdFx0XHRcdFx0XHRcdGFkZCggYXJnICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9ICkoIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRcdFx0aWYgKCBtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRcdGZpcmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBSZW1vdmUgYSBjYWxsYmFjayBmcm9tIHRoZSBsaXN0XG5cdFx0XHRyZW1vdmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkuZWFjaCggYXJndW1lbnRzLCBmdW5jdGlvbiggXywgYXJnICkge1xuXHRcdFx0XHRcdHZhciBpbmRleDtcblx0XHRcdFx0XHR3aGlsZSAoICggaW5kZXggPSBqUXVlcnkuaW5BcnJheSggYXJnLCBsaXN0LCBpbmRleCApICkgPiAtMSApIHtcblx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKCBpbmRleCwgMSApO1xuXG5cdFx0XHRcdFx0XHQvLyBIYW5kbGUgZmlyaW5nIGluZGV4ZXNcblx0XHRcdFx0XHRcdGlmICggaW5kZXggPD0gZmlyaW5nSW5kZXggKSB7XG5cdFx0XHRcdFx0XHRcdGZpcmluZ0luZGV4LS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYSBnaXZlbiBjYWxsYmFjayBpcyBpbiB0aGUgbGlzdC5cblx0XHRcdC8vIElmIG5vIGFyZ3VtZW50IGlzIGdpdmVuLCByZXR1cm4gd2hldGhlciBvciBub3QgbGlzdCBoYXMgY2FsbGJhY2tzIGF0dGFjaGVkLlxuXHRcdFx0aGFzOiBmdW5jdGlvbiggZm4gKSB7XG5cdFx0XHRcdHJldHVybiBmbiA/XG5cdFx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIGZuLCBsaXN0ICkgPiAtMSA6XG5cdFx0XHRcdFx0bGlzdC5sZW5ndGggPiAwO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gUmVtb3ZlIGFsbCBjYWxsYmFja3MgZnJvbSB0aGUgbGlzdFxuXHRcdFx0ZW1wdHk6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGxpc3QgKSB7XG5cdFx0XHRcdFx0bGlzdCA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRGlzYWJsZSAuZmlyZSBhbmQgLmFkZFxuXHRcdFx0Ly8gQWJvcnQgYW55IGN1cnJlbnQvcGVuZGluZyBleGVjdXRpb25zXG5cdFx0XHQvLyBDbGVhciBhbGwgY2FsbGJhY2tzIGFuZCB2YWx1ZXNcblx0XHRcdGRpc2FibGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsb2NrZWQgPSBxdWV1ZSA9IFtdO1xuXHRcdFx0XHRsaXN0ID0gbWVtb3J5ID0gXCJcIjtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0ZGlzYWJsZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gIWxpc3Q7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBEaXNhYmxlIC5maXJlXG5cdFx0XHQvLyBBbHNvIGRpc2FibGUgLmFkZCB1bmxlc3Mgd2UgaGF2ZSBtZW1vcnkgKHNpbmNlIGl0IHdvdWxkIGhhdmUgbm8gZWZmZWN0KVxuXHRcdFx0Ly8gQWJvcnQgYW55IHBlbmRpbmcgZXhlY3V0aW9uc1xuXHRcdFx0bG9jazogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxvY2tlZCA9IHF1ZXVlID0gW107XG5cdFx0XHRcdGlmICggIW1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdGxpc3QgPSBtZW1vcnkgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGxvY2tlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIWxvY2tlZDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIENhbGwgYWxsIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBjb250ZXh0IGFuZCBhcmd1bWVudHNcblx0XHRcdGZpcmVXaXRoOiBmdW5jdGlvbiggY29udGV4dCwgYXJncyApIHtcblx0XHRcdFx0aWYgKCAhbG9ja2VkICkge1xuXHRcdFx0XHRcdGFyZ3MgPSBhcmdzIHx8IFtdO1xuXHRcdFx0XHRcdGFyZ3MgPSBbIGNvbnRleHQsIGFyZ3Muc2xpY2UgPyBhcmdzLnNsaWNlKCkgOiBhcmdzIF07XG5cdFx0XHRcdFx0cXVldWUucHVzaCggYXJncyApO1xuXHRcdFx0XHRcdGlmICggIWZpcmluZyApIHtcblx0XHRcdFx0XHRcdGZpcmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDYWxsIGFsbCB0aGUgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGFyZ3VtZW50c1xuXHRcdFx0ZmlyZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuZmlyZVdpdGgoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIFRvIGtub3cgaWYgdGhlIGNhbGxiYWNrcyBoYXZlIGFscmVhZHkgYmVlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuXHRcdFx0ZmlyZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFmaXJlZDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdHJldHVybiBzZWxmO1xufTtcblxuXG5mdW5jdGlvbiBJZGVudGl0eSggdiApIHtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBUaHJvd2VyKCBleCApIHtcblx0dGhyb3cgZXg7XG59XG5cbmZ1bmN0aW9uIGFkb3B0VmFsdWUoIHZhbHVlLCByZXNvbHZlLCByZWplY3QsIG5vVmFsdWUgKSB7XG5cdHZhciBtZXRob2Q7XG5cblx0dHJ5IHtcblxuXHRcdC8vIENoZWNrIGZvciBwcm9taXNlIGFzcGVjdCBmaXJzdCB0byBwcml2aWxlZ2Ugc3luY2hyb25vdXMgYmVoYXZpb3Jcblx0XHRpZiAoIHZhbHVlICYmIGlzRnVuY3Rpb24oICggbWV0aG9kID0gdmFsdWUucHJvbWlzZSApICkgKSB7XG5cdFx0XHRtZXRob2QuY2FsbCggdmFsdWUgKS5kb25lKCByZXNvbHZlICkuZmFpbCggcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciB0aGVuYWJsZXNcblx0XHR9IGVsc2UgaWYgKCB2YWx1ZSAmJiBpc0Z1bmN0aW9uKCAoIG1ldGhvZCA9IHZhbHVlLnRoZW4gKSApICkge1xuXHRcdFx0bWV0aG9kLmNhbGwoIHZhbHVlLCByZXNvbHZlLCByZWplY3QgKTtcblxuXHRcdC8vIE90aGVyIG5vbi10aGVuYWJsZXNcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBDb250cm9sIGByZXNvbHZlYCBhcmd1bWVudHMgYnkgbGV0dGluZyBBcnJheSNzbGljZSBjYXN0IGJvb2xlYW4gYG5vVmFsdWVgIHRvIGludGVnZXI6XG5cdFx0XHQvLyAqIGZhbHNlOiBbIHZhbHVlIF0uc2xpY2UoIDAgKSA9PiByZXNvbHZlKCB2YWx1ZSApXG5cdFx0XHQvLyAqIHRydWU6IFsgdmFsdWUgXS5zbGljZSggMSApID0+IHJlc29sdmUoKVxuXHRcdFx0cmVzb2x2ZS5hcHBseSggdW5kZWZpbmVkLCBbIHZhbHVlIF0uc2xpY2UoIG5vVmFsdWUgKSApO1xuXHRcdH1cblxuXHQvLyBGb3IgUHJvbWlzZXMvQSssIGNvbnZlcnQgZXhjZXB0aW9ucyBpbnRvIHJlamVjdGlvbnNcblx0Ly8gU2luY2UgalF1ZXJ5LndoZW4gZG9lc24ndCB1bndyYXAgdGhlbmFibGVzLCB3ZSBjYW4gc2tpcCB0aGUgZXh0cmEgY2hlY2tzIGFwcGVhcmluZyBpblxuXHQvLyBEZWZlcnJlZCN0aGVuIHRvIGNvbmRpdGlvbmFsbHkgc3VwcHJlc3MgcmVqZWN0aW9uLlxuXHR9IGNhdGNoICggdmFsdWUgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCBvbmx5XG5cdFx0Ly8gU3RyaWN0IG1vZGUgZnVuY3Rpb25zIGludm9rZWQgd2l0aG91dCAuY2FsbC8uYXBwbHkgZ2V0IGdsb2JhbC1vYmplY3QgY29udGV4dFxuXHRcdHJlamVjdC5hcHBseSggdW5kZWZpbmVkLCBbIHZhbHVlIF0gKTtcblx0fVxufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0RGVmZXJyZWQ6IGZ1bmN0aW9uKCBmdW5jICkge1xuXHRcdHZhciB0dXBsZXMgPSBbXG5cblx0XHRcdFx0Ly8gYWN0aW9uLCBhZGQgbGlzdGVuZXIsIGNhbGxiYWNrcyxcblx0XHRcdFx0Ly8gLi4uIC50aGVuIGhhbmRsZXJzLCBhcmd1bWVudCBpbmRleCwgW2ZpbmFsIHN0YXRlXVxuXHRcdFx0XHRbIFwibm90aWZ5XCIsIFwicHJvZ3Jlc3NcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwibWVtb3J5XCIgKSwgMiBdLFxuXHRcdFx0XHRbIFwicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksIDAsIFwicmVzb2x2ZWRcIiBdLFxuXHRcdFx0XHRbIFwicmVqZWN0XCIsIFwiZmFpbFwiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSwgMSwgXCJyZWplY3RlZFwiIF1cblx0XHRcdF0sXG5cdFx0XHRzdGF0ZSA9IFwicGVuZGluZ1wiLFxuXHRcdFx0cHJvbWlzZSA9IHtcblx0XHRcdFx0c3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0YWx3YXlzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5kb25lKCBhcmd1bWVudHMgKS5mYWlsKCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJjYXRjaFwiOiBmdW5jdGlvbiggZm4gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2UudGhlbiggbnVsbCwgZm4gKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBLZWVwIHBpcGUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdHBpcGU6IGZ1bmN0aW9uKCAvKiBmbkRvbmUsIGZuRmFpbCwgZm5Qcm9ncmVzcyAqLyApIHtcblx0XHRcdFx0XHR2YXIgZm5zID0gYXJndW1lbnRzO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGpRdWVyeS5EZWZlcnJlZCggZnVuY3Rpb24oIG5ld0RlZmVyICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIGksIHR1cGxlICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE1hcCB0dXBsZXMgKHByb2dyZXNzLCBkb25lLCBmYWlsKSB0byBhcmd1bWVudHMgKGRvbmUsIGZhaWwsIHByb2dyZXNzKVxuXHRcdFx0XHRcdFx0XHR2YXIgZm4gPSBpc0Z1bmN0aW9uKCBmbnNbIHR1cGxlWyA0IF0gXSApICYmIGZuc1sgdHVwbGVbIDQgXSBdO1xuXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLnByb2dyZXNzKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLm5vdGlmeSB9KVxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5kb25lKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLnJlc29sdmUgfSlcblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQuZmFpbChmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZWplY3QgfSlcblx0XHRcdFx0XHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAxIF0gXSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJldHVybmVkID0gZm4gJiYgZm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdFx0XHRcdGlmICggcmV0dXJuZWQgJiYgaXNGdW5jdGlvbiggcmV0dXJuZWQucHJvbWlzZSApICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQucHJvbWlzZSgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5wcm9ncmVzcyggbmV3RGVmZXIubm90aWZ5IClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmRvbmUoIG5ld0RlZmVyLnJlc29sdmUgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZmFpbCggbmV3RGVmZXIucmVqZWN0ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXShcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm4gPyBbIHJldHVybmVkIF0gOiBhcmd1bWVudHNcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRmbnMgPSBudWxsO1xuXHRcdFx0XHRcdH0gKS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRoZW46IGZ1bmN0aW9uKCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgb25Qcm9ncmVzcyApIHtcblx0XHRcdFx0XHR2YXIgbWF4RGVwdGggPSAwO1xuXHRcdFx0XHRcdGZ1bmN0aW9uIHJlc29sdmUoIGRlcHRoLCBkZWZlcnJlZCwgaGFuZGxlciwgc3BlY2lhbCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBhcmd1bWVudHMsXG5cdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHJldHVybmVkLCB0aGVuO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuM1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTlcblx0XHRcdFx0XHRcdFx0XHRcdC8vIElnbm9yZSBkb3VibGUtcmVzb2x1dGlvbiBhdHRlbXB0c1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCA8IG1heERlcHRoICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkID0gaGFuZGxlci5hcHBseSggdGhhdCwgYXJncyApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4xXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC00OFxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCByZXR1cm5lZCA9PT0gZGVmZXJyZWQucHJvbWlzZSgpICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCBcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb25zIDIuMy4zLjEsIDMuNVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTRcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTc1XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXRyaWV2ZSBgdGhlbmAgb25seSBvbmNlXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGVuID0gcmV0dXJuZWQgJiZcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy40XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTY0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgY2hlY2sgb2JqZWN0cyBhbmQgZnVuY3Rpb25zIGZvciB0aGVuYWJpbGl0eVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoIHR5cGVvZiByZXR1cm5lZCA9PT0gXCJvYmplY3RcIiB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGVvZiByZXR1cm5lZCA9PT0gXCJmdW5jdGlvblwiICkgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQudGhlbjtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGEgcmV0dXJuZWQgdGhlbmFibGVcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggaXNGdW5jdGlvbiggdGhlbiApICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFNwZWNpYWwgcHJvY2Vzc29ycyAobm90aWZ5KSBqdXN0IHdhaXQgZm9yIHJlc29sdXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW4uY2FsbChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBhbHNvIGhvb2sgaW50byBwcm9ncmVzc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIGRpc3JlZ2FyZCBvbGRlciByZXNvbHV0aW9uIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1heERlcHRoKys7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYWxsIG90aGVyIHJldHVybmVkIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGhhbmRsZXIgIT09IElkZW50aXR5ICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJncyA9IFsgcmV0dXJuZWQgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFByb2Nlc3MgdGhlIHZhbHVlKHMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIERlZmF1bHQgcHJvY2VzcyBpcyByZXNvbHZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggc3BlY2lhbCB8fCBkZWZlcnJlZC5yZXNvbHZlV2l0aCApKCB0aGF0LCBhcmdzICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgbm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGNhdGNoIGFuZCByZWplY3QgZXhjZXB0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MgPSBzcGVjaWFsID9cblx0XHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3cgOlxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayggZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzcy5zdGFja1RyYWNlICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjQuMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTYxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIHBvc3QtcmVzb2x1dGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCArIDEgPj0gbWF4RGVwdGggKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBoYW5kbGVyICE9PSBUaHJvd2VyICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gWyBlIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIHRoYXQsIGFyZ3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjFcblx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTdcblx0XHRcdFx0XHRcdFx0Ly8gUmUtcmVzb2x2ZSBwcm9taXNlcyBpbW1lZGlhdGVseSB0byBkb2RnZSBmYWxzZSByZWplY3Rpb24gZnJvbVxuXHRcdFx0XHRcdFx0XHQvLyBzdWJzZXF1ZW50IGVycm9yc1xuXHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoICkge1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENhbGwgYW4gb3B0aW9uYWwgaG9vayB0byByZWNvcmQgdGhlIHN0YWNrLCBpbiBjYXNlIG9mIGV4Y2VwdGlvblxuXHRcdFx0XHRcdFx0XHRcdC8vIHNpbmNlIGl0J3Mgb3RoZXJ3aXNlIGxvc3Qgd2hlbiBleGVjdXRpb24gZ29lcyBhc3luY1xuXHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3Muc3RhY2tUcmFjZSA9IGpRdWVyeS5EZWZlcnJlZC5nZXRTdGFja0hvb2soKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoIHByb2Nlc3MgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5LkRlZmVycmVkKCBmdW5jdGlvbiggbmV3RGVmZXIgKSB7XG5cblx0XHRcdFx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0aXNGdW5jdGlvbiggb25Qcm9ncmVzcyApID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uUHJvZ3Jlc3MgOlxuXHRcdFx0XHRcdFx0XHRcdFx0SWRlbnRpdHksXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIubm90aWZ5V2l0aFxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAxIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRpc0Z1bmN0aW9uKCBvbkZ1bGZpbGxlZCApID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uRnVsZmlsbGVkIDpcblx0XHRcdFx0XHRcdFx0XHRcdElkZW50aXR5XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdC8vIHJlamVjdGVkX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMiBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0aXNGdW5jdGlvbiggb25SZWplY3RlZCApID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uUmVqZWN0ZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhyb3dlclxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gKS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuXHRcdFx0XHQvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XG5cdFx0XHRcdHByb21pc2U6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iaiAhPSBudWxsID8galF1ZXJ5LmV4dGVuZCggb2JqLCBwcm9taXNlICkgOiBwcm9taXNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZGVmZXJyZWQgPSB7fTtcblxuXHRcdC8vIEFkZCBsaXN0LXNwZWNpZmljIG1ldGhvZHNcblx0XHRqUXVlcnkuZWFjaCggdHVwbGVzLCBmdW5jdGlvbiggaSwgdHVwbGUgKSB7XG5cdFx0XHR2YXIgbGlzdCA9IHR1cGxlWyAyIF0sXG5cdFx0XHRcdHN0YXRlU3RyaW5nID0gdHVwbGVbIDUgXTtcblxuXHRcdFx0Ly8gcHJvbWlzZS5wcm9ncmVzcyA9IGxpc3QuYWRkXG5cdFx0XHQvLyBwcm9taXNlLmRvbmUgPSBsaXN0LmFkZFxuXHRcdFx0Ly8gcHJvbWlzZS5mYWlsID0gbGlzdC5hZGRcblx0XHRcdHByb21pc2VbIHR1cGxlWyAxIF0gXSA9IGxpc3QuYWRkO1xuXG5cdFx0XHQvLyBIYW5kbGUgc3RhdGVcblx0XHRcdGlmICggc3RhdGVTdHJpbmcgKSB7XG5cdFx0XHRcdGxpc3QuYWRkKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBzdGF0ZSA9IFwicmVzb2x2ZWRcIiAoaS5lLiwgZnVsZmlsbGVkKVxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUgPSBcInJlamVjdGVkXCJcblx0XHRcdFx0XHRcdHN0YXRlID0gc3RhdGVTdHJpbmc7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdC8vIHJlamVjdGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0dHVwbGVzWyAzIC0gaSBdWyAyIF0uZGlzYWJsZSxcblxuXHRcdFx0XHRcdC8vIHJlamVjdGVkX2hhbmRsZXJzLmRpc2FibGVcblx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuZGlzYWJsZVxuXHRcdFx0XHRcdHR1cGxlc1sgMyAtIGkgXVsgMyBdLmRpc2FibGUsXG5cblx0XHRcdFx0XHQvLyBwcm9ncmVzc19jYWxsYmFja3MubG9ja1xuXHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAyIF0ubG9jayxcblxuXHRcdFx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmxvY2tcblx0XHRcdFx0XHR0dXBsZXNbIDAgXVsgMyBdLmxvY2tcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMuZmlyZVxuXHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmZpcmVcblx0XHRcdC8vIHJlamVjdGVkX2hhbmRsZXJzLmZpcmVcblx0XHRcdGxpc3QuYWRkKCB0dXBsZVsgMyBdLmZpcmUgKTtcblxuXHRcdFx0Ly8gZGVmZXJyZWQubm90aWZ5ID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLm5vdGlmeVdpdGgoLi4uKSB9XG5cdFx0XHQvLyBkZWZlcnJlZC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLnJlc29sdmVXaXRoKC4uLikgfVxuXHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0ID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLnJlamVjdFdpdGgoLi4uKSB9XG5cdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSggdGhpcyA9PT0gZGVmZXJyZWQgPyB1bmRlZmluZWQgOiB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBkZWZlcnJlZC5ub3RpZnlXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0Ly8gZGVmZXJyZWQucmVzb2x2ZVdpdGggPSBsaXN0LmZpcmVXaXRoXG5cdFx0XHQvLyBkZWZlcnJlZC5yZWplY3RXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdID0gbGlzdC5maXJlV2l0aDtcblx0XHR9ICk7XG5cblx0XHQvLyBNYWtlIHRoZSBkZWZlcnJlZCBhIHByb21pc2Vcblx0XHRwcm9taXNlLnByb21pc2UoIGRlZmVycmVkICk7XG5cblx0XHQvLyBDYWxsIGdpdmVuIGZ1bmMgaWYgYW55XG5cdFx0aWYgKCBmdW5jICkge1xuXHRcdFx0ZnVuYy5jYWxsKCBkZWZlcnJlZCwgZGVmZXJyZWQgKTtcblx0XHR9XG5cblx0XHQvLyBBbGwgZG9uZSFcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdH0sXG5cblx0Ly8gRGVmZXJyZWQgaGVscGVyXG5cdHdoZW46IGZ1bmN0aW9uKCBzaW5nbGVWYWx1ZSApIHtcblx0XHR2YXJcblxuXHRcdFx0Ly8gY291bnQgb2YgdW5jb21wbGV0ZWQgc3Vib3JkaW5hdGVzXG5cdFx0XHRyZW1haW5pbmcgPSBhcmd1bWVudHMubGVuZ3RoLFxuXG5cdFx0XHQvLyBjb3VudCBvZiB1bnByb2Nlc3NlZCBhcmd1bWVudHNcblx0XHRcdGkgPSByZW1haW5pbmcsXG5cblx0XHRcdC8vIHN1Ym9yZGluYXRlIGZ1bGZpbGxtZW50IGRhdGFcblx0XHRcdHJlc29sdmVDb250ZXh0cyA9IEFycmF5KCBpICksXG5cdFx0XHRyZXNvbHZlVmFsdWVzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzICksXG5cblx0XHRcdC8vIHRoZSBtYXN0ZXIgRGVmZXJyZWRcblx0XHRcdG1hc3RlciA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXG5cdFx0XHQvLyBzdWJvcmRpbmF0ZSBjYWxsYmFjayBmYWN0b3J5XG5cdFx0XHR1cGRhdGVGdW5jID0gZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZUNvbnRleHRzWyBpIF0gPSB0aGlzO1xuXHRcdFx0XHRcdHJlc29sdmVWYWx1ZXNbIGkgXSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gc2xpY2UuY2FsbCggYXJndW1lbnRzICkgOiB2YWx1ZTtcblx0XHRcdFx0XHRpZiAoICEoIC0tcmVtYWluaW5nICkgKSB7XG5cdFx0XHRcdFx0XHRtYXN0ZXIucmVzb2x2ZVdpdGgoIHJlc29sdmVDb250ZXh0cywgcmVzb2x2ZVZhbHVlcyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH07XG5cblx0XHQvLyBTaW5nbGUtIGFuZCBlbXB0eSBhcmd1bWVudHMgYXJlIGFkb3B0ZWQgbGlrZSBQcm9taXNlLnJlc29sdmVcblx0XHRpZiAoIHJlbWFpbmluZyA8PSAxICkge1xuXHRcdFx0YWRvcHRWYWx1ZSggc2luZ2xlVmFsdWUsIG1hc3Rlci5kb25lKCB1cGRhdGVGdW5jKCBpICkgKS5yZXNvbHZlLCBtYXN0ZXIucmVqZWN0LFxuXHRcdFx0XHQhcmVtYWluaW5nICk7XG5cblx0XHRcdC8vIFVzZSAudGhlbigpIHRvIHVud3JhcCBzZWNvbmRhcnkgdGhlbmFibGVzIChjZi4gZ2gtMzAwMClcblx0XHRcdGlmICggbWFzdGVyLnN0YXRlKCkgPT09IFwicGVuZGluZ1wiIHx8XG5cdFx0XHRcdGlzRnVuY3Rpb24oIHJlc29sdmVWYWx1ZXNbIGkgXSAmJiByZXNvbHZlVmFsdWVzWyBpIF0udGhlbiApICkge1xuXG5cdFx0XHRcdHJldHVybiBtYXN0ZXIudGhlbigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE11bHRpcGxlIGFyZ3VtZW50cyBhcmUgYWdncmVnYXRlZCBsaWtlIFByb21pc2UuYWxsIGFycmF5IGVsZW1lbnRzXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRhZG9wdFZhbHVlKCByZXNvbHZlVmFsdWVzWyBpIF0sIHVwZGF0ZUZ1bmMoIGkgKSwgbWFzdGVyLnJlamVjdCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXN0ZXIucHJvbWlzZSgpO1xuXHR9XG59ICk7XG5cblxuLy8gVGhlc2UgdXN1YWxseSBpbmRpY2F0ZSBhIHByb2dyYW1tZXIgbWlzdGFrZSBkdXJpbmcgZGV2ZWxvcG1lbnQsXG4vLyB3YXJuIGFib3V0IHRoZW0gQVNBUCByYXRoZXIgdGhhbiBzd2FsbG93aW5nIHRoZW0gYnkgZGVmYXVsdC5cbnZhciByZXJyb3JOYW1lcyA9IC9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO1xuXG5qUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayA9IGZ1bmN0aW9uKCBlcnJvciwgc3RhY2sgKSB7XG5cblx0Ly8gU3VwcG9ydDogSUUgOCAtIDkgb25seVxuXHQvLyBDb25zb2xlIGV4aXN0cyB3aGVuIGRldiB0b29scyBhcmUgb3Blbiwgd2hpY2ggY2FuIGhhcHBlbiBhdCBhbnkgdGltZVxuXHRpZiAoIHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLndhcm4gJiYgZXJyb3IgJiYgcmVycm9yTmFtZXMudGVzdCggZXJyb3IubmFtZSApICkge1xuXHRcdHdpbmRvdy5jb25zb2xlLndhcm4oIFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIgKyBlcnJvci5tZXNzYWdlLCBlcnJvci5zdGFjaywgc3RhY2sgKTtcblx0fVxufTtcblxuXG5cblxualF1ZXJ5LnJlYWR5RXhjZXB0aW9uID0gZnVuY3Rpb24oIGVycm9yICkge1xuXHR3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gKTtcbn07XG5cblxuXG5cbi8vIFRoZSBkZWZlcnJlZCB1c2VkIG9uIERPTSByZWFkeVxudmFyIHJlYWR5TGlzdCA9IGpRdWVyeS5EZWZlcnJlZCgpO1xuXG5qUXVlcnkuZm4ucmVhZHkgPSBmdW5jdGlvbiggZm4gKSB7XG5cblx0cmVhZHlMaXN0XG5cdFx0LnRoZW4oIGZuIClcblxuXHRcdC8vIFdyYXAgalF1ZXJ5LnJlYWR5RXhjZXB0aW9uIGluIGEgZnVuY3Rpb24gc28gdGhhdCB0aGUgbG9va3VwXG5cdFx0Ly8gaGFwcGVucyBhdCB0aGUgdGltZSBvZiBlcnJvciBoYW5kbGluZyBpbnN0ZWFkIG9mIGNhbGxiYWNrXG5cdFx0Ly8gcmVnaXN0cmF0aW9uLlxuXHRcdC5jYXRjaCggZnVuY3Rpb24oIGVycm9yICkge1xuXHRcdFx0alF1ZXJ5LnJlYWR5RXhjZXB0aW9uKCBlcnJvciApO1xuXHRcdH0gKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBJcyB0aGUgRE9NIHJlYWR5IHRvIGJlIHVzZWQ/IFNldCB0byB0cnVlIG9uY2UgaXQgb2NjdXJzLlxuXHRpc1JlYWR5OiBmYWxzZSxcblxuXHQvLyBBIGNvdW50ZXIgdG8gdHJhY2sgaG93IG1hbnkgaXRlbXMgdG8gd2FpdCBmb3IgYmVmb3JlXG5cdC8vIHRoZSByZWFkeSBldmVudCBmaXJlcy4gU2VlICM2NzgxXG5cdHJlYWR5V2FpdDogMSxcblxuXHQvLyBIYW5kbGUgd2hlbiB0aGUgRE9NIGlzIHJlYWR5XG5cdHJlYWR5OiBmdW5jdGlvbiggd2FpdCApIHtcblxuXHRcdC8vIEFib3J0IGlmIHRoZXJlIGFyZSBwZW5kaW5nIGhvbGRzIG9yIHdlJ3JlIGFscmVhZHkgcmVhZHlcblx0XHRpZiAoIHdhaXQgPT09IHRydWUgPyAtLWpRdWVyeS5yZWFkeVdhaXQgOiBqUXVlcnkuaXNSZWFkeSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZW1lbWJlciB0aGF0IHRoZSBET00gaXMgcmVhZHlcblx0XHRqUXVlcnkuaXNSZWFkeSA9IHRydWU7XG5cblx0XHQvLyBJZiBhIG5vcm1hbCBET00gUmVhZHkgZXZlbnQgZmlyZWQsIGRlY3JlbWVudCwgYW5kIHdhaXQgaWYgbmVlZCBiZVxuXHRcdGlmICggd2FpdCAhPT0gdHJ1ZSAmJiAtLWpRdWVyeS5yZWFkeVdhaXQgPiAwICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlIGFyZSBmdW5jdGlvbnMgYm91bmQsIHRvIGV4ZWN1dGVcblx0XHRyZWFkeUxpc3QucmVzb2x2ZVdpdGgoIGRvY3VtZW50LCBbIGpRdWVyeSBdICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LnJlYWR5LnRoZW4gPSByZWFkeUxpc3QudGhlbjtcblxuLy8gVGhlIHJlYWR5IGV2ZW50IGhhbmRsZXIgYW5kIHNlbGYgY2xlYW51cCBtZXRob2RcbmZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCApO1xuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCApO1xuXHRqUXVlcnkucmVhZHkoKTtcbn1cblxuLy8gQ2F0Y2ggY2FzZXMgd2hlcmUgJChkb2N1bWVudCkucmVhZHkoKSBpcyBjYWxsZWRcbi8vIGFmdGVyIHRoZSBicm93c2VyIGV2ZW50IGhhcyBhbHJlYWR5IG9jY3VycmVkLlxuLy8gU3VwcG9ydDogSUUgPD05IC0gMTAgb25seVxuLy8gT2xkZXIgSUUgc29tZXRpbWVzIHNpZ25hbHMgXCJpbnRlcmFjdGl2ZVwiIHRvbyBzb29uXG5pZiAoIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fFxuXHQoIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgKSApIHtcblxuXHQvLyBIYW5kbGUgaXQgYXN5bmNocm9ub3VzbHkgdG8gYWxsb3cgc2NyaXB0cyB0aGUgb3Bwb3J0dW5pdHkgdG8gZGVsYXkgcmVhZHlcblx0d2luZG93LnNldFRpbWVvdXQoIGpRdWVyeS5yZWFkeSApO1xuXG59IGVsc2Uge1xuXG5cdC8vIFVzZSB0aGUgaGFuZHkgZXZlbnQgY2FsbGJhY2tcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCApO1xuXG5cdC8vIEEgZmFsbGJhY2sgdG8gd2luZG93Lm9ubG9hZCwgdGhhdCB3aWxsIGFsd2F5cyB3b3JrXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgY29tcGxldGVkICk7XG59XG5cblxuXG5cbi8vIE11bHRpZnVuY3Rpb25hbCBtZXRob2QgdG8gZ2V0IGFuZCBzZXQgdmFsdWVzIG9mIGEgY29sbGVjdGlvblxuLy8gVGhlIHZhbHVlL3MgY2FuIG9wdGlvbmFsbHkgYmUgZXhlY3V0ZWQgaWYgaXQncyBhIGZ1bmN0aW9uXG52YXIgYWNjZXNzID0gZnVuY3Rpb24oIGVsZW1zLCBmbiwga2V5LCB2YWx1ZSwgY2hhaW5hYmxlLCBlbXB0eUdldCwgcmF3ICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bGVuID0gZWxlbXMubGVuZ3RoLFxuXHRcdGJ1bGsgPSBrZXkgPT0gbnVsbDtcblxuXHQvLyBTZXRzIG1hbnkgdmFsdWVzXG5cdGlmICggdG9UeXBlKCBrZXkgKSA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRjaGFpbmFibGUgPSB0cnVlO1xuXHRcdGZvciAoIGkgaW4ga2V5ICkge1xuXHRcdFx0YWNjZXNzKCBlbGVtcywgZm4sIGksIGtleVsgaSBdLCB0cnVlLCBlbXB0eUdldCwgcmF3ICk7XG5cdFx0fVxuXG5cdC8vIFNldHMgb25lIHZhbHVlXG5cdH0gZWxzZSBpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblxuXHRcdGlmICggIWlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyYXcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICggYnVsayApIHtcblxuXHRcdFx0Ly8gQnVsayBvcGVyYXRpb25zIHJ1biBhZ2FpbnN0IHRoZSBlbnRpcmUgc2V0XG5cdFx0XHRpZiAoIHJhdyApIHtcblx0XHRcdFx0Zm4uY2FsbCggZWxlbXMsIHZhbHVlICk7XG5cdFx0XHRcdGZuID0gbnVsbDtcblxuXHRcdFx0Ly8gLi4uZXhjZXB0IHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uIHZhbHVlc1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnVsayA9IGZuO1xuXHRcdFx0XHRmbiA9IGZ1bmN0aW9uKCBlbGVtLCBrZXksIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBidWxrLmNhbGwoIGpRdWVyeSggZWxlbSApLCB2YWx1ZSApO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggZm4gKSB7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0Zm4oXG5cdFx0XHRcdFx0ZWxlbXNbIGkgXSwga2V5LCByYXcgP1xuXHRcdFx0XHRcdHZhbHVlIDpcblx0XHRcdFx0XHR2YWx1ZS5jYWxsKCBlbGVtc1sgaSBdLCBpLCBmbiggZWxlbXNbIGkgXSwga2V5ICkgKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICggY2hhaW5hYmxlICkge1xuXHRcdHJldHVybiBlbGVtcztcblx0fVxuXG5cdC8vIEdldHNcblx0aWYgKCBidWxrICkge1xuXHRcdHJldHVybiBmbi5jYWxsKCBlbGVtcyApO1xuXHR9XG5cblx0cmV0dXJuIGxlbiA/IGZuKCBlbGVtc1sgMCBdLCBrZXkgKSA6IGVtcHR5R2V0O1xufTtcblxuXG4vLyBNYXRjaGVzIGRhc2hlZCBzdHJpbmcgZm9yIGNhbWVsaXppbmdcbnZhciBybXNQcmVmaXggPSAvXi1tcy0vLFxuXHRyZGFzaEFscGhhID0gLy0oW2Etel0pL2c7XG5cbi8vIFVzZWQgYnkgY2FtZWxDYXNlIGFzIGNhbGxiYWNrIHRvIHJlcGxhY2UoKVxuZnVuY3Rpb24gZmNhbWVsQ2FzZSggYWxsLCBsZXR0ZXIgKSB7XG5cdHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbn1cblxuLy8gQ29udmVydCBkYXNoZWQgdG8gY2FtZWxDYXNlOyB1c2VkIGJ5IHRoZSBjc3MgYW5kIGRhdGEgbW9kdWxlc1xuLy8gU3VwcG9ydDogSUUgPD05IC0gMTEsIEVkZ2UgMTIgLSAxNVxuLy8gTWljcm9zb2Z0IGZvcmdvdCB0byBodW1wIHRoZWlyIHZlbmRvciBwcmVmaXggKCM5NTcyKVxuZnVuY3Rpb24gY2FtZWxDYXNlKCBzdHJpbmcgKSB7XG5cdHJldHVybiBzdHJpbmcucmVwbGFjZSggcm1zUHJlZml4LCBcIm1zLVwiICkucmVwbGFjZSggcmRhc2hBbHBoYSwgZmNhbWVsQ2FzZSApO1xufVxudmFyIGFjY2VwdERhdGEgPSBmdW5jdGlvbiggb3duZXIgKSB7XG5cblx0Ly8gQWNjZXB0cyBvbmx5OlxuXHQvLyAgLSBOb2RlXG5cdC8vICAgIC0gTm9kZS5FTEVNRU5UX05PREVcblx0Ly8gICAgLSBOb2RlLkRPQ1VNRU5UX05PREVcblx0Ly8gIC0gT2JqZWN0XG5cdC8vICAgIC0gQW55XG5cdHJldHVybiBvd25lci5ub2RlVHlwZSA9PT0gMSB8fCBvd25lci5ub2RlVHlwZSA9PT0gOSB8fCAhKCArb3duZXIubm9kZVR5cGUgKTtcbn07XG5cblxuXG5cbmZ1bmN0aW9uIERhdGEoKSB7XG5cdHRoaXMuZXhwYW5kbyA9IGpRdWVyeS5leHBhbmRvICsgRGF0YS51aWQrKztcbn1cblxuRGF0YS51aWQgPSAxO1xuXG5EYXRhLnByb3RvdHlwZSA9IHtcblxuXHRjYWNoZTogZnVuY3Rpb24oIG93bmVyICkge1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIG93bmVyIG9iamVjdCBhbHJlYWR5IGhhcyBhIGNhY2hlXG5cdFx0dmFyIHZhbHVlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0Ly8gSWYgbm90LCBjcmVhdGUgb25lXG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHR2YWx1ZSA9IHt9O1xuXG5cdFx0XHQvLyBXZSBjYW4gYWNjZXB0IGRhdGEgZm9yIG5vbi1lbGVtZW50IG5vZGVzIGluIG1vZGVybiBicm93c2Vycyxcblx0XHRcdC8vIGJ1dCB3ZSBzaG91bGQgbm90LCBzZWUgIzgzMzUuXG5cdFx0XHQvLyBBbHdheXMgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cblx0XHRcdGlmICggYWNjZXB0RGF0YSggb3duZXIgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBpdCBpcyBhIG5vZGUgdW5saWtlbHkgdG8gYmUgc3RyaW5naWZ5LWVkIG9yIGxvb3BlZCBvdmVyXG5cdFx0XHRcdC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG5cdFx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdmFsdWU7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHNlY3VyZSBpdCBpbiBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5XG5cdFx0XHRcdC8vIGNvbmZpZ3VyYWJsZSBtdXN0IGJlIHRydWUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXG5cdFx0XHRcdC8vIGRlbGV0ZWQgd2hlbiBkYXRhIGlzIHJlbW92ZWRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIG93bmVyLCB0aGlzLmV4cGFuZG8sIHtcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0c2V0OiBmdW5jdGlvbiggb3duZXIsIGRhdGEsIHZhbHVlICkge1xuXHRcdHZhciBwcm9wLFxuXHRcdFx0Y2FjaGUgPSB0aGlzLmNhY2hlKCBvd25lciApO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuXHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Y2FjaGVbIGNhbWVsQ2FzZSggZGF0YSApIF0gPSB2YWx1ZTtcblxuXHRcdC8vIEhhbmRsZTogWyBvd25lciwgeyBwcm9wZXJ0aWVzIH0gXSBhcmdzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQ29weSB0aGUgcHJvcGVydGllcyBvbmUtYnktb25lIHRvIHRoZSBjYWNoZSBvYmplY3Rcblx0XHRcdGZvciAoIHByb3AgaW4gZGF0YSApIHtcblx0XHRcdFx0Y2FjaGVbIGNhbWVsQ2FzZSggcHJvcCApIF0gPSBkYXRhWyBwcm9wIF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYWNoZTtcblx0fSxcblx0Z2V0OiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHRyZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0dGhpcy5jYWNoZSggb3duZXIgKSA6XG5cblx0XHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRcdG93bmVyWyB0aGlzLmV4cGFuZG8gXSAmJiBvd25lclsgdGhpcy5leHBhbmRvIF1bIGNhbWVsQ2FzZSgga2V5ICkgXTtcblx0fSxcblx0YWNjZXNzOiBmdW5jdGlvbiggb3duZXIsIGtleSwgdmFsdWUgKSB7XG5cblx0XHQvLyBJbiBjYXNlcyB3aGVyZSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIE5vIGtleSB3YXMgc3BlY2lmaWVkXG5cdFx0Ly8gICAyLiBBIHN0cmluZyBrZXkgd2FzIHNwZWNpZmllZCwgYnV0IG5vIHZhbHVlIHByb3ZpZGVkXG5cdFx0Ly9cblx0XHQvLyBUYWtlIHRoZSBcInJlYWRcIiBwYXRoIGFuZCBhbGxvdyB0aGUgZ2V0IG1ldGhvZCB0byBkZXRlcm1pbmVcblx0XHQvLyB3aGljaCB2YWx1ZSB0byByZXR1cm4sIHJlc3BlY3RpdmVseSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIFRoZSBlbnRpcmUgY2FjaGUgb2JqZWN0XG5cdFx0Ly8gICAyLiBUaGUgZGF0YSBzdG9yZWQgYXQgdGhlIGtleVxuXHRcdC8vXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHQoICgga2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgKSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkgKSB7XG5cblx0XHRcdHJldHVybiB0aGlzLmdldCggb3duZXIsIGtleSApO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gdGhlIGtleSBpcyBub3QgYSBzdHJpbmcsIG9yIGJvdGggYSBrZXkgYW5kIHZhbHVlXG5cdFx0Ly8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIEFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG5cdFx0Ly8gICAyLiBBIGtleSBhbmQgdmFsdWVcblx0XHQvL1xuXHRcdHRoaXMuc2V0KCBvd25lciwga2V5LCB2YWx1ZSApO1xuXG5cdFx0Ly8gU2luY2UgdGhlIFwic2V0XCIgcGF0aCBjYW4gaGF2ZSB0d28gcG9zc2libGUgZW50cnkgcG9pbnRzXG5cdFx0Ly8gcmV0dXJuIHRoZSBleHBlY3RlZCBkYXRhIGJhc2VkIG9uIHdoaWNoIHBhdGggd2FzIHRha2VuWypdXG5cdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHR2YXIgaSxcblx0XHRcdGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0aWYgKCBjYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgga2V5ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQgYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBrZXlzXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGtleSApICkge1xuXG5cdFx0XHRcdC8vIElmIGtleSBpcyBhbiBhcnJheSBvZiBrZXlzLi4uXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzZXQgY2FtZWxDYXNlIGtleXMsIHNvIHJlbW92ZSB0aGF0LlxuXHRcdFx0XHRrZXkgPSBrZXkubWFwKCBjYW1lbENhc2UgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGtleSA9IGNhbWVsQ2FzZSgga2V5ICk7XG5cblx0XHRcdFx0Ly8gSWYgYSBrZXkgd2l0aCB0aGUgc3BhY2VzIGV4aXN0cywgdXNlIGl0LlxuXHRcdFx0XHQvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuXHRcdFx0XHRrZXkgPSBrZXkgaW4gY2FjaGUgP1xuXHRcdFx0XHRcdFsga2V5IF0gOlxuXHRcdFx0XHRcdCgga2V5Lm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW10gKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9IGtleS5sZW5ndGg7XG5cblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRkZWxldGUgY2FjaGVbIGtleVsgaSBdIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBleHBhbmRvIGlmIHRoZXJlJ3Mgbm8gbW9yZSBkYXRhXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fCBqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKSApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NVxuXHRcdFx0Ly8gV2Via2l0ICYgQmxpbmsgcGVyZm9ybWFuY2Ugc3VmZmVycyB3aGVuIGRlbGV0aW5nIHByb3BlcnRpZXNcblx0XHRcdC8vIGZyb20gRE9NIG5vZGVzLCBzbyBzZXQgdG8gdW5kZWZpbmVkIGluc3RlYWRcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM3ODYwNyAoYnVnIHJlc3RyaWN0ZWQpXG5cdFx0XHRpZiAoIG93bmVyLm5vZGVUeXBlICkge1xuXHRcdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWxldGUgb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aGFzRGF0YTogZnVuY3Rpb24oIG93bmVyICkge1xuXHRcdHZhciBjYWNoZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblx0XHRyZXR1cm4gY2FjaGUgIT09IHVuZGVmaW5lZCAmJiAhalF1ZXJ5LmlzRW1wdHlPYmplY3QoIGNhY2hlICk7XG5cdH1cbn07XG52YXIgZGF0YVByaXYgPSBuZXcgRGF0YSgpO1xuXG52YXIgZGF0YVVzZXIgPSBuZXcgRGF0YSgpO1xuXG5cblxuLy9cdEltcGxlbWVudGF0aW9uIFN1bW1hcnlcbi8vXG4vL1x0MS4gRW5mb3JjZSBBUEkgc3VyZmFjZSBhbmQgc2VtYW50aWMgY29tcGF0aWJpbGl0eSB3aXRoIDEuOS54IGJyYW5jaFxuLy9cdDIuIEltcHJvdmUgdGhlIG1vZHVsZSdzIG1haW50YWluYWJpbGl0eSBieSByZWR1Y2luZyB0aGUgc3RvcmFnZVxuLy9cdFx0cGF0aHMgdG8gYSBzaW5nbGUgbWVjaGFuaXNtLlxuLy9cdDMuIFVzZSB0aGUgc2FtZSBzaW5nbGUgbWVjaGFuaXNtIHRvIHN1cHBvcnQgXCJwcml2YXRlXCIgYW5kIFwidXNlclwiIGRhdGEuXG4vL1x0NC4gX05ldmVyXyBleHBvc2UgXCJwcml2YXRlXCIgZGF0YSB0byB1c2VyIGNvZGUgKFRPRE86IERyb3AgX2RhdGEsIF9yZW1vdmVEYXRhKVxuLy9cdDUuIEF2b2lkIGV4cG9zaW5nIGltcGxlbWVudGF0aW9uIGRldGFpbHMgb24gdXNlciBvYmplY3RzIChlZy4gZXhwYW5kbyBwcm9wZXJ0aWVzKVxuLy9cdDYuIFByb3ZpZGUgYSBjbGVhciBwYXRoIGZvciBpbXBsZW1lbnRhdGlvbiB1cGdyYWRlIHRvIFdlYWtNYXAgaW4gMjAxNFxuXG52YXIgcmJyYWNlID0gL14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFxuXHRybXVsdGlEYXNoID0gL1tBLVpdL2c7XG5cbmZ1bmN0aW9uIGdldERhdGEoIGRhdGEgKSB7XG5cdGlmICggZGF0YSA9PT0gXCJ0cnVlXCIgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoIGRhdGEgPT09IFwiZmFsc2VcIiApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoIGRhdGEgPT09IFwibnVsbFwiICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gT25seSBjb252ZXJ0IHRvIGEgbnVtYmVyIGlmIGl0IGRvZXNuJ3QgY2hhbmdlIHRoZSBzdHJpbmdcblx0aWYgKCBkYXRhID09PSArZGF0YSArIFwiXCIgKSB7XG5cdFx0cmV0dXJuICtkYXRhO1xuXHR9XG5cblx0aWYgKCByYnJhY2UudGVzdCggZGF0YSApICkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKCBkYXRhICk7XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZGF0YUF0dHIoIGVsZW0sIGtleSwgZGF0YSApIHtcblx0dmFyIG5hbWU7XG5cblx0Ly8gSWYgbm90aGluZyB3YXMgZm91bmQgaW50ZXJuYWxseSwgdHJ5IHRvIGZldGNoIGFueVxuXHQvLyBkYXRhIGZyb20gdGhlIEhUTUw1IGRhdGEtKiBhdHRyaWJ1dGVcblx0aWYgKCBkYXRhID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRuYW1lID0gXCJkYXRhLVwiICsga2V5LnJlcGxhY2UoIHJtdWx0aURhc2gsIFwiLSQmXCIgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGRhdGEgPSBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSApO1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRhdGEgPSBnZXREYXRhKCBkYXRhICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHt9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGRhdGEgc28gaXQgaXNuJ3QgY2hhbmdlZCBsYXRlclxuXHRcdFx0ZGF0YVVzZXIuc2V0KCBlbGVtLCBrZXksIGRhdGEgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGE7XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0aGFzRGF0YTogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRhdGFVc2VyLmhhc0RhdGEoIGVsZW0gKSB8fCBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICk7XG5cdH0sXG5cblx0ZGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIGRhdGFVc2VyLmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFVc2VyLnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9LFxuXG5cdC8vIFRPRE86IE5vdyB0aGF0IGFsbCBjYWxscyB0byBfZGF0YSBhbmQgX3JlbW92ZURhdGEgaGF2ZSBiZWVuIHJlcGxhY2VkXG5cdC8vIHdpdGggZGlyZWN0IGNhbGxzIHRvIGRhdGFQcml2IG1ldGhvZHMsIHRoZXNlIGNhbiBiZSBkZXByZWNhdGVkLlxuXHRfZGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIGRhdGFQcml2LmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdF9yZW1vdmVEYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIG5hbWUgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGRhdGE6IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdHZhciBpLCBuYW1lLCBkYXRhLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXSxcblx0XHRcdGF0dHJzID0gZWxlbSAmJiBlbGVtLmF0dHJpYnV0ZXM7XG5cblx0XHQvLyBHZXRzIGFsbCB2YWx1ZXNcblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCB0aGlzLmxlbmd0aCApIHtcblx0XHRcdFx0ZGF0YSA9IGRhdGFVc2VyLmdldCggZWxlbSApO1xuXG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAhZGF0YVByaXYuZ2V0KCBlbGVtLCBcImhhc0RhdGFBdHRyc1wiICkgKSB7XG5cdFx0XHRcdFx0aSA9IGF0dHJzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgMTEgb25seVxuXHRcdFx0XHRcdFx0Ly8gVGhlIGF0dHJzIGVsZW1lbnRzIGNhbiBiZSBudWxsICgjMTQ4OTQpXG5cdFx0XHRcdFx0XHRpZiAoIGF0dHJzWyBpIF0gKSB7XG5cdFx0XHRcdFx0XHRcdG5hbWUgPSBhdHRyc1sgaSBdLm5hbWU7XG5cdFx0XHRcdFx0XHRcdGlmICggbmFtZS5pbmRleE9mKCBcImRhdGEtXCIgKSA9PT0gMCApIHtcblx0XHRcdFx0XHRcdFx0XHRuYW1lID0gY2FtZWxDYXNlKCBuYW1lLnNsaWNlKCA1ICkgKTtcblx0XHRcdFx0XHRcdFx0XHRkYXRhQXR0ciggZWxlbSwgbmFtZSwgZGF0YVsgbmFtZSBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCBlbGVtLCBcImhhc0RhdGFBdHRyc1wiLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0cyBtdWx0aXBsZSB2YWx1ZXNcblx0XHRpZiAoIHR5cGVvZiBrZXkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGF0YVVzZXIuc2V0KCB0aGlzLCBrZXkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgZGF0YTtcblxuXHRcdFx0Ly8gVGhlIGNhbGxpbmcgalF1ZXJ5IG9iamVjdCAoZWxlbWVudCBtYXRjaGVzKSBpcyBub3QgZW1wdHlcblx0XHRcdC8vIChhbmQgdGhlcmVmb3JlIGhhcyBhbiBlbGVtZW50IGFwcGVhcnMgYXQgdGhpc1sgMCBdKSBhbmQgdGhlXG5cdFx0XHQvLyBgdmFsdWVgIHBhcmFtZXRlciB3YXMgbm90IHVuZGVmaW5lZC4gQW4gZW1wdHkgalF1ZXJ5IG9iamVjdFxuXHRcdFx0Ly8gd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgZm9yIGVsZW0gPSB0aGlzWyAwIF0gd2hpY2ggd2lsbFxuXHRcdFx0Ly8gdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFuIGF0dGVtcHQgdG8gcmVhZCBhIGRhdGEgY2FjaGUgaXMgbWFkZS5cblx0XHRcdGlmICggZWxlbSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgY2FjaGVcblx0XHRcdFx0Ly8gVGhlIGtleSB3aWxsIGFsd2F5cyBiZSBjYW1lbENhc2VkIGluIERhdGFcblx0XHRcdFx0ZGF0YSA9IGRhdGFVc2VyLmdldCggZWxlbSwga2V5ICk7XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBcImRpc2NvdmVyXCIgdGhlIGRhdGEgaW5cblx0XHRcdFx0Ly8gSFRNTDUgY3VzdG9tIGRhdGEtKiBhdHRyc1xuXHRcdFx0XHRkYXRhID0gZGF0YUF0dHIoIGVsZW0sIGtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIHRyaWVkIHJlYWxseSBoYXJkLCBidXQgdGhlIGRhdGEgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIGRhdGEuLi5cblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gV2UgYWx3YXlzIHN0b3JlIHRoZSBjYW1lbENhc2VkIGtleVxuXHRcdFx0XHRkYXRhVXNlci5zZXQoIHRoaXMsIGtleSwgdmFsdWUgKTtcblx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEsIG51bGwsIHRydWUgKTtcblx0fSxcblxuXHRyZW1vdmVEYXRhOiBmdW5jdGlvbigga2V5ICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGF0YVVzZXIucmVtb3ZlKCB0aGlzLCBrZXkgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgcXVldWU7XG5cblx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHR0eXBlID0gKCB0eXBlIHx8IFwiZnhcIiApICsgXCJxdWV1ZVwiO1xuXHRcdFx0cXVldWUgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIHR5cGUgKTtcblxuXHRcdFx0Ly8gU3BlZWQgdXAgZGVxdWV1ZSBieSBnZXR0aW5nIG91dCBxdWlja2x5IGlmIHRoaXMgaXMganVzdCBhIGxvb2t1cFxuXHRcdFx0aWYgKCBkYXRhICkge1xuXHRcdFx0XHRpZiAoICFxdWV1ZSB8fCBBcnJheS5pc0FycmF5KCBkYXRhICkgKSB7XG5cdFx0XHRcdFx0cXVldWUgPSBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIHR5cGUsIGpRdWVyeS5tYWtlQXJyYXkoIGRhdGEgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGRhdGEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHF1ZXVlIHx8IFtdO1xuXHRcdH1cblx0fSxcblxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSApIHtcblx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0XHR2YXIgcXVldWUgPSBqUXVlcnkucXVldWUoIGVsZW0sIHR5cGUgKSxcblx0XHRcdHN0YXJ0TGVuZ3RoID0gcXVldWUubGVuZ3RoLFxuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpLFxuXHRcdFx0aG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoIGVsZW0sIHR5cGUgKSxcblx0XHRcdG5leHQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIGVsZW0sIHR5cGUgKTtcblx0XHRcdH07XG5cblx0XHQvLyBJZiB0aGUgZnggcXVldWUgaXMgZGVxdWV1ZWQsIGFsd2F5cyByZW1vdmUgdGhlIHByb2dyZXNzIHNlbnRpbmVsXG5cdFx0aWYgKCBmbiA9PT0gXCJpbnByb2dyZXNzXCIgKSB7XG5cdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRzdGFydExlbmd0aC0tO1xuXHRcdH1cblxuXHRcdGlmICggZm4gKSB7XG5cblx0XHRcdC8vIEFkZCBhIHByb2dyZXNzIHNlbnRpbmVsIHRvIHByZXZlbnQgdGhlIGZ4IHF1ZXVlIGZyb20gYmVpbmdcblx0XHRcdC8vIGF1dG9tYXRpY2FsbHkgZGVxdWV1ZWRcblx0XHRcdGlmICggdHlwZSA9PT0gXCJmeFwiICkge1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KCBcImlucHJvZ3Jlc3NcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGVhciB1cCB0aGUgbGFzdCBxdWV1ZSBzdG9wIGZ1bmN0aW9uXG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcblx0XHRcdGZuLmNhbGwoIGVsZW0sIG5leHQsIGhvb2tzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhc3RhcnRMZW5ndGggJiYgaG9va3MgKSB7XG5cdFx0XHRob29rcy5lbXB0eS5maXJlKCk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIE5vdCBwdWJsaWMgLSBnZW5lcmF0ZSBhIHF1ZXVlSG9va3Mgb2JqZWN0LCBvciByZXR1cm4gdGhlIGN1cnJlbnQgb25lXG5cdF9xdWV1ZUhvb2tzOiBmdW5jdGlvbiggZWxlbSwgdHlwZSApIHtcblx0XHR2YXIga2V5ID0gdHlwZSArIFwicXVldWVIb29rc1wiO1xuXHRcdHJldHVybiBkYXRhUHJpdi5nZXQoIGVsZW0sIGtleSApIHx8IGRhdGFQcml2LmFjY2VzcyggZWxlbSwga2V5LCB7XG5cdFx0XHRlbXB0eTogalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICkuYWRkKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBbIHR5cGUgKyBcInF1ZXVlXCIsIGtleSBdICk7XG5cdFx0XHR9IClcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRxdWV1ZTogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIHNldHRlciA9IDI7XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0ZGF0YSA9IHR5cGU7XG5cdFx0XHR0eXBlID0gXCJmeFwiO1xuXHRcdFx0c2V0dGVyLS07XG5cdFx0fVxuXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoIDwgc2V0dGVyICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5xdWV1ZSggdGhpc1sgMCBdLCB0eXBlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHR0aGlzIDpcblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgZGF0YSApO1xuXG5cdFx0XHRcdC8vIEVuc3VyZSBhIGhvb2tzIGZvciB0aGlzIHF1ZXVlXG5cdFx0XHRcdGpRdWVyeS5fcXVldWVIb29rcyggdGhpcywgdHlwZSApO1xuXG5cdFx0XHRcdGlmICggdHlwZSA9PT0gXCJmeFwiICYmIHF1ZXVlWyAwIF0gIT09IFwiaW5wcm9ncmVzc1wiICkge1xuXHRcdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0fSxcblx0ZGVxdWV1ZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdH0gKTtcblx0fSxcblx0Y2xlYXJRdWV1ZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xuXHR9LFxuXG5cdC8vIEdldCBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiBxdWV1ZXMgb2YgYSBjZXJ0YWluIHR5cGVcblx0Ly8gYXJlIGVtcHRpZWQgKGZ4IGlzIHRoZSB0eXBlIGJ5IGRlZmF1bHQpXG5cdHByb21pc2U6IGZ1bmN0aW9uKCB0eXBlLCBvYmogKSB7XG5cdFx0dmFyIHRtcCxcblx0XHRcdGNvdW50ID0gMSxcblx0XHRcdGRlZmVyID0galF1ZXJ5LkRlZmVycmVkKCksXG5cdFx0XHRlbGVtZW50cyA9IHRoaXMsXG5cdFx0XHRpID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRyZXNvbHZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggISggLS1jb3VudCApICkge1xuXHRcdFx0XHRcdGRlZmVyLnJlc29sdmVXaXRoKCBlbGVtZW50cywgWyBlbGVtZW50cyBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0b2JqID0gdHlwZTtcblx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG1wID0gZGF0YVByaXYuZ2V0KCBlbGVtZW50c1sgaSBdLCB0eXBlICsgXCJxdWV1ZUhvb2tzXCIgKTtcblx0XHRcdGlmICggdG1wICYmIHRtcC5lbXB0eSApIHtcblx0XHRcdFx0Y291bnQrKztcblx0XHRcdFx0dG1wLmVtcHR5LmFkZCggcmVzb2x2ZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXNvbHZlKCk7XG5cdFx0cmV0dXJuIGRlZmVyLnByb21pc2UoIG9iaiApO1xuXHR9XG59ICk7XG52YXIgcG51bSA9ICggL1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8gKS5zb3VyY2U7XG5cbnZhciByY3NzTnVtID0gbmV3IFJlZ0V4cCggXCJeKD86KFsrLV0pPXwpKFwiICsgcG51bSArIFwiKShbYS16JV0qKSRcIiwgXCJpXCIgKTtcblxuXG52YXIgY3NzRXhwYW5kID0gWyBcIlRvcFwiLCBcIlJpZ2h0XCIsIFwiQm90dG9tXCIsIFwiTGVmdFwiIF07XG5cbnZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG5cdHZhciBpc0F0dGFjaGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKTtcblx0XHR9LFxuXHRcdGNvbXBvc2VkID0geyBjb21wb3NlZDogdHJ1ZSB9O1xuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTIgLSAxOCssIGlPUyAxMC4wIC0gMTAuMiBvbmx5XG5cdC8vIENoZWNrIGF0dGFjaG1lbnQgYWNyb3NzIHNoYWRvdyBET00gYm91bmRhcmllcyB3aGVuIHBvc3NpYmxlIChnaC0zNTA0KVxuXHQvLyBTdXBwb3J0OiBpT1MgMTAuMC0xMC4yIG9ubHlcblx0Ly8gRWFybHkgaU9TIDEwIHZlcnNpb25zIHN1cHBvcnQgYGF0dGFjaFNoYWRvd2AgYnV0IG5vdCBgZ2V0Um9vdE5vZGVgLFxuXHQvLyBsZWFkaW5nIHRvIGVycm9ycy4gV2UgbmVlZCB0byBjaGVjayBmb3IgYGdldFJvb3ROb2RlYC5cblx0aWYgKCBkb2N1bWVudEVsZW1lbnQuZ2V0Um9vdE5vZGUgKSB7XG5cdFx0aXNBdHRhY2hlZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICkgfHxcblx0XHRcdFx0ZWxlbS5nZXRSb290Tm9kZSggY29tcG9zZWQgKSA9PT0gZWxlbS5vd25lckRvY3VtZW50O1xuXHRcdH07XG5cdH1cbnZhciBpc0hpZGRlbldpdGhpblRyZWUgPSBmdW5jdGlvbiggZWxlbSwgZWwgKSB7XG5cblx0XHQvLyBpc0hpZGRlbldpdGhpblRyZWUgbWlnaHQgYmUgY2FsbGVkIGZyb20galF1ZXJ5I2ZpbHRlciBmdW5jdGlvbjtcblx0XHQvLyBpbiB0aGF0IGNhc2UsIGVsZW1lbnQgd2lsbCBiZSBzZWNvbmQgYXJndW1lbnRcblx0XHRlbGVtID0gZWwgfHwgZWxlbTtcblxuXHRcdC8vIElubGluZSBzdHlsZSB0cnVtcHMgYWxsXG5cdFx0cmV0dXJuIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHxcblx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJlxuXG5cdFx0XHQvLyBPdGhlcndpc2UsIGNoZWNrIGNvbXB1dGVkIHN0eWxlXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDMgLSA0NVxuXHRcdFx0Ly8gRGlzY29ubmVjdGVkIGVsZW1lbnRzIGNhbiBoYXZlIGNvbXB1dGVkIGRpc3BsYXk6IG5vbmUsIHNvIGZpcnN0IGNvbmZpcm0gdGhhdCBlbGVtIGlzXG5cdFx0XHQvLyBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0XHRpc0F0dGFjaGVkKCBlbGVtICkgJiZcblxuXHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSA9PT0gXCJub25lXCI7XG5cdH07XG5cbnZhciBzd2FwID0gZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrLCBhcmdzICkge1xuXHR2YXIgcmV0LCBuYW1lLFxuXHRcdG9sZCA9IHt9O1xuXG5cdC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0b2xkWyBuYW1lIF0gPSBlbGVtLnN0eWxlWyBuYW1lIF07XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb3B0aW9uc1sgbmFtZSBdO1xuXHR9XG5cblx0cmV0ID0gY2FsbGJhY2suYXBwbHkoIGVsZW0sIGFyZ3MgfHwgW10gKTtcblxuXHQvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IG9sZFsgbmFtZSBdO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn07XG5cblxuXG5cbmZ1bmN0aW9uIGFkanVzdENTUyggZWxlbSwgcHJvcCwgdmFsdWVQYXJ0cywgdHdlZW4gKSB7XG5cdHZhciBhZGp1c3RlZCwgc2NhbGUsXG5cdFx0bWF4SXRlcmF0aW9ucyA9IDIwLFxuXHRcdGN1cnJlbnRWYWx1ZSA9IHR3ZWVuID9cblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdHdlZW4uY3VyKCk7XG5cdFx0XHR9IDpcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5LmNzcyggZWxlbSwgcHJvcCwgXCJcIiApO1xuXHRcdFx0fSxcblx0XHRpbml0aWFsID0gY3VycmVudFZhbHVlKCksXG5cdFx0dW5pdCA9IHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0c1sgMyBdIHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApLFxuXG5cdFx0Ly8gU3RhcnRpbmcgdmFsdWUgY29tcHV0YXRpb24gaXMgcmVxdWlyZWQgZm9yIHBvdGVudGlhbCB1bml0IG1pc21hdGNoZXNcblx0XHRpbml0aWFsSW5Vbml0ID0gZWxlbS5ub2RlVHlwZSAmJlxuXHRcdFx0KCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gfHwgdW5pdCAhPT0gXCJweFwiICYmICtpbml0aWFsICkgJiZcblx0XHRcdHJjc3NOdW0uZXhlYyggalF1ZXJ5LmNzcyggZWxlbSwgcHJvcCApICk7XG5cblx0aWYgKCBpbml0aWFsSW5Vbml0ICYmIGluaXRpYWxJblVuaXRbIDMgXSAhPT0gdW5pdCApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD01NFxuXHRcdC8vIEhhbHZlIHRoZSBpdGVyYXRpb24gdGFyZ2V0IHZhbHVlIHRvIHByZXZlbnQgaW50ZXJmZXJlbmNlIGZyb20gQ1NTIHVwcGVyIGJvdW5kcyAoZ2gtMjE0NClcblx0XHRpbml0aWFsID0gaW5pdGlhbCAvIDI7XG5cblx0XHQvLyBUcnVzdCB1bml0cyByZXBvcnRlZCBieSBqUXVlcnkuY3NzXG5cdFx0dW5pdCA9IHVuaXQgfHwgaW5pdGlhbEluVW5pdFsgMyBdO1xuXG5cdFx0Ly8gSXRlcmF0aXZlbHkgYXBwcm94aW1hdGUgZnJvbSBhIG5vbnplcm8gc3RhcnRpbmcgcG9pbnRcblx0XHRpbml0aWFsSW5Vbml0ID0gK2luaXRpYWwgfHwgMTtcblxuXHRcdHdoaWxlICggbWF4SXRlcmF0aW9ucy0tICkge1xuXG5cdFx0XHQvLyBFdmFsdWF0ZSBhbmQgdXBkYXRlIG91ciBiZXN0IGd1ZXNzIChkb3VibGluZyBndWVzc2VzIHRoYXQgemVybyBvdXQpLlxuXHRcdFx0Ly8gRmluaXNoIGlmIHRoZSBzY2FsZSBlcXVhbHMgb3IgY3Jvc3NlcyAxIChtYWtpbmcgdGhlIG9sZCpuZXcgcHJvZHVjdCBub24tcG9zaXRpdmUpLlxuXHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCApO1xuXHRcdFx0aWYgKCAoIDEgLSBzY2FsZSApICogKCAxIC0gKCBzY2FsZSA9IGN1cnJlbnRWYWx1ZSgpIC8gaW5pdGlhbCB8fCAwLjUgKSApIDw9IDAgKSB7XG5cdFx0XHRcdG1heEl0ZXJhdGlvbnMgPSAwO1xuXHRcdFx0fVxuXHRcdFx0aW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgLyBzY2FsZTtcblxuXHRcdH1cblxuXHRcdGluaXRpYWxJblVuaXQgPSBpbml0aWFsSW5Vbml0ICogMjtcblx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIGluaXRpYWxJblVuaXQgKyB1bml0ICk7XG5cblx0XHQvLyBNYWtlIHN1cmUgd2UgdXBkYXRlIHRoZSB0d2VlbiBwcm9wZXJ0aWVzIGxhdGVyIG9uXG5cdFx0dmFsdWVQYXJ0cyA9IHZhbHVlUGFydHMgfHwgW107XG5cdH1cblxuXHRpZiAoIHZhbHVlUGFydHMgKSB7XG5cdFx0aW5pdGlhbEluVW5pdCA9ICtpbml0aWFsSW5Vbml0IHx8ICtpbml0aWFsIHx8IDA7XG5cblx0XHQvLyBBcHBseSByZWxhdGl2ZSBvZmZzZXQgKCs9Ly09KSBpZiBzcGVjaWZpZWRcblx0XHRhZGp1c3RlZCA9IHZhbHVlUGFydHNbIDEgXSA/XG5cdFx0XHRpbml0aWFsSW5Vbml0ICsgKCB2YWx1ZVBhcnRzWyAxIF0gKyAxICkgKiB2YWx1ZVBhcnRzWyAyIF0gOlxuXHRcdFx0K3ZhbHVlUGFydHNbIDIgXTtcblx0XHRpZiAoIHR3ZWVuICkge1xuXHRcdFx0dHdlZW4udW5pdCA9IHVuaXQ7XG5cdFx0XHR0d2Vlbi5zdGFydCA9IGluaXRpYWxJblVuaXQ7XG5cdFx0XHR0d2Vlbi5lbmQgPSBhZGp1c3RlZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGFkanVzdGVkO1xufVxuXG5cbnZhciBkZWZhdWx0RGlzcGxheU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0RGlzcGxheSggZWxlbSApIHtcblx0dmFyIHRlbXAsXG5cdFx0ZG9jID0gZWxlbS5vd25lckRvY3VtZW50LFxuXHRcdG5vZGVOYW1lID0gZWxlbS5ub2RlTmFtZSxcblx0XHRkaXNwbGF5ID0gZGVmYXVsdERpc3BsYXlNYXBbIG5vZGVOYW1lIF07XG5cblx0aWYgKCBkaXNwbGF5ICkge1xuXHRcdHJldHVybiBkaXNwbGF5O1xuXHR9XG5cblx0dGVtcCA9IGRvYy5ib2R5LmFwcGVuZENoaWxkKCBkb2MuY3JlYXRlRWxlbWVudCggbm9kZU5hbWUgKSApO1xuXHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggdGVtcCwgXCJkaXNwbGF5XCIgKTtcblxuXHR0ZW1wLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHRlbXAgKTtcblxuXHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdGRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdH1cblx0ZGVmYXVsdERpc3BsYXlNYXBbIG5vZGVOYW1lIF0gPSBkaXNwbGF5O1xuXG5cdHJldHVybiBkaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBzaG93SGlkZSggZWxlbWVudHMsIHNob3cgKSB7XG5cdHZhciBkaXNwbGF5LCBlbGVtLFxuXHRcdHZhbHVlcyA9IFtdLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBlbGVtZW50cy5sZW5ndGg7XG5cblx0Ly8gRGV0ZXJtaW5lIG5ldyBkaXNwbGF5IHZhbHVlIGZvciBlbGVtZW50cyB0aGF0IG5lZWQgdG8gY2hhbmdlXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0ZWxlbSA9IGVsZW1lbnRzWyBpbmRleCBdO1xuXHRcdGlmICggIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRkaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5O1xuXHRcdGlmICggc2hvdyApIHtcblxuXHRcdFx0Ly8gU2luY2Ugd2UgZm9yY2UgdmlzaWJpbGl0eSB1cG9uIGNhc2NhZGUtaGlkZGVuIGVsZW1lbnRzLCBhbiBpbW1lZGlhdGUgKGFuZCBzbG93KVxuXHRcdFx0Ly8gY2hlY2sgaXMgcmVxdWlyZWQgaW4gdGhpcyBmaXJzdCBsb29wIHVubGVzcyB3ZSBoYXZlIGEgbm9uZW1wdHkgZGlzcGxheSB2YWx1ZSAoZWl0aGVyXG5cdFx0XHQvLyBpbmxpbmUgb3IgYWJvdXQtdG8tYmUtcmVzdG9yZWQpXG5cdFx0XHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZGlzcGxheVwiICkgfHwgbnVsbDtcblx0XHRcdFx0aWYgKCAhdmFsdWVzWyBpbmRleCBdICkge1xuXHRcdFx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICggZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmIGlzSGlkZGVuV2l0aGluVHJlZSggZWxlbSApICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBnZXREZWZhdWx0RGlzcGxheSggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIGRpc3BsYXkgIT09IFwibm9uZVwiICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBcIm5vbmVcIjtcblxuXHRcdFx0XHQvLyBSZW1lbWJlciB3aGF0IHdlJ3JlIG92ZXJ3cml0aW5nXG5cdFx0XHRcdGRhdGFQcml2LnNldCggZWxlbSwgXCJkaXNwbGF5XCIsIGRpc3BsYXkgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIGRpc3BsYXkgb2YgdGhlIGVsZW1lbnRzIGluIGEgc2Vjb25kIGxvb3AgdG8gYXZvaWQgY29uc3RhbnQgcmVmbG93XG5cdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0aWYgKCB2YWx1ZXNbIGluZGV4IF0gIT0gbnVsbCApIHtcblx0XHRcdGVsZW1lbnRzWyBpbmRleCBdLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZXNbIGluZGV4IF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnRzO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcywgdHJ1ZSApO1xuXHR9LFxuXHRoaWRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2hvd0hpZGUoIHRoaXMgKTtcblx0fSxcblx0dG9nZ2xlOiBmdW5jdGlvbiggc3RhdGUgKSB7XG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGUgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdFx0cmV0dXJuIHN0YXRlID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggaXNIaWRkZW5XaXRoaW5UcmVlKCB0aGlzICkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcbnZhciByY2hlY2thYmxlVHlwZSA9ICggL14oPzpjaGVja2JveHxyYWRpbykkL2kgKTtcblxudmFyIHJ0YWdOYW1lID0gKCAvPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2kgKTtcblxudmFyIHJzY3JpcHRUeXBlID0gKCAvXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pICk7XG5cblxuXG4vLyBXZSBoYXZlIHRvIGNsb3NlIHRoZXNlIHRhZ3MgdG8gc3VwcG9ydCBYSFRNTCAoIzEzMjAwKVxudmFyIHdyYXBNYXAgPSB7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0b3B0aW9uOiBbIDEsIFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLCBcIjwvc2VsZWN0PlwiIF0sXG5cblx0Ly8gWEhUTUwgcGFyc2VycyBkbyBub3QgbWFnaWNhbGx5IGluc2VydCBlbGVtZW50cyBpbiB0aGVcblx0Ly8gc2FtZSB3YXkgdGhhdCB0YWcgc291cCBwYXJzZXJzIGRvLiBTbyB3ZSBjYW5ub3Qgc2hvcnRlblxuXHQvLyB0aGlzIGJ5IG9taXR0aW5nIDx0Ym9keT4gb3Igb3RoZXIgcmVxdWlyZWQgZWxlbWVudHMuXG5cdHRoZWFkOiBbIDEsIFwiPHRhYmxlPlwiLCBcIjwvdGFibGU+XCIgXSxcblx0Y29sOiBbIDIsIFwiPHRhYmxlPjxjb2xncm91cD5cIiwgXCI8L2NvbGdyb3VwPjwvdGFibGU+XCIgXSxcblx0dHI6IFsgMiwgXCI8dGFibGU+PHRib2R5PlwiLCBcIjwvdGJvZHk+PC90YWJsZT5cIiBdLFxuXHR0ZDogWyAzLCBcIjx0YWJsZT48dGJvZHk+PHRyPlwiLCBcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiIF0sXG5cblx0X2RlZmF1bHQ6IFsgMCwgXCJcIiwgXCJcIiBdXG59O1xuXG4vLyBTdXBwb3J0OiBJRSA8PTkgb25seVxud3JhcE1hcC5vcHRncm91cCA9IHdyYXBNYXAub3B0aW9uO1xuXG53cmFwTWFwLnRib2R5ID0gd3JhcE1hcC50Zm9vdCA9IHdyYXBNYXAuY29sZ3JvdXAgPSB3cmFwTWFwLmNhcHRpb24gPSB3cmFwTWFwLnRoZWFkO1xud3JhcE1hcC50aCA9IHdyYXBNYXAudGQ7XG5cblxuZnVuY3Rpb24gZ2V0QWxsKCBjb250ZXh0LCB0YWcgKSB7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHQvLyBVc2UgdHlwZW9mIHRvIGF2b2lkIHplcm8tYXJndW1lbnQgbWV0aG9kIGludm9jYXRpb24gb24gaG9zdCBvYmplY3RzICgjMTUxNTEpXG5cdHZhciByZXQ7XG5cblx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRyZXQgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgfHwgXCIqXCIgKTtcblxuXHR9IGVsc2UgaWYgKCB0eXBlb2YgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdHJldCA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnIHx8IFwiKlwiICk7XG5cblx0fSBlbHNlIHtcblx0XHRyZXQgPSBbXTtcblx0fVxuXG5cdGlmICggdGFnID09PSB1bmRlZmluZWQgfHwgdGFnICYmIG5vZGVOYW1lKCBjb250ZXh0LCB0YWcgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbIGNvbnRleHQgXSwgcmV0ICk7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuXG5cbi8vIE1hcmsgc2NyaXB0cyBhcyBoYXZpbmcgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZFxuZnVuY3Rpb24gc2V0R2xvYmFsRXZhbCggZWxlbXMsIHJlZkVsZW1lbnRzICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bCA9IGVsZW1zLmxlbmd0aDtcblxuXHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0ZGF0YVByaXYuc2V0KFxuXHRcdFx0ZWxlbXNbIGkgXSxcblx0XHRcdFwiZ2xvYmFsRXZhbFwiLFxuXHRcdFx0IXJlZkVsZW1lbnRzIHx8IGRhdGFQcml2LmdldCggcmVmRWxlbWVudHNbIGkgXSwgXCJnbG9iYWxFdmFsXCIgKVxuXHRcdCk7XG5cdH1cbn1cblxuXG52YXIgcmh0bWwgPSAvPHwmIz9cXHcrOy87XG5cbmZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQgKSB7XG5cdHZhciBlbGVtLCB0bXAsIHRhZywgd3JhcCwgYXR0YWNoZWQsIGosXG5cdFx0ZnJhZ21lbnQgPSBjb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRub2RlcyA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGVsZW0gPSBlbGVtc1sgaSBdO1xuXG5cdFx0aWYgKCBlbGVtIHx8IGVsZW0gPT09IDAgKSB7XG5cblx0XHRcdC8vIEFkZCBub2RlcyBkaXJlY3RseVxuXHRcdFx0aWYgKCB0b1R5cGUoIGVsZW0gKSA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIG5vZGVzLCBlbGVtLm5vZGVUeXBlID8gWyBlbGVtIF0gOiBlbGVtICk7XG5cblx0XHRcdC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxuXHRcdFx0fSBlbHNlIGlmICggIXJodG1sLnRlc3QoIGVsZW0gKSApIHtcblx0XHRcdFx0bm9kZXMucHVzaCggY29udGV4dC5jcmVhdGVUZXh0Tm9kZSggZWxlbSApICk7XG5cblx0XHRcdC8vIENvbnZlcnQgaHRtbCBpbnRvIERPTSBub2Rlc1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG1wID0gdG1wIHx8IGZyYWdtZW50LmFwcGVuZENoaWxkKCBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSApO1xuXG5cdFx0XHRcdC8vIERlc2VyaWFsaXplIGEgc3RhbmRhcmQgcmVwcmVzZW50YXRpb25cblx0XHRcdFx0dGFnID0gKCBydGFnTmFtZS5leGVjKCBlbGVtICkgfHwgWyBcIlwiLCBcIlwiIF0gKVsgMSBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdHdyYXAgPSB3cmFwTWFwWyB0YWcgXSB8fCB3cmFwTWFwLl9kZWZhdWx0O1xuXHRcdFx0XHR0bXAuaW5uZXJIVE1MID0gd3JhcFsgMSBdICsgalF1ZXJ5Lmh0bWxQcmVmaWx0ZXIoIGVsZW0gKSArIHdyYXBbIDIgXTtcblxuXHRcdFx0XHQvLyBEZXNjZW5kIHRocm91Z2ggd3JhcHBlcnMgdG8gdGhlIHJpZ2h0IGNvbnRlbnRcblx0XHRcdFx0aiA9IHdyYXBbIDAgXTtcblx0XHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdFx0dG1wID0gdG1wLmxhc3RDaGlsZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIHRtcC5jaGlsZE5vZGVzICk7XG5cblx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIHRvcC1sZXZlbCBjb250YWluZXJcblx0XHRcdFx0dG1wID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuXHRcdFx0XHQvLyBFbnN1cmUgdGhlIGNyZWF0ZWQgbm9kZXMgYXJlIG9ycGhhbmVkICgjMTIzOTIpXG5cdFx0XHRcdHRtcC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmVtb3ZlIHdyYXBwZXIgZnJvbSBmcmFnbWVudFxuXHRmcmFnbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cblx0aSA9IDA7XG5cdHdoaWxlICggKCBlbGVtID0gbm9kZXNbIGkrKyBdICkgKSB7XG5cblx0XHQvLyBTa2lwIGVsZW1lbnRzIGFscmVhZHkgaW4gdGhlIGNvbnRleHQgY29sbGVjdGlvbiAodHJhYy00MDg3KVxuXHRcdGlmICggc2VsZWN0aW9uICYmIGpRdWVyeS5pbkFycmF5KCBlbGVtLCBzZWxlY3Rpb24gKSA+IC0xICkge1xuXHRcdFx0aWYgKCBpZ25vcmVkICkge1xuXHRcdFx0XHRpZ25vcmVkLnB1c2goIGVsZW0gKTtcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGF0dGFjaGVkID0gaXNBdHRhY2hlZCggZWxlbSApO1xuXG5cdFx0Ly8gQXBwZW5kIHRvIGZyYWdtZW50XG5cdFx0dG1wID0gZ2V0QWxsKCBmcmFnbWVudC5hcHBlbmRDaGlsZCggZWxlbSApLCBcInNjcmlwdFwiICk7XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0aWYgKCBhdHRhY2hlZCApIHtcblx0XHRcdHNldEdsb2JhbEV2YWwoIHRtcCApO1xuXHRcdH1cblxuXHRcdC8vIENhcHR1cmUgZXhlY3V0YWJsZXNcblx0XHRpZiAoIHNjcmlwdHMgKSB7XG5cdFx0XHRqID0gMDtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gdG1wWyBqKysgXSApICkge1xuXHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIGVsZW0udHlwZSB8fCBcIlwiICkgKSB7XG5cdFx0XHRcdFx0c2NyaXB0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZnJhZ21lbnQ7XG59XG5cblxuKCBmdW5jdGlvbigpIHtcblx0dmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuXHRcdGRpdiA9IGZyYWdtZW50LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKSxcblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcblx0Ly8gQ2hlY2sgc3RhdGUgbG9zdCBpZiB0aGUgbmFtZSBpcyBzZXQgKCMxMTIxNylcblx0Ly8gU3VwcG9ydDogV2luZG93cyBXZWIgQXBwcyAoV1dBKVxuXHQvLyBgbmFtZWAgYW5kIGB0eXBlYCBtdXN0IHVzZSAuc2V0QXR0cmlidXRlIGZvciBXV0EgKCMxNDkwMSlcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJyYWRpb1wiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwidFwiICk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKCBpbnB1dCApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgb25seVxuXHQvLyBPbGRlciBXZWJLaXQgZG9lc24ndCBjbG9uZSBjaGVja2VkIHN0YXRlIGNvcnJlY3RseSBpbiBmcmFnbWVudHNcblx0c3VwcG9ydC5jaGVja0Nsb25lID0gZGl2LmNsb25lTm9kZSggdHJ1ZSApLmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5jaGVja2VkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNYWtlIHN1cmUgdGV4dGFyZWEgKGFuZCBjaGVja2JveCkgZGVmYXVsdFZhbHVlIGlzIHByb3Blcmx5IGNsb25lZFxuXHRkaXYuaW5uZXJIVE1MID0gXCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCI7XG5cdHN1cHBvcnQubm9DbG9uZUNoZWNrZWQgPSAhIWRpdi5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO1xufSApKCk7XG5cblxudmFyXG5cdHJrZXlFdmVudCA9IC9ea2V5Lyxcblx0cm1vdXNlRXZlbnQgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sXG5cdHJ0eXBlbmFtZXNwYWNlID0gL14oW14uXSopKD86XFwuKC4rKXwpLztcblxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDExK1xuLy8gZm9jdXMoKSBhbmQgYmx1cigpIGFyZSBhc3luY2hyb25vdXMsIGV4Y2VwdCB3aGVuIHRoZXkgYXJlIG5vLW9wLlxuLy8gU28gZXhwZWN0IGZvY3VzIHRvIGJlIHN5bmNocm9ub3VzIHdoZW4gdGhlIGVsZW1lbnQgaXMgYWxyZWFkeSBhY3RpdmUsXG4vLyBhbmQgYmx1ciB0byBiZSBzeW5jaHJvbm91cyB3aGVuIHRoZSBlbGVtZW50IGlzIG5vdCBhbHJlYWR5IGFjdGl2ZS5cbi8vIChmb2N1cyBhbmQgYmx1ciBhcmUgYWx3YXlzIHN5bmNocm9ub3VzIGluIG90aGVyIHN1cHBvcnRlZCBicm93c2Vycyxcbi8vIHRoaXMganVzdCBkZWZpbmVzIHdoZW4gd2UgY2FuIGNvdW50IG9uIGl0KS5cbmZ1bmN0aW9uIGV4cGVjdFN5bmMoIGVsZW0sIHR5cGUgKSB7XG5cdHJldHVybiAoIGVsZW0gPT09IHNhZmVBY3RpdmVFbGVtZW50KCkgKSA9PT0gKCB0eXBlID09PSBcImZvY3VzXCIgKTtcbn1cblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbi8vIEFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGNhbiB0aHJvdyB1bmV4cGVjdGVkbHlcbi8vIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMzM5M1xuZnVuY3Rpb24gc2FmZUFjdGl2ZUVsZW1lbnQoKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdH0gY2F0Y2ggKCBlcnIgKSB7IH1cbn1cblxuZnVuY3Rpb24gb24oIGVsZW0sIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIG9uZSApIHtcblx0dmFyIG9yaWdGbiwgdHlwZTtcblxuXHQvLyBUeXBlcyBjYW4gYmUgYSBtYXAgb2YgdHlwZXMvaGFuZGxlcnNcblx0aWYgKCB0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHQvLyAoIHR5cGVzLU9iamVjdCwgc2VsZWN0b3IsIGRhdGEgKVxuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLU9iamVjdCwgZGF0YSApXG5cdFx0XHRkYXRhID0gZGF0YSB8fCBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuXHRcdFx0b24oIGVsZW0sIHR5cGUsIHNlbGVjdG9yLCBkYXRhLCB0eXBlc1sgdHlwZSBdLCBvbmUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsZW07XG5cdH1cblxuXHRpZiAoIGRhdGEgPT0gbnVsbCAmJiBmbiA9PSBudWxsICkge1xuXG5cdFx0Ly8gKCB0eXBlcywgZm4gKVxuXHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0ZGF0YSA9IHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCBmbiA9PSBudWxsICkge1xuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLCBzZWxlY3RvciwgZm4gKVxuXHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyAoIHR5cGVzLCBkYXRhLCBmbiApXG5cdFx0XHRmbiA9IGRhdGE7XG5cdFx0XHRkYXRhID0gc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0aWYgKCBmbiA9PT0gZmFsc2UgKSB7XG5cdFx0Zm4gPSByZXR1cm5GYWxzZTtcblx0fSBlbHNlIGlmICggIWZuICkge1xuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0aWYgKCBvbmUgPT09IDEgKSB7XG5cdFx0b3JpZ0ZuID0gZm47XG5cdFx0Zm4gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vIENhbiB1c2UgYW4gZW1wdHkgc2V0LCBzaW5jZSBldmVudCBjb250YWlucyB0aGUgaW5mb1xuXHRcdFx0alF1ZXJ5KCkub2ZmKCBldmVudCApO1xuXHRcdFx0cmV0dXJuIG9yaWdGbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0fTtcblxuXHRcdC8vIFVzZSBzYW1lIGd1aWQgc28gY2FsbGVyIGNhbiByZW1vdmUgdXNpbmcgb3JpZ0ZuXG5cdFx0Zm4uZ3VpZCA9IG9yaWdGbi5ndWlkIHx8ICggb3JpZ0ZuLmd1aWQgPSBqUXVlcnkuZ3VpZCsrICk7XG5cdH1cblx0cmV0dXJuIGVsZW0uZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0alF1ZXJ5LmV2ZW50LmFkZCggdGhpcywgdHlwZXMsIGZuLCBkYXRhLCBzZWxlY3RvciApO1xuXHR9ICk7XG59XG5cbi8qXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBtYW5hZ2luZyBldmVudHMgLS0gbm90IHBhcnQgb2YgdGhlIHB1YmxpYyBpbnRlcmZhY2UuXG4gKiBQcm9wcyB0byBEZWFuIEVkd2FyZHMnIGFkZEV2ZW50IGxpYnJhcnkgZm9yIG1hbnkgb2YgdGhlIGlkZWFzLlxuICovXG5qUXVlcnkuZXZlbnQgPSB7XG5cblx0Z2xvYmFsOiB7fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlcywgaGFuZGxlciwgZGF0YSwgc2VsZWN0b3IgKSB7XG5cblx0XHR2YXIgaGFuZGxlT2JqSW4sIGV2ZW50SGFuZGxlLCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHQvLyBEb24ndCBhdHRhY2ggZXZlbnRzIHRvIG5vRGF0YSBvciB0ZXh0L2NvbW1lbnQgbm9kZXMgKGJ1dCBhbGxvdyBwbGFpbiBvYmplY3RzKVxuXHRcdGlmICggIWVsZW1EYXRhICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhbiBvYmplY3Qgb2YgY3VzdG9tIGRhdGEgaW4gbGlldSBvZiB0aGUgaGFuZGxlclxuXHRcdGlmICggaGFuZGxlci5oYW5kbGVyICkge1xuXHRcdFx0aGFuZGxlT2JqSW4gPSBoYW5kbGVyO1xuXHRcdFx0aGFuZGxlciA9IGhhbmRsZU9iakluLmhhbmRsZXI7XG5cdFx0XHRzZWxlY3RvciA9IGhhbmRsZU9iakluLnNlbGVjdG9yO1xuXHRcdH1cblxuXHRcdC8vIEVuc3VyZSB0aGF0IGludmFsaWQgc2VsZWN0b3JzIHRocm93IGV4Y2VwdGlvbnMgYXQgYXR0YWNoIHRpbWVcblx0XHQvLyBFdmFsdWF0ZSBhZ2FpbnN0IGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGVsZW0gaXMgYSBub24tZWxlbWVudCBub2RlIChlLmcuLCBkb2N1bWVudClcblx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0alF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBkb2N1bWVudEVsZW1lbnQsIHNlbGVjdG9yICk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgdGhlIGhhbmRsZXIgaGFzIGEgdW5pcXVlIElELCB1c2VkIHRvIGZpbmQvcmVtb3ZlIGl0IGxhdGVyXG5cdFx0aWYgKCAhaGFuZGxlci5ndWlkICkge1xuXHRcdFx0aGFuZGxlci5ndWlkID0galF1ZXJ5Lmd1aWQrKztcblx0XHR9XG5cblx0XHQvLyBJbml0IHRoZSBlbGVtZW50J3MgZXZlbnQgc3RydWN0dXJlIGFuZCBtYWluIGhhbmRsZXIsIGlmIHRoaXMgaXMgdGhlIGZpcnN0XG5cdFx0aWYgKCAhKCBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgKSApIHtcblx0XHRcdGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyA9IHt9O1xuXHRcdH1cblx0XHRpZiAoICEoIGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlICkgKSB7XG5cdFx0XHRldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSA9IGZ1bmN0aW9uKCBlICkge1xuXG5cdFx0XHRcdC8vIERpc2NhcmQgdGhlIHNlY29uZCBldmVudCBvZiBhIGpRdWVyeS5ldmVudC50cmlnZ2VyKCkgYW5kXG5cdFx0XHRcdC8vIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIGFmdGVyIGEgcGFnZSBoYXMgdW5sb2FkZWRcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIgJiYgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCAhPT0gZS50eXBlID9cblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuZGlzcGF0Y2guYXBwbHkoIGVsZW0sIGFyZ3VtZW50cyApIDogdW5kZWZpbmVkO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgbXVsdGlwbGUgZXZlbnRzIHNlcGFyYXRlZCBieSBhIHNwYWNlXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKCB0LS0gKSB7XG5cdFx0XHR0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKCB0eXBlc1sgdCBdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbIDEgXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cblx0XHRcdC8vIFRoZXJlICptdXN0KiBiZSBhIHR5cGUsIG5vIGF0dGFjaGluZyBuYW1lc3BhY2Utb25seSBoYW5kbGVyc1xuXHRcdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGV2ZW50IGNoYW5nZXMgaXRzIHR5cGUsIHVzZSB0aGUgc3BlY2lhbCBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNoYW5nZWQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIElmIHNlbGVjdG9yIGRlZmluZWQsIGRldGVybWluZSBzcGVjaWFsIGV2ZW50IGFwaSB0eXBlLCBvdGhlcndpc2UgZ2l2ZW4gdHlwZVxuXHRcdFx0dHlwZSA9ICggc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgKSB8fCB0eXBlO1xuXG5cdFx0XHQvLyBVcGRhdGUgc3BlY2lhbCBiYXNlZCBvbiBuZXdseSByZXNldCB0eXBlXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblxuXHRcdFx0Ly8gaGFuZGxlT2JqIGlzIHBhc3NlZCB0byBhbGwgZXZlbnQgaGFuZGxlcnNcblx0XHRcdGhhbmRsZU9iaiA9IGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0b3JpZ1R5cGU6IG9yaWdUeXBlLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRoYW5kbGVyOiBoYW5kbGVyLFxuXHRcdFx0XHRndWlkOiBoYW5kbGVyLmd1aWQsXG5cdFx0XHRcdHNlbGVjdG9yOiBzZWxlY3Rvcixcblx0XHRcdFx0bmVlZHNDb250ZXh0OiBzZWxlY3RvciAmJiBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSxcblx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2VzLmpvaW4oIFwiLlwiIClcblx0XHRcdH0sIGhhbmRsZU9iakluICk7XG5cblx0XHRcdC8vIEluaXQgdGhlIGV2ZW50IGhhbmRsZXIgcXVldWUgaWYgd2UncmUgdGhlIGZpcnN0XG5cdFx0XHRpZiAoICEoIGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gKSApIHtcblx0XHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSA9IFtdO1xuXHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50ID0gMDtcblxuXHRcdFx0XHQvLyBPbmx5IHVzZSBhZGRFdmVudExpc3RlbmVyIGlmIHRoZSBzcGVjaWFsIGV2ZW50cyBoYW5kbGVyIHJldHVybnMgZmFsc2Vcblx0XHRcdFx0aWYgKCAhc3BlY2lhbC5zZXR1cCB8fFxuXHRcdFx0XHRcdHNwZWNpYWwuc2V0dXAuY2FsbCggZWxlbSwgZGF0YSwgbmFtZXNwYWNlcywgZXZlbnRIYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRpZiAoIGVsZW0uYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdFx0XHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgZXZlbnRIYW5kbGUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzcGVjaWFsLmFkZCApIHtcblx0XHRcdFx0c3BlY2lhbC5hZGQuY2FsbCggZWxlbSwgaGFuZGxlT2JqICk7XG5cblx0XHRcdFx0aWYgKCAhaGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlci5ndWlkID0gaGFuZGxlci5ndWlkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCB0byB0aGUgZWxlbWVudCdzIGhhbmRsZXIgbGlzdCwgZGVsZWdhdGVzIGluIGZyb250XG5cdFx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0XHRoYW5kbGVycy5zcGxpY2UoIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQrKywgMCwgaGFuZGxlT2JqICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gS2VlcCB0cmFjayBvZiB3aGljaCBldmVudHMgaGF2ZSBldmVyIGJlZW4gdXNlZCwgZm9yIGV2ZW50IG9wdGltaXphdGlvblxuXHRcdFx0alF1ZXJ5LmV2ZW50Lmdsb2JhbFsgdHlwZSBdID0gdHJ1ZTtcblx0XHR9XG5cblx0fSxcblxuXHQvLyBEZXRhY2ggYW4gZXZlbnQgb3Igc2V0IG9mIGV2ZW50cyBmcm9tIGFuIGVsZW1lbnRcblx0cmVtb3ZlOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIHNlbGVjdG9yLCBtYXBwZWRUeXBlcyApIHtcblxuXHRcdHZhciBqLCBvcmlnQ291bnQsIHRtcCxcblx0XHRcdGV2ZW50cywgdCwgaGFuZGxlT2JqLFxuXHRcdFx0c3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxuXHRcdFx0ZWxlbURhdGEgPSBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICkgJiYgZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHRpZiAoICFlbGVtRGF0YSB8fCAhKCBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBPbmNlIGZvciBlYWNoIHR5cGUubmFtZXNwYWNlIGluIHR5cGVzOyB0eXBlIG1heSBiZSBvbWl0dGVkXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKCB0LS0gKSB7XG5cdFx0XHR0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKCB0eXBlc1sgdCBdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbIDEgXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cblx0XHRcdC8vIFVuYmluZCBhbGwgZXZlbnRzIChvbiB0aGlzIG5hbWVzcGFjZSwgaWYgcHJvdmlkZWQpIGZvciB0aGUgZWxlbWVudFxuXHRcdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdFx0Zm9yICggdHlwZSBpbiBldmVudHMgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggZWxlbSwgdHlwZSArIHR5cGVzWyB0IF0sIGhhbmRsZXIsIHNlbGVjdG9yLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXHRcdFx0dHlwZSA9ICggc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgKSB8fCB0eXBlO1xuXHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSB8fCBbXTtcblx0XHRcdHRtcCA9IHRtcFsgMiBdICYmXG5cdFx0XHRcdG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApO1xuXG5cdFx0XHQvLyBSZW1vdmUgbWF0Y2hpbmcgZXZlbnRzXG5cdFx0XHRvcmlnQ291bnQgPSBqID0gaGFuZGxlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdGhhbmRsZU9iaiA9IGhhbmRsZXJzWyBqIF07XG5cblx0XHRcdFx0aWYgKCAoIG1hcHBlZFR5cGVzIHx8IG9yaWdUeXBlID09PSBoYW5kbGVPYmoub3JpZ1R5cGUgKSAmJlxuXHRcdFx0XHRcdCggIWhhbmRsZXIgfHwgaGFuZGxlci5ndWlkID09PSBoYW5kbGVPYmouZ3VpZCApICYmXG5cdFx0XHRcdFx0KCAhdG1wIHx8IHRtcC50ZXN0KCBoYW5kbGVPYmoubmFtZXNwYWNlICkgKSAmJlxuXHRcdFx0XHRcdCggIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBoYW5kbGVPYmouc2VsZWN0b3IgfHxcblx0XHRcdFx0XHRcdHNlbGVjdG9yID09PSBcIioqXCIgJiYgaGFuZGxlT2JqLnNlbGVjdG9yICkgKSB7XG5cdFx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBqLCAxICk7XG5cblx0XHRcdFx0XHRpZiAoIGhhbmRsZU9iai5zZWxlY3RvciApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJzLmRlbGVnYXRlQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBzcGVjaWFsLnJlbW92ZSApIHtcblx0XHRcdFx0XHRcdHNwZWNpYWwucmVtb3ZlLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgZ2VuZXJpYyBldmVudCBoYW5kbGVyIGlmIHdlIHJlbW92ZWQgc29tZXRoaW5nIGFuZCBubyBtb3JlIGhhbmRsZXJzIGV4aXN0XG5cdFx0XHQvLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcblx0XHRcdGlmICggb3JpZ0NvdW50ICYmICFoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRcdGlmICggIXNwZWNpYWwudGVhcmRvd24gfHxcblx0XHRcdFx0XHRzcGVjaWFsLnRlYXJkb3duLmNhbGwoIGVsZW0sIG5hbWVzcGFjZXMsIGVsZW1EYXRhLmhhbmRsZSApID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZWxlbURhdGEuaGFuZGxlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWxldGUgZXZlbnRzWyB0eXBlIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIGRhdGEgYW5kIHRoZSBleHBhbmRvIGlmIGl0J3Mgbm8gbG9uZ2VyIHVzZWRcblx0XHRpZiAoIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBldmVudHMgKSApIHtcblx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgXCJoYW5kbGUgZXZlbnRzXCIgKTtcblx0XHR9XG5cdH0sXG5cblx0ZGlzcGF0Y2g6IGZ1bmN0aW9uKCBuYXRpdmVFdmVudCApIHtcblxuXHRcdC8vIE1ha2UgYSB3cml0YWJsZSBqUXVlcnkuRXZlbnQgZnJvbSB0aGUgbmF0aXZlIGV2ZW50IG9iamVjdFxuXHRcdHZhciBldmVudCA9IGpRdWVyeS5ldmVudC5maXgoIG5hdGl2ZUV2ZW50ICk7XG5cblx0XHR2YXIgaSwgaiwgcmV0LCBtYXRjaGVkLCBoYW5kbGVPYmosIGhhbmRsZXJRdWV1ZSxcblx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkoIGFyZ3VtZW50cy5sZW5ndGggKSxcblx0XHRcdGhhbmRsZXJzID0gKCBkYXRhUHJpdi5nZXQoIHRoaXMsIFwiZXZlbnRzXCIgKSB8fCB7fSApWyBldmVudC50eXBlIF0gfHwgW10sXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGV2ZW50LnR5cGUgXSB8fCB7fTtcblxuXHRcdC8vIFVzZSB0aGUgZml4LWVkIGpRdWVyeS5FdmVudCByYXRoZXIgdGhhbiB0aGUgKHJlYWQtb25seSkgbmF0aXZlIGV2ZW50XG5cdFx0YXJnc1sgMCBdID0gZXZlbnQ7XG5cblx0XHRmb3IgKCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGFyZ3NbIGkgXSA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdH1cblxuXHRcdGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gdGhpcztcblxuXHRcdC8vIENhbGwgdGhlIHByZURpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZSwgYW5kIGxldCBpdCBiYWlsIGlmIGRlc2lyZWRcblx0XHRpZiAoIHNwZWNpYWwucHJlRGlzcGF0Y2ggJiYgc3BlY2lhbC5wcmVEaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgaGFuZGxlcnNcblx0XHRoYW5kbGVyUXVldWUgPSBqUXVlcnkuZXZlbnQuaGFuZGxlcnMuY2FsbCggdGhpcywgZXZlbnQsIGhhbmRsZXJzICk7XG5cblx0XHQvLyBSdW4gZGVsZWdhdGVzIGZpcnN0OyB0aGV5IG1heSB3YW50IHRvIHN0b3AgcHJvcGFnYXRpb24gYmVuZWF0aCB1c1xuXHRcdGkgPSAwO1xuXHRcdHdoaWxlICggKCBtYXRjaGVkID0gaGFuZGxlclF1ZXVlWyBpKysgXSApICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXHRcdFx0ZXZlbnQuY3VycmVudFRhcmdldCA9IG1hdGNoZWQuZWxlbTtcblxuXHRcdFx0aiA9IDA7XG5cdFx0XHR3aGlsZSAoICggaGFuZGxlT2JqID0gbWF0Y2hlZC5oYW5kbGVyc1sgaisrIF0gKSAmJlxuXHRcdFx0XHQhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblxuXHRcdFx0XHQvLyBJZiB0aGUgZXZlbnQgaXMgbmFtZXNwYWNlZCwgdGhlbiBlYWNoIGhhbmRsZXIgaXMgb25seSBpbnZva2VkIGlmIGl0IGlzXG5cdFx0XHRcdC8vIHNwZWNpYWxseSB1bml2ZXJzYWwgb3IgaXRzIG5hbWVzcGFjZXMgYXJlIGEgc3VwZXJzZXQgb2YgdGhlIGV2ZW50J3MuXG5cdFx0XHRcdGlmICggIWV2ZW50LnJuYW1lc3BhY2UgfHwgaGFuZGxlT2JqLm5hbWVzcGFjZSA9PT0gZmFsc2UgfHxcblx0XHRcdFx0XHRldmVudC5ybmFtZXNwYWNlLnRlc3QoIGhhbmRsZU9iai5uYW1lc3BhY2UgKSApIHtcblxuXHRcdFx0XHRcdGV2ZW50LmhhbmRsZU9iaiA9IGhhbmRsZU9iajtcblx0XHRcdFx0XHRldmVudC5kYXRhID0gaGFuZGxlT2JqLmRhdGE7XG5cblx0XHRcdFx0XHRyZXQgPSAoICggalF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGhhbmRsZU9iai5vcmlnVHlwZSBdIHx8IHt9ICkuaGFuZGxlIHx8XG5cdFx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlciApLmFwcGx5KCBtYXRjaGVkLmVsZW0sIGFyZ3MgKTtcblxuXHRcdFx0XHRcdGlmICggcmV0ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZXZlbnQucmVzdWx0ID0gcmV0ICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsIHRoZSBwb3N0RGlzcGF0Y2ggaG9vayBmb3IgdGhlIG1hcHBlZCB0eXBlXG5cdFx0aWYgKCBzcGVjaWFsLnBvc3REaXNwYXRjaCApIHtcblx0XHRcdHNwZWNpYWwucG9zdERpc3BhdGNoLmNhbGwoIHRoaXMsIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHRoYW5kbGVyczogZnVuY3Rpb24oIGV2ZW50LCBoYW5kbGVycyApIHtcblx0XHR2YXIgaSwgaGFuZGxlT2JqLCBzZWwsIG1hdGNoZWRIYW5kbGVycywgbWF0Y2hlZFNlbGVjdG9ycyxcblx0XHRcdGhhbmRsZXJRdWV1ZSA9IFtdLFxuXHRcdFx0ZGVsZWdhdGVDb3VudCA9IGhhbmRsZXJzLmRlbGVnYXRlQ291bnQsXG5cdFx0XHRjdXIgPSBldmVudC50YXJnZXQ7XG5cblx0XHQvLyBGaW5kIGRlbGVnYXRlIGhhbmRsZXJzXG5cdFx0aWYgKCBkZWxlZ2F0ZUNvdW50ICYmXG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OVxuXHRcdFx0Ly8gQmxhY2staG9sZSBTVkcgPHVzZT4gaW5zdGFuY2UgdHJlZXMgKHRyYWMtMTMxODApXG5cdFx0XHRjdXIubm9kZVR5cGUgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQyXG5cdFx0XHQvLyBTdXBwcmVzcyBzcGVjLXZpb2xhdGluZyBjbGlja3MgaW5kaWNhdGluZyBhIG5vbi1wcmltYXJ5IHBvaW50ZXIgYnV0dG9uICh0cmFjLTM4NjEpXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudC10eXBlLWNsaWNrXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG5cdFx0XHQvLyAuLi5idXQgbm90IGFycm93IGtleSBcImNsaWNrc1wiIG9mIHJhZGlvIGlucHV0cywgd2hpY2ggY2FuIGhhdmUgYGJ1dHRvbmAgLTEgKGdoLTIzNDMpXG5cdFx0XHQhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgZXZlbnQuYnV0dG9uID49IDEgKSApIHtcblxuXHRcdFx0Zm9yICggOyBjdXIgIT09IHRoaXM7IGN1ciA9IGN1ci5wYXJlbnROb2RlIHx8IHRoaXMgKSB7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgY2hlY2sgbm9uLWVsZW1lbnRzICgjMTMyMDgpXG5cdFx0XHRcdC8vIERvbid0IHByb2Nlc3MgY2xpY2tzIG9uIGRpc2FibGVkIGVsZW1lbnRzICgjNjkxMSwgIzgxNjUsICMxMTM4MiwgIzExNzY0KVxuXHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA9PT0gMSAmJiAhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgY3VyLmRpc2FibGVkID09PSB0cnVlICkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0bWF0Y2hlZFNlbGVjdG9ycyA9IHt9O1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbIGkgXTtcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKCMxMzIwMylcblx0XHRcdFx0XHRcdHNlbCA9IGhhbmRsZU9iai5zZWxlY3RvciArIFwiIFwiO1xuXG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdID0gaGFuZGxlT2JqLm5lZWRzQ29udGV4dCA/XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCBzZWwsIHRoaXMgKS5pbmRleCggY3VyICkgPiAtMSA6XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmZpbmQoIHNlbCwgdGhpcywgbnVsbCwgWyBjdXIgXSApLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZWRIYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkSGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goIHsgZWxlbTogY3VyLCBoYW5kbGVyczogbWF0Y2hlZEhhbmRsZXJzIH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIHJlbWFpbmluZyAoZGlyZWN0bHktYm91bmQpIGhhbmRsZXJzXG5cdFx0Y3VyID0gdGhpcztcblx0XHRpZiAoIGRlbGVnYXRlQ291bnQgPCBoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRoYW5kbGVyUXVldWUucHVzaCggeyBlbGVtOiBjdXIsIGhhbmRsZXJzOiBoYW5kbGVycy5zbGljZSggZGVsZWdhdGVDb3VudCApIH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaGFuZGxlclF1ZXVlO1xuXHR9LFxuXG5cdGFkZFByb3A6IGZ1bmN0aW9uKCBuYW1lLCBob29rICkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSwgbmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblxuXHRcdFx0Z2V0OiBpc0Z1bmN0aW9uKCBob29rICkgP1xuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGhvb2soIHRoaXMub3JpZ2luYWxFdmVudCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50WyBuYW1lIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCBuYW1lLCB7XG5cdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0Zml4OiBmdW5jdGlvbiggb3JpZ2luYWxFdmVudCApIHtcblx0XHRyZXR1cm4gb3JpZ2luYWxFdmVudFsgalF1ZXJ5LmV4cGFuZG8gXSA/XG5cdFx0XHRvcmlnaW5hbEV2ZW50IDpcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoIG9yaWdpbmFsRXZlbnQgKTtcblx0fSxcblxuXHRzcGVjaWFsOiB7XG5cdFx0bG9hZDoge1xuXG5cdFx0XHQvLyBQcmV2ZW50IHRyaWdnZXJlZCBpbWFnZS5sb2FkIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHRvIHdpbmRvdy5sb2FkXG5cdFx0XHRub0J1YmJsZTogdHJ1ZVxuXHRcdH0sXG5cdFx0Y2xpY2s6IHtcblxuXHRcdFx0Ly8gVXRpbGl6ZSBuYXRpdmUgZXZlbnQgdG8gZW5zdXJlIGNvcnJlY3Qgc3RhdGUgZm9yIGNoZWNrYWJsZSBpbnB1dHNcblx0XHRcdHNldHVwOiBmdW5jdGlvbiggZGF0YSApIHtcblxuXHRcdFx0XHQvLyBGb3IgbXV0dWFsIGNvbXByZXNzaWJpbGl0eSB3aXRoIF9kZWZhdWx0LCByZXBsYWNlIGB0aGlzYCBhY2Nlc3Mgd2l0aCBhIGxvY2FsIHZhci5cblx0XHRcdFx0Ly8gYHx8IGRhdGFgIGlzIGRlYWQgY29kZSBtZWFudCBvbmx5IHRvIHByZXNlcnZlIHRoZSB2YXJpYWJsZSB0aHJvdWdoIG1pbmlmaWNhdGlvbi5cblx0XHRcdFx0dmFyIGVsID0gdGhpcyB8fCBkYXRhO1xuXG5cdFx0XHRcdC8vIENsYWltIHRoZSBmaXJzdCBoYW5kbGVyXG5cdFx0XHRcdGlmICggcmNoZWNrYWJsZVR5cGUudGVzdCggZWwudHlwZSApICYmXG5cdFx0XHRcdFx0ZWwuY2xpY2sgJiYgbm9kZU5hbWUoIGVsLCBcImlucHV0XCIgKSApIHtcblxuXHRcdFx0XHRcdC8vIGRhdGFQcml2LnNldCggZWwsIFwiY2xpY2tcIiwgLi4uIClcblx0XHRcdFx0XHRsZXZlcmFnZU5hdGl2ZSggZWwsIFwiY2xpY2tcIiwgcmV0dXJuVHJ1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGZhbHNlIHRvIGFsbG93IG5vcm1hbCBwcm9jZXNzaW5nIGluIHRoZSBjYWxsZXJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCBkYXRhICkge1xuXG5cdFx0XHRcdC8vIEZvciBtdXR1YWwgY29tcHJlc3NpYmlsaXR5IHdpdGggX2RlZmF1bHQsIHJlcGxhY2UgYHRoaXNgIGFjY2VzcyB3aXRoIGEgbG9jYWwgdmFyLlxuXHRcdFx0XHQvLyBgfHwgZGF0YWAgaXMgZGVhZCBjb2RlIG1lYW50IG9ubHkgdG8gcHJlc2VydmUgdGhlIHZhcmlhYmxlIHRocm91Z2ggbWluaWZpY2F0aW9uLlxuXHRcdFx0XHR2YXIgZWwgPSB0aGlzIHx8IGRhdGE7XG5cblx0XHRcdFx0Ly8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJpbmcgYSBjbGlja1xuXHRcdFx0XHRpZiAoIHJjaGVja2FibGVUeXBlLnRlc3QoIGVsLnR5cGUgKSAmJlxuXHRcdFx0XHRcdGVsLmNsaWNrICYmIG5vZGVOYW1lKCBlbCwgXCJpbnB1dFwiICkgKSB7XG5cblx0XHRcdFx0XHRsZXZlcmFnZU5hdGl2ZSggZWwsIFwiY2xpY2tcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIG5vbi1mYWxzZSB0byBhbGxvdyBub3JtYWwgZXZlbnQtcGF0aCBwcm9wYWdhdGlvblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIEZvciBjcm9zcy1icm93c2VyIGNvbnNpc3RlbmN5LCBzdXBwcmVzcyBuYXRpdmUgLmNsaWNrKCkgb24gbGlua3Ncblx0XHRcdC8vIEFsc28gcHJldmVudCBpdCBpZiB3ZSdyZSBjdXJyZW50bHkgaW5zaWRlIGEgbGV2ZXJhZ2VkIG5hdGl2ZS1ldmVudCBzdGFja1xuXHRcdFx0X2RlZmF1bHQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRcdFx0cmV0dXJuIHJjaGVja2FibGVUeXBlLnRlc3QoIHRhcmdldC50eXBlICkgJiZcblx0XHRcdFx0XHR0YXJnZXQuY2xpY2sgJiYgbm9kZU5hbWUoIHRhcmdldCwgXCJpbnB1dFwiICkgJiZcblx0XHRcdFx0XHRkYXRhUHJpdi5nZXQoIHRhcmdldCwgXCJjbGlja1wiICkgfHxcblx0XHRcdFx0XHRub2RlTmFtZSggdGFyZ2V0LCBcImFcIiApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmV1bmxvYWQ6IHtcblx0XHRcdHBvc3REaXNwYXRjaDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggMjArXG5cdFx0XHRcdC8vIEZpcmVmb3ggZG9lc24ndCBhbGVydCBpZiB0aGUgcmV0dXJuVmFsdWUgZmllbGQgaXMgbm90IHNldC5cblx0XHRcdFx0aWYgKCBldmVudC5yZXN1bHQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdGV2ZW50Lm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBldmVudC5yZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIEVuc3VyZSB0aGUgcHJlc2VuY2Ugb2YgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBoYW5kbGVzIG1hbnVhbGx5LXRyaWdnZXJlZFxuLy8gc3ludGhldGljIGV2ZW50cyBieSBpbnRlcnJ1cHRpbmcgcHJvZ3Jlc3MgdW50aWwgcmVpbnZva2VkIGluIHJlc3BvbnNlIHRvXG4vLyAqbmF0aXZlKiBldmVudHMgdGhhdCBpdCBmaXJlcyBkaXJlY3RseSwgZW5zdXJpbmcgdGhhdCBzdGF0ZSBjaGFuZ2VzIGhhdmVcbi8vIGFscmVhZHkgb2NjdXJyZWQgYmVmb3JlIG90aGVyIGxpc3RlbmVycyBhcmUgaW52b2tlZC5cbmZ1bmN0aW9uIGxldmVyYWdlTmF0aXZlKCBlbCwgdHlwZSwgZXhwZWN0U3luYyApIHtcblxuXHQvLyBNaXNzaW5nIGV4cGVjdFN5bmMgaW5kaWNhdGVzIGEgdHJpZ2dlciBjYWxsLCB3aGljaCBtdXN0IGZvcmNlIHNldHVwIHRocm91Z2ggalF1ZXJ5LmV2ZW50LmFkZFxuXHRpZiAoICFleHBlY3RTeW5jICkge1xuXHRcdGlmICggZGF0YVByaXYuZ2V0KCBlbCwgdHlwZSApID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBlbCwgdHlwZSwgcmV0dXJuVHJ1ZSApO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBSZWdpc3RlciB0aGUgY29udHJvbGxlciBhcyBhIHNwZWNpYWwgdW5pdmVyc2FsIGhhbmRsZXIgZm9yIGFsbCBldmVudCBuYW1lc3BhY2VzXG5cdGRhdGFQcml2LnNldCggZWwsIHR5cGUsIGZhbHNlICk7XG5cdGpRdWVyeS5ldmVudC5hZGQoIGVsLCB0eXBlLCB7XG5cdFx0bmFtZXNwYWNlOiBmYWxzZSxcblx0XHRoYW5kbGVyOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgbm90QXN5bmMsIHJlc3VsdCxcblx0XHRcdFx0c2F2ZWQgPSBkYXRhUHJpdi5nZXQoIHRoaXMsIHR5cGUgKTtcblxuXHRcdFx0aWYgKCAoIGV2ZW50LmlzVHJpZ2dlciAmIDEgKSAmJiB0aGlzWyB0eXBlIF0gKSB7XG5cblx0XHRcdFx0Ly8gSW50ZXJydXB0IHByb2Nlc3Npbmcgb2YgdGhlIG91dGVyIHN5bnRoZXRpYyAudHJpZ2dlcigpZWQgZXZlbnRcblx0XHRcdFx0Ly8gU2F2ZWQgZGF0YSBzaG91bGQgYmUgZmFsc2UgaW4gc3VjaCBjYXNlcywgYnV0IG1pZ2h0IGJlIGEgbGVmdG92ZXIgY2FwdHVyZSBvYmplY3Rcblx0XHRcdFx0Ly8gZnJvbSBhbiBhc3luYyBuYXRpdmUgaGFuZGxlciAoZ2gtNDM1MClcblx0XHRcdFx0aWYgKCAhc2F2ZWQubGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0Ly8gU3RvcmUgYXJndW1lbnRzIGZvciB1c2Ugd2hlbiBoYW5kbGluZyB0aGUgaW5uZXIgbmF0aXZlIGV2ZW50XG5cdFx0XHRcdFx0Ly8gVGhlcmUgd2lsbCBhbHdheXMgYmUgYXQgbGVhc3Qgb25lIGFyZ3VtZW50IChhbiBldmVudCBvYmplY3QpLCBzbyB0aGlzIGFycmF5XG5cdFx0XHRcdFx0Ly8gd2lsbCBub3QgYmUgY29uZnVzZWQgd2l0aCBhIGxlZnRvdmVyIGNhcHR1cmUgb2JqZWN0LlxuXHRcdFx0XHRcdHNhdmVkID0gc2xpY2UuY2FsbCggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCB0eXBlLCBzYXZlZCApO1xuXG5cdFx0XHRcdFx0Ly8gVHJpZ2dlciB0aGUgbmF0aXZlIGV2ZW50IGFuZCBjYXB0dXJlIGl0cyByZXN1bHRcblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMStcblx0XHRcdFx0XHQvLyBmb2N1cygpIGFuZCBibHVyKCkgYXJlIGFzeW5jaHJvbm91c1xuXHRcdFx0XHRcdG5vdEFzeW5jID0gZXhwZWN0U3luYyggdGhpcywgdHlwZSApO1xuXHRcdFx0XHRcdHRoaXNbIHR5cGUgXSgpO1xuXHRcdFx0XHRcdHJlc3VsdCA9IGRhdGFQcml2LmdldCggdGhpcywgdHlwZSApO1xuXHRcdFx0XHRcdGlmICggc2F2ZWQgIT09IHJlc3VsdCB8fCBub3RBc3luYyApIHtcblx0XHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgdHlwZSwgZmFsc2UgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggc2F2ZWQgIT09IHJlc3VsdCApIHtcblxuXHRcdFx0XHRcdFx0Ly8gQ2FuY2VsIHRoZSBvdXRlciBzeW50aGV0aWMgZXZlbnRcblx0XHRcdFx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQudmFsdWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoaXMgaXMgYW4gaW5uZXIgc3ludGhldGljIGV2ZW50IGZvciBhbiBldmVudCB3aXRoIGEgYnViYmxpbmcgc3Vycm9nYXRlXG5cdFx0XHRcdC8vIChmb2N1cyBvciBibHVyKSwgYXNzdW1lIHRoYXQgdGhlIHN1cnJvZ2F0ZSBhbHJlYWR5IHByb3BhZ2F0ZWQgZnJvbSB0cmlnZ2VyaW5nIHRoZVxuXHRcdFx0XHQvLyBuYXRpdmUgZXZlbnQgYW5kIHByZXZlbnQgdGhhdCBmcm9tIGhhcHBlbmluZyBhZ2FpbiBoZXJlLlxuXHRcdFx0XHQvLyBUaGlzIHRlY2huaWNhbGx5IGdldHMgdGhlIG9yZGVyaW5nIHdyb25nIHcuci50LiB0byBgLnRyaWdnZXIoKWAgKGluIHdoaWNoIHRoZVxuXHRcdFx0XHQvLyBidWJibGluZyBzdXJyb2dhdGUgcHJvcGFnYXRlcyAqYWZ0ZXIqIHRoZSBub24tYnViYmxpbmcgYmFzZSksIGJ1dCB0aGF0IHNlZW1zXG5cdFx0XHRcdC8vIGxlc3MgYmFkIHRoYW4gZHVwbGljYXRpb24uXG5cdFx0XHRcdH0gZWxzZSBpZiAoICggalF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fSApLmRlbGVnYXRlVHlwZSApIHtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgbmF0aXZlIGV2ZW50IHRyaWdnZXJlZCBhYm92ZSwgZXZlcnl0aGluZyBpcyBub3cgaW4gb3JkZXJcblx0XHRcdC8vIEZpcmUgYW4gaW5uZXIgc3ludGhldGljIGV2ZW50IHdpdGggdGhlIG9yaWdpbmFsIGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggc2F2ZWQubGVuZ3RoICkge1xuXG5cdFx0XHRcdC8vIC4uLmFuZCBjYXB0dXJlIHRoZSByZXN1bHRcblx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCB0eXBlLCB7XG5cdFx0XHRcdFx0dmFsdWU6IGpRdWVyeS5ldmVudC50cmlnZ2VyKFxuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMStcblx0XHRcdFx0XHRcdC8vIEV4dGVuZCB3aXRoIHRoZSBwcm90b3R5cGUgdG8gcmVzZXQgdGhlIGFib3ZlIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0XHRqUXVlcnkuZXh0ZW5kKCBzYXZlZFsgMCBdLCBqUXVlcnkuRXZlbnQucHJvdG90eXBlICksXG5cdFx0XHRcdFx0XHRzYXZlZC5zbGljZSggMSApLFxuXHRcdFx0XHRcdFx0dGhpc1xuXHRcdFx0XHRcdClcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIEFib3J0IGhhbmRsaW5nIG9mIHRoZSBuYXRpdmUgZXZlbnRcblx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG59XG5cbmpRdWVyeS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBoYW5kbGUgKSB7XG5cblx0Ly8gVGhpcyBcImlmXCIgaXMgbmVlZGVkIGZvciBwbGFpbiBvYmplY3RzXG5cdGlmICggZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyICkge1xuXHRcdGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgaGFuZGxlICk7XG5cdH1cbn07XG5cbmpRdWVyeS5FdmVudCA9IGZ1bmN0aW9uKCBzcmMsIHByb3BzICkge1xuXG5cdC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCB0aGUgJ25ldycga2V5d29yZFxuXHRpZiAoICEoIHRoaXMgaW5zdGFuY2VvZiBqUXVlcnkuRXZlbnQgKSApIHtcblx0XHRyZXR1cm4gbmV3IGpRdWVyeS5FdmVudCggc3JjLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gRXZlbnQgb2JqZWN0XG5cdGlmICggc3JjICYmIHNyYy50eXBlICkge1xuXHRcdHRoaXMub3JpZ2luYWxFdmVudCA9IHNyYztcblx0XHR0aGlzLnR5cGUgPSBzcmMudHlwZTtcblxuXHRcdC8vIEV2ZW50cyBidWJibGluZyB1cCB0aGUgZG9jdW1lbnQgbWF5IGhhdmUgYmVlbiBtYXJrZWQgYXMgcHJldmVudGVkXG5cdFx0Ly8gYnkgYSBoYW5kbGVyIGxvd2VyIGRvd24gdGhlIHRyZWU7IHJlZmxlY3QgdGhlIGNvcnJlY3QgdmFsdWUuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBzcmMuZGVmYXVsdFByZXZlbnRlZCB8fFxuXHRcdFx0XHRzcmMuZGVmYXVsdFByZXZlbnRlZCA9PT0gdW5kZWZpbmVkICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTIuMyBvbmx5XG5cdFx0XHRcdHNyYy5yZXR1cm5WYWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0cmV0dXJuVHJ1ZSA6XG5cdFx0XHRyZXR1cm5GYWxzZTtcblxuXHRcdC8vIENyZWF0ZSB0YXJnZXQgcHJvcGVydGllc1xuXHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTYgLSA3IG9ubHlcblx0XHQvLyBUYXJnZXQgc2hvdWxkIG5vdCBiZSBhIHRleHQgbm9kZSAoIzUwNCwgIzEzMTQzKVxuXHRcdHRoaXMudGFyZ2V0ID0gKCBzcmMudGFyZ2V0ICYmIHNyYy50YXJnZXQubm9kZVR5cGUgPT09IDMgKSA/XG5cdFx0XHRzcmMudGFyZ2V0LnBhcmVudE5vZGUgOlxuXHRcdFx0c3JjLnRhcmdldDtcblxuXHRcdHRoaXMuY3VycmVudFRhcmdldCA9IHNyYy5jdXJyZW50VGFyZ2V0O1xuXHRcdHRoaXMucmVsYXRlZFRhcmdldCA9IHNyYy5yZWxhdGVkVGFyZ2V0O1xuXG5cdC8vIEV2ZW50IHR5cGVcblx0fSBlbHNlIHtcblx0XHR0aGlzLnR5cGUgPSBzcmM7XG5cdH1cblxuXHQvLyBQdXQgZXhwbGljaXRseSBwcm92aWRlZCBwcm9wZXJ0aWVzIG9udG8gdGhlIGV2ZW50IG9iamVjdFxuXHRpZiAoIHByb3BzICkge1xuXHRcdGpRdWVyeS5leHRlbmQoIHRoaXMsIHByb3BzICk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSB0aW1lc3RhbXAgaWYgaW5jb21pbmcgZXZlbnQgZG9lc24ndCBoYXZlIG9uZVxuXHR0aGlzLnRpbWVTdGFtcCA9IHNyYyAmJiBzcmMudGltZVN0YW1wIHx8IERhdGUubm93KCk7XG5cblx0Ly8gTWFyayBpdCBhcyBmaXhlZFxuXHR0aGlzWyBqUXVlcnkuZXhwYW5kbyBdID0gdHJ1ZTtcbn07XG5cbi8vIGpRdWVyeS5FdmVudCBpcyBiYXNlZCBvbiBET00zIEV2ZW50cyBhcyBzcGVjaWZpZWQgYnkgdGhlIEVDTUFTY3JpcHQgTGFuZ3VhZ2UgQmluZGluZ1xuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDMvV0QtRE9NLUxldmVsLTMtRXZlbnRzLTIwMDMwMzMxL2VjbWEtc2NyaXB0LWJpbmRpbmcuaHRtbFxualF1ZXJ5LkV2ZW50LnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IGpRdWVyeS5FdmVudCxcblx0aXNEZWZhdWx0UHJldmVudGVkOiByZXR1cm5GYWxzZSxcblx0aXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cdGlzU2ltdWxhdGVkOiBmYWxzZSxcblxuXHRwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9LFxuXHRzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSxcblx0c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG59O1xuXG4vLyBJbmNsdWRlcyBhbGwgY29tbW9uIGV2ZW50IHByb3BzIGluY2x1ZGluZyBLZXlFdmVudCBhbmQgTW91c2VFdmVudCBzcGVjaWZpYyBwcm9wc1xualF1ZXJ5LmVhY2goIHtcblx0YWx0S2V5OiB0cnVlLFxuXHRidWJibGVzOiB0cnVlLFxuXHRjYW5jZWxhYmxlOiB0cnVlLFxuXHRjaGFuZ2VkVG91Y2hlczogdHJ1ZSxcblx0Y3RybEtleTogdHJ1ZSxcblx0ZGV0YWlsOiB0cnVlLFxuXHRldmVudFBoYXNlOiB0cnVlLFxuXHRtZXRhS2V5OiB0cnVlLFxuXHRwYWdlWDogdHJ1ZSxcblx0cGFnZVk6IHRydWUsXG5cdHNoaWZ0S2V5OiB0cnVlLFxuXHR2aWV3OiB0cnVlLFxuXHRcImNoYXJcIjogdHJ1ZSxcblx0Y29kZTogdHJ1ZSxcblx0Y2hhckNvZGU6IHRydWUsXG5cdGtleTogdHJ1ZSxcblx0a2V5Q29kZTogdHJ1ZSxcblx0YnV0dG9uOiB0cnVlLFxuXHRidXR0b25zOiB0cnVlLFxuXHRjbGllbnRYOiB0cnVlLFxuXHRjbGllbnRZOiB0cnVlLFxuXHRvZmZzZXRYOiB0cnVlLFxuXHRvZmZzZXRZOiB0cnVlLFxuXHRwb2ludGVySWQ6IHRydWUsXG5cdHBvaW50ZXJUeXBlOiB0cnVlLFxuXHRzY3JlZW5YOiB0cnVlLFxuXHRzY3JlZW5ZOiB0cnVlLFxuXHR0YXJnZXRUb3VjaGVzOiB0cnVlLFxuXHR0b0VsZW1lbnQ6IHRydWUsXG5cdHRvdWNoZXM6IHRydWUsXG5cblx0d2hpY2g6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHR2YXIgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuXG5cdFx0Ly8gQWRkIHdoaWNoIGZvciBrZXkgZXZlbnRzXG5cdFx0aWYgKCBldmVudC53aGljaCA9PSBudWxsICYmIHJrZXlFdmVudC50ZXN0KCBldmVudC50eXBlICkgKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnQuY2hhckNvZGUgIT0gbnVsbCA/IGV2ZW50LmNoYXJDb2RlIDogZXZlbnQua2V5Q29kZTtcblx0XHR9XG5cblx0XHQvLyBBZGQgd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG5cdFx0aWYgKCAhZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgcm1vdXNlRXZlbnQudGVzdCggZXZlbnQudHlwZSApICkge1xuXHRcdFx0aWYgKCBidXR0b24gJiAxICkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBidXR0b24gJiAyICkge1xuXHRcdFx0XHRyZXR1cm4gMztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBidXR0b24gJiA0ICkge1xuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LndoaWNoO1xuXHR9XG59LCBqUXVlcnkuZXZlbnQuYWRkUHJvcCApO1xuXG5qUXVlcnkuZWFjaCggeyBmb2N1czogXCJmb2N1c2luXCIsIGJsdXI6IFwiZm9jdXNvdXRcIiB9LCBmdW5jdGlvbiggdHlwZSwgZGVsZWdhdGVUeXBlICkge1xuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdID0ge1xuXG5cdFx0Ly8gVXRpbGl6ZSBuYXRpdmUgZXZlbnQgaWYgcG9zc2libGUgc28gYmx1ci9mb2N1cyBzZXF1ZW5jZSBpcyBjb3JyZWN0XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBDbGFpbSB0aGUgZmlyc3QgaGFuZGxlclxuXHRcdFx0Ly8gZGF0YVByaXYuc2V0KCB0aGlzLCBcImZvY3VzXCIsIC4uLiApXG5cdFx0XHQvLyBkYXRhUHJpdi5zZXQoIHRoaXMsIFwiYmx1clwiLCAuLi4gKVxuXHRcdFx0bGV2ZXJhZ2VOYXRpdmUoIHRoaXMsIHR5cGUsIGV4cGVjdFN5bmMgKTtcblxuXHRcdFx0Ly8gUmV0dXJuIGZhbHNlIHRvIGFsbG93IG5vcm1hbCBwcm9jZXNzaW5nIGluIHRoZSBjYWxsZXJcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBGb3JjZSBzZXR1cCBiZWZvcmUgdHJpZ2dlclxuXHRcdFx0bGV2ZXJhZ2VOYXRpdmUoIHRoaXMsIHR5cGUgKTtcblxuXHRcdFx0Ly8gUmV0dXJuIG5vbi1mYWxzZSB0byBhbGxvdyBub3JtYWwgZXZlbnQtcGF0aCBwcm9wYWdhdGlvblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdGRlbGVnYXRlVHlwZTogZGVsZWdhdGVUeXBlXG5cdH07XG59ICk7XG5cbi8vIENyZWF0ZSBtb3VzZWVudGVyL2xlYXZlIGV2ZW50cyB1c2luZyBtb3VzZW92ZXIvb3V0IGFuZCBldmVudC10aW1lIGNoZWNrc1xuLy8gc28gdGhhdCBldmVudCBkZWxlZ2F0aW9uIHdvcmtzIGluIGpRdWVyeS5cbi8vIERvIHRoZSBzYW1lIGZvciBwb2ludGVyZW50ZXIvcG9pbnRlcmxlYXZlIGFuZCBwb2ludGVyb3Zlci9wb2ludGVyb3V0XG4vL1xuLy8gU3VwcG9ydDogU2FmYXJpIDcgb25seVxuLy8gU2FmYXJpIHNlbmRzIG1vdXNlZW50ZXIgdG9vIG9mdGVuOyBzZWU6XG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NzAyNThcbi8vIGZvciB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGJ1ZyAoaXQgZXhpc3RlZCBpbiBvbGRlciBDaHJvbWUgdmVyc2lvbnMgYXMgd2VsbCkuXG5qUXVlcnkuZWFjaCgge1xuXHRtb3VzZWVudGVyOiBcIm1vdXNlb3ZlclwiLFxuXHRtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCIsXG5cdHBvaW50ZXJlbnRlcjogXCJwb2ludGVyb3ZlclwiLFxuXHRwb2ludGVybGVhdmU6IFwicG9pbnRlcm91dFwiXG59LCBmdW5jdGlvbiggb3JpZywgZml4ICkge1xuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgb3JpZyBdID0ge1xuXHRcdGRlbGVnYXRlVHlwZTogZml4LFxuXHRcdGJpbmRUeXBlOiBmaXgsXG5cblx0XHRoYW5kbGU6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciByZXQsXG5cdFx0XHRcdHRhcmdldCA9IHRoaXMsXG5cdFx0XHRcdHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0LFxuXHRcdFx0XHRoYW5kbGVPYmogPSBldmVudC5oYW5kbGVPYmo7XG5cblx0XHRcdC8vIEZvciBtb3VzZWVudGVyL2xlYXZlIGNhbGwgdGhlIGhhbmRsZXIgaWYgcmVsYXRlZCBpcyBvdXRzaWRlIHRoZSB0YXJnZXQuXG5cdFx0XHQvLyBOQjogTm8gcmVsYXRlZFRhcmdldCBpZiB0aGUgbW91c2UgbGVmdC9lbnRlcmVkIHRoZSBicm93c2VyIHdpbmRvd1xuXHRcdFx0aWYgKCAhcmVsYXRlZCB8fCAoIHJlbGF0ZWQgIT09IHRhcmdldCAmJiAhalF1ZXJ5LmNvbnRhaW5zKCB0YXJnZXQsIHJlbGF0ZWQgKSApICkge1xuXHRcdFx0XHRldmVudC50eXBlID0gaGFuZGxlT2JqLm9yaWdUeXBlO1xuXHRcdFx0XHRyZXQgPSBoYW5kbGVPYmouaGFuZGxlci5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBmaXg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0fTtcbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXG5cdG9uOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gb24oIHRoaXMsIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKTtcblx0fSxcblx0b25lOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gb24oIHRoaXMsIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIDEgKTtcblx0fSxcblx0b2ZmOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBmbiApIHtcblx0XHR2YXIgaGFuZGxlT2JqLCB0eXBlO1xuXHRcdGlmICggdHlwZXMgJiYgdHlwZXMucHJldmVudERlZmF1bHQgJiYgdHlwZXMuaGFuZGxlT2JqICkge1xuXG5cdFx0XHQvLyAoIGV2ZW50ICkgIGRpc3BhdGNoZWQgalF1ZXJ5LkV2ZW50XG5cdFx0XHRoYW5kbGVPYmogPSB0eXBlcy5oYW5kbGVPYmo7XG5cdFx0XHRqUXVlcnkoIHR5cGVzLmRlbGVnYXRlVGFyZ2V0ICkub2ZmKFxuXHRcdFx0XHRoYW5kbGVPYmoubmFtZXNwYWNlID9cblx0XHRcdFx0XHRoYW5kbGVPYmoub3JpZ1R5cGUgKyBcIi5cIiArIGhhbmRsZU9iai5uYW1lc3BhY2UgOlxuXHRcdFx0XHRcdGhhbmRsZU9iai5vcmlnVHlwZSxcblx0XHRcdFx0aGFuZGxlT2JqLnNlbGVjdG9yLFxuXHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlclxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZiAoIHR5cGVvZiB0eXBlcyA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcy1vYmplY3QgWywgc2VsZWN0b3JdIClcblx0XHRcdGZvciAoIHR5cGUgaW4gdHlwZXMgKSB7XG5cdFx0XHRcdHRoaXMub2ZmKCB0eXBlLCBzZWxlY3RvciwgdHlwZXNbIHR5cGUgXSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmICggc2VsZWN0b3IgPT09IGZhbHNlIHx8IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzIFssIGZuXSApXG5cdFx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmICggZm4gPT09IGZhbHNlICkge1xuXHRcdFx0Zm4gPSByZXR1cm5GYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCB0aGlzLCB0eXBlcywgZm4sIHNlbGVjdG9yICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cblxudmFyXG5cblx0LyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5cdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZXNsaW50L2VzbGludC9pc3N1ZXMvMzIyOVxuXHRyeGh0bWxUYWcgPSAvPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopW14+XSopXFwvPi9naSxcblxuXHQvKiBlc2xpbnQtZW5hYmxlICovXG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExLCBFZGdlIDEyIC0gMTMgb25seVxuXHQvLyBJbiBJRS9FZGdlIHVzaW5nIHJlZ2V4IGdyb3VwcyBoZXJlIGNhdXNlcyBzZXZlcmUgc2xvd2Rvd25zLlxuXHQvLyBTZWUgaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy8xNzM2NTEyL1xuXHRybm9Jbm5lcmh0bWwgPSAvPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxcblxuXHQvLyBjaGVja2VkPVwiY2hlY2tlZFwiIG9yIGNoZWNrZWRcblx0cmNoZWNrZWQgPSAvY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLFxuXHRyY2xlYW5TY3JpcHQgPSAvXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7XG5cbi8vIFByZWZlciBhIHRib2R5IG92ZXIgaXRzIHBhcmVudCB0YWJsZSBmb3IgY29udGFpbmluZyBuZXcgcm93c1xuZnVuY3Rpb24gbWFuaXB1bGF0aW9uVGFyZ2V0KCBlbGVtLCBjb250ZW50ICkge1xuXHRpZiAoIG5vZGVOYW1lKCBlbGVtLCBcInRhYmxlXCIgKSAmJlxuXHRcdG5vZGVOYW1lKCBjb250ZW50Lm5vZGVUeXBlICE9PSAxMSA/IGNvbnRlbnQgOiBjb250ZW50LmZpcnN0Q2hpbGQsIFwidHJcIiApICkge1xuXG5cdFx0cmV0dXJuIGpRdWVyeSggZWxlbSApLmNoaWxkcmVuKCBcInRib2R5XCIgKVsgMCBdIHx8IGVsZW07XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuLy8gUmVwbGFjZS9yZXN0b3JlIHRoZSB0eXBlIGF0dHJpYnV0ZSBvZiBzY3JpcHQgZWxlbWVudHMgZm9yIHNhZmUgRE9NIG1hbmlwdWxhdGlvblxuZnVuY3Rpb24gZGlzYWJsZVNjcmlwdCggZWxlbSApIHtcblx0ZWxlbS50eXBlID0gKCBlbGVtLmdldEF0dHJpYnV0ZSggXCJ0eXBlXCIgKSAhPT0gbnVsbCApICsgXCIvXCIgKyBlbGVtLnR5cGU7XG5cdHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gcmVzdG9yZVNjcmlwdCggZWxlbSApIHtcblx0aWYgKCAoIGVsZW0udHlwZSB8fCBcIlwiICkuc2xpY2UoIDAsIDUgKSA9PT0gXCJ0cnVlL1wiICkge1xuXHRcdGVsZW0udHlwZSA9IGVsZW0udHlwZS5zbGljZSggNSApO1xuXHR9IGVsc2Uge1xuXHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCBcInR5cGVcIiApO1xuXHR9XG5cblx0cmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIGNsb25lQ29weUV2ZW50KCBzcmMsIGRlc3QgKSB7XG5cdHZhciBpLCBsLCB0eXBlLCBwZGF0YU9sZCwgcGRhdGFDdXIsIHVkYXRhT2xkLCB1ZGF0YUN1ciwgZXZlbnRzO1xuXG5cdGlmICggZGVzdC5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyAxLiBDb3B5IHByaXZhdGUgZGF0YTogZXZlbnRzLCBoYW5kbGVycywgZXRjLlxuXHRpZiAoIGRhdGFQcml2Lmhhc0RhdGEoIHNyYyApICkge1xuXHRcdHBkYXRhT2xkID0gZGF0YVByaXYuYWNjZXNzKCBzcmMgKTtcblx0XHRwZGF0YUN1ciA9IGRhdGFQcml2LnNldCggZGVzdCwgcGRhdGFPbGQgKTtcblx0XHRldmVudHMgPSBwZGF0YU9sZC5ldmVudHM7XG5cblx0XHRpZiAoIGV2ZW50cyApIHtcblx0XHRcdGRlbGV0ZSBwZGF0YUN1ci5oYW5kbGU7XG5cdFx0XHRwZGF0YUN1ci5ldmVudHMgPSB7fTtcblxuXHRcdFx0Zm9yICggdHlwZSBpbiBldmVudHMgKSB7XG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gZXZlbnRzWyB0eXBlIF0ubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIGRlc3QsIHR5cGUsIGV2ZW50c1sgdHlwZSBdWyBpIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIDIuIENvcHkgdXNlciBkYXRhXG5cdGlmICggZGF0YVVzZXIuaGFzRGF0YSggc3JjICkgKSB7XG5cdFx0dWRhdGFPbGQgPSBkYXRhVXNlci5hY2Nlc3MoIHNyYyApO1xuXHRcdHVkYXRhQ3VyID0galF1ZXJ5LmV4dGVuZCgge30sIHVkYXRhT2xkICk7XG5cblx0XHRkYXRhVXNlci5zZXQoIGRlc3QsIHVkYXRhQ3VyICk7XG5cdH1cbn1cblxuLy8gRml4IElFIGJ1Z3MsIHNlZSBzdXBwb3J0IHRlc3RzXG5mdW5jdGlvbiBmaXhJbnB1dCggc3JjLCBkZXN0ICkge1xuXHR2YXIgbm9kZU5hbWUgPSBkZXN0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0Ly8gRmFpbHMgdG8gcGVyc2lzdCB0aGUgY2hlY2tlZCBzdGF0ZSBvZiBhIGNsb25lZCBjaGVja2JveCBvciByYWRpbyBidXR0b24uXG5cdGlmICggbm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiByY2hlY2thYmxlVHlwZS50ZXN0KCBzcmMudHlwZSApICkge1xuXHRcdGRlc3QuY2hlY2tlZCA9IHNyYy5jaGVja2VkO1xuXG5cdC8vIEZhaWxzIHRvIHJldHVybiB0aGUgc2VsZWN0ZWQgb3B0aW9uIHRvIHRoZSBkZWZhdWx0IHNlbGVjdGVkIHN0YXRlIHdoZW4gY2xvbmluZyBvcHRpb25zXG5cdH0gZWxzZSBpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgfHwgbm9kZU5hbWUgPT09IFwidGV4dGFyZWFcIiApIHtcblx0XHRkZXN0LmRlZmF1bHRWYWx1ZSA9IHNyYy5kZWZhdWx0VmFsdWU7XG5cdH1cbn1cblxuZnVuY3Rpb24gZG9tTWFuaXAoIGNvbGxlY3Rpb24sIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkICkge1xuXG5cdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblx0YXJncyA9IGNvbmNhdC5hcHBseSggW10sIGFyZ3MgKTtcblxuXHR2YXIgZnJhZ21lbnQsIGZpcnN0LCBzY3JpcHRzLCBoYXNTY3JpcHRzLCBub2RlLCBkb2MsXG5cdFx0aSA9IDAsXG5cdFx0bCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuXHRcdGlOb0Nsb25lID0gbCAtIDEsXG5cdFx0dmFsdWUgPSBhcmdzWyAwIF0sXG5cdFx0dmFsdWVJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiggdmFsdWUgKTtcblxuXHQvLyBXZSBjYW4ndCBjbG9uZU5vZGUgZnJhZ21lbnRzIHRoYXQgY29udGFpbiBjaGVja2VkLCBpbiBXZWJLaXRcblx0aWYgKCB2YWx1ZUlzRnVuY3Rpb24gfHxcblx0XHRcdCggbCA+IDEgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmXG5cdFx0XHRcdCFzdXBwb3J0LmNoZWNrQ2xvbmUgJiYgcmNoZWNrZWQudGVzdCggdmFsdWUgKSApICkge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmVhY2goIGZ1bmN0aW9uKCBpbmRleCApIHtcblx0XHRcdHZhciBzZWxmID0gY29sbGVjdGlvbi5lcSggaW5kZXggKTtcblx0XHRcdGlmICggdmFsdWVJc0Z1bmN0aW9uICkge1xuXHRcdFx0XHRhcmdzWyAwIF0gPSB2YWx1ZS5jYWxsKCB0aGlzLCBpbmRleCwgc2VsZi5odG1sKCkgKTtcblx0XHRcdH1cblx0XHRcdGRvbU1hbmlwKCBzZWxmLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGlmICggbCApIHtcblx0XHRmcmFnbWVudCA9IGJ1aWxkRnJhZ21lbnQoIGFyZ3MsIGNvbGxlY3Rpb25bIDAgXS5vd25lckRvY3VtZW50LCBmYWxzZSwgY29sbGVjdGlvbiwgaWdub3JlZCApO1xuXHRcdGZpcnN0ID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuXHRcdGlmICggZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRmcmFnbWVudCA9IGZpcnN0O1xuXHRcdH1cblxuXHRcdC8vIFJlcXVpcmUgZWl0aGVyIG5ldyBjb250ZW50IG9yIGFuIGludGVyZXN0IGluIGlnbm9yZWQgZWxlbWVudHMgdG8gaW52b2tlIHRoZSBjYWxsYmFja1xuXHRcdGlmICggZmlyc3QgfHwgaWdub3JlZCApIHtcblx0XHRcdHNjcmlwdHMgPSBqUXVlcnkubWFwKCBnZXRBbGwoIGZyYWdtZW50LCBcInNjcmlwdFwiICksIGRpc2FibGVTY3JpcHQgKTtcblx0XHRcdGhhc1NjcmlwdHMgPSBzY3JpcHRzLmxlbmd0aDtcblxuXHRcdFx0Ly8gVXNlIHRoZSBvcmlnaW5hbCBmcmFnbWVudCBmb3IgdGhlIGxhc3QgaXRlbVxuXHRcdFx0Ly8gaW5zdGVhZCBvZiB0aGUgZmlyc3QgYmVjYXVzZSBpdCBjYW4gZW5kIHVwXG5cdFx0XHQvLyBiZWluZyBlbXB0aWVkIGluY29ycmVjdGx5IGluIGNlcnRhaW4gc2l0dWF0aW9ucyAoIzgwNzApLlxuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRub2RlID0gZnJhZ21lbnQ7XG5cblx0XHRcdFx0aWYgKCBpICE9PSBpTm9DbG9uZSApIHtcblx0XHRcdFx0XHRub2RlID0galF1ZXJ5LmNsb25lKCBub2RlLCB0cnVlLCB0cnVlICk7XG5cblx0XHRcdFx0XHQvLyBLZWVwIHJlZmVyZW5jZXMgdG8gY2xvbmVkIHNjcmlwdHMgZm9yIGxhdGVyIHJlc3RvcmF0aW9uXG5cdFx0XHRcdFx0aWYgKCBoYXNTY3JpcHRzICkge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0XHRcdGpRdWVyeS5tZXJnZSggc2NyaXB0cywgZ2V0QWxsKCBub2RlLCBcInNjcmlwdFwiICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYWxsYmFjay5jYWxsKCBjb2xsZWN0aW9uWyBpIF0sIG5vZGUsIGkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBoYXNTY3JpcHRzICkge1xuXHRcdFx0XHRkb2MgPSBzY3JpcHRzWyBzY3JpcHRzLmxlbmd0aCAtIDEgXS5vd25lckRvY3VtZW50O1xuXG5cdFx0XHRcdC8vIFJlZW5hYmxlIHNjcmlwdHNcblx0XHRcdFx0alF1ZXJ5Lm1hcCggc2NyaXB0cywgcmVzdG9yZVNjcmlwdCApO1xuXG5cdFx0XHRcdC8vIEV2YWx1YXRlIGV4ZWN1dGFibGUgc2NyaXB0cyBvbiBmaXJzdCBkb2N1bWVudCBpbnNlcnRpb25cblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBoYXNTY3JpcHRzOyBpKysgKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHNjcmlwdHNbIGkgXTtcblx0XHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIG5vZGUudHlwZSB8fCBcIlwiICkgJiZcblx0XHRcdFx0XHRcdCFkYXRhUHJpdi5hY2Nlc3MoIG5vZGUsIFwiZ2xvYmFsRXZhbFwiICkgJiZcblx0XHRcdFx0XHRcdGpRdWVyeS5jb250YWlucyggZG9jLCBub2RlICkgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggbm9kZS5zcmMgJiYgKCBub2RlLnR5cGUgfHwgXCJcIiApLnRvTG93ZXJDYXNlKCkgICE9PSBcIm1vZHVsZVwiICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE9wdGlvbmFsIEFKQVggZGVwZW5kZW5jeSwgYnV0IHdvbid0IHJ1biBzY3JpcHRzIGlmIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5Ll9ldmFsVXJsICYmICFub2RlLm5vTW9kdWxlICkge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5fZXZhbFVybCggbm9kZS5zcmMsIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5vbmNlOiBub2RlLm5vbmNlIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCBcIm5vbmNlXCIgKVxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0RE9NRXZhbCggbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKCByY2xlYW5TY3JpcHQsIFwiXCIgKSwgbm9kZSwgZG9jICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNvbGxlY3Rpb247XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSggZWxlbSwgc2VsZWN0b3IsIGtlZXBEYXRhICkge1xuXHR2YXIgbm9kZSxcblx0XHRub2RlcyA9IHNlbGVjdG9yID8galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIGVsZW0gKSA6IGVsZW0sXG5cdFx0aSA9IDA7XG5cblx0Zm9yICggOyAoIG5vZGUgPSBub2Rlc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdGlmICggIWtlZXBEYXRhICYmIG5vZGUubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIG5vZGUgKSApO1xuXHRcdH1cblxuXHRcdGlmICggbm9kZS5wYXJlbnROb2RlICkge1xuXHRcdFx0aWYgKCBrZWVwRGF0YSAmJiBpc0F0dGFjaGVkKCBub2RlICkgKSB7XG5cdFx0XHRcdHNldEdsb2JhbEV2YWwoIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHR9XG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGUgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRyZXR1cm4gaHRtbC5yZXBsYWNlKCByeGh0bWxUYWcsIFwiPCQxPjwvJDI+XCIgKTtcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24oIGVsZW0sIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdHZhciBpLCBsLCBzcmNFbGVtZW50cywgZGVzdEVsZW1lbnRzLFxuXHRcdFx0Y2xvbmUgPSBlbGVtLmNsb25lTm9kZSggdHJ1ZSApLFxuXHRcdFx0aW5QYWdlID0gaXNBdHRhY2hlZCggZWxlbSApO1xuXG5cdFx0Ly8gRml4IElFIGNsb25pbmcgaXNzdWVzXG5cdFx0aWYgKCAhc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgZWxlbS5ub2RlVHlwZSA9PT0gMTEgKSAmJlxuXHRcdFx0XHQhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIFdlIGVzY2hldyBTaXp6bGUgaGVyZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uczogaHR0cHM6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuXHRcdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSApO1xuXHRcdFx0c3JjRWxlbWVudHMgPSBnZXRBbGwoIGVsZW0gKTtcblxuXHRcdFx0Zm9yICggaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZpeElucHV0KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcblx0XHRpZiAoIGRhdGFBbmRFdmVudHMgKSB7XG5cdFx0XHRpZiAoIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0XHRzcmNFbGVtZW50cyA9IHNyY0VsZW1lbnRzIHx8IGdldEFsbCggZWxlbSApO1xuXHRcdFx0XHRkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKCBjbG9uZSApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGNsb25lQ29weUV2ZW50KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbG9uZUNvcHlFdmVudCggZWxlbSwgY2xvbmUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSwgXCJzY3JpcHRcIiApO1xuXHRcdGlmICggZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCBkZXN0RWxlbWVudHMsICFpblBhZ2UgJiYgZ2V0QWxsKCBlbGVtLCBcInNjcmlwdFwiICkgKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIGNsb25lZCBzZXRcblx0XHRyZXR1cm4gY2xvbmU7XG5cdH0sXG5cblx0Y2xlYW5EYXRhOiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cdFx0dmFyIGRhdGEsIGVsZW0sIHR5cGUsXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWwsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9PSB1bmRlZmluZWQ7IGkrKyApIHtcblx0XHRcdGlmICggYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0XHRpZiAoICggZGF0YSA9IGVsZW1bIGRhdGFQcml2LmV4cGFuZG8gXSApICkge1xuXHRcdFx0XHRcdGlmICggZGF0YS5ldmVudHMgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCB0eXBlIGluIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWxbIHR5cGUgXSApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIHNob3J0Y3V0IHRvIGF2b2lkIGpRdWVyeS5ldmVudC5yZW1vdmUncyBvdmVyaGVhZFxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZGF0YS5oYW5kbGUgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG5cdFx0XHRcdFx0Ly8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cdFx0XHRcdFx0ZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdICkge1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHQvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcblx0XHRcdFx0XHRlbGVtWyBkYXRhVXNlci5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRkZXRhY2g6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiByZW1vdmUoIHRoaXMsIHNlbGVjdG9yICk7XG5cdH0sXG5cblx0dGV4dDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnRleHQoIHRoaXMgKSA6XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdGFwcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcblx0XHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdHByZXBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoIGVsZW0sIHRhcmdldC5maXJzdENoaWxkICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGJlZm9yZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0YWZ0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzLm5leHRTaWJsaW5nICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyAoIGVsZW0gPSB0aGlzWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0Ly8gUHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcblx0XHRcdFx0ZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uKCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuXHRcdGRlZXBEYXRhQW5kRXZlbnRzID0gZGVlcERhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGRhdGFBbmRFdmVudHMgOiBkZWVwRGF0YUFuZEV2ZW50cztcblxuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNsb25lKCB0aGlzLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApO1xuXHRcdH0gKTtcblx0fSxcblxuXHRodG1sOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF0gfHwge30sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHRsID0gdGhpcy5sZW5ndGg7XG5cblx0XHRcdGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pbm5lckhUTUw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcblx0XHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCggdmFsdWUgKSAmJlxuXHRcdFx0XHQhd3JhcE1hcFsgKCBydGFnTmFtZS5leGVjKCB2YWx1ZSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpIF0gKSB7XG5cblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuaHRtbFByZWZpbHRlciggdmFsdWUgKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRcdGVsZW0gPSB0aGlzWyBpIF0gfHwge307XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblx0XHRcdFx0XHRcdFx0ZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtID0gMDtcblxuXHRcdFx0XHQvLyBJZiB1c2luZyBpbm5lckhUTUwgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgdXNlIHRoZSBmYWxsYmFjayBtZXRob2Rcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5hcHBlbmQoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRyZXBsYWNlV2l0aDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlnbm9yZWQgPSBbXTtcblxuXHRcdC8vIE1ha2UgdGhlIGNoYW5nZXMsIHJlcGxhY2luZyBlYWNoIG5vbi1pZ25vcmVkIGNvbnRleHQgZWxlbWVudCB3aXRoIHRoZSBuZXcgY29udGVudFxuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICggalF1ZXJ5LmluQXJyYXkoIHRoaXMsIGlnbm9yZWQgKSA8IDAgKSB7XG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggdGhpcyApICk7XG5cdFx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQoIGVsZW0sIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gRm9yY2UgY2FsbGJhY2sgaW52b2NhdGlvblxuXHRcdH0sIGlnbm9yZWQgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCgge1xuXHRhcHBlbmRUbzogXCJhcHBlbmRcIixcblx0cHJlcGVuZFRvOiBcInByZXBlbmRcIixcblx0aW5zZXJ0QmVmb3JlOiBcImJlZm9yZVwiLFxuXHRpbnNlcnRBZnRlcjogXCJhZnRlclwiLFxuXHRyZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcbn0sIGZ1bmN0aW9uKCBuYW1lLCBvcmlnaW5hbCApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGVsZW1zLFxuXHRcdFx0cmV0ID0gW10sXG5cdFx0XHRpbnNlcnQgPSBqUXVlcnkoIHNlbGVjdG9yICksXG5cdFx0XHRsYXN0ID0gaW5zZXJ0Lmxlbmd0aCAtIDEsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgaSA8PSBsYXN0OyBpKysgKSB7XG5cdFx0XHRlbGVtcyA9IGkgPT09IGxhc3QgPyB0aGlzIDogdGhpcy5jbG9uZSggdHJ1ZSApO1xuXHRcdFx0alF1ZXJ5KCBpbnNlcnRbIGkgXSApWyBvcmlnaW5hbCBdKCBlbGVtcyApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdC8vIC5nZXQoKSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdHB1c2guYXBwbHkoIHJldCwgZWxlbXMuZ2V0KCkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHJldCApO1xuXHR9O1xufSApO1xudmFyIHJudW1ub25weCA9IG5ldyBSZWdFeHAoIFwiXihcIiArIHBudW0gKyBcIikoPyFweClbYS16JV0rJFwiLCBcImlcIiApO1xuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHksIEZpcmVmb3ggPD0zMCAoIzE1MDk4LCAjMTQxNTApXG5cdFx0Ly8gSUUgdGhyb3dzIG9uIGVsZW1lbnRzIGNyZWF0ZWQgaW4gcG9wdXBzXG5cdFx0Ly8gRkYgbWVhbndoaWxlIHRocm93cyBvbiBmcmFtZSBlbGVtZW50cyB0aHJvdWdoIFwiZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZVwiXG5cdFx0dmFyIHZpZXcgPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cblx0XHRpZiAoICF2aWV3IHx8ICF2aWV3Lm9wZW5lciApIHtcblx0XHRcdHZpZXcgPSB3aW5kb3c7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSApO1xuXHR9O1xuXG52YXIgcmJveFN0eWxlID0gbmV3IFJlZ0V4cCggY3NzRXhwYW5kLmpvaW4oIFwifFwiICksIFwiaVwiICk7XG5cblxuXG4oIGZ1bmN0aW9uKCkge1xuXG5cdC8vIEV4ZWN1dGluZyBib3RoIHBpeGVsUG9zaXRpb24gJiBib3hTaXppbmdSZWxpYWJsZSB0ZXN0cyByZXF1aXJlIG9ubHkgb25lIGxheW91dFxuXHQvLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuXHRmdW5jdGlvbiBjb21wdXRlU3R5bGVUZXN0cygpIHtcblxuXHRcdC8vIFRoaXMgaXMgYSBzaW5nbGV0b24sIHdlIG5lZWQgdG8gZXhlY3V0ZSBpdCBvbmx5IG9uY2Vcblx0XHRpZiAoICFkaXYgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDtcIiArXG5cdFx0XHRcIm1hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiO1xuXHRcdGRpdi5zdHlsZS5jc3NUZXh0ID1cblx0XHRcdFwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO1wiICtcblx0XHRcdFwibWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDtcIiArXG5cdFx0XHRcIndpZHRoOjYwJTt0b3A6MSVcIjtcblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApLmFwcGVuZENoaWxkKCBkaXYgKTtcblxuXHRcdHZhciBkaXZTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBkaXYgKTtcblx0XHRwaXhlbFBvc2l0aW9uVmFsID0gZGl2U3R5bGUudG9wICE9PSBcIjElXCI7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5LCBGaXJlZm94IDw9MyAtIDQ0XG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0VmFsID0gcm91bmRQaXhlbE1lYXN1cmVzKCBkaXZTdHlsZS5tYXJnaW5MZWZ0ICkgPT09IDEyO1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgU2FmYXJpIDw9OS4xIC0gMTAuMSwgaU9TIDw9Ny4wIC0gOS4zXG5cdFx0Ly8gU29tZSBzdHlsZXMgY29tZSBiYWNrIHdpdGggcGVyY2VudGFnZSB2YWx1ZXMsIGV2ZW4gdGhvdWdoIHRoZXkgc2hvdWxkbid0XG5cdFx0ZGl2LnN0eWxlLnJpZ2h0ID0gXCI2MCVcIjtcblx0XHRwaXhlbEJveFN0eWxlc1ZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2U3R5bGUucmlnaHQgKSA9PT0gMzY7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHRcdC8vIERldGVjdCBtaXNyZXBvcnRpbmcgb2YgY29udGVudCBkaW1lbnNpb25zIGZvciBib3gtc2l6aW5nOmJvcmRlci1ib3ggZWxlbWVudHNcblx0XHRib3hTaXppbmdSZWxpYWJsZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2U3R5bGUud2lkdGggKSA9PT0gMzY7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHQvLyBEZXRlY3Qgb3ZlcmZsb3c6c2Nyb2xsIHNjcmV3aW5lc3MgKGdoLTM2OTkpXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9NjRcblx0XHQvLyBEb24ndCBnZXQgdHJpY2tlZCB3aGVuIHpvb20gYWZmZWN0cyBvZmZzZXRXaWR0aCAoZ2gtNDAyOSlcblx0XHRkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdFx0c2Nyb2xsYm94U2l6ZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2Lm9mZnNldFdpZHRoIC8gMyApID09PSAxMjtcblxuXHRcdGRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCggY29udGFpbmVyICk7XG5cblx0XHQvLyBOdWxsaWZ5IHRoZSBkaXYgc28gaXQgd291bGRuJ3QgYmUgc3RvcmVkIGluIHRoZSBtZW1vcnkgYW5kXG5cdFx0Ly8gaXQgd2lsbCBhbHNvIGJlIGEgc2lnbiB0aGF0IGNoZWNrcyBhbHJlYWR5IHBlcmZvcm1lZFxuXHRcdGRpdiA9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiByb3VuZFBpeGVsTWVhc3VyZXMoIG1lYXN1cmUgKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoIHBhcnNlRmxvYXQoIG1lYXN1cmUgKSApO1xuXHR9XG5cblx0dmFyIHBpeGVsUG9zaXRpb25WYWwsIGJveFNpemluZ1JlbGlhYmxlVmFsLCBzY3JvbGxib3hTaXplVmFsLCBwaXhlbEJveFN0eWxlc1ZhbCxcblx0XHRyZWxpYWJsZU1hcmdpbkxlZnRWYWwsXG5cdFx0Y29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLFxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcblxuXHQvLyBGaW5pc2ggZWFybHkgaW4gbGltaXRlZCAobm9uLWJyb3dzZXIpIGVudmlyb25tZW50c1xuXHRpZiAoICFkaXYuc3R5bGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHQvLyBTdHlsZSBvZiBjbG9uZWQgZWxlbWVudCBhZmZlY3RzIHNvdXJjZSBlbGVtZW50IGNsb25lZCAoIzg5MDgpXG5cdGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiY29udGVudC1ib3hcIjtcblx0ZGl2LmNsb25lTm9kZSggdHJ1ZSApLnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJcIjtcblx0c3VwcG9ydC5jbGVhckNsb25lU3R5bGUgPSBkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPT09IFwiY29udGVudC1ib3hcIjtcblxuXHRqUXVlcnkuZXh0ZW5kKCBzdXBwb3J0LCB7XG5cdFx0Ym94U2l6aW5nUmVsaWFibGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBib3hTaXppbmdSZWxpYWJsZVZhbDtcblx0XHR9LFxuXHRcdHBpeGVsQm94U3R5bGVzOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gcGl4ZWxCb3hTdHlsZXNWYWw7XG5cdFx0fSxcblx0XHRwaXhlbFBvc2l0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gcGl4ZWxQb3NpdGlvblZhbDtcblx0XHR9LFxuXHRcdHJlbGlhYmxlTWFyZ2luTGVmdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHJlbGlhYmxlTWFyZ2luTGVmdFZhbDtcblx0XHR9LFxuXHRcdHNjcm9sbGJveFNpemU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBzY3JvbGxib3hTaXplVmFsO1xuXHRcdH1cblx0fSApO1xufSApKCk7XG5cblxuZnVuY3Rpb24gY3VyQ1NTKCBlbGVtLCBuYW1lLCBjb21wdXRlZCApIHtcblx0dmFyIHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgsIHJldCxcblxuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggNTErXG5cdFx0Ly8gUmV0cmlldmluZyBzdHlsZSBiZWZvcmUgY29tcHV0ZWQgc29tZWhvd1xuXHRcdC8vIGZpeGVzIGFuIGlzc3VlIHdpdGggZ2V0dGluZyB3cm9uZyB2YWx1ZXNcblx0XHQvLyBvbiBkZXRhY2hlZCBlbGVtZW50c1xuXHRcdHN0eWxlID0gZWxlbS5zdHlsZTtcblxuXHRjb21wdXRlZCA9IGNvbXB1dGVkIHx8IGdldFN0eWxlcyggZWxlbSApO1xuXG5cdC8vIGdldFByb3BlcnR5VmFsdWUgaXMgbmVlZGVkIGZvcjpcblx0Ly8gICAuY3NzKCdmaWx0ZXInKSAoSUUgOSBvbmx5LCAjMTI1MzcpXG5cdC8vICAgLmNzcygnLS1jdXN0b21Qcm9wZXJ0eSkgKCMzMTQ0KVxuXHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdHJldCA9IGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUoIG5hbWUgKSB8fCBjb21wdXRlZFsgbmFtZSBdO1xuXG5cdFx0aWYgKCByZXQgPT09IFwiXCIgJiYgIWlzQXR0YWNoZWQoIGVsZW0gKSApIHtcblx0XHRcdHJldCA9IGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIEEgdHJpYnV0ZSB0byB0aGUgXCJhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXCJcblx0XHQvLyBBbmRyb2lkIEJyb3dzZXIgcmV0dXJucyBwZXJjZW50YWdlIGZvciBzb21lIHZhbHVlcyxcblx0XHQvLyBidXQgd2lkdGggc2VlbXMgdG8gYmUgcmVsaWFibHkgcGl4ZWxzLlxuXHRcdC8vIFRoaXMgaXMgYWdhaW5zdCB0aGUgQ1NTT00gZHJhZnQgc3BlYzpcblx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI3Jlc29sdmVkLXZhbHVlc1xuXHRcdGlmICggIXN1cHBvcnQucGl4ZWxCb3hTdHlsZXMoKSAmJiBybnVtbm9ucHgudGVzdCggcmV0ICkgJiYgcmJveFN0eWxlLnRlc3QoIG5hbWUgKSApIHtcblxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuXHRcdFx0d2lkdGggPSBzdHlsZS53aWR0aDtcblx0XHRcdG1pbldpZHRoID0gc3R5bGUubWluV2lkdGg7XG5cdFx0XHRtYXhXaWR0aCA9IHN0eWxlLm1heFdpZHRoO1xuXG5cdFx0XHQvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG5cdFx0XHRzdHlsZS5taW5XaWR0aCA9IHN0eWxlLm1heFdpZHRoID0gc3R5bGUud2lkdGggPSByZXQ7XG5cdFx0XHRyZXQgPSBjb21wdXRlZC53aWR0aDtcblxuXHRcdFx0Ly8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuXHRcdFx0c3R5bGUud2lkdGggPSB3aWR0aDtcblx0XHRcdHN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG5cdFx0XHRzdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXQgIT09IHVuZGVmaW5lZCA/XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdFx0Ly8gSUUgcmV0dXJucyB6SW5kZXggdmFsdWUgYXMgYW4gaW50ZWdlci5cblx0XHRyZXQgKyBcIlwiIDpcblx0XHRyZXQ7XG59XG5cblxuZnVuY3Rpb24gYWRkR2V0SG9va0lmKCBjb25kaXRpb25GbiwgaG9va0ZuICkge1xuXG5cdC8vIERlZmluZSB0aGUgaG9vaywgd2UnbGwgY2hlY2sgb24gdGhlIGZpcnN0IHJ1biBpZiBpdCdzIHJlYWxseSBuZWVkZWQuXG5cdHJldHVybiB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggY29uZGl0aW9uRm4oKSApIHtcblxuXHRcdFx0XHQvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcblx0XHRcdFx0Ly8gdG8gbWlzc2luZyBkZXBlbmRlbmN5KSwgcmVtb3ZlIGl0LlxuXHRcdFx0XHRkZWxldGUgdGhpcy5nZXQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSG9vayBuZWVkZWQ7IHJlZGVmaW5lIGl0IHNvIHRoYXQgdGhlIHN1cHBvcnQgdGVzdCBpcyBub3QgZXhlY3V0ZWQgYWdhaW4uXG5cdFx0XHRyZXR1cm4gKCB0aGlzLmdldCA9IGhvb2tGbiApLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHR9XG5cdH07XG59XG5cblxudmFyIGNzc1ByZWZpeGVzID0gWyBcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCIgXSxcblx0ZW1wdHlTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKS5zdHlsZSxcblx0dmVuZG9yUHJvcHMgPSB7fTtcblxuLy8gUmV0dXJuIGEgdmVuZG9yLXByZWZpeGVkIHByb3BlcnR5IG9yIHVuZGVmaW5lZFxuZnVuY3Rpb24gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB7XG5cblx0Ly8gQ2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuXHR2YXIgY2FwTmFtZSA9IG5hbWVbIDAgXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSggMSApLFxuXHRcdGkgPSBjc3NQcmVmaXhlcy5sZW5ndGg7XG5cblx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0bmFtZSA9IGNzc1ByZWZpeGVzWyBpIF0gKyBjYXBOYW1lO1xuXHRcdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJldHVybiBhIHBvdGVudGlhbGx5LW1hcHBlZCBqUXVlcnkuY3NzUHJvcHMgb3IgdmVuZG9yIHByZWZpeGVkIHByb3BlcnR5XG5mdW5jdGlvbiBmaW5hbFByb3BOYW1lKCBuYW1lICkge1xuXHR2YXIgZmluYWwgPSBqUXVlcnkuY3NzUHJvcHNbIG5hbWUgXSB8fCB2ZW5kb3JQcm9wc1sgbmFtZSBdO1xuXG5cdGlmICggZmluYWwgKSB7XG5cdFx0cmV0dXJuIGZpbmFsO1xuXHR9XG5cdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdHJldHVybiBuYW1lO1xuXHR9XG5cdHJldHVybiB2ZW5kb3JQcm9wc1sgbmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB8fCBuYW1lO1xufVxuXG5cbnZhclxuXG5cdC8vIFN3YXBwYWJsZSBpZiBkaXNwbGF5IGlzIG5vbmUgb3Igc3RhcnRzIHdpdGggdGFibGVcblx0Ly8gZXhjZXB0IFwidGFibGVcIiwgXCJ0YWJsZS1jZWxsXCIsIG9yIFwidGFibGUtY2FwdGlvblwiXG5cdC8vIFNlZSBoZXJlIGZvciBkaXNwbGF5IHZhbHVlczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9DU1MvZGlzcGxheVxuXHRyZGlzcGxheXN3YXAgPSAvXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sXG5cdHJjdXN0b21Qcm9wID0gL14tLS8sXG5cdGNzc1Nob3cgPSB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9LFxuXHRjc3NOb3JtYWxUcmFuc2Zvcm0gPSB7XG5cdFx0bGV0dGVyU3BhY2luZzogXCIwXCIsXG5cdFx0Zm9udFdlaWdodDogXCI0MDBcIlxuXHR9O1xuXG5mdW5jdGlvbiBzZXRQb3NpdGl2ZU51bWJlciggZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICkge1xuXG5cdC8vIEFueSByZWxhdGl2ZSAoKy8tKSB2YWx1ZXMgaGF2ZSBhbHJlYWR5IGJlZW5cblx0Ly8gbm9ybWFsaXplZCBhdCB0aGlzIHBvaW50XG5cdHZhciBtYXRjaGVzID0gcmNzc051bS5leGVjKCB2YWx1ZSApO1xuXHRyZXR1cm4gbWF0Y2hlcyA/XG5cblx0XHQvLyBHdWFyZCBhZ2FpbnN0IHVuZGVmaW5lZCBcInN1YnRyYWN0XCIsIGUuZy4sIHdoZW4gdXNlZCBhcyBpbiBjc3NIb29rc1xuXHRcdE1hdGgubWF4KCAwLCBtYXRjaGVzWyAyIF0gLSAoIHN1YnRyYWN0IHx8IDAgKSApICsgKCBtYXRjaGVzWyAzIF0gfHwgXCJweFwiICkgOlxuXHRcdHZhbHVlO1xufVxuXG5mdW5jdGlvbiBib3hNb2RlbEFkanVzdG1lbnQoIGVsZW0sIGRpbWVuc2lvbiwgYm94LCBpc0JvcmRlckJveCwgc3R5bGVzLCBjb21wdXRlZFZhbCApIHtcblx0dmFyIGkgPSBkaW1lbnNpb24gPT09IFwid2lkdGhcIiA/IDEgOiAwLFxuXHRcdGV4dHJhID0gMCxcblx0XHRkZWx0YSA9IDA7XG5cblx0Ly8gQWRqdXN0bWVudCBtYXkgbm90IGJlIG5lY2Vzc2FyeVxuXHRpZiAoIGJveCA9PT0gKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApICkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Zm9yICggOyBpIDwgNDsgaSArPSAyICkge1xuXG5cdFx0Ly8gQm90aCBib3ggbW9kZWxzIGV4Y2x1ZGUgbWFyZ2luXG5cdFx0aWYgKCBib3ggPT09IFwibWFyZ2luXCIgKSB7XG5cdFx0XHRkZWx0YSArPSBqUXVlcnkuY3NzKCBlbGVtLCBib3ggKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGNvbnRlbnQtYm94LCB3ZSdyZSBzZWVraW5nIFwicGFkZGluZ1wiIG9yIFwiYm9yZGVyXCIgb3IgXCJtYXJnaW5cIlxuXHRcdGlmICggIWlzQm9yZGVyQm94ICkge1xuXG5cdFx0XHQvLyBBZGQgcGFkZGluZ1xuXHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cblx0XHRcdC8vIEZvciBcImJvcmRlclwiIG9yIFwibWFyZ2luXCIsIGFkZCBib3JkZXJcblx0XHRcdGlmICggYm94ICE9PSBcInBhZGRpbmdcIiApIHtcblx0XHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblxuXHRcdFx0Ly8gQnV0IHN0aWxsIGtlZXAgdHJhY2sgb2YgaXQgb3RoZXJ3aXNlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRleHRyYSArPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kWyBpIF0gKyBcIldpZHRoXCIsIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGJvcmRlci1ib3ggKGNvbnRlbnQgKyBwYWRkaW5nICsgYm9yZGVyKSwgd2UncmUgc2Vla2luZyBcImNvbnRlbnRcIiBvclxuXHRcdC8vIFwicGFkZGluZ1wiIG9yIFwibWFyZ2luXCJcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBGb3IgXCJjb250ZW50XCIsIHN1YnRyYWN0IHBhZGRpbmdcblx0XHRcdGlmICggYm94ID09PSBcImNvbnRlbnRcIiApIHtcblx0XHRcdFx0ZGVsdGEgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvciBcImNvbnRlbnRcIiBvciBcInBhZGRpbmdcIiwgc3VidHJhY3QgYm9yZGVyXG5cdFx0XHRpZiAoIGJveCAhPT0gXCJtYXJnaW5cIiApIHtcblx0XHRcdFx0ZGVsdGEgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBY2NvdW50IGZvciBwb3NpdGl2ZSBjb250ZW50LWJveCBzY3JvbGwgZ3V0dGVyIHdoZW4gcmVxdWVzdGVkIGJ5IHByb3ZpZGluZyBjb21wdXRlZFZhbFxuXHRpZiAoICFpc0JvcmRlckJveCAmJiBjb21wdXRlZFZhbCA+PSAwICkge1xuXG5cdFx0Ly8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIGEgcm91bmRlZCBzdW0gb2YgY29udGVudCwgcGFkZGluZywgc2Nyb2xsIGd1dHRlciwgYW5kIGJvcmRlclxuXHRcdC8vIEFzc3VtaW5nIGludGVnZXIgc2Nyb2xsIGd1dHRlciwgc3VidHJhY3QgdGhlIHJlc3QgYW5kIHJvdW5kIGRvd25cblx0XHRkZWx0YSArPSBNYXRoLm1heCggMCwgTWF0aC5jZWlsKFxuXHRcdFx0ZWxlbVsgXCJvZmZzZXRcIiArIGRpbWVuc2lvblsgMCBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoIDEgKSBdIC1cblx0XHRcdGNvbXB1dGVkVmFsIC1cblx0XHRcdGRlbHRhIC1cblx0XHRcdGV4dHJhIC1cblx0XHRcdDAuNVxuXG5cdFx0Ly8gSWYgb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIHVua25vd24sIHRoZW4gd2UgY2FuJ3QgZGV0ZXJtaW5lIGNvbnRlbnQtYm94IHNjcm9sbCBndXR0ZXJcblx0XHQvLyBVc2UgYW4gZXhwbGljaXQgemVybyB0byBhdm9pZCBOYU4gKGdoLTM5NjQpXG5cdFx0KSApIHx8IDA7XG5cdH1cblxuXHRyZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEgKSB7XG5cblx0Ly8gU3RhcnQgd2l0aCBjb21wdXRlZCBzdHlsZVxuXHR2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICksXG5cblx0XHQvLyBUbyBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LCBvbmx5IGZldGNoIGJveFNpemluZyBpZiB3ZSBuZWVkIGl0IChnaC00MzIyKS5cblx0XHQvLyBGYWtlIGNvbnRlbnQtYm94IHVudGlsIHdlIGtub3cgaXQncyBuZWVkZWQgdG8ga25vdyB0aGUgdHJ1ZSB2YWx1ZS5cblx0XHRib3hTaXppbmdOZWVkZWQgPSAhc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpIHx8IGV4dHJhLFxuXHRcdGlzQm9yZGVyQm94ID0gYm94U2l6aW5nTmVlZGVkICYmXG5cdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiLFxuXHRcdHZhbHVlSXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveCxcblxuXHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgZGltZW5zaW9uLCBzdHlsZXMgKSxcblx0XHRvZmZzZXRQcm9wID0gXCJvZmZzZXRcIiArIGRpbWVuc2lvblsgMCBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoIDEgKTtcblxuXHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NTRcblx0Ly8gUmV0dXJuIGEgY29uZm91bmRpbmcgbm9uLXBpeGVsIHZhbHVlIG9yIGZlaWduIGlnbm9yYW5jZSwgYXMgYXBwcm9wcmlhdGUuXG5cdGlmICggcm51bW5vbnB4LnRlc3QoIHZhbCApICkge1xuXHRcdGlmICggIWV4dHJhICkge1xuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cdFx0dmFsID0gXCJhdXRvXCI7XG5cdH1cblxuXG5cdC8vIEZhbGwgYmFjayB0byBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgd2hlbiB2YWx1ZSBpcyBcImF1dG9cIlxuXHQvLyBUaGlzIGhhcHBlbnMgZm9yIGlubGluZSBlbGVtZW50cyB3aXRoIG5vIGV4cGxpY2l0IHNldHRpbmcgKGdoLTM1NzEpXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgLSA0LjMgb25seVxuXHQvLyBBbHNvIHVzZSBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgZm9yIG1pc3JlcG9ydGVkIGlubGluZSBkaW1lbnNpb25zIChnaC0zNjAyKVxuXHQvLyBTdXBwb3J0OiBJRSA5LTExIG9ubHlcblx0Ly8gQWxzbyB1c2Ugb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGZvciB3aGVuIGJveCBzaXppbmcgaXMgdW5yZWxpYWJsZVxuXHQvLyBXZSB1c2UgZ2V0Q2xpZW50UmVjdHMoKSB0byBjaGVjayBmb3IgaGlkZGVuL2Rpc2Nvbm5lY3RlZC5cblx0Ly8gSW4gdGhvc2UgY2FzZXMsIHRoZSBjb21wdXRlZCB2YWx1ZSBjYW4gYmUgdHJ1c3RlZCB0byBiZSBib3JkZXItYm94XG5cdGlmICggKCAhc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpICYmIGlzQm9yZGVyQm94IHx8XG5cdFx0dmFsID09PSBcImF1dG9cIiB8fFxuXHRcdCFwYXJzZUZsb2F0KCB2YWwgKSAmJiBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImlubGluZVwiICkgJiZcblx0XHRlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICkge1xuXG5cdFx0aXNCb3JkZXJCb3ggPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiO1xuXG5cdFx0Ly8gV2hlcmUgYXZhaWxhYmxlLCBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgYXBwcm94aW1hdGUgYm9yZGVyIGJveCBkaW1lbnNpb25zLlxuXHRcdC8vIFdoZXJlIG5vdCBhdmFpbGFibGUgKGUuZy4sIFNWRyksIGFzc3VtZSB1bnJlbGlhYmxlIGJveC1zaXppbmcgYW5kIGludGVycHJldCB0aGVcblx0XHQvLyByZXRyaWV2ZWQgdmFsdWUgYXMgYSBjb250ZW50IGJveCBkaW1lbnNpb24uXG5cdFx0dmFsdWVJc0JvcmRlckJveCA9IG9mZnNldFByb3AgaW4gZWxlbTtcblx0XHRpZiAoIHZhbHVlSXNCb3JkZXJCb3ggKSB7XG5cdFx0XHR2YWwgPSBlbGVtWyBvZmZzZXRQcm9wIF07XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm9ybWFsaXplIFwiXCIgYW5kIGF1dG9cblx0dmFsID0gcGFyc2VGbG9hdCggdmFsICkgfHwgMDtcblxuXHQvLyBBZGp1c3QgZm9yIHRoZSBlbGVtZW50J3MgYm94IG1vZGVsXG5cdHJldHVybiAoIHZhbCArXG5cdFx0Ym94TW9kZWxBZGp1c3RtZW50KFxuXHRcdFx0ZWxlbSxcblx0XHRcdGRpbWVuc2lvbixcblx0XHRcdGV4dHJhIHx8ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSxcblx0XHRcdHZhbHVlSXNCb3JkZXJCb3gsXG5cdFx0XHRzdHlsZXMsXG5cblx0XHRcdC8vIFByb3ZpZGUgdGhlIGN1cnJlbnQgY29tcHV0ZWQgc2l6ZSB0byByZXF1ZXN0IHNjcm9sbCBndXR0ZXIgY2FsY3VsYXRpb24gKGdoLTM1ODkpXG5cdFx0XHR2YWxcblx0XHQpXG5cdCkgKyBcInB4XCI7XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBBZGQgaW4gc3R5bGUgcHJvcGVydHkgaG9va3MgZm9yIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHRcblx0Ly8gYmVoYXZpb3Igb2YgZ2V0dGluZyBhbmQgc2V0dGluZyBhIHN0eWxlIHByb3BlcnR5XG5cdGNzc0hvb2tzOiB7XG5cdFx0b3BhY2l0eToge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRcdFx0XHQvLyBXZSBzaG91bGQgYWx3YXlzIGdldCBhIG51bWJlciBiYWNrIGZyb20gb3BhY2l0eVxuXHRcdFx0XHRcdHZhciByZXQgPSBjdXJDU1MoIGVsZW0sIFwib3BhY2l0eVwiICk7XG5cdFx0XHRcdFx0cmV0dXJuIHJldCA9PT0gXCJcIiA/IFwiMVwiIDogcmV0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIERvbid0IGF1dG9tYXRpY2FsbHkgYWRkIFwicHhcIiB0byB0aGVzZSBwb3NzaWJseS11bml0bGVzcyBwcm9wZXJ0aWVzXG5cdGNzc051bWJlcjoge1xuXHRcdFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogdHJ1ZSxcblx0XHRcImNvbHVtbkNvdW50XCI6IHRydWUsXG5cdFx0XCJmaWxsT3BhY2l0eVwiOiB0cnVlLFxuXHRcdFwiZmxleEdyb3dcIjogdHJ1ZSxcblx0XHRcImZsZXhTaHJpbmtcIjogdHJ1ZSxcblx0XHRcImZvbnRXZWlnaHRcIjogdHJ1ZSxcblx0XHRcImdyaWRBcmVhXCI6IHRydWUsXG5cdFx0XCJncmlkQ29sdW1uXCI6IHRydWUsXG5cdFx0XCJncmlkQ29sdW1uRW5kXCI6IHRydWUsXG5cdFx0XCJncmlkQ29sdW1uU3RhcnRcIjogdHJ1ZSxcblx0XHRcImdyaWRSb3dcIjogdHJ1ZSxcblx0XHRcImdyaWRSb3dFbmRcIjogdHJ1ZSxcblx0XHRcImdyaWRSb3dTdGFydFwiOiB0cnVlLFxuXHRcdFwibGluZUhlaWdodFwiOiB0cnVlLFxuXHRcdFwib3BhY2l0eVwiOiB0cnVlLFxuXHRcdFwib3JkZXJcIjogdHJ1ZSxcblx0XHRcIm9ycGhhbnNcIjogdHJ1ZSxcblx0XHRcIndpZG93c1wiOiB0cnVlLFxuXHRcdFwiekluZGV4XCI6IHRydWUsXG5cdFx0XCJ6b29tXCI6IHRydWVcblx0fSxcblxuXHQvLyBBZGQgaW4gcHJvcGVydGllcyB3aG9zZSBuYW1lcyB5b3Ugd2lzaCB0byBmaXggYmVmb3JlXG5cdC8vIHNldHRpbmcgb3IgZ2V0dGluZyB0aGUgdmFsdWVcblx0Y3NzUHJvcHM6IHt9LFxuXG5cdC8vIEdldCBhbmQgc2V0IHRoZSBzdHlsZSBwcm9wZXJ0eSBvbiBhIERPTSBOb2RlXG5cdHN0eWxlOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUsIGV4dHJhICkge1xuXG5cdFx0Ly8gRG9uJ3Qgc2V0IHN0eWxlcyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0aWYgKCAhZWxlbSB8fCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggfHwgIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lXG5cdFx0dmFyIHJldCwgdHlwZSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGNhbWVsQ2FzZSggbmFtZSApLFxuXHRcdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApLFxuXHRcdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdC8vIHdhbnQgdG8gcXVlcnkgdGhlIHZhbHVlIGlmIGl0IGlzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuXHRcdC8vIHNpbmNlIHRoZXkgYXJlIHVzZXItZGVmaW5lZC5cblx0XHRpZiAoICFpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRuYW1lID0gZmluYWxQcm9wTmFtZSggb3JpZ05hbWUgKTtcblx0XHR9XG5cblx0XHQvLyBHZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLCB0aGVuIHVucHJlZml4ZWQgdmVyc2lvblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuXHRcdFx0Ly8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKCM3MzQ1KVxuXHRcdFx0aWYgKCB0eXBlID09PSBcInN0cmluZ1wiICYmICggcmV0ID0gcmNzc051bS5leGVjKCB2YWx1ZSApICkgJiYgcmV0WyAxIF0gKSB7XG5cdFx0XHRcdHZhbHVlID0gYWRqdXN0Q1NTKCBlbGVtLCBuYW1lLCByZXQgKTtcblxuXHRcdFx0XHQvLyBGaXhlcyBidWcgIzkyMzdcblx0XHRcdFx0dHlwZSA9IFwibnVtYmVyXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IG51bGwgYW5kIE5hTiB2YWx1ZXMgYXJlbid0IHNldCAoIzcxMTYpXG5cdFx0XHRpZiAoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGEgbnVtYmVyIHdhcyBwYXNzZWQgaW4sIGFkZCB0aGUgdW5pdCAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxuXHRcdFx0Ly8gVGhlIGlzQ3VzdG9tUHJvcCBjaGVjayBjYW4gYmUgcmVtb3ZlZCBpbiBqUXVlcnkgNC4wIHdoZW4gd2Ugb25seSBhdXRvLWFwcGVuZFxuXHRcdFx0Ly8gXCJweFwiIHRvIGEgZmV3IGhhcmRjb2RlZCB2YWx1ZXMuXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwibnVtYmVyXCIgJiYgIWlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdFx0dmFsdWUgKz0gcmV0ICYmIHJldFsgMyBdIHx8ICggalF1ZXJ5LmNzc051bWJlclsgb3JpZ05hbWUgXSA/IFwiXCIgOiBcInB4XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYmFja2dyb3VuZC0qIHByb3BzIGFmZmVjdCBvcmlnaW5hbCBjbG9uZSdzIHZhbHVlc1xuXHRcdFx0aWYgKCAhc3VwcG9ydC5jbGVhckNsb25lU3R5bGUgJiYgdmFsdWUgPT09IFwiXCIgJiYgbmFtZS5pbmRleE9mKCBcImJhY2tncm91bmRcIiApID09PSAwICkge1xuXHRcdFx0XHRzdHlsZVsgbmFtZSBdID0gXCJpbmhlcml0XCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQsIHVzZSB0aGF0IHZhbHVlLCBvdGhlcndpc2UganVzdCBzZXQgdGhlIHNwZWNpZmllZCB2YWx1ZVxuXHRcdFx0aWYgKCAhaG9va3MgfHwgISggXCJzZXRcIiBpbiBob29rcyApIHx8XG5cdFx0XHRcdCggdmFsdWUgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBleHRyYSApICkgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRpZiAoIGlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdFx0XHRzdHlsZS5zZXRQcm9wZXJ0eSggbmFtZSwgdmFsdWUgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdHlsZVsgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBub24tY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXHRcdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBmYWxzZSwgZXh0cmEgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIGp1c3QgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBvYmplY3Rcblx0XHRcdHJldHVybiBzdHlsZVsgbmFtZSBdO1xuXHRcdH1cblx0fSxcblxuXHRjc3M6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBleHRyYSwgc3R5bGVzICkge1xuXHRcdHZhciB2YWwsIG51bSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGNhbWVsQ2FzZSggbmFtZSApLFxuXHRcdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdC8vIHdhbnQgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCBpcyBhIENTUyBjdXN0b20gcHJvcGVydHlcblx0XHQvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cdFx0aWYgKCAhaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0bmFtZSA9IGZpbmFsUHJvcE5hbWUoIG9yaWdOYW1lICk7XG5cdFx0fVxuXG5cdFx0Ly8gVHJ5IHByZWZpeGVkIG5hbWUgZm9sbG93ZWQgYnkgdGhlIHVucHJlZml4ZWQgbmFtZVxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWwgPSBob29rcy5nZXQoIGVsZW0sIHRydWUsIGV4dHJhICk7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXJ3aXNlLCBpZiBhIHdheSB0byBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGV4aXN0cywgdXNlIHRoYXRcblx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dmFsID0gY3VyQ1NTKCBlbGVtLCBuYW1lLCBzdHlsZXMgKTtcblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IFwibm9ybWFsXCIgdG8gY29tcHV0ZWQgdmFsdWVcblx0XHRpZiAoIHZhbCA9PT0gXCJub3JtYWxcIiAmJiBuYW1lIGluIGNzc05vcm1hbFRyYW5zZm9ybSApIHtcblx0XHRcdHZhbCA9IGNzc05vcm1hbFRyYW5zZm9ybVsgbmFtZSBdO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgbnVtZXJpYyBpZiBmb3JjZWQgb3IgYSBxdWFsaWZpZXIgd2FzIHByb3ZpZGVkIGFuZCB2YWwgbG9va3MgbnVtZXJpY1xuXHRcdGlmICggZXh0cmEgPT09IFwiXCIgfHwgZXh0cmEgKSB7XG5cdFx0XHRudW0gPSBwYXJzZUZsb2F0KCB2YWwgKTtcblx0XHRcdHJldHVybiBleHRyYSA9PT0gdHJ1ZSB8fCBpc0Zpbml0ZSggbnVtICkgPyBudW0gfHwgMCA6IHZhbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwiaGVpZ2h0XCIsIFwid2lkdGhcIiBdLCBmdW5jdGlvbiggaSwgZGltZW5zaW9uICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIGRpbWVuc2lvbiBdID0ge1xuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkLCBleHRyYSApIHtcblx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRcdFx0Ly8gQ2VydGFpbiBlbGVtZW50cyBjYW4gaGF2ZSBkaW1lbnNpb24gaW5mbyBpZiB3ZSBpbnZpc2libHkgc2hvdyB0aGVtXG5cdFx0XHRcdC8vIGJ1dCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0XG5cdFx0XHRcdHJldHVybiByZGlzcGxheXN3YXAudGVzdCggalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSApICYmXG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgOCtcblx0XHRcdFx0XHQvLyBUYWJsZSBjb2x1bW5zIGluIFNhZmFyaSBoYXZlIG5vbi16ZXJvIG9mZnNldFdpZHRoICYgemVyb1xuXHRcdFx0XHRcdC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHVubGVzcyBkaXNwbGF5IGlzIGNoYW5nZWQuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0XHRcdFx0Ly8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYSBkaXNjb25uZWN0ZWQgbm9kZVxuXHRcdFx0XHRcdC8vIGluIElFIHRocm93cyBhbiBlcnJvci5cblx0XHRcdFx0XHQoICFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoIHx8ICFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICkgP1xuXHRcdFx0XHRcdFx0c3dhcCggZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBkaW1lbnNpb24sIGV4dHJhICk7XG5cdFx0XHRcdFx0XHR9ICkgOlxuXHRcdFx0XHRcdFx0Z2V0V2lkdGhPckhlaWdodCggZWxlbSwgZGltZW5zaW9uLCBleHRyYSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSB7XG5cdFx0XHR2YXIgbWF0Y2hlcyxcblx0XHRcdFx0c3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICksXG5cblx0XHRcdFx0Ly8gT25seSByZWFkIHN0eWxlcy5wb3NpdGlvbiBpZiB0aGUgdGVzdCBoYXMgYSBjaGFuY2UgdG8gZmFpbFxuXHRcdFx0XHQvLyB0byBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LlxuXHRcdFx0XHRzY3JvbGxib3hTaXplQnVnZ3kgPSAhc3VwcG9ydC5zY3JvbGxib3hTaXplKCkgJiZcblx0XHRcdFx0XHRzdHlsZXMucG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIixcblxuXHRcdFx0XHQvLyBUbyBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LCBvbmx5IGZldGNoIGJveFNpemluZyBpZiB3ZSBuZWVkIGl0IChnaC0zOTkxKVxuXHRcdFx0XHRib3hTaXppbmdOZWVkZWQgPSBzY3JvbGxib3hTaXplQnVnZ3kgfHwgZXh0cmEsXG5cdFx0XHRcdGlzQm9yZGVyQm94ID0gYm94U2l6aW5nTmVlZGVkICYmXG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIixcblx0XHRcdFx0c3VidHJhY3QgPSBleHRyYSA/XG5cdFx0XHRcdFx0Ym94TW9kZWxBZGp1c3RtZW50KFxuXHRcdFx0XHRcdFx0ZWxlbSxcblx0XHRcdFx0XHRcdGRpbWVuc2lvbixcblx0XHRcdFx0XHRcdGV4dHJhLFxuXHRcdFx0XHRcdFx0aXNCb3JkZXJCb3gsXG5cdFx0XHRcdFx0XHRzdHlsZXNcblx0XHRcdFx0XHQpIDpcblx0XHRcdFx0XHQwO1xuXG5cdFx0XHQvLyBBY2NvdW50IGZvciB1bnJlbGlhYmxlIGJvcmRlci1ib3ggZGltZW5zaW9ucyBieSBjb21wYXJpbmcgb2Zmc2V0KiB0byBjb21wdXRlZCBhbmRcblx0XHRcdC8vIGZha2luZyBhIGNvbnRlbnQtYm94IHRvIGdldCBib3JkZXIgYW5kIHBhZGRpbmcgKGdoLTM2OTkpXG5cdFx0XHRpZiAoIGlzQm9yZGVyQm94ICYmIHNjcm9sbGJveFNpemVCdWdneSApIHtcblx0XHRcdFx0c3VidHJhY3QgLT0gTWF0aC5jZWlsKFxuXHRcdFx0XHRcdGVsZW1bIFwib2Zmc2V0XCIgKyBkaW1lbnNpb25bIDAgXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKCAxICkgXSAtXG5cdFx0XHRcdFx0cGFyc2VGbG9hdCggc3R5bGVzWyBkaW1lbnNpb24gXSApIC1cblx0XHRcdFx0XHRib3hNb2RlbEFkanVzdG1lbnQoIGVsZW0sIGRpbWVuc2lvbiwgXCJib3JkZXJcIiwgZmFsc2UsIHN0eWxlcyApIC1cblx0XHRcdFx0XHQwLjVcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udmVydCB0byBwaXhlbHMgaWYgdmFsdWUgYWRqdXN0bWVudCBpcyBuZWVkZWRcblx0XHRcdGlmICggc3VidHJhY3QgJiYgKCBtYXRjaGVzID0gcmNzc051bS5leGVjKCB2YWx1ZSApICkgJiZcblx0XHRcdFx0KCBtYXRjaGVzWyAzIF0gfHwgXCJweFwiICkgIT09IFwicHhcIiApIHtcblxuXHRcdFx0XHRlbGVtLnN0eWxlWyBkaW1lbnNpb24gXSA9IHZhbHVlO1xuXHRcdFx0XHR2YWx1ZSA9IGpRdWVyeS5jc3MoIGVsZW0sIGRpbWVuc2lvbiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0UG9zaXRpdmVOdW1iZXIoIGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCApO1xuXHRcdH1cblx0fTtcbn0gKTtcblxualF1ZXJ5LmNzc0hvb2tzLm1hcmdpbkxlZnQgPSBhZGRHZXRIb29rSWYoIHN1cHBvcnQucmVsaWFibGVNYXJnaW5MZWZ0LFxuXHRmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdHJldHVybiAoIHBhcnNlRmxvYXQoIGN1ckNTUyggZWxlbSwgXCJtYXJnaW5MZWZ0XCIgKSApIHx8XG5cdFx0XHRcdGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtXG5cdFx0XHRcdFx0c3dhcCggZWxlbSwgeyBtYXJnaW5MZWZ0OiAwIH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0KSArIFwicHhcIjtcblx0XHR9XG5cdH1cbik7XG5cbi8vIFRoZXNlIGhvb2tzIGFyZSB1c2VkIGJ5IGFuaW1hdGUgdG8gZXhwYW5kIHByb3BlcnRpZXNcbmpRdWVyeS5lYWNoKCB7XG5cdG1hcmdpbjogXCJcIixcblx0cGFkZGluZzogXCJcIixcblx0Ym9yZGVyOiBcIldpZHRoXCJcbn0sIGZ1bmN0aW9uKCBwcmVmaXgsIHN1ZmZpeCApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXSA9IHtcblx0XHRleHBhbmQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBpID0gMCxcblx0XHRcdFx0ZXhwYW5kZWQgPSB7fSxcblxuXHRcdFx0XHQvLyBBc3N1bWVzIGEgc2luZ2xlIG51bWJlciBpZiBub3QgYSBzdHJpbmdcblx0XHRcdFx0cGFydHMgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZS5zcGxpdCggXCIgXCIgKSA6IFsgdmFsdWUgXTtcblxuXHRcdFx0Zm9yICggOyBpIDwgNDsgaSsrICkge1xuXHRcdFx0XHRleHBhbmRlZFsgcHJlZml4ICsgY3NzRXhwYW5kWyBpIF0gKyBzdWZmaXggXSA9XG5cdFx0XHRcdFx0cGFydHNbIGkgXSB8fCBwYXJ0c1sgaSAtIDIgXSB8fCBwYXJ0c1sgMCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZXhwYW5kZWQ7XG5cdFx0fVxuXHR9O1xuXG5cdGlmICggcHJlZml4ICE9PSBcIm1hcmdpblwiICkge1xuXHRcdGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0uc2V0ID0gc2V0UG9zaXRpdmVOdW1iZXI7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRjc3M6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgc3R5bGVzLCBsZW4sXG5cdFx0XHRcdG1hcCA9IHt9LFxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBuYW1lICkgKSB7XG5cdFx0XHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApO1xuXHRcdFx0XHRsZW4gPSBuYW1lLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRtYXBbIG5hbWVbIGkgXSBdID0galF1ZXJ5LmNzcyggZWxlbSwgbmFtZVsgaSBdLCBmYWxzZSwgc3R5bGVzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSwgdmFsdWUgKSA6XG5cdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIG5hbWUgKTtcblx0XHR9LCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fVxufSApO1xuXG5cbmZ1bmN0aW9uIFR3ZWVuKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApIHtcblx0cmV0dXJuIG5ldyBUd2Vlbi5wcm90b3R5cGUuaW5pdCggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcgKTtcbn1cbmpRdWVyeS5Ud2VlbiA9IFR3ZWVuO1xuXG5Ud2Vlbi5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBUd2Vlbixcblx0aW5pdDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nLCB1bml0ICkge1xuXHRcdHRoaXMuZWxlbSA9IGVsZW07XG5cdFx0dGhpcy5wcm9wID0gcHJvcDtcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0O1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5zdGFydCA9IHRoaXMubm93ID0gdGhpcy5jdXIoKTtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnVuaXQgPSB1bml0IHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApO1xuXHR9LFxuXHRjdXI6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRyZXR1cm4gaG9va3MgJiYgaG9va3MuZ2V0ID9cblx0XHRcdGhvb2tzLmdldCggdGhpcyApIDpcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5nZXQoIHRoaXMgKTtcblx0fSxcblx0cnVuOiBmdW5jdGlvbiggcGVyY2VudCApIHtcblx0XHR2YXIgZWFzZWQsXG5cdFx0XHRob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kdXJhdGlvbiApIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBqUXVlcnkuZWFzaW5nWyB0aGlzLmVhc2luZyBdKFxuXHRcdFx0XHRwZXJjZW50LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKiBwZXJjZW50LCAwLCAxLCB0aGlzLm9wdGlvbnMuZHVyYXRpb25cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xuXHRcdH1cblx0XHR0aGlzLm5vdyA9ICggdGhpcy5lbmQgLSB0aGlzLnN0YXJ0ICkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5zdGVwICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnN0ZXAuY2FsbCggdGhpcy5lbGVtLCB0aGlzLm5vdywgdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgaG9va3Muc2V0ICkge1xuXHRcdFx0aG9va3Muc2V0KCB0aGlzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQoIHRoaXMgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5cblR3ZWVuLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZSA9IFR3ZWVuLnByb3RvdHlwZTtcblxuVHdlZW4ucHJvcEhvb2tzID0ge1xuXHRfZGVmYXVsdDoge1xuXHRcdGdldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblxuXHRcdFx0Ly8gVXNlIGEgcHJvcGVydHkgb24gdGhlIGVsZW1lbnQgZGlyZWN0bHkgd2hlbiBpdCBpcyBub3QgYSBET00gZWxlbWVudCxcblx0XHRcdC8vIG9yIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc3R5bGUgcHJvcGVydHkgdGhhdCBleGlzdHMuXG5cdFx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgIT09IDEgfHxcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdICE9IG51bGwgJiYgdHdlZW4uZWxlbS5zdHlsZVsgdHdlZW4ucHJvcCBdID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIGFzIGEgM3JkIHBhcmFtZXRlciB0byAuY3NzIHdpbGwgYXV0b21hdGljYWxseVxuXHRcdFx0Ly8gYXR0ZW1wdCBhIHBhcnNlRmxvYXQgYW5kIGZhbGxiYWNrIHRvIGEgc3RyaW5nIGlmIHRoZSBwYXJzZSBmYWlscy5cblx0XHRcdC8vIFNpbXBsZSB2YWx1ZXMgc3VjaCBhcyBcIjEwcHhcIiBhcmUgcGFyc2VkIHRvIEZsb2F0O1xuXHRcdFx0Ly8gY29tcGxleCB2YWx1ZXMgc3VjaCBhcyBcInJvdGF0ZSgxcmFkKVwiIGFyZSByZXR1cm5lZCBhcy1pcy5cblx0XHRcdHJlc3VsdCA9IGpRdWVyeS5jc3MoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIFwiXCIgKTtcblxuXHRcdFx0Ly8gRW1wdHkgc3RyaW5ncywgbnVsbCwgdW5kZWZpbmVkIGFuZCBcImF1dG9cIiBhcmUgY29udmVydGVkIHRvIDAuXG5cdFx0XHRyZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXG5cdFx0XHQvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cblx0XHRcdC8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cblx0XHRcdC8vIFVzZSAuc3R5bGUgaWYgYXZhaWxhYmxlIGFuZCB1c2UgcGxhaW4gcHJvcGVydGllcyB3aGVyZSBhdmFpbGFibGUuXG5cdFx0XHRpZiAoIGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0oIHR3ZWVuICk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlID09PSAxICYmIChcblx0XHRcdFx0XHRqUXVlcnkuY3NzSG9va3NbIHR3ZWVuLnByb3AgXSB8fFxuXHRcdFx0XHRcdHR3ZWVuLmVsZW0uc3R5bGVbIGZpbmFsUHJvcE5hbWUoIHR3ZWVuLnByb3AgKSBdICE9IG51bGwgKSApIHtcblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCB0d2Vlbi5ub3cgKyB0d2Vlbi51bml0ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuLy8gUGFuaWMgYmFzZWQgYXBwcm9hY2ggdG8gc2V0dGluZyB0aGluZ3Mgb24gZGlzY29ubmVjdGVkIG5vZGVzXG5Ud2Vlbi5wcm9wSG9va3Muc2Nyb2xsVG9wID0gVHdlZW4ucHJvcEhvb2tzLnNjcm9sbExlZnQgPSB7XG5cdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAmJiB0d2Vlbi5lbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZWFzaW5nID0ge1xuXHRsaW5lYXI6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiBwO1xuXHR9LFxuXHRzd2luZzogZnVuY3Rpb24oIHAgKSB7XG5cdFx0cmV0dXJuIDAuNSAtIE1hdGguY29zKCBwICogTWF0aC5QSSApIC8gMjtcblx0fSxcblx0X2RlZmF1bHQ6IFwic3dpbmdcIlxufTtcblxualF1ZXJ5LmZ4ID0gVHdlZW4ucHJvdG90eXBlLmluaXQ7XG5cbi8vIEJhY2sgY29tcGF0IDwxLjggZXh0ZW5zaW9uIHBvaW50XG5qUXVlcnkuZnguc3RlcCA9IHt9O1xuXG5cblxuXG52YXJcblx0ZnhOb3csIGluUHJvZ3Jlc3MsXG5cdHJmeHR5cGVzID0gL14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFxuXHRycnVuID0gL3F1ZXVlSG9va3MkLztcblxuZnVuY3Rpb24gc2NoZWR1bGUoKSB7XG5cdGlmICggaW5Qcm9ncmVzcyApIHtcblx0XHRpZiAoIGRvY3VtZW50LmhpZGRlbiA9PT0gZmFsc2UgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSApIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHNjaGVkdWxlICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBzY2hlZHVsZSwgalF1ZXJ5LmZ4LmludGVydmFsICk7XG5cdFx0fVxuXG5cdFx0alF1ZXJ5LmZ4LnRpY2soKTtcblx0fVxufVxuXG4vLyBBbmltYXRpb25zIGNyZWF0ZWQgc3luY2hyb25vdXNseSB3aWxsIHJ1biBzeW5jaHJvbm91c2x5XG5mdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcblx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdGZ4Tm93ID0gdW5kZWZpbmVkO1xuXHR9ICk7XG5cdHJldHVybiAoIGZ4Tm93ID0gRGF0ZS5ub3coKSApO1xufVxuXG4vLyBHZW5lcmF0ZSBwYXJhbWV0ZXJzIHRvIGNyZWF0ZSBhIHN0YW5kYXJkIGFuaW1hdGlvblxuZnVuY3Rpb24gZ2VuRngoIHR5cGUsIGluY2x1ZGVXaWR0aCApIHtcblx0dmFyIHdoaWNoLFxuXHRcdGkgPSAwLFxuXHRcdGF0dHJzID0geyBoZWlnaHQ6IHR5cGUgfTtcblxuXHQvLyBJZiB3ZSBpbmNsdWRlIHdpZHRoLCBzdGVwIHZhbHVlIGlzIDEgdG8gZG8gYWxsIGNzc0V4cGFuZCB2YWx1ZXMsXG5cdC8vIG90aGVyd2lzZSBzdGVwIHZhbHVlIGlzIDIgdG8gc2tpcCBvdmVyIExlZnQgYW5kIFJpZ2h0XG5cdGluY2x1ZGVXaWR0aCA9IGluY2x1ZGVXaWR0aCA/IDEgOiAwO1xuXHRmb3IgKCA7IGkgPCA0OyBpICs9IDIgLSBpbmNsdWRlV2lkdGggKSB7XG5cdFx0d2hpY2ggPSBjc3NFeHBhbmRbIGkgXTtcblx0XHRhdHRyc1sgXCJtYXJnaW5cIiArIHdoaWNoIF0gPSBhdHRyc1sgXCJwYWRkaW5nXCIgKyB3aGljaCBdID0gdHlwZTtcblx0fVxuXG5cdGlmICggaW5jbHVkZVdpZHRoICkge1xuXHRcdGF0dHJzLm9wYWNpdHkgPSBhdHRycy53aWR0aCA9IHR5cGU7XG5cdH1cblxuXHRyZXR1cm4gYXR0cnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVR3ZWVuKCB2YWx1ZSwgcHJvcCwgYW5pbWF0aW9uICkge1xuXHR2YXIgdHdlZW4sXG5cdFx0Y29sbGVjdGlvbiA9ICggQW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gfHwgW10gKS5jb25jYXQoIEFuaW1hdGlvbi50d2VlbmVyc1sgXCIqXCIgXSApLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRpZiAoICggdHdlZW4gPSBjb2xsZWN0aW9uWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgcHJvcCwgdmFsdWUgKSApICkge1xuXG5cdFx0XHQvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBwcm9wZXJ0eVxuXHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJlZmlsdGVyKCBlbGVtLCBwcm9wcywgb3B0cyApIHtcblx0dmFyIHByb3AsIHZhbHVlLCB0b2dnbGUsIGhvb2tzLCBvbGRmaXJlLCBwcm9wVHdlZW4sIHJlc3RvcmVEaXNwbGF5LCBkaXNwbGF5LFxuXHRcdGlzQm94ID0gXCJ3aWR0aFwiIGluIHByb3BzIHx8IFwiaGVpZ2h0XCIgaW4gcHJvcHMsXG5cdFx0YW5pbSA9IHRoaXMsXG5cdFx0b3JpZyA9IHt9LFxuXHRcdHN0eWxlID0gZWxlbS5zdHlsZSxcblx0XHRoaWRkZW4gPSBlbGVtLm5vZGVUeXBlICYmIGlzSGlkZGVuV2l0aGluVHJlZSggZWxlbSApLFxuXHRcdGRhdGFTaG93ID0gZGF0YVByaXYuZ2V0KCBlbGVtLCBcImZ4c2hvd1wiICk7XG5cblx0Ly8gUXVldWUtc2tpcHBpbmcgYW5pbWF0aW9ucyBoaWphY2sgdGhlIGZ4IGhvb2tzXG5cdGlmICggIW9wdHMucXVldWUgKSB7XG5cdFx0aG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoIGVsZW0sIFwiZnhcIiApO1xuXHRcdGlmICggaG9va3MudW5xdWV1ZWQgPT0gbnVsbCApIHtcblx0XHRcdGhvb2tzLnVucXVldWVkID0gMDtcblx0XHRcdG9sZGZpcmUgPSBob29rcy5lbXB0eS5maXJlO1xuXHRcdFx0aG9va3MuZW1wdHkuZmlyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICFob29rcy51bnF1ZXVlZCApIHtcblx0XHRcdFx0XHRvbGRmaXJlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdGhvb2tzLnVucXVldWVkKys7XG5cblx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEVuc3VyZSB0aGUgY29tcGxldGUgaGFuZGxlciBpcyBjYWxsZWQgYmVmb3JlIHRoaXMgY29tcGxldGVzXG5cdFx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGhvb2tzLnVucXVldWVkLS07XG5cdFx0XHRcdGlmICggIWpRdWVyeS5xdWV1ZSggZWxlbSwgXCJmeFwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRcdGhvb2tzLmVtcHR5LmZpcmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIERldGVjdCBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRmb3IgKCBwcm9wIGluIHByb3BzICkge1xuXHRcdHZhbHVlID0gcHJvcHNbIHByb3AgXTtcblx0XHRpZiAoIHJmeHR5cGVzLnRlc3QoIHZhbHVlICkgKSB7XG5cdFx0XHRkZWxldGUgcHJvcHNbIHByb3AgXTtcblx0XHRcdHRvZ2dsZSA9IHRvZ2dsZSB8fCB2YWx1ZSA9PT0gXCJ0b2dnbGVcIjtcblx0XHRcdGlmICggdmFsdWUgPT09ICggaGlkZGVuID8gXCJoaWRlXCIgOiBcInNob3dcIiApICkge1xuXG5cdFx0XHRcdC8vIFByZXRlbmQgdG8gYmUgaGlkZGVuIGlmIHRoaXMgaXMgYSBcInNob3dcIiBhbmRcblx0XHRcdFx0Ly8gdGhlcmUgaXMgc3RpbGwgZGF0YSBmcm9tIGEgc3RvcHBlZCBzaG93L2hpZGVcblx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gXCJzaG93XCIgJiYgZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdGhpZGRlbiA9IHRydWU7XG5cblx0XHRcdFx0Ly8gSWdub3JlIGFsbCBvdGhlciBuby1vcCBzaG93L2hpZGUgZGF0YVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRvcmlnWyBwcm9wIF0gPSBkYXRhU2hvdyAmJiBkYXRhU2hvd1sgcHJvcCBdIHx8IGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCApO1xuXHRcdH1cblx0fVxuXG5cdC8vIEJhaWwgb3V0IGlmIHRoaXMgaXMgYSBuby1vcCBsaWtlIC5oaWRlKCkuaGlkZSgpXG5cdHByb3BUd2VlbiA9ICFqUXVlcnkuaXNFbXB0eU9iamVjdCggcHJvcHMgKTtcblx0aWYgKCAhcHJvcFR3ZWVuICYmIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBvcmlnICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gUmVzdHJpY3QgXCJvdmVyZmxvd1wiIGFuZCBcImRpc3BsYXlcIiBzdHlsZXMgZHVyaW5nIGJveCBhbmltYXRpb25zXG5cdGlmICggaXNCb3ggJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExLCBFZGdlIDEyIC0gMTVcblx0XHQvLyBSZWNvcmQgYWxsIDMgb3ZlcmZsb3cgYXR0cmlidXRlcyBiZWNhdXNlIElFIGRvZXMgbm90IGluZmVyIHRoZSBzaG9ydGhhbmRcblx0XHQvLyBmcm9tIGlkZW50aWNhbGx5LXZhbHVlZCBvdmVyZmxvd1ggYW5kIG92ZXJmbG93WSBhbmQgRWRnZSBqdXN0IG1pcnJvcnNcblx0XHQvLyB0aGUgb3ZlcmZsb3dYIHZhbHVlIHRoZXJlLlxuXHRcdG9wdHMub3ZlcmZsb3cgPSBbIHN0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WSBdO1xuXG5cdFx0Ly8gSWRlbnRpZnkgYSBkaXNwbGF5IHR5cGUsIHByZWZlcnJpbmcgb2xkIHNob3cvaGlkZSBkYXRhIG92ZXIgdGhlIENTUyBjYXNjYWRlXG5cdFx0cmVzdG9yZURpc3BsYXkgPSBkYXRhU2hvdyAmJiBkYXRhU2hvdy5kaXNwbGF5O1xuXHRcdGlmICggcmVzdG9yZURpc3BsYXkgPT0gbnVsbCApIHtcblx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZGF0YVByaXYuZ2V0KCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdH1cblx0XHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdFx0aWYgKCByZXN0b3JlRGlzcGxheSApIHtcblx0XHRcdFx0ZGlzcGxheSA9IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBHZXQgbm9uZW1wdHkgdmFsdWUocykgYnkgdGVtcG9yYXJpbHkgZm9yY2luZyB2aXNpYmlsaXR5XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSwgdHJ1ZSApO1xuXHRcdFx0XHRyZXN0b3JlRGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheSB8fCByZXN0b3JlRGlzcGxheTtcblx0XHRcdFx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFuaW1hdGUgaW5saW5lIGVsZW1lbnRzIGFzIGlubGluZS1ibG9ja1xuXHRcdGlmICggZGlzcGxheSA9PT0gXCJpbmxpbmVcIiB8fCBkaXNwbGF5ID09PSBcImlubGluZS1ibG9ja1wiICYmIHJlc3RvcmVEaXNwbGF5ICE9IG51bGwgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5jc3MoIGVsZW0sIFwiZmxvYXRcIiApID09PSBcIm5vbmVcIiApIHtcblxuXHRcdFx0XHQvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBkaXNwbGF5IHZhbHVlIGF0IHRoZSBlbmQgb2YgcHVyZSBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRcdFx0XHRpZiAoICFwcm9wVHdlZW4gKSB7XG5cdFx0XHRcdFx0YW5pbS5kb25lKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHN0eWxlLmRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0aWYgKCByZXN0b3JlRGlzcGxheSA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0ZGlzcGxheSA9IHN0eWxlLmRpc3BsYXk7XG5cdFx0XHRcdFx0XHRyZXN0b3JlRGlzcGxheSA9IGRpc3BsYXkgPT09IFwibm9uZVwiID8gXCJcIiA6IGRpc3BsYXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICggb3B0cy5vdmVyZmxvdyApIHtcblx0XHRzdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXHRcdFx0c3R5bGUub3ZlcmZsb3cgPSBvcHRzLm92ZXJmbG93WyAwIF07XG5cdFx0XHRzdHlsZS5vdmVyZmxvd1ggPSBvcHRzLm92ZXJmbG93WyAxIF07XG5cdFx0XHRzdHlsZS5vdmVyZmxvd1kgPSBvcHRzLm92ZXJmbG93WyAyIF07XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gSW1wbGVtZW50IHNob3cvaGlkZSBhbmltYXRpb25zXG5cdHByb3BUd2VlbiA9IGZhbHNlO1xuXHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG5cblx0XHQvLyBHZW5lcmFsIHNob3cvaGlkZSBzZXR1cCBmb3IgdGhpcyBlbGVtZW50IGFuaW1hdGlvblxuXHRcdGlmICggIXByb3BUd2VlbiApIHtcblx0XHRcdGlmICggZGF0YVNob3cgKSB7XG5cdFx0XHRcdGlmICggXCJoaWRkZW5cIiBpbiBkYXRhU2hvdyApIHtcblx0XHRcdFx0XHRoaWRkZW4gPSBkYXRhU2hvdy5oaWRkZW47XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRhdGFTaG93ID0gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBcImZ4c2hvd1wiLCB7IGRpc3BsYXk6IHJlc3RvcmVEaXNwbGF5IH0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RvcmUgaGlkZGVuL3Zpc2libGUgZm9yIHRvZ2dsZSBzbyBgLnN0b3AoKS50b2dnbGUoKWAgXCJyZXZlcnNlc1wiXG5cdFx0XHRpZiAoIHRvZ2dsZSApIHtcblx0XHRcdFx0ZGF0YVNob3cuaGlkZGVuID0gIWhpZGRlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2hvdyBlbGVtZW50cyBiZWZvcmUgYW5pbWF0aW5nIHRoZW1cblx0XHRcdGlmICggaGlkZGVuICkge1xuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0sIHRydWUgKTtcblx0XHRcdH1cblxuXHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cblx0XHRcdGFuaW0uZG9uZSggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG5cblx0XHRcdFx0Ly8gVGhlIGZpbmFsIHN0ZXAgb2YgYSBcImhpZGVcIiBhbmltYXRpb24gaXMgYWN0dWFsbHkgaGlkaW5nIHRoZSBlbGVtZW50XG5cdFx0XHRcdGlmICggIWhpZGRlbiApIHtcblx0XHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFwiZnhzaG93XCIgKTtcblx0XHRcdFx0Zm9yICggcHJvcCBpbiBvcmlnICkge1xuXHRcdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCwgb3JpZ1sgcHJvcCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHQvLyBQZXItcHJvcGVydHkgc2V0dXBcblx0XHRwcm9wVHdlZW4gPSBjcmVhdGVUd2VlbiggaGlkZGVuID8gZGF0YVNob3dbIHByb3AgXSA6IDAsIHByb3AsIGFuaW0gKTtcblx0XHRpZiAoICEoIHByb3AgaW4gZGF0YVNob3cgKSApIHtcblx0XHRcdGRhdGFTaG93WyBwcm9wIF0gPSBwcm9wVHdlZW4uc3RhcnQ7XG5cdFx0XHRpZiAoIGhpZGRlbiApIHtcblx0XHRcdFx0cHJvcFR3ZWVuLmVuZCA9IHByb3BUd2Vlbi5zdGFydDtcblx0XHRcdFx0cHJvcFR3ZWVuLnN0YXJ0ID0gMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcHJvcEZpbHRlciggcHJvcHMsIHNwZWNpYWxFYXNpbmcgKSB7XG5cdHZhciBpbmRleCwgbmFtZSwgZWFzaW5nLCB2YWx1ZSwgaG9va3M7XG5cblx0Ly8gY2FtZWxDYXNlLCBzcGVjaWFsRWFzaW5nIGFuZCBleHBhbmQgY3NzSG9vayBwYXNzXG5cdGZvciAoIGluZGV4IGluIHByb3BzICkge1xuXHRcdG5hbWUgPSBjYW1lbENhc2UoIGluZGV4ICk7XG5cdFx0ZWFzaW5nID0gc3BlY2lhbEVhc2luZ1sgbmFtZSBdO1xuXHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF07XG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0ZWFzaW5nID0gdmFsdWVbIDEgXTtcblx0XHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF0gPSB2YWx1ZVsgMCBdO1xuXHRcdH1cblxuXHRcdGlmICggaW5kZXggIT09IG5hbWUgKSB7XG5cdFx0XHRwcm9wc1sgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRkZWxldGUgcHJvcHNbIGluZGV4IF07XG5cdFx0fVxuXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXTtcblx0XHRpZiAoIGhvb2tzICYmIFwiZXhwYW5kXCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWx1ZSA9IGhvb2tzLmV4cGFuZCggdmFsdWUgKTtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgbmFtZSBdO1xuXG5cdFx0XHQvLyBOb3QgcXVpdGUgJC5leHRlbmQsIHRoaXMgd29uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGtleXMuXG5cdFx0XHQvLyBSZXVzaW5nICdpbmRleCcgYmVjYXVzZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IFwibmFtZVwiXG5cdFx0XHRmb3IgKCBpbmRleCBpbiB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhKCBpbmRleCBpbiBwcm9wcyApICkge1xuXHRcdFx0XHRcdHByb3BzWyBpbmRleCBdID0gdmFsdWVbIGluZGV4IF07XG5cdFx0XHRcdFx0c3BlY2lhbEVhc2luZ1sgaW5kZXggXSA9IGVhc2luZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzcGVjaWFsRWFzaW5nWyBuYW1lIF0gPSBlYXNpbmc7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIEFuaW1hdGlvbiggZWxlbSwgcHJvcGVydGllcywgb3B0aW9ucyApIHtcblx0dmFyIHJlc3VsdCxcblx0XHRzdG9wcGVkLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBBbmltYXRpb24ucHJlZmlsdGVycy5sZW5ndGgsXG5cdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBEb24ndCBtYXRjaCBlbGVtIGluIHRoZSA6YW5pbWF0ZWQgc2VsZWN0b3Jcblx0XHRcdGRlbGV0ZSB0aWNrLmVsZW07XG5cdFx0fSApLFxuXHRcdHRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggc3RvcHBlZCApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdFx0cmVtYWluaW5nID0gTWF0aC5tYXgoIDAsIGFuaW1hdGlvbi5zdGFydFRpbWUgKyBhbmltYXRpb24uZHVyYXRpb24gLSBjdXJyZW50VGltZSApLFxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zIG9ubHlcblx0XHRcdFx0Ly8gQXJjaGFpYyBjcmFzaCBidWcgd29uJ3QgYWxsb3cgdXMgdG8gdXNlIGAxIC0gKCAwLjUgfHwgMCApYCAoIzEyNDk3KVxuXHRcdFx0XHR0ZW1wID0gcmVtYWluaW5nIC8gYW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAsXG5cdFx0XHRcdHBlcmNlbnQgPSAxIC0gdGVtcCxcblx0XHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0XHRsZW5ndGggPSBhbmltYXRpb24udHdlZW5zLmxlbmd0aDtcblxuXHRcdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIHBlcmNlbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIHBlcmNlbnQsIHJlbWFpbmluZyBdICk7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgbW9yZSB0byBkbywgeWllbGRcblx0XHRcdGlmICggcGVyY2VudCA8IDEgJiYgbGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gcmVtYWluaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGlzIHdhcyBhbiBlbXB0eSBhbmltYXRpb24sIHN5bnRoZXNpemUgYSBmaW5hbCBwcm9ncmVzcyBub3RpZmljYXRpb25cblx0XHRcdGlmICggIWxlbmd0aCApIHtcblx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIDEsIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXNvbHZlIHRoZSBhbmltYXRpb24gYW5kIHJlcG9ydCBpdHMgY29uY2x1c2lvblxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uIF0gKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2UoIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRwcm9wczogalF1ZXJ5LmV4dGVuZCgge30sIHByb3BlcnRpZXMgKSxcblx0XHRcdG9wdHM6IGpRdWVyeS5leHRlbmQoIHRydWUsIHtcblx0XHRcdFx0c3BlY2lhbEVhc2luZzoge30sXG5cdFx0XHRcdGVhc2luZzogalF1ZXJ5LmVhc2luZy5fZGVmYXVsdFxuXHRcdFx0fSwgb3B0aW9ucyApLFxuXHRcdFx0b3JpZ2luYWxQcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuXHRcdFx0b3JpZ2luYWxPcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lOiBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0ZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG5cdFx0XHR0d2VlbnM6IFtdLFxuXHRcdFx0Y3JlYXRlVHdlZW46IGZ1bmN0aW9uKCBwcm9wLCBlbmQgKSB7XG5cdFx0XHRcdHZhciB0d2VlbiA9IGpRdWVyeS5Ud2VlbiggZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCxcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmdbIHByb3AgXSB8fCBhbmltYXRpb24ub3B0cy5lYXNpbmcgKTtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVucy5wdXNoKCB0d2VlbiApO1xuXHRcdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0XHR9LFxuXHRcdFx0c3RvcDogZnVuY3Rpb24oIGdvdG9FbmQgKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IDAsXG5cblx0XHRcdFx0XHQvLyBJZiB3ZSBhcmUgZ29pbmcgdG8gdGhlIGVuZCwgd2Ugd2FudCB0byBydW4gYWxsIHRoZSB0d2VlbnNcblx0XHRcdFx0XHQvLyBvdGhlcndpc2Ugd2Ugc2tpcCB0aGlzIHBhcnRcblx0XHRcdFx0XHRsZW5ndGggPSBnb3RvRW5kID8gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGggOiAwO1xuXHRcdFx0XHRpZiAoIHN0b3BwZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RvcHBlZCA9IHRydWU7XG5cdFx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIDEgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlc29sdmUgd2hlbiB3ZSBwbGF5ZWQgdGhlIGxhc3QgZnJhbWU7IG90aGVyd2lzZSwgcmVqZWN0XG5cdFx0XHRcdGlmICggZ290b0VuZCApIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgMSwgMCBdICk7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBnb3RvRW5kIF0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fSApLFxuXHRcdHByb3BzID0gYW5pbWF0aW9uLnByb3BzO1xuXG5cdHByb3BGaWx0ZXIoIHByb3BzLCBhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nICk7XG5cblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRyZXN1bHQgPSBBbmltYXRpb24ucHJlZmlsdGVyc1sgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIGVsZW0sIHByb3BzLCBhbmltYXRpb24ub3B0cyApO1xuXHRcdGlmICggcmVzdWx0ICkge1xuXHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCByZXN1bHQuc3RvcCApICkge1xuXHRcdFx0XHRqUXVlcnkuX3F1ZXVlSG9va3MoIGFuaW1hdGlvbi5lbGVtLCBhbmltYXRpb24ub3B0cy5xdWV1ZSApLnN0b3AgPVxuXHRcdFx0XHRcdHJlc3VsdC5zdG9wLmJpbmQoIHJlc3VsdCApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH1cblxuXHRqUXVlcnkubWFwKCBwcm9wcywgY3JlYXRlVHdlZW4sIGFuaW1hdGlvbiApO1xuXG5cdGlmICggaXNGdW5jdGlvbiggYW5pbWF0aW9uLm9wdHMuc3RhcnQgKSApIHtcblx0XHRhbmltYXRpb24ub3B0cy5zdGFydC5jYWxsKCBlbGVtLCBhbmltYXRpb24gKTtcblx0fVxuXG5cdC8vIEF0dGFjaCBjYWxsYmFja3MgZnJvbSBvcHRpb25zXG5cdGFuaW1hdGlvblxuXHRcdC5wcm9ncmVzcyggYW5pbWF0aW9uLm9wdHMucHJvZ3Jlc3MgKVxuXHRcdC5kb25lKCBhbmltYXRpb24ub3B0cy5kb25lLCBhbmltYXRpb24ub3B0cy5jb21wbGV0ZSApXG5cdFx0LmZhaWwoIGFuaW1hdGlvbi5vcHRzLmZhaWwgKVxuXHRcdC5hbHdheXMoIGFuaW1hdGlvbi5vcHRzLmFsd2F5cyApO1xuXG5cdGpRdWVyeS5meC50aW1lcihcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aWNrLCB7XG5cdFx0XHRlbGVtOiBlbGVtLFxuXHRcdFx0YW5pbTogYW5pbWF0aW9uLFxuXHRcdFx0cXVldWU6IGFuaW1hdGlvbi5vcHRzLnF1ZXVlXG5cdFx0fSApXG5cdCk7XG5cblx0cmV0dXJuIGFuaW1hdGlvbjtcbn1cblxualF1ZXJ5LkFuaW1hdGlvbiA9IGpRdWVyeS5leHRlbmQoIEFuaW1hdGlvbiwge1xuXG5cdHR3ZWVuZXJzOiB7XG5cdFx0XCIqXCI6IFsgZnVuY3Rpb24oIHByb3AsIHZhbHVlICkge1xuXHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5jcmVhdGVUd2VlbiggcHJvcCwgdmFsdWUgKTtcblx0XHRcdGFkanVzdENTUyggdHdlZW4uZWxlbSwgcHJvcCwgcmNzc051bS5leGVjKCB2YWx1ZSApLCB0d2VlbiApO1xuXHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdH0gXVxuXHR9LFxuXG5cdHR3ZWVuZXI6IGZ1bmN0aW9uKCBwcm9wcywgY2FsbGJhY2sgKSB7XG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBwcm9wcyApICkge1xuXHRcdFx0Y2FsbGJhY2sgPSBwcm9wcztcblx0XHRcdHByb3BzID0gWyBcIipcIiBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcm9wcyA9IHByb3BzLm1hdGNoKCBybm90aHRtbHdoaXRlICk7XG5cdFx0fVxuXG5cdFx0dmFyIHByb3AsXG5cdFx0XHRpbmRleCA9IDAsXG5cdFx0XHRsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cblx0XHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0cHJvcCA9IHByb3BzWyBpbmRleCBdO1xuXHRcdFx0QW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gPSBBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSB8fCBbXTtcblx0XHRcdEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdLnVuc2hpZnQoIGNhbGxiYWNrICk7XG5cdFx0fVxuXHR9LFxuXG5cdHByZWZpbHRlcnM6IFsgZGVmYXVsdFByZWZpbHRlciBdLFxuXG5cdHByZWZpbHRlcjogZnVuY3Rpb24oIGNhbGxiYWNrLCBwcmVwZW5kICkge1xuXHRcdGlmICggcHJlcGVuZCApIHtcblx0XHRcdEFuaW1hdGlvbi5wcmVmaWx0ZXJzLnVuc2hpZnQoIGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEFuaW1hdGlvbi5wcmVmaWx0ZXJzLnB1c2goIGNhbGxiYWNrICk7XG5cdFx0fVxuXHR9XG59ICk7XG5cbmpRdWVyeS5zcGVlZCA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBmbiApIHtcblx0dmFyIG9wdCA9IHNwZWVkICYmIHR5cGVvZiBzcGVlZCA9PT0gXCJvYmplY3RcIiA/IGpRdWVyeS5leHRlbmQoIHt9LCBzcGVlZCApIDoge1xuXHRcdGNvbXBsZXRlOiBmbiB8fCAhZm4gJiYgZWFzaW5nIHx8XG5cdFx0XHRpc0Z1bmN0aW9uKCBzcGVlZCApICYmIHNwZWVkLFxuXHRcdGR1cmF0aW9uOiBzcGVlZCxcblx0XHRlYXNpbmc6IGZuICYmIGVhc2luZyB8fCBlYXNpbmcgJiYgIWlzRnVuY3Rpb24oIGVhc2luZyApICYmIGVhc2luZ1xuXHR9O1xuXG5cdC8vIEdvIHRvIHRoZSBlbmQgc3RhdGUgaWYgZnggYXJlIG9mZlxuXHRpZiAoIGpRdWVyeS5meC5vZmYgKSB7XG5cdFx0b3B0LmR1cmF0aW9uID0gMDtcblxuXHR9IGVsc2Uge1xuXHRcdGlmICggdHlwZW9mIG9wdC5kdXJhdGlvbiAhPT0gXCJudW1iZXJcIiApIHtcblx0XHRcdGlmICggb3B0LmR1cmF0aW9uIGluIGpRdWVyeS5meC5zcGVlZHMgKSB7XG5cdFx0XHRcdG9wdC5kdXJhdGlvbiA9IGpRdWVyeS5meC5zcGVlZHNbIG9wdC5kdXJhdGlvbiBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzLl9kZWZhdWx0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIE5vcm1hbGl6ZSBvcHQucXVldWUgLSB0cnVlL3VuZGVmaW5lZC9udWxsIC0+IFwiZnhcIlxuXHRpZiAoIG9wdC5xdWV1ZSA9PSBudWxsIHx8IG9wdC5xdWV1ZSA9PT0gdHJ1ZSApIHtcblx0XHRvcHQucXVldWUgPSBcImZ4XCI7XG5cdH1cblxuXHQvLyBRdWV1ZWluZ1xuXHRvcHQub2xkID0gb3B0LmNvbXBsZXRlO1xuXG5cdG9wdC5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggaXNGdW5jdGlvbiggb3B0Lm9sZCApICkge1xuXHRcdFx0b3B0Lm9sZC5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvcHQucXVldWUgKSB7XG5cdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgb3B0LnF1ZXVlICk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBvcHQ7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGZhZGVUbzogZnVuY3Rpb24oIHNwZWVkLCB0bywgZWFzaW5nLCBjYWxsYmFjayApIHtcblxuXHRcdC8vIFNob3cgYW55IGhpZGRlbiBlbGVtZW50cyBhZnRlciBzZXR0aW5nIG9wYWNpdHkgdG8gMFxuXHRcdHJldHVybiB0aGlzLmZpbHRlciggaXNIaWRkZW5XaXRoaW5UcmVlICkuY3NzKCBcIm9wYWNpdHlcIiwgMCApLnNob3coKVxuXG5cdFx0XHQvLyBBbmltYXRlIHRvIHRoZSB2YWx1ZSBzcGVjaWZpZWRcblx0XHRcdC5lbmQoKS5hbmltYXRlKCB7IG9wYWNpdHk6IHRvIH0sIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH0sXG5cdGFuaW1hdGU6IGZ1bmN0aW9uKCBwcm9wLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHR2YXIgZW1wdHkgPSBqUXVlcnkuaXNFbXB0eU9iamVjdCggcHJvcCApLFxuXHRcdFx0b3B0YWxsID0galF1ZXJ5LnNwZWVkKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApLFxuXHRcdFx0ZG9BbmltYXRpb24gPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHQvLyBPcGVyYXRlIG9uIGEgY29weSBvZiBwcm9wIHNvIHBlci1wcm9wZXJ0eSBlYXNpbmcgd29uJ3QgYmUgbG9zdFxuXHRcdFx0XHR2YXIgYW5pbSA9IEFuaW1hdGlvbiggdGhpcywgalF1ZXJ5LmV4dGVuZCgge30sIHByb3AgKSwgb3B0YWxsICk7XG5cblx0XHRcdFx0Ly8gRW1wdHkgYW5pbWF0aW9ucywgb3IgZmluaXNoaW5nIHJlc29sdmVzIGltbWVkaWF0ZWx5XG5cdFx0XHRcdGlmICggZW1wdHkgfHwgZGF0YVByaXYuZ2V0KCB0aGlzLCBcImZpbmlzaFwiICkgKSB7XG5cdFx0XHRcdFx0YW5pbS5zdG9wKCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRkb0FuaW1hdGlvbi5maW5pc2ggPSBkb0FuaW1hdGlvbjtcblxuXHRcdHJldHVybiBlbXB0eSB8fCBvcHRhbGwucXVldWUgPT09IGZhbHNlID9cblx0XHRcdHRoaXMuZWFjaCggZG9BbmltYXRpb24gKSA6XG5cdFx0XHR0aGlzLnF1ZXVlKCBvcHRhbGwucXVldWUsIGRvQW5pbWF0aW9uICk7XG5cdH0sXG5cdHN0b3A6IGZ1bmN0aW9uKCB0eXBlLCBjbGVhclF1ZXVlLCBnb3RvRW5kICkge1xuXHRcdHZhciBzdG9wUXVldWUgPSBmdW5jdGlvbiggaG9va3MgKSB7XG5cdFx0XHR2YXIgc3RvcCA9IGhvb2tzLnN0b3A7XG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcblx0XHRcdHN0b3AoIGdvdG9FbmQgKTtcblx0XHR9O1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGdvdG9FbmQgPSBjbGVhclF1ZXVlO1xuXHRcdFx0Y2xlYXJRdWV1ZSA9IHR5cGU7XG5cdFx0XHR0eXBlID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRpZiAoIGNsZWFyUXVldWUgJiYgdHlwZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHR0aGlzLnF1ZXVlKCB0eXBlIHx8IFwiZnhcIiwgW10gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkZXF1ZXVlID0gdHJ1ZSxcblx0XHRcdFx0aW5kZXggPSB0eXBlICE9IG51bGwgJiYgdHlwZSArIFwicXVldWVIb29rc1wiLFxuXHRcdFx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuXHRcdFx0XHRkYXRhID0gZGF0YVByaXYuZ2V0KCB0aGlzICk7XG5cblx0XHRcdGlmICggaW5kZXggKSB7XG5cdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgKSB7XG5cdFx0XHRcdFx0c3RvcFF1ZXVlKCBkYXRhWyBpbmRleCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoIGluZGV4IGluIGRhdGEgKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhWyBpbmRleCBdICYmIGRhdGFbIGluZGV4IF0uc3RvcCAmJiBycnVuLnRlc3QoIGluZGV4ICkgKSB7XG5cdFx0XHRcdFx0XHRzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yICggaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOyApIHtcblx0XHRcdFx0aWYgKCB0aW1lcnNbIGluZGV4IF0uZWxlbSA9PT0gdGhpcyAmJlxuXHRcdFx0XHRcdCggdHlwZSA9PSBudWxsIHx8IHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSApICkge1xuXG5cdFx0XHRcdFx0dGltZXJzWyBpbmRleCBdLmFuaW0uc3RvcCggZ290b0VuZCApO1xuXHRcdFx0XHRcdGRlcXVldWUgPSBmYWxzZTtcblx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXJ0IHRoZSBuZXh0IGluIHRoZSBxdWV1ZSBpZiB0aGUgbGFzdCBzdGVwIHdhc24ndCBmb3JjZWQuXG5cdFx0XHQvLyBUaW1lcnMgY3VycmVudGx5IHdpbGwgY2FsbCB0aGVpciBjb21wbGV0ZSBjYWxsYmFja3MsIHdoaWNoXG5cdFx0XHQvLyB3aWxsIGRlcXVldWUgYnV0IG9ubHkgaWYgdGhleSB3ZXJlIGdvdG9FbmQuXG5cdFx0XHRpZiAoIGRlcXVldWUgfHwgIWdvdG9FbmQgKSB7XG5cdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXHRmaW5pc2g6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdGlmICggdHlwZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGluZGV4LFxuXHRcdFx0XHRkYXRhID0gZGF0YVByaXYuZ2V0KCB0aGlzICksXG5cdFx0XHRcdHF1ZXVlID0gZGF0YVsgdHlwZSArIFwicXVldWVcIiBdLFxuXHRcdFx0XHRob29rcyA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlSG9va3NcIiBdLFxuXHRcdFx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuXHRcdFx0XHRsZW5ndGggPSBxdWV1ZSA/IHF1ZXVlLmxlbmd0aCA6IDA7XG5cblx0XHRcdC8vIEVuYWJsZSBmaW5pc2hpbmcgZmxhZyBvbiBwcml2YXRlIGRhdGFcblx0XHRcdGRhdGEuZmluaXNoID0gdHJ1ZTtcblxuXHRcdFx0Ly8gRW1wdHkgdGhlIHF1ZXVlIGZpcnN0XG5cdFx0XHRqUXVlcnkucXVldWUoIHRoaXMsIHR5cGUsIFtdICk7XG5cblx0XHRcdGlmICggaG9va3MgJiYgaG9va3Muc3RvcCApIHtcblx0XHRcdFx0aG9va3Muc3RvcC5jYWxsKCB0aGlzLCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvb2sgZm9yIGFueSBhY3RpdmUgYW5pbWF0aW9ucywgYW5kIGZpbmlzaCB0aGVtXG5cdFx0XHRmb3IgKCBpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07ICkge1xuXHRcdFx0XHRpZiAoIHRpbWVyc1sgaW5kZXggXS5lbGVtID09PSB0aGlzICYmIHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSApIHtcblx0XHRcdFx0XHR0aW1lcnNbIGluZGV4IF0uYW5pbS5zdG9wKCB0cnVlICk7XG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb29rIGZvciBhbnkgYW5pbWF0aW9ucyBpbiB0aGUgb2xkIHF1ZXVlIGFuZCBmaW5pc2ggdGhlbVxuXHRcdFx0Zm9yICggaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0aWYgKCBxdWV1ZVsgaW5kZXggXSAmJiBxdWV1ZVsgaW5kZXggXS5maW5pc2ggKSB7XG5cdFx0XHRcdFx0cXVldWVbIGluZGV4IF0uZmluaXNoLmNhbGwoIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUdXJuIG9mZiBmaW5pc2hpbmcgZmxhZ1xuXHRcdFx0ZGVsZXRlIGRhdGEuZmluaXNoO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcInRvZ2dsZVwiLCBcInNob3dcIiwgXCJoaWRlXCIgXSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdHZhciBjc3NGbiA9IGpRdWVyeS5mblsgbmFtZSBdO1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gc3BlZWQgPT0gbnVsbCB8fCB0eXBlb2Ygc3BlZWQgPT09IFwiYm9vbGVhblwiID9cblx0XHRcdGNzc0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSA6XG5cdFx0XHR0aGlzLmFuaW1hdGUoIGdlbkZ4KCBuYW1lLCB0cnVlICksIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbi8vIEdlbmVyYXRlIHNob3J0Y3V0cyBmb3IgY3VzdG9tIGFuaW1hdGlvbnNcbmpRdWVyeS5lYWNoKCB7XG5cdHNsaWRlRG93bjogZ2VuRngoIFwic2hvd1wiICksXG5cdHNsaWRlVXA6IGdlbkZ4KCBcImhpZGVcIiApLFxuXHRzbGlkZVRvZ2dsZTogZ2VuRngoIFwidG9nZ2xlXCIgKSxcblx0ZmFkZUluOiB7IG9wYWNpdHk6IFwic2hvd1wiIH0sXG5cdGZhZGVPdXQ6IHsgb3BhY2l0eTogXCJoaWRlXCIgfSxcblx0ZmFkZVRvZ2dsZTogeyBvcGFjaXR5OiBcInRvZ2dsZVwiIH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBwcm9wcyApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZSggcHJvcHMsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbmpRdWVyeS50aW1lcnMgPSBbXTtcbmpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0aW1lcixcblx0XHRpID0gMCxcblx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzO1xuXG5cdGZ4Tm93ID0gRGF0ZS5ub3coKTtcblxuXHRmb3IgKCA7IGkgPCB0aW1lcnMubGVuZ3RoOyBpKysgKSB7XG5cdFx0dGltZXIgPSB0aW1lcnNbIGkgXTtcblxuXHRcdC8vIFJ1biB0aGUgdGltZXIgYW5kIHNhZmVseSByZW1vdmUgaXQgd2hlbiBkb25lIChhbGxvd2luZyBmb3IgZXh0ZXJuYWwgcmVtb3ZhbClcblx0XHRpZiAoICF0aW1lcigpICYmIHRpbWVyc1sgaSBdID09PSB0aW1lciApIHtcblx0XHRcdHRpbWVycy5zcGxpY2UoIGktLSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIXRpbWVycy5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5LmZ4LnN0b3AoKTtcblx0fVxuXHRmeE5vdyA9IHVuZGVmaW5lZDtcbn07XG5cbmpRdWVyeS5meC50aW1lciA9IGZ1bmN0aW9uKCB0aW1lciApIHtcblx0alF1ZXJ5LnRpbWVycy5wdXNoKCB0aW1lciApO1xuXHRqUXVlcnkuZnguc3RhcnQoKTtcbn07XG5cbmpRdWVyeS5meC5pbnRlcnZhbCA9IDEzO1xualF1ZXJ5LmZ4LnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICggaW5Qcm9ncmVzcyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpblByb2dyZXNzID0gdHJ1ZTtcblx0c2NoZWR1bGUoKTtcbn07XG5cbmpRdWVyeS5meC5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdGluUHJvZ3Jlc3MgPSBudWxsO1xufTtcblxualF1ZXJ5LmZ4LnNwZWVkcyA9IHtcblx0c2xvdzogNjAwLFxuXHRmYXN0OiAyMDAsXG5cblx0Ly8gRGVmYXVsdCBzcGVlZFxuXHRfZGVmYXVsdDogNDAwXG59O1xuXG5cbi8vIEJhc2VkIG9mZiBvZiB0aGUgcGx1Z2luIGJ5IENsaW50IEhlbGZlcnMsIHdpdGggcGVybWlzc2lvbi5cbi8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDEwMDMyNDAxNDc0Ny9odHRwOi8vYmxpbmRzaWduYWxzLmNvbS9pbmRleC5waHAvMjAwOS8wNy9qcXVlcnktZGVsYXkvXG5qUXVlcnkuZm4uZGVsYXkgPSBmdW5jdGlvbiggdGltZSwgdHlwZSApIHtcblx0dGltZSA9IGpRdWVyeS5meCA/IGpRdWVyeS5meC5zcGVlZHNbIHRpbWUgXSB8fCB0aW1lIDogdGltZTtcblx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdHJldHVybiB0aGlzLnF1ZXVlKCB0eXBlLCBmdW5jdGlvbiggbmV4dCwgaG9va3MgKSB7XG5cdFx0dmFyIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCggbmV4dCwgdGltZSApO1xuXHRcdGhvb2tzLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblx0XHR9O1xuXHR9ICk7XG59O1xuXG5cbiggZnVuY3Rpb24oKSB7XG5cdHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApLFxuXHRcdHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic2VsZWN0XCIgKSxcblx0XHRvcHQgPSBzZWxlY3QuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwib3B0aW9uXCIgKSApO1xuXG5cdGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMyBvbmx5XG5cdC8vIERlZmF1bHQgdmFsdWUgZm9yIGEgY2hlY2tib3ggc2hvdWxkIGJlIFwib25cIlxuXHRzdXBwb3J0LmNoZWNrT24gPSBpbnB1dC52YWx1ZSAhPT0gXCJcIjtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0Ly8gTXVzdCBhY2Nlc3Mgc2VsZWN0ZWRJbmRleCB0byBtYWtlIGRlZmF1bHQgb3B0aW9ucyBzZWxlY3Rcblx0c3VwcG9ydC5vcHRTZWxlY3RlZCA9IG9wdC5zZWxlY3RlZDtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0Ly8gQW4gaW5wdXQgbG9zZXMgaXRzIHZhbHVlIGFmdGVyIGJlY29taW5nIGEgcmFkaW9cblx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcblx0aW5wdXQudmFsdWUgPSBcInRcIjtcblx0aW5wdXQudHlwZSA9IFwicmFkaW9cIjtcblx0c3VwcG9ydC5yYWRpb1ZhbHVlID0gaW5wdXQudmFsdWUgPT09IFwidFwiO1xufSApKCk7XG5cblxudmFyIGJvb2xIb29rLFxuXHRhdHRySGFuZGxlID0galF1ZXJ5LmV4cHIuYXR0ckhhbmRsZTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRhdHRyOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgalF1ZXJ5LmF0dHIsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuXHR9LFxuXG5cdHJlbW92ZUF0dHI6IGZ1bmN0aW9uKCBuYW1lICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIHRoaXMsIG5hbWUgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHRhdHRyOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0dmFyIHJldCwgaG9va3MsXG5cdFx0XHRuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHQvLyBEb24ndCBnZXQvc2V0IGF0dHJpYnV0ZXMgb24gdGV4dCwgY29tbWVudCBhbmQgYXR0cmlidXRlIG5vZGVzXG5cdFx0aWYgKCBuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBGYWxsYmFjayB0byBwcm9wIHdoZW4gYXR0cmlidXRlcyBhcmUgbm90IHN1cHBvcnRlZFxuXHRcdGlmICggdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlID09PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5wcm9wKCBlbGVtLCBuYW1lLCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdC8vIEF0dHJpYnV0ZSBob29rcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgbG93ZXJjYXNlIHZlcnNpb25cblx0XHQvLyBHcmFiIG5lY2Vzc2FyeSBob29rIGlmIG9uZSBpcyBkZWZpbmVkXG5cdFx0aWYgKCBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5hdHRySG9va3NbIG5hbWUudG9Mb3dlckNhc2UoKSBdIHx8XG5cdFx0XHRcdCggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC50ZXN0KCBuYW1lICkgPyBib29sSG9vayA6IHVuZGVmaW5lZCApO1xuXHRcdH1cblxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGlmICggdmFsdWUgPT09IG51bGwgKSB7XG5cdFx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCBlbGVtLCBuYW1lICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBob29rcyAmJiBcInNldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdCggcmV0ID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgbmFtZSApICkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIHZhbHVlICsgXCJcIiApO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgbmFtZSApICkgIT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblxuXHRcdHJldCA9IGpRdWVyeS5maW5kLmF0dHIoIGVsZW0sIG5hbWUgKTtcblxuXHRcdC8vIE5vbi1leGlzdGVudCBhdHRyaWJ1dGVzIHJldHVybiBudWxsLCB3ZSBub3JtYWxpemUgdG8gdW5kZWZpbmVkXG5cdFx0cmV0dXJuIHJldCA9PSBudWxsID8gdW5kZWZpbmVkIDogcmV0O1xuXHR9LFxuXG5cdGF0dHJIb29rczoge1xuXHRcdHR5cGU6IHtcblx0XHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdFx0XHRpZiAoICFzdXBwb3J0LnJhZGlvVmFsdWUgJiYgdmFsdWUgPT09IFwicmFkaW9cIiAmJlxuXHRcdFx0XHRcdG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSApIHtcblx0XHRcdFx0XHR2YXIgdmFsID0gZWxlbS52YWx1ZTtcblx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIHZhbHVlICk7XG5cdFx0XHRcdFx0aWYgKCB2YWwgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLnZhbHVlID0gdmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdHZhciBuYW1lLFxuXHRcdFx0aSA9IDAsXG5cblx0XHRcdC8vIEF0dHJpYnV0ZSBuYW1lcyBjYW4gY29udGFpbiBub24tSFRNTCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcblx0XHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuXHRcdFx0YXR0ck5hbWVzID0gdmFsdWUgJiYgdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKTtcblxuXHRcdGlmICggYXR0ck5hbWVzICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHR3aGlsZSAoICggbmFtZSA9IGF0dHJOYW1lc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoIG5hbWUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxuLy8gSG9va3MgZm9yIGJvb2xlYW4gYXR0cmlidXRlc1xuYm9vbEhvb2sgPSB7XG5cdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBuYW1lICkge1xuXHRcdGlmICggdmFsdWUgPT09IGZhbHNlICkge1xuXG5cdFx0XHQvLyBSZW1vdmUgYm9vbGVhbiBhdHRyaWJ1dGVzIHdoZW4gc2V0IHRvIGZhbHNlXG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggbmFtZSwgbmFtZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gbmFtZTtcblx0fVxufTtcblxualF1ZXJ5LmVhY2goIGpRdWVyeS5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKCAvXFx3Ky9nICksIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHR2YXIgZ2V0dGVyID0gYXR0ckhhbmRsZVsgbmFtZSBdIHx8IGpRdWVyeS5maW5kLmF0dHI7XG5cblx0YXR0ckhhbmRsZVsgbmFtZSBdID0gZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdHZhciByZXQsIGhhbmRsZSxcblx0XHRcdGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiAoICFpc1hNTCApIHtcblxuXHRcdFx0Ly8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcCBieSB0ZW1wb3JhcmlseSByZW1vdmluZyB0aGlzIGZ1bmN0aW9uIGZyb20gdGhlIGdldHRlclxuXHRcdFx0aGFuZGxlID0gYXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdO1xuXHRcdFx0YXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdID0gcmV0O1xuXHRcdFx0cmV0ID0gZ2V0dGVyKCBlbGVtLCBuYW1lLCBpc1hNTCApICE9IG51bGwgP1xuXHRcdFx0XHRsb3dlcmNhc2VOYW1lIDpcblx0XHRcdFx0bnVsbDtcblx0XHRcdGF0dHJIYW5kbGVbIGxvd2VyY2FzZU5hbWUgXSA9IGhhbmRsZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcbn0gKTtcblxuXG5cblxudmFyIHJmb2N1c2FibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyY2xpY2thYmxlID0gL14oPzphfGFyZWEpJC9pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHByb3A6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkucHJvcCwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlUHJvcDogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGUgdGhpc1sgalF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lIF07XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0cHJvcDogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBwcm9wZXJ0aWVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIEZpeCBuYW1lIGFuZCBhdHRhY2ggaG9va3Ncblx0XHRcdG5hbWUgPSBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWU7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5wcm9wSG9va3NbIG5hbWUgXTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKCBlbGVtWyBuYW1lIF0gPSB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgbmFtZSApICkgIT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtWyBuYW1lIF07XG5cdH0sXG5cblx0cHJvcEhvb2tzOiB7XG5cdFx0dGFiSW5kZXg6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHRcdFx0XHQvLyBlbGVtLnRhYkluZGV4IGRvZXNuJ3QgYWx3YXlzIHJldHVybiB0aGVcblx0XHRcdFx0Ly8gY29ycmVjdCB2YWx1ZSB3aGVuIGl0IGhhc24ndCBiZWVuIGV4cGxpY2l0bHkgc2V0XG5cdFx0XHRcdC8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDE0MTExNjIzMzM0Ny9odHRwOi8vZmx1aWRwcm9qZWN0Lm9yZy9ibG9nLzIwMDgvMDEvMDkvZ2V0dGluZy1zZXR0aW5nLWFuZC1yZW1vdmluZy10YWJpbmRleC12YWx1ZXMtd2l0aC1qYXZhc2NyaXB0L1xuXHRcdFx0XHQvLyBVc2UgcHJvcGVyIGF0dHJpYnV0ZSByZXRyaWV2YWwoIzEyMDcyKVxuXHRcdFx0XHR2YXIgdGFiaW5kZXggPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInRhYmluZGV4XCIgKTtcblxuXHRcdFx0XHRpZiAoIHRhYmluZGV4ICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXJzZUludCggdGFiaW5kZXgsIDEwICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cmZvY3VzYWJsZS50ZXN0KCBlbGVtLm5vZGVOYW1lICkgfHxcblx0XHRcdFx0XHRyY2xpY2thYmxlLnRlc3QoIGVsZW0ubm9kZU5hbWUgKSAmJlxuXHRcdFx0XHRcdGVsZW0uaHJlZlxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cHJvcEZpeDoge1xuXHRcdFwiZm9yXCI6IFwiaHRtbEZvclwiLFxuXHRcdFwiY2xhc3NcIjogXCJjbGFzc05hbWVcIlxuXHR9XG59ICk7XG5cbi8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuLy8gQWNjZXNzaW5nIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5XG4vLyBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gcmVzcGVjdCBzZXR0aW5nIHNlbGVjdGVkXG4vLyBvbiB0aGUgb3B0aW9uXG4vLyBUaGUgZ2V0dGVyIGVuc3VyZXMgYSBkZWZhdWx0IG9wdGlvbiBpcyBzZWxlY3RlZFxuLy8gd2hlbiBpbiBhbiBvcHRncm91cFxuLy8gZXNsaW50IHJ1bGUgXCJuby11bnVzZWQtZXhwcmVzc2lvbnNcIiBpcyBkaXNhYmxlZCBmb3IgdGhpcyBjb2RlXG4vLyBzaW5jZSBpdCBjb25zaWRlcnMgc3VjaCBhY2Nlc3Npb25zIG5vb3BcbmlmICggIXN1cHBvcnQub3B0U2VsZWN0ZWQgKSB7XG5cdGpRdWVyeS5wcm9wSG9va3Muc2VsZWN0ZWQgPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0LyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRwYXJlbnQuc2VsZWN0ZWRJbmRleDtcblxuXHRcdFx0XHRpZiAoIHBhcmVudC5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmpRdWVyeS5lYWNoKCBbXG5cdFwidGFiSW5kZXhcIixcblx0XCJyZWFkT25seVwiLFxuXHRcIm1heExlbmd0aFwiLFxuXHRcImNlbGxTcGFjaW5nXCIsXG5cdFwiY2VsbFBhZGRpbmdcIixcblx0XCJyb3dTcGFuXCIsXG5cdFwiY29sU3BhblwiLFxuXHRcInVzZU1hcFwiLFxuXHRcImZyYW1lQm9yZGVyXCIsXG5cdFwiY29udGVudEVkaXRhYmxlXCJcbl0sIGZ1bmN0aW9uKCkge1xuXHRqUXVlcnkucHJvcEZpeFsgdGhpcy50b0xvd2VyQ2FzZSgpIF0gPSB0aGlzO1xufSApO1xuXG5cblxuXG5cdC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFjY29yZGluZyB0byBIVE1MIHNwZWNcblx0Ly8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS1hc2NpaS13aGl0ZXNwYWNlXG5cdGZ1bmN0aW9uIHN0cmlwQW5kQ29sbGFwc2UoIHZhbHVlICkge1xuXHRcdHZhciB0b2tlbnMgPSB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXHRcdHJldHVybiB0b2tlbnMuam9pbiggXCIgXCIgKTtcblx0fVxuXG5cbmZ1bmN0aW9uIGdldENsYXNzKCBlbGVtICkge1xuXHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiApIHx8IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApIHtcblx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblx0fVxuXHRyZXR1cm4gW107XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0YWRkQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NlcywgZWxlbSwgY3VyLCBjdXJWYWx1ZSwgY2xhenosIGosIGZpbmFsVmFsdWUsXG5cdFx0XHRpID0gMDtcblxuXHRcdGlmICggaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBqICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hZGRDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgZ2V0Q2xhc3MoIHRoaXMgKSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Y2xhc3NlcyA9IGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0aWYgKCBjbGFzc2VzLmxlbmd0aCApIHtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyggZWxlbSApO1xuXHRcdFx0XHRjdXIgPSBlbGVtLm5vZGVUeXBlID09PSAxICYmICggXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKCBjdXJWYWx1ZSApICsgXCIgXCIgKTtcblxuXHRcdFx0XHRpZiAoIGN1ciApIHtcblx0XHRcdFx0XHRqID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoICggY2xhenogPSBjbGFzc2VzWyBqKysgXSApICkge1xuXHRcdFx0XHRcdFx0aWYgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGF6eiArIFwiIFwiICkgPCAwICkge1xuXHRcdFx0XHRcdFx0XHRjdXIgKz0gY2xhenogKyBcIiBcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlbW92ZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzZXMsIGVsZW0sIGN1ciwgY3VyVmFsdWUsIGNsYXp6LCBqLCBmaW5hbFZhbHVlLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaiApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVtb3ZlQ2xhc3MoIHZhbHVlLmNhbGwoIHRoaXMsIGosIGdldENsYXNzKCB0aGlzICkgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmICggIWFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hdHRyKCBcImNsYXNzXCIsIFwiXCIgKTtcblx0XHR9XG5cblx0XHRjbGFzc2VzID0gY2xhc3Nlc1RvQXJyYXkoIHZhbHVlICk7XG5cblx0XHRpZiAoIGNsYXNzZXMubGVuZ3RoICkge1xuXHRcdFx0d2hpbGUgKCAoIGVsZW0gPSB0aGlzWyBpKysgXSApICkge1xuXHRcdFx0XHRjdXJWYWx1ZSA9IGdldENsYXNzKCBlbGVtICk7XG5cblx0XHRcdFx0Ly8gVGhpcyBleHByZXNzaW9uIGlzIGhlcmUgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSBhZGRDbGFzcylcblx0XHRcdFx0Y3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGNsYXp6ID0gY2xhc3Nlc1sgaisrIF0gKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlICphbGwqIGluc3RhbmNlc1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGF6eiArIFwiIFwiICkgPiAtMSApIHtcblx0XHRcdFx0XHRcdFx0Y3VyID0gY3VyLnJlcGxhY2UoIFwiIFwiICsgY2xhenogKyBcIiBcIiwgXCIgXCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUsIHN0YXRlVmFsICkge1xuXHRcdHZhciB0eXBlID0gdHlwZW9mIHZhbHVlLFxuXHRcdFx0aXNWYWxpZFZhbHVlID0gdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGVWYWwgPT09IFwiYm9vbGVhblwiICYmIGlzVmFsaWRWYWx1ZSApIHtcblx0XHRcdHJldHVybiBzdGF0ZVZhbCA/IHRoaXMuYWRkQ2xhc3MoIHZhbHVlICkgOiB0aGlzLnJlbW92ZUNsYXNzKCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdGlmICggaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyhcblx0XHRcdFx0XHR2YWx1ZS5jYWxsKCB0aGlzLCBpLCBnZXRDbGFzcyggdGhpcyApLCBzdGF0ZVZhbCApLFxuXHRcdFx0XHRcdHN0YXRlVmFsXG5cdFx0XHRcdCk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY2xhc3NOYW1lLCBpLCBzZWxmLCBjbGFzc05hbWVzO1xuXG5cdFx0XHRpZiAoIGlzVmFsaWRWYWx1ZSApIHtcblxuXHRcdFx0XHQvLyBUb2dnbGUgaW5kaXZpZHVhbCBjbGFzcyBuYW1lc1xuXHRcdFx0XHRpID0gMDtcblx0XHRcdFx0c2VsZiA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRjbGFzc05hbWVzID0gY2xhc3Nlc1RvQXJyYXkoIHZhbHVlICk7XG5cblx0XHRcdFx0d2hpbGUgKCAoIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbIGkrKyBdICkgKSB7XG5cblx0XHRcdFx0XHQvLyBDaGVjayBlYWNoIGNsYXNzTmFtZSBnaXZlbiwgc3BhY2Ugc2VwYXJhdGVkIGxpc3Rcblx0XHRcdFx0XHRpZiAoIHNlbGYuaGFzQ2xhc3MoIGNsYXNzTmFtZSApICkge1xuXHRcdFx0XHRcdFx0c2VsZi5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuYWRkQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBUb2dnbGUgd2hvbGUgY2xhc3MgbmFtZVxuXHRcdFx0fSBlbHNlIGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0eXBlID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gZ2V0Q2xhc3MoIHRoaXMgKTtcblx0XHRcdFx0aWYgKCBjbGFzc05hbWUgKSB7XG5cblx0XHRcdFx0XHQvLyBTdG9yZSBjbGFzc05hbWUgaWYgc2V0XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiwgY2xhc3NOYW1lICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBjbGFzcyBuYW1lIG9yIGlmIHdlJ3JlIHBhc3NlZCBgZmFsc2VgLFxuXHRcdFx0XHQvLyB0aGVuIHJlbW92ZSB0aGUgd2hvbGUgY2xhc3NuYW1lIChpZiB0aGVyZSB3YXMgb25lLCB0aGUgYWJvdmUgc2F2ZWQgaXQpLlxuXHRcdFx0XHQvLyBPdGhlcndpc2UgYnJpbmcgYmFjayB3aGF0ZXZlciB3YXMgcHJldmlvdXNseSBzYXZlZCAoaWYgYW55dGhpbmcpLFxuXHRcdFx0XHQvLyBmYWxsaW5nIGJhY2sgdG8gdGhlIGVtcHR5IHN0cmluZyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXG5cdFx0XHRcdGlmICggdGhpcy5zZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIixcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSB8fCB2YWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0XHRcdFx0XCJcIiA6XG5cdFx0XHRcdFx0XHRkYXRhUHJpdi5nZXQoIHRoaXMsIFwiX19jbGFzc05hbWVfX1wiICkgfHwgXCJcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0aGFzQ2xhc3M6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgY2xhc3NOYW1lLCBlbGVtLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRjbGFzc05hbWUgPSBcIiBcIiArIHNlbGVjdG9yICsgXCIgXCI7XG5cdFx0d2hpbGUgKCAoIGVsZW0gPSB0aGlzWyBpKysgXSApICkge1xuXHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdCggXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKCBnZXRDbGFzcyggZWxlbSApICkgKyBcIiBcIiApLmluZGV4T2YoIGNsYXNzTmFtZSApID4gLTEgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBycmV0dXJuID0gL1xcci9nO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHZhbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBob29rcywgcmV0LCB2YWx1ZUlzRnVuY3Rpb24sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdO1xuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdGlmICggZWxlbSApIHtcblx0XHRcdFx0aG9va3MgPSBqUXVlcnkudmFsSG9va3NbIGVsZW0udHlwZSBdIHx8XG5cdFx0XHRcdFx0alF1ZXJ5LnZhbEhvb2tzWyBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0XHRpZiAoIGhvb2tzICYmXG5cdFx0XHRcdFx0XCJnZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBcInZhbHVlXCIgKSApICE9PSB1bmRlZmluZWRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldCA9IGVsZW0udmFsdWU7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIG1vc3QgY29tbW9uIHN0cmluZyBjYXNlc1xuXHRcdFx0XHRpZiAoIHR5cGVvZiByZXQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldC5yZXBsYWNlKCBycmV0dXJuLCBcIlwiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdmFsdWUgaXMgbnVsbC91bmRlZiBvciBudW1iZXJcblx0XHRcdFx0cmV0dXJuIHJldCA9PSBudWxsID8gXCJcIiA6IHJldDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdHZhciB2YWw7XG5cblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHZhbHVlSXNGdW5jdGlvbiApIHtcblx0XHRcdFx0dmFsID0gdmFsdWUuY2FsbCggdGhpcywgaSwgalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXG5cdFx0XHRpZiAoIHZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR2YWwgPSBcIlwiO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHR2YWwgKz0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggQXJyYXkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHZhbCA9IGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICsgXCJcIjtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1sgdGhpcy50eXBlIF0gfHwgalF1ZXJ5LnZhbEhvb2tzWyB0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0Ly8gSWYgc2V0IHJldHVybnMgdW5kZWZpbmVkLCBmYWxsIGJhY2sgdG8gbm9ybWFsIHNldHRpbmdcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fCBob29rcy5zZXQoIHRoaXMsIHZhbCwgXCJ2YWx1ZVwiICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHR2YWxIb29rczoge1xuXHRcdG9wdGlvbjoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0XHR2YXIgdmFsID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ2YWx1ZVwiICk7XG5cdFx0XHRcdHJldHVybiB2YWwgIT0gbnVsbCA/XG5cdFx0XHRcdFx0dmFsIDpcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSBvbmx5XG5cdFx0XHRcdFx0Ly8gb3B0aW9uLnRleHQgdGhyb3dzIGV4Y2VwdGlvbnMgKCMxNDY4NiwgIzE0ODU4KVxuXHRcdFx0XHRcdC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jc3RyaXAtYW5kLWNvbGxhcHNlLXdoaXRlc3BhY2Vcblx0XHRcdFx0XHRzdHJpcEFuZENvbGxhcHNlKCBqUXVlcnkudGV4dCggZWxlbSApICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzZWxlY3Q6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSwgb3B0aW9uLCBpLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0aW5kZXggPSBlbGVtLnNlbGVjdGVkSW5kZXgsXG5cdFx0XHRcdFx0b25lID0gZWxlbS50eXBlID09PSBcInNlbGVjdC1vbmVcIixcblx0XHRcdFx0XHR2YWx1ZXMgPSBvbmUgPyBudWxsIDogW10sXG5cdFx0XHRcdFx0bWF4ID0gb25lID8gaW5kZXggKyAxIDogb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0aWYgKCBpbmRleCA8IDAgKSB7XG5cdFx0XHRcdFx0aSA9IG1heDtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGkgPSBvbmUgPyBpbmRleCA6IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBzZWxlY3RlZCBvcHRpb25zXG5cdFx0XHRcdGZvciAoIDsgaSA8IG1heDsgaSsrICkge1xuXHRcdFx0XHRcdG9wdGlvbiA9IG9wdGlvbnNbIGkgXTtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0Ly8gSUU4LTkgZG9lc24ndCB1cGRhdGUgc2VsZWN0ZWQgYWZ0ZXIgZm9ybSByZXNldCAoIzI1NTEpXG5cdFx0XHRcdFx0aWYgKCAoIG9wdGlvbi5zZWxlY3RlZCB8fCBpID09PSBpbmRleCApICYmXG5cblx0XHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcmV0dXJuIG9wdGlvbnMgdGhhdCBhcmUgZGlzYWJsZWQgb3IgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0XHRcdFx0XHQhb3B0aW9uLmRpc2FibGVkICYmXG5cdFx0XHRcdFx0XHRcdCggIW9wdGlvbi5wYXJlbnROb2RlLmRpc2FibGVkIHx8XG5cdFx0XHRcdFx0XHRcdFx0IW5vZGVOYW1lKCBvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSBzcGVjaWZpYyB2YWx1ZSBmb3IgdGhlIG9wdGlvblxuXHRcdFx0XHRcdFx0dmFsdWUgPSBqUXVlcnkoIG9wdGlvbiApLnZhbCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBXZSBkb24ndCBuZWVkIGFuIGFycmF5IGZvciBvbmUgc2VsZWN0c1xuXHRcdFx0XHRcdFx0aWYgKCBvbmUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTXVsdGktU2VsZWN0cyByZXR1cm4gYW4gYXJyYXlcblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIG9wdGlvblNldCwgb3B0aW9uLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0dmFsdWVzID0galF1ZXJ5Lm1ha2VBcnJheSggdmFsdWUgKSxcblx0XHRcdFx0XHRpID0gb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuXHRcdFx0XHRcdGlmICggb3B0aW9uLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBqUXVlcnkudmFsSG9va3Mub3B0aW9uLmdldCggb3B0aW9uICksIHZhbHVlcyApID4gLTFcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdG9wdGlvblNldCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblx0XHRcdFx0aWYgKCAhb3B0aW9uU2V0ICkge1xuXHRcdFx0XHRcdGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG5qUXVlcnkuZWFjaCggWyBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiBdLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0gPSB7XG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0uY2hlY2tlZCA9IGpRdWVyeS5pbkFycmF5KCBqUXVlcnkoIGVsZW0gKS52YWwoKSwgdmFsdWUgKSA+IC0xICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRpZiAoICFzdXBwb3J0LmNoZWNrT24gKSB7XG5cdFx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0uZ2V0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBudWxsID8gXCJvblwiIDogZWxlbS52YWx1ZTtcblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFJldHVybiBqUXVlcnkgZm9yIGF0dHJpYnV0ZXMtb25seSBpbmNsdXNpb25cblxuXG5zdXBwb3J0LmZvY3VzaW4gPSBcIm9uZm9jdXNpblwiIGluIHdpbmRvdztcblxuXG52YXIgcmZvY3VzTW9ycGggPSAvXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sXG5cdHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24oIGUgKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0fTtcblxualF1ZXJ5LmV4dGVuZCggalF1ZXJ5LmV2ZW50LCB7XG5cblx0dHJpZ2dlcjogZnVuY3Rpb24oIGV2ZW50LCBkYXRhLCBlbGVtLCBvbmx5SGFuZGxlcnMgKSB7XG5cblx0XHR2YXIgaSwgY3VyLCB0bXAsIGJ1YmJsZVR5cGUsIG9udHlwZSwgaGFuZGxlLCBzcGVjaWFsLCBsYXN0RWxlbWVudCxcblx0XHRcdGV2ZW50UGF0aCA9IFsgZWxlbSB8fCBkb2N1bWVudCBdLFxuXHRcdFx0dHlwZSA9IGhhc093bi5jYWxsKCBldmVudCwgXCJ0eXBlXCIgKSA/IGV2ZW50LnR5cGUgOiBldmVudCxcblx0XHRcdG5hbWVzcGFjZXMgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwibmFtZXNwYWNlXCIgKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdCggXCIuXCIgKSA6IFtdO1xuXG5cdFx0Y3VyID0gbGFzdEVsZW1lbnQgPSB0bXAgPSBlbGVtID0gZWxlbSB8fCBkb2N1bWVudDtcblxuXHRcdC8vIERvbid0IGRvIGV2ZW50cyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gZm9jdXMvYmx1ciBtb3JwaHMgdG8gZm9jdXNpbi9vdXQ7IGVuc3VyZSB3ZSdyZSBub3QgZmlyaW5nIHRoZW0gcmlnaHQgbm93XG5cdFx0aWYgKCByZm9jdXNNb3JwaC50ZXN0KCB0eXBlICsgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZS5pbmRleE9mKCBcIi5cIiApID4gLTEgKSB7XG5cblx0XHRcdC8vIE5hbWVzcGFjZWQgdHJpZ2dlcjsgY3JlYXRlIGEgcmVnZXhwIHRvIG1hdGNoIGV2ZW50IHR5cGUgaW4gaGFuZGxlKClcblx0XHRcdG5hbWVzcGFjZXMgPSB0eXBlLnNwbGl0KCBcIi5cIiApO1xuXHRcdFx0dHlwZSA9IG5hbWVzcGFjZXMuc2hpZnQoKTtcblx0XHRcdG5hbWVzcGFjZXMuc29ydCgpO1xuXHRcdH1cblx0XHRvbnR5cGUgPSB0eXBlLmluZGV4T2YoIFwiOlwiICkgPCAwICYmIFwib25cIiArIHR5cGU7XG5cblx0XHQvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYSBqUXVlcnkuRXZlbnQgb2JqZWN0LCBPYmplY3QsIG9yIGp1c3QgYW4gZXZlbnQgdHlwZSBzdHJpbmdcblx0XHRldmVudCA9IGV2ZW50WyBqUXVlcnkuZXhwYW5kbyBdID9cblx0XHRcdGV2ZW50IDpcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoIHR5cGUsIHR5cGVvZiBldmVudCA9PT0gXCJvYmplY3RcIiAmJiBldmVudCApO1xuXG5cdFx0Ly8gVHJpZ2dlciBiaXRtYXNrOiAmIDEgZm9yIG5hdGl2ZSBoYW5kbGVyczsgJiAyIGZvciBqUXVlcnkgKGFsd2F5cyB0cnVlKVxuXHRcdGV2ZW50LmlzVHJpZ2dlciA9IG9ubHlIYW5kbGVycyA/IDIgOiAzO1xuXHRcdGV2ZW50Lm5hbWVzcGFjZSA9IG5hbWVzcGFjZXMuam9pbiggXCIuXCIgKTtcblx0XHRldmVudC5ybmFtZXNwYWNlID0gZXZlbnQubmFtZXNwYWNlID9cblx0XHRcdG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApIDpcblx0XHRcdG51bGw7XG5cblx0XHQvLyBDbGVhbiB1cCB0aGUgZXZlbnQgaW4gY2FzZSBpdCBpcyBiZWluZyByZXVzZWRcblx0XHRldmVudC5yZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKCAhZXZlbnQudGFyZ2V0ICkge1xuXHRcdFx0ZXZlbnQudGFyZ2V0ID0gZWxlbTtcblx0XHR9XG5cblx0XHQvLyBDbG9uZSBhbnkgaW5jb21pbmcgZGF0YSBhbmQgcHJlcGVuZCB0aGUgZXZlbnQsIGNyZWF0aW5nIHRoZSBoYW5kbGVyIGFyZyBsaXN0XG5cdFx0ZGF0YSA9IGRhdGEgPT0gbnVsbCA/XG5cdFx0XHRbIGV2ZW50IF0gOlxuXHRcdFx0alF1ZXJ5Lm1ha2VBcnJheSggZGF0YSwgWyBldmVudCBdICk7XG5cblx0XHQvLyBBbGxvdyBzcGVjaWFsIGV2ZW50cyB0byBkcmF3IG91dHNpZGUgdGhlIGxpbmVzXG5cdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmIHNwZWNpYWwudHJpZ2dlciAmJiBzcGVjaWFsLnRyaWdnZXIuYXBwbHkoIGVsZW0sIGRhdGEgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGV2ZW50IHByb3BhZ2F0aW9uIHBhdGggaW4gYWR2YW5jZSwgcGVyIFczQyBldmVudHMgc3BlYyAoIzk5NTEpXG5cdFx0Ly8gQnViYmxlIHVwIHRvIGRvY3VtZW50LCB0aGVuIHRvIHdpbmRvdzsgd2F0Y2ggZm9yIGEgZ2xvYmFsIG93bmVyRG9jdW1lbnQgdmFyICgjOTcyNClcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgIXNwZWNpYWwubm9CdWJibGUgJiYgIWlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdGJ1YmJsZVR5cGUgPSBzcGVjaWFsLmRlbGVnYXRlVHlwZSB8fCB0eXBlO1xuXHRcdFx0aWYgKCAhcmZvY3VzTW9ycGgudGVzdCggYnViYmxlVHlwZSArIHR5cGUgKSApIHtcblx0XHRcdFx0Y3VyID0gY3VyLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKCA7IGN1cjsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCBjdXIgKTtcblx0XHRcdFx0dG1wID0gY3VyO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPbmx5IGFkZCB3aW5kb3cgaWYgd2UgZ290IHRvIGRvY3VtZW50IChlLmcuLCBub3QgcGxhaW4gb2JqIG9yIGRldGFjaGVkIERPTSlcblx0XHRcdGlmICggdG1wID09PSAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCApICkge1xuXHRcdFx0XHRldmVudFBhdGgucHVzaCggdG1wLmRlZmF1bHRWaWV3IHx8IHRtcC5wYXJlbnRXaW5kb3cgfHwgd2luZG93ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBoYW5kbGVycyBvbiB0aGUgZXZlbnQgcGF0aFxuXHRcdGkgPSAwO1xuXHRcdHdoaWxlICggKCBjdXIgPSBldmVudFBhdGhbIGkrKyBdICkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cdFx0XHRsYXN0RWxlbWVudCA9IGN1cjtcblx0XHRcdGV2ZW50LnR5cGUgPSBpID4gMSA/XG5cdFx0XHRcdGJ1YmJsZVR5cGUgOlxuXHRcdFx0XHRzcGVjaWFsLmJpbmRUeXBlIHx8IHR5cGU7XG5cblx0XHRcdC8vIGpRdWVyeSBoYW5kbGVyXG5cdFx0XHRoYW5kbGUgPSAoIGRhdGFQcml2LmdldCggY3VyLCBcImV2ZW50c1wiICkgfHwge30gKVsgZXZlbnQudHlwZSBdICYmXG5cdFx0XHRcdGRhdGFQcml2LmdldCggY3VyLCBcImhhbmRsZVwiICk7XG5cdFx0XHRpZiAoIGhhbmRsZSApIHtcblx0XHRcdFx0aGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTmF0aXZlIGhhbmRsZXJcblx0XHRcdGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbIG9udHlwZSBdO1xuXHRcdFx0aWYgKCBoYW5kbGUgJiYgaGFuZGxlLmFwcGx5ICYmIGFjY2VwdERhdGEoIGN1ciApICkge1xuXHRcdFx0XHRldmVudC5yZXN1bHQgPSBoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0XHRpZiAoIGV2ZW50LnJlc3VsdCA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRldmVudC50eXBlID0gdHlwZTtcblxuXHRcdC8vIElmIG5vYm9keSBwcmV2ZW50ZWQgdGhlIGRlZmF1bHQgYWN0aW9uLCBkbyBpdCBub3dcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpICkge1xuXG5cdFx0XHRpZiAoICggIXNwZWNpYWwuX2RlZmF1bHQgfHxcblx0XHRcdFx0c3BlY2lhbC5fZGVmYXVsdC5hcHBseSggZXZlbnRQYXRoLnBvcCgpLCBkYXRhICkgPT09IGZhbHNlICkgJiZcblx0XHRcdFx0YWNjZXB0RGF0YSggZWxlbSApICkge1xuXG5cdFx0XHRcdC8vIENhbGwgYSBuYXRpdmUgRE9NIG1ldGhvZCBvbiB0aGUgdGFyZ2V0IHdpdGggdGhlIHNhbWUgbmFtZSBhcyB0aGUgZXZlbnQuXG5cdFx0XHRcdC8vIERvbid0IGRvIGRlZmF1bHQgYWN0aW9ucyBvbiB3aW5kb3csIHRoYXQncyB3aGVyZSBnbG9iYWwgdmFyaWFibGVzIGJlICgjNjE3MClcblx0XHRcdFx0aWYgKCBvbnR5cGUgJiYgaXNGdW5jdGlvbiggZWxlbVsgdHlwZSBdICkgJiYgIWlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdFx0XHQvLyBEb24ndCByZS10cmlnZ2VyIGFuIG9uRk9PIGV2ZW50IHdoZW4gd2UgY2FsbCBpdHMgRk9PKCkgbWV0aG9kXG5cdFx0XHRcdFx0dG1wID0gZWxlbVsgb250eXBlIF07XG5cblx0XHRcdFx0XHRpZiAoIHRtcCApIHtcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmV2ZW50IHJlLXRyaWdnZXJpbmcgb2YgdGhlIHNhbWUgZXZlbnQsIHNpbmNlIHdlIGFscmVhZHkgYnViYmxlZCBpdCBhYm92ZVxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB0eXBlO1xuXG5cdFx0XHRcdFx0aWYgKCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXHRcdFx0XHRcdFx0bGFzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2sgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtWyB0eXBlIF0oKTtcblxuXHRcdFx0XHRcdGlmICggZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdFx0XHRcdGxhc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRcdGlmICggdG1wICkge1xuXHRcdFx0XHRcdFx0ZWxlbVsgb250eXBlIF0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHQvLyBQaWdneWJhY2sgb24gYSBkb25vciBldmVudCB0byBzaW11bGF0ZSBhIGRpZmZlcmVudCBvbmVcblx0Ly8gVXNlZCBvbmx5IGZvciBgZm9jdXMoaW4gfCBvdXQpYCBldmVudHNcblx0c2ltdWxhdGU6IGZ1bmN0aW9uKCB0eXBlLCBlbGVtLCBldmVudCApIHtcblx0XHR2YXIgZSA9IGpRdWVyeS5leHRlbmQoXG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCksXG5cdFx0XHRldmVudCxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0aXNTaW11bGF0ZWQ6IHRydWVcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIGUsIG51bGwsIGVsZW0gKTtcblx0fVxuXG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCB0aGlzICk7XG5cdFx0fSApO1xuXHR9LFxuXHR0cmlnZ2VySGFuZGxlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF07XG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCBlbGVtLCB0cnVlICk7XG5cdFx0fVxuXHR9XG59ICk7XG5cblxuLy8gU3VwcG9ydDogRmlyZWZveCA8PTQ0XG4vLyBGaXJlZm94IGRvZXNuJ3QgaGF2ZSBmb2N1cyhpbiB8IG91dCkgZXZlbnRzXG4vLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY4Nzc4N1xuLy9cbi8vIFN1cHBvcnQ6IENocm9tZSA8PTQ4IC0gNDksIFNhZmFyaSA8PTkuMCAtIDkuMVxuLy8gZm9jdXMoaW4gfCBvdXQpIGV2ZW50cyBmaXJlIGFmdGVyIGZvY3VzICYgYmx1ciBldmVudHMsXG4vLyB3aGljaCBpcyBzcGVjIHZpb2xhdGlvbiAtIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnRzLWZvY3VzZXZlbnQtZXZlbnQtb3JkZXJcbi8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ5ODU3XG5pZiAoICFzdXBwb3J0LmZvY3VzaW4gKSB7XG5cdGpRdWVyeS5lYWNoKCB7IGZvY3VzOiBcImZvY3VzaW5cIiwgYmx1cjogXCJmb2N1c291dFwiIH0sIGZ1bmN0aW9uKCBvcmlnLCBmaXggKSB7XG5cblx0XHQvLyBBdHRhY2ggYSBzaW5nbGUgY2FwdHVyaW5nIGhhbmRsZXIgb24gdGhlIGRvY3VtZW50IHdoaWxlIHNvbWVvbmUgd2FudHMgZm9jdXNpbi9mb2N1c291dFxuXHRcdHZhciBoYW5kbGVyID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnNpbXVsYXRlKCBmaXgsIGV2ZW50LnRhcmdldCwgalF1ZXJ5LmV2ZW50LmZpeCggZXZlbnQgKSApO1xuXHRcdH07XG5cblx0XHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgZml4IF0gPSB7XG5cdFx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcyxcblx0XHRcdFx0XHRhdHRhY2hlcyA9IGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXggKTtcblxuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0XHRkb2MuYWRkRXZlbnRMaXN0ZW5lciggb3JpZywgaGFuZGxlciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXgsICggYXR0YWNoZXMgfHwgMCApICsgMSApO1xuXHRcdFx0fSxcblx0XHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCApIC0gMTtcblxuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0XHRkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lciggb3JpZywgaGFuZGxlciwgdHJ1ZSApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZG9jLCBmaXggKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXgsIGF0dGFjaGVzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9ICk7XG59XG52YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG5cbnZhciBub25jZSA9IERhdGUubm93KCk7XG5cbnZhciBycXVlcnkgPSAoIC9cXD8vICk7XG5cblxuXG4vLyBDcm9zcy1icm93c2VyIHhtbCBwYXJzaW5nXG5qUXVlcnkucGFyc2VYTUwgPSBmdW5jdGlvbiggZGF0YSApIHtcblx0dmFyIHhtbDtcblx0aWYgKCAhZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5XG5cdC8vIElFIHRocm93cyBvbiBwYXJzZUZyb21TdHJpbmcgd2l0aCBpbnZhbGlkIGlucHV0LlxuXHR0cnkge1xuXHRcdHhtbCA9ICggbmV3IHdpbmRvdy5ET01QYXJzZXIoKSApLnBhcnNlRnJvbVN0cmluZyggZGF0YSwgXCJ0ZXh0L3htbFwiICk7XG5cdH0gY2F0Y2ggKCBlICkge1xuXHRcdHhtbCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlmICggIXhtbCB8fCB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwicGFyc2VyZXJyb3JcIiApLmxlbmd0aCApIHtcblx0XHRqUXVlcnkuZXJyb3IoIFwiSW52YWxpZCBYTUw6IFwiICsgZGF0YSApO1xuXHR9XG5cdHJldHVybiB4bWw7XG59O1xuXG5cbnZhclxuXHRyYnJhY2tldCA9IC9cXFtcXF0kLyxcblx0ckNSTEYgPSAvXFxyP1xcbi9nLFxuXHRyc3VibWl0dGVyVHlwZXMgPSAvXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksXG5cdHJzdWJtaXR0YWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtcblxuZnVuY3Rpb24gYnVpbGRQYXJhbXMoIHByZWZpeCwgb2JqLCB0cmFkaXRpb25hbCwgYWRkICkge1xuXHR2YXIgbmFtZTtcblxuXHRpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIGFycmF5IGl0ZW0uXG5cdFx0alF1ZXJ5LmVhY2goIG9iaiwgZnVuY3Rpb24oIGksIHYgKSB7XG5cdFx0XHRpZiAoIHRyYWRpdGlvbmFsIHx8IHJicmFja2V0LnRlc3QoIHByZWZpeCApICkge1xuXG5cdFx0XHRcdC8vIFRyZWF0IGVhY2ggYXJyYXkgaXRlbSBhcyBhIHNjYWxhci5cblx0XHRcdFx0YWRkKCBwcmVmaXgsIHYgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBJdGVtIGlzIG5vbi1zY2FsYXIgKGFycmF5IG9yIG9iamVjdCksIGVuY29kZSBpdHMgbnVtZXJpYyBpbmRleC5cblx0XHRcdFx0YnVpbGRQYXJhbXMoXG5cdFx0XHRcdFx0cHJlZml4ICsgXCJbXCIgKyAoIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmIHYgIT0gbnVsbCA/IGkgOiBcIlwiICkgKyBcIl1cIixcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdHRyYWRpdGlvbmFsLFxuXHRcdFx0XHRcdGFkZFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHR9IGVsc2UgaWYgKCAhdHJhZGl0aW9uYWwgJiYgdG9UeXBlKCBvYmogKSA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSBvYmplY3QgaXRlbS5cblx0XHRmb3IgKCBuYW1lIGluIG9iaiApIHtcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXggKyBcIltcIiArIG5hbWUgKyBcIl1cIiwgb2JqWyBuYW1lIF0sIHRyYWRpdGlvbmFsLCBhZGQgKTtcblx0XHR9XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSBzY2FsYXIgaXRlbS5cblx0XHRhZGQoIHByZWZpeCwgb2JqICk7XG5cdH1cbn1cblxuLy8gU2VyaWFsaXplIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMgb3IgYSBzZXQgb2Zcbi8vIGtleS92YWx1ZXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xualF1ZXJ5LnBhcmFtID0gZnVuY3Rpb24oIGEsIHRyYWRpdGlvbmFsICkge1xuXHR2YXIgcHJlZml4LFxuXHRcdHMgPSBbXSxcblx0XHRhZGQgPSBmdW5jdGlvbigga2V5LCB2YWx1ZU9yRnVuY3Rpb24gKSB7XG5cblx0XHRcdC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGludm9rZSBpdCBhbmQgdXNlIGl0cyByZXR1cm4gdmFsdWVcblx0XHRcdHZhciB2YWx1ZSA9IGlzRnVuY3Rpb24oIHZhbHVlT3JGdW5jdGlvbiApID9cblx0XHRcdFx0dmFsdWVPckZ1bmN0aW9uKCkgOlxuXHRcdFx0XHR2YWx1ZU9yRnVuY3Rpb247XG5cblx0XHRcdHNbIHMubGVuZ3RoIF0gPSBlbmNvZGVVUklDb21wb25lbnQoIGtleSApICsgXCI9XCIgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKTtcblx0XHR9O1xuXG5cdGlmICggYSA9PSBudWxsICkge1xuXHRcdHJldHVybiBcIlwiO1xuXHR9XG5cblx0Ly8gSWYgYW4gYXJyYXkgd2FzIHBhc3NlZCBpbiwgYXNzdW1lIHRoYXQgaXQgaXMgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cy5cblx0aWYgKCBBcnJheS5pc0FycmF5KCBhICkgfHwgKCBhLmpxdWVyeSAmJiAhalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGEgKSApICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIHRoZSBmb3JtIGVsZW1lbnRzXG5cdFx0alF1ZXJ5LmVhY2goIGEsIGZ1bmN0aW9uKCkge1xuXHRcdFx0YWRkKCB0aGlzLm5hbWUsIHRoaXMudmFsdWUgKTtcblx0XHR9ICk7XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIElmIHRyYWRpdGlvbmFsLCBlbmNvZGUgdGhlIFwib2xkXCIgd2F5ICh0aGUgd2F5IDEuMy4yIG9yIG9sZGVyXG5cdFx0Ly8gZGlkIGl0KSwgb3RoZXJ3aXNlIGVuY29kZSBwYXJhbXMgcmVjdXJzaXZlbHkuXG5cdFx0Zm9yICggcHJlZml4IGluIGEgKSB7XG5cdFx0XHRidWlsZFBhcmFtcyggcHJlZml4LCBhWyBwcmVmaXggXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgcmVzdWx0aW5nIHNlcmlhbGl6YXRpb25cblx0cmV0dXJuIHMuam9pbiggXCImXCIgKTtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0c2VyaWFsaXplOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4galF1ZXJ5LnBhcmFtKCB0aGlzLnNlcmlhbGl6ZUFycmF5KCkgKTtcblx0fSxcblx0c2VyaWFsaXplQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcblx0XHRcdHZhciBlbGVtZW50cyA9IGpRdWVyeS5wcm9wKCB0aGlzLCBcImVsZW1lbnRzXCIgKTtcblx0XHRcdHJldHVybiBlbGVtZW50cyA/IGpRdWVyeS5tYWtlQXJyYXkoIGVsZW1lbnRzICkgOiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHR5cGUgPSB0aGlzLnR5cGU7XG5cblx0XHRcdC8vIFVzZSAuaXMoIFwiOmRpc2FibGVkXCIgKSBzbyB0aGF0IGZpZWxkc2V0W2Rpc2FibGVkXSB3b3Jrc1xuXHRcdFx0cmV0dXJuIHRoaXMubmFtZSAmJiAhalF1ZXJ5KCB0aGlzICkuaXMoIFwiOmRpc2FibGVkXCIgKSAmJlxuXHRcdFx0XHRyc3VibWl0dGFibGUudGVzdCggdGhpcy5ub2RlTmFtZSApICYmICFyc3VibWl0dGVyVHlwZXMudGVzdCggdHlwZSApICYmXG5cdFx0XHRcdCggdGhpcy5jaGVja2VkIHx8ICFyY2hlY2thYmxlVHlwZS50ZXN0KCB0eXBlICkgKTtcblx0XHR9IClcblx0XHQubWFwKCBmdW5jdGlvbiggaSwgZWxlbSApIHtcblx0XHRcdHZhciB2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblxuXHRcdFx0aWYgKCB2YWwgPT0gbnVsbCApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyBuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZSggckNSTEYsIFwiXFxyXFxuXCIgKSB9O1xuXHRcdH0gKS5nZXQoKTtcblx0fVxufSApO1xuXG5cbnZhclxuXHRyMjAgPSAvJTIwL2csXG5cdHJoYXNoID0gLyMuKiQvLFxuXHRyYW50aUNhY2hlID0gLyhbPyZdKV89W14mXSovLFxuXHRyaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvbWcsXG5cblx0Ly8gIzc2NTMsICM4MTI1LCAjODE1MjogbG9jYWwgcHJvdG9jb2wgZGV0ZWN0aW9uXG5cdHJsb2NhbFByb3RvY29sID0gL14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sXG5cdHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxuXHRycHJvdG9jb2wgPSAvXlxcL1xcLy8sXG5cblx0LyogUHJlZmlsdGVyc1xuXHQgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuXHQgKiAyKSBUaGVzZSBhcmUgY2FsbGVkOlxuXHQgKiAgICAtIEJFRk9SRSBhc2tpbmcgZm9yIGEgdHJhbnNwb3J0XG5cdCAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcblx0ICogMykga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiA0KSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHRwcmVmaWx0ZXJzID0ge30sXG5cblx0LyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuXHQgKiAxKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDIpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHR0cmFuc3BvcnRzID0ge30sXG5cblx0Ly8gQXZvaWQgY29tbWVudC1wcm9sb2cgY2hhciBzZXF1ZW5jZSAoIzEwMDk4KTsgbXVzdCBhcHBlYXNlIGxpbnQgYW5kIGV2YWRlIGNvbXByZXNzaW9uXG5cdGFsbFR5cGVzID0gXCIqL1wiLmNvbmNhdCggXCIqXCIgKSxcblxuXHQvLyBBbmNob3IgdGFnIGZvciBwYXJzaW5nIHRoZSBkb2N1bWVudCBvcmlnaW5cblx0b3JpZ2luQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblx0b3JpZ2luQW5jaG9yLmhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuXG4vLyBCYXNlIFwiY29uc3RydWN0b3JcIiBmb3IgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIgYW5kIGpRdWVyeS5hamF4VHJhbnNwb3J0XG5mdW5jdGlvbiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHN0cnVjdHVyZSApIHtcblxuXHQvLyBkYXRhVHlwZUV4cHJlc3Npb24gaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIFwiKlwiXG5cdHJldHVybiBmdW5jdGlvbiggZGF0YVR5cGVFeHByZXNzaW9uLCBmdW5jICkge1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YVR5cGVFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0ZnVuYyA9IGRhdGFUeXBlRXhwcmVzc2lvbjtcblx0XHRcdGRhdGFUeXBlRXhwcmVzc2lvbiA9IFwiKlwiO1xuXHRcdH1cblxuXHRcdHZhciBkYXRhVHlwZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0ZGF0YVR5cGVzID0gZGF0YVR5cGVFeHByZXNzaW9uLnRvTG93ZXJDYXNlKCkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblxuXHRcdGlmICggaXNGdW5jdGlvbiggZnVuYyApICkge1xuXG5cdFx0XHQvLyBGb3IgZWFjaCBkYXRhVHlwZSBpbiB0aGUgZGF0YVR5cGVFeHByZXNzaW9uXG5cdFx0XHR3aGlsZSAoICggZGF0YVR5cGUgPSBkYXRhVHlwZXNbIGkrKyBdICkgKSB7XG5cblx0XHRcdFx0Ly8gUHJlcGVuZCBpZiByZXF1ZXN0ZWRcblx0XHRcdFx0aWYgKCBkYXRhVHlwZVsgMCBdID09PSBcIitcIiApIHtcblx0XHRcdFx0XHRkYXRhVHlwZSA9IGRhdGFUeXBlLnNsaWNlKCAxICkgfHwgXCIqXCI7XG5cdFx0XHRcdFx0KCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gPSBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10gKS51bnNoaWZ0KCBmdW5jICk7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkucHVzaCggZnVuYyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4vLyBCYXNlIGluc3BlY3Rpb24gZnVuY3Rpb24gZm9yIHByZWZpbHRlcnMgYW5kIHRyYW5zcG9ydHNcbmZ1bmN0aW9uIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKSB7XG5cblx0dmFyIGluc3BlY3RlZCA9IHt9LFxuXHRcdHNlZWtpbmdUcmFuc3BvcnQgPSAoIHN0cnVjdHVyZSA9PT0gdHJhbnNwb3J0cyApO1xuXG5cdGZ1bmN0aW9uIGluc3BlY3QoIGRhdGFUeXBlICkge1xuXHRcdHZhciBzZWxlY3RlZDtcblx0XHRpbnNwZWN0ZWRbIGRhdGFUeXBlIF0gPSB0cnVlO1xuXHRcdGpRdWVyeS5lYWNoKCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10sIGZ1bmN0aW9uKCBfLCBwcmVmaWx0ZXJPckZhY3RvcnkgKSB7XG5cdFx0XHR2YXIgZGF0YVR5cGVPclRyYW5zcG9ydCA9IHByZWZpbHRlck9yRmFjdG9yeSggb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApO1xuXHRcdFx0aWYgKCB0eXBlb2YgZGF0YVR5cGVPclRyYW5zcG9ydCA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc2Vla2luZ1RyYW5zcG9ydCAmJiAhaW5zcGVjdGVkWyBkYXRhVHlwZU9yVHJhbnNwb3J0IF0gKSB7XG5cblx0XHRcdFx0b3B0aW9ucy5kYXRhVHlwZXMudW5zaGlmdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRpbnNwZWN0KCBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoIHNlZWtpbmdUcmFuc3BvcnQgKSB7XG5cdFx0XHRcdHJldHVybiAhKCBzZWxlY3RlZCA9IGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdFx0cmV0dXJuIHNlbGVjdGVkO1xuXHR9XG5cblx0cmV0dXJuIGluc3BlY3QoIG9wdGlvbnMuZGF0YVR5cGVzWyAwIF0gKSB8fCAhaW5zcGVjdGVkWyBcIipcIiBdICYmIGluc3BlY3QoIFwiKlwiICk7XG59XG5cbi8vIEEgc3BlY2lhbCBleHRlbmQgZm9yIGFqYXggb3B0aW9uc1xuLy8gdGhhdCB0YWtlcyBcImZsYXRcIiBvcHRpb25zIChub3QgdG8gYmUgZGVlcCBleHRlbmRlZClcbi8vIEZpeGVzICM5ODg3XG5mdW5jdGlvbiBhamF4RXh0ZW5kKCB0YXJnZXQsIHNyYyApIHtcblx0dmFyIGtleSwgZGVlcCxcblx0XHRmbGF0T3B0aW9ucyA9IGpRdWVyeS5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnMgfHwge307XG5cblx0Zm9yICgga2V5IGluIHNyYyApIHtcblx0XHRpZiAoIHNyY1sga2V5IF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdCggZmxhdE9wdGlvbnNbIGtleSBdID8gdGFyZ2V0IDogKCBkZWVwIHx8ICggZGVlcCA9IHt9ICkgKSApWyBrZXkgXSA9IHNyY1sga2V5IF07XG5cdFx0fVxuXHR9XG5cdGlmICggZGVlcCApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0cnVlLCB0YXJnZXQsIGRlZXAgKTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbi8qIEhhbmRsZXMgcmVzcG9uc2VzIHRvIGFuIGFqYXggcmVxdWVzdDpcbiAqIC0gZmluZHMgdGhlIHJpZ2h0IGRhdGFUeXBlIChtZWRpYXRlcyBiZXR3ZWVuIGNvbnRlbnQtdHlwZSBhbmQgZXhwZWN0ZWQgZGF0YVR5cGUpXG4gKiAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApIHtcblxuXHR2YXIgY3QsIHR5cGUsIGZpbmFsRGF0YVR5cGUsIGZpcnN0RGF0YVR5cGUsXG5cdFx0Y29udGVudHMgPSBzLmNvbnRlbnRzLFxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzO1xuXG5cdC8vIFJlbW92ZSBhdXRvIGRhdGFUeXBlIGFuZCBnZXQgY29udGVudC10eXBlIGluIHRoZSBwcm9jZXNzXG5cdHdoaWxlICggZGF0YVR5cGVzWyAwIF0gPT09IFwiKlwiICkge1xuXHRcdGRhdGFUeXBlcy5zaGlmdCgpO1xuXHRcdGlmICggY3QgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJDb250ZW50LVR5cGVcIiApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGtub3duIGNvbnRlbnQtdHlwZVxuXHRpZiAoIGN0ICkge1xuXHRcdGZvciAoIHR5cGUgaW4gY29udGVudHMgKSB7XG5cdFx0XHRpZiAoIGNvbnRlbnRzWyB0eXBlIF0gJiYgY29udGVudHNbIHR5cGUgXS50ZXN0KCBjdCApICkge1xuXHRcdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggdHlwZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIHJlc3BvbnNlIGZvciB0aGUgZXhwZWN0ZWQgZGF0YVR5cGVcblx0aWYgKCBkYXRhVHlwZXNbIDAgXSBpbiByZXNwb25zZXMgKSB7XG5cdFx0ZmluYWxEYXRhVHlwZSA9IGRhdGFUeXBlc1sgMCBdO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gVHJ5IGNvbnZlcnRpYmxlIGRhdGFUeXBlc1xuXHRcdGZvciAoIHR5cGUgaW4gcmVzcG9uc2VzICkge1xuXHRcdFx0aWYgKCAhZGF0YVR5cGVzWyAwIF0gfHwgcy5jb252ZXJ0ZXJzWyB0eXBlICsgXCIgXCIgKyBkYXRhVHlwZXNbIDAgXSBdICkge1xuXHRcdFx0XHRmaW5hbERhdGFUeXBlID0gdHlwZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFmaXJzdERhdGFUeXBlICkge1xuXHRcdFx0XHRmaXJzdERhdGFUeXBlID0gdHlwZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBPciBqdXN0IHVzZSBmaXJzdCBvbmVcblx0XHRmaW5hbERhdGFUeXBlID0gZmluYWxEYXRhVHlwZSB8fCBmaXJzdERhdGFUeXBlO1xuXHR9XG5cblx0Ly8gSWYgd2UgZm91bmQgYSBkYXRhVHlwZVxuXHQvLyBXZSBhZGQgdGhlIGRhdGFUeXBlIHRvIHRoZSBsaXN0IGlmIG5lZWRlZFxuXHQvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG5cdGlmICggZmluYWxEYXRhVHlwZSApIHtcblx0XHRpZiAoIGZpbmFsRGF0YVR5cGUgIT09IGRhdGFUeXBlc1sgMCBdICkge1xuXHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIGZpbmFsRGF0YVR5cGUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3BvbnNlc1sgZmluYWxEYXRhVHlwZSBdO1xuXHR9XG59XG5cbi8qIENoYWluIGNvbnZlcnNpb25zIGdpdmVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgb3JpZ2luYWwgcmVzcG9uc2VcbiAqIEFsc28gc2V0cyB0aGUgcmVzcG9uc2VYWFggZmllbGRzIG9uIHRoZSBqcVhIUiBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKSB7XG5cdHZhciBjb252MiwgY3VycmVudCwgY29udiwgdG1wLCBwcmV2LFxuXHRcdGNvbnZlcnRlcnMgPSB7fSxcblxuXHRcdC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcy5zbGljZSgpO1xuXG5cdC8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuXHRpZiAoIGRhdGFUeXBlc1sgMSBdICkge1xuXHRcdGZvciAoIGNvbnYgaW4gcy5jb252ZXJ0ZXJzICkge1xuXHRcdFx0Y29udmVydGVyc1sgY29udi50b0xvd2VyQ2FzZSgpIF0gPSBzLmNvbnZlcnRlcnNbIGNvbnYgXTtcblx0XHR9XG5cdH1cblxuXHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0Ly8gQ29udmVydCB0byBlYWNoIHNlcXVlbnRpYWwgZGF0YVR5cGVcblx0d2hpbGUgKCBjdXJyZW50ICkge1xuXG5cdFx0aWYgKCBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gKSB7XG5cdFx0XHRqcVhIUlsgcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdIF0gPSByZXNwb25zZTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSB0aGUgZGF0YUZpbHRlciBpZiBwcm92aWRlZFxuXHRcdGlmICggIXByZXYgJiYgaXNTdWNjZXNzICYmIHMuZGF0YUZpbHRlciApIHtcblx0XHRcdHJlc3BvbnNlID0gcy5kYXRhRmlsdGVyKCByZXNwb25zZSwgcy5kYXRhVHlwZSApO1xuXHRcdH1cblxuXHRcdHByZXYgPSBjdXJyZW50O1xuXHRcdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHRcdGlmICggY3VycmVudCApIHtcblxuXHRcdFx0Ly8gVGhlcmUncyBvbmx5IHdvcmsgdG8gZG8gaWYgY3VycmVudCBkYXRhVHlwZSBpcyBub24tYXV0b1xuXHRcdFx0aWYgKCBjdXJyZW50ID09PSBcIipcIiApIHtcblxuXHRcdFx0XHRjdXJyZW50ID0gcHJldjtcblxuXHRcdFx0Ly8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxuXHRcdFx0fSBlbHNlIGlmICggcHJldiAhPT0gXCIqXCIgJiYgcHJldiAhPT0gY3VycmVudCApIHtcblxuXHRcdFx0XHQvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxuXHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgY3VycmVudCBdIHx8IGNvbnZlcnRlcnNbIFwiKiBcIiArIGN1cnJlbnQgXTtcblxuXHRcdFx0XHQvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxuXHRcdFx0XHRpZiAoICFjb252ICkge1xuXHRcdFx0XHRcdGZvciAoIGNvbnYyIGluIGNvbnZlcnRlcnMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIGNvbnYyIG91dHB1dHMgY3VycmVudFxuXHRcdFx0XHRcdFx0dG1wID0gY29udjIuc3BsaXQoIFwiIFwiICk7XG5cdFx0XHRcdFx0XHRpZiAoIHRtcFsgMSBdID09PSBjdXJyZW50ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHByZXYgY2FuIGJlIGNvbnZlcnRlZCB0byBhY2NlcHRlZCBpbnB1dFxuXHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgdG1wWyAwIF0gXSB8fFxuXHRcdFx0XHRcdFx0XHRcdGNvbnZlcnRlcnNbIFwiKiBcIiArIHRtcFsgMCBdIF07XG5cdFx0XHRcdFx0XHRcdGlmICggY29udiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENvbmRlbnNlIGVxdWl2YWxlbmNlIGNvbnZlcnRlcnNcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgPT09IHRydWUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgY29udjIgXTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgaW5zZXJ0IHRoZSBpbnRlcm1lZGlhdGUgZGF0YVR5cGVcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBjb252ZXJ0ZXJzWyBjb252MiBdICE9PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudCA9IHRtcFsgMCBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHRtcFsgMSBdICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXBwbHkgY29udmVydGVyIChpZiBub3QgYW4gZXF1aXZhbGVuY2UpXG5cdFx0XHRcdGlmICggY29udiAhPT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdC8vIFVubGVzcyBlcnJvcnMgYXJlIGFsbG93ZWQgdG8gYnViYmxlLCBjYXRjaCBhbmQgcmV0dXJuIHRoZW1cblx0XHRcdFx0XHRpZiAoIGNvbnYgJiYgcy50aHJvd3MgKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBcInBhcnNlcmVycm9yXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGNvbnYgPyBlIDogXCJObyBjb252ZXJzaW9uIGZyb20gXCIgKyBwcmV2ICsgXCIgdG8gXCIgKyBjdXJyZW50XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3RhdGU6IFwic3VjY2Vzc1wiLCBkYXRhOiByZXNwb25zZSB9O1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gQ291bnRlciBmb3IgaG9sZGluZyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBxdWVyaWVzXG5cdGFjdGl2ZTogMCxcblxuXHQvLyBMYXN0LU1vZGlmaWVkIGhlYWRlciBjYWNoZSBmb3IgbmV4dCByZXF1ZXN0XG5cdGxhc3RNb2RpZmllZDoge30sXG5cdGV0YWc6IHt9LFxuXG5cdGFqYXhTZXR0aW5nczoge1xuXHRcdHVybDogbG9jYXRpb24uaHJlZixcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGlzTG9jYWw6IHJsb2NhbFByb3RvY29sLnRlc3QoIGxvY2F0aW9uLnByb3RvY29sICksXG5cdFx0Z2xvYmFsOiB0cnVlLFxuXHRcdHByb2Nlc3NEYXRhOiB0cnVlLFxuXHRcdGFzeW5jOiB0cnVlLFxuXHRcdGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLFxuXG5cdFx0Lypcblx0XHR0aW1lb3V0OiAwLFxuXHRcdGRhdGE6IG51bGwsXG5cdFx0ZGF0YVR5cGU6IG51bGwsXG5cdFx0dXNlcm5hbWU6IG51bGwsXG5cdFx0cGFzc3dvcmQ6IG51bGwsXG5cdFx0Y2FjaGU6IG51bGwsXG5cdFx0dGhyb3dzOiBmYWxzZSxcblx0XHR0cmFkaXRpb25hbDogZmFsc2UsXG5cdFx0aGVhZGVyczoge30sXG5cdFx0Ki9cblxuXHRcdGFjY2VwdHM6IHtcblx0XHRcdFwiKlwiOiBhbGxUeXBlcyxcblx0XHRcdHRleHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0aHRtbDogXCJ0ZXh0L2h0bWxcIixcblx0XHRcdHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXG5cdFx0XHRqc29uOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiXG5cdFx0fSxcblxuXHRcdGNvbnRlbnRzOiB7XG5cdFx0XHR4bWw6IC9cXGJ4bWxcXGIvLFxuXHRcdFx0aHRtbDogL1xcYmh0bWwvLFxuXHRcdFx0anNvbjogL1xcYmpzb25cXGIvXG5cdFx0fSxcblxuXHRcdHJlc3BvbnNlRmllbGRzOiB7XG5cdFx0XHR4bWw6IFwicmVzcG9uc2VYTUxcIixcblx0XHRcdHRleHQ6IFwicmVzcG9uc2VUZXh0XCIsXG5cdFx0XHRqc29uOiBcInJlc3BvbnNlSlNPTlwiXG5cdFx0fSxcblxuXHRcdC8vIERhdGEgY29udmVydGVyc1xuXHRcdC8vIEtleXMgc2VwYXJhdGUgc291cmNlIChvciBjYXRjaGFsbCBcIipcIikgYW5kIGRlc3RpbmF0aW9uIHR5cGVzIHdpdGggYSBzaW5nbGUgc3BhY2Vcblx0XHRjb252ZXJ0ZXJzOiB7XG5cblx0XHRcdC8vIENvbnZlcnQgYW55dGhpbmcgdG8gdGV4dFxuXHRcdFx0XCIqIHRleHRcIjogU3RyaW5nLFxuXG5cdFx0XHQvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcblx0XHRcdFwidGV4dCBodG1sXCI6IHRydWUsXG5cblx0XHRcdC8vIEV2YWx1YXRlIHRleHQgYXMgYSBqc29uIGV4cHJlc3Npb25cblx0XHRcdFwidGV4dCBqc29uXCI6IEpTT04ucGFyc2UsXG5cblx0XHRcdC8vIFBhcnNlIHRleHQgYXMgeG1sXG5cdFx0XHRcInRleHQgeG1sXCI6IGpRdWVyeS5wYXJzZVhNTFxuXHRcdH0sXG5cblx0XHQvLyBGb3Igb3B0aW9ucyB0aGF0IHNob3VsZG4ndCBiZSBkZWVwIGV4dGVuZGVkOlxuXHRcdC8vIHlvdSBjYW4gYWRkIHlvdXIgb3duIGN1c3RvbSBvcHRpb25zIGhlcmUgaWZcblx0XHQvLyBhbmQgd2hlbiB5b3UgY3JlYXRlIG9uZSB0aGF0IHNob3VsZG4ndCBiZVxuXHRcdC8vIGRlZXAgZXh0ZW5kZWQgKHNlZSBhamF4RXh0ZW5kKVxuXHRcdGZsYXRPcHRpb25zOiB7XG5cdFx0XHR1cmw6IHRydWUsXG5cdFx0XHRjb250ZXh0OiB0cnVlXG5cdFx0fVxuXHR9LFxuXG5cdC8vIENyZWF0ZXMgYSBmdWxsIGZsZWRnZWQgc2V0dGluZ3Mgb2JqZWN0IGludG8gdGFyZ2V0XG5cdC8vIHdpdGggYm90aCBhamF4U2V0dGluZ3MgYW5kIHNldHRpbmdzIGZpZWxkcy5cblx0Ly8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cblx0YWpheFNldHVwOiBmdW5jdGlvbiggdGFyZ2V0LCBzZXR0aW5ncyApIHtcblx0XHRyZXR1cm4gc2V0dGluZ3MgP1xuXG5cdFx0XHQvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuXHRcdFx0YWpheEV4dGVuZCggYWpheEV4dGVuZCggdGFyZ2V0LCBqUXVlcnkuYWpheFNldHRpbmdzICksIHNldHRpbmdzICkgOlxuXG5cdFx0XHQvLyBFeHRlbmRpbmcgYWpheFNldHRpbmdzXG5cdFx0XHRhamF4RXh0ZW5kKCBqUXVlcnkuYWpheFNldHRpbmdzLCB0YXJnZXQgKTtcblx0fSxcblxuXHRhamF4UHJlZmlsdGVyOiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHByZWZpbHRlcnMgKSxcblx0YWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzICksXG5cblx0Ly8gTWFpbiBtZXRob2Rcblx0YWpheDogZnVuY3Rpb24oIHVybCwgb3B0aW9ucyApIHtcblxuXHRcdC8vIElmIHVybCBpcyBhbiBvYmplY3QsIHNpbXVsYXRlIHByZS0xLjUgc2lnbmF0dXJlXG5cdFx0aWYgKCB0eXBlb2YgdXJsID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0b3B0aW9ucyA9IHVybDtcblx0XHRcdHVybCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBGb3JjZSBvcHRpb25zIHRvIGJlIGFuIG9iamVjdFxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0dmFyIHRyYW5zcG9ydCxcblxuXHRcdFx0Ly8gVVJMIHdpdGhvdXQgYW50aS1jYWNoZSBwYXJhbVxuXHRcdFx0Y2FjaGVVUkwsXG5cblx0XHRcdC8vIFJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyxcblx0XHRcdHJlc3BvbnNlSGVhZGVycyxcblxuXHRcdFx0Ly8gdGltZW91dCBoYW5kbGVcblx0XHRcdHRpbWVvdXRUaW1lcixcblxuXHRcdFx0Ly8gVXJsIGNsZWFudXAgdmFyXG5cdFx0XHR1cmxBbmNob3IsXG5cblx0XHRcdC8vIFJlcXVlc3Qgc3RhdGUgKGJlY29tZXMgZmFsc2UgdXBvbiBzZW5kIGFuZCB0cnVlIHVwb24gY29tcGxldGlvbilcblx0XHRcdGNvbXBsZXRlZCxcblxuXHRcdFx0Ly8gVG8ga25vdyBpZiBnbG9iYWwgZXZlbnRzIGFyZSB0byBiZSBkaXNwYXRjaGVkXG5cdFx0XHRmaXJlR2xvYmFscyxcblxuXHRcdFx0Ly8gTG9vcCB2YXJpYWJsZVxuXHRcdFx0aSxcblxuXHRcdFx0Ly8gdW5jYWNoZWQgcGFydCBvZiB0aGUgdXJsXG5cdFx0XHR1bmNhY2hlZCxcblxuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBmaW5hbCBvcHRpb25zIG9iamVjdFxuXHRcdFx0cyA9IGpRdWVyeS5hamF4U2V0dXAoIHt9LCBvcHRpb25zICksXG5cblx0XHRcdC8vIENhbGxiYWNrcyBjb250ZXh0XG5cdFx0XHRjYWxsYmFja0NvbnRleHQgPSBzLmNvbnRleHQgfHwgcyxcblxuXHRcdFx0Ly8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxuXHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0ID0gcy5jb250ZXh0ICYmXG5cdFx0XHRcdCggY2FsbGJhY2tDb250ZXh0Lm5vZGVUeXBlIHx8IGNhbGxiYWNrQ29udGV4dC5qcXVlcnkgKSA/XG5cdFx0XHRcdFx0alF1ZXJ5KCBjYWxsYmFja0NvbnRleHQgKSA6XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LFxuXG5cdFx0XHQvLyBEZWZlcnJlZHNcblx0XHRcdGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCksXG5cdFx0XHRjb21wbGV0ZURlZmVycmVkID0galF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRzdGF0dXNDb2RlID0gcy5zdGF0dXNDb2RlIHx8IHt9LFxuXG5cdFx0XHQvLyBIZWFkZXJzICh0aGV5IGFyZSBzZW50IGFsbCBhdCBvbmNlKVxuXHRcdFx0cmVxdWVzdEhlYWRlcnMgPSB7fSxcblx0XHRcdHJlcXVlc3RIZWFkZXJzTmFtZXMgPSB7fSxcblxuXHRcdFx0Ly8gRGVmYXVsdCBhYm9ydCBtZXNzYWdlXG5cdFx0XHRzdHJBYm9ydCA9IFwiY2FuY2VsZWRcIixcblxuXHRcdFx0Ly8gRmFrZSB4aHJcblx0XHRcdGpxWEhSID0ge1xuXHRcdFx0XHRyZWFkeVN0YXRlOiAwLFxuXG5cdFx0XHRcdC8vIEJ1aWxkcyBoZWFkZXJzIGhhc2h0YWJsZSBpZiBuZWVkZWRcblx0XHRcdFx0Z2V0UmVzcG9uc2VIZWFkZXI6IGZ1bmN0aW9uKCBrZXkgKSB7XG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRcdFx0aWYgKCAhcmVzcG9uc2VIZWFkZXJzICkge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZUhlYWRlcnMgPSB7fTtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG1hdGNoID0gcmhlYWRlcnMuZXhlYyggcmVzcG9uc2VIZWFkZXJzU3RyaW5nICkgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZUhlYWRlcnNbIG1hdGNoWyAxIF0udG9Mb3dlckNhc2UoKSArIFwiIFwiIF0gPVxuXHRcdFx0XHRcdFx0XHRcdFx0KCByZXNwb25zZUhlYWRlcnNbIG1hdGNoWyAxIF0udG9Mb3dlckNhc2UoKSArIFwiIFwiIF0gfHwgW10gKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuY29uY2F0KCBtYXRjaFsgMiBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG1hdGNoID0gcmVzcG9uc2VIZWFkZXJzWyBrZXkudG9Mb3dlckNhc2UoKSArIFwiIFwiIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBtYXRjaCA9PSBudWxsID8gbnVsbCA6IG1hdGNoLmpvaW4oIFwiLCBcIiApO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFJhdyBzdHJpbmdcblx0XHRcdFx0Z2V0QWxsUmVzcG9uc2VIZWFkZXJzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gY29tcGxldGVkID8gcmVzcG9uc2VIZWFkZXJzU3RyaW5nIDogbnVsbDtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBDYWNoZXMgdGhlIGhlYWRlclxuXHRcdFx0XHRzZXRSZXF1ZXN0SGVhZGVyOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdG5hbWUgPSByZXF1ZXN0SGVhZGVyc05hbWVzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSA9XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RIZWFkZXJzTmFtZXNbIG5hbWUudG9Mb3dlckNhc2UoKSBdIHx8IG5hbWU7XG5cdFx0XHRcdFx0XHRyZXF1ZXN0SGVhZGVyc1sgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIE92ZXJyaWRlcyByZXNwb25zZSBjb250ZW50LXR5cGUgaGVhZGVyXG5cdFx0XHRcdG92ZXJyaWRlTWltZVR5cGU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRzLm1pbWVUeXBlID0gdHlwZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdFx0c3RhdHVzQ29kZTogZnVuY3Rpb24oIG1hcCApIHtcblx0XHRcdFx0XHR2YXIgY29kZTtcblx0XHRcdFx0XHRpZiAoIG1hcCApIHtcblx0XHRcdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEV4ZWN1dGUgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrc1xuXHRcdFx0XHRcdFx0XHRqcVhIUi5hbHdheXMoIG1hcFsganFYSFIuc3RhdHVzIF0gKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gTGF6eS1hZGQgdGhlIG5ldyBjYWxsYmFja3MgaW4gYSB3YXkgdGhhdCBwcmVzZXJ2ZXMgb2xkIG9uZXNcblx0XHRcdFx0XHRcdFx0Zm9yICggY29kZSBpbiBtYXAgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdHVzQ29kZVsgY29kZSBdID0gWyBzdGF0dXNDb2RlWyBjb2RlIF0sIG1hcFsgY29kZSBdIF07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FuY2VsIHRoZSByZXF1ZXN0XG5cdFx0XHRcdGFib3J0OiBmdW5jdGlvbiggc3RhdHVzVGV4dCApIHtcblx0XHRcdFx0XHR2YXIgZmluYWxUZXh0ID0gc3RhdHVzVGV4dCB8fCBzdHJBYm9ydDtcblx0XHRcdFx0XHRpZiAoIHRyYW5zcG9ydCApIHtcblx0XHRcdFx0XHRcdHRyYW5zcG9ydC5hYm9ydCggZmluYWxUZXh0ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRvbmUoIDAsIGZpbmFsVGV4dCApO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0Ly8gQXR0YWNoIGRlZmVycmVkc1xuXHRcdGRlZmVycmVkLnByb21pc2UoIGpxWEhSICk7XG5cblx0XHQvLyBBZGQgcHJvdG9jb2wgaWYgbm90IHByb3ZpZGVkIChwcmVmaWx0ZXJzIG1pZ2h0IGV4cGVjdCBpdClcblx0XHQvLyBIYW5kbGUgZmFsc3kgdXJsIGluIHRoZSBzZXR0aW5ncyBvYmplY3QgKCMxMDA5MzogY29uc2lzdGVuY3kgd2l0aCBvbGQgc2lnbmF0dXJlKVxuXHRcdC8vIFdlIGFsc28gdXNlIHRoZSB1cmwgcGFyYW1ldGVyIGlmIGF2YWlsYWJsZVxuXHRcdHMudXJsID0gKCAoIHVybCB8fCBzLnVybCB8fCBsb2NhdGlvbi5ocmVmICkgKyBcIlwiIClcblx0XHRcdC5yZXBsYWNlKCBycHJvdG9jb2wsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICk7XG5cblx0XHQvLyBBbGlhcyBtZXRob2Qgb3B0aW9uIHRvIHR5cGUgYXMgcGVyIHRpY2tldCAjMTIwMDRcblx0XHRzLnR5cGUgPSBvcHRpb25zLm1ldGhvZCB8fCBvcHRpb25zLnR5cGUgfHwgcy5tZXRob2QgfHwgcy50eXBlO1xuXG5cdFx0Ly8gRXh0cmFjdCBkYXRhVHlwZXMgbGlzdFxuXHRcdHMuZGF0YVR5cGVzID0gKCBzLmRhdGFUeXBlIHx8IFwiKlwiICkudG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXG5cdFx0Ly8gQSBjcm9zcy1kb21haW4gcmVxdWVzdCBpcyBpbiBvcmRlciB3aGVuIHRoZSBvcmlnaW4gZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBvcmlnaW4uXG5cdFx0aWYgKCBzLmNyb3NzRG9tYWluID09IG51bGwgKSB7XG5cdFx0XHR1cmxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSwgRWRnZSAxMiAtIDE1XG5cdFx0XHQvLyBJRSB0aHJvd3MgZXhjZXB0aW9uIG9uIGFjY2Vzc2luZyB0aGUgaHJlZiBwcm9wZXJ0eSBpZiB1cmwgaXMgbWFsZm9ybWVkLFxuXHRcdFx0Ly8gZS5nLiBodHRwOi8vZXhhbXBsZS5jb206ODB4L1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dXJsQW5jaG9yLmhyZWYgPSBzLnVybDtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSBvbmx5XG5cdFx0XHRcdC8vIEFuY2hvcidzIGhvc3QgcHJvcGVydHkgaXNuJ3QgY29ycmVjdGx5IHNldCB3aGVuIHMudXJsIGlzIHJlbGF0aXZlXG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gdXJsQW5jaG9yLmhyZWY7XG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSBvcmlnaW5BbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyBvcmlnaW5BbmNob3IuaG9zdCAhPT1cblx0XHRcdFx0XHR1cmxBbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxBbmNob3IuaG9zdDtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlIGlzIGFuIGVycm9yIHBhcnNpbmcgdGhlIFVSTCwgYXNzdW1lIGl0IGlzIGNyb3NzRG9tYWluLFxuXHRcdFx0XHQvLyBpdCBjYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIHRyYW5zcG9ydCBpZiBpdCBpcyBpbnZhbGlkXG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuXHRcdGlmICggcy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiYgdHlwZW9mIHMuZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHMuZGF0YSA9IGpRdWVyeS5wYXJhbSggcy5kYXRhLCBzLnRyYWRpdGlvbmFsICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcHJlZmlsdGVyc1xuXHRcdGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYSBwcmVmaWx0ZXIsIHN0b3AgdGhlcmVcblx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdHJldHVybiBqcVhIUjtcblx0XHR9XG5cblx0XHQvLyBXZSBjYW4gZmlyZSBnbG9iYWwgZXZlbnRzIGFzIG9mIG5vdyBpZiBhc2tlZCB0b1xuXHRcdC8vIERvbid0IGZpcmUgZXZlbnRzIGlmIGpRdWVyeS5ldmVudCBpcyB1bmRlZmluZWQgaW4gYW4gQU1ELXVzYWdlIHNjZW5hcmlvICgjMTUxMTgpXG5cdFx0ZmlyZUdsb2JhbHMgPSBqUXVlcnkuZXZlbnQgJiYgcy5nbG9iYWw7XG5cblx0XHQvLyBXYXRjaCBmb3IgYSBuZXcgc2V0IG9mIHJlcXVlc3RzXG5cdFx0aWYgKCBmaXJlR2xvYmFscyAmJiBqUXVlcnkuYWN0aXZlKysgPT09IDAgKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggXCJhamF4U3RhcnRcIiApO1xuXHRcdH1cblxuXHRcdC8vIFVwcGVyY2FzZSB0aGUgdHlwZVxuXHRcdHMudHlwZSA9IHMudHlwZS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0Ly8gRGV0ZXJtaW5lIGlmIHJlcXVlc3QgaGFzIGNvbnRlbnRcblx0XHRzLmhhc0NvbnRlbnQgPSAhcm5vQ29udGVudC50ZXN0KCBzLnR5cGUgKTtcblxuXHRcdC8vIFNhdmUgdGhlIFVSTCBpbiBjYXNlIHdlJ3JlIHRveWluZyB3aXRoIHRoZSBJZi1Nb2RpZmllZC1TaW5jZVxuXHRcdC8vIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciBsYXRlciBvblxuXHRcdC8vIFJlbW92ZSBoYXNoIHRvIHNpbXBsaWZ5IHVybCBtYW5pcHVsYXRpb25cblx0XHRjYWNoZVVSTCA9IHMudXJsLnJlcGxhY2UoIHJoYXNoLCBcIlwiICk7XG5cblx0XHQvLyBNb3JlIG9wdGlvbnMgaGFuZGxpbmcgZm9yIHJlcXVlc3RzIHdpdGggbm8gY29udGVudFxuXHRcdGlmICggIXMuaGFzQ29udGVudCApIHtcblxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIGhhc2ggc28gd2UgY2FuIHB1dCBpdCBiYWNrXG5cdFx0XHR1bmNhY2hlZCA9IHMudXJsLnNsaWNlKCBjYWNoZVVSTC5sZW5ndGggKTtcblxuXHRcdFx0Ly8gSWYgZGF0YSBpcyBhdmFpbGFibGUgYW5kIHNob3VsZCBiZSBwcm9jZXNzZWQsIGFwcGVuZCBkYXRhIHRvIHVybFxuXHRcdFx0aWYgKCBzLmRhdGEgJiYgKCBzLnByb2Nlc3NEYXRhIHx8IHR5cGVvZiBzLmRhdGEgPT09IFwic3RyaW5nXCIgKSApIHtcblx0XHRcdFx0Y2FjaGVVUkwgKz0gKCBycXVlcnkudGVzdCggY2FjaGVVUkwgKSA/IFwiJlwiIDogXCI/XCIgKSArIHMuZGF0YTtcblxuXHRcdFx0XHQvLyAjOTY4MjogcmVtb3ZlIGRhdGEgc28gdGhhdCBpdCdzIG5vdCB1c2VkIGluIGFuIGV2ZW50dWFsIHJldHJ5XG5cdFx0XHRcdGRlbGV0ZSBzLmRhdGE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBvciB1cGRhdGUgYW50aS1jYWNoZSBwYXJhbSBpZiBuZWVkZWRcblx0XHRcdGlmICggcy5jYWNoZSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdGNhY2hlVVJMID0gY2FjaGVVUkwucmVwbGFjZSggcmFudGlDYWNoZSwgXCIkMVwiICk7XG5cdFx0XHRcdHVuY2FjaGVkID0gKCBycXVlcnkudGVzdCggY2FjaGVVUkwgKSA/IFwiJlwiIDogXCI/XCIgKSArIFwiXz1cIiArICggbm9uY2UrKyApICsgdW5jYWNoZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFB1dCBoYXNoIGFuZCBhbnRpLWNhY2hlIG9uIHRoZSBVUkwgdGhhdCB3aWxsIGJlIHJlcXVlc3RlZCAoZ2gtMTczMilcblx0XHRcdHMudXJsID0gY2FjaGVVUkwgKyB1bmNhY2hlZDtcblxuXHRcdC8vIENoYW5nZSAnJTIwJyB0byAnKycgaWYgdGhpcyBpcyBlbmNvZGVkIGZvcm0gYm9keSBjb250ZW50IChnaC0yNjU4KVxuXHRcdH0gZWxzZSBpZiAoIHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmXG5cdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApLmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCApIHtcblx0XHRcdHMuZGF0YSA9IHMuZGF0YS5yZXBsYWNlKCByMjAsIFwiK1wiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcblx0XHRcdGlmICggalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Nb2RpZmllZC1TaW5jZVwiLCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICkge1xuXHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIklmLU5vbmUtTWF0Y2hcIiwgalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcblx0XHRpZiAoIHMuZGF0YSAmJiBzLmhhc0NvbnRlbnQgJiYgcy5jb250ZW50VHlwZSAhPT0gZmFsc2UgfHwgb3B0aW9ucy5jb250ZW50VHlwZSApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIsIHMuY29udGVudFR5cGUgKTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIEFjY2VwdHMgaGVhZGVyIGZvciB0aGUgc2VydmVyLCBkZXBlbmRpbmcgb24gdGhlIGRhdGFUeXBlXG5cdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlcihcblx0XHRcdFwiQWNjZXB0XCIsXG5cdFx0XHRzLmRhdGFUeXBlc1sgMCBdICYmIHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdID9cblx0XHRcdFx0cy5hY2NlcHRzWyBzLmRhdGFUeXBlc1sgMCBdIF0gK1xuXHRcdFx0XHRcdCggcy5kYXRhVHlwZXNbIDAgXSAhPT0gXCIqXCIgPyBcIiwgXCIgKyBhbGxUeXBlcyArIFwiOyBxPTAuMDFcIiA6IFwiXCIgKSA6XG5cdFx0XHRcdHMuYWNjZXB0c1sgXCIqXCIgXVxuXHRcdCk7XG5cblx0XHQvLyBDaGVjayBmb3IgaGVhZGVycyBvcHRpb25cblx0XHRmb3IgKCBpIGluIHMuaGVhZGVycyApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIGksIHMuaGVhZGVyc1sgaSBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxuXHRcdGlmICggcy5iZWZvcmVTZW5kICYmXG5cdFx0XHQoIHMuYmVmb3JlU2VuZC5jYWxsKCBjYWxsYmFja0NvbnRleHQsIGpxWEhSLCBzICkgPT09IGZhbHNlIHx8IGNvbXBsZXRlZCApICkge1xuXG5cdFx0XHQvLyBBYm9ydCBpZiBub3QgZG9uZSBhbHJlYWR5IGFuZCByZXR1cm5cblx0XHRcdHJldHVybiBqcVhIUi5hYm9ydCgpO1xuXHRcdH1cblxuXHRcdC8vIEFib3J0aW5nIGlzIG5vIGxvbmdlciBhIGNhbmNlbGxhdGlvblxuXHRcdHN0ckFib3J0ID0gXCJhYm9ydFwiO1xuXG5cdFx0Ly8gSW5zdGFsbCBjYWxsYmFja3Mgb24gZGVmZXJyZWRzXG5cdFx0Y29tcGxldGVEZWZlcnJlZC5hZGQoIHMuY29tcGxldGUgKTtcblx0XHRqcVhIUi5kb25lKCBzLnN1Y2Nlc3MgKTtcblx0XHRqcVhIUi5mYWlsKCBzLmVycm9yICk7XG5cblx0XHQvLyBHZXQgdHJhbnNwb3J0XG5cdFx0dHJhbnNwb3J0ID0gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHRyYW5zcG9ydHMsIHMsIG9wdGlvbnMsIGpxWEhSICk7XG5cblx0XHQvLyBJZiBubyB0cmFuc3BvcnQsIHdlIGF1dG8tYWJvcnRcblx0XHRpZiAoICF0cmFuc3BvcnQgKSB7XG5cdFx0XHRkb25lKCAtMSwgXCJObyBUcmFuc3BvcnRcIiApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gMTtcblxuXHRcdFx0Ly8gU2VuZCBnbG9iYWwgZXZlbnRcblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhTZW5kXCIsIFsganFYSFIsIHMgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhamF4U2VuZCwgc3RvcCB0aGVyZVxuXHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdHJldHVybiBqcVhIUjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGltZW91dFxuXHRcdFx0aWYgKCBzLmFzeW5jICYmIHMudGltZW91dCA+IDAgKSB7XG5cdFx0XHRcdHRpbWVvdXRUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRqcVhIUi5hYm9ydCggXCJ0aW1lb3V0XCIgKTtcblx0XHRcdFx0fSwgcy50aW1lb3V0ICk7XG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbXBsZXRlZCA9IGZhbHNlO1xuXHRcdFx0XHR0cmFuc3BvcnQuc2VuZCggcmVxdWVzdEhlYWRlcnMsIGRvbmUgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIFJldGhyb3cgcG9zdC1jb21wbGV0aW9uIGV4Y2VwdGlvbnNcblx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb3BhZ2F0ZSBvdGhlcnMgYXMgcmVzdWx0c1xuXHRcdFx0XHRkb25lKCAtMSwgZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGxiYWNrIGZvciB3aGVuIGV2ZXJ5dGhpbmcgaXMgZG9uZVxuXHRcdGZ1bmN0aW9uIGRvbmUoIHN0YXR1cywgbmF0aXZlU3RhdHVzVGV4dCwgcmVzcG9uc2VzLCBoZWFkZXJzICkge1xuXHRcdFx0dmFyIGlzU3VjY2Vzcywgc3VjY2VzcywgZXJyb3IsIHJlc3BvbnNlLCBtb2RpZmllZCxcblx0XHRcdFx0c3RhdHVzVGV4dCA9IG5hdGl2ZVN0YXR1c1RleHQ7XG5cblx0XHRcdC8vIElnbm9yZSByZXBlYXQgaW52b2NhdGlvbnNcblx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdC8vIENsZWFyIHRpbWVvdXQgaWYgaXQgZXhpc3RzXG5cdFx0XHRpZiAoIHRpbWVvdXRUaW1lciApIHtcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGltZW91dFRpbWVyICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERlcmVmZXJlbmNlIHRyYW5zcG9ydCBmb3IgZWFybHkgZ2FyYmFnZSBjb2xsZWN0aW9uXG5cdFx0XHQvLyAobm8gbWF0dGVyIGhvdyBsb25nIHRoZSBqcVhIUiBvYmplY3Qgd2lsbCBiZSB1c2VkKVxuXHRcdFx0dHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBDYWNoZSByZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNTdHJpbmcgPSBoZWFkZXJzIHx8IFwiXCI7XG5cblx0XHRcdC8vIFNldCByZWFkeVN0YXRlXG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gc3RhdHVzID4gMCA/IDQgOiAwO1xuXG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgc3VjY2Vzc2Z1bFxuXHRcdFx0aXNTdWNjZXNzID0gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDAgfHwgc3RhdHVzID09PSAzMDQ7XG5cblx0XHRcdC8vIEdldCByZXNwb25zZSBkYXRhXG5cdFx0XHRpZiAoIHJlc3BvbnNlcyApIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBhamF4SGFuZGxlUmVzcG9uc2VzKCBzLCBqcVhIUiwgcmVzcG9uc2VzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbnZlcnQgbm8gbWF0dGVyIHdoYXQgKHRoYXQgd2F5IHJlc3BvbnNlWFhYIGZpZWxkcyBhcmUgYWx3YXlzIHNldClcblx0XHRcdHJlc3BvbnNlID0gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICk7XG5cblx0XHRcdC8vIElmIHN1Y2Nlc3NmdWwsIGhhbmRsZSB0eXBlIGNoYWluaW5nXG5cdFx0XHRpZiAoIGlzU3VjY2VzcyApIHtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuXHRcdFx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcblx0XHRcdFx0XHRtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKCBcIkxhc3QtTW9kaWZpZWRcIiApO1xuXHRcdFx0XHRcdGlmICggbW9kaWZpZWQgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdID0gbW9kaWZpZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiZXRhZ1wiICk7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdID0gbW9kaWZpZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaWYgbm8gY29udGVudFxuXHRcdFx0XHRpZiAoIHN0YXR1cyA9PT0gMjA0IHx8IHMudHlwZSA9PT0gXCJIRUFEXCIgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm9jb250ZW50XCI7XG5cblx0XHRcdFx0Ly8gaWYgbm90IG1vZGlmaWVkXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHN0YXR1cyA9PT0gMzA0ICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcIm5vdG1vZGlmaWVkXCI7XG5cblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBkYXRhLCBsZXQncyBjb252ZXJ0IGl0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXRlO1xuXHRcdFx0XHRcdHN1Y2Nlc3MgPSByZXNwb25zZS5kYXRhO1xuXHRcdFx0XHRcdGVycm9yID0gcmVzcG9uc2UuZXJyb3I7XG5cdFx0XHRcdFx0aXNTdWNjZXNzID0gIWVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEV4dHJhY3QgZXJyb3IgZnJvbSBzdGF0dXNUZXh0IGFuZCBub3JtYWxpemUgZm9yIG5vbi1hYm9ydHNcblx0XHRcdFx0ZXJyb3IgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRpZiAoIHN0YXR1cyB8fCAhc3RhdHVzVGV4dCApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJlcnJvclwiO1xuXHRcdFx0XHRcdGlmICggc3RhdHVzIDwgMCApIHtcblx0XHRcdFx0XHRcdHN0YXR1cyA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCBkYXRhIGZvciB0aGUgZmFrZSB4aHIgb2JqZWN0XG5cdFx0XHRqcVhIUi5zdGF0dXMgPSBzdGF0dXM7XG5cdFx0XHRqcVhIUi5zdGF0dXNUZXh0ID0gKCBuYXRpdmVTdGF0dXNUZXh0IHx8IHN0YXR1c1RleHQgKSArIFwiXCI7XG5cblx0XHRcdC8vIFN1Y2Nlc3MvRXJyb3Jcblx0XHRcdGlmICggaXNTdWNjZXNzICkge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIHN1Y2Nlc3MsIHN0YXR1c1RleHQsIGpxWEhSIF0gKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBqcVhIUiwgc3RhdHVzVGV4dCwgZXJyb3IgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0anFYSFIuc3RhdHVzQ29kZSggc3RhdHVzQ29kZSApO1xuXHRcdFx0c3RhdHVzQ29kZSA9IHVuZGVmaW5lZDtcblxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIGlzU3VjY2VzcyA/IFwiYWpheFN1Y2Nlc3NcIiA6IFwiYWpheEVycm9yXCIsXG5cdFx0XHRcdFx0WyBqcVhIUiwgcywgaXNTdWNjZXNzID8gc3VjY2VzcyA6IGVycm9yIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcGxldGVcblx0XHRcdGNvbXBsZXRlRGVmZXJyZWQuZmlyZVdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBqcVhIUiwgc3RhdHVzVGV4dCBdICk7XG5cblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhDb21wbGV0ZVwiLCBbIGpxWEhSLCBzIF0gKTtcblxuXHRcdFx0XHQvLyBIYW5kbGUgdGhlIGdsb2JhbCBBSkFYIGNvdW50ZXJcblx0XHRcdFx0aWYgKCAhKCAtLWpRdWVyeS5hY3RpdmUgKSApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggXCJhamF4U3RvcFwiICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ganFYSFI7XG5cdH0sXG5cblx0Z2V0SlNPTjogZnVuY3Rpb24oIHVybCwgZGF0YSwgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5nZXQoIHVybCwgZGF0YSwgY2FsbGJhY2ssIFwianNvblwiICk7XG5cdH0sXG5cblx0Z2V0U2NyaXB0OiBmdW5jdGlvbiggdXJsLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCB1bmRlZmluZWQsIGNhbGxiYWNrLCBcInNjcmlwdFwiICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJnZXRcIiwgXCJwb3N0XCIgXSwgZnVuY3Rpb24oIGksIG1ldGhvZCApIHtcblx0alF1ZXJ5WyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB1cmwsIGRhdGEsIGNhbGxiYWNrLCB0eXBlICkge1xuXG5cdFx0Ly8gU2hpZnQgYXJndW1lbnRzIGlmIGRhdGEgYXJndW1lbnQgd2FzIG9taXR0ZWRcblx0XHRpZiAoIGlzRnVuY3Rpb24oIGRhdGEgKSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IGNhbGxiYWNrO1xuXHRcdFx0Y2FsbGJhY2sgPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBUaGUgdXJsIGNhbiBiZSBhbiBvcHRpb25zIG9iamVjdCAod2hpY2ggdGhlbiBtdXN0IGhhdmUgLnVybClcblx0XHRyZXR1cm4galF1ZXJ5LmFqYXgoIGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0dHlwZTogbWV0aG9kLFxuXHRcdFx0ZGF0YVR5cGU6IHR5cGUsXG5cdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0c3VjY2VzczogY2FsbGJhY2tcblx0XHR9LCBqUXVlcnkuaXNQbGFpbk9iamVjdCggdXJsICkgJiYgdXJsICkgKTtcblx0fTtcbn0gKTtcblxuXG5qUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiggdXJsLCBvcHRpb25zICkge1xuXHRyZXR1cm4galF1ZXJ5LmFqYXgoIHtcblx0XHR1cmw6IHVybCxcblxuXHRcdC8vIE1ha2UgdGhpcyBleHBsaWNpdCwgc2luY2UgdXNlciBjYW4gb3ZlcnJpZGUgdGhpcyB0aHJvdWdoIGFqYXhTZXR1cCAoIzExMjY0KVxuXHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0ZGF0YVR5cGU6IFwic2NyaXB0XCIsXG5cdFx0Y2FjaGU6IHRydWUsXG5cdFx0YXN5bmM6IGZhbHNlLFxuXHRcdGdsb2JhbDogZmFsc2UsXG5cblx0XHQvLyBPbmx5IGV2YWx1YXRlIHRoZSByZXNwb25zZSBpZiBpdCBpcyBzdWNjZXNzZnVsIChnaC00MTI2KVxuXHRcdC8vIGRhdGFGaWx0ZXIgaXMgbm90IGludm9rZWQgZm9yIGZhaWx1cmUgcmVzcG9uc2VzLCBzbyB1c2luZyBpdCBpbnN0ZWFkXG5cdFx0Ly8gb2YgdGhlIGRlZmF1bHQgY29udmVydGVyIGlzIGtsdWRneSBidXQgaXQgd29ya3MuXG5cdFx0Y29udmVydGVyczoge1xuXHRcdFx0XCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbigpIHt9XG5cdFx0fSxcblx0XHRkYXRhRmlsdGVyOiBmdW5jdGlvbiggcmVzcG9uc2UgKSB7XG5cdFx0XHRqUXVlcnkuZ2xvYmFsRXZhbCggcmVzcG9uc2UsIG9wdGlvbnMgKTtcblx0XHR9XG5cdH0gKTtcbn07XG5cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHR3cmFwQWxsOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgd3JhcDtcblxuXHRcdGlmICggdGhpc1sgMCBdICkge1xuXHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCBodG1sICkgKSB7XG5cdFx0XHRcdGh0bWwgPSBodG1sLmNhbGwoIHRoaXNbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGUgZWxlbWVudHMgdG8gd3JhcCB0aGUgdGFyZ2V0IGFyb3VuZFxuXHRcdFx0d3JhcCA9IGpRdWVyeSggaHRtbCwgdGhpc1sgMCBdLm93bmVyRG9jdW1lbnQgKS5lcSggMCApLmNsb25lKCB0cnVlICk7XG5cblx0XHRcdGlmICggdGhpc1sgMCBdLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHdyYXAuaW5zZXJ0QmVmb3JlKCB0aGlzWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0d3JhcC5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZWxlbSA9IHRoaXM7XG5cblx0XHRcdFx0d2hpbGUgKCBlbGVtLmZpcnN0RWxlbWVudENoaWxkICkge1xuXHRcdFx0XHRcdGVsZW0gPSBlbGVtLmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGVsZW07XG5cdFx0XHR9ICkuYXBwZW5kKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0d3JhcElubmVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRpZiAoIGlzRnVuY3Rpb24oIGh0bWwgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwSW5uZXIoIGh0bWwuY2FsbCggdGhpcywgaSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGpRdWVyeSggdGhpcyApLFxuXHRcdFx0XHRjb250ZW50cyA9IHNlbGYuY29udGVudHMoKTtcblxuXHRcdFx0aWYgKCBjb250ZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRlbnRzLndyYXBBbGwoIGh0bWwgKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5hcHBlbmQoIGh0bWwgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0d3JhcDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIGh0bWxJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiggaHRtbCApO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwQWxsKCBodG1sSXNGdW5jdGlvbiA/IGh0bWwuY2FsbCggdGhpcywgaSApIDogaHRtbCApO1xuXHRcdH0gKTtcblx0fSxcblxuXHR1bndyYXA6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR0aGlzLnBhcmVudCggc2VsZWN0b3IgKS5ub3QoIFwiYm9keVwiICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5yZXBsYWNlV2l0aCggdGhpcy5jaGlsZE5vZGVzICk7XG5cdFx0fSApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59ICk7XG5cblxualF1ZXJ5LmV4cHIucHNldWRvcy5oaWRkZW4gPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuICFqUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUoIGVsZW0gKTtcbn07XG5qUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuICEhKCBlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKTtcbn07XG5cblxuXG5cbmpRdWVyeS5hamF4U2V0dGluZ3MueGhyID0gZnVuY3Rpb24oKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcblx0fSBjYXRjaCAoIGUgKSB7fVxufTtcblxudmFyIHhoclN1Y2Nlc3NTdGF0dXMgPSB7XG5cblx0XHQvLyBGaWxlIHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIGNvZGUgMCwgYXNzdW1lIDIwMFxuXHRcdDA6IDIwMCxcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0Ly8gIzE0NTA6IHNvbWV0aW1lcyBJRSByZXR1cm5zIDEyMjMgd2hlbiBpdCBzaG91bGQgYmUgMjA0XG5cdFx0MTIyMzogMjA0XG5cdH0sXG5cdHhoclN1cHBvcnRlZCA9IGpRdWVyeS5hamF4U2V0dGluZ3MueGhyKCk7XG5cbnN1cHBvcnQuY29ycyA9ICEheGhyU3VwcG9ydGVkICYmICggXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHJTdXBwb3J0ZWQgKTtcbnN1cHBvcnQuYWpheCA9IHhoclN1cHBvcnRlZCA9ICEheGhyU3VwcG9ydGVkO1xuXG5qUXVlcnkuYWpheFRyYW5zcG9ydCggZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cdHZhciBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaztcblxuXHQvLyBDcm9zcyBkb21haW4gb25seSBhbGxvd2VkIGlmIHN1cHBvcnRlZCB0aHJvdWdoIFhNTEh0dHBSZXF1ZXN0XG5cdGlmICggc3VwcG9ydC5jb3JzIHx8IHhoclN1cHBvcnRlZCAmJiAhb3B0aW9ucy5jcm9zc0RvbWFpbiApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIGhlYWRlcnMsIGNvbXBsZXRlICkge1xuXHRcdFx0XHR2YXIgaSxcblx0XHRcdFx0XHR4aHIgPSBvcHRpb25zLnhocigpO1xuXG5cdFx0XHRcdHhoci5vcGVuKFxuXHRcdFx0XHRcdG9wdGlvbnMudHlwZSxcblx0XHRcdFx0XHRvcHRpb25zLnVybCxcblx0XHRcdFx0XHRvcHRpb25zLmFzeW5jLFxuXHRcdFx0XHRcdG9wdGlvbnMudXNlcm5hbWUsXG5cdFx0XHRcdFx0b3B0aW9ucy5wYXNzd29yZFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdC8vIEFwcGx5IGN1c3RvbSBmaWVsZHMgaWYgcHJvdmlkZWRcblx0XHRcdFx0aWYgKCBvcHRpb25zLnhockZpZWxkcyApIHtcblx0XHRcdFx0XHRmb3IgKCBpIGluIG9wdGlvbnMueGhyRmllbGRzICkge1xuXHRcdFx0XHRcdFx0eGhyWyBpIF0gPSBvcHRpb25zLnhockZpZWxkc1sgaSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE92ZXJyaWRlIG1pbWUgdHlwZSBpZiBuZWVkZWRcblx0XHRcdFx0aWYgKCBvcHRpb25zLm1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlICkge1xuXHRcdFx0XHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKCBvcHRpb25zLm1pbWVUeXBlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBYLVJlcXVlc3RlZC1XaXRoIGhlYWRlclxuXHRcdFx0XHQvLyBGb3IgY3Jvc3MtZG9tYWluIHJlcXVlc3RzLCBzZWVpbmcgYXMgY29uZGl0aW9ucyBmb3IgYSBwcmVmbGlnaHQgYXJlXG5cdFx0XHRcdC8vIGFraW4gdG8gYSBqaWdzYXcgcHV6emxlLCB3ZSBzaW1wbHkgbmV2ZXIgc2V0IGl0IHRvIGJlIHN1cmUuXG5cdFx0XHRcdC8vIChpdCBjYW4gYWx3YXlzIGJlIHNldCBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIG9yIGV2ZW4gdXNpbmcgYWpheFNldHVwKVxuXHRcdFx0XHQvLyBGb3Igc2FtZS1kb21haW4gcmVxdWVzdHMsIHdvbid0IGNoYW5nZSBoZWFkZXIgaWYgYWxyZWFkeSBwcm92aWRlZC5cblx0XHRcdFx0aWYgKCAhb3B0aW9ucy5jcm9zc0RvbWFpbiAmJiAhaGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSApIHtcblx0XHRcdFx0XHRoZWFkZXJzWyBcIlgtUmVxdWVzdGVkLVdpdGhcIiBdID0gXCJYTUxIdHRwUmVxdWVzdFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2V0IGhlYWRlcnNcblx0XHRcdFx0Zm9yICggaSBpbiBoZWFkZXJzICkge1xuXHRcdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCBpLCBoZWFkZXJzWyBpIF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENhbGxiYWNrXG5cdFx0XHRcdGNhbGxiYWNrID0gZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBlcnJvckNhbGxiYWNrID0geGhyLm9ubG9hZCA9XG5cdFx0XHRcdFx0XHRcdFx0eGhyLm9uZXJyb3IgPSB4aHIub25hYm9ydCA9IHhoci5vbnRpbWVvdXQgPVxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0eXBlID09PSBcImFib3J0XCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0eGhyLmFib3J0KCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGUgPT09IFwiZXJyb3JcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0Ly8gT24gYSBtYW51YWwgbmF0aXZlIGFib3J0LCBJRTkgdGhyb3dzXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXJyb3JzIG9uIGFueSBwcm9wZXJ0eSBhY2Nlc3MgdGhhdCBpcyBub3QgcmVhZHlTdGF0ZVxuXHRcdFx0XHRcdFx0XHRcdGlmICggdHlwZW9mIHhoci5zdGF0dXMgIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggMCwgXCJlcnJvclwiICk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEZpbGU6IHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIDA7IHNlZSAjODYwNSwgIzE0MjA3XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXNUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZShcblx0XHRcdFx0XHRcdFx0XHRcdHhoclN1Y2Nlc3NTdGF0dXNbIHhoci5zdGF0dXMgXSB8fCB4aHIuc3RhdHVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHQsXG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBJRTkgaGFzIG5vIFhIUjIgYnV0IHRocm93cyBvbiBiaW5hcnkgKHRyYWMtMTE0MjYpXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBGb3IgWEhSMiBub24tdGV4dCwgbGV0IHRoZSBjYWxsZXIgaGFuZGxlIGl0IChnaC0yNDk4KVxuXHRcdFx0XHRcdFx0XHRcdFx0KCB4aHIucmVzcG9uc2VUeXBlIHx8IFwidGV4dFwiICkgIT09IFwidGV4dFwiICB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHhoci5yZXNwb25zZVRleHQgIT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGJpbmFyeTogeGhyLnJlc3BvbnNlIH0gOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHRleHQ6IHhoci5yZXNwb25zZVRleHQgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vIExpc3RlbiB0byBldmVudHNcblx0XHRcdFx0eGhyLm9ubG9hZCA9IGNhbGxiYWNrKCk7XG5cdFx0XHRcdGVycm9yQ2FsbGJhY2sgPSB4aHIub25lcnJvciA9IHhoci5vbnRpbWVvdXQgPSBjYWxsYmFjayggXCJlcnJvclwiICk7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdFx0XHRcdC8vIFVzZSBvbnJlYWR5c3RhdGVjaGFuZ2UgdG8gcmVwbGFjZSBvbmFib3J0XG5cdFx0XHRcdC8vIHRvIGhhbmRsZSB1bmNhdWdodCBhYm9ydHNcblx0XHRcdFx0aWYgKCB4aHIub25hYm9ydCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHhoci5vbmFib3J0ID0gZXJyb3JDYWxsYmFjaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdC8vIENoZWNrIHJlYWR5U3RhdGUgYmVmb3JlIHRpbWVvdXQgYXMgaXQgY2hhbmdlc1xuXHRcdFx0XHRcdFx0aWYgKCB4aHIucmVhZHlTdGF0ZSA9PT0gNCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBbGxvdyBvbmVycm9yIHRvIGJlIGNhbGxlZCBmaXJzdCxcblx0XHRcdFx0XHRcdFx0Ly8gYnV0IHRoYXQgd2lsbCBub3QgaGFuZGxlIGEgbmF0aXZlIGFib3J0XG5cdFx0XHRcdFx0XHRcdC8vIEFsc28sIHNhdmUgZXJyb3JDYWxsYmFjayB0byBhIHZhcmlhYmxlXG5cdFx0XHRcdFx0XHRcdC8vIGFzIHhoci5vbmVycm9yIGNhbm5vdCBiZSBhY2Nlc3NlZFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yQ2FsbGJhY2soKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBhYm9ydCBjYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IGNhbGxiYWNrKCBcImFib3J0XCIgKTtcblxuXHRcdFx0XHR0cnkge1xuXG5cdFx0XHRcdFx0Ly8gRG8gc2VuZCB0aGUgcmVxdWVzdCAodGhpcyBtYXkgcmFpc2UgYW4gZXhjZXB0aW9uKVxuXHRcdFx0XHRcdHhoci5zZW5kKCBvcHRpb25zLmhhc0NvbnRlbnQgJiYgb3B0aW9ucy5kYXRhIHx8IG51bGwgKTtcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0XHQvLyAjMTQ2ODM6IE9ubHkgcmV0aHJvdyBpZiB0aGlzIGhhc24ndCBiZWVuIG5vdGlmaWVkIGFzIGFuIGVycm9yIHlldFxuXHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFByZXZlbnQgYXV0by1leGVjdXRpb24gb2Ygc2NyaXB0cyB3aGVuIG5vIGV4cGxpY2l0IGRhdGFUeXBlIHdhcyBwcm92aWRlZCAoU2VlIGdoLTI0MzIpXG5qUXVlcnkuYWpheFByZWZpbHRlciggZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jcm9zc0RvbWFpbiApIHtcblx0XHRzLmNvbnRlbnRzLnNjcmlwdCA9IGZhbHNlO1xuXHR9XG59ICk7XG5cbi8vIEluc3RhbGwgc2NyaXB0IGRhdGFUeXBlXG5qUXVlcnkuYWpheFNldHVwKCB7XG5cdGFjY2VwdHM6IHtcblx0XHRzY3JpcHQ6IFwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBcIiArXG5cdFx0XHRcImFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwiXG5cdH0sXG5cdGNvbnRlbnRzOiB7XG5cdFx0c2NyaXB0OiAvXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi9cblx0fSxcblx0Y29udmVydGVyczoge1xuXHRcdFwidGV4dCBzY3JpcHRcIjogZnVuY3Rpb24oIHRleHQgKSB7XG5cdFx0XHRqUXVlcnkuZ2xvYmFsRXZhbCggdGV4dCApO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIEhhbmRsZSBjYWNoZSdzIHNwZWNpYWwgY2FzZSBhbmQgY3Jvc3NEb21haW5cbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblx0aWYgKCBzLmNhY2hlID09PSB1bmRlZmluZWQgKSB7XG5cdFx0cy5jYWNoZSA9IGZhbHNlO1xuXHR9XG5cdGlmICggcy5jcm9zc0RvbWFpbiApIHtcblx0XHRzLnR5cGUgPSBcIkdFVFwiO1xuXHR9XG59ICk7XG5cbi8vIEJpbmQgc2NyaXB0IHRhZyBoYWNrIHRyYW5zcG9ydFxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIFwic2NyaXB0XCIsIGZ1bmN0aW9uKCBzICkge1xuXG5cdC8vIFRoaXMgdHJhbnNwb3J0IG9ubHkgZGVhbHMgd2l0aCBjcm9zcyBkb21haW4gb3IgZm9yY2VkLWJ5LWF0dHJzIHJlcXVlc3RzXG5cdGlmICggcy5jcm9zc0RvbWFpbiB8fCBzLnNjcmlwdEF0dHJzICkge1xuXHRcdHZhciBzY3JpcHQsIGNhbGxiYWNrO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZW5kOiBmdW5jdGlvbiggXywgY29tcGxldGUgKSB7XG5cdFx0XHRcdHNjcmlwdCA9IGpRdWVyeSggXCI8c2NyaXB0PlwiIClcblx0XHRcdFx0XHQuYXR0ciggcy5zY3JpcHRBdHRycyB8fCB7fSApXG5cdFx0XHRcdFx0LnByb3AoIHsgY2hhcnNldDogcy5zY3JpcHRDaGFyc2V0LCBzcmM6IHMudXJsIH0gKVxuXHRcdFx0XHRcdC5vbiggXCJsb2FkIGVycm9yXCIsIGNhbGxiYWNrID0gZnVuY3Rpb24oIGV2dCApIHtcblx0XHRcdFx0XHRcdHNjcmlwdC5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmICggZXZ0ICkge1xuXHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggZXZ0LnR5cGUgPT09IFwiZXJyb3JcIiA/IDQwNCA6IDIwMCwgZXZ0LnR5cGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0Ly8gVXNlIG5hdGl2ZSBET00gbWFuaXB1bGF0aW9uIHRvIGF2b2lkIG91ciBkb21NYW5pcCBBSkFYIHRyaWNrZXJ5XG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHNjcmlwdFsgMCBdICk7XG5cdFx0XHR9LFxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBvbGRDYWxsYmFja3MgPSBbXSxcblx0cmpzb25wID0gLyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztcblxuLy8gRGVmYXVsdCBqc29ucCBzZXR0aW5nc1xualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRqc29ucDogXCJjYWxsYmFja1wiLFxuXHRqc29ucENhbGxiYWNrOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY2FsbGJhY2sgPSBvbGRDYWxsYmFja3MucG9wKCkgfHwgKCBqUXVlcnkuZXhwYW5kbyArIFwiX1wiICsgKCBub25jZSsrICkgKTtcblx0XHR0aGlzWyBjYWxsYmFjayBdID0gdHJ1ZTtcblx0XHRyZXR1cm4gY2FsbGJhY2s7XG5cdH1cbn0gKTtcblxuLy8gRGV0ZWN0LCBub3JtYWxpemUgb3B0aW9ucyBhbmQgaW5zdGFsbCBjYWxsYmFja3MgZm9yIGpzb25wIHJlcXVlc3RzXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJqc29uIGpzb25wXCIsIGZ1bmN0aW9uKCBzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUiApIHtcblxuXHR2YXIgY2FsbGJhY2tOYW1lLCBvdmVyd3JpdHRlbiwgcmVzcG9uc2VDb250YWluZXIsXG5cdFx0anNvblByb3AgPSBzLmpzb25wICE9PSBmYWxzZSAmJiAoIHJqc29ucC50ZXN0KCBzLnVybCApID9cblx0XHRcdFwidXJsXCIgOlxuXHRcdFx0dHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApXG5cdFx0XHRcdFx0LmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCAmJlxuXHRcdFx0XHRyanNvbnAudGVzdCggcy5kYXRhICkgJiYgXCJkYXRhXCJcblx0XHQpO1xuXG5cdC8vIEhhbmRsZSBpZmYgdGhlIGV4cGVjdGVkIGRhdGEgdHlwZSBpcyBcImpzb25wXCIgb3Igd2UgaGF2ZSBhIHBhcmFtZXRlciB0byBzZXRcblx0aWYgKCBqc29uUHJvcCB8fCBzLmRhdGFUeXBlc1sgMCBdID09PSBcImpzb25wXCIgKSB7XG5cblx0XHQvLyBHZXQgY2FsbGJhY2sgbmFtZSwgcmVtZW1iZXJpbmcgcHJlZXhpc3RpbmcgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGl0XG5cdFx0Y2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0gaXNGdW5jdGlvbiggcy5qc29ucENhbGxiYWNrICkgP1xuXHRcdFx0cy5qc29ucENhbGxiYWNrKCkgOlxuXHRcdFx0cy5qc29ucENhbGxiYWNrO1xuXG5cdFx0Ly8gSW5zZXJ0IGNhbGxiYWNrIGludG8gdXJsIG9yIGZvcm0gZGF0YVxuXHRcdGlmICgganNvblByb3AgKSB7XG5cdFx0XHRzWyBqc29uUHJvcCBdID0gc1sganNvblByb3AgXS5yZXBsYWNlKCByanNvbnAsIFwiJDFcIiArIGNhbGxiYWNrTmFtZSApO1xuXHRcdH0gZWxzZSBpZiAoIHMuanNvbnAgIT09IGZhbHNlICkge1xuXHRcdFx0cy51cmwgKz0gKCBycXVlcnkudGVzdCggcy51cmwgKSA/IFwiJlwiIDogXCI/XCIgKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcblx0XHR9XG5cblx0XHQvLyBVc2UgZGF0YSBjb252ZXJ0ZXIgdG8gcmV0cmlldmUganNvbiBhZnRlciBzY3JpcHQgZXhlY3V0aW9uXG5cdFx0cy5jb252ZXJ0ZXJzWyBcInNjcmlwdCBqc29uXCIgXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCAhcmVzcG9uc2VDb250YWluZXIgKSB7XG5cdFx0XHRcdGpRdWVyeS5lcnJvciggY2FsbGJhY2tOYW1lICsgXCIgd2FzIG5vdCBjYWxsZWRcIiApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlQ29udGFpbmVyWyAwIF07XG5cdFx0fTtcblxuXHRcdC8vIEZvcmNlIGpzb24gZGF0YVR5cGVcblx0XHRzLmRhdGFUeXBlc1sgMCBdID0gXCJqc29uXCI7XG5cblx0XHQvLyBJbnN0YWxsIGNhbGxiYWNrXG5cdFx0b3ZlcndyaXR0ZW4gPSB3aW5kb3dbIGNhbGxiYWNrTmFtZSBdO1xuXHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gYXJndW1lbnRzO1xuXHRcdH07XG5cblx0XHQvLyBDbGVhbi11cCBmdW5jdGlvbiAoZmlyZXMgYWZ0ZXIgY29udmVydGVycylcblx0XHRqcVhIUi5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBJZiBwcmV2aW91cyB2YWx1ZSBkaWRuJ3QgZXhpc3QgLSByZW1vdmUgaXRcblx0XHRcdGlmICggb3ZlcndyaXR0ZW4gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0alF1ZXJ5KCB3aW5kb3cgKS5yZW1vdmVQcm9wKCBjYWxsYmFja05hbWUgKTtcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBvdmVyd3JpdHRlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2F2ZSBiYWNrIGFzIGZyZWVcblx0XHRcdGlmICggc1sgY2FsbGJhY2tOYW1lIF0gKSB7XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgcmUtdXNpbmcgdGhlIG9wdGlvbnMgZG9lc24ndCBzY3JldyB0aGluZ3MgYXJvdW5kXG5cdFx0XHRcdHMuanNvbnBDYWxsYmFjayA9IG9yaWdpbmFsU2V0dGluZ3MuanNvbnBDYWxsYmFjaztcblxuXHRcdFx0XHQvLyBTYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG5cdFx0XHRcdG9sZENhbGxiYWNrcy5wdXNoKCBjYWxsYmFja05hbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG5cdFx0XHRpZiAoIHJlc3BvbnNlQ29udGFpbmVyICYmIGlzRnVuY3Rpb24oIG92ZXJ3cml0dGVuICkgKSB7XG5cdFx0XHRcdG92ZXJ3cml0dGVuKCByZXNwb25zZUNvbnRhaW5lclsgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gb3ZlcndyaXR0ZW4gPSB1bmRlZmluZWQ7XG5cdFx0fSApO1xuXG5cdFx0Ly8gRGVsZWdhdGUgdG8gc2NyaXB0XG5cdFx0cmV0dXJuIFwic2NyaXB0XCI7XG5cdH1cbn0gKTtcblxuXG5cblxuLy8gU3VwcG9ydDogU2FmYXJpIDggb25seVxuLy8gSW4gU2FmYXJpIDggZG9jdW1lbnRzIGNyZWF0ZWQgdmlhIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudFxuLy8gY29sbGFwc2Ugc2libGluZyBmb3JtczogdGhlIHNlY29uZCBvbmUgYmVjb21lcyBhIGNoaWxkIG9mIHRoZSBmaXJzdCBvbmUuXG4vLyBCZWNhdXNlIG9mIHRoYXQsIHRoaXMgc2VjdXJpdHkgbWVhc3VyZSBoYXMgdG8gYmUgZGlzYWJsZWQgaW4gU2FmYXJpIDguXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3MzM3XG5zdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCA9ICggZnVuY3Rpb24oKSB7XG5cdHZhciBib2R5ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCBcIlwiICkuYm9keTtcblx0Ym9keS5pbm5lckhUTUwgPSBcIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCI7XG5cdHJldHVybiBib2R5LmNoaWxkTm9kZXMubGVuZ3RoID09PSAyO1xufSApKCk7XG5cblxuLy8gQXJndW1lbnQgXCJkYXRhXCIgc2hvdWxkIGJlIHN0cmluZyBvZiBodG1sXG4vLyBjb250ZXh0IChvcHRpb25hbCk6IElmIHNwZWNpZmllZCwgdGhlIGZyYWdtZW50IHdpbGwgYmUgY3JlYXRlZCBpbiB0aGlzIGNvbnRleHQsXG4vLyBkZWZhdWx0cyB0byBkb2N1bWVudFxuLy8ga2VlcFNjcmlwdHMgKG9wdGlvbmFsKTogSWYgdHJ1ZSwgd2lsbCBpbmNsdWRlIHNjcmlwdHMgcGFzc2VkIGluIHRoZSBodG1sIHN0cmluZ1xualF1ZXJ5LnBhcnNlSFRNTCA9IGZ1bmN0aW9uKCBkYXRhLCBjb250ZXh0LCBrZWVwU2NyaXB0cyApIHtcblx0aWYgKCB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblx0aWYgKCB0eXBlb2YgY29udGV4dCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0a2VlcFNjcmlwdHMgPSBjb250ZXh0O1xuXHRcdGNvbnRleHQgPSBmYWxzZTtcblx0fVxuXG5cdHZhciBiYXNlLCBwYXJzZWQsIHNjcmlwdHM7XG5cblx0aWYgKCAhY29udGV4dCApIHtcblxuXHRcdC8vIFN0b3Agc2NyaXB0cyBvciBpbmxpbmUgZXZlbnQgaGFuZGxlcnMgZnJvbSBiZWluZyBleGVjdXRlZCBpbW1lZGlhdGVseVxuXHRcdC8vIGJ5IHVzaW5nIGRvY3VtZW50LmltcGxlbWVudGF0aW9uXG5cdFx0aWYgKCBzdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCApIHtcblx0XHRcdGNvbnRleHQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoIFwiXCIgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBiYXNlIGhyZWYgZm9yIHRoZSBjcmVhdGVkIGRvY3VtZW50XG5cdFx0XHQvLyBzbyBhbnkgcGFyc2VkIGVsZW1lbnRzIHdpdGggVVJMc1xuXHRcdFx0Ly8gYXJlIGJhc2VkIG9uIHRoZSBkb2N1bWVudCdzIFVSTCAoZ2gtMjk2NSlcblx0XHRcdGJhc2UgPSBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIFwiYmFzZVwiICk7XG5cdFx0XHRiYXNlLmhyZWYgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdFx0Y29udGV4dC5oZWFkLmFwcGVuZENoaWxkKCBiYXNlICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRleHQgPSBkb2N1bWVudDtcblx0XHR9XG5cdH1cblxuXHRwYXJzZWQgPSByc2luZ2xlVGFnLmV4ZWMoIGRhdGEgKTtcblx0c2NyaXB0cyA9ICFrZWVwU2NyaXB0cyAmJiBbXTtcblxuXHQvLyBTaW5nbGUgdGFnXG5cdGlmICggcGFyc2VkICkge1xuXHRcdHJldHVybiBbIGNvbnRleHQuY3JlYXRlRWxlbWVudCggcGFyc2VkWyAxIF0gKSBdO1xuXHR9XG5cblx0cGFyc2VkID0gYnVpbGRGcmFnbWVudCggWyBkYXRhIF0sIGNvbnRleHQsIHNjcmlwdHMgKTtcblxuXHRpZiAoIHNjcmlwdHMgJiYgc2NyaXB0cy5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5KCBzY3JpcHRzICkucmVtb3ZlKCk7XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbXSwgcGFyc2VkLmNoaWxkTm9kZXMgKTtcbn07XG5cblxuLyoqXG4gKiBMb2FkIGEgdXJsIGludG8gYSBwYWdlXG4gKi9cbmpRdWVyeS5mbi5sb2FkID0gZnVuY3Rpb24oIHVybCwgcGFyYW1zLCBjYWxsYmFjayApIHtcblx0dmFyIHNlbGVjdG9yLCB0eXBlLCByZXNwb25zZSxcblx0XHRzZWxmID0gdGhpcyxcblx0XHRvZmYgPSB1cmwuaW5kZXhPZiggXCIgXCIgKTtcblxuXHRpZiAoIG9mZiA+IC0xICkge1xuXHRcdHNlbGVjdG9yID0gc3RyaXBBbmRDb2xsYXBzZSggdXJsLnNsaWNlKCBvZmYgKSApO1xuXHRcdHVybCA9IHVybC5zbGljZSggMCwgb2ZmICk7XG5cdH1cblxuXHQvLyBJZiBpdCdzIGEgZnVuY3Rpb25cblx0aWYgKCBpc0Z1bmN0aW9uKCBwYXJhbXMgKSApIHtcblxuXHRcdC8vIFdlIGFzc3VtZSB0aGF0IGl0J3MgdGhlIGNhbGxiYWNrXG5cdFx0Y2FsbGJhY2sgPSBwYXJhbXM7XG5cdFx0cGFyYW1zID0gdW5kZWZpbmVkO1xuXG5cdC8vIE90aGVyd2lzZSwgYnVpbGQgYSBwYXJhbSBzdHJpbmdcblx0fSBlbHNlIGlmICggcGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0dHlwZSA9IFwiUE9TVFwiO1xuXHR9XG5cblx0Ly8gSWYgd2UgaGF2ZSBlbGVtZW50cyB0byBtb2RpZnksIG1ha2UgdGhlIHJlcXVlc3Rcblx0aWYgKCBzZWxmLmxlbmd0aCA+IDAgKSB7XG5cdFx0alF1ZXJ5LmFqYXgoIHtcblx0XHRcdHVybDogdXJsLFxuXG5cdFx0XHQvLyBJZiBcInR5cGVcIiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHRoZW4gXCJHRVRcIiBtZXRob2Qgd2lsbCBiZSB1c2VkLlxuXHRcdFx0Ly8gTWFrZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIGV4cGxpY2l0IHNpbmNlXG5cdFx0XHQvLyB1c2VyIGNhbiBvdmVycmlkZSBpdCB0aHJvdWdoIGFqYXhTZXR1cCBtZXRob2Rcblx0XHRcdHR5cGU6IHR5cGUgfHwgXCJHRVRcIixcblx0XHRcdGRhdGFUeXBlOiBcImh0bWxcIixcblx0XHRcdGRhdGE6IHBhcmFtc1xuXHRcdH0gKS5kb25lKCBmdW5jdGlvbiggcmVzcG9uc2VUZXh0ICkge1xuXG5cdFx0XHQvLyBTYXZlIHJlc3BvbnNlIGZvciB1c2UgaW4gY29tcGxldGUgY2FsbGJhY2tcblx0XHRcdHJlc3BvbnNlID0gYXJndW1lbnRzO1xuXG5cdFx0XHRzZWxmLmh0bWwoIHNlbGVjdG9yID9cblxuXHRcdFx0XHQvLyBJZiBhIHNlbGVjdG9yIHdhcyBzcGVjaWZpZWQsIGxvY2F0ZSB0aGUgcmlnaHQgZWxlbWVudHMgaW4gYSBkdW1teSBkaXZcblx0XHRcdFx0Ly8gRXhjbHVkZSBzY3JpcHRzIHRvIGF2b2lkIElFICdQZXJtaXNzaW9uIERlbmllZCcgZXJyb3JzXG5cdFx0XHRcdGpRdWVyeSggXCI8ZGl2PlwiICkuYXBwZW5kKCBqUXVlcnkucGFyc2VIVE1MKCByZXNwb25zZVRleHQgKSApLmZpbmQoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSB1c2UgdGhlIGZ1bGwgcmVzdWx0XG5cdFx0XHRcdHJlc3BvbnNlVGV4dCApO1xuXG5cdFx0Ly8gSWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImRhdGFcIiwgXCJzdGF0dXNcIiwgXCJqcVhIUlwiXG5cdFx0Ly8gYnV0IHRoZXkgYXJlIGlnbm9yZWQgYmVjYXVzZSByZXNwb25zZSB3YXMgc2V0IGFib3ZlLlxuXHRcdC8vIElmIGl0IGZhaWxzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJqcVhIUlwiLCBcInN0YXR1c1wiLCBcImVycm9yXCJcblx0XHR9ICkuYWx3YXlzKCBjYWxsYmFjayAmJiBmdW5jdGlvbigganFYSFIsIHN0YXR1cyApIHtcblx0XHRcdHNlbGYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCB0aGlzLCByZXNwb25zZSB8fCBbIGpxWEhSLnJlc3BvbnNlVGV4dCwgc3RhdHVzLCBqcVhIUiBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5cblxuXG4vLyBBdHRhY2ggYSBidW5jaCBvZiBmdW5jdGlvbnMgZm9yIGhhbmRsaW5nIGNvbW1vbiBBSkFYIGV2ZW50c1xualF1ZXJ5LmVhY2goIFtcblx0XCJhamF4U3RhcnRcIixcblx0XCJhamF4U3RvcFwiLFxuXHRcImFqYXhDb21wbGV0ZVwiLFxuXHRcImFqYXhFcnJvclwiLFxuXHRcImFqYXhTdWNjZXNzXCIsXG5cdFwiYWpheFNlbmRcIlxuXSwgZnVuY3Rpb24oIGksIHR5cGUgKSB7XG5cdGpRdWVyeS5mblsgdHlwZSBdID0gZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlLCBmbiApO1xuXHR9O1xufSApO1xuXG5cblxuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmFuaW1hdGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiBqUXVlcnkuZ3JlcCggalF1ZXJ5LnRpbWVycywgZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiBlbGVtID09PSBmbi5lbGVtO1xuXHR9ICkubGVuZ3RoO1xufTtcblxuXG5cblxualF1ZXJ5Lm9mZnNldCA9IHtcblx0c2V0T2Zmc2V0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgaSApIHtcblx0XHR2YXIgY3VyUG9zaXRpb24sIGN1ckxlZnQsIGN1ckNTU1RvcCwgY3VyVG9wLCBjdXJPZmZzZXQsIGN1ckNTU0xlZnQsIGNhbGN1bGF0ZVBvc2l0aW9uLFxuXHRcdFx0cG9zaXRpb24gPSBqUXVlcnkuY3NzKCBlbGVtLCBcInBvc2l0aW9uXCIgKSxcblx0XHRcdGN1ckVsZW0gPSBqUXVlcnkoIGVsZW0gKSxcblx0XHRcdHByb3BzID0ge307XG5cblx0XHQvLyBTZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG5cdFx0aWYgKCBwb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiApIHtcblx0XHRcdGVsZW0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fVxuXG5cdFx0Y3VyT2Zmc2V0ID0gY3VyRWxlbS5vZmZzZXQoKTtcblx0XHRjdXJDU1NUb3AgPSBqUXVlcnkuY3NzKCBlbGVtLCBcInRvcFwiICk7XG5cdFx0Y3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwibGVmdFwiICk7XG5cdFx0Y2FsY3VsYXRlUG9zaXRpb24gPSAoIHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIiApICYmXG5cdFx0XHQoIGN1ckNTU1RvcCArIGN1ckNTU0xlZnQgKS5pbmRleE9mKCBcImF1dG9cIiApID4gLTE7XG5cblx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gY2FsY3VsYXRlIHBvc2l0aW9uIGlmIGVpdGhlclxuXHRcdC8vIHRvcCBvciBsZWZ0IGlzIGF1dG8gYW5kIHBvc2l0aW9uIGlzIGVpdGhlciBhYnNvbHV0ZSBvciBmaXhlZFxuXHRcdGlmICggY2FsY3VsYXRlUG9zaXRpb24gKSB7XG5cdFx0XHRjdXJQb3NpdGlvbiA9IGN1ckVsZW0ucG9zaXRpb24oKTtcblx0XHRcdGN1clRvcCA9IGN1clBvc2l0aW9uLnRvcDtcblx0XHRcdGN1ckxlZnQgPSBjdXJQb3NpdGlvbi5sZWZ0O1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1clRvcCA9IHBhcnNlRmxvYXQoIGN1ckNTU1RvcCApIHx8IDA7XG5cdFx0XHRjdXJMZWZ0ID0gcGFyc2VGbG9hdCggY3VyQ1NTTGVmdCApIHx8IDA7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBvcHRpb25zICkgKSB7XG5cblx0XHRcdC8vIFVzZSBqUXVlcnkuZXh0ZW5kIGhlcmUgdG8gYWxsb3cgbW9kaWZpY2F0aW9uIG9mIGNvb3JkaW5hdGVzIGFyZ3VtZW50IChnaC0xODQ4KVxuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMuY2FsbCggZWxlbSwgaSwgalF1ZXJ5LmV4dGVuZCgge30sIGN1ck9mZnNldCApICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvcHRpb25zLnRvcCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMudG9wID0gKCBvcHRpb25zLnRvcCAtIGN1ck9mZnNldC50b3AgKSArIGN1clRvcDtcblx0XHR9XG5cdFx0aWYgKCBvcHRpb25zLmxlZnQgIT0gbnVsbCApIHtcblx0XHRcdHByb3BzLmxlZnQgPSAoIG9wdGlvbnMubGVmdCAtIGN1ck9mZnNldC5sZWZ0ICkgKyBjdXJMZWZ0O1xuXHRcdH1cblxuXHRcdGlmICggXCJ1c2luZ1wiIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRvcHRpb25zLnVzaW5nLmNhbGwoIGVsZW0sIHByb3BzICk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VyRWxlbS5jc3MoIHByb3BzICk7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0Ly8gb2Zmc2V0KCkgcmVsYXRlcyBhbiBlbGVtZW50J3MgYm9yZGVyIGJveCB0byB0aGUgZG9jdW1lbnQgb3JpZ2luXG5cdG9mZnNldDogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBQcmVzZXJ2ZSBjaGFpbmluZyBmb3Igc2V0dGVyXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHRoaXMgOlxuXHRcdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRcdGpRdWVyeS5vZmZzZXQuc2V0T2Zmc2V0KCB0aGlzLCBvcHRpb25zLCBpICk7XG5cdFx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHR2YXIgcmVjdCwgd2luLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXTtcblxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiAoZGlzcGxheTogbm9uZSkgZWxlbWVudHMgKGdoLTIzMTApXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0Ly8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxuXHRcdC8vIGRpc2Nvbm5lY3RlZCBub2RlIGluIElFIHRocm93cyBhbiBlcnJvclxuXHRcdGlmICggIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblx0XHR9XG5cblx0XHQvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXG5cdFx0cmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0d2luID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuXHRcdFx0bGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0XG5cdFx0fTtcblx0fSxcblxuXHQvLyBwb3NpdGlvbigpIHJlbGF0ZXMgYW4gZWxlbWVudCdzIG1hcmdpbiBib3ggdG8gaXRzIG9mZnNldCBwYXJlbnQncyBwYWRkaW5nIGJveFxuXHQvLyBUaGlzIGNvcnJlc3BvbmRzIHRvIHRoZSBiZWhhdmlvciBvZiBDU1MgYWJzb2x1dGUgcG9zaXRpb25pbmdcblx0cG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggIXRoaXNbIDAgXSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgb2Zmc2V0UGFyZW50LCBvZmZzZXQsIGRvYyxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRwYXJlbnRPZmZzZXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG5cdFx0Ly8gcG9zaXRpb246Zml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHRoZSB2aWV3cG9ydCwgd2hpY2ggaXRzZWxmIGFsd2F5cyBoYXMgemVybyBvZmZzZXRcblx0XHRpZiAoIGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApID09PSBcImZpeGVkXCIgKSB7XG5cblx0XHRcdC8vIEFzc3VtZSBwb3NpdGlvbjpmaXhlZCBpbXBsaWVzIGF2YWlsYWJpbGl0eSBvZiBnZXRCb3VuZGluZ0NsaWVudFJlY3Rcblx0XHRcdG9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0b2Zmc2V0ID0gdGhpcy5vZmZzZXQoKTtcblxuXHRcdFx0Ly8gQWNjb3VudCBmb3IgdGhlICpyZWFsKiBvZmZzZXQgcGFyZW50LCB3aGljaCBjYW4gYmUgdGhlIGRvY3VtZW50IG9yIGl0cyByb290IGVsZW1lbnRcblx0XHRcdC8vIHdoZW4gYSBzdGF0aWNhbGx5IHBvc2l0aW9uZWQgZWxlbWVudCBpcyBpZGVudGlmaWVkXG5cdFx0XHRkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cdFx0XHRvZmZzZXRQYXJlbnQgPSBlbGVtLm9mZnNldFBhcmVudCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXHRcdFx0d2hpbGUgKCBvZmZzZXRQYXJlbnQgJiZcblx0XHRcdFx0KCBvZmZzZXRQYXJlbnQgPT09IGRvYy5ib2R5IHx8IG9mZnNldFBhcmVudCA9PT0gZG9jLmRvY3VtZW50RWxlbWVudCApICYmXG5cdFx0XHRcdGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiICkgPT09IFwic3RhdGljXCIgKSB7XG5cblx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50LnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQgIT09IGVsZW0gJiYgb2Zmc2V0UGFyZW50Lm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdC8vIEluY29ycG9yYXRlIGJvcmRlcnMgaW50byBpdHMgb2Zmc2V0LCBzaW5jZSB0aGV5IGFyZSBvdXRzaWRlIGl0cyBjb250ZW50IG9yaWdpblxuXHRcdFx0XHRwYXJlbnRPZmZzZXQgPSBqUXVlcnkoIG9mZnNldFBhcmVudCApLm9mZnNldCgpO1xuXHRcdFx0XHRwYXJlbnRPZmZzZXQudG9wICs9IGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJib3JkZXJUb3BXaWR0aFwiLCB0cnVlICk7XG5cdFx0XHRcdHBhcmVudE9mZnNldC5sZWZ0ICs9IGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgdHJ1ZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luVG9wXCIsIHRydWUgKSxcblx0XHRcdGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpbkxlZnRcIiwgdHJ1ZSApXG5cdFx0fTtcblx0fSxcblxuXHQvLyBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBkb2N1bWVudEVsZW1lbnQgaW4gdGhlIGZvbGxvd2luZyBjYXNlczpcblx0Ly8gMSkgRm9yIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgaWZyYW1lIHdpdGhvdXQgb2Zmc2V0UGFyZW50LCB0aGlzIG1ldGhvZCB3aWxsIHJldHVyblxuXHQvLyAgICBkb2N1bWVudEVsZW1lbnQgb2YgdGhlIHBhcmVudCB3aW5kb3dcblx0Ly8gMikgRm9yIHRoZSBoaWRkZW4gb3IgZGV0YWNoZWQgZWxlbWVudFxuXHQvLyAzKSBGb3IgYm9keSBvciBodG1sIGVsZW1lbnQsIGkuZS4gaW4gY2FzZSBvZiB0aGUgaHRtbCBub2RlIC0gaXQgd2lsbCByZXR1cm4gaXRzZWxmXG5cdC8vXG5cdC8vIGJ1dCB0aG9zZSBleGNlcHRpb25zIHdlcmUgbmV2ZXIgcHJlc2VudGVkIGFzIGEgcmVhbCBsaWZlIHVzZS1jYXNlc1xuXHQvLyBhbmQgbWlnaHQgYmUgY29uc2lkZXJlZCBhcyBtb3JlIHByZWZlcmFibGUgcmVzdWx0cy5cblx0Ly9cblx0Ly8gVGhpcyBsb2dpYywgaG93ZXZlciwgaXMgbm90IGd1YXJhbnRlZWQgYW5kIGNhbiBjaGFuZ2UgYXQgYW55IHBvaW50IGluIHRoZSBmdXR1cmVcblx0b2Zmc2V0UGFyZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50O1xuXG5cdFx0XHR3aGlsZSAoIG9mZnNldFBhcmVudCAmJiBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwicG9zaXRpb25cIiApID09PSBcInN0YXRpY1wiICkge1xuXHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50RWxlbWVudDtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuLy8gQ3JlYXRlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcCBtZXRob2RzXG5qUXVlcnkuZWFjaCggeyBzY3JvbGxMZWZ0OiBcInBhZ2VYT2Zmc2V0XCIsIHNjcm9sbFRvcDogXCJwYWdlWU9mZnNldFwiIH0sIGZ1bmN0aW9uKCBtZXRob2QsIHByb3AgKSB7XG5cdHZhciB0b3AgPSBcInBhZ2VZT2Zmc2V0XCIgPT09IHByb3A7XG5cblx0alF1ZXJ5LmZuWyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG1ldGhvZCwgdmFsICkge1xuXG5cdFx0XHQvLyBDb2FsZXNjZSBkb2N1bWVudHMgYW5kIHdpbmRvd3Ncblx0XHRcdHZhciB3aW47XG5cdFx0XHRpZiAoIGlzV2luZG93KCBlbGVtICkgKSB7XG5cdFx0XHRcdHdpbiA9IGVsZW07XG5cdFx0XHR9IGVsc2UgaWYgKCBlbGVtLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR3aW4gPSBlbGVtLmRlZmF1bHRWaWV3O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gd2luID8gd2luWyBwcm9wIF0gOiBlbGVtWyBtZXRob2QgXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB3aW4gKSB7XG5cdFx0XHRcdHdpbi5zY3JvbGxUbyhcblx0XHRcdFx0XHQhdG9wID8gdmFsIDogd2luLnBhZ2VYT2Zmc2V0LFxuXHRcdFx0XHRcdHRvcCA/IHZhbCA6IHdpbi5wYWdlWU9mZnNldFxuXHRcdFx0XHQpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtWyBtZXRob2QgXSA9IHZhbDtcblx0XHRcdH1cblx0XHR9LCBtZXRob2QsIHZhbCwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9O1xufSApO1xuXG4vLyBTdXBwb3J0OiBTYWZhcmkgPD03IC0gOS4xLCBDaHJvbWUgPD0zNyAtIDQ5XG4vLyBBZGQgdGhlIHRvcC9sZWZ0IGNzc0hvb2tzIHVzaW5nIGpRdWVyeS5mbi5wb3NpdGlvblxuLy8gV2Via2l0IGJ1ZzogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MDg0XG4vLyBCbGluayBidWc6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTU4OTM0N1xuLy8gZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIHBlcmNlbnQgd2hlbiBzcGVjaWZpZWQgZm9yIHRvcC9sZWZ0L2JvdHRvbS9yaWdodDtcbi8vIHJhdGhlciB0aGFuIG1ha2UgdGhlIGNzcyBtb2R1bGUgZGVwZW5kIG9uIHRoZSBvZmZzZXQgbW9kdWxlLCBqdXN0IGNoZWNrIGZvciBpdCBoZXJlXG5qUXVlcnkuZWFjaCggWyBcInRvcFwiLCBcImxlZnRcIiBdLCBmdW5jdGlvbiggaSwgcHJvcCApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBwcm9wIF0gPSBhZGRHZXRIb29rSWYoIHN1cHBvcnQucGl4ZWxQb3NpdGlvbixcblx0XHRmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdFx0XHRjb21wdXRlZCA9IGN1ckNTUyggZWxlbSwgcHJvcCApO1xuXG5cdFx0XHRcdC8vIElmIGN1ckNTUyByZXR1cm5zIHBlcmNlbnRhZ2UsIGZhbGxiYWNrIHRvIG9mZnNldFxuXHRcdFx0XHRyZXR1cm4gcm51bW5vbnB4LnRlc3QoIGNvbXB1dGVkICkgP1xuXHRcdFx0XHRcdGpRdWVyeSggZWxlbSApLnBvc2l0aW9uKClbIHByb3AgXSArIFwicHhcIiA6XG5cdFx0XHRcdFx0Y29tcHV0ZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHQpO1xufSApO1xuXG5cbi8vIENyZWF0ZSBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCwgaGVpZ2h0LCB3aWR0aCwgb3V0ZXJIZWlnaHQgYW5kIG91dGVyV2lkdGggbWV0aG9kc1xualF1ZXJ5LmVhY2goIHsgSGVpZ2h0OiBcImhlaWdodFwiLCBXaWR0aDogXCJ3aWR0aFwiIH0sIGZ1bmN0aW9uKCBuYW1lLCB0eXBlICkge1xuXHRqUXVlcnkuZWFjaCggeyBwYWRkaW5nOiBcImlubmVyXCIgKyBuYW1lLCBjb250ZW50OiB0eXBlLCBcIlwiOiBcIm91dGVyXCIgKyBuYW1lIH0sXG5cdFx0ZnVuY3Rpb24oIGRlZmF1bHRFeHRyYSwgZnVuY05hbWUgKSB7XG5cblx0XHQvLyBNYXJnaW4gaXMgb25seSBmb3Igb3V0ZXJIZWlnaHQsIG91dGVyV2lkdGhcblx0XHRqUXVlcnkuZm5bIGZ1bmNOYW1lIF0gPSBmdW5jdGlvbiggbWFyZ2luLCB2YWx1ZSApIHtcblx0XHRcdHZhciBjaGFpbmFibGUgPSBhcmd1bWVudHMubGVuZ3RoICYmICggZGVmYXVsdEV4dHJhIHx8IHR5cGVvZiBtYXJnaW4gIT09IFwiYm9vbGVhblwiICksXG5cdFx0XHRcdGV4dHJhID0gZGVmYXVsdEV4dHJhIHx8ICggbWFyZ2luID09PSB0cnVlIHx8IHZhbHVlID09PSB0cnVlID8gXCJtYXJnaW5cIiA6IFwiYm9yZGVyXCIgKTtcblxuXHRcdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIHR5cGUsIHZhbHVlICkge1xuXHRcdFx0XHR2YXIgZG9jO1xuXG5cdFx0XHRcdGlmICggaXNXaW5kb3coIGVsZW0gKSApIHtcblxuXHRcdFx0XHRcdC8vICQoIHdpbmRvdyApLm91dGVyV2lkdGgvSGVpZ2h0IHJldHVybiB3L2ggaW5jbHVkaW5nIHNjcm9sbGJhcnMgKGdoLTE3MjkpXG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmNOYW1lLmluZGV4T2YoIFwib3V0ZXJcIiApID09PSAwID9cblx0XHRcdFx0XHRcdGVsZW1bIFwiaW5uZXJcIiArIG5hbWUgXSA6XG5cdFx0XHRcdFx0XHRlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFsgXCJjbGllbnRcIiArIG5hbWUgXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEdldCBkb2N1bWVudCB3aWR0aCBvciBoZWlnaHRcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdGRvYyA9IGVsZW0uZG9jdW1lbnRFbGVtZW50O1xuXG5cdFx0XHRcdFx0Ly8gRWl0aGVyIHNjcm9sbFtXaWR0aC9IZWlnaHRdIG9yIG9mZnNldFtXaWR0aC9IZWlnaHRdIG9yIGNsaWVudFtXaWR0aC9IZWlnaHRdLFxuXHRcdFx0XHRcdC8vIHdoaWNoZXZlciBpcyBncmVhdGVzdFxuXHRcdFx0XHRcdHJldHVybiBNYXRoLm1heChcblx0XHRcdFx0XHRcdGVsZW0uYm9keVsgXCJzY3JvbGxcIiArIG5hbWUgXSwgZG9jWyBcInNjcm9sbFwiICsgbmFtZSBdLFxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcIm9mZnNldFwiICsgbmFtZSBdLCBkb2NbIFwib2Zmc2V0XCIgKyBuYW1lIF0sXG5cdFx0XHRcdFx0XHRkb2NbIFwiY2xpZW50XCIgKyBuYW1lIF1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuXG5cdFx0XHRcdFx0Ly8gR2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudCwgcmVxdWVzdGluZyBidXQgbm90IGZvcmNpbmcgcGFyc2VGbG9hdFxuXHRcdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIHR5cGUsIGV4dHJhICkgOlxuXG5cdFx0XHRcdFx0Ly8gU2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudFxuXHRcdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgdHlwZSwgdmFsdWUsIGV4dHJhICk7XG5cdFx0XHR9LCB0eXBlLCBjaGFpbmFibGUgPyBtYXJnaW4gOiB1bmRlZmluZWQsIGNoYWluYWJsZSApO1xuXHRcdH07XG5cdH0gKTtcbn0gKTtcblxuXG5qUXVlcnkuZWFjaCggKCBcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIFwiICtcblx0XCJtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBcIiArXG5cdFwiY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiICkuc3BsaXQoIFwiIFwiICksXG5cdGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXG5cdC8vIEhhbmRsZSBldmVudCBiaW5kaW5nXG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMCA/XG5cdFx0XHR0aGlzLm9uKCBuYW1lLCBudWxsLCBkYXRhLCBmbiApIDpcblx0XHRcdHRoaXMudHJpZ2dlciggbmFtZSApO1xuXHR9O1xufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGhvdmVyOiBmdW5jdGlvbiggZm5PdmVyLCBmbk91dCApIHtcblx0XHRyZXR1cm4gdGhpcy5tb3VzZWVudGVyKCBmbk92ZXIgKS5tb3VzZWxlYXZlKCBmbk91dCB8fCBmbk92ZXIgKTtcblx0fVxufSApO1xuXG5cblxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0YmluZDogZnVuY3Rpb24oIHR5cGVzLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZXMsIG51bGwsIGRhdGEsIGZuICk7XG5cdH0sXG5cdHVuYmluZDogZnVuY3Rpb24oIHR5cGVzLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vZmYoIHR5cGVzLCBudWxsLCBmbiApO1xuXHR9LFxuXG5cdGRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApO1xuXHR9LFxuXHR1bmRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBmbiApIHtcblxuXHRcdC8vICggbmFtZXNwYWNlICkgb3IgKCBzZWxlY3RvciwgdHlwZXMgWywgZm5dIClcblx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/XG5cdFx0XHR0aGlzLm9mZiggc2VsZWN0b3IsIFwiKipcIiApIDpcblx0XHRcdHRoaXMub2ZmKCB0eXBlcywgc2VsZWN0b3IgfHwgXCIqKlwiLCBmbiApO1xuXHR9XG59ICk7XG5cbi8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQsIG9wdGlvbmFsbHkgcGFydGlhbGx5IGFwcGx5aW5nIGFueVxuLy8gYXJndW1lbnRzLlxuLy8galF1ZXJ5LnByb3h5IGlzIGRlcHJlY2F0ZWQgdG8gcHJvbW90ZSBzdGFuZGFyZHMgKHNwZWNpZmljYWxseSBGdW5jdGlvbiNiaW5kKVxuLy8gSG93ZXZlciwgaXQgaXMgbm90IHNsYXRlZCBmb3IgcmVtb3ZhbCBhbnkgdGltZSBzb29uXG5qUXVlcnkucHJveHkgPSBmdW5jdGlvbiggZm4sIGNvbnRleHQgKSB7XG5cdHZhciB0bXAsIGFyZ3MsIHByb3h5O1xuXG5cdGlmICggdHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0dG1wID0gZm5bIGNvbnRleHQgXTtcblx0XHRjb250ZXh0ID0gZm47XG5cdFx0Zm4gPSB0bXA7XG5cdH1cblxuXHQvLyBRdWljayBjaGVjayB0byBkZXRlcm1pbmUgaWYgdGFyZ2V0IGlzIGNhbGxhYmxlLCBpbiB0aGUgc3BlY1xuXHQvLyB0aGlzIHRocm93cyBhIFR5cGVFcnJvciwgYnV0IHdlIHdpbGwganVzdCByZXR1cm4gdW5kZWZpbmVkLlxuXHRpZiAoICFpc0Z1bmN0aW9uKCBmbiApICkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvLyBTaW11bGF0ZWQgYmluZFxuXHRhcmdzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzLCAyICk7XG5cdHByb3h5ID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGZuLmFwcGx5KCBjb250ZXh0IHx8IHRoaXMsIGFyZ3MuY29uY2F0KCBzbGljZS5jYWxsKCBhcmd1bWVudHMgKSApICk7XG5cdH07XG5cblx0Ly8gU2V0IHRoZSBndWlkIG9mIHVuaXF1ZSBoYW5kbGVyIHRvIHRoZSBzYW1lIG9mIG9yaWdpbmFsIGhhbmRsZXIsIHNvIGl0IGNhbiBiZSByZW1vdmVkXG5cdHByb3h5Lmd1aWQgPSBmbi5ndWlkID0gZm4uZ3VpZCB8fCBqUXVlcnkuZ3VpZCsrO1xuXG5cdHJldHVybiBwcm94eTtcbn07XG5cbmpRdWVyeS5ob2xkUmVhZHkgPSBmdW5jdGlvbiggaG9sZCApIHtcblx0aWYgKCBob2xkICkge1xuXHRcdGpRdWVyeS5yZWFkeVdhaXQrKztcblx0fSBlbHNlIHtcblx0XHRqUXVlcnkucmVhZHkoIHRydWUgKTtcblx0fVxufTtcbmpRdWVyeS5pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmpRdWVyeS5wYXJzZUpTT04gPSBKU09OLnBhcnNlO1xualF1ZXJ5Lm5vZGVOYW1lID0gbm9kZU5hbWU7XG5qUXVlcnkuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5qUXVlcnkuaXNXaW5kb3cgPSBpc1dpbmRvdztcbmpRdWVyeS5jYW1lbENhc2UgPSBjYW1lbENhc2U7XG5qUXVlcnkudHlwZSA9IHRvVHlwZTtcblxualF1ZXJ5Lm5vdyA9IERhdGUubm93O1xuXG5qUXVlcnkuaXNOdW1lcmljID0gZnVuY3Rpb24oIG9iaiApIHtcblxuXHQvLyBBcyBvZiBqUXVlcnkgMy4wLCBpc051bWVyaWMgaXMgbGltaXRlZCB0b1xuXHQvLyBzdHJpbmdzIGFuZCBudW1iZXJzIChwcmltaXRpdmVzIG9yIG9iamVjdHMpXG5cdC8vIHRoYXQgY2FuIGJlIGNvZXJjZWQgdG8gZmluaXRlIG51bWJlcnMgKGdoLTI2NjIpXG5cdHZhciB0eXBlID0galF1ZXJ5LnR5cGUoIG9iaiApO1xuXHRyZXR1cm4gKCB0eXBlID09PSBcIm51bWJlclwiIHx8IHR5cGUgPT09IFwic3RyaW5nXCIgKSAmJlxuXG5cdFx0Ly8gcGFyc2VGbG9hdCBOYU5zIG51bWVyaWMtY2FzdCBmYWxzZSBwb3NpdGl2ZXMgKFwiXCIpXG5cdFx0Ly8gLi4uYnV0IG1pc2ludGVycHJldHMgbGVhZGluZy1udW1iZXIgc3RyaW5ncywgcGFydGljdWxhcmx5IGhleCBsaXRlcmFscyAoXCIweC4uLlwiKVxuXHRcdC8vIHN1YnRyYWN0aW9uIGZvcmNlcyBpbmZpbml0aWVzIHRvIE5hTlxuXHRcdCFpc05hTiggb2JqIC0gcGFyc2VGbG9hdCggb2JqICkgKTtcbn07XG5cblxuXG5cbi8vIFJlZ2lzdGVyIGFzIGEgbmFtZWQgQU1EIG1vZHVsZSwgc2luY2UgalF1ZXJ5IGNhbiBiZSBjb25jYXRlbmF0ZWQgd2l0aCBvdGhlclxuLy8gZmlsZXMgdGhhdCBtYXkgdXNlIGRlZmluZSwgYnV0IG5vdCB2aWEgYSBwcm9wZXIgY29uY2F0ZW5hdGlvbiBzY3JpcHQgdGhhdFxuLy8gdW5kZXJzdGFuZHMgYW5vbnltb3VzIEFNRCBtb2R1bGVzLiBBIG5hbWVkIEFNRCBpcyBzYWZlc3QgYW5kIG1vc3Qgcm9idXN0XG4vLyB3YXkgdG8gcmVnaXN0ZXIuIExvd2VyY2FzZSBqcXVlcnkgaXMgdXNlZCBiZWNhdXNlIEFNRCBtb2R1bGUgbmFtZXMgYXJlXG4vLyBkZXJpdmVkIGZyb20gZmlsZSBuYW1lcywgYW5kIGpRdWVyeSBpcyBub3JtYWxseSBkZWxpdmVyZWQgaW4gYSBsb3dlcmNhc2Vcbi8vIGZpbGUgbmFtZS4gRG8gdGhpcyBhZnRlciBjcmVhdGluZyB0aGUgZ2xvYmFsIHNvIHRoYXQgaWYgYW4gQU1EIG1vZHVsZSB3YW50c1xuLy8gdG8gY2FsbCBub0NvbmZsaWN0IHRvIGhpZGUgdGhpcyB2ZXJzaW9uIG9mIGpRdWVyeSwgaXQgd2lsbCB3b3JrLlxuXG4vLyBOb3RlIHRoYXQgZm9yIG1heGltdW0gcG9ydGFiaWxpdHksIGxpYnJhcmllcyB0aGF0IGFyZSBub3QgalF1ZXJ5IHNob3VsZFxuLy8gZGVjbGFyZSB0aGVtc2VsdmVzIGFzIGFub255bW91cyBtb2R1bGVzLCBhbmQgYXZvaWQgc2V0dGluZyBhIGdsb2JhbCBpZiBhblxuLy8gQU1EIGxvYWRlciBpcyBwcmVzZW50LiBqUXVlcnkgaXMgYSBzcGVjaWFsIGNhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcmJ1cmtlL3JlcXVpcmVqcy93aWtpL1VwZGF0aW5nLWV4aXN0aW5nLWxpYnJhcmllcyN3aWtpLWFub25cblxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblx0ZGVmaW5lKCBcImpxdWVyeVwiLCBbXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGpRdWVyeTtcblx0fSApO1xufVxuXG5cblxuXG52YXJcblxuXHQvLyBNYXAgb3ZlciBqUXVlcnkgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0X2pRdWVyeSA9IHdpbmRvdy5qUXVlcnksXG5cblx0Ly8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0XyQgPSB3aW5kb3cuJDtcblxualF1ZXJ5Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiggZGVlcCApIHtcblx0aWYgKCB3aW5kb3cuJCA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy4kID0gXyQ7XG5cdH1cblxuXHRpZiAoIGRlZXAgJiYgd2luZG93LmpRdWVyeSA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy5qUXVlcnkgPSBfalF1ZXJ5O1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeTtcbn07XG5cbi8vIEV4cG9zZSBqUXVlcnkgYW5kICQgaWRlbnRpZmllcnMsIGV2ZW4gaW4gQU1EXG4vLyAoIzcxMDIjY29tbWVudDoxMCwgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvcHVsbC81NTcpXG4vLyBhbmQgQ29tbW9uSlMgZm9yIGJyb3dzZXIgZW11bGF0b3JzICgjMTM1NjYpXG5pZiAoICFub0dsb2JhbCApIHtcblx0d2luZG93LmpRdWVyeSA9IHdpbmRvdy4kID0galF1ZXJ5O1xufVxuXG5cblxuXG5yZXR1cm4galF1ZXJ5O1xufSApO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJCgnLnRoaXMtY2xhc3MnKS5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnNvbGUubG9nKGV2dCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
