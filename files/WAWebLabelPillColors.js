__d(
  "WAWebLabelPillColors",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        {
          dot: "#EA0038",
          pillBg: "#FBD8DC",
          pillText: "#B80531",
          pillBgDark: "#321622",
          pillTextDark: "#FB7583",
        },
        {
          dot: "#FF2E74",
          pillBg: "#FFDAE7",
          pillText: "#A32553",
          pillBgDark: "#36192A",
          pillTextDark: "#FF72A1",
        },
        {
          dot: "#CB2910",
          pillBg: "#FFDBCC",
          pillText: "#801100",
          pillBgDark: "#38100A",
          pillTextDark: "#FF553B",
        },
        {
          dot: "#C15ADD",
          pillBg: "#FDCCFF",
          pillText: "#7A2394",
          pillBgDark: "#371341",
          pillTextDark: "#E78CED",
        },
        {
          dot: "#FA6533",
          pillBg: "#FEE2D8",
          pillText: "#6B3424",
          pillBgDark: "#35221E",
          pillTextDark: "#FC9775",
        },
        {
          dot: "#C0835D",
          pillBg: "#F4DED1",
          pillText: "#5B3C29",
          pillBgDark: "#35271E",
          pillTextDark: "#DBA685",
        },
        {
          dot: "#FBEB1E",
          pillBg: "#FEFACA",
          pillText: "#6B640C",
          pillBgDark: "#423E06",
          pillTextDark: "#FDF691",
        },
        {
          dot: "#FFB938",
          pillBg: "#FFF0D4",
          pillText: "#6D4E26",
          pillBgDark: "#362C1F",
          pillTextDark: "#FFD279",
        },
        {
          dot: "#DDCFBC",
          pillBg: "#EFE9E0",
          pillText: "#2C2720",
          pillBgDark: "#1D1A16",
          pillTextDark: "#CBB699",
        },
        {
          dot: "#AFE966",
          pillBg: "#E8FFCA",
          pillText: "#5C7B34",
          pillBgDark: "#405623",
          pillTextDark: "#CAF792",
        },
        {
          dot: "#25D366",
          pillBg: "#D9FDD3",
          pillText: "#15603E",
          pillBgDark: "#103529",
          pillTextDark: "#4BDF76",
        },
        {
          dot: "#8A962E",
          pillBg: "#EEF4BE",
          pillText: "#474D18",
          pillBgDark: "#474D18",
          pillTextDark: "#CCD86A",
        },
        {
          dot: "#D1C4FF",
          pillBg: "#E8E0FF",
          pillText: "#4837AF",
          pillBgDark: "#242447",
          pillTextDark: "#A791FF",
        },
        {
          dot: "#42C7B8",
          pillBg: "#CBF2EE",
          pillText: "#074D4A",
          pillBgDark: "#092D2F",
          pillTextDark: "#42C7B8",
        },
        {
          dot: "#009DE2",
          pillBg: "#CAECFA",
          pillText: "#074B6A",
          pillBgDark: "#092C3D",
          pillTextDark: "#53BDEB",
        },
        {
          dot: "#B6D9FE",
          pillBg: "#D2E8FE",
          pillText: "#0451A3",
          pillBgDark: "#092642",
          pillTextDark: "#53A6FD",
        },
        {
          dot: "#6A6C6C",
          pillBg: "#BDBDBD",
          pillText: "#161717",
          pillBgDark: "#101111",
          pillTextDark: "#BDBDBD",
        },
        {
          dot: "#FFABC7",
          pillBg: "#FFDAE7",
          pillText: "#A32553",
          pillBgDark: "#36192A",
          pillTextDark: "#FF72A1",
        },
        {
          dot: "#7F66FF",
          pillBg: "#E8E0FF",
          pillText: "#4837AF",
          pillBgDark: "#242447",
          pillTextDark: "#A791FF",
        },
        {
          dot: "#025AB7",
          pillBg: "#B6D9FE",
          pillText: "#092642",
          pillBgDark: "#071A2C",
          pillTextDark: "#B6D9FE",
        },
        {
          dot: "#03776D",
          pillBg: "#95DBD4",
          pillText: "#092D2F",
          pillBgDark: "#072122",
          pillTextDark: "#95DBD4",
        },
        {
          dot: "#8D9599",
          pillBg: "#EAEDEE",
          pillText: "#3E474D",
          pillBgDark: "#20272B",
          pillTextDark: "#B3B9BD",
        },
      ],
      l = 4,
      s = e.length,
      u = e[l];
    function c(t, n) {
      var r,
        o = (r = e[t]) != null ? r : u;
      return n
        ? { bg: o.pillBgDark, text: o.pillTextDark }
        : { bg: o.pillBg, text: o.pillText };
    }
    function d(t) {
      var n;
      return ((n = e[t]) != null ? n : u).dot;
    }
    var m = 0,
      p = 10,
      _ = 21,
      f = new Set([m, p]),
      g = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      ];
    ((i.DEFAULT_COLOR_INDEX = l),
      (i.PILL_COLOR_PALETTE_SIZE = s),
      (i.getPillColors = c),
      (i.getDotColor = d),
      (i.AI_HANDOFF_COLOR_INDEX = m),
      (i.AI_RESPONDING_COLOR_INDEX = p),
      (i.OVERFLOW_COLOR_INDEX = _),
      (i.AI_RESERVED_COLOR_INDICES = f),
      (i.CUSTOM_LABEL_COLOR_INDICES = g));
  },
  66,
);
