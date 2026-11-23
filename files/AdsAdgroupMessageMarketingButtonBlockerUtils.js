__d(
  "AdsAdgroupMessageMarketingButtonBlockerUtils",
  [
    "errorCode",
    "AdsAPIAdgroupPaths",
    "AdsCallToActionTypes",
    "AdsChildAttachmentsUtils",
    "AdsError",
    "AdsUEditorAdgroupMessageMarketingErrorStrings",
    "HSMUrlUtils",
    "MessageMarketingSectionFbts",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Set(["CALL_NOW", "WHATSAPP_MESSAGE"]);
    function u(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s = e.creative;
      return (t =
        (n =
          (r = s == null || (o = s.call_to_action) == null ? void 0 : o.type) !=
          null
            ? r
            : s == null ||
                (a = s.object_story_spec) == null ||
                (a = a.link_data) == null ||
                (a = a.call_to_action) == null
              ? void 0
              : a.type) != null
          ? n
          : s == null ||
              (i = s.object_story_spec) == null ||
              (i = i.video_data) == null ||
              (i = i.call_to_action) == null
            ? void 0
            : i.type) != null
        ? t
        : s == null ||
            (l = s.asset_feed_spec) == null ||
            (l = l.call_to_action_types) == null
          ? void 0
          : l[0];
    }
    function c(e) {
      var t,
        n,
        o,
        a,
        i,
        l = e.creative,
        s =
          l == null || (t = l.object_story_spec) == null ? void 0 : t.link_data,
        u = [
          [
            l == null || (n = l.call_to_action) == null || (n = n.value) == null
              ? void 0
              : n.link,
            r("AdsAPIAdgroupPaths").CREATIVE.CALL_TO_ACTION.VALUE.LINK,
          ],
          [
            l == null ||
            (o = l.asset_feed_spec) == null ||
            (o = o.link_urls) == null ||
            (o = o[0]) == null
              ? void 0
              : o.website_url,
            [].concat(
              r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
              ["0", "website_url"],
            ),
          ],
          [
            s == null || (a = s.call_to_action) == null || (a = a.value) == null
              ? void 0
              : a.link,
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.VALUE.LINK,
          ],
          [
            l == null ||
            (i = l.object_story_spec) == null ||
            (i = i.video_data) == null ||
            (i = i.call_to_action) == null ||
            (i = i.value) == null
              ? void 0
              : i.link,
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .CALL_TO_ACTION.VALUE.LINK,
          ],
          [
            s == null ? void 0 : s.link,
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
          ],
        ],
        c = u.find(function (e) {
          var t = e[0];
          return t != null && t !== "";
        });
      return c != null && c[0] != null ? { path: c[1], url: c[0] } : null;
    }
    function d(t) {
      var n,
        o = u(t);
      if (o == null || o === "NO_BUTTON" || e.has(o)) return null;
      var a = c(t);
      return a == null
        ? null
        : {
            isURL: !0,
            path: a.path,
            text:
              (n = r("AdsCallToActionTypes").TYPES[o]) == null
                ? void 0
                : n.text,
            url: a.url,
          };
    }
    function m(e) {
      var t,
        n,
        o =
          r("AdsAPIAdgroupPaths").CREATIVE.MARKETING_MESSAGE_STRUCTURED_SPEC
            .BUTTONS;
      return (
        (t =
          (n = e.creative) == null ||
          (n = n.marketing_message_structured_spec) == null
            ? void 0
            : n.buttons) != null
          ? t
          : []
      ).map(function (e, t) {
        return {
          isURL: e.type === "URL",
          path: o.concat([String(t)]),
          text: e.text,
          url: e.url,
        };
      });
    }
    function p(e) {
      var t = d(e);
      return [].concat(t != null ? [t] : [], m(e));
    }
    function _(e) {
      return p(e).flatMap(function (e) {
        return e.isURL &&
          e.url != null &&
          o("HSMUrlUtils").isWhatsAppDomainUrl(e.url)
          ? [e.path]
          : [];
      });
    }
    function f(e) {
      var t = p(e)
        .map(function (e) {
          return e.text;
        })
        .filter(function (e) {
          return e != null && e !== "";
        });
      return new Set(t).size !== t.length;
    }
    function g(e) {
      if (!r("gkx")("27236") || o("AdsChildAttachmentsUtils").isCarouselAd(e))
        return [];
      var t = _(e).map(function (e) {
          return new (r("AdsError"))(
            4017103,
            o("AdsUEditorAdgroupMessageMarketingErrorStrings")
              .WHATSAPP_DIRECT_LINK_DELIVERY_ERROR_MESSAGE,
            {
              path: e,
              level: r("AdsError").Level.RECOMMEND,
              field: o(
                "MessageMarketingSectionFbts",
              ).SECTION_URL_INPUT_LABEL.toString(),
            },
          );
        }),
        n = f(e)
          ? [
              new (r("AdsError"))(
                4017300,
                o("AdsUEditorAdgroupMessageMarketingErrorStrings")
                  .DUPLICATE_BUTTON_TEXT_DELIVERY_ERROR_MESSAGE,
                {
                  path: r("AdsAPIAdgroupPaths").CREATIVE
                    .MARKETING_MESSAGE_STRUCTURED_SPEC.BUTTONS,
                  level: r("AdsError").Level.RECOMMEND,
                  field: o(
                    "MessageMarketingSectionFbts",
                  ).SECTION_BUTTON_TEXT_INPUT_LABEL.toString(),
                },
              ),
            ]
          : [];
      return t.concat(n);
    }
    l.getMarketingMessageButtonBlockerErrors = g;
  },
  98,
);
