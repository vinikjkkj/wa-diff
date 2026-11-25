__d(
  "WAWebMusicButtonKeyPress",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      (e.key === "Enter" || e.key === " ") && e.stopPropagation();
    }
    i.stopButtonActivationKeyPress = e;
  },
  66,
);
