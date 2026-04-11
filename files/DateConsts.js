__d(
  "DateConsts",
  [],
  function (t, n, r, o, a, i) {
    var e = 1e3,
      l = 60,
      s = 60,
      u = 24,
      c = 7,
      d = 12,
      m = 1e3,
      p = 30.43,
      _ = 4.333,
      f = 365.242,
      g = l * s,
      h = g * u,
      y = h * c,
      C = h * f,
      b = e * l,
      v = b * s,
      S = e * h,
      R = S * c,
      L = S * f,
      E = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
      };
    Object.freeze(E);
    function k(e, t) {
      return new Date(e, t, 0).getDate();
    }
    function I() {
      return Date.now() / e;
    }
    var T = { instantRange: { since: -864e10, until: 864e10 + 1 } };
    ((i.MS_PER_SEC = e),
      (i.SEC_PER_MIN = l),
      (i.MIN_PER_HOUR = s),
      (i.HOUR_PER_DAY = u),
      (i.DAYS_PER_WEEK = c),
      (i.MONTHS_PER_YEAR = d),
      (i.US_PER_MS = m),
      (i.AVG_DAYS_PER_MONTH = p),
      (i.AVG_WEEKS_PER_MONTH = _),
      (i.AVG_DAYS_PER_YEAR = f),
      (i.SEC_PER_HOUR = g),
      (i.SEC_PER_DAY = h),
      (i.SEC_PER_WEEK = y),
      (i.SEC_PER_YEAR = C),
      (i.MS_PER_MIN = b),
      (i.MS_PER_HOUR = v),
      (i.MS_PER_DAY = S),
      (i.MS_PER_WEEK = R),
      (i.MS_PER_YEAR = L),
      (i.DAYS = E),
      (i.getDaysInMonth = k),
      (i.getCurrentTimeInSeconds = I),
      (i.private = T));
  },
  66,
);
