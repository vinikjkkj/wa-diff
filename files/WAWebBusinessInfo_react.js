__d(
  "WAWebBusinessInfo.react",
  [
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebBizGetProfileShimlinksQuery",
    "WAWebBusinessHours.react",
    "WAWebBusinessLogEvents",
    "WAWebBusinessProfileCollection",
    "WAWebChatInfoDrawerSection.react",
    "WAWebConstantsDeprecated",
    "WAWebDrawerContext",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebExternalLink.react",
    "WAWebMap.react",
    "WAWebProductCatalogContext",
    "WAWebStopEvent",
    "WAWebSupportChatStrings",
    "WAWebURLUtils",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = 590,
      m = 132,
      p = {
        paddingVert16: {
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
      };
    function _(t) {
      var n = t.businessProfile,
        a = t.showDescription,
        i = a === void 0 ? !0 : a,
        l = o("useWAWebModelValues").useModelValues(n, [
          "description",
          "address",
          "latitude",
          "longitude",
          "website",
          "email",
          "businessHours",
          "isProfileLinked",
          "coverPhoto",
        ]),
        s = l.address,
        _ = l.businessHours,
        f = l.coverPhoto,
        g = l.description,
        h = l.email,
        y = l.isProfileLinked,
        C = l.latitude,
        b = l.longitude,
        v = l.website,
        S = c(o("WAWebDrawerContext").DrawerContext),
        R = o("WAWebProductCatalogContext").getProductCatalogSessionId(S),
        L = g;
      n.id.isCAPISupportAccount() &&
        (L = o("WAWebSupportChatStrings").SupportChatDescription().toString());
      var E = [];
      if (
        (i &&
          L != null &&
          E.push(
            u.jsx("div", {
              className: "x1jchvi3 xdod15v x14ug900",
              children: u.jsx(o("WAWebExpandableText.react").ExpandableText, {
                text: L,
                textLimit: r("WAWebConstantsDeprecated")
                  .BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                children: function (t) {
                  var e = t.textLimit;
                  return u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    className: "x1o2sk6j",
                    selectable: !0,
                    direction: "auto",
                    text: L,
                    textLimit: e,
                    ellipsify: !0,
                    multiline: !0,
                    inferLinesDirection: !0,
                    breakWord: !0,
                  });
                },
              }),
            }),
          ),
        _ != null &&
          E.push(
            u.jsx("div", {
              className: "x1jchvi3 xdod15v x14ug900",
              children: u.jsx(r("WAWebBusinessHours.react"), {
                businessHours: _,
                isProfileLinked: y,
                hasCoverPhoto: !!f,
              }),
            }),
          ),
        s != null &&
          E.push(
            u.jsx("div", {
              className: "x1jchvi3 xdod15v x14ug900",
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                selectable: !0,
                direction: "auto",
                text: s,
              }),
            }),
          ),
        C != null &&
          b != null &&
          E.push(
            u.jsx("div", {
              className:
                "x1jchvi3 xdod15v x14ug900 x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 xefnzgg x1h5wmu3",
              children: u.jsx(r("WAWebMap.react"), {
                lat: C,
                lng: b,
                name: s || "",
                width: d,
                height: m,
                onClick: function () {
                  return o("WAWebBusinessLogEvents").logLocationClick(
                    R,
                    y,
                    !!f,
                  );
                },
                testid: void 0,
              }),
            }),
          ),
        h != null &&
          E.push(
            u.jsx("div", {
              className: "x1jchvi3 xdod15v x14ug900",
              children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: "mailto:" + h,
                onClick: function () {
                  return o("WAWebBusinessLogEvents").logEmailClick(R, y, !!f);
                },
                testid: void 0,
                children: h,
              }),
            }),
          ),
        v != null && v.length > 0)
      ) {
        var k = function (a) {
          var t = a.e,
            i = a.signedShimmedUrl,
            l = a.url;
          (o("WAWebStopEvent").stopEvent(t),
            o("WAWebBusinessLogEvents").logWebsiteClick(R, y, !!f));
          var s = r("WAWebURLUtils").toMaliciousSiteRedirect(l);
          if (
            !o(
              "WAWebBizGatingUtils",
            ).isUsingSignedShimmedLinkInCatalogueEnabled()
          ) {
            o("WAWebExternalLink.react").openExternalLink(s);
            return;
          }
          if (i != null) {
            o("WAWebExternalLink.react").openExternalLink(i);
            return;
          }
          o("WAWebBizGetProfileShimlinksQuery")
            .getProfileShimlinks(
              o("WAWebBusinessProfileCollection")
                .BusinessProfileCollection.convertBusinessProfileIdForLidMigration(
                  n.id.toString(),
                )
                .toString(),
            )
            .then(function (e) {
              var t;
              if (e.type !== "success") {
                o("WAWebExternalLink.react").openExternalLink(s);
                return;
              }
              e.type;
              var n =
                (t = e.websites.find(function (e) {
                  return e.url === l;
                })) == null
                  ? void 0
                  : t.signedShimmedUrl;
              n != null
                ? o("WAWebExternalLink.react").openExternalLink(n)
                : o("WAWebExternalLink.react").openExternalLink(s);
            })
            .catch(function () {
              (o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "BusinessInfo: failed to fetch signed shimmed link",
                  ])),
              ),
                o("WAWebExternalLink.react").openExternalLink(s));
            });
        };
        E.push(
          u.jsx("div", {
            className: "x1jchvi3 xdod15v x14ug900",
            children: v.map(function (e) {
              var t = e.signedShimmedUrl,
                n = e.url;
              return u.jsx(
                "div",
                {
                  children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: n,
                    onClick: function (r) {
                      return k({ e: r, url: n, signedShimmedUrl: t });
                    },
                    testid: void 0,
                    children: n,
                  }),
                },
                n,
              );
            }),
          }),
        );
      }
      return E.length === 0
        ? null
        : u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            xstyle: p.paddingVert16,
            children: E.map(function (e, t) {
              return u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  { 0: {}, 1: { className: "x9u28bd" } }[(t !== 0) << 0],
                  { children: e },
                ),
                t,
              );
            }),
          });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
