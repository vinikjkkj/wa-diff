__d(
  "WAWebBizAiHandoffActor",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e === "AI"
        ? "AI"
        : e === "BUSINESS"
          ? "BUSINESS"
          : e == null
            ? null
            : "UNKNOWN";
    }
    i.parseBizAiHandoffActor = e;
  },
  66,
);
