__d(
  "WAWebGetMeUsernameQueryAction",
  ["WAWebContactCollection", "WAWebGetUsernameQueryJob", "err"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = o("WAWebContactCollection").ContactCollection.getMeContact();
      if (e == null) throw r("err")("Failed to retrieve self contact");
      var t = await o("WAWebGetUsernameQueryJob").getUsernameJob();
      return t;
    }
    l.getMeUsername = e;
  },
  98,
);
