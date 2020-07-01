package actions

import (
	"net/http"

	"github.com/gobuffalo/buffalo"
)

// HelloHandler is a handler to display a hello message
func HelloHandler(c buffalo.Context) error {
	return c.Render(http.StatusOK, r.JSON(map[string]string{"message": "Hello Full Cycle!", "tag": "#euMeComprometo<3", "by": "mayconbj", "feedback": "Curtindo demais a maratona, Go, Docker é xuxuzin! Didática ótima! Conteúdo de primeira! ;) ;) "}))
}
