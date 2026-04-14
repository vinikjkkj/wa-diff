__d(
  "WAWebMediaGalleryView.react",
  [
    "fbt",
    "WAWebClassnames",
    "WAWebEmptyState.react",
    "WAWebFbtIntlList",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebMediaHubEmptyGalleryEntryPoint.react",
    "WAWebSpinner.react",
    "WAWebStylesEnv",
    "react",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useRef,
      p = {
        containerRefreshedPadding: {
          paddingTop: "x16ovd2e",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "xdylf7x",
          paddingInlineEnd: "x5s3kwk",
          $$css: !0,
        },
        container: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexWrap: "x1a02dak",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingTop: "x1yrsyyn",
          marginInlineEnd: "x1bryted",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        containerRefreshed: {
          display: "x78zum5",
          flexWrap: "x1a02dak",
          columnGap: "x1s70e7g",
          $$css: !0,
        },
        justifySpaceBetween: {
          justifyContent: "x1qughib",
          width: "xh8yej3",
          $$css: !0,
        },
        galleryEmpty: {
          height: "xqvfhly",
          paddingTop: "xexx8yu",
          paddingBottom: "xr1496l",
          fontSize: "x1f6kntn",
          lineHeight: "x1i47q4g",
          color: "x12lhmx5",
          $$css: !0,
        },
        fontSmoothing: {
          "-webkit-font-smoothing": "xvmahel",
          "-moz-osx-font-smoothing": "xlh3980",
          $$css: !0,
        },
        drawer: {
          paddingTop: "x9orja2",
          paddingBottom: "xbaz6xv",
          paddingInlineStart: "x162tt16",
          paddingInlineEnd: "x1xnnf8n",
          marginInlineEnd: "x14z9mp",
          overflowY: "x1rife3k",
          $$css: !0,
        },
        themeChatInfo: { color: "xnv7mtq", $$css: !0 },
      };
    function _() {
      return d.jsx("div", {
        className: "x1n2onr6 xa1il55 xqtp20y x1bryted x1hmdwey x1gk22k6",
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = a.fullCollection,
        s = a.isRefresh,
        c = s === void 0 ? !1 : s,
        f = a.justify,
        h = a.mediaCollection,
        y = a.onScroll,
        C = a.medias || a.productMedias,
        b = a.theme === "chat-info",
        v = h.length === 0,
        S = m(null),
        R = m(null),
        L = r("useMergeRefs")(n, S);
      if (!C) return null;
      var E = (u || (u = r("stylex")))(
          c ? [p.containerRefreshed, p.containerRefreshedPadding] : p.container,
          !!l && p.drawer,
          v && p.galleryEmpty,
          v && o("WAWebStylesEnv").isOSMac && p.fontSmoothing,
          f === "space-between" && p.justifySpaceBetween,
          b && v && p.themeChatInfo,
        ),
        k = [].concat(C);
      if (h.queryMediaBefore != null && (l || k.length < 6)) {
        var I = {
          0: "x78zum5 x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 xa1il55 x1sa5p1d xyorhqc x1hmdwey x1gk22k6",
          4: "x78zum5 x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1brnrfz x9f619 xccv8h0",
          2: "x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 xa1il55 x1sa5p1d xyorhqc x1hmdwey x1gk22k6 x1s85apg x1axa3pm xze2x15",
          6: "x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1brnrfz x9f619 xccv8h0 x1s85apg x1axa3pm xze2x15",
          1: "x78zum5 x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 xa1il55 x1hmdwey x1gk22k6 xqvfhly xdj266r x14z9mp xat24cr x1lziwak",
          5: "x78zum5 x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1brnrfz x9f619 xccv8h0 xqvfhly xdj266r x14z9mp xat24cr x1lziwak",
          3: "x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 xa1il55 x1hmdwey x1gk22k6 x1s85apg x1axa3pm xze2x15 xqvfhly xdj266r x14z9mp xat24cr x1lziwak",
          7: "x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1brnrfz x9f619 xccv8h0 x1s85apg x1axa3pm xze2x15 xqvfhly xdj266r x14z9mp xat24cr x1lziwak",
        }[(!!c << 2) | ((!l && k.length >= 3) << 1) | ((h.length === 0) << 0)];
        k.push(
          d.jsxs(
            "div",
            {
              className: I,
              children: [
                d.jsx("span", { className: "x1etwn82 x1ukowes x14obwa1" }),
                d.jsx(o("WAWebSpinner.react").Spinner, { stroke: 6, size: 24 }),
              ],
            },
            "spinner",
          ),
        );
      }
      if (C.length === 0) {
        if (l) {
          if (h.queryMediaBefore != null)
            return d.jsx("div", {
              className:
                "x9orja2 xbaz6xv x162tt16 x1xnnf8n x14z9mp x1n2onr6 xhtitgo x78zum5 x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr",
              children: d.jsx(o("WAWebEmptyState.react").Loading, {}),
            });
          if (h.hasMediaBefore !== !0)
            return d.jsx(
              o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                .WAWebMediaHubEmptyGalleryEntryPoint,
              {
                tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                  .MediaHubTabs.MEDIA,
              },
            );
        }
        if (b) return null;
        h.queryMediaBefore == null &&
          h.hasMediaBefore !== !0 &&
          ((E = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            E,
            {
              0: "xqvfhly xexx8yu xr1496l x1f6kntn x1i47q4g x12lhmx5",
              1: "xqvfhly xexx8yu xr1496l x1f6kntn x1i47q4g x12lhmx5 xvmahel xlh3980",
            }[!!o("WAWebStylesEnv").isOSMac << 0],
          )),
          (k = [
            g(
              Math.max(i ? i.docCount : 0, 0),
              Math.max(i ? i.linkCount : 0, 0),
              Math.max(i ? i.productCount : 0, 0),
            ),
          ]));
      } else for (var T = 0; T < 6; T++) k.push(d.jsx(_, {}, "empty" + T));
      return d.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
        ref: R,
        customSelector: "[role='listitem']",
        children: d.jsx("div", {
          ref: L,
          tabIndex: 0,
          onFocus: function () {
            if (document.activeElement === S.current) {
              var e;
              (e = R.current) == null || e.focusFirst();
            }
          },
          onScroll: y,
          "data-testid": void 0,
          className: E,
          children: k,
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t, n) {
      var o = [];
      return (
        e != null &&
          e > 0 &&
          o.push(
            s._(/*BTDS*/ '_j{"*":"{count} docs","_1":"1 doc"}', [
              s._plural(e, "count"),
            ]),
          ),
        t != null &&
          t > 0 &&
          o.push(
            s._(/*BTDS*/ '_j{"*":"{count} links","_1":"1 link"}', [
              s._plural(t, "count"),
            ]),
          ),
        n != null &&
          n > 0 &&
          o.push(
            s._(/*BTDS*/ '_j{"*":"{count} products","_1":"1 product"}', [
              s._plural(n, "count"),
            ]),
          ),
        o.length > 0
          ? r("WAWebFbtIntlList")(
              o,
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            )
          : s._(/*BTDS*/ "No media, links, docs and products")
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = f;
    ((l.EmptyCanvas = _), (l.MediaGalleryView = h));
  },
  226,
);
