__d(
  "WAWebInternalProductBranding",
  ["fbt", "WAWebInternalMobilePlatforms", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l, s) {
    var e =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADFElEQVR42rVXW2jOYRgfZptktQsX1K8c1tBwMRGSYyErRBE19WykiYvRmkPkwuFSo5QLc0Pqd0NDLsYcbhxKDlGKGWOZnJbMYY699Xx6er3/7/v/v2/76rn4f8/p9z7v8z7v783L66cfKKtB+Q7KHyPfQJmfa+BCUEaDMhmUclBGgDIwYHdSk7aD8gCUV/rdmDRhPijLQCEo90Hp9Vbl5AMoGzy/U6qbpN9LEwMAZSUozwMJfWkBZQgoB0A5q/JCdZf1+4Z+PzU2e6MSjwLlYpqEPaB0gPIalB+grAdleQyg/0ko+TRQ3gSMWzXRWFAGGPsCUIpBWZMzAFBmgPLJM7oKyswY25UbAFDgrfwnKHUJ+iV7AO4Y6UpTCrevKxKelpwA1HmKOhN4MCibQDkPypw+B+AaSjs69eelVJNpZVqN7mZ/AKg0f7ghU2aCbgw4VUYAmKADKQmA93ZiOTntBW0OODWnqcJwHdFxpcQ5dZngVV7AlgAAdzqGZXGHbAXlhMo6q7DBSz2nYwEA+7O8xPaZGFdCAL76t5reBTY57RRMCGCtidMWAtARcBoESrexeeiu4ywBLDBx3oUAdEY47vKqcDBLAAtNjLchAO4IFgQci0C57TVhfeACq0pXHVCqTYzHUU1YEeFcCspHz7ZJ2dF4o3sCSk3EQg4b3wtW0WYUtWlW4FjRZw9Ee8TwcSSm3PO/ZfR7rKLRKK5l2MfpEVwhJIu9Cv4KVhqUqaD8NsrZGUA4QnI9Q3JHQIuMT5PRPQoFvWMM3D7mx+jqeV5z/utwVyljt8jT14eC7TQGXSGanQaIa8JaUHZrA5YYXbHyxlTsl6AMDQWxBPRoHz1MRoJyzyM5s6KMO43hEu8RUphF8inmIZKS7VHGZd594Gb2ISUmjn4/A6XBlTNG4omgHA88yY64sR7ltCXmserW51a1Tr4xoIzTGb/DHWHvqKWkIRPq5myoVAxxA25VnP3q8RzdWD2nRHWurro3QWLXT9scmY3bMN36TnOMpSLipeuo1mZQzuiYtaX+AspdJS+VcWaI/f0FoouHc+DtzqIAAAAASUVORK5CYII=";
    function u() {
      return o("WAWebInternalMobilePlatforms").isInternalPlatform(
        o("WAWebMobilePlatforms").getMaybeMobilePlatform(),
      )
        ? s._(/*BTDS*/ "WhatsApp Coworkers")
        : null;
    }
    function c() {
      return o("WAWebInternalMobilePlatforms").isInternalPlatform(
        o("WAWebMobilePlatforms").getMaybeMobilePlatform(),
      )
        ? e
        : null;
    }
    ((l.getTitle = u), (l.getFaviconUrl = c));
  },
  226,
);
