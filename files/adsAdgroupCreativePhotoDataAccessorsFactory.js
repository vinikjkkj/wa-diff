__d(
  "adsAdgroupCreativePhotoDataAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdgroupLinkDataCallToActionAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          branded_content_shared_to_sponsor_status: n.basicFieldAccessorFactory(
            e,
            t,
            "branded_content_shared_to_sponsor_status",
          ),
          branded_content_sponsor_page_id: n.basicFieldAccessorFactory(
            e,
            t,
            "branded_content_sponsor_page_id",
          ),
          branded_content_sponsor_relationship: n.basicFieldAccessorFactory(
            e,
            t,
            "branded_content_sponsor_relationship",
          ),
          call_to_action: r("adsAdgroupLinkDataCallToActionAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.call_to_action;
            },
            [].concat(t, ["call_to_action"]),
          ),
          caption: n.basicFieldAccessorFactory(e, t, "caption"),
          image_hash: n.basicFieldAccessorFactory(e, t, "image_hash"),
          page_welcome_message: n.basicFieldAccessorFactory(
            e,
            t,
            "page_welcome_message",
          ),
          url: n.basicFieldAccessorFactory(e, t, "url"),
        },
      );
    }
    l.default = e;
  },
  98,
);
