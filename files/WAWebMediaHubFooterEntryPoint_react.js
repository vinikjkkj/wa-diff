__d(
  "WAWebMediaHubFooterEntryPoint.react",
  [
    "fbt",
    "WAWebMediaHubEmptyGalleryEntryPoint.react",
    "WAWebMediaHubLogger",
    "WAWebMediaHubModalLoadable",
    "WAWebModalManager",
    "WAWebWamEnumActionCode",
    "WAWebWamEnumEntryPointType",
    "WDSButton.react",
    "WDSIconIcFilter.react",
    "react",
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
      d = function (t) {
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
    function m(e) {
      return e ===
        o("WAWebMediaHubEmptyGalleryEntryPoint.react").MediaHubTabs.MEDIA
        ? s._(/*BTDS*/ "View media from all chats.")
        : e === o("WAWebMediaHubEmptyGalleryEntryPoint.react").MediaHubTabs.DOCS
          ? s._(/*BTDS*/ "View docs from all chats")
          : e ===
              o("WAWebMediaHubEmptyGalleryEntryPoint.react").MediaHubTabs.LINKS
            ? s._(/*BTDS*/ "View links from all chats")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function p(e) {
      var t = e.tabName;
      return u.jsx("div", {
        className:
          "x78zum5 x1c7u0tx xdt5ytf x6s0dn4 x2b8uid x178xt8z x13fuv20 xx42vgk x1p57kb1 xvpt6g3",
        children: u.jsx(r("WDSButton.react"), {
          onPress: function () {
            return d(t);
          },
          Icon: r("WDSIconIcFilter.react"),
          size: "small",
          variant: "borderless",
          widthMode: "fit",
          xstyle: c.button,
          label: m(t),
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
