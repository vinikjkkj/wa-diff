__d(
  "WAWebEmojiPanelContentSectionScrollList.react",
  [
    "cx",
    "fbt",
    "Promise",
    "WAMemoizeOne",
    "WAPromiseDelays",
    "WAWebClassnames",
    "WAWebEmojiPanelContentEmojiRow.react",
    "WAWebEmojiPanelEmojiCategories",
    "WAWebEmojiPanelEmojiSections",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebNoop",
    "WAWebPanelsDisplayLocation",
    "WAWebVelocityAnimate",
    "WDSText.react",
    "chunkArray",
    "compactMap",
    "cr:5990",
    "err",
    "gkx",
    "react",
    "useLazyRef",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useImperativeHandle,
      h = _.useRef,
      y = n("cr:5990") == null ? void 0 : n("cr:5990").EmojiSearchEmpty,
      C = n("cr:5990") == null ? void 0 : n("cr:5990").EmojiSearchEmptyType,
      b = 62,
      v = 38,
      S =
        ((c = {}),
        (c[o("WAWebEmojiPanelEmojiSections").SECTIONS.SEARCH_RESULT] =
          function () {
            throw r("err")("Search results should not be shown with a title.");
          }),
        (c[o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT] = function () {
          return u._(/*BTDS*/ "Recent");
        }),
        (c[o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT_REACTIONS] =
          function () {
            return u._(/*BTDS*/ "Recent reactions");
          }),
        (c[r("WAWebEmojiPanelEmojiCategories").SMILEYS_PEOPLE] = function () {
          return u._(/*BTDS*/ "Smileys & People");
        }),
        (c[r("WAWebEmojiPanelEmojiCategories").ANIMALS_NATURE] = function () {
          return u._(/*BTDS*/ "Animals & Nature");
        }),
        (c[r("WAWebEmojiPanelEmojiCategories").FOOD_DRINK] = function () {
          return u._(/*BTDS*/ "Food & Drink");
        }),
        (c[r("WAWebEmojiPanelEmojiCategories").ACTIVITY] = function () {
          return u._(/*BTDS*/ "Activity");
        }),
        (c[r("WAWebEmojiPanelEmojiCategories").TRAVEL_PLACES] = function () {
          return u._(/*BTDS*/ "Travel & Places");
        }),
        (c[r("WAWebEmojiPanelEmojiCategories").OBJECTS] = function () {
          return u._(/*BTDS*/ "Objects");
        }),
        (c[r("WAWebEmojiPanelEmojiCategories").SYMBOLS] = function () {
          return u._(/*BTDS*/ "Symbols");
        }),
        (c[r("WAWebEmojiPanelEmojiCategories").FLAGS] = function () {
          return u._(/*BTDS*/ "Flags");
        }),
        c),
      R = 6,
      L = 3;
    function E(e) {
      var t = e.displayLocation,
        n = e.focusAbove,
        a = e.focusBelow,
        i = e.numColumns,
        l = e.onEmoji,
        s = e.onEmojiFocus,
        u = e.onRef,
        c = e.row;
      switch (c.kind) {
        case "title":
          return p.jsx("div", {
            className: "x1xrf6ya x12xbjc7 xdx6fka xvtqlqk",
            children: p.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              children: c.title,
            }),
          });
        case "emojis":
          return p.jsx(o("WAWebEmojiPanelContentEmojiRow.react").EmojiRow, {
            emojis: c.emojis,
            focusAbove: n,
            focusBelow: a,
            numColumns: i,
            onEmoji: l,
            onEmojiFocus: s,
            ref: u,
            allowVariantPrompt:
              c.sectionId !== o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT,
            displayLocation: t,
          });
        default:
          throw (c.kind, r("err")("Invalid row kind: " + c.kind));
      }
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(t) {
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.data,
        u = l.displayLocation,
        c = l.initialScrollTop,
        m = l.onEmoji,
        _ = l.onEmojiFocus,
        R = l.onFocusUp,
        k = l.onScroll,
        I = l.onSection,
        x = l.searchInputVisible,
        $ = l.showTitles,
        P = l.targetWindow,
        N = l.width,
        M = r("useLazyRef")(function () {
          return new Map();
        }),
        w = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        A = h(null),
        F = h(null),
        O = h(null),
        B = function (t) {
          var e = O.current;
          e && _(t, e);
        },
        W = function () {
          return D(N);
        },
        q = r("WAMemoizeOne")(function (e) {
          var t = b,
            n = {},
            a = [];
          return (
            e.data.forEach(function (i, l) {
              var c = i.emojis,
                d = i.sectionId,
                m = 0,
                p = t;
              if (c.length !== 0) {
                e.showTitles &&
                  (a.push({
                    kind: "title",
                    itemKey: "section_" + d + "_title",
                    index: a.length,
                    title: S[d](),
                    sectionId: d,
                    height: v,
                    offsetTop: t,
                  }),
                  (m += v),
                  (t += v));
                var _ = r("chunkArray")(c, e.numColumns),
                  f = l === s.length - 1;
                (_.forEach(function (e, n) {
                  var r = n === _.length - 1,
                    i =
                      r && !f
                        ? o("WAWebEmojiPanelContentEmojiRow.react")
                            .EMOJI_HEIGHT + 12
                        : o("WAWebEmojiPanelContentEmojiRow.react")
                            .EMOJI_HEIGHT;
                  (u ===
                    o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions &&
                    (i += 6),
                    a.push({
                      kind: "emojis",
                      itemKey: "section_" + d + "_emoji_" + n,
                      index: a.length,
                      emojis: e,
                      sectionId: d,
                      height: i,
                      offsetTop: t,
                    }),
                    (m += i),
                    (t += i));
                }),
                  (n[d] = { height: m, offsetTop: p }));
              }
            }),
            { rows: a, sectionData: n }
          );
        }),
        U = function () {
          return q({ numColumns: W(), data: s, showTitles: $ });
        },
        V = function (t) {
          var e = U(),
            n = e.rows;
          return r("compactMap")(n, function (e) {
            return e.kind === "emojis" ? e : null;
          }).find(function (e) {
            return e.offsetTop + e.height > t;
          });
        },
        H = function () {
          return x ? b : 0;
        },
        G = function (t) {
          var e = V(t + H());
          if (e) return e.sectionId;
        },
        z = function () {
          if (((F.current = null), !!O.current)) {
            var e = O.current.scrollTop;
            k == null || k(e);
            var t = G(e);
            t && (I == null || I(t));
          }
        },
        j = function (t) {
          F.current ||
            (F.current = (P != null ? P : window).requestAnimationFrame(z));
        },
        K = function (t, n, r) {
          var e = U(),
            o = e.rows,
            a = T(o, t, n);
          if (a) {
            var i = M.current.get(a.itemKey);
            i && i.focusEmojiAt(r);
          }
        },
        Q = function (t) {
          if (O.current) {
            var e = O.current.scrollTop + t,
              n = V(e);
            if (n) {
              var r = M.current.get(n.itemKey);
              return r;
            }
          }
        },
        X = function (t) {
          var e = Q(t || 0);
          e && e.focusEmojiAt(0);
        },
        Y = function (t, a) {
          var e = a || 0,
            i = O.current;
          if (!i) return (d || (d = n("Promise"))).resolve();
          var l = U(),
            s = l.sectionData,
            u = s[t];
          if (!u) return (d || (d = n("Promise"))).resolve();
          var c = u.offsetTop;
          if (i.scrollTop === c) return (d || (d = n("Promise"))).resolve();
          if (A.current) {
            if (A.current.sectionId === t) return A.current.promise;
            r("WAWebVelocityAnimate")(A.current.scrollTarget, "stop");
          }
          if (i.scrollTop === c) return (d || (d = n("Promise"))).resolve();
          var m = document.createElement("div");
          ((m.style.position = "absolute"),
            (m.style.top = c + e + "px"),
            (m.style.left = "0px"),
            i.appendChild(m));
          var p = r("WAWebVelocityAnimate")(m, "scroll", {
            container: i,
            duration: 300,
            easing: [0.99, 0.13, 0.13, 0.99],
          })
            .then(r("WAWebNoop"))
            .then(function () {
              return o("WAPromiseDelays").delayMs(100);
            });
          return (
            (A.current = { promise: p, sectionId: t, scrollTarget: m }),
            p.finally(function () {
              var e;
              (i.removeChild(m),
                ((e = A.current) == null ? void 0 : e.promise) === p &&
                  (A.current = null));
            }),
            p
          );
        },
        J = function () {
          O.current && (O.current.scrollTop = 0);
        },
        Z = function (t) {
          var e = Q(t || 0);
          e && e.selectFirstEmoji();
        };
      (g(i, function () {
        return {
          focusFirstVisibleEmoji: X,
          scrollToSection: Y,
          scrollToTop: J,
          selectFirstVisibleEmoji: Z,
        };
      }),
        f(function () {
          (O.current && O.current.scrollTop !== c && (O.current.scrollTop = c),
            U());
        }, []));
      var ee = U(),
        te = ee.rows,
        ne = Math.min(te.length, L);
      if (!r("gkx")("26258") && te.length === 0 && y != null && C != null) {
        var re,
          oe =
            u === o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox
              ? C.SHORTCUT_TIP
              : C.DEFAULT;
        return p.jsx("div", {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((re = {}), (re._ak1b = !0), re),
          ),
          children: p.jsx(y, { emojiSearchEmptyType: oe }),
        });
      }
      var ae;
      return (
        (l.onScroll || l.onSection) && (ae = j),
        p.jsx(r("WAWebFlatListContainer.react"), {
          onScroll: ae,
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((a = {}), (a._ak1b = !0), a),
          ),
          ref: O,
          flatListControllers: [w.current],
          children: p.jsx(o("WAWebFlatList.react").FlatList, {
            data: te,
            reorderAnimationsEnabled: !1,
            forceConsistentRenderCount: !1,
            flatListController: w.current,
            direction: "vertical",
            extraItems: ne,
            initialScrollFromStart: l.initialScrollTop,
            targetWindow: P,
            renderItem: function (t) {
              return p.jsx(E, {
                row: t,
                focusAbove: function (n) {
                  ((($ && t.index === 1) || (!$ && t.index === 0)) &&
                    (R == null || R()),
                    K(t.index, -1, n));
                },
                focusBelow: function (n) {
                  K(t.index, 1, n);
                },
                onRef: function (n) {
                  n ? M.current.set(t.itemKey, n) : M.current.delete(t.itemKey);
                },
                numColumns: W(),
                onEmoji: m,
                onEmojiFocus: B,
                displayLocation: u,
              });
            },
          }),
        })
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    var I = k;
    function T(e, t, n) {
      for (var r = n < 0 ? -1 : 1, o = t + n; o >= 0 && o < e.length; ) {
        var a = e[o];
        if (a.kind === "emojis") return a;
        o += r;
      }
    }
    function D(e) {
      var t = e - o("WAWebEmojiPanelContentEmojiRow.react").SIDE_MARGIN * 2 - R;
      return Math.floor(
        t / o("WAWebEmojiPanelContentEmojiRow.react").EMOJI_WIDTH,
      );
    }
    ((l.TOTAL_SEARCH_HEIGHT = b), (l.EmojiSectionScrollList = I));
  },
  226,
);
