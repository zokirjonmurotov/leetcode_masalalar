// 2696. Minimum String Length After Removing Substrings(easy)

var minLength = function (s) {
    while (s.includes("AB") || s.includes("CD")) {
      if (s.includes("AB")) s = s.replaceAll("AB", "");
      if (s.includes("CD")) s = s.replaceAll("CD", "");
    }
    return s.length;
  };
  