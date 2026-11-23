__d(
  "AdsUEditorAdgroupSectionsLayout.entrypoint",
  [
    "AdsUEditorAdgroupSectionsLayoutQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          var e = t.queryVariables;
          return {
            queries: {
              queryRef: {
                parameters: r(
                  "AdsUEditorAdgroupSectionsLayoutQuery$Parameters",
                ),
                variables: e,
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "AdsUEditorAdgroupSectionsLayoutQuery",
        ).__setRef("AdsUEditorAdgroupSectionsLayout.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
