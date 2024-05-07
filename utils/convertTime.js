
export const convertTime = (str) => {
    const commentDate = new Date(str)

    const currentDate = new Date()

    const difference = currentDate.getTime() - commentDate.getTime()

    const hours = Math.floor(difference / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(weeks / 4)
    const years = Math.floor(months / 12)

    if (hours <= 24) {
        return `${hours} hours ago`
    }
    else if (hours < 168) {
        return `${days} days ago`
    }
    else if (hours < 730) {
        return `${weeks} weeks ago`
    }
    else if (hours < 8760) {
        return `${months} months ago`
    }
    else {
        return `${years} years ago`
    }
}