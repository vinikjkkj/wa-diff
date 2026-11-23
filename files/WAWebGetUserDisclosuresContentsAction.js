__d(
  "WAWebGetUserDisclosuresContentsAction",
  ["WAWebGetUserDisclosuresContentsJob"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o(
        "WAWebGetUserDisclosuresContentsJob",
      ).getDisclosuresContentsJob(e);
      return t;
    }
    l.getDisclosuresContentAction = e;
  },
  98,
);
