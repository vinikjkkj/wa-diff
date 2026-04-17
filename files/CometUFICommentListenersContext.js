__d(
  "CometUFICommentListenersContext",
  ["FBLogger", "XPlatReactEventEmitter", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = new (r("XPlatReactEventEmitter"))(),
      f = s.createContext({
        getEmitter: function (t, n) {
          return (
            r("FBLogger")("ufi2").mustfix(
              "Context not setup correctly for CometUFICommentListenersContext using global emitter for " +
                n +
                ", this is not supported please contact the ufight_club oncall to chat about your use case",
              "ufi2",
            ),
            _
          );
        },
        isInitialized: !1,
      });
    function g(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        a = c(f),
        i = p(null),
        l;
      e: {
        if (a.isInitialized === !0) {
          l = a;
          break e;
        }
        var u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
          var d = function () {
              return (i.current == null && (i.current = new Map()), i.current);
            },
            m = function (t) {
              var e,
                n = d(),
                o =
                  (e = n.get(t)) != null
                    ? e
                    : new (r("XPlatReactEventEmitter"))();
              return (n.set(t, o), o);
            };
          ((u = { getEmitter: m, isInitialized: !0 }), (t[0] = u));
        } else u = t[0];
        l = u;
      }
      var _ = l,
        g;
      return (
        t[1] !== _ || t[2] !== n
          ? ((g = s.jsx(f.Provider, { value: _, children: n })),
            (t[1] = _),
            (t[2] = n),
            (t[3] = g))
          : (g = t[3]),
        g
      );
    }
    function h(e, t, n) {
      var r = o("react-compiler-runtime").c(6),
        a = c(f),
        i = a.getEmitter,
        l,
        s;
      (r[0] !== n || r[1] !== e || r[2] !== i || r[3] !== t
        ? ((l = function () {
            if (
              e != null &&
              n !==
                "IM_SORRY_ITS_NULL_FOR_SOME_REASON_AND_THIS_SHOULD_REALLY_NEVER_HAPPEN"
            ) {
              var r = i(e, n),
                o = r.addListener("comment_create", t);
              return function () {
                o.remove();
              };
            }
          }),
          (s = [e, t, i, n]),
          (r[0] = n),
          (r[1] = e),
          (r[2] = i),
          (r[3] = t),
          (r[4] = l),
          (r[5] = s))
        : ((l = r[4]), (s = r[5])),
        d(l, s));
    }
    function y(e, t, n) {
      var r = o("react-compiler-runtime").c(6),
        a = c(f),
        i = a.getEmitter,
        l,
        s;
      (r[0] !== n || r[1] !== e || r[2] !== i || r[3] !== t
        ? ((l = function () {
            if (e != null) {
              var r = i(e, n),
                o = r.addListener("comments_expand", t);
              return function () {
                o.remove();
              };
            }
          }),
          (s = [e, t, i, n]),
          (r[0] = n),
          (r[1] = e),
          (r[2] = i),
          (r[3] = t),
          (r[4] = l),
          (r[5] = s))
        : ((l = r[4]), (s = r[5])),
        d(l, s));
    }
    function C(e, t, n) {
      var r = o("react-compiler-runtime").c(6),
        a = c(f),
        i = a.getEmitter,
        l,
        s;
      (r[0] !== n || r[1] !== e || r[2] !== i || r[3] !== t
        ? ((l = function () {
            if (e != null) {
              var r = i(e, n),
                o = r.addListener("comments_pagination", t);
              return function () {
                o.remove();
              };
            }
          }),
          (s = [e, t, i, n]),
          (r[0] = n),
          (r[1] = e),
          (r[2] = i),
          (r[3] = t),
          (r[4] = l),
          (r[5] = s))
        : ((l = r[4]), (s = r[5])),
        d(l, s));
    }
    function b(e, t, n) {
      var r = o("react-compiler-runtime").c(6),
        a = c(f),
        i = a.getEmitter,
        l,
        s;
      (r[0] !== n || r[1] !== e || r[2] !== i || r[3] !== t
        ? ((l = function () {
            if (e != null) {
              var r = i(e, n),
                o = r.addListener("comments_collapse", t);
              return function () {
                o.remove();
              };
            }
          }),
          (s = [e, t, i, n]),
          (r[0] = n),
          (r[1] = e),
          (r[2] = i),
          (r[3] = t),
          (r[4] = l),
          (r[5] = s))
        : ((l = r[4]), (s = r[5])),
        d(l, s));
    }
    ((l.CometUFICommentListenersContext = f),
      (l.CometUFICommentListenersContextProvider = g),
      (l.useCometUFIOnCommentCreate = h),
      (l.useCometUFIOnCommentsExpanded = y),
      (l.useCometUFIOnCommentsPaginated = C),
      (l.useCometUFIOnCommentsCollapsed = b));
  },
  98,
);
