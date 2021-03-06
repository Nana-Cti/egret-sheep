var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var delicious = (function (_super) {
    __extends(delicious, _super);
    function delicious(sheep) {
        var _this = _super.call(this) || this;
        // readonly foodList:string[] = ["美食_草莓_png", "美食_蔓越莓_png", "美食_吐司_png",  "小吃_png", "美食_png"]
        _this.foodList = [];
        _this.sheep = sheep;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.img_1, _this);
        return _this;
    }
    delicious.prototype.img_1 = function () {
        var _this = this;
        var img_1 = document.createElement("img");
        var texture_1 = new egret.Texture();
        img_1.src = 'data:image/png;base64,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';
        img_1.onload = function () {
            var bitmapdata = new egret.BitmapData(img_1);
            texture_1.bitmapData = bitmapdata;
            _this.foodList.push(texture_1);
            _this.img_2();
        };
    };
    delicious.prototype.img_2 = function () {
        var _this = this;
        var img_2 = document.createElement("img");
        var texture_2 = new egret.Texture();
        img_2.src = 'data:image/png;base64,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';
        img_2.onload = function () {
            var bitmapdata = new egret.BitmapData(img_2);
            texture_2.bitmapData = bitmapdata;
            _this.foodList.push(texture_2);
            _this.img_3();
        };
    };
    delicious.prototype.img_3 = function () {
        var _this = this;
        var img_3 = document.createElement("img");
        var texture_3 = new egret.Texture();
        img_3.src = 'data:image/png;base64,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';
        img_3.onload = function () {
            var bitmapdata = new egret.BitmapData(img_3);
            texture_3.bitmapData = bitmapdata;
            _this.foodList.push(texture_3);
            _this.img_4();
        };
    };
    delicious.prototype.img_4 = function () {
        var _this = this;
        var img_4 = document.createElement("img");
        var texture_4 = new egret.Texture();
        img_4.src = 'data:image/png;base64,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';
        img_4.onload = function () {
            var bitmapdata = new egret.BitmapData(img_4);
            texture_4.bitmapData = bitmapdata;
            _this.foodList.push(texture_4);
            _this.img_5();
        };
    };
    delicious.prototype.img_5 = function () {
        var _this = this;
        var img_5 = document.createElement("img");
        var texture_5 = new egret.Texture();
        img_5.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAPiElEQVR4Xu1ae3hU1bX/7XlnXpnJY5KQhGTOJEEkIQkEJGJ5KyAPFXrVFksL4gWteK9avqLl02tbaqHUr1iVQuHzWikXLV7BRy6v8BKhBZGERHKBzJkEkslrkslM5v045357IuE1SWYmAevF9dd85+y19/r9ztprr7X2ENzmQm5z/PiOgO884J+IAYPBMF4qlb5w9uzZ2bfKrH+aLZCfn/+Q3+/fIZPJtlVWVv7otiIgOzs7OzExsVKr1Qpqa2tn19XVHb5dCBAyDJMuk8n2Tpw4MefYsWP7KysrZ9wq8HSdb2ILiBmGWQLgQQDfI4TEXQbM87wFwDqWZdcC4G8FEbeUAIZhpgH4MyEkm4JTikRIVygQL5HgnM0Gm88XwszzfBnLspQg/80m4ZYRoNfrnyeErCWECNLkcqwuKcGEIUN68PmCQWyqqcGGs2fh5ThKwkqWZdd86wnIycmRchy3jRAyj4J5LCcHLxQXQyoUhsX255oarKmspAScZ1l22LeagJycnGSO48oIISVSgQCvjh2Ludkh7+9VvMEgRu7YgSAfCgEpRqOx9WaScNO2QGZmpkEsFpcTQrJS4+Lw9qRJyI2PjwjL93btQpPbDY7jCk0m05mIlGIcdFMIMBgMo3me30sISWBUKmydPBk6uTwiEwMcF/IAH8fB5/OlX7p0yRyRYoyDBp0AhmHyCCHHACTeKRZh66zZUMtkEZv3WVMTFh0O5UFtRqNRF7FijAMHlQCDwZAJ4O8AhuTHyfC6QorUwlGQJKdEbN6iQ4fwWXMzDYIbWZZdFrFijAMHjQCGYeIJIV8CYAoTErClqBD+6goIFUokjCkFBIJ+TfzL+fP45Zd0CgQ4jss3mUzn+lUa4IDBJGAfIWTasPh4vD9tGhRiMexVFfC2tUCWlg7V8PxeTeV4PnT+/6GqKpT+cRy3wmQyrRsgtojUB4UAvV7/okAgWC0TCvHpjBnIUqlCi/OBAKwnjyPodkGSmIz4gqIbPKHD48HTn3+OE21t3To8v4Fl2acisn4QBg2YgKysrFKhUHiUZnjrhg/Hg4WF15jFe73orDqNQJcdSXdPBJFKe95Xd3Tg8cOH0e71gvC8M8jzT5pMpncHAVfEUwyUABHDMNWEkGH3ScVYPTQD2tF33bg4x4HzeSGQ9dQ9OG2xhKK9wx9K949xHPdDk8lUH7HlgzRwQAQwDLOSEPIqLWZ2pCZB6XZBO6YUInXfCc+J1lbQaP91zv9XlmUX0q0/SJiimiZmAhiGGUoIOQ9A+ofSUtwrFcN+tgoiparbC3rJ9anbP1peDk8wSPf7WpZlfx6VxYM8eCAE/IkQsnR8SgremTw5ZJa9ugLe1haINVqoht0ZOgKvFqPNhvn79sERCFDwb7Is+3S0eFQqVZ5MJvulVCwaFScRpnA84PZz9kAgUOP1epfZbDb26jmzs7PH0T6j3+9fyLKs7fr1YiIgKysrTSQS1QGQfDx9OoZrtd3zBoPorDgFv80KsTYBmuIxPevRImfunj0w2u302U6j0Uirw6iaHjqdbqdSqXyAkPBmcxwHh8Pxfltb2yPp6ekZmZmZe6xW6x1xcXFHKyoqJoYjOyYCGIZ5ixDy5ESZBFvmPnjt0cbzcF+qDx17QoWiZ82V//gHdphM9MtXeTyecWaz2RXN109LS6uRy+V3UJ0RCR7MYVxIlAVDU9TbRThiluOMpfuEcblczcnJycrp06cr9+3b19bZ2ZlXV1fXOSgE5OTkqHmepyWq9C9aFUpKxobA9iXHmpux8NAh2n/r4ng+n2XZi9GA1+l0u1Qq1VypkMPPRlkxKcMTVv1suxirT2rR6hZTonmZTNbmdrvvM5lMlb2tF7UHMAzzHCHk96Pj4/GGVNAd9ErG9Zrq+oNB3FdWhktOJ7VhqdFo3BQNeI1GU6jVaisEAgF+XWrBXanePtXrbEI8dVAHPy9AZ2fnqvb29tV9KURNgMFguAAgZ+3YsZjaZYWv3YK49Ewoh90Zdp13zp/Hr7rz++NGo/HuaMDTsampqdUKhWLEfUOdWDE6rBffMOX280ps+SoeHo+nrbGxsc+KMioC9Hr9BIFAcDhOKMSpefMg5jh0nDwOzuOGNFkHdX4RcFWAooFv/K5d6Oxudo43Go20TI5KsrOzOaFQSDZPbUaWunvP9yddPoL5n6aBnhAdHR3ZnZ2dvSZYURHAMMzvCSHPzdPrsfau7oyP83hgO/MlAi4nksZPAhGLe+zbXFOD33b3946wLBs2Cl8PRqvVPiqTyR7mOE7LcZxUrVaXigUcyh5o6g/3Ne9/sleHRqeYboOn29vb3xyUGMAwzP/StPfN8eMxPZOW/l9LMAjO74fgqsYHrfBKd+4M5fk8z89iWbasLwQajWa5UqlcK5VKe7onPM+DHnnxkgB2zGq5UZ0AqbMXgwhF8LY1wN1ghLu+u4J+6mAyLnRK+o0DEXtAVlaWXiQSsWKBAKfnzYNMJOrzi+xvaMCyo0fpGNZoNOb0deanpKTsVygUUylY+rXzNH5kqwPwBXjsa1BCQHiUzW2EUHCjuUMeXg6p7srH8Lc3oe3gf2P2Fi/sPiGsVuuSjo6OLQP2AL1e/7hAINh8debXFwNLjxxBudlMa/vlJpPpjd7G6nS6rSqVagF9Py3TiWeLrZAIrwCd81EaPEEB1t3ThsLk7ouTqyV+9CQklN5/zbPyo+ew9OXdoWetra1JXV1d7QMmwGAw0OuqFcuGD8fPrit5r5+cXnIUfvAB/BxHXVhXW1vbXexfJ1qttkCj0ZyhR9xcvQPLi27IVPG7UxrsvahAuiqId+7vAP/17dHlqTQlU6Add+11YtHsP8Lh5uB2u1vMZnNqXx8q4i1gMBj+E8CPXxo1Cgvz8vp0/8NmMx4/coTu/WqWZQt6G5yWlnZOLpfn5Wp8eGNSKwRhUlxWkoN/3e4KxYLSgiSs/348nMYqBBxWSJMzoJu+AKL4xJ4llq36EPuPX6Rrw2azPdTe3r5zsAh4HcDyFSNHYumd4c/8yws9d/w4PqoPnTzrjEbjinAGqFSqxOTkZAsFRsEP0954DRg3NA+pc5dg5uK3caE+VENgaJoC761/FMmJ1xZa9N1PX9qJ3UfrQmQ5nc5Tzc3NJX1+qWhuhxmGeZYQ8tqsoUOx/u7e85kLNhtmlpWF8gGe58eyLHvyKiO0MplstkQiSRAIBCMTExMXK8VBfDi7OaydKfcvhJzJp3EEk364GeY2d2gcFwwiO12FMYXp0GdoYWqwYvfhWjg93bWVx+NpamxszIrkcjWaLUC7mlU0CTo8Zw4SwvT66dH344MHcbw1dJv1d6PRWEp/JCYmTnW73ZvcbjdDXZOKQqGgWR6YeB82TgkbIjD0Jy9CqNT0kPPC7/4H2z+tgbCXXkMwGORdLtee1tbWuZGApxNHTAAdbDAYvgAwekZGBv44fnzI1S4LbW7+4uRJ7GtspI/8HMeNoUWIUqn8k9PpXHoZuFAAZGmFcPFxUGhToJMHUPbSSFhP7Kcd0Z75xNpkZCy4cfdYOrowdv7m0No0yAmFQnr56vH5fFstFst/AAgVHZFKVATk5uZu4TluMTVzQloaFuXlgeYFNZ2deL26Gl1+f6gK43n+EZPJ9DeVSvVqV1fXSmrMmAyCVZPEuCOZQCwkuGgX4vHyVPBcEDV7ngFnuYjW3X9F0NUVKqzSHngCsnTDDTi2fXQaL60PBViwLEvTzkCkYMONi5gAhmFyk5KSThJCRG1tbTJCSLj77cZgMPhYXV3dIalUmufz+c5RQxePFuKFiaJrEhn6/LE9KaHS9YmHC/HzpZPAeV1wnK9A3BA9xIlpYXGNm/8WLJ1++vUbzWZzxkDAR7MFSFFRUdWUKVOGHThwYKfNZnudEEJ79+MAqAGcAvC53W5/zWKxdNGJ5XJ5lcvlyr83R4CND0rC2vm2MQXbzojA80Gc+GApErVXGijhFNZsPIhN71WG3N/lci1ramraeEsIyM3NfWbcuHG/qa6u9thsNkO43tp1hqQQQugFH448IUV6fHhHk5dMx/gXKwEihEouRPm7i5GgCX+LvGbjIWzcfho0afJ6vRcbGhpolB+w9LsFMjIy0lNSUqr0er2osrJy2YULF7b1t6parX7Jbre/UpBCsOtHVy5CrtdTF5Tiq7hCLFq5E3RHBYNBlIzQYckjYzB9wjA4nF5s/7gSm977Ah327jzB5/M53G53nsViia487MXofgkoLi4+PmXKlJIDBw58cfr06dCx1p8oFIpPnE7nrH/JF2LNjCvl8fV60tQsDPn+T9HQ1IlZS96F09P31YDL5Tpnt9snOp3OMKVhf1aFf98nAbm5uT8oKCjYVF9f729paSloaGgInXH9iUKh2O10OqcvKBLiV9N6J4D2DrKXXulYPb/6E/zXJ1WQSqU9Zz092z0ezxd+v39le3v7gf7WjvZ9rwTQ626VSmUaNWqU+NixY6vOnTu3PtLJlUrlWw6H48nJjABb5oUPgJfnylryMgSy7uD39t9OYPGKrRR8IBgM9s5cpIZEMK5XAoqKit6fOnXqQ+Xl5ecqKipoQRNxD1+tVs+02+1lcSKgZvtjGFpYBKepGt7mi/BZmuAxm3pMo8kOTXqoTF2wAQc+r4FMJrvg8Xj6rrgiABfJkLAEJCUlqRITE1vi4+M9FovlLpZlaSM0KhGLxQ6/368oLdbj2IfPXqPrvnQBloM7EPS4kLVoFYhYivoGK5gJr4TyfqVS+ZTD4dgQ1YIxDu5rC+TyPF9sMpnej2Xu9PT0jxsbG0N/e//F8pn49fMze52mqdWOEff+FlabAxKJpN3n8yXFsmYsOv2eAtFOmpGREafT6T6SSqWT6+vridlsDv03puCOTLy26gFMu+eKZ5tb7Pi3Vz7Err2V8AcCdO9zcrn8nq6uruPRrhvr+EElQK/XZ2k0ms90Ol1GS0sLLVCWNDQ05Dkcjpepa1ORSSVQq+Lg8wfQabtSt0gkErtYLL7H6XRWxQomFr1BI2D48OHTRCLRLuoBTU1NFofDMbm2tvYrapRarR7r9/u3ud3uG6obiURilUgk7zgcjueiCbSxgA2nMygEFBcXrwoGgy8rlUridrtPW63We3u5jNSq1WoaF0I9LJ7nT3R1dUV9WTJY4Ok8AyLg8n4XCoWTacJCCNlw6tSpf/+m/u0RCzExE3B5v2s0moyOjg6P3+//wdmzZ3fFYsQ3qRMzASNGjGhLSkpKstlsrTabbcKt+FPjzSAqZgJGjhz5jFQqnW+1WufU1tZ2t2y/hRIzAd9CrGFN/o6A/y9fMlYct70H/B+QISmbjtTRAwAAAABJRU5ErkJggg==';
        img_5.onload = function () {
            var bitmapdata = new egret.BitmapData(img_5);
            texture_5.bitmapData = bitmapdata;
            _this.foodList.push(texture_5);
            _this.onAddToStage();
        };
    };
    delicious.prototype.onAddToStage = function () {
        this.food_1 = new egret.Bitmap();
        this.food_1.texture = this.foodList[Math.floor(Math.random() * 5)];
        this.food_1.x = this.stage.stageWidth / 2 - 172;
        this.food_1.y = this.stage.stageHeight - 105;
        this.position = [this.food_1.x, this.food_1.y];
        this.addChild(this.food_1);
        var Appear = egret.Tween.get(this.food_1);
        Appear.to({ y: this.food_1.y - 40 }, 100);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.goBack, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.follow, this);
    };
    delicious.prototype.follow = function (e) {
        this.food_1.x = e.stageX - this.food_1.width / 2;
        this.food_1.y = e.stageY - this.food_1.height / 2;
        if (this.sheep.x > this.food_1.x) {
            this.sheep.scaleX = 0.5;
            this.sheep.x = this.sheep.x - 0.5;
        }
        else if (this.sheep.x < this.food_1.x) {
            this.sheep.scaleX = -0.5;
            this.sheep.x = this.sheep.x + 0.5;
        }
        var neck_bone = this.sheep.armature.getBone("neck_bone");
        neck_bone.offset.rotation = (-(40 / (this.position[1] + 105) * e.stageY) + 30) * Math.PI / 180;
    };
    delicious.prototype.goBack = function (e) {
        var _this = this;
        var Back = egret.Tween.get(this.food_1);
        if (e.stageX > 65 && e.stageX < 420 && e.stageY > 400 && e.stageY < 640) {
            Back.to({}, 100)
                .call(function (scaleX, scaleY) {
                _this.end();
            });
        }
        else {
            Back.to({ x: this.position[0], y: this.position[1] }, 100)
                .call(function () {
                _this.end();
            });
        }
    };
    delicious.prototype.end = function () {
        this.sheep.scaleX = 0.5;
        this.sheep.x = this.stage.stageWidth / 2 + 30;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.goBack, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.follow, this);
        this.removeChildren();
        var neck_bone = this.sheep.armature.getBone("neck_bone");
        neck_bone.offset.rotation = 0;
    };
    return delicious;
}(egret.DisplayObjectContainer));
__reflect(delicious.prototype, "delicious");
//# sourceMappingURL=delicious.js.map