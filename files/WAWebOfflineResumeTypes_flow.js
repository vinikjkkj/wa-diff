__d(
  "WAWebOfflineResumeTypes.flow",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        Toastbar: "toastbar",
        ButterBar: "butterbar",
        None: "none",
      }),
      l = n("$InternalEnum").Mirrored(["Blocking", "NonBlocking", "Worker"]);
    ((i.ResumeUIProgressBarType = e), (i.ResumeType = l));
  },
  66,
);
