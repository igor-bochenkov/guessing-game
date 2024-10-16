class GuessingGame {
	constructor() {
		this.min;
		this.max;
		this.middle;
	}

	setRange(min, max) {
		this.min = min;
		this.max = max;
	}

	guess() {
		return this.middle = Math.round(this.min + (this.max - this.min) / 2);
	}

	lower() {
		this.max = this.middle;
	}

	greater() {
		this.min = this.middle;
	}
}

module.exports = GuessingGame;
