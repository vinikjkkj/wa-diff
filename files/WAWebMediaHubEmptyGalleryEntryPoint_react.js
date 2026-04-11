__d(
  "WAWebMediaHubEmptyGalleryEntryPoint.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebMediaHubLogger",
    "WAWebMediaHubModalLoadable",
    "WAWebModalManager",
    "WAWebWamEnumActionCode",
    "WAWebWamEnumEntryPointType",
    "WDSButton.react",
    "WDSIconIcFilter.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        button: {
          marginInlineStart: "x1uvdrpn",
          marginInlineEnd: "xviac27",
          $$css: !0,
        },
      },
      d = n("$InternalEnum")({ MEDIA: "media", DOCS: "docs", LINKS: "links" }),
      m = function (t) {
        (o("WAWebMediaHubLogger").logMediaHubAction({
          action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MEDIA_HUB,
          entrypoint: o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE
            .CONTACT_INFO,
        }),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebMediaHubModalLoadable").MediaHubModalLoadable, {
              initialTab: t,
            }),
          ));
      };
    function p(e) {
      return e === d.MEDIA
        ? s._(/*BTDS*/ "No media")
        : e === d.DOCS
          ? s._(/*BTDS*/ "No documents")
          : e === d.LINKS
            ? s._(/*BTDS*/ "No links")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function _(e) {
      return e === d.MEDIA
        ? s._(/*BTDS*/ "Media shared in this chat will appear here.")
        : e === d.DOCS
          ? s._(/*BTDS*/ "Docs shared in this chat will appear here.")
          : e === d.LINKS
            ? s._(/*BTDS*/ "Links shared in this chat will appear here.")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function f(e) {
      return e === d.MEDIA
        ? s._(/*BTDS*/ "View media from all chats")
        : e === d.DOCS
          ? s._(/*BTDS*/ "View docs from all chats")
          : e === d.LINKS
            ? s._(/*BTDS*/ "View links from all chats")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.tabName,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className:
              "x78zum5 xdt5ytf x5yr21d xl56j7k x6s0dn4 x2b8uid x1qvou4u x1s70e7g",
          }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== n ? ((i = p(n)), (t[1] = n), (t[2] = i)) : (i = t[2]);
      var l;
      t[3] !== i
        ? ((l = u.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDeemphasized",
            children: i,
          })),
          (t[3] = i),
          (t[4] = l))
        : (l = t[4]);
      var s;
      t[5] !== n ? ((s = _(n)), (t[5] = n), (t[6] = s)) : (s = t[6]);
      var d;
      t[7] !== s
        ? ((d = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s,
          })),
          (t[7] = s),
          (t[8] = d))
        : (d = t[8]);
      var g;
      t[9] !== l || t[10] !== d
        ? ((g = u.jsxs("div", { children: [l, d] })),
          (t[9] = l),
          (t[10] = d),
          (t[11] = g))
        : (g = t[11]);
      var h;
      t[12] !== n
        ? ((h = function () {
            return m(n);
          }),
          (t[12] = n),
          (t[13] = h))
        : (h = t[13]);
      var y;
      t[14] !== n ? ((y = f(n)), (t[14] = n), (t[15] = y)) : (y = t[15]);
      var C;
      t[16] !== h || t[17] !== y
        ? ((C = u.jsx(r("WDSButton.react"), {
            onPress: h,
            Icon: r("WDSIconIcFilter.react"),
            size: "small",
            variant: "borderless",
            widthMode: "fit",
            xstyle: c.button,
            label: y,
          })),
          (t[16] = h),
          (t[17] = y),
          (t[18] = C))
        : (C = t[18]);
      var b;
      return (
        t[19] !== g || t[20] !== C
          ? ((b = u.jsxs(
              "div",
              babelHelpers.extends({}, a, { children: [g, C] }),
            )),
            (t[19] = g),
            (t[20] = C),
            (t[21] = b))
          : (b = t[21]),
        b
      );
    }
    ((l.MediaHubTabs = d), (l.WAWebMediaHubEmptyGalleryEntryPoint = g));
  },
  226,
);
