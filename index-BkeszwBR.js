const __vite__fileDeps = ["./pageSignIn-CZbpF0sM.js", "./putPreloader-Cv2t4Au7.js", "./page-Cb6VgJQc.js", "./countryInputField-DDW8Y_ns.js", "./button-BA7QFg1K.js", "./wrapEmojiText-ENB-q-2z.js", "./scrollable-DwOU1mFr.js", "./pageSignQR-BnxgjuIJ.js", "./textToSvgURL-Cnw_Q8Rw.js", "./pageAuthCode-BXyDFdjZ.js", "./codeInputField-Dl_N5JF-.js", "./pagePassword-g7_rDf4w.js", "./htmlToSpan-I3MLtOmv.js", "./loginPage-1Lgo7M2U.js", "./pageSignUp-DSVPh3Y8.js", "./avatar-pNScabtr.js", "./pageSignImport-_qg21W4W.js", "./pageIm-BYgeW8u4.js"];
const __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) {
    return;
  }
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver(r => {
    for (const i of r) if (i.type === "childList") {
      for (const o of i.addedNodes) if (o.tagName === "LINK" && o.rel === "modulepreload") {
        n(o);
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function s(r) {
    const i = {};
    if (r.integrity) {
      i.integrity = r.integrity;
    }
    if (r.referrerPolicy) {
      i.referrerPolicy = r.referrerPolicy;
    }
    if (r.crossOrigin === "use-credentials") {
      i.credentials = "include";
    } else if (r.crossOrigin === "anonymous") {
      i.credentials = "omit";
    } else {
      i.credentials = "same-origin";
    }
    return i;
  }
  function n(r) {
    if (r.ep) {
      return;
    }
    r.ep = true;
    const i = s(r);
    fetch(r.href, i);
  }
})();
const pr = function (t, e) {
  return new URL(t, e).href;
};
const Ls = {};
const V = function (e, s, n) {
  let r = Promise.resolve();
  if (s && s.length > 0) {
    const i = document.getElementsByTagName("link");
    const o = document.querySelector("meta[property=csp-nonce]");
    const c = o?.nonce || o?.getAttribute("nonce");
    r = Promise.all(s.map(a => {
      a = new URL(a, n).href;
      if (a in Ls) {
        return;
      }
      Ls[a] = true;
      const u = a.endsWith(".css");
      const l = u ? '[rel="stylesheet"]' : "";
      if (!!n) {
        for (let g = i.length - 1; g >= 0; g--) {
          const E = i[g];
          if (E.href === a && (!u || E.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${a}"]${l}`)) {
        return;
      }
      const f = document.createElement("link");
      f.rel = u ? "stylesheet" : "modulepreload";
      if (!u) {
        f.as = "script";
        f.crossOrigin = "";
      }
      f.href = a;
      if (c) {
        f.setAttribute("nonce", c);
      }
      document.head.appendChild(f);
      if (u) {
        return new Promise((g, E) => {
          f.addEventListener("load", g);
          f.addEventListener("error", () => E(new Error(`Unable to preload CSS for ${a}`)));
        });
      }
    }));
  }
  return r.then(() => e()).catch(i => {
    const o = new Event("vite:preloadError", {
      cancelable: true
    });
    o.payload = i;
    window.dispatchEvent(o);
    if (!o.defaultPrevented) {
      throw i;
    }
  });
};
const Is = ["web.telegram.org", "webk.telegram.org"];
const Pa = "pattern";
const Os = Math.min(4, navigator.hardwareConcurrency ?? 4);
const x = {
  id: 1025907,
  hash: "452b0359b988148995f22ff0f4229750",
  version: "2.1.0",
  versionFull: "2.1.0 (521)",
  build: 521,
  langPackVersion: "5.9.4",
  langPack: "webk",
  langPackCode: "en",
  domains: Is,
  baseDcId: 2,
  isMainDomain: Is.includes(location.hostname),
  suffix: "K",
  threads: Os,
  cryptoWorkers: Os
};
if (x.isMainDomain) {
  x.id = 2496;
  x.hash = "8da85b0d5bfe62527e5b244c209159c3";
}
function rn() {
  return document.activeElement?.blur ? (document.activeElement.blur(), true) : false;
}
function zt(t) {
  if (!t) {
    t = window.event;
  }
  if (t) {
    t = t.originalEvent || t;
    try {
      if (t.stopPropagation) {
        t.stopPropagation();
      }
      if (t.preventDefault) {
        t.preventDefault();
      }
      t.returnValue = false;
      t.cancelBubble = true;
    } catch {}
  }
  return false;
}
const ge = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
const Ds = typeof window < "u" ? window : self;
const xe = navigator ? navigator.userAgent : null;
const Kt = navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i) !== -1;
const on = navigator.userAgent.toLowerCase().indexOf("android") !== -1;
const an = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const cn = (() => {
  try {
    return +navigator.userAgent.match(/Chrom(?:e|ium)\/(.+?)(?:\s|\.)/)[1];
  } catch {}
})();
const Te = (/iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ds.MSStream;
const J = "safari" in Ds || !!(xe && (/\b(iPad|iPhone|iPod)\b/.test(xe) || xe.match("Safari") && !xe.match("Chrome")));
const Me = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
const ze = J && Te;
const ie = (navigator.maxTouchPoints === undefined || navigator.maxTouchPoints > 0) && navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i) != -1;
const Er = Object.freeze(Object.defineProperty({
  __proto__: null,
  CHROMIUM_VERSION: cn,
  IS_ANDROID: on,
  IS_APPLE: Kt,
  IS_APPLE_MOBILE: Te,
  IS_CHROMIUM: an,
  IS_FIREFOX: Me,
  IS_MOBILE: ie,
  IS_MOBILE_SAFARI: ze,
  IS_SAFARI: J,
  USER_AGENT: xe
}, Symbol.toStringTag, {
  value: "Module"
}));
function Fr(t, e) {
  return t.closest("." + e);
}
let Ie;
function qt(t) {
  if (Ie) {
    Ie.push(t);
  } else {
    Ie = [t];
    requestAnimationFrame(() => {
      const e = Ie;
      Ie = undefined;
      e.forEach(s => s());
    });
  }
}
let ye;
let Lt = false;
function ka(t) {
  if (ye) {
    if (Lt) {
      t();
    } else {
      ye.push(t);
    }
  } else {
    ye = [t];
    requestAnimationFrame(() => {
      Lt = true;
      for (let e = 0; e < ye.length; ++e) {
        ye[e]();
      }
      ye = undefined;
      Lt = false;
    });
  }
}
let Se;
function Ta() {
  return Se || (Se = new Promise(t => qt(() => t())), Se.then(() => {
    Se = undefined;
  }), Se);
}
function vr() {
  return new Promise(t => {
    qt(() => {
      qt(t);
    });
  });
}
function Rs(t) {
  t.style.transform = "translateY(-99999px)";
  t.focus();
  vr().then(() => {
    t.style.transform = "";
  });
}
const ut = J && ie && ge && false;
if (ut) {
  const t = "clientY";
  let e = 0;
  const s = {
    capture: true,
    passive: false
  };
  const n = i => {
    const o = i.touches[0];
    const c = o.target.closest(".scrollable-y");
    if (c) {
      const a = o[t];
      const u = e - a;
      const l = c.scrollTop;
      const h = c.scrollHeight;
      const f = c.clientHeight;
      const g = l ? Math.round(l + c.clientHeight + u) : l + u;
      if (h === f || g >= h || g <= 0) {
        i.preventDefault();
      }
    } else {
      i.preventDefault();
    }
  };
  let r = 0;
  document.addEventListener("focusin", i => {
    if (!(!i.target.classList.contains("is-sticky-input-bugged") || i.timeStamp - r < 50)) {
      Rs(i.target);
      document.addEventListener("touchmove", n, s);
      document.addEventListener("touchstart", o => {
        if (o.touches.length > 1) {
          return;
        }
        e = o.touches[0][t];
      });
    }
  }, {
    passive: true
  });
  document.addEventListener("focusout", i => {
    document.removeEventListener("touchmove", n, s);
    r = i.timeStamp;
  }, {
    passive: true
  });
  document.addEventListener("visibilitychange", () => {
    if (document.activeElement && document.activeElement.classList.contains("is-sticky-input-bugged") && document.activeElement.blur) {
      Rs(document.activeElement);
    }
  }, {
    passive: true
  });
}
function Ma(t) {
  if (ut) {
    t.classList.add("is-sticky-input-bugged");
  }
}
const un = "Roboto";
const Ar = un + ', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';
const yr = "16px";
const Sr = "400";
const La = `${Sr} ${yr} ${Ar}`;
function lt() {}
function ps(t) {
  return new Promise(e => {
    setTimeout(e, t);
  });
}
const ln = "tgico";
function Ia(t) {
  return ln + "-" + t;
}
const It = ["b", "б"];
const Ot = {};
const br = {
  text: un,
  icons: ln,
  monospace: "Roboto Mono"
};
function wr(t = {
  text: It,
  icons: undefined,
  monospace: It
}) {
  if (!("fonts" in document)) {
    return Promise.resolve();
  }
  const e = [];
  for (const s in t) {
    let n = t[s];
    if (n === "all") {
      n = It;
    }
    const r = br[s];
    const i = s === "icons" ? [500] : [400, 500];
    for (const o of i) {
      const c = (n || [undefined]).map(a => {
        var h;
        var f;
        const u = [o, "1rem", r].join(" ");
        return (h = Ot[u] ?? (Ot[u] = {}))[f = a || ""] ?? (h[f] = document.fonts.load(u, a));
      });
      e.push(...c);
    }
  }
  return Promise.race([Promise.all(e).catch(lt), ps(1e3)]);
}
const Jt = navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i) !== -1;
function hn(t) {
  if (!(t instanceof URL)) {
    t = new URL(t + "", location.href);
  }
  if (location.search && t.protocol !== "blob:") {
    new URLSearchParams(location.search).forEach((s, n) => {
      t.searchParams.set(n, s);
    });
  }
  t.searchParams.delete("swfix");
  return t;
}
function Cr() {
  const t = {
    construct(e, s) {
      s[0] = hn(s[0]);
      return new e(...s);
    }
  };
  [Worker, typeof SharedWorker < "u" && SharedWorker].filter(Boolean).forEach(e => {
    window[e.name] = new Proxy(e, t);
  });
}
Cr();
function _r() {
  if (!Element.prototype.toggleAttribute) {
    Element.prototype.toggleAttribute = function (t, e) {
      if (e !== undefined) {
        e = !!e;
      }
      return this.hasAttribute(t) ? e ? true : (this.removeAttribute(t), false) : e === false ? false : (this.setAttribute(t, ""), true);
    };
  }
}
const dn = 0;
const Oa = 1271266957;
const Ra = 777;
const Ba = 2666e3;
const xa = 777e3;
const Na = 2147483647;
const Ua = "";
const Wa = 20971520;
const Pr = "";
const ja = [7322096, 16766590, 13338331, 9367192, 16749490, 16478047];
const Va = "default_static";
const ht = 4294967296;
const Ga = ht + 1;
const Ya = false;
const kr = new Set(["web", "k", "z", "a"]);
const Ha = 2147483646;
const $a = new Set(["image/jpeg", "image/png", "image/bmp", "image/gif"]);
const za = "XTR";
const Tr = 0;
const Mr = 1;
const Lr = new Set([Tr, Mr]);
Math.max(...Array.from(Lr)) + 1;
const Ka = false;
class Fe {
  constructor(e) {
    this._constructor(e);
  }
  _constructor(e) {
    this.reuseResults = e;
    this.listeners = {};
    this.listenerResults = {};
  }
  addEventListener(e, s, n) {
    var i;
    const r = {
      callback: s,
      options: n
    };
    ((i = this.listeners)[e] ?? (i[e] = new Set())).add(r);
    if (this.listenerResults.hasOwnProperty(e) && (s(...this.listenerResults[e]), n?.once)) {
      this.listeners[e].delete(r);
      return;
    }
  }
  addMultipleEventsListeners(e) {
    for (const s in e) this.addEventListener(s, e[s]);
  }
  removeEventListener(e, s, n) {
    if (this.listeners[e]) {
      for (const r of this.listeners[e]) if (r.callback === s) {
        this.listeners[e].delete(r);
        break;
      }
    }
  }
  invokeListenerCallback(e, s, ...n) {
    let r;
    let i;
    try {
      r = s.callback(...n);
    } catch (o) {
      i = o;
    }
    if (s.options?.once) {
      this.removeEventListener(e, s.callback);
    }
    if (i) {
      throw i;
    }
    return r;
  }
  _dispatchEvent(e, s, ...n) {
    if (this.reuseResults) {
      this.listenerResults[e] = n;
    }
    const r = s && [];
    const i = this.listeners[e];
    if (i) {
      for (const o of i) {
        const c = this.invokeListenerCallback(e, o, ...n);
        if (r) {
          r.push(c);
        }
      }
    }
    return r;
  }
  dispatchResultableEvent(e, ...s) {
    return this._dispatchEvent(e, true, ...s);
  }
  dispatchEvent(e, ...s) {
    this._dispatchEvent(e, false, ...s);
  }
  cleanup() {
    this.listeners = {};
    this.listenerResults = {};
  }
}
const H = {
  test: location.search.indexOf("test=1") > 0,
  debug: location.search.indexOf("debug=1") > 0,
  http: false,
  ssl: true,
  asServiceWorker: false,
  transport: "websocket",
  noSharedWorker: location.search.indexOf("noSharedWorker=1") > 0,
  multipleTransports: true
};
if (H.http = location.search.indexOf("http=1") > 0) {
  H.multipleTransports = false;
}
if (H.multipleTransports) {
  H.http = true;
}
if (H.http) {
  H.transport = "https";
}
const Ir = false;
const De = H.debug;
const Or = typeof window < "u" ? window : self;
const fn = Date.now() % Math.random() * 1e8 | 0;
function rt(t, e) {
  const s = t.indexOf(e);
  return (s === -1 ? undefined : t.splice(s, 1))?.[0];
}
const Ke = typeof ServiceWorkerGlobalScope < "u" && self instanceof ServiceWorkerGlobalScope;
const bt = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && !Ke;
const pe = bt || Ke;
const Rr = () => self.clients.matchAll({
  includeUncontrolled: false,
  type: "window"
});
const gn = (t, ...e) => {
  try {
    t.postMessage(...e);
  } catch (s) {
    console.error("[worker] postMessage error:", s, e);
  }
};
const mn = (t, ...e) => {
  self.clients.matchAll({
    includeUncontrolled: false,
    type: "window"
  }).then(s => {
    if (s.length) {
      s.slice(t ? 0 : -1).forEach(n => {
        gn(n, ...e);
      });
    }
  });
};
if (Ke) {
  mn.bind(null, false);
}
if (Ke) {
  mn.bind(null, true);
}
const Rt = {};
function me(t) {
  return Rt[t] ?? (Rt[t] = {
    type: t
  });
}
const Br = Date.now();
function dt() {
  return "[" + ((Date.now() - Br) / 1e3).toFixed(3) + "]";
}
var Es = (t => (t[t.None = 0] = "None", t[t.Error = 1] = "Error", t[t.Warn = 2] = "Warn", t[t.Log = 4] = "Log", t[t.Debug = 8] = "Debug", t))(Es || {});
const xr = [0, 1, 2, 4, 8];
const Nr = J || Me;
const Bs = !Nr;
const Bt = {
  reset: "\x1B[0m",
  bright: "\x1B[1m",
  dim: "\x1B[2m",
  underscore: "\x1B[4m",
  blink: "\x1B[5m",
  reverse: "\x1B[7m",
  hidden: "\x1B[8m",
  fg: {
    black: "\x1B[30m",
    red: "\x1B[31m",
    green: "\x1B[32m",
    yellow: "\x1B[33m",
    blue: "\x1B[34m",
    magenta: "\x1B[35m",
    cyan: "\x1B[36m",
    white: "\x1B[37m"
  },
  bg: {
    black: "\x1B[40m",
    red: "\x1B[41m",
    green: "\x1B[42m",
    yellow: "\x1B[43m",
    blue: "\x1B[44m",
    magenta: "\x1B[45m",
    cyan: "\x1B[46m",
    white: "\x1B[47m"
  }
};
const Ur = [["debug", 8], ["info", 4], ["warn", 2], ["error", 1], ["assert", 1], ["trace", 4], ["group", 4], ["groupCollapsed", 4], ["groupEnd", 4]];
function Q(t, e = 7, s = false, n = "") {
  let r;
  if (!De && !s) {
    e = 1;
  }
  if (Bs) {
    if (!n) {
      if (Ke) {
        n = Bt.fg.yellow;
      } else if (bt) {
        n = Bt.fg.cyan;
      }
    }
  } else {
    n = "";
  }
  const i = n;
  if (n) {
    n = `%s ${n}%s`;
  } else {
    n = "%s";
  }
  const o = function (...a) {
    return e & 4 && console.log(n, "[" + ((Date.now() - Br) / 1e3).toFixed(3) + "]", t, ...a);
  };
  Ur.forEach(([a, u]) => {
    o[a] = function (...l) {
      return e & u && console[a](n, "[" + ((Date.now() - Br) / 1e3).toFixed(3) + "]", t, ...l);
    };
  });
  o.setPrefix = function (a) {
    r = a;
    t = "[" + a + "]";
  };
  o.setPrefix(t);
  o.setLevel = function (a) {
    e = xr.slice(0, a + 1).reduce((u, l) => u | l, 0);
  };
  const c = {};
  o.bindPrefix = function (a, u = e) {
    return c[a] ?? (c[a] = Q(`${r}] ${Bs && i ? Bt.reset : ""}[${a}`, u, s, i));
  };
  return o;
}
const Wr = true;
class Fs extends Fe {
  constructor(e) {
    super(false);
    this.logSuffix = e;
    this.onMessage = s => {
      const n = s.data;
      const r = s.source || s.currentTarget;
      this.processTaskMap[n.type](n, r, s);
    };
    this.processResultTask = s => {
      const {
        taskId: n,
        result: r,
        error: i
      } = s.payload;
      const o = this.awaiting[n];
      if (o) {
        if (this.debug) {
          this.log.debug("done", o.taskType, r, i);
        }
        if ("error" in s.payload) {
          o.reject(i);
        } else {
          o.resolve(r);
        }
        delete this.awaiting[n];
      }
    };
    this.processAckTask = s => {
      const n = s.payload;
      const r = this.awaiting[n.taskId];
      if (!r) {
        return;
      }
      const i = r.resolve;
      const o = {
        cached: n.cached,
        result: n.cached ? "result" in n ? Promise.resolve(n.result) : Promise.reject(n.error) : new Promise((c, a) => {
          r.resolve = c;
          r.reject = a;
        })
      };
      i(o);
      if (n.cached) {
        delete this.awaiting[n.taskId];
      }
    };
    this.processPingTask = (s, n, r) => {
      this.pushTask(this.createTask("pong", undefined), r.source);
    };
    this.processPongTask = (s, n, r) => {
      const i = this.pingResolves.get(n);
      if (i) {
        this.pingResolves.delete(n);
        i();
      }
    };
    this.processCloseTask = (s, n, r) => {
      this.detachPort(n);
    };
    this.processBatchTask = (s, n, r) => {
      const i = {
        data: r.data,
        source: r.source,
        currentTarget: r.currentTarget
      };
      s.payload.forEach(o => {
        i.data = o;
        this.onMessage(i);
      });
    };
    this.processLockTask = (s, n, r) => {
      const i = s.payload;
      if (!this.requestedLocks.has(i)) {
        this.requestedLocks.set(i, n);
        navigator.locks.request(i, () => {
          this.processCloseTask(undefined, n, undefined);
          this.requestedLocks.delete(i);
        });
      }
    };
    this.processInvokeTask = async (s, n, r) => {
      const i = s.id;
      const o = s.payload;
      let c;
      let a;
      let u;
      if (!o.void) {
        c = {
          taskId: i
        };
        a = this.createTask("result", c);
      }
      if (o.withAck) {
        u = this.createTask("ack", {
          taskId: i,
          cached: true
        });
      }
      let l;
      try {
        const h = this.listeners[o.type];
        if (!h?.size) {
          throw new Error("no listener");
        }
        const f = h.values().next().value;
        let g = this.invokeListenerCallback(o.type, f, o.payload, n, r);
        if (o.void) {
          return;
        }
        l = g instanceof Promise;
        if (u) {
          const E = !l;
          u.payload.cached = E;
          if (E) {
            u.payload.result = g;
          }
          this.pushTask(u, n);
          if (E) {
            return;
          }
        }
        if (l) {
          g = await g;
        }
        c.result = g;
      } catch (h) {
        this.log.error("worker task error:", h, s);
        if (o.void) {
          return;
        }
        if (u && u.payload.cached) {
          u.payload.error = h;
          this.pushTask(u, n);
          return;
        }
        c.error = h;
      }
      this.pushTask(a, n);
    };
    this.listenPorts = [];
    this.sendPorts = [];
    this.pingResolves = new Map();
    this.taskId = 0;
    this.awaiting = {};
    this.pending = new Map();
    this.log = Q("MP" + (e ? "-" + e : ""));
    this.debug = De;
    this.heldLocks = new Map();
    this.requestedLocks = new Map();
    this.processTaskMap = {
      result: this.processResultTask,
      ack: this.processAckTask,
      invoke: this.processInvokeTask,
      ping: this.processPingTask,
      pong: this.processPongTask,
      close: this.processCloseTask,
      lock: this.processLockTask,
      batch: this.processBatchTask
    };
  }
  setOnPortDisconnect(e) {
    this.onPortDisconnect = e;
  }
  attachPort(e) {
    this.attachListenPort(e);
    this.attachSendPort(e);
  }
  attachListenPort(e) {
    this.listenPorts.push(e);
    e.addEventListener("message", this.onMessage);
  }
  attachSendPort(e) {
    this.log.warn("attaching send port");
    e.start?.();
    this.sendPorts.push(e);
    if (typeof window < "u" && Wr) {
      if ("locks" in navigator) {
        const s = ["lock", fn, this.logSuffix || "", Math.random() * 2147483647 | 0].join("-");
        this.log.warn("created lock", s);
        const n = new Promise(r => this.heldLocks.set(e, {
          resolve: r,
          id: s
        })).then(() => this.heldLocks.delete(e));
        navigator.locks.request(s, () => (this.resendLockTask(e), n));
      } else {
        window.addEventListener("beforeunload", () => {
          const s = this.createTask("close", undefined);
          this.postMessage(undefined, s);
        });
      }
    }
    this.releasePending();
  }
  resendLockTask(e) {
    const s = this.heldLocks.get(e);
    if (s) {
      this.pushTask(this.createTask("lock", s.id), e);
    }
  }
  detachPort(e) {
    this.log.warn("disconnecting port");
    rt(this.listenPorts, e);
    rt(this.sendPorts, e);
    e.removeEventListener?.("message", this.onMessage);
    e.close?.();
    this.onPortDisconnect?.(e);
    this.heldLocks.get(e)?.resolve();
    const n = me("PORT_DISCONNECTED");
    for (const r in this.awaiting) {
      const i = this.awaiting[r];
      if (i.port === e) {
        i.reject(n);
        delete this.awaiting[r];
      }
    }
  }
  postMessage(e, s) {
    (Array.isArray(e) ? e : e ? [e] : this.sendPorts).forEach(r => {
      r.postMessage(s, s.transfer);
    });
  }
  async releasePending() {
    if (!this.releasingPending) {
      this.releasingPending = true;
      await Promise.resolve();
      if (this.debug) {
        this.log.debug("releasing tasks, length:", this.pending.size);
      }
      this.pending.forEach((e, s) => {
        let n = e;
        {
          let i;
          n = [];
          e.forEach(o => {
            if (o.transfer) {
              i = undefined;
              n.push(o);
            } else {
              if (!i) {
                i = this.createTask("batch", []);
                n.push(i);
              }
              i.payload.push(o);
            }
          });
        }
        const r = s ? [s] : this.sendPorts;
        if (r.length) {
          n.forEach(i => {
            try {
              this.postMessage(r, i);
            } catch (o) {
              this.log.error("postMessage error:", o, i, r);
            }
          });
          this.pending.delete(s);
        }
      });
      if (this.debug) {
        this.log.debug("released tasks");
      }
      this.releasingPending = false;
    }
  }
  createTask(e, s, n) {
    return {
      type: e,
      payload: s,
      id: this.taskId++,
      transfer: n
    };
  }
  createInvokeTask(e, s, n, r, i) {
    return this.createTask("invoke", {
      type: e,
      payload: s,
      withAck: n,
      void: r
    }, i);
  }
  pushTask(e, s) {
    let n = this.pending.get(s);
    if (!n) {
      this.pending.set(s, n = []);
    }
    n.push(e);
    this.releasePending();
  }
  invokeVoid(e, s, n, r) {
    const i = this.createInvokeTask(e, s, undefined, true, r);
    this.pushTask(i, n);
  }
  invoke(e, s, n, r, i) {
    if (this.debug) {
      this.log.debug("start", e, s);
    }
    let o;
    const c = new Promise((a, u) => {
      o = this.createInvokeTask(e, s, n, undefined, i);
      this.awaiting[o.id] = {
        resolve: a,
        reject: u,
        taskType: e,
        port: r
      };
      this.pushTask(o, r);
    });
    if (pe) {
      c.finally(() => {
        clearInterval(a);
      });
      const a = Ds.setInterval(() => {
        this.log.error("task still has no result", o, r);
      }, 6e4);
    }
    return c;
  }
  invokeExceptSource(e, s, n) {
    const r = this.sendPorts.slice();
    rt(r, n);
    r.forEach(i => {
      this.invokeVoid(e, s, i);
    });
  }
}
class qe extends Fs {
  constructor() {
    super("MTPROTO");
    qe.INSTANCE = this;
    if (Or) {
      Or.mtprotoMessagePort = this;
    }
  }
  static getInstance() {
    return this.INSTANCE;
  }
}
class jr extends Fe {
  constructor() {
    super();
    this.myId = dn;
    this.connectionStatus = {};
    this.premium = false;
    this.addEventListener("user_auth", ({
      id: e
    }) => {
      this.myId = e.toPeerId();
    });
    this.addEventListener("premium_toggle_private", ({
      isNew: e,
      isPremium: s
    }) => {
      this.premium = s;
      if (!e) {
        this.dispatchEventSingle("premium_toggle", s);
      }
    });
    this.addEventListener("connection_status_change", e => {
      this.connectionStatus[e.name] = e;
    });
    this.dispatchEvent = (e, ...s) => {
      super.dispatchEvent(e, ...s);
      qe.getInstance().invokeVoid("event", {
        name: e,
        args: s
      });
    };
    if (!pe) {
      this.addEventListener("settings_updated", ({
        settings: e
      }) => {
        this.settings = e;
      });
    }
  }
  getConnectionStatus() {
    return this.connectionStatus;
  }
  getPremium() {
    return this.premium;
  }
  dispatchEventSingle(e, ...s) {
    super.dispatchEvent(e, ...s);
  }
}
const S = new jr();
Or.rootScope = S;
const Vr = {
  isFulfilled: false,
  isRejected: false,
  notify: () => {},
  notifyAll: function (...t) {
    this.lastNotify = t;
    this.listeners?.forEach(e => e(...t));
  },
  addNotifyListener: function (t) {
    if (this.lastNotify) {
      t(...this.lastNotify);
    }
    (this.listeners ?? (this.listeners = [])).push(t);
  },
  resolve: function (t) {
    if (!(this.isFulfilled || this.isRejected)) {
      this.isFulfilled = true;
      this._resolve(t);
      this.onFinish();
    }
  },
  reject: function (...t) {
    if (!(this.isRejected || this.isFulfilled)) {
      this.isRejected = true;
      this._reject(...t);
      this.onFinish();
    }
  },
  onFinish: function () {
    this.notify = this.notifyAll = this.lastNotify = null;
    if (this.listeners) {
      this.listeners.length = 0;
    }
    if (this.cancel) {
      this.cancel = lt;
    }
  }
};
function se() {
  let t;
  let e;
  const s = new Promise((n, r) => {
    t = n;
    e = r;
  });
  Object.assign(s, Vr);
  s._resolve = t;
  s._reject = e;
  return s;
}
function qa(t, e) {
  t.then(e.resolve.bind(e), e.reject.bind(e));
}
self.deferredPromise = se;
function xt(t, e, s = true) {
  let n = null;
  let r;
  let i;
  const o = () => {
    clearInterval(n);
    n = null;
  };
  const c = (...a) => {
    r = true;
    i = a;
    if (!n) {
      if (s) {
        r = false;
        t(...i);
      }
      n = setInterval(() => {
        if (!r) {
          o();
          return;
        }
        r = false;
        t(...i);
      }, e);
    }
  };
  c.clear = o;
  return c;
}
function Xt(t, e) {
  if (e) {
    for (const s in e) if (e[s] !== undefined) {
      t[s] = e[s];
    }
  }
  return t;
}
const je = class je {
  constructor(e) {
    Xt(this, e);
    if (H.test) {
      this.name += "_test";
    }
    this.storageIsAvailable = true;
    this.log = Q(["IDB", e.name].join("-"));
    this.log("constructor");
    this.openDatabase(true);
    je.INSTANCES.push(this);
  }
  isAvailable() {
    return this.storageIsAvailable;
  }
  openDatabase(e = false) {
    if (this.openDbPromise && !e) {
      return this.openDbPromise;
    }
    const s = (o, c) => {
      const a = Array.from(o.indexNames);
      for (const u of a) o.deleteIndex(u);
      if (c.indexes?.length) {
        for (const u of c.indexes) if (!o.indexNames.contains(u.indexName)) {
          o.createIndex(u.indexName, u.keyPath, u.objectParameters);
        }
      }
    };
    const n = (o, c) => {
      const a = o.createObjectStore(c.name);
      s(a, c);
    };
    try {
      var r = indexedDB.open(this.name, this.version);
      if (!r) {
        return Promise.reject();
      }
    } catch (o) {
      this.log.error("error opening db", o.message);
      this.storageIsAvailable = false;
      return Promise.reject(o);
    }
    let i = false;
    setTimeout(() => {
      if (!i) {
        r.onerror(me("IDB_CREATE_TIMEOUT"));
      }
    }, 3e3);
    return this.openDbPromise = new Promise((o, c) => {
      r.onsuccess = a => {
        i = true;
        const u = r.result;
        let l = false;
        this.log("Opened");
        u.onerror = h => {
          this.storageIsAvailable = false;
          this.log.error("Error creating/accessing IndexedDB database", h);
          c(h);
        };
        u.onclose = h => {
          this.log.error("closed:", h);
          if (!l) {
            this.openDatabase();
          }
        };
        u.onabort = h => {
          this.log.error("abort:", h);
          const f = h.target;
          this.openDatabase(l = true);
          if (f.onerror) {
            f.onerror(h);
          }
          u.close();
        };
        u.onversionchange = h => {
          this.log.error("onversionchange, lol?");
        };
        o(this.db = u);
      };
      r.onerror = a => {
        i = true;
        this.storageIsAvailable = false;
        this.log.error("Error creating/accessing IndexedDB database", a);
        c(a);
      };
      r.onupgradeneeded = a => {
        i = true;
        this.log.warn("performing idb upgrade from", a.oldVersion, "to", a.newVersion);
        const u = a.target;
        const l = u.result;
        this.stores.forEach(h => {
          if (!l.objectStoreNames.contains(h.name)) {
            n(l, h);
          } else {
            const g = u.transaction.objectStore(h.name);
            s(g, h);
          }
        });
      };
    });
  }
  static create(e) {
    return this.INSTANCES.find(s => s.name === e.name) ?? new je(e);
  }
  static closeDatabases(e) {
    this.INSTANCES.forEach(s => {
      if (e && e === s) {
        return;
      }
      const n = s.db;
      if (n) {
        n.onclose = () => {};
        n.close();
      }
    });
  }
};
je.INSTANCES = [];
class Gr {
  constructor(e, s) {
    this.storeName = s;
    this.log = Q(["IDB", e.name, s].join("-"));
    this.idb = je.create(e);
  }
  delete(e, s) {
    const n = Array.isArray(e);
    if (!n) {
      e = [].concat(e);
    }
    return this.getObjectStore("readwrite", r => {
      const i = e.map(o => r.delete(o));
      return n ? i : i[0];
    }, "", s);
  }
  clear(e) {
    return this.getObjectStore("readwrite", s => s.clear(), "", e);
  }
  save(e, s, n) {
    const r = Array.isArray(e);
    if (!r) {
      e = [].concat(e);
      s = [].concat(s);
    }
    return this.getObjectStore("readwrite", i => {
      const o = e.map((c, a) => i.put(s[a], c));
      return r ? o : o[0];
    }, "", n);
  }
  get(e, s) {
    const n = Array.isArray(e);
    if (n) {
      if (!e.length) {
        return Promise.resolve([]);
      }
    } else {
      if (!e) {
        return;
      }
      e = [].concat(e);
    }
    return this.getObjectStore("readonly", r => {
      const i = e.map(o => r.get(o));
      return n ? i : i[0];
    }, "", s);
  }
  getObjectStore(e, s, n, r = this.storeName) {
    let i;
    if (n) {
      i = performance.now();
      this.log(n + ": start");
    }
    return this.idb.openDatabase().then(o => new Promise((c, a) => {
      const u = o.transaction([r], e, {
        durability: "relaxed"
      });
      const l = () => {
        clearTimeout(g);
        a(u.error);
      };
      const h = () => {
        clearTimeout(g);
        if (n) {
          this.log(n + ": end", performance.now() - i);
        }
        const k = D.map(T => T.result);
        c(C ? k : k[0]);
      };
      u.onerror = l;
      const f = e === "readwrite";
      if (f) {
        u.oncomplete = () => h();
      }
      const g = setTimeout(() => {
        this.log.error("transaction not finished", u, n);
      }, 1e4);
      const E = s(u.objectStore(r));
      const C = Array.isArray(E);
      const D = C ? E : [].concat(E);
      if (f) {
        return;
      }
      const F = D.length;
      let b = F;
      const P = () => {
        if (!(u.error || --b)) {
          h();
        }
      };
      for (let k = 0; k < F; ++k) {
        const T = D[k];
        T.onerror = l;
        T.onsuccess = P;
      }
    }));
  }
  getAll(e) {
    return this.getObjectStore("readonly", s => s.getAll(), "", e);
  }
}
function xs() {}
const Nt = 16;
const we = class we {
  constructor(e, s) {
    this.db = e;
    this.storeName = s;
    this.cache = {};
    this.getPromises = new Map();
    this.keysToSet = new Set();
    this.saveDeferred = se();
    this.keysToDelete = new Set();
    this.deleteDeferred = se();
    this.storage = new Gr(e, s);
    if (we.STORAGES.length) {
      this.useStorage = we.STORAGES[0].useStorage;
    } else {
      this.useStorage = true;
    }
    this.savingFreezed = false;
    we.STORAGES.push(this);
    this.saveThrottled = xt(async () => {
      const n = this.saveDeferred;
      this.saveDeferred = se();
      const r = this.keysToSet;
      if (r.size) {
        const i = Array.from(r.values());
        r.clear();
        const o = i.map(c => this.cache[c]);
        try {
          await this.storage.save(i, o);
        } catch (c) {
          console.error("[AS]: set error:", c, i, o);
        }
      }
      n.resolve();
      if (r.size) {
        this.saveThrottled();
      }
    }, Nt, false);
    this.deleteThrottled = xt(async () => {
      const n = this.deleteDeferred;
      this.deleteDeferred = se();
      const r = this.keysToDelete;
      if (r.size) {
        const i = Array.from(r.values());
        r.clear();
        try {
          await this.storage.delete(i);
        } catch (o) {
          console.error("[AS]: delete error:", o, i);
        }
      }
      n.resolve();
      if (r.size) {
        this.deleteThrottled();
      }
    }, Nt, false);
    this.getThrottled = xt(async () => {
      const n = Array.from(this.getPromises.keys());
      this.storage.get(n).then(r => {
        let i = 0;
        for (let o = n.length; i < o; ++i) {
          const c = n[i];
          const a = this.getPromises.get(c);
          if (a) {
            a.resolve(this.cache[c] = r[i]);
            this.getPromises.delete(c);
          }
        }
      }, r => {
        if (!new Set(["NO_ENTRY_FOUND", "STORAGE_OFFLINE"]).has(r.type)) {
          this.useStorage = false;
          console.error("[AS]: get error:", r, n, s);
        }
        let o = 0;
        for (let c = n.length; o < c; ++o) {
          const a = n[o];
          const u = this.getPromises.get(a);
          if (u) {
            u.resolve(undefined);
            this.getPromises.delete(a);
          }
        }
      }).finally(() => {
        if (this.getPromises.size) {
          this.getThrottled();
        }
      });
    }, Nt, false);
  }
  isAvailable() {
    return this.useStorage;
  }
  getCache() {
    return this.cache;
  }
  getFromCache(e) {
    return this.cache[e];
  }
  setToCache(e, s) {
    return this.cache[e] = s;
  }
  async get(e, s = true) {
    if (this.cache.hasOwnProperty(e) && s) {
      return this.getFromCache(e);
    }
    if (this.useStorage) {
      const n = this.getPromises.get(e);
      if (n) {
        return n;
      }
      const r = se();
      this.getPromises.set(e, r);
      this.getThrottled();
      return r;
    }
  }
  getAll() {
    return this.storage.getAll().catch(() => []);
  }
  set(e, s = false) {
    const n = this.useStorage && !s && !this.savingFreezed;
    for (const r in e) if (e.hasOwnProperty(r)) {
      const i = e[r];
      this.setToCache(r, i);
      if (n) {
        this.keysToSet.add(r);
        this.keysToDelete.delete(r);
        this.saveThrottled();
      }
    }
    return n ? this.saveDeferred : Promise.resolve();
  }
  delete(e, s = false) {
    e = "" + e;
    if (!s) {
      delete this.cache[e];
    }
    if (this.useStorage) {
      this.keysToSet.delete(e);
      this.keysToDelete.add(e);
      this.deleteThrottled();
    }
    return this.useStorage ? this.deleteDeferred : Promise.resolve();
  }
  clear(e = false) {
    if (!e) {
      for (const s in this.cache) delete this.cache[s];
    }
    return this.storage.clear().catch(xs);
  }
  static toggleStorage(e, s) {
    return Promise.all(this.STORAGES.map(n => {
      n.useStorage = e;
      if (!(!pe || !s)) {
        return e ? n.set(n.cache) : (n.keysToSet.clear(), n.keysToDelete.clear(), n.getPromises.forEach(r => r.resolve(undefined)), n.getPromises.clear(), n.clear(true));
      }
    })).catch(xs);
  }
  static freezeSaving(e, s) {
    this.STORAGES.forEach(n => n.savingFreezed = true);
    try {
      e();
    } catch (n) {
      console.error("freezeSaving callback error:", n);
    }
    this.STORAGES.forEach(n => n.savingFreezed = false);
  }
};
we.STORAGES = [];
if (Or) {
  Or.AppStorage = we;
}
const Yr = {
  name: "tweb",
  version: 7,
  stores: [{
    name: "session"
  }, {
    name: "stickerSets"
  }, {
    name: "users"
  }, {
    name: "chats"
  }, {
    name: "dialogs"
  }, {
    name: "messages"
  }]
};
class Hr extends we {
  constructor() {
    super(Yr, "session");
  }
}
const _e = new Hr();
Or.stateStorage = _e;
function En(t, e, s) {
  const n = s && new Set(s);
  const r = a => Object.keys(a).filter(u => a[u] !== undefined);
  const i = s ? a => r(a).filter(u => !n.has(u)) : r;
  const o = typeof t;
  return t && e && o === "object" && o === typeof e ? i(t).length === i(e).length && i(t).every(a => En(t[a], e[a], s)) : t === e;
}
function wt(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const $r = new Set(["javascript:"]);
function Fn(t) {
  if (!t) {
    return null;
  }
  try {
    const e = new URL(t).protocol;
    return $r.has(e) ? null : e;
  } catch {
    return null;
  }
}
const zr = "((?:👨🏻‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👨🏼‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👨🏽‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👨🏾‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👨🏿‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏻‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏻‍❤️?‍💋‍👩\uD83C[\uDFFB-\uDFFF]|👩🏼‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏼‍❤️?‍💋‍👩\uD83C[\uDFFB-\uDFFF]|👩🏽‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏽‍❤️?‍💋‍👩\uD83C[\uDFFB-\uDFFF]|👩🏾‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏾‍❤️?‍💋‍👩\uD83C[\uDFFB-\uDFFF]|👩🏿‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏿‍❤️?‍💋‍👩\uD83C[\uDFFB-\uDFFF]|🧑🏻‍❤️?‍💋‍🧑\uD83C[\uDFFC-\uDFFF]|🧑🏼‍❤️?‍💋‍🧑\uD83C[\uDFFB\uDFFD-\uDFFF]|🧑🏽‍❤️?‍💋‍🧑\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|🧑🏾‍❤️?‍💋‍🧑\uD83C[\uDFFB-\uDFFD\uDFFF]|🧑🏿‍❤️?‍💋‍🧑\uD83C[\uDFFB-\uDFFE]|👨🏻‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👨🏻‍🤝‍👨\uD83C[\uDFFC-\uDFFF]|👨🏼‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👨🏼‍🤝‍👨\uD83C[\uDFFB\uDFFD-\uDFFF]|👨🏽‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👨🏽‍🤝‍👨\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|👨🏾‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👨🏾‍🤝‍👨\uD83C[\uDFFB-\uDFFD\uDFFF]|👨🏿‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👨🏿‍🤝‍👨\uD83C[\uDFFB-\uDFFE]|👩🏻‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👩🏻‍❤️?‍👩\uD83C[\uDFFB-\uDFFF]|👩🏻‍🤝‍👨\uD83C[\uDFFC-\uDFFF]|👩🏻‍🤝‍👩\uD83C[\uDFFC-\uDFFF]|👩🏼‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👩🏼‍❤️?‍👩\uD83C[\uDFFB-\uDFFF]|👩🏼‍🤝‍👨\uD83C[\uDFFB\uDFFD-\uDFFF]|👩🏼‍🤝‍👩\uD83C[\uDFFB\uDFFD-\uDFFF]|👩🏽‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👩🏽‍❤️?‍👩\uD83C[\uDFFB-\uDFFF]|👩🏽‍🤝‍👨\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|👩🏽‍🤝‍👩\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|👩🏾‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👩🏾‍❤️?‍👩\uD83C[\uDFFB-\uDFFF]|👩🏾‍🤝‍👨\uD83C[\uDFFB-\uDFFD\uDFFF]|👩🏾‍🤝‍👩\uD83C[\uDFFB-\uDFFD\uDFFF]|👩🏿‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👩🏿‍❤️?‍👩\uD83C[\uDFFB-\uDFFF]|👩🏿‍🤝‍👨\uD83C[\uDFFB-\uDFFE]|👩🏿‍🤝‍👩\uD83C[\uDFFB-\uDFFE]|🧑🏻‍❤️?‍🧑\uD83C[\uDFFC-\uDFFF]|🧑🏻‍🤝‍🧑\uD83C[\uDFFB-\uDFFF]|🧑🏼‍❤️?‍🧑\uD83C[\uDFFB\uDFFD-\uDFFF]|🧑🏼‍🤝‍🧑\uD83C[\uDFFB-\uDFFF]|🧑🏽‍❤️?‍🧑\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|🧑🏽‍🤝‍🧑\uD83C[\uDFFB-\uDFFF]|🧑🏾‍❤️?‍🧑\uD83C[\uDFFB-\uDFFD\uDFFF]|🧑🏾‍🤝‍🧑\uD83C[\uDFFB-\uDFFF]|🧑🏿‍❤️?‍🧑\uD83C[\uDFFB-\uDFFE]|🧑🏿‍🤝‍🧑\uD83C[\uDFFB-\uDFFF]|👨‍❤️?‍💋‍👨|👩‍❤️?‍💋‍\uD83D[\uDC68\uDC69]|🫱🏻‍🫲\uD83C[\uDFFC-\uDFFF]|🫱🏼‍🫲\uD83C[\uDFFB\uDFFD-\uDFFF]|🫱🏽‍🫲\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|🫱🏾‍🫲\uD83C[\uDFFB-\uDFFD\uDFFF]|🫱🏿‍🫲\uD83C[\uDFFB-\uDFFE]|👨‍❤️?‍👨|👩‍❤️?‍\uD83D[\uDC68\uDC69]|🧑‍🤝‍🧑|👫\uD83C[\uDFFB-\uDFFF]|👬\uD83C[\uDFFB-\uDFFF]|👭\uD83C[\uDFFB-\uDFFF]|💏\uD83C[\uDFFB-\uDFFF]|💑\uD83C[\uDFFB-\uDFFF]|🤝\uD83C[\uDFFB-\uDFFF]|\uD83D[\uDC6B-\uDC6D\uDC8F\uDC91]|🤝)|(?:\uD83D[\uDC68\uDC69]|🧑)(?:\uD83C[\uDFFB-\uDFFF])?‍(?:⚕️?|⚖️?|✈️?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C[\uDFCB\uDFCC]|\uD83D[\uDD74\uDD75]|⛹)(?:(?:\uD83C[\uDFFB-\uDFFF]|️?)‍[♀♂]️?)|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?‍[♀♂]️?|(?:👨‍👨‍👦‍👦|👨‍👨‍👧‍\uD83D[\uDC66\uDC67]|👨‍👩‍👦‍👦|👨‍👩‍👧‍\uD83D[\uDC66\uDC67]|👩‍👩‍👦‍👦|👩‍👩‍👧‍\uD83D[\uDC66\uDC67]|👨‍👦‍👦|👨‍👧‍\uD83D[\uDC66\uDC67]|👨‍👨‍\uD83D[\uDC66\uDC67]|👨‍👩‍\uD83D[\uDC66\uDC67]|👩‍👦‍👦|👩‍👧‍\uD83D[\uDC66\uDC67]|👩‍👩‍\uD83D[\uDC66\uDC67]|🏳️?‍⚧️?|🏳️?‍🌈|😶‍🌫️?|❤️?‍🔥|❤️?‍🩹|🏴‍☠️?|🐕‍🦺|🐻‍❄️?|👁‍🗨|👨‍\uD83D[\uDC66\uDC67]|👩‍\uD83D[\uDC66\uDC67]|👯‍♀️?|👯‍♂️?|😮‍💨|😵‍💫|🤼‍♀️?|🤼‍♂️?|🧞‍♀️?|🧞‍♂️?|🧟‍♀️?|🧟‍♂️?|🐈‍⬛)|[#*0-9]️??⃣|(?:[©®™♟]️?)|(?:\uD83C[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE1A\uDE2F\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF3\uDFF5\uDFF7]|\uD83D[\uDC3F\uDC41\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]|[‼⁉ℹ↔-↙↩↪⌚⌛⌨⏏⏭-⏯⏱⏲⏸-⏺Ⓜ▪▫▶◀◻-◾☀-☄☎☑☔☕☘☠☢☣☦☪☮☯☸-☺♀♂♈-♓♠♣♥♦♨♻♿⚒-⚗⚙⚛⚜⚠⚡⚧⚪⚫⚰⚱⚽⚾⛄⛅⛈⛏⛑⛓⛔⛩⛪⛰-⛵⛸⛺⛽✂✈✉✏✒✔✖✝✡✳✴❄❇❗❣❤➡⤴⤵⬅-⬇⬛⬜⭐⭕〰〽㊗㊙])(?:️?|(?!︎))|(?:(?:\uD83C[\uDFCB\uDFCC]|\uD83D[\uDD74\uDD75\uDD90]|[☝⛷⛹✌✍])(?:️?|(?!︎))|(?:\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD7A\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD\uDEC3-\uDEC5\uDEF0-\uDEF6]|[✊✋]))(?:\uD83C[\uDFFB-\uDFFF])?|(?:🏴󠁧󠁢󠁥󠁮󠁧󠁿|🏴󠁧󠁢󠁳󠁣󠁴󠁿|🏴󠁧󠁢󠁷󠁬󠁳󠁿|🇦\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|🇧\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|🇨\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|🇩\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|🇪\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|🇫\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|🇬\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|🇭\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|🇮\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|🇯\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|🇰\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|🇱\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|🇲\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|🇳\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|🇴🇲|🇵\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|🇶🇦|🇷\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|🇸\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|🇹\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|🇺\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|🇻\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|🇼\uD83C[\uDDEB\uDDF8]|🇽🇰|🇾\uD83C[\uDDEA\uDDF9]|🇿\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C[\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC6F\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDD-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3C\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDDE-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC2\uDED0-\uDED9\uDEE0-\uDEE7]|[⏩-⏬⏰⏳♾⛎✅✨❌❎❓-❕➕-➗➰➿])|️)";
const We = "a-z\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u00ff\\u0100-\\u024f\\u0253\\u0254\\u0256\\u0257\\u0259\\u025b\\u0263\\u0268\\u026f\\u0272\\u0289\\u028b\\u02bb\\u0300-\\u036f\\u1e00-\\u1eff\\u0400-\\u04ff\\u0500-\\u0527\\u2de0-\\u2dff\\ua640-\\ua69f\\u0591-\\u05bf\\u05c1-\\u05c2\\u05c4-\\u05c5\\u05c7\\u05d0-\\u05ea\\u05f0-\\u05f4\\ufb1d-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40-\\ufb41\\ufb43-\\ufb44\\ufb46-\\ufb4f\\u0610-\\u061a\\u0620-\\u065f\\u066e-\\u06d3\\u06d5-\\u06dc\\u06de-\\u06e8\\u06ea-\\u06ef\\u06fa-\\u06fc\\u06ff\\u0750-\\u077f\\u08a0\\u08a2-\\u08ac\\u08e4-\\u08fe\\ufb50-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\u200c\\u0e01-\\u0e3a\\u0e40-\\u0e4e\\u1100-\\u11ff\\u3130-\\u3185\\uA960-\\uA97F\\uAC00-\\uD7AF\\uD7B0-\\uD7FF\\u3003\\u3005\\u303b\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uff9f\\uffa1-\\uffdc";
const Kr = "0-9_" + We;
const Ns = "·";
const Ze = "[" + We + "0-9]";
const qr = "((?:https?|ftp)://|mailto:)?";
const Jr = qr + "(?:" + Ze + "{1,64}(?::" + Ze + "{0,64})?@)?(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}|" + Ze + "[" + We + Ns + "0-9-]{0,64}(?:\\." + Ze + "[" + We + Ns + "0-9-]{0,64}){0,10}(?:\\.(xn--[0-9a-z]{2,16}|[" + We + `]{2,24})))(?::\\d{2,5})?(?:/(?:\\S{0,255}[^\\s.;,(\\[\\]{}<>"'])?)?`;
const vn = "[a-zA-Z\\d_]{5,32}";
const Xr = "(?:\\s|^)((?:(\\d{1,2}):(?:[0-5]?[0-9])|(?:\\d{1,2}|\\d{3,})):(?:[0-5][0-9]))(?:\\s|$)";
const Zr = "\\/([a-zA-Z\\d_]{1,32})(?:@(" + vn + "))?(\\b|$)";
const Ja = new RegExp("(^| )(@)(" + vn + ")|(" + Jr + ")|(\\n)|(" + zr + ")|(^|[\\s\\(\\]])(#[" + Kr + "]{2,64})|(^|\\s)" + Zr + "|" + Xr, "i");
const Xa = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Za = /(^|\s|\n)(````?)([\s\S]+?)(````?)([\s\n\.,:?!;]|$)|(^|\s|\x01)(`|~~|\*\*|__|_-_|\|\|)([^\n]+?)\7([\x01\s\.,:?!;]|$)|@(\d+)\s*\((.+?)\)|(\[(.+?)\]\((.+?)\))/m;
const Qa = {
  Telegram: "tg://search_hashtag?hashtag={1}",
  Twitter: "https://twitter.com/hashtag/{1}",
  Instagram: "https://instagram.com/explore/tags/{1}/",
  "Google Plus": "https://plus.google.com/explore/{1}"
};
const Qt = {
  "`": "messageEntityCode",
  "``": "messageEntityPre",
  "**": "messageEntityBold",
  __: "messageEntityItalic",
  "~~": "messageEntityStrike",
  "_-_": "messageEntityUnderline",
  "||": "messageEntitySpoiler"
};
new Set(Object.values(Qt));
const An = new Set(["messageEntityEmoji", "messageEntityLinebreak", "messageEntityCaret"]);
const ec = new Set(An);
for (const t in Qt) An.add(Qt[t]);
const Qr = /^\+\d+$/;
function yn(t, e) {
  if (!Fn(t)) {
    t = "https://" + t;
  }
  const s = {
    url: t
  };
  let n;
  let r;
  let i;
  if (n = t.match(/^(?:https?:\/\/)?(?:(.+?)\.)?(?:(?:web|k|z|a)\.)?t(?:elegram)?\.me(?:\/(.+))?/)) {
    const o = new URL(t);
    let c = n[1];
    if (c && kr.has(n[1])) {
      c = undefined;
    }
    if (c) {
      o.pathname = c + (o.pathname === "/" ? "" : o.pathname);
    }
    const a = o.pathname.slice(1);
    const u = a.split("/");
    if (u[0] && u[0][0] === "$" && u[0].length > 1) {
      i = "invoice";
    } else if (/^\+/.test(a) && !Qr.test(a)) {
      i = "joinchat";
    } else if (u[0]) {
      switch (u[0]) {
        case "m":
        case "addlist":
        case "joinchat":
        case "addstickers":
        case "addemoji":
        case "voicechat":
        case "invoice":
        case "boost":
        case "giftcode":
          if (u.length !== 1 && !c) {
            i = u[0];
            break;
          }
        default:
          if (u.length <= 2 || u[1]?.match(/^\d+(?:\?(?:comment|thread)=\d+)?$/) || u[1] === "s") {
            i = "im";
            break;
          }
          break;
      }
    }
  } else if (t.match(/^(?:https?:\/\/)?telesco\.pe\/([^/?]+)\/(\d+)/)) {
    i = "im";
  } else if (r = t.match(/tg:(?:\/\/)?(.+?)(?:\?|$)/)) {
    i = "tg_" + r[1];
  }
  if (!window[i]) {
    i = undefined;
  }
  s.onclick = i;
  return s;
}
if (Or) {
  Or.wrapUrl = yn;
}
function tc(t, e) {
  Sn(t);
  if (e === undefined) {
    t.replaceChildren();
  } else if (typeof e == "string") {
    if (e) {
      t.textContent = e;
    } else {
      t.replaceChildren();
    }
  } else {
    t.replaceChildren(e);
  }
}
function Sn(t) {
  t.setAttribute("dir", "auto");
}
function sc() {
  return "auto";
}
function ei(t) {
  t.target = "_blank";
  t.rel = "noopener noreferrer";
  return t;
}
const nc = {
  context: undefined,
  registry: undefined
};
const ti = (t, e) => t === e;
const X = Symbol("solid-proxy");
const es = Symbol("solid-track");
const ft = {
  equals: ti
};
let bn = Pn;
const oe = 1;
const gt = 2;
const wn = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
const Ut = {};
var M = null;
let Wt = null;
let O = null;
let W = null;
let re = null;
let Ct = 0;
function it(t, e) {
  const s = O;
  const n = M;
  const r = t.length === 0;
  const i = e === undefined ? n : e;
  const o = r ? wn : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  };
  const c = r ? t : () => t(() => K(() => _t(o)));
  M = o;
  O = null;
  try {
    return ee(c, true);
  } finally {
    O = s;
    M = n;
  }
}
function ne(t, e) {
  e = e ? Object.assign({}, ft, e) : ft;
  const s = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || undefined
  };
  const n = r => (typeof r == "function" && (r = r(s.value)), _n(s, r));
  return [Cn.bind(s), n];
}
function Us(t, e, s) {
  const n = Je(t, e, true, oe);
  ve(n);
}
function ni(t, e, s) {
  const n = Je(t, e, false, oe);
  ve(n);
}
function ri(t, e, s) {
  bn = gi;
  const n = Je(t, e, false, oe);
  if (!s || !s.render) {
    n.user = true;
  }
  if (re) {
    re.push(n);
  } else {
    ve(n);
  }
}
function rc(t, e) {
  let s;
  const n = Je(() => {
    if (s) {
      s();
    } else {
      K(t);
    }
    s = undefined;
  }, undefined, false, 0);
  n.user = true;
  return r => {
    s = r;
    ve(n);
  };
}
function ue(t, e, s) {
  s = s ? Object.assign({}, ft, s) : ft;
  const n = Je(t, e, true, 0);
  n.observers = null;
  n.observerSlots = null;
  n.comparator = s.equals || undefined;
  ve(n);
  return Cn.bind(n);
}
function ii(t) {
  return t && typeof t == "object" && "then" in t;
}
function ic(t, e, s) {
  let n;
  let r;
  let i;
  if (arguments.length === 2 && typeof e == "object" || arguments.length === 1) {
    n = true;
    r = t;
    i = e || {};
  } else {
    n = t;
    r = e;
    i = {};
  }
  let o = null;
  let c = Ut;
  let a = false;
  let u = ("initialValue" in i);
  let l = typeof n == "function" && ue(n);
  const h = new Set();
  const [f, g] = (i.storage || ne)(i.initialValue);
  const [E, C] = ne(undefined);
  const [D, F] = ne(undefined, {
    equals: false
  });
  const [b, P] = ne(u ? "ready" : "unresolved");
  function k(w, v, d, m) {
    if (o === w) {
      o = null;
      if (m !== undefined) {
        u = true;
      }
      if ((w === c || v === c) && i.onHydrated) {
        queueMicrotask(() => i.onHydrated(m, {
          value: v
        }));
      }
      c = Ut;
      T(v, d);
    }
    return v;
  }
  function T(w, v) {
    ee(() => {
      if (v === undefined) {
        g(() => w);
      }
      P(v !== undefined ? "errored" : u ? "ready" : "unresolved");
      C(v);
      for (const d of h.keys()) d.decrement();
      h.clear();
    }, false);
  }
  function A() {
    const v = f();
    const d = E();
    if (d !== undefined && !o) {
      throw d;
    }
    if (O && !O.user && hi) {
      Us(() => {
        D();
        if (o) {
          if (!(hi.resolved || h.has(hi))) {
            hi.increment();
            h.add(hi);
          }
        }
      });
    }
    return v;
  }
  function R(w = true) {
    if (w !== false && a) {
      return;
    }
    a = false;
    const v = l ? l() : n;
    if (v == null || v === false) {
      k(o, K(f));
      return;
    }
    const d = c !== Ut ? c : K(() => r(v, {
      value: f(),
      refetching: w
    }));
    return d && typeof d == "object" && "then" in d ? (o = d, "value" in d ? (d.status === "success" ? k(o, d.value, undefined, v) : k(o, undefined, undefined, v), d) : (a = true, queueMicrotask(() => a = false), ee(() => {
      P(u ? "refreshing" : "pending");
      F();
    }, false), d.then(m => k(d, m, undefined, v), m => k(d, undefined, m instanceof Error ? m : new Error(typeof m == "string" ? m : "Unknown error", {
      cause: m
    }), v)))) : (k(o, d, undefined, v), d);
  }
  Object.defineProperties(A, {
    state: {
      get: () => b()
    },
    error: {
      get: () => E()
    },
    loading: {
      get() {
        const w = b();
        return w === "pending" || w === "refreshing";
      }
    },
    latest: {
      get() {
        if (!u) {
          return A();
        }
        const w = E();
        if (w && !o) {
          throw w;
        }
        return f();
      }
    }
  });
  if (l) {
    Us(() => R(false));
  } else {
    R(false);
  }
  return [A, {
    refetch: R,
    mutate: g
  }];
}
function oi(t) {
  return ee(t, false);
}
function K(t) {
  if (O === null) {
    return t();
  }
  const e = O;
  O = null;
  try {
    return t();
  } finally {
    O = e;
  }
}
function oc(t, e, s) {
  const n = Array.isArray(t);
  let r;
  let i = s && s.defer;
  return o => {
    let c;
    if (n) {
      c = Array(t.length);
      for (let u = 0; u < t.length; u++) {
        c[u] = t[u]();
      }
    } else {
      c = t();
    }
    if (i) {
      i = false;
      return o;
    }
    const a = K(() => e(c, r, o));
    r = c;
    return a;
  };
}
function ac(t) {
  ri(() => K(t));
}
function ai(t) {
  if (!(M === null)) {
    if (M.cleanups === null) {
      M.cleanups = [t];
    } else {
      M.cleanups.push(t);
    }
  }
  return t;
}
function ts() {
  return O;
}
function cc() {
  return M;
}
function uc(t, e) {
  const s = M;
  const n = O;
  M = t;
  O = null;
  try {
    return ee(e, true);
  } catch (r) {
    vs(r);
  } finally {
    M = s;
    O = n;
  }
}
function ci(t) {
  const e = O;
  const s = M;
  return Promise.resolve().then(() => {
    O = e;
    M = s;
    let n;
    ee(t, false);
    O = M = null;
    return n ? n.done : undefined;
  });
}
const [ui, lc] = ne(false);
function hc() {
  return [ui, ci];
}
function dc(t, e) {
  const s = Symbol("context");
  return {
    id: s,
    Provider: mi(s),
    defaultValue: t
  };
}
function fc(t) {
  return M && M.context && M.context[t.id] !== undefined ? M.context[t.id] : t.defaultValue;
}
function li(t) {
  const e = ue(t);
  const s = ue(() => ss(e()));
  s.toArray = () => {
    const n = s();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  };
  return s;
}
let hi;
function Cn() {
  if (this.sources && this.state) {
    if (this.state === oe) {
      ve(this);
    } else {
      const t = W;
      W = null;
      ee(() => Dt(this), false);
      W = t;
    }
  }
  if (O) {
    const t = this.observers ? this.observers.length : 0;
    if (O.sources) {
      O.sources.push(this);
      O.sourceSlots.push(t);
    } else {
      O.sources = [this];
      O.sourceSlots = [t];
    }
    if (this.observers) {
      this.observers.push(O);
      this.observerSlots.push(O.sources.length - 1);
    } else {
      this.observers = [O];
      this.observerSlots = [O.sources.length - 1];
    }
  }
  return this.value;
}
function _n(t, e, s) {
  let n = t.value;
  if (!t.comparator || !t.comparator(n, e)) {
    t.value = e;
    if (t.observers && t.observers.length) {
      ee(() => {
        for (let r = 0; r < t.observers.length; r += 1) {
          const i = t.observers[r];
          const o = Wt && Wt.running;
          if (o) {
            Wt.disposed.has(i);
          }
          if (o ? !i.tState : !i.state) {
            if (i.pure) {
              W.push(i);
            } else {
              re.push(i);
            }
            if (i.observers) {
              kn(i);
            }
          }
          if (!o) {
            i.state = oe;
          }
        }
        if (W.length > 1e6) {
          W = [];
          throw new Error();
        }
      }, false);
    }
  }
  return e;
}
function ve(t) {
  if (!t.fn) {
    return;
  }
  _t(t);
  const e = Ct;
  di(t, t.value, e);
}
function di(t, e, s) {
  let n;
  const r = M;
  const i = O;
  O = M = t;
  try {
    n = t.fn(e);
  } catch (o) {
    if (t.pure) {
      t.state = oe;
      if (t.owned) {
        t.owned.forEach(_t);
      }
      t.owned = null;
    }
    t.updatedAt = s + 1;
    return vs(o);
  } finally {
    O = i;
    M = r;
  }
  if (!t.updatedAt || t.updatedAt <= s) {
    if (t.updatedAt != null && "observers" in t) {
      _n(t, n);
    } else {
      t.value = n;
    }
    t.updatedAt = s;
  }
}
function Je(t, e, s, n = oe, r) {
  const i = {
    fn: t,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: M,
    context: M ? M.context : null,
    pure: s
  };
  if (!(M === null)) {
    if (M !== wn) {
      if (M.owned) {
        M.owned.push(i);
      } else {
        M.owned = [i];
      }
    }
  }
  return i;
}
function mt(t) {
  if (t.state === 0) {
    return;
  }
  if (t.state === gt) {
    return Dt(t);
  }
  if (t.suspense && K(t.suspense.inFallback)) {
    return t.suspense.effects.push(t);
  }
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < Ct);) {
    if (t.state) {
      e.push(t);
    }
  }
  for (let s = e.length - 1; s >= 0; s--) {
    t = e[s];
    if (t.state === oe) {
      ve(t);
    } else if (t.state === gt) {
      const n = W;
      W = null;
      ee(() => Dt(t, e[0]), false);
      W = n;
    }
  }
}
function ee(t, e) {
  if (W) {
    return t();
  }
  let s = false;
  if (!e) {
    W = [];
  }
  if (re) {
    s = true;
  } else {
    re = [];
  }
  Ct++;
  try {
    const n = t();
    fi(s);
    return n;
  } catch (n) {
    if (!s) {
      re = null;
    }
    W = null;
    vs(n);
  }
}
function fi(t) {
  if (W) {
    Pn(W);
    W = null;
  }
  if (t) {
    return;
  }
  const e = re;
  re = null;
  if (e.length) {
    ee(() => bn(e), false);
  }
}
function Pn(t) {
  for (let e = 0; e < t.length; e++) {
    mt(t[e]);
  }
}
function gi(t) {
  let e;
  let s = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    if (n.user) {
      t[s++] = n;
    } else {
      mt(n);
    }
  }
  for (e = 0; e < s; e++) {
    mt(t[e]);
  }
}
function Dt(t, e) {
  t.state = 0;
  for (let s = 0; s < t.sources.length; s += 1) {
    const n = t.sources[s];
    if (n.sources) {
      const r = n.state;
      if (r === oe) {
        if (n !== e && (!n.updatedAt || n.updatedAt < Ct)) {
          mt(n);
        }
      } else if (r === gt) {
        Dt(n, e);
      }
    }
  }
}
function kn(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const s = t.observers[e];
    if (!s.state) {
      s.state = gt;
      if (s.pure) {
        W.push(s);
      } else {
        re.push(s);
      }
      if (s.observers) {
        kn(s);
      }
    }
  }
}
function _t(t) {
  let e;
  if (t.sources) {
    for (; t.sources.length;) {
      const s = t.sources.pop();
      const n = t.sourceSlots.pop();
      const r = s.observers;
      if (r && r.length) {
        const i = r.pop();
        const o = s.observerSlots.pop();
        if (n < r.length) {
          i.sourceSlots[o] = n;
          r[n] = i;
          s.observerSlots[n] = o;
        }
      }
    }
  }
  if (t.owned) {
    for (e = t.owned.length - 1; e >= 0; e--) {
      _t(t.owned[e]);
    }
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--) {
      t.cleanups[e]();
    }
    t.cleanups = null;
  }
  t.state = 0;
}
function Tn(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function vs(t, e = M) {
  const s = t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
  {
    console.error("solid error", s);
    return;
  }
}
function ss(t) {
  if (typeof t == "function" && !t.length) {
    return ss(t());
  }
  if (Array.isArray(t)) {
    const e = [];
    for (let s = 0; s < t.length; s++) {
      const n = ss(t[s]);
      if (Array.isArray(n)) {
        e.push.apply(e, n);
      } else {
        e.push(n);
      }
    }
    return e;
  }
  return t;
}
function mi(t, e) {
  return function (n) {
    let r;
    ni(() => r = K(() => (M.context = {
      ...M.context,
      [t]: n.value
    }, li(() => n.children))), undefined);
    return r;
  };
}
const Di = Symbol("fallback");
function Ws(t) {
  for (let e = 0; e < t.length; e++) {
    t[e]();
  }
}
function pi(t, e, s = {}) {
  let n = [];
  let r = [];
  let i = [];
  let o = 0;
  let c = e.length > 1 ? [] : null;
  ai(() => Ws(i));
  return () => {
    let a = t() || [];
    let u;
    let l;
    a[es];
    return K(() => {
      let f = a.length;
      let g;
      let E;
      let C;
      let D;
      let F;
      let b;
      let P;
      let k;
      let T;
      if (f === 0) {
        if (o !== 0) {
          Ws(i);
          i = [];
          n = [];
          r = [];
          o = 0;
          if (c) {
            c = [];
          }
        }
        if (s.fallback) {
          n = [Di];
          r[0] = it(A => (i[0] = A, s.fallback()));
          o = 1;
        }
      } else if (o === 0) {
        r = new Array(f);
        for (l = 0; l < f; l++) {
          n[l] = a[l];
          r[l] = it(h);
        }
        o = f;
      } else {
        C = new Array(f);
        D = new Array(f);
        if (c) {
          F = new Array(f);
        }
        b = 0;
        for (P = Math.min(o, f); b < P && n[b] === a[b]; b++) {
          ;
        }
        P = o - 1;
        for (k = f - 1; P >= b && k >= b && n[P] === a[k]; P--, k--) {
          C[k] = r[P];
          D[k] = i[P];
          if (c) {
            F[k] = c[P];
          }
        }
        g = new Map();
        E = new Array(k + 1);
        for (l = k; l >= b; l--) {
          T = a[l];
          u = g.get(T);
          E[l] = u === undefined ? -1 : u;
          g.set(T, l);
        }
        for (u = b; u <= P; u++) {
          T = n[u];
          l = g.get(T);
          if (l !== undefined && l !== -1) {
            C[l] = r[u];
            D[l] = i[u];
            if (c) {
              F[l] = c[u];
            }
            l = E[l];
            g.set(T, l);
          } else {
            i[u]();
          }
        }
        for (l = b; l < f; l++) {
          if (l in C) {
            r[l] = C[l];
            i[l] = D[l];
            if (c) {
              c[l] = F[l];
              c[l](l);
            }
          } else {
            r[l] = it(h);
          }
        }
        r = r.slice(0, o = f);
        n = a.slice(0);
      }
      return r;
    });
    function h(f) {
      i[l] = f;
      if (c) {
        const [g, E] = ne(l);
        c[l] = E;
        return e(a[l], g);
      }
      return e(a[l]);
    }
  };
}
function gc(t, e) {
  return K(() => t(e || {}));
}
function Qe() {
  return true;
}
const ns = {
  get(t, e, s) {
    return e === X ? s : t.get(e);
  },
  has(t, e) {
    return e === X ? true : t.has(e);
  },
  set: Qe,
  deleteProperty: Qe,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return t.get(e);
      },
      set: Qe,
      deleteProperty: Qe
    };
  },
  ownKeys(t) {
    return t.keys();
  }
};
function jt(t) {
  return (t = typeof t == "function" ? t() : t) ? t : {};
}
function Ei() {
  let t = 0;
  for (let e = this.length; t < e; ++t) {
    const s = this[t]();
    if (s !== undefined) {
      return s;
    }
  }
}
function mc(...t) {
  let e = false;
  for (let o = 0; o < t.length; o++) {
    const c = t[o];
    e = e || !!c && X in c;
    t[o] = typeof c == "function" ? (e = true, ue(c)) : c;
  }
  if (e) {
    return new Proxy({
      get(o) {
        for (let c = t.length - 1; c >= 0; c--) {
          const a = jt(t[c])[o];
          if (a !== undefined) {
            return a;
          }
        }
      },
      has(o) {
        for (let c = t.length - 1; c >= 0; c--) {
          if (o in jt(t[c])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const o = [];
        for (let c = 0; c < t.length; c++) {
          o.push(...Object.keys(jt(t[c])));
        }
        return [...new Set(o)];
      }
    }, ns);
  }
  const s = {};
  const n = Object.create(null);
  for (let o = t.length - 1; o >= 0; o--) {
    const c = t[o];
    if (!c) {
      continue;
    }
    const a = Object.getOwnPropertyNames(c);
    for (let u = a.length - 1; u >= 0; u--) {
      const l = a[u];
      if (l === "__proto__" || l === "constructor") {
        continue;
      }
      const h = Object.getOwnPropertyDescriptor(c, l);
      if (!n[l]) {
        n[l] = h.get ? {
          enumerable: true,
          configurable: true,
          get: Ei.bind(s[l] = [h.get.bind(c)])
        } : h.value !== undefined ? h : undefined;
      } else {
        const f = s[l];
        if (f) {
          if (h.get) {
            f.push(h.get.bind(c));
          } else if (h.value !== undefined) {
            f.push(() => h.value);
          }
        }
      }
    }
  }
  const r = {};
  const i = Object.keys(n);
  for (let o = i.length - 1; o >= 0; o--) {
    const c = i[o];
    const a = n[c];
    if (a && a.get) {
      Object.defineProperty(r, c, a);
    } else {
      r[c] = a ? a.value : undefined;
    }
  }
  return r;
}
function Dc(t, ...e) {
  if (X in t) {
    const r = new Set(e.length > 1 ? e.flat() : e[0]);
    const i = e.map(o => new Proxy({
      get(c) {
        return o.includes(c) ? t[c] : undefined;
      },
      has(c) {
        return o.includes(c) && c in t;
      },
      keys() {
        return o.filter(c => c in t);
      }
    }, ns));
    i.push(new Proxy({
      get(o) {
        return r.has(o) ? undefined : t[o];
      },
      has(o) {
        return r.has(o) ? false : o in t;
      },
      keys() {
        return Object.keys(t).filter(o => !r.has(o));
      }
    }, ns));
    return i;
  }
  const s = {};
  const n = e.map(() => ({}));
  for (const r of Object.getOwnPropertyNames(t)) {
    const i = Object.getOwnPropertyDescriptor(t, r);
    const o = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let c = false;
    let a = 0;
    for (const u of e) {
      if (u.includes(r)) {
        c = true;
        if (o) {
          n[a][r] = i.value;
        } else {
          Object.defineProperty(n[a], r, i);
        }
      }
      ++a;
    }
    if (!c) {
      if (o) {
        s[r] = i.value;
      } else {
        Object.defineProperty(s, r, i);
      }
    }
  }
  return [...n, s];
}
const Fi = t => `Stale read from <${t}>.`;
function pc(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return ue(pi(() => t.each, t.children, e || undefined));
}
function Ec(t) {
  const e = t.keyed;
  const s = ue(() => t.when, undefined, {
    equals: (n, r) => e ? n === r : !n == !r
  });
  return ue(() => {
    const n = s();
    if (n) {
      const r = t.children;
      return typeof r == "function" && r.length > 0 ? K(() => r(e ? n : () => {
        if (!K(s)) {
          throw `Stale read from <${"Show"}>.`;
        }
        return t.when;
      })) : r;
    }
    return t.fallback;
  }, undefined, undefined);
}
const Fc = {
  messageActionChatCreate: "ActionCreateGroup",
  messageActionChatCreateYou: "ActionYouCreateGroup",
  messageActionChatEditTitle: "ActionChangedTitle",
  messageActionChatEditPhoto: "ActionChangedPhoto",
  messageActionChatEditVideo: "ActionChangedVideo",
  messageActionChatDeletePhoto: "ActionRemovedPhoto",
  messageActionChatReturn: "ActionAddUserSelf",
  messageActionChatReturnYou: "ActionAddUserSelfYou",
  messageActionChatJoined: "ActionAddUserSelfMega",
  messageActionChatJoinedYou: "ChannelMegaJoined",
  messageActionChatAddUser: "ActionAddUser",
  messageActionChatAddUsers: "ActionAddUser",
  messageActionChatLeave: "ActionLeftUser",
  messageActionChatLeaveYou: "YouLeft",
  messageActionChatDeleteUser: "ActionKickUser",
  messageActionChatJoinedByLink: "ActionInviteUser",
  messageActionPinMessage: "Chat.Service.Group.UpdatedPinnedMessage",
  messageActionContactSignUp: "Chat.Service.PeerJoinedTelegram",
  messageActionChannelCreate: "ActionCreateChannel",
  messageActionChannelEditTitle: "Chat.Service.Channel.UpdatedTitle",
  messageActionChannelEditPhoto: "Chat.Service.Channel.UpdatedPhoto",
  messageActionChannelEditVideo: "Chat.Service.Channel.UpdatedVideo",
  messageActionChannelDeletePhoto: "Chat.Service.Channel.RemovedPhoto",
  messageActionHistoryClear: "HistoryCleared",
  messageActionDiscussionStarted: "DiscussionStarted",
  messageActionGiveawayLaunch: "BoostingGiveawayJustStarted",
  messageActionChannelJoined: "ChannelJoined",
  messageActionChannelMigrateFrom: "ActionMigrateFromGroup",
  "messageActionPhoneCall.video_in_ok": "ChatList.Service.VideoCall.incoming",
  "messageActionPhoneCall.video_out_ok": "ChatList.Service.VideoCall.outgoing",
  "messageActionPhoneCall.video_missed": "ChatList.Service.VideoCall.Missed",
  "messageActionPhoneCall.video_cancelled": "ChatList.Service.VideoCall.Cancelled",
  "messageActionPhoneCall.in_ok": "ChatList.Service.Call.incoming",
  "messageActionPhoneCall.out_ok": "ChatList.Service.Call.outgoing",
  "messageActionPhoneCall.missed": "ChatList.Service.Call.Missed",
  "messageActionPhoneCall.cancelled": "ChatList.Service.Call.Cancelled",
  "messageActionGroupCall.started": "Chat.Service.VoiceChatStarted.Channel",
  "messageActionGroupCall.started_by": "Chat.Service.VoiceChatStarted",
  "messageActionGroupCall.started_byYou": "Chat.Service.VoiceChatStartedYou",
  "messageActionGroupCall.ended": "Chat.Service.VoiceChatFinished.Channel",
  "messageActionGroupCall.ended_by": "Chat.Service.VoiceChatFinished",
  "messageActionGroupCall.ended_byYou": "Chat.Service.VoiceChatFinishedYou",
  messageActionBotAllowed: "Chat.Service.BotPermissionAllowed"
};
const vc = ie ? "Message.Unsupported.Mobile" : "Message.Unsupported.Desktop";
var le;
(t => {
  t.strings = new Map();
  t.countriesList = [];
  let e;
  let s;
  t.requestedServerLanguage = false;
  t.isRTL = false;
  [t.langCodeNormalized, t.setLangCodeNormalized] = ne();
  function n(d) {
    t.isRTL = d;
  }
  t.setRTL = n;
  function r(d) {
    t.lastRequestedLangCode = d;
    t.lastRequestedNormalizedLangCode = d.split("-")[0];
    0;
    t.setLangCodeNormalized(t.lastRequestedNormalizedLangCode.split("-")[0]);
  }
  function i() {
    return s || (s = Promise.all([_e.get("langPack"), t.polyfillPromise]).then(([d]) => d ? (t.lastRequestedLangCode || r(d.lang_code), E(d), d) : a()).finally(() => {
      s = undefined;
    }));
  }
  t.getCacheLangPack = i;
  function o() {
    if (t.timeFormat === "h12") {
      try {
        const d = T({
          hour: "numeric",
          minute: "numeric",
          hour12: true
        });
        const m = new Date();
        m.setHours(0);
        const y = d.format(m);
        t.amPmCache.am = y.split(/\s/)[1];
        m.setHours(12);
        const p = d.format(m);
        t.amPmCache.pm = p.split(/\s/)[1];
      } catch (d) {
        console.error("cannot get am/pm", d);
        t.amPmCache = {
          am: "AM",
          pm: "PM"
        };
      }
    }
  }
  function c(d, m = !!t.timeFormat && t.timeFormat !== d) {
    t.timeFormat = d;
    o();
    if (m) {
      k.clear();
      Array.from(document.querySelectorAll(".i18n")).forEach(p => {
        const I = t.weakMap.get(p);
        if (I instanceof A) {
          I.update();
        }
      });
    }
  }
  t.setTimeFormat = c;
  function a() {
    const d = x.langPackCode;
    r(d);
    return Promise.all([V(() => import("./lang-BokG0Wef.js"), [], import.meta.url), V(() => import("./langSign-CN-ja8rh.js"), [], import.meta.url), V(() => import("./countries-CzeCvYH8.js"), [], import.meta.url)]).then(([m, y, p]) => {
      const I = [];
      h(m.default, I);
      h(y.default, I);
      const $ = {
        _: "langPackDifference",
        from_version: 0,
        lang_code: d,
        strings: I,
        version: 0,
        local: true,
        countries: p.default
      };
      return g($);
    });
  }
  t.loadLocalLangPack = a;
  function u(d, m) {
    m = true;
    t.requestedServerLanguage = true;
    const y = S.managers;
    return Promise.all([y.apiManager.invokeApiCacheable("langpack.getLangPack", {
      lang_code: d,
      lang_pack: m ? "web" : x.langPack
    }), !m && y.apiManager.invokeApiCacheable("langpack.getLangPack", {
      lang_code: d,
      lang_pack: "android"
    }), V(() => import("./lang-BokG0Wef.js"), [], import.meta.url), V(() => import("./langSign-CN-ja8rh.js"), [], import.meta.url), y.apiManager.invokeApiCacheable("help.getCountriesList", {
      lang_code: d,
      hash: 0
    }), t.polyfillPromise]);
  }
  t.loadLangPack = u;
  function l(d, m) {
    return S.managers.apiManager.invokeApi("langpack.getStrings", {
      lang_pack: x.langPack,
      lang_code: d,
      keys: m
    });
  }
  t.getStrings = l;
  function h(d, m = []) {
    for (const y in d) {
      const p = d[y];
      if (typeof p == "string") {
        m.push({
          _: "langPackString",
          key: y,
          value: p
        });
      } else {
        m.push({
          _: "langPackStringPluralized",
          key: y,
          ...p
        });
      }
    }
    return m;
  }
  t.formatLocalStrings = h;
  function f(d, m) {
    r(d);
    return u(d, m).then(([y, p, I, $, N, de]) => {
      let Ae = [];
      [I, $].forEach(Pt => {
        h(Pt.default, Ae);
      });
      Ae = Ae.concat(...[y.strings, p.strings].filter(Boolean));
      y.strings = Ae;
      y.countries = N;
      return g(y);
    });
  }
  t.getLangPack = f;
  function g(d) {
    d.appVersion = x.langPackVersion;
    return _e.set({
      langPack: d
    }).then(() => (E(d), d));
  }
  t.saveLangPack = g;
  t.polyfillPromise = function () {
    return typeof Intl < "u" && typeof Intl.PluralRules < "u" ? Promise.resolve() : V(() => import("./pluralPolyfill-B0qpVVRH.js"), [], import.meta.url).then(m => {
      window.Intl = Object.assign(typeof Intl < "u" ? Intl : {}, m.default);
    });
  }();
  function E(d) {
    const m = t.lastRequestedLangCode;
    if (d.lang_code !== m) {
      return;
    }
    try {
      e = new Intl.PluralRules(t.lastRequestedNormalizedLangCode);
    } catch (p) {
      console.error("pluralRules error", p);
      e = new Intl.PluralRules(t.lastRequestedNormalizedLangCode.split("-", 1)[0]);
    }
    try {
      e = new Intl.PluralRules(d.lang_code);
    } catch (p) {
      console.error("pluralRules error", p);
      e = new Intl.PluralRules(d.lang_code.split("-", 1)[0]);
    }
    t.strings.clear();
    for (const p of d.strings) t.strings.set(p.key, p);
    if (d.countries) {
      t.countriesList.length = 0;
      t.countriesList.push(...d.countries.countries);
      d.countries.countries.forEach(p => {
        if (p.name) {
          const I = p.default_name;
          t.strings.set(I, {
            _: "langPackString",
            key: I,
            value: p.name
          });
        }
      });
    }
    if (t.lastAppliedLangCode !== m) {
      if (t.lastAppliedLangCode && S.myId) {
        S.managers.appReactionsManager.resetAvailableReactions();
        S.managers.appUsersManager.indexMyself();
        S.managers.dialogsStorage.indexMyDialog();
      }
      t.lastAppliedLangCode = m;
      k.clear();
      o();
      S.dispatchEvent("language_change", m);
    }
    Array.from(document.querySelectorAll(".i18n")).forEach(p => {
      const I = t.weakMap.get(p);
      if (I) {
        I.update();
      }
    });
  }
  t.applyLangPack = E;
  function C(d, m, y, p) {
    const I = m[p === undefined ? y.i++ : p];
    if (Array.isArray(I)) {
      d.push(...I);
    } else {
      d.push(I);
    }
  }
  function D(d, m, y) {
    if (!y) {
      y = {
        i: 0
      };
      const N = d.match(/(%|un)\d+/g);
      if (N?.length) {
        y.i = Math.max(...N.map(de => +de.replace(/\D/g, "")));
      }
    }
    const p = [];
    const I = /(\*\*|__)(.+?)\1|(\n)|(\[.+?\]\(.*?\))|un\d|%\d\$.|%\S/g;
    let $ = 0;
    d.replace(I, (N, de, Ae, Pt, Le, kt, gr) => {
      if (kt > $) {
        p.push(gr.slice($, kt));
      }
      if (de) {
        let q;
        switch (de) {
          case "**":
            {
              q = document.createElement("b");
              break;
            }
          case "__":
            {
              q = document.createElement("i");
              break;
            }
        }
        q.append(...D(Ae, m, y));
        p.push(q);
      } else if (Pt) {
        p.push(document.createElement("br"));
      } else if (Le) {
        const q = Le.lastIndexOf("]");
        const mr = Le.slice(1, q);
        const Tt = Le.slice(q + 2, Le.length - 1);
        let Y;
        if (Tt && Fn(Tt)) {
          Y = document.createElement("a");
          const Mt = yn(Tt);
          Y.href = Mt.url;
          if (Mt.onclick) {
            Y.setAttribute("onclick", Mt.onclick + "(this)");
          }
          ei(Y);
        } else {
          Y = m[y.i++];
          if (Y instanceof DocumentFragment) {
            Y = Y.firstChild;
          }
          if (typeof Y != "string") {
            Y.textContent = "";
          }
        }
        const Ms = D(mr, m, y);
        if (typeof Y == "string") {
          p.push(...Ms);
        } else {
          Y.append(...Ms);
          p.push(Y);
        }
      } else if (m) {
        const q = N.replace(/\D/g, "");
        C(p, m, y, !q || Number.isNaN(+q) ? undefined : Math.min(m.length - 1, +q - 1));
      }
      $ = kt + N.length;
      return "";
    });
    if ($ !== d.length) {
      p.push(d.slice($));
    }
    return p;
  }
  t.superFormatter = D;
  function F(d, m = false, y) {
    const p = t.strings.get(d);
    let I;
    if (p) {
      if (p._ === "langPackStringPluralized" && y?.length) {
        let N = y[0];
        if (typeof N == "string") {
          N = +N.replace(/\D/g, "");
        }
        const de = e.select(N);
        I = p[de + "_value"] || p.other_value;
      } else if (p._ === "langPackString") {
        I = p.value;
      } else {
        I = d;
      }
    } else {
      I = d;
    }
    const $ = D(I, y);
    return m ? $.map(N => N instanceof Node ? N.textContent : N).join("") : $;
  }
  t.format = F;
  t.weakMap = new WeakMap();
  class b {
    constructor(m) {
      this.element = m?.element || document.createElement("span");
      this.element.classList.add("i18n");
      this.property = m?.property;
      t.weakMap.set(this.element, this);
    }
  }
  class P extends b {
    constructor(m = {}) {
      super({
        ...m,
        property: m.property ?? "innerHTML"
      });
      if (m?.key) {
        this.update(m);
      }
    }
    update(m) {
      Xt(this, m);
      if (this.property === "innerHTML") {
        this.element.replaceChildren(...F(this.key, false, this.args));
        if (this.args?.length) {
          this.element.normalize();
        }
      } else {
        const y = this.element[this.property];
        const p = F(this.key, true, this.args);
        if (y === undefined) {
          this.element.dataset[this.property] = p;
        } else {
          this.element[this.property] = p;
        }
      }
    }
    compareAndUpdate(m) {
      if (!(this.key === m.key && En(this.args, m.args))) {
        return this.update(m);
      }
    }
  }
  t.IntlElement = P;
  const k = new Map();
  function T(d = {}) {
    const m = JSON.stringify(d);
    let y = k.get(m);
    if (!y) {
      y = new Intl.DateTimeFormat(t.lastRequestedNormalizedLangCode + "-u-hc-" + t.timeFormat, d);
      k.set(m, y);
    }
    return y;
  }
  t.getDateTimeFormat = T;
  t.amPmCache = {
    am: "AM",
    pm: "PM"
  };
  class A extends b {
    constructor(m) {
      super({
        ...m,
        property: m.property ?? "textContent"
      });
      Sn(this.element);
      if (m?.date) {
        this.update(m);
      }
    }
    update(m) {
      Xt(this, m);
      let y;
      if (this.options.hour && this.options.minute && Object.keys(this.options).length === 2) {
        const p = this.date.getHours();
        y = ("0" + (t.timeFormat === "h12" ? p % 12 || 12 : p)).slice(-2) + ":" + ("0" + this.date.getMinutes()).slice(-2);
        if (t.timeFormat === "h12") {
          y += " " + (p < 12 ? t.amPmCache.am : t.amPmCache.pm);
        }
      } else {
        const p = T(this.options);
        y = p.format(this.date).charAt(0).toUpperCase() + p.format(this.date).slice(1);
      }
      this.element[this.property] = y;
    }
  }
  t.IntlDateElement = A;
  function R(d, m) {
    return new P({
      key: d,
      args: m
    }).element;
  }
  t.i18n = R;
  function w(d) {
    return new P(d).element;
  }
  t.i18n_ = w;
  function v(d, m, y, p) {
    return new P({
      element: d,
      key: m,
      args: y,
      property: p
    }).element;
  }
  t._i18n = v;
})(le || (le = {}));
const Ge = le.i18n;
const Ac = le.i18n_;
const yc = le._i18n;
function vi(t, e) {
  const s = t.slice(0, 1);
  for (let n = 1; n < t.length; ++n) {
    const r = t.length - 1 === n;
    s.push(typeof e == "function" ? e(r) : e);
    s.push(t[n]);
  }
  return s;
}
function Sc(t, e = true, s) {
  const n = vi(t, r => {
    const i = r && e ? "AutoDownloadSettings.LastDelimeter" : "AutoDownloadSettings.Delimeter";
    return s ? le.format(i, true) : Ge(i);
  });
  return s ? n.join("") : n;
}
if (Or) {
  Or.I18n = le;
}
function Ai(t) {
  return +t < 0;
}
function yi(t) {
  return +t >= 0;
}
String.prototype.toUserId = function () {
  return (+this).toUserId();
};
String.prototype.toChatId = function () {
  return (+this).toChatId();
};
String.prototype.toPeerId = function (t) {
  return (+this).toPeerId(t);
};
String.prototype.isPeerId = function () {
  return /^[\d-]/.test(this.toString());
};
Number.prototype.toUserId = function () {
  return +this;
};
Number.prototype.toChatId = function () {
  return Math.abs(this);
};
Number.prototype.toPeerId = function (t) {
  return t === undefined ? +this : t ? -Math.abs(this) : +this;
};
Number.prototype.isPeerId = function () {
  return true;
};
[["isUser", yi], ["isAnyChat", Ai]].forEach(t => {
  const e = Array.isArray(t) ? t[0] : t;
  const s = Array.isArray(t) ? t[1] : t;
  String.prototype[e] = function () {
    return s.call(null, this.toString());
  };
  Number.prototype[e] = function () {
    return s.call(null, +this);
  };
});
function Si(...t) {
  const e = t.reduce((r, i) => r + (i.byteLength || i.length), 0);
  const s = new Uint8Array(e);
  let n = 0;
  t.forEach(r => {
    s.set(r instanceof ArrayBuffer ? new Uint8Array(r) : r, n);
    n += r.byteLength || r.length;
  });
  return s;
}
Uint8Array.prototype.concat = function (...t) {
  return Si(this, ...t);
};
Uint8Array.prototype.toJSON = function () {
  return [...this];
};
Promise.prototype.finally = Promise.prototype.finally || function (t) {
  const e = s => Promise.resolve(t()).then(s);
  return this.then(s => Promise.resolve(t()).then(() => s), s => Promise.resolve(t()).then(() => Promise.reject(s)));
};
class bi {
  constructor() {
    this.convertPromises = {};
  }
  init() {
    this.worker = new Worker(new URL("" + new URL("webp.worker-CJXTr_cK.js", import.meta.url).href, import.meta.url), {
      type: "module"
    });
    this.worker.addEventListener("message", e => {
      const n = e.data.payload;
      const r = this.convertPromises[n.fileName];
      if (r) {
        if (n.bytes) {
          r.resolve(n.bytes);
        } else {
          r.reject();
        }
        delete this.convertPromises[n.fileName];
      }
    });
  }
  postMessage(e) {
    if (this.init) {
      this.init();
      this.init = null;
    }
    this.worker.postMessage(e);
  }
  convert(e, s) {
    if (this.convertPromises.hasOwnProperty(e)) {
      return this.convertPromises[e];
    }
    const n = se();
    this.postMessage({
      type: "convertWebp",
      payload: {
        fileName: e,
        bytes: s
      }
    });
    return this.convertPromises[e] = n;
  }
}
const Mn = new bi();
Or.webpWorkerController = Mn;
class wi {
  constructor() {
    this.prefix = "";
    this.cache = {};
    this.useStorage = true;
    if (H.test) {
      this.prefix = "t_";
    }
  }
  get(e, s = true) {
    if (this.cache.hasOwnProperty(e) && s) {
      return this.cache[e];
    }
    if (this.useStorage) {
      let n;
      try {
        n = localStorage.getItem(this.prefix + e);
      } catch {
        this.useStorage = false;
        throw me("STORAGE_OFFLINE");
      }
      if (n !== null) {
        try {
          n = JSON.parse(n);
        } catch {}
      } else {
        n = undefined;
      }
      return n;
    } else {
      throw me("STORAGE_OFFLINE");
    }
  }
  set(e, s = false) {
    let n;
    for (const r in e) if (e.hasOwnProperty(r)) {
      const i = e[r];
      this.cache[r] = i;
      if (!s) {
        try {
          if (!this.useStorage) {
            throw me("STORAGE_OFFLINE");
          }
          const o = JSON.stringify(i);
          localStorage.setItem(this.prefix + r, o);
        } catch (o) {
          this.useStorage = false;
          n = o;
        }
      }
    }
    if (n) {
      throw n;
    }
  }
  delete(e, s = false) {
    e = "" + e;
    if (!s) {
      delete this.cache[e];
    }
    try {
      localStorage.removeItem(this.prefix + e);
    } catch {}
  }
  clear() {
    const e = ["dc", "server_time_offset", "xt_instance", "user_auth", "state_id", "k_build"];
    for (let s = 1; s <= 5; ++s) {
      e.push(`dc${s}_server_salt`);
      e.push(`dc${s}_auth_key`);
      e.push(`dc${s}_hash`);
    }
    for (const s of e) this.delete(s, true);
  }
  toggleStorage(e, s) {
    this.useStorage = e;
    if (!!s) {
      if (!e) {
        this.clear();
      } else {
        return this.set(this.cache);
      }
    }
  }
}
const St = class St {
  constructor() {
    St.STORAGES.push(this);
    if (!pe) {
      this.storage = new wi();
    }
  }
  async proxy(e, ...s) {
    return pe ? qe.getInstance().invoke("localStorageProxy", {
      type: e,
      args: s
    }) : (s = Array.prototype.slice.call(s), this.storage[e].apply(this.storage, s));
  }
  get(e, s) {
    return this.proxy("get", e, s);
  }
  set(e, s) {
    return this.proxy("set", e, s);
  }
  delete(e, s) {
    return this.proxy("delete", e, s);
  }
  clear() {
    return this.proxy("clear");
  }
  toggleStorage(e, s) {
    return this.proxy("toggleStorage", e, s);
  }
};
St.STORAGES = [];
const B = new St();
Or.appStorage = B;
function Ci(t) {
  return ze && t instanceof TouchEvent && t.touches[0].clientX < 30;
}
class _i {
  constructor() {
    this.onPopState = e => {
      const s = window.location.hash;
      const n = e.state;
      if (this.debug) {
        this.log("popstate", e, this.isPossibleSwipe, s);
      }
      if (s !== this.currentHash) {
        if (this.debug) {
          this.log.warn(`hash changed, new=${s}, current=${this.currentHash}, overridden=${this.overriddenHash}`);
        }
        if (n === this.id && this.overriddenHash && this.overriddenHash !== s) {
          this.overrideHash(this.overriddenHash);
        } else if (n && !this.overriddenHash && s) {
          this.overrideHash();
        } else {
          this.currentHash = s;
          if (this.onHashChange) {
            this.onHashChange();
          }
          return;
        }
      }
      if (n !== this.id && (this.pushState(), !this.navigations.length)) {
        return;
      }
      const r = this.navigations.pop();
      if (!r) {
        this.pushState();
        return;
      }
      this.manual = !this.isPossibleSwipe;
      this.handleItem(r, this.navigations.length);
    };
    this.onKeyDown = e => {
      const s = this.navigations[this.navigations.length - 1];
      if (s && e.key === "Escape" && (!s.onEscape || s.onEscape())) {
        zt(e);
        this.back(s.type);
      }
    };
    this.onTouchStart = e => {
      if (!(e.touches.length > 1)) {
        if (this.debug) {
          this.log("touchstart");
        }
        if (ze && e instanceof TouchEvent && e.touches[0].clientX < 30) {
          this.isPossibleSwipe = true;
          window.addEventListener("touchend", () => {
            setTimeout(() => {
              this.isPossibleSwipe = false;
            }, 100);
          }, {
            passive: true,
            once: true
          });
        }
      }
    };
    this.navigations = [];
    this.id = Date.now();
    this.manual = false;
    this.log = Q("NC");
    this.debug = true;
    this.currentHash = window.location.hash;
    this.overriddenHash = "";
    this.isPossibleSwipe = false;
    window.addEventListener("popstate", this.onPopState);
    window.addEventListener("keydown", this.onKeyDown, {
      capture: true,
      passive: false
    });
    if (ze) {
      const e = {
        passive: true
      };
      window.addEventListener("touchstart", this.onTouchStart, e);
    }
    history.scrollRestoration = "manual";
    this.pushState();
  }
  overrideHash(e = "") {
    if (e && e[0] !== "#") {
      e = "#" + e;
    } else if (e === "#") {
      e = "";
    }
    if (this.currentHash !== e) {
      this.overriddenHash = this.currentHash = e;
      this.replaceState();
      this.pushState();
    }
  }
  handleItem(e, s = this.navigations.indexOf(e)) {
    const n = e.onPop(this.manual ? undefined : false);
    if (this.debug) {
      this.log("popstate, navigation:", e, this.navigations);
    }
    if (n === false) {
      this.spliceItems(Math.min(this.navigations.length, s), 0, e);
    } else if (!e.noBlurOnPop) {
      rn();
    }
    this.manual = false;
  }
  findItemByType(e) {
    for (let s = this.navigations.length - 1; s >= 0; --s) {
      const n = this.navigations[s];
      if (n.type === e) {
        return {
          item: n,
          index: s
        };
      }
    }
  }
  back(e) {
    if (e) {
      const s = this.findItemByType(e);
      if (s) {
        this.backByItem(s.item, s.index);
        return;
      }
    }
    history.back();
  }
  backByItem(e, s = this.navigations.indexOf(e)) {
    if (s !== -1) {
      this.manual = true;
      this.navigations.splice(s, 1);
      this.handleItem(e, s);
    }
  }
  onItemAdded(e) {
    if (this.debug) {
      this.log("onItemAdded", e, this.navigations);
    }
    if (!e.noHistory) {
      this.pushState();
    }
  }
  pushItem(e) {
    this.navigations.push(e);
    this.onItemAdded(e);
  }
  unshiftItem(e) {
    this.navigations.unshift(e);
    this.onItemAdded(e);
  }
  spliceItems(e, s, ...n) {
    this.navigations.splice(e, s, ...n);
    n.forEach(r => {
      this.onItemAdded(r);
    });
  }
  pushState() {
    if (this.debug) {
      this.log("push");
    }
    this.manual = false;
    history.pushState(this.id, "");
  }
  replaceState() {
    if (this.debug) {
      this.log.warn("replace");
    }
    const e = location.origin + location.pathname + location.search + this.overriddenHash;
    history.replaceState(this.id, "", e);
  }
  removeItem(e) {
    if (e) {
      rt(this.navigations, e);
    }
  }
  removeByType(e, s = false) {
    for (let n = this.navigations.length - 1; n >= 0 && !(this.navigations[n].type === e && (this.navigations.splice(n, 1), s)); --n) {
      ;
    }
  }
}
const is = new _i();
Or.appNavigationController = is;
class Pi {
  reload() {
    try {
      is.spliceItems(0, Infinity);
      is.overrideHash();
      location.reload();
    } catch {}
  }
  close() {
    try {
      window.close();
    } catch {}
  }
  focus() {
    window.focus();
  }
}
const Ln = new Pi();
function j(t) {
  if (t === null || typeof t != "object") {
    return t;
  }
  if (t instanceof Date) {
    return new Date(t.getTime());
  }
  if (Array.isArray(t)) {
    return t.map(r => j(r));
  }
  if (ArrayBuffer.isView(t)) {
    return t.slice();
  }
  const e = new t.constructor();
  for (var s in t) if (t.hasOwnProperty(s)) {
    e[s] = j(t[s]);
  }
  return e;
}
const pt = typeof SharedWorker < "u" && !H.noSharedWorker;
const ki = ge ? "touchstart" : "mousemove";
class Ti extends Fe {
  constructor() {
    super();
    this._isIdle = true;
    this.focusPromise = Promise.resolve();
    this.focusResolve = () => {};
    window.addEventListener("blur", () => {
      this.isIdle = true;
      window.addEventListener("focus", () => {
        this.isIdle = false;
      }, {
        once: true
      });
    });
    window.addEventListener(ki, () => {
      this.isIdle = false;
    }, {
      once: true,
      passive: true
    });
    this.addEventListener("change", e => {
      if (e) {
        this.focusPromise = new Promise(s => {
          this.focusResolve = s;
        });
      } else {
        this.focusResolve();
      }
    });
  }
  getFocusPromise() {
    return this.focusPromise;
  }
  get isIdle() {
    return this._isIdle;
  }
  set isIdle(e) {
    if (this._isIdle !== e) {
      this._isIdle = e;
      this.dispatchEvent("change", e);
    }
  }
}
const Et = new Ti();
const Mi = 5e3;
const Li = 3e4;
const Ii = 2e4;
class Ri extends Fe {
  constructor() {
    super(false);
    this.log = Q("INSTANCE");
    this.clearInstance = () => {
      if (this.masterInstance && !this.deactivated) {
        this.log.warn("clear master instance");
        B.delete("xt_instance");
      }
    };
    this.checkInstance = async (e = Et.isIdle) => {
      if (this.deactivated) {
        return;
      }
      const s = Date.now();
      const n = {
        id: this.instanceId,
        idle: e,
        time: s
      };
      const [r, i = x.build] = await Promise.all([B.get("xt_instance", false), B.get("k_build", false)]);
      if (i > x.build) {
        this.masterInstance = false;
        S.managers.networkerFactory.stopAll();
        this.deactivateInstance("version");
        Zn.toggleStorages(false, false);
        return;
      } else if (pt) {
        B.set({
          xt_instance: n
        });
        return;
      }
      if (!e || !r || r.id === this.instanceId || r.time < s - Ii) {
        B.set({
          xt_instance: n
        });
        if (!this.masterInstance) {
          this.masterInstance = true;
          S.managers.networkerFactory.startAll();
          this.log.warn("now master instance", n);
        }
        this.clearDeactivateTimeout();
      } else if (this.masterInstance) {
        this.masterInstance = false;
        S.managers.networkerFactory.stopAll();
        this.log.warn("now idle instance", n);
        if (!this.deactivateTimeout) {
          this.deactivateTimeout = window.setTimeout(() => this.deactivateInstance("tabs"), Li);
        }
      }
    };
    this.log = Q("INSTANCE");
    this.instanceId = fn;
  }
  get deactivatedReason() {
    return this.deactivated;
  }
  start() {
    this.reset();
    if (!this.started) {
      this.started = true;
      Et.addEventListener("change", this.checkInstance);
      setInterval(this.checkInstance, Mi);
      this.checkInstance();
      try {
        document.documentElement.addEventListener("beforeunload", this.clearInstance);
      } catch {}
    }
  }
  reset() {
    this.masterInstance = false;
    this.clearDeactivateTimeout();
    this.deactivated = undefined;
  }
  activateInstance() {
    if (this.deactivated) {
      this.reset();
      this.checkInstance(false);
      this.dispatchEvent("activated");
    }
  }
  deactivateInstance(e) {
    if (!(this.masterInstance || this.deactivated)) {
      this.log.warn("deactivate", e);
      this.clearDeactivateTimeout();
      this.deactivated = e;
      this.dispatchEvent("deactivated", e);
    }
  }
  clearDeactivateTimeout() {
    if (this.deactivateTimeout) {
      clearTimeout(this.deactivateTimeout);
      this.deactivateTimeout = 0;
    }
  }
}
const Ft = new Ri();
if (Or) {
  Or.singleInstance = Ft;
}
function Bi(t, e) {
  if (t !== undefined) {
    t = +t.toFixed(0);
    return e ? t < ht ? t : t % ht : t;
  }
}
function xi(t) {
  return Bi(t, true);
}
const Ni = 1e4;
class In extends Fe {
  constructor() {
    super(false);
    this.isAvailable = true;
    this.isPushEnabled = false;
    this.localNotificationsAvailable = true;
    this.started = false;
    this.settings = {};
    this.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    this.userVisibleOnly = !this.isFirefox;
    this.log = Q("PUSH-API");
    this.subscribe = () => {
      if (this.isAvailable) {
        navigator.serviceWorker.ready.then(e => {
          e.pushManager.subscribe({
            userVisibleOnly: this.userVisibleOnly
          }).then(s => {
            this.isPushEnabled = true;
            this.pushSubscriptionNotify("subscribe", s);
          }).catch(s => {
            if (Notification.permission === "denied") {
              this.log("Permission for Notifications was denied");
            } else {
              this.log("Unable to subscribe to push.", s);
              if (!this.userVisibleOnly) {
                this.userVisibleOnly = true;
                setTimeout(this.subscribe, 0);
              }
            }
          });
        });
      }
    };
    this.isAliveNotify = () => {
      if (!this.isAvailable || Ft.deactivatedReason) {
        return;
      }
      this.settings.baseUrl = (location.href || "").replace(/#.*$/, "");
      const e = {};
      const s = {
        push_action_mute1d: ie ? "PushNotification.Action.Mute1d.Mobile" : "PushNotification.Action.Mute1d",
        push_action_settings: ie ? "PushNotification.Action.Settings.Mobile" : "PushNotification.Action.Settings",
        push_message_nopreview: "PushNotification.Message.NoPreview"
      };
      for (const n in s) e[n] = le.format(s[n], true);
      this.serviceMessagePort.invokeVoid("pushPing", {
        localNotifications: this.localNotificationsAvailable,
        lang: e,
        settings: this.settings
      });
      this.isAliveTO = setTimeout(this.isAliveNotify, Ni);
    };
    if (!("PushManager" in window) || !("Notification" in window) || !("serviceWorker" in navigator)) {
      this.log.warn("Push messaging is not supported.");
      this.isAvailable = false;
      this.localNotificationsAvailable = false;
    }
    if (this.isAvailable && Notification.permission === "denied") {
      this.log.warn("The user has blocked notifications.");
    }
  }
  start() {
    if (!this.started) {
      this.started = true;
      this.getSubscription();
      this.setUpServiceWorkerChannel();
    }
  }
  setLocalNotificationsDisabled() {
    this.localNotificationsAvailable = false;
  }
  getSubscription() {
    if (this.isAvailable) {
      navigator.serviceWorker.ready.then(e => {
        e.pushManager.getSubscription().then(s => {
          this.isPushEnabled = !!s;
          this.pushSubscriptionNotify("init", s);
        }).catch(s => {
          this.log.error("Error during getSubscription()", s);
        });
      });
    }
  }
  unsubscribe() {
    if (this.isAvailable) {
      navigator.serviceWorker.ready.then(e => {
        e.pushManager.getSubscription().then(s => {
          this.isPushEnabled = false;
          if (s) {
            this.pushSubscriptionNotify("unsubscribe", s);
            setTimeout(() => {
              s.unsubscribe().then(n => {
                this.isPushEnabled = false;
              }).catch(n => {
                this.log.error("Unsubscription error: ", n);
              });
            }, 3e3);
          }
        }).catch(s => {
          this.log.error("Error thrown while unsubscribing from push messaging.", s);
        });
      });
    }
  }
  forceUnsubscribe() {
    if (this.isAvailable) {
      navigator.serviceWorker.ready.then(e => {
        e.pushManager.getSubscription().then(s => {
          this.log.warn("force unsubscribe", s);
          if (s) {
            s.unsubscribe().then(n => {
              this.log.warn("force unsubscribe successful", n);
              this.isPushEnabled = false;
            }).catch(n => {
              this.log.error("Unsubscription error: ", n);
            });
          }
        }).catch(s => {
          this.log.error("Error thrown while unsubscribing from push messaging.", s);
        });
      });
    }
  }
  setSettings(e) {
    this.settings = j(e);
    clearTimeout(this.isAliveTO);
    this.isAliveNotify();
  }
  hidePushNotifications() {
    if (this.isAvailable) {
      this.serviceMessagePort.invokeVoid("notificationsClear", undefined);
    }
  }
  setUpServiceWorkerChannel() {
    if (this.isAvailable) {
      this.serviceMessagePort.addEventListener("pushClick", e => {
        if (Ft.deactivatedReason) {
          Ln.reload();
          return;
        }
        this.dispatchEvent("push_notification_click", e);
      });
      navigator.serviceWorker.ready.then(this.isAliveNotify);
    }
  }
  pushSubscriptionNotify(e, s) {
    if (s) {
      const n = s.toJSON();
      if (!n || !n.endpoint || !n.keys || !n.keys.p256dh || !n.keys.auth) {
        this.log.warn("Invalid push subscription", n);
        this.unsubscribe();
        this.isAvailable = false;
        this.pushSubscriptionNotify(e);
        return;
      }
      this.log.warn("Push", e, n);
      this.dispatchEvent("push_" + e, {
        tokenType: 10,
        tokenValue: JSON.stringify(n)
      });
    } else {
      this.log.warn("Push", e, false);
      this.dispatchEvent("push_" + e, false);
    }
  }
  ignorePushByMid(e, s) {
    if (this.isAvailable) {
      this.serviceMessagePort.invokeVoid("shownNotification", e + "_" + Bi(s, true));
    }
  }
}
const vt = new In();
if (Or) {
  Or.webPushApiManager = vt;
}
const Ui = Object.freeze(Object.defineProperty({
  __proto__: null,
  WebPushApiManager: In,
  default: vt
}, Symbol.toStringTag, {
  value: "Module"
}));
function Wi(t) {
  const e = document.createElement("script");
  const s = new Promise(n => {
    e.onload = e.onerror = () => {
      n(e);
    };
  });
  e.src = t;
  document.body.appendChild(e);
  return s;
}
function ji(t) {
  const e = Date.now();
  return t ? e / 1e3 | 0 : e;
}
class On {
  constructor() {
    this.disabled = H.test || !x.domains.includes(location.hostname);
  }
  setAuthorized(e) {
    if (!this.disabled) {
      return B.get("tgme_sync").then(s => {
        const n = ji(true);
        if (e && s?.canRedirect === e && s.ts + 86400 > n) {
          return;
        }
        B.set({
          tgme_sync: {
            canRedirect: e,
            ts: n
          }
        });
        const r = `_websync_?authed=${e ? "1" : "0"}&version=${encodeURIComponent(x.version + " " + x.suffix)}`;
        const o = ["//telegram.me/" + r, "//t.me/" + r].map(c => Wi(c).then(a => {
          a.remove();
        }));
        return Promise.all(o);
      });
    }
  }
}
const As = new On();
if (Or) {
  Or.telegramMeWebManager = As;
}
const Vi = Object.freeze(Object.defineProperty({
  __proto__: null,
  TelegramMeWebManager: On,
  default: As
}, Symbol.toStringTag, {
  value: "Module"
}));
const ys = typeof RTCPeerConnection < "u" && !Me;
let ot;
if (!J) {
  ot = true;
} else {
  try {
    ot = +navigator.userAgent.match(/Version\/(.+?) /)[1] >= 14;
  } catch {
    ot = false;
  }
}
const Yi = ot;
const Hi = ("filter" in (document.createElement("canvas").getContext("2d") || {}));
const $i = !!navigator?.geolocation?.getCurrentPosition && false;
const Rn = document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp");
const Ye = new Set(["image/jpeg", "image/png", "image/bmp"]);
if (Rn) {
  Ye.add("image/webp");
}
const Ki = [["image/jxl", "data:image/jxl;base64,/woIAAAMABKIAgC4AF3lEgAAFSqjjBu8nOv58kOHxbSN6wxttW1hSaLIODZJJ3BIEkkaoCUzGM6qJAE="], ["image/avif", "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="]];
const qi = Ki.map(([t, e]) => {
  const s = new Image();
  const n = new Promise(r => {
    s.onload = s.onerror = () => {
      const i = s.height === 2;
      r(i ? t : undefined);
    };
  });
  s.src = e;
  return n;
});
const Bn = Promise.all(qi).then(t => t.filter(Boolean));
const Ss = document.createElement("video");
const Ji = !!Ss.canPlayType("video/webm") && !J && !Te;
const xn = !!Ss.canPlayType("video/quicktime") || J || Te;
const Xi = !!Ss.canPlayType('video/mp4; codecs="hev1"');
const Zi = Object.freeze(Object.defineProperty({
  __proto__: null,
  IS_H265_SUPPORTED: Xi,
  IS_MOV_SUPPORTED: xn,
  IS_WEBM_SUPPORTED: Ji
}, Symbol.toStringTag, {
  value: "Module"
}));
const bs = new Set(["image/gif", "video/mp4", "video/webm"]);
if (xn) {
  bs.add("video/quicktime");
}
const Qi = [...Ye].concat([...bs]);
const Nn = new Set(Qi);
const eo = !Me && false;
const to = ("getDisplayMedia" in (navigator?.mediaDevices || {}));
const so = !!navigator?.vibrate;
const js = document.createElement("audio");
const Un = !!(js.canPlayType && js.canPlayType("audio/ogg;").replace(/no/, ""));
let Wn = false;
try {
  const t = document.createElement("canvas").getContext("webgl");
  const e = t.getExtension("WEBGL_debug_renderer_info");
  const s = e && t.getParameter(e.UNMASKED_RENDERER_WEBGL) || "";
  if (s.match(/Apple/) && !s.match(/Apple GPU/) || t.getSupportedExtensions().indexOf("WEBGL_compressed_texture_s3tc_srgb") === -1) {
    Wn = true;
  }
} catch {}
const no = Wn;
const ro = ("serviceWorker" in navigator);
const Vs = {
  CAN_USE_TRANSFERABLES: Yi,
  IS_APPLE_MX: no,
  IS_CALL_SUPPORTED: ys,
  IS_CANVAS_FILTER_SUPPORTED: Hi,
  IS_EMOJI_SUPPORTED: Jt,
  IS_GEOLOCATION_SUPPORTED: $i,
  IS_GROUP_CALL_SUPPORTED: ys,
  IS_PARALLAX_SUPPORTED: eo,
  IS_SCREEN_SHARING_SUPPORTED: to,
  IS_TOUCH_SUPPORTED: ge,
  ...Zi,
  IS_VIBRATE_SUPPORTED: so,
  IS_OPUS_SUPPORTED: Un,
  IS_SHARED_WORKER_SUPPORTED: pt,
  IS_WEBP_SUPPORTED: Rn,
  IS_WEBRTC_SUPPORTED: ys,
  IS_LIVE_STREAM_SUPPORTED: ro,
  IMAGE_MIME_TYPES_SUPPORTED: Ye,
  MEDIA_MIME_TYPES_SUPPORTED: Nn,
  VIDEO_MIME_TYPES_SUPPORTED: bs,
  ...Er
};
function io() {
  const t = document.createElement("input");
  t.type = "time";
  t.value = "15:00";
  t.style.visibility = "hidden";
  document.body.append(t);
  const e = t.offsetWidth;
  t.remove();
  return e > 110 ? "h12" : "h23";
}
const oo = {
  8: new Uint8Array(1),
  16: new Uint16Array(1),
  32: new Uint32Array(1)
};
function At(t) {
  const e = oo[t];
  crypto.getRandomValues(e);
  return e[0];
}
function bc() {
  return "" + At(32) + At(32) % 16777215;
}
const ao = x.version;
const co = x.build;
const Gs = {
  _: "theme",
  access_hash: "",
  id: "",
  settings: [{
    _: "themeSettings",
    pFlags: {},
    base_theme: {
      _: "baseThemeClassic"
    },
    accent_color: 3379436,
    message_colors: [6072403],
    wallpaper: {
      _: "wallPaper",
      pFlags: {
        default: true,
        pattern: true
      },
      access_hash: "",
      document: undefined,
      id: "",
      slug: "pattern",
      settings: {
        _: "wallPaperSettings",
        pFlags: {},
        intensity: 50,
        background_color: 14409147,
        second_background_color: 7054727,
        third_background_color: 14014605,
        fourth_background_color: 8960132
      }
    }
  }, {
    _: "themeSettings",
    pFlags: {},
    base_theme: {
      _: "baseThemeNight"
    },
    accent_color: 8877281,
    message_colors: [8877281],
    wallpaper: {
      _: "wallPaper",
      pFlags: {
        default: true,
        pattern: true,
        dark: true
      },
      access_hash: "",
      document: undefined,
      id: "",
      slug: "pattern",
      settings: {
        _: "wallPaperSettings",
        pFlags: {},
        intensity: -50,
        background_color: 16696470,
        second_background_color: 14511289,
        third_background_color: 9842623,
        fourth_background_color: 5200853
      }
    }
  }],
  slug: "",
  title: "",
  emoticon: "🏠",
  pFlags: {
    default: true
  }
};
const Ys = (t, e, s) => ({
  ...Gs,
  name: t,
  settings: {
    ...Gs.settings.find(n => n.base_theme._ === e),
    highlightingColor: s
  }
});
const G = {
  allDialogsLoaded: {},
  pinnedOrders: {},
  contactsListCachedTime: 0,
  updates: {},
  filtersArr: [],
  maxSeenMsgId: 0,
  stateCreatedTime: Date.now(),
  recentEmoji: [],
  recentCustomEmoji: [],
  topPeersCache: {},
  recentSearch: [],
  version: ao,
  build: co,
  authState: {
    _: ie ? "authStateSignIn" : "authStateSignQr"
  },
  hiddenPinnedMessages: {},
  settings: {
    messagesTextSize: 16,
    distanceUnit: "kilometers",
    sendShortcut: "enter",
    autoDownload: {
      photo: {
        contacts: true,
        private: true,
        groups: true,
        channels: true
      },
      video: {
        contacts: true,
        private: true,
        groups: true,
        channels: true
      },
      file: {
        contacts: true,
        private: true,
        groups: true,
        channels: true
      }
    },
    autoDownloadNew: {
      _: "autoDownloadSettings",
      file_size_max: 3145728,
      pFlags: {
        video_preload_large: true,
        audio_preload_next: true
      },
      photo_size_max: 1048576,
      video_size_max: 15728640,
      video_upload_maxbitrate: 100,
      small_queue_active_operations_max: 0,
      large_queue_active_operations_max: 0
    },
    stickers: {
      suggest: "all",
      dynamicPackOrder: true,
      loop: true
    },
    emoji: {
      suggest: true,
      big: true
    },
    themes: [Ys("day", "baseThemeClassic", "hsla(86.4, 43.846153%, 45.117647%, .4)"), Ys("night", "baseThemeNight", "hsla(299.142857, 44.166666%, 37.470588%, .4)")],
    theme: "system",
    notifications: {
      sound: false
    },
    timeFormat: io(),
    liteMode: {
      all: false,
      animations: false,
      chat: false,
      chat_background: false,
      chat_spoilers: false,
      effects: false,
      effects_premiumstickers: false,
      effects_reactions: false,
      effects_emoji: false,
      emoji: false,
      emoji_messages: false,
      emoji_panel: false,
      gif: false,
      stickers: false,
      stickers_chat: false,
      stickers_panel: false,
      video: false
    },
    savedAsForum: false
  },
  playbackParams: {
    volume: 1,
    muted: false,
    playbackRate: 1,
    playbackRates: {
      voice: 1,
      video: 1,
      audio: 1
    },
    loop: false,
    round: false
  },
  keepSigned: true,
  chatContextMenuHintWasShown: false,
  hideChatJoinRequests: {},
  stateId: At(32),
  notifySettings: {},
  confirmedWebViews: [],
  seenTooltips: {
    storySound: false
  },
  hiddenSimilarChannels: [],
  appConfig: {},
  accountThemes: {},
  translations: {
    peers: {},
    enabledPeers: {},
    enabled: true,
    showInMenu: true,
    doNotTranslate: []
  }
};
function et(t, e) {
  t = t.split(" ", 1)[0];
  e = e.split(" ", 1)[0];
  const s = t.split(".");
  const n = e.split(".");
  for (let r = 0; r < s.length; ++r) {
    const i = +s[r];
    const o = +n[r];
    if (i > o) {
      return 1;
    }
    if (i < o) {
      return -1;
    }
  }
  return 0;
}
function uo(t) {
  return typeof t == "object" && t !== null;
}
function jn(t, e, s, n, r, i) {
  for (const o in t) {
    const c = i ? `${i}.${o}` : o;
    if (!r?.has(c)) {
      if (typeof e[o] != typeof t[o]) {
        e[o] = j(t[o]);
        s?.(n || o);
      } else if (typeof t[o] == "object" && t[o] !== null) {
        jn(t[o], e[o], s, n || o, r, c);
      }
    }
  }
}
function lo(t, e, s) {
  const n = performance.now();
  (s || console).warn("[" + ((Date.now() - Br) / 1e3).toFixed(3) + "]", "start", e);
  t.then(() => {
    (s || console).warn("[" + ((Date.now() - Br) / 1e3).toFixed(3) + "]", "end", e, performance.now() - n);
  });
  return t;
}
function ho(t) {
  return (...e) => lo(...e, t);
}
const fo = 86400000;
const tt = G.version;
const Oe = G.build;
const st = Object.keys(G);
const go = ["contactsListCachedTime", "stateCreatedTime", "maxSeenMsgId", "filtersArr"];
async function mo() {
  const t = Q("STATE-LOADER", Es.Error);
  const e = performance.now();
  const s = ho(t);
  const n = st.map(A => s(_e.get(A), "state " + A)).concat(s(B.get("user_auth"), "auth"), s(B.get("state_id"), "auth"), s(B.get("k_build"), "auth"), s(B.get("auth_key_fingerprint"), "auth"), s(B.get(`dc${x.baseDcId}_auth_key`), "auth")).concat(s(_e.get("user_auth"), "old auth"));
  const r = await Promise.all(n);
  t.warn("promises", performance.now() - e);
  const i = [];
  const o = (A, R) => {
    a[A] = R;
    i.push(A);
  };
  const c = A => {
    i.length = 0;
    a = A;
    i.push(...Object.keys(a));
  };
  let a = {};
  let A = 0;
  for (let R = st.length; A < R; ++A) {
    const w = st[A];
    const v = r[A];
    if (v !== undefined) {
      a[w] = v;
    } else {
      o(w, j(G[w]));
    }
  }
  r.splice(0, st.length);
  let u = r.shift();
  const l = r.shift();
  const h = r.shift();
  const f = r.shift();
  const g = r.shift();
  const E = r.shift();
  if (!u && E) {
    u = E;
    const A = ["dc", "server_time_offset", "xt_instance"];
    for (let v = 1; v <= 5; ++v) {
      A.push(`dc${v}_server_salt`);
      A.push(`dc${v}_auth_key`);
    }
    const R = await Promise.all(A.map(v => _e.get(v)));
    A.push("user_auth");
    R.push(typeof u == "number" || typeof u == "string" ? {
      dcID: R[0] || x.baseDcId,
      date: Date.now() / 1e3 | 0,
      id: u.toPeerId(false)
    } : u);
    const w = {};
    A.forEach((v, d) => {
      w[v] = R[d];
    });
    await B.set(w);
  }
  if (u) {
    a.authState = {
      _: "authStateSignedIn"
    };
    S.dispatchEvent("user_auth", typeof u == "number" || typeof u == "string" ? {
      dcID: 0,
      date: Date.now() / 1e3 | 0,
      id: u.toPeerId(false)
    } : u);
  }
  const C = new Set();
  const D = A => {
    A.push("authState", "stateId");
    const R = new Map(A.map(v => [v, a[v]]));
    a = j(G);
    R.forEach((v, d) => {
      a[d] = v;
    });
    const w = ["chats", "dialogs", "users"];
    for (const v of w) C.add(v);
    c(a);
  };
  if (a.stateId !== l) {
    if (l !== undefined) {
      D([]);
    }
    await B.set({
      state_id: a.stateId
    });
  }
  if (g) {
    const A = g.slice(0, 8);
    if (f) {
      if (f !== A) {
        D([]);
      }
    } else {
      D(["settings"]);
    }
    if (f !== A) {
      await B.set({
        auth_key_fingerprint: A
      });
    }
  }
  const F = Date.now();
  if (a.stateCreatedTime + fo < F) {
    if (De) {
      t("will refresh state", a.stateCreatedTime, F);
    }
    (R => {
      R.forEach(w => {
        o(w, j(G[w]));
      });
    })(go);
  }
  const b = a.settings.autoDownload;
  if (b?.private !== undefined) {
    const A = ["contacts", "private", "groups", "channels"];
    ["photo", "video", "file"].forEach(w => {
      const v = b[w] = {};
      A.forEach(d => {
        v[d] = b[d];
      });
    });
    A.forEach(w => {
      delete b[w];
    });
    o("settings", a.settings);
  }
  jn(G, a, A => {
    o(A, a[A]);
  }, undefined, new Set(["settings.themes"]));
  let k;
  let T;
  if (a.version !== tt || a.build !== Oe) {
    if (a.build < 322) {
      o("allDialogsLoaded", j(G.allDialogsLoaded));
      o("pinnedOrders", j(G.pinnedOrders));
      o("filtersArr", j(G.filtersArr));
      C.add("dialogs");
    }
    if (et(a.version, "1.7.1") === -1) {
      let A = false;
      if (et(a.version, "1.3.0") === -1) {
        A = true;
        a.settings.theme = j(G.settings.theme);
        a.settings.themes = j(G.settings.themes);
      } else if (et(a.version, "1.7.1") === -1) {
        A = true;
        const R = a.settings.themes;
        a.settings.themes = j(G.settings.themes);
        try {
          R.forEach(w => {
            const v = w.background;
            if (!v) {
              return;
            }
            const d = a.settings.themes.find(p => p.name === w.name);
            d.settings.highlightingColor = v.highlightingColor;
            const m = p => p && parseInt(p.slice(1), 16);
            const y = (v.color || "").split(",").map(m);
            if (v.color && !v.slug) {
              d.settings.wallpaper = {
                _: "wallPaperNoFile",
                id: 0,
                pFlags: {},
                settings: {
                  _: "wallPaperSettings",
                  pFlags: {}
                }
              };
            } else {
              const p = {
                _: "wallPaper",
                id: 0,
                access_hash: 0,
                slug: v.slug,
                document: {},
                pFlags: {},
                settings: {
                  _: "wallPaperSettings",
                  pFlags: {}
                }
              };
              const I = p.settings;
              d.settings.wallpaper = p;
              if (v.slug && !v.color) {
                I.pFlags.blur = v.blur || undefined;
              } else if (v.intensity) {
                I.intensity = v.intensity;
                p.pFlags.pattern = true;
                p.pFlags.dark = v.intensity < 0 || undefined;
              }
            }
            if (y.length) {
              const p = d.settings.wallpaper.settings;
              p.background_color = y[0];
              p.second_background_color = y[1];
              p.third_background_color = y[2];
              p.fourth_background_color = y[3];
            }
          });
        } catch (w) {
          console.error("migrating themes error", w);
        }
      }
      if (A) {
        o("settings", a.settings);
      }
    }
    if (a.build < 309) {
      a.settings.liteMode.animations = !a.settings.animationsEnabled;
      a.settings.liteMode.video = !a.settings.autoPlay.videos;
      a.settings.liteMode.gif = !a.settings.autoPlay.gifs;
    }
    if (a.build < 312 && typeof a.settings.stickers.suggest == "boolean") {
      a.settings.stickers.suggest = a.settings.stickers.suggest ? "all" : "none";
    }
    if (a.build <= 432) {
      let A = false;
      try {
        for (const R of a.settings.themes) if (!R.settings.highlightingColor) {
          R.settings.highlightingColor = R.settings.highlightningColor;
          delete R.settings.highlightningColor;
          A = true;
        }
      } catch {}
      if (A) {
        o("settings", a.settings);
      }
    }
    a.appConfig = j(G.appConfig);
    if (et(a.version, tt) !== 0) {
      k = tt;
      T = a.version;
    }
    o("version", tt);
    o("build", Oe);
  }
  if (h !== Oe && (!h || h < Oe)) {
    B.set({
      k_build: Oe
    });
  }
  S.settings = a.settings;
  if (De) {
    t("state res", a, j(a));
  }
  t.warn("total", performance.now() - e);
  return {
    state: a,
    resetStorages: C,
    newVersion: k,
    oldVersion: T,
    pushedKeys: i
  };
}
let Do;
function po() {
  return Do ?? (Do = mo());
}
class Eo {
  constructor() {
    this.sampleRate = 48e3;
    this.tasks = [];
    this.keepAlive = false;
    this.log = Q("OPUS", Es.Error);
  }
  isPlaySupported() {
    return Un;
  }
  loadWavWorker() {
    if (!this.wavWorker) {
      this.wavWorker = new Worker("waveWorker.min.js");
      this.wavWorker.addEventListener("message", e => {
        const s = e.data;
        this.log("[WAV] got message:", s);
        if (s && s.page) {
          const n = s.page;
          this.onTaskEnd(this.tasks.shift(), n);
        }
      });
    }
  }
  loadWorker() {
    if (!this.worker) {
      this.worker = new Worker("decoderWorker.min.js");
      this.worker.addEventListener("message", e => {
        const s = e.data;
        this.log("[DECODER] got message", s);
        if (s.type === "done") {
          this.wavWorker.postMessage({
            command: "done"
          });
          if (s.waveform) {
            this.tasks[0].waveform = s.waveform;
          }
        } else {
          this.wavWorker.postMessage({
            command: "encode",
            buffers: e.data
          }, J ? undefined : s.map(n => n.buffer));
        }
      });
    }
  }
  setKeepAlive(e) {
    this.keepAlive = e;
    if (this.keepAlive) {
      this.loadWorker();
      this.loadWavWorker();
    } else if (!this.tasks.length) {
      this.terminateWorkers();
    }
  }
  onTaskEnd(e, s) {
    if (s) {
      clearTimeout(e.timeout);
      e.callback.resolve({
        bytes: s,
        waveform: e.waveform
      });
    } else {
      e.callback.reject("timeout");
    }
    if (this.tasks.length) {
      this.executeNewTask(this.tasks[0]);
    }
    this.terminateWorkers();
  }
  terminateWorkers(e = false) {
    if (!((this.keepAlive || this.tasks.length) && !e)) {
      if (this.worker) {
        this.worker.terminate();
        this.worker = null;
      }
      if (this.wavWorker) {
        this.wavWorker.terminate();
        this.wavWorker = null;
      }
    }
  }
  executeNewTask(e) {
    this.worker.postMessage({
      command: "init",
      decoderSampleRate: this.sampleRate,
      outputBufferSampleRate: this.sampleRate
    });
    this.wavWorker.postMessage({
      command: "init",
      wavBitDepth: 16,
      wavSampleRate: this.sampleRate
    });
    this.log("[DECODER] send decode");
    this.worker.postMessage({
      command: "decode",
      pages: e.pages,
      waveform: e.withWaveform
    }, J ? undefined : [e.pages.buffer]);
    e.timeout = window.setTimeout(() => {
      this.log.error("decode timeout");
      this.terminateWorkers(true);
      if (this.tasks.length) {
        this.loadWorker();
        this.loadWavWorker();
      }
      this.onTaskEnd(this.tasks.shift());
    }, 1e4);
  }
  pushDecodeTask(e, s) {
    return new Promise((n, r) => {
      const i = {
        pages: e,
        withWaveform: s,
        callback: {
          resolve: n,
          reject: r
        },
        timeout: 0
      };
      this.loadWorker();
      this.loadWavWorker();
      if (this.tasks.push(i) === 1) {
        this.executeNewTask(i);
      }
    });
  }
  async decode(e, s = false) {
    return this.pushDecodeTask(e, s).then(async n => {
      const r = new Blob([n.bytes], {
        type: "audio/wav"
      });
      return {
        url: await Zn.invoke("createObjectURL", r),
        waveform: n.waveform
      };
    });
  }
}
const Vn = new Eo();
Or.opusDecodeController = Vn;
class Fo extends Fs {
  constructor() {
    super("CRYPTO");
    this.lastIndex = -1;
  }
  invokeCryptoNew({
    method: e,
    args: s,
    transfer: n
  }) {
    const r = {
      method: e,
      args: s
    };
    const i = this.listeners.invoke;
    if (i?.size) {
      let c = i.values().next().value.callback(r);
      if (!pe && !(c instanceof Promise)) {
        c = Promise.resolve(c);
      }
      return c;
    }
    const o = e === "aes-encrypt" || e === "aes-decrypt" ? this.lastIndex = (this.lastIndex + 1) % this.sendPorts.length : 0;
    return this.invoke("invoke", r, undefined, this.sendPorts[o], n);
  }
  invokeCrypto(e, ...s) {
    return this.invokeCryptoNew({
      method: e,
      args: s
    });
  }
}
const at = new Fo();
if (Or) {
  Or.cryptoMessagePort = at;
}
function vo(t) {
  return Array.isArray(t) ? t : [t];
}
function Ao(t) {
  return ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp", "image/bmp", "image/avif", "image/jxl", "video/mp4", "video/webm", "video/quicktime", "audio/ogg", "audio/mpeg", "audio/mp4", "audio/wav", "application/json", "application/pdf"].indexOf(t) === -1 ? "application/octet-stream" : t;
}
function Gn(t, e = "") {
  t = Array.isArray(t) ? t : [t];
  const s = ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp", "image/bmp", "image/avif", "image/jxl", "video/mp4", "video/webm", "video/quicktime", "audio/ogg", "audio/mpeg", "audio/mp4", "audio/wav", "application/json", "application/pdf"].indexOf(e) === -1 ? "application/octet-stream" : e;
  return new Blob(t, {
    type: s
  });
}
class yo {
  constructor(e, s, n) {
    this.mimeType = e;
    this.size = s;
    this.saveFileCallback = n;
    this.bytes = new Uint8Array(s);
  }
  async write(e, s) {
    const n = s + e.byteLength;
    if (n > this.bytes.byteLength) {
      const r = new Uint8Array(n);
      r.set(this.bytes, 0);
      this.bytes = r;
    }
    this.bytes.set(e, s);
  }
  truncate() {
    this.bytes = new Uint8Array();
  }
  trim(e) {
    this.bytes = this.bytes.slice(0, e);
  }
  finalize(e = true) {
    const s = Gn(this.bytes, this.mimeType);
    if (e && this.saveFileCallback) {
      this.saveFileCallback(s);
    }
    return s;
  }
  getParts() {
    return this.bytes;
  }
  replaceParts(e) {
    this.bytes = e;
  }
}
const Ce = class Ce {
  constructor(e) {
    this.dbName = e;
    this.useStorage = true;
    if (H.test) {
      this.dbName += "_test";
    }
    if (Ce.STORAGES.length) {
      this.useStorage = Ce.STORAGES[0].useStorage;
    }
    this.openDatabase();
    Ce.STORAGES.push(this);
  }
  openDatabase() {
    return this.openDbPromise ?? (this.openDbPromise = caches.open(this.dbName));
  }
  delete(e) {
    return this.timeoutOperation(s => s.delete("/" + e));
  }
  deleteAll() {
    return caches.delete(this.dbName);
  }
  get(e) {
    return this.timeoutOperation(s => s.match("/" + e));
  }
  save(e, s) {
    return this.timeoutOperation(n => n.put("/" + e, s));
  }
  getFile(e, s = "blob") {
    return this.get(e).then(n => {
      if (!n) {
        throw me("NO_ENTRY_FOUND");
      }
      return n[s]();
    });
  }
  saveFile(e, s) {
    if (!(s instanceof Blob)) {
      s = Gn(s);
    }
    const n = new Response(s, {
      headers: {
        "Content-Length": "" + s.size
      }
    });
    return this.save(e, n).then(() => s);
  }
  timeoutOperation(e) {
    return this.useStorage ? new Promise(async (s, n) => {
      let r = false;
      const i = setTimeout(() => {
        n();
        r = true;
      }, 15e3);
      try {
        const o = await this.openDatabase();
        if (!o) {
          this.useStorage = false;
          this.openDbPromise = undefined;
          throw "no cache?";
        }
        const c = await e(o);
        if (r) {
          return;
        }
        s(c);
      } catch (o) {
        n(o);
      }
      clearTimeout(i);
    }) : Promise.reject(me("STORAGE_OFFLINE"));
  }
  prepareWriting(e, s, n) {
    return {
      deferred: se(),
      getWriter: () => new yo(n, s, i => this.saveFile(e, i).catch(() => i))
    };
  }
  static toggleStorage(e, s) {
    return Promise.all(this.STORAGES.map(n => {
      n.useStorage = e;
      if (!!s && !e) {
        return n.deleteAll();
      }
    }));
  }
};
Ce.STORAGES = [];
function Hs(t, e) {
  return Promise.all([we.toggleStorage(t, e), Ce.toggleStorage(t, e), B.toggleStorage(t, e)]).then(lt, lt);
}
class So extends Fs {
  constructor() {
    super("SERVICE");
    if (Or) {
      Or.serviceMessagePort = this;
    }
  }
}
const bo = "" + new URL("sw-CeEOzaRj.js", import.meta.url).href;
const ws = "";
function $s(...t) {
  return t.join(ws);
}
function wo(t) {
  return t.split(ws);
}
function Co(t, e, s, n) {
  const r = e.split(ws);
  const i = r.length;
  let o = t;
  for (let a = 0; a < i - 1; ++a) {
    const u = r[a];
    o = o[u] ?? (o[u] = {});
  }
  const c = r[i - 1];
  if (s === undefined && n) {
    delete o[c];
  } else {
    o[c] = s;
  }
}
const fe = "_";
function _o(t, e) {
  const s = "";
  const n = s[s.length - 1] || "";
  let r;
  switch (t._) {
    case "inputPhotoFileLocation":
      {
        r = ["photo", s[0], t.id, t.thumb_size].filter(Boolean).join(fe);
        break;
      }
    case "inputDocumentFileLocation":
      {
        r = ["document", s[0], t.id, t.thumb_size].filter(Boolean).join(fe);
        break;
      }
    case "inputPeerPhotoFileLocation":
      r = ["peerPhoto", t.photo_id, t.pFlags.big ? "big" : "small"].join(fe);
      break;
    case "inputStickerSetThumb":
      {
        r = ["stickerSetThumb", t.stickerset.id || t.stickerset.short_name || t.stickerset.emoticon || t.stickerset._, t.thumb_version].join(fe);
        break;
      }
    case "inputFileLocation":
      {
        r = [t.volume_id, t.local_id].join(fe);
        break;
      }
    case "inputWebFileLocation":
      {
        r = ["webFile", t.url].join(fe);
        break;
      }
    case "inputWebFileGeoPointLocation":
      {
        const i = t.geo_point;
        r = ["geoPoint", i.lat, i.long, t.w, t.h, t.zoom, t.scale].join(fe);
        break;
      }
    default:
      {
        console.error("Unrecognized location:", t);
        r = "";
        break;
      }
  }
  return r + (e?.downloadId ? "_download" : "") + (n && "." + n);
}
function Po(t) {
  return t?._.includes("inputWebFile");
}
function ko(t) {
  return t?._.includes("inputWebFile") ? _o(t) : t._ + (t.id ?? t.url);
}
function To(t) {
  return {
    downloaded: 0,
    url: "",
    type: t
  };
}
function Mo(t, e) {
  return t + (e !== undefined ? "-" + e : "");
}
function Vt(t, e) {
  return t instanceof Promise ? t.then(e) : e(t);
}
function zs(t) {
  return typeof t == "number" && t < ht;
}
const as = Symbol("store-raw");
const Pe = Symbol("store-node");
const te = Symbol("store-has");
const Yn = Symbol("store-self");
function Hn(t) {
  let e = t[X];
  if (!e && (Object.defineProperty(t, X, {
    value: e = new Proxy(t, Oo)
  }), !Array.isArray(t))) {
    const s = Object.keys(t);
    const n = Object.getOwnPropertyDescriptors(t);
    let r = 0;
    for (let i = s.length; r < i; r++) {
      const o = s[r];
      if (n[o].get) {
        Object.defineProperty(t, o, {
          enumerable: n[o].enumerable,
          get: n[o].get.bind(e)
        });
      }
    }
  }
  return e;
}
function he(t) {
  let e;
  return t != null && typeof t == "object" && (t[X] || !(e = Object.getPrototypeOf(t)) || e === Object.prototype || Array.isArray(t));
}
function Ee(t, e = new Set()) {
  let s;
  let n;
  let r;
  let i;
  if (s = t != null && t[as]) {
    return s;
  }
  if (!he(t) || e.has(t)) {
    return t;
  }
  if (Array.isArray(t)) {
    if (Object.isFrozen(t)) {
      t = t.slice(0);
    } else {
      e.add(t);
    }
    let o = 0;
    for (let c = t.length; o < c; o++) {
      r = t[o];
      if ((n = Ee(r, e)) !== r) {
        t[o] = n;
      }
    }
  } else {
    if (Object.isFrozen(t)) {
      t = Object.assign({}, t);
    } else {
      e.add(t);
    }
    const o = Object.keys(t);
    const c = Object.getOwnPropertyDescriptors(t);
    let a = 0;
    for (let u = o.length; a < u; a++) {
      i = o[a];
      if (!c[i].get) {
        r = t[i];
        if ((n = Ee(r, e)) !== r) {
          t[i] = n;
        }
      }
    }
  }
  return t;
}
function yt(t, e) {
  let s = t[e];
  if (!s) {
    Object.defineProperty(t, e, {
      value: s = Object.create(null)
    });
  }
  return s;
}
function He(t, e, s) {
  if (t[e]) {
    return t[e];
  }
  const [n, r] = ne(s, {
    equals: false,
    internal: true
  });
  n.$ = r;
  return t[e] = n;
}
function Lo(t, e) {
  const s = Reflect.getOwnPropertyDescriptor(t, e);
  if (!(!s || s.get || !s.configurable || e === X || e === Pe)) {
    delete s.value;
    delete s.writable;
    s.get = () => t[X][e];
  }
  return s;
}
function $n(t) {
  if (O) {
    He(yt(t, Pe), Yn)();
  }
}
function Io(t) {
  $n(t);
  return Reflect.ownKeys(t);
}
const Oo = {
  get(t, e, s) {
    if (e === as) {
      return t;
    }
    if (e === X) {
      return s;
    }
    if (e === es) {
      $n(t);
      return s;
    }
    const n = yt(t, Pe);
    const r = n[e];
    let i = r ? r() : t[e];
    if (e === Pe || e === te || e === "__proto__") {
      return i;
    }
    if (!r) {
      const o = Object.getOwnPropertyDescriptor(t, e);
      if (O && (typeof i != "function" || t.hasOwnProperty(e)) && !(o && o.get)) {
        i = He(n, e, i)();
      }
    }
    return he(i) ? Hn(i) : i;
  },
  has(t, e) {
    return e === as || e === X || e === es || e === Pe || e === te || e === "__proto__" ? true : (O && He(yt(t, te), e)(), e in t);
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: Io,
  getOwnPropertyDescriptor: Lo
};
function z(t, e, s, n = false) {
  if (!n && t[e] === s) {
    return;
  }
  const r = t[e];
  const i = t.length;
  if (s === undefined) {
    delete t[e];
    if (t[te] && t[te][e] && r !== undefined) {
      t[te][e].$();
    }
  } else {
    t[e] = s;
    if (t[te] && t[te][e] && r === undefined) {
      t[te][e].$();
    }
  }
  let o = yt(t, Pe);
  let c;
  if (c = He(o, e, r)) {
    c.$(() => s);
  }
  if (Array.isArray(t) && t.length !== i) {
    for (let a = t.length; a < i; a++) {
      if (c = o[a]) {
        c.$();
      }
    }
    if (c = He(o, "length", i)) {
      c.$(t.length);
    }
  }
  if (c = o[Yn]) {
    c.$();
  }
}
function zn(t, e) {
  const s = Object.keys(e);
  for (let n = 0; n < s.length; n += 1) {
    const r = s[n];
    z(t, r, e[r]);
  }
}
function Ro(t, e) {
  if (typeof e == "function") {
    e = e(t);
  }
  e = Ee(e);
  if (Array.isArray(e)) {
    if (t === e) {
      return;
    }
    let s = 0;
    let n = e.length;
    for (; s < n; s++) {
      const r = e[s];
      if (t[s] !== r) {
        z(t, s, r);
      }
    }
    z(t, "length", n);
  } else {
    zn(t, e);
  }
}
function Ne(t, e, s = []) {
  let n;
  let r = t;
  if (e.length > 1) {
    n = e.shift();
    const o = typeof n;
    const c = Array.isArray(t);
    if (Array.isArray(n)) {
      for (let a = 0; a < n.length; a++) {
        Ne(t, [n[a]].concat(e), s);
      }
      return;
    } else if (c && o === "function") {
      for (let a = 0; a < t.length; a++) {
        if (n(t[a], a)) {
          Ne(t, [a].concat(e), s);
        }
      }
      return;
    } else if (c && o === "object") {
      const {
        from: a = 0,
        to: u = t.length - 1,
        by: l = 1
      } = n;
      for (let h = a; h <= u; h += l) {
        Ne(t, [h].concat(e), s);
      }
      return;
    } else if (e.length > 1) {
      Ne(t[n], e, [n].concat(s));
      return;
    }
    r = t[n];
    s = [n].concat(s);
  }
  let i = e[0];
  if (!(typeof i == "function" && (i = i(r, s), i === r) || n === undefined && i == null)) {
    i = Ee(i);
    if (n === undefined || he(r) && he(i) && !Array.isArray(i)) {
      zn(r, i);
    } else {
      z(t, n, i);
    }
  }
}
function Kn(...[t, e]) {
  const s = Ee(t || {});
  const n = Array.isArray(s);
  const r = Hn(s);
  function i(...o) {
    ee(() => {
      if (n && o.length === 1) {
        Ro(s, o[0]);
      } else {
        Ne(s, o);
      }
    }, false);
  }
  return [r, i];
}
const cs = Symbol("store-root");
function be(t, e, s, n, r) {
  const i = e[s];
  if (t === i) {
    return;
  }
  const o = Array.isArray(t);
  if (s !== cs && (!he(t) || !he(i) || o !== Array.isArray(i) || r && t[r] !== i[r])) {
    z(e, s, t);
    return;
  }
  if (o) {
    if (t.length && i.length && (!n || r && t[0] && t[0][r] != null)) {
      let u;
      let l;
      let h;
      let f;
      let g;
      let E;
      let C;
      let D;
      h = 0;
      for (f = Math.min(i.length, t.length); h < f && (i[h] === t[h] || r && i[h] && t[h] && i[h][r] === t[h][r]); h++) {
        be(t[h], i, h, n, r);
      }
      const F = new Array(t.length);
      const b = new Map();
      f = i.length - 1;
      for (g = t.length - 1; f >= h && g >= h && (i[f] === t[g] || r && i[h] && t[h] && i[f][r] === t[g][r]); f--, g--) {
        F[g] = i[f];
      }
      if (h > g || h > f) {
        for (l = h; l <= g; l++) {
          z(i, l, t[l]);
        }
        for (; l < t.length; l++) {
          z(i, l, F[l]);
          be(t[l], i, l, n, r);
        }
        if (i.length > t.length) {
          z(i, "length", t.length);
        }
        return;
      }
      C = new Array(g + 1);
      for (l = g; l >= h; l--) {
        E = t[l];
        D = r && E ? E[r] : E;
        u = b.get(D);
        C[l] = u === undefined ? -1 : u;
        b.set(D, l);
      }
      for (u = h; u <= f; u++) {
        E = i[u];
        D = r && E ? E[r] : E;
        l = b.get(D);
        if (l !== undefined && l !== -1) {
          F[l] = i[u];
          l = C[l];
          b.set(D, l);
        }
      }
      for (l = h; l < t.length; l++) {
        if (l in F) {
          z(i, l, F[l]);
          be(t[l], i, l, n, r);
        } else {
          z(i, l, t[l]);
        }
      }
    } else {
      let u = 0;
      for (let l = t.length; u < l; u++) {
        be(t[u], i, u, n, r);
      }
    }
    if (i.length > t.length) {
      z(i, "length", t.length);
    }
    return;
  }
  const c = Object.keys(t);
  let u = 0;
  for (let l = c.length; u < l; u++) {
    be(t[c[u]], i, c[u], n, r);
  }
  const a = Object.keys(i);
  let u = 0;
  for (let l = a.length; u < l; u++) {
    if (t[a[u]] === undefined) {
      z(i, a[u], undefined);
    }
  }
}
function qn(t, e = {}) {
  const {
    merge: s,
    key: n = "id"
  } = e;
  const r = Ee(t);
  return i => {
    if (!he(i) || !he(r)) {
      return r;
    }
    const o = be(r, {
      [cs]: i
    }, cs, s, n);
    return o === undefined ? i : o;
  };
}
const [Jn, us] = it(() => Kn({}));
const Bo = (...t) => {
  const e = t[0];
  us(...t);
  S.managers.appStateManager.setByKey(e, Ee(Jn[e]));
};
const Ks = (t, e) => {
  if (typeof t == "object") {
    us(t);
    return;
  }
  us(t, qn(e));
};
const wc = () => [Jn, Bo];
function xo(t, e = "asc") {
  if (!t) {
    return [];
  }
  const s = t instanceof Map ? [...t.keys()] : Object.keys(t).map(n => +n);
  return e === "asc" ? s.sort((n, r) => n - r) : s.sort((n, r) => r - n);
}
const [Cs, Xn] = Kn({});
function _s(t, e) {
  return typeof t == "function" ? ue(() => e(t())) : e(t);
}
function Cc(t) {
  return _s(t, e => Cs[e]);
}
function _c(t) {
  return _s(t, e => Cs[e?.toPeerId(true)]);
}
function Pc(t) {
  return _s(t, e => Cs[e?.toPeerId(false)]);
}
function No(t, e) {
  Xn(t, qn(e));
}
function Uo(t) {
  Xn(t);
}
class Wo extends qe {
  constructor() {
    super();
    this.onMirrorTask = e => {
      var o;
      const {
        name: s,
        key: n,
        value: r
      } = e;
      this.processMirrorTaskMap[s]?.(e);
      if (!e.hasOwnProperty("key")) {
        this.mirrors[s] = r;
        return;
      }
      const i = (o = this.mirrors)[s] ?? (o[s] = {});
      Co(i, n, r, true);
    };
    this.mirrors = {
      state: undefined,
      thumbs: {},
      stickerThumbs: {},
      availableReactions: undefined,
      messages: {},
      groupedMessages: {},
      peers: {},
      avatars: {}
    };
    this.processMirrorTaskMap = {
      messages: e => {
        var o;
        const s = e.value;
        let n;
        let r;
        if (s) {
          n = s.mid;
          r = s.grouped_id;
        } else {
          const [c, a] = e.key.split(ws);
          n = +a;
          const u = this.mirrors.messages[c]?.[n];
          if (!u) {
            return;
          }
          r = u.grouped_id;
        }
        if (!r) {
          return;
        }
        const i = (o = this.mirrors.groupedMessages)[r] ?? (o[r] = new Map());
        if (s) {
          i.set(n, s);
        } else {
          i.delete(n);
          if (!i.size) {
            delete this.mirrors.groupedMessages[r];
          }
        }
      },
      state: e => {
        if (e.key) {
          Ks(e.key, e.value);
        } else {
          console.error(e);
        }
      },
      peers: e => {
        if (e.key) {
          No(e.key.toPeerId(), e.value);
        } else {
          Uo(e.value);
        }
      }
    };
    this.tabState = {
      chatPeerIds: [],
      idleStartTime: 0
    };
    this.log("constructor");
    this.registerWorker();
    this.registerServiceWorker();
    this.registerCryptoWorker();
    this.addMultipleEventsListeners({
      convertWebp: ({
        fileName: e,
        bytes: s
      }) => Mn.convert(e, s),
      convertOpus: ({
        fileName: e,
        bytes: s
      }) => Vn.pushDecodeTask(s, false).then(n => n.bytes),
      event: ({
        name: e,
        args: s
      }) => {
        S.dispatchEventSingle(e, ...s);
      },
      localStorageProxy: e => {
        return B[e.type](...e.args);
      },
      mirror: this.onMirrorTask,
      receivedServiceMessagePort: () => {
        this.log.warn("mtproto worker received service message port");
      }
    });
    S.addEventListener("language_change", e => {
      S.managers.networkerFactory.setLanguage(e);
      S.managers.appAttachMenuBotsManager.onLanguageChange();
    });
    window.addEventListener("online", () => {
      S.managers.networkerFactory.forceReconnectTimeout();
    });
    S.addEventListener("logging_out", () => {
      const e = ["cachedFiles", "cachedStreamChunks"];
      Promise.all([Promise.all([we.toggleStorage(false, true), Ce.toggleStorage(false, true), B.toggleStorage(false, true)]).then(lt, lt), B.clear(), Promise.race([As.setAuthorized(false), ps(3e3)]), vt.forceUnsubscribe(), Promise.all(e.map(s => caches.delete(s)))]).finally(() => {
        Ln.reload();
      });
    });
    Et.addEventListener("change", e => {
      this.updateTabStateIdle(e);
    });
    this.updateTabStateIdle(Et.isIdle);
  }
  sendEnvironment() {
    this.log("Passing environment:", Vs);
    this.invoke("environment", Vs);
  }
  pingServiceWorkerWithIframe() {
    if (this.pingServiceWorkerPromise) {
      return this.pingServiceWorkerPromise;
    }
    const e = this.pingServiceWorkerPromise = se();
    const s = document.createElement("iframe");
    s.hidden = true;
    const n = () => {
      clearTimeout(o);
      setTimeout(() => {
        this.pingServiceWorkerPromise = undefined;
      }, 1e4);
      s.removeEventListener("load", r);
      s.removeEventListener("error", i);
      s.remove();
    };
    const r = () => {
      n();
      e.resolve();
    };
    const i = () => {
      n();
      e.reject();
    };
    s.addEventListener("load", r);
    s.addEventListener("error", i);
    s.src = "ping/" + (Math.random() * 4294967295 | 0) + ".nocache";
    document.body.append(s);
    const o = window.setTimeout(i, 1500);
    return e;
  }
  attachServiceWorker(e) {
    if (this.lastServiceWorker === e) {
      this.log.warn("trying to attach same service worker");
      return;
    }
    if (this.lastServiceWorker) {
      this.serviceMessagePort.detachPort(this.lastServiceWorker);
    }
    this.serviceMessagePort.attachSendPort(this.lastServiceWorker = e);
    this.serviceMessagePort.invokeVoid("hello", undefined);
  }
  _registerServiceWorker() {
    navigator.serviceWorker.register(bo, {
      type: "module",
      scope: "./"
    }).then(e => {
      this.log("SW registered", e);
      const s = new URL(window.location.href);
      const n = "swfix";
      const r = +s.searchParams.get(n) || 0;
      if (e.active && !navigator.serviceWorker.controller) {
        if (r >= 3) {
          throw new Error("no controller");
        }
        return e.unregister().then(() => {
          s.searchParams.set(n, "" + (r + 1));
          window.location.href = s.toString();
        });
      }
      if (r) {
        s.searchParams.delete(n);
        history.pushState(undefined, "", s);
      }
      (e.installing || e.waiting || e.active).addEventListener("statechange", c => {
        this.log("SW statechange", c);
      });
      const o = navigator.serviceWorker.controller || e.installing || e.waiting || e.active;
      this.attachServiceWorker(o);
    }).catch(e => {
      this.log.error("SW registration failed!", e);
      this.invokeVoid("serviceWorkerOnline", false);
    });
  }
  registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }
    this.serviceMessagePort = vt.serviceMessagePort = new So();
    const e = navigator.serviceWorker;
    this._registerServiceWorker();
    e.addEventListener("controllerchange", () => {
      this.log.warn("controllerchange");
      const s = e.controller;
      this.attachServiceWorker(s);
      s.addEventListener("error", n => {
        this.log.error("controller error:", n);
      });
    });
    this.serviceMessagePort.attachListenPort(e);
    this.serviceMessagePort.addMultipleEventsListeners({
      port: (s, n, r) => {
        this.log.warn("got service worker port");
        this.invokeVoid("serviceWorkerPort", undefined, undefined, [r.ports[0]]);
      },
      hello: (s, n) => {
        this.serviceMessagePort.resendLockTask(n);
      },
      share: s => {
        this.log("will try to share something");
        this.share = s;
      }
    });
    e.addEventListener("messageerror", s => {
      this.log.error("SW messageerror:", s);
    });
  }
  async registerCryptoWorker() {
    const e = g => fetch(g).then(E => E.text()).then(E => {
      const C = location.pathname.split("/");
      C[C.length - 1] = "";
      const D = location.origin + C.join("/");
      E = E.replace(/(import (?:.+? from )?['"])\//g, "$1" + D);
      return new Blob([E], {
        type: "application/javascript"
      });
    });
    const s = {
      construct(g, E) {
        return {
          url: hn(E[0]).toString()
        };
      }
    };
    const n = [Worker, typeof SharedWorker < "u" && SharedWorker].filter(Boolean);
    n.forEach(g => window[g.name] = new Proxy(g, s));
    const r = new Worker(new URL("" + new URL("crypto.worker-CfCshcpI.js", import.meta.url).href, import.meta.url), {
      type: "module"
    });
    n.forEach(g => window[g.name] = g);
    const i = r.url;
    const o = g => new a(g, {
      type: "module"
    });
    const c = g => this.attachWorkerToPort(g, at, "crypto");
    const a = pt ? SharedWorker : Worker;
    at.addEventListener("port", (g, E, C) => {
      this.invokeVoid("cryptoPort", undefined, undefined, [C.ports[0]]);
    });
    const u = new a(i, {
      type: "module"
    });
    this.attachWorkerToPort(u, at, "crypto");
    const l = await e(i);
    (await this.invoke("createProxyWorkerURLs", {
      originalUrl: i,
      blob: l
    })).slice(1).map(o).forEach(c);
  }
  registerWorker() {
    let e;
    if (pt) {
      e = new SharedWorker(new URL("" + new URL("mtproto.worker-CbMBCLCG.js", import.meta.url).href, import.meta.url), {
        type: "module"
      });
    } else {
      e = new Worker(new URL("" + new URL("mtproto.worker-CbMBCLCG.js", import.meta.url).href, import.meta.url), {
        type: "module"
      });
    }
    this.onWorkerFirstMessage(e);
  }
  attachWorkerToPort(e, s, n) {
    const r = e.port || e;
    s.attachPort(r);
    e.addEventListener("error", i => {
      this.log.error(n, "worker error", i);
    });
  }
  onWorkerFirstMessage(e) {
    this.log("set webWorker");
    this.attachWorkerToPort(e, this, "mtproto");
  }
  loadState() {
    return Promise.all([po().then(e => (this.newVersion = e.newVersion, this.oldVersion = e.oldVersion, this.mirrors.state = e.state, Ks(e.state), e))]);
  }
  sendState() {
    return this.loadState().then(e => {
      const [s] = e;
      this.invoke("state", {
        ...s,
        userId: S.myId.toUserId()
      });
      return e;
    });
  }
  invokeCrypto(e, ...s) {
    return at.invokeCrypto(e, ...s);
  }
  async toggleStorages(e, s) {
    await Promise.all([we.toggleStorage(e, s), Ce.toggleStorage(e, s), B.toggleStorage(e, s)]).then(lt, lt);
    this.invoke("toggleStorages", {
      enabled: e,
      clearWrite: s
    });
    this.serviceMessagePort?.invokeVoid("toggleStorages", {
      enabled: e,
      clearWrite: s
    });
  }
  async getMirror(e) {
    return this.mirrors[e];
  }
  getState() {
    return this.getMirror("state");
  }
  getCacheContext(e, s = Pr, n = Po(e) ? _o(e) : e._ + (e.id ?? e.url)) {
    return this.mirrors.thumbs[n]?.[s] || {
      downloaded: 0,
      url: "",
      type: s
    };
  }
  getStickerCachedThumb(e, s) {
    const n = e + (s !== undefined ? "-" + s : "");
    return this.mirrors.stickerThumbs[n];
  }
  getAvailableReactions() {
    var e;
    return (e = this.mirrors).availableReactions || (e.availableReactions = S.managers.appReactionsManager.getAvailableReactions());
  }
  getReaction(e) {
    return this.getAvailableReactions() instanceof Promise ? this.getAvailableReactions().then(s => s.find(n => n.reaction === e)) : (s => s.find(n => n.reaction === e))(this.getAvailableReactions());
  }
  getMessageFromStorage(e, s) {
    if (e.endsWith("history") && typeof s == "number" && s < ht) {
      e = this.getGlobalHistoryMessagesStorage();
    }
    return this.mirrors.messages[e]?.[s];
  }
  getGroupsFirstMessage(e) {
    if (!e?.grouped_id) {
      return e;
    }
    const s = this.mirrors.groupedMessages[e.grouped_id];
    let n = Number.MAX_SAFE_INTEGER;
    for (const [r, i] of s) if (i.mid < n) {
      n = i.mid;
    }
    return s.get(n);
  }
  getMidsByGroupedId(e, s = "asc") {
    return xo(this.mirrors.groupedMessages[e], s);
  }
  getMessagesByGroupedId(e) {
    const s = this.getMidsByGroupedId(e, "asc");
    const n = this.mirrors.groupedMessages[e];
    return s.map(r => n.get(r));
  }
  getHistoryMessagesStorage(e) {
    return `${e}_history`;
  }
  getGlobalHistoryMessagesStorage() {
    return this.getHistoryMessagesStorage(dn);
  }
  getMessageById(e) {
    if (typeof e == "number" && e < ht) {
      return this.getMessageFromStorage(this.getGlobalHistoryMessagesStorage(), e);
    }
  }
  getMessageByPeer(e, s) {
    return e ? this.getMessageFromStorage(this.getHistoryMessagesStorage(e), s) : this.getMessageById(s);
  }
  getPeer(e) {
    return this.mirrors.peers[e];
  }
  getUser(e) {
    return this.mirrors.peers[e.toPeerId(false)];
  }
  getChat(e) {
    return this.mirrors.peers[e.toPeerId(true)];
  }
  isForum(e) {
    return !!this.getPeer(e)?.pFlags?.forum;
  }
  isAvatarCached(e, s) {
    const n = this.mirrors.avatars[e];
    return s === undefined ? !!n : !!(n && n[s] && !(n[s] instanceof Promise));
  }
  loadAvatar(e, s, n) {
    var i;
    const r = (i = this.mirrors.avatars)[e] ?? (i[e] = {});
    return r[n] ?? (r[n] = S.managers.appAvatarsManager.loadAvatar(e, s, n));
  }
  getAppConfig(e) {
    if (e) {
      this.appConfig = undefined;
    }
    if (!this.appConfig) {
      const s = S.managers.apiManager.getAppConfig().then(n => (this.appConfig === s && (this.appConfig = n), n));
      return this.appConfig = s;
    }
    return this.appConfig;
  }
  isPremiumFeaturesHidden() {
    return this.isPremiumPurchaseBlocked() instanceof Promise ? this.isPremiumPurchaseBlocked().then(e => e && !S.premium) : (e => e && !S.premium)(this.isPremiumPurchaseBlocked());
  }
  isPremiumPurchaseBlocked() {
    return this.getAppConfig() instanceof Promise ? this.getAppConfig().then(e => !!e.premium_purchase_blocked) : (e => !!e.premium_purchase_blocked)(this.getAppConfig());
  }
  updateTabState(e, s) {
    this.tabState[e] = s;
    this.invokeVoid("tabState", this.tabState);
  }
  updateTabStateIdle(e) {
    this.updateTabState("idleStartTime", e ? Date.now() : 0);
  }
}
const Zn = new Wo();
Or.apiManagerProxy = Zn;
const jo = {};
function Vo(t, e) {
  return new Proxy({}, {
    get: (n, r, i) => (...o) => {
      const c = Zn.invoke("manager", {
        name: t,
        method: r,
        args: o
      }, e);
      if (De && jo[t]?.has(r)) {
        console.warn("manager request", t, r, o, e);
      }
      return c;
    }
  });
}
function qs(t, e) {
  return new Proxy(t, {
    get: (s, n, r) => s[n] ?? (s[n] = Vo(n, e))
  });
}
let Re;
function Go() {
  return Re || (Re = qs({}, false), Re.acknowledged = qs({}, true), Re);
}
function Qn(t, e, s) {
  return Math.min(s, Math.max(e, t));
}
function ce(t, e, s) {
  t /= 255;
  e /= 255;
  s /= 255;
  const n = Math.max(t, e, s);
  const r = n - Math.min(t, e, s);
  const i = r && (n === t ? (e - s) / r : n == e ? 2 + (s - t) / r : 4 + (t - e) / r);
  return [60 * (i < 0 ? i + 6 : i), n && r / n, n];
}
function Ps(t, e, s) {
  const n = (r, i = (r + t / 60) % 6) => Math.round((s - s * e * Math.max(Math.min(i, 4 - i, 1), 0)) * 255);
  return [n(5), n(3), n(1)];
}
function ls(t, e, s, n = 1) {
  t /= 255;
  e /= 255;
  s /= 255;
  const r = Math.max(t, e, s);
  const i = Math.min(t, e, s);
  let o;
  let c;
  const a = (r + i) / 2;
  if (r === i) {
    o = c = 0;
  } else {
    const u = r - i;
    c = a > .5 ? u / (2 - r - i) : u / (r + i);
    switch (r) {
      case t:
        o = (e - s) / u + (e < s ? 6 : 0);
        break;
      case e:
        o = (s - t) / u + 2;
        break;
      case s:
        o = (t - e) / u + 4;
        break;
    }
    o /= 6;
  }
  return {
    h: o * 360,
    s: c * 100,
    l: a * 100,
    a: n
  };
}
function kc(t) {
  return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a})`;
}
function er(t, e, s, n) {
  t /= 360;
  e /= 100;
  s /= 100;
  let r;
  let i;
  let o;
  if (e === 0) {
    r = i = o = s;
  } else {
    const c = function (h, f, g) {
      if (g < 0) {
        g += 1;
      }
      if (g > 1) {
        g -= 1;
      }
      return g < .16666666666666666 ? h + (f - h) * 6 * g : g < .5 ? f : g < .6666666666666666 ? h + (f - h) * (.6666666666666666 - g) * 6 : h;
    };
    const a = s < .5 ? s * (1 + e) : s + e - s * e;
    const u = 2 * s - a;
    r = c(u, a, t + 0.3333333333333333);
    i = c(u, a, t);
    o = c(u, a, t - 0.3333333333333333);
  }
  return [r, i, o, n].map(c => Math.round(c * 255));
}
function tr(t) {
  const e = t.slice(5, -1).split(", ");
  const s = +e.pop();
  const n = e.map(r => r.endsWith("%") ? +r.slice(0, -1) : +r);
  return er(n[0], n[1], n[2], s);
}
function sr(t) {
  const e = [];
  const s = t[0] === "#" ? 1 : 0;
  if (t.length === 5 + s) {
    t = (s ? "#" : "") + "0" + t.slice(s);
  }
  if (t.length === 3 + s) {
    for (let n = s; n < t.length; ++n) {
      e.push(parseInt(t[n] + t[n], 16));
    }
  } else if (t.length === 4 + s) {
    for (let n = s; n < t.length - 1; ++n) {
      e.push(parseInt(t[n] + t[n], 16));
    }
    e.push(parseInt(t[t.length - 1], 16));
  } else {
    for (let n = s; n < t.length; n += 2) {
      e.push(parseInt(t.slice(n, n + 2), 16));
    }
  }
  return e;
}
function ae(t) {
  return sr(t.slice(0, 7));
}
function Tc(t) {
  const e = sr(t);
  return ls(e[0], e[1], e[2], e[3]);
}
function Ue(t) {
  return "#" + t.map(e => ("0" + e.toString(16)).slice(-2)).join("");
}
function Yo(t) {
  return Ue(tr(t));
}
function Ho(t) {
  return Ue(tr(t)).slice(0, -2);
}
function Gt(t, e, s) {
  const n = new Array(3);
  for (let r = 0; r < 3; ++r) {
    const i = t[r];
    const o = e[r];
    n[r] = Math.floor(o + (i - o) * s);
  }
  return n;
}
function Js(t) {
  return (t[0] * .2126 + t[1] * .7152 + t[2] * .0722) / 255;
}
function $o(t, e) {
  return t.map((s, n) => Math.round((s + e[n]) / 2));
}
function zo(t, e, s) {
  const n = ce(...e);
  const r = ce(...s);
  const i = Math.min(1.5 * n[1] / t[1], 1);
  n[0] = Math.min(360, r[0] - n[0] + t[0]);
  n[1] = Math.min(1, r[1] * t[1] / n[1]);
  n[2] = Math.min(1, (r[2] / n[2] + i - 1) * t[2] / i);
  return n[2] < .3 ? s : Ps(...n);
}
function Ko(t, e, s, n) {
  const r = ce(...s);
  if (Math.min(Math.abs(r[0] - t[0]), Math.abs(r[0] - t[0] - 360)) > 30) {
    return s;
  }
  const o = t[1] ? Math.min(1.5 * r[1] / t[1], 1) : 0;
  r[0] = Math.min(360, r[0] + e[0] - t[0]);
  r[1] = t[1] ? Math.min(1, r[1] * e[1] / t[1]) : 0;
  r[2] = t[2] ? Math.min(1, r[2] * (1 - o + o * e[2] / t[2])) : 0;
  let c = Ps(...r);
  const a = (s[0] * .2126 + s[1] * .7152 + s[2] * .0722) / 255;
  const u = (c[0] * .2126 + c[1] * .7152 + c[2] * .0722) / 255;
  if (n ? a > u : a < u) {
    const f = .4 * a / u + .6;
    c = qo(c, f);
  }
  return c;
}
function qo(t, e) {
  return t.map(s => Math.min(255, Math.max(0, Math.round(s * e))));
}
function nr(t) {
  const e = (t < 0 ? 16777215 + t : t).toString(16);
  return "#" + (e.length >= 6 ? e : "0".repeat(6 - e.length) + e);
}
function nt(t) {
  return sr(nr(t).slice(0, 7));
}
function Mc(t) {
  return t.settings ? [t.settings.background_color, t.settings.second_background_color, t.settings.third_background_color, t.settings.fourth_background_color].filter(Boolean).map(nr).join(",") : "";
}
function Lc(t, e) {
  const s = t[3];
  return t.slice(0, 3).map((n, r) => Math.min(255, Math.max(0, Math.round((s * (n / 255) + s * (e[r] / 255)) * 255))));
}
function Ic(t) {
  const [e, s, n] = t;
  return .2126 * e / 255 + .7152 * s / 255 + .0722 * n / 255;
}
function Oc(t) {
  return t > .5 ? [0, 0, 0] : [255, 255, 255];
}
function Rc(t, e) {
  const s = t > .5 ? 0 : 1;
  const n = (t - s + e) / e;
  return +Math.max(.5, Math.min(.64, n)).toFixed(2);
}
function rr(t, e, s, n, r = true) {
  if (t < s && e < n && r) {
    return new Jo(t, e);
  }
  let i = s;
  let o = n;
  if (t / e > s / n) {
    o = e * s / t | 0;
  } else {
    i = t * n / e | 0;
    if (i > s) {
      o = o * s / i | 0;
      i = s;
    }
  }
  if (r && i >= t && o >= e) {
    i = t;
    o = e;
  }
  return new Jo(i, o);
}
Or.calcImageInBox = rr;
class Jo {
  constructor(e = 0, s = e) {
    this.width = e;
    this.height = s;
  }
  aspect(e, s) {
    return rr(this.width, this.height, e.width, e.height, s);
  }
  aspectFitted(e) {
    return this.aspect(e, true);
  }
  aspectCovered(e) {
    return this.aspect(e, false);
  }
}
function L(t, e) {
  return new Jo(t, e);
}
var Xo = (t => (t[t.mobile = 0] = "mobile", t[t.medium = 1] = "medium", t[t.large = 2] = "large", t))(Xo || {});
const Zo = 600;
const Qo = 1275;
const ea = 1680;
const Xs = new Jo(20, 20);
const Zs = new Jo(36, 36);
const Qs = new Jo(18, 18);
class ta extends Fe {
  constructor() {
    super();
    this.screenSizes = [{
      key: 0,
      value: Zo
    }, {
      key: 1,
      value: Qo
    }, {
      key: 2,
      value: ea
    }];
    this.sizes = {
      handhelds: {
        regular: new Jo(340, 340),
        webpage: new Jo(340, 200),
        album: new Jo(340, 0),
        esgSticker: new Jo(68, 68),
        animatedSticker: new Jo(180, 180),
        staticSticker: new Jo(180, 180),
        emojiSticker: new Jo(112, 112),
        poll: new Jo(240, 0),
        round: new Jo(240, 240),
        documentName: new Jo(200, 0),
        invoice: new Jo(340, 340),
        extendedInvoice: new Jo(340, 340),
        customEmoji: Xs,
        esgCustomEmoji: Zs,
        emojiStatus: Qs,
        popupSticker: new Jo(68, 68)
      },
      desktop: {
        regular: new Jo(420, 400),
        webpage: new Jo(420, 380),
        album: new Jo(420, 0),
        esgSticker: new Jo(72, 72),
        animatedSticker: new Jo(200, 200),
        staticSticker: new Jo(200, 200),
        emojiSticker: new Jo(112, 112),
        poll: new Jo(330, 0),
        round: new Jo(280, 280),
        documentName: new Jo(240, 0),
        invoice: new Jo(320, 320),
        extendedInvoice: new Jo(420, 400),
        customEmoji: Xs,
        esgCustomEmoji: Zs,
        emojiStatus: Qs,
        popupSticker: new Jo(80, 80)
      }
    };
    this.isMobile = false;
    this.handleResize = () => {
      const e = window.innerWidth;
      let s = this.screenSizes[0].key;
      for (let r = this.screenSizes.length - 1; r >= 0; --r) {
        if (this.screenSizes[r].value < e) {
          s = (this.screenSizes[r + 1] || this.screenSizes[r]).key;
          break;
        }
      }
      const n = this.activeScreen;
      this.activeScreen = s;
      this.isMobile = this.activeScreen === 0;
      this.active = this.isMobile ? this.sizes.handhelds : this.sizes.desktop;
      if (n !== s && n !== undefined) {
        this.dispatchEvent("changeScreen", n, s);
      }
      if (n !== undefined) {
        this.dispatchEvent("resize");
      }
    };
    window.addEventListener("resize", () => {
      if (this.rAF) {
        window.cancelAnimationFrame(this.rAF);
      }
      this.rAF = window.requestAnimationFrame(() => {
        this.handleResize();
        this.rAF = 0;
      });
    });
    this.handleResize();
  }
}
const ir = new ta();
Or.mediaSizes = ir;
class sa {
  constructor() {
    this.resetCache = () => {
      this.computedStyle = undefined;
      const e = this.cache;
      this.cache = {};
      for (const s in e) this.getProperty(s);
    };
    this.cache = {};
    this.nightElement = document.createElement("div");
    this.nightElement.className = "night";
    this.nightElement.style.display = "none";
    document.body.append(this.nightElement);
    S.addEventListener("theme_changed", this.resetCache);
    ir.addEventListener("resize", this.resetCache);
  }
  getProperty(e, s) {
    const n = this.cache[e];
    const r = s ? 1 : 0;
    if (n?.[r]) {
      return n[r];
    }
    this.computedStyle ?? (this.computedStyle = window.getComputedStyle(document.documentElement));
    this.nightComputedStyle ?? (this.nightComputedStyle = window.getComputedStyle(this.nightElement));
    const i = (s ? this.nightComputedStyle : this.computedStyle).getPropertyValue("--" + e).trim();
    return this.setPropertyCache(e, i, s);
  }
  getPropertyAsColor(e) {
    const s = this.getProperty(e);
    return s[0] === "#" ? s : `rgb(${s})`;
  }
  getPropertyAsSize(e) {
    const s = this.getProperty(e);
    let n;
    if (!(s[s.length - 1] === "%")) {
      if (s.indexOf("rem")) {
        n = +s.replace("rem", "") * 16;
      } else {
        n = +s.replace("px", "");
      }
    }
    return n;
  }
  setPropertyCache(e, s, n) {
    var r;
    return ((r = this.cache)[e] ?? (r[e] = []))[n ? 1 : 0] = s;
  }
}
const hs = new sa();
if (Or) {
  Or.customProperties = hs;
}
function en(...t) {
  const [e, s] = ne(...t);
  return (...n) => n.length === 0 ? e() : s(...n);
}
class na {
  constructor() {
    if (pe) {
      return;
    }
    this._width = en();
    this._height = en();
    this.viewport = window;
    const e = () => {
      this.setDimensions();
    };
    this.viewport.addEventListener("resize", e);
    e();
  }
  setDimensions() {
    const e = this.viewport;
    this._width(e.width || e.innerWidth);
    this._height(e.height || e.innerHeight);
  }
  get width() {
    return this._width();
  }
  get height() {
    return this._height();
  }
}
const ds = new na();
if (Or) {
  Or.windowSize = ds;
}
class ra {
  isEnabled() {
    return !!(S.settings && S.settings.liteMode.all);
  }
  isAvailable(e) {
    return !!(S.settings && !S.settings.liteMode.all && !S.settings.liteMode[e]);
  }
}
const or = new ra();
if (Or) {
  Or.liteMode = or;
}
const tn = {
  "primary-color": {
    rgb: true,
    light: true,
    lightFilled: true,
    dark: true,
    darkRgb: true
  },
  "message-out-primary-color": {
    lightFilled: true,
    rgb: true
  },
  "surface-color": {
    rgb: true
  },
  "danger-color": {
    rgb: true,
    light: true,
    dark: true
  },
  "primary-text-color": {
    rgb: true
  },
  "secondary-text-color": {
    light: true,
    lightFilled: true,
    rgb: true
  },
  "message-background-color": {
    light: true,
    lightFilled: true,
    dark: true,
    darkFilled: true
  },
  "message-out-background-color": {
    light: true,
    lightFilled: true,
    dark: true,
    darkFilled: true,
    rgb: true
  },
  "saved-color": {
    lightFilled: true
  },
  "green-color": {}
};
const Yt = {
  day: {
    "primary-color": "#3390ec",
    "message-out-primary-color": "#5CA853",
    "message-background-color": "#ffffff",
    "surface-color": "#ffffff",
    "danger-color": "#df3f40",
    "primary-text-color": "#000000",
    "secondary-text-color": "#707579",
    "saved-color": "#359AD4",
    "green-color": "#70b768"
  },
  night: {
    "primary-color": "#8774E1",
    "message-out-primary-color": "#8774E1",
    "message-background-color": "#212121",
    "surface-color": "#212121",
    "danger-color": "#ff595a",
    "primary-text-color": "#ffffff",
    "secondary-text-color": "#aaaaaa",
    "saved-color": "#8774E1",
    "green-color": "#5CC85E"
  }
};
class ia {
  constructor() {
    S.addEventListener("theme_change", e => {
      this.setTheme(typeof e == "object" ? e : undefined);
    });
    S.addEventListener("theme_changed", () => {
      this.setWorkerThemeParams();
    });
  }
  setWorkerThemeParams() {
    S.managers.apiManager.setThemeParams({
      _: "dataJSON",
      data: JSON.stringify(this.getThemeParamsForWebView())
    });
  }
  get themeColorElem() {
    return this._themeColorElem !== undefined ? this._themeColorElem : this._themeColorElem = document.head.querySelector('[name="theme-color"]') || null;
  }
  setThemeColor(e = this.themeColor) {
    if (!e) {
      e = this.isNight() ? "#212121" : "#ffffff";
    }
    const s = this.themeColorElem;
    if (s) {
      s.setAttribute("content", e);
    }
  }
  setThemeListener() {
    try {
      const e = window.matchMedia("(prefers-color-scheme: dark)");
      const s = () => {
        this.systemTheme = e.matches ? "night" : "day";
        if (S.myId) {
          S.dispatchEvent("theme_change");
        } else {
          this.setTheme();
        }
      };
      if ("addEventListener" in e) {
        e.addEventListener("change", s);
      } else if ("addListener" in e) {
        e.addListener(s);
      }
      s();
    } catch {}
  }
  applyHighlightingColor({
    hsla: e,
    element: s = document.documentElement
  } = {}) {
    if (!e) {
      e = "hsla(85.5319, 36.9171%, 40.402%, .4)";
      const r = this.getTheme();
      if (r.settings?.highlightingColor) {
        e = r.settings.highlightingColor;
      }
    }
    const n = tr(e);
    s.style.setProperty("--message-highlighting-color", e);
    s.style.setProperty("--message-highlighting-color-rgb", n.slice(0, 3).join(","));
    s.style.setProperty("--message-highlighting-alpha", "" + n[3] / 255);
    if (!ge && e) {
      this.themeColor = Yo(e).slice(0, -2);
    }
  }
  _setTheme(e) {
    const s = this.isNight();
    document.head.querySelector('[name="color-scheme"]')?.setAttribute("content", s ? "dark" : "light");
    document.documentElement.classList.toggle("night", s);
    this.setThemeColor();
    const r = this.getTheme();
    this.applyTheme(r);
    let i = this.styleElement;
    if (!i) {
      i = this.styleElement = document.createElement("style");
      document.head.append(i);
    }
    const o = document.createElement("div");
    this.applyTheme(S.settings.themes.find(c => c.name === "night"), o, true);
    i.textContent = `.night {${o.style.cssText}}`;
    this.applyHighlightingColor();
    if (!e) {
      S.dispatchEventSingle("theme_changed");
    }
  }
  setTheme(e) {
    if (!("startViewTransition" in document) || !this.applied) {
      const c = !this.applied;
      const a = this.applied;
      this.applied = true;
      this._setTheme(c);
      if (!a) {
        this.setWorkerThemeParams();
      }
      return;
    }
    if (!or.isAvailable("animations")) {
      e = undefined;
    }
    const s = !this.isNight();
    if (e) {
      document.documentElement.classList.add("no-view-transition");
      document.documentElement.classList.toggle("reverse", s);
      document.documentElement.offsetLeft;
    }
    const n = document.startViewTransition(() => {
      this._setTheme();
    });
    if (!e) {
      return;
    }
    const {
      x: r,
      y: i
    } = e;
    const o = Math.hypot(Math.max(r, ds.width - r), Math.max(i, ds.height - i));
    n.ready.then(() => {
      document.documentElement.animate({
        clipPath: [`circle(0 at ${r}px ${i}px)`, `circle(${o}px at ${r}px ${i}px)`]
      }, {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: `::view-transition-${s ? "old" : "new"}(root)`,
        direction: s ? "reverse" : "normal"
      });
    });
    n.finished.finally(() => {
      document.documentElement.classList.remove("no-view-transition", "reverse");
    });
  }
  async switchTheme(e, s) {
    await S.managers.appStateManager.setByKey($s("settings", "theme"), e);
    S.dispatchEvent("theme_change", s);
  }
  isNight() {
    return this.getTheme().name === "night";
  }
  getTheme(e = S.settings.theme === "system" ? this.systemTheme : S.settings.theme) {
    return S.settings.themes.find(s => s.name === e);
  }
  bindColorApplier(e) {
    const s = new Set();
    return {
      applyAppColor: n => (s.add(n.name), this.applyAppColor({
        ...n,
        ...e
      })),
      finalize: () => {
        const n = e.isNight;
        for (const r in tn) if (!s.has(r)) {
          this.applyAppColor({
            name: r,
            hex: Yt[n ? "night" : "day"][r],
            ...e
          });
        }
      }
    };
  }
  applyAppColor({
    name: e,
    hex: s,
    element: n,
    lightenAlpha: r = .08,
    darkenAlpha: i = r,
    mixColor: o,
    isNight: c = this.isNight(),
    saveToCache: a
  }) {
    const u = tn[e];
    const l = sr(s.slice(0, 7));
    const h = ls(...l);
    o ?? (o = sr(Yt[c ? "night" : "day"]["surface-color"].slice(0, 7)));
    const f = Gt(l, o, r);
    const g = {
      ...h,
      l: h.l - i * 100
    };
    const E = [[e, s], u.rgb && [e + "-rgb", l.join(",")], u.light && ["light-" + e, `rgba(${l[0]}, ${l[1]}, ${l[2]}, ${r})`], u.lightFilled && ["light-filled-" + e, Ue(f)], u.dark && ["dark-" + e, `hsl(${g.h}, ${g.s}%, ${g.l}%)`]];
    a ?? (a = n === document.documentElement);
    E.filter(Boolean).forEach(([C, D]) => {
      n.style.setProperty("--" + C, D);
      if (a) {
        hs.setPropertyCache(C, D, c);
      }
    });
  }
  async applyNewTheme(e) {
    const s = this.isNightTheme(e);
    const n = this.getTheme();
    const r = S.settings.themes;
    const i = e.settings.find(c => c.base_theme._ === (s ? "baseThemeNight" : "baseThemeClassic"));
    const o = {
      ...e,
      name: n.name,
      settings: {
        ...i,
        highlightingColor: ""
      }
    };
    await this.AppBackgroundTab.setBackgroundDocument(i.wallpaper, o.settings);
    r[r.indexOf(n)] = o;
    await S.managers.appStateManager.setByKey($s("settings", "themes"), S.settings.themes);
    S.dispatchEvent("theme_change");
  }
  isNightTheme(e) {
    return e.name === "night" || this.isNight();
  }
  getThemeSettings(e, s) {
    s ?? (s = this.isNightTheme(e));
    return Array.isArray(e.settings) ? e.settings.find(r => r.base_theme._ === (s ? "baseThemeNight" : "baseThemeClassic")) : e.settings;
  }
  applyTheme(e, s = document.documentElement, n) {
    const r = this.isNightTheme(e);
    const i = this.getThemeSettings(e, r);
    const o = Yt[r ? "night" : "day"];
    let c = ce(...sr(o["primary-color"].slice(0, 7)));
    let a = ce(...ae(nr(i.accent_color)));
    const u = Ko(c, a, sr(o["primary-color"].slice(0, 7)), !r);
    const l = Ue(u);
    const {
      applyAppColor: h,
      finalize: f
    } = this.bindColorApplier({
      element: s,
      isNight: r,
      saveToCache: n
    });
    h({
      name: "primary-color",
      hex: l,
      darkenAlpha: .04
    });
    h({
      name: "saved-color",
      hex: l,
      lightenAlpha: .64,
      mixColor: [255, 255, 255]
    });
    if (!i.message_colors?.length) {
      return;
    }
    const g = r ? 1 : .12;
    const E = sr(o["message-out-primary-color"].slice(0, 7));
    c = ce(...E);
    const C = Gt(E, sr(o["surface-color"].slice(0, 7)), g);
    let F = ae(nr(i.message_colors[0]));
    if (i.message_colors.length > 1) {
      i.message_colors.slice(1).forEach(T => {
        F = $o(F, ae(nr(T)));
      });
      F = zo(c, C, F);
    }
    a = ce(...F);
    const P = i.outbox_accent_color !== undefined && ce(...ae(nr(i.outbox_accent_color)));
    let k = Gt(F, sr(o["surface-color"].slice(0, 7)), g);
    if (!r) {
      const T = ls(...k);
      T.s = Math.min(T.s + (r ? 8 : 63), 100);
      k = er(T.h, T.s, T.l, T.a).slice(0, 3);
    }
    h({
      name: "message-out-background-color",
      hex: Ue(k),
      lightenAlpha: g
    });
    h({
      name: "message-out-primary-color",
      hex: r ? "#ffffff" : Ue(P ? Ps(...P) : F),
      mixColor: k
    });
    f();
  }
  getThemeParamsForWebView() {
    const e = {
      bg_color: "surface-color",
      button_color: "primary-color",
      button_text_color: "#ffffff",
      hint_color: "secondary-text-color",
      link_color: "link-color",
      secondary_bg_color: "background-color-true",
      text_color: "primary-text-color",
      header_bg_color: "surface-color",
      accent_text_color: "primary-color",
      section_bg_color: "surface-color",
      section_header_text_color: "primary-color",
      subtitle_text_color: "secondary-text-color",
      destructive_text_color: "danger-color"
    };
    const s = {};
    for (const n in e) {
      const r = e[n];
      s[n] = r[0] === "#" ? r : hs.getProperty(r);
    }
    return s;
  }
}
const ar = new ia();
if (Or) {
  Or.themeController = ar;
}
class oa extends Fe {
  constructor() {
    super(...arguments);
    this.overlaysActive = 0;
    this.hasDarkOverlays = 0;
  }
  get isOverlayActive() {
    return this.overlaysActive > 0;
  }
  set isOverlayActive(e) {
    this.overlaysActive += e ? 1 : -1;
    this.dispatchEvent("change", this.isOverlayActive);
  }
  get isDarkOverlayActive() {
    return this.hasDarkOverlays > 0;
  }
  set isDarkOverlayActive(e) {
    this.hasDarkOverlays += e ? 1 : -1;
    this.isOverlayActive = e;
  }
}
const ct = new oa();
if (Or) {
  Or.overlayCounter = ct;
}
function Bc(t, e = t.split("?")) {
  return cr(e?.[1]);
}
function cr(t) {
  const e = {};
  if (t) {
    t.split("&").forEach(s => {
      const [n, r = ""] = s.split("=");
      e[n] = decodeURIComponent(r);
    });
  }
  return e;
}
const aa = ("onbeforeinstallprompt" in window);
let fs;
function ca() {
  window.addEventListener("beforeinstallprompt", t => {
    fs = async () => {
      t.prompt();
      const {
        outcome: e
      } = await t.userChoice;
      if (e === "accepted") {
        fs = undefined;
      }
    };
  });
}
function xc() {
  return fs;
}
const ks = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const ua = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const $e = ks.slice();
const gs = ua.slice();
const ke = 86400;
const Nc = 1440;
const Uc = 10080;
function la() {
  const t = le.getDateTimeFormat({
    weekday: "long"
  });
  const e = new Date(Date.UTC(2017, 0, 2));
  const s = [];
  for (let n = 0; n < 7; ++n) {
    s.push(t.format(e).charAt(0).toUpperCase() + t.format(e).slice(1));
    e.setDate(e.getDate() + 1);
  }
  return s;
}
function ha() {
  const t = le.getDateTimeFormat({
    month: "long"
  });
  const e = new Date(Date.UTC(2017, 0, 1));
  const s = [];
  for (let n = 0; n < 12; ++n) {
    s.push(t.format(e).charAt(0).toUpperCase() + t.format(e).slice(1));
    e.setMonth(e.getMonth() + 1);
  }
  return s;
}
function sn() {
  $e.splice(0, $e.length, ...ha());
  gs.splice(0, gs.length, ...la());
}
const nn = t => {
  const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()));
  const s = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - s);
  const n = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e.getTime() - n.getTime()) / ke + 1) / 7);
};
function Wc(t, e) {
  if (!e) {
    e = new Date();
    e.setHours(0, 0, 0, 0);
  }
  const s = {
    day: "numeric",
    month: "long"
  };
  if (t.getFullYear() !== e.getFullYear()) {
    s.year = "numeric";
  }
  return new le.IntlDateElement({
    date: t,
    options: s
  }).element;
}
function da(t) {
  const e = new Date();
  const s = e.getTime() / 1e3 | 0;
  const n = t.getTime() / 1e3 | 0;
  const r = {};
  if (s - n < ke && e.getDate() === t.getDate()) {
    r.hour = r.minute = "2-digit";
  } else if (e.getFullYear() !== t.getFullYear()) {
    r.year = r.day = "numeric";
    r.month = "2-digit";
  } else if (s - n < ke * 7 && nn(e) === nn(t)) {
    r.weekday = "short";
  } else {
    r.month = "short";
    r.day = "numeric";
  }
  return new le.IntlDateElement({
    date: t,
    options: r
  }).element;
}
const ms = {
  hour: "2-digit",
  minute: "2-digit"
};
function fa(t, e = {}) {
  if (e.combined) {
    e.noToday = true;
  }
  const s = new Date();
  const n = new Date(t * 1e3);
  const i = (s.getTime() / 1e3 | 0) - t;
  const o = e.combined ? undefined : new le.IntlDateElement({
    date: n,
    options: ms
  }).element;
  let c;
  if (!e.noToday && i < ke && s.getDate() === n.getDate()) {
    c = Ge(e.capitalize ? "Date.Today" : "Peer.Status.Today");
  } else if (!e.noToday && i > 0 && i < ke * 2 && new Date(s.getTime() - ke * 1e3).getDate() === n.getDate()) {
    c = Ge(e.capitalize ? "Yesterday" : "Peer.Status.Yesterday");
    if (e.capitalize) {
      c.style.textTransform = "capitalize";
    }
  } else if (s.getFullYear() !== n.getFullYear()) {
    c = new le.IntlDateElement({
      date: n,
      options: {
        month: "short",
        day: "numeric",
        year: "numeric",
        ...(e.combined ? ms : {})
      }
    }).element;
  } else {
    c = new le.IntlDateElement({
      date: n,
      options: {
        month: "short",
        day: "numeric",
        ...(e.combined ? ms : {})
      }
    }).element;
  }
  return {
    dateEl: c,
    timeEl: o
  };
}
function jc(t, e = true, s = false) {
  const {
    dateEl: n,
    timeEl: r
  } = fa(t, {
    capitalize: e,
    noToday: s
  });
  const i = document.createDocumentFragment();
  i.append(n, " ", Ge("ScheduleController.at"), " ", r);
  return i;
}
function ga(t) {
  return new le.IntlDateElement({
    date: t,
    options: ms
  }).element;
}
if (Or) {
  Or.formatDateAccordingToTodayNew = da;
}
const Vc = (t, e = {}) => {
  const s = e.monthAsNumber ? "." : " ";
  const n = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + (e.noSeconds ? "" : ":" + ("0" + t.getSeconds()).slice(-2));
  const r = t.getFullYear();
  return (e.leadingZero ? ("0" + t.getDate()).slice(-2) : t.getDate()) + s + (e.monthAsNumber ? ("0" + (t.getMonth() + 1)).slice(-2) : ks[t.getMonth()]) + s + ("" + r).slice(e.shortYear ? 2 : 0) + (e.noTime ? "" : ", " + n);
};
function Gc(t, e) {
  const s = t >= 12 && !(t % 12);
  return Ge(e ? s ? "BoldYears" : "BoldMonths" : s ? "Years" : "Months", [s ? t / 12 : t]);
}
const Z = 2013;
const ma = new RegExp("20[0-9]{1,2}");
const Ts = "\\p{L}";
const Da = new RegExp(`(${Ts}{3,})`, "iu");
const pa = new RegExp(`(${Ts}{3,}) ([0-9]{0,4})`, "iu");
const Ea = new RegExp(`([0-9]{0,4}) (${Ts}{2,})`, "iu");
const Fa = new RegExp("^([0-9]{1,4})(\\.| |/|\\-)([0-9]{1,4})$", "i");
const va = new RegExp("^([0-9]{1,2})(\\.| |/|\\-)([0-9]{1,2})(\\.| |/|\\-)([0-9]{1,4})$", "i");
const Aa = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ya(t, e) {
  const s = t.trim().toLowerCase();
  if (s.length < 3) {
    return;
  }
  if (["today", le.format("Peer.Status.Today", true)].some(i => i.indexOf(s) === 0)) {
    const i = new Date();
    const o = i.getFullYear();
    const c = i.getMonth();
    const a = i.getDate();
    i.setFullYear(o, c, a);
    i.setHours(0, 0, 0);
    const u = i.getTime();
    i.setFullYear(o, c, a + 1);
    i.setHours(0, 0, 0);
    const l = i.getTime() - 1;
    e.push({
      title: le.format("Date.Today", true),
      minDate: u,
      maxDate: l
    });
    return;
  }
  if (["yesterday", le.format("Peer.Status.Yesterday", true)].some(i => i.indexOf(s) === 0)) {
    const i = new Date();
    const o = i.getFullYear();
    const c = i.getMonth();
    const a = i.getDate();
    i.setFullYear(o, c, a);
    i.setHours(0, 0, 0);
    const u = i.getTime() - 864e5;
    i.setFullYear(o, c, a + 1);
    i.setHours(0, 0, 0);
    const l = i.getTime() - 86400001;
    e.push({
      title: le.format("Yesterday", true).charAt(0).toUpperCase() + le.format("Yesterday", true).slice(1),
      minDate: u,
      maxDate: l
    });
    return;
  }
  const n = Ca(s);
  if (n >= 0) {
    const i = new Date();
    const o = i.getTime();
    const c = i.getDay();
    const a = n - c;
    i.setDate(i.getDate() + a);
    if (i.getTime() > o) {
      i.setTime(i.getTime() - 6048e5);
    }
    const u = i.getFullYear();
    const l = i.getMonth();
    const h = i.getDate();
    i.setFullYear(u, l, h);
    i.setHours(0, 0, 0);
    const f = i.getTime();
    i.setFullYear(u, l, h + 1);
    i.setHours(0, 0, 0);
    const g = i.getTime() - 1;
    e.push({
      title: lr(f),
      minDate: f,
      maxDate: g
    });
    return;
  }
  let r;
  if ((r = Fa.exec(s)) !== null) {
    const i = r[1];
    const o = r[3];
    const c = parseInt(i);
    const a = parseInt(o);
    if (c > 0 && c <= 31) {
      if (a >= Z && c <= 12) {
        const l = c - 1;
        Be(e, l, a);
        return;
      } else if (a <= 12) {
        const u = c - 1;
        const l = a - 1;
        Ht(e, u, l);
      }
    } else if (c >= Z && a <= 12) {
      const l = a - 1;
      Be(e, l, c);
    }
    return;
  }
  if ((r = va.exec(s)) !== null) {
    const i = r[1];
    const o = r[3];
    const c = r[5];
    if (!r[2] === r[4]) {
      return;
    }
    const a = parseInt(i);
    const u = parseInt(o) - 1;
    let l = parseInt(c);
    if (l >= 10 && l <= 99) {
      l += 2e3;
    }
    const h = new Date().getFullYear();
    if (u >= 0 && u < 12 && a - 1 >= 0 && a - 1 < Aa[e] && l >= Z && l <= h) {
      const f = new Date();
      f.setFullYear(l, u, a);
      f.setHours(0, 0, 0);
      const g = f.getTime();
      f.setFullYear(l, u, a + 1);
      f.setHours(0, 0, 0);
      const E = f.getTime() - 1;
      e.push({
        title: ur(g),
        minDate: g,
        maxDate: E
      });
      return;
    }
    return;
  }
  if ((r = pa.exec(s)) !== null) {
    const i = r[1];
    const o = r[2];
    const c = $t(i);
    if (c >= 0) {
      const a = +o || new Date().getUTCFullYear();
      if (a > 0 && a <= 31) {
        const u = a - 1;
        Ht(e, u, c);
        return;
      } else if (a >= Z) {
        Be(e, c, a);
        return;
      }
    }
  }
  if ((r = Ea.exec(s)) !== null) {
    const i = r[1];
    const o = r[2];
    const c = $t(o);
    if (c >= 0) {
      const a = +i;
      if (a > 0 && a <= 31) {
        const u = a - 1;
        Ht(e, u, c);
        return;
      } else if (a >= Z) {
        Be(e, c, a);
      }
    }
  }
  if ((r = Da.exec(s)) !== null) {
    const i = r[1];
    const o = $t(i);
    if (o >= 0) {
      const c = new Date().getFullYear();
      for (let a = c; a >= Z; --a) {
        Be(e, o, a);
      }
    }
  }
  if ((r = ma.exec(s)) !== null) {
    let i = +r[0];
    const o = new Date().getFullYear();
    if (i < Z) {
      i = Z;
      for (let c = o; c >= i; c--) {
        const a = new Date();
        a.setFullYear(c, 0, 1);
        a.setHours(0, 0, 0);
        const u = a.getTime();
        a.setFullYear(c + 1, 0, 1);
        a.setHours(0, 0, 0);
        const l = a.getTime() - 1;
        e.push({
          title: "" + c,
          minDate: u,
          maxDate: l
        });
      }
    } else if (i <= o) {
      const c = new Date();
      c.setFullYear(i, 0, 1);
      c.setHours(0, 0, 0);
      const a = c.getTime();
      c.setFullYear(i + 1, 0, 1);
      c.setHours(0, 0, 0);
      const u = c.getTime() - 1;
      e.push({
        title: "" + i,
        minDate: a,
        maxDate: u
      });
    }
    return;
  }
}
function Be(t, e, s) {
  const n = new Date().getFullYear();
  const r = Date.now();
  if (s >= Z && s <= n) {
    const i = new Date();
    i.setFullYear(s, e, 1);
    i.setHours(0, 0, 0);
    const o = i.getTime();
    if (o > r) {
      return;
    }
    i.setMonth(i.getMonth() + 1);
    const c = i.getTime() - 1;
    t.push({
      title: Sa(o),
      minDate: o,
      maxDate: c
    });
  }
}
function Ht(t, e, s) {
  if (s >= 0 && s < 12 && e >= 0 && e < Aa[e]) {
    const n = new Date().getFullYear();
    const r = Date.now();
    for (let i = n; i >= Z; i--) {
      if (s === 1 && e === 28 && !(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0)) {
        continue;
      }
      const o = new Date();
      o.setFullYear(i, s, e + 1);
      o.setHours(0, 0, 0);
      const c = o.getTime();
      if (c > r) {
        continue;
      }
      o.setFullYear(i, s, e + 2);
      o.setHours(0, 0, 0);
      const a = o.getTime() - 1;
      if (i === n) {
        t.push({
          title: ba(c),
          minDate: c,
          maxDate: a
        });
      } else {
        t.push({
          title: ur(c),
          minDate: c,
          maxDate: a
        });
      }
    }
  }
}
function Sa(t) {
  const e = new Date(t);
  return $e[e.getMonth()] + " " + e.getFullYear();
}
function ba(t) {
  const e = new Date(t);
  return $e[e.getMonth()] + " " + e.getDate();
}
function ur(t) {
  const e = new Date(t);
  return ("0" + e.getDate()).slice(-2) + "." + ("0" + (e.getMonth() + 1)).slice(-2) + "." + e.getFullYear();
}
function lr(t) {
  const e = new Date(t);
  return gs[e.getDay()];
}
function hr(t, e) {
  return e >= 0 && e < 12 && t >= 0 && t < Aa[e];
}
function wa(t) {
  return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;
}
function $t(t) {
  t = t.toLowerCase();
  for (let e = 0; e < 12; e++) {
    if ([ks[e], $e[e]].some(s => s.toLowerCase().indexOf(t) === 0)) {
      return e;
    }
  }
  return -1;
}
function Ca(t) {
  const e = new Date();
  if (t.length <= 3) {
    return -1;
  }
  for (let s = 0; s < 7; s++) {
    e.setDate(e.getDate() + 1);
    if (lr(e.getTime()).toLowerCase().indexOf(t) === 0) {
      return e.getDay();
    }
  }
  return -1;
}
Or.fillTipDates = ya;
const fr = ie || !an && (!J || ze) || cn < 113;
const _a = !ie && !fr;
Bn.then(t => {
  t.forEach(e => {
    Ye.add(e);
    Nn.add(e);
  });
  console.log("Supported image mime types", Ye);
  Zn.sendEnvironment();
});
document.addEventListener("DOMContentLoaded", async () => {
  try {
    if (x.isMainDomain && document.referrer && /(^|\.)(google|bing|duckduckgo|ya|yandex)\./i.test(new URL(document.referrer).host)) {
      if (localStorage.getItem("kz_version") === "Z" || At(8) > 127) {
        localStorage.setItem("kz_version", "Z");
        location.href = "https://web.telegram.org/a/";
      } else {
        localStorage.setItem("kz_version", "K");
      }
    }
  } catch {}
  _r();
  if (Node.prototype.replaceChildren === undefined) {
    Node.prototype.replaceChildren = function (...D) {
      this.textContent = "";
      if (D) {
        this.append(...D);
      }
    };
  }
  S.managers = Go();
  const t = document.getElementById("manifest");
  if (t) {
    t.href = `site${Kt && !Te ? "_apple" : ""}.webmanifest?v=jw3mK7G9Aq`;
  }
  Ft.start();
  const e = window.visualViewport || window;
  let s = false;
  let n;
  const r = () => {
    let D = (s && !ct.isOverlayActive ? e.height || e.innerHeight : window.innerHeight) * .01;
    D = +D.toFixed(2);
    if (n !== D) {
      if (ge && n < D && D - n > 1) {
        rn();
      }
      n = D;
      document.documentElement.style.setProperty("--vh", `${D}px`);
    }
  };
  window.addEventListener("resize", r);
  r();
  const i = () => {
    const D = document.querySelector(".chat.active");
    if (!D) {
      return;
    }
    const F = D.cloneNode(true);
    F.querySelectorAll(".chat-input, .chat-background").forEach(A => A.remove());
    const b = F.querySelector(".bubbles");
    const P = b.querySelector(".bubbles-inner");
    b.replaceChildren(P);
    b.querySelectorAll("video").forEach(A => A.muted = true);
    const T = document.createElement("div");
    T.setAttribute("id", "printable");
    T.append(F);
    document.body.append(T);
  };
  const o = () => {
    document.getElementById("printable")?.remove();
  };
  window.addEventListener("beforeprint", i);
  window.addEventListener("afterprint", o);
  if (ut) {
    const D = () => {
      s = F === 1 && ut && !ct.isOverlayActive;
      r();
      if (e !== window) {
        if (s) {
          window.removeEventListener("resize", r);
          e.addEventListener("resize", r);
        } else {
          e.removeEventListener("resize", r);
          window.addEventListener("resize", r);
        }
      }
    };
    let F;
    window.onImTabChange = b => {
      const P = F !== undefined;
      F = b;
      if (P || F === 1) {
        D();
      }
    };
    ct.addEventListener("change", () => {
      D();
    });
  }
  if (Me && !Jt) {
    document.addEventListener("dragstart", D => {
      const F = D.target;
      if (F.tagName === "IMG" && F.classList.contains("emoji")) {
        zt(D);
        return false;
      }
    });
  }
  if (Jt) {
    document.documentElement.classList.add("native-emoji");
  }
  if (ie) {
    document.documentElement.classList.add("native-scroll");
  } else if (fr) {
    document.documentElement.classList.add("overlay-scroll");
  } else if (_a) {
    document.documentElement.classList.add("custom-scroll");
  }
  document.addEventListener("dragstart", D => {
    if (D.target?.tagName === "IMG") {
      D.preventDefault();
      return false;
    }
  });
  document.addEventListener("contextmenu", D => {
    if (D.target.tagName === "IMG" && !window.appMediaViewer) {
      zt(D);
    }
  });
  if (Me) {
    document.documentElement.classList.add("is-firefox", "no-backdrop");
  }
  if (ie) {
    document.documentElement.classList.add("is-mobile");
  }
  if (Kt) {
    if (J) {
      document.documentElement.classList.add("is-safari");
    }
    if (Te) {
      document.documentElement.classList.add("is-ios");
    } else {
      document.documentElement.classList.add("is-mac");
    }
  } else if (on) {
    document.documentElement.classList.add("is-android");
  }
  if (ge) {
    document.documentElement.classList.add("is-touch");
  } else {
    document.documentElement.classList.add("no-touch");
  }
  if (aa) {
    ca();
  }
  const c = performance.now();
  const a = le.getCacheLangPack();
  const [u, l] = await Promise.all([Zn.sendState().then(([D]) => D), a]);
  le.setTimeFormat(u.state.settings.timeFormat);
  S.managers.rootScope.getPremium().then(D => {
    S.premium = D;
  });
  ar.setThemeListener();
  if (l.appVersion !== x.langPackVersion) {
    le.getLangPack(l.lang_code);
  } else {
    sn();
  }
  S.addEventListener("language_change", () => {
    sn();
  });
  function h(D, F) {
    D.style.opacity = "0";
    F.then(() => {
      window.requestAnimationFrame(() => {
        D.style.opacity = "";
      });
    });
  }
  console.log("got state, time:", performance.now() - c);
  await Bn;
  if (l.lang_code === "ar" || l.lang_code === "fa" && Ir && false) {
    document.documentElement.classList.add("is-rtl");
    document.documentElement.dir = "rtl";
    document.documentElement.lang = l.lang_code;
    le.setRTL(true);
  } else {
    document.documentElement.dir = "ltr";
  }
  let f = u.state.authState;
  const E = location.hash.split("?");
  if (f._ !== "authStateSignedIn") {
    console.log("Will mount auth page:", f._, Date.now() / 1e3);
    const D = document.getElementById("auth-pages");
    let F;
    if (D) {
      F = D.querySelector(".scrollable");
      if (!ge || ze) {
        F.classList.add("no-scrollbar");
      }
      F.style.opacity = "0";
      const P = document.createElement("div");
      P.classList.add("auth-placeholder");
      F.prepend(P);
      F.append(P.cloneNode());
    }
    try {
      await Promise.all([V(() => Promise.resolve().then(() => Vi), undefined, import.meta.url), V(() => Promise.resolve().then(() => Ui), undefined, import.meta.url)]).then(([P, k]) => {
        P.default.setAuthorized(false);
        k.default.forceUnsubscribe();
      });
    } catch {}
    let b;
    switch (f._) {
      case "authStateSignIn":
        b = (await V(() => import("./pageSignIn-CZbpF0sM.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]), import.meta.url)).default.mount();
        break;
      case "authStateSignQr":
        b = (await V(() => import("./pageSignQR-BnxgjuIJ.js").then(P => P.a), __vite__mapDeps([7, 2, 4, 1, 8]), import.meta.url)).default.mount();
        break;
      case "authStateAuthCode":
        b = (await V(() => import("./pageAuthCode-BXyDFdjZ.js"), __vite__mapDeps([9, 2, 0, 1, 3, 4, 5, 6, 7, 8, 10]), import.meta.url)).default.mount(f.sentCode);
        break;
      case "authStatePassword":
        b = (await V(() => import("./pagePassword-g7_rDf4w.js"), __vite__mapDeps([11, 1, 2, 4, 12, 5, 13]), import.meta.url)).default.mount();
        break;
      case "authStateSignUp":
        b = (await V(() => import("./pageSignUp-DSVPh3Y8.js"), __vite__mapDeps([14, 13, 2, 5, 4, 15, 6, 1]), import.meta.url)).default.mount(f.authCode);
        break;
    }
    if (F) {
      if (b) {
        await b;
      }
      const P = "fonts" in document ? Promise.race([ps(1e3), document.fonts.ready]) : Promise.resolve();
      h(F, P);
    }
  } else {
    console.log("Will mount IM page:", Date.now() / 1e3);
    h(document.getElementById("main-columns"), wr());
    (await V(() => import("./pageIm-BYgeW8u4.js"), __vite__mapDeps([17, 2]), import.meta.url)).default.mount();
  }
});
export { Sn as $, x as A, qn as B, ue as C, De as D, Fe as E, K as F, oi as G, it as H, ge as I, ri as J, oc as K, wc as L, Or as M, dn as N, ai as O, ne as P, Wc as Q, xa as R, G as S, ja as T, vc as U, tc as V, Fc as W, ke as X, ga as Y, rt as Z, V as _, S as a, Wa as a$, Ga as a0, Xt as a1, Ba as a2, ar as a3, ae as a4, nr as a5, Pr as a6, L as a7, Ra as a8, Po as a9, Ds as aA, Ci as aB, ds as aC, j as aD, En as aE, Dc as aF, J as aG, on as aH, Xa as aI, vo as aJ, Sr as aK, yr as aL, Ar as aM, da as aN, Ia as aO, jc as aP, Te as aQ, Xo as aR, Xi as aS, xt as aT, es as aU, hc as aV, pc as aW, ic as aX, Jt as aY, Vc as aZ, ac as a_, lt as aa, gc as ab, ni as ac, Fr as ad, Ec as ae, mc as af, Jn as ag, Oa as ah, hs as ai, Vt as aj, ze as ak, is as al, ct as am, ie as an, Kt as ao, Na as ap, ji as aq, vr as ar, Qn as as, Ft as at, Q as au, fa as av, Ac as aw, vi as ax, me as ay, Es as az, Zn as b, ya as b$, Nn as b0, xi as b1, kr as b2, Bc as b3, Ha as b4, Ee as b5, Gt as b6, Gc as b7, rc as b8, ys as b9, Jr as bA, Fn as bB, un as bC, Vn as bD, ut as bE, Ma as bF, Rs as bG, dc as bH, fc as bI, uc as bJ, cc as bK, $s as bL, kc as bM, Nc as bN, Uc as bO, la as bP, Jo as bQ, eo as bR, er as bS, Ue as bT, sr as bU, Gs as bV, $i as bW, Lr as bX, Mr as bY, Ka as bZ, xc as b_, Qr as ba, Cc as bb, sc as bc, ys as bd, Et as be, Bi as bf, xo as bg, Ua as bh, Me as bi, Us as bj, At as bk, _c as bl, ro as bm, Tr as bn, La as bo, ls as bp, Mc as bq, en as br, qa as bs, $a as bt, rr as bu, Ye as bv, bs as bw, Za as bx, Qt as by, Va as bz, _e as c, to as c0, Si as c1, so as c2, vt as c3, Ln as c4, Rc as c5, Lc as c6, Oc as c7, Ic as c8, fr as c9, ln as cA, Pc as ca, Ce as cb, et as cc, an as cd, Pa as ce, Bo as cf, As as cg, pt as ch, ka as ci, Go as cj, Ya as ck, wo as cl, nc as cm, no as cn, Yi as co, Gn as cp, Hi as cq, Mo as cr, fn as cs, _o as ct, Rn as cu, Mn as cv, Ja as cw, Qa as cx, ec as cy, An as cz, yc as d, zt as e, le as f, B as g, rn as h, Ge as i, se as j, or as k, wr as l, ir as m, qt as n, Ta as o, ps as p, Ji as q, bc as r, ei as s, Sc as t, za as u, uo as v, zr as w, Tc as x, yn as y, Kn as z };
//# sourceMappingURL=index-BkeszwBR.js.map