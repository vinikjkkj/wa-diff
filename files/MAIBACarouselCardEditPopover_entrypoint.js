__d(
  "MAIBACarouselCardEditPopover.entrypoint",
  [
    "JSResourceForInteraction",
    "MAIBACarouselCardEditPopoverImageQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          return {
            queries: {
              imageQueryRef: {
                parameters: r(
                  "MAIBACarouselCardEditPopoverImageQuery$Parameters",
                ),
                variables: {
                  accountID: t.accountID,
                  imageHashes: t.imageHashes,
                },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "MAIBACarouselCardEditPopover.react",
        ).__setRef("MAIBACarouselCardEditPopover.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
