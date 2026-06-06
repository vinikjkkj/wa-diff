__d(
  "WAWebInviteProfilePicAction",
  ["WAWebGroupInviteProfilePicJob"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = { type: "preview", query: "url" },
        r = await o(
          "WAWebGroupInviteProfilePicJob",
        ).queryGroupInviteLinkProfilePicJob({
          code: t,
          groupWid: e,
          option: n,
        });
      return r.url;
    }
    async function s(e, t, n, r) {
      var a = { type: "image", query: "url" },
        i = await o(
          "WAWebGroupInviteProfilePicJob",
        ).queryGroupInviteMessageProfilePicJob(e, t, n, r, a);
      return i.url;
    }
    ((l.queryGroupInviteLinkProfilePicURL = e),
      (l.queryGroupInviteMessageProfilePicURL = s));
  },
  98,
);
