__d(
  "AdsInstagramAccountLinkedPageDataManager",
  [
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsInstagramAccountLinkedPageErrorDataAction",
    "AdsInstagramAccountLinkedPageSuccessDataAction",
    "GraphAPIFieldUtils",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["id", "name", "is_instagram_account_backed_page", "picture"],
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadInstagramAccountLinkedPage = function () {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .me()
                .get({
                  fields: [
                    o("GraphAPIFieldUtils").getFieldWithSubfields(
                      "instagram_account_linked_page",
                      e,
                    ),
                  ],
                }),
              function (e) {
                var t = e.instagram_account_linked_page;
                t != null
                  ? r(
                      "AdsInstagramAccountLinkedPageSuccessDataAction",
                    ).dispatch(
                      { instagramAccountLinkedPage: t },
                      {
                        line: "48",
                        module: "AdsInstagramAccountLinkedPageDataManager.js",
                        moduleID: i.id,
                      },
                    )
                  : r("AdsInstagramAccountLinkedPageErrorDataAction").dispatch(
                      { error: r("err")("No linked page found") },
                      {
                        line: "52",
                        module: "AdsInstagramAccountLinkedPageDataManager.js",
                        moduleID: i.id,
                      },
                    );
              },
              function (e) {
                r("AdsInstagramAccountLinkedPageErrorDataAction").dispatch(
                  { error: e },
                  {
                    line: "58",
                    module: "AdsInstagramAccountLinkedPageDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          n
        );
      })(r("AdsBaseDataManager")),
      u = new s();
    l.default = u;
  },
  98,
);
